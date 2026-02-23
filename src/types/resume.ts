export type Locale = "pt-br" | "en-us";

export interface ResumeData {
  header: {
    name: string;
    location: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    linkedinLabel: string;
    githubUrl: string;
    githubLabel: string;
  };
  summary: {
    title: string;
    text: string;
  };
  experience: {
    title: string;
    entries: ExperienceEntry[];
  };
  education: {
    title: string;
    degree: string;
    institution: string;
    period: string;
  };
  certifications: {
    title: string;
    items: string[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  languages: {
    title: string;
    items: string[];
  };
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  label: string;
  items: string;
}
