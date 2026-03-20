// src/generators/quimica/43_kp.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarKp: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Presiones parciales de equilibrio en atm
  const P_N2O4 = dificultad === "facil"
    ? randFloat(0.20, 0.80, 2)
    : randFloat(0.10, 1.00, 2);

  const P_NO2 = dificultad === "facil"
    ? randFloat(0.40, 1.20, 2)
    : randFloat(0.20, 1.50, 2);

  const Kp = (P_NO2 * P_NO2) / P_N2O4;

  const P_N2O4_R = parseFloat(P_N2O4.toFixed(2));
  const P_NO2_R = parseFloat(P_NO2.toFixed(2));
  const KpR = parseFloat(Kp.toFixed(2));

  return {
    idTema: 43,
    tituloTema: "Constante de equilibrio Kp",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Para la reacción gaseosa:\n" +
      "N₂O₄(g) ⇌ 2 NO₂(g)\n\n" +
      "en cierto experimento se miden las presiones parciales a equilibrio:\n" +
      `P(N₂O₄)ₑq = ${P_N2O4_R} atm\n` +
      `P(NO₂)ₑq  = ${P_NO2_R} atm\n\n` +
      "Calcula la constante de equilibrio en términos de presión Kp.",
    datos: {
      P_N2O4: P_N2O4_R,
      P_NO2: P_NO2_R,
    },
    unidades: {
      P_N2O4: "atm",
      P_NO2: "atm",
      resultado: "adimensional",
    },
    resultado: KpR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Escribe la expresión de Kp para N₂O₄ ⇌ 2 NO₂: Kp = [P(NO₂)]² / P(N₂O₄).",
      "Sustituye las presiones parciales de equilibrio en la expresión.",
      "Calcula el cociente y redondea el resultado a 2 decimales.",
    ],
  };
};
