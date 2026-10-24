#!/usr/bin/env node
/**
 * build-provincias.mjs
 *
 * Toma el GeoJSON global de provincias/estados de Natural Earth
 * (`ne_10m_admin_1_states_provinces.geojson`, ~4600 features, ~39 MB) y
 * genera UN TopoJSON liviano por país, listo para servir desde la API
 * de mapas (mismo patrón que el resto de `api/src/maps/maps/`).
 *
 * Qué hace:
 *   1. Agrupa los features por país (`iso_a2`; fallback al slug de `admin`
 *      cuando `iso_a2` viene vacío o "-99", como pasa con territorios en
 *      disputa o sin código ISO).
 *   2. Recorta las properties a las pocas útiles (el archivo de NE trae
 *      ~121 por feature; nos quedamos con las que el editor/renderer usan).
 *   3. Construye un TopoJSON por país (dedup de arcos compartidos),
 *      lo cuantiza y opcionalmente lo simplifica.
 *   4. Escribe `<ISO_A2>.topo.json` por país + un `index.json` con el
 *      catálogo (código país -> nombre, cantidad de divisiones).
 *
 * Uso:
 *   node build-provincias.mjs <input.geojson> <outDir> [--simplify=0.0003] [--quantize=1e5]
 *
 * Ejemplo:
 *   node build-provincias.mjs ne_10m_admin_1_states_provinces.geojson ./out
 *   node build-provincias.mjs ne_10m_admin_1_states_provinces.geojson ./out --simplify=0.0005
 *
 * Deps: topojson-server, topojson-simplify
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { basename } from "node:path";
import { topology } from "topojson-server";
import { presimplify, simplify } from "topojson-simplify";
import { quantize } from "topojson-client";

// ── Config / args ──────────────────────────────────────────────────────
const [, , inPath, outDir = "./out", ...flags] = process.argv;

if (!inPath) {
  console.error(
    "Uso: node build-provincias.mjs <input.geojson> <outDir> [--simplify=N] [--quantize=N]",
  );
  process.exit(1);
}

const flag = (name, def) => {
  const f = flags.find((x) => x.startsWith(`--${name}=`));
  return f ? Number(f.split("=")[1]) : def;
};

// minWeight de simplificación en grados² aprox. 0 = sin simplificar (solo
// cuantizar). Subilo para mapas más livianos a costa de bordes más rectos.
const SIMPLIFY = flag("simplify", 0.0003);
// resolución de la grilla de cuantización (más alto = más preciso/pesado).
const QUANTIZE = flag("quantize", 1e5);

// Properties que nos quedamos (el resto se descarta para achicar).
const KEEP_PROPS = [
  "name", // nombre (inglés / default)
  "name_es", // nombre en español -> usar para respuesta_nombre
  "iso_3166_2", // código ISO de subdivisión (ej. "AR-E")
  "type", // tipo en idioma local ("Provincia")
  "type_en", // tipo en inglés ("Province")
  "adm1_code", // código propio de Natural Earth
];

// ── Helpers ────────────────────────────────────────────────────────────
const slug = (s) =>
  String(s || "sin_pais")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

/** Clave de país: iso_a2 si es válido, si no slug de admin. */
function countryKey(props) {
  const iso = props.iso_a2;
  if (typeof iso === "string" && /^[A-Z]{2}$/.test(iso) && iso !== "-99") {
    return iso;
  }
  return slug(props.admin);
}

function trimProps(props) {
  const out = {};
  for (const k of KEEP_PROPS) if (props[k] != null) out[k] = props[k];
  return out;
}

// ── Carga ──────────────────────────────────────────────────────────────
console.log(`Leyendo ${basename(inPath)} ...`);
const fc = JSON.parse(readFileSync(inPath, "utf8"));
if (fc.type !== "FeatureCollection") {
  console.error("El input no es un FeatureCollection GeoJSON.");
  process.exit(1);
}
console.log(`  ${fc.features.length} features globales.`);

// ── Agrupar por país ───────────────────────────────────────────────────
const porPais = new Map(); // key -> { admin, features[] }
for (const f of fc.features) {
  const p = f.properties || {};
  const key = countryKey(p);
  if (!porPais.has(key)) porPais.set(key, { admin: p.admin || key, features: [] });
  porPais.get(key).features.push({
    type: "Feature",
    properties: trimProps(p),
    geometry: f.geometry,
  });
}
console.log(`  ${porPais.size} países/territorios.`);

// ── Construir TopoJSON por país ────────────────────────────────────────
mkdirSync(outDir, { recursive: true });
const index = [];

for (const [key, { admin, features }] of [...porPais].sort()) {
  // 1) topology: dedup de arcos compartidos entre provincias limítrofes.
  let topo = topology({ provincias: { type: "FeatureCollection", features } });

  // 2) simplificación opcional (presimplify calcula pesos, simplify poda).
  if (SIMPLIFY > 0) {
    topo = simplify(presimplify(topo), SIMPLIFY);
  }

  // 3) cuantización: baja la precisión de coordenadas (gran ahorro).
  topo = quantize(topo, QUANTIZE);

  const json = JSON.stringify(topo);
  const file = `${key}.topo.json`;
  writeFileSync(`${outDir}/${file}`, json);

  index.push({
    pais: key,
    nombre: admin,
    divisiones: features.length,
    archivo: file,
    bytes: Buffer.byteLength(json),
  });
}

// ── Index ──────────────────────────────────────────────────────────────
index.sort((a, b) => a.pais.localeCompare(b.pais));
writeFileSync(`${outDir}/index.json`, JSON.stringify(index, null, 2));

const totalBytes = index.reduce((s, x) => s + x.bytes, 0);
console.log(`\nListo: ${index.length} archivos en ${outDir}/`);
console.log(`Total: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
const ar = index.find((x) => x.pais === "AR");
if (ar)
  console.log(
    `Argentina: ${ar.divisiones} divisiones, ${(ar.bytes / 1024).toFixed(1)} KB`,
  );
