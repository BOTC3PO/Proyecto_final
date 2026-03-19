export type StandaloneTool =
  | "tabla-periodica"
  | "escalador-recetas"
  | "linea-tiempo";

export const STANDALONE_TOOLS: { value: StandaloneTool; label: string }[] = [
  { value: "tabla-periodica", label: "Tabla periódica" },
  { value: "escalador-recetas", label: "Escalador de recetas" },
  { value: "linea-tiempo", label: "Línea de tiempo" },
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

export type StandaloneConfig = RecetaConfig | LineaTiempoConfig | TablaPeriodica;

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
