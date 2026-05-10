import Link from 'next/link';

export default function Navbar({ lang, dict }: { lang: string, dict: any }) {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 border-b border-gray-800">
      <div className="text-xl font-bold text-green-400">{dict.navigation.title}</div>
      <div className="space-x-6">
        <Link href={`/${lang}`} className="hover:text-green-400">{dict.navigation.home}</Link>
        <Link href={`/${lang}/projects`} className="hover:text-green-400">{dict.navigation.projects}</Link>
        {/* Selector de idioma */}
        <Link href={lang === 'es' ? '/en' : '/es'} className="bg-gray-800 px-3 py-1 rounded text-sm">
          {lang === 'es' ? 'EN' : 'ES'}
        </Link>
      </div>
    </nav>
  );
}