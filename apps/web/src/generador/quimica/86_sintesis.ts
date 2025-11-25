// src/generators/quimica/86_sintesis.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaSintesis {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_SINTESIS: PreguntaSintesis[] = [
  {
    enunciado: "¿Cuál de las siguientes ecuaciones representa una reacción de síntesis?",
    opciones: [
      "2 H₂(g) + O₂(g) → 2 H₂O(l)",
      "2 H₂O(l) → 2 H₂(g) + O₂(g)",
      "AB(aq) + CD(aq) → AD(aq) + CB(s)",
      "C₃H₈(g) + 5 O₂(g) → 3 CO₂(g) + 4 H₂O(g)",
    ],
    indiceCorrecto: 0,
    explicacion:
      "En una reacción de síntesis dos o más sustancias simples se combinan para formar un compuesto.",
  },
  {
    enunciado: "En una reacción de síntesis típicamente:",
    opciones: [
      "Un reactivo se descompone en varios productos.",
      "Dos o más reactivos se combinan en un solo producto.",
      "Un elemento reemplaza a otro en un compuesto.",
      "Dos soluciones acuosas intercambian iones.",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La característica de la síntesis es que varios reactivos se unen para formar un producto más complejo.",
  },
];

export const generarReaccionSintesis: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_SINTESIS.length);
  const q = PREGUNTAS_SINTESIS[index];

  return {
    idTema: 86,
    tituloTema: "Reacciones de síntesis",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
