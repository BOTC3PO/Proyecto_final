// mapTypes.ts
// Tipos genéricos de mapa para módulos que usan mapas interactivos.
// Reutilizable en geografía, historia y cualquier otra materia que los necesite.

// ── Capas disponibles (Natural Earth) ───────────────────────────

export type MapPhysicalLayer =
  | "land"
  | "ocean"
  | "lakes"
  | "rivers"
  | "coastline"
  | "geographic_lines";

export type MapPoliticalLayer =
  | "countries"
  | "states_provinces"
  | "places"
  | "boundaries";

export interface MapLayerDef {
  type: "physical" | "political";
  layer: MapPhysicalLayer | MapPoliticalLayer;
  /** "110m" = menor resolución / más rápido; "50m" = mayor detalle */
  scale?: "110m" | "50m";
  style?: {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;
  };
}

// ── Highlights (elementos resaltados) ───────────────────────────

export type MapHighlightKind =
  | "country"  // ISO 3166-1 alpha-3 (ej. "ARG")
  | "region"   // nombre natural (ej. "Patagonia")
  | "city"     // nombre (ej. "Buenos Aires")
  | "river"    // nombre (ej. "Amazonas")
  | "area";    // área genérica

export interface MapHighlight {
  kind: MapHighlightKind;
  /** ISO-3 para países, nombre natural para el resto */
  id: string;
  /** Etiqueta visible en el mapa */
  label?: string;
  /** Color de resaltado (CSS) */
  color?: string;
}

// ── Proyecciones ─────────────────────────────────────────────────

export type MapProjection =
  | "mercator"
  | "natural-earth"
  | "equirectangular"
  | "orthographic";

// ── MapSpec ──────────────────────────────────────────────────────

/**
 * Especificación completa de un mapa.
 * Se puede incrustar en cualquier tipo de pregunta:
 *   - como campo `map` en mc/tf/match → mapa de contexto/teoría
 *   - como campo `map` en map-select  → mapa interactivo de ejercicio
 */
export interface MapSpec {
  /** Capas a renderizar en orden de abajo a arriba */
  layers: MapLayerDef[];
  /** Recorte geográfico [minLon, minLat, maxLon, maxLat]. Omitir = mundo entero */
  bbox?: [number, number, number, number];
  /** Elementos resaltados (para teoría o para feedback post-corrección) */
  highlight?: MapHighlight[];
  /** Proyección cartográfica (por defecto "natural-earth") */
  projection?: MapProjection;
  /** Título visible encima del mapa */
  title?: string;
  /** Descripción o nota metodológica bajo el mapa */
  description?: string;
}

// ── Pregunta map-select ──────────────────────────────────────────

/**
 * Pregunta interactiva: el alumno selecciona un elemento del mapa.
 *
 * Validación: la respuesta del alumno es un string `id` que debe
 * estar incluido en `correctIds`.
 *
 * Reutilizable en geografía, historia, ciencias sociales, etc.
 */
export interface MapSelectQuestion {
  id: string;
  type: "map-select";
  prompt: string;
  /** Mapa a mostrar */
  map: MapSpec;
  /** Tipo de elemento que el alumno debe seleccionar */
  selectKind: MapHighlightKind;
  /**
   * IDs de la(s) respuesta(s) correcta(s).
   * ISO-3 para países (ej. ["ARG"]), nombre para otros (ej. ["Amazonas"]).
   */
  correctIds: string[];
  /**
   * Opciones seleccionables explícitas.
   * Si se omite → todas las entidades visibles del mapa son clickeables.
   * Si se provee → sólo estas entidades son seleccionables (útil para ejercicios guiados).
   */
  selectOptions?: Array<{ id: string; label: string }>;
  explanation: string;
  tags: string[];
}

// ── Capas base predefinidas (conveniencia) ───────────────────────

/** Mapa político mundial estándar (land + countries + boundaries) */
export const BASE_LAYERS_POLITICAL_WORLD: MapLayerDef[] = [
  { type: "physical", layer: "land",       scale: "110m", style: { fill: "#f0e6c8" } },
  { type: "physical", layer: "ocean",      scale: "110m", style: { fill: "#c6e2f5" } },
  { type: "political", layer: "countries", scale: "110m", style: { fill: "transparent", stroke: "#666", strokeWidth: 0.5 } },
  { type: "political", layer: "boundaries", scale: "110m" },
];

/** Mapa físico mundial estándar (land + ríos + lagos) */
export const BASE_LAYERS_PHYSICAL_WORLD: MapLayerDef[] = [
  { type: "physical", layer: "land",      scale: "110m", style: { fill: "#d4e6b5" } },
  { type: "physical", layer: "ocean",     scale: "110m", style: { fill: "#aad4f5" } },
  { type: "physical", layer: "lakes",     scale: "110m", style: { fill: "#aad4f5" } },
  { type: "physical", layer: "rivers",    scale: "110m", style: { stroke: "#6ab0e4", strokeWidth: 0.7 } },
  { type: "physical", layer: "coastline", scale: "110m", style: { stroke: "#888" } },
];

/** Mapa político de América del Sur */
export const BASE_LAYERS_SOUTH_AMERICA: MapLayerDef[] = [
  { type: "physical", layer: "land",       scale: "50m", style: { fill: "#f0e6c8" } },
  { type: "physical", layer: "ocean",      scale: "50m", style: { fill: "#c6e2f5" } },
  { type: "physical", layer: "rivers",     scale: "50m", style: { stroke: "#6ab0e4", strokeWidth: 0.6 } },
  { type: "political", layer: "countries", scale: "50m", style: { fill: "transparent", stroke: "#555", strokeWidth: 0.7 } },
];
