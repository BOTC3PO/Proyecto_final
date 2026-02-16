// src/generators/economia/finanzas_20_comparacionInversiones.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

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
        const [capitalMin, capitalMax] = resolveTemaRange(20, dificultad, "capital", [5, 15]);
        const [tasaMin, tasaMax] = resolveTemaRange(20, dificultad, "tasa", [10, 25]);
        const [tiempoMin, tiempoMax] = resolveTemaRange(20, dificultad, "tiempo", [1, 1]);
        const [diferenciaTasaMin, diferenciaTasaMax] = resolveTemaRange(20, dificultad, "diferenciaTasa", [-6, 6]);

        const capital = randInt(capitalMin, capitalMax) * 10000;
        const tasaA = randInt(tasaMin, tasaMax);
        const tasaB = tasaA + randInt(diferenciaTasaMin, diferenciaTasaMax);
        const tiempoA = randInt(tiempoMin, tiempoMax);
        const tiempoB = randInt(tiempoMin, tiempoMax);

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

        const fallbackEnunciado =
          `Una familia quiere invertir $ ${capital.toLocaleString(
            "es-AR"
          )}.\n\n` +
          `Inversión A: rinde un ${tasaA}% anual durante ${tiempoA} año(s).\n` +
          `Inversión B: rinde un ${tasaB}% anual durante ${tiempoB} año(s).\n\n` +
          `Suponiendo el mismo riesgo y sin otros costos, ¿cuál conviene más?`;

        return {
          enunciado: resolveTemaEnunciado(20, { capital, tasaA, tasaB, tiempoA, tiempoB }, fallbackEnunciado),
          opciones,
          indiceCorrecto,
          explicacion:
            "Para comparar inversiones de igual riesgo, se calcula cuánto rinde cada una según tasa y tiempo. La opción con mayor rendimiento total es la más conveniente. Si rinden igual, ambas opciones son equivalentes.",
        };
      },
    ]
  );
