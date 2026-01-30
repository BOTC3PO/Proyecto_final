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
  GeneratedMC,
  GeneratedMatch,
} from "./types";

import { createPrng, type PRNG } from "../core/prng";
import {
  parseBasicCorrectionOptions,
  parseBasicGenerateOptions,
  parseBasicRecreateOptions,
} from "./schemas";

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

    const rng = createPrng(seed);
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
    answers: Record<string, any>
  ): Record<string, { correct: boolean; explanation?: string }> {
    const validated = parseBasicCorrectionOptions({ seed, answers });
    const instance = this.recreate(validated.seed, true);
    const results: Record<string, { correct: boolean; explanation?: string }> = {};

    instance.questions.forEach((genQ) => {
      const originalQ = this.template.pool.find((q) => q.id === genQ.id);
      if (!originalQ) return;

      const userAnswer = validated.answers[genQ.id];

      if (originalQ.type === "mc") {
        const mcQ = originalQ as MCQuestion;
        const genMC = genQ as GeneratedMC;

        const selectedOption = genMC.options.find((o) => o.optionId === userAnswer);
        if (!selectedOption) {
          results[genQ.id] = { correct: false };
          return;
        }

        const originalOption = mcQ.options.find((o) => o.text === selectedOption.text);

        results[genQ.id] = {
          correct: originalOption?.correct ?? false,
          explanation: mcQ.explanation,
        };
        return;
      }

      if (originalQ.type === "tf") {
        const tfQ = originalQ as TFQuestion;
        results[genQ.id] = {
          correct: userAnswer === tfQ.answer,
          explanation: userAnswer ? tfQ.becauseTrue : tfQ.becauseFalse,
        };
        return;
      }

      if (originalQ.type === "match") {
        const matchQ = originalQ as MatchQuestion;
        const genMatch = genQ as GeneratedMatch;

        let allCorrect = true;

        for (const [leftId, rightId] of Object.entries(userAnswer ?? {})) {
          const leftItem = genMatch.leftItems.find((i) => i.itemId === leftId);
          const rightItem = genMatch.rightItems.find((i) => i.itemId === rightId);

          if (!leftItem || !rightItem) {
            allCorrect = false;
            break;
          }

          const correctPair = matchQ.pairs.find((p) => p.left === leftItem.text);
          if (correctPair?.right !== rightItem.text) {
            allCorrect = false;
            break;
          }
        }

        results[genQ.id] = {
          correct: allCorrect,
          explanation: matchQ.explanation,
        };
        return;
      }
    });

    return results;
  }

  private selectQuestions(
    selection: SelectionConfig,
    displayCount: number,
    rng: PRNG
  ): Question[] {
    const poolSize = this.template.pool.length;
    const actualDisplayCount = Math.min(displayCount, poolSize);

    let candidatePool: Question[] = [...this.template.pool];

    if (selection.mode === "byTags" && selection.tags?.length) {
      candidatePool = candidatePool.filter((q) =>
        q.tags?.some((tag) => selection.tags!.includes(tag))
      );
    }

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
    if (question.type === "mc") {
      const options = shuffleOptions ? rng.shuffle(question.options) : [...question.options];

      return {
        id: question.id,
        type: "mc",
        prompt: question.prompt,
        options: options.map((opt, idx) => ({
          optionId: `opt_${idx}`,
          text: opt.text,
        })),
      };
    }

    if (question.type === "tf") {
      return {
        id: question.id,
        type: "tf",
        prompt: question.prompt,
      };
    }

    if (question.type === "match") {
      const leftItems = question.pairs.map((p, idx) => ({
        itemId: `left_${idx}`,
        text: p.left,
      }));

      const rightRaw = question.pairs.map((p, idx) => ({
        itemId: `right_${idx}`,
        text: p.right,
      }));

      const rightItems = shuffleOptions ? rng.shuffle(rightRaw) : rightRaw;

      return {
        id: question.id,
        type: "match",
        prompt: question.prompt,
        leftItems,
        rightItems,
      };
    }

    throw new Error(`Tipo de pregunta no soportado: ${(question as any).type}`);
  }
}
