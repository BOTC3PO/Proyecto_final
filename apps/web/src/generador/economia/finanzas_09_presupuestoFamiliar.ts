// src/generators/economia/finanzas_09_presupuestoFamiliar.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type CategoriaPresupuesto = "Ingreso" | "Gasto" | "Ahorro";

const ITEMS: {
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

export const genFinanzasPresupuestoFamiliar: GeneratorFn = makeQuizGenerator(
  9,
  "Presupuesto familiar (ingresos, gastos, ahorro)",
  [
    (_dificultad: Dificultad) => {
      const item = pickOne(ITEMS);
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
