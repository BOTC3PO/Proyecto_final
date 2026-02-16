// src/generators/economia/economia_34_resultadoNeto.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  makeQuizGenerator,
  randInt,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

const TEMA = "34_economia_resultadoNeto";

export const genResultadoNeto: GeneratorFn = makeQuizGenerator(
  34,
  "Resultado Neto: Resultado Bruto – Gastos",
  [
    (dificultad: Dificultad) => {
      const [brutoBaseMin, brutoBaseMax] = resolveTemaRange(TEMA, dificultad, "resultado_bruto", [80, 250]);
      const [brutoMin, brutoMax] = ajustarRango(brutoBaseMin, brutoBaseMax, dificultad);
      const [gastosBaseMin, gastosBaseMax] = resolveTemaRange(TEMA, dificultad, "gastos", [20, 150]);
      const [gastosMin, gastosMax] = ajustarRango(gastosBaseMin, gastosBaseMax, dificultad);
      const resultadoBruto = randInt(brutoMin, brutoMax) * 1000;
      const gastos = randInt(gastosMin, gastosMax) * 1000;
      const resultadoNeto = resultadoBruto - gastos;
      const esGanancia = resultadoNeto >= 0;

      const opcionCorrecta =
        (esGanancia ? "Ganancia neta de $ " : "Pérdida neta de $ ") +
        Math.abs(resultadoNeto).toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(40 * dificultadFactor(dificultad));
        const desvio = randInt(-desvioMax, desvioMax);
        const candidato = Math.round(
          resultadoNeto * (1 + desvio / 100)
        );
        const texto =
          (candidato >= 0 ? "Ganancia neta de $ " : "Pérdida neta de $ ") +
          Math.abs(candidato).toLocaleString("es-AR");
        opcionesSet.add(texto);
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      const enunciadoFallback =
        `Una empresa tiene Resultado Bruto de $ ${resultadoBruto.toLocaleString("es-AR")} y Gastos de $ ${gastos.toLocaleString(
          "es-AR"
        )}.\n` +
        `¿Cuál es el Resultado Neto usando: Resultado Neto = Resultado Bruto – Gastos?`;

      return {
        enunciado: resolveTemaEnunciado(TEMA, enunciadoFallback, {
          resultado_bruto: resultadoBruto.toLocaleString("es-AR"),
          gastos: gastos.toLocaleString("es-AR"),
        }),
        opciones,
        indiceCorrecto,
        explicacion:
          "El Resultado Neto es la ganancia o pérdida final del período, luego de restar los gastos al resultado bruto.",
      };
    },
  ]
);
