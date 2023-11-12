import React from "react";
import home from "../assets/home.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Aethernity</p>
          <h1 className="title">NFT Project on Optimism</h1>
          <p className="description">
            Unlock Web3 on Optimism: Your Gateway to a Faster, Greener Ethereum Experience
          </p>
          {/* Use Link to scroll to the "release1" section when the button is clicked */}
          <Link
            to="tagline"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <button>Discover More</button>
          </Link>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
