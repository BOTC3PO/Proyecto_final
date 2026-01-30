// src/generators/quimica/82_sustancia_pura_vs_mezcla.ts
// src/generators/quimica/82_sustancia_pura_vs_mezcla.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";

interface PreguntaSustanciaMezcla {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_SUSTANCIA_MEZCLA: PreguntaSustanciaMezcla[] = [
  {
    enunciado: "¿Cuál de los siguientes es un ejemplo de sustancia pura?",
    opciones: [
      "Agua destilada (H₂O)",
      "Agua de mar",
      "Aire",
      "Acero",
    ],
    indiceCorrecto: 0,
    explicacion:
      "El agua destilada tiene composición definida (H₂O). El agua de mar, el aire y el acero son mezclas.",
  },
  {
    enunciado: "¿Cuál de las siguientes afirmaciones describe mejor una mezcla?",
    opciones: [
      "Tiene composición fija y constante.",
      "Está formada por un solo tipo de partícula.",
      "Sus componentes pueden separarse por métodos físicos.",
      "Siempre está en estado líquido.",
    ],
    indiceCorrecto: 2,
    explicacion:
      "En una mezcla los componentes conservan sus propiedades y pueden separarse mediante procesos físicos.",
  },
  {
    enunciado: "Una sustancia pura puede ser:",
    opciones: [
      "Solo un elemento",
      "Solo un compuesto",
      "Elemento o compuesto",
      "Siempre una mezcla homogénea",
    ],
    indiceCorrecto: 2,
    explicacion:
      "Una sustancia pura puede ser un elemento (O₂, Cu) o un compuesto (H₂O, NaCl), pero no una mezcla.",
  },
];

export const generarSustanciaPuraVsMezcla: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_SUSTANCIA_MEZCLA.length - 1);
  const q = PREGUNTAS_SUSTANCIA_MEZCLA[index];

  return {
    idTema: 82,
    tituloTema: "Sustancia pura vs mezcla",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
