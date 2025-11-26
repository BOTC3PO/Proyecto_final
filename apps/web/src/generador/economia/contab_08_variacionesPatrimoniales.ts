// src/generators/economia/contab_08_variacionesPatrimoniales.ts

import {
  Dificultad,
  GeneratorFn,
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
];

export const genContabVariacionesPatrimoniales: GeneratorFn =
  makeQuizGenerator(
    8,
    "Variaciones patrimoniales: permutativas vs modificativas",
    [
      (_dificultad: Dificultad) => {
        const hecho = pickOne(HECHOS);
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
            hecho.detalle,
        };
      },
    ]
  );
