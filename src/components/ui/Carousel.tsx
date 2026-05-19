"use client";

import { useState } from "react";

// Diseñamos la interfaz genérica aceptando un tipo "T"
interface CarouselProps<T> {
  items: T[];
  // Esta función le dice al carrusel cómo dibujar cada ítem individualmente
  renderItem: (item: T, index: number) => React.ReactNode;
}

export default function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full h-full bg-gray-900 overflow-hidden group">
      
      {/* Contenedor de Slides */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Delegamos el renderizado al componente padre */}
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Controles del Carrusel */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 p-2 rounded-full bg-gray-950/60 text-white border border-gray-800 hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 p-2 rounded-full bg-gray-950/60 text-white border border-gray-800 hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100"
      >
        ▶
      </button>

      {/* Indicadores de posición */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-green-500 w-4" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}