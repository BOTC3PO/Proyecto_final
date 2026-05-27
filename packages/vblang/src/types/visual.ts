/**
 * Tipos visuales compartidos entre apps/web (generadoresV2) y el adaptador
 * de @vb/vblang. Originalmente vivían en apps/web/src/generadoresV2/core/types.ts;
 * se movieron acá (Sprint 10B · B5) para que el adapter pueda tipar `visualSpec`
 * sin forzar al package a importar desde apps/web (regla arquitectónica).
 *
 * Pure data — sin dependencias externas.
 */

export interface LineChartSpec {
  kind: "line-chart";
  title?: string;
  xLabel?: string;
  yLabel?: string;
  xUnit?: string;
  yUnit?: string;
  series: {
    id: string;
    label: string;
    color?: string;
    points: { x: number; y: number }[];
  }[];
  annotations?: {
    id: string;
    x: number;
    y?: number;
    label: string;
    color?: string;
  }[];
}

export interface VectorDiagramSpec {
  kind: "vector-diagram";
  vectors: {
    id: string;
    label: string;
    dx: number;
    dy: number;
    color?: string;
  }[];
}

export interface CircuitSpec {
  kind: "circuit";
  elements: { id: string; type: string; value?: number; unit?: string }[];
}

export interface StaticImageSpec {
  kind: "static-image";
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface TimelineSpec {
  kind: "timeline";
  title?: string;
  range?: { start?: string; end?: string };
  events: {
    id: string;
    title: string;
    date: string;
    description?: string;
    tags?: string[];
  }[];
  markers?: { id: string; label?: string; date: string }[];
}

export interface LatexSpec {
  kind: "latex";
  content: string;
  displayMode?: boolean;
}

export type VisualSpec =
  | LineChartSpec
  | VectorDiagramSpec
  | CircuitSpec
  | StaticImageSpec
  | TimelineSpec
  | LatexSpec;
