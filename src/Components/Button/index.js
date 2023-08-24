import React from "react";
import style from "./button.module.css";

export default function Button(props) {
  let buttonType = props.variant ? style[props.variant] : style.plain;
  const isButtonDisabled = props.disabled ? props.disabled : false;

  return (
    <button onClick={props.onClick} className={`${isButtonDisabled ? style.disable_button : style.button} ${buttonType}`} disabled={isButtonDisabled} >
      {props.children}
    </button>
  );
}
