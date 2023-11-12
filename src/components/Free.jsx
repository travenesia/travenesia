import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";
import {  BsTwitter } from "react-icons/bs";

export default function Free() {
  return (
    <div id="tagline" className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Supercharge Your Web3 Journey</h2>
          <p className="description">
          Explore Travenesia's generative art NFT collection <br/>on Optimism and embark on a journey into the world of web3
          </p>
          
          {/* Add Instagram and Twitter logos with links */}
          <div className="social-icons">
            <a
              href="https://twitter.com/travenesia"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-icon"
            >
              <BsTwitter /> {/* Use the BsTwitter component */}
            </a>

            


          </div>
        </div>

        

      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Optimism"
            title="Aethernity"
            price={0.015}
            tag={"365 NFTs"}
            
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Optimism"
            title="Etherea"
            price={0}
            tag="2222"
            
          />
        </div>
       
      </div>
    </div>
  );
}
