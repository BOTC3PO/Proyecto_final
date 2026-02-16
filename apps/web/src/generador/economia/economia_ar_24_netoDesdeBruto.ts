// src/generators/economia/economia_ar_24_netoDesdeBruto.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
  randomBool,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

const TEMA = "economia_ar_24_netoDesdeBruto";

const SOLO_NETO_POR_DIFICULTAD: Record<Dificultad, boolean> = {
  basico: true,
  intermedio: false,
  avanzado: false,
};

export const genARNetoDesdeBruto: GeneratorFn = makeQuizGenerator(
  24,
  "Netos y descuentos del salario (partiendo del bruto remunerativo)",
  [
    (dificultad: Dificultad) => {
      const [min, max] = resolveTemaRange(TEMA, dificultad, "bruto", [60, 120]);
      const [desvioMin, desvioMax] = resolveTemaRange(TEMA, dificultad, "desvio", [20, 20]);
      const [opcionesMin] = resolveTemaRange(TEMA, dificultad, "opciones", [4, 4]);
      const soloNeto = SOLO_NETO_POR_DIFICULTAD[dificultad];
      const bruto = randInt(min, max) * 1000;
      const desvio = randInt(desvioMin, desvioMax);
      const opciones = Math.max(2, Math.round(opcionesMin));
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
        const fallbackEnunciado =
          `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString("es-AR")}.\n` +
          `Suponiendo aportes obligatorios totales del 17% (jubilación, obra social, PAMI), ` +
          `¿cuál es el 'Neto a cobrar' aproximado?`;

        return {
          enunciado: resolveTemaEnunciado(TEMA, { bruto, descuentos, neto, pregunta: "neto" }, fallbackEnunciado),
          opciones: opcionesTexto,
          indiceCorrecto,
          explicacion:
            "Primero se calcula el total de descuentos: Bruto × 0,17. Luego el neto es Bruto − Descuentos.",
        };
      }

      const fallbackEnunciado =
        `Un trabajador tiene un sueldo bruto remunerativo de $ ${bruto.toLocaleString("es-AR")}.\n` +
        `Suponiendo que se le descuentan los aportes obligatorios típicos (17% en total), ` +
        `¿cuál es el total aproximado de descuentos del trabajador?`;

      return {
        enunciado: resolveTemaEnunciado(TEMA, { bruto, descuentos, neto, pregunta: "descuentos" }, fallbackEnunciado),
        opciones: opcionesTexto,
        indiceCorrecto,
        explicacion:
          "Se multiplica el sueldo bruto por el 17% para obtener el total de aportes que se descuentan: Bruto × 0,17.",
      };
    },
  ]
);
