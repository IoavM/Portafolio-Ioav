import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#acerca" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Skills", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navegacion ${isScrolled ? "navegacion--scrolled" : ""}`}>
      <nav className="navegacion__container contenedor" aria-label="Navegación principal">

        <ul className={`navegacion__links ${isMobileOpen ? "navegacion__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className={`navegacion__link ${activeSection === link.href.replace("#", "") ? "navegacion__link--active" : ""}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navegacion__toggle ${isMobileOpen ? "navegacion__toggle--active" : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileOpen}
        >
          <span className="navegacion__toggle-bar" />
          <span className="navegacion__toggle-bar" />
          <span className="navegacion__toggle-bar" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
