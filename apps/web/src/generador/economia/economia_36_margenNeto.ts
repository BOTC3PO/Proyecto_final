// src/generators/economia/economia_36_margenNeto.ts

import { type Dificultad, type GeneratorFn, makeQuizGenerator } from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genMargenNeto: GeneratorFn = makeQuizGenerator(
  36,
  "Margen neto: Resultado Neto / Ventas",
  [
    (_dificultad: Dificultad) => {
      const ventas = randInt(100, 300) * 1000;
      const resultadoNeto = randInt(20, 150) * 1000;

      const margen = (resultadoNeto / ventas) * 100;
      const margenRedondeado = Math.round(margen);

      const opcionCorrecta = margenRedondeado + " %";

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvio = randInt(-15, 15);
        const candidato = margenRedondeado + desvio;
        if (candidato > 0 && candidato < 100) {
          opcionesSet.add(candidato + " %");
        }
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `Una empresa tiene Ventas por $ ${ventas.toLocaleString(
            "es-AR"
          )} y un Resultado Neto de $ ${resultadoNeto.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el margen neto aproximado (Resultado Neto / Ventas × 100)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El margen neto se calcula como (Resultado Neto / Ventas) × 100. Indica qué porcentaje de cada peso vendido queda como ganancia final.",
      };
    },
  ]
);
