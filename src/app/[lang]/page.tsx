import esDict from '@/dictionaries/es.json';
import enDict from '@/dictionaries/en.json';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsBento from '@/components/sections/ProjectsBento';

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const dict = lang === 'en' ? enDict : esDict;

  return (
    <main className="flex flex-col min-h-screen bg-gray-950 text-gray-200">
      
      {/* Le pasamos solo la parte del JSON que el Hero necesita */}
      <HeroSection data={dict.hero} />

      {/* Le pasamos la lista de proyectos */}
      <ProjectsBento data={dict.projectsSection} />

      {/* Aquí irían tus otras secciones */}

    </main>
  );
}