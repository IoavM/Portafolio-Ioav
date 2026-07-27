import { useTranslation } from "react-i18next";
import { portfolioData } from "../../data/portfolioData";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();
  const { personal, contact } = portfolioData;

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="inicio" aria-label="Presentación principal">
      <div className="inicio__bg-elements" aria-hidden="true">
        <div className="inicio__orb inicio__orb--primary" />
        <div className="inicio__orb inicio__orb--secondary" />
        <div className="inicio__grid" />
      </div>

      <div className="inicio__content contenedor">
        <div className="inicio__text">
          <p className="inicio__greeting">{t("hero.greeting")}</p>
          <h1 className="inicio__name">{personal.name}</h1>
          <p className="inicio__title">{t("hero.title")}</p>
          <p className="inicio__subtitle">{t("hero.subtitle")}</p>
          <div className="inicio__location">
            <span>{t("hero.location")}</span>
          </div>

          <div className="inicio__actions">
            <button
              className="inicio__btn inicio__btn--primary"
              onClick={() => handleScrollTo("proyectos")}
              type="button"
            >
              {t("hero.viewProjects")}
              <span className="inicio__btn-arrow" aria-hidden="true">→</span>
            </button>
            <a
              className="inicio__btn inicio__btn--secondary"
              href={contact.cvUrl}
              download
              aria-label={t("hero.downloadCvAria")}
            >
              {t("hero.downloadCv")}
              <span className="inicio__btn-icon" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="inicio__visual" aria-hidden="true">
          <div className="inicio__card">
            <div className="inicio__card-header">
              <span className="inicio__card-dot inicio__card-dot--red" />
              <span className="inicio__card-dot inicio__card-dot--yellow" />
              <span className="inicio__card-dot inicio__card-dot--green" />
            </div>
            <div className="inicio__card-body">
              <code className="inicio__code">
                <span className="inicio__code-keyword">const</span>{" "}
                <span className="inicio__code-var">developer</span>{" "}
                <span className="inicio__code-op">=</span> {"{"}
                <br />
                {"  "}
                <span className="inicio__code-key">name</span>:{" "}
                <span className="inicio__code-string">"{personal.name}"</span>,
                <br />
                {"  "}
                <span className="inicio__code-key">role</span>:{" "}
                <span className="inicio__code-string">"{t("hero.codeRole")}"</span>,
                <br />
                {"  "}
                <span className="inicio__code-key">passion</span>:{" "}
                <span className="inicio__code-string">"{t("hero.codePassion")}"</span>,
                <br />
                {"  "}
                <span className="inicio__code-key">available</span>:{" "}
                <span className="inicio__code-bool">true</span>
                <br />
                {"}"};
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="inicio__scroll-indicator" aria-hidden="true">
        <span className="inicio__scroll-text">Scroll</span>
        <span className="inicio__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
