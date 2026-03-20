import type { Exercise, QuizExercise, NumericExercise } from "./generico";
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

const mapQuiz = (exercise: QuizExercise): GeneratedQuestionPayload => {
  const options = exercise.opciones.map((text, index) => ({
    id: `opt_${index}`,
    text,
  }));
  const id = `quimica-${exercise.idTema}-${hashString(exercise.enunciado)}`;
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

const mapNumeric = (exercise: NumericExercise): GeneratedQuestionPayload => {
  const id = `quimica-${exercise.idTema}-${hashString(exercise.enunciado)}`;
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
      data: {
        datos: exercise.datos,
        unidades: exercise.unidades,
        toleranciaRelativa: exercise.toleranciaRelativa,
      },
      visual: exercise.visualSpec,
    },
    correction: {
      id,
      answerKey: exercise.resultado,
      explanation: exercise.pasos?.join("\n"),
      details: {
        toleranciaRelativa: exercise.toleranciaRelativa,
      },
    },
  };
};

export const adaptQuimicaExercise = (exercise: Exercise): GeneratedQuestionPayload => {
  if (exercise.tipo === "quiz") {
    return mapQuiz(exercise);
  }
  return mapNumeric(exercise);
};

export const toRenderableQuestion = (exercise: Exercise): GeneratedQuestionDTO =>
  adaptQuimicaExercise(exercise).question;

export const toCorrection = (exercise: Exercise): QuestionCorrection =>
  adaptQuimicaExercise(exercise).correction;
