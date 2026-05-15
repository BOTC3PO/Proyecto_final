import { Router } from "express";
import * as fs from "fs";
import * as path from "path";
import { prisma } from "../lib/prisma";

// ── Documentación de generadores (cache en memoria) ──────────────────────────
type GeneratorDocs = Record<string, unknown>;
let _docsCache: GeneratorDocs | null = null;

function loadGeneratorDocs(): GeneratorDocs {
  if (_docsCache) return _docsCache;
  const filePath = path.resolve(__dirname, "../base/documentacion_generadores.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  _docsCache = JSON.parse(raw) as GeneratorDocs;
  return _docsCache;
}

export const generators = Router();

type GeneratorRow = {
  id: string;
  materia: string;
  label: string;
  description: string | null;
  version: number;
  subtipos: string;
  enunciados: string;
  limits: string;
  variables_schema: string;
  status: string;
};

function parseJson<T>(raw: string, fallback: T): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// GET /api/generators — catálogo público (solo ACTIVE)
generators.get("/api/generators", async (_req, res) => {
  try {
    const docs = loadGeneratorDocs();
    const rows = await prisma.generatorConfig.findMany({
      where: { status: "ACTIVE" },
      orderBy: { materia: "asc" },
      select: { id: true, materia: true, label: true, description: true, subtipos: true, enunciados: true },
    });

    const items = rows.map((row) => {
      const allSubtipos = parseJson<{ id: string; label: string; activo?: boolean; tieneGrafico?: boolean }[]>(row.subtipos, []);
      const docEntry = docs[row.id] as { subtipos?: Record<string, { tieneGrafico?: boolean }> } | undefined;
      const subtipos = allSubtipos
        .filter((s) => s.activo !== false)
        .map((s) => ({
          id: s.id,
          label: s.label,
          tieneGrafico: s.tieneGrafico ?? docEntry?.subtipos?.[s.id]?.tieneGrafico ?? false,
        }));
      const enunciadosPersonalizados = parseJson<Record<string, string>>(row.enunciados, {});
      return {
        id: row.id,
        materia: row.materia,
        label: row.label,
        description: row.description ?? null,
        subtipos,
        enunciadosPersonalizados: Object.keys(enunciadosPersonalizados).length > 0 ? enunciadosPersonalizados : undefined,
      };
    });

    res.json({ items });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// GET /api/generators/:category/:name/docs — documentación de un generador
// Declarada ANTES de /:category/:name para que no sea capturada por ese wildcard.
generators.get("/api/generators/:category/:name/docs", (req, res) => {
  const id = `${req.params.category}/${req.params.name}`;
  try {
    const docs = loadGeneratorDocs();
    if (!(id in docs)) {
      res.status(404).json({ error: "not found" });
      return;
    }
    res.json(docs[id]);
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal server error";
    res.status(500).json({ error: message });
  }
});

// GET /api/generators/:category/:name — detalle por id compuesto (ej: "biologia/biologia")
generators.get("/api/generators/:category/:name", async (req, res) => {
  const id = `${req.params.category}/${req.params.name}`;
  try {
    const row = await prisma.generatorConfig.findUnique({ where: { id } });

    if (!row || row.status === "INACTIVE") {
      res.status(404).json({ error: "not found" });
      return;
    }

    res.json({
      id: row.id,
      materia: row.materia,
      label: row.label,
      description: row.description ?? null,
      version: row.version,
      subtipos: parseJson(row.subtipos, []),
      enunciados: parseJson(row.enunciados, {}),
      limits: parseJson(row.limits, {}),
      variables_schema: parseJson(row.variablesSchema, {}),
      status: row.status,
    });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});
