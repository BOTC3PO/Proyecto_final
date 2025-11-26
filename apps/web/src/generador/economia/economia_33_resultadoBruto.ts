// src/generators/economia/economia_33_resultadoBruto.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genResultadoBruto: GeneratorFn = makeQuizGenerator(
  33,
  "Resultado Bruto: Ventas – Costo de ventas",
  [
    (_dificultad: Dificultad) => {
      const ventas = randInt(80, 250) * 1000;
      const costoVentas = randInt(40, 200) * 1000;
      const resultadoBruto = ventas - costoVentas;

      const opcionCorrecta = "$ " + resultadoBruto.toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvio = randInt(-40, 40);
        const candidato = Math.round(
          resultadoBruto * (1 + desvio / 100)
        );
        if (candidato >= 0) {
          opcionesSet.add("$ " + candidato.toLocaleString("es-AR"));
        }
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `Una empresa tiene Ventas por $ ${ventas.toLocaleString(
            "es-AR"
          )} y Costo de ventas por $ ${costoVentas.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el Resultado Bruto usando: Resultado Bruto = Ventas – Costo de ventas?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El Resultado Bruto muestra la ganancia antes de gastos de administración y ventas. Se calcula: Ventas – Costo de ventas.",
      };
    },
  ]
);
