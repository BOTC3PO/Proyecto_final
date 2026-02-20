import crypto from "node:crypto";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import {
  buildManifestFromAssets,
  buildManifestMeta,
  computeManifestEtag,
  DEFAULT_MAPS_SQLITE_PATH,
  MAPS_SOURCE_VERSION,
  openMapsDb,
  readMapAssets,
  type MapAssetRow
} from "../maps/catalog";

export const mapsRouter = express.Router();

const mapsPath = path.join(process.cwd(), "src", "maps", "maps");
const sqlitePath = path.resolve(process.cwd(), process.env.CONTENT_SQLITE_PATH ?? DEFAULT_MAPS_SQLITE_PATH);

let cachedAssetsByUri = new Map<string, MapAssetRow>();
let cacheBuiltAt = 0;

const loadAssets = () => {
  if (Date.now() - cacheBuiltAt < 30_000 && cachedAssetsByUri.size > 0) return;
  const db = openMapsDb(sqlitePath, true);
  const rows = readMapAssets(db, MAPS_SOURCE_VERSION);
  cachedAssetsByUri = new Map(rows.map((row) => [row.uri, row]));
  cacheBuiltAt = Date.now();
};

const strongEtag = (value: string) => `"${value}"`;

mapsRouter.get("/manifest", (_req, res) => {
  const db = openMapsDb(sqlitePath, true);
  const rows = readMapAssets(db, MAPS_SOURCE_VERSION);

  const manifest = buildManifestFromAssets(rows);
  const etag = computeManifestEtag(rows, MAPS_SOURCE_VERSION);

  if (_req.headers["if-none-match"] === etag) {
    res.status(304).end();
    return;
  }

  res.setHeader("ETag", etag);
  res.setHeader("Cache-Control", "public, max-age=300");
  res.json(manifest);
});

mapsRouter.get("/manifest.meta", (_req, res) => {
  const db = openMapsDb(sqlitePath, true);
  const rows = readMapAssets(db, MAPS_SOURCE_VERSION);

  const payload = {
    ...buildManifestFromAssets(rows),
    _meta: buildManifestMeta(rows)
  };

  const etag = computeManifestEtag(rows, MAPS_SOURCE_VERSION);
  if (_req.headers["if-none-match"] === etag) {
    res.status(304).end();
    return;
  }

  res.setHeader("ETag", etag);
  res.setHeader("Cache-Control", "public, max-age=300");
  res.json(payload);
});

mapsRouter.get("/*file", (req, res, next) => {
  loadAssets();

  const requested = (req.params as unknown as { file?: string | string[] }).file;
  const requestedFile = Array.isArray(requested) ? requested.join("/") : String(requested ?? "");
  if (!requestedFile.endsWith(".topo.json")) {
    next();
    return;
  }

  const uri = `/api/maps/${requestedFile}`;
  const asset = cachedAssetsByUri.get(uri);

  if (asset) {
    res.setHeader("ETag", strongEtag(asset.sha256));
    res.setHeader("Cache-Control", "public, max-age=86400");
    if (req.headers["if-none-match"] === strongEtag(asset.sha256)) {
      res.status(304).end();
      return;
    }
  } else {
    const filePath = path.join(mapsPath, requestedFile);
    if (fs.existsSync(filePath)) {
      const hash = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
      res.setHeader("ETag", strongEtag(hash));
      res.setHeader("Cache-Control", "public, max-age=86400");
      if (req.headers["if-none-match"] === strongEtag(hash)) {
        res.status(304).end();
        return;
      }
    }
  }

  next();
});

mapsRouter.use(
  "/",
  express.static(mapsPath, {
    etag: false,
    maxAge: "30d"
  })
);
