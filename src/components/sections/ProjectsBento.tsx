// src/components/sections/ProjectsBento.tsx
import { ProjectItem } from '@/types';

interface ProjectsBentoProps {
  data: {
    title: string;
    items: ProjectItem[]; // Usas el tipo que importaste
  };
}

export default function ProjectsBento({ data }: ProjectsBentoProps) {
  return (
    <section className="flex flex-col py-20 px-8 md:px-24 mx-0">
      <h3 className="text-3xl font-bold text-white mb-10">
        <span className="text-green-500 mr-2">01.</span> {data.title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

        {/* LA MAGIA DEL .MAP() */}
        {/* Recorremos el array 'items' que viene del diccionario */}
        {data.items.map((project, index) => (

          
          <div key={project.id} className={`bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-gray-700 transition-colors w-full`}>
            <div className="text-green-400 font-mono text-sm mb-4">{project.category}</div>
            <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
            <p className="text-gray-400 mb-6">{project.description}</p>

            {/* OTRO .MAP() ANIDADO */}
            {/* Lo usamos para generar las "pastillas" con las tecnologías (React, Java, etc.) */}
            <div className="flex gap-5 flex-wrap">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-mono text-gray-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-10 mt-6">
              <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                {project.linkUrlLabel}
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                {project.githubUrlLabel}
              </a>
            </div>
          </div>

        ))}

      </div>
    </section>
  );
}