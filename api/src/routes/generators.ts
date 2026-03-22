import { Router } from "express";
import { openContentDb } from "../lib/db-open";

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
generators.get("/api/generators", (_req, res) => {
  try {
    const db = openContentDb();
    const rows = db
      .prepare(
        "SELECT id, materia, label, description, subtipos FROM generator_configs WHERE status = 'ACTIVE' ORDER BY materia ASC"
      )
      .all() as Pick<GeneratorRow, "id" | "materia" | "label" | "description" | "subtipos">[];

    const items = rows.map((row) => {
      const allSubtipos = parseJson<{ id: string; label: string; activo?: boolean }[]>(
        row.subtipos,
        []
      );
      const subtipos = allSubtipos
        .filter((s) => s.activo !== false)
        .map((s) => ({ id: s.id, label: s.label }));

      return {
        id: row.id,
        materia: row.materia,
        label: row.label,
        description: row.description ?? null,
        subtipos,
      };
    });

    res.json({ items });
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal server error";
    res.status(500).json({ error: message });
  }
});

// GET /api/generators/:category/:name — detalle por id compuesto (ej: "biologia/biologia")
// Dos params en lugar de wildcard para compatibilidad con path-to-regexp v8 (Express 5).
generators.get("/api/generators/:category/:name", (req, res) => {
  const id = `${req.params.category}/${req.params.name}`;

  try {
    const db = openContentDb();
    const row = db
      .prepare("SELECT * FROM generator_configs WHERE id = ?")
      .get(id) as GeneratorRow | undefined;

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
      variables_schema: parseJson(row.variables_schema, {}),
      status: row.status,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "internal server error";
    res.status(500).json({ error: message });
  }
});
