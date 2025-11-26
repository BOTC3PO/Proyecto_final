// src/generators/economia/finanzas_13_deudaBuenaMala.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoDeuda = "Deuda buena" | "Deuda mala";

const DEUDAS: {
  descripcion: string;
  tipo: TipoDeuda;
}[] = [
  {
    descripcion:
      "Sacar un crédito para estudiar una carrera que aumentará tus posibilidades de ingreso.",
    tipo: "Deuda buena",
  },
  {
    descripcion:
      "Pedir un préstamo para comprar herramientas que permitirán generar más trabajo o ingresos.",
    tipo: "Deuda buena",
  },
  {
    descripcion:
      "Financiar un electrodoméstico necesario (ej. heladera) en cuotas razonables y dentro del presupuesto.",
    tipo: "Deuda buena",
  },
  {
    descripcion:
      "Pagar con tarjeta de crédito salidas frecuentes a comer afuera y dejar el saldo financiado al mes siguiente.",
    tipo: "Deuda mala",
  },
  {
    descripcion:
      "Endeudarse para comprar ropa de marca y objetos de lujo que no son necesarios.",
    tipo: "Deuda mala",
  },
  {
    descripcion:
      "Sacar préstamos pequeños repetidos para cubrir gastos superfluos sin plan de pago.",
    tipo: "Deuda mala",
  },
];

export const genFinanzasDeudaBuenaMala: GeneratorFn = makeQuizGenerator(
  13,
  "Deuda buena vs deuda mala",
  [
    (_dificultad: Dificultad) => {
      const deuda = pickOne(DEUDAS);
      const opciones: TipoDeuda[] = ["Deuda buena", "Deuda mala"];
      const indiceCorrecto = opciones.indexOf(deuda.tipo);

      return {
        enunciado:
          "Clasificá la siguiente situación de endeudamiento:\n\n" +
          deuda.descripcion,
        opciones,
        indiceCorrecto,
        explicacion:
          "En términos escolares, se llama 'deuda buena' a aquella que ayuda a mejorar la capacidad futura de generar ingresos o cubrir necesidades importantes. La 'deuda mala' se usa para consumos innecesarios o impulsivos que no generan beneficio a futuro.",
      };
    },
  ]
);
