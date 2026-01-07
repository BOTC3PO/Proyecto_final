// src/generators/economia/finanzas_10_gastosFijosEsenciales.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoGasto =
  | "Gasto fijo esencial"
  | "Gasto variable esencial"
  | "Gasto no esencial";

const GASTOS_BASICO: {
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

const GASTOS_INTERMEDIO = [
  ...GASTOS_BASICO,
  {
    descripcion: "Pago mensual del abono de transporte público.",
    tipo: "Gasto variable esencial",
  },
  {
    descripcion: "Cuota mensual del gimnasio.",
    tipo: "Gasto no esencial",
  },
];

const GASTOS_AVANZADO = [
  ...GASTOS_INTERMEDIO,
  {
    descripcion: "Compra de medicamentos de uso permanente.",
    tipo: "Gasto variable esencial",
  },
  {
    descripcion: "Pago anual prorrateado de un seguro del hogar.",
    tipo: "Gasto fijo esencial",
  },
];

const GASTOS_LEGENDARIO = [
  ...GASTOS_AVANZADO,
  {
    descripcion: "Mantenimiento mensual del ascensor del edificio.",
    tipo: "Gasto fijo esencial",
  },
  {
    descripcion: "Compra de decoración para renovar el living.",
    tipo: "Gasto no esencial",
  },
];

const GASTOS_DIVINO = [
  ...GASTOS_LEGENDARIO,
  {
    descripcion: "Reparación imprevista del calefón en invierno.",
    tipo: "Gasto variable esencial",
  },
  {
    descripcion: "Pago mensual de una suscripción premium de videojuegos.",
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
  Legendario: GASTOS_LEGENDARIO,
  Divino: GASTOS_DIVINO,
};

export const genFinanzasGastosFijosEsenciales: GeneratorFn = makeQuizGenerator(
  10,
  "Gastos fijos esenciales del hogar",
  [
    (dificultad: Dificultad) => {
      const gasto = pickOne(GASTOS_POR_DIFICULTAD[dificultad]);
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
