import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectsData from "../../assets/data/projects.json";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
