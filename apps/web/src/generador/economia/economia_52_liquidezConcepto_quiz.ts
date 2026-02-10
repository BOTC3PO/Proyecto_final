// src/generators/economia/economia_52_liquidezConcepto_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Alta liquidez" | "Baja liquidez";

const CASOS = [
  {
    desc: "La mayor parte del dinero de la familia está en efectivo o en cuentas que se pueden usar con tarjeta de débito de inmediato.",
    tipo: "Alta liquidez" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "La familia tiene mucho dinero invertido en un plazo fijo a 1 año y casi nada en efectivo.",
    tipo: "Baja liquidez" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "La familia tiene varios bienes (auto, terreno), pero poco dinero disponible para gastos urgentes.",
    tipo: "Baja liquidez" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "La familia mantiene un fondo de emergencia en una cuenta que se puede retirar en cualquier momento.",
    tipo: "Alta liquidez" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "La mayor parte del ahorro está en bonos a largo plazo con penalidad por rescate anticipado.",
    tipo: "Baja liquidez" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "La familia mantiene dinero en una cuenta remunerada que permite retirar en 24 horas.",
    tipo: "Alta liquidez" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "Los ahorros están concentrados en un inmueble que no puede venderse rápidamente.",
    tipo: "Baja liquidez" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
];

export const genQuizLiquidezConcepto: GeneratorFn = makeQuizGenerator(
  52,
  "Liquidez personal del hogar (concepto)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
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
