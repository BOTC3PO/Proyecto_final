// indexLenguaInglesa.ts — Módulo de Lengua Inglesa (secondary level)
//
// Same generic architecture as lengua_espanola and geografia.
// Question types supported: mc, tf, match, fill-blank

import { QuizGenerator } from "../basic/basicGenerador";
import type { QuizTemplate, Question } from "../basic/types";
import type { GeneratorDescriptor } from "../core/types";
import type { QuizInstance } from "../basic/types";
import { getEnunciadoSync, precargarTemaPorId, registrarSlug } from "./catalogoApi";

export interface LenguaInglesaTemaCatalogo {
  idTema: number;
  slug: string;
  id: string;
  titulo: string;
  eje: string;
  tags: readonly string[];
}

import { TEMA_PARTS_OF_SPEECH } from "./tema01_parts_of_speech";
import { TEMA_VERB_TENSES_SIMPLE } from "./tema02_verb_tenses_simple";
import { TEMA_VERB_TENSES_CONTINUOUS_PERFECT } from "./tema03_verb_tenses_continuous_perfect";
import { TEMA_SUBJECT_VERB_AGREEMENT } from "./tema04_subject_verb_agreement";
import { TEMA_SENTENCE_STRUCTURE } from "./tema05_sentence_structure";
import { TEMA_QUESTIONS_NEGATIONS } from "./tema06_questions_negations";
import { TEMA_ACTIVE_PASSIVE_VOICE } from "./tema07_active_passive_voice";
import { TEMA_COMPARATIVES_SUPERLATIVES } from "./tema08_comparatives_superlatives";
import { TEMA_SPELLING_MECHANICS } from "./tema09_spelling_mechanics";
import { TEMA_MODAL_VERBS } from "./tema10_modal_verbs";
import { TEMA_PHRASAL_VERBS_CONTRACTIONS } from "./tema11_phrasal_verbs_contractions";

const TODOS_LOS_TEMAS: LenguaInglesaTemaCatalogo[] = [
  TEMA_PARTS_OF_SPEECH,
  TEMA_VERB_TENSES_SIMPLE,
  TEMA_VERB_TENSES_CONTINUOUS_PERFECT,
  TEMA_SUBJECT_VERB_AGREEMENT,
  TEMA_SENTENCE_STRUCTURE,
  TEMA_QUESTIONS_NEGATIONS,
  TEMA_ACTIVE_PASSIVE_VOICE,
  TEMA_COMPARATIVES_SUPERLATIVES,
  TEMA_SPELLING_MECHANICS,
  TEMA_MODAL_VERBS,
  TEMA_PHRASAL_VERBS_CONTRACTIONS,
];

TODOS_LOS_TEMAS.forEach(({ idTema, slug }) => registrarSlug(idTema, slug));

export const LENGUA_ENG_TEMAS_POR_ID: Record<number, LenguaInglesaTemaCatalogo> =
  Object.fromEntries(TODOS_LOS_TEMAS.map((t) => [t.idTema, t]));

export const LENGUA_ENG_TEMAS_POR_SLUG: Record<string, LenguaInglesaTemaCatalogo> =
  Object.fromEntries(TODOS_LOS_TEMAS.map((t) => [t.slug, t]));

const SUPPORTED_TYPES = new Set(["mc", "tf", "match", "map-select", "fill-blank"]);

function isValidQuestion(item: unknown): item is Question {
  if (!item || typeof item !== "object" || Array.isArray(item)) return false;
  const q = item as Record<string, unknown>;
  return (
    typeof q.id === "string" &&
    typeof q.type === "string" &&
    SUPPORTED_TYPES.has(q.type) &&
    typeof q.prompt === "string"
  );
}

function buildTemplate(tema: LenguaInglesaTemaCatalogo): QuizTemplate {
  const rawPool = getEnunciadoSync(tema.slug);
  const pool = rawPool.filter(isValidQuestion);

  return {
    schema: "quiz-basic/v1",
    metadata: {
      id: tema.id,
      materia: "lengua_inglesa",
      titulo: tema.titulo,
      idioma: "en",
      tags: ["lengua_inglesa", "secondary", ...tema.tags],
    },
    settings: {
      poolSize: pool.length,
      displayCount: pool.length,
      displayCountDefault: Math.min(5, Math.max(1, pool.length)),
      feedbackPolicyDefault: "immediate",
      selectionDefault: { mode: "random", seeded: true },
    },
    pool,
  };
}

export function getGeneradorLenguaInglesa(idTema: number): QuizGenerator {
  const tema = LENGUA_ENG_TEMAS_POR_ID[idTema];
  if (!tema) throw new Error(`No topic found for lengua inglesa id ${idTema}.`);
  return new QuizGenerator(buildTemplate(tema));
}

export { precargarTemaPorId as precargarTemaLenguaInglesaPorId };

const LENGUA_ENG_GENERATOR_VERSION = 1;

export const GENERADORES_LENGUA_ENG_DESCRIPTORES: Record<
  number,
  GeneratorDescriptor<QuizInstance, Parameters<QuizGenerator["generate"]>>
> = Object.fromEntries(
  TODOS_LOS_TEMAS.map((tema) => {
    const generatorId = `lengua_inglesa:${tema.idTema}`;
    return [
      tema.idTema,
      {
        id: generatorId,
        version: LENGUA_ENG_GENERATOR_VERSION,
        generate: (...args) => ({
          ...getGeneradorLenguaInglesa(tema.idTema).generate(...args),
          generatorId,
          generatorVersion: LENGUA_ENG_GENERATOR_VERSION,
        }),
      },
    ];
  })
);
