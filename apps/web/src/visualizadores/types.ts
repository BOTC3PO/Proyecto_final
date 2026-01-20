export type VisualSpec =
  | TimelineSpec
  | ConceptMapSpec
  | ChartSpec
  | FlowSpec
  | MapSpec
  | FuncionesGraficoSpec
  | GeometriaSpec
  | TrigonometriaSpec
  | AlgebraCalculoSpec;

export interface TimelineSpec {
  kind: "timeline";
  title?: string;
  range?: {
    start?: string;
    end?: string;
  };
  markers?: TimelineMarker[];
  events: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export interface TimelineMarker {
  id: string;
  label: string;
  date: string;
  description?: string;
}

export interface ConceptMapSpec {
  kind: "concept-map";
  title?: string;
  nodes: ConceptNode[];
  links: ConceptLink[];
}

export interface ConceptNode {
  id: string;
  label: string;
  description?: string;
  group?: string;
}

export interface ConceptLink {
  id: string;
  sourceId: string;
  targetId: string;
  relation: string;
}

export interface ChartSpec {
  kind: "chart";
  chartType: "bar" | "line" | "pie" | "area" | "scatter";
  title?: string;
  xAxis?: AxisSpec;
  yAxis?: AxisSpec;
  series: ChartSeries[];
}

export interface AxisSpec {
  label?: string;
  unit?: string;
}

export interface ChartSeries {
  id: string;
  label: string;
  data: Array<{
    x: string | number;
    y: number;
  }>;
  color?: string;
}

export interface FlowSpec {
  kind: "flow";
  title?: string;
  steps: FlowStep[];
  connections: FlowConnection[];
}

export interface FlowStep {
  id: string;
  label: string;
  description?: string;
  type?: "start" | "process" | "decision" | "end";
}

export interface FlowConnection {
  id: string;
  fromId: string;
  toId: string;
  label?: string;
}

export interface MapSpec {
  kind: "map";
  title?: string;
  viewport?: {
    center: [number, number];
    zoom?: number;
  };
  markers: MapMarker[];
  routes?: MapRoute[];
}

export interface MapMarker {
  id: string;
  label: string;
  coordinates: [number, number];
  description?: string;
  category?: string;
}

export interface MapRoute {
  id: string;
  label?: string;
  path: Array<[number, number]>;
  color?: string;
}

export interface FuncionesGraficoSpec {
  kind: "funciones-grafico";
  title?: string;
  description?: string;
  functions: Array<{
    id: string;
    expression: string;
    color?: string;
    domain?: string;
    notes?: string;
  }>;
  variables?: Array<{
    symbol: string;
    description?: string;
    value?: string | number;
  }>;
}

export interface GeometriaSpec {
  kind: "geometria";
  title?: string;
  description?: string;
  figures: Array<{
    id: string;
    name: string;
    type: "triangulo" | "circulo" | "poligono" | "otro";
    properties?: Array<{
      label: string;
      value: string;
    }>;
    formula?: string;
    notes?: string;
  }>;
}

export interface TrigonometriaSpec {
  kind: "trigonometria";
  title?: string;
  description?: string;
  identities: Array<{
    id: string;
    expression: string;
    notes?: string;
  }>;
  angles?: Array<{
    id: string;
    label: string;
    value: string;
    ratio?: string;
  }>;
}

export interface AlgebraCalculoSpec {
  kind: "algebra-calculo";
  title?: string;
  description?: string;
  topics: Array<{
    id: string;
    label: string;
    steps?: string[];
    formula?: string;
    notes?: string;
  }>;
}
