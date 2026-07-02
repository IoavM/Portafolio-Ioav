import { portfolioData } from "../../data/portfolioData";
import "./Footer.css";

function Footer() {
  const { personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pie-pagina" aria-label="Pie de página">
      <div className="contenedor">
        <div className="pie-pagina__content">
          <div className="pie-pagina__brand">
            <span className="pie-pagina__logo">
              {personal.name.split(" ")[0]}
              <span className="pie-pagina__logo-dot">.</span>
            </span>
            <p className="pie-pagina__tagline">{personal.title}</p>
          </div>

          <div className="pie-pagina__socials" aria-label="Redes sociales">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pie-pagina__social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pie-pagina__social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="pie-pagina__social-link"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pie-pagina__bottom">
          <p className="pie-pagina__copyright">
            © {currentYear} {personal.name}. Todos los derechos reservados.
          </p>
          <p className="pie-pagina__built">
            Desarrollado con React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
