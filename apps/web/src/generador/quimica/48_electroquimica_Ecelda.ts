// src/generators/quimica/48_Ecelda.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarEcelda: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Potenciales de reducción estándar (V)
  const E_anodo = dificultad === "facil"
    ? randFloat(-0.8, 0.2, 2)
    : randFloat(-1.2, 0.3, 2);

  const E_catodo = dificultad === "facil"
    ? randFloat(0.0, 1.0, 2)
    : randFloat(-0.2, 1.2, 2);

  const E_anodoR = parseFloat(E_anodo.toFixed(2));
  const E_catodoR = parseFloat(E_catodo.toFixed(2));

  const E_celda = E_catodoR - E_anodoR;
  const E_celdaR = parseFloat(E_celda.toFixed(2));

  const enunciado =
    "Para una celda galvánica se tienen los siguientes semielectrodos (como reducciones estándar):\n\n" +
    "Ánodo (en la reacción real se oxidará):\n" +
    "Red_anodo ⇌ Ox_anodo + ne⁻   E°(reducción) = " + E_anodoR + " V\n\n" +
    "Cátodo:\n" +
    "Ox_cátodo + ne⁻ ⇌ Red_cátodo   E°(reducción) = " + E_catodoR + " V\n\n" +
    "Calcula el potencial estándar de la celda (E°_celda) usando:\n" +
    "E°_celda = E°_cátodo − E°_ánodo (ambos como reducciones).";

  return {
    idTema: 48,
    tituloTema: "Cálculo de E° celda",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      E_anodo: E_anodoR,
      E_catodo: E_catodoR,
      E_celda: E_celdaR,
    },
    unidades: {
      E_anodo: "V",
      E_catodo: "V",
      resultado: "V",
    },
    resultado: E_celdaR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Identifica el potencial estándar de reducción del cátodo (E°_cátodo).",
      "Identifica el potencial estándar de reducción del ánodo (E°_ánodo), aunque en la celda se oxide.",
      "Aplica la fórmula: E°_celda = E°_cátodo − E°_ánodo.",
      "Redondea el resultado a 2 decimales.",
    ],
  };
};
