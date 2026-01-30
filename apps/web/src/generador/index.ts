import { GENERADORES_BASIC } from "./basic";
import { GENERATORS_BY_TEMA } from "./matematicas";
import { createGeneradoresFisicaPorId } from "./fisica/indexFisica";
import { GENERADORES_QUIMICA } from "./quimica/indexQuimica";
import { GENERADORES_ECONOMIA_POR_CLAVE } from "./economia/indexEconomia";
import { createPrng, type PRNG } from "./core/prng";

export { BASIC_TEMPLATES, GENERADORES_BASIC, getGeneradorBasic } from "./basic";
export type { QuizTemplate, QuizInstance } from "./basic";

export { GENERATORS_BY_TEMA, getGeneratorPorTema } from "./matematicas";

export { createGeneradoresFisica, createGeneradoresFisicaPorId } from "./fisica/indexFisica";

export { GENERADORES_QUIMICA } from "./quimica/indexQuimica";

export {
  GENERADORES_CONTABILIDAD,
  GENERADORES_FINANZAS,
  GENERADORES_ECONOMIA_AR,
  GENERADORES_ECONOMIA,
  GENERADORES_ECONOMIA_POR_CATEGORIA,
  GENERADORES_ECONOMIA_POR_CLAVE,
  getGeneradorEconomia,
  getGeneradorEconomiaPorClave,
} from "./economia/indexEconomia";

/**
 * Flujo recomendado: seed (backend) → PRNG → generador.
 * 1) El backend envía el seed determinístico.
 * 2) Se crea el PRNG con ese seed.
 * 3) Se pasa el PRNG a los generadores (valores, orden, distractores).
 */
export const createGeneratorRegistry = (seed: string) => {
  const prng = createPrng(seed);
  return {
    prng,
    basic: GENERADORES_BASIC,
    matematicas: GENERATORS_BY_TEMA,
    fisica: createGeneradoresFisicaPorId(prng),
    quimica: GENERADORES_QUIMICA,
    economia: GENERADORES_ECONOMIA_POR_CLAVE,
  };
};

export type GeneratorRegistry = ReturnType<typeof createGeneratorRegistry>;
export type SeededPrng = PRNG;
