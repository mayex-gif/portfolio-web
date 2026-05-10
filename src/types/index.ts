// src/types/index.tsx

// Definiciones de qué forma tienen tus datos
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  linkUrl?: string; // El "?" significa que es opcional
  githubUrl?: string;
  category: 'Web' | 'Security' | 'Hardware'; 
}

export interface PortfolioData {
  projects: Project[];
}
