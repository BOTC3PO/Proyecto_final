// src/generators/economia/contab_05_hechosPatrimonio.ts

import { type Dificultad } from "../core/types";
import { makeQuizGenerator, pickOne,type GeneratorFn } from "./generico";

type Afecta = "Afecta el patrimonio" | "No afecta el patrimonio";

const HECHOS: {
  descripcion: string;
  respuesta: Afecta;
  detalle: string;
}[] = [
  {
    descripcion: "Se paga en efectivo una deuda con un proveedor.",
    respuesta: "Afecta el patrimonio",
    detalle:
      "Disminuye el Activo (Caja) y disminuye el Pasivo (Proveedores): hecho permutativo, el patrimonio total no cambia pero sí se modifican las cuentas.",
  },
  {
    descripcion: "Se compra mercadería al contado.",
    respuesta: "Afecta el patrimonio",
    detalle:
      "Aumenta un Activo (Mercaderías) y disminuye otro Activo (Caja): hecho permutativo.",
  },
  {
    descripcion: "Se rompe una silla del local sin reposición.",
    respuesta: "Afecta el patrimonio",
    detalle:
      "Disminuye el Activo (Muebles y Útiles) y aumenta un gasto: hecho modificativo disminutivo, baja el patrimonio neto.",
  },
  {
    descripcion: "El dueño mira el estado contable sin hacer operaciones.",
    respuesta: "No afecta el patrimonio",
    detalle:
      "No hay operación económica, solo una observación. No se modifican cuentas.",
  },
  {
    descripcion: "Se emite una factura de venta a crédito a un cliente.",
    respuesta: "Afecta el patrimonio",
    detalle:
      "Aumenta Activo (Clientes) y aumenta R+ (Ventas): hecho modificativo aumentativo, aumenta el patrimonio neto.",
  },
  {
    descripcion: "Se pasa la mercadería del depósito al salón de ventas.",
    respuesta: "No afecta el patrimonio",
    detalle:
      "Solo se cambia la ubicación física de un mismo activo sin modificar su valor contable.",
  },
  {
    descripcion: "Se registra un gasto por servicio de luz del mes.",
    respuesta: "Afecta el patrimonio",
    detalle:
      "Disminuye el Activo (Caja/Banco) y aumenta un gasto, reduciendo el patrimonio neto.",
  },
  {
    descripcion: "Se recibe un préstamo bancario en la cuenta corriente.",
    respuesta: "Afecta el patrimonio",
    detalle:
      "Aumenta el Activo (Banco) y aumenta el Pasivo (Préstamo), cambia la estructura del patrimonio.",
  },
];

export const genContabHechosPatrimonio: GeneratorFn = makeQuizGenerator(
  5,
  "Hechos que afectan o no afectan al patrimonio",
  [
    (dificultad: Dificultad) => {
      const hechosPorDificultad: Record<Dificultad, string[]> = {
        basico: [
          "Se paga en efectivo una deuda con un proveedor.",
          "Se compra mercadería al contado.",
          "El dueño mira el estado contable sin hacer operaciones.",
        ],
        intermedio: [
          "Se paga en efectivo una deuda con un proveedor.",
          "Se compra mercadería al contado.",
          "Se rompe una silla del local sin reposición.",
          "Se emite una factura de venta a crédito a un cliente.",
          "Se pasa la mercadería del depósito al salón de ventas.",
        ],
        avanzado: HECHOS.map((hecho) => hecho.descripcion),
        Legendario: HECHOS.map((hecho) => hecho.descripcion),
        Divino: HECHOS.map((hecho) => hecho.descripcion),
      };
      const pool = HECHOS.filter((hecho) =>
        (hechosPorDificultad[dificultad] ?? []).includes(hecho.descripcion)
      );
      const hecho = pickOne(pool.length > 0 ? pool : HECHOS);
      const opciones: Afecta[] = [
        "Afecta el patrimonio",
        "No afecta el patrimonio",
      ];
      const indiceCorrecto = opciones.indexOf(hecho.respuesta);

      return {
        enunciado: `Indique si el siguiente hecho económico afecta o no afecta al patrimonio:\n\n${hecho.descripcion}`,
        opciones,
        indiceCorrecto,
        explicacion:
          hecho.detalle +
          (dificultad === "avanzado" ||
          dificultad === "Legendario" ||
          dificultad === "Divino"
            ? " Recordá identificar si el hecho modifica el patrimonio neto o solo la composición."
            : ""),
      };
    },
  ]
);
