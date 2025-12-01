// src/generators/economia/economia_32_gananciaPerdida.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genGananciaPerdida: GeneratorFn = makeQuizGenerator(
  32,
  "Ganancia / Pérdida: Ingreso Total – Costo Total",
  [
    (_dificultad: Dificultad) => {
      const ingresoTotal = randInt(50, 200) * 1000; // 50.000–200.000
      const costoTotal = randInt(30, 180) * 1000;

      const resultado = ingresoTotal - costoTotal;
      const esGanancia = resultado >= 0;

      const opcionCorrectaTexto =
        (esGanancia ? "Ganancia" : "Pérdida") +
        " de $ " +
        Math.abs(resultado).toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrectaTexto);

      while (opcionesSet.size < 4) {
        const desvio = randInt(-40, 40); // ±40%
        const candidato = Math.round(
          resultado * (1 + desvio / 100)
        );
        const texto =
          (candidato >= 0 ? "Ganancia" : "Pérdida") +
          " de $ " +
          Math.abs(candidato).toLocaleString("es-AR");
        opcionesSet.add(texto);
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrectaTexto);

      return {
        enunciado:
          `Una actividad económica obtiene un Ingreso Total (IT) de $ ${ingresoTotal.toLocaleString(
            "es-AR"
          )} y un Costo Total (CT) de $ ${costoTotal.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el resultado (ganancia o pérdida) usando: Resultado = IT – CT?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "Si IT > CT hay ganancia; si IT < CT hay pérdida. El resultado se calcula como IT – CT.",
      };
    },
  ]
);
