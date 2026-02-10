// src/generators/economia/finanzas_09_presupuestoFamiliar.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type CategoriaPresupuesto = "Ingreso" | "Gasto" | "Ahorro";

const ITEMS_BASICO: {
  descripcion: string;
  categoriaCorrecta: CategoriaPresupuesto;
}[] = [
  {
    descripcion: "Sueldo mensual que cobra una persona por su trabajo.",
    categoriaCorrecta: "Ingreso",
  },
  {
    descripcion: "Horas extras cobradas a fin de mes.",
    categoriaCorrecta: "Ingreso",
  },
  {
    descripcion: "Pago mensual del alquiler de la vivienda.",
    categoriaCorrecta: "Gasto",
  },
  {
    descripcion: "Pago de la factura de luz.",
    categoriaCorrecta: "Gasto",
  },
  {
    descripcion: "Compra mensual de alimentos básicos.",
    categoriaCorrecta: "Gasto",
  },
  {
    descripcion:
      "Parte del dinero que se guarda todos los meses para emergencias.",
    categoriaCorrecta: "Ahorro",
  },
  {
    descripcion:
      "Monto guardado mensualmente para comprar un electrodoméstico a futuro.",
    categoriaCorrecta: "Ahorro",
  },
];

const ITEMS_INTERMEDIO = [
  ...ITEMS_BASICO,
  {
    descripcion: "Ingreso por venta ocasional de un mueble usado.",
    categoriaCorrecta: "Ingreso",
  },
  {
    descripcion: "Pago del seguro del hogar.",
    categoriaCorrecta: "Gasto",
  },
];

const ITEMS_AVANZADO = [
  ...ITEMS_INTERMEDIO,
  {
    descripcion:
      "Parte del ingreso que se aparta para invertir en un plazo fijo.",
    categoriaCorrecta: "Ahorro",
  },
  {
    descripcion: "Pago de una cuota escolar mensual.",
    categoriaCorrecta: "Gasto",
  },
];

const ITEMS_LEGENDARIO = [
  ...ITEMS_AVANZADO,
  {
    descripcion:
      "Ingreso extra por trabajos freelance realizados en el mes.",
    categoriaCorrecta: "Ingreso",
  },
  {
    descripcion:
      "Dinero reservado para reemplazar un electrodoméstico en el futuro.",
    categoriaCorrecta: "Ahorro",
  },
];

const ITEMS_DIVINO = [
  ...ITEMS_LEGENDARIO,
  {
    descripcion:
      "Pago de intereses de una tarjeta de crédito por compras previas.",
    categoriaCorrecta: "Gasto",
  },
  {
    descripcion: "Bonificación anual que se recibe por desempeño laboral.",
    categoriaCorrecta: "Ingreso",
  },
];

const ITEMS_POR_DIFICULTAD: Record<
  Dificultad,
  { descripcion: string; categoriaCorrecta: CategoriaPresupuesto }[]
> = {
  basico: ITEMS_BASICO,
  intermedio: ITEMS_INTERMEDIO,
  avanzado: ITEMS_AVANZADO,
};

export const genFinanzasPresupuestoFamiliar: GeneratorFn = makeQuizGenerator(
  9,
  "Presupuesto familiar (ingresos, gastos, ahorro)",
  [
    (dificultad: Dificultad) => {
      const item = pickOne(ITEMS_POR_DIFICULTAD[dificultad]);
      const opciones: CategoriaPresupuesto[] = [
        "Ingreso",
        "Gasto",
        "Ahorro",
      ];
      const indiceCorrecto = opciones.indexOf(item.categoriaCorrecta);

      return {
        enunciado:
          "En un presupuesto familiar, ¿cómo se clasifica el siguiente concepto?\n\n" +
          item.descripcion,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el presupuesto familiar se separan los Ingresos (entradas de dinero), los Gastos (salidas de dinero) y el Ahorro (parte del ingreso que se reserva y no se gasta).",
      };
    },
  ]
);
