// src/generators/quimica/73_iones_cationes_aniones.ts
// src/generators/quimica/73_iones_cationes_aniones.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";

interface PreguntaIon {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_IONES: PreguntaIon[] = [
  {
    enunciado: "Un catión se forma cuando un átomo neutro:",
    opciones: [
      "Gana protones",
      "Pierde protones",
      "Gana electrones",
      "Pierde electrones",
    ],
    indiceCorrecto: 3,
    explicacion:
      "Al perder electrones (carga negativa), el átomo queda con carga neta positiva y se convierte en catión.",
  },
  {
    enunciado: "Un anión se caracteriza por:",
    opciones: [
      "Tener más protones que electrones",
      "Tener más electrones que protones",
      "Tener igual número de protones y electrones",
      "No tener carga",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Un anión tiene exceso de electrones respecto a protones, por lo que su carga neta es negativa.",
  },
  {
    enunciado: "¿Cuál de las siguientes especies es un catión?",
    opciones: [
      "Cl⁻",
      "Na⁺",
      "O²⁻",
      "F⁻",
    ],
    indiceCorrecto: 1,
    explicacion: "Na⁺ es un ion con carga positiva, por tanto un catión.",
  },
];

export const generarIonesCationesAniones: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_IONES.length - 1);
  const q = PREGUNTAS_IONES[index];

  return {
    idTema: 73,
    tituloTema: "Iones (cationes y aniones)",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
