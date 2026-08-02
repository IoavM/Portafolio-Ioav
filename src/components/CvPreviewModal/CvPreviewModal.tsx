import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { portfolioData } from "../../data/portfolioData";
import "./CvPreviewModal.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CvPreviewModal({ isOpen, onClose }: CvPreviewModalProps) {
  const { t, i18n } = useTranslation();
  const { contact } = portfolioData;
  const currentLang = i18n.language || "es";
  const bodyRef = useRef<HTMLDivElement>(null);

  const [activeLang, setActiveLang] = useState<"es" | "en">(
    currentLang.startsWith("en") ? "en" : "es"
  );
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(600);

  const cvUrl = activeLang === "en" ? contact.cvUrlEn : contact.cvUrlEs;

  // Sync tab with site language when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveLang(currentLang.startsWith("en") ? "en" : "es");
    }
  }, [isOpen, currentLang]);

  // Reset pages when switching tabs
  const handleTabChange = (lang: "es" | "en") => {
    if (lang !== activeLang) {
      setActiveLang(lang);
      setNumPages(0);
    }
  };

  // Calculate page width based on container
  const updatePageWidth = useCallback(() => {
    if (bodyRef.current) {
      const containerWidth = bodyRef.current.clientWidth;
      setPageWidth(Math.min(containerWidth - 32, 800));
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Small delay to let the modal render
      const timer = setTimeout(updatePageWidth, 50);
      window.addEventListener("resize", updatePageWidth);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", updatePageWidth);
      };
    }
  }, [isOpen, updatePageWidth]);

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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    updatePageWidth();
  }

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
            {numPages > 0 && (
              <span className="cv-modal__page-count">
                {numPages} {numPages === 1 ? "pg" : "pgs"}
              </span>
            )}
            <a
              className="cv-modal__download-btn"
              href={cvUrl}
              download
              title={t("cvModal.download")}
            >
              <span>{t("cvModal.download")}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
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

        <div className="cv-modal__body" ref={bodyRef}>
          <Document
            file={cvUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="cv-modal__loader">
                <div className="cv-modal__spinner" />
                <span className="cv-modal__loader-text">
                  {t("cvModal.loading")}
                </span>
              </div>
            }
            error={
              <div className="cv-modal__loader">
                <span className="cv-modal__loader-text">
                  {t("cvModal.error")}
                </span>
              </div>
            }
            className="cv-modal__document"
          >
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`${activeLang}-page-${index + 1}`}
                pageNumber={index + 1}
                width={pageWidth}
                className="cv-modal__page"
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

export default CvPreviewModal;
