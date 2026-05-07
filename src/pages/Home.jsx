import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import projects from '../data/projects';
import Contact from '../components/Contact';

function Home() {
  // Dynamic count from your projects.js file
  const totalProjects = projects.length;

  return (
    <div className="home-container">
      <Hero />

      {/* About & Education Section */}
      <section className="summary">
        <div className="summary-card glass">
          <div className="summary-content">
            <h2>About Me</h2>
            <p style={{textAlign:'justify'}}>
              I am a passionate Computer Science undergraduate specializing in <strong>AI & ML</strong>. 
              I bridge the gap between complex backend logic and user-centric frontend design 
              to deliver intelligent, scalable software.
            </p>
            
            <div className="education-box">
               <h3>Education</h3>
               <div className="edu-item">
                  <span className="edu-icon">🎓</span>
                  <div className="edu-text">
                    <strong>B.Tech in CSE (AI-ML)</strong>
                    <p>Adani University</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">{totalProjects}+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Learning & Building</span>
            </div>
          </div>
        </div>
      </section>

      <Skills />

      {/* Featured Projects Section */}
      <section id="projects" className="featured-projects">
        <div className="section-header">
          <h2>Featured Work</h2>
          <p className="subtitle">A selection of my favorite AI and Web builds</p>
        </div>

        <div className="project-grid-home">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={index}
              to={`/project/${encodeURIComponent(project.title)}`}
              className="project-glass-card"
              state={{ project }}
            >
              <div className="project-card-content">
                <span className="project-index">0{index + 1}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech-mini">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <span className="project-link-hint">Explore Case Study →</span>
              </div>
              <div className="card-glow"></div>
            </Link>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/projects" className="view-all-btn">
            See Entire Portfolio ({totalProjects})
          </Link>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default Home;