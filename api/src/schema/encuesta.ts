import { z } from "zod";

export const SurveyTypeSchema = z.enum(["normal", "puntuacion", "segunda_vuelta"]);

export const SurveyOptionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1)
});

export const SurveyStatusSchema = z.enum(["borrador", "activa", "cerrada", "archivada"]);

export const SurveySchema = z
  .object({
    id: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    type: SurveyTypeSchema,
    options: z.array(SurveyOptionSchema).min(2),
    maxOptions: z.number().int().min(2).optional(),
    startAt: z.string().datetime(),
    endAt: z.string().datetime(),
    showResultsBeforeClose: z.boolean().optional(),
    showResultsRealtime: z.boolean().optional(),
    status: SurveyStatusSchema,
    responsesCount: z.number().int().min(0).optional(),
    createdBy: z.string().min(1),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    archivedAt: z.string().datetime().optional()
  })
  .superRefine((value, ctx) => {
    if (value.maxOptions !== undefined && value.options.length > value.maxOptions) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "options exceed maxOptions",
        path: ["options"]
      });
    }
    if (new Date(value.endAt).getTime() <= new Date(value.startAt).getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "endAt must be after startAt",
        path: ["endAt"]
      });
    }
  });

export type Survey = z.infer<typeof SurveySchema>;
