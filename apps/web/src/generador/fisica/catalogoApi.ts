import { getConsignaSync, listarTemas, precargarConsigna } from "../consignasApi";

type CatalogoTemaFisica = {
  enunciado: Record<string, unknown> | null;
  limits: Record<string, unknown> | null;
};

const temaPorGeneratorId = new Map<string, string>();

export const getCatalogoTemaFisicaSync = (tema: string): CatalogoTemaFisica => {
  const consigna = getConsignaSync("fisica", tema);
  const enunciado =
    consigna.enunciado && typeof consigna.enunciado === "object" && !Array.isArray(consigna.enunciado)
      ? (consigna.enunciado as Record<string, unknown>)
      : null;

  return {
    enunciado,
    limits: consigna.limits,
  };
};

export async function listarTemasFisica(): Promise<string[]> {
  return listarTemas("fisica");
}

export async function precargarCatalogoTemaFisica(tema: string): Promise<void> {
  await precargarConsigna("fisica", tema);
}

const extractSlugFromGeneratorId = (generatorId: string): string => {
  const normalized = generatorId.trim();
  if (!normalized) return "";
  const segmentos = normalized.split("/").filter(Boolean);
  return segmentos.at(-1) ?? "";
};

const resolveTemaFisicaByGeneratorId = async (generatorId: string): Promise<string> => {
  const cached = temaPorGeneratorId.get(generatorId);
  if (cached) return cached;

  const slug = extractSlugFromGeneratorId(generatorId);
  if (!slug) {
    throw new Error("No se pudo resolver el tema de física: id de generador inválido.");
  }

  const temas = await listarTemasFisica();
  const tema = temas.find((item) => item.endsWith(`_${slug}`));
  if (!tema) {
    throw new Error(`No existe carpeta de consignas para el generador ${generatorId}.`);
  }

  temaPorGeneratorId.set(generatorId, tema);
  return tema;
};

export async function precargarCatalogoTemaFisicaPorGeneratorId(generatorId: string): Promise<void> {
  const tema = await resolveTemaFisicaByGeneratorId(generatorId);
  await precargarCatalogoTemaFisica(tema);
}
