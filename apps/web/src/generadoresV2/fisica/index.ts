import { crearCalculadoraFisica } from "./calculadora";
import { CinematicaGenerator } from "./Cinematica";
import { DinamicaGenerator } from "./Dinamica";
import { EnergiaGenerator } from "./Energia";
import { TermodinamicaGenerator } from "./Termodinamica";
import { ElectricidadGenerator } from "./Electricidad";
import { OndasGenerator } from "./Ondas";
import { FluidosGenerator } from "./Fluidos";
import type { PRNG } from "../core/prng";
import type { GeneratorDescriptor } from "../core/types";

export const FISICA_GENERADORES = [
  CinematicaGenerator,
  DinamicaGenerator,
  EnergiaGenerator,
  TermodinamicaGenerator,
  ElectricidadGenerator,
  OndasGenerator,
  FluidosGenerator,
];

export function crearGeneradoresFisica(prng: PRNG) {
  const calc = crearCalculadoraFisica();
  return FISICA_GENERADORES.map(G => new G(prng, calc));
}

export function getDescriptoresFisica(prng: PRNG): GeneratorDescriptor[] {
  return crearGeneradoresFisica(prng).map(g => g.toDescriptor());
}
