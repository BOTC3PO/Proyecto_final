import { DeterministicPrng } from "./core/prng";
import type { PRNG } from "./core/prng";
import type { GeneratorDescriptor } from "./core/types";
import { getDescriptoresBiologia } from "./biologia/index";
import { getDescriptoresFisica } from "./fisica/index";
import { getDescriptoresMatematicas } from "./matematicas/index";
import { getDescriptoresQuimica } from "./quimica/index";
import { getDescriptoresEconomia } from "./economia/index";
import { getDescriptoresInformatica } from "./informatica/index";
import { getDescriptoresBasic } from "./basic/banco";

export type CatalogItem = {
  id: string;
  materia: string;
  label: string;
  subtipos: { id: string; label: string; tieneGrafico?: boolean; variablesDisponibles?: string[] }[];
  enunciadosPersonalizados?: Record<string, string>;
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

/**
 * F6-06 — subtipos retirados del catálogo de CREACIÓN.
 *
 * Estos 6 subtipos (los upgrades PARAMETRIZABLE de F6-05) ahora tienen un
 * reemplazo cableado como plantilla VBLang OFICIAL (F6-01,
 * `PlantillaEjercicio` con `ownerUserId: SYSTEM_OWNER_ID`), por lo que ya no
 * se ofrecen como "generador" para cuestionarios nuevos. El `.ts` original
 * NO se modifica: `generarEjercicio(subtipo, ...)` sigue funcionando para
 * quizzes legacy que ya referencian estos subtipos (ver
 * `BaseGenerador.toDescriptor()` — `generate()` con `subtipo` explícito no
 * pasa por `this.subtipos`).
 *
 * Los ~55 subtipos BANCO de F6-02/F6-03 NO se retiran todavía: sus bancos
 * (`BANCOS_*`) no están cableados en ningún catálogo/UI de creación
 * (`registerBancosXxx()` solo se llama desde sus propios `__tests__`), así
 * que retirarlos dejaría ese contenido sin forma de crearse. Ese wiring es
 * un prerrequisito para su retiro futuro.
 */
const SUBTIPOS_RETIRADOS: Record<string, string[]> = {
  "biologia/biologia": ["genetica_mendel", "piramide_biomasas"],
  "informatica/informatica": ["algebra_booleana"],
  "quimica/atomos_enlaces": ["particulas_subatomicas", "configuracion_electronica"],
  "matematicas/aritmetica": ["probabilidad_simple"],
};

export function getStaticCatalog(): CatalogItem[] {
  const prng = new DeterministicPrng(0);
  const all: GeneratorDescriptor[] = [
    ...getDescriptoresBiologia(prng),
    ...getDescriptoresFisica(prng),
    ...getDescriptoresMatematicas(prng),
    ...getDescriptoresQuimica(prng),
    ...getDescriptoresEconomia(prng),
    ...getDescriptoresInformatica(prng),
    // WO08: bancos hand-authored registrados (vacío si no hay ninguno).
    ...getDescriptoresBasic(prng),
  ];
  return all.map((d) => {
    const retirados = SUBTIPOS_RETIRADOS[d.id] ?? [];
    return {
      id: d.id,
      materia: MATERIA_LABELS[d.materia as string] ?? d.materia,
      label: GENERATOR_LABELS[d.id] ?? d.id,
      subtipos: d.subtipos
        .filter((s) => !retirados.includes(s))
        .map((s) => ({ id: s, label: labelFromId(s) })),
    };
  });
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
