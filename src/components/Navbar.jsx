import React, { useState } from 'react'
import { Nav } from "./styles/Navbar.styled";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom"


export default function Navbar() {
    const [navState, setNavState] = useState(false);
  return (
   
          <Nav>
          <div className="brand">
                      <a href="/"><h1><span className="highlight">Jeolight</span> Motors</h1></a>
              <div className="toggle">
                  {navState ? (
                      <BsToggleOn onClick= {()  => setNavState(false)} />

                  ): (
                      <BsToggleOff onClick= {() => setNavState(true)} />
                  )}
              </div>
          </div>
          <div className={`links ${navState ? "show" : "hide"}`}>
              <ul>
                  <li>
                      <a href="#home">Home</a>
                  </li>
                  {/* <li>
                      <a href="#ourservices">Our Services</a>
                  </li> */}
                  <li>
                      <a href="#buy">Buy</a>
                  </li>
                  <li>
                      <a href="#sell">Sell</a>
                  </li>
                  <li>
                      <a href="#blogs">News</a>
                  </li>
                  <li>
                      <a href="#swap">Swap</a>
                  </li>
              </ul>
              <div className="login-btn">
                  <Link to="/login/Login">
                  <button>
                      <FiLock /> Login & Registration
                  </button>
                  </Link>

              </div>
          </div>
        </Nav>
   
    
  );
}

