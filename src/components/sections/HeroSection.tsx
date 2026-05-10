// Definimos qué datos espera recibir este componente
interface HeroProps {
    data: {
        greeting: string;
        name: string;
        subtitle: string;
        description: string;
    };
}

export default function HeroSection({ data }: HeroProps) {
    return (
        <section className="flex flex-col items-start justify-center min-h-[80vh] px-8 md:px-24 mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 w-4/4 py-16 gap-12">
                <div>
                    <p className="text-green-500 font-mono mb-4">{data.greeting}</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        {data.name}
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-8 max-w-2xl">
                        {data.subtitle}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mb-10">
                        {data.description}
                    </p>
                </div>
                <div className="relative w-full" id="default-carousel" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item id="slide1">
                            <img src="/file.svg" alt="..." />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}