// src/generators/quimica/45_problemas_ice.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarProblemasICE: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const A0 = dificultad === "facil"
    ? randFloat(0.10, 0.80, 2)
    : randFloat(0.20, 1.50, 2);

  const Kc = dificultad === "facil"
    ? randFloat(0.2, 5.0, 2)
    : randFloat(0.1, 10.0, 2);

  // Reacción: A ⇌ B
  // Kc = [B]eq / [A]eq = x / (A0 - x)
  // x = (Kc·A0) / (1 + Kc)
  const x = (Kc * A0) / (1 + Kc);

  const Aeq = A0 - x;
  const Beq = x;

  const A0R = parseFloat(A0.toFixed(2));
  const KcR = parseFloat(Kc.toFixed(2));
  const AeqR = parseFloat(Aeq.toFixed(3));
  const BeqR = parseFloat(Beq.toFixed(3));

  const enunciado =
    "Considera la reacción reversible:\n" +
    "A(aq) ⇌ B(aq)\n\n" +
    `En un recipiente se introduce solo A con concentración inicial [A]₀ = ${A0R} mol/L y [B]₀ = 0.\n` +
    `La constante de equilibrio a esa temperatura es Kc = ${KcR}.\n\n` +
    "Usando una tabla ICE (Inicial, Cambio, Equilibrio), calcula las concentraciones de A y B a equilibrio.";

  return {
    idTema: 45,
    tituloTema: "Problemas ICE (Inicial, Cambio, Equilibrio)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      A0: A0R,
      Kc: KcR,
    },
    unidades: {
      A0: "mol/L",
      resultado_Aeq: "mol/L",
      resultado_Beq: "mol/L",
    },
    resultado: {
      Aeq: AeqR,
      Beq: BeqR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Plantea la tabla ICE:\nInicial: [A]₀ = A₀, [B]₀ = 0.\nCambio: −x para A, +x para B.\nEquilibrio: [A]ₑq = A₀ − x, [B]ₑq = x.",
      "Escribe la expresión de Kc = [B]ₑq / [A]ₑq = x / (A₀ − x).",
      "Despeja x: x = (Kc·A₀) / (1 + Kc).",
      "Calcula [A]ₑq = A₀ − x y [B]ₑq = x.",
    ],
  };
};
