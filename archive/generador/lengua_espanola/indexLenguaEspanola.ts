// indexLenguaEspanola.ts — Módulo de Lengua Española (nivel secundario)
//
// Arquitectura "módulo genérico":
//   - Todos los temas usan el mismo QuizGenerator (basicGenerador.ts)
//   - Los enunciados viven en la API: api/src/generadores/lengua_espanola/{slug}/enunciado.json
//   - Tipos soportados: mc, tf, match, fill-blank

import { QuizGenerator } from "../basic/basicGenerador";
import type { QuizTemplate, Question } from "../basic/types";
import type { GeneratorDescriptor } from "../core/types";
import type { QuizInstance } from "../basic/types";
import { getEnunciadoSync, precargarTemaPorId, registrarSlug } from "./catalogoApi";

export interface LenguaEspanolaTemaCatalogo {
  idTema: number;
  slug: string;
  id: string;
  titulo: string;
  eje: string;
  tags: readonly string[];
}

import { TEMA_CATEGORIAS_GRAMATICALES } from "./tema01_categorias_gramaticales";
import { TEMA_MORFOLOGIA_VERBAL_INDICATIVO } from "./tema02_morfologia_verbal_indicativo";
import { TEMA_MORFOLOGIA_VERBAL_SUBJUNTIVO } from "./tema03_morfologia_verbal_subjuntivo";
import { TEMA_CONCORDANCIA } from "./tema04_concordancia";
import { TEMA_SUJETO_PREDICADO } from "./tema05_sujeto_predicado";
import { TEMA_COMPLEMENTOS } from "./tema06_complementos";
import { TEMA_VOZ_ACTIVA_PASIVA } from "./tema07_voz_activa_pasiva";
import { TEMA_ORACIONES_NEGATIVAS_INTERROGATIVAS } from "./tema08_oraciones_negativas_interrogativas";
import { TEMA_TILDACION } from "./tema09_tildacion";
import { TEMA_ORTOGRAFIA_LETRAS } from "./tema10_ortografia_letras";
import { TEMA_PUNTUACION_MAYUSCULAS } from "./tema11_puntuacion_mayusculas";

const TODOS_LOS_TEMAS: LenguaEspanolaTemaCatalogo[] = [
  TEMA_CATEGORIAS_GRAMATICALES,
  TEMA_MORFOLOGIA_VERBAL_INDICATIVO,
  TEMA_MORFOLOGIA_VERBAL_SUBJUNTIVO,
  TEMA_CONCORDANCIA,
  TEMA_SUJETO_PREDICADO,
  TEMA_COMPLEMENTOS,
  TEMA_VOZ_ACTIVA_PASIVA,
  TEMA_ORACIONES_NEGATIVAS_INTERROGATIVAS,
  TEMA_TILDACION,
  TEMA_ORTOGRAFIA_LETRAS,
  TEMA_PUNTUACION_MAYUSCULAS,
];

TODOS_LOS_TEMAS.forEach(({ idTema, slug }) => registrarSlug(idTema, slug));

export const LENGUA_ESP_TEMAS_POR_ID: Record<number, LenguaEspanolaTemaCatalogo> =
  Object.fromEntries(TODOS_LOS_TEMAS.map((t) => [t.idTema, t]));

export const LENGUA_ESP_TEMAS_POR_SLUG: Record<string, LenguaEspanolaTemaCatalogo> =
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

function buildTemplate(tema: LenguaEspanolaTemaCatalogo): QuizTemplate {
  const rawPool = getEnunciadoSync(tema.slug);
  const pool = rawPool.filter(isValidQuestion);

  return {
    schema: "quiz-basic/v1",
    metadata: {
      id: tema.id,
      materia: "lengua_espanola",
      titulo: tema.titulo,
      idioma: "es",
      tags: ["lengua_espanola", "secundario", ...tema.tags],
    },
    settings: {
      poolSize: pool.length,
      displayCount: pool.length,
      displayCountDefault: Math.min(5, Math.max(1, pool.length)),
      feedbackPolicyDefault: "inmediato",
      selectionDefault: { mode: "random", seeded: true },
    },
    pool,
  };
}

export function getGeneradorLenguaEspanola(idTema: number): QuizGenerator {
  const tema = LENGUA_ESP_TEMAS_POR_ID[idTema];
  if (!tema) throw new Error(`No existe tema de lengua española con id ${idTema}.`);
  return new QuizGenerator(buildTemplate(tema));
}

export { precargarTemaPorId as precargarTemaLenguaEspanolaPorId };

const LENGUA_ESP_GENERATOR_VERSION = 1;

export const GENERADORES_LENGUA_ESP_DESCRIPTORES: Record<
  number,
  GeneratorDescriptor<QuizInstance, Parameters<QuizGenerator["generate"]>>
> = Object.fromEntries(
  TODOS_LOS_TEMAS.map((tema) => {
    const generatorId = `lengua_espanola:${tema.idTema}`;
    return [
      tema.idTema,
      {
        id: generatorId,
        version: LENGUA_ESP_GENERATOR_VERSION,
        generate: (...args) => ({
          ...getGeneradorLenguaEspanola(tema.idTema).generate(...args),
          generatorId,
          generatorVersion: LENGUA_ESP_GENERATOR_VERSION,
        }),
      },
    ];
  })
);
