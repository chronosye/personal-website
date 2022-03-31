import React from "react";
import classes from "./Projects.module.scss";
import ProjectsItem from "./ProjectsItem";
import handballSystem from "../../assets/projectImages/handball-system.PNG";
import roadToUni from "../../assets/projectImages/roadToUni.PNG";
import covidInfo from "../../assets/projectImages/covidInfo.PNG";
import vardaDienuApp from "../../assets/projectImages/vardaDienuApp.png";
import personalWebsite from "../../assets/projectImages/personalWebsite.PNG";
import reactClock from "../../assets/projectImages/reactClock.PNG";

const items = [
  {
    image: handballSystem,
    title: "Handball system",
    description:
      "Handball team registration and game protocol system, which helps to organize tournaments and people to watch statistics about the games.",
    technologies: ["Java", "Spring Boot", "H2 database", "Bootstrap", "JS"],
    github:
      "https://github.com/chronosye/Handball-team-registration-and-game-protocol-system",
    playstore: null,
    web: "https://handball-system.herokuapp.com/",
  },
  {
    image: roadToUni,
    title: "Road to university",
    description:
      "A simple website that describes my road to university. Created design in Figma.",
    technologies: ["Java", "Spring Boot", "Bootstrap", "Figma"],
    github: "https://github.com/chronosye/TD",
    playstore: null,
    web: "https://uj18005.herokuapp.com/",
  },
  {
    image: covidInfo,
    title: "Covid isolation info",
    description:
      "A website that shows the user if he needs to isolate himself after traveling, based on vaccination sertificate and country person came from.",
    technologies: ["Java", "Spring Boot", "Bootstrap"],
    github: "https://github.com/chronosye/covidUzzina",
    playstore: null,
    web: "https://celosana-covid-laika.herokuapp.com/",
  },
  {
    image: vardaDienuApp,
    title: "Name day app",
    description:
      "An app, which sends a request to an API to get info about today's name days. Then sends a notification to the user, to inform them about name days.",
    technologies: ["Android", "Kotlin", "Ads", "AlarmManager"],
    github: "https://github.com/chronosye/VardaDienuApp",
    playstore:
      "https://play.google.com/store/apps/details?id=com.uldisj.vardadienuapp",
    web: null,
  },
  {
    image: personalWebsite,
    title: "Personal website",
    description:
      "Personal website. Built to show others who I am, and what I have done before. Shows information about me, my skills, and also my portfolio.",
    technologies: ["React.js", "Sass", "React Router"],
    github: "https://github.com/chronosye/personal-website",
    playstore: null,
    web: "/",
  },
  {
    image: reactClock,
    title: "React Clock",
    description:
      "Minimalistic looking digital clock, created using React.js and Sass.",
    technologies: ["React.js", "Sass", "React Hooks"],
    github: "https://github.com/chronosye/react-clock",
    playstore: null,
    web: null,
  }
];

const Projects = () => {
  document.title = "Projects - Uldis Jansons";
  return (
    <div className={classes.items}>
      {items.map((item) => (
        <ProjectsItem item={item} />
      ))}
    </div>
  );
};

export default Projects;
