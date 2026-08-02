import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      navbar: {
        inicio: "Inicio",
        acerca: "Sobre Mí",
        experiencia: "Experiencia",
        habilidades: "Skills",
        proyectos: "Proyectos",
        educacion: "Educación",
        contacto: "Contacto",
        toggleOpen: "Abrir menú",
        toggleClose: "Cerrar menú",
      },
      hero: {
        greeting: "Hola, soy",
        title: "Front-End Developer & UX/UI Designer",
        subtitle:
          "Transformo ideas en experiencias digitales excepcionales. Combino desarrollo front-end, diseño UX/UI y pensamiento de producto para crear soluciones que impactan.",
        location: "Medellín, Colombia",
        viewProjects: "Ver Proyectos",
        previewCv: "Ver CV",
        previewCvAria: "Previsualizar CV",
        downloadCv: "Descargar CV",
        downloadCvAria: "Descargar CV en PDF",
        codeRole: "Frontend & UX/UI",
        codePassion: "Productos Digitales",
      },
      about: {
        tag: "Sobre Mí",
        description:
          "Soy un profesional multidisciplinario con una visión integral del desarrollo digital. Actualmente curso una Especialización en Desarrollo de Software, fortaleciendo mis conocimientos en arquitectura, desarrollo e implementación de soluciones tecnológicas. Mi perfil combina habilidades técnicas en desarrollo front-end con una sólida comprensión del diseño centrado en el usuario y estrategias de e-commerce. Me apasiona crear productos digitales que no solo funcionen impecablemente, sino que ofrezcan experiencias memorables. Con experiencia en entornos empresariales reales, entiendo el puente entre las necesidades del negocio y la implementación técnica.",
        highlights: [
          {
            icon: "01",
            title: "Front-End Development",
            description:
              "Interfaces modernas con React, TypeScript y arquitecturas escalables.",
          },
          {
            icon: "02",
            title: "UX/UI Design",
            description:
              "Diseño centrado en el usuario, wireframing, prototipado y design systems.",
          },
          {
            icon: "03",
            title: "E-commerce",
            description:
              "Gestión de catálogos, publicación de productos y campañas digitales.",
          },
          {
            icon: "04",
            title: "Product Thinking",
            description:
              "De la investigación y el diseño hasta la implementación y producción.",
          },
        ],
      },
      experience: {
        tag: "Experiencia",
        title: "Trayectoria Profesional",
        responsibilities: "Responsabilidades",
        areas: "Áreas",
        items: [
          {
            company: "Surtitodo",
            role: "Front-End Designer & Developer",
            period: "2025",
            description:
              "Participación activa en el equipo de Tecnología y E-commerce de una de las cadenas de retail más importantes de Colombia. Contribución al diseño, desarrollo e implementación de soluciones digitales orientadas a optimizar procesos internos y fortalecer la experiencia del usuario dentro de la plataforma de comercio electrónico. Trabajo conjunto con equipos multidisciplinarios de Tecnología, Marketing y Negocio para impulsar iniciativas de transformación digital y la mejora continua del ecosistema digital de la compañía.",
            responsibilities: [
              "Diseño e implementación de interfaces web para aplicaciones de uso interno y herramientas del ecosistema e-commerce.",
              "Desarrollo front-end de componentes e interfaces interactivas, incluyendo módulos de autenticación y gestión de usuarios, aplicando buenas prácticas de desarrollo web.",
              "Diseño y mejora de interfaces centradas en la experiencia del usuario (UX/UI), priorizando la usabilidad, accesibilidad y consistencia visual.",
              "Gestión integral del catálogo digital mediante la publicación, categorización y optimización de productos en plataformas de e-commerce.",
              "Estructuración y organización de información de productos de moda y vestuario para mejorar la experiencia de navegación y búsqueda.",
              "Planificación y ejecución de campañas promocionales y comerciales digitales alineadas con los objetivos del negocio.",
              "Colaboración directa con equipos multidisciplinarios de Tecnología, Marketing y Operaciones para el desarrollo de nuevas funcionalidades y la implementación de mejoras continuas.",
              "Participación en procesos de transformación digital mediante la optimización de flujos operativos relacionados con el comercio electrónico.",
            ],
            tags: [
              "UX/UI Design",
              "Front-End",
              "E-commerce",
              "Product Thinking",
              "Digital Marketing",
              "Agile",
            ],
          },
        ],
      },
      skills: {
        tag: "Habilidades",
        title: "Stack & Herramientas",
        categories: [
          {
            category: "Desarrollo",
            icon: "DEV",
            skills: [
              { name: "Python", level: 90, levelText: "Nivel alto" },
              {
                name: "Front-End",
                subskills: ["React", "JavaScript", "HTML", "CSS"],
                level: 90,
                levelText: "Nivel alto",
              },
              {
                name: "Bases de datos",
                subskills: ["SQL"],
                level: 90,
                levelText: "Nivel alto",
              },
              { name: "Unity", level: 90, levelText: "Nivel alto" },
              { name: "Node.js", level: 70, levelText: "Nivel Medio" },
            ],
          },
          {
            category: "Diseño y Creatividad",
            icon: "UX",
            skills: [
              { name: "Figma", level: 90, levelText: "Nivel Alto" },
              { name: "Photoshop", level: 70, levelText: "Nivel Medio" },
              { name: "Illustrator", level: 70, levelText: "Nivel Medio" },
            ],
          },
          {
            category: "Análisis y Gestión",
            icon: "PM",
            skills: [
              {
                name: "Análisis de datos",
                subskills: ["R", "Excel"],
                level: 70,
                levelText: "Nivel Medio",
              },
              {
                name: "Gestión de proyectos",
                subskills: ["SCRUM", "Azure DevOps", "Trello"],
              },
            ],
          },
        ],
        softSkillsTitle: "Habilidades Blandas",
        softSkills: [
          "Resolución de Problemas",
          "Comunicación Efectiva",
          "Trabajo en Equipo",
          "Adaptabilidad Tecnológica",
          "Atención al Detalle",
          "Innovación",
          "Liderazgo",
          "Creatividad",
          "Aprendizaje Rápido",
        ],
      },
      projects: {
        tag: "Proyectos",
        title: "Trabajos Realizados",
        appBtn: "App",
        codeBtn: "Código",
        miniViewTitle: "Mini-vista de",
        appAria: "Ver App de",
        codeAria: "Ver código de",
        items: [
          {
            title: "I-HOMOTIC",
            image: "/projects/ihomotic.webp",
            description:
              "Plataforma interactiva de domótica colombiana que permite simular y presupuestar la automatización de espacios. Incluye visualizador 3D interactivo y estimación de ahorro energético.",
            technologies: ["React", "TypeScript", "Vite", "Vanilla CSS"],
            repository: "https://github.com/IoavM/I-HOMOTIC",
            demo: "https://i-homotic.vercel.app/",
          },
          {
            title: "MACABI",
            image: "/projects/macabi.webp",
            description:
              "Sitio web del complejo deportivo de canchas sintéticas en Popayán, Colombia. Permite explorar las instalaciones de primer nivel, consultar la escuela de fútbol y agilizar el alquiler de canchas por WhatsApp.",
            technologies: ["React", "JavaScript", "Vite", "Vanilla CSS"],
            repository: "https://github.com/IoavM/Macabi",
            demo: "https://macabi.vercel.app/",
          },
          {
            title: "FileMaster",
            image: "/projects/filemaster.png",
            description:
              "Plataforma web todo en uno para procesar PDFs (unir, dividir por rango), comprimir imágenes, eliminar fondos con IA y convertir formatos. Diseñado con UX premium y descarga automática en ZIP por lotes.",
            technologies: ["React", "TypeScript", "FastAPI", "Python", "TailwindCSS"],
            repository: "https://github.com/IoavM/FileMaster",
            demo: "https://file-master-chi.vercel.app/",
          },
        ],
        modal: {
          loading: "Cargando",
          reload: "Recargar página",
          newTab: "Abrir en pestaña nueva",
          close: "Cerrar previsualización",
          previewTitle: "Previsualización de",
        },
      },
      education: {
        tag: "Educación",
        title: "Formación",
        academic: "Académica",
        certificationsTitle: "Certificaciones",
        academicItems: [
          {
            institution: "Universidad EAFIT",
            degree: "Especialización en Desarrollo de Software",
            period: "2026 — En curso",
            location: "Medellín, Colombia",
          },
          {
            institution: "Universidad EAFIT",
            degree: "Diseño Interactivo",
            gpa: "4.5 / 5.0",
            period: "2022 — 2026",
            location: "Medellín, Colombia",
          },
          {
            institution: "Colegio Colombo Francés",
            degree: "Bachiller",
            period: "2021",
            location: "Popayán, Colombia",
          },
        ],
        certifications: [
          {
            institution: "IBM",
            title: "Developing Front-End Apps with React",
            year: "2026",
            status: "En curso",
          },
          {
            institution: "Harvard",
            title: "Introduction to Cybersecurity",
            year: "2026",
            status: "En curso",
          },
          {
            institution: "Universidad Autónoma de Madrid",
            title: "Introducción a la Programación en C",
            year: "2021",
            status: "Completado",
            url: "https://credentials.edx.org/credentials/e6035ea926944aa98969ddb978ea66f8/",
          },
          {
            institution: "Microsoft",
            title: "Backend APIs & Microservices",
            year: "2026",
            status: "Completado",
            url: "https://courses.edx.org/certificates/c4b812aaa3ff47cb9b2c896c64cc1333?_gl=1*1czq877*_gcl_au*MTcxMDI5NDIyMS4xNzgyOTY3MDY3*_ga*NDgzMDg0MTczLjE3ODI5NjcwNjc.*_ga_D3KS4KMDT0*czE3ODI5NjcwNjckbzEkZzEkdDE3ODI5NjcyMjkkajYwJGwwJGgw",
          },
        ],
      },
      languages: {
        tag: "Idiomas",
        items: [
          { language: "Español", level: "Nativo" },
          { language: "Inglés", level: "B2" },
        ],
      },
      contact: {
        tag: "Contacto",
        headline: "¿Tienes un proyecto en mente?",
        subtitle: "Hablemos sobre cómo puedo ayudarte a construirlo.",
        email: "Email",
        phone: "Teléfono",
        linkedin: "LinkedIn",
        github: "GitHub",
        previewCv: "Ver CV",
        previewCvAria: "Previsualizar CV",
        downloadCvEs: "CV Español",
        downloadCvEsAria: "Descargar CV en Español",
        downloadCvEn: "CV English",
        downloadCvEnAria: "Descargar CV en Inglés",
      },
      cvModal: {
        spanish: "Español",
        english: "English",
        download: "Descargar",
        close: "Cerrar",
        loading: "Cargando CV...",
        error: "No se pudo cargar el CV. Intenta descargarlo directamente.",
      },
      footer: {
        tagline: "Front-End Developer & UX/UI Designer",
        rights: "Todos los derechos reservados.",
        builtWith: "Desarrollado con React + TypeScript",
      },
    },
  },
  en: {
    translation: {
      navbar: {
        inicio: "Home",
        acerca: "About Me",
        experiencia: "Experience",
        habilidades: "Skills",
        proyectos: "Projects",
        educacion: "Education",
        contacto: "Contact",
        toggleOpen: "Open menu",
        toggleClose: "Close menu",
      },
      hero: {
        greeting: "Hi, I'm",
        title: "Front-End Developer & UX/UI Designer",
        subtitle:
          "I transform ideas into exceptional digital experiences. Combining front-end development, UX/UI design, and product thinking to build impactful solutions.",
        location: "Medellín, Colombia",
        viewProjects: "View Projects",
        previewCv: "View CV",
        previewCvAria: "Preview CV",
        downloadCv: "Download CV",
        downloadCvAria: "Download CV in PDF",
        codeRole: "Frontend & UX/UI",
        codePassion: "Digital Products",
      },
      about: {
        tag: "About Me",
        description:
          "I am a multidisciplinary professional with a holistic vision of digital development. I am currently pursuing a Specialization in Software Development, strengthening my knowledge in architecture, development, and implementation of technological solutions. My profile combines technical skills in front-end development with a strong understanding of user-centered design and e-commerce strategies. I am passionate about creating digital products that not only work flawlessly, but also deliver memorable experiences. With experience in real enterprise environments, I bridge the gap between business needs and technical implementation.",
        highlights: [
          {
            icon: "01",
            title: "Front-End Development",
            description:
              "Modern interfaces with React, TypeScript, and scalable architectures.",
          },
          {
            icon: "02",
            title: "UX/UI Design",
            description:
              "User-centered design, wireframing, prototyping, and design systems.",
          },
          {
            icon: "03",
            title: "E-commerce",
            description:
              "Catalog management, product publishing, and digital campaigns.",
          },
          {
            icon: "04",
            title: "Product Thinking",
            description:
              "From research and design to implementation and production.",
          },
        ],
      },
      experience: {
        tag: "Experience",
        title: "Professional Career",
        responsibilities: "Responsibilities",
        areas: "Areas",
        items: [
          {
            company: "Surtitodo",
            role: "Front-End Designer & Developer",
            period: "2025",
            description:
              "Active participation in the Tech & E-commerce team of one of Colombia's leading retail chains. Contribution to the design, development, and implementation of digital solutions aimed at optimizing internal processes and enhancing user experience within the e-commerce platform. Joint work with multidisciplinary teams across Tech, Marketing, and Business to drive digital transformation initiatives and the continuous improvement of the company's digital ecosystem.",
            responsibilities: [
              "Design and implementation of web interfaces for internal applications and e-commerce ecosystem tools.",
              "Front-end development of interactive components and interfaces, including authentication and user management modules, applying web development best practices.",
              "Design and enhancement of user-centered interfaces (UX/UI), prioritizing usability, accessibility, and visual consistency.",
              "End-to-end management of digital catalog through product publishing, categorization, and optimization on e-commerce platforms.",
              "Structuring and organization of fashion and apparel product information to improve browsing and search experience.",
              "Planning and execution of digital promotional and commercial campaigns aligned with business goals.",
              "Direct collaboration with multidisciplinary teams across Tech, Marketing, and Operations for new feature development and continuous improvement implementation.",
              "Participation in digital transformation processes through the optimization of operational workflows related to e-commerce.",
            ],
            tags: [
              "UX/UI Design",
              "Front-End",
              "E-commerce",
              "Product Thinking",
              "Digital Marketing",
              "Agile",
            ],
          },
        ],
      },
      skills: {
        tag: "Skills",
        title: "Stack & Tools",
        categories: [
          {
            category: "Development",
            icon: "DEV",
            skills: [
              { name: "Python", level: 90, levelText: "High Level" },
              {
                name: "Front-End",
                subskills: ["React", "JavaScript", "HTML", "CSS"],
                level: 90,
                levelText: "High Level",
              },
              {
                name: "Databases",
                subskills: ["SQL"],
                level: 90,
                levelText: "High Level",
              },
              { name: "Unity", level: 90, levelText: "High Level" },
              { name: "Node.js", level: 70, levelText: "Mid Level" },
            ],
          },
          {
            category: "Design & Creativity",
            icon: "UX",
            skills: [
              { name: "Figma", level: 90, levelText: "High Level" },
              { name: "Photoshop", level: 70, levelText: "Mid Level" },
              { name: "Illustrator", level: 70, levelText: "Mid Level" },
            ],
          },
          {
            category: "Analysis & Management",
            icon: "PM",
            skills: [
              {
                name: "Data Analysis",
                subskills: ["R", "Excel"],
                level: 70,
                levelText: "Mid Level",
              },
              {
                name: "Project Management",
                subskills: ["SCRUM", "Azure DevOps", "Trello"],
              },
            ],
          },
        ],
        softSkillsTitle: "Soft Skills",
        softSkills: [
          "Problem Solving",
          "Effective Communication",
          "Teamwork",
          "Tech Adaptability",
          "Attention to Detail",
          "Innovation",
          "Leadership",
          "Creativity",
          "Fast Learning",
        ],
      },
      projects: {
        tag: "Projects",
        title: "Selected Work",
        appBtn: "App",
        codeBtn: "Code",
        miniViewTitle: "Mini-preview of",
        appAria: "View App of",
        codeAria: "View code of",
        items: [
          {
            title: "I-HOMOTIC",
            image: "/projects/ihomotic.webp",
            description:
              "Interactive Colombian home automation platform to simulate and estimate space automation budgets. Features an interactive 3D viewer and energy savings estimator.",
            technologies: ["React", "TypeScript", "Vite", "Vanilla CSS"],
            repository: "https://github.com/IoavM/I-HOMOTIC",
            demo: "https://i-homotic.vercel.app/",
          },
          {
            title: "MACABI",
            image: "/projects/macabi.webp",
            description:
              "Website for a sports complex with synthetic fields in Popayán, Colombia. Enables exploring top-tier facilities, consulting the soccer academy, and streamlining field bookings via WhatsApp.",
            technologies: ["React", "JavaScript", "Vite", "Vanilla CSS"],
            repository: "https://github.com/IoavM/Macabi",
            demo: "https://macabi.vercel.app/",
          },
          {
            title: "FileMaster",
            image: "/projects/filemaster.png",
            description:
              "All-in-one web platform for PDF processing (merge, split), image compression, AI background removal, and format conversion. Designed with premium UX and batch ZIP downloading.",
            technologies: ["React", "TypeScript", "FastAPI", "Python", "TailwindCSS"],
            repository: "https://github.com/IoavM/FileMaster",
            demo: "https://file-master-chi.vercel.app/",
          },
        ],
        modal: {
          loading: "Loading",
          reload: "Reload page",
          newTab: "Open in new tab",
          close: "Close preview",
          previewTitle: "Preview of",
        },
      },
      education: {
        tag: "Education",
        title: "Background",
        academic: "Academic",
        certificationsTitle: "Certifications",
        academicItems: [
          {
            institution: "Universidad EAFIT",
            degree: "Software Development Specialization",
            period: "2026 — In progress",
            location: "Medellín, Colombia",
          },
          {
            institution: "Universidad EAFIT",
            degree: "Interactive Design",
            gpa: "4.5 / 5.0",
            period: "2022 — 2026",
            location: "Medellín, Colombia",
          },
          {
            institution: "Colegio Colombo Francés",
            degree: "High School Diploma",
            period: "2021",
            location: "Popayán, Colombia",
          },
        ],
        certifications: [
          {
            institution: "IBM",
            title: "Developing Front-End Apps with React",
            year: "2026",
            status: "In progress",
          },
          {
            institution: "Harvard",
            title: "Introduction to Cybersecurity",
            year: "2026",
            status: "In progress",
          },
          {
            institution: "Universidad Autónoma de Madrid",
            title: "Introduction to C Programming",
            year: "2021",
            status: "Completed",
            url: "https://credentials.edx.org/credentials/e6035ea926944aa98969ddb978ea66f8/",
          },
          {
            institution: "Microsoft",
            title: "Backend APIs & Microservices",
            year: "2026",
            status: "Completed",
            url: "https://courses.edx.org/certificates/c4b812aaa3ff47cb9b2c896c64cc1333?_gl=1*1czq877*_gcl_au*MTcxMDI5NDIyMS4xNzgyOTY3MDY3*_ga*NDgzMDg0MTczLjE3ODI5NjcwNjc.*_ga_D3KS4KMDT0*czE3ODI5NjcwNjckbzEkZzEkdDE3ODI5NjcyMjkkajYwJGwwJGgw",
          },
        ],
      },
      languages: {
        tag: "Languages",
        items: [
          { language: "Spanish", level: "Native" },
          { language: "English", level: "B2" },
        ],
      },
      contact: {
        tag: "Contact",
        headline: "Have a project in mind?",
        subtitle: "Let's talk about how I can help you build it.",
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
        github: "GitHub",
        previewCv: "View CV",
        previewCvAria: "Preview CV",
        downloadCvEs: "CV Español",
        downloadCvEsAria: "Download CV in Spanish",
        downloadCvEn: "CV English",
        downloadCvEnAria: "Download CV in English",
      },
      cvModal: {
        spanish: "Español",
        english: "English",
        download: "Download",
        close: "Close",
        loading: "Loading CV...",
        error: "Could not load the CV. Try downloading it directly.",
      },
      footer: {
        tagline: "Front-End Developer & UX/UI Designer",
        rights: "All rights reserved.",
        builtWith: "Built with React + TypeScript",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("portfolio_lang") || "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
