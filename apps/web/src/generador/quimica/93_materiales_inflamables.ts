// src/generators/quimica/93_materiales_inflamables.ts
// src/generators/quimica/93_materiales_inflamables.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaInflamables {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_INFLAMABLES: PreguntaInflamables[] = [
  {
    enunciado: "¿Cuál de los siguientes materiales se considera inflamable?",
    opciones: [
      "Gasolina",
      "Agua",
      "Arena",
      "Cloruro de sodio sólido",
    ],
    indiceCorrecto: 0,
    explicacion:
      "La gasolina es un líquido inflamable que puede arder con facilidad.",
  },
  {
    enunciado:
      "Una sustancia inflamable se caracteriza por:",
    opciones: [
      "No reaccionar con el oxígeno",
      "Encenderse únicamente a temperaturas extremadamente altas",
      "Poseer un punto de inflamación relativamente bajo",
      "Ser siempre sólida",
    ],
    indiceCorrecto: 2,
    explicacion:
      "Cuanto más bajo es el punto de inflamación, más fácil es que el material se encienda.",
  },
];

export const generarMaterialesInflamables: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_INFLAMABLES.length);
  const q = PREGUNTAS_INFLAMABLES[index];

  return {
    idTema: 93,
    tituloTema: "Materiales inflamables",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
