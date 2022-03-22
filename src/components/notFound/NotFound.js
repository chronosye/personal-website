import React from "react";
import classes from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={classes.text}>
      <h1>404</h1>
      <h4>Page not found :(</h4>
    </div>
  );
};

export default NotFound;
