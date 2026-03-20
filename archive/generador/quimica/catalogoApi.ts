import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

const temaPorId = new Map<number, string>();

export const getCatalogoTemaSync = (tema: string): unknown[] => {
  const enunciado = getConsignaSync("quimica", tema).enunciado;
  return Array.isArray(enunciado) ? enunciado : [];
};

export async function listarTemasQuimica(): Promise<string[]> {
  return listarTemas("quimica");
}

export async function precargarCatalogoTema(tema: string): Promise<void> {
  await precargarConsigna("quimica", tema);
}

const resolveTemaById = async (idTema: number): Promise<string> => {
  const cached = temaPorId.get(idTema);
  if (cached) return cached;
  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  const temas = await listarTemasQuimica();
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
