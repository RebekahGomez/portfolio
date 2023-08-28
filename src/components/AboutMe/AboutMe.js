import React, { useState } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText =
    "Hi, I'm Rebekah Gomez! I'm a passionate developer, avid reader, foodie...";

  const fullText = `Hi, I'm Rebekah Gomez! I'm a passionate developer, avid reader, foodie, and
  bull-terrier mom. With a strong background in JavaScript, React, and
  other web technologies, I'm always eager to take on new challenges and
  create impactful, user-friendly applications. Please take a look at some
  of my favorite projects, and feel free to reach out via LinkedIn!`;

  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        {isExpanded ? fullText : truncatedText}
        <span className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? " Show Less" : " Read More"}
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
