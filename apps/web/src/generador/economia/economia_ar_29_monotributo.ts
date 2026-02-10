// src/generators/economia/economia_ar_29_monotributo.ts
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
      enunciado: "¿Qué es el Monotributo en Argentina (concepto escolar)?",
      opciones: [
        "Un impuesto exclusivo para grandes empresas",
        "Un régimen simplificado para pequeños contribuyentes",
        "Un subsidio estatal para empleados públicos",
        "Una tasa municipal por comercio",
      ],
      indiceCorrecto: 1,
      explicacion:
        "El Monotributo es un régimen simplificado para pequeños contribuyentes que unifica impuestos y aportes.",
    },
  ],
  intermedio: [
    {
      enunciado: "¿Qué pagos suele unificar el Monotributo en una sola cuota?",
      opciones: [
        "IVA, Ganancias y aportes previsionales",
        "Impuesto inmobiliario y patentes",
        "Sueldos y aguinaldo",
        "Impuesto al cheque y tasas bancarias",
      ],
      indiceCorrecto: 0,
      explicacion:
        "El Monotributo unifica componentes impositivos (IVA/Ganancias) y aportes previsionales/obra social.",
    },
  ],
  avanzado: [
    {
      enunciado:
        "Un trabajador independiente que factura y paga una cuota mensual fija, ¿probablemente está en?",
      opciones: [
        "Relación de dependencia",
        "Monotributo",
        "Impuesto a los Sellos",
        "Tasa de Seguridad e Higiene",
      ],
      indiceCorrecto: 1,
      explicacion:
        "El pago mensual fijo por categoría es propio del régimen de Monotributo.",
    },
  ],
    {
      enunciado:
        "¿Cuál es el criterio principal para clasificar las categorías del Monotributo en el enfoque escolar?",
      opciones: [
        "Cantidad de empleados en nómina",
        "Nivel de ingresos/facturación anual",
        "Cantidad de provincias donde opera",
        "Tipo de moneda utilizada",
      ],
      indiceCorrecto: 1,
      explicacion:
        "Las categorías del Monotributo se determinan principalmente por el nivel de ingresos o facturación.",
    },
  ],
    {
      enunciado:
        "Un monotributista no emite facturas ni declara ingresos. ¿Qué problema principal aparece?",
      opciones: [
        "No puede pagar IVA como responsable inscripto",
        "Pierde la posibilidad de justificar ingresos y mantener su categoría",
        "Debe pagar impuesto inmobiliario",
        "No puede pagar salarios",
      ],
      indiceCorrecto: 1,
      explicacion:
        "Sin facturación, no puede justificar ingresos ni sostener su inscripción en el régimen.",
    },
  ],
};

export const genARMonotributo: GeneratorFn = makeQuizGenerator(
  29,
  "Monotributo (concepto escolar)",
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
