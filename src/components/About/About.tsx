import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";

function About() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { about } = portfolioData;

  return (
    <section id="acerca" className="acerca" ref={sectionRef} aria-label="Sobre mí">
      <div className="contenedor">
        <div className="acerca__intro revelar-scroll">
          <span className="etiqueta-seccion">Sobre Mí</span>
          <p className="acerca__lead">{about.description}</p>
        </div>

        <div className="acerca__areas">
          {about.highlights.map((highlight) => (
            <div className="acerca__area revelar-scroll" key={highlight.title}>
              <span className="acerca__area-number">{highlight.icon}</span>
              <div className="acerca__area-content">
                <h3 className="acerca__area-title">{highlight.title}</h3>
                <p className="acerca__area-text">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
