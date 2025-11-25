// src/generators/quimica/55_constante_k.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
  randInt,
} from "./generico";

export const generarConstanteK: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const m = randInt(0, 2);
  const n = randInt(0, 2);

  const A = dificultad === "facil"
    ? randFloat(0.10, 0.80, 2)
    : randFloat(0.05, 1.00, 2);

  const B = dificultad === "facil"
    ? randFloat(0.10, 0.80, 2)
    : randFloat(0.05, 1.00, 2);

  // Elegimos una k real y calculamos v, pero al alumno le damos v y le pedimos k
  const kReal = dificultad === "facil"
    ? randFloat(0.1, 1.0, 2)
    : randFloat(0.01, 0.5, 3);

  const v = kReal * Math.pow(A, m) * Math.pow(B, n);

  const AR = parseFloat(A.toFixed(2));
  const BR = parseFloat(B.toFixed(2));
  const vR = parseFloat(v.toFixed(4));
  const kRealR = parseFloat(kReal.toFixed(3)); // solución

  const enunciado =
    "Para la reacción genérica con ley de velocidad:\n" +
    `v = k · [A]^${m} · [B]^${n}\n\n` +
    `En un experimento se miden las concentraciones [A] = ${AR} mol/L y [B] = ${BR} mol/L,\n` +
    `y la velocidad inicial resultó ser v = ${vR} (unidades adecuadas).\n\n` +
    "Calcula el valor de la constante de velocidad k.";

  return {
    idTema: 55,
    tituloTema: "Constante de velocidad k",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      A: AR,
      B: BR,
      m,
      n,
      v: vR,
      kReal: kRealR,
    },
    unidades: {
      A: "mol/L",
      B: "mol/L",
      v: "mol·L⁻¹·s⁻¹ (ej.)",
      resultado: "depende del orden global",
    },
    resultado: kRealR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Parte de la ley de velocidad: v = k·[A]^m·[B]^n.",
      "Despeja k: k = v / ([A]^m·[B]^n).",
      "Sustituye los valores medidos de v, [A], [B], m y n.",
      "Realiza los cálculos y redondea k al número de decimales indicado.",
    ],
  };
};
