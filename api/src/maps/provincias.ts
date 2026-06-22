/**
 * routes/provincias.ts
 *
 * Sirve los TopoJSON de provincias/estados por país, generados por
 * `build-provincias.mjs`. Pensado para montarse bajo `/api/maps` para
 * quedar consistente con el resto de mapas (mismo prefijo que usa
 * `MarcarMapaRenderer`).
 *
 * Endpoints:
 *   GET /api/maps/provincias            -> catálogo (index.json)
 *   GET /api/maps/provincias/:pais      -> TopoJSON de ese país (ej. /AR)
 *
 * Montaje (en el server):
 *   import { provinciasRouter } from "./routes/provincias";
 *   app.use("/api/maps/provincias", provinciasRouter);
 *
 * Datos: por defecto en `api/src/maps/maps/political/admin1/`. Ajustar
 * PROVINCIAS_DIR si los ponés en otro lado.
 */

import { Router, type Request, type Response } from "express";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

// Carpeta donde build-provincias.mjs dejó los <PAIS>.topo.json + index.json.
const PROVINCIAS_DIR = resolve(
  process.env.PROVINCIAS_DIR ??
    join(process.cwd(), "src/maps/provincias"),
);

// Cache: los mapas son estáticos -> cachear fuerte. Ajustar a gusto.
const CACHE = "public, max-age=86400, stale-while-revalidate=604800";

// Solo letras/números/guion bajo: evita path traversal en :pais.
const PAIS_RE = /^[A-Za-z0-9_]{2,40}$/;

export const provinciasRouter = Router();

/** Catálogo de países disponibles. */
provinciasRouter.get("/", async (_req: Request, res: Response) => {
  const indexPath = join(PROVINCIAS_DIR, "index.json");
  if (!existsSync(indexPath)) {
    return res
      .status(503)
      .json({ error: "Catálogo de provincias no generado (corré build-provincias.mjs)." });
  }
  try {
    const json = await readFile(indexPath, "utf8");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", CACHE);
    return res.send(json);
  } catch {
    return res.status(500).json({ error: "No se pudo leer el catálogo." });
  }
});

/** TopoJSON de un país por código (ej. AR, BR, US). */
provinciasRouter.get("/:pais", async (req: Request, res: Response) => {
  const pais = String(req.params.pais);
  if (!PAIS_RE.test(pais)) {
    return res.status(400).json({ error: "Código de país inválido." });
  }

  // Normalizamos a mayúsculas porque los archivos son <ISO_A2>.topo.json.
  const file = join(PROVINCIAS_DIR, `${pais.toUpperCase()}.topo.json`);

  // Defensa extra: el path resuelto tiene que seguir dentro de la carpeta.
  if (!resolve(file).startsWith(PROVINCIAS_DIR)) {
    return res.status(400).json({ error: "Ruta inválida." });
  }
  if (!existsSync(file)) {
    return res
      .status(404)
      .json({ error: `Sin datos de provincias para '${pais}'.` });
  }

  try {
    const json = await readFile(file, "utf8");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", CACHE);
    return res.send(json);
  } catch {
    return res.status(500).json({ error: "No se pudo leer el mapa." });
  }
});

export default provinciasRouter;
