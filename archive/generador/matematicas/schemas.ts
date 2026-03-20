import { z } from "zod";
import { formatZodError } from "../core/schemas";
import type { Dificultad, GeneradorConfig } from "./generic";

const DificultadSchema = z.enum([
  "basico",
  "intermedio",
  "avanzado",
  "facil",
  "media",
  "dificil",
]);

const GeneradorConfigSchema = z
  .object({
    modo: z.enum(["quiz", "completar"]).optional(),
  })
  .strict();

const MatematicasParamsSchema = z
  .object({
    dificultad: DificultadSchema.optional(),
    config: GeneradorConfigSchema.optional(),
  })
  .strict();

export type MatematicasParams = z.infer<typeof MatematicasParamsSchema>;

export const parseMatematicasParams = (
  dificultad?: Dificultad,
  config?: GeneradorConfig
): MatematicasParams => {
  const result = MatematicasParamsSchema.safeParse({ dificultad, config });
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};
