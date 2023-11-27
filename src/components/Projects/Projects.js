import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";
import projectsData from "../../assets/data/projects.json";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  return (
    <div className="projects">
      <div className="projects-container">
        {sortedProjects.map((project) => (
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
