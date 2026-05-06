import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import projects from '../data/projects';

function ProjectDetails() {
  const { title } = useParams();
  const location = useLocation();

  const stateProject = location.state && location.state.project;
  const decodedTitle = decodeURIComponent(title);
  const fallbackProject = projects.find((p) => p.title === decodedTitle);
  const project = stateProject || fallbackProject;

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const hasImages = project && project.images && project.images.length > 0;

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () =>
    setLightboxIndex((prev) => (prev + 1) % project.images.length);

  const goPrev = () =>
    setLightboxIndex((prev) =>
      (prev - 1 + project.images.length) % project.images.length
    );

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

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

      {hasImages ? (
        <div className="project-screenshots">
          {project.images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx + 1}`}
              onClick={() => openLightbox(idx)}
              style={{ cursor: 'zoom-in' }}
            />
          ))}
        </div>
      ) : (
        <div className="project-screenshots-placeholder">
          <span>No screenshots available</span>
        </div>
      )}

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Open Repository →
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

            <button className="lightbox-close" onClick={closeLightbox}>✕</button>

            {project.images.length > 1 && (
              <button className="lightbox-arrow lightbox-arrow--left" onClick={goPrev}>
                &#8592;
              </button>
            )}

            <img
              src={project.images[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              className="lightbox-img"
            />

            {project.images.length > 1 && (
              <button className="lightbox-arrow lightbox-arrow--right" onClick={goNext}>
                &#8594;
              </button>
            )}

            {project.images.length > 1 && (
              <p className="lightbox-counter">
                {lightboxIndex + 1} / {project.images.length}
              </p>
            )}

          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;