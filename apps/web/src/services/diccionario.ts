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
