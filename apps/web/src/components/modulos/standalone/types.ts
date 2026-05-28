export type StandaloneTool =
  | "tabla-periodica"
  | "escalador-recetas"
  | "linea-tiempo"
  | "mapa";

export const STANDALONE_TOOLS: { value: StandaloneTool; label: string }[] = [
  { value: "tabla-periodica", label: "Tabla periódica" },
  { value: "escalador-recetas", label: "Escalador de recetas" },
  { value: "linea-tiempo", label: "Línea de tiempo" },
  { value: "mapa", label: "Mapa histórico/geográfico" },
];

// Config para escalador — lo que guarda el docente en detail (JSON)
export type RecetaConfig = {
  tool: "escalador-recetas";
  titulo: string;
  descripcion?: string;
  porcionesBase: number;
  ingredientes: {
    id: string;
    nombre: string;
    cantidadBase: number;
    unidad: string;
  }[];
  pasos: string[];
};

// Config para línea de tiempo — lo que guarda el docente en detail (JSON)
export type LineaTiempoConfig = {
  tool: "linea-tiempo";
  titulo?: string;
  eventos: {
    id: string;
    titulo: string;
    fecha: string;
    descripcion?: string;
    tags?: string[];
  }[];
};

// Tabla periódica no tiene config — detail es simplemente "tabla-periodica"
export type TablaPeriodica = {
  tool: "tabla-periodica";
};

export type MapaAnotacion =
  | { id: string; tipo: "marcador"; lat: number; lon: number; etiqueta: string; color?: string; capaId?: string }
  | { id: string; tipo: "zona"; puntos: [number, number][]; etiqueta: string; color?: string; capaId?: string }
  | { id: string; tipo: "flecha"; desde: [number, number]; hasta: [number, number]; etiqueta?: string; color?: string; capaId?: string };

/**
 * Una capa agrupa anotaciones lógicamente (por ejemplo: "Ciudades",
 * "Rutas comerciales", "Batallas"). Tiene color por defecto y visibilidad.
 *
 * Opcionalmente puede estar conectada a un dataset declarado a nivel del
 * módulo: el editor renderiza marcadores automáticamente a partir de las
 * entradas del dataset (lat/lon + etiqueta).
 */
export type MapaCapa = {
  id: string;
  nombre: string;
  color: string;
  visible: boolean;
  /** Si está presente, la capa se rellena automáticamente desde un dataset.
   *  El "datasetId" es la clave por la que el editor/visor busca el dataset
   *  asociado en la prop `datasets` (no lo embebe en la config para no
   *  duplicar datos). */
  datasetId?: string;
};

/**
 * Una entrada de dataset que el editor de mapa entiende: una fila con
 * coordenadas y una etiqueta.
 */
export type MapaDatasetEntry = {
  id: string;
  lat: number;
  lon: number;
  etiqueta: string;
  /** Campos adicionales arbitrarios que se mostrarán en el inspector. */
  meta?: Record<string, string | number | null>;
};

/**
 * Forma del dataset tal como lo recibe el editor/visor por props. NO se
 * guarda dentro de la MapaConfig; se pasa aparte para que múltiples
 * recursos del módulo puedan compartir la misma fuente.
 */
export type MapaDataset = {
  id: string;
  nombre: string;
  entries: MapaDatasetEntry[];
};

export type MapaConfig = {
  tool: "mapa";
  titulo?: string;
  modo: "political" | "physical";
  escala: "110m" | "50m";
  /** Capas declaradas. Si está vacío, las anotaciones quedan en una
   *  "capa default" implícita gestionada por el editor. */
  capas?: MapaCapa[];
  anotaciones: MapaAnotacion[];
};

export type StandaloneConfig = RecetaConfig | LineaTiempoConfig | TablaPeriodica | MapaConfig;

export function parseStandaloneConfig(detail: string): StandaloneConfig | null {
  if (detail === "tabla-periodica") return { tool: "tabla-periodica" };
  try {
    const parsed = JSON.parse(detail);
    if (parsed?.tool) return parsed as StandaloneConfig;
    return null;
  } catch {
    return null;
  }
}

/** Capa que se usa cuando una anotación no tiene `capaId` o no hay capas. */
export const MAPA_CAPA_DEFAULT_ID = "default";

export function makeMapaCapaDefault(): MapaCapa {
  return {
    id: MAPA_CAPA_DEFAULT_ID,
    nombre: "Anotaciones",
    color: "#1a1a1a",
    visible: true,
  };
}

export function makeEmptyMapaConfig(): MapaConfig {
  return {
    tool: "mapa",
    titulo: "",
    modo: "political",
    escala: "110m",
    capas: [makeMapaCapaDefault()],
    anotaciones: [],
  };
}
