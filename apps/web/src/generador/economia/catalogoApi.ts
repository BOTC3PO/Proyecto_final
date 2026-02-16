import { listarTemas, precargarConsigna, getConsignaSync } from "../consignasApi";

type CatalogoTemaEconomia = {
  enunciado: Record<string, unknown>;
  limits: Record<string, unknown> | null;
};

const toEnunciadoObject = (value: unknown): Record<string, unknown> => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value as Record<string, unknown>;
};

export const getCatalogoTemaEconomiaSync = (tema: string): CatalogoTemaEconomia => {
  const consigna = getConsignaSync("economia", tema);
  return {
    enunciado: toEnunciadoObject(consigna.enunciado),
    limits: consigna.limits,
  };
};

export async function listarTemasEconomia(): Promise<string[]> {
  return listarTemas("economia");
}

export async function precargarCatalogoTemaEconomia(tema: string): Promise<void> {
  await precargarConsigna("economia", tema);
}
