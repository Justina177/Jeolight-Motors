import React from "react";
import { Section } from "./styles/News.styled";
import j1 from "../img/j1.jpeg";
import j3 from "../img/j3.jpeg";
import j4 from "../img/j4.jpeg";

export default function Blogs() {
  const images = [j1, j3, j4];
  return (
    <Section id="blogs">
      <div className="title">
        <h2>News & Blogs</h2>
        <h5>Where you can buy and sell cars</h5>
      </div>
      <div className="blogs">
        {images.map((img, index) => {
          return (
            <div className="blog" key={index}>
              <img src={img} alt="j1" />
              <div className="data">
                <h6>31 July, 2022</h6>
                <h4>Jeolight Motors Now Offering Promo Deal</h4>
                <p>
                  Jelight Motors is now offering an option that enables dealers 
                  have their store shifted toward virtual showrooms and online sales 
                  to make their car inventories more accessible to everyone anywhere 
                  in the world at an affordable price.                   
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

