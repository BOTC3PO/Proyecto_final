// catalogoApi.ts — Lengua Española
import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

const slugPorIdTema = new Map<number, string>();

export function getEnunciadoSync(slug: string): unknown[] {
  const enunciado = getConsignaSync("lengua_espanola", slug).enunciado;
  return Array.isArray(enunciado) ? enunciado : [];
}

export async function listarTemasLenguaEspanola(): Promise<string[]> {
  return listarTemas("lengua_espanola");
}

export async function precargarTema(slug: string): Promise<void> {
  await precargarConsigna("lengua_espanola", slug);
}

const resolveSlugPorId = async (idTema: number): Promise<string> => {
  const cached = slugPorIdTema.get(idTema);
  if (cached) return cached;

  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  const temas = await listarTemasLenguaEspanola();
  const slug = temas.find((t) => t.startsWith(prefijo));
  if (!slug) {
    throw new Error(`No existe carpeta de consignas para lengua española tema ${idTema}.`);
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

export function registrarSlug(idTema: number, slug: string): void {
  slugPorIdTema.set(idTema, slug);
}
