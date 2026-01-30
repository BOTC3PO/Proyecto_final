import { GENERADORES_BASIC, GENERADORES_BASIC_DESCRIPTORES } from "./basic";
import { GENERADORES_MATEMATICAS_POR_TEMA, GENERATORS_BY_TEMA } from "./matematicas";
import { createGeneradoresFisicaDescriptorPorId, createGeneradoresFisicaPorId } from "./fisica/indexFisica";
import { GENERADORES_QUIMICA, GENERADORES_QUIMICA_DESCRIPTORES } from "./quimica/indexQuimica";
import { GENERADORES_ECONOMIA_DESCRIPTORES, GENERADORES_ECONOMIA_POR_CLAVE } from "./economia/indexEconomia";
import { createPrng, type PRNG } from "./core/prng";

export {
  BASIC_TEMPLATES,
  GENERADORES_BASIC,
  GENERADORES_BASIC_DESCRIPTORES,
  getGeneradorBasic,
} from "./basic";
export type { QuizTemplate, QuizInstance } from "./basic";

export {
  GENERADORES_MATEMATICAS_POR_TEMA,
  GENERATORS_BY_TEMA,
  getGeneratorPorTema,
} from "./matematicas";

export {
  createGeneradoresFisica,
  createGeneradoresFisicaDescriptorPorId,
  createGeneradoresFisicaPorId,
} from "./fisica/indexFisica";

export { GENERADORES_QUIMICA, GENERADORES_QUIMICA_DESCRIPTORES } from "./quimica/indexQuimica";

export {
  GENERADORES_CONTABILIDAD,
  GENERADORES_FINANZAS,
  GENERADORES_ECONOMIA_AR,
  GENERADORES_ECONOMIA,
  GENERADORES_ECONOMIA_POR_CATEGORIA,
  GENERADORES_ECONOMIA_POR_CLAVE,
  GENERADORES_ECONOMIA_DESCRIPTORES,
  getGeneradorEconomia,
  getGeneradorEconomiaPorClave,
} from "./economia/indexEconomia";

export const GENERADORES_POR_MATERIA = (prng: PRNG) => ({
  basic: GENERADORES_BASIC_DESCRIPTORES,
  matematicas: GENERADORES_MATEMATICAS_POR_TEMA,
  fisica: createGeneradoresFisicaDescriptorPorId(prng),
  quimica: GENERADORES_QUIMICA_DESCRIPTORES,
  economia: GENERADORES_ECONOMIA_DESCRIPTORES,
});

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
    generadoresPorMateria: GENERADORES_POR_MATERIA(prng),
    basic: GENERADORES_BASIC,
    matematicas: GENERATORS_BY_TEMA,
    fisica: createGeneradoresFisicaPorId(prng),
    quimica: GENERADORES_QUIMICA,
    economia: GENERADORES_ECONOMIA_POR_CLAVE,
  };
};

export type GeneratorRegistry = ReturnType<typeof createGeneratorRegistry>;
export type SeededPrng = PRNG;
