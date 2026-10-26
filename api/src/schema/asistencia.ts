import { z } from "zod";

export const ESTADOS_ASISTENCIA = ["presente", "ausente", "tarde", "justificado"] as const;
export type EstadoAsistencia = (typeof ESTADOS_ASISTENCIA)[number];

export const EstadoAsistenciaSchema = z.enum(ESTADOS_ASISTENCIA);

// Fecha en formato YYYY-MM-DD (mismo criterio simple que el resto del
// código usa para fechas-sin-hora, ej. `ActividadAula.fecha`).
export const FechaAsistenciaSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "fecha debe tener formato YYYY-MM-DD"
});

const RegistroAsistenciaSchema = z.object({
  alumnoId: z.string().min(1),
  estado: EstadoAsistenciaSchema,
  notas: z.string().max(500).nullish()
});

export const PlanillaAsistenciaUpsertSchema = z.object({
  registros: z.array(RegistroAsistenciaSchema).min(1)
});

export type RegistroAsistenciaInput = z.infer<typeof RegistroAsistenciaSchema>;
export type PlanillaAsistenciaUpsertInput = z.infer<typeof PlanillaAsistenciaUpsertSchema>;
