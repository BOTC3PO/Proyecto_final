/**
 * Puente entre los datasets de VBLang (API `/api/vblang/datasets`) y el editor
 * de mapa (WO11). Una capa del mapa puede conectarse a un dataset: cada fila con
 * coordenadas se convierte en un marcador automático.
 *
 * La detección de columnas es por nombre (heurística tolerante a acentos y
 * mayúsculas): latitud, longitud y una etiqueta. Las filas sin coordenadas
 * numéricas válidas se descartan.
 */
import type { DatasetDetail } from "../../../domain/vblang/dataset.types";
import type { ColumnasMap } from "../../../domain/vblang/dataset.types";
import type { MapaDataset, MapaDatasetEntry } from "./types";

const LAT_KEYS = ["lat", "latitud", "latitude", "y"];
const LON_KEYS = ["lon", "lng", "long", "longitud", "longitude", "x"];
const LABEL_KEYS = ["etiqueta", "nombre", "label", "name", "titulo", "título", "ciudad", "lugar"];

function norm(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/** Busca la primera columna cuyo nombre normalizado matchee alguno de `candidatos`. */
function findColumn(columnas: ColumnasMap, candidatos: string[]): string | null {
  const names = Object.keys(columnas);
  for (const cand of candidatos) {
    const hit = names.find((n) => norm(n) === cand);
    if (hit) return hit;
  }
  // Segundo intento: coincidencia parcial (ej. "lat_norte").
  for (const cand of candidatos) {
    const hit = names.find((n) => norm(n).includes(cand));
    if (hit) return hit;
  }
  return null;
}

function toNumber(v: unknown): number | null {
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (typeof v === "string") {
    const n = Number(v.replace(",", "."));
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

/**
 * ¿Este dataset tiene columnas de lat/lon? Sólo esos se ofrecen para conectar a
 * una capa del mapa.
 */
export function datasetTieneCoordenadas(columnas: ColumnasMap): boolean {
  return findColumn(columnas, LAT_KEYS) !== null && findColumn(columnas, LON_KEYS) !== null;
}

/**
 * Convierte un `DatasetDetail` (filas crudas) en un `MapaDataset` con entries
 * geolocalizadas. Devuelve `null` si no se detectan columnas de coordenadas.
 */
export function datasetDetailToMapaDataset(detail: DatasetDetail): MapaDataset | null {
  const latCol = findColumn(detail.columnas, LAT_KEYS);
  const lonCol = findColumn(detail.columnas, LON_KEYS);
  if (!latCol || !lonCol) return null;
  const labelCol = findColumn(detail.columnas, LABEL_KEYS);

  const entries: MapaDatasetEntry[] = [];
  for (const fila of detail.filas) {
    const lat = toNumber(fila.datos[latCol]);
    const lon = toNumber(fila.datos[lonCol]);
    if (lat === null || lon === null) continue;

    const etiquetaRaw = labelCol ? fila.datos[labelCol] : undefined;
    const etiqueta =
      etiquetaRaw === undefined || etiquetaRaw === null ? "" : String(etiquetaRaw);

    // Conservar el resto de columnas como meta para el inspector.
    const meta: Record<string, string | number | null> = {};
    for (const [k, v] of Object.entries(fila.datos)) {
      if (k === latCol || k === lonCol || k === labelCol) continue;
      meta[k] = typeof v === "number" || typeof v === "string" ? v : v == null ? null : String(v);
    }

    entries.push({ id: fila.id, lat, lon, etiqueta, meta });
  }

  return { id: detail.id, nombre: detail.nombre, entries };
}
