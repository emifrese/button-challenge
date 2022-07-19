import React from "react";

import classes from "./ButtonsWrappers.module.css";

const ButtonsWrappers = ({ children }) => {
  return (
    <div className={classes.buttonsWrappers}>
      <h2 className={classes.buttonPageTitle}>Buttons</h2>
      {children}
    </div>
  );
};

export default ButtonsWrappers;
