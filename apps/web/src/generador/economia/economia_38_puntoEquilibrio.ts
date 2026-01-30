// src/generators/economia/economia_38_puntoEquilibrio.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  makeQuizGenerator,
  randInt,
} from "./generico";

export const genPuntoEquilibrio: GeneratorFn = makeQuizGenerator(
  38,
  "Punto de equilibrio simple: CF / (P – CVu)",
  [
    (dificultad: Dificultad) => {
      const [costoFijoMin, costoFijoMax] = ajustarRango(200, 800, dificultad);
      const [precioMin, precioMax] = ajustarRango(2000, 8000, dificultad);
      const costoFijo = randInt(costoFijoMin, costoFijoMax) * 1000;
      const precioUnitario = randInt(precioMin, precioMax);
      const factor = dificultadFactor(dificultad);
      const margenMin = Math.max(300, Math.round(500 * factor));
      const costoVariableMin = Math.max(100, Math.round(300 * factor));
      const costoVariableMax = Math.max(costoVariableMin + 1, precioUnitario - margenMin);
      const costoVariableUnitario = randInt(costoVariableMin, costoVariableMax);

      const margenUnitario = precioUnitario - costoVariableUnitario; // P – CVu
      const qEquilibrio = Math.round(costoFijo / margenUnitario);

      const opcionCorrecta = qEquilibrio + " unidades";

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(40 * dificultadFactor(dificultad));
        const desvio = randInt(-desvioMax, desvioMax);
        const candidato = Math.max(1, Math.round(qEquilibrio * (1 + desvio / 100)));
        opcionesSet.add(candidato + " unidades");
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `Una empresa tiene Costos Fijos de $ ${costoFijo.toLocaleString(
            "es-AR"
          )}.\n` +
          `Vende su producto a $ ${precioUnitario.toLocaleString(
            "es-AR"
          )} por unidad y el costo variable unitario (CVu) es de $ ${costoVariableUnitario.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el punto de equilibrio aproximado en unidades (PE = CF / (P – CVu))?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El punto de equilibrio indica la cantidad de unidades que debe vender la empresa para no ganar ni perder: PE = Costos Fijos / (Precio – Costo variable unitario).",
      };
    },
  ]
);
