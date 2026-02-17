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
  return Math.min(200, Math.max(1, num));
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

  const entry = service.lookup(lang, word);
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

  const entries = service.prefix(lang, q, limit);
  return res.json({ count: entries.length, entries });
});
