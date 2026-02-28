// quiz-generator.ts
import type {
  QuizTemplate,
  QuizInstance,
  SelectionConfig,
  Question,
  GeneratedQuestion,
  MCQuestion,
  TFQuestion,
  MatchQuestion,
  QuizAnswers,
} from "./types";
import type { MapSelectQuestion } from "./mapTypes";

import { createPrng, type PRNG } from "../core/prng";
import {
  parseBasicCorrectionOptions,
  parseBasicGenerateOptions,
  parseBasicRecreateOptions,
} from "./schemas";

// ── Handler types ───────────────────────────────────────────────────────────────

type GenerateHandler = (
  q: Question,
  rng: PRNG,
  shuffleOptions: boolean
) => GeneratedQuestion;

type ValidateHandler = (
  originalQ: Question,
  genQ: GeneratedQuestion,
  userAnswer: unknown
) => { correct: boolean; explanation?: string };

type QuestionHandlers = { generate: GenerateHandler; validate: ValidateHandler };

// ── Handler registry ── to add a new question type, only touch this object ──────

const HANDLERS: Record<string, QuestionHandlers> = {
  mc: {
    generate(q, rng, shuffleOptions) {
      const mcQ = q as MCQuestion;
      const options = shuffleOptions ? rng.shuffle(mcQ.options) : [...mcQ.options];
      return {
        id: mcQ.id,
        type: "mc",
        prompt: mcQ.prompt,
        options: options.map((opt, idx) => ({ optionId: `opt_${idx}`, text: opt.text })),
        ...(mcQ.map ? { map: mcQ.map } : {}),
      };
    },
    validate(originalQ, genQ, userAnswer) {
      const mcQ = originalQ as MCQuestion;
      const selectedOption = genQ.options?.find((o) => o.optionId === userAnswer);
      if (!selectedOption) return { correct: false, explanation: mcQ.explanation };
      const originalOption = mcQ.options.find((o) => o.text === selectedOption.text);
      return { correct: originalOption?.correct ?? false, explanation: mcQ.explanation };
    },
  },

  tf: {
    generate(q, _rng, _shuffleOptions) {
      const tfQ = q as TFQuestion;
      return {
        id: tfQ.id,
        type: "tf",
        prompt: tfQ.prompt,
        ...(tfQ.map ? { map: tfQ.map } : {}),
      };
    },
    validate(originalQ, _genQ, userAnswer) {
      const tfQ = originalQ as TFQuestion;
      const answer = userAnswer as boolean | undefined;
      return {
        correct: answer === tfQ.answer,
        explanation: answer ? tfQ.becauseTrue : tfQ.becauseFalse,
      };
    },
  },

  match: {
    generate(q, rng, shuffleOptions) {
      const matchQ = q as MatchQuestion;
      const leftItems = matchQ.pairs.map((p, idx) => ({ itemId: `left_${idx}`, text: p.left }));
      const rightRaw = matchQ.pairs.map((p, idx) => ({ itemId: `right_${idx}`, text: p.right }));
      const rightItems = shuffleOptions ? rng.shuffle(rightRaw) : rightRaw;
      return {
        id: matchQ.id,
        type: "match",
        prompt: matchQ.prompt,
        leftItems,
        rightItems,
        ...(matchQ.map ? { map: matchQ.map } : {}),
      };
    },
    validate(originalQ, genQ, userAnswer) {
      const matchQ = originalQ as MatchQuestion;
      const answeredPairs = Object.entries(
        (userAnswer ?? {}) as Record<string, string>
      ) as [string, string][];

      // Bug fix: partially answered or missing answer is always wrong
      if (answeredPairs.length !== matchQ.pairs.length) {
        return { correct: false, explanation: matchQ.explanation };
      }

      for (const [leftId, rightId] of answeredPairs) {
        const leftItem = genQ.leftItems?.find((i) => i.itemId === leftId);
        const rightItem = genQ.rightItems?.find((i) => i.itemId === rightId);
        if (!leftItem || !rightItem) return { correct: false, explanation: matchQ.explanation };
        const correctPair = matchQ.pairs.find((p) => p.left === leftItem.text);
        if (correctPair?.right !== rightItem.text)
          return { correct: false, explanation: matchQ.explanation };
      }

      return { correct: true, explanation: matchQ.explanation };
    },
  },

  "map-select": {
    generate(q, rng, shuffleOptions) {
      const msQ = q as MapSelectQuestion;
      const shuffledOptions =
        shuffleOptions && msQ.selectOptions ? rng.shuffle(msQ.selectOptions) : msQ.selectOptions;
      return {
        id: msQ.id,
        type: "map-select",
        prompt: msQ.prompt,
        map: msQ.map,
        selectKind: msQ.selectKind,
        ...(shuffledOptions ? { selectOptions: shuffledOptions } : {}),
      };
    },
    validate(originalQ, _genQ, userAnswer) {
      const msQ = originalQ as MapSelectQuestion;
      const isCorrect =
        typeof userAnswer === "string" &&
        Array.isArray(msQ.correctIds) &&
        msQ.correctIds.includes(userAnswer);
      return { correct: isCorrect, explanation: msQ.explanation };
    },
  },
};

// ── QuizGenerator ───────────────────────────────────────────────────────────────

export class QuizGenerator {
  private template: QuizTemplate;
  readonly id: string;
  readonly version = 1;

  constructor(template: QuizTemplate) {
    this.template = template;
    this.id = template.metadata.id;
  }

  generate(options?: {
    displayCount?: number;
    selection?: SelectionConfig;
    seed: string;
    shuffleOptions?: boolean;
  }): QuizInstance {
    const validated = parseBasicGenerateOptions(options);
    const displayCount =
      validated.displayCount ?? this.template.settings.displayCountDefault;
    const selection = validated.selection ?? this.template.settings.selectionDefault;
    const seed = validated.seed;
    const shuffleOptions = validated.shuffleOptions ?? true;

    // Mix template id into seed to prevent cross-template collisions
    const rng = createPrng(`${this.id}:${seed}`);
    const selectedQuestions = this.selectQuestions(selection, displayCount, rng);
    const generatedQuestions = selectedQuestions.map((q) =>
      this.generateQuestion(q, rng, shuffleOptions)
    );

    return {
      seed,
      metadata: this.template.metadata,
      questions: generatedQuestions,
      settings: {
        displayCount,
        feedbackPolicy: this.template.settings.feedbackPolicyDefault,
      },
    };
  }

  recreate(seed: string, shuffleOptions: boolean = true): QuizInstance {
    const validated = parseBasicRecreateOptions({ seed, shuffleOptions });
    return this.generate({ seed: validated.seed, shuffleOptions: validated.shuffleOptions });
  }

  validateAnswers(
    seed: string,
    answers: QuizAnswers
  ): Record<string, { correct: boolean; explanation?: string }> {
    const validated = parseBasicCorrectionOptions({ seed, answers });
    const instance = this.recreate(validated.seed, true);
    const results: Record<string, { correct: boolean; explanation?: string }> = {};

    instance.questions.forEach((genQ) => {
      const originalQ = this.template.pool.find((q) => q.id === genQ.id);
      if (!originalQ) return;

      const handler = HANDLERS[originalQ.type];
      if (!handler) return;

      results[genQ.id] = handler.validate(originalQ, genQ, validated.answers[genQ.id]);
    });

    return results;
  }

  private selectQuestions(
    selection: SelectionConfig,
    displayCount: number,
    rng: PRNG
  ): Question[] {
    let candidatePool: Question[] = [...this.template.pool];

    if (selection.mode === "byTags" && selection.tags?.length) {
      candidatePool = candidatePool.filter((q) =>
        q.tags?.some((tag) => selection.tags!.includes(tag))
      );
    }

    if (candidatePool.length === 0) {
      const tagMsg =
        selection.mode === "byTags" && selection.tags?.length
          ? ` (ninguna pregunta coincide con los tags: ${selection.tags.join(", ")})`
          : " (la plantilla no tiene preguntas)";
      throw new Error(
        `QuizGenerator "${this.id}": el pool de preguntas está vacío${tagMsg}`
      );
    }

    const actualDisplayCount = Math.min(displayCount, candidatePool.length);

    if (selection.mode === "fixed") {
      if (selection.ids?.length) {
        const selected: Question[] = [];
        for (const id of selection.ids) {
          const q = candidatePool.find((qq) => qq.id === id);
          if (q) selected.push(q);
          if (selected.length >= actualDisplayCount) break;
        }
        return selected;
      }
      return candidatePool.slice(0, actualDisplayCount);
    }

    if (selection.mode === "random" || selection.mode === "byTags") {
      return rng.sample(candidatePool, actualDisplayCount);
    }

    return candidatePool.slice(0, actualDisplayCount);
  }

  private generateQuestion(
    question: Question,
    rng: PRNG,
    shuffleOptions: boolean
  ): GeneratedQuestion {
    const handler = HANDLERS[question.type];
    if (!handler) {
      throw new Error(`Tipo de pregunta no soportado: ${(question as any).type}`);
    }
    return handler.generate(question, rng, shuffleOptions);
  }
}
