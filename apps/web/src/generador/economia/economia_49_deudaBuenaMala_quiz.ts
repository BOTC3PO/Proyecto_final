// src/generators/economia/economia_49_deudaBuenaMala_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Deuda buena" | "Deuda mala";

const CASOS = [
  {
    desc: "Pedir un crédito para estudiar una carrera que aumentará las posibilidades de conseguir mejor trabajo.",
    tipo: "Deuda buena" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Sacar un préstamo para comprar herramientas necesarias para trabajar y generar más ingresos.",
    tipo: "Deuda buena" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Endeudarse para comprar ropa de marca y salidas frecuentes sin un plan de pago.",
    tipo: "Deuda mala" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Usar la tarjeta de crédito para gastos innecesarios y financiar el saldo con interés alto.",
    tipo: "Deuda mala" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Pedir un préstamo para ampliar un local y aumentar la capacidad de producción.",
    tipo: "Deuda buena" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "Financiar vacaciones con cuotas largas y sin ahorro previo.",
    tipo: "Deuda mala" as Tipo,
    dificultadMinima: "Legendario" as Dificultad,
  },
  {
    desc: "Solicitar crédito para reparar maquinaria esencial para continuar trabajando.",
    tipo: "Deuda buena" as Tipo,
    dificultadMinima: "Divino" as Dificultad,
  },
];

export const genQuizDeudaBuenaMala: GeneratorFn = makeQuizGenerator(
  49,
  "Deuda buena vs deuda mala (quiz)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
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
