// src/generators/economia/economia_ar_21_reciboBasico.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

const CASOS = [
  {
    enunciado:
      "En un recibo de sueldo argentino, ¿qué representa el concepto 'Remuneraciones' o 'Haberes'?",
    opciones: [
      "Los importes que el empleador descuenta al trabajador",
      "Los importes que paga el empleador al trabajador por su trabajo",
      "Los aportes patronales que paga la empresa al Estado",
      "Los reintegros de gastos del trabajador",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Las remuneraciones o haberes son los importes brutos que el empleador paga al trabajador por su trabajo (sueldo básico, antigüedad, horas extras, etc.).",
  },
  {
    enunciado:
      "En el recibo, el 'Neto a cobrar' es:",
    opciones: [
      "El sueldo bruto sin descuentos",
      "La suma de aportes del empleador",
      "El monto que efectivamente recibe el trabajador después de los descuentos",
      "El total de impuestos que paga el empleador",
    ],
    indiceCorrecto: 2,
    explicacion:
      "El 'Neto a cobrar' es el resultado de restar al sueldo bruto todos los descuentos que corresponden al trabajador (aportes jubilatorios, obra social, PAMI, otros).",
  },
  {
    enunciado:
      "¿Qué suele incluir la sección de 'Descuentos' del recibo de sueldo?",
    opciones: [
      "Solo los premios y bonos especiales",
      "Los aportes obligatorios del trabajador (jubilación, obra social, PAMI, etc.)",
      "Los aportes del empleador a la seguridad social",
      "Los viáticos y reintegros",
    ],
    indiceCorrecto: 1,
    explicacion:
      "En 'Descuentos' se listan los importes que se restan al sueldo bruto del trabajador: aportes jubilatorios, obra social, PAMI y otros conceptos que paga el trabajador.",
  },
  {
    enunciado:
      "En muchos recibos aparece una sección de 'Aportes del empleador'. ¿Qué son?",
    opciones: [
      "Importes que se descuentan al trabajador",
      "Impuestos personales del trabajador",
      "Contribuciones que la empresa paga al sistema de seguridad social, obra social, ART, etc.",
      "Bonificaciones voluntarias al trabajador",
    ],
    indiceCorrecto: 2,
    explicacion:
      "Los aportes del empleador son contribuciones patronales que la empresa paga al Estado y otros organismos (jubilación, obra social, ART, etc.), no se descuentan del sueldo del trabajador.",
  },
];

export const genARReciboBasico: GeneratorFn = makeQuizGenerator(
  21,
  "Estructura básica del recibo de sueldo argentino",
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
