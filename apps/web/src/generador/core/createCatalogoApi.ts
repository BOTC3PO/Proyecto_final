import type { Subject } from "../consignasApi";
import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

export function createCatalogoApi(materia: Subject) {
  const slugPorIdTema = new Map<number, string>();

  function getEnunciadoSync(slug: string): unknown[] {
    const enunciado = getConsignaSync(materia, slug).enunciado;
    return Array.isArray(enunciado) ? enunciado : [];
  }

  async function listar(): Promise<string[]> {
    return listarTemas(materia);
  }

  async function precargarTema(slug: string): Promise<void> {
    await precargarConsigna(materia, slug);
  }

  async function precargarTemaPorId(idTema: number): Promise<void> {
    let slug = slugPorIdTema.get(idTema);
    if (!slug) {
      const prefijo = `${String(idTema).padStart(2, "0")}_`;
      const temas = await listar();
      slug = temas.find((t) => t.startsWith(prefijo));
      if (!slug) throw new Error(`No existe carpeta de consignas para ${materia} tema ${idTema}.`);
      slugPorIdTema.set(idTema, slug);
    }
    await precargarTema(slug);
  }

  function getSlugSync(idTema: number): string | null {
    return slugPorIdTema.get(idTema) ?? null;
  }

  function registrarSlug(idTema: number, slug: string): void {
    slugPorIdTema.set(idTema, slug);
  }

  return { getEnunciadoSync, listar, precargarTema, precargarTemaPorId, getSlugSync, registrarSlug };
}
