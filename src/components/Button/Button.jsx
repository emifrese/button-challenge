import React from "react";

import classes from "./Button.module.css";

const Button = ({ variant, disabledShadow, disabled }) => {
  let classButton = classes.buttonDefault;
  let style = {};
  console.log(disabledShadow);

  if (typeof variant !== undefined && variant !== "") {
    switch (variant) {
      case "outline":
        classButton = classes.outlineButton;
        break;
      case "text":
        classButton = classes.textButton;
        break;
    }
  }

  if (disabledShadow) {
    style.boxShadow = "none";
  }

  if(disabled) {
    classButton = classes.disabledButton;
  }

  return (
    <button className={classButton} style={style} disabled={disabled}>
      Default
    </button>
  );
};

export default Button;
