// src/generators/economia/finanzas_15_interesSimple.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genFinanzasInteresSimple: GeneratorFn = makeQuizGenerator(
  15,
  "Interés simple (capital × tasa × tiempo)",
  [
    ((dificultad: any) => {
      // capital entre 10.000 y 100.000
      const capital = randInt(10, 100) * 1000;

      // tasa anual entre 5% y 30%
      const tasa = randInt(5, 30); // % anual

      // tiempo según dificultad
      const tiempoEnAnios =
        dificultad === ("baja" as any)
          ? randInt(1, 2)
          : dificultad === ("alta" as any)
          ? randInt(2, 5)
          : randInt(1, 3);

      // Fórmula: I = C × i × t
      const interes = Math.round(
        capital * (tasa / 100) * tiempoEnAnios
      );

      // Creamos opciones alrededor del valor correcto
      const opcionCorrecta = interes;
      const opcionesNumericas = new Set<number>();
      opcionesNumericas.add(opcionCorrecta);

      while (opcionesNumericas.size < 4) {
        const desvioPorcentaje = randInt(-30, 30); // ±30%
        const valor = Math.round(
          opcionCorrecta * (1 + desvioPorcentaje / 100)
        );
        if (valor > 0) opcionesNumericas.add(valor);
      }

      const opciones = Array.from(opcionesNumericas).map((v) =>
        "$ " + v.toLocaleString("es-AR")
      );

      const indiceCorrecto = opciones.indexOf(
        "$ " + opcionCorrecta.toLocaleString("es-AR")
      );

      return {
        enunciado:
          `Una persona invierte $ ${capital.toLocaleString(
            "es-AR"
          )} al interés simple del ${tasa}% anual durante ${tiempoEnAnios} año(s).\n` +
          `¿Cuánto interés gana al final del período? (Usar I = C × i × t)`,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el interés simple se usa la fórmula I = C × i × t, donde C es el capital inicial, i la tasa en forma decimal y t el tiempo en años. El interés se calcula siempre sobre el mismo capital inicial.",
      };
    }) as any,
  ]
);
