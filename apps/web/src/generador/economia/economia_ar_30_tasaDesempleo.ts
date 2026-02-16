// src/generators/economia/economia_ar_30_tasaDesempleo.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
} from "./generico";
import { resolveTemaEnunciado, resolveTemaRange } from "./consignas";

const TEMA = "economia_ar_30_tasaDesempleo";

export const genARTasaDesempleo: GeneratorFn = makeQuizGenerator(
  30,
  "Tasa de desempleo escolar",
  [
    (dificultad: Dificultad) => {
      const [peaMin, peaMax] = resolveTemaRange(TEMA, dificultad, "pea", [100000, 300000]);
      const [tasaMin, tasaMax] = resolveTemaRange(TEMA, dificultad, "tasa", [5, 12]);
      const [desvioMin, desvioMax] = resolveTemaRange(TEMA, dificultad, "desvio", [25, 25]);
      const [opcionesMin] = resolveTemaRange(TEMA, dificultad, "opciones", [4, 4]);
      const desvio = randInt(desvioMin, desvioMax);
      const opciones = Math.max(2, Math.round(opcionesMin));
      const PEA = randInt(peaMin, peaMax);
      const tasaReal = randInt(tasaMin, tasaMax);
      const desempleados = Math.round((PEA * tasaReal) / 100);
      const tasa = Math.round((desempleados / PEA) * 100);

      const variantes: number[] = [tasa];

      while (variantes.length < opciones) {
        const candidato = Math.round(tasa * (1 + randInt(-desvio, desvio) / 100));
        if (candidato > 0 && !variantes.includes(candidato)) variantes.push(candidato);
      }

      const opcionesTexto = variantes.map((v) => v + "%");
      const indiceCorrecto = opcionesTexto.indexOf(tasa + "%");

      const fallbackEnunciado =
        `La Población Económicamente Activa (PEA) es ${PEA.toLocaleString("es-AR")} personas y ` +
        `los desempleados son ${desempleados.toLocaleString("es-AR")}. ¿Cuál es la tasa de desempleo escolar aproximada?`;

      return {
        enunciado: resolveTemaEnunciado(TEMA, { PEA, desempleados, tasa }, fallbackEnunciado),
        opciones: opcionesTexto,
        indiceCorrecto,
        explicacion: "Tasa = Desempleados / PEA × 100",
      };
    },
  ]
);
