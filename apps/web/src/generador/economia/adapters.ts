import type { Exercise, QuizExercise } from "./generico";
import type {
  GeneratedQuestionDTO,
  QuestionCorrection,
  GeneratedQuestionPayload,
} from "../core/generated-question";

const hashString = (value: string): string => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
};

const asRecord = (value: object): Record<string, unknown> =>
  value as Record<string, unknown>;

const mapQuiz = (exercise: QuizExercise): GeneratedQuestionPayload => {
  const options = exercise.opciones.map((text, index) => ({
    id: `opt_${index}`,
    text,
  }));
  const id = `economia-${exercise.idTema}-${hashString(exercise.enunciado)}`;
  return {
    question: {
      id,
      prompt: exercise.enunciado,
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
      id,
      answerKey: options[exercise.indiceCorrecto]?.id ?? "",
      explanation: exercise.explicacion,
    },
  };
};

export const adaptEconomiaExercise = (exercise: Exercise): GeneratedQuestionPayload => {
  if (exercise.tipo === "quiz") {
    return mapQuiz(exercise);
  }
  const id = `economia-${exercise.idTema}-${hashString(exercise.enunciado)}`;
  return {
    question: {
      id,
      prompt: exercise.enunciado,
      questionType: "input",
      metadata: {
        generatorId: exercise.generatorId,
        generatorVersion: exercise.generatorVersion,
        temaId: exercise.idTema,
        temaTitulo: exercise.tituloTema,
        dificultad: exercise.dificultad,
      },
      data: asRecord(exercise),
    },
    correction: {
      id,
      answerKey: "",
    },
  };
};

export const toRenderableQuestion = (exercise: Exercise): GeneratedQuestionDTO =>
  adaptEconomiaExercise(exercise).question;

export const toCorrection = (exercise: Exercise): QuestionCorrection =>
  adaptEconomiaExercise(exercise).correction;
