import { Link } from 'react-router-dom';
import skills from '../data/skills';

export default function Skills() {
  const categories = Object.keys(skills);

  return (
    <section className="skills">
      <h2>Skill Areas</h2>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to={`/skills/${encodeURIComponent(cat)}`}
            className="skill-category-card skill-category-card--compact"
          >
            <h3 className="skill-category-title">{cat}</h3>

            <div className="skill-card-action">View Skills →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
