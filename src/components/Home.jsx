import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { RiGroupLine } from "react-icons/ri";
import img1 from "../img/j2-PhotoRoom copy.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    
    <Section id="home">
      <div className="text">
        <h1>
          <span className="highlight">Jeolight Motors</span> lets us find the car for you today!
        </h1>
        <p>
          Where you can buy, sell and swap cars conviently, <span className="highlight"> jeolight motors </span>
          help you
          <span className="highlight"></span>
          by trading cars, finding cars of your choice and enjoy the convience of 
          online deals. Let us take your business into the digital world. Welcome!
        </p>
        <Link to="/HomeScreen">
        <Button text="Find Out More" icon={<RiGroupLine />} />
        </Link>
      </div>
      <div className="image">
      <img src={img1} alt="" />
      </div>
    </Section>
  );
}


  


export const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;

  .image {
    img {
      width: 100%;
    }
  }

  .text {
    padding-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .highlight {
      color: var(--primary-color);
    }

    h1 {
      font-size: 4.8vw;
    }

    p {
      font-size: 1.5vw;
    }
  }

  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;
    .image {
      img {
        width: 50%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 2vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;