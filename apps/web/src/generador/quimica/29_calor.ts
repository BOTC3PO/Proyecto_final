// src/generators/quimica/29_calor.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

// calor específico del agua aproximadamente
const C_AGUA = 4.18; // J/g·°C

export const generarCalorQ: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const m = dificultad === "facil"
    ? randFloat(50, 200, 0)     // g
    : randFloat(100, 500, 0);

  const deltaT = dificultad === "facil"
    ? randFloat(5, 25, 0)       // °C
    : randFloat(10, 40, 0);

  const Q = m * C_AGUA * deltaT;

  const mR = parseFloat(m.toFixed(0));
  const dTR = parseFloat(deltaT.toFixed(0));
  const QR = parseFloat(Q.toFixed(0));

  return {
    idTema: 29,
    tituloTema: "Cálculo de calor: Q = m·c·ΔT",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se calienta una muestra de agua.\n" +
      `La masa de agua es m = ${mR} g y su temperatura aumenta en ΔT = ${dTR} °C.\n` +
      "Sabiendo que el calor específico del agua es c = 4,18 J/g·°C, calcula el calor Q absorbido (en J).",
    datos: {
      m: mR,
      c: C_AGUA,
      deltaT: dTR,
    },
    unidades: {
      m: "g",
      c: "J/g·°C",
      deltaT: "°C",
      resultado: "J",
    },
    resultado: QR,
    pasos: [
      "Escribe la expresión: Q = m·c·ΔT.",
      "Sustituye los valores de masa, calor específico y variación de temperatura.",
      "Multiplica y redondea el resultado al joule más cercano.",
    ],
  };
};
