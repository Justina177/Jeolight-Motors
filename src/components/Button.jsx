import React from "react";
import { Btn } from "./styles/Button.styled";
import { BsArrowRightShort } from "react-icons/bs";
export default function Button(props) {
  let { icon, text } = props;
  if (icon === undefined) icon = <BsArrowRightShort />;
  return (
    <Btn>
      {icon}
      {text}
    </Btn>
  );
}

