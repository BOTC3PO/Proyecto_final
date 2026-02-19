import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export type MapAssetRow = {
  id: string;
  category: "physical" | "political";
  world: string;
  layer: string;
  variant: string | null;
  scale: string;
  uri: string;
  source_version: string;
  bytes: number;
  sha256: string;
  bbox_json: string;
  encoding: string | null;
  updated_at: number;
};

type BetterSqlite3Ctor = new (
  file: string,
  options?: { readonly?: boolean; fileMustExist?: boolean }
) => {
  pragma: (value: string) => unknown;
  prepare: (sql: string) => {
    run: (...params: unknown[]) => { changes: number };
    all: (...params: unknown[]) => unknown[];
    get: (...params: unknown[]) => unknown;
  };
};

type SqliteDb = InstanceType<BetterSqlite3Ctor>;

export const MAPS_SOURCE_VERSION = "natural-earth-v1";
export const DEFAULT_MAPS_SQLITE_PATH = path.resolve(process.cwd(), "data", "content.sqlite");

let cachedBetterSqlite3: BetterSqlite3Ctor | null = null;

const getBetterSqlite3 = () => {
  if (cachedBetterSqlite3) return cachedBetterSqlite3;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  cachedBetterSqlite3 = require("better-sqlite3") as BetterSqlite3Ctor;
  return cachedBetterSqlite3;
};

export const ensureMapAssetsSchema = (db: SqliteDb) => {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS map_assets (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      world TEXT NOT NULL,
      layer TEXT NOT NULL,
      variant TEXT,
      scale TEXT NOT NULL,
      uri TEXT NOT NULL,
      source_version TEXT NOT NULL,
      bytes INTEGER NOT NULL,
      sha256 TEXT NOT NULL,
      bbox_json TEXT NOT NULL,
      encoding TEXT,
      updated_at INTEGER NOT NULL
    )
  `).run();

  db.prepare("CREATE INDEX IF NOT EXISTS idx_map_assets_cat_world ON map_assets(category, world)").run();
  db.prepare("CREATE INDEX IF NOT EXISTS idx_map_assets_layer_scale ON map_assets(layer, scale)").run();
};

export const openMapsDb = (sqlitePath: string, readonly: boolean) => {
  const BetterSqlite3 = getBetterSqlite3();
  const directory = path.dirname(sqlitePath);
  if (!readonly) fs.mkdirSync(directory, { recursive: true });
  const db = new BetterSqlite3(sqlitePath, { readonly, fileMustExist: false });
  db.pragma("journal_mode = WAL");
  db.pragma("synchronous = NORMAL");
  ensureMapAssetsSchema(db);
  return db;
};

export const buildManifestFromAssets = (assets: MapAssetRow[]) => {
  const manifest: Record<string, unknown> = {
    version: MAPS_SOURCE_VERSION,
    physical: { earth: {} },
    political: { earth: {} }
  };

  const physical = (manifest.physical as { earth: Record<string, unknown> }).earth;
  const political = (manifest.political as { earth: Record<string, unknown> }).earth;

  for (const asset of assets) {
    const target = asset.category === "physical" ? physical : political;
    if (!target[asset.layer]) target[asset.layer] = {};

    if (asset.layer === "boundaries" && asset.variant) {
      (target[asset.layer] as Record<string, string>)[`${asset.variant}_${asset.scale}`] = asset.uri;
      continue;
    }

    (target[asset.layer] as Record<string, string>)[asset.scale] = asset.uri;
  }

  return manifest;
};

export const buildManifestMeta = (assets: MapAssetRow[]) => {
  const meta: Record<string, { sha256: string; bytes: number; bbox: number[] }> = {};
  for (const asset of assets) {
    meta[asset.id] = {
      sha256: asset.sha256,
      bytes: asset.bytes,
      bbox: JSON.parse(asset.bbox_json) as number[]
    };
  }
  return meta;
};

export const computeManifestEtag = (assets: MapAssetRow[], version: string) => {
  const digest = crypto.createHash("sha256");
  digest.update(version);
  const ordered = [...assets].sort((a, b) => a.id.localeCompare(b.id));
  for (const asset of ordered) {
    digest.update(asset.id);
    digest.update(asset.sha256);
  }
  return `\"${digest.digest("hex")}\"`;
};

export const readMapAssets = (db: SqliteDb, sourceVersion: string) => {
  return db
    .prepare(
      `SELECT id, category, world, layer, variant, scale, uri, source_version, bytes, sha256, bbox_json, encoding, updated_at
       FROM map_assets WHERE source_version = ? ORDER BY category, world, layer, variant, scale`
    )
    .all(sourceVersion) as MapAssetRow[];
};
