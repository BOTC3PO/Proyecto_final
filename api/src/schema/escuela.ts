import { z } from "zod";

export const EscuelaSchema = z.object({
  name: z.string().min(2).max(120),
  code: z.string().min(2).max(32),
  address: z.string().max(200).nullish(),
  adminIds: z.array(z.string().regex(/^[a-fA-F0-9]{24}$/)).optional(),
  subscriptionStatus: z.enum(["ACTIVE", "PAST_DUE", "SUSPENDED", "INACTIVE"]).optional(),
  plan: z.enum(["ENTERPRISE_BASIC", "ENTERPRISE_STD", "ENTERPRISE_PLUS"]).optional(),
  pricePerStudent: z.number().nonnegative().optional()
});

export type EscuelaInput = z.infer<typeof EscuelaSchema>;

export const EscuelaPatchSchema = EscuelaSchema.pick({
  subscriptionStatus: true,
  plan: true,
  pricePerStudent: true
}).partial();

// PLAN-C §4 (ítem 29) — personalización por escuela. Colores en formato
// libre (hex u otro) — no validamos el formato exacto, sólo longitud, para
// no acoplar el backend a una paleta específica del front.
export const EscuelaBrandingSchema = z.object({
  logoUrl: z.string().url().max(500).nullish(),
  iconoUrl: z.string().url().max(500).nullish(),
  colorPrimario: z.string().max(20).nullish(),
  colorSecundario: z.string().max(20).nullish()
});

export type EscuelaBrandingInput = z.infer<typeof EscuelaBrandingSchema>;

/**
 * Datos que la escuela declara al darse de alta. Son los que el admin mira
 * para verificarla antes de habilitarle cobros. `cue` (Clave Única de
 * Establecimiento) es opcional a propósito: existe el caso del espacio
 * educativo virtual sin habilitación, que igual puede verificarse por la
 * identidad de quien va a cobrar.
 */
export const EscuelaSolicitudSchema = z.object({
  name: z.string().min(3).max(200),
  razonSocial: z.string().min(3).max(200),
  cuit: z.string().min(8).max(20),
  domicilio: z.string().min(3).max(300),
  contactoEmail: z.string().email(),
  contactoTelefono: z.string().min(6).max(40),
  cue: z.string().max(40).optional(),
  notas: z.string().max(1000).optional()
});
