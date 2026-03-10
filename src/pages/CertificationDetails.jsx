import { useParams } from 'react-router-dom';
import certifications from '../data/certifications';

function CertificationDetails() {
  const { id } = useParams();
  const cert = certifications[parseInt(id, 10)];

  if (!cert) return <h2>Certification not found</h2>;

  return (
    <section className="certification-details">
      <h1>{cert.title}</h1>
      <p>
        <strong>Issuer:</strong> {cert.issuer}
      </p>
      <p>{cert.description}</p>
    </section>
  );
}

export default CertificationDetails;
