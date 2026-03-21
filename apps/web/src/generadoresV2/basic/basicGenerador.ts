import type {
  QuizTemplate, QuizInstance, SelectionConfig,
  Question, GeneratedQuestion,
  MCQuestion, TFQuestion, MatchQuestion, FillBlankQuestion,
  QuizAnswers,
} from "./types";
import { createPrng, type PRNG } from "../core/prng";

type GenerateHandler = (q: Question, rng: PRNG, shuffle: boolean) => GeneratedQuestion;
type ValidateHandler = (original: Question, generated: GeneratedQuestion, answer: unknown) => { correct: boolean; explanation?: string };
type Handlers = { generate: GenerateHandler; validate: ValidateHandler };

const normalize = (s: string) =>
  s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const HANDLERS: Record<string, Handlers> = {
  mc: {
    generate(q, rng, shuffle) {
      const mc = q as MCQuestion;
      const options = shuffle ? rng.shuffle(mc.options) : [...mc.options];
      return {
        id: mc.id, type: "mc", prompt: mc.prompt,
        options: options.map((o, i) => ({ optionId: `opt_${i}`, text: o.text })),
        ...(mc.imageSrc ? { imageSrc: mc.imageSrc } : {}),
      };
    },
    validate(original, generated, answer) {
      const mc = original as MCQuestion;
      const selected = (generated.options ?? []).find(o => o.optionId === answer);
      if (!selected) return { correct: false, explanation: mc.explanation };
      const orig = mc.options.find(o => o.text === selected.text);
      return { correct: orig?.correct ?? false, explanation: mc.explanation };
    },
  },
  tf: {
    generate(q, _rng, _shuffle) {
      const tf = q as TFQuestion;
      return {
        id: tf.id, type: "tf", prompt: tf.prompt,
        ...(tf.imageSrc ? { imageSrc: tf.imageSrc } : {}),
      };
    },
    validate(original, _generated, answer) {
      const tf = original as TFQuestion;
      return {
        correct: answer === tf.answer,
        explanation: answer ? tf.becauseTrue : tf.becauseFalse,
      };
    },
  },
  match: {
    generate(q, rng, shuffle) {
      const m = q as MatchQuestion;
      const left = m.pairs.map((p, i) => ({ itemId: `left_${i}`, text: p.left }));
      const rightRaw = m.pairs.map((p, i) => ({ itemId: `right_${i}`, text: p.right }));
      const right = shuffle ? rng.shuffle(rightRaw) : rightRaw;
      return {
        id: m.id, type: "match", prompt: m.prompt,
        leftItems: left, rightItems: right,
        ...(m.imageSrc ? { imageSrc: m.imageSrc } : {}),
      };
    },
    validate(original, generated, answer) {
      const m = original as MatchQuestion;
      const pairs = Object.entries((answer ?? {}) as Record<string, string>);
      if (pairs.length !== m.pairs.length) return { correct: false, explanation: m.explanation };
      for (const [leftId, rightId] of pairs) {
        const left = generated.leftItems?.find(i => i.itemId === leftId);
        const right = generated.rightItems?.find(i => i.itemId === rightId);
        if (!left || !right) return { correct: false, explanation: m.explanation };
        const correct = m.pairs.find(p => p.left === left.text);
        if (correct?.right !== right.text) return { correct: false, explanation: m.explanation };
      }
      return { correct: true, explanation: m.explanation };
    },
  },
  "fill-blank": {
    generate(q, _rng, _shuffle) {
      const fb = q as FillBlankQuestion;
      return {
        id: fb.id, type: "fill-blank", prompt: fb.prompt,
        template: fb.template,
        blanks: fb.blanks.map(b => ({ id: b.id, ...(b.hint ? { hint: b.hint } : {}) })),
        ...(fb.imageSrc ? { imageSrc: fb.imageSrc } : {}),
      };
    },
    validate(original, _generated, answer) {
      const fb = original as FillBlankQuestion;
      const answers = (answer ?? {}) as Record<string, string>;
      if (Object.keys(answers).length !== fb.blanks.length) {
        return { correct: false, explanation: fb.explanation };
      }
      const allCorrect = fb.blanks.every(blank => {
        const given = normalize(answers[blank.id] ?? "");
        return blank.correctAnswers.some(a => normalize(a) === given);
      });
      return { correct: allCorrect, explanation: fb.explanation };
    },
  },
};

export class QuizGenerator {
  private template: QuizTemplate;
  readonly id: string;
  readonly version = 1;

  constructor(template: QuizTemplate) {
    this.template = template;
    this.id = template.metadata.id;
  }

  generate(options: {
    seed: string;
    displayCount?: number;
    selection?: SelectionConfig;
    shuffleOptions?: boolean;
  }): QuizInstance {
    const displayCount = options.displayCount ?? this.template.settings.displayCountDefault;
    const selection = options.selection ?? this.template.settings.selectionDefault;
    const shuffleOptions = options.shuffleOptions ?? true;
    const rng = createPrng(`${this.id}:${options.seed}`);
    const selected = this.selectQuestions(selection, displayCount, rng);
    return {
      seed: options.seed,
      metadata: this.template.metadata,
      questions: selected.map(q => this.generateQuestion(q, rng, shuffleOptions)),
      settings: {
        displayCount,
        feedbackPolicy: this.template.settings.feedbackPolicyDefault,
      },
    };
  }

  validateAnswers(seed: string, answers: QuizAnswers): Record<string, { correct: boolean; explanation?: string }> {
    const instance = this.generate({ seed, shuffleOptions: true });
    const results: Record<string, { correct: boolean; explanation?: string }> = {};
    instance.questions.forEach(genQ => {
      const original = this.template.pool.find(q => q.id === genQ.id);
      if (!original) return;
      const handler = HANDLERS[original.type];
      if (!handler) return;
      results[genQ.id] = handler.validate(original, genQ, answers[genQ.id]);
    });
    return results;
  }

  private selectQuestions(selection: SelectionConfig, count: number, rng: PRNG): Question[] {
    let pool = [...this.template.pool];
    if (selection.mode === "byTags" && selection.tags?.length) {
      pool = pool.filter(q => q.tags?.some(t => selection.tags!.includes(t)));
    }
    if (pool.length === 0) throw new Error(`QuizGenerator "${this.id}": pool vacío`);
    const n = Math.min(count, pool.length);
    if (selection.mode === "fixed") {
      if (selection.ids?.length) {
        return selection.ids.map(id => pool.find(q => q.id === id)).filter(Boolean).slice(0, n) as Question[];
      }
      return pool.slice(0, n);
    }
    return rng.sample(pool, n);
  }

  private generateQuestion(q: Question, rng: PRNG, shuffle: boolean): GeneratedQuestion {
    const handler = HANDLERS[q.type];
    if (!handler) throw new Error(`Tipo no soportado: ${q.type}`);
    return handler.generate(q, rng, shuffle);
  }
}
