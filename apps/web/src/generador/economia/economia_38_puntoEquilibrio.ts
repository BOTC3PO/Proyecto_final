// src/generators/economia/economia_38_puntoEquilibrio.ts

import { Dificultad, GeneratorFn, makeQuizGenerator } from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genPuntoEquilibrio: GeneratorFn = makeQuizGenerator(
  38,
  "Punto de equilibrio simple: CF / (P – CVu)",
  [
    (_dificultad: Dificultad) => {
      const costoFijo = randInt(200, 800) * 1000; // CF total
      const precioUnitario = randInt(2000, 8000); // P
      const costoVariableUnitario = randInt(500, precioUnitario - 500); // CVu < P

      const margenUnitario = precioUnitario - costoVariableUnitario; // P – CVu
      const qEquilibrio = Math.round(costoFijo / margenUnitario);

      const opcionCorrecta = qEquilibrio + " unidades";

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvio = randInt(-40, 40);
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
