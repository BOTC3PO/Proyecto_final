export { InformaticaGenerator } from "./Informatica";

import type { PRNG } from "../core/prng";
import type { GeneratorDescriptor } from "../core/types";
import { InformaticaGenerator } from "./Informatica";

export const INFORMATICA_GENERADORES = [InformaticaGenerator];

export function crearGeneradoresInformatica(prng: PRNG) {
  return INFORMATICA_GENERADORES.map(G => new G(prng));
}

export function getDescriptoresInformatica(prng: PRNG): GeneratorDescriptor[] {
  return crearGeneradoresInformatica(prng).map(g => g.toDescriptor());
}
