// src/generators/economia/economia_44_gastosFijosVariables.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoGasto = "Gasto fijo" | "Gasto variable";

const GASTOS: {
  descripcion: string;
  tipo: TipoGasto;
  detalle: string;
}[] = [
  {
    descripcion: "Alquiler mensual del local comercial.",
    tipo: "Gasto fijo",
    detalle:
      "Se mantiene relativamente constante mes a mes, sin depender directamente de cuánto se vende.",
  },
  {
    descripcion: "Factura mensual de internet con un abono fijo.",
    tipo: "Gasto fijo",
    detalle:
      "Se paga un monto similar todos los meses, sin variar mucho con el nivel de producción.",
  },
  {
    descripcion: "Compra de materia prima para producir más unidades.",
    tipo: "Gasto variable",
    detalle:
      "Aumenta o disminuye según la cantidad producida o vendida.",
  },
  {
    descripcion: "Pago de comisiones a vendedores por cada venta realizada.",
    tipo: "Gasto variable",
    detalle:
      "Depende directamente del volumen de ventas.",
  },
  {
    descripcion: "Consumo de energía eléctrica de máquinas que se usan según cantidad producida.",
    tipo: "Gasto variable",
    detalle:
      "Si se produce más, se gasta más energía; si se produce menos, baja.",
  },
];

export const genGastosFijosVariables: GeneratorFn = makeQuizGenerator(
  44,
  "Gastos fijos vs variables (conceptual)",
  [
    (_dificultad: Dificultad) => {
      const gasto = pickOne(GASTOS);
      const opciones: TipoGasto[] = ["Gasto fijo", "Gasto variable"];
      const indiceCorrecto = opciones.indexOf(gasto.tipo);

      return {
        enunciado:
          "Clasificá el siguiente gasto de la empresa como fijo o variable:\n\n" +
          gasto.descripcion,
        opciones,
        indiceCorrecto,
        explicacion: gasto.detalle,
      };
    },
  ]
);
