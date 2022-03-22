import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
