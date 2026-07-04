/**
 * routes/geonames.ts
 *
 * GET /api/maps/geonames/buscar?q=<término>&limite=<n>
 *
 * Búsqueda de lugares (países/ciudades) para el "Buscar lugar" del editor
 * de mapas (`MapaEditorFull.tsx`). Ver `maps/geonames.ts` para el detalle
 * de la fuente de datos y por qué tiene su propia variable de entorno.
 */
import { Router, type Request, type Response } from "express";
import { existsSync } from "node:fs";
import { buscarGeonames, DEFAULT_GEONAMES_SQLITE_PATH } from "../maps/geonames";
import path from "node:path";

export const geonamesRouter = Router();

geonamesRouter.get("/api/maps/geonames/buscar", (req: Request, res: Response) => {
  const q = typeof req.query.q === "string" ? req.query.q : "";
  const limiteRaw = Number(req.query.limite ?? 10);
  const limite = Number.isFinite(limiteRaw) ? limiteRaw : 10;

  if (q.trim().length < 2) {
    return res.json({ items: [] });
  }

  const dbPath = path.resolve(
    process.cwd(),
    process.env.GEONAMES_SQLITE_PATH ?? DEFAULT_GEONAMES_SQLITE_PATH
  );
  if (!existsSync(dbPath)) {
    return res.status(503).json({ error: "Base de lugares no disponible." });
  }

  try {
    const items = buscarGeonames(q, limite);
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.json({ items });
  } catch (e) {
    console.error("[GET /api/maps/geonames/buscar]", e);
    return res.status(500).json({ error: "No se pudo buscar." });
  }
});

export default geonamesRouter;
