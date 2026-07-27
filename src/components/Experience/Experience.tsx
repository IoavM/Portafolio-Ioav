import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Experience.css";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

function Experience() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();

  const items = t("experience.items", { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experiencia" className="experiencia" ref={sectionRef} aria-label={t("experience.tag")}>
      <div className="contenedor">
        <div className="experiencia__header revelar-scroll">
          <span className="etiqueta-seccion">{t("experience.tag")}</span>
          <h2 className="titulo-seccion">{t("experience.title")}</h2>
        </div>

        <div className="experiencia__list">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <article
                className="experiencia__entry revelar-scroll"
                key={`${item.company}-${index}`}
              >
                <div className="experiencia__meta">
                  <span className="experiencia__period">{item.period}</span>
                  <span className="experiencia__company">{item.company}</span>
                </div>

                <div className="experiencia__body">
                  <h3 className="experiencia__role">{item.role}</h3>
                  <p className="experiencia__description">{item.description}</p>

                  <ul className="experiencia__tasks" aria-label={t("experience.responsibilities")}>
                    {item.responsibilities.map((resp, respIndex) => (
                      <li className="experiencia__task" key={respIndex}>
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="experiencia__tags" aria-label={t("experience.areas")}>
                    {item.tags.map((tag) => (
                      <span className="experiencia__tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
