import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Languages.css";

interface LanguageItem {
  language: string;
  level: string;
}

function Languages() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();

  const items = t("languages.items", { returnObjects: true }) as LanguageItem[];

  return (
    <section className="idiomas" ref={sectionRef} aria-label={t("languages.tag")}>
      <div className="contenedor">
        <div className="idiomas__row">
          <div className="idiomas__label revelar-scroll">
            <span className="etiqueta-seccion">{t("languages.tag")}</span>
          </div>

          <div className="idiomas__items">
            {Array.isArray(items) &&
              items.map((lang, index) => (
                <div className="idiomas__item revelar-scroll" key={index}>
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
