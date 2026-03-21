export { ContabilidadGenerator } from "./Contabilidad";
export { FinanzasGenerator } from "./Finanzas";
export { EconomiaARGenerator } from "./EconomiaAR";
export { EconomiaGeneralGenerator } from "./EconomiaGeneral";

import type { PRNG } from "../core/prng";
import type { GeneratorDescriptor } from "../core/types";
import { ContabilidadGenerator } from "./Contabilidad";
import { FinanzasGenerator } from "./Finanzas";
import { EconomiaARGenerator } from "./EconomiaAR";
import { EconomiaGeneralGenerator } from "./EconomiaGeneral";

export const ECONOMIA_GENERADORES = [
  ContabilidadGenerator,
  FinanzasGenerator,
  EconomiaARGenerator,
  EconomiaGeneralGenerator,
];

export function crearGeneradoresEconomia(prng: PRNG) {
  return ECONOMIA_GENERADORES.map(G => new G(prng));
}

export function getDescriptoresEconomia(prng: PRNG): GeneratorDescriptor[] {
  return crearGeneradoresEconomia(prng).map(g => g.toDescriptor());
}
