import { Router } from "express";
import { promises as fsPromises, createReadStream } from "fs";
import path from "path";
import readline from "readline";
import type { Transform } from "stream";

export const diccionarios = Router();

const DICCIONARIOS_ROOT = path.resolve(process.cwd(), "src", "diccionarios");
const TOOLING_FOLDER = "herramientas";
const EXTENSION = ".jsonl.zst";
const DEFAULT_LOOKUP_PATH = "_1.jsonl.zst";

const normalizeLookupWord = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");

const resolveDictionaryFileForWord = (normalizedWord: string) => {
  const lookupPrefix = normalizedWord.slice(0, 2);
  if (lookupPrefix.length < 2) {
    return DEFAULT_LOOKUP_PATH;
  }
  return `${lookupPrefix}${EXTENSION}`;
};

// Estrategia: usar @mongodb-js/zstd para descomprimir en streaming, evitando
// mantener duplicados sin comprimir solo para búsquedas puntuales.
const getZstdDecompressStream = () => {
  const zstd = require("@mongodb-js/zstd") as {
    createZstdDecompressStream?: () => Transform;
    ZstdDecompressStream?: new () => Transform;
  };

  if (typeof zstd.createZstdDecompressStream === "function") {
    return zstd.createZstdDecompressStream();
  }
  if (typeof zstd.ZstdDecompressStream === "function") {
    return new zstd.ZstdDecompressStream();
  }
  throw new Error("No se pudo inicializar el stream de zstd");
};

async function getAvailableLanguages() {
  const entries = await fsPromises.readdir(DICCIONARIOS_ROOT, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith(".") && name !== TOOLING_FOLDER)
    .sort();
}

function resolveDictionaryPath(lang: string, requestedPath: string) {
  const langRoot = path.resolve(DICCIONARIOS_ROOT, lang);
  const resolved = path.resolve(langRoot, requestedPath);
  const normalizedRoot = `${langRoot}${path.sep}`;
  if (!resolved.startsWith(normalizedRoot)) {
    return null;
  }
  return resolved;
}

diccionarios.get("/api/diccionarios", async (_req, res) => {
  try {
    const langs = await getAvailableLanguages();
    return res.json({ langs });
  } catch (error) {
    console.error("No se pudo listar diccionarios:", error);
    return res.status(500).json({ error: "no se pudieron listar diccionarios" });
  }
});

diccionarios.get("/api/diccionarios/:lang/lookup", async (req, res) => {
  try {
    const langs = await getAvailableLanguages();
    const lang = req.params.lang;

    if (!langs.includes(lang)) {
      return res.status(404).json({ error: "idioma no disponible" });
    }

    const word = typeof req.query.w === "string" ? req.query.w : "";
    if (!word.trim()) {
      return res.status(400).json({ error: "parametro w requerido" });
    }

    const normalizedWord = normalizeLookupWord(word);
    const dictionaryFile = resolveDictionaryFileForWord(normalizedWord);
    if (!dictionaryFile.endsWith(EXTENSION)) {
      return res.status(400).json({ error: "archivo no permitido" });
    }

    const resolvedPath = resolveDictionaryPath(lang, dictionaryFile);
    if (!resolvedPath) {
      return res.status(400).json({ error: "ruta invalida" });
    }

    const stats = await fsPromises.stat(resolvedPath).catch(() => null);
    if (!stats || !stats.isFile()) {
      return res.status(404).json({ error: "archivo no encontrado" });
    }

    const sourceStream = createReadStream(resolvedPath);
    const decompressStream = getZstdDecompressStream();
    const rl = readline.createInterface({
      input: sourceStream.pipe(decompressStream),
      crlfDelay: Infinity,
    });

    let found = false;
    let responded = false;

    const sendError = (status: number, message: string) => {
      if (responded) return;
      responded = true;
      res.status(status).json({ error: message });
    };

    const teardown = (error?: Error) => {
      rl.close();
      sourceStream.destroy(error);
      decompressStream.destroy(error);
    };

    sourceStream.on("error", (error) => {
      console.error("Error leyendo diccionario:", error);
      if (!responded) {
        sendError(500, "no se pudo leer el archivo");
      } else {
        res.destroy(error);
      }
    });

    decompressStream.on("error", (error) => {
      console.error("Error descomprimiendo diccionario:", error);
      if (!responded) {
        sendError(500, "no se pudo descomprimir el archivo");
      } else {
        res.destroy(error);
      }
    });

    rl.on("line", (line) => {
      if (found || responded) return;
      if (!line.trim()) return;
      try {
        const entry = JSON.parse(line) as { w?: string; d?: unknown; t?: unknown; r?: unknown };
        const entryWord = typeof entry.w === "string" ? normalizeLookupWord(entry.w) : "";
        if (entryWord && entryWord === normalizedWord) {
          found = true;
          responded = true;
          res.json({
            w: entry.w ?? null,
            d: entry.d ?? null,
            t: entry.t ?? null,
            r: entry.r ?? null,
          });
          teardown();
        }
      } catch (error) {
        console.error("Error parseando diccionario:", error);
        sendError(500, "linea invalida en diccionario");
        teardown(error instanceof Error ? error : new Error("linea invalida"));
      }
    });

    rl.on("close", () => {
      if (found || responded) return;
      sendError(404, "palabra no encontrada");
    });
  } catch (error) {
    console.error("No se pudo buscar diccionario:", error);
    return res.status(500).json({ error: "no se pudo buscar en el diccionario" });
  }
});

diccionarios.get<{ lang: string; requestedPath?: string }>(
 "/api/diccionarios/:lang/*requestedPath",
  async (req, res) => {
    try {
      const langs = await getAvailableLanguages();
      const lang = req.params.lang;

      if (!langs.includes(lang)) {
        return res.status(404).json({ error: "idioma no disponible" });
      }

      const requestedPath = req.params.requestedPath;
      if (!requestedPath || !requestedPath.endsWith(EXTENSION)) {
        return res.status(400).json({ error: "archivo no permitido" });
      }

      const resolvedPath = resolveDictionaryPath(lang, requestedPath);
      if (!resolvedPath) {
        return res.status(400).json({ error: "ruta invalida" });
      }

      const stats = await fsPromises.stat(resolvedPath).catch(() => null);
      if (!stats || !stats.isFile()) {
        return res.status(404).json({ error: "archivo no encontrado" });
      }

      res.setHeader("Content-Type", "application/zstd");
      res.setHeader("Content-Length", stats.size.toString());

      const stream = createReadStream(resolvedPath);
      stream.on("error", (error) => {
        console.error("Error leyendo diccionario:", error);
        if (!res.headersSent) {
          res.status(500).json({ error: "no se pudo leer el archivo" });
        } else {
          res.destroy(error);
        }
      });
      stream.pipe(res);
    } catch (error) {
      console.error("No se pudo servir diccionario:", error);
      return res.status(500).json({ error: "no se pudo servir el diccionario" });
    }
  }
);
