// src/generators/economia/economia_32_gananciaPerdida.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  makeQuizGenerator,
  randInt,
} from "./generico";

export const genGananciaPerdida: GeneratorFn = makeQuizGenerator(
  32,
  "Ganancia / Pérdida: Ingreso Total – Costo Total",
  [
    (dificultad: Dificultad) => {
      const [ingresoMin, ingresoMax] = ajustarRango(50, 200, dificultad);
      const [costoMin, costoMax] = ajustarRango(30, 180, dificultad);
      const ingresoTotal = randInt(ingresoMin, ingresoMax) * 1000;
      const costoTotal = randInt(costoMin, costoMax) * 1000;

      const resultado = ingresoTotal - costoTotal;
      const esGanancia = resultado >= 0;

      const opcionCorrectaTexto =
        (esGanancia ? "Ganancia" : "Pérdida") +
        " de $ " +
        Math.abs(resultado).toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrectaTexto);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(40 * dificultadFactor(dificultad));
        const desvio = randInt(-desvioMax, desvioMax);
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
