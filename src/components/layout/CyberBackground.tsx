"use client";

import { useEffect, useRef } from "react";

export default function CyberBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const fontSize = 14;
        const columnWidth = fontSize * 1.5;
        const columns = Math.ceil(canvas.width / columnWidth);

        const keywords = [
            "0", "1", "01", "10", "ROOT", "SPRING", "JAVA", "SSH",
            "BYPASS", "CVE", "NVD", "INJECT", "PAYLOAD", "TOKEN", "AUTH", "SECURE",
            "SOCKET", "FETCH", "POST", "GET", "RECV", "PING", "PONG", "BUFFER"
        ];

        interface ActiveWord {
            text: string;
            y: number;
            speed: number;
        }

        const columnLayers: ActiveWord[][] = Array(columns).fill(0).map(() => {
            // Aumentamos un poco la densidad para que no quede vacío
            const wordsInColumn = Math.floor(Math.random() * 3) + 3; 
            const words: ActiveWord[] = [];

            // Distribuimos las palabras iniciales separadas por un bloque de píxeles (ej. 300px)
            for (let k = 0; k < wordsInColumn; k++) {
                words.push({
                    text: keywords[Math.floor(Math.random() * keywords.length)],
                    y: -(k * 300) - (Math.random() * 100), 
                    speed: Math.random() * 3 + 1.5 
                });
            }
            return words;
        });

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        const draw = () => {
            // SOLUCIÓN 1: Opacidad al 0.2 para que el TRAIL verde sobreviva y deje estela
            ctx.fillStyle = "rgba(3, 7, 18, 0.6)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `bold ${fontSize}px monospace`;

            for (let i = 0; i < columnLayers.length; i++) {
                const x = i * columnWidth;
                const words = columnLayers[i];

                for (let w = 0; w < words.length; w++) {
                    const word = words[w];

                    const distanceToMouse = Math.hypot(x - mouseRef.current.x, word.y - mouseRef.current.y);

                    if (distanceToMouse < 100) {
                        ctx.fillStyle = "#309254"; 
                    } else {
                        // Un verde con un poquito más de opacidad base para el trail
                        ctx.fillStyle = "rgba(28, 107, 57, 0.4)"; 
                    }

                    for (let j = 0; j < word.text.length; j++) {
                        const letter = word.text.charAt(j);
                        const letterY = word.y + (j * fontSize);

                        if (letterY > 0 && letterY < canvas.height) {
                            ctx.fillText(letter, x, letterY);
                        }
                    }

                    const speedMultiplier = distanceToMouse < 100 ? 1 : 1;
                    word.y += word.speed * speedMultiplier;

                    // SOLUCIÓN 2: Verificamos que 'word.y' (la parte de arriba de la palabra) haya cruzado el fondo. 
                    // Así, toda la palabra ya desapareció antes de resetearse.
                    if (word.y > canvas.height) {
                        // SOLUCIÓN 3: Sistema Anti-Colisión en el reseteo
                        // Generamos una Y inicial aleatoria arriba de todo
                        let newY = -100 - (Math.random() * 300);
                        
                        // Revisamos las otras palabras de ESTA misma columna para ver si alguna está muy cerca
                        for (let otherWord of words) {
                            if (otherWord !== word) {
                                // Si hay una palabra a menos de 150 píxeles de donde quiero nacer...
                                if (Math.abs(otherWord.y - newY) < 150) {
                                    // Me empujo 200 píxeles más arriba para evitar el choque
                                    newY -= 200; 
                                }
                            }
                        }

                        word.y = newY;
                        word.text = keywords[Math.floor(Math.random() * keywords.length)];
                        word.speed = Math.random() * 3 + 1.5;
                    }
                }
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10 block pointer-events-none" />;
}