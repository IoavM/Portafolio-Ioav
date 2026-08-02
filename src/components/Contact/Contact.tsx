import { useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const CvPreviewModal = lazy(() => import("../CvPreviewModal/CvPreviewModal"));
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();
  const { contact } = portfolioData;
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <section id="contacto" className="contacto" ref={sectionRef} aria-label={t("contact.tag")}>
      <div className="contenedor">
        <div className="contacto__top revelar-scroll">
          <span className="etiqueta-seccion">{t("contact.tag")}</span>
          <h2 className="contacto__headline">
            {t("contact.headline")}
          </h2>
          <p className="contacto__sub">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="contacto__body">
          <div className="contacto__info revelar-scroll">
            <a href={`mailto:${contact.email}`} className="contacto__line">
              <span className="contacto__line-label">{t("contact.email")}</span>
              <span className="contacto__line-value">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contacto__line">
              <span className="contacto__line-label">{t("contact.phone")}</span>
              <span className="contacto__line-value">{contact.phone}</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contacto__line">
              <span className="contacto__line-label">{t("contact.linkedin")}</span>
              <span className="contacto__line-value">Ioav Mizrachi</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contacto__line">
              <span className="contacto__line-label">{t("contact.github")}</span>
              <span className="contacto__line-value">@IoavM</span>
            </a>
          </div>

          <div className="contacto__cta revelar-scroll">
            <button
              className="contacto__preview-btn"
              onClick={() => setIsCvModalOpen(true)}
              type="button"
              aria-label={t("contact.previewCvAria")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              {t("contact.previewCv")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>

            <div className="contacto__downloads">
              <a
                href={contact.cvUrlEs}
                download
                className="contacto__download-link"
                aria-label={t("contact.downloadCvEsAria")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t("contact.downloadCvEs")}
              </a>
              <a
                href={contact.cvUrlEn}
                download
                className="contacto__download-link"
                aria-label={t("contact.downloadCvEnAria")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t("contact.downloadCvEn")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {isCvModalOpen && (
        <Suspense fallback={null}>
          <CvPreviewModal
            isOpen={isCvModalOpen}
            onClose={() => setIsCvModalOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
}

export default Contact;
