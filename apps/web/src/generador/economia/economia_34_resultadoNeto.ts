// src/generators/economia/economia_34_resultadoNeto.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genResultadoNeto: GeneratorFn = makeQuizGenerator(
  34,
  "Resultado Neto: Resultado Bruto – Gastos",
  [
    (_dificultad: Dificultad) => {
      const resultadoBruto = randInt(80, 250) * 1000;
      const gastos = randInt(20, 150) * 1000;
      const resultadoNeto = resultadoBruto - gastos;
      const esGanancia = resultadoNeto >= 0;

      const opcionCorrecta =
        (esGanancia ? "Ganancia neta de $ " : "Pérdida neta de $ ") +
        Math.abs(resultadoNeto).toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvio = randInt(-40, 40);
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

      return {
        enunciado:
          `Una empresa tiene Resultado Bruto de $ ${resultadoBruto.toLocaleString(
            "es-AR"
          )} y Gastos de $ ${gastos.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el Resultado Neto usando: Resultado Neto = Resultado Bruto – Gastos?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El Resultado Neto es la ganancia o pérdida final del período, luego de restar los gastos al resultado bruto.",
      };
    },
  ]
);
