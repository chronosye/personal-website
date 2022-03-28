import React from "react";
import classes from "./NotFound.module.scss";

const NotFound = () => {
  document.title = "Not found - Uldis Jansons";
  return (
    <div className={classes.text}>
      <p>Page not found :(</p>
    </div>
  );
};

export default NotFound;
