// src/generators/economia/economia_ar_26_ivaCalculo.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
} from "./generico";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const genARIVACalculo: GeneratorFn = makeQuizGenerator(
  26,
  "IVA cálculo escolar (21% general o 10.5% esencial)",
  [
    (dificultad: Dificultad) => {
      const base = randInt(10, 90) * 1000;
      const esencial = Math.random() < 0.5;
      const tasa = esencial ? 0.105 : 0.21;
      const iva = Math.round(base * tasa);
      const total = base + iva;

      const correcta = "$ " + total.toLocaleString("es-AR");
      const variantes = [correcta];
      const cant = dificultad === "alta" ? 5 : dificultad === "baja" ? 3 : 4;

      while (variantes.length < cant) {
        const desv = randInt(-25, 25);
        const v = Math.round(total * (1 + desv / 100));
        if (v > 0) variantes.push("$ " + v.toLocaleString("es-AR"));
      }

      const opciones = variantes;
      const indiceCorrecto = opciones.indexOf(correcta);

      return {
        enunciado:
          `Producto ${esencial ? "esencial" : "general"} con precio sin IVA de $ ${base.toLocaleString("es-AR")}.\n` +
          `IVA a aplicar = ${tasa * 100}%. ¿Cuál es el precio final con IVA?`,
        opciones,
        indiceCorrecto,
        explicacion: `IVA = Precio × ${tasa}. Total = ${base} + ${iva}`,
      };
    },
  ]
);
