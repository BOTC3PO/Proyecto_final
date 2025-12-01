// src/generators/economia/economia_ar_30_tasaDesempleo.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";
//mover randInit a generico economia
import { randInt } from "../quimica/generico";

function randPea(): number {
  return Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000;
}

export const genARTasaDesempleo: GeneratorFn = makeQuizGenerator(
  30,
  "Tasa de desempleo escolar",
  [
    (dificultad: Dificultad) => {
      const PEA = randPea();
      const desempleados = Math.floor(PEA * (Math.random() * 0.2));
      const tasa = Math.round((desempleados / PEA) * 100);

      const correcta = tasa;
      const variantes: number[] = [correcta];
      const cant = dificultad === "avanzado" ? 5 : dificultad === "basico" ? 3 : 4;

      while (variantes.length < cant) {
        const desv = Math.round(correcta * (1 + randInt(-40, 40)/100));
        if (desv > 0) variantes.push(desv);
      }

      const opciones = variantes.map(v => v + "%");
      const indiceCorrecto = opciones.indexOf(correcta + "%");

      return {
        enunciado:
          `La Población Económicamente Activa (PEA) es ${PEA.toLocaleString("es-AR")} personas y ` +
          `los desempleados son ${desempleados.toLocaleString("es-AR")}. ¿Cuál es la tasa de desempleo escolar aproximada?`,
        opciones,
        indiceCorrecto,
        explicacion: "Tasa = Desempleados / PEA × 100",
      };
    },
  ]
);
