import React from 'react';
import projectsData from '../utils/projectsData';
import './Projects.css';
import { FaExternalLinkAlt, FaGithub, FaCode, FaCheckCircle, FaTools, FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  return(
    <section className="projects-section" id="projects">
      <h2>
        <FaProjectDiagram style={{marginRight: '10px', verticalAlign: 'middle', color: '#2563eb'}} />
        My Projects
      </h2>
      <div className="projects-container">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>
              <FaCode style={{marginRight: '8px', verticalAlign: 'middle', color: '#2563eb'}} />
              {project.title}
            </h3>
            <p>{project.description}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Technologies:</strong> {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                <FaTools style={{marginRight: '4px', color: '#60a5fa', fontSize: '1em', verticalAlign: 'middle'}} />
                {tech}
              </span>
            ))}
            </p>
            <p><strong>Status:</strong> <FaCheckCircle style={{marginRight: '4px', color: '#38bdf8', verticalAlign: 'middle'}} /> {project.status}</p>
            <div className="project-links">
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link"><FaExternalLinkAlt style={{marginRight: '6px', verticalAlign: 'middle'}} />Live Site</a>}
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub style={{marginRight: '6px', verticalAlign: 'middle'}} />GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects