import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import release3 from "../assets/release3.png";
import release4 from "../assets/release4.png";

import Card from "./Card";

export default function Release() {
  return (
    <div id="nftcollection" className="releases">

      <div className="release red">
        
      <div className="card-container">
          <Card
            image={release3}
            series="ERC-721 Optimism"
            title="Aethernity"
            price={0.015}
            tag="365 NFTs"
            
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Aethernity</h2>
          <p className="description">
          365 unique NFTs, each a masterpiece born from the artistic prowess of @Travenesia, drawing inspiration from the Gregorian calendar and astrological signs, seamlessly blending contemporary and age-old narratives.
          </p>
          <p className="description">
          Unveiled on June 2nd, 2022, Aethernity marks Travenesia's inaugural collection on Optimism, where art meets innovation. Dive into the enchanting world of Aethernity by exploring the dedicated collection page on <a href="https://opensea.io/collection/aethernity" target="_blank" rel="noreferrer">Opensea</a>
          </p>
          <p className="description">Pioneering the Optimism Ecosystem, Aethernity emerged as one of the earliest NFT collections and even graced the spotlight on Optimism's main stage, an ode to its exceptional charm and appeal.</p>
          <a href="https://www.optimism.io/apps/nfts" target="_blank" rel="noreferrer" className="link">
            Find us on Optimism <BsArrowRight />
          </a>
        </div>
      </div>

      
           
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="ERC-721 Optimism"
            title="Etherea"
            price={0.0015}
            tag="2222 NFTs"
            
          />
          <div className="ellipse pink"></div>
        </div>
        <div className="content">
          <h2 className="title">Etherea</h2>
          <p className="description">
          Etherea: A 2222 artwork collection on Optimism Blockchain, inspired by ancient tales, created by Travenesia.
          </p>
          <p className="description">
          Etherea, Travenesia's second generative collection, rewards early Aethernity supporters.
          </p>
          <p className="description">After a successful Aethernity launch, Travenesia welcomes more users with Free Mint and affordable options for newcomers.</p>
          <a href="https://opensea.io/collection/etherea-optimism" target="_blank" rel="noreferrer" className="link">
            Visit Etherea on Opensea <BsArrowRight />
          </a>
        </div>
      </div>

      <div className="release blue">
        <div className="card-container">
          <Card
            image={release4}
            series="ERC-721 Base"
            title="Queendom"
            price={0}
            tag="5000 NFTs"
            
          />
          <div className="ellipse light-blue"></div>
        </div>
        <div className="content">
          <h2 className="title">Queendom</h2>
          <p className="description">
          Introducing the "Queendom Collection," a celebratory release in honor of the Base Mainnet and Onchain Summer. 
          </p>
          <p className="description">
          This collection comprises 5000 NFTs, and all eligible holders have the opportunity to mint them for free. 
          </p>
          <p className="description">The Queendom Collection serves as a bridge, attracting new users from Layer 1 to the OP stack, the Base Mainnet ecosystem.</p>
          <a href="https://mint.fun/base/0x1B7Cfab777C7EEe43b5cba4Fcc350E4e99232eD6" target="_blank" rel="noreferrer" className="link">
            Visit Queendom on Mint.Fun <BsArrowRight />
          </a>
        </div>
      </div>

    </div>
  );
}
