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
  const delta = Math.min(0.3, CeqR * 0.6);
  const A0 = parseFloat((AeqR + delta).toFixed(2));
  const B0 = parseFloat((BeqR + delta).toFixed(2));
  const C0 = parseFloat(Math.max(0.05, CeqR - delta).toFixed(2));
  const tChange = 6;
  const times = [0, 2, 4, 6, 8, 10];
  const Aeq2 = parseFloat((AeqR * 1.15).toFixed(2));
  const Beq2 = parseFloat((BeqR * 1.15).toFixed(2));
  const Ceq2 = parseFloat(Math.max(0.05, CeqR * 0.7).toFixed(2));

  const buildEquilibriumSeries = (initial: number, eq1: number, eq2: number) => {
    const valueAtChange = eq1 + (initial - eq1) * Math.exp(-0.5 * tChange);
    return times.map((t) => {
      const value = t <= tChange
        ? eq1 + (initial - eq1) * Math.exp(-0.5 * t)
        : eq2 + (valueAtChange - eq2) * Math.exp(-0.4 * (t - tChange));
      return { x: t, y: parseFloat(value.toFixed(3)) };
    });
  };

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
      "Calcula el valor de la constante de equilibrio Kc.\n\n" +
      "Interpretación de curvas: cada línea muestra cómo las concentraciones se estabilizan en el equilibrio " +
      "(zona casi horizontal). La línea discontinua marca un aumento de temperatura en una reacción exotérmica, " +
      "que desplaza el equilibrio hacia los reactivos (C disminuye, A y B aumentan).",
    datos: {
      Aeq: AeqR,
      Beq: BeqR,
      Ceq: CeqR,
    },
    visualSpec: {
      kind: "chart",
      chartType: "line",
      title: "Evolución hacia el equilibrio",
      xAxis: { label: "Tiempo", unit: "min" },
      yAxis: { label: "Concentración", unit: "mol/L" },
      series: [
        { id: "A", label: "[A]", data: buildEquilibriumSeries(A0, AeqR, Aeq2) },
        { id: "B", label: "[B]", data: buildEquilibriumSeries(B0, BeqR, Beq2) },
        { id: "C", label: "[C]", data: buildEquilibriumSeries(C0, CeqR, Ceq2) },
      ],
      markers: [
        { x: tChange, label: "Cambio T", note: "exotérmica" },
      ],
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
