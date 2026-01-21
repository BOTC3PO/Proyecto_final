// src/generators/quimica/45_problemas_ice.ts
import {
  type GeneratorFn,
  type NumericExercise,
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
  const tChange = 5;
  const times = [0, 2, 4, 6, 8, 10];
  const buildSeries = (initial: number, eq: number) => {
    const valueAtChange = eq + (initial - eq) * Math.exp(-0.5 * tChange);
    return times.map((t) => {
      const value = t <= tChange
        ? eq + (initial - eq) * Math.exp(-0.5 * t)
        : eq + (valueAtChange - eq) * Math.exp(-0.5 * (t - tChange));
      return { x: t, y: parseFloat(value.toFixed(3)) };
    });
  };

  const enunciado =
    "Considera la reacción reversible:\n" +
    "A(aq) ⇌ B(aq)\n\n" +
    `En un recipiente se introduce solo A con concentración inicial [A]₀ = ${A0R} mol/L y [B]₀ = 0.\n` +
    `La constante de equilibrio a esa temperatura es Kc = ${KcR}.\n\n` +
    "Usando una tabla ICE (Inicial, Cambio, Equilibrio), calcula las concentraciones de A y B a equilibrio.\n\n" +
    "Interpretación de curvas: A disminuye y B aumenta hasta estabilizarse. La línea de cambio de presión " +
    "no desplaza el equilibrio porque hay el mismo número de moles a ambos lados (Δn = 0).";

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
    visualSpec: {
      kind: "chart",
      chartType: "line",
      title: "Aproximación al equilibrio (A ⇌ B)",
      xAxis: { label: "Tiempo", unit: "min" },
      yAxis: { label: "Concentración", unit: "mol/L" },
      series: [
        { id: "A", label: "[A]", data: buildSeries(A0R, AeqR) },
        { id: "B", label: "[B]", data: buildSeries(0, BeqR) },
      ],
      markers: [
        { x: tChange, label: "Cambio P", note: "Δn = 0" },
      ],
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
