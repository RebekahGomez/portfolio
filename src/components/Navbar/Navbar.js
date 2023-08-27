import React from "react";
import "./Navbar.css";
import linkedinIcon from "./linkedin.png";
import githubIcon from "./github.png";
import resumeIcon from "./resume.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Rebekah Gomez</h1>
        <p>Developer, Foodie, Curious Soul</p>
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
          href="https://docs.google.com/document/d/18b6Nrr27qCe1PMEJwCNp6XHbZPtiT6pd9WYzAv5xXjk/edit?usp=sharing"
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
