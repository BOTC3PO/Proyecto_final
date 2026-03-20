import { z } from "zod";
import { formatZodError, GeneradorParametrosSchema } from "../core/schemas";
import type { GeneradorParametros } from "../core/types";

export const FisicaParametrosSchema = GeneradorParametrosSchema.extend({
  materia: z.literal("fisica"),
});

export type FisicaParametros = z.infer<typeof FisicaParametrosSchema>;

export const parseFisicaParametros = (
  params: GeneradorParametros
): FisicaParametros => {
  const result = FisicaParametrosSchema.safeParse(params);
  if (!result.success) {
    throw new Error(`Parámetros inválidos: ${formatZodError(result.error)}`);
  }
  return result.data;
};
