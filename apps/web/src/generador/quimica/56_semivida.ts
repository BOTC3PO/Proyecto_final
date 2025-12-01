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

  const enunciado =
    "Una reacción de desintegración sigue una cinética de primer orden.\n" +
    `La constante de velocidad es k = ${kR} s⁻¹.\n\n` +
    "Calcula el período de semivida t½ (tiempo necesario para que la concentración se reduzca a la mitad),\n" +
    "expresado en segundos.\n" +
    "Usa la relación t½ = ln(2)/k.";

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
