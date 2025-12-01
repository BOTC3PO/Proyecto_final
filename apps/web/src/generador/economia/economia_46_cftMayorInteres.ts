// src/generators/economia/economia_46_cftMayorInteres.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";

export const genCFTMayorInteres: GeneratorFn = makeQuizGenerator(
  46,
  "Relación entre CFT e interés",
  [
    (_dificultad: Dificultad) => {
      const enunciado =
        "En un crédito, el Costo Financiero Total (CFT) siempre es mayor o igual que la tasa de interés sola, porque incluye comisiones, impuestos y otros gastos.";

      const opciones = ["Verdadero", "Falso"];
      const indiceCorrecto = 0; // Verdadero

      return {
        enunciado,
        opciones,
        indiceCorrecto,
        explicacion:
          "El CFT incluye la tasa de interés más todos los costos adicionales (comisiones, seguros, impuestos, etc.). " +
          "Por eso, en la práctica escolar, se toma siempre CFT ≥ interés solo.",
      };
    },
  ]
);
