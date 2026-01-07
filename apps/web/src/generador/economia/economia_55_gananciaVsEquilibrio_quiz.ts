// src/generators/economia/economia_55_gananciaVsEquilibrio_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type Situacion = "Pérdida" | "Equilibrio" | "Ganancia";

export const genQuizGananciaVsEquilibrio: GeneratorFn = makeQuizGenerator(
  55,
  "Ganancia > equilibrio según Q vs Q* (quiz)",
  [
    (dificultad: Dificultad) => {
      const [qMin, qMax] = ajustarRango(100, 1000, dificultad);
      const qEquilibrio = randInt(qMin, qMax);
      const offsetMax = Math.round(300 * dificultadFactor(dificultad));
      const offset = randInt(-offsetMax, offsetMax);
      const qReal = Math.max(0, qEquilibrio + offset);

      let situacion: Situacion;
      if (qReal < qEquilibrio) situacion = "Pérdida";
      else if (qReal === qEquilibrio) situacion = "Equilibrio";
      else situacion = "Ganancia";

      const opciones: Situacion[] = ["Pérdida", "Equilibrio", "Ganancia"];
      const indiceCorrecto = opciones.indexOf(situacion);

      return {
        enunciado:
          `El punto de equilibrio de una empresa es Q* = ${qEquilibrio} unidades.\n` +
          `En un período vende Q = ${qReal} unidades.\n\n` +
          `Según la comparación entre Q y Q*, ¿la empresa está en pérdida, equilibrio o ganancia?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el modelo escolar de punto de equilibrio: Q < Q* → pérdida, Q = Q* → equilibrio (ni gana ni pierde), Q > Q* → ganancia.",
      };
    },
  ]
);
