// src/generators/economia/finanzas_18_ingresosActivosPasivos.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoIngreso = "Ingreso activo" | "Ingreso pasivo";

const INGRESOS_BASICO: {
  descripcion: string;
  tipo: TipoIngreso;
}[] = [
  {
    descripcion:
      "Sueldo mensual que se cobra por ir a trabajar a una empresa.",
    tipo: "Ingreso activo",
  },
  {
    descripcion: "Honorarios por trabajos realizados como profesional independiente.",
    tipo: "Ingreso activo",
  },
  {
    descripcion:
      "Pagos por horas extras o trabajos adicionales realizados los fines de semana.",
    tipo: "Ingreso activo",
  },
  {
    descripcion: "Cobro mensual de un alquiler por una vivienda propia.",
    tipo: "Ingreso pasivo",
  },
  {
    descripcion:
      "Cobro de intereses por un plazo fijo o inversión financiera sin trabajo adicional.",
    tipo: "Ingreso pasivo",
  },
  {
    descripcion:
      "Ganancias que se reciben por derechos de autor de un libro publicado.",
    tipo: "Ingreso pasivo",
  },
];

const INGRESOS_INTERMEDIO = [
  ...INGRESOS_BASICO,
  {
    descripcion:
      "Pago por clases particulares dictadas los fines de semana.",
    tipo: "Ingreso activo",
  },
  {
    descripcion:
      "Cobro mensual por alquilar una habitación de la casa.",
    tipo: "Ingreso pasivo",
  },
];

const INGRESOS_AVANZADO = [
  ...INGRESOS_INTERMEDIO,
  {
    descripcion:
      "Comisiones por ventas realizadas en un trabajo dependiente.",
    tipo: "Ingreso activo",
  },
  {
    descripcion:
      "Ingresos por dividendos de acciones sin trabajo adicional.",
    tipo: "Ingreso pasivo",
  },
];

const INGRESOS_LEGENDARIO = [
  ...INGRESOS_AVANZADO,
  {
    descripcion:
      "Ingreso por trabajos temporarios en temporada alta.",
    tipo: "Ingreso activo",
  },
  {
    descripcion:
      "Ingresos mensuales por regalías de música en plataformas digitales.",
    tipo: "Ingreso pasivo",
  },
];

const INGRESOS_DIVINO = [
  ...INGRESOS_LEGENDARIO,
  {
    descripcion:
      "Pago por asesorías profesionales con clientes de forma presencial.",
    tipo: "Ingreso activo",
  },
  {
    descripcion:
      "Intereses generados por un fondo de inversión sin gestión diaria.",
    tipo: "Ingreso pasivo",
  },
];

const INGRESOS_POR_DIFICULTAD: Record<
  Dificultad,
  { descripcion: string; tipo: TipoIngreso }[]
> = {
  basico: INGRESOS_BASICO,
  intermedio: INGRESOS_INTERMEDIO,
  avanzado: INGRESOS_AVANZADO,
  Legendario: INGRESOS_LEGENDARIO,
  Divino: INGRESOS_DIVINO,
};

export const genFinanzasIngresosActivosPasivos: GeneratorFn =
  makeQuizGenerator(
    18,
    "Ingresos activos vs ingresos pasivos en el hogar",
    [
      (dificultad: Dificultad) => {
        const ingreso = pickOne(INGRESOS_POR_DIFICULTAD[dificultad]);
        const opciones: TipoIngreso[] = [
          "Ingreso activo",
          "Ingreso pasivo",
        ];
        const indiceCorrecto = opciones.indexOf(ingreso.tipo);

        return {
          enunciado:
            "Clasificá el siguiente ingreso del hogar:\n\n" +
            ingreso.descripcion,
          opciones,
          indiceCorrecto,
          explicacion:
            "En nivel escolar, se llama ingreso activo al que se obtiene directamente por el trabajo (sueldo, honorarios). El ingreso pasivo proviene de inversiones o bienes que generan dinero con poco trabajo diario (alquileres, intereses, regalías).",
        };
      },
    ]
  );
