import type { Dificultad } from "./generic";
import { getConsigna } from "../generadores_api";

export type DificultadCore = "basico" | "intermedio" | "avanzado";

type EnunciadoArgs = {
  idTema: number;
  dificultad: Dificultad;
  claveSubtipo: string;
  fallback: string;
  variables?: Record<string, string | number>;
};

export const formatNum = (n: number): string =>
  Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.00$/, "");

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export const clampInt = (value: number, min: number, max: number): number =>
  Math.trunc(clamp(value, min, max));

const renderTemplate = (template: string, variables?: Record<string, string | number>): string =>
  template.replace(/{{\s*([^}]+?)\s*}}/g, (_full, key: string) => {
    if (!variables) return "";
    const value = variables[key];
    return value === undefined || value === null ? "" : String(value);
  });

const hasPlaceholders = (text: string): boolean => /{{\s*[^}]+\s*}}/.test(text);

export const construirEnunciado = ({
  idTema,
  dificultad,
  claveSubtipo,
  fallback,
  variables,
}: EnunciadoArgs): string => {
  const templateApi = getConsigna(idTema, dificultad, claveSubtipo);
  const template = typeof templateApi === "string" && templateApi.trim().length > 0
    ? templateApi
    : fallback;

  const rendered = renderTemplate(template, variables).trim();
  if (!hasPlaceholders(rendered)) {
    return rendered;
  }

  const fallbackRendered = renderTemplate(fallback, variables).trim();
  if (hasPlaceholders(fallbackRendered)) {
    throw new Error(`Enunciado sin interpolar detectado: ${fallbackRendered}`);
  }

  return fallbackRendered;
};

export const buildOpcionesUnicas = (
  correcta: string | number,
  distractores: Array<string | number>,
  extras: Array<string | number> = []
): string[] => {
  const opciones: string[] = [];
  const add = (value: string | number) => {
    const text = String(value);
    if (!opciones.includes(text)) opciones.push(text);
  };

  add(correcta);
  for (const item of [...distractores, ...extras]) {
    add(item);
    if (opciones.length === 4) break;
  }

  let suffix = 1;
  while (opciones.length < 4) {
    add(`${String(correcta)} (${suffix})`);
    suffix += 1;
  }

  return opciones.slice(0, 4);
};
