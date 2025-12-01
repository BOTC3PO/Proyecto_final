// src/generators/economia/economia_ar_23_aportes17.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genARAportes17: GeneratorFn = makeQuizGenerator(
  23,
  "Total típico de aportes obligatorios (17% sobre remunerativo)",
  [
    (_dificultad: Dificultad) => {
      const bruto = randInt(80, 200) * 1000; // 80.000 a 200.000
      const tasaAportes = 0.17;
      const totalAportes = Math.round(bruto * tasaAportes);

      const opcionCorrecta = totalAportes;

      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(opcionCorrecta);

      while (opcionesNumericas.size < 4) {
        const desvio = randInt(-30, 30); // ±30 %
        const candidato = Math.round(
          opcionCorrecta * (1 + desvio / 100)
        );
        if (candidato > 0) opcionesNumericas.add(candidato);
      }

      const opciones = Array.from(opcionesNumericas).map(
        (v) => "$ " + v.toLocaleString("es-AR")
      );

      const indiceCorrecto = opciones.indexOf(
        "$ " + opcionCorrecta.toLocaleString("es-AR")
      );

      return {
        enunciado:
          `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString(
            "es-AR"
          )}.\n` +
          `Suponiendo los aportes obligatorios típicos (11% jubilación, 3% obra social, 3% PAMI), ` +
          `¿cuál es el total aproximado de aportes del trabajador (17% del bruto)?`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el modelo escolar se suma 11% + 3% + 3% = 17% sobre el sueldo bruto remunerativo. El total de aportes se calcula como Bruto × 0,17.",
      };
    },
  ]
);
