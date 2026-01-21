// src/generators/quimica/53_ley_velocidad.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  randInt,
} from "./generico";

export const generarLeyVelocidad: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Orden parcial respecto de A y B (1 o 2)
  const m = randInt(1, 2);
  const n = randInt(0, 1); // permito orden 0 o 1 para que no quede muy feo

  const k = dificultad === "facil"
    ? randFloat(0.1, 1.0, 2)
    : randFloat(0.01, 0.5, 3); // unidades genéricas

  const A = dificultad === "facil"
    ? randFloat(0.10, 0.80, 2)
    : randFloat(0.05, 1.00, 2);

  const B = dificultad === "facil"
    ? randFloat(0.10, 0.80, 2)
    : randFloat(0.05, 1.00, 2);

  const v = k * Math.pow(A, m) * Math.pow(B, n);
  const kR = parseFloat(k.toFixed(3));
  const AR = parseFloat(A.toFixed(2));
  const BR = parseFloat(B.toFixed(2));
  const vR = parseFloat(v.toFixed(4));
  const tChange = 3;
  const times = [0, 1, 2, 3, 4, 5];
  const kFast = kR * 1.6;

  const buildDecaySeries = (initial: number, kBefore: number, kAfter: number) => {
    const valueAtChange = initial * Math.exp(-kBefore * tChange);
    return times.map((t) => {
      const value = t <= tChange
        ? initial * Math.exp(-kBefore * t)
        : valueAtChange * Math.exp(-kAfter * (t - tChange));
      return { x: t, y: parseFloat(value.toFixed(3)) };
    });
  };

  const enunciado =
    "Para la reacción genérica:\n" +
    "a A + b B → productos\n\n" +
    "se ha determinado experimentalmente que la ley de velocidad es:\n" +
    `v = k · [A]^${m} · [B]^${n}\n\n` +
    `Si k = ${kR} (unidades adecuadas), [A] = ${AR} mol/L y [B] = ${BR} mol/L,\n` +
    "calcula la velocidad de reacción v (en las unidades correspondientes).\n\n" +
    "Interpretación de curvas: en el gráfico concentración-tiempo cada línea muestra cómo " +
    "evoluciona un reactivo; una pendiente más pronunciada implica una velocidad mayor. " +
    "La línea discontinua marca un aumento de temperatura que incrementa k y acelera el descenso.";

  return {
    idTema: 53,
    tituloTema: "Ley de velocidad",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      k: kR,
      A: AR,
      B: BR,
      m,
      n,
    },
    visualSpec: {
      kind: "chart",
      chartType: "line",
      title: "Curvas concentración-tiempo",
      xAxis: { label: "Tiempo", unit: "s" },
      yAxis: { label: "Concentración", unit: "mol/L" },
      series: [
        {
          id: "A",
          label: "[A]",
          data: buildDecaySeries(AR, kR, kFast),
        },
        {
          id: "B",
          label: "[B]",
          data: n === 0 ? times.map((t) => ({ x: t, y: BR })) : buildDecaySeries(BR, kR * 0.7, kFast * 0.7),
        },
      ],
      markers: [
        { x: tChange, label: "Cambio T", note: "k aumenta" },
      ],
    },
    unidades: {
      k: "variará según el orden",
      A: "mol/L",
      B: "mol/L",
      resultado: "mol·L⁻¹·s⁻¹ (ej.)",
    },
    resultado: vR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Escribe la expresión de la velocidad: v = k·[A]^m·[B]^n.",
      "Sustituye k, [A], [B] y los órdenes de reacción m y n.",
      "Eleva las concentraciones a las potencias indicadas y multiplica.",
      "Redondea la velocidad al número de decimales pedido.",
    ],
  };
};
