"use client";

import Carousel from "@/components/ui/Carousel";
import { HeroData, ProjectsData, ProjectItem } from "@/types";

interface HeroSectionProps {
  heroData: HeroData;
  projectsData: ProjectsData;
}

export default function HeroSection({ heroData, projectsData }: HeroSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[200vh] md:min-h-[100vh] w-full">
      
      {/* Columna Izquierda: Tu Info */}
      <div className="flex flex-col justify-center px-8 md:px-24 min-h-[100vh]">
        <p className="text-green-500 font-mono mb-4">{heroData.greeting}</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{heroData.name}</h1>
        {/* Agregado el subtítulo que faltaba renderizar */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">{heroData.subtitle}</h2>
        <p className="text-lg text-gray-500 max-w-2xl">{heroData.description}</p>
      </div>

      {/* Columna Derecha: Carousel de Proyectos */}
      <div className="w-full h-full min-h-[100vh]">
        <Carousel
          items={projectsData.items} 
          renderItem={(project: ProjectItem) => (
            <div className="w-full h-full relative flex items-end p-8 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent overflow-hidden">
              <img
                src={`/images/${project.id}.png`}
                className="inset-0 w-full h-full object-cover opacity-30 absolute"
                alt={project.title}
                onError={(e) => {
                  // Fallback por si no tenés la imagen todavía en public/images/
                  e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800";
                }}
              />
              <div>
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
              </div>
            </div>
          )}
        />
      </div>

    </section>
  );
}