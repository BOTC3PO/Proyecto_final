// src/generators/economia/economia_ar_24_netoDesdeBruto.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genARNetoDesdeBruto: GeneratorFn = makeQuizGenerator(
  24,
  "Netos y descuentos del salario (partiendo del bruto remunerativo)",
  [
    (_dificultad: Dificultad) => {
      const bruto = randInt(80, 200) * 1000; // 80.000 a 200.000
      const tasaAportes = 0.17; // 17% típicos
      const descuentos = Math.round(bruto * tasaAportes);
      const neto = bruto - descuentos;

      const preguntaNeto = Math.random() < 0.5;

      if (preguntaNeto) {
        // Preguntamos por el neto
        const opcionCorrecta = neto;
        const opcionesNumericas = new Set<number>();
        opcionesNumericas.add(opcionCorrecta);

        while (opcionesNumericas.size < 4) {
          const desvio = randInt(-25, 25); // ±25%
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
            `Suponiendo aportes obligatorios totales del 17% (jubilación, obra social, PAMI), ` +
            `¿cuál es el 'Neto a cobrar' aproximado?`,
          opciones,
          indiceCorrecto,
          explicacion:
            "Primero se calcula el total de descuentos: Bruto × 0,17. Luego el neto es Bruto − Descuentos.",
        };
      } else {
        // Preguntamos por el total de descuentos
        const opcionCorrecta = descuentos;
        const opcionesNumericas = new Set<number>();
        opcionesNumericas.add(opcionCorrecta);

        while (opcionesNumericas.size < 4) {
          const desvio = randInt(-25, 25);
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
            `Suponiendo que se le descuentan los aportes obligatorios típicos (17% en total), ` +
            `¿cuál es el total aproximado de descuentos del trabajador?`,
          opciones,
          indiceCorrecto,
          explicacion:
            "Se multiplica el sueldo bruto por el 17% para obtener el total de aportes que se descuentan: Bruto × 0,17.",
        };
      }
    },
  ]
);
