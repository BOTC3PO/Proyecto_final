export { BiologiaGenerator } from "./Biologia";

import type { PRNG } from "../core/prng";
import type { GeneratorDescriptor } from "../core/types";
import { BiologiaGenerator } from "./Biologia";

export const BIOLOGIA_GENERADORES = [BiologiaGenerator];

export function crearGeneradoresBiologia(prng: PRNG) {
  return BIOLOGIA_GENERADORES.map(G => new G(prng));
}

export function getDescriptoresBiologia(prng: PRNG): GeneratorDescriptor[] {
  return crearGeneradoresBiologia(prng).map(g => g.toDescriptor());
}
