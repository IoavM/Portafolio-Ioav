import type { PortfolioData } from "../types/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ioav Mizrachi",
    title: "Frontend & Software Developer | UI/UX Designer",
    subtitle:
      "Diseñador Interactivo y estudiante de Especialización en Desarrollo de Software. Especializado en Front-End (React, TypeScript), Python, arquitecturas web y diseño UI/UX para crear productos digitales que impactan.",
    location: "Medellín, Antioquia, Colombia",
  },

  about: {
    description:
      "Diseñador Interactivo con sólidas habilidades en el desarrollo de aplicaciones web y soluciones digitales. Actualmente curso una Especialización en Desarrollo de Software, fortaleciendo mi formación en ingeniería y desarrollo de soluciones tecnológicas. Me especializo en programación y desarrollo web, con un alto nivel de competencia en Python y Front-End, especialmente en React, JavaScript, HTML y CSS. Cuento con sólidos conocimientos en bases de datos relacionales y no relacionales, diseño UX/UI y desarrollo de aplicaciones digitales. Soy una persona resolutiva, con capacidad para trabajar en equipo y adaptarme rápidamente a nuevos retos, comprometido con la entrega de soluciones funcionales y de calidad.",
    highlights: [
      {
        icon: "01",
        title: "Front-End Development",
        description:
          "Interfaces modernas con React, TypeScript, JavaScript y arquitecturas escalables.",
      },
      {
        icon: "02",
        title: "Software Engineering & Python",
        description:
          "Desarrollo de software (SDD), APIs, microservicios y bases de datos relacionales y NoSQL.",
      },
      {
        icon: "03",
        title: "UI/UX & Product Design",
        description:
          "Diseño centrado en el usuario, wireframing, prototipado en Figma y design systems consistentes.",
      },
      {
        icon: "04",
        title: "E-commerce & Business Impact",
        description:
          "Optimización de plataformas e-commerce, gestión de catálogos y análisis de datos para toma de decisiones.",
      },
    ],
  },

  experience: [
    {
      company: "SURTITODO S.A.S",
      role: "Frontend Designer & Developer",
      period: "2025",
      description:
        "Participé en el equipo de Tecnología y E-commerce, contribuyendo al desarrollo de soluciones digitales para optimizar procesos internos y fortalecer la experiencia de usuario dentro de la plataforma de comercio electrónico. Colaboré con equipos multidisciplinarios en iniciativas de transformación digital, aportando al desarrollo de interfaces, funcionalidades y mejoras orientadas al negocio.",
      responsibilities: [
        "Diseñé e implementé interfaces web para aplicaciones y herramientas internas dentro del ecosistema de comercio electrónico.",
        "Desarrollé funcionalidades front-end, incluyendo módulos de autenticación y gestión de usuarios, aplicando buenas prácticas de desarrollo.",
        "Contribuí a mejorar la experiencia digital de los usuarios mediante interfaces intuitivas y funcionales, alineadas con principios de UX/UI.",
        "Colaboré estrechamente con los equipos de Tecnología, Marketing y Negocio para implementar mejoras continuas y atender las necesidades del negocio.",
        "Gestioné y optimicé la información del catálogo de productos, realizando seguimiento al inventario y a los procesos de publicación para garantizar datos precisos y consistentes.",
        "Monitoreé y analicé datos de campañas comerciales, evaluando sus resultados e impacto para apoyar la toma de decisiones y futuras mejoras.",
        "Supervisé los procesos de publicación de productos, utilizando datos e indicadores para identificar pendientes, inconsistencias y oportunidades de mejora.",
        "Participé en la ejecución de campañas comerciales y lanzamientos de e-commerce, realizando seguimiento a su desempeño y resultados.",
      ],
      tags: [
        "React",
        "Front-End",
        "UX/UI Design",
        "E-commerce",
        "Product Thinking",
        "Agile / Scrum",
      ],
    },
  ],

  skills: [
    {
      category: "Desarrollo & Software",
      icon: "DEV",
      skills: [
        {
          name: "Front-End",
          subskills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
          level: 90,
          levelText: "Avanzado",
        },
        { name: "Python", level: 90, levelText: "Avanzado" },
        {
          name: "Bases de Datos",
          subskills: ["PostgreSQL", "MySQL", "MongoDB"],
          level: 90,
          levelText: "Avanzado",
        },
        {
          name: "Back-End",
          subskills: ["FastAPI", ".NET", "Node.js", "PHP", "APIs REST"],
          level: 70,
          levelText: "Intermedio",
        },
        {
          name: "Arquitectura de Software",
          subskills: ["Diseño de Sistemas", "Patrones de Diseño", "Monitoreo"],
          level: 70,
          levelText: "Intermedio",
        },
        {
          name: "Cloud Computing",
          subskills: ["AWS"],
          level: 70,
          levelText: "Intermedio",
        },
      ],
    },
    {
      category: "Diseño & Experiencia Interactiva",
      icon: "UX",
      skills: [
        { name: "Figma (UI/UX)", level: 90, levelText: "Avanzado" },
        { name: "Unity", level: 90, levelText: "Avanzado" },
        { name: "Adobe Photoshop", level: 70, levelText: "Intermedio" },
        { name: "Adobe Illustrator", level: 70, levelText: "Intermedio" },
      ],
    },
    {
      category: "Gestión & Análisis",
      icon: "PM",
      skills: [
        {
          name: "Análisis de Datos",
          subskills: ["Power BI", "R", "Excel"],
          level: 90,
          levelText: "Avanzado",
        },
        {
          name: "Gestión de Proyectos",
          subskills: ["Scrum", "Azure DevOps", "Trello"],
          level: 90,
          levelText: "Avanzado",
        },
      ],
    },
  ],

  projects: [
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
      title: "Arus ERP",
      image: "/projects/arus.png",
      description:
        "Arus es un MVP de un ERP web multi-tenant desarrollado bajo la metodología SDD (Spec-Driven Development) para la gestión de PYMEs y micronegocios. Centraliza catálogo de productos, compras, clientes, terminal de venta con deducción atómica de stock y dashboard con roles (RBAC).",
      technologies: ["React", "FastAPI", "Python", "PostgreSQL", "Docker", "SDD"],
      repository: "https://github.com/IoavM/Arus",
      demo: "https://arus-two.vercel.app/",
    },
    {
      title: "TaskFlow",
      image: "/projects/taskflow.webp",
      description:
        "Plataforma inteligente de gestión de tareas y cronograma semanal con estética Glassmorphism. Integra asistente de planificación con IA (Gemini), dictado por voz, organización por bloques de tiempo e integración con Spotify.",
      technologies: ["React", "TypeScript", "TailwindCSS", "FastAPI", "Python", "PostgreSQL"],
      repository: "https://github.com/IoavM/TaskFlow",
      demo: "https://task-flow-silk-seven.vercel.app/",
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
        "Herramienta web para procesar PDFs e imágenes que permite organizar documentos, comprimir archivos, convertir entre múltiples formatos y eliminar fondos con inteligencia artificial.",
      technologies: ["React", "TypeScript", "FastAPI", "Python", "TailwindCSS"],
      repository: "https://github.com/IoavM/FileMaster",
      demo: "https://file-master-chi.vercel.app/",
    },
  ],

  education: [
    {
      institution: "Universidad EAFIT",
      degree: "Especialización en Desarrollo de Software",
      period: "2026 – En curso",
      location: "Medellín, Colombia",
    },
    {
      institution: "Universidad EAFIT",
      degree: "Diseño Interactivo",
      gpa: "4.5 / 5.0",
      period: "2022 – 2026",
      location: "Medellín, Colombia",
    },
  ],

  certifications: [
    {
      institution: "IBM",
      title: "Developing Front-End Apps with React",
      year: "2026",
      status: "Completado",
      url: "https://courses.edx.org/certificates/4cfbfa08af3145079f855363b1263c8b",
    },
    {
      institution: "Microsoft",
      title: "Backend APIs & Microservices",
      year: "2026",
      status: "Completado",
      url: "https://courses.edx.org/certificates/c4b812aaa3ff47cb9b2c896c64cc1333",
    },
    {
      institution: "Microsoft",
      title: "Data Analyst",
      year: "2026",
      status: "Completado",
      url: "https://credentials.edx.org/credentials/c6b955f8df15448990493bb8a8cfc012/",
    },
    {
      institution: "Universidad Autónoma de Madrid",
      title: "Introducción a la Programación en C",
      year: "2021",
      status: "Completado",
      url: "https://credentials.edx.org/credentials/e6035ea926944aa98969ddb978ea66f8/",
    },
    {
      institution: "Harvard",
      title: "Introduction to Cybersecurity",
      year: "2026",
      status: "En curso",
    },
  ],

  softSkills: [
    "Resolución de Problemas",
    "Comunicación Efectiva",
    "Trabajo en Equipo y Colaboración",
    "Adaptabilidad a Nuevas Tecnologías",
    "Atención al Detalle",
    "Compromiso con la Innovación",
    "Liderazgo",
    "Creatividad",
    "Facilidad de Aprendizaje",
  ],

  languages: [
    { language: "Español", level: "Nativo", percentage: 100 },
    { language: "Inglés", level: "B2", percentage: 75 },
  ],

  contact: {
    email: "ioavmizra22@gmail.com",
    phone: "+57 301 403 2120",
    linkedin: "https://linkedin.com/in/ioav-mizrachi-001377355",
    github: "https://github.com/IoavM",
    portfolio: "https://portafolio-ioav.vercel.app/",
    cvUrlEs: "/CV-Ioav-Mizrachi-Spanish-2026.pdf",
    cvUrlEn: "/CV-Ioav-Mizrachi-English-2026.pdf",
  },
};
