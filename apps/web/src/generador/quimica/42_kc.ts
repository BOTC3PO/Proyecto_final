// src/generators/quimica/42_kc.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarKc: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Concentraciones en mol/L a equilibrio
  const Aeq = dificultad === "facil"
    ? randFloat(0.10, 0.50, 2)
    : randFloat(0.05, 0.80, 2);

  const Beq = dificultad === "facil"
    ? randFloat(0.10, 0.50, 2)
    : randFloat(0.05, 0.80, 2);

  const Ceq = dificultad === "facil"
    ? randFloat(0.20, 0.80, 2)
    : randFloat(0.10, 1.00, 2);

  const Kc = Ceq / (Aeq * Beq);

  const AeqR = parseFloat(Aeq.toFixed(2));
  const BeqR = parseFloat(Beq.toFixed(2));
  const CeqR = parseFloat(Ceq.toFixed(2));
  const KcR = parseFloat(Kc.toFixed(2));

  return {
    idTema: 42,
    tituloTema: "Constante de equilibrio Kc",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Para la reacción genérica:\n" +
      "A(aq) + B(aq) ⇌ C(aq)\n\n" +
      "en cierto experimento se midieron las concentraciones a equilibrio:\n" +
      `[A]ₑq = ${AeqR} mol/L\n` +
      `[B]ₑq = ${BeqR} mol/L\n` +
      `[C]ₑq = ${CeqR} mol/L\n\n` +
      "Calcula el valor de la constante de equilibrio Kc.",
    datos: {
      Aeq: AeqR,
      Beq: BeqR,
      Ceq: CeqR,
    },
    unidades: {
      Aeq: "mol/L",
      Beq: "mol/L",
      Ceq: "mol/L",
      resultado: "adimensional",
    },
    resultado: KcR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Escribe la expresión de Kc para A + B ⇌ C: Kc = [C]ₑq / ([A]ₑq·[B]ₑq).",
      "Sustituye las concentraciones a equilibrio en la fórmula.",
      "Realiza la división y redondea el resultado a 2 decimales.",
    ],
  };
};
