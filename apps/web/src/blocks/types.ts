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
}

export type ChartBlock = {
  id: string
  type: "chart"
  title?: string
  chartType: "bar" | "line" | "pie" | "scatter" | "area" | "bar-stacked" | "bar-grouped" | "area-stacked" | "histogram"
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
