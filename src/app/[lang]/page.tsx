import { getDictionary } from "@/dictionaries";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import Footer from "@/components/layout/Footer";
import CyberBackground from "@/components/layout/CyberBackground";

interface PageProps {
  params: Promise<{ lang: "en" | "es" }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center min-h-screen text-white">
     
      {/* COMPONENTE DE FONDO INYECTADO AQUÍ */}
      <CyberBackground />

      {/* Navbar arriba inyectando datos y el idioma actual */}
      <Navbar navbarData={dict.navbar} lang={lang} />

      {/* Contenedor principal de secciones */}
      <HeroSection heroData={dict.hero} projectsData={dict.projects} />

      {/* Las próximas secciones irán acá abajo */}
      <InfoSection infoData={dict.info.infoItems} />

      {/* <Footer footerData={dict.footer} /> */}
      <Footer footerData={dict.footer}/>
    </main>
  );
}