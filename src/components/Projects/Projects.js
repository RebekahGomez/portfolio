import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";
import projectsData from "../../assets/data/projects.json";
import "./Projects.css";

const Projects = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const handleDetailsClick = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const goToNext = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < sortedProjects.length) {
      setSelectedProject(sortedProjects[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setSelectedProject(sortedProjects[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  return (
    <div className="projects">
      <div className="projects-container">
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDetailsClick={() => handleDetailsClick(project, index)}
          />
        ))}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
            onNext={goToNext}
            onPrevious={goToPrevious}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
