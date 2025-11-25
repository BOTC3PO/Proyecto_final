// src/generators/quimica/24_ley_gay_lussac.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarLeyGayLussac: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const P1 = dificultad === "facil"
    ? randFloat(0.8, 1.2, 2)   // atm
    : randFloat(0.5, 2.0, 2);

  const T1 = randFloat(280, 310, 0); // K

  const deltaT = dificultad === "facil"
    ? randFloat(10, 40, 0)
    : randFloat(20, 80, 0);

  const T2 = T1 + deltaT;
  const P2 = (P1 * T2) / T1;

  const P1R = parseFloat(P1.toFixed(2));
  const T1R = parseFloat(T1.toFixed(0));
  const T2R = parseFloat(T2.toFixed(0));
  const P2R = parseFloat(P2.toFixed(2));

  return {
    idTema: 24,
    tituloTema: "Ley de Gay-Lussac",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Un gas se encuentra en un recipiente rígido (volumen constante).\n" +
      `La presión inicial es P₁ = ${P1R} atm y la temperatura inicial T₁ = ${T1R} K.\n` +
      `Luego se calienta el gas hasta una temperatura T₂ = ${T2R} K.\n` +
      "Asumiendo volumen constante, calcula la nueva presión P₂ del gas.",
    datos: {
      P1: P1R,
      T1: T1R,
      T2: T2R,
    },
    unidades: {
      P1: "atm",
      T1: "K",
      T2: "K",
      resultado: "atm",
    },
    resultado: P2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Aplica la ley de Gay-Lussac: P₁ / T₁ = P₂ / T₂.",
      "Despeja P₂: P₂ = P₁ · (T₂ / T₁).",
      "Sustituye las temperaturas en Kelvin y la presión inicial.",
      "Redondea el resultado a 2 decimales.",
    ],
  };
};
