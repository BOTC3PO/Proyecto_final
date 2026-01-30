// src/generators/economia/economia_ar_30_tasaDesempleo.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";

const PARAMS: Record<
  Dificultad,
  { peaMin: number; peaMax: number; tasaMax: number; desvio: number; opciones: number }
> = {
  basico: { peaMin: 100000, peaMax: 300000, tasaMax: 12, desvio: 25, opciones: 4 },
  intermedio: { peaMin: 200000, peaMax: 500000, tasaMax: 15, desvio: 30, opciones: 4 },
  avanzado: { peaMin: 300000, peaMax: 700000, tasaMax: 18, desvio: 35, opciones: 4 },
  Legendario: { peaMin: 400000, peaMax: 900000, tasaMax: 20, desvio: 40, opciones: 5 },
  Divino: { peaMin: 600000, peaMax: 1200000, tasaMax: 22, desvio: 45, opciones: 5 },
};

export const genARTasaDesempleo: GeneratorFn = makeQuizGenerator(
  30,
  "Tasa de desempleo escolar",
  [
    (dificultad: Dificultad) => {
      const { peaMin, peaMax, tasaMax, desvio, opciones } = PARAMS[dificultad];
      const PEA = randInt(peaMin, peaMax);
      const tasaReal = randInt(5, tasaMax);
      const desempleados = Math.round((PEA * tasaReal) / 100);
      const tasa = Math.round((desempleados / PEA) * 100);

      const variantes: number[] = [tasa];

      while (variantes.length < opciones) {
        const candidato = Math.round(tasa * (1 + randInt(-desvio, desvio) / 100));
        if (candidato > 0 && !variantes.includes(candidato)) variantes.push(candidato);
      }

      const opcionesTexto = variantes.map((v) => v + "%");
      const indiceCorrecto = opcionesTexto.indexOf(tasa + "%");

      return {
        enunciado:
          `La Población Económicamente Activa (PEA) es ${PEA.toLocaleString("es-AR")} personas y ` +
          `los desempleados son ${desempleados.toLocaleString("es-AR")}. ¿Cuál es la tasa de desempleo escolar aproximada?`,
        opciones: opcionesTexto,
        indiceCorrecto,
        explicacion: "Tasa = Desempleados / PEA × 100",
      };
    },
  ]
);
