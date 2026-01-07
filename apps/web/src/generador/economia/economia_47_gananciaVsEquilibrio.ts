// src/generators/economia/economia_47_gananciaVsEquilibrio.ts

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

export const genGananciaVsEquilibrio: GeneratorFn = makeQuizGenerator(
  47,
  "Ganancia o pérdida según Q vs Q* (punto de equilibrio)",
  [
    (dificultad: Dificultad) => {
      const [qMin, qMax] = ajustarRango(100, 1000, dificultad);
      const qEquilibrio = randInt(qMin, qMax);

      const offsetMax = Math.round(300 * dificultadFactor(dificultad));
      const offset = randInt(-offsetMax, offsetMax);
      const qReal = Math.max(0, qEquilibrio + offset);

      let situacion: Situacion;

      if (qReal === qEquilibrio) {
        situacion = "Equilibrio";
      } else if (qReal < qEquilibrio) {
        situacion = "Pérdida";
      } else {
        situacion = "Ganancia";
      }

      const opciones: Situacion[] = ["Pérdida", "Equilibrio", "Ganancia"];
      const indiceCorrecto = opciones.indexOf(situacion);

      return {
        enunciado:
          `Una empresa tiene un punto de equilibrio Q* = ${qEquilibrio} unidades.\n` +
          `En un período produce y vende Q = ${qReal} unidades.\n\n` +
          `Según la comparación entre Q y Q*, ¿la empresa está en pérdida, equilibrio o ganancia?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el modelo escolar de punto de equilibrio:\n" +
          "- Si Q < Q*: la empresa no cubre sus costos totales → pérdida.\n" +
          "- Si Q = Q*: cubre exactamente sus costos → equilibrio (ni gana ni pierde).\n" +
          "- Si Q > Q*: supera el punto de equilibrio → obtiene ganancia.",
      };
    },
  ]
);
