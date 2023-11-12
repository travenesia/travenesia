import React from "react";
import questn from "../assets/questn.png";
import gitcoin from "../assets/gitcoin.png"
import { BsArrowRight } from "react-icons/bs";

export default function Like() {
  return (
    <div id="impact" className="like">
      <div className="container">              

        <div className="content">
          <div className="image">
            <img src={gitcoin} alt="gitcoin" />
          </div>
          <h2 className="title">Gitcoin Public Goods</h2>
          <p className="description">
          Aethernity allocated 50% of its mint sales to support Fund 
          Public Goods through Gitcoin Grants (GR14) from June 8th to June 23rd.</p>
          <a href="https://twitter.com/travenesia/status/1534867845133516800" target="_blank" rel="noreferrer" className="link">Gitcoin Contributions<BsArrowRight /></a>
          
          <p className="description">
          We raised a total of +5 ETH during our first launch and donated 2.5+ ETH 
          to support some projects on Optimism. We rewarded minters with 
          a distinctive POAP as a token of appreciation for their early support.</p> 
          <a href="https://poap.delivery/aethernity" target="_blank" rel="noreferrer" className="link">
            Visit our POAP Page <BsArrowRight /></a>
          
        </div>

        <div className="content">
          <div className="image">
            <img src={questn} alt="questn" />
          </div>
          <h2 className="title">Join our Quest and Earn Rewards</h2>
          <p className="description">
          In June 2022, We allocated our mint sales fund to support an exciting project in 
          the Layer 2 Ecosystem – QUESTN. We're committing 0.3 ETH + 2055.43 DAI to their matching pool on Gitcoin GR14.
          </p>
          <p className="description">
          Our goal with QuestN is to supercharge our project's growth and bring Web2 users into the world of Web3. 
          Making blockchain more accessible to everyone.
          </p>
          <p className="description">
          Join us in this exciting journey – let's make Web3 accessible and impactful together!
          </p>
          <a href="https://app.questn.com/aethernity" target="_blank" rel="noreferrer" className="link">
            Join our Quest and Earn Rewards <BsArrowRight /></a>
        </div>

        {/*<div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">Free platform for everyone</h2>
          <p className="description">
            The main goal has been always about web3 Social Network Movement,
            and community.
          </p>
          <p className="description">
            A more simplest interactive media for beginners to learn about the Blockchain world. 
            A spamless platform for creators to engage with collectors,
            a bridge from IRL world into the metaverse.
          </p>
        </div>

        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Special Benefits</h2>
          <p className="description">
            Early supporters will have early access to our beta test version before going public.
          </p>
          <p className="description">
            The community will also able to make a direct contribution by writing articles, share their contents
            and get chance to get creator fund supports from the community and our future partnership platform. 
          </p>
        </div>

        */}

      </div>




    </div>
  );
}
