// src/generators/quimica/22_ley_boyle.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarLeyBoyle: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const P1 = dificultad === "facil"
    ? randFloat(0.8, 1.2, 2)   // atm
    : randFloat(0.5, 2.0, 2);

  const V1 = dificultad === "facil"
    ? randFloat(1.0, 3.0, 2)   // L
    : randFloat(1.0, 5.0, 2);

  const factorCompresion = dificultad === "facil"
    ? randFloat(0.4, 0.8, 2)   // V2 menor que V1
    : randFloat(0.3, 0.9, 2);

  const V2 = V1 * factorCompresion;
  const P2 = (P1 * V1) / V2;

  const P1R = parseFloat(P1.toFixed(2));
  const V1R = parseFloat(V1.toFixed(2));
  const V2R = parseFloat(V2.toFixed(2));
  const P2R = parseFloat(P2.toFixed(2));

  return {
    idTema: 22,
    tituloTema: "Ley de Boyle",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Un gas ideal se encuentra inicialmente a temperatura constante.\n" +
      `La presión inicial es P₁ = ${P1R} atm y el volumen inicial V₁ = ${V1R} L.\n` +
      `Luego se comprime el gas hasta un volumen V₂ = ${V2R} L.\n` +
      "Suponiendo temperatura constante, calcula la nueva presión P₂ del gas (en atm).",
    datos: {
      P1: P1R,
      V1: V1R,
      V2: V2R,
    },
    unidades: {
      P1: "atm",
      V1: "L",
      V2: "L",
      resultado: "atm",
    },
    resultado: P2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Aplica la ley de Boyle: P₁·V₁ = P₂·V₂.",
      "Despeja P₂: P₂ = (P₁·V₁) / V₂.",
      "Sustituye los valores numéricos y calcula.",
      "Redondea el resultado a 2 decimales.",
    ],
  };
};
