import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../../data/portfolioData";
import "./CvPreviewModal.css";

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CvPreviewModal({ isOpen, onClose }: CvPreviewModalProps) {
  const { t, i18n } = useTranslation();
  const { contact } = portfolioData;
  const currentLang = i18n.language || "es";

  const [activeLang, setActiveLang] = useState<"es" | "en">(
    currentLang.startsWith("en") ? "en" : "es"
  );
  const [loading, setLoading] = useState(true);

  const cvUrl = activeLang === "en" ? contact.cvUrlEn : contact.cvUrlEs;

  // Sync tab with site language when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveLang(currentLang.startsWith("en") ? "en" : "es");
      setLoading(true);
    }
  }, [isOpen, currentLang]);

  // Reset loading when switching tabs
  const handleTabChange = (lang: "es" | "en") => {
    if (lang !== activeLang) {
      setActiveLang(lang);
      setLoading(true);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cv-modal" onClick={onClose}>
      <div className="cv-modal__container" onClick={(e) => e.stopPropagation()}>
        <header className="cv-modal__header">
          <div className="cv-modal__dots">
            <span
              className="cv-modal__dot cv-modal__dot--red"
              onClick={onClose}
            />
            <span className="cv-modal__dot cv-modal__dot--yellow" />
            <span className="cv-modal__dot cv-modal__dot--green" />
          </div>

          <div className="cv-modal__tabs">
            <button
              type="button"
              className={`cv-modal__tab ${activeLang === "es" ? "cv-modal__tab--active" : ""}`}
              onClick={() => handleTabChange("es")}
            >
              {t("cvModal.spanish")}
            </button>
            <button
              type="button"
              className={`cv-modal__tab ${activeLang === "en" ? "cv-modal__tab--active" : ""}`}
              onClick={() => handleTabChange("en")}
            >
              {t("cvModal.english")}
            </button>
          </div>

          <div className="cv-modal__actions">
            <a
              className="cv-modal__download-btn"
              href={cvUrl}
              download
              title={t("cvModal.download")}
            >
              <span>{t("cvModal.download")}</span>
              <span className="cv-modal__download-icon" aria-hidden="true">↓</span>
            </a>
            <button
              className="cv-modal__btn"
              onClick={onClose}
              title={t("cvModal.close")}
              type="button"
            >
              <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </header>

        <div className="cv-modal__body">
          {loading && (
            <div className="cv-modal__loader">
              <div className="cv-modal__spinner" />
              <span className="cv-modal__loader-text">
                {t("cvModal.loading")}
              </span>
            </div>
          )}
          <iframe
            src={cvUrl}
            title={`CV - ${activeLang === "en" ? "English" : "Español"}`}
            className="cv-modal__iframe"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default CvPreviewModal;
