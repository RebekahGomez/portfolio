import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose, onNext, onPrevious }) => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="project-modal" onClick={onClose}>
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>
        <button onClick={onPrevious} className="modal-nav-button previous">
          {"<"}
        </button>
        <img src={project.image} alt={project.title} />
        <button onClick={onNext} className="modal-nav-button next">
          {">"}
        </button>
        <p>{project.description}</p>
        <button
          className="project-link"
          onClick={() => handleLinkClick(project.githubLink)}
        >
          GitHub
        </button>
        <button
          className="project-link"
          onClick={() => handleLinkClick(project.deployedLink)}
        >
          Deployed Site
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
