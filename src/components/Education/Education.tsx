import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Education.css";

function Education() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { education, certifications } = portfolioData;

  return (
    <section id="educacion" className="educacion" ref={sectionRef} aria-label="Educación">
      <div className="contenedor">
        <div className="educacion__header revelar-scroll">
          <span className="etiqueta-seccion">Educación</span>
          <h2 className="titulo-seccion">Formación</h2>
        </div>

        <div className="educacion__columns">
          <div className="educacion__col">
            <h3 className="educacion__col-title revelar-scroll">Académica</h3>
            {education.map((item) => (
              <div className="educacion__item revelar-scroll" key={item.institution}>
                <div className="educacion__item-top">
                  <h4 className="educacion__degree">{item.degree}</h4>
                  <span className="educacion__period">{item.period}</span>
                </div>
                <p className="educacion__institution">{item.institution}</p>
                {item.gpa && (
                  <span className="educacion__detail">GPA {item.gpa}</span>
                )}
                {item.location && (
                  <span className="educacion__detail">{item.location}</span>
                )}
              </div>
            ))}
          </div>

          <div className="educacion__col">
            <h3 className="educacion__col-title revelar-scroll">Certificaciones</h3>
            {certifications.map((cert) => (
              <div className="educacion__item revelar-scroll" key={`${cert.institution}-${cert.title}`}>
                <div className="educacion__item-top">
                  {cert.url ? (
                    <h4 className="educacion__degree">
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="educacion__link">
                        {cert.title} <span className="educacion__link-icon">↗</span>
                      </a>
                    </h4>
                  ) : (
                    <h4 className="educacion__degree">{cert.title}</h4>
                  )}
                  <span className="educacion__period">{cert.year}</span>
                </div>
                <p className="educacion__institution">{cert.institution}</p>
                <span className={`educacion__status ${cert.status === "Completado" ? "educacion__status--done" : ""}`}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
