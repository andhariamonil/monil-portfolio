import certifications from "../data/certifications";

function getPlatformInitials(issuer) {
  if (!issuer) return "?";
  return issuer
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function Certifications() {
  return (
    <section className="certifications">
      <h2>Certifications</h2>

      <div className="certification-list">
        {certifications.map((cert, idx) => (
          <div key={idx} className="certification-card">
            <div className="certification-logo">
              {getPlatformInitials(cert.issuer)}
            </div>
            <span className="certification-platform">{cert.issuer}</span>
            <span className="certification-title">{cert.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
