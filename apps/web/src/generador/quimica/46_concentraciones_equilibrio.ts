// src/generators/quimica/46_concentraciones_equilibrio.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarConcentracionesEquilibrio: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const A0 = dificultad === "facil"
    ? randFloat(0.20, 0.80, 2)
    : randFloat(0.30, 1.20, 2);

  const Kc = dificultad === "facil"
    ? randFloat(0.5, 5.0, 2)
    : randFloat(0.5, 10.0, 2);

  // Reacción: A ⇌ 2B
  // Kc = [B]^2 / [A] = (2x)^2 / (A0 - x) = 4x^2 / (A0 - x)
  // 4x^2 = Kc(A0 - x) → 4x^2 + Kc·x − Kc·A0 = 0
  const a = 4;
  const b = Kc;
  const c = -Kc * A0;

  const discriminante = b * b - 4 * a * c;
  const sqrtD = Math.sqrt(discriminante);

  // Solo aceptamos la raíz positiva físicamente razonable
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);
  const x = x1 > 0 && x1 < A0 ? x1 : x2;

  const Aeq = A0 - x;
  const Beq = 2 * x;

  const A0R = parseFloat(A0.toFixed(2));
  const KcR = parseFloat(Kc.toFixed(2));
  const AeqR = parseFloat(Aeq.toFixed(3));
  const BeqR = parseFloat(Beq.toFixed(3));
  const tChange = 5;
  const times = [0, 2, 4, 6, 8, 10];
  const Aeq2 = parseFloat((AeqR * 1.2).toFixed(3));
  const Beq2 = parseFloat((BeqR * 0.75).toFixed(3));

  const buildSeries = (initial: number, eq1: number, eq2: number) => {
    const valueAtChange = eq1 + (initial - eq1) * Math.exp(-0.5 * tChange);
    return times.map((t) => {
      const value = t <= tChange
        ? eq1 + (initial - eq1) * Math.exp(-0.5 * t)
        : eq2 + (valueAtChange - eq2) * Math.exp(-0.4 * (t - tChange));
      return { x: t, y: parseFloat(value.toFixed(3)) };
    });
  };

  return {
    idTema: 46,
    tituloTema: "Estimación de concentraciones a equilibrio",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Considera la reacción reversible:\n" +
      "A(aq) ⇌ 2 B(aq)\n\n" +
      `En un recipiente se introduce solo A, con concentración inicial [A]₀ = ${A0R} mol/L y [B]₀ = 0.\n` +
      `La constante de equilibrio es Kc = ${KcR}.\n\n` +
      "Calcula las concentraciones de A y B a equilibrio.\n\n" +
      "Interpretación de curvas: las concentraciones cambian hasta estabilizarse en el equilibrio. " +
      "La línea discontinua indica un aumento de presión (menos volumen), que favorece el lado con " +
      "menos moles gaseosos (A), por lo que [A] sube y [B] baja.",
    datos: {
      A0: A0R,
      Kc: KcR,
    },
    visualSpec: {
      kind: "chart",
      chartType: "line",
      title: "Equilibrio A ⇌ 2B con cambio de presión",
      xAxis: { label: "Tiempo", unit: "min" },
      yAxis: { label: "Concentración", unit: "mol/L" },
      series: [
        { id: "A", label: "[A]", data: buildSeries(A0R, AeqR, Aeq2) },
        { id: "B", label: "[B]", data: buildSeries(0, BeqR, Beq2) },
      ],
      markers: [
        { x: tChange, label: "Cambio P", note: "P ↑" },
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
      "Plantea las concentraciones a equilibrio usando una tabla ICE:\nInicial: [A]₀ = A₀, [B]₀ = 0.\nCambio: −x para A, +2x para B.\nEquilibrio: [A]ₑq = A₀ − x, [B]ₑq = 2x.",
      "Escribe la expresión: Kc = [B]² / [A] = (2x)² / (A₀ − x) = 4x² / (A₀ − x).",
      "Reordena para obtener una ecuación cuadrática en x y resuélvela.",
      "Calcula [A]ₑq = A₀ − x y [B]ₑq = 2x, eligiendo la raíz físicamente razonable (concentraciones positivas).",
    ],
  };
};
