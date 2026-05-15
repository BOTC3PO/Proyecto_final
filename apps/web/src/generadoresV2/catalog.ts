import { DeterministicPrng } from "./core/prng";
import type { PRNG } from "./core/prng";
import type { GeneratorDescriptor } from "./core/types";
import { getDescriptoresBiologia } from "./biologia/index";
import { getDescriptoresFisica } from "./fisica/index";
import { getDescriptoresMatematicas } from "./matematicas/index";
import { getDescriptoresQuimica } from "./quimica/index";
import { getDescriptoresEconomia } from "./economia/index";
import { getDescriptoresInformatica } from "./informatica/index";

export type CatalogItem = {
  id: string;
  materia: string;
  label: string;
  subtipos: { id: string; label: string; tieneGrafico?: boolean }[];
};

const GENERATOR_LABELS: Record<string, string> = {
  "biologia/biologia":             "Biología — General",
  "informatica/informatica":       "Informática — General",
  "fisica/cinematica":             "Física — Cinemática",
  "fisica/dinamica":               "Física — Dinámica",
  "fisica/electricidad":           "Física — Electricidad",
  "fisica/energia":                "Física — Energía",
  "fisica/fluidos":                "Física — Fluidos",
  "fisica/ondas":                  "Física — Ondas",
  "fisica/termodinamica":          "Física — Termodinámica",
  "quimica/acido_base":            "Química — Ácido-Base",
  "quimica/gases":                 "Química — Gases",
  "quimica/estequiometria":        "Química — Estequiometría",
  "quimica/termoquimica":          "Química — Termoquímica",
  "quimica/atomos_enlaces":        "Química — Átomos y enlaces",
  "quimica/seguridad":             "Química — Seguridad",
  "quimica/equilibrio":            "Química — Equilibrio",
  "matematicas/aritmetica":        "Matemáticas — Aritmética",
  "matematicas/algebra":           "Matemáticas — Álgebra",
  "matematicas/calculo":           "Matemáticas — Cálculo",
  "matematicas/analisis_avanzado": "Matemáticas — Análisis avanzado",
  "economia/economia_general":     "Economía — General",
  "economia/economia_ar":          "Economía — Argentina",
  "economia/finanzas":             "Economía — Finanzas personales",
  "economia/contabilidad":         "Economía — Contabilidad",
  "basic/quiz_generator":          "General — Banco de preguntas",
};

const MATERIA_LABELS: Record<string, string> = {
  biologia:   "Biología",
  fisica:     "Física",
  matematicas: "Matemáticas",
  quimica:    "Química",
  economia:   "Economía",
  informatica: "Informática",
};

function labelFromId(subtipoId: string): string {
  if (subtipoId === subtipoId.toUpperCase()) return subtipoId;
  return subtipoId.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
}

export function getStaticCatalog(): CatalogItem[] {
  const prng = new DeterministicPrng(0);
  const all: GeneratorDescriptor[] = [
    ...getDescriptoresBiologia(prng),
    ...getDescriptoresFisica(prng),
    ...getDescriptoresMatematicas(prng),
    ...getDescriptoresQuimica(prng),
    ...getDescriptoresEconomia(prng),
    ...getDescriptoresInformatica(prng),
  ];
  return all.map((d) => ({
    id: d.id,
    materia: MATERIA_LABELS[d.materia as string] ?? d.materia,
    label: GENERATOR_LABELS[d.id] ?? d.id,
    subtipos: d.subtipos.map((s) => ({ id: s, label: labelFromId(s) })),
  }));
}

export function getDescriptoresFromModule(
  mod: unknown,
  prng: PRNG
): GeneratorDescriptor[] {
  const m = mod as Record<string, unknown>;
  for (const fnName of [
    "getDescriptores",
    "getDescriptoresBiologia",
    "getDescriptoresFisica",
    "getDescriptoresMatematicas",
    "getDescriptoresQuimica",
    "getDescriptoresEconomia",
    "getDescriptoresInformatica",
  ]) {
    if (typeof m[fnName] === "function") {
      return (m[fnName] as (p: PRNG) => GeneratorDescriptor[])(prng);
    }
  }
  return [];
}
