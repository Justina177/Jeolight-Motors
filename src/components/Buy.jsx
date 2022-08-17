import React from "react";
import { Section } from "./styles/Buy.styled";
// import styled from "styled-components";
import j7 from "../img/j7.jpeg";
import j8 from "../img/j8.jpeg";
import image from "../img/car11-PhotoRoom.png";
import Button from "./Button";

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
              <Button text="Explore More" />
            </h2>
          </div>
        </div>
        <div className="col" id="sell">
          <h2>
            Sell
            <span> Cars And automobile parts </span>
            conviniently
            <Button text="Find Out More" />
          </h2>
          <img src={j7} alt="" />
        </div>
        <div className="col" id="swap">
          <img src={j8} alt="" />
          <h2>
            Swap <span>Cars</span>, 
            <Button text="Find Out More" />
          </h2>
        </div>
      </div>
    </Section>
  );
}

// const Section = styled.section`
//   margin: 3rem 5rem;
//   .row {
//     display: flex;
//     gap: 4rem;
//     flex-direction: column;
//     .col {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 2rem;
//       img {
//         height: 60vh
//       }
//       h2 {
//         font-size: 3rem;
//         span {
//           color: var(--primary-color);
//         }
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     margin: 2rem 1rem;
//     .row {
//       gap: 2rem;
//       .col {
//         flex-direction: column;
//         text-align: center;
//         img {
//           height: 10rem;
//         }
//         h2 {
//           font-size: 2.0rem;
//         }
//         &:nth-of-type(2) {
//           flex-direction: column-reverse;
//         }
//       }
//     }
//   }
// `;
