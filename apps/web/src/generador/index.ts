import { GENERADORES_BASIC } from "./basic";
import { GENERATORS_BY_TEMA } from "./matematicas";
import { GENERADORES_FISICA_POR_ID } from "./fisica/indexFisica";
import { GENERADORES_QUIMICA } from "./quimica/indexQuimica";
import { GENERADORES_ECONOMIA_POR_CLAVE } from "./economia/indexEconomia";

export { BASIC_TEMPLATES, GENERADORES_BASIC, getGeneradorBasic } from "./basic";
export type { QuizTemplate, QuizInstance } from "./basic";

export { GENERATORS_BY_TEMA, getGeneratorPorTema } from "./matematicas";

export { GENERADORES_FISICA, GENERADORES_FISICA_POR_ID } from "./fisica/indexFisica";

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

export const GENERADORES_POR_MATERIA = {
  basic: GENERADORES_BASIC,
  matematicas: GENERATORS_BY_TEMA,
  fisica: GENERADORES_FISICA_POR_ID,
  quimica: GENERADORES_QUIMICA,
  economia: GENERADORES_ECONOMIA_POR_CLAVE,
};
