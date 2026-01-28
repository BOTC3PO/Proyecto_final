import { Router } from "express";
import { promises as fsPromises, createReadStream } from "fs";
import path from "path";

export const diccionarios = Router();

const DICCIONARIOS_ROOT = path.resolve(process.cwd(), "src", "diccionarios_gz");
const TOOLING_FOLDER = "herramientas";
const EXTENSION = ".jsonl.gz";

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

diccionarios.get("/api/diccionarios/:lang/:path(*)", async (req, res) => {
  try {
    const langs = await getAvailableLanguages();
    const lang = req.params.lang;

    if (!langs.includes(lang)) {
      return res.status(404).json({ error: "idioma no disponible" });
    }

    const requestedPath = req.params.path;
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

    res.setHeader("Content-Type", "application/gzip");
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
});
