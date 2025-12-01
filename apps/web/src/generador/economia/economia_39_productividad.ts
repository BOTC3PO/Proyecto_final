// src/generators/economia/economia_39_productividad.ts

import { type Dificultad, type GeneratorFn, makeQuizGenerator } from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genProductividadEscolar: GeneratorFn = makeQuizGenerator(
  39,
  "Productividad escolar: Producción / Insumos",
  [
    (_dificultad: Dificultad) => {
      // ejemplos tipo: cantidad producida / horas de trabajo
      const produccion = randInt(200, 2000); // unidades
      const insumo = randInt(4, 40); // horas, personas, etc.

      const productividad = produccion / insumo;
      const productividadRedondeada = Math.round(productividad * 10) / 10; // un decimal

      const opcionCorrecta =
        productividadRedondeada.toLocaleString("es-AR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }) + " unidades por insumo";

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvio = (randInt(-30, 30) / 100) * productividad;
        const candidato = Math.round((productividad + desvio) * 10) / 10;
        if (candidato > 0) {
          opcionesSet.add(
            candidato.toLocaleString("es-AR", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
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
