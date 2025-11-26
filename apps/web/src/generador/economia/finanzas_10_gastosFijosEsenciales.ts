// src/generators/economia/finanzas_10_gastosFijosEsenciales.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoGasto =
  | "Gasto fijo esencial"
  | "Gasto variable esencial"
  | "Gasto no esencial";

const GASTOS: {
  descripcion: string;
  tipo: TipoGasto;
}[] = [
  {
    descripcion: "Pago mensual de la factura de luz.",
    tipo: "Gasto fijo esencial",
  },
  {
    descripcion: "Pago mensual de la factura de gas.",
    tipo: "Gasto fijo esencial",
  },
  {
    descripcion: "Pago mensual de agua corriente.",
    tipo: "Gasto fijo esencial",
  },
  {
    descripcion: "Pago del alquiler de la vivienda.",
    tipo: "Gasto fijo esencial",
  },
  {
    descripcion: "Pago mensual del servicio de internet.",
    tipo: "Gasto fijo esencial",
  },
  {
    descripcion: "Compra semanal de alimentos básicos.",
    tipo: "Gasto variable esencial",
  },
  {
    descripcion: "Compra de ropa de marca por moda.",
    tipo: "Gasto no esencial",
  },
  {
    descripcion: "Salida al cine y comida rápida los fines de semana.",
    tipo: "Gasto no esencial",
  },
];

export const genFinanzasGastosFijosEsenciales: GeneratorFn = makeQuizGenerator(
  10,
  "Gastos fijos esenciales del hogar",
  [
    (_dificultad: Dificultad) => {
      const gasto = pickOne(GASTOS);
      const opciones: TipoGasto[] = [
        "Gasto fijo esencial",
        "Gasto variable esencial",
        "Gasto no esencial",
      ];
      const indiceCorrecto = opciones.indexOf(gasto.tipo);

      return {
        enunciado:
          "Clasificá el siguiente gasto del hogar:\n\n" + gasto.descripcion,
        opciones,
        indiceCorrecto,
        explicacion:
          "Los gastos fijos esenciales son pagos periódicos necesarios para el funcionamiento básico del hogar (luz, gas, agua, alquiler, internet). Los variables esenciales pueden cambiar mes a mes (alimentos, transporte) y los no esenciales son prescindibles.",
      };
    },
  ]
);
