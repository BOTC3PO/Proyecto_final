// src/generators/economia/finanzas_16_interesCompuesto.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

export const genFinanzasInteresCompuesto: GeneratorFn = makeQuizGenerator(
  16,
  "Interés compuesto (capital × (1 + i)^t)",
  [
    (dificultad: Dificultad) => {
      const [capitalMin, capitalMax] = resolveTemaRange(16, dificultad, "capital", [5, 15]);
      const [tasaMin, tasaMax] = resolveTemaRange(16, dificultad, "tasa", [4, 10]);
      const [tiempoMin, tiempoMax] = resolveTemaRange(16, dificultad, "tiempo", [1, 2]);
      const [desvioMin, desvioMax] = resolveTemaRange(16, dificultad, "desvio", [-35, 35]);

      const capital = randInt(capitalMin, capitalMax) * 10000;
      const tasa = randInt(tasaMin, tasaMax);
      const tiempo = randInt(tiempoMin, tiempoMax);

      // M = C (1 + i)^t
      const montoReal = Math.round(
        capital * Math.pow(1 + tasa / 100, tiempo)
      );

      // Generamos 4 opciones alrededor del monto correcto
      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(montoReal);

      while (opcionesNumericas.size < 4) {
        const desvioPorc = randInt(desvioMin, desvioMax);
        const candidato = Math.round(
          montoReal * (1 + desvioPorc / 100)
        );
        if (candidato > 0) {
          opcionesNumericas.add(candidato);
        }
      }

      const opciones = Array.from(opcionesNumericas).map(
        (v) => "$ " + v.toLocaleString("es-AR")
      );

      const correcta = "$ " + montoReal.toLocaleString("es-AR");
      const indiceCorrecto = opciones.indexOf(correcta);

      const fallbackEnunciado =
        `Una persona invierte $ ${capital.toLocaleString("es-AR")} ` +
        `al interés compuesto del ${tasa}% anual durante ${tiempo} año(s).\n` +
        `¿Cuál es el monto aproximado al final del período? (Usar M = C × (1 + i)^t)`;

      return {
        enunciado: resolveTemaEnunciado(16, { capital, tasa, tiempo, montoReal }, fallbackEnunciado),
        opciones,
        indiceCorrecto,
        explicacion:
          "En el interés compuesto el monto final se calcula con M = C × (1 + i)^t, donde C es el capital inicial, i la tasa en forma decimal y t el tiempo en años. Cada año se calcula el interés sobre el nuevo saldo.",
      };
    },
  ]
);
