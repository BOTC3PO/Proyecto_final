import type { Dificultad } from "./generic";
import { getConsigna } from "../generadores_api";

type EnunciadoArgs = {
  idTema: number;
  dificultad: Dificultad;
  claveSubtipo: string;
  fallback: string;
  variables?: Record<string, string | number>;
};

const renderTemplate = (template: string, variables?: Record<string, string | number>): string =>
  template.replace(/{{\s*([^}]+?)\s*}}/g, (_full, key: string) => {
    if (!variables) return "";
    const value = variables[key];
    return value === undefined || value === null ? "" : String(value);
  });

export const construirEnunciado = ({
  idTema,
  dificultad,
  claveSubtipo,
  fallback,
  variables,
}: EnunciadoArgs): string => {
  const fromApi = getConsigna(idTema, dificultad, claveSubtipo);
  const template = typeof fromApi === "string" && fromApi.trim().length > 0 ? fromApi : fallback;
  return renderTemplate(template, variables);
};
