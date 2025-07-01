import React from 'react';
import { projects } from '../data/projects';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
            <a href={project.live} target="_blank">Live Site</a>
            <a href={project.github} target="_blank">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
