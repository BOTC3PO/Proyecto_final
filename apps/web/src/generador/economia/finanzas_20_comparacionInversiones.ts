// src/generators/economia/finanzas_20_comparacionInversiones.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";

type Respuesta =
  | "Conviene la inversión A"
  | "Conviene la inversión B"
  | "Ambas rinden lo mismo";

export const genFinanzasComparacionInversiones: GeneratorFn =
  makeQuizGenerator(
    20,
    "Comparación simple de inversiones del hogar",
    [
      (dificultad: Dificultad) => {
        const rangosPorDificultad = {
          basico: {
            capitalMin: 5,
            capitalMax: 15,
            tasaMin: 10,
            tasaMax: 25,
            tiempoMin: 1,
            tiempoMax: 1,
            diferenciaTasa: 6,
          },
          intermedio: {
            capitalMin: 8,
            capitalMax: 20,
            tasaMin: 12,
            tasaMax: 30,
            tiempoMin: 1,
            tiempoMax: 1,
            diferenciaTasa: 4,
          },
          avanzado: {
            capitalMin: 10,
            capitalMax: 30,
            tasaMin: 12,
            tasaMax: 35,
            tiempoMin: 1,
            tiempoMax: 2,
            diferenciaTasa: 4,
          },
            capitalMin: 12,
            capitalMax: 40,
            tasaMin: 15,
            tasaMax: 40,
            tiempoMin: 1,
            tiempoMax: 3,
            diferenciaTasa: 3,
          },
            capitalMin: 15,
            capitalMax: 50,
            tasaMin: 18,
            tasaMax: 45,
            tiempoMin: 1,
            tiempoMax: 4,
            diferenciaTasa: 2,
          },
        };

        const rango = rangosPorDificultad[dificultad];
        const capital = randInt(rango.capitalMin, rango.capitalMax) * 10000;
        const tasaA = randInt(rango.tasaMin, rango.tasaMax);
        const tasaB = tasaA + randInt(-rango.diferenciaTasa, rango.diferenciaTasa);
        const tiempoA = randInt(rango.tiempoMin, rango.tiempoMax);
        const tiempoB = randInt(rango.tiempoMin, rango.tiempoMax);

        const rendimientoA = capital * (tasaA / 100) * tiempoA;
        const rendimientoB = capital * (tasaB / 100) * tiempoB;

        let respuesta: Respuesta;
        if (rendimientoA > rendimientoB) {
          respuesta = "Conviene la inversión A";
        } else if (rendimientoB > rendimientoA) {
          respuesta = "Conviene la inversión B";
        } else {
          respuesta = "Ambas rinden lo mismo";
        }

        const opciones: Respuesta[] = [
          "Conviene la inversión A",
          "Conviene la inversión B",
          "Ambas rinden lo mismo",
        ];
        const indiceCorrecto = opciones.indexOf(respuesta);

        return {
          enunciado:
            `Una familia quiere invertir $ ${capital.toLocaleString(
              "es-AR"
            )}.\n\n` +
            `Inversión A: rinde un ${tasaA}% anual durante ${tiempoA} año(s).\n` +
            `Inversión B: rinde un ${tasaB}% anual durante ${tiempoB} año(s).\n\n` +
            `Suponiendo el mismo riesgo y sin otros costos, ¿cuál conviene más?`,
          opciones,
          indiceCorrecto,
          explicacion:
            "Para comparar inversiones de igual riesgo, se calcula cuánto rinde cada una según tasa y tiempo. La opción con mayor rendimiento total es la más conveniente. Si rinden igual, ambas opciones son equivalentes.",
        };
      },
    ]
  );
