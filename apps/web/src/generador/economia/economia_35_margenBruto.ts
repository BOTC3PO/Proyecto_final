// src/generators/economia/economia_35_margenBruto.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genMargenBruto: GeneratorFn = makeQuizGenerator(
  35,
  "Margen bruto: Ganancia Bruta / Ventas",
  [
    (_dificultad: Dificultad) => {
      const ventas = randInt(100, 300) * 1000;
      const costoVentas = randInt(50, 250) * 1000;

      const gananciaBruta = ventas - costoVentas;
      const margen = (gananciaBruta / ventas) * 100;
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
          )} y Costo de ventas por $ ${costoVentas.toLocaleString(
            "es-AR"
          )}.\n` +
          `La Ganancia Bruta es Ventas – Costo de ventas.\n` +
          `¿Cuál es el margen bruto aproximado (Ganancia Bruta / Ventas × 100)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El margen bruto se calcula como (Ganancia Bruta / Ventas) × 100. Indica qué porcentaje de cada peso vendido queda para cubrir otros gastos y generar beneficio.",
      };
    },
  ]
);
