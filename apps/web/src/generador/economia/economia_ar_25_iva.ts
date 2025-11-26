// src/generators/economia/economia_ar_25_iva.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type TipoCaso = "General" | "Esencial";

export const genARIVA: GeneratorFn = makeQuizGenerator(
  25,
  "IVA Argentina: 21% general y 10,5% bienes esenciales",
  [
    (_dificultad: Dificultad) => {
      const caso: TipoCaso = pickOne(["General", "Esencial"]);
      const base = randInt(10, 80) * 1000; // 10.000 a 80.000

      if (caso === "General") {
        const tasa = 0.21;
        const iva = Math.round(base * tasa);
        const total = base + iva;

        const opcionCorrecta = total;
        const opcionesNumericas = new Set<number>();
        opcionesNumericas.add(opcionCorrecta);

        while (opcionesNumericas.size < 4) {
          const desvio = randInt(-20, 20); // ±20%
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
            `En Argentina, un bien que paga la alícuota general de IVA (21%) tiene un precio sin IVA de $ ${base.toLocaleString(
              "es-AR"
            )}.\n` +
            `¿Cuál es el precio final aproximado con IVA incluido?`,
          opciones,
          indiceCorrecto,
          explicacion:
            "Para la alícuota general se usa IVA = Precio sin IVA × 0,21. Luego se suma al precio base para obtener el precio final.",
        };
      } else {
        const tasa = 0.105;
        const iva = Math.round(base * tasa);
        const total = base + iva;

        const opcionCorrecta = total;
        const opcionesNumericas = new Set<number>();
        opcionesNumericas.add(opcionCorrecta);

        while (opcionesNumericas.size < 4) {
          const desvio = randInt(-20, 20);
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
            `En Argentina, ciertos bienes esenciales pagan una alícuota reducida de IVA del 10,5%.\n` +
            `Si un producto esencial cuesta $ ${base.toLocaleString(
              "es-AR"
            )} sin IVA, ¿cuál es el precio final aproximado con IVA del 10,5%?`,
          opciones,
          indiceCorrecto,
          explicacion:
            "Para bienes esenciales se usa la alícuota reducida del 10,5%. El IVA se calcula como Precio sin IVA × 0,105 y luego se suma al precio base.",
        };
      }
    },
  ]
);
