// src/generators/economia/finanzas_20_comparacionInversiones.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type Respuesta =
  | "Conviene la inversión A"
  | "Conviene la inversión B"
  | "Ambas rinden lo mismo";

export const genFinanzasComparacionInversiones: GeneratorFn =
  makeQuizGenerator(
    20,
    "Comparación simple de inversiones del hogar",
    [
      (_dificultad: Dificultad) => {
        const capital = randInt(5, 20) * 10000; // 50.000 a 200.000

        // Tasas anual(es) para A y B
        const tasaA = randInt(10, 40);
        // B cerca de A para que no sea obvio en todos los casos
        const tasaB = tasaA + randInt(-5, 5);

        let respuesta: Respuesta;
        if (tasaA > tasaB) {
          respuesta = "Conviene la inversión A";
        } else if (tasaB > tasaA) {
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
            )} durante 1 año.\n\n` +
            `Inversión A: rinde un ${tasaA}% anual.\n` +
            `Inversión B: rinde un ${tasaB}% anual.\n\n` +
            `Suponiendo el mismo riesgo y sin otros costos, ¿cuál conviene más?`,
          opciones,
          indiceCorrecto,
          explicacion:
            "Para comparar inversiones de igual riesgo y mismo plazo, se elige la que ofrece mayor rendimiento porcentual. Si las tasas son iguales, ambas opciones rinden lo mismo.",
        };
      },
    ]
  );
