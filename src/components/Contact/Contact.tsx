import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contact.css";

function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { contact } = portfolioData;

  return (
    <section id="contacto" className="contacto" ref={sectionRef} aria-label="Contacto">
      <div className="contenedor">
        <div className="contacto__top revelar-scroll">
          <span className="etiqueta-seccion">Contacto</span>
          <h2 className="contacto__headline">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="contacto__sub">
            Hablemos sobre cómo puedo ayudarte a construirlo.
          </p>
        </div>

        <div className="contacto__body">
          <div className="contacto__info revelar-scroll">
            <a href={`mailto:${contact.email}`} className="contacto__line">
              <span className="contacto__line-label">Email</span>
              <span className="contacto__line-value">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contacto__line">
              <span className="contacto__line-label">Teléfono</span>
              <span className="contacto__line-value">{contact.phone}</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contacto__line">
              <span className="contacto__line-label">LinkedIn</span>
              <span className="contacto__line-value">Ioav Mizrachi</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contacto__line">
              <span className="contacto__line-label">GitHub</span>
              <span className="contacto__line-value">@ioavmizrachi</span>
            </a>
          </div>

          <div className="contacto__cta revelar-scroll">
            <a
              href={contact.cvUrl}
              download
              className="contacto__download"
              aria-label="Descargar CV en PDF"
            >
              Descargar CV
              <span className="contacto__download-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
