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
  techStack?: string[];
  linkUrlLabel?: string;
  linkUrl?: string;
  githubUrlLabel?: string;
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
  description?: string;
  linkLabel: string;
  linkUrl?: string;
}

export interface InfoData {
  id: string;
  title: string;
  items: InfoItem[];
}

export interface FooterData {
  title: string;
  subtitle: string;
  subtitle2: string;
  buttonLabel: string;
  email: string;
  githubLabel: string;
  githubUrl: string;
  linkedinLabel: string;
  linkedinUrl: string;
  copyright: string;
}
  