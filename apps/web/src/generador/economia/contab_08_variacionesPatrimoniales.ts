// src/generators/economia/contab_08_variacionesPatrimoniales.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoVariacion =
  | "Permutativa"
  | "Modificativa Aumentativa"
  | "Modificativa Disminutiva";

const HECHOS: {
  descripcion: string;
  tipo: TipoVariacion;
  detalle: string;
}[] = [
  {
    descripcion: "Se compra mercadería al contado.",
    tipo: "Permutativa",
    detalle:
      "Aumenta un Activo (Mercaderías) y disminuye otro Activo (Caja). El patrimonio total no cambia.",
  },
  {
    descripcion: "Se paga una deuda a proveedores en efectivo.",
    tipo: "Permutativa",
    detalle:
      "Disminuye el Activo (Caja) y disminuye el Pasivo (Proveedores). El patrimonio total no cambia.",
  },
  {
    descripcion: "Se vende mercadería al contado generando ganancia.",
    tipo: "Modificativa Aumentativa",
    detalle:
      "Aumenta el Activo (Caja) y aumenta un ingreso (Ventas), incrementando el patrimonio neto.",
  },
  {
    descripcion: "Se paga el alquiler del local comercial.",
    tipo: "Modificativa Disminutiva",
    detalle:
      "Disminuye el Activo (Caja) y aumenta un gasto (Alquileres), reduciendo el patrimonio neto.",
  },
  {
    descripcion: "Se rompe una máquina y se reconoce la pérdida contable.",
    tipo: "Modificativa Disminutiva",
    detalle:
      "Disminuye el Activo (Bienes de uso) y aumenta un gasto por pérdida, bajando el patrimonio neto.",
  },
  {
    descripcion: "Se otorga un préstamo a un tercero desde Caja.",
    tipo: "Permutativa",
    detalle:
      "Disminuye Caja y aumenta un Derecho (Préstamos otorgados). El patrimonio total no cambia.",
  },
  {
    descripcion: "Se cobra un interés por un préstamo otorgado.",
    tipo: "Modificativa Aumentativa",
    detalle:
      "Aumenta el Activo (Caja/Banco) y aumenta un ingreso financiero, incrementando el patrimonio neto.",
  },
  {
    descripcion: "Se reconoce una amortización del mobiliario.",
    tipo: "Modificativa Disminutiva",
    detalle:
      "Disminuye el valor del activo (Bienes de uso) y aumenta un gasto por amortización.",
  },
];

export const genContabVariacionesPatrimoniales: GeneratorFn =
  makeQuizGenerator(
    8,
    "Variaciones patrimoniales: permutativas vs modificativas",
    [
      (dificultad: Dificultad) => {
        const hechosPorDificultad: Record<Dificultad, string[]> = {
          basico: [
            "Se compra mercadería al contado.",
            "Se paga una deuda a proveedores en efectivo.",
            "Se vende mercadería al contado generando ganancia.",
            "Se paga el alquiler del local comercial.",
          ],
          intermedio: [
            "Se compra mercadería al contado.",
            "Se paga una deuda a proveedores en efectivo.",
            "Se vende mercadería al contado generando ganancia.",
            "Se paga el alquiler del local comercial.",
            "Se rompe una máquina y se reconoce la pérdida contable.",
            "Se otorga un préstamo a un tercero desde Caja.",
          ],
          avanzado: HECHOS.map((hecho) => hecho.descripcion),
        };
        const pool = HECHOS.filter((hecho) =>
          (hechosPorDificultad[dificultad] ?? []).includes(hecho.descripcion)
        );
        const hecho = pickOne(pool.length > 0 ? pool : HECHOS);
        const opciones: TipoVariacion[] = [
          "Permutativa",
          "Modificativa Aumentativa",
          "Modificativa Disminutiva",
        ];
        const indiceCorrecto = opciones.indexOf(hecho.tipo);

        return {
          enunciado:
            "Clasificá la siguiente operación según el tipo de variación patrimonial:\n\n" +
            hecho.descripcion,
          opciones,
          indiceCorrecto,
          explicacion:
            "Las operaciones permutativas cambian la composición del patrimonio pero no su valor total; las modificativas aumentan o disminuyen el patrimonio neto. " +
            hecho.detalle +
            (dificultad === "avanzado"
              ? " En niveles altos, identificá si interviene un resultado (ingreso/gasto) o solo activos y pasivos."
              : ""),
        };
      },
    ]
  );
