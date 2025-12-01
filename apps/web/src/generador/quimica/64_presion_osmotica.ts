// src/generators/quimica/64_presion_osmotica.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

const R_OSM = 0.082; // L·atm·K⁻¹·mol⁻¹

export const generarPresionOsmotica: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const M = dificultad === "facil"
    ? randFloat(0.10, 1.00, 2)   // mol/L
    : randFloat(0.05, 2.00, 2);

  const T = randFloat(290, 320, 0); // K

  const MR = parseFloat(M.toFixed(2));
  const TR = parseFloat(T.toFixed(0));

  const pi = MR * R_OSM * TR;
  const piR = parseFloat(pi.toFixed(2));

  const enunciado =
    "Se tiene una disolución acuosa diluida de un soluto no electrolito.\n" +
    `Su concentración es M = ${MR} mol/L y la temperatura absoluta es T = ${TR} K.\n` +
    `Calcula la presión osmótica π en atm, usando R = ${R_OSM} L·atm·K⁻¹·mol⁻¹.`;

  return {
    idTema: 64,
    tituloTema: "Presión osmótica",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      M: MR,
      T: TR,
      R: R_OSM,
      pi: piR,
    },
    unidades: {
      M: "mol/L",
      T: "K",
      R: "L·atm·K⁻¹·mol⁻¹",
      resultado: "atm",
    },
    resultado: piR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Usa la ecuación de Van 't Hoff para soluciones diluidas: π = M·R·T.",
      "Sustituye la molaridad, la constante R y la temperatura en Kelvin.",
      "Calcula el producto y redondea el resultado a 2 decimales.",
    ],
  };
};
