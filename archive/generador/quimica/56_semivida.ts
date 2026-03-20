// src/generators/quimica/56_semivida.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarSemivida: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // k en s⁻¹
  const k = dificultad === "facil"
    ? randFloat(0.01, 0.10, 3)
    : randFloat(0.001, 0.05, 4);

  const kR = parseFloat(k.toFixed(4));
  const t12 = Math.log(2) / kR; // s
  const t12R = dificultad === "facil"
    ? parseFloat(t12.toFixed(1))
    : parseFloat(t12.toFixed(2));
  const A0 = 1;
  const times = [
    0,
    parseFloat((t12R / 2).toFixed(2)),
    t12R,
    parseFloat((2 * t12R).toFixed(2)),
    parseFloat((3 * t12R).toFixed(2)),
    parseFloat((4 * t12R).toFixed(2)),
  ];
  const concentrationSeries = times.map((t) => ({
    x: t,
    y: parseFloat((A0 * Math.exp(-kR * t)).toFixed(3)),
  }));

  const enunciado =
    "Una reacción de desintegración sigue una cinética de primer orden.\n" +
    `La constante de velocidad es k = ${kR} s⁻¹.\n\n` +
    "Calcula el período de semivida t½ (tiempo necesario para que la concentración se reduzca a la mitad),\n" +
    "expresado en segundos.\n" +
    "Usa la relación t½ = ln(2)/k.\n\n" +
    "Interpretación de curvas: la línea marca t½, el instante en que la concentración cae al 50%. " +
    "Si la temperatura aumenta, k sería mayor y la curva descendería más rápido (t½ menor).";

  return {
    idTema: 56,
    tituloTema: "Período de semirreacción (t½)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      k: kR,
      t12: t12R,
    },
    visualSpec: {
      kind: "chart",
      chartType: "line",
      title: "Decaimiento de concentración (primer orden)",
      xAxis: { label: "Tiempo", unit: "s" },
      yAxis: { label: "Concentración relativa", unit: "C/C₀" },
      series: [
        {
          id: "A",
          label: "[A]/[A]₀",
          data: concentrationSeries,
        },
      ],
      markers: [
        { x: t12R, label: "t½", note: "C = 0,5·C₀" },
      ],
    },
    unidades: {
      k: "s⁻¹",
      resultado: "s",
    },
    resultado: t12R,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que para una reacción de primer orden t½ = ln(2) / k.",
      "Sustituye el valor de k en la expresión.",
      "Calcula ln(2) (≈ 0,693) y divide entre k.",
      "Redondea el resultado al número de decimales indicado.",
    ],
  };
};
