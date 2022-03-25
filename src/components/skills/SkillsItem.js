import React from "react";
import classes from "./SkillsItem.module.scss";

const SkillsItem = (props) => {
  return (
    <div>
      <p className={classes.skillItem}>{props.item}</p>
    </div>
  );
};

export default SkillsItem;
