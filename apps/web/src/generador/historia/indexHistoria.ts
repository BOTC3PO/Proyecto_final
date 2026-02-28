// indexHistoria.ts — Historia (nivel secundario)
//
// Los temas NO están hardcodeados: los crea el admin via gobernanza o el
// creador de módulos. El sistema los sirve desde la colección generadores_admin
// (DB) a través de /api/consignas/historia, sin necesidad de archivos en disco.
//
// Flujo para agregar un tema nuevo:
//   1. Admin crea propuesta tipo CREATE_GENERATOR { subject: "historia", topic: "NN_slug", enunciado: [...] }
//   2. La propuesta pasa por gobernanza y se aprueba
//   3. El backend lo sirve automáticamente desde /api/consignas/historia
//   4. El frontend lo carga con precargarHistoriaTema(slug)

import { QuizGenerator } from "../basic/basicGenerador";
import type { QuizTemplate, Question, QuizInstance } from "../basic/types";
import type { GeneratorDescriptor } from "../core/types";
import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

export interface HistoriaTemaCatalogo {
  idTema: number;
  slug: string;
  id: string;
  titulo: string;
  eje: string;
  tags: readonly string[];
}

// ── Derivar metadata desde el slug ─────────────────────────────────────────────
// El slug tiene formato "NN_nombre_del_tema". Ejemplo: "01_revolucion_francesa"
// El título y eje se derivan del slug hasta que el admin los sobreescriba via limits.json

function slugToTema(slug: string): HistoriaTemaCatalogo {
  const match = slug.match(/^(\d{2})_(.+)$/);
  const idTema = match ? parseInt(match[1], 10) : 0;
  const nombre = match ? match[2].replace(/_/g, " ") : slug;
  const titulo = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  return {
    idTema,
    slug,
    id: `hist_${slug}`,
    titulo,
    eje: "Historia",
    tags: [nombre.replace(/ /g, "_"), "historia", "secundario"] as const,
  };
}

// ── Caches ──────────────────────────────────────────────────────────────────────

const bySlug = new Map<string, HistoriaTemaCatalogo>();
const byId = new Map<number, string>(); // idTema → slug

// ── Listado y precarga ──────────────────────────────────────────────────────────

export async function listarTemasHistoria(): Promise<HistoriaTemaCatalogo[]> {
  const slugs = await listarTemas("historia");
  const temas = slugs.map((s) => {
    const cached = bySlug.get(s);
    if (cached) return cached;
    const tema = slugToTema(s);
    bySlug.set(s, tema);
    byId.set(tema.idTema, s);
    return tema;
  });
  return temas;
}

export async function precargarHistoriaTema(slug: string): Promise<void> {
  if (!bySlug.has(slug)) {
    bySlug.set(slug, slugToTema(slug));
  }
  await precargarConsigna("historia", slug);
}

export async function precargarHistoriaTemaById(idTema: number): Promise<void> {
  let slug = byId.get(idTema);
  if (!slug) {
    await listarTemasHistoria();
    slug = byId.get(idTema);
  }
  if (!slug) throw new Error(`No existe tema de historia con id ${idTema}.`);
  await precargarHistoriaTema(slug);
}

// ── Construcción del template ───────────────────────────────────────────────────

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

function buildTemplate(tema: HistoriaTemaCatalogo): QuizTemplate {
  const consigna = getConsignaSync("historia", tema.slug);

  // Si limits.json define un título, usarlo; de lo contrario usar el derivado del slug
  const limitsTitle =
    consigna.limits &&
    typeof (consigna.limits as Record<string, unknown>).titulo === "string"
      ? (consigna.limits as Record<string, string>).titulo
      : null;

  const rawPool = Array.isArray(consigna.enunciado) ? consigna.enunciado : [];
  const pool = rawPool.filter(isValidQuestion);

  return {
    schema: "quiz-basic/v1",
    metadata: {
      id: tema.id,
      materia: "historia",
      titulo: limitsTitle ?? tema.titulo,
      idioma: "es",
      tags: ["historia", "secundario", ...tema.tags],
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

// ── API pública de generadores ─────────────────────────────────────────────────

export function getGeneradorHistoria(slug: string): QuizGenerator {
  const tema = bySlug.get(slug) ?? slugToTema(slug);
  return new QuizGenerator(buildTemplate(tema));
}

export function getGeneradorHistoriaById(idTema: number): QuizGenerator {
  const slug = byId.get(idTema);
  if (!slug) {
    throw new Error(
      `Historia: tema id=${idTema} no cargado. Llame primero a precargarHistoriaTemaById(${idTema}).`
    );
  }
  return getGeneradorHistoria(slug);
}

// ── Descriptores dinámicos ─────────────────────────────────────────────────────
// Se populan llamando a initHistoriaDescriptores() después de listar temas.

const HISTORIA_VERSION = 1;

export const GENERADORES_HISTORIA_DESCRIPTORES: Record<
  string,
  GeneratorDescriptor<QuizInstance, Parameters<QuizGenerator["generate"]>>
> = {};

export async function initHistoriaDescriptores(): Promise<void> {
  const temas = await listarTemasHistoria();
  for (const tema of temas) {
    const generatorId = `historia:${tema.slug}`;
    GENERADORES_HISTORIA_DESCRIPTORES[tema.slug] = {
      id: generatorId,
      version: HISTORIA_VERSION,
      generate: (...args) => ({
        ...getGeneradorHistoria(tema.slug).generate(...args),
        generatorId,
        generatorVersion: HISTORIA_VERSION,
      }),
    };
  }
}
