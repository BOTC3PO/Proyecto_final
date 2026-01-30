import { z } from "zod";
import { formatZodError } from "../core/schemas";

const SelectionConfigSchema = z.discriminatedUnion("mode", [
  z
    .object({
      mode: z.literal("random"),
      seeded: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      mode: z.literal("fixed"),
      seeded: z.boolean().optional(),
      ids: z
        .array(z.string().min(1, "Cada id de pregunta debe ser válido."))
        .min(1, "La selección fija requiere al menos un id."),
    })
    .strict(),
  z
    .object({
      mode: z.literal("byTags"),
      seeded: z.boolean().optional(),
      tags: z
        .array(z.string().min(1, "Cada tag debe ser válido."))
        .min(1, "La selección por tags requiere al menos un tag."),
    })
    .strict(),
]);

const BasicGenerateOptionsSchema = z
  .object({
    seed: z
      .string({ required_error: "Se requiere un seed provisto por el backend." })
      .min(1, "Se requiere un seed provisto por el backend."),
    displayCount: z
      .number({ invalid_type_error: "displayCount debe ser un número." })
      .int("displayCount debe ser un entero.")
      .positive("displayCount debe ser mayor a 0.")
      .optional(),
    selection: SelectionConfigSchema.optional(),
    shuffleOptions: z.boolean().optional(),
  })
  .strict();

const BasicRecreateOptionsSchema = z
  .object({
    seed: z
      .string({ required_error: "Se requiere un seed provisto por el backend." })
      .min(1, "Se requiere un seed provisto por el backend."),
    shuffleOptions: z.boolean().optional(),
  })
  .strict();

const BasicCorrectionSchema = z
  .object({
    seed: z
      .string({ required_error: "Se requiere un seed provisto por el backend." })
      .min(1, "Se requiere un seed provisto por el backend."),
    answers: z.record(z.unknown(), {
      invalid_type_error: "Las respuestas deben ser un objeto.",
      required_error: "Se requieren respuestas para corregir.",
    }),
  })
  .strict();

export type BasicGenerateOptions = z.infer<typeof BasicGenerateOptionsSchema>;
export type BasicRecreateOptions = z.infer<typeof BasicRecreateOptionsSchema>;
export type BasicCorrectionOptions = z.infer<typeof BasicCorrectionSchema>;

export const parseBasicGenerateOptions = (options?: unknown): BasicGenerateOptions => {
  const result = BasicGenerateOptionsSchema.safeParse(options ?? {});
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};

export const parseBasicRecreateOptions = (options?: unknown): BasicRecreateOptions => {
  const result = BasicRecreateOptionsSchema.safeParse(options ?? {});
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};

export const parseBasicCorrectionOptions = (
  options?: unknown
): BasicCorrectionOptions => {
  const result = BasicCorrectionSchema.safeParse(options ?? {});
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};
