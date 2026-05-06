function ProjectCard({ project }) {
  const thumbnail = project.images && project.images.length > 0 ? project.images[0] : null;

  return (
    <div className="project-card">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={`${project.title} preview`}
          className="project-thumbnail"
        />
      ) : (
        <div className="project-thumbnail-placeholder">
          <span>{project.title.charAt(0)}</span>
        </div>
      )}

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