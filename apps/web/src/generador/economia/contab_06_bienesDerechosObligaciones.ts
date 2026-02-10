// src/generators/economia/contab_06_bienesDerechosObligaciones.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Categoria = "Bien" | "Derecho" | "Obligación";

const ITEMS: { descripcion: string; categoria: Categoria }[] = [
  {
    descripcion: "Un vehículo que pertenece a la empresa.",
    categoria: "Bien",
  },
  {
    descripcion: "Mercaderías almacenadas para la venta.",
    categoria: "Bien",
  },
  {
    descripcion: "Una computadora de la oficina.",
    categoria: "Bien",
  },
  {
    descripcion: "Un crédito a cobrar a clientes por ventas a plazo.",
    categoria: "Derecho",
  },
  {
    descripcion: "Un cheque de terceros en cartera pendiente de cobro.",
    categoria: "Derecho",
  },
  {
    descripcion: "Una deuda bancaria a corto plazo.",
    categoria: "Obligación",
  },
  {
    descripcion: "Facturas de proveedores pendientes de pago.",
    categoria: "Obligación",
  },
  {
    descripcion: "Un préstamo a largo plazo con una entidad financiera.",
    categoria: "Obligación",
  },
  {
    descripcion: "Un seguro pagado por adelantado.",
    categoria: "Derecho",
  },
  {
    descripcion: "Un depósito en garantía entregado a un proveedor.",
    categoria: "Derecho",
  },
  {
    descripcion: "Un pagaré a favor de un proveedor.",
    categoria: "Obligación",
  },
];

export const genContabBienesDerechosObligaciones: GeneratorFn =
  makeQuizGenerator(
    6,
    "Bienes, derechos y obligaciones como partes del patrimonio",
    [
      (dificultad: Dificultad) => {
        const itemsPorDificultad: Record<Dificultad, string[]> = {
          basico: [
            "Un vehículo que pertenece a la empresa.",
            "Mercaderías almacenadas para la venta.",
            "Una computadora de la oficina.",
            "Un crédito a cobrar a clientes por ventas a plazo.",
            "Una deuda bancaria a corto plazo.",
          ],
          intermedio: [
            "Un vehículo que pertenece a la empresa.",
            "Mercaderías almacenadas para la venta.",
            "Una computadora de la oficina.",
            "Un crédito a cobrar a clientes por ventas a plazo.",
            "Un cheque de terceros en cartera pendiente de cobro.",
            "Una deuda bancaria a corto plazo.",
            "Facturas de proveedores pendientes de pago.",
          ],
          avanzado: ITEMS.map((item) => item.descripcion),
        };
        const pool = ITEMS.filter((item) =>
          (itemsPorDificultad[dificultad] ?? []).includes(item.descripcion)
        );
        const item = pickOne(pool.length > 0 ? pool : ITEMS);
        const opciones: Categoria[] = ["Bien", "Derecho", "Obligación"];
        const indiceCorrecto = opciones.indexOf(item.categoria);

        return {
          enunciado:
            "Clasificá el siguiente elemento del patrimonio como Bien, Derecho u Obligación:\n\n" +
            item.descripcion,
          opciones,
          indiceCorrecto,
          explicacion:
            "El patrimonio está formado por bienes (lo que la empresa posee), derechos (lo que tiene para cobrar) y obligaciones (lo que debe a terceros)." +
            (dificultad === "avanzado"
              ? " En niveles altos, identificá si el elemento implica propiedad, un crédito o una deuda."
              : ""),
        };
      },
    ]
  );
