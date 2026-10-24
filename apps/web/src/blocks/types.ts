export type BlockDocument = {
  version: 1
  blocks: Block[]
}

export type Block =
  | TextBlock
  | LatexBlock
  | TableBlock
  | ChartBlock
  | FlowBlock
  | MathBlock
  | ShapeBlock
  | ImageBlock
  | AudioBlock
  | VideoBlock
  | PdfBlock
  | LinkBlock
  | FormulaBlock

export type TextBlock = {
  id: string
  type: "text"
  content: string
}

export type LatexBlock = {
  id: string
  type: "latex"
  content: string
  displayMode: boolean // true = bloque centrado, false = inline
}

export type TableBlock = {
  id: string
  type: "table"
  title?: string
  headers: string[]
  rows: (string | number)[][]
  formulas?: Record<string, string> // clave: "A1", "B3", etc. valor: "=SUMA(A1:A5)"
  script?: string          // código DSL del docente
  showScriptProcess?: boolean // mostrar pasos de ejecución al alumno
}

export type ChartBlock = {
  id: string
  type: "chart"
  title?: string
  chartType: "bar" | "line" | "pie" | "scatter" | "area" | "bar-stacked" | "bar-grouped" | "area-stacked" | "histogram" | "radar" | "polar" | "boxplot" | "timeseries" | "treemap" | "sankey" | "pyramid"
  sourceTableId?: string   // si viene de una tabla del mismo documento
  xColumn?: number         // índice de columna para eje X (cuando usa tabla)
  yColumns?: number[]      // índices de columnas para eje Y (cuando usa tabla)
  data?: {                 // datos manuales cuando no usa tabla
    labels: string[]
    datasets: {
      label: string
      values: number[]
      xValues?: number[]   // valores X para gráficos de dispersión
      color?: string
    }[]
  }
  dateFormat?: string      // formato de fechas en el eje X para timeseries, ej: "DD/MM/YYYY", "MMM YYYY", "YYYY"
  hierarchy?: {            // datos jerárquicos para treemap y sankey
    name: string
    value?: number
    children?: { name: string; value: number; color?: string }[]
  }[]
  showStats?: boolean      // muestra tabla de estadísticas descriptivas debajo del gráfico
  showProcess?: boolean    // muestra los pasos de cálculo paso a paso
  statFunction?: "mean" | "median" | "mode" | "variance" | "stddev" | "frequency" | "quartiles" | "zscore" | "regression" | "correlation" | "summary"
  // PLAN-O — Ejes + Estilo (sólo aplica a los tipos cartesianos: bar,
  // bar-stacked, bar-grouped, line, area, area-stacked, timeseries).
  xAxisLabel?: string
  yAxisLabel?: string
  showGrid?: boolean       // default true
  showLegend?: boolean     // default true
  strokeWidth?: number     // grosor de línea (line, area, area-stacked, timeseries); default 2
  showValues?: boolean     // etiquetas de valor sobre las marcas; default false
}

export type FlowBlock = {
  id: string
  type: "flow"
  title?: string
  nodes: {
    id: string
    label: string
    x: number
    y: number
    shape?: "rect" | "diamond" | "circle"
    color?: string
  }[]
  edges: {
    id: string
    fromId: string
    toId: string
    label?: string
  }[]
}

export type MathBlock = {
  id: string
  type: "math"
  title?: string
  functions: {
    id: string
    expression: string // ej: "sin(x)", "x^2 - 2*x + 1"
    label?: string
    color?: string
  }[]
  xMin: number
  xMax: number
  yMin?: number  // si undefined, se calcula automáticamente
  yMax?: number
  samples?: number  // puntos a evaluar, default 400
  showGrid?: boolean
  showLegend?: boolean
}

export type ShapeBlock = {
  id: string
  type: "shape"
  title?: string
  collection: "basica" | "fisica" | "electrica" | "logica" | "matematica"
  canvasWidth?: number   // default 800
  canvasHeight?: number  // default 500
  items: ShapeItem[]
  connectors?: ShapeConnector[]
}

export type ShapeItem = {
  id: string
  shapeId: string        // clave de la forma en la coleccion, ej: "resistencia"
  x: number
  y: number
  label?: string
  rotation?: number      // grados, default 0
  color?: string
}

export type ShapeConnector = {
  id: string
  fromId: string
  toId: string
  label?: string
  style?: "solid" | "dashed" | "arrow"
}

export type ImageBlock = {
  id: string
  type: "image"
  url: string           // URL externa o base64
  alt: string           // descripción para TTS y accesibilidad
  caption?: string      // pie de foto visible
  width?: "small" | "medium" | "full"
}

/**
 * Bloque de audio (idiomas, dictados, podcasts, etc.). Acepta una URL
 * servida por nosotros (`/api/media/...`) o un enlace externo. El editor
 * permite subir un archivo a través de `POST /api/media/upload` con
 * validación de tipo (audio/*) y tamaño.
 */
export type AudioBlock = {
  id: string
  type: "audio"
  url: string            // URL del audio
  alt: string            // descripción para TTS y accesibilidad (transcripción opcional)
  caption?: string       // pie/leyenda visible
  mimeType?: string      // ej. "audio/mpeg", opcional, se detecta en la subida
}

/**
 * Bloque de video. Acepta URL a archivo (`/api/media/...`) o embed
 * (YouTube/Vimeo) — el editor distingue por patrón. Tier 1: player
 * nativo `<video>`; el embed externo se renderiza como `<iframe>`.
 */
export type VideoBlock = {
  id: string
  type: "video"
  url: string            // URL al archivo o al embed
  alt: string            // descripción para TTS
  caption?: string
  provider?: "file" | "youtube" | "vimeo"   // detectado en editor si vacío
}

/**
 * Bloque PDF. Visor embebido (`<iframe>`) + link de descarga. URL
 * servida por el backend o enlace externo válido.
 */
export type PdfBlock = {
  id: string
  type: "pdf"
  url: string
  title: string          // texto del link de descarga
  caption?: string
}

/**
 * Bloque enlace (link con título/descripción). No requiere subida —
 * URL externa o interna. WCAG: el `href` debe ser válido y `title`
 * no vacío.
 */
export type LinkBlock = {
  id: string
  type: "link"
  url: string
  title: string          // texto del ancla
  description?: string   // subtítulo/línea secundaria
}

/**
 * Bloque fórmula. Es la "vista adjunto" de la fórmula: la fuente de
 * verdad sigue siendo LaTeX (`LatexBlock`), pero este bloque permite
 * mostrarla destacada con un título (ej. "Teorema de Pitágoras").
 * Internamente reusa el renderer de KaTeX.
 */
export type FormulaBlock = {
  id: string
  type: "formula"
  content: string        // fuente LaTeX
  displayMode: boolean   // true = bloque centrado
  title?: string         // etiqueta visible encima
  alt: string            // descripción (lectura por TTS) — requerida
}
