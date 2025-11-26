// src/generators/economia/economia_51_gastosEsenciales_quiz.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Gasto esencial" | "Gasto no esencial";

const CASOS = [
  {
    desc: "Pago mensual del alquiler de la vivienda.",
    tipo: "Gasto esencial" as Tipo,
  },
  {
    desc: "Compra mensual de alimentos básicos.",
    tipo: "Gasto esencial" as Tipo,
  },
  {
    desc: "Pago de facturas de luz, gas y agua.",
    tipo: "Gasto esencial" as Tipo,
  },
  {
    desc: "Suscripción a varios servicios de streaming para ocio.",
    tipo: "Gasto no esencial" as Tipo,
  },
  {
    desc: "Salida a comer afuera todos los fines de semana.",
    tipo: "Gasto no esencial" as Tipo,
  },
  {
    desc: "Compra de ropa de marca por moda sin necesidad urgente.",
    tipo: "Gasto no esencial" as Tipo,
  },
];

export const genQuizGastosEsenciales: GeneratorFn = makeQuizGenerator(
  51,
  "Gastos esenciales vs no esenciales (quiz)",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
      const opciones: Tipo[] = ["Gasto esencial", "Gasto no esencial"];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "En el presupuesto familiar, ¿cómo clasificarías el siguiente gasto?\n\n" +
          caso.desc,
        opciones,
        indiceCorrecto,
        explicacion:
          "Gastos esenciales: vivienda, servicios básicos, alimentos, salud. No esenciales: ocio, lujos, consumos que se pueden recortar sin afectar lo básico.",
      };
    },
  ]
);
