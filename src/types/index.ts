// src/types/index.ts

export interface NavbarData {
  title: string;
  home: string;
  education: string;
  certifications: string;
  interests: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  subtitle: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  linkUrlLabel: string;
  linkUrl?: string; // El "?" significa que es opcional
  githubUrlLabel: string;
  githubUrl?: string;
  category: string;
}

export interface ProjectsData {
  items: ProjectItem[];
}

export interface InfoItem {
  id: string;
  title: string;
  year: string;
  linkLabel: string;
  linkUrl?: string;
}

export interface InfoData {
  id: string;
  title: string;
  items: InfoItem[];
}
  