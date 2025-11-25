// src/generators/quimica/90_neutralizacion.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaNeutralizacion {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_NEUTRALIZACION: PreguntaNeutralizacion[] = [
  {
    enunciado: "¿Cuál de las siguientes ecuaciones describe una reacción de neutralización ácido–base?",
    opciones: [
      "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
      "2 H₂O(l) → 2 H₂(g) + O₂(g)",
      "CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g)",
      "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
    ],
    indiceCorrecto: 0,
    explicacion:
      "Un ácido reacciona con una base para formar una sal y agua.",
  },
  {
    enunciado: "En una neutralización ácido–base fuerte típica:",
    opciones: [
      "El pH final siempre es 1",
      "El pH final siempre es 14",
      "Se forma principalmente una sal y agua",
      "Se forma únicamente hidrógeno molecular",
    ],
    indiceCorrecto: 2,
    explicacion:
      "La reacción general es: ácido + base → sal + agua.",
  },
];

export const generarNeutralizacionAcidoBase: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_NEUTRALIZACION.length);
  const q = PREGUNTAS_NEUTRALIZACION[index];

  return {
    idTema: 90,
    tituloTema: "Neutralización ácido–base",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
