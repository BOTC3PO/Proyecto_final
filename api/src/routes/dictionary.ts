import { Router } from "express";
import { ENV } from "../lib/env";

export const dictionary = Router();

const isString = (value: unknown): value is string => typeof value === "string";

const parseLang = (value: unknown) => {
  if (!isString(value)) return null;
  const lang = value.trim().toLowerCase();
  if (lang.length < 2 || lang.length > 10) return null;
  if (!/^[a-z0-9_-]+$/i.test(lang)) return null;
  return lang;
};

const parseWord = (value: unknown) => {
  if (!isString(value)) return null;
  const word = value.trim();
  if (word.length < 1 || word.length > 128) return null;
  return word;
};

const parsePrefix = (value: unknown) => {
  if (!isString(value)) return null;
  const q = value.trim();
  if (q.length < 1 || q.length > 64) return null;
  return q;
};

const parseLimit = (value: unknown) => {
  if (!isString(value) || !value.trim()) return 50;
  const num = Number.parseInt(value, 10);
  if (!Number.isFinite(num)) return 50;
  return Math.min(2000, Math.max(1, num));
};

const getSqliteServiceIfEnabled = async () => {
  if (ENV.DB_KIND !== "sqlite") return { disabled: true as const };
  try {
    const sqliteModule = await import("../db/sqliteDictionary");
    return { service: sqliteModule.getSqliteDictionaryService() } as const;
  } catch (error) {
    const message = ENV.NODE_ENV === "production" ? "sqlite unavailable" : String(error);
    return { error: message } as const;
  }
};

// QA-FIX-03: el handler de Express, cuando un async route rechaza,
// devuelve un 500 con el stack trace (en dev) o un HTML genérico (en
// producción con Express por defecto). Eso es el "500 genérico" del
// síntoma. Lo que queremos es un 500 con `{ error: <causa clara> }`
// en el mismo shape que ya usan los otros endpoints de este router.
//
// `safeOperation` envuelve una operación síncrona sobre el servicio
// y devuelve `{ ok: true, value }` o `{ ok: false, error }`. Se loguea
// siempre (un 500 con causa diagnóstica es más útil que un stack).
function safeOperation<T>(fn: () => T): { ok: true; value: T } | { ok: false; error: string } {
  try {
    return { ok: true, value: fn() };
  } catch (error) {
    const message = ENV.NODE_ENV === "production" ? "dictionary lookup failed" : String(error);
    console.error("[dictionary] operation failed:", error);
    return { ok: false, error: message };
  }
}

dictionary.get("/api/dictionary/health", async (_req, res) => {
  const result = await getSqliteServiceIfEnabled();
  if ("disabled" in result) return res.status(503).json({ ok: false, error: "dictionary disabled" });
  if ("error" in result) return res.status(500).json({ ok: false, error: result.error });
  return res.json(result.service.getHealth());
});

dictionary.get("/api/dictionary/lookup", async (req, res) => {
  const result = await getSqliteServiceIfEnabled();
  if ("disabled" in result) return res.status(503).json({ ok: false, error: "dictionary disabled" });
  if ("error" in result) return res.status(500).json({ ok: false, error: result.error });
  const service = result.service;

  const lang = parseLang(req.query.lang);
  const word = parseWord(req.query.word);

  if (!lang) {
    return res.status(400).json({ error: "invalid lang (expected 2-10 chars)" });
  }
  if (!word) {
    return res.status(400).json({ error: "invalid word (expected 1-128 chars)" });
  }

  // QA-FIX-03: el lookup puede lanzar si el .sqlite fue generado sin
  // la tabla/columnas esperadas, si el binding de better-sqlite3 se
  // rompió, o si la conexión se cerró. Antes esto burbujeaba como
  // 500 genérico de Express. Ahora devolvemos 500 con causa diagnóstica
  // y la palabra inexistente sigue devolviendo { found: false }, no
  // 500.
  const looked = safeOperation(() => service.lookup(lang, word));
  if (!looked.ok) {
    return res.status(500).json({ found: false, error: looked.error });
  }
  const entry = looked.value;
  if (!entry) {
    return res.json({ found: false });
  }
  return res.json({ found: true, entry });
});

dictionary.get("/api/dictionary/prefix", async (req, res) => {
  const result = await getSqliteServiceIfEnabled();
  if ("disabled" in result) return res.status(503).json({ ok: false, error: "dictionary disabled" });
  if ("error" in result) return res.status(500).json({ ok: false, error: result.error });
  const service = result.service;

  const lang = parseLang(req.query.lang);
  const q = parsePrefix(req.query.q);
  const limit = parseLimit(req.query.limit);

  if (!lang) {
    return res.status(400).json({ error: "invalid lang (expected 2-10 chars)" });
  }
  if (!q) {
    return res.status(400).json({ error: "invalid q (expected 1-64 chars)" });
  }

  // QA-FIX-03: idem lookup — ver safeOperation arriba.
  const looked = safeOperation(() => service.prefix(lang, q, limit));
  if (!looked.ok) {
    return res.status(500).json({ count: 0, entries: [], error: looked.error });
  }
  const entries = looked.value;
  return res.json({ count: entries.length, entries });
});
