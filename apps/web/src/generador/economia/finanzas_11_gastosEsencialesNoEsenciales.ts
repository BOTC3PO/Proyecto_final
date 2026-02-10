// src/generators/economia/finanzas_11_gastosEsencialesNoEsenciales.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoGasto = "Gasto esencial" | "Gasto no esencial";

const GASTOS_BASICO: {
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

const GASTOS_INTERMEDIO = [
  ...GASTOS_BASICO,
  {
    descripcion: "Pago mensual de un plan de internet para estudiar/trabajar.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Compra de entradas para un recital.",
    tipo: "Gasto no esencial",
  },
];

const GASTOS_AVANZADO = [
  ...GASTOS_INTERMEDIO,
  {
    descripcion: "Reparación de un electrodoméstico esencial en el hogar.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Vacaciones en un destino turístico de lujo.",
    tipo: "Gasto no esencial",
  },
];

const GASTOS_LEGENDARIO = [
  ...GASTOS_AVANZADO,
  {
    descripcion: "Compra de útiles escolares para el inicio de clases.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Suscripción mensual a varias plataformas de streaming.",
    tipo: "Gasto no esencial",
  },
];

const GASTOS_DIVINO = [
  ...GASTOS_LEGENDARIO,
  {
    descripcion: "Pago de un tratamiento médico indicado por un profesional.",
    tipo: "Gasto esencial",
  },
  {
    descripcion: "Cambio de auto por un modelo más nuevo sin necesidad.",
    tipo: "Gasto no esencial",
  },
];

const GASTOS_POR_DIFICULTAD: Record<
  Dificultad,
  { descripcion: string; tipo: TipoGasto }[]
> = {
  basico: GASTOS_BASICO,
  intermedio: GASTOS_INTERMEDIO,
  avanzado: GASTOS_AVANZADO,
};

export const genFinanzasGastosEsencialesNoEsenciales: GeneratorFn =
  makeQuizGenerator(
    11,
    "Gastos esenciales vs no esenciales",
    [
      (dificultad: Dificultad) => {
        const gasto = pickOne(GASTOS_POR_DIFICULTAD[dificultad]);
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
