// catalogoApi.ts — Lengua Inglesa
import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

const slugPorIdTema = new Map<number, string>();

export function getEnunciadoSync(slug: string): unknown[] {
  const enunciado = getConsignaSync("lengua_inglesa", slug).enunciado;
  return Array.isArray(enunciado) ? enunciado : [];
}

export async function listarTemasLenguaInglesa(): Promise<string[]> {
  return listarTemas("lengua_inglesa");
}

export async function precargarTema(slug: string): Promise<void> {
  await precargarConsigna("lengua_inglesa", slug);
}

const resolveSlugPorId = async (idTema: number): Promise<string> => {
  const cached = slugPorIdTema.get(idTema);
  if (cached) return cached;

  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  const temas = await listarTemasLenguaInglesa();
  const slug = temas.find((t) => t.startsWith(prefijo));
  if (!slug) {
    throw new Error(`No existe carpeta de consignas para lengua inglesa tema ${idTema}.`);
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
