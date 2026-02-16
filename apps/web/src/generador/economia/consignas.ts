import { getCatalogoTemaEconomiaSync } from "./catalogoApi";
import type { Dificultad } from "./generico";

type UnknownRecord = Record<string, unknown>;

const asRecord = (value: unknown): UnknownRecord | null =>
  value && typeof value === "object" && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null;

const asTupleRange = (value: unknown): [number, number] | null => {
  if (!Array.isArray(value) || value.length < 2) return null;
  const [min, max] = value;
  if (typeof min !== "number" || typeof max !== "number") return null;
  return [min, max];
};

export const resolveTemaRange = (
  tema: number | string,
  dificultad: Dificultad,
  key: string,
  fallback: [number, number]
): [number, number] => {
  const limits = getCatalogoTemaEconomiaSync(tema).limits;
  const root = asRecord(limits);
  if (!root) return fallback;

  const porDificultad = asRecord(root.porDificultad);
  const nivel = asRecord(porDificultad?.[dificultad]);
  const rangos = asRecord(nivel?.rangos);

  const direct = asTupleRange(rangos?.[key]);
  if (direct) return direct;

  const fromDifficulty = asTupleRange(asRecord(root[dificultad])?.[key]);
  if (fromDifficulty) return fromDifficulty;

  const rangosRoot = asRecord(root.rangos);
  const fromRangosRoot = asTupleRange(rangosRoot?.[key]);
  if (fromRangosRoot) return fromRangosRoot;

  const fromRoot = asTupleRange(root[key]);
  if (fromRoot) return fromRoot;

  return fallback;
};

const resolveTemplate = (tema: number | string): string | null => {
  const enunciadoRaw = getCatalogoTemaEconomiaSync(tema).enunciado;
  const root = asRecord(enunciadoRaw);
  if (!root) return null;

  if (typeof root.enunciado === "string" && root.enunciado.trim().length > 0) {
    return root.enunciado;
  }

  const enunciados = root.enunciados;
  if (!Array.isArray(enunciados) || enunciados.length === 0) return null;
  const first = asRecord(enunciados[0]);
  if (!first) return null;
  const template = first.template;
  return typeof template === "string" && template.trim().length > 0 ? template : null;
};

const renderTemplate = (template: string, values: Record<string, unknown>): string =>
  template.replaceAll(/\{\{(\w+)\}\}|\{(\w+)\}/g, (_m, k1?: string, k2?: string) => {
    const key = k1 ?? k2 ?? "";
    const value = values[key];
    return value === undefined || value === null ? "" : String(value);
  });

export const resolveTemaEnunciado = (
  tema: number | string,
  valuesOrFallback: Record<string, unknown> | string,
  fallbackOrValues: string | Record<string, unknown>
): string => {
  const values =
    typeof valuesOrFallback === "string"
      ? (fallbackOrValues as Record<string, unknown>)
      : valuesOrFallback;
  const fallback =
    typeof valuesOrFallback === "string"
      ? valuesOrFallback
      : (fallbackOrValues as string);

  const template = resolveTemplate(tema);
  if (!template) return fallback;

  const rendered = renderTemplate(template, values).trim();
  return rendered.length > 0 ? rendered : fallback;
};
