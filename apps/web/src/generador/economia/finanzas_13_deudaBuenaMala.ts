// src/generators/economia/finanzas_13_deudaBuenaMala.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoDeuda = "Deuda buena" | "Deuda mala";

const DEUDAS_BASICO: {
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

const DEUDAS_INTERMEDIO = [
  ...DEUDAS_BASICO,
  {
    descripcion:
      "Pedir un crédito para reparar una herramienta de trabajo clave.",
    tipo: "Deuda buena",
  },
  {
    descripcion:
      "Usar la tarjeta para comprar regalos caros sin evaluar el presupuesto.",
    tipo: "Deuda mala",
  },
];

const DEUDAS_AVANZADO = [
  ...DEUDAS_INTERMEDIO,
  {
    descripcion:
      "Financiar un curso de capacitación que aumenta ingresos futuros.",
    tipo: "Deuda buena",
  },
  {
    descripcion:
      "Refinanciar un saldo con tasas altas para gastos no esenciales.",
    tipo: "Deuda mala",
  },
];

const DEUDAS_LEGENDARIO = [
  ...DEUDAS_AVANZADO,
  {
    descripcion:
      "Solicitar un préstamo para comprar una computadora necesaria para trabajar.",
    tipo: "Deuda buena",
  },
  {
    descripcion:
      "Sacar un crédito para vacaciones que no se pueden pagar al contado.",
    tipo: "Deuda mala",
  },
];

const DEUDAS_DIVINO = [
  ...DEUDAS_LEGENDARIO,
  {
    descripcion:
      "Endeudarse para invertir en un negocio con plan de ingresos realista.",
    tipo: "Deuda buena",
  },
  {
    descripcion:
      "Pedir préstamos para cubrir apuestas o juegos de azar.",
    tipo: "Deuda mala",
  },
];

const DEUDAS_POR_DIFICULTAD: Record<
  Dificultad,
  { descripcion: string; tipo: TipoDeuda }[]
> = {
  basico: DEUDAS_BASICO,
  intermedio: DEUDAS_INTERMEDIO,
  avanzado: DEUDAS_AVANZADO,
};

export const genFinanzasDeudaBuenaMala: GeneratorFn = makeQuizGenerator(
  13,
  "Deuda buena vs deuda mala",
  [
    (dificultad: Dificultad) => {
      const deuda = pickOne(DEUDAS_POR_DIFICULTAD[dificultad]);
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
