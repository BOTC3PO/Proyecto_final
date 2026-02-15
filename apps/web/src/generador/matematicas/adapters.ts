import type { Exercise, QuizExercise, CompletarExercise } from "./generic";
import type {
  GeneratedQuestionDTO,
  QuestionCorrection,
  GeneratedQuestionPayload,
} from "../core/generated-question";
import { resolverEnunciadoDesdeCatalogo } from "./enunciados";

const mapQuiz = (exercise: QuizExercise): GeneratedQuestionPayload => {
  const options = exercise.opciones.map((text, index) => ({
    id: `opt_${index}`,
    text,
  }));
  return {
    question: {
      id: exercise.id,
      prompt: resolverEnunciadoDesdeCatalogo(exercise.idTema, exercise.enunciado),
      questionType: "mc",
      options,
      metadata: {
        generatorId: exercise.generatorId,
        generatorVersion: exercise.generatorVersion,
        temaId: exercise.idTema,
        temaTitulo: exercise.tituloTema,
        dificultad: exercise.dificultad,
      },
    },
    correction: {
      id: exercise.id,
      answerKey: options[exercise.indiceCorrecto]?.id ?? "",
      explanation: exercise.explicacion,
    },
  };
};

const mapCompletar = (exercise: CompletarExercise): GeneratedQuestionPayload => ({
  question: {
    id: exercise.id,
    prompt: resolverEnunciadoDesdeCatalogo(exercise.idTema, exercise.enunciado),
    questionType: "input",
    metadata: {
      generatorId: exercise.generatorId,
      generatorVersion: exercise.generatorVersion,
      temaId: exercise.idTema,
      temaTitulo: exercise.tituloTema,
      dificultad: exercise.dificultad,
    },
  },
  correction: {
    id: exercise.id,
    answerKey: exercise.respuestaCorrecta,
    explanation: exercise.explicacion,
  },
});

export const adaptMathExercise = (exercise: Exercise): GeneratedQuestionPayload => {
  if (exercise.tipo === "quiz") {
    return mapQuiz(exercise);
  }
  return mapCompletar(exercise);
};

export const toRenderableQuestion = (exercise: Exercise): GeneratedQuestionDTO =>
  adaptMathExercise(exercise).question;

export const toCorrection = (exercise: Exercise): QuestionCorrection =>
  adaptMathExercise(exercise).correction;
