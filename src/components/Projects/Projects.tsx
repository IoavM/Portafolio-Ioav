import { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import type { ProjectItem } from "../../types/types";
import "./Projects.css";

function ProjectCard({
  project,
  index,
  onPreview,
}: {
  project: ProjectItem;
  index: number;
  onPreview: (url: string, title: string) => void;
}) {
  const handleDemoClick = (e: React.MouseEvent<HTMLElement>) => {
    if (project.demo !== "#") {
      e.preventDefault();
      onPreview(project.demo, project.title);
    }
  };

  return (
    <article
      className="proyectos__card revelar-scroll"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="proyectos__image-wrapper">
        {project.demo !== "#" ? (
          <div className="proyectos__live-preview">
            <iframe
              src={project.demo}
              title={`Mini-vista de ${project.title}`}
              className="proyectos__mini-iframe"
              scrolling="no"
            />
            <div className="proyectos__iframe-overlay" onClick={handleDemoClick}></div>
          </div>
        ) : (
          <div className="proyectos__image-placeholder" aria-hidden="true">
            <span className="proyectos__image-icon">{"{ }"}</span>
          </div>
        )}
      </div>

      <div className="proyectos__body">
        <h3 className="proyectos__title">{project.title}</h3>
        <p className="proyectos__description">{project.description}</p>

        <div className="proyectos__techs" aria-label="Tecnologías utilizadas">
          {project.technologies.map((tech) => (
            <span className="proyectos__tech" key={tech}>{tech}</span>
          ))}
        </div>

        <div className="proyectos__links">
          {project.demo !== "#" && (
            <a
              href={project.demo}
              onClick={handleDemoClick}
              className="proyectos__link proyectos__link--primary"
              aria-label={`Ver App de ${project.title}`}
            >
              App
            </a>
          )}
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="proyectos__link"
            aria-label={`Ver código de ${project.title}`}
          >
            Código
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { projects } = portfolioData;

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const handlePreview = (url: string, title: string) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
    setLoading(true);
  };

  const handleClose = () => {
    setPreviewUrl(null);
    setPreviewTitle("");
  };

  const handleRefresh = () => {
    if (previewUrl) {
      const currentUrl = previewUrl;
      setPreviewUrl(null);
      setTimeout(() => {
        setPreviewUrl(currentUrl);
        setLoading(true);
      }, 50);
    }
  };

  return (
    <section id="proyectos" className="proyectos" ref={sectionRef} aria-label="Proyectos">
      <div className="contenedor">
        <div className="revelar-scroll">
          <span className="etiqueta-seccion">Proyectos</span>
          <h2 className="titulo-seccion">Trabajo Seleccionado</h2>
        </div>

        <div className="proyectos__grid">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.title}
              onPreview={handlePreview}
            />
          ))}
        </div>
      </div>

      {previewUrl && (
        <div className="preview-modal" onClick={handleClose}>
          <div className="preview-modal__container" onClick={(e) => e.stopPropagation()}>
            <header className="preview-modal__header">
              <div className="preview-modal__dots">
                <span className="preview-modal__dot preview-modal__dot--red" onClick={handleClose} style={{ cursor: "pointer" }}></span>
                <span className="preview-modal__dot preview-modal__dot--yellow"></span>
                <span className="preview-modal__dot preview-modal__dot--green"></span>
              </div>
              <div className="preview-modal__address-bar">
                {previewUrl.replace("https://", "").replace("http://", "")}
              </div>
              <div className="preview-modal__actions">
                <button className="preview-modal__btn" onClick={handleRefresh} title="Recargar página">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                </button>
                <a className="preview-modal__btn" href={previewUrl} target="_blank" rel="noopener noreferrer" title="Abrir en pestaña nueva">
                  <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <button className="preview-modal__btn" onClick={handleClose} title="Cerrar previsualización">
                  <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </header>
            <div className="preview-modal__body">
              {loading && (
                <div className="preview-modal__loader">
                  <div className="preview-modal__spinner"></div>
                  <span style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}>Cargando {previewTitle}...</span>
                </div>
              )}
              <iframe
                src={previewUrl}
                title={`Previsualización de ${previewTitle}`}
                className="preview-modal__iframe"
                onLoad={() => setLoading(false)}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
