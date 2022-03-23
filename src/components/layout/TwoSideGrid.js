import React from "react";
import classes from "./TwoSideGrid.module.scss";

const TwoSideGrid = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.text}>{props.text}</div>
      <div className={classes.image}>{props.image}</div>
    </div>
  );
};

export default TwoSideGrid;
