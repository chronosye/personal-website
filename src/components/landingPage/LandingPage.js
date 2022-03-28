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
        CS Student @ <a href="https://www.df.lu.lv/">University of Latvia</a>
      </p>
      <p>
        Goalkeeper @ <a href="https://www.zrhk.lv/">Tenax Dobele</a>
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
