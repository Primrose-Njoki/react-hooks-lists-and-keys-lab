
import React from "react";

// 
function ProjectItem({ project }) {
  if (!project) return null; // or return some fallback UI

  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Created on: {project.date}</p>
      <div>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}


export default ProjectItem;
