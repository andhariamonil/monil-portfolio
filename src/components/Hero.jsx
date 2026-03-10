import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Web &amp; AI Developer </p>

      <h1>
        Hi, I'm <span>Monil Andharia</span>
      </h1>

      <p>
        Full Stack Software Engineer building scalable web applications with
        modern technologies, while leveraging AI and machine learning to create
        intelligent and data-driven solutions.
      </p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn">
          View Projects
        </Link>
        <Link to="/contact" className="btn-outline">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Hero;
