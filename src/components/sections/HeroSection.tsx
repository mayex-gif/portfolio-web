"use client";

import Carousel from "@/components/ui/Carousel";
import { HeroData, ProjectsData, ProjectItem } from "@/types";

interface HeroSectionProps {
  heroData: HeroData;
  projectsData: ProjectsData;
}

export default function HeroSection({ heroData, projectsData }: HeroSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[200vh] md:min-h-[100vh] w-full pt-24 md:pt-0">
      
      {/* Columna Izquierda: Tu Info */}
      <div className="flex flex-col justify-center px-8 md:px-10 min-h-[100vh]">
        <p className="text-green-500 font-mono mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>{heroData.greeting}</p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 animate-fade-up" style={{ animationDelay: '300ms' }}>{heroData.name}</h1>
        {/* Agregado el subtítulo que faltaba renderizar */}
        <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-gray-300 mb-6 animate-fade-up" style={{ animationDelay: '500ms' }}>{heroData.subtitle}</h2>
        <p className="lg:text-lg text-gray-500 max-w-2xl animate-fade-up" style={{ animationDelay: '700ms' }}>{heroData.description}</p>
      </div>

      {/* Columna Derecha: Carousel de Proyectos */}
      <div className="w-full h-full min-h-[100vh] animate-fade-up" style={{ animationDelay: '900ms' }}>
        <Carousel
          items={projectsData.items} 
          renderItem={(project: ProjectItem) => (
            <div className="w-full h-full relative flex items-end p-8 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent overflow-hidden">
              <img
                src={`/images/${project.id}.png`}
                className="inset-0 w-full h-full object-fill md:object-cover opacity-50 absolute"
                alt={project.title}
                onError={(e) => {
                  // Fallback por si no tenés la imagen todavía en public/images/
                  e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800";
                }}
              />
            
              {/* CAPA DE DEGRADADO: Se superpone a la imagen y se funde con el fondo abajo */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/0 to-gray-950 z-10 pointer-events-none" />

              <div className="relative z-20 w-full">
                <span className="text-xs font-mono text-green-400 uppercase tracking-wider">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] bg-gray-900 border border-gray-800 text-gray-300 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-300 hover:text-green-400 underline underline-offset-4 decoration-gray-300/30 hover:decoration-green-400 transition-all">
                      {project.githubUrlLabel}
                    </a>
                  )}
                  {project.linkUrl && (
                    <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="ml-4 text-sm font-mono text-gray-300 hover:text-green-400 underline underline-offset-4 decoration-gray-300/30 hover:decoration-green-400 transition-all" >
                      {project.linkUrlLabel || "Ver Enunciado"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        />
      </div>

    </section>
  );
}