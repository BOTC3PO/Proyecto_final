// src/generators/economia/finanzas_15_interesSimple.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

export const genFinanzasInteresSimple: GeneratorFn = makeQuizGenerator(
  15,
  "Interés simple (capital × tasa × tiempo)",
  [
    (dificultad: Dificultad) => {
      const [capitalMin, capitalMax] = resolveTemaRange(15, dificultad, "capital", [5, 20]);
      const [tasaMin, tasaMax] = resolveTemaRange(15, dificultad, "tasa", [5, 10]);
      const [tiempoMin, tiempoMax] = resolveTemaRange(15, dificultad, "tiempo", [1, 2]);
      const [desvioMin, desvioMax] = resolveTemaRange(15, dificultad, "desvio", [-40, 40]);

      const capital = randInt(capitalMin, capitalMax) * 1000;
      const tasa = randInt(tasaMin, tasaMax);
      const tiempoEnAnios = randInt(tiempoMin, tiempoMax);

      // Fórmula: I = C × i × t
      const interes = Math.round(
        capital * (tasa / 100) * tiempoEnAnios
      );

      // Creamos opciones alrededor del valor correcto
      const opcionCorrecta = interes;
      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(opcionCorrecta);

      while (opcionesNumericas.size < 4) {
        const desvioPorcentaje = randInt(desvioMin, desvioMax);
        const valor = Math.round(
          opcionCorrecta * (1 + desvioPorcentaje / 100)
        );
        if (valor > 0) opcionesNumericas.add(valor);
      }

      const opciones = Array.from(opcionesNumericas).map((v) =>
        "$ " + v.toLocaleString("es-AR")
      );

      const indiceCorrecto = opciones.indexOf(
        "$ " + opcionCorrecta.toLocaleString("es-AR")
      );

      const fallbackEnunciado =
        `Una persona invierte $ ${capital.toLocaleString(
          "es-AR"
        )} al interés simple del ${tasa}% anual durante ${tiempoEnAnios} año(s).\n` +
        `¿Cuánto interés gana al final del período? (Usar I = C × i × t)`;

      return {
        enunciado: resolveTemaEnunciado(15, { capital, tasa, tiempoEnAnios, interes }, fallbackEnunciado),
        opciones,
        indiceCorrecto,
        explicacion:
          "En el interés simple se usa la fórmula I = C × i × t, donde C es el capital inicial, i la tasa en forma decimal y t el tiempo en años. El interés se calcula siempre sobre el mismo capital inicial.",
      };
    },
  ]
);
