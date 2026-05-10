// Definimos qué datos espera recibir este componente
interface ProjectsBentoProps {
    data: {
        title: string;
        items: Array<{
            id: string;
            title: string;
            subtitle: string;
            description: string;
            techStack: string[];
            category: string;
            linkUrl?: string;
            githubUrl?: string;
        }>;
    };
}

export default function ProjectsBento({ data }: ProjectsBentoProps) {
    return (
        <section className="flex flex-col items-start justify-center min-h-[80vh] px-8 md:px-24 max-w-6xl mx-auto w-full">
            <p className="text-green-500 font-mono mb-4">{data.title}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {data.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {data.items.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                        <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                        <p className="text-green-400 font-mono mb-2">{project.subtitle}</p>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-800">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            {project.linkUrl && (
                                <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                                    View Project
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}