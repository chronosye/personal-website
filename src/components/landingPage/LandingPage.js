import React from "react";
import ProfileImage from "../../assets/profile.png";
import classes from "./LandingPage.module.scss";

const landingPage = () => {
  return (
    <div className={classes.body}>
      <div className={classes.text}>
        <div className="animated fadeIn">
          <h2>Hello!</h2>
        </div>

        <h1>I'm Uldis</h1>
        <p>
          Student @ <a href="https://www.df.lu.lv/">University of Latvia</a>
        </p>
        <p>
          Goalkeeper @ <a href="https://www.zrhk.lv/">Tenax Dobele</a>
        </p>
      </div>
      <div className={classes.profileImage}>
        <img src={ProfileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default landingPage;
