// src/generators/quimica/54_orden_reaccion.ts
import {
  GeneratorFn,
  NumericExercise,
  randInt,
} from "./generico";

export const generarOrdenReaccion: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const m = randInt(0, 2); // orden de A (0,1,2)
  const n = randInt(0, 2); // orden de B (0,1,2)
  const ordenGlobal = m + n;

  const enunciado =
    "Para cierta reacción se ha determinado experimentalmente la siguiente ley de velocidad:\n" +
    `v = k · [A]^${m} · [B]^${n}\n\n` +
    "a) Indica el orden de reacción respecto de A.\n" +
    "b) Indica el orden de reacción respecto de B.\n" +
    "c) Calcula el orden global de la reacción.";

  return {
    idTema: 54,
    tituloTema: "Orden de reacción",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      m,
      n,
      ordenGlobal,
    },
    unidades: {
      resultado: "adimensional",
    },
    resultado: ordenGlobal,
    toleranciaRelativa: 0, // debe ser exacto
    pasos: [
      "El orden parcial respecto de A es el exponente de [A] en la ley de velocidad (m).",
      "El orden parcial respecto de B es el exponente de [B] (n).",
      "El orden global es la suma de los órdenes parciales: m + n.",
    ],
  };
};
