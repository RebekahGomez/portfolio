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
    "Hi, I'm Rebekah Gomez! I'm a passionate developer, avid reader, foodie...";

  const fullText = `Welcome! I'm a passionate developer, avid reader, and New York transplant. With a background in JavaScript, React, and
  other web technologies, I'm motivated to take on new challenges and
  create impactful, user-friendly applications. Thank you for taking the time to look at some of my favorite projects, and feel free to reach out via LinkedIn.`;

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
