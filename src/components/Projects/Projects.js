import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";
import projectsData from "../../assets/data/projects.json";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      {/* <h2>My Projects</h2> */}
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDetailsClick={() => handleDetailsClick(project)}
          />
        ))}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Projects;
