import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, onDetailsClick }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} className="project-image" />
      <button onClick={onDetailsClick}>Details</button>
    </div>
  );
};

export default ProjectCard;
