import { DeterministicPrng } from "../generadoresV2/core/prng";
import type { GeneratorDescriptor } from "../generadoresV2/core/types";
import { getDescriptoresBiologia } from "../generadoresV2/biologia/index";
import { getDescriptoresEconomia } from "../generadoresV2/economia/index";
import { getDescriptoresFisica } from "../generadoresV2/fisica/index";
import { getDescriptoresInformatica } from "../generadoresV2/informatica/index";
import { getDescriptoresMatematicas } from "../generadoresV2/matematicas/index";
import { getDescriptoresQuimica } from "../generadoresV2/quimica/index";

export interface GeneradorInfo {
  id: string;
  materia: string;
  materiaLabel: string;
  subtipos: string[];
}

const MATERIA_LABELS: Record<string, string> = {
  biologia: "Biología",
  fisica: "Física",
  matematicas: "Matemáticas",
  quimica: "Química",
  economia: "Economía",
  informatica: "Informática",
};

let cached: GeneradorInfo[] | null = null;

export function listGeneradores(): GeneradorInfo[] {
  if (cached) return cached;
  const prng = new DeterministicPrng("picker");
  const all: GeneratorDescriptor[] = [
    ...getDescriptoresBiologia(prng),
    ...getDescriptoresFisica(prng),
    ...getDescriptoresMatematicas(prng),
    ...getDescriptoresQuimica(prng),
    ...getDescriptoresEconomia(prng),
    ...getDescriptoresInformatica(prng),
  ];
  cached = all.map((d) => ({
    id: d.id,
    materia: String(d.materia),
    materiaLabel: MATERIA_LABELS[String(d.materia)] ?? String(d.materia),
    subtipos: d.subtipos,
  }));
  return cached;
}
