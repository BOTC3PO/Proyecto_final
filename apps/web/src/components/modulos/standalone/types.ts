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
  | { id: string; tipo: "marcador"; lat: number; lon: number; etiqueta: string; color?: string }
  | { id: string; tipo: "zona"; puntos: [number, number][]; etiqueta: string; color?: string }
  | { id: string; tipo: "flecha"; desde: [number, number]; hasta: [number, number]; etiqueta?: string; color?: string };

export type MapaConfig = {
  tool: "mapa";
  titulo?: string;
  modo: "political" | "physical";
  escala: "110m" | "50m";
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
