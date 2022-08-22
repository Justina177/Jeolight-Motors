import React, { useState } from "react";
// import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Div } from "./styles/ScrollToTop.styled";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <Div>
      <a href="#top" className={`${visible ? "block" : "none"}`}>
        <AiOutlineArrowUp />
      </a>
    </Div>
  );
}

