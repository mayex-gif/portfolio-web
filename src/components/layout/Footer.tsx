import { FooterData } from "@/types";

interface FooterSectionProps {
  footerData: FooterData;
}

export default function Footer({ footerData }: FooterSectionProps) {
  return (
    <footer className="w-full border-t border-gray-800 liquid-glass bg-gray-950/40 py-12 px-8 md:px-24 mt-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Izquierda: Texto de llamada a la acción */}
        <div className="max-w-md">
          <h4 className="text-2xl font-bold text-white mb-2 font-mono tracking-wide">
            {footerData.title}
          </h4>
          <p className="text-gray-400 text-sm">
            {footerData.subtitle}
          </p>
        </div>

        {/* Derecha: Botón de Email y Enlaces a Redes */}
        <div className="flex grid grid-col-2 items-start sm:items-center gap-3">
          <h4 className="text-2xl font-bold text-white mb-2 font-mono tracking-wide">{footerData.subtitle2}</h4>
          <div className="flex flex-row items-start sm:items-center gap-6">
            <a href={footerData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              {footerData.githubLabel}
            </a>
            <span className="text-gray-800">|</span>
            <a href={footerData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              {footerData.linkedinLabel}
            </a>
            <a href={`mailto:${footerData.email}`} className="liquid-glass-green hover:bg-green-400 font-bold px-5 py-3 rounded-lg text-sm font-mono transition-colors shadow-lg shadow-green-500/10">
              {footerData.buttonLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior de Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-900 mt-12 pt-6 text-center md:text-left text-xs font-mono text-gray-500">
        {footerData.copyright}
      </div>
    </footer>
  );
}