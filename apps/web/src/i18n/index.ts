import es from "./es.json";
import esAR from "./es-AR.json";
import en from "./en.json";
import ptBR from "./pt-BR.json";
import ptPT from "./pt-PT.json";
import fr from "./fr.json";
import it from "./it.json";
import de from "./de.json";
import eo from "./eo.json";
import ja from "./ja.json";
import ko from "./ko.json";
import zh from "./zh.json";
import ar from "./ar.json";
import ru from "./ru.json";
import hi from "./hi.json";

export type LanguageId =
  | "es"
  | "es-AR"
  | "en"
  | "pt-BR"
  | "pt-PT"
  | "fr"
  | "it"
  | "de"
  | "eo"
  | "ja"
  | "ko"
  | "zh"
  | "ar"
  | "ru"
  | "hi";
export type Catalog = Record<string, string>;

// Agregar un idioma = copiar es.json, traducirlo, y sumar la entrada acá.
// es.json es el catálogo fuente (la paridad de claves la verifica el spec).
export const CATALOGS: Record<LanguageId, Catalog> = {
  es,
  "es-AR": esAR,
  en,
  "pt-BR": ptBR,
  "pt-PT": ptPT,
  fr,
  it,
  de,
  eo,
  ja,
  ko,
  zh,
  ar,
  ru,
  hi,
};

export const LANGUAGES: { id: LanguageId; name: string }[] = [
  { id: "es", name: "Español" },
  { id: "es-AR", name: "Español (Argentina)" },
  { id: "en", name: "English" },
  { id: "pt-BR", name: "Português (Brasil)" },
  { id: "pt-PT", name: "Português (Portugal)" },
  { id: "fr", name: "Français" },
  { id: "it", name: "Italiano" },
  { id: "de", name: "Deutsch" },
  { id: "eo", name: "Esperanto" },
  { id: "ja", name: "日本語" },
  { id: "ko", name: "한국어" },
  { id: "zh", name: "中文" },
  { id: "ar", name: "العربية" },
  { id: "ru", name: "Русский" },
  { id: "hi", name: "हिन्दी" },
];

export const DEFAULT_LANGUAGE: LanguageId = "es";
