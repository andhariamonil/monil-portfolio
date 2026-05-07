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
  const [showAllImages, setShowAllImages] = useState(false); // Toggle for gallery

  const hasImages = project && project.images && project.images.length > 0;
  
  // Decide which images to show
  const displayedImages = showAllImages ? project.images : project.images?.slice(0, 3);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => setLightboxIndex((prev) => (prev + 1) % project.images.length);
  const goPrev = () => setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

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

  if (!project) return <h2 className="error-msg">Project not found</h2>;

  return (
    <section className="project-details">
      <header className="project-header">
        <span className="project-category-tag">Featured Project</span>
        <h1>{project.title}</h1>
      </header>

      <div className="project-intro-grid">
        <div className="project-vision">
          <h3>The Vision</h3>
          <p className="desc" style={{textAlign:'justify'}}>{project.description}</p>
        </div>
        
        <div className="project-tech-stack">
          <h3>Tech Stack</h3>
          <br></br>
          <div className="tech-chips-container">
            {project.technologies?.map((t, i) => (
              <div key={i} className="tech-chip">
                <span className="chip-dot"></span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-section">
        <h3>Key Features & Functionality</h3>
        <div className="features-grid">
          {project.features?.map((f, i) => (
            <div key={i} className="feature-item-card">
              <span className="feature-icon">✦</span>
              <p>{f}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="project-story">
  <h3>Challenges & Solutions</h3>
  <br></br>
  <div className="story-content">
    <div className="story-item">
      <strong>The Challenge:</strong>
      <p style={{textAlign:'justify'}}>{project.challenges || "Developing a robust architecture that balances performance with clean code and user accessibility."}</p>
    </div>
    <div className="story-item" style={{ marginTop: '15px' }}>
      <strong>The Solution:</strong>
      <p>{project.solutions || "Implementing modern development patterns and optimizing critical paths to ensure a seamless experience."}</p>
    </div>
  </div>
</div>

      <div className="gallery-header">
        <h3>Gallery</h3>
        <div className="header-line"></div>
      </div>

      {hasImages ? (
        <>
          <div className="project-screenshots">
            {displayedImages.map((src, idx) => (
              <div className="screenshot-wrapper" key={idx} onClick={() => openLightbox(idx)}>
                 <img src={src} alt="Screenshot" />
                 <div className="zoom-overlay"><span>🔍 View Fullscreen</span></div>
              </div>
            ))}
          </div>
          
          {project.images.length > 3 && (
            <div className="gallery-controls">
              <button 
                className="view-more-btn" 
                onClick={() => setShowAllImages(!showAllImages)}
              >
                {showAllImages ? "Show Less ↑" : `View All Images (${project.images.length}) ↓`}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="project-screenshots-placeholder">
          <div className="placeholder-content">
            <span className="placeholder-emoji">📸</span>
            <p>Visuals coming soon!</p>
          </div>
        </div>
      )}

      <div className="project-links">
        {project.github && (
          <a href={project.github} className="btn-link" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        )}
        {project.live && (
          <a href={project.live} className="btn-link btn-primary" target="_blank" rel="noopener noreferrer">
            Live Demo →
          </a>
        )}
      </div>

      {/* Lightbox - Logic remains identical */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            {project.images.length > 1 && <button className="lightbox-arrow left" onClick={goPrev}>&#8249;</button>}
            <img src={project.images[lightboxIndex]} alt="Enlarged" className="lightbox-img" />
            {project.images.length > 1 && <button className="lightbox-arrow right" onClick={goNext}>&#8250;</button>}
            <p className="lightbox-counter">{lightboxIndex + 1} / {project.images.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;