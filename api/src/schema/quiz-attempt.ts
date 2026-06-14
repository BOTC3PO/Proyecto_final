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

// F5-01 — guardado incremental de UNA respuesta (entrega por pregunta).
// La idempotencia es por (intento, questionId): el endpoint hace upsert de
// `answers[questionId]`, así que reenviar la misma respuesta (reintento de la
// cola offline) no duplica — sólo actualiza. `clientTs` es opcional (marca de
// tiempo del cliente, para depurar la cola; no afecta el resultado).
export const QuizAttemptAnswerSchema = z.object({
  questionId: z.string().min(1),
  response: z.union([z.string(), z.array(z.string())]),
  clientTs: z.number().int().nonnegative().optional()
});

// WO07 — corrección manual de UN ítem abierto por parte del profe.
export const QuizAttemptGradeSchema = z.object({
  questionId: z.string().min(1),
  // Puntaje parcial 0..points (el server lo recorta al peso del ítem).
  score: z.number().min(0),
  feedback: z.string().optional()
});

// F3-04 — query params para listar intentos / pedir resumen del alumno.
// Al menos uno de `quizId` o `moduleId` es requerido. `aulaId` es opcional y,
// si está, indica que el requester es staff pidiendo los intentos de los
// alumnos del aula (el server valida membresía).
export const QuizAttemptListQuerySchema = z.object({
  quizId: z.string().min(1).optional(),
  moduleId: z.string().min(1).optional(),
  aulaId: z.string().min(1).optional(),
  userId: z.string().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(200).optional().default(50)
}).refine((v) => v.quizId || v.moduleId, {
  message: "Se requiere al menos `quizId` o `moduleId`."
});

export const QuizAttemptSummaryQuerySchema = z.object({
  quizId: z.string().min(1)
});

export type QuizAttemptCreate = z.infer<typeof QuizAttemptCreateSchema>;
export type QuizAttemptSubmit = z.infer<typeof QuizAttemptSubmitSchema>;
export type QuizAttemptAnswer = z.infer<typeof QuizAttemptAnswerSchema>;
export type QuizAttemptGrade = z.infer<typeof QuizAttemptGradeSchema>;
export type QuizAttemptListQuery = z.infer<typeof QuizAttemptListQuerySchema>;
export type QuizAttemptSummaryQuery = z.infer<typeof QuizAttemptSummaryQuerySchema>;
