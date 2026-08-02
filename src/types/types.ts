export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
}

export interface AboutInfo {
  description: string;
  highlights: Highlight[];
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  level?: number;
  levelText?: string;
  subskills?: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface ProjectItem {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  repository: string;
  demo: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa?: string;
  period: string;
  location?: string;
}

export interface CertificationItem {
  institution: string;
  title: string;
  year: string;
  status: string;
  url?: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  percentage: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  cvUrlEs: string;
  cvUrlEn: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: AboutInfo;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  softSkills: string[];
  languages: LanguageItem[];
  contact: ContactInfo;
}
