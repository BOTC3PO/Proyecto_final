// src/generators/economia/economia_ar_21_reciboBasico.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Caso = {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
};

const CASOS_POR_DIFICULTAD: Record<Dificultad, Caso[]> = {
  basico: [
    {
      enunciado:
        "En un recibo de sueldo argentino, ¿qué representa el concepto 'Sueldo básico'?",
      opciones: [
        "Los aportes que paga el empleador",
        "El monto base antes de adicionales y descuentos",
        "El neto final que cobra el trabajador",
        "Los reintegros por viáticos",
      ],
      indiceCorrecto: 1,
      explicacion:
        "El sueldo básico es la remuneración base del trabajador, sobre la que luego se suman adicionales y se descuentan aportes.",
    },
  ],
  intermedio: [
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
  ],
  avanzado: [
    {
      enunciado:
        "En un recibo de sueldo, ¿qué diferencia principal hay entre un concepto remunerativo y uno no remunerativo?",
      opciones: [
        "El remunerativo no se paga, el no remunerativo sí",
        "El remunerativo integra la base de aportes y contribuciones",
        "El no remunerativo siempre se paga en efectivo",
        "No hay diferencias, son sinónimos",
      ],
      indiceCorrecto: 1,
      explicacion:
        "Los conceptos remunerativos forman parte de la base para aportes y contribuciones; los no remunerativos no integran esa base.",
    },
    {
      enunciado:
        "Si un recibo incluye horas extras, ¿dónde suelen aparecer y cómo impactan?",
      opciones: [
        "En Descuentos, reduciendo el neto",
        "En Remuneraciones, aumentando el bruto",
        "En Aportes del empleador, sin afectar el bruto",
        "En Observaciones, sin impacto económico",
      ],
      indiceCorrecto: 1,
      explicacion:
        "Las horas extras son remunerativas y se suman en la sección de Remuneraciones, incrementando el sueldo bruto.",
    },
    {
      enunciado:
        "En muchos recibos aparece una sección de 'Aportes del empleador'. ¿Qué representa?",
      opciones: [
        "Importes que se descuentan al trabajador",
        "Impuestos personales del trabajador",
        "Contribuciones que la empresa paga al sistema de seguridad social",
        "Bonificaciones voluntarias al trabajador",
      ],
      indiceCorrecto: 2,
      explicacion:
        "Los aportes del empleador son contribuciones patronales que la empresa paga al Estado y otros organismos; no se descuentan del sueldo del trabajador.",
    },
  ],
};

export const genARReciboBasico: GeneratorFn = makeQuizGenerator(
  21,
  "Estructura básica del recibo de sueldo argentino",
  [
    (dificultad: Dificultad) => {
      const caso = pickOne(CASOS_POR_DIFICULTAD[dificultad]);
      return {
        enunciado: caso.enunciado,
        opciones: caso.opciones,
        indiceCorrecto: caso.indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
