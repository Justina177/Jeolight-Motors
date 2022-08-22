import React from "react";
import Button from "./Button";
import { Footr } from "./styles/Footer.styled";
// import { Link } from "react-router-dom"


export default function Footer() {
  const links = [
    { title: "Company", links: ["Home", "Our services", "About", "News"] },
    {
      title: "Quick Links",
      links: [
        "Featured Cars",
        "Careers",
        "Terms & Conditions",
        "contact Us",
      ],
    },
    {
      title: "Contact",
      links: [
        "+234-8132222062",
        "jeolightmotors@gmail.com",
        `Karu Round-About, Karu-Site, Abuja
      `,
      ],
    },
  ];
  return (
    <Footr>
      <div className="upper__footer">
        <div className="brand">
          <p>
          Get connected to your wide range of customer, <br/>
          get recognize and grow your business
          </p>  
          <div className="mail-container">
            <input type="email" placeholder="Enter Email" />
            <Button text="Get Started" />
          </div>
        </div>
        {links.map(({ title, links }) => {
          return (
            <div className="links" key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="lower__footer">
        <span>&copy; 2022 Jeolight</span>
        <ul>          
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://linkedin.com">Linkedin</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </Footr>
  );
}

