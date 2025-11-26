// src/generators/economia/economia_52_liquidezConcepto_quiz.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Alta liquidez" | "Baja liquidez";

const CASOS = [
  {
    desc: "La mayor parte del dinero de la familia está en efectivo o en cuentas que se pueden usar con tarjeta de débito de inmediato.",
    tipo: "Alta liquidez" as Tipo,
  },
  {
    desc: "La familia tiene mucho dinero invertido en un plazo fijo a 1 año y casi nada en efectivo.",
    tipo: "Baja liquidez" as Tipo,
  },
  {
    desc: "La familia tiene varios bienes (auto, terreno), pero poco dinero disponible para gastos urgentes.",
    tipo: "Baja liquidez" as Tipo,
  },
  {
    desc: "La familia mantiene un fondo de emergencia en una cuenta que se puede retirar en cualquier momento.",
    tipo: "Alta liquidez" as Tipo,
  },
];

export const genQuizLiquidezConcepto: GeneratorFn = makeQuizGenerator(
  52,
  "Liquidez personal del hogar (concepto)",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
      const opciones: Tipo[] = ["Alta liquidez", "Baja liquidez"];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "Según la siguiente situación, ¿la familia tiene alta o baja liquidez?\n\n" +
          caso.desc,
        opciones,
        indiceCorrecto,
        explicacion:
          "La liquidez se refiere a qué tan rápido se puede usar el dinero. Mucho efectivo o saldos en cuenta → alta liquidez. Mucho inmovilizado en bienes o inversiones de largo plazo → baja liquidez.",
      };
    },
  ]
);
