export type VisualSpec =
  | TimelineSpec
  | ConceptMapSpec
  | ChartSpec
  | FlowSpec
  | MapSpec
  | FuncionesGraficoSpec
  | GeometriaSpec
  | TrigonometriaSpec
  | AlgebraCalculoSpec
  | FuncionesGraficasSpec
  | GeometriaPlanaEspacialSpec
  | TrigonometriaAvanzadaSpec
  | AlgebraCalculoVisualSpec
  | PhysicsMotionChartSpec;

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

export interface FuncionesGraficasSpec {
  kind: "funciones-graficas";
  title?: string;
  description?: string;
  /**
   * Ejes mínimos esperados para renderizar: etiqueta y rango en x/y.
   */
  axes: {
    x: {
      label?: string;
      min: number;
      max: number;
    };
    y: {
      label?: string;
      min: number;
      max: number;
    };
  };
  /**
   * Funciones lineales, cuadráticas o paramétricas con expresión y dominio.
   */
  functions: Array<{
    id: string;
    type: "lineal" | "cuadratica" | "parametrica";
    expression: string;
    domain: {
      start: number;
      end: number;
      step?: number;
    };
    /**
     * Solo para paramétricas: ecuaciones x(t), y(t) y parámetro.
     */
    parametric?: {
      x: string;
      y: string;
      parameter: string;
      range: {
        start: number;
        end: number;
        step?: number;
      };
    };
    /**
     * Puntos clave (intersecciones, vértice, cortes con ejes).
     */
    keyPoints?: Array<{
      x: number;
      y: number;
      label?: string;
    }>;
    color?: string;
    notes?: string;
  }>;
}

export interface GeometriaPlanaEspacialSpec {
  kind: "geometria-plana-espacial";
  title?: string;
  description?: string;
  /**
   * Figuras con tipo, dimensiones y propiedades clave.
   */
  figures: Array<{
    id: string;
    name: string;
    dimension: "plana" | "espacial";
    type:
      | "triangulo"
      | "cuadrilatero"
      | "circulo"
      | "poligono"
      | "prisma"
      | "piramide"
      | "esfera"
      | "cilindro"
      | "cono"
      | "otro";
    /**
     * Parámetros mínimos: lados, radios, alturas, aristas, etc.
     */
    parameters: Array<{
      label: string;
      value: number | string;
      unit?: string;
    }>;
    /**
     * Puntos clave y ángulos destacados para la construcción.
     */
    keyPoints?: Array<{
      id: string;
      label?: string;
      coordinates: [number, number] | [number, number, number];
    }>;
    angles?: Array<{
      id: string;
      vertex: string;
      valueDeg: number;
      label?: string;
    }>;
    properties?: Array<{
      label: string;
      value: string;
    }>;
    formula?: string;
    notes?: string;
  }>;
}

export interface TrigonometriaAvanzadaSpec {
  kind: "trigonometria-avanzada";
  title?: string;
  description?: string;
  /**
   * Datos mínimos del círculo unitario (radio y puntos clave).
   */
  unitCircle: {
    radius: number;
    points: Array<{
      angleDeg: number;
      x: number;
      y: number;
      label?: string;
    }>;
  };
  /**
   * Funciones seno, coseno y tangente con puntos notables.
   */
  functions: Array<{
    id: string;
    type: "seno" | "coseno" | "tangente";
    expression?: string;
    amplitude?: number;
    period?: number;
    phaseShift?: number;
    keyPoints: Array<{
      x: number;
      y: number;
      label?: string;
    }>;
    notes?: string;
  }>;
  angles?: Array<{
    id: string;
    label: string;
    valueDeg: number;
    valueRad?: string;
    ratio?: string;
  }>;
}

export interface AlgebraCalculoVisualSpec {
  kind: "algebra-calculo-visual";
  title?: string;
  description?: string;
  /**
   * Sistemas de ecuaciones con ecuaciones mínimas y solución.
   */
  systems: Array<{
    id: string;
    equations: string[];
    solution?: Record<string, number | string>;
    steps?: string[];
  }>;
  /**
   * Derivadas con función base, derivada y puntos críticos.
   */
  derivatives: Array<{
    id: string;
    function: string;
    derivative?: string;
    criticalPoints?: Array<{
      x: number;
      y: number;
      label?: string;
    }>;
    notes?: string;
  }>;
  /**
   * Integrales con función, límites y área esperada.
   */
  integrals: Array<{
    id: string;
    function: string;
    bounds: {
      lower: number;
      upper: number;
    };
    area?: number;
    notes?: string;
  }>;
}

export interface PhysicsMotionChartSpec {
  kind: "physics-motion-chart";
  title?: string;
  description?: string;
  motion: {
    type: "MRU" | "MRUV";
    time: number;
    initialPosition?: number;
    initialVelocity?: number;
    acceleration?: number;
    displacement?: number;
    notes?: string[];
  };
  axes: {
    time: {
      label?: string;
      unit?: string;
    };
    position: {
      label?: string;
      unit?: string;
    };
    velocity: {
      label?: string;
      unit?: string;
    };
  };
  series: {
    position: {
      id: string;
      label: string;
      data: Array<{ t: number; value: number }>;
      color?: string;
    };
    velocity: {
      id: string;
      label: string;
      data: Array<{ t: number; value: number }>;
      color?: string;
    };
  };
  annotations?: {
    slope?: {
      time: number;
      value: number;
      unit?: string;
      label?: string;
    };
    area?: {
      time: number;
      value: number;
      unit?: string;
      label?: string;
    };
  };
}
