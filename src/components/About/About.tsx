import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./About.css";

interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

function About() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();

  const highlights = t("about.highlights", { returnObjects: true }) as HighlightItem[];

  return (
    <section id="acerca" className="acerca" ref={sectionRef} aria-label={t("about.tag")}>
      <div className="contenedor">
        <div className="acerca__intro revelar-scroll">
          <span className="etiqueta-seccion">{t("about.tag")}</span>
          <p className="acerca__lead">{t("about.description")}</p>
        </div>

        <div className="acerca__areas">
          {Array.isArray(highlights) &&
            highlights.map((highlight) => (
              <div className="acerca__area revelar-scroll" key={highlight.icon}>
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
