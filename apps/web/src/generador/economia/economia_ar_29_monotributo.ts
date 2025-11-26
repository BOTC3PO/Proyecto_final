// src/generators/economia/economia_ar_29_monotributo.ts
import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
} from "./generico";

export const genARMonotributo: GeneratorFn = makeQuizGenerator(
  29,
  "Monotributo (concepto escolar)",
  [
    (_: Dificultad) => ({
      enunciado: "Definición escolar de Monotributo o ejemplo de ejercicio",
      opciones: [],
      indiceCorrecto: 0,
      explicacion: "El Monotributo es un régimen simplificado para pequeños contribuyentes en Argentina, que unifica impuestos y aportes en una sola cuota según categoría de ingresos.",
    }),
  ]
);
