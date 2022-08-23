import React from "react";
import ProfileImage from "../../assets/profile.png";
import TwoSideGrid from "../layout/TwoSideGrid";
import classes from "./LandingPage.module.scss";

const landingPage = () => {
  const text = (
    <div className={classes.text}>
      <div>
        <h2>Hello!</h2>
      </div>
      <h1>I'm Uldis</h1>
      <p>
        Web Developer
      </p>
    </div>
  );

  const image = (
    <div className={classes.image}>
      <img src={ProfileImage} alt="Profile" />
    </div>
  );

  document.title = "Home - Uldis Jansons";

  return <TwoSideGrid text={text} image={image} />;
};

export default landingPage;
