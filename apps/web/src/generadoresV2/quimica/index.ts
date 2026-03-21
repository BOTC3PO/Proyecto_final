import { EstequiometriaGenerator } from "./Estequiometria";
import { GasesGenerator } from "./Gases";
import { TermoquimicaGenerator } from "./Termoquimica";
import { AcidoBaseGenerator } from "./AcidoBase";
import { EquilibrioGenerator } from "./Equilibrio";
import { AtomosEnlacesGenerator } from "./AtomosEnlaces";
import { SeguridadGenerator } from "./Seguridad";
import type { PRNG } from "../core/prng";
import type { GeneratorDescriptor } from "../core/types";

export const QUIMICA_GENERADORES = [
  EstequiometriaGenerator,
  GasesGenerator,
  TermoquimicaGenerator,
  AcidoBaseGenerator,
  EquilibrioGenerator,
  AtomosEnlacesGenerator,
  SeguridadGenerator,
];

export function crearGeneradoresQuimica(prng: PRNG) {
  return QUIMICA_GENERADORES.map(G => new G(prng));
}

export function getDescriptoresQuimica(prng: PRNG): GeneratorDescriptor[] {
  return crearGeneradoresQuimica(prng).map(g => g.toDescriptor());
}
