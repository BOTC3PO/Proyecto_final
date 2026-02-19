import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import {
  DEFAULT_MAPS_SQLITE_PATH,
  MAPS_SOURCE_VERSION,
  openMapsDb
} from "../src/maps/catalog";

type Manifest = {
  version?: string;
  physical?: { earth?: Record<string, Record<string, string>> };
  political?: { earth?: Record<string, Record<string, string>> };
};

type ParsedKey = {
  layer: string;
  variant: string | null;
  scale: string;
};

const manifestPath = path.resolve(process.cwd(), process.env.MAPS_MANIFEST_PATH ?? "src/maps/maps/index.json");
const mapsRootPath = path.resolve(process.cwd(), process.env.MAPS_ROOT_PATH ?? "src/maps/maps");
const sqlitePath = path.resolve(process.cwd(), process.env.CONTENT_SQLITE_PATH ?? DEFAULT_MAPS_SQLITE_PATH);
const sourceVersion = process.env.MAPS_SOURCE_VERSION ?? MAPS_SOURCE_VERSION;

const parseLayerKey = (layer: string, key: string): ParsedKey => {
  if (layer === "boundaries") {
    const match = key.match(/^(land|maritime)_(\d+m)$/);
    if (match) {
      return { layer, variant: match[1], scale: match[2] };
    }
  }
  return { layer, variant: null, scale: key };
};

const toCanonicalId = (category: string, world: string, parsed: ParsedKey) => {
  if (parsed.variant) return `${category}.${world}.${parsed.layer}.${parsed.variant}.${parsed.scale}`;
  return `${category}.${world}.${parsed.layer}.${parsed.scale}`;
};

const getFilePathFromUri = (uri: string) => {
  const relative = uri.replace(/^\/api\/maps\//, "");
  return path.join(mapsRootPath, relative);
};

const calculateSha256 = (content: Buffer) => crypto.createHash("sha256").update(content).digest("hex");

const decodeArcBBox = (arc: number[][], transform?: { scale: number[]; translate: number[] }) => {
  let x = 0;
  let y = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const point of arc) {
    x += point[0] ?? 0;
    y += point[1] ?? 0;

    const absX = transform ? x * transform.scale[0] + transform.translate[0] : x;
    const absY = transform ? y * transform.scale[1] + transform.translate[1] : y;

    if (absX < minX) minX = absX;
    if (absY < minY) minY = absY;
    if (absX > maxX) maxX = absX;
    if (absY > maxY) maxY = absY;
  }

  return { minX, minY, maxX, maxY };
};

const computeTopoBbox = (topology: Record<string, unknown>): [number, number, number, number] => {
  const rawRootBbox = topology.bbox;
  if (
    Array.isArray(rawRootBbox) &&
    rawRootBbox.length === 4 &&
    rawRootBbox.every((v) => typeof v === "number" && Number.isFinite(v))
  ) {
    return [rawRootBbox[0], rawRootBbox[1], rawRootBbox[2], rawRootBbox[3]];
  }

  const arcs = Array.isArray(topology.arcs) ? (topology.arcs as number[][][]) : [];
  const transform =
    topology.transform && typeof topology.transform === "object"
      ? (topology.transform as { scale?: number[]; translate?: number[] })
      : undefined;

  const topoTransform =
    transform?.scale && transform?.translate && transform.scale.length >= 2 && transform.translate.length >= 2
      ? { scale: transform.scale, translate: transform.translate }
      : undefined;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const arc of arcs) {
    const arcBBox = decodeArcBBox(arc, topoTransform);
    if (arcBBox.minX < minX) minX = arcBBox.minX;
    if (arcBBox.minY < minY) minY = arcBBox.minY;
    if (arcBBox.maxX > maxX) maxX = arcBBox.maxX;
    if (arcBBox.maxY > maxY) maxY = arcBBox.maxY;
  }

  if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
    return [-180, -90, 180, 90];
  }

  return [minX, minY, maxX, maxY];
};

const collectAssets = (manifest: Manifest) => {
  const collected: Array<{
    id: string;
    category: "physical" | "political";
    world: string;
    layer: string;
    variant: string | null;
    scale: string;
    uri: string;
  }> = [];

  for (const category of ["physical", "political"] as const) {
    const root = manifest[category]?.earth;
    if (!root) continue;

    for (const [layer, scales] of Object.entries(root)) {
      for (const [scaleKey, uri] of Object.entries(scales)) {
        const parsed = parseLayerKey(layer, scaleKey);
        collected.push({
          id: toCanonicalId(category, "earth", parsed),
          category,
          world: "earth",
          layer,
          variant: parsed.variant,
          scale: parsed.scale,
          uri
        });
      }
    }
  }

  return collected;
};

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as Manifest;
const db = openMapsDb(sqlitePath, false);

const upsert = db.prepare(`
  INSERT INTO map_assets(id, category, world, layer, variant, scale, uri, source_version, bytes, sha256, bbox_json, encoding, updated_at)
  VALUES (@id, @category, @world, @layer, @variant, @scale, @uri, @source_version, @bytes, @sha256, @bbox_json, @encoding, @updated_at)
  ON CONFLICT(id) DO UPDATE SET
    category=excluded.category,
    world=excluded.world,
    layer=excluded.layer,
    variant=excluded.variant,
    scale=excluded.scale,
    uri=excluded.uri,
    source_version=excluded.source_version,
    bytes=excluded.bytes,
    sha256=excluded.sha256,
    bbox_json=excluded.bbox_json,
    encoding=excluded.encoding,
    updated_at=excluded.updated_at
`);

const currentStmt = db.prepare("SELECT sha256 FROM map_assets WHERE id = ?");

let inserted = 0;
let updated = 0;
let skipped = 0;

for (const asset of collectAssets(manifest)) {
  const filePath = getFilePathFromUri(asset.uri);
  const content = fs.readFileSync(filePath);
  const stats = fs.statSync(filePath);
  const sha256 = calculateSha256(content);
  const existing = currentStmt.get(asset.id) as { sha256?: string } | undefined;

  if (existing?.sha256 === sha256) {
    skipped += 1;
    continue;
  }

  const topology = JSON.parse(content.toString("utf8")) as Record<string, unknown>;
  const bbox = computeTopoBbox(topology);

  upsert.run({
    ...asset,
    source_version: sourceVersion,
    bytes: stats.size,
    sha256,
    bbox_json: JSON.stringify(bbox),
    encoding: null,
    updated_at: Date.now()
  });

  if (existing?.sha256) updated += 1;
  else inserted += 1;
}

console.log(
  JSON.stringify(
    {
      ok: true,
      manifestPath,
      mapsRootPath,
      sqlitePath,
      sourceVersion,
      inserted,
      updated,
      skipped
    },
    null,
    2
  )
);
