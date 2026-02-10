// src/generators/economia/economia_ar_23_aportes17.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";

const PARAMS: Record<
  Dificultad,
  { min: number; max: number; desvio: number; opciones: number }
> = {
  basico: { min: 60, max: 120, desvio: 20, opciones: 4 },
  intermedio: { min: 80, max: 180, desvio: 25, opciones: 4 },
  avanzado: { min: 120, max: 260, desvio: 30, opciones: 4 },
};

export const genARAportes17: GeneratorFn = makeQuizGenerator(
  23,
  "Total típico de aportes obligatorios (17% sobre remunerativo)",
  [
    (dificultad: Dificultad) => {
      const { min, max, desvio, opciones } = PARAMS[dificultad];
      const bruto = randInt(min, max) * 1000;
      const tasaAportes = 0.17;
      const totalAportes = Math.round(bruto * tasaAportes);

      const opcionCorrecta = totalAportes;
      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(opcionCorrecta);

      while (opcionesNumericas.size < opciones) {
        const variacion = randInt(-desvio, desvio);
        const candidato = Math.round(
          opcionCorrecta * (1 + variacion / 100)
        );
        if (candidato > 0) opcionesNumericas.add(candidato);
      }

      const opcionesTexto = Array.from(opcionesNumericas).map(
        (v) => "$ " + v.toLocaleString("es-AR")
      );

      const indiceCorrecto = opcionesTexto.indexOf(
        "$ " + opcionCorrecta.toLocaleString("es-AR")
      );

      return {
        enunciado:
          `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString(
            "es-AR"
          )}.\n` +
          `Suponiendo los aportes obligatorios típicos (11% jubilación, 3% obra social, 3% PAMI), ` +
          `¿cuál es el total aproximado de aportes del trabajador (17% del bruto)?`,
        opciones: opcionesTexto,
        indiceCorrecto,
        explicacion:
          "En el modelo escolar se suma 11% + 3% + 3% = 17% sobre el sueldo bruto remunerativo. El total de aportes se calcula como Bruto × 0,17.",
      };
    },
  ]
);
