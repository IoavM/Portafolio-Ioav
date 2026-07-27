import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const currentLang = i18n.language || "es";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const navLinks = [
    { label: t("navbar.inicio"), href: "#inicio" },
    { label: t("navbar.acerca"), href: "#acerca" },
    { label: t("navbar.experiencia"), href: "#experiencia" },
    { label: t("navbar.habilidades"), href: "#habilidades" },
    { label: t("navbar.proyectos"), href: "#proyectos" },
    { label: t("navbar.educacion"), href: "#educacion" },
    { label: t("navbar.contacto"), href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
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
          {navLinks.map((link) => (
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
          <li className="navegacion__lang-item">
            <div className="navegacion__lang-switch" aria-label="Cambiar idioma">
              <button
                type="button"
                className={`lang-btn ${currentLang.startsWith("es") ? "lang-btn--active" : ""}`}
                onClick={() => changeLanguage("es")}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
              <span className="lang-divider">|</span>
              <button
                type="button"
                className={`lang-btn ${currentLang.startsWith("en") ? "lang-btn--active" : ""}`}
                onClick={() => changeLanguage("en")}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </li>
        </ul>

        <div className="navegacion__mobile-right">
          <div className="navegacion__lang-switch navegacion__lang-switch--mobile" aria-label="Cambiar idioma">
            <button
              type="button"
              className={`lang-btn ${currentLang.startsWith("es") ? "lang-btn--active" : ""}`}
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={`lang-btn ${currentLang.startsWith("en") ? "lang-btn--active" : ""}`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>

          <button
            className={`navegacion__toggle ${isMobileOpen ? "navegacion__toggle--active" : ""}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? t("navbar.toggleClose") : t("navbar.toggleOpen")}
            aria-expanded={isMobileOpen}
          >
            <span className="navegacion__toggle-bar" />
            <span className="navegacion__toggle-bar" />
            <span className="navegacion__toggle-bar" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
