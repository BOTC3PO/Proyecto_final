// src/generators/economia/economia_37_capitalTrabajo.ts

import { type Dificultad, type GeneratorFn, makeQuizGenerator } from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genCapitalTrabajo: GeneratorFn = makeQuizGenerator(
  37,
  "Capital de trabajo: Activo Corriente – Pasivo Corriente",
  [
    (_dificultad: Dificultad) => {
      const activoCorriente = randInt(100, 300) * 1000;
      const pasivoCorriente = randInt(50, 250) * 1000;
      const capitalTrabajo = activoCorriente - pasivoCorriente;

      const opcionCorrecta =
        "$ " + capitalTrabajo.toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvio = randInt(-40, 40);
        const candidato = Math.round(
          capitalTrabajo * (1 + desvio / 100)
        );
        const texto = "$ " + candidato.toLocaleString("es-AR");
        opcionesSet.add(texto);
      }

      const opciones = Array.from(opcionesSet);
      const indiceCorrecto = opciones.indexOf(opcionCorrecta);

      return {
        enunciado:
          `Una empresa presenta un Activo Corriente de $ ${activoCorriente.toLocaleString(
            "es-AR"
          )} y un Pasivo Corriente de $ ${pasivoCorriente.toLocaleString(
            "es-AR"
          )}.\n` +
          `¿Cuál es su capital de trabajo (AC – PC)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "El capital de trabajo mide la capacidad de la empresa para cubrir sus obligaciones de corto plazo: Activo Corriente – Pasivo Corriente.",
      };
    },
  ]
);
