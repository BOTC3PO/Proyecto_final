import type { Dificultad } from "./generic";
import { normalizarDificultadCore } from "./generic";
import { getCatalogoTemaSync, getTemaByIdSync } from "./catalogoApi";

type DificultadCore = "basico" | "intermedio" | "avanzado";

type NivelLimits = {
  rangos?: Record<string, [number, number]>;
  operacionesPermitidas?: string[];
  reglas?: Record<string, unknown>;
};

type TemaLimits = {
  slug?: string;
  porDificultad?: Record<DificultadCore, NivelLimits>;
};

const asTemaLimits = (value: Record<string, unknown>): TemaLimits => value as TemaLimits;

function getNivel(idTema: number, dificultad: Dificultad): NivelLimits | null {
  const tema = getTemaByIdSync(idTema);
  if (!tema) return null;
  const catalogo = getCatalogoTemaSync(tema);
  const parsed = asTemaLimits(catalogo);
  const dif = normalizarDificultadCore(dificultad);
  return parsed.porDificultad?.[dif] ?? null;
}

export function getRangoConFallback(
  idTema: number,
  dificultad: Dificultad,
  fallback: Record<DificultadCore, [number, number]>,
  key = "numeros"
): [number, number] {
  const dif = normalizarDificultadCore(dificultad);
  const fromJson = getNivel(idTema, dificultad)?.rangos?.[key];
  return Array.isArray(fromJson) && fromJson.length === 2
    ? [Number(fromJson[0]), Number(fromJson[1])]
    : fallback[dif];
}

export function getOperacionesConFallback(
  idTema: number,
  dificultad: Dificultad,
  fallback: Record<DificultadCore, string[]>
): string[] {
  const dif = normalizarDificultadCore(dificultad);
  const fromJson = getNivel(idTema, dificultad)?.operacionesPermitidas;
  return Array.isArray(fromJson) && fromJson.length > 0 ? fromJson : fallback[dif];
}

export function getReglaBoolConFallback(
  idTema: number,
  dificultad: Dificultad,
  regla: string,
  fallback: Record<DificultadCore, boolean>
): boolean {
  const dif = normalizarDificultadCore(dificultad);
  const value = getNivel(idTema, dificultad)?.reglas?.[regla];
  return typeof value === "boolean" ? value : fallback[dif];
}
