import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>

      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            {/* Use Link from react-scroll with the 'to' attribute set to the section ID */}
            <Link
              to="nftcollection"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70} // Adjust the offset as needed to account for the height of your Navbar
            >
              NFTs
            </Link>
          </li>
          <li>
            <Link
              to="impact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Impact
            </Link>
          </li>
          <li>
            <Link
              to="questn"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Quest
            </Link>
          </li>

          <li>
            <a
              href="https://www.bonfire.xyz/travenesia/mint"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
              style={{
                background: 'red',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '5px',
                textDecoration: 'none',
                transition: 'background 0.3s, color 0.3s', // Add a smooth transition
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'white'; // Change background color on hover
                e.target.style.color = 'red';        // Change text color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'red';   // Restore background color
                e.target.style.color = 'white';     // Restore text color
              }}
            >
              New Mints
            </a>
          </li>
          
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
