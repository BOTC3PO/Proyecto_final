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
    .default({}),
  // Preguntas materializadas en el cliente (quizzes generados / plantilla
  // VBLang): el cliente envía id + answerKey (+ peso y tolerancia) para que el
  // servidor pueda corregir ponderado, ya que no las tiene persistidas.
  generatedQuestions: z
    .array(
      z.object({
        id: z.string().min(1),
        answerKey: z.union([z.string(), z.array(z.string())]).optional(),
        points: z.number().positive().optional(),
        toleranciaRelativa: z.number().optional()
      })
    )
    .optional(),
  // Ids de las preguntas efectivamente presentadas al alumno (tras aplicar la
  // política de pool/selección o elige_alumno en el reproductor). El servidor
  // corrige solo estas, así el puntaje refleja lo realmente respondido tanto
  // para quizzes generados como para un banco hand-authored.
  presentedIds: z.array(z.string()).optional()
});

export type QuizAttemptCreate = z.infer<typeof QuizAttemptCreateSchema>;
export type QuizAttemptSubmit = z.infer<typeof QuizAttemptSubmitSchema>;
