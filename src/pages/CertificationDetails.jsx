import { useParams, Link } from 'react-router-dom';
import certifications from '../data/certifications';

function CertificationDetails() {
  const { id } = useParams();
  const cert = certifications[parseInt(id, 10)];

  if (!cert) {
    return (
      <div className="error-container">
        <h2>Certification not found</h2>
        <Link stroke to="/certifications">Back to List</Link>
      </div>
    );
  }

  return (
    <section className="certification-details-container">
      <header className="details-header">
        <div className="header-content">
          <div className="certification-logo-large">
             {/* Fallback to first letter if no image exists */}
            {cert.image ? <img src={cert.image} alt={cert.title} /> : cert.issuer[0]}
          </div>
          <div className="title-group">
            <h1 className="certification-title-large">{cert.title}</h1>
            <p className="certification-platform-tag">{cert.issuer}</p>
          </div>
        </div>
      </header>

      <div className="details-grid">
        <aside className="details-sidebar">
          <div className="sidebar-card">
            <h3>Metadata</h3>
            <p><strong>Issued:</strong> {cert.date || "January 2024"}</p>
            <p><strong>Credential ID:</strong> {cert.credentialId || "N/A"}</p>
            <a href={cert.link} target="_blank" rel="noreferrer" className="verify-button">
              Verify Credential
            </a>
          </div>
        </aside>

        <main className="details-main">
          <h3>Description</h3>
          <p className="description-text">{cert.description}</p>
          
          <h3>Skills Acquired</h3>
          <div className="skills-tags">
            {/* Logic to map through skills if you add them to your data */}
            {cert.skills?.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            )) || <span>General Proficiency</span>}
          </div>
        </main>
      </div>
    </section>
  );
}

export default CertificationDetails;