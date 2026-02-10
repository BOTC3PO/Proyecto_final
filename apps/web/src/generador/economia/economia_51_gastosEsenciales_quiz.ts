// src/generators/economia/economia_51_gastosEsenciales_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Gasto esencial" | "Gasto no esencial";

const CASOS = [
  {
    desc: "Pago mensual del alquiler de la vivienda.",
    tipo: "Gasto esencial" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Compra mensual de alimentos básicos.",
    tipo: "Gasto esencial" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Pago de facturas de luz, gas y agua.",
    tipo: "Gasto esencial" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Suscripción a varios servicios de streaming para ocio.",
    tipo: "Gasto no esencial" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Salida a comer afuera todos los fines de semana.",
    tipo: "Gasto no esencial" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Compra de ropa de marca por moda sin necesidad urgente.",
    tipo: "Gasto no esencial" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Medicamentos recetados para un tratamiento.",
    tipo: "Gasto esencial" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "Cambio de celular por un modelo más nuevo, sin fallas en el anterior.",
    tipo: "Gasto no esencial" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "Pago de transporte diario para ir al trabajo o estudio.",
    tipo: "Gasto esencial" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
];

export const genQuizGastosEsenciales: GeneratorFn = makeQuizGenerator(
  51,
  "Gastos esenciales vs no esenciales (quiz)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
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
