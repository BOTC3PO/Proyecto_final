// src/generators/economia/finanzas_11_gastosEsencialesNoEsenciales.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoGasto = "Gasto esencial" | "Gasto no esencial";

const GASTOS: {
  descripcion: string;
  tipo: TipoGasto;
}[] = [
  {
    descripcion: "Compra mensual de alimentos básicos para la familia.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Pago del alquiler o cuota de la vivienda.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Pago de servicios básicos (luz, gas, agua).",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Pago mensual del transporte para ir a trabajar o estudiar.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Compra de medicamentos recetados.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Suscripción a una plataforma de streaming para ocio.",
    tipo: "Gasto no esencial",
  },
  {
    descripcion: "Compra de ropa de marca por moda, sin necesidad urgente.",
    tipo: "Gasto no esencial",
  },
  {
    descripcion: "Salidas frecuentes a comer afuera por gusto.",
    tipo: "Gasto no esencial",
  },
  {
    descripcion: "Compra de un celular nuevo solo por cambiar de modelo.",
    tipo: "Gasto no esencial",
  },
];

export const genFinanzasGastosEsencialesNoEsenciales: GeneratorFn =
  makeQuizGenerator(
    11,
    "Gastos esenciales vs no esenciales",
    [
      (_dificultad: Dificultad) => {
        const gasto = pickOne(GASTOS);
        const opciones: TipoGasto[] = ["Gasto esencial", "Gasto no esencial"];
        const indiceCorrecto = opciones.indexOf(gasto.tipo);

        return {
          enunciado:
            "En un presupuesto familiar, ¿cómo clasificarías el siguiente gasto?\n\n" +
            gasto.descripcion,
          opciones,
          indiceCorrecto,
          explicacion:
            "Los gastos esenciales son necesarios para cubrir necesidades básicas (vivienda, alimentación, salud, transporte). Los no esenciales se relacionan con gustos o consumos que se pueden recortar sin afectar lo básico.",
        };
      },
    ]
  );
