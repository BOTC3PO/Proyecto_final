// src/generators/economia/economia_46_cftMayorInteres.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

export const genCFTMayorInteres: GeneratorFn = makeQuizGenerator(
  46,
  "Relación entre CFT e interés",
  [
    (dificultad: Dificultad) => {
      const CASOS = [
        {
          enunciado:
            "En un crédito, el Costo Financiero Total (CFT) siempre es mayor o igual que la tasa de interés sola, porque incluye comisiones, impuestos y otros gastos.",
          indiceCorrecto: 0,
          explicacion:
            "El CFT incluye la tasa de interés más todos los costos adicionales (comisiones, seguros, impuestos, etc.). " +
            "Por eso, en la práctica escolar, se toma siempre CFT ≥ interés solo.",
          dificultadMinima: "basico" as Dificultad,
        },
        {
          enunciado:
            "Si dos créditos tienen la misma tasa de interés nominal, el CFT puede ser distinto por seguros o comisiones.",
          indiceCorrecto: 0,
          explicacion:
            "El CFT suma costos extra, por lo que puede variar aunque la tasa sea igual.",
          dificultadMinima: "intermedio" as Dificultad,
        },
        {
          enunciado:
            "Un crédito sin comisiones ni impuestos puede tener un CFT igual a la tasa de interés.",
          indiceCorrecto: 0,
          explicacion:
            "Si no hay costos adicionales, el CFT coincide con la tasa de interés aplicada.",
          dificultadMinima: "avanzado" as Dificultad,
        },
        {
          enunciado:
            "El CFT solo considera la tasa de interés, por lo que siempre es igual a ella.",
          indiceCorrecto: 1,
          explicacion:
            "Es falso: el CFT incluye comisiones, impuestos, seguros y otros cargos.",
          dificultadMinima: "avanzado" as Dificultad,
        },
        {
          enunciado:
            "Cuando hay costos adicionales, el CFT supera la tasa de interés porque suma todos los gastos del crédito.",
          indiceCorrecto: 0,
          explicacion:
            "El CFT agrega costos extra, por eso suele ser mayor que la tasa.",
          dificultadMinima: "avanzado" as Dificultad,
        },
      ];

      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
      const opciones = ["Verdadero", "Falso"];

      return {
        enunciado: caso.enunciado,
        opciones,
        indiceCorrecto: caso.indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
