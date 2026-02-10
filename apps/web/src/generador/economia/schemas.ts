import { z } from "zod";
import { formatZodError } from "../core/schemas";
import type { Dificultad } from "./generico";

const DificultadSchema = z.enum([
  "basico",
  "intermedio",
  "avanzado",
]);

const EconomiaParamsSchema = z
  .object({
    dificultad: DificultadSchema.optional(),
  })
  .strict();

export type EconomiaParams = z.infer<typeof EconomiaParamsSchema>;

export const parseEconomiaParams = (dificultad?: Dificultad): EconomiaParams => {
  const result = EconomiaParamsSchema.safeParse({ dificultad });
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};
