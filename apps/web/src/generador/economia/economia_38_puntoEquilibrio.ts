// src/generators/economia/economia_38_puntoEquilibrio.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  makeQuizGenerator,
  randInt,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

export const genPuntoEquilibrio: GeneratorFn = makeQuizGenerator(
  38,
  "Punto de equilibrio simple: CF / (P – CVu)",
  [
    (dificultad: Dificultad) => {
      const [costoFijoMin, costoFijoMax] = resolveTemaRange(38, dificultad, "costoFijo", ajustarRango(200, 800, dificultad));
      const [precioMin, precioMax] = resolveTemaRange(38, dificultad, "precioUnitario", ajustarRango(2000, 8000, dificultad));
      const costoFijo = randInt(costoFijoMin, costoFijoMax) * 1000;
      const precioUnitario = randInt(precioMin, precioMax);
      const factor = dificultadFactor(dificultad);
      const [margenMinBase] = resolveTemaRange(38, dificultad, "margenMin", [500, 500]);
      const [costoVariableMinBase] = resolveTemaRange(38, dificultad, "costoVariableMin", [300, 300]);
      const margenMin = Math.max(300, Math.round(margenMinBase * factor));
      const costoVariableMin = Math.max(100, Math.round(costoVariableMinBase * factor));
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

      const fallbackEnunciado =
          `Una empresa tiene Costos Fijos de $ ${costoFijo.toLocaleString(
            "es-AR"
          )}.\n` +
          `Vende su producto a $ ${precioUnitario.toLocaleString(
            "es-AR"
          )} por unidad y el costo variable unitario (CVu) es de $ ${costoVariableUnitario.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el punto de equilibrio aproximado en unidades (PE = CF / (P – CVu))?`;

      return {
        enunciado: resolveTemaEnunciado(
          38,
          { costoFijo, precioUnitario, costoVariableUnitario, qEquilibrio },
          fallbackEnunciado
        ),
        opciones,
        indiceCorrecto,
        explicacion:
          "El punto de equilibrio indica la cantidad de unidades que debe vender la empresa para no ganar ni perder: PE = Costos Fijos / (Precio – Costo variable unitario).",
      };
    },
  ]
);
