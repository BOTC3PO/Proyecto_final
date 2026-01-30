// src/generators/economia/economia_37_capitalTrabajo.ts

import {
  type Dificultad,
  type GeneratorFn,
  ajustarRango,
  dificultadFactor,
  makeQuizGenerator,
  randInt,
} from "./generico";

export const genCapitalTrabajo: GeneratorFn = makeQuizGenerator(
  37,
  "Capital de trabajo: Activo Corriente – Pasivo Corriente",
  [
    (dificultad: Dificultad) => {
      const [activoMin, activoMax] = ajustarRango(100, 300, dificultad);
      const [pasivoMin, pasivoMax] = ajustarRango(50, 250, dificultad);
      const activoCorriente = randInt(activoMin, activoMax) * 1000;
      const pasivoCorriente = randInt(pasivoMin, pasivoMax) * 1000;
      const capitalTrabajo = activoCorriente - pasivoCorriente;

      const opcionCorrecta =
        "$ " + capitalTrabajo.toLocaleString("es-AR");

      const opcionesSet = new Set<string>();
      opcionesSet.add(opcionCorrecta);

      while (opcionesSet.size < 4) {
        const desvioMax = Math.round(40 * dificultadFactor(dificultad));
        const desvio = randInt(-desvioMax, desvioMax);
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
