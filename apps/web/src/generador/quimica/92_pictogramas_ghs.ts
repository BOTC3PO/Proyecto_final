// src/generators/quimica/92_pictogramas_ghs.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaGHS {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_GHS: PreguntaGHS[] = [
  {
    enunciado:
      "El pictograma de una llama (rombo rojo con símbolo de fuego) indica principalmente:",
    opciones: [
      "Gas a presión",
      "Sustancia inflamable",
      "Corrosivo",
      "Peligro para el medio ambiente acuático",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La llama indica sustancias inflamables o que pueden arder fácilmente.",
  },
  {
    enunciado:
      "El pictograma con calavera y tibias cruzadas (rombo rojo) indica:",
    opciones: [
      "Gas comprimido",
      "Tóxico agudo (puede ser mortal a bajas dosis)",
      "Peligro para la salud a largo plazo",
      "Explosivo",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Este pictograma se asocia a toxicidad aguda severa.",
  },
  {
    enunciado:
      "El pictograma de una probeta derramando líquido sobre una mano y un metal indica:",
    opciones: [
      "Corrosivo",
      "Inflamable",
      "Oxidante",
      "Explosivo",
    ],
    indiceCorrecto: 0,
    explicacion:
      "Representa sustancias corrosivas que pueden dañar tejidos y materiales.",
  },
];

export const generarPictogramasGHS: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_GHS.length);
  const q = PREGUNTAS_GHS[index];

  return {
    idTema: 92,
    tituloTema: "Pictogramas GHS",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
