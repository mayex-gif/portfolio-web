import { getDictionary } from "@/dictionaries";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";

interface PageProps {
  params: Promise<{ lang: "en" | "es" }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-950 text-white selection:bg-green-500/30">

      {/* Navbar arriba inyectando datos y el idioma actual */}
      <Navbar navbarData={dict.navbar} lang={lang} />

      {/* Contenedor principal de secciones */}
      <HeroSection heroData={dict.hero} projectsData={dict.projects} />

      {/* Las próximas secciones irán acá abajo */}
      <InfoSection infoData={dict.info.infoItems} />

      {/* <Footer footerData={dict.footer} /> */}
    </main>
  );
}