// schemas.ts — Geografía
// Validación de parámetros del módulo de geografía.

import { z } from "zod";
import { formatZodError } from "../core/schemas";
import type { GeografiaEje } from "./types";

// ================================================================
// SCHEMAS
// ================================================================

export const GeografiaEjeSchema = z.enum([
  "geografia_fisica",
  "geografia_politica",
  "geografia_humana_economica",
  "cartografia",
  "dinamicas_globales",
]);

const GeografiaParamsSchema = z
  .object({
    eje: GeografiaEjeSchema.optional(),
  })
  .strict();

export type GeografiaParams = z.infer<typeof GeografiaParamsSchema>;

export const parseGeografiaParams = (eje?: GeografiaEje): GeografiaParams => {
  const result = GeografiaParamsSchema.safeParse({ eje });
  if (!result.success) {
    throw new Error(
      `Parámetros de geografía inválidos: ${formatZodError(result.error)}`
    );
  }
  return result.data;
};

// ================================================================
// SCHEMA PARA VALIDAR LA CONFIG DEL PROFESOR
// ================================================================

const GeografiaObjetivoSchema = z.object({
  codigo: z.string().min(1),
  descripcion: z.string().min(1),
});

const GeografiaCompetenciaSchema = z.object({
  codigo: z.string().min(1),
  descripcion: z.string().min(1),
});

const GeografiaCriterioSchema = z.object({
  codigo: z.string().min(1),
  descripcion: z.string().min(1),
  nivel: z.enum(["basico", "intermedio", "avanzado"]),
});

const GeografiaActividadSchema = z.object({
  tipo: z.enum([
    "analisis",
    "mapeo",
    "debate",
    "estudio_caso",
    "investigacion",
    "comparacion",
  ]),
  descripcion: z.string().min(1),
});

export const GeografiaModuleMetadataSchema = z.object({
  eje: GeografiaEjeSchema,
  ejeNumero: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
  temaNumero: z.number().int().min(1).max(23),
  temaNumeroEnEje: z.number().int().min(1),
  nivel: z.literal("secundario"),
  objetivos: z.array(GeografiaObjetivoSchema).min(1),
  competencias: z.array(GeografiaCompetenciaSchema).min(1),
  criteriosEvaluacion: z.array(GeografiaCriterioSchema).min(1),
  relacionesCausaEfecto: z.array(z.string()).optional(),
  casoEstudioSugerido: z.string().optional(),
  relacionConOtrosTemas: z.array(z.string()).optional(),
  actividadesSugeridas: z.array(GeografiaActividadSchema).optional(),
});

export type GeografiaModuleMetadataInput = z.infer<
  typeof GeografiaModuleMetadataSchema
>;
