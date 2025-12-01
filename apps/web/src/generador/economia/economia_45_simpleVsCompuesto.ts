// src/generators/economia/economia_45_simpleVsCompuesto.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoInteres = "Interés simple" | "Interés compuesto";

const CASOS: {
  descripcion: string;
  tipo: TipoInteres;
  explicacion: string;
}[] = [
  {
    descripcion:
      "Cada año se calcula el interés siempre sobre el mismo capital inicial, sin sumarle los intereses ganados.",
    tipo: "Interés simple",
    explicacion:
      "En el interés simple la fórmula típica es I = C × i × t y el capital no se actualiza con los intereses.",
  },
  {
    descripcion:
      "Cada período el interés se calcula sobre el capital más los intereses acumulados de períodos anteriores.",
    tipo: "Interés compuesto",
    explicacion:
      "En el interés compuesto el capital crece porque se 'capitalizan' los intereses: M = C × (1 + i)^t.",
  },
  {
    descripcion:
      "En un ejemplo escolar, se invierten $10.000 y cada año se calcula el interés siempre sobre esos $10.000.",
    tipo: "Interés simple",
    explicacion:
      "El monto sobre el que se aplica la tasa no cambia, es el capital inicial.",
  },
  {
    descripcion:
      "En un banco, los intereses se agregan al saldo y al año siguiente se calculan nuevos intereses sobre ese saldo mayor.",
    tipo: "Interés compuesto",
    explicacion:
      "Se recalcula sobre capital + intereses previos, por eso crece más rápido.",
  },
];

export const genInteresSimpleVsCompuestoConcepto: GeneratorFn =
  makeQuizGenerator(
    45,
    "Interés simple vs compuesto (concepto escolar)",
    [
      (_dificultad: Dificultad) => {
        const caso = pickOne(CASOS);
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
