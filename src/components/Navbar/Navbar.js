import React from "react";
import "./Navbar.css";
import linkedinIcon from "./linkedin.png";
import githubIcon from "./github.png";
import resumeIcon from "./resume.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Rebekah (Menn) Gomez</h1>
        <p>Developer, Data Visualization, Foodie, NY Transplant</p>
      </div>
      <div className="navbar-links">
        <a
          href="https://www.linkedin.com/in/rebekah-gomez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/RebekahGomez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://docs.google.com/document/d/183-popLnHaRH7F6K3v8ELiv1oVfrA58hq1qFG0pFAa8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={resumeIcon} alt="Resume" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
