import type { PortfolioData } from "../types/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ioav Mizrachi",
    title: "Front-End Developer & UX/UI Designer",
    subtitle:
      "Transformo ideas en experiencias digitales excepcionales. Combino desarrollo front-end, diseño UX/UI y pensamiento de producto para crear soluciones que impactan.",
    location: "Medellín, Colombia",
  },

  about: {
    description:
      "Soy un profesional multidisciplinario con una visión integral del desarrollo digital. Mi perfil combina habilidades técnicas en desarrollo front-end con una sólida comprensión del diseño centrado en el usuario y estrategias de e-commerce. Me apasiona crear productos digitales que no solo funcionen impecablemente, sino que ofrezcan experiencias memorables. Con experiencia en entornos empresariales reales, entiendo el puente entre las necesidades del negocio y la implementación técnica.",
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

  experience: [
    {
      company: "Surtitodo",
      role: "IT & E-commerce Specialist",
      period: "2025",
      description:
        "Participación activa en el equipo de tecnología y e-commerce de una de las cadenas de retail más importantes de Colombia. Responsable del diseño, desarrollo e implementación de soluciones digitales que impactaron directamente la experiencia del usuario y las operaciones comerciales online. Colaboración interdisciplinaria con equipos de tecnología, marketing y negocio para impulsar la transformación digital de la compañía.",
      responsibilities: [
        "Diseño y mejora de interfaces web centradas en la experiencia del usuario, aplicando principios de UX/UI para optimizar la conversión y usabilidad.",
        "Desarrollo front-end de componentes e interfaces interactivas utilizando tecnologías modernas del ecosistema web.",
        "Gestión integral del catálogo digital: publicación, categorización y optimización de productos en plataformas de e-commerce.",
        "Estructuración y organización de información de productos de moda y vestuario para mejorar la experiencia de navegación y búsqueda.",
        "Planificación y ejecución de campañas promocionales y comerciales digitales alineadas con los objetivos de negocio.",
        "Colaboración directa con equipos multidisciplinarios de tecnología, marketing y operaciones comerciales.",
        "Participación en procesos de transformación digital, incluyendo la optimización de flujos operativos en e-commerce.",
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

  skills: [
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

  projects: [
    {
      title: "I-HOMOTIC",
      image: "/projects/ihomotic.webp",
      description: "Plataforma interactiva de domótica colombiana que permite simular y presupuestar la automatización de espacios. Incluye visualizador 3D interactivo y estimación de ahorro energético.",
      technologies: ["React", "TypeScript", "Vite", "Vanilla CSS"],
      repository: "https://github.com/IoavM/I-HOMOTIC",
      demo: "https://i-homotic.vercel.app/",
    },
    {
      title: "MACABI",
      image: "/projects/macabi.webp",
      description: "Sitio web del complejo deportivo de canchas sintéticas en Popayán, Colombia. Permite explorar las instalaciones de primer nivel, consultar la escuela de fútbol y agilizar el alquiler de canchas por WhatsApp.",
      technologies: ["React", "JavaScript", "Vite", "Vanilla CSS"],
      repository: "https://github.com/IoavM/Macabi",
      demo: "https://macabi.vercel.app/",
    },
    {
      title: "FileMaster",
      image: "/projects/filemaster.png",
      description: "Plataforma web todo en uno para procesar PDFs (unir, dividir por rango), comprimir imágenes, eliminar fondos con IA y convertir formatos. Diseñado con UX premium y descarga automática en ZIP por lotes.",
      technologies: ["React", "TypeScript", "FastAPI", "Python", "TailwindCSS"],
      repository: "https://github.com/IoavM/FileMaster",
      demo: "https://file-master-chi.vercel.app/",
    },
  ],

  education: [
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

  languages: [
    { language: "Español", level: "Nativo", percentage: 100 },
    { language: "Inglés", level: "B2", percentage: 75 },
  ],

  contact: {
    email: "ioavmizra22@gmail.com",
    phone: "+57 301 403 2120",
    linkedin: "https://linkedin.com/in/ioav-mizrachi-001377355",
    github: "https://github.com/IoavM",
    portfolio: "#",
    cvUrl: "/Hv_IoavMizrachiM.pdf",
  },
};
