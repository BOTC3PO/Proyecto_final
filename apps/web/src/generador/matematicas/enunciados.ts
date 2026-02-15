import { getEnunciadoTemaByIdSync } from "./catalogoApi";

interface EnunciadoVariant {
  mode?: string;
  template?: string;
}

interface EnunciadoCatalog {
  enunciados?: EnunciadoVariant[];
}

const asEnunciadoCatalog = (value: unknown): EnunciadoCatalog | null => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as EnunciadoCatalog;
};

const pickRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export function resolverEnunciadoDesdeCatalogo(idTema: number, enunciadoBase: string): string {
  const raw = getEnunciadoTemaByIdSync(idTema);
  const catalog = asEnunciadoCatalog(raw);
  const variantes = catalog?.enunciados?.filter(
    (item) => item && typeof item.template === "string" && item.template.trim().length > 0
  );

  if (!variantes || variantes.length === 0) {
    return enunciadoBase;
  }

  const variante = pickRandom(variantes);
  const template = variante.template!.trim();

  if (variante.mode === "cuenta") {
    return `${template}\n\n${enunciadoBase}`;
  }

  if (variante.mode === "texto") {
    return `${template}\n\n${enunciadoBase}`;
  }

  return enunciadoBase;
}
