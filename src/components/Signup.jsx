import React from "react";
import signup from "../assets/signup.png";

export default function Signup() {
  return (
    <div id="questn" className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Join The Adventure</p>
          <h1 className="title">Do Quest and Earn Rewards</h1>
          <p className="description">
            Explore Simple and Fun Quests on Optimism!
            Visit our Quest Page to Participate in Live Missions, Win Rewards, and Grow Together with Our Community.
          </p>
          {/* Use an anchor element with target="_blank" */}
          <a
            href="https://app.questn.com/aethernity" // Replace with your actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>EXPLORE QUESTS</button>
          </a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
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
