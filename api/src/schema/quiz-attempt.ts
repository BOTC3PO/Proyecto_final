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
        toleranciaRelativa: z.number().optional(),
        // WO07 — pregunta abierta: sin clave de respuesta.
        //  - "ninguna": informativa, no puntúa (se excluye del maxScore).
        //  - "manual": la corrige el profe; el ítem queda pendiente al enviar.
        correccion: z.enum(["ninguna", "manual"]).optional(),
        manualGrading: z.boolean().optional(),
        // Enunciado para que el profe lo vea en la pantalla de corrección.
        prompt: z.string().optional()
      })
    )
    .optional(),
  // Ids de las preguntas efectivamente presentadas al alumno (tras aplicar la
  // política de pool/selección o elige_alumno en el reproductor). El servidor
  // corrige solo estas, así el puntaje refleja lo realmente respondido tanto
  // para quizzes generados como para un banco hand-authored.
  presentedIds: z.array(z.string()).optional()
});

// WO07 — corrección manual de UN ítem abierto por parte del profe.
export const QuizAttemptGradeSchema = z.object({
  questionId: z.string().min(1),
  // Puntaje parcial 0..points (el server lo recorta al peso del ítem).
  score: z.number().min(0),
  feedback: z.string().optional()
});

export type QuizAttemptCreate = z.infer<typeof QuizAttemptCreateSchema>;
export type QuizAttemptSubmit = z.infer<typeof QuizAttemptSubmitSchema>;
export type QuizAttemptGrade = z.infer<typeof QuizAttemptGradeSchema>;
