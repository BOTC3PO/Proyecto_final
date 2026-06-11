/**
 * Validación de archivos GeoJSON subidos por el usuario (M5).
 *
 * Reglas:
 *   1. Tamaño: advertencia > 300 KB, rechazo > 2 MB.
 *   2. Estructura: tiene que ser JSON parseable, `type === "FeatureCollection"`,
 *      con `features` no vacío y al menos una feature con geometría soportada
 *      (Point / LineString / Polygon / MultiPoint / MultiLineString / MultiPolygon).
 *   3. Coordenadas en orden `[lon, lat]` (estándar GeoJSON). El helper no las
 *      convierte — confía en la spec — pero rechaza geometrías con un único
 *      número o formatos malformados.
 *
 * Devuelve un `ResultadoValidacion` con la `data` parseada y sanitizada
 * (solo las features que pasaron la validación) o un `error` en español.
 */
import type { GeoJsonFeature, GeoJsonFeatureCollection, GeoJsonGeometry } from "../../components/modulos/standalone/types";

export const GEOJSON_WARN_BYTES = 300 * 1024;
export const GEOJSON_MAX_BYTES = 2 * 1024 * 1024;

export type ResultadoValidacion =
  | { ok: true; data: GeoJsonFeatureCollection; advertencias: string[] }
  | { ok: false; error: string };

const GEOMETRIAS_VALIDAS = new Set([
  "Point",
  "LineString",
  "Polygon",
  "MultiPoint",
  "MultiLineString",
  "MultiPolygon",
]);

function esNumeroFinito(x: unknown): x is number {
  return typeof x === "number" && Number.isFinite(x);
}

function tuplaLonLat(par: unknown): [number, number] | null {
  if (!Array.isArray(par) || par.length < 2) return null;
  if (!esNumeroFinito(par[0]) || !esNumeroFinito(par[1])) return null;
  return [par[0], par[1]];
}

function validarGeometria(geom: unknown): geom is GeoJsonGeometry {
  if (!geom || typeof geom !== "object") return false;
  const g = geom as { type?: string; coordinates?: unknown };
  if (!g.type || !GEOMETRIAS_VALIDAS.has(g.type)) return false;
  if (!g.coordinates) return false;
  switch (g.type) {
    case "Point":
      return tuplaLonLat(g.coordinates) !== null;
    case "LineString":
    case "MultiPoint":
      return Array.isArray(g.coordinates) && g.coordinates.every((c) => tuplaLonLat(c) !== null);
    case "Polygon":
      return Array.isArray(g.coordinates) && g.coordinates.every(
        (ring) => Array.isArray(ring) && ring.every((p) => tuplaLonLat(p) !== null),
      );
    case "MultiLineString":
      return Array.isArray(g.coordinates) && g.coordinates.every(
        (line) => Array.isArray(line) && line.every((p) => tuplaLonLat(p) !== null),
      );
    case "MultiPolygon":
      return Array.isArray(g.coordinates) && g.coordinates.every(
        (poly) => Array.isArray(poly) && poly.every(
          (ring) => Array.isArray(ring) && ring.every((p) => tuplaLonLat(p) !== null),
        ),
      );
    default:
      return false;
  }
}

function sanitizarFeature(f: unknown): GeoJsonFeature | null {
  if (!f || typeof f !== "object") return null;
  const feature = f as { type?: string; geometry?: unknown; properties?: unknown };
  if (feature.type !== "Feature") return null;
  if (!validarGeometria(feature.geometry)) return null;
  return {
    type: "Feature",
    geometry: feature.geometry,
    properties: (feature.properties && typeof feature.properties === "object")
      ? (feature.properties as Record<string, unknown>)
      : undefined,
  };
}

/**
 * Parsea y valida un texto JSON como GeoJSON FeatureCollection.
 */
export function validarGeoJsonText(text: string, sizeBytes: number): ResultadoValidacion {
  if (sizeBytes > GEOJSON_MAX_BYTES) {
    const mb = (sizeBytes / (1024 * 1024)).toFixed(1);
    return { ok: false, error: `El archivo es demasiado grande (${mb} MB). El máximo permitido es 2 MB.` };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, error: "El archivo no es JSON válido." };
  }

  if (!parsed || typeof parsed !== "object") {
    return { ok: false, error: "El archivo no es un FeatureCollection válido." };
  }
  const root = parsed as { type?: string; features?: unknown };
  if (root.type !== "FeatureCollection") {
    return { ok: false, error: "El archivo no es un FeatureCollection válido." };
  }
  if (!Array.isArray(root.features) || root.features.length === 0) {
    return { ok: false, error: "El FeatureCollection no contiene features." };
  }

  const validas: GeoJsonFeature[] = [];
  for (const f of root.features) {
    const sf = sanitizarFeature(f);
    if (sf) validas.push(sf);
  }
  if (validas.length === 0) {
    return { ok: false, error: "Ninguna feature tiene una geometría soportada (Point/LineString/Polygon o sus Multi*)." };
  }

  const advertencias: string[] = [];
  if (sizeBytes > GEOJSON_WARN_BYTES) {
    const kb = Math.round(sizeBytes / 1024);
    advertencias.push(`El archivo es grande (${kb} KB) — puede hacer más lento el mapa.`);
  }
  if (validas.length < root.features.length) {
    const descartadas = root.features.length - validas.length;
    advertencias.push(`${descartadas} feature(s) con geometría inválida fueron descartadas.`);
  }

  return {
    ok: true,
    data: { type: "FeatureCollection", features: validas },
    advertencias,
  };
}
