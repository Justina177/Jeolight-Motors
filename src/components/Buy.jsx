import React from "react";
import { Section } from "./styles/Buy.styled";
import j7 from "../img/j7.jpeg";
import j8 from "../img/j8.jpeg";
import image from "../img/car11-PhotoRoom.png";
import Button from "./Button";
import { Link } from "react-router-dom"

export default function Buy() {
  return (
    <Section>
      <div className="row ">
        <div className="col" id="buy">
          <img src={image} alt="car11" /> 
          <div className="text">
            <h2>
              Buy all brand of <span>Cars</span> and
              <span> Car Parts</span>
              <Link to="/HomeScreen">
              <Button text="Explore More" />
              </Link>
            </h2>
          </div>
        </div>

        <div className="col" id="sell">
          <h2>
            Sell
            <span> Cars And automobile parts </span>
            conviniently
            <Link to="/SellPage">
            <Button text="Find Out More" />
            </Link>
          </h2>
          <img src={j7} alt="" />
        </div>

        <div className="col" id="swap">
          <img src={j8} alt="" />
          <h2>
            Swap <span>Cars</span>
            <Link to="/SwapPage">
            <Button text="Find Out More" />
            </Link>
          </h2>
        </div>
      </div>
    </Section>
  );
}

