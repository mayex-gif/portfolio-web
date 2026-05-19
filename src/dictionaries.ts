import 'server-only'; // Asegura que esto solo se ejecute en el servidor

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'es') => {
  // Si por algún motivo llega un locale no soportado, cae a inglés por defecto
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries['en']();
};