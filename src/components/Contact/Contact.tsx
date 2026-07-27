import { useTranslation } from "react-i18next";
import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();
  const { contact } = portfolioData;

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
              <span className="contacto__line-value">@ioavmizrachi</span>
            </a>
          </div>

          <div className="contacto__cta revelar-scroll">
            <a
              href={contact.cvUrl}
              download
              className="contacto__download"
              aria-label={t("contact.downloadCvAria")}
            >
              {t("contact.downloadCv")}
              <span className="contacto__download-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
