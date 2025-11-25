// src/generators/quimica/44_q_direccion.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarQ_Direccion: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Partimos de un Kc razonable
  const Kc = dificultad === "facil"
    ? randFloat(0.5, 5.0, 2)
    : randFloat(0.1, 10.0, 2);

  // Concentraciones "instantáneas", no necesariamente de equilibrio
  const A = randFloat(0.10, 1.00, 2);
  const B = randFloat(0.10, 1.00, 2);
  const C = randFloat(0.00, 1.00, 2);

  const Q = C / (A * B);

  const Kr = parseFloat(Kc.toFixed(2));
  const Ar = parseFloat(A.toFixed(2));
  const Br = parseFloat(B.toFixed(2));
  const Cr = parseFloat(C.toFixed(2));
  const Qr = parseFloat(Q.toFixed(2));

  let direccion: "hacia productos" | "hacia reactivos" | "en equilibrio";

  if (Math.abs(Q - Kc) / Kc < 0.05) {
    direccion = "en equilibrio";
  } else if (Q < Kc) {
    direccion = "hacia productos";
  } else {
    direccion = "hacia reactivos";
  }

  const enunciado =
    "Para la reacción:\n" +
    "A(aq) + B(aq) ⇌ C(aq)\n\n" +
    `la constante de equilibrio a cierta temperatura es Kc = ${Kr}.\n` +
    "En un momento dado, las concentraciones son:\n" +
    `[A] = ${Ar} mol/L\n` +
    `[B] = ${Br} mol/L\n` +
    `[C] = ${Cr} mol/L\n\n` +
    "a) Calcula el cociente de reacción Q.\n" +
    "b) Indica si el sistema evolucionará hacia los productos, hacia los reactivos o si ya está en equilibrio.";

  return {
    idTema: 44,
    tituloTema: "Cociente Q y predicción de dirección",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      Kc: Kr,
      A: Ar,
      B: Br,
      C: Cr,
    },
    unidades: {
      A: "mol/L",
      B: "mol/L",
      C: "mol/L",
      resultado_Q: "adimensional",
    },
    resultado: {
      Q: Qr,
      direccion,
    },
    toleranciaRelativa: 0.05,
    pasos: [
      "Escribe la expresión de Q igual que la de Kc: Q = [C] / ([A]·[B]).",
      "Sustituye las concentraciones del estado actual para obtener Q.",
      "Compara Q con Kc: si Q < Kc, la reacción avanza hacia productos; si Q > Kc, avanza hacia reactivos; si Q ≈ Kc, está en equilibrio.",
    ],
  };
};
