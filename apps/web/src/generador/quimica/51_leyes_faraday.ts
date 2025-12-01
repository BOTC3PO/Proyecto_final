// src/generators/quimica/51_leyes_faraday.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

const F = 96485; // C/mol

export const generarLeyesFaraday: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const I = dificultad === "facil"
    ? randFloat(0.5, 3.0, 2)    // A
    : randFloat(1.0, 10.0, 2);

  const t = dificultad === "facil"
    ? randFloat(300, 1800, 0)   // s
    : randFloat(600, 3600, 0);

  const IR = parseFloat(I.toFixed(2));
  const tR = parseFloat(t.toFixed(0));

  const Q = IR * tR;          // C
  const n_e = Q / F;          // mol de e⁻
  const n_eR = parseFloat(n_e.toFixed(4));

  const enunciado =
    "En un proceso de electrólisis circula una corriente eléctrica constante a través de una celda.\n" +
    `La corriente es I = ${IR} A y el tiempo de paso de la corriente es t = ${tR} s.\n` +
    "Calcula cuántos moles de electrones han circulado por el circuito.\n" +
    "Usa la carga del electrón por mol: F = 96485 C/mol (constante de Faraday).";

  return {
    idTema: 51,
    tituloTema: "Leyes de Faraday (moles de electrones)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      I: IR,
      t: tR,
      Q,
      F,
      n_e: n_eR,
    },
    unidades: {
      I: "A",
      t: "s",
      Q: "C",
      resultado: "mol de e⁻",
    },
    resultado: n_eR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula la carga total que pasa: Q = I·t.",
      "Usa la relación de Faraday: n(e⁻) = Q / F.",
      "Sustituye Q y F = 96485 C/mol.",
      "Redondea el resultado a 4 cifras decimales.",
    ],
  };
};
