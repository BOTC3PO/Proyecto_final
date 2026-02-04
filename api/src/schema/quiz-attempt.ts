import { z } from "zod";

const numericString = /^-?\d+$/;

export const QuizVersionSchema = z.preprocess((value) => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!numericString.test(trimmed)) return value;
    return Number.parseInt(trimmed, 10);
  }
  return value;
}, z.number().int().finite());

export const QuizAttemptCreateSchema = z.object({
  moduleId: z.string().min(1).optional(),
  quizId: z.string().min(1)
});

export const QuizAttemptSubmitSchema = z.object({
  answers: z
    .record(z.string(), z.union([z.string(), z.array(z.string())]))
    .optional()
    .default({})
});

export type QuizAttemptCreate = z.infer<typeof QuizAttemptCreateSchema>;
export type QuizAttemptSubmit = z.infer<typeof QuizAttemptSubmitSchema>;
