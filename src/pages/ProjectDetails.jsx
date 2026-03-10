import { useLocation, useParams } from 'react-router-dom';
import projects from '../data/projects';

function ProjectDetails() {
  const { title } = useParams();
  const location = useLocation();

  const stateProject = location.state && location.state.project;
  const decodedTitle = decodeURIComponent(title);
  const fallbackProject = projects.find((p) => p.title === decodedTitle);
  const project = stateProject || fallbackProject;

  if (!project) return <h2>Project not found</h2>;

  return (
    <section className="project-details">
      <h1>{project.title}</h1>

      <p className="desc">{project.description}</p>

      {project.technologies && project.technologies.length > 0 && (
        <>
          <h3>Technologies</h3>
          <div className="tech-list">
            {project.technologies.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </>
      )}

      {project.features && project.features.length > 0 && (
        <>
          <h3>Features</h3>
          <ul>
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="project-screenshots">
          {project.screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Open Repository→
          </a>
        )}

        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetails;
