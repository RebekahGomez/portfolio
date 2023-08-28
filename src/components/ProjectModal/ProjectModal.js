import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="project-modal">
      <button onClick={onClose}>Close</button>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.githubLink}>GitHub</a>
      <a href={project.deployedLink}>Deployed Site</a>
    </div>
  );
};

export default ProjectModal;
