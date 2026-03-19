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
}

export type ChartBlock = {
  id: string
  type: "chart"
  title?: string
  chartType: "bar" | "line" | "pie" | "scatter" | "area" | "bar-stacked" | "bar-grouped" | "area-stacked" | "histogram" | "radar" | "polar" | "boxplot"
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
  showStats?: boolean      // muestra tabla de estadísticas descriptivas debajo del gráfico
  showProcess?: boolean    // muestra los pasos de cálculo paso a paso
  statFunction?: "mean" | "median" | "mode" | "variance" | "stddev" | "frequency" | "quartiles" | "zscore" | "regression" | "correlation" | "summary"
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
  collection: "basica" | "fisica" | "electrica" | "logica"
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
