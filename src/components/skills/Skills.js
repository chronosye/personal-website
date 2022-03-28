import React from "react";
import classes from "./Skills.module.scss";
import SkillsItem from "./SkillsItem";

const skills = [
  "React.js",
  "HTML",
  "CSS",
  "JS",
  "Java",
  "Spring Boot",
  "Kotlin",
  "Android",
  "Figma",
];

const Skills = () => {
  return (
    <div className={classes.body}>
      <div className={classes.items}>
        {skills.map((item) => (
          <SkillsItem item={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
