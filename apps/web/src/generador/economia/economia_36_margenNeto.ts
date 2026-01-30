// src/generators/economia/economia_36_margenNeto.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  esDificultadMinima,
  makeQuizGenerator,
  randInt,
} from "./generico";

export const genMargenNeto: GeneratorFn = makeQuizGenerator(
  36,
  "Margen neto: Resultado Neto / Ventas",
  [
    (dificultad: Dificultad) => {
      const [ventasMin, ventasMax] = ajustarRango(100, 300, dificultad);
      const [netoMin, netoMax] = ajustarRango(20, 150, dificultad);
      const ventas = randInt(ventasMin, ventasMax) * 1000;
      const resultadoNeto = randInt(netoMin, netoMax) * 1000;

      const margen = (resultadoNeto / ventas) * 100;
      const usarDecimales = esDificultadMinima(dificultad, "avanzado");
      const margenRedondeado = usarDecimales
        ? Math.round(margen * 10) / 10
        : Math.round(margen);

      const formatear = (valor: number) =>
        valor.toLocaleString("es-AR", {
          minimumFractionDigits: usarDecimales ? 1 : 0,
          maximumFractionDigits: usarDecimales ? 1 : 0,
        });

      const opcionCorrecta = formatear(margenRedondeado) + " %";

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(15 * dificultadFactor(dificultad));
        const desvio = usarDecimales
          ? randInt(-desvioMax * 2, desvioMax * 2) / 2
          : randInt(-desvioMax, desvioMax);
        const candidato = margenRedondeado + desvio;
        if (candidato > 0 && candidato < 100) {
          opcionesSet.add(formatear(candidato) + " %");
        }
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `Una empresa tiene Ventas por $ ${ventas.toLocaleString(
            "es-AR"
          )} y un Resultado Neto de $ ${resultadoNeto.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es el margen neto aproximado (Resultado Neto / Ventas × 100)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El margen neto se calcula como (Resultado Neto / Ventas) × 100. Indica qué porcentaje de cada peso vendido queda como ganancia final.",
      };
    },
  ]
);
