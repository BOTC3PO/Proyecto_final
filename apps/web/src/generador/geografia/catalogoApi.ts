// catalogoApi.ts — Geografía
// Carga los enunciados (pool de preguntas) desde la API por número de tema.
// El profesor escribe las preguntas en api/src/generadores/geografia/{slug}/enunciado.json

import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

const slugPorIdTema = new Map<number, string>();

// ── Acceso sincrónico (tras precargar) ──────────────────────────

/**
 * Devuelve el array raw del enunciado ya cargado en caché.
 * Si aún no fue precargado, devuelve [].
 */
export function getEnunciadoSync(slug: string): unknown[] {
  const enunciado = getConsignaSync("geografia", slug).enunciado;
  return Array.isArray(enunciado) ? enunciado : [];
}

// ── Listado y precarga ───────────────────────────────────────────

export async function listarTemasGeografia(): Promise<string[]> {
  return listarTemas("geografia");
}

export async function precargarTema(slug: string): Promise<void> {
  await precargarConsigna("geografia", slug);
}

// ── Resolución slug ↔ idTema ────────────────────────────────────

const resolveSlugPorId = async (idTema: number): Promise<string> => {
  const cached = slugPorIdTema.get(idTema);
  if (cached) return cached;

  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  const temas = await listarTemasGeografia();
  const slug = temas.find((t) => t.startsWith(prefijo));
  if (!slug) {
    throw new Error(`No existe carpeta de consignas para geografía tema ${idTema}.`);
  }
  slugPorIdTema.set(idTema, slug);
  return slug;
};

export async function precargarTemaPorId(idTema: number): Promise<void> {
  const slug = await resolveSlugPorId(idTema);
  await precargarTema(slug);
}

export function getSlugSync(idTema: number): string | null {
  return slugPorIdTema.get(idTema) ?? null;
}

/** Registra slug directamente sin llamar a la API (para uso en indexGeografia). */
export function registrarSlug(idTema: number, slug: string): void {
  slugPorIdTema.set(idTema, slug);
}
