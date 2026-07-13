import es from "./es.json";
import en from "./en.json";

export type LanguageId = "es" | "en";
export type Catalog = Record<string, string>;

// Agregar un idioma = copiar es.json, traducirlo, y sumar la entrada acá.
export const CATALOGS: Record<LanguageId, Catalog> = { es, en };

export const LANGUAGES: { id: LanguageId; name: string }[] = [
  { id: "es", name: "Español" },
  { id: "en", name: "English" },
];

export const DEFAULT_LANGUAGE: LanguageId = "es";
