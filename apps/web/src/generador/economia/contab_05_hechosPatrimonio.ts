// src/generators/economia/contab_05_hechosPatrimonio.ts

import { Dificultad, GeneratorFn } from "../core/types";
import { makeQuizGenerator, pickOne } from "./generico";

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
];

export const genContabHechosPatrimonio: GeneratorFn = makeQuizGenerator(
  5,
  "Hechos que afectan o no afectan al patrimonio",
  [
    (_dificultad: Dificultad) => {
      const hecho = pickOne(HECHOS);
      const opciones: Afecta[] = [
        "Afecta el patrimonio",
        "No afecta el patrimonio",
      ];
      const indiceCorrecto = opciones.indexOf(hecho.respuesta);

      return {
        enunciado: `Indique si el siguiente hecho económico afecta o no afecta al patrimonio:\n\n${hecho.descripcion}`,
        opciones,
        indiceCorrecto,
        explicacion: hecho.detalle,
      };
    },
  ]
);
