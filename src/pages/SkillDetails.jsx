import { useParams } from "react-router-dom";
import skills from "../data/skills";

function SkillDetails() {

  const { category } = useParams();
  const skillData = skills[category];

  if (!skillData) return <h2>No skills found</h2>;

  return (
    <section className="skill-details">
      <div className="skill-header">
        <h1>{category}</h1>
        <p className="skill-description">{skillData.description}</p>
      </div>
      <div className="skill-list">
        {skillData.details.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillDetails;