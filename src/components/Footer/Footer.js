import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; Rebekah Gomez 2023</p>
      <p>
        Contact me via{" "}
        <a
          href="https://www.linkedin.com/in/rebekah-gomez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
        <a
          href="https://docs.google.com/document/d/18b6Nrr27qCe1PMEJwCNp6XHbZPtiT6pd9WYzAv5xXjk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </p>
    </footer>
  );
};

export default Footer;
