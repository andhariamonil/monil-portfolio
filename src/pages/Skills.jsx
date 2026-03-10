import skills from '../data/skills';
import { Link } from 'react-router-dom';

function Skills() {
  const categories = Object.keys(skills);

  return (
    <section className="skills">
      <h2>Skill Areas</h2>

      <div className="skills-grid">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/skills/${cat}`}
            className="skill-category-card"
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Skills;
