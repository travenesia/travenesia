// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "../interfaces/IOmniseaONFT721Psi.sol";
import "../interfaces/IOmniseaDropsScheduler.sol";
import "../interfaces/IERC2981Royalties.sol";
import "../onft/ONFT721Core.sol";
import {CreateParams, Phase} from "../structs/erc721/ERC721Structs.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "../ERC721Psi/ERC721Psi.sol";
import "../ERC721Psi/extensions/ERC721PsiAddressData.sol";

contract OmniseaONFT721Psi is ONFT721Core, IOmniseaONFT721Psi, ERC721PsiAddressData {
    using Strings for uint256;

    IOmniseaDropsScheduler private immutable _scheduler = IOmniseaDropsScheduler(0xe6BA7158a440D9458fa72DceC0EA128512d0eFfb);

    uint24 public maxSupply;
    string public collectionURI;
    address public dropsManager;
    bool public isZeroIndexed;
    string public tokensURI;
    uint256 endTime;

    constructor(
        CreateParams memory params,
        address _owner,
        address _dropsManagerAddress
    ) ERC721Psi(params.name, params.symbol) ONFT721Core(250000, address(0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7)) {
        dropsManager = _dropsManagerAddress;
        tokensURI = params.tokensURI;
        maxSupply = params.maxSupply;
        collectionURI = params.uri;
        isZeroIndexed = params.isZeroIndexed;
        endTime = params.endTime;
        _setNextTokenId(isZeroIndexed ? 0 : 1);
        owner = _owner;
        royaltyAmount = params.royaltyAmount;
    }

    function contractURI() public view returns (string memory) {
        return string(abi.encodePacked("ipfs://", collectionURI));
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        if (maxSupply == 0 || bytes(tokensURI).length == 0) {
            return contractURI();
        }

        return string(abi.encodePacked("ipfs://", tokensURI, "/", tokenId.toString(), ".json"));
    }

    function mint(address _minter, uint24 _quantity, bytes32[] memory _merkleProof, uint8 _phaseId) external override nonReentrant {
        require(msg.sender == dropsManager);
        require(isAllowed(_minter, _quantity, _merkleProof, _phaseId), "!isAllowed");
        _scheduler.increasePhaseMintedCount(_minter, _phaseId, _quantity);
        _mint(_minter, _quantity);
    }

    function mintPrice(uint8 _phaseId) public view override returns (uint256) {
        return _scheduler.mintPrice(_phaseId);
    }

    function getOwner() external view override returns (address) {
        return owner;
    }

    function isAllowed(address _account, uint24 _quantity, bytes32[] memory _merkleProof, uint8 _phaseId) internal view returns (bool) {
        require(block.timestamp < endTime);
        uint256 _newTotalMinted = totalMinted() + _quantity;
        if (maxSupply > 0) require(maxSupply >= _newTotalMinted);

        return _scheduler.isAllowed(_account, _quantity, _merkleProof, _phaseId);
    }

    function setPhase(
        uint8 _phaseId,
        uint256 _from,
        uint256 _to,
        bytes32 _merkleRoot,
        uint24 _maxPerAddress,
        uint256 _price
    ) external onlyOwner {
        _scheduler.setPhase(_phaseId, _from, _to, _merkleRoot, _maxPerAddress, _price);
    }

    function setTokensURI(string memory _uri) external onlyOwner {
        require(block.timestamp < endTime);
        tokensURI = _uri;
    }

    function preMintToTeam(uint256 _quantity) external onlyOwner {
        require(block.timestamp < endTime);
        if (maxSupply > 0) require(maxSupply >= totalMinted() + _quantity);
        _safeMint(owner, _quantity);
    }

    function setTrustedRemoteAndLimits(
        uint16 _remoteChainId,
        bytes calldata _remoteAddress,
        uint256 _dstChainIdToTransferGas,
        uint256 _dstChainIdToBatchLimit
    ) external onlyOwner {
        require(_dstChainIdToTransferGas > 0 && _dstChainIdToBatchLimit > 0);
        dstChainIdToTransferGas[_remoteChainId] = _dstChainIdToTransferGas;
        dstChainIdToBatchLimit[_remoteChainId] = _dstChainIdToBatchLimit;
        trustedRemoteLookup[_remoteChainId] = abi.encodePacked(_remoteAddress, address(this));
        emit SetTrustedRemoteAddress(_remoteChainId, _remoteAddress);
    }

    function _startTokenId() internal view override returns (uint256) {
        return isZeroIndexed ? 0 : 1;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Psi, ONFT721Core) returns (bool) {
        return interfaceId == type(IOmniseaONFT721Psi).interfaceId || super.supportsInterface(interfaceId);
    }

    function _debitFrom(address _from, uint16, bytes memory, uint _tokenId) internal virtual override {
        require(ownerOf(_tokenId) == _from);
        require(_isApprovedOrOwner(_from, _tokenId));
        transferFrom(_from, address(this), _tokenId);
    }

    function _creditTo(uint16, address _toAddress, uint _tokenId) internal virtual override {
        require(_exists(_tokenId) && ownerOf(_tokenId) == address(this));
        transferFrom(address(this), _toAddress, _tokenId);
    }
}