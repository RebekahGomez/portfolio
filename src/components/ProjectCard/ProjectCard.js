import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, onDetailsClick }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={onDetailsClick}>Details</button>
    </div>
  );
};

export default ProjectCard;
