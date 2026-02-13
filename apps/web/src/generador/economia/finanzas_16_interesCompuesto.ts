// src/generators/economia/finanzas_16_interesCompuesto.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";

export const genFinanzasInteresCompuesto: GeneratorFn = makeQuizGenerator(
  16,
  "Interés compuesto (capital × (1 + i)^t)",
  [
    (dificultad: Dificultad) => {
      const rangosPorDificultad = {
        basico: {
          capitalMin: 5,
          capitalMax: 15,
          tasaMin: 4,
          tasaMax: 10,
          tiempoMin: 1,
          tiempoMax: 2,
          desvio: 35,
        },
        intermedio: {
          capitalMin: 10,
          capitalMax: 30,
          tasaMin: 6,
          tasaMax: 15,
          tiempoMin: 1,
          tiempoMax: 3,
          desvio: 25,
        },
        avanzado: {
          capitalMin: 15,
          capitalMax: 40,
          tasaMin: 8,
          tasaMax: 18,
          tiempoMin: 2,
          tiempoMax: 4,
          desvio: 20,
        },
        experto: {
          capitalMin: 20,
          capitalMax: 60,
          tasaMin: 10,
          tasaMax: 22,
          tiempoMin: 2,
          tiempoMax: 5,
          desvio: 15,
        },
        maestro: {
          capitalMin: 30,
          capitalMax: 80,
          tasaMin: 12,
          tasaMax: 25,
          tiempoMin: 3,
          tiempoMax: 6,
          desvio: 12,
        },
      };

      const rango = rangosPorDificultad[dificultad];
      const capital = randInt(rango.capitalMin, rango.capitalMax) * 10000;
      const tasa = randInt(rango.tasaMin, rango.tasaMax);
      const tiempo = randInt(rango.tiempoMin, rango.tiempoMax);

      // M = C (1 + i)^t
      const montoReal = Math.round(
        capital * Math.pow(1 + tasa / 100, tiempo)
      );

      // Generamos 4 opciones alrededor del monto correcto
      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(montoReal);

      while (opcionesNumericas.size < 4) {
        const desvioPorc = randInt(-rango.desvio, rango.desvio);
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
