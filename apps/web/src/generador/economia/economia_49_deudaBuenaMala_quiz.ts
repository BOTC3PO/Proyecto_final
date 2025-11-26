// src/generators/economia/economia_49_deudaBuenaMala_quiz.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Deuda buena" | "Deuda mala";

const CASOS = [
  {
    desc: "Pedir un crédito para estudiar una carrera que aumentará las posibilidades de conseguir mejor trabajo.",
    tipo: "Deuda buena" as Tipo,
  },
  {
    desc: "Sacar un préstamo para comprar herramientas necesarias para trabajar y generar más ingresos.",
    tipo: "Deuda buena" as Tipo,
  },
  {
    desc: "Endeudarse para comprar ropa de marca y salidas frecuentes sin un plan de pago.",
    tipo: "Deuda mala" as Tipo,
  },
  {
    desc: "Usar la tarjeta de crédito para gastos innecesarios y financiar el saldo con interés alto.",
    tipo: "Deuda mala" as Tipo,
  },
];

export const genQuizDeudaBuenaMala: GeneratorFn = makeQuizGenerator(
  49,
  "Deuda buena vs deuda mala (quiz)",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
      const opciones: Tipo[] = ["Deuda buena", "Deuda mala"];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "Clasificá la siguiente situación de endeudamiento:\n\n" + caso.desc,
        opciones,
        indiceCorrecto,
        explicacion:
          "En nivel escolar, se considera 'deuda buena' a la que ayuda a mejorar la capacidad futura de ingreso o cubrir necesidades importantes. La 'deuda mala' financia consumos innecesarios o impulsivos.",
      };
    },
  ]
);
