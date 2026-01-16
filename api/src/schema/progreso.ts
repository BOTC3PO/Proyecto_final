import { z } from "zod";

export const ProgressStatusSchema = z.enum(["iniciado", "en_progreso", "completado"]);

export const ProgressSchema = z.object({
  usuarioId: z.string().min(1),
  aulaId: z.string().min(1).optional(),
  moduloId: z.string().min(1),
  status: ProgressStatusSchema,
  score: z.number().min(0).optional(),
  attempts: z.number().int().min(0).optional(),
  completedAt: z.string().datetime().nullable().optional(),
  updatedAt: z.string().datetime()
});

export type Progress = z.infer<typeof ProgressSchema>;
