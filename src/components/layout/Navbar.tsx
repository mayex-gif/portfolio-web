import Link from 'next/link';
import { NavbarData } from "@/types";

interface NavbarSectionProps {
  navbarData: NavbarData;
  lang: "en" | "es"; // Tipado correcto para el idioma
}

export default function Navbar({ navbarData, lang }: NavbarSectionProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 liquid-glass px-6 py-4 min-h-[10vh] flex items-center animate-fade-up" style={{ animationDelay: '700ms' }}>
      {/*<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-900 bg-transparent px-6 py-4 min-h-[10vh] flex items-center">*/}
      {/*<nav className="w-full h-full bg-gray-950/80 backdrop-blur-md border-b border-gray-900 px-6 py-4 min-h-[10vh] flex items-center">*/}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full h-full">

        {/* Logo / Título */}
        <div className="text-xl font-bold text-green-400 font-mono tracking-wider animate-fade-up" style={{ animationDelay: '1100ms' }}>
          {navbarData.title}
        </div>

        {/* Enlaces de Navegación */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 font-medium text-gray-300 animate-fade-up" style={{ animationDelay: '1100ms' }}>
          <Link href={`/${lang}`} className="hover:text-green-400 transition-colors">
            {navbarData.home}
          </Link>
          <Link href={`/${lang}/#section-01`} className="hover:text-green-400 transition-colors">
            {navbarData.education}
          </Link>
          <Link href={`/${lang}/#section-02`} className="hover:text-green-400 transition-colors">
            {navbarData.certifications}
          </Link>
          <Link href={`/${lang}/#section-03`} className="hover:text-green-400 transition-colors">
            {navbarData.interests}
          </Link>
          {/* Selector de Idioma Alternable */}
          <Link
            href={lang === 'es' ? '/en' : '/es'}
            className="bg-gray-900 border border-gray-800 hover:border-green-500/50 hover:text-green-400 px-3 py-1 rounded-md text-xs font-mono transition-all"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </Link>
        </div>

      </div>
    </nav>
  );
}