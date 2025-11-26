// src/generators/economia/economia_ar_22_descuentosObligatorios.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

const CASOS = [
  {
    enunciado:
      "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para la Jubilación sobre el sueldo bruto remunerativo?",
    opciones: ["3%", "11%", "17%", "21%"],
    indiceCorrecto: 1,
    explicacion:
      "El aporte obligatorio del trabajador a la jubilación suele ser el 11% del sueldo bruto remunerativo.",
  },
  {
    enunciado:
      "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para la Obra Social sobre el sueldo bruto remunerativo?",
    opciones: ["3%", "11%", "10,5%", "21%"],
    indiceCorrecto: 0,
    explicacion:
      "El aporte obligatorio del trabajador a la Obra Social suele ser el 3% del sueldo bruto remunerativo.",
  },
  {
    enunciado:
      "En un recibo de sueldo típico en Argentina, ¿qué porcentaje se descuenta para PAMI sobre el sueldo bruto remunerativo?",
    opciones: ["11%", "3%", "6%", "21%"],
    indiceCorrecto: 1,
    explicacion:
      "El aporte obligatorio del trabajador a PAMI suele ser el 3% del sueldo bruto remunerativo.",
  },
  {
    enunciado:
      "Si mirás la parte de 'aportes del trabajador' en un recibo típico, ¿qué tres conceptos principales suelen aparecer con 11%, 3% y 3%?",
    opciones: [
      "IVA, Ganancias y Monotributo",
      "Jubilación, Obra Social y PAMI",
      "Impuesto a las ganancias, IVA y ingresos brutos",
      "Monotributo, IVA y tasa municipal",
    ],
    indiceCorrecto: 1,
    explicacion:
      "En un esquema escolar básico se ve: 11% Jubilación, 3% Obra Social y 3% PAMI, todos calculados sobre el bruto remunerativo.",
  },
];

export const genARDescuentosObligatorios: GeneratorFn = makeQuizGenerator(
  22,
  "Descuentos obligatorios en el recibo (Jubilación 11%, OS 3%, PAMI 3%)",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
      return {
        enunciado: caso.enunciado,
        opciones: caso.opciones,
        indiceCorrecto: caso.indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
