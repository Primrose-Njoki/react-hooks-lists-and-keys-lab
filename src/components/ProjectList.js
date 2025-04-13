import React from "react";
import ProjectItem from "./ProjectItem";  // Import ProjectItem

function ProjectList({ projects }) {
  console.log(projects);  // This will log the list of projects
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Render ProjectItem for each project in the projects array */}
        {projects.map((project) => (
          <ProjectItem
            key={project.id}         // Use the project's id as the key
            project={project}         // Pass the whole project object to ProjectItem
            technologies={project.technologies}  // Pass the technologies array to ProjectItem
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
