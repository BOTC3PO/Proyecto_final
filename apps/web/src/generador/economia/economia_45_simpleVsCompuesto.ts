// src/generators/economia/economia_45_simpleVsCompuesto.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoInteres = "Interés simple" | "Interés compuesto";

const CASOS: {
  descripcion: string;
  tipo: TipoInteres;
  explicacion: string;
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion:
      "Cada año se calcula el interés siempre sobre el mismo capital inicial, sin sumarle los intereses ganados.",
    tipo: "Interés simple",
    explicacion:
      "En el interés simple la fórmula típica es I = C × i × t y el capital no se actualiza con los intereses.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "Cada período el interés se calcula sobre el capital más los intereses acumulados de períodos anteriores.",
    tipo: "Interés compuesto",
    explicacion:
      "En el interés compuesto el capital crece porque se 'capitalizan' los intereses: M = C × (1 + i)^t.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "En un ejemplo escolar, se invierten $10.000 y cada año se calcula el interés siempre sobre esos $10.000.",
    tipo: "Interés simple",
    explicacion:
      "El monto sobre el que se aplica la tasa no cambia, es el capital inicial.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "En un banco, los intereses se agregan al saldo y al año siguiente se calculan nuevos intereses sobre ese saldo mayor.",
    tipo: "Interés compuesto",
    explicacion:
      "Se recalcula sobre capital + intereses previos, por eso crece más rápido.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "Una inversión capitaliza intereses trimestralmente, por lo que cada trimestre el capital base crece.",
    tipo: "Interés compuesto",
    explicacion:
      "La capitalización periódica genera intereses sobre intereses.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "Un préstamo aplica interés calculado solo sobre el capital original, sin capitalización durante todo el plazo.",
    tipo: "Interés simple",
    explicacion:
      "El interés se mantiene lineal porque la base de cálculo no cambia.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "El contrato indica que los intereses se suman al capital al cierre de cada período y pasan a formar parte del nuevo capital.",
    tipo: "Interés compuesto",
    explicacion:
      "Al agregarse al capital, los intereses futuros se calculan sobre un saldo mayor.",
    dificultadMinima: "avanzado",
  },
];

export const genInteresSimpleVsCompuestoConcepto: GeneratorFn =
  makeQuizGenerator(
    45,
    "Interés simple vs compuesto (concepto escolar)",
    [
      (dificultad: Dificultad) => {
        const casosDisponibles = CASOS.filter((caso) =>
          esDificultadMinima(dificultad, caso.dificultadMinima)
        );
        const caso = pickOne(casosDisponibles);
        const opciones: TipoInteres[] = [
          "Interés simple",
          "Interés compuesto",
        ];
        const indiceCorrecto = opciones.indexOf(caso.tipo);

        return {
          enunciado:
            "Indicá si la descripción corresponde a interés simple o compuesto:\n\n" +
            caso.descripcion,
          opciones,
          indiceCorrecto,
          explicacion: caso.explicacion,
        };
      },
    ]
  );
