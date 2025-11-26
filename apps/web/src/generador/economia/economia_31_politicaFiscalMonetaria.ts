// src/generators/economia/economia_31_politicaFiscalMonetaria.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoPolitica =
  | "Política fiscal expansiva"
  | "Política fiscal contractiva"
  | "Política monetaria expansiva"
  | "Política monetaria contractiva";

const CASOS: {
  descripcion: string;
  respuesta: TipoPolitica;
  explicacion: string;
}[] = [
  {
    descripcion:
      "El gobierno aumenta el gasto público en obras y programas sociales para impulsar la actividad económica.",
    respuesta: "Política fiscal expansiva",
    explicacion:
      "Usa el presupuesto del Estado (gasto público) para aumentar la demanda agregada.",
  },
  {
    descripcion:
      "El gobierno baja impuestos a familias y empresas para que tengan más dinero para gastar e invertir.",
    respuesta: "Política fiscal expansiva",
    explicacion:
      "Reduce la carga impositiva para estimular el consumo y la inversión.",
  },
  {
    descripcion:
      "El gobierno reduce el gasto público y sube algunos impuestos para achicar el déficit fiscal.",
    respuesta: "Política fiscal contractiva",
    explicacion:
      "Busca frenar la demanda y ordenar las cuentas públicas reduciendo gastos o aumentando impuestos.",
  },
  {
    descripcion:
      "El Banco Central baja la tasa de interés y facilita el crédito para que se pida más dinero prestado.",
    respuesta: "Política monetaria expansiva",
    explicacion:
      "Hace más barato el crédito para estimular el consumo y la inversión.",
  },
  {
    descripcion:
      "El Banco Central sube mucho la tasa de interés para frenar la inflación y el consumo.",
    respuesta: "Política monetaria contractiva",
    explicacion:
      "Hace más caro el crédito para reducir la cantidad de dinero circulando.",
  },
];

export const genPoliticaFiscalMonetaria: GeneratorFn = makeQuizGenerator(
  31,
  "Política fiscal vs monetaria (expansiva/contractiva)",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
      const opciones: TipoPolitica[] = [
        "Política fiscal expansiva",
        "Política fiscal contractiva",
        "Política monetaria expansiva",
        "Política monetaria contractiva",
      ];
      const indiceCorrecto = opciones.indexOf(caso.respuesta);

      return {
        enunciado:
          "Clasificá la siguiente medida de política económica:\n\n" +
          caso.descripcion,
        opciones,
        indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
