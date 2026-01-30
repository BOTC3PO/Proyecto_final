import { z } from "zod";
import { formatZodError } from "../core/schemas";
import type { Dificultad } from "./generico";

const DificultadSchema = z.enum(["facil", "media", "dificil"]);

const QuimicaParamsSchema = z
  .object({
    dificultad: DificultadSchema.optional(),
  })
  .strict();

export type QuimicaParams = z.infer<typeof QuimicaParamsSchema>;

export const parseQuimicaParams = (dificultad?: Dificultad): QuimicaParams => {
  const result = QuimicaParamsSchema.safeParse({ dificultad });
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};
