import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Skills.css";

interface SkillItem {
  name: string;
  subskills?: string[];
  level?: number;
  levelText?: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: SkillItem[];
}

function Skills() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();

  const categories = t("skills.categories", { returnObjects: true }) as SkillCategory[];
  const softSkills = t("skills.softSkills", { returnObjects: true }) as string[];

  return (
    <section id="habilidades" className="habilidades" ref={sectionRef} aria-label={t("skills.tag")}>
      <div className="contenedor">
        <div className="habilidades__header revelar-scroll">
          <span className="etiqueta-seccion">{t("skills.tag")}</span>
          <h2 className="titulo-seccion">{t("skills.title")}</h2>
        </div>

        <div className="habilidades__categories">
          {Array.isArray(categories) &&
            categories.map((category, catIndex) => (
              <div
                className="habilidades__category revelar-scroll"
                key={category.icon || catIndex}
                style={{ transitionDelay: `${catIndex * 0.08}s` }}
              >
                <div className="habilidades__category-header">
                  <span className="habilidades__category-code">{category.icon}</span>
                  <h3 className="habilidades__category-name">{category.category}</h3>
                </div>

                <div className="habilidades__items">
                  {category.skills.map((skill, skillIndex) => {
                    const isAlto = skill.levelText
                      ? skill.levelText.toLowerCase().includes("alto") || skill.levelText.toLowerCase().includes("high")
                      : false;
                    const badgeClass = isAlto ? "nivel-alto" : "nivel-medio";

                    return (
                      <div className="habilidades__item" key={`${category.icon}-${skillIndex}`}>
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
                            <span className={`habilidades__item-level-badge ${badgeClass}`}>
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
                    );
                  })}
                </div>
              </div>
            ))}
        </div>

        <div className="habilidades__soft revelar-scroll">
          <h3 className="habilidades__soft-label">{t("skills.softSkillsTitle")}</h3>
          <p className="habilidades__soft-list">
            {Array.isArray(softSkills) ? softSkills.join(" · ") : ""}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
