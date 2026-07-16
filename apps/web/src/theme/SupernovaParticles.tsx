import { useEffect, useRef } from "react";
import anime from "animejs";

const PARTICLE_COUNT = 18;

/**
 * Capa de embers para el tema "Supernova": puntos que derivan y laten
 * sobre el fondo estático (los `body::before`/`::after` de index.css,
 * mismo patrón que aurora-boreal/cosmos/magma). Sólo se monta cuando el
 * tema activo es "supernova" — cero costo para el resto de los temas.
 *
 * El `@media (prefers-reduced-motion: reduce)` global de index.css
 * neutraliza la propiedad CSS `animation`, pero anime.js anima `style`
 * inline directamente — por eso el chequeo explícito acá antes de
 * arrancar el loop.
 */
export function SupernovaParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const particles: HTMLSpanElement[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement("span");
      particle.className = "vb-supernova-particle";
      const size = 1 + Math.random() * 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      container.appendChild(particle);
      particles.push(particle);
    }

    const animation = anime({
      targets: particles,
      translateX: () => anime.random(-50, 50),
      translateY: () => anime.random(-50, 50),
      scale: () => 0.6 + Math.random() * 1.2,
      opacity: () => 0.2 + Math.random() * 0.6,
      easing: "easeInOutSine",
      duration: () => 4000 + Math.random() * 4000,
      delay: anime.stagger(150),
      direction: "alternate",
      loop: true,
    });

    return () => {
      animation.pause();
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return <div ref={containerRef} className="vb-supernova-particles" aria-hidden="true" />;
}
