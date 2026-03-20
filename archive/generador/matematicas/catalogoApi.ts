import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

const temaPorId = new Map<number, string>();

const getEnunciadoObject = (tema: string): Record<string, unknown> | null => {
  const enunciado = getConsignaSync("matematicas", tema).enunciado;
  if (!enunciado || typeof enunciado !== "object" || Array.isArray(enunciado)) return null;
  return enunciado as Record<string, unknown>;
};

export const getCatalogoTemaSync = (tema: string): Record<string, unknown> => {
  const consigna = getConsignaSync("matematicas", tema);
  return {
    limits: consigna.limits ?? undefined,
    enunciado: getEnunciadoObject(tema) ?? undefined,
    meta: consigna.meta ?? undefined,
  };
};

export async function listarTemasMatematicas(): Promise<string[]> {
  return listarTemas("matematicas");
}

export async function precargarCatalogoTema(tema: string): Promise<void> {
  await precargarConsigna("matematicas", tema);
}

const resolveTemaById = async (idTema: number): Promise<string> => {
  const cached = temaPorId.get(idTema);
  if (cached) return cached;
  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  const temas = await listarTemasMatematicas();
  const tema = temas.find((item) => item.startsWith(prefijo));
  if (!tema) {
    throw new Error(`No existe carpeta de consignas para tema ${prefijo.slice(0, 2)}.`);
  }
  temaPorId.set(idTema, tema);
  return tema;
};

export async function precargarCatalogoTemaPorId(idTema: number): Promise<void> {
  const tema = await resolveTemaById(idTema);
  await precargarCatalogoTema(tema);
}

export function getTemaByIdSync(idTema: number): string | null {
  return temaPorId.get(idTema) ?? null;
}

export function getEnunciadoTemaSync(tema: string): unknown {
  return getEnunciadoObject(tema) ?? undefined;
}

export function getEnunciadoTemaByIdSync(idTema: number): unknown {
  const tema = getTemaByIdSync(idTema);
  if (!tema) return undefined;
  return getEnunciadoTemaSync(tema);
}
