// src/generators/economia/economia_44_gastosFijosVariables.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoGasto = "Gasto fijo" | "Gasto variable";

const GASTOS: {
  descripcion: string;
  tipo: TipoGasto;
  detalle: string;
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion: "Alquiler mensual del local comercial.",
    tipo: "Gasto fijo",
    detalle:
      "Se mantiene relativamente constante mes a mes, sin depender directamente de cuánto se vende.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Factura mensual de internet con un abono fijo.",
    tipo: "Gasto fijo",
    detalle:
      "Se paga un monto similar todos los meses, sin variar mucho con el nivel de producción.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Compra de materia prima para producir más unidades.",
    tipo: "Gasto variable",
    detalle:
      "Aumenta o disminuye según la cantidad producida o vendida.",
    dificultadMinima: "basico",
  },
  {
    descripcion: "Pago de comisiones a vendedores por cada venta realizada.",
    tipo: "Gasto variable",
    detalle:
      "Depende directamente del volumen de ventas.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Consumo de energía eléctrica de máquinas que se usan según cantidad producida.",
    tipo: "Gasto variable",
    detalle:
      "Si se produce más, se gasta más energía; si se produce menos, baja.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion: "Pago mensual por licencia de software empresarial.",
    tipo: "Gasto fijo",
    detalle:
      "Es un costo periódico que no depende del nivel de producción.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Gastos de transporte por cada unidad enviada a clientes.",
    tipo: "Gasto variable",
    detalle:
      "El costo aumenta cuando se envían más unidades.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion: "Mantenimiento programado de las instalaciones pagado mensualmente.",
    tipo: "Gasto fijo",
    detalle:
      "Se paga en forma regular aunque cambie la cantidad producida.",
    dificultadMinima: "avanzado",
  },
];

export const genGastosFijosVariables: GeneratorFn = makeQuizGenerator(
  44,
  "Gastos fijos vs variables (conceptual)",
  [
    (dificultad: Dificultad) => {
      const gastosDisponibles = GASTOS.filter((gasto) =>
        esDificultadMinima(dificultad, gasto.dificultadMinima)
      );
      const gasto = pickOne(gastosDisponibles);
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
