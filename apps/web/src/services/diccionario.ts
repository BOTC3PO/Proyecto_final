import { apiGet } from "../lib/api";

export type EntradaDiccionario = {
  word?: string;
  definitions?: string[] | string;
  synonyms?: string[] | string;
  translations?: Record<string, string[]> | string;
};

export type LookupResult =
  | { found: true; entry: EntradaDiccionario }
  | { found: false };

export type PrefixResult = {
  count: number;
  entries: EntradaDiccionario[];
};

export async function lookupPalabra(
  word: string,
  lang = "es"
): Promise<LookupResult | null> {
  try {
    return await apiGet<LookupResult>(
      `/api/dictionary/lookup?lang=${lang}&word=${encodeURIComponent(word.trim())}`
    );
  } catch {
    return null;
  }
}

export async function prefixPalabra(
  q: string,
  lang = "es"
): Promise<string[]> {
  try {
    const data = await apiGet<PrefixResult>(
      `/api/dictionary/prefix?lang=${lang}&q=${encodeURIComponent(q.trim())}&limit=6`
    );
    return (data.entries ?? [])
      .map((e) => e.word ?? "")
      .filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Normaliza el campo `definitions` (que el backend puede devolver como string,
 * JSON serializado o array) a un array de strings. Mismo criterio tolerante que
 * usa el lector (ModuloDetail.formatDef).
 */
export function normalizeDefiniciones(
  defs: EntradaDiccionario["definitions"]
): string[] {
  if (!defs) return [];
  let value: unknown = defs;
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return [value as string];
    }
  }
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return [String(value)];
}

/**
 * Etiquetas gramaticales estándar que usan los editores de lengua
 * (analisis_sintactico). Sirven para poblar un datalist y como destino de la
 * sugerencia automática.
 */
export const CATEGORIAS_GRAMATICALES = [
  "sustantivo",
  "adjetivo",
  "verbo",
  "adverbio",
  "pronombre",
  "artículo",
  "preposición",
  "conjunción",
  "interjección",
] as const;

/**
 * Deriva, en base a las definiciones del diccionario, una categoría gramatical
 * sugerida para una palabra. Es best-effort: los diccionarios estilo RAE
 * abrevian la categoría al inicio de la acepción ("m.", "adj.", "tr."…). Si no
 * se reconoce ningún marcador devuelve `null` (el autor la completa a mano).
 */
export function sugerirCategoriaGramatical(
  entry: EntradaDiccionario | null | undefined
): string | null {
  if (!entry) return null;
  const text = normalizeDefiniciones(entry.definitions).join(" ").toLowerCase();
  if (!text.trim()) return null;
  // Orden: primero las abreviaturas inequívocas; el género (m./f./amb.) implica
  // sustantivo y va último para no pisar marcadores más específicos.
  const reglas: Array<[RegExp, string]> = [
    [/\badj\b/, "adjetivo"],
    [/\badv\b/, "adverbio"],
    [/\bprep\b/, "preposición"],
    [/\bconj\b/, "conjunción"],
    [/\bpron\b/, "pronombre"],
    [/\binterj\b/, "interjección"],
    [/\b(art|det)\b/, "artículo"],
    [/\b(tr|intr|prnl)\b/, "verbo"],
    [/\b(m|f|amb)\b/, "sustantivo"],
  ];
  for (const [re, cat] of reglas) {
    if (re.test(text)) return cat;
  }
  return null;
}
