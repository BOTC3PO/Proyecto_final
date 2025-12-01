// src/generators/economia/finanzas_16_interesCompuesto.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genFinanzasInteresCompuesto: GeneratorFn = makeQuizGenerator(
  16,
  "Interés compuesto (capital × (1 + i)^t)",
  [
    (_dificultad: Dificultad) => {
      const capital = randInt(10, 50) * 10000; // 100.000 a 500.000
      const tasa = randInt(5, 20);             // 5% a 20% anual
      const tiempo = randInt(1, 4);            // 1 a 4 años

      // M = C (1 + i)^t
      const montoReal = Math.round(
        capital * Math.pow(1 + tasa / 100, tiempo)
      );

      // Generamos 4 opciones alrededor del monto correcto
      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(montoReal);

      while (opcionesNumericas.size < 4) {
        const desvioPorc = randInt(-25, 25); // ±25%
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

      return {
        enunciado:
          `Una persona invierte $ ${capital.toLocaleString("es-AR")} ` +
          `al interés compuesto del ${tasa}% anual durante ${tiempo} año(s).\n` +
          `¿Cuál es el monto aproximado al final del período? (Usar M = C × (1 + i)^t)`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el interés compuesto el monto final se calcula con M = C × (1 + i)^t, donde C es el capital inicial, i la tasa en forma decimal y t el tiempo en años. Cada año se calcula el interés sobre el nuevo saldo.",
      };
    },
  ]
);
