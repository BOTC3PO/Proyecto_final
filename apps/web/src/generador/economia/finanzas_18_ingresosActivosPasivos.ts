// src/generators/economia/finanzas_18_ingresosActivosPasivos.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoIngreso = "Ingreso activo" | "Ingreso pasivo";

const INGRESOS: {
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

export const genFinanzasIngresosActivosPasivos: GeneratorFn =
  makeQuizGenerator(
    18,
    "Ingresos activos vs ingresos pasivos en el hogar",
    [
      (_dificultad: Dificultad) => {
        const ingreso = pickOne(INGRESOS);
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
