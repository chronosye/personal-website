import React from "react";
import classes from "./About.module.scss";
import TwoSideGrid from "../layout/TwoSideGrid";
import AboutImage from "../../assets/aboutMeImage.png";

const About = () => {
  const text = (
    <div className={classes.text}>
      <h1>About me</h1>
      <p>
        I am a programmer from Latvia. Right now I have my final semester at the
        University of Latvia in computer sciences. I like to create UI's that
        are easier to use and also looks great.
      </p>
      <p>
        Trying to pay attention to every single detail and deliver things in
        time. Also, I am trying to help others when they need some help.
      </p>
      <p>
        Besides programming, I am playing handball. But in my free time, I love
        to do other sports - basketball, volleyball, alpine skiing, ice skating.
        In other words, I don't like to sit and do nothing.
      </p>
    </div>
  );

  const image = (
    <div className={classes.image}>
      <img src={AboutImage} alt="About" />
    </div>
  );

  return <TwoSideGrid text={text} image={image} />;
};

export default About;
