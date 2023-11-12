import React from "react";
import logo from "../assets/logo.png";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  const links = [
    {
      title: "Metrics",
      text1: "",
      data: ["Dune"],
      text: ".com/travenesia/Aethernity",
    },
    {
      title: "Community",
      text1: "app.",
      data: ["QuestN"],
      text: ".com/aethernity",
    },
    {
      title: "Social",
      text1: "",
      data: ["Warpcast"],
      text: ".com/travenesia",
    },
  ];
  const socialLink = [
    <a
      href="https://twitter.com/travenesia"
      target="_blank"
      rel="noopener noreferrer"
      className="twitter-icon"
    >
      <BsTwitter />
    </a>,
  ];

  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Built on Layer 2 Blockchain</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data, text, text1 }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((linkText, index2) => (
                    <li key={index2}>
                      <a
                        href={`https://${text1}${linkText}${text}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-hover"
                      >
                        {linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2023</span>
        <span>by Travenesia</span>
      </div>
    </footer>
  );
}
