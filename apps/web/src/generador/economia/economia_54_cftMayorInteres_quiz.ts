// src/generators/economia/economia_54_cftMayorInteres_quiz.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
} from "./generico";

export const genQuizCFTMayorInteres: GeneratorFn = makeQuizGenerator(
  54,
  "Relación CFT vs interés (V/F)",
  [
    (_dificultad: Dificultad) => {
      const enunciado =
        "En un crédito, el Costo Financiero Total (CFT) incluye la tasa de interés y otros gastos (comisiones, impuestos, seguros), por lo que siempre es mayor o igual que la tasa de interés sola.";

      const opciones = ["Verdadero", "Falso"];
      const indiceCorrecto = 0; // Verdadero

      return {
        enunciado,
        opciones,
        indiceCorrecto,
        explicacion:
          "A nivel escolar, se enseña que el CFT es el costo 'real' del crédito porque suma interés + todos los cargos adicionales. Por eso se toma CFT ≥ interés.",
      };
    },
  ]
);
