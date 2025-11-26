// src/generators/economia/economia_53_interesSimpleCompuesto_quiz.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Interés simple" | "Interés compuesto";

const CASOS = [
  {
    desc: "Cada año el interés se calcula siempre sobre el mismo capital inicial.",
    tipo: "Interés simple" as Tipo,
  },
  {
    desc: "Cada año el interés se calcula sobre el capital más los intereses acumulados.",
    tipo: "Interés compuesto" as Tipo,
  },
  {
    desc: "En un ejemplo escolar, se invierten $10.000 y se usa I = C × i × t para hallar el interés total.",
    tipo: "Interés simple" as Tipo,
  },
  {
    desc: "El banco 'capitaliza' los intereses: al final de cada año los suma al saldo y el año siguiente calcula intereses sobre ese saldo mayor.",
    tipo: "Interés compuesto" as Tipo,
  },
];

export const genQuizInteresSimpleCompuesto: GeneratorFn = makeQuizGenerator(
  53,
  "Interés simple vs compuesto (quiz conceptual)",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
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
