// src/generators/economia/economia_53_interesSimpleCompuesto_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Interés simple" | "Interés compuesto";

const CASOS = [
  {
    desc: "Cada año el interés se calcula siempre sobre el mismo capital inicial.",
    tipo: "Interés simple" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Cada año el interés se calcula sobre el capital más los intereses acumulados.",
    tipo: "Interés compuesto" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "En un ejemplo escolar, se invierten $10.000 y se usa I = C × i × t para hallar el interés total.",
    tipo: "Interés simple" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "El banco 'capitaliza' los intereses: al final de cada año los suma al saldo y el año siguiente calcula intereses sobre ese saldo mayor.",
    tipo: "Interés compuesto" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Los intereses se suman al capital cada semestre y forman parte de la base del cálculo siguiente.",
    tipo: "Interés compuesto" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "Un préstamo calcula interés lineal sobre el capital original durante todo el período.",
    tipo: "Interés simple" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "El interés de cada período se calcula sobre un saldo que ya incluye intereses anteriores.",
    tipo: "Interés compuesto" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
];

export const genQuizInteresSimpleCompuesto: GeneratorFn = makeQuizGenerator(
  53,
  "Interés simple vs compuesto (quiz conceptual)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
      const opciones: Tipo[] = ["Interés simple", "Interés compuesto"];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "Indicá si la siguiente descripción corresponde a interés simple o compuesto:\n\n" +
          caso.desc,
        opciones,
        indiceCorrecto,
        explicacion:
          "Interés simple: siempre sobre el capital inicial (I = C × i × t). Interés compuesto: se calcula sobre capital + intereses acumulados (M = C × (1 + i)^t).",
      };
    },
  ]
);
