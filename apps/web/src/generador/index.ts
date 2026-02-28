import { GENERADORES_BASIC, GENERADORES_BASIC_DESCRIPTORES } from "./basic";
import { GENERADORES_MATEMATICAS_POR_TEMA, GENERATORS_BY_TEMA } from "./matematicas";
import { createGeneradoresFisicaDescriptorPorId, createGeneradoresFisicaPorId } from "./fisica/indexFisica";
import { GENERADORES_QUIMICA, GENERADORES_QUIMICA_DESCRIPTORES } from "./quimica/indexQuimica";
import { GENERADORES_ECONOMIA_DESCRIPTORES, GENERADORES_ECONOMIA_POR_CLAVE } from "./economia/indexEconomia";
import { GENERADORES_GEOGRAFIA_DESCRIPTORES, getGeneradorGeografia } from "./geografia/indexGeografia";
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
  geografia: GENERADORES_GEOGRAFIA_DESCRIPTORES,
  lengua_espanola: GENERADORES_LENGUA_ESP_DESCRIPTORES,
  lengua_inglesa: GENERADORES_LENGUA_ENG_DESCRIPTORES,
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
    geografia: getGeneradorGeografia,
    lengua_espanola: getGeneradorLenguaEspanola,
    lengua_inglesa: getGeneradorLenguaInglesa,
  };
};

export type GeneratorRegistry = ReturnType<typeof createGeneratorRegistry>;
export type SeededPrng = PRNG;
