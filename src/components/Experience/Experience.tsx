import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Experience.css";

function Experience() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { experience } = portfolioData;

  return (
    <section id="experiencia" className="experiencia" ref={sectionRef} aria-label="Experiencia profesional">
      <div className="contenedor">
        <div className="experiencia__header revelar-scroll">
          <span className="etiqueta-seccion">Experiencia</span>
          <h2 className="titulo-seccion">Trayectoria Profesional</h2>
        </div>

        <div className="experiencia__list">
          {experience.map((item, index) => (
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

                <ul className="experiencia__tasks" aria-label="Responsabilidades">
                  {item.responsibilities.map((resp, respIndex) => (
                    <li className="experiencia__task" key={respIndex}>
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="experiencia__tags" aria-label="Áreas">
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
