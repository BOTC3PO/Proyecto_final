// src/generators/economia/economia_39_productividad.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  esDificultadMinima,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genProductividadEscolar: GeneratorFn = makeQuizGenerator(
  39,
  "Productividad escolar: Producción / Insumos",
  [
    (dificultad: Dificultad) => {
      const [produccionMin, produccionMax] = ajustarRango(200, 2000, dificultad);
      const [insumoMin, insumoMax] = ajustarRango(4, 40, dificultad, 2);
      const produccion = randInt(produccionMin, produccionMax);
      const insumo = randInt(insumoMin, insumoMax);

      const productividad = produccion / insumo;
      const decimales = esDificultadMinima(dificultad, "Legendario") ? 2 : 1;
      const factorRedondeo = 10 ** decimales;
      const productividadRedondeada =
        Math.round(productividad * factorRedondeo) / factorRedondeo;

      const opcionCorrecta =
        productividadRedondeada.toLocaleString("es-AR", {
          minimumFractionDigits: decimales,
          maximumFractionDigits: decimales,
        }) + " unidades por insumo";

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(30 * dificultadFactor(dificultad));
        const desvio = (randInt(-desvioMax, desvioMax) / 100) * productividad;
        const candidato =
          Math.round((productividad + desvio) * factorRedondeo) /
          factorRedondeo;
        if (candidato > 0) {
          opcionesSet.add(
            candidato.toLocaleString("es-AR", {
              minimumFractionDigits: decimales,
              maximumFractionDigits: decimales,
            }) + " unidades por insumo"
          );
        }
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `En una actividad escolar se producen ${produccion.toLocaleString(
            "es-AR"
          )} unidades usando ${insumo.toLocaleString(
            "es-AR"
          )} unidades de insumo (por ejemplo, horas de trabajo).\n` +
          `¿Cuál es la productividad aproximada (Producción / Insumos)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "La productividad se calcula dividiendo la producción total por la cantidad de insumos utilizados.",
      };
    },
  ]
);
