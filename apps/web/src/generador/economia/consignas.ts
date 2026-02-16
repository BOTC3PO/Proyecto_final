import { getCatalogoTemaEconomiaSync } from "./catalogoApi";
import type { Dificultad } from "./generico";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const normalizeDificultad = (dificultad: Dificultad): "basico" | "intermedio" | "avanzado" => {
  if (dificultad === "basico" || dificultad === "intermedio" || dificultad === "avanzado") {
    return dificultad;
  }
  return "intermedio";
};

const asTupleRange = (value: unknown): [number, number] | null => {
  if (!Array.isArray(value) || value.length < 2) return null;
  const min = Number(value[0]);
  const max = Number(value[1]);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
  return [min, max];
};

const renderTemplate = (template: string, variables: Record<string, unknown>): string =>
  template
    .replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, key: string) => String(variables[key] ?? ""))
    .replace(/\{\s*([\w.]+)\s*\}/g, (_, key: string) => String(variables[key] ?? ""));

const getTemaLimits = (tema: number): Record<string, unknown> | null => {
  const rawLimits = getCatalogoTemaEconomiaSync(String(tema)).limits;
  if (!isRecord(rawLimits)) return null;
  if (isRecord(rawLimits.limits)) return rawLimits.limits;
  return rawLimits;
};

export function resolveTemaRange(
  tema: number,
  dificultad: Dificultad,
  key: string,
  fallback: [number, number]
): [number, number] {
  const limits = getTemaLimits(tema);
  if (!limits) return fallback;

  const dif = normalizeDificultad(dificultad);
  const porDificultad = isRecord(limits.porDificultad) ? limits.porDificultad : null;
  const nivel = porDificultad && isRecord(porDificultad[dif]) ? porDificultad[dif] : null;
  const nivelRangos = nivel && isRecord(nivel.rangos) ? nivel.rangos : null;

  const fromPorDificultad = asTupleRange(nivelRangos?.[key]);
  if (fromPorDificultad) return fromPorDificultad;

  const byDificultad = isRecord(limits[dif]) ? (limits[dif] as Record<string, unknown>) : null;
  const fromNestedDificultad = asTupleRange(byDificultad?.[key]);
  if (fromNestedDificultad) return fromNestedDificultad;

  const rangos = isRecord(limits.rangos) ? limits.rangos : null;
  const fromRangosPlano = asTupleRange(rangos?.[key]);
  if (fromRangosPlano) return fromRangosPlano;

  const fromPlano = asTupleRange(limits[key]);
  if (fromPlano) return fromPlano;

  return fallback;
}

export function resolveTemaEnunciado(
  tema: number,
  variables: Record<string, unknown>,
  fallbackTexto: string
): string {
  const raw = getCatalogoTemaEconomiaSync(String(tema)).enunciado;
  let template: string | null = null;

  if (typeof raw === "string") {
    template = raw;
  } else if (isRecord(raw)) {
    if (typeof raw.template === "string") {
      template = raw.template;
    } else if (typeof raw.enunciado === "string") {
      template = raw.enunciado;
    } else if (typeof raw.texto === "string") {
      template = raw.texto;
    } else if (Array.isArray(raw.enunciados)) {
      const first = raw.enunciados.find((item) => isRecord(item) && typeof item.template === "string") as
        | Record<string, unknown>
        | undefined;
      if (first && typeof first.template === "string") {
        template = first.template;
      }
    }
  }

  if (!template || template.trim().length === 0) return fallbackTexto;

  const rendered = renderTemplate(template, variables).trim();
  return rendered.length > 0 ? rendered : fallbackTexto;
}
