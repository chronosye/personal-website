import React from "react";
import classes from "./ProjectsItem.module.scss";
import { ReactComponent as Web } from "../../assets/web.svg";
import { ReactComponent as PlayStore } from "../../assets/googlePlay.svg";
import { ReactComponent as Github } from "../../assets/github.svg";

const ProjectsItem = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.item.image} alt={props.item.description} />
      <h3>{props.item.title}</h3>
      <p>{props.item.description}</p>
      <section>
        {props.item.technologies.map((item) => (
          <div className={classes.technology}>{item}</div>
        ))}
      </section>
      <div className={classes.links}>
        <a href={props.item.web}>{props.item.web && <Web className={classes.link}/>}</a>
        <a href={props.item.playstore}>
          {props.item.playstore && <PlayStore className={classes.link}/>}
        </a>
        <a href={props.item.github}>{props.item.github && <Github className={classes.link}/>}</a>
      </div>
    </div>
  );
};

export default ProjectsItem;
