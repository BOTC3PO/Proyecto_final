// src/generators/economia/economia_ar_24_netoDesdeBruto.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
  randomBool,
} from "./generico";

const PARAMS: Record<
  Dificultad,
  { min: number; max: number; desvio: number; opciones: number; soloNeto: boolean }
> = {
  basico: { min: 60, max: 120, desvio: 20, opciones: 4, soloNeto: true },
  intermedio: { min: 80, max: 180, desvio: 25, opciones: 4, soloNeto: false },
  avanzado: { min: 120, max: 260, desvio: 30, opciones: 4, soloNeto: false },
  Legendario: { min: 200, max: 360, desvio: 35, opciones: 5, soloNeto: false },
  Divino: { min: 300, max: 500, desvio: 40, opciones: 5, soloNeto: false },
};

export const genARNetoDesdeBruto: GeneratorFn = makeQuizGenerator(
  24,
  "Netos y descuentos del salario (partiendo del bruto remunerativo)",
  [
    (dificultad: Dificultad) => {
      const { min, max, desvio, opciones, soloNeto } = PARAMS[dificultad];
      const bruto = randInt(min, max) * 1000;
      const tasaAportes = 0.17;
      const descuentos = Math.round(bruto * tasaAportes);
      const neto = bruto - descuentos;

      const preguntaNeto = soloNeto ? true : randomBool();
      const opcionCorrecta = preguntaNeto ? neto : descuentos;

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

      if (preguntaNeto) {
        return {
          enunciado:
            `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString(
              "es-AR"
            )}.\n` +
            `Suponiendo aportes obligatorios totales del 17% (jubilación, obra social, PAMI), ` +
            `¿cuál es el 'Neto a cobrar' aproximado?`,
          opciones: opcionesTexto,
          indiceCorrecto,
          explicacion:
            "Primero se calcula el total de descuentos: Bruto × 0,17. Luego el neto es Bruto − Descuentos.",
        };
      }

      return {
        enunciado:
          `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString(
            "es-AR"
          )}.\n` +
          `Suponiendo que se le descuentan los aportes obligatorios típicos (17% en total), ` +
          `¿cuál es el total aproximado de descuentos del trabajador?`,
        opciones: opcionesTexto,
        indiceCorrecto,
        explicacion:
          "Se multiplica el sueldo bruto por el 17% para obtener el total de aportes que se descuentan: Bruto × 0,17.",
      };
    },
  ]
);
