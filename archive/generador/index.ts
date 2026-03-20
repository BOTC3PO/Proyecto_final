import { GENERADORES_BASIC, GENERADORES_BASIC_DESCRIPTORES } from "./basic";
import { createGeneradoresFisicaDescriptorPorId } from "./fisica/indexFisica";
import { GENERADORES_GEOGRAFIA_DESCRIPTORES, getGeneradorGeografia } from "./geografia/indexGeografia";
import { GENERADORES_HISTORIA_DESCRIPTORES, getGeneradorHistoria } from "./historia/indexHistoria";
import { GENERADORES_LENGUA_ESP_DESCRIPTORES, getGeneradorLenguaEspanola } from "./lengua_espanola/indexLenguaEspanola";
import { GENERADORES_LENGUA_ENG_DESCRIPTORES, getGeneradorLenguaInglesa } from "./lengua_inglesa/indexLenguaInglesa";
import { createPrng, type PRNG } from "./core/prng";

export {
  BASIC_TEMPLATES,
  GENERADORES_BASIC,
  GENERADORES_BASIC_DESCRIPTORES,
  getGeneradorBasic,
} from "./basic";
export type { QuizTemplate, QuizInstance } from "./basic";

export {
  getGeneratorPorTema,
  getDescriptorPorTema,
  MATEMATICAS_TEMA_MAX,
  TEMAS_MATEMATICAS_INFO,
} from "./matematicas";

export {
  createGeneradoresFisica,
  createGeneradoresFisicaDescriptorPorId,
  createGeneradoresFisicaPorId,
  getGeneradoresFisicaPorId,
  FISICA_GENERATOR_IDS,
} from "./fisica/indexFisica";

export {
  getGeneradorQuimica,
  getDescriptorQuimicaPorTema,
  QUIMICA_TEMA_MAX,
} from "./quimica/indexQuimica";

export {
  GENERADORES_GEOGRAFIA_DESCRIPTORES,
  GEOGRAFIA_TEMAS_POR_ID,
  GEOGRAFIA_TEMAS_POR_SLUG,
  getGeneradorGeografia,
  precargarTemaGeografiaPorId,
} from "./geografia/indexGeografia";

export {
  GENERADORES_LENGUA_ESP_DESCRIPTORES,
  LENGUA_ESP_TEMAS_POR_ID,
  LENGUA_ESP_TEMAS_POR_SLUG,
  getGeneradorLenguaEspanola,
  precargarTemaLenguaEspanolaPorId,
} from "./lengua_espanola/indexLenguaEspanola";

export {
  GENERADORES_LENGUA_ENG_DESCRIPTORES,
  LENGUA_ENG_TEMAS_POR_ID,
  LENGUA_ENG_TEMAS_POR_SLUG,
  getGeneradorLenguaInglesa,
  precargarTemaLenguaInglesaPorId,
} from "./lengua_inglesa/indexLenguaInglesa";

export {
  GENERADORES_HISTORIA_DESCRIPTORES,
  getGeneradorHistoria,
  getGeneradorHistoriaById,
  listarTemasHistoria,
  precargarHistoriaTema,
  precargarHistoriaTemaById,
  initHistoriaDescriptores,
} from "./historia/indexHistoria";

export {
  ECONOMIA_CLAVES_VALIDAS,
  getGeneradorEconomia,
  getGeneradorEconomiaPorClave,
  getDescriptorEconomiaPorClave,
} from "./economia/indexEconomia";

export const GENERADORES_POR_MATERIA = async (prng: PRNG) => ({
  basic: GENERADORES_BASIC_DESCRIPTORES,
  fisica: await createGeneradoresFisicaDescriptorPorId(prng),
  geografia: GENERADORES_GEOGRAFIA_DESCRIPTORES,
  // historia: GENERADORES_HISTORIA_DESCRIPTORES se popula dinámicamente via initHistoriaDescriptores()
  historia: GENERADORES_HISTORIA_DESCRIPTORES,
  lengua_espanola: GENERADORES_LENGUA_ESP_DESCRIPTORES,
  lengua_inglesa: GENERADORES_LENGUA_ENG_DESCRIPTORES,
});

/**
 * Flujo recomendado: seed (backend) → PRNG → generador.
 * 1) El backend envía el seed determinístico.
 * 2) Se crea el PRNG con ese seed.
 * 3) Se pasa el PRNG a los generadores (valores, orden, distractores).
 */
export const createGeneratorRegistry = async (seed: string) => {
  const prng = createPrng(seed);
  return {
    prng,
    generadoresPorMateria: await GENERADORES_POR_MATERIA(prng),
    basic: GENERADORES_BASIC,
    geografia: getGeneradorGeografia,
    historia: getGeneradorHistoria,
    lengua_espanola: getGeneradorLenguaEspanola,
    lengua_inglesa: getGeneradorLenguaInglesa,
  };
};

export type GeneratorRegistry = Awaited<ReturnType<typeof createGeneratorRegistry>>;
export type SeededPrng = PRNG;
