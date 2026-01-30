import type { QuizInstance, QuizTemplate, MCQuestion, TFQuestion, MatchQuestion } from "./types";
import type {
  GeneratedQuestionDTO,
  QuestionCorrection,
  GeneratedQuestionPayload,
} from "../core/generated-question";

export interface BasicQuestionBank {
  seed: string;
  metadata: QuizInstance["metadata"];
  generatorId?: string;
  generatorVersion?: number;
  questions: GeneratedQuestionDTO[];
  correction: QuestionCorrection[];
}

export const adaptBasicQuizInstance = (
  instance: QuizInstance,
  template: QuizTemplate
): BasicQuestionBank => {
  const questions: GeneratedQuestionDTO[] = instance.questions.map((question) => {
    if (question.type === "mc") {
      return {
        id: question.id,
        prompt: question.prompt,
        questionType: "mc",
        options: question.options?.map((option) => ({
          id: option.optionId,
          text: option.text,
        })),
        metadata: {
          generatorId: instance.generatorId,
          generatorVersion: instance.generatorVersion,
        },
      };
    }

    if (question.type === "tf") {
      return {
        id: question.id,
        prompt: question.prompt,
        questionType: "vf",
        options: [
          { id: "true", text: "Verdadero" },
          { id: "false", text: "Falso" },
        ],
        metadata: {
          generatorId: instance.generatorId,
          generatorVersion: instance.generatorVersion,
        },
      };
    }

    return {
      id: question.id,
      prompt: question.prompt,
      questionType: "match",
      leftItems: question.leftItems?.map((item) => ({ id: item.itemId, text: item.text })),
      rightItems: question.rightItems?.map((item) => ({ id: item.itemId, text: item.text })),
      metadata: {
        generatorId: instance.generatorId,
        generatorVersion: instance.generatorVersion,
      },
    };
  });

  return {
    seed: instance.seed,
    metadata: instance.metadata,
    generatorId: instance.generatorId,
    generatorVersion: instance.generatorVersion,
    questions,
    correction: buildBasicCorrections(instance, template),
  };
};

export const toRenderableQuestion = (
  question: GeneratedQuestionDTO
): GeneratedQuestionPayload => ({
  question,
  correction: {
    id: question.id,
    answerKey: "",
  },
});

const buildBasicCorrections = (
  instance: QuizInstance,
  template: QuizTemplate
): QuestionCorrection[] =>
  instance.questions.map((question) => {
    const base = template.pool.find((item) => item.id === question.id);
    if (!base) {
      return { id: question.id, answerKey: "" };
    }

    if (base.type === "mc") {
      const mcBase = base as MCQuestion;
      const correctOption = mcBase.options.find((option) => option.correct);
      const answerOption = question.options?.find((option) => option.text === correctOption?.text);
      return {
        id: question.id,
        answerKey: answerOption?.optionId ?? "",
        explanation: mcBase.explanation,
      };
    }

    if (base.type === "tf") {
      const tfBase = base as TFQuestion;
      return {
        id: question.id,
        answerKey: tfBase.answer ? "true" : "false",
        explanation: tfBase.answer ? tfBase.becauseTrue : tfBase.becauseFalse,
      };
    }

    const matchBase = base as MatchQuestion;
    const answerKey: Record<string, string> = {};

    matchBase.pairs.forEach((pair) => {
      const leftItem = question.leftItems?.find((item) => item.text === pair.left);
      const rightItem = question.rightItems?.find((item) => item.text === pair.right);
      if (leftItem && rightItem) {
        answerKey[leftItem.itemId] = rightItem.itemId;
      }
    });

    return {
      id: question.id,
      answerKey,
      explanation: matchBase.explanation,
    };
  });
