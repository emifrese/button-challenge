import React from "react";

import classes from "./Button.module.css";

const Button = ({
  variant,
  disabledShadow,
  disabled,
  toggle,
  startIcon,
  endIcon,
  size,
  color,
  iconName
}) => {
  let classButton = classes.buttonDefault;
  let style = {};
  let title = '<Button '

  if (typeof variant !== "undefined" && variant !== "") {
    title += `variant="${variant}" `;
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
    title += 'disabledShadow '
    style.boxShadow = "none";
  }

  if (disabled) {
    title += 'disabled '
    style.color = "#9e9e9e";
    style.pointerEvents = 'none'
  }

  if (startIcon) {
    title += `startIcon=${iconName} `
    style.paddingRight = "16px";
  }

  if (endIcon) {
    title += `endIcon=${iconName} `
    style.paddingLeft = "16px";
  }

  if (typeof size !== "undefined" && size !== ""){
    title += `size="${size}" `
    switch (size) {
      case "sm":
        style.width = "73px";
        style.height = "32px";
        style.minWidth = "73px";
        style.minHeight = "32px";
        break;
      case "md":
        style.width = "81px";
        style.height = "36px";
        break;
      case "lg":
        style.width = "93px";
        style.height = "42px";
    }
  }

  if (typeof color !== "undefined" && color !== ""){
    title += `color="${color}" `
    switch (color) {
      case "primary":
        classButton = classes.primary;
        break;
      case "secondary":
        classButton = classes.secondary;
        break;
      case "danger":
        classButton = classes.danger;
        break;
    }
  }


  title += '/>'

  return (
    <div className={classes.buttonContainer}>
      <p className={classes.buttonTitle}>{title}</p>
      <button
        className={classButton}
        style={style}
        onClick={() => {
          if (!disabled) {
            toggle();
          }
        }}
      >
        {startIcon && <img src={startIcon} className={classes.startImg} />}
        Default
        {endIcon && <img src={endIcon} className={classes.endImg} />}
      </button>
    </div>
  );
};

export default Button;
