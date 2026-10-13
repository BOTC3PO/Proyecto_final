/**
 * H10 — esquemas de las escrituras que antes se validaban a mano (tienda, instrumentos, suscripciones,
 * pedagógico). Los rangos de negocio (monto máximo, días) se siguen controlando en cada ruta.
 */
import { z } from "zod";

const id = z.string().trim().min(1, "requerido").max(200);
const numero = z.number().finite();

// ── Tienda ──
export const TiendaComprarSchema = z.object({ itemId: id });

export const TiendaItemCrearSchema = z.object({
  tipo: z.string().trim().min(1, "requerido").max(40).regex(/^[a-z0-9_-]+$/i, "solo letras, números, _ y -"),
  nombre: z.string().trim().min(1, "requerido").max(120),
  descripcion: z.string().max(500).optional(),
  precio: numero.min(0).max(1_000_000).optional(),
  assetId: z.string().max(200).nullish(),
  previewCss: z.string().max(2000).nullish(),
  orden: z.number().int().min(0).max(100_000).optional(),
});

export const TiendaItemEditarSchema = z.object({
  nombre: z.string().trim().min(1).max(120).optional(),
  descripcion: z.string().max(500).optional(),
  precio: numero.min(0).max(1_000_000).optional(),
  activo: z.union([z.literal(0), z.literal(1)]).optional(),
  orden: z.number().int().min(0).max(100_000).optional(),
});

// ── Instrumentos ──
export const InstrumentoAbrirSchema = z.object({
  monto: z.unknown().optional(),
  dias: z.unknown().optional(),
  aulaId: z.string().max(200).nullish(),
});

// ── Suscripciones ──
export const SuscripcionIdSchema = z.object({ suscripcionId: id });

export const WebhookMPSchema = z.object({
  type: z.string().optional(),
  action: z.string().optional(),
  data: z.object({ id: z.union([z.string(), z.number()]).transform(String).optional() }).optional(),
});

// ── Pedagógico ──
export const UmbralSchema = z.object({
  quizId: id,
  moduloId: id,
  umbral: numero.min(0, "debe estar entre 0 y 100").max(100, "debe estar entre 0 y 100"),
});

export const DesbloquearSchema = z.object({
  moduloId: id,
  alumnoId: id,
  aulaId: id,
  motivo: z.string().max(500).nullish(),
});

export const ModoAulaSchema = z.object({
  aulaId: id,
  activo: z.boolean().optional().default(false),
  restricciones: z.array(z.string().trim().min(1).max(40).regex(/^[a-z0-9_-]+$/i)).max(20).optional(),
});

// ── Aulas ──
export const AulaAsignarModuloSchema = z.object({
  moduloId: id,
  required: z.boolean().optional(),
});

export const AulaUnirseSchema = z.object({
  codigo: z.string().trim().min(1, "código requerido").max(20),
});
