// indexGeografia.ts — Módulo de Geografía (nivel secundario)
//
// Arquitectura "módulo genérico":
//   - Todos los temas usan el mismo QuizGenerator (basicGenerador.ts)
//   - Los enunciados viven en la API: api/src/generadores/geografia/{slug}/enunciado.json
//   - El profesor escribe las preguntas en JSON (mc / tf / match)
//   - Este archivo solo conoce el catálogo (idTema → slug, titulo, eje, tags)

import { QuizGenerator } from "../basic/basicGenerador";
import type { QuizTemplate, Question } from "../basic/types";
import type { GeneratorDescriptor } from "../core/types";
import type { QuizInstance } from "../basic/types";
import {
  getEnunciadoSync,
  precargarTemaPorId,
  registrarSlug,
} from "./catalogoApi";

// ── Tipo del catálogo ────────────────────────────────────────────

export interface GeografiaTemaCatalogo {
  idTema: number;
  slug: string;
  id: string;
  titulo: string;
  eje: string;
  tags: readonly string[];
}

// ── Catálogo de los 23 temas ────────────────────────────────────
// Importaciones mínimas: cada archivo solo exporta id/slug/titulo/eje/tags

import { TEMA_RELIEVE } from "./tema01_relieve";
import { TEMA_HIDROGRAFIA } from "./tema02_hidrografia";
import { TEMA_CLIMAS } from "./tema03_climas";
import { TEMA_BIOMAS } from "./tema04_biomas";
import { TEMA_PROCESOS_NATURALES } from "./tema05_procesos_naturales";
import { TEMA_ESTADOS_CAPITALES } from "./tema06_estados_capitales";
import { TEMA_FORMAS_GOBIERNO } from "./tema07_formas_gobierno";
import { TEMA_ORGANISMOS_INTERNACIONALES } from "./tema08_organismos_internacionales";
import { TEMA_FRONTERAS_DISPUTADAS } from "./tema09_fronteras_disputadas";
import { TEMA_EVOLUCION_MAPAS } from "./tema10_evolucion_mapas";
import { TEMA_DENSIDAD_POBLACIONAL } from "./tema11_densidad_poblacional";
import { TEMA_MIGRACIONES } from "./tema12_migraciones";
import { TEMA_URBANIZACION } from "./tema13_urbanizacion";
import { TEMA_ACTIVIDADES_ECONOMICAS } from "./tema14_actividades_economicas";
import { TEMA_INDICADORES_SOCIOECONOMICOS } from "./tema15_indicadores_socioeconomicos";
import { TEMA_COORDENADAS } from "./tema16_coordenadas";
import { TEMA_HUSOS_HORARIOS } from "./tema17_husos_horarios";
import { TEMA_ESCALAS_PROYECCIONES } from "./tema18_escalas_proyecciones";
import { TEMA_MAPAS_TEMATICOS } from "./tema19_mapas_tematicos";
import { TEMA_CAMBIO_CLIMATICO } from "./tema20_cambio_climatico";
import { TEMA_DEFORESTACION_DESERTIFICACION } from "./tema21_deforestacion_desertificacion";
import { TEMA_CONFLICTOS_RECURSOS } from "./tema22_conflictos_recursos";
import { TEMA_GLOBALIZACION } from "./tema23_globalizacion";

const TODOS_LOS_TEMAS: GeografiaTemaCatalogo[] = [
  TEMA_RELIEVE,
  TEMA_HIDROGRAFIA,
  TEMA_CLIMAS,
  TEMA_BIOMAS,
  TEMA_PROCESOS_NATURALES,
  TEMA_ESTADOS_CAPITALES,
  TEMA_FORMAS_GOBIERNO,
  TEMA_ORGANISMOS_INTERNACIONALES,
  TEMA_FRONTERAS_DISPUTADAS,
  TEMA_EVOLUCION_MAPAS,
  TEMA_DENSIDAD_POBLACIONAL,
  TEMA_MIGRACIONES,
  TEMA_URBANIZACION,
  TEMA_ACTIVIDADES_ECONOMICAS,
  TEMA_INDICADORES_SOCIOECONOMICOS,
  TEMA_COORDENADAS,
  TEMA_HUSOS_HORARIOS,
  TEMA_ESCALAS_PROYECCIONES,
  TEMA_MAPAS_TEMATICOS,
  TEMA_CAMBIO_CLIMATICO,
  TEMA_DEFORESTACION_DESERTIFICACION,
  TEMA_CONFLICTOS_RECURSOS,
  TEMA_GLOBALIZACION,
];

// Registra slugs en el catalogoApi para que precargarTemaPorId funcione sin red
TODOS_LOS_TEMAS.forEach(({ idTema, slug }) => registrarSlug(idTema, slug));

// ── Catálogo exportable ──────────────────────────────────────────

/** Lookup por idTema (1–23) */
export const GEOGRAFIA_TEMAS_POR_ID: Record<number, GeografiaTemaCatalogo> =
  Object.fromEntries(TODOS_LOS_TEMAS.map((t) => [t.idTema, t]));

/** Lookup por slug */
export const GEOGRAFIA_TEMAS_POR_SLUG: Record<string, GeografiaTemaCatalogo> =
  Object.fromEntries(TODOS_LOS_TEMAS.map((t) => [t.slug, t]));

// ── Validación de preguntas ──────────────────────────────────────

function isValidQuestion(item: unknown): item is Question {
  if (!item || typeof item !== "object" || Array.isArray(item)) return false;
  const q = item as Record<string, unknown>;
  return (
    typeof q.id === "string" &&
    typeof q.type === "string" &&
    (q.type === "mc" || q.type === "tf" || q.type === "match") &&
    typeof q.prompt === "string"
  );
}

// ── Builder de QuizTemplate ──────────────────────────────────────

function buildTemplate(tema: GeografiaTemaCatalogo): QuizTemplate {
  const rawPool = getEnunciadoSync(tema.slug);
  const pool = rawPool.filter(isValidQuestion);

  return {
    schema: "quiz-basic/v1",
    metadata: {
      id: tema.id,
      materia: "geografia",
      titulo: tema.titulo,
      idioma: "es",
      tags: ["geografia", "secundario", ...tema.tags],
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

// ── API pública ──────────────────────────────────────────────────

/**
 * Devuelve un QuizGenerator para el tema indicado.
 * Requiere que el tema haya sido precargado con `precargarTemaPorId(idTema)`.
 */
export function getGeneradorGeografia(idTema: number): QuizGenerator {
  const tema = GEOGRAFIA_TEMAS_POR_ID[idTema];
  if (!tema) throw new Error(`No existe tema de geografía con id ${idTema}.`);
  return new QuizGenerator(buildTemplate(tema));
}

/** Precarga el enunciado de un tema desde la API. */
export { precargarTemaPorId as precargarTemaGeografiaPorId };

// ── Descriptores (compatible con GENERADORES_POR_MATERIA) ────────

const GEOGRAFIA_GENERATOR_VERSION = 1;

export const GENERADORES_GEOGRAFIA_DESCRIPTORES: Record<
  number,
  GeneratorDescriptor<QuizInstance, Parameters<QuizGenerator["generate"]>>
> = Object.fromEntries(
  TODOS_LOS_TEMAS.map((tema) => {
    const generatorId = `geografia:${tema.idTema}`;
    return [
      tema.idTema,
      {
        id: generatorId,
        version: GEOGRAFIA_GENERATOR_VERSION,
        generate: (...args) => ({
          ...getGeneradorGeografia(tema.idTema).generate(...args),
          generatorId,
          generatorVersion: GEOGRAFIA_GENERATOR_VERSION,
        }),
      },
    ];
  })
);
