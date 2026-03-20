// src/generators/economia/economia_33_resultadoBruto.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  makeQuizGenerator,
  randInt,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

const TEMA = "33_economia_resultadoBruto";

export const genResultadoBruto: GeneratorFn = makeQuizGenerator(
  33,
  "Resultado Bruto: Ventas – Costo de ventas",
  [
    (dificultad: Dificultad) => {
      const [ventasBaseMin, ventasBaseMax] = resolveTemaRange(TEMA, dificultad, "ventas", [80, 250]);
      const [ventasMin, ventasMax] = ajustarRango(ventasBaseMin, ventasBaseMax, dificultad);
      const [costoBaseMin, costoBaseMax] = resolveTemaRange(TEMA, dificultad, "costo_ventas", [40, 200]);
      const [costoMin, costoMax] = ajustarRango(costoBaseMin, costoBaseMax, dificultad);
      const ventas = randInt(ventasMin, ventasMax) * 1000;
      const costoVentas = randInt(costoMin, costoMax) * 1000;
      const resultadoBruto = ventas - costoVentas;

      const opcionCorrecta = "$ " + resultadoBruto.toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(40 * dificultadFactor(dificultad));
        const desvio = randInt(-desvioMax, desvioMax);
        const candidato = Math.round(
          resultadoBruto * (1 + desvio / 100)
        );
        if (candidato >= 0) {
          opcionesSet.add("$ " + candidato.toLocaleString("es-AR"));
        }
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      const enunciadoFallback =
        `Una empresa tiene Ventas por $ ${ventas.toLocaleString("es-AR")} y Costo de ventas por $ ${costoVentas.toLocaleString(
          "es-AR"
        )}.\n` +
        `¿Cuál es el Resultado Bruto usando: Resultado Bruto = Ventas – Costo de ventas?`;

      return {
        enunciado: resolveTemaEnunciado(TEMA, enunciadoFallback, {
          ventas: ventas.toLocaleString("es-AR"),
          costo_ventas: costoVentas.toLocaleString("es-AR"),
        }),
        opciones,
        indiceCorrecto,
        explicacion:
          "El Resultado Bruto muestra la ganancia antes de gastos de administración y ventas. Se calcula: Ventas – Costo de ventas.",
      };
    },
  ]
);
