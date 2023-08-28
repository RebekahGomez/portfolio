import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button>Details</button>
    </div>
  );
};

export default ProjectCard;
