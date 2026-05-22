import { InfoData } from "@/types";

interface InfoSectionProps {
    infoData: InfoData[]; // Ahora recibe el arreglo de secciones
}

export default function InfoSection({ infoData }: InfoSectionProps) {
    return (
        <div className="w-full space-y-16 pt-10">
            {infoData.map((section) => (
                <section key={section.id} className="flex flex-col px-8 md:px-24 my-20">

                    {/* 
                    Título de la Sección (Ej: 01. Educación) 
                    Si section.id es "01", el id será "section-01" (independiente del idioma)
                    */}
                    <h3 id={`section-${section.id}`} className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide scroll-mt-24">
                        <span className="text-green-500 font-mono mr-3 text-xl md:text-2xl">
                            {section.id}.
                        </span>
                        {section.title}
                    </h3>

                    {/* Grilla de Tarjetas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {section.items.map((item) => (
                            <div
                                key={item.id}
                                className="liquid-glass-gray p-6 rounded-md hover:border-green-500/30 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="text-xs font-mono text-gray-500 mb-2">{item.year}</div>
                                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>

                                <div className="mt-4">
                                    <a
                                        // Si item.linkUrl existe, usa ese link; si no, construye la ruta a la imagen local
                                        href={item.linkUrl ? item.linkUrl : `/images/${item.id}.png`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-mono text-green-500 hover:text-green-400 underline underline-offset-4 decoration-green-500/30 hover:decoration-green-400 transition-all"
                                    >
                                        {item.linkLabel}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
            ))}
        </div>
    );
}