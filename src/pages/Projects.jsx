import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/project/${encodeURIComponent(project.title)}`}
            className="project-name-card"
            state={{ project }}
          >
            {project.title}
            {project.github && (
              <span className="project-tag">GitHub</span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
