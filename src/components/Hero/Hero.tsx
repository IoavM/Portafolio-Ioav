import { useState } from "react";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../../data/portfolioData";
import CvPreviewModal from "../CvPreviewModal/CvPreviewModal";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();
  const { personal } = portfolioData;
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

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
            <button
              className="inicio__btn inicio__btn--cv"
              onClick={() => setIsCvModalOpen(true)}
              type="button"
              aria-label={t("hero.previewCvAria")}
            >
              <svg className="inicio__btn-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              {t("hero.previewCv")}
              <svg className="inicio__btn-svg inicio__btn-svg--eye" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
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

      <CvPreviewModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </section>
  );
}

export default Hero;
