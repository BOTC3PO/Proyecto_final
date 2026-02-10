// src/generators/economia/finanzas_14_cftVsInteres.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Concepto = "Interés" | "Costo financiero total (CFT)";

const CASOS_BASICO: {
  descripcion: string;
  respuesta: Concepto;
}[] = [
  {
    descripcion:
      "Es el porcentaje que se aplica sobre el capital para calcular lo que se paga por usar el dinero durante un tiempo.",
    respuesta: "Interés",
  },
  {
    descripcion:
      "Incluye no solo el interés, sino también comisiones, impuestos y otros gastos asociados al crédito.",
    respuesta: "Costo financiero total (CFT)",
  },
  {
    descripcion:
      "En un préstamo, el banco muestra un número más bajo que corresponde solo al rendimiento del dinero.",
    respuesta: "Interés",
  },
  {
    descripcion:
      "En la tarjeta de crédito, el valor más importante para comparar ofertas porque muestra el costo real del financiamiento.",
    respuesta: "Costo financiero total (CFT)",
  },
  {
    descripcion:
      "Sirve para comparar de forma sencilla cuánto cuesta realmente financiar una compra entre distintas entidades.",
    respuesta: "Costo financiero total (CFT)",
  },
];

const CASOS_INTERMEDIO = [
  ...CASOS_BASICO,
  {
    descripcion:
      "En un crédito, el indicador que suma intereses, gastos administrativos y seguros obligatorios.",
    respuesta: "Costo financiero total (CFT)",
  },
  {
    descripcion:
      "Es la tasa que se usa en la fórmula para calcular cuánto se paga por el préstamo.",
    respuesta: "Interés",
  },
];

const CASOS_AVANZADO = [
  ...CASOS_INTERMEDIO,
  {
    descripcion:
      "Dato que permite comparar préstamos con diferentes comisiones y cargos.",
    respuesta: "Costo financiero total (CFT)",
  },
  {
    descripcion:
      "Porcentaje anual que representa el costo básico de usar dinero prestado.",
    respuesta: "Interés",
  },
];

const CASOS_LEGENDARIO = [
  ...CASOS_AVANZADO,
  {
    descripcion:
      "Concepto que incluye tasa nominal, gastos y seguros en una sola medida.",
    respuesta: "Costo financiero total (CFT)",
  },
  {
    descripcion:
      "Se calcula aplicando la tasa sobre el capital para obtener el costo del crédito.",
    respuesta: "Interés",
  },
];

const CASOS_DIVINO = [
  ...CASOS_LEGENDARIO,
  {
    descripcion:
      "Es el indicador clave para comparar ofertas cuando hay cargos ocultos.",
    respuesta: "Costo financiero total (CFT)",
  },
  {
    descripcion:
      "Parte del costo de un préstamo que no incluye comisiones ni seguros.",
    respuesta: "Interés",
  },
];

const CASOS_POR_DIFICULTAD: Record<
  Dificultad,
  { descripcion: string; respuesta: Concepto }[]
> = {
  basico: CASOS_BASICO,
  intermedio: CASOS_INTERMEDIO,
  avanzado: CASOS_AVANZADO,
};

export const genFinanzasCftVsInteres: GeneratorFn = makeQuizGenerator(
  14,
  "Costo financiero total (CFT) vs interés",
  [
    (dificultad: Dificultad) => {
      const caso = pickOne(CASOS_POR_DIFICULTAD[dificultad]);
      const opciones: Concepto[] = ["Interés", "Costo financiero total (CFT)"];
      const indiceCorrecto = opciones.indexOf(caso.respuesta);

      return {
        enunciado:
          "El siguiente enunciado se refiere principalmente a Interés o a Costo financiero total (CFT):\n\n" +
          caso.descripcion,
        opciones,
        indiceCorrecto,
        explicacion:
          "En nivel escolar, el interés es solo la parte que se paga por usar el dinero. El CFT incluye intereses más todos los gastos y comisiones, por eso es el indicador más completo para comparar créditos.",
      };
    },
  ]
);
