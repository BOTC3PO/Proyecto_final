// src/generators/economia/finanzas_15_interesSimple.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";

export const genFinanzasInteresSimple: GeneratorFn = makeQuizGenerator(
  15,
  "Interés simple (capital × tasa × tiempo)",
  [
    (dificultad: Dificultad) => {
      const rangosPorDificultad = {
        basico: {
          capitalMin: 5,
          capitalMax: 20,
          tasaMin: 5,
          tasaMax: 10,
          tiempoMin: 1,
          tiempoMax: 2,
          desvio: 40,
        },
        intermedio: {
          capitalMin: 10,
          capitalMax: 50,
          tasaMin: 8,
          tasaMax: 20,
          tiempoMin: 1,
          tiempoMax: 3,
          desvio: 30,
        },
        avanzado: {
          capitalMin: 20,
          capitalMax: 80,
          tasaMin: 10,
          tasaMax: 30,
          tiempoMin: 2,
          tiempoMax: 4,
          desvio: 20,
        },
          capitalMin: 50,
          capitalMax: 120,
          tasaMin: 15,
          tasaMax: 35,
          tiempoMin: 2,
          tiempoMax: 5,
          desvio: 15,
        },
          capitalMin: 80,
          capitalMax: 200,
          tasaMin: 20,
          tasaMax: 40,
          tiempoMin: 3,
          tiempoMax: 6,
          desvio: 10,
        },
      };

      const rango = rangosPorDificultad[dificultad];
      const capital = randInt(rango.capitalMin, rango.capitalMax) * 1000;
      const tasa = randInt(rango.tasaMin, rango.tasaMax);
      const tiempoEnAnios = randInt(rango.tiempoMin, rango.tiempoMax);

      // Fórmula: I = C × i × t
      const interes = Math.round(
        capital * (tasa / 100) * tiempoEnAnios
      );

      // Creamos opciones alrededor del valor correcto
      const opcionCorrecta = interes;
      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(opcionCorrecta);

      while (opcionesNumericas.size < 4) {
        const desvioPorcentaje = randInt(-rango.desvio, rango.desvio);
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

      return {
        enunciado:
          `Una persona invierte $ ${capital.toLocaleString(
            "es-AR"
          )} al interés simple del ${tasa}% anual durante ${tiempoEnAnios} año(s).\n` +
          `¿Cuánto interés gana al final del período? (Usar I = C × i × t)`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el interés simple se usa la fórmula I = C × i × t, donde C es el capital inicial, i la tasa en forma decimal y t el tiempo en años. El interés se calcula siempre sobre el mismo capital inicial.",
      };
    },
  ]
);
