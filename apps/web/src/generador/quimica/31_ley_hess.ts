// src/generators/quimica/31_ley_hess.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarLeyHess: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Elegimos ΔH1 y ΔH2 aleatorios (kJ)
  const deltaH1 = dificultad === "facil"
    ? randFloat(-300, -100, 0)
    : randFloat(-500, -150, 0);

  const deltaH2 = dificultad === "facil"
    ? randFloat(-250, -80, 0)
    : randFloat(-400, -100, 0);

  const deltaHtotal = deltaH1 + deltaH2;

  const dH1R = parseFloat(deltaH1.toFixed(1));
  const dH2R = parseFloat(deltaH2.toFixed(1));
  const dHTR = parseFloat(deltaHtotal.toFixed(1));

  return {
    idTema: 31,
    tituloTema: "Ley de Hess",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se conoce la entalpía de reacción para los siguientes procesos (en kJ):\n\n" +
      "1) C(s) + 1/2 O₂(g) → CO(g)\n" +
      `   ΔH₁ = ${dH1R} kJ\n\n` +
      "2) CO(g) + 1/2 O₂(g) → CO₂(g)\n" +
      `   ΔH₂ = ${dH2R} kJ\n\n` +
      "Sumando ambas ecuaciones se obtiene la reacción global:\n" +
      "C(s) + O₂(g) → CO₂(g)\n\n" +
      "Usando la ley de Hess, calcula el cambio de entalpía ΔH de la reacción global.",
    datos: {
      deltaH1: dH1R,
      deltaH2: dH2R,
    },
    unidades: {
      deltaH1: "kJ",
      deltaH2: "kJ",
      resultado: "kJ",
    },
    resultado: dHTR,
    toleranciaRelativa: 0.01,
    pasos: [
      "Identifica que la reacción global se obtiene sumando las dos ecuaciones dadas.",
      "Aplica la ley de Hess: la entalpía de la reacción global es la suma de las entalpías de las etapas.",
      "Calcula: ΔH_total = ΔH₁ + ΔH₂.",
      "Redondea el resultado a 1 decimal.",
    ],
  };
};
