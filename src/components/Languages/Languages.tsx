import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Languages.css";

function Languages() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { languages } = portfolioData;

  return (
    <section className="idiomas" ref={sectionRef} aria-label="Idiomas">
      <div className="contenedor">
        <div className="idiomas__row">
          <div className="idiomas__label revelar-scroll">
            <span className="etiqueta-seccion">Idiomas</span>
          </div>

          <div className="idiomas__items">
            {languages.map((lang) => (
              <div className="idiomas__item revelar-scroll" key={lang.language}>
                <span className="idiomas__name">{lang.language}</span>
                <span className="idiomas__sep" aria-hidden="true" />
                <span className="idiomas__level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
