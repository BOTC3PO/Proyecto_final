// src/generators/economia/economia_54_cftMayorInteres_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

export const genQuizCFTMayorInteres: GeneratorFn = makeQuizGenerator(
  54,
  "Relación CFT vs interés (V/F)",
  [
    (dificultad: Dificultad) => {
      const CASOS = [
        {
          enunciado:
            "En un crédito, el Costo Financiero Total (CFT) incluye la tasa de interés y otros gastos (comisiones, impuestos, seguros), por lo que siempre es mayor o igual que la tasa de interés sola.",
          indiceCorrecto: 0,
          explicacion:
            "A nivel escolar, se enseña que el CFT es el costo 'real' del crédito porque suma interés + todos los cargos adicionales. Por eso se toma CFT ≥ interés.",
          dificultadMinima: "basico" as Dificultad,
        },
        {
          enunciado:
            "Si no hay comisiones ni impuestos adicionales, el CFT puede coincidir con la tasa de interés.",
          indiceCorrecto: 0,
          explicacion:
            "Al no existir cargos extra, el costo total puede igualar la tasa aplicada.",
          dificultadMinima: "intermedio" as Dificultad,
        },
        {
          enunciado:
            "El CFT solo muestra la tasa de interés nominal, sin incluir cargos.",
          indiceCorrecto: 1,
          explicacion:
            "El CFT incluye gastos e impuestos además de la tasa nominal, por eso es falso.",
          dificultadMinima: "avanzado" as Dificultad,
        },
        {
          enunciado:
            "Dos créditos con igual tasa nominal pueden tener CFT distintos por comisiones.",
          indiceCorrecto: 0,
          explicacion:
            "Los costos adicionales influyen en el CFT final.",
          dificultadMinima: "Legendario" as Dificultad,
        },
        {
          enunciado:
            "El CFT refleja el costo total del crédito porque suma interés, seguros e impuestos.",
          indiceCorrecto: 0,
          explicacion:
            "El CFT integra todos los cargos asociados al préstamo.",
          dificultadMinima: "Divino" as Dificultad,
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
