import {
  compile,
  generate,
  parse,
  toModuleQuizQuestion,
  type ModuleQuizQuestion,
} from "@vb/vblang";
import { generadorAsistidoProvider } from "./provider";

export interface RunPlantillaOptions {
  seed: string;
  focus?: string | null;
}

/**
 * Helper end-to-end: parsea + compila + genera + adapta. El consumer no
 * necesita conocer los internals del paquete @vb/vblang.
 *
 * Conecta automáticamente el provider de generadoresV2 si la plantilla
 * usa `generador: <id>`.
 */
export function runPlantilla(
  codigoDsl: string,
  options: RunPlantillaOptions,
): ModuleQuizQuestion {
  const plantilla = parse(codigoDsl);
  const compiled = compile(plantilla);
  const gen = generate(compiled, {
    seed: options.seed,
    provider: generadorAsistidoProvider,
  });
  return toModuleQuizQuestion(gen, { focus: options.focus });
}
