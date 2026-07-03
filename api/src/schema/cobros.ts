import { z } from "zod";

export const ESTADOS_COBRO = ["borrador", "publicado", "cerrado"] as const;
export type EstadoCobro = (typeof ESTADOS_COBRO)[number];

export const ESTADOS_CUOTA = ["pendiente", "en_proceso", "pagada", "vencida", "anulada"] as const;
export type EstadoCuota = (typeof ESTADOS_CUOTA)[number];

export const CobroCreateSchema = z.object({
  concepto: z.string().min(1).max(200),
  descripcion: z.string().max(1000).nullish(),
  montoUnitario: z.number().positive(),
  moneda: z.string().min(3).max(6).optional(),
  vencimiento: z.string().datetime().nullish()
});

// Publicar un cobro genera una CuotaAlumno por cada destinatario. Se puede
// apuntar a un aula completa (todos sus STUDENT) o a una lista explícita de
// alumnoIds (ej. becados, o un subconjunto puntual).
export const CobroPublicarSchema = z
  .object({
    aulaId: z.string().min(1).optional(),
    alumnoIds: z.array(z.string().min(1)).optional(),
    // Permite becas/descuentos: monto distinto de montoUnitario para
    // alumnos puntuales. Si un alumno no aparece acá, paga montoUnitario.
    montosPersonalizados: z.record(z.string(), z.number().positive()).optional()
  })
  .refine((data) => Boolean(data.aulaId) || (data.alumnoIds && data.alumnoIds.length > 0), {
    message: "aulaId o alumnoIds es requerido"
  });

export type CobroCreateInput = z.infer<typeof CobroCreateSchema>;
export type CobroPublicarInput = z.infer<typeof CobroPublicarSchema>;

// PLAN-B Fase 5 — conexión de pasarela por escuela (onboarding).
export const PROVIDERS_PASARELA = ["mercadopago", "stripe", "cryptomus"] as const;

export const EscuelaPasarelaConectarSchema = z.object({
  provider: z.enum(PROVIDERS_PASARELA),
  cuentaConectadaId: z.string().min(1).max(200).nullish(),
  // Credenciales en texto plano (API key, access token) — el server las
  // cifra antes de persistir, nunca se guardan ni loguean en claro.
  credenciales: z.record(z.string(), z.string()).nullish(),
  activa: z.boolean().optional()
});

export const EscuelaPasarelaActualizarSchema = z.object({
  activa: z.boolean()
});

export type EscuelaPasarelaConectarInput = z.infer<typeof EscuelaPasarelaConectarSchema>;
