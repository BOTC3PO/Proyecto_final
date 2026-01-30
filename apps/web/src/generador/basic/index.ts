import { QuizGenerator } from "./basicGenerador";
import { BASIC_TEMPLATES } from "./juegosBasicos";
import type { GeneratorDescriptor } from "../core/types";
import type { QuizInstance } from "./types";

export { BASIC_TEMPLATES } from "./juegosBasicos";
export type { QuizTemplate, QuizInstance } from "./types";

export const GENERADORES_BASIC: Record<string, QuizGenerator> = Object.fromEntries(
  Object.entries(BASIC_TEMPLATES).map(([id, template]) => [
    id,
    new QuizGenerator(template),
  ])
);

export const GENERADORES_BASIC_DESCRIPTORES: Record<
  string,
  GeneratorDescriptor<QuizInstance, Parameters<QuizGenerator["generate"]>>
> = Object.fromEntries(
  Object.entries(GENERADORES_BASIC).map(([id, generator]) => {
    const generatorId = `basic:${id}`;
    const generatorVersion = generator.version;
    return [
      id,
      {
        id: generatorId,
        version: generatorVersion,
        generate: (...args) => ({
          ...generator.generate(...args),
          generatorId,
          generatorVersion,
        }),
      },
    ];
  })
) as Record<string, GeneratorDescriptor<QuizInstance, Parameters<QuizGenerator["generate"]>>>;

export function getGeneradorBasic(id: string): QuizGenerator | undefined {
  return GENERADORES_BASIC[id];
}
