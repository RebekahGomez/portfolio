import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncatedText =
    "Welcome! I'm a passionate developer, avid reader, and New York...";

  const fullText = `Welcome! I'm a passionate developer and data analyst. With a background in JavaScript, React, Python and
  other web technologies, I'm motivated to take on new challenges and create impactful, user-friendly applications.
  Data Analysis excites me the most; I love finding outliers in a dataset and bringing those discoveries to life with visualizations using Tableau.
  Thank you for taking the time to look at some of my favorite projects, and feel free to reach out via LinkedIn.`;

  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        {isExpanded || windowWidth > 480 ? fullText : truncatedText}
        {windowWidth <= 480 && (
          <span
            className="read-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? " Show Less" : " Read More"}
          </span>
        )}
      </p>
    </div>
  );
};

export default AboutMe;
