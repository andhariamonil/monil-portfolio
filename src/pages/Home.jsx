import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import projects from '../data/projects';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />

      <section className="summary">
        <div className="summary-card">
          <h2>About</h2>
          <p>
            I am a passionate Computer Science undergraduate specializing in AI
            & ML, with experience in building web and AI-based applications. I
            enjoy creating scalable, user-friendly solutions and continuously
            learning new technologies to deliver impactful software.
          </p>
        </div>
      </section>

      <Skills />

      <section id="projects" className="projects">
        <h2>Highlighted Projects</h2>

        <p className="projects-note">
          Here are some selected projects. Visit the full projects section to
          explore all my work.
        </p>

        <div className="project-list">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={index}
              to={`/project/${encodeURIComponent(project.title)}`}
              className="project-name-card"
              state={{ project }}
            >
              <span className="project-title">{project.title}</span>

              <span className="project-card-action">View Project →</span>
            </Link>
          ))}
        </div>

        <div className="view-all-projects">
          <Link to="/projects" className="view-projects-btn">
            View All Projects →
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Home;
