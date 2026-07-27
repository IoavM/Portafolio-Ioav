import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Education.css";

interface AcademicItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  location?: string;
}

interface CertificationItem {
  institution: string;
  title: string;
  year: string;
  status: string;
  url?: string;
}

function Education() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();

  const academicItems = t("education.academicItems", { returnObjects: true }) as AcademicItem[];
  const certifications = t("education.certifications", { returnObjects: true }) as CertificationItem[];

  return (
    <section id="educacion" className="educacion" ref={sectionRef} aria-label={t("education.tag")}>
      <div className="contenedor">
        <div className="educacion__header revelar-scroll">
          <span className="etiqueta-seccion">{t("education.tag")}</span>
          <h2 className="titulo-seccion">{t("education.title")}</h2>
        </div>

        <div className="educacion__columns">
          <div className="educacion__col">
            <h3 className="educacion__col-title revelar-scroll">{t("education.academic")}</h3>
            {Array.isArray(academicItems) &&
              academicItems.map((item, index) => (
                <div className="educacion__item revelar-scroll" key={`${item.institution}-${index}`}>
                  <div className="educacion__item-top">
                    <h4 className="educacion__degree">{item.degree}</h4>
                    <span className="educacion__period">{item.period}</span>
                  </div>
                  <p className="educacion__institution">{item.institution}</p>
                  {item.gpa && (
                    <span className="educacion__detail">GPA {item.gpa}</span>
                  )}
                  {item.location && (
                    <span className="educacion__detail">{item.location}</span>
                  )}
                </div>
              ))}
          </div>

          <div className="educacion__col">
            <h3 className="educacion__col-title revelar-scroll">{t("education.certificationsTitle")}</h3>
            {Array.isArray(certifications) &&
              certifications.map((cert, index) => (
                <div className="educacion__item revelar-scroll" key={`${cert.institution}-${index}`}>
                  <div className="educacion__item-top">
                    {cert.url ? (
                      <h4 className="educacion__degree">
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="educacion__link">
                          {cert.title} <span className="educacion__link-icon">↗</span>
                        </a>
                      </h4>
                    ) : (
                      <h4 className="educacion__degree">{cert.title}</h4>
                    )}
                    <span className="educacion__period">{cert.year}</span>
                  </div>
                  <p className="educacion__institution">{cert.institution}</p>
                  <span className={`educacion__status ${cert.status === "Completado" || cert.status === "Completed" ? "educacion__status--done" : ""}`}>
                    {cert.status}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
