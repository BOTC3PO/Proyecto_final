// src/generators/economia/finanzas_14_cftVsInteres.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Concepto = "Interés" | "Costo financiero total (CFT)";

const CASOS: {
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

export const genFinanzasCftVsInteres: GeneratorFn = makeQuizGenerator(
  14,
  "Costo financiero total (CFT) vs interés",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
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
