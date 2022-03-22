import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as Email } from "../../assets/mail.svg";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/ujansons/">
              <LinkedIn className={classes.link} />
            </a>
          </li>
          <li>
            <a href="https://github.com/chronosye">
              <GitHub className={classes.link} />
            </a>
          </li>
          <li>
            <a href="mailto:jansons.uu@gmail.com">
              <Email className={classes.link} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
