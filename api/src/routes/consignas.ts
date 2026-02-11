import { Router } from "express";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const router = Router();
const QUIMICA_ROOT = path.resolve(process.cwd(), "api/src/generadores/quimica");
const TEMA_REGEX = /^\d{2}_[a-z0-9_]+$/;

router.get("/api/consignas/quimica", async (_req, res) => {
  try {
    const entries = await readdir(QUIMICA_ROOT, { withFileTypes: true });
    const temas = entries
      .filter((entry) => entry.isDirectory() && TEMA_REGEX.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    return res.json(temas.map((id) => ({ id })));
  } catch {
    return res.status(500).json({ error: "no se pudo listar consignas de quimica" });
  }
});

router.get("/api/consignas/quimica/:tema", async (req, res) => {
  const tema = String(req.params.tema ?? "");
  if (!TEMA_REGEX.test(tema)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const temaPath = path.resolve(QUIMICA_ROOT, tema);
  if (!temaPath.startsWith(`${QUIMICA_ROOT}${path.sep}`)) {
    return res.status(400).json({ error: "tema invalido" });
  }

  const enunciadoPath = path.resolve(temaPath, "enunciado.json");

  try {
    await access(enunciadoPath);
  } catch {
    return res.status(404).json({ error: "enunciado no encontrado" });
  }

  try {
    const raw = await readFile(enunciadoPath, "utf8");
    return res.json(JSON.parse(raw));
  } catch {
    return res.status(500).json({ error: "no se pudo leer consigna" });
  }
});

export const consignas = router;
