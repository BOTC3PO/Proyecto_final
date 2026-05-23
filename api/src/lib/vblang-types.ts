import { z } from "zod";

export const VISIBILITY = ["privada", "escuela", "publica"] as const;
export type Visibility = (typeof VISIBILITY)[number];

export const PlantillaCreateSchema = z.object({
  nombre: z.string().min(1).max(200),
  descripcion: z.string().max(1000).optional(),
  materia: z.string().max(100).optional(),
  tags: z.array(z.string().max(50)).max(20).optional(),
  codigoDsl: z.string().min(1).max(50000),
  visibility: z.enum(VISIBILITY),
});

export const PlantillaUpdateSchema = z.object({
  nombre: z.string().min(1).max(200).optional(),
  descripcion: z.string().max(1000).optional(),
  materia: z.string().max(100).optional(),
  tags: z.array(z.string().max(50)).max(20).optional(),
  codigoDsl: z.string().min(1).max(50000).optional(),
  visibility: z.enum(VISIBILITY).optional(),
  changelog: z.string().max(500).optional(),
});

export const PlantillaForkSchema = z.object({
  nombre: z.string().min(1).max(200).optional(),
  visibility: z.enum(VISIBILITY).optional(),
});

export const DatasetCreateSchema = z.object({
  nombre: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-z_][a-z0-9_]*$/i, "nombre debe ser un identificador válido"),
  descripcion: z.string().max(500).optional(),
  visibility: z.enum(VISIBILITY),
  columnas: z.record(z.string(), z.enum(["string", "number", "boolean"])),
  filas: z.array(z.record(z.string(), z.unknown())).optional(),
});

export const DatasetUpdateSchema = DatasetCreateSchema.partial();

export const DatasetFilasBulkSchema = z.object({
  filas: z.array(z.record(z.string(), z.unknown())).min(1),
});

export const DatasetFilaUpdateSchema = z.object({
  datos: z.record(z.string(), z.unknown()),
});
