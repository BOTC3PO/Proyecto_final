export { AritmeticaGenerator } from "./Aritmetica";
export { AlgebraGenerator } from "./Algebra";
export { AnalisisYAvanzadoGenerator } from "./AnalisisYAvanzado";
export { CalculoGenerator } from "./Calculo";

import type { PRNG } from "../core/prng";
import type { GeneratorDescriptor } from "../core/types";
import { AritmeticaGenerator } from "./Aritmetica";
import { AlgebraGenerator } from "./Algebra";
import { AnalisisYAvanzadoGenerator } from "./AnalisisYAvanzado";
import { CalculoGenerator } from "./Calculo";

export function crearGeneradoresMatematicas(prng: PRNG) {
  return [
    new AritmeticaGenerator(prng),
    new AlgebraGenerator(prng),
    new AnalisisYAvanzadoGenerator(prng),
    new CalculoGenerator(prng),
  ];
}

export function getDescriptoresMatematicas(prng: PRNG): GeneratorDescriptor[] {
  return crearGeneradoresMatematicas(prng).map(g => g.toDescriptor());
}
