import { QuizGenerator } from "./basicGenerador";
import { BASIC_TEMPLATES } from "./juegosBasicos";

export { BASIC_TEMPLATES } from "./juegosBasicos";
export type { QuizTemplate, QuizInstance } from "./types";

export const GENERADORES_BASIC: Record<string, QuizGenerator> = Object.fromEntries(
  Object.entries(BASIC_TEMPLATES).map(([id, template]) => [
    id,
    new QuizGenerator(template),
  ])
);

export function getGeneradorBasic(id: string): QuizGenerator | undefined {
  return GENERADORES_BASIC[id];
}
