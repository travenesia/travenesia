import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";



export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "ERC-721 Optimism",
      title: "Aethernity",
      price: 0.015,
      tag: "365 NFTs",
      
    },
    {
      image: super2,
      series: "ERC-721 Optimism",
      title: "Etherea",
      price: 0,
      tag: 2222,
      
    },
    {
      image: super3,
      series: "ERC-721 Optimism",
      title: "Aetherwarden",
      price: 0,
      tag: 3333,
      
    },
    {
      image: super4,
      series: "ERC-721 Base",
      title: "Queendom",
      price: 0,
      tag: 5000,
      
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Learn, Create, Connect, Engage, Giveback</h2>
        <p className="description">
          Thanks to the early supporters, Let's grow and supercharge!
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
