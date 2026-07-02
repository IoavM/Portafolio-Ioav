import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Skills.css";

function Skills() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { skills, softSkills } = portfolioData;

  return (
    <section id="habilidades" className="habilidades" ref={sectionRef} aria-label="Habilidades">
      <div className="contenedor">
        <div className="habilidades__header revelar-scroll">
          <span className="etiqueta-seccion">Habilidades</span>
          <h2 className="titulo-seccion">Stack & Herramientas</h2>
        </div>

        <div className="habilidades__categories">
          {skills.map((category, index) => (
            <div
              className="habilidades__category revelar-scroll"
              key={category.category}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="habilidades__category-header">
                <span className="habilidades__category-code">{category.icon}</span>
                <h3 className="habilidades__category-name">{category.category}</h3>
              </div>

              <div className="habilidades__items">
                {category.skills.map((skill) => (
                  <div className="habilidades__item" key={skill.name}>
                    <div className="habilidades__item-info">
                      <span className="habilidades__item-name">
                        {skill.name}
                        {skill.subskills && (
                          <span className="habilidades__item-subtext">
                            {" "}({skill.subskills.join(", ")})
                          </span>
                        )}
                      </span>
                      {skill.levelText && (
                        <span className={`habilidades__item-level-badge ${skill.levelText.toLowerCase().replace(/\s+/g, '-')}`}>
                          {skill.levelText}
                        </span>
                      )}
                    </div>
                    {skill.level !== undefined && (
                      <div
                        className="habilidades__item-bar"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}: ${skill.levelText || `${skill.level}%`}`}
                      >
                        <div
                          className="habilidades__item-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="habilidades__soft revelar-scroll">
          <h3 className="habilidades__soft-label">Habilidades Blandas</h3>
          <p className="habilidades__soft-list">
            {softSkills.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
