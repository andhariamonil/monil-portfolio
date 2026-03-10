function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <p className="tech">{project.technologies.join(', ')}</p>

      <ul>
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.github}>GitHub</a>
        {project.live && <a href={project.live}>Live</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
