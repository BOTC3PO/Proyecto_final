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
  | PhysicsMotionChartSpec
  | PhysicsForcesVectorSpec
  | PhysicsSimulationSpec
  | EnergyChartSpec
  | CircuitSpec
  | FieldLinesSpec
  | WaveInterferenceSpec
  | OpticsRaySpec
  | ChemStructureSpec;

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

export interface EnergyChartAxisSpec extends AxisSpec {
  variable: "tiempo" | "posicion";
}

export interface EnergyChartSeries {
  id: string;
  label: string;
  energyType: "Ep" | "Ec" | "Etotal";
  data: Array<{
    x: number;
    y: number;
  }>;
  color?: string;
}

export interface EnergyAuxChartSpec {
  title?: string;
  xAxis: AxisSpec;
  yAxis: AxisSpec;
  data: Array<{
    x: number;
    y: number;
  }>;
  color?: string;
}

export interface EnergyChartSpec {
  kind: "energy-chart";
  title?: string;
  description?: string;
  axes: {
    x: EnergyChartAxisSpec;
    y: AxisSpec;
  };
  series: EnergyChartSeries[];
  totalSeriesId?: string;
  conservation?: {
    tolerance?: number;
    note?: string;
  };
  thermodynamic?: {
    pv?: EnergyAuxChartSpec;
    ts?: EnergyAuxChartSpec;
  };
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

export interface PhysicsForcesVectorSpec {
  kind: "physics-forces-vectors";
  title?: string;
  description?: string;
  unit?: string;
  body?: {
    label?: string;
    shape?: "rect" | "circle";
    width?: number;
    height?: number;
    color?: string;
  };
  vectors: Array<{
    id: string;
    label?: string;
    magnitude: number;
    angleDeg: number;
    color?: string;
    showComponents?: boolean;
    componentLabels?: {
      x?: string;
      y?: string;
    };
  }>;
  options?: {
    showComponents?: boolean;
    showAxes?: boolean;
  };
}

export interface CircuitSpec {
  kind: "circuit";
  title?: string;
  description?: string;
  nodes: CircuitNode[];
  components: CircuitComponent[];
  connections?: CircuitConnection[];
  measurements?: CircuitMeasurement[];
  layout?: {
    width?: number;
    height?: number;
  };
}

export interface CircuitNode {
  id: string;
  label?: string;
  position?: {
    x: number;
    y: number;
  };
}

export interface CircuitComponent {
  id: string;
  type: "resistor" | "battery" | "wire" | "switch";
  label?: string;
  fromNodeId: string;
  toNodeId: string;
  value?: number;
  unit?: string;
}

export interface CircuitConnection {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  label?: string;
  style?: "solid" | "dashed";
}

export interface CircuitMeasurement {
  id: string;
  type: "voltaje" | "corriente" | "resistencia" | "potencia";
  value: number;
  unit: string;
  label?: string;
  relatedComponentId?: string;
}

export interface FieldLinesSpec {
  kind: "field-lines";
  title?: string;
  description?: string;
  sources: FieldSource[];
  lines: FieldLine[];
  layout?: {
    width?: number;
    height?: number;
  };
}

export interface FieldSource {
  id: string;
  type: "carga" | "iman";
  magnitude?: number;
  polarity?: "positiva" | "negativa" | "norte" | "sur";
  label?: string;
  position: {
    x: number;
    y: number;
  };
}

export interface FieldLine {
  id: string;
  points: Array<{
    x: number;
    y: number;
  }>;
  strength?: number;
}

export interface WaveComponentSpec {
  id: string;
  label?: string;
  amplitude: number;
  frequency: number;
  phase?: number;
  color?: string;
}

export interface WaveInterferenceSpec {
  kind: "wave-interference";
  title?: string;
  description?: string;
  axes?: {
    x?: AxisSpec & { min?: number; max?: number };
    y?: AxisSpec & { min?: number; max?: number };
  };
  samples?: number;
  waves: WaveComponentSpec[];
  superposition?: {
    enabled?: boolean;
    label?: string;
    color?: string;
  };
  animation?: {
    enabled?: boolean;
    speed?: number;
  };
}

export interface OpticsRaySpec {
  kind: "optics-rays";
  title?: string;
  description?: string;
  layout?: {
    xRange?: { min: number; max: number };
    yRange?: { min: number; max: number };
  };
  element: {
    type:
      | "lente-convergente"
      | "lente-divergente"
      | "espejo-plano"
      | "espejo-concavo"
      | "espejo-convexo";
    positionX?: number;
    height?: number;
    label?: string;
  };
  object: {
    position: { x: number; y: number };
    height: number;
    label?: string;
  };
  image?: {
    position: { x: number; y: number };
    height: number;
    label?: string;
    virtual?: boolean;
  };
  focalPoints?: {
    left?: { x: number; label?: string };
    right?: { x: number; label?: string };
  };
  rays: Array<{
    id: string;
    label?: string;
    kind:
      | "paralelo"
      | "focal"
      | "centro"
      | "incidente"
      | "refractado"
      | "reflejado";
    points: Array<{ x: number; y: number }>;
    color?: string;
    dashed?: boolean;
  }>;
}

export type ChemOrbitalType = "s" | "p" | "d" | "f";

export interface ChemElectronShell {
  shell: string;
  electrons: number;
  label?: string;
}

export interface ChemElectronDistributionSpec {
  atom: string;
  model: "bohr" | "nube-electronica" | "cuantico";
  shells: ChemElectronShell[];
  notation?: string;
  notes?: string;
}

export interface ChemOrbitalOccupancy {
  orbital: string;
  electrons: number;
}

export interface ChemSubshellSpec {
  id: string;
  type: ChemOrbitalType;
  energyLevel: number;
  electrons: number;
  maxElectrons?: number;
  occupancy?: ChemOrbitalOccupancy[];
  notes?: string;
}

export interface ChemOrbitalsSpec {
  atom: string;
  notation?: string;
  subshells: ChemSubshellSpec[];
}

export interface ChemAtom3D {
  id: string;
  element: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  charge?: number;
  color?: string;
  radius?: number;
}

export interface ChemBondSpec {
  id: string;
  fromId: string;
  toId: string;
  order?: 1 | 2 | 3;
  style?: "simple" | "doble" | "triple";
}

export interface ChemMolecularModel {
  id: string;
  name: string;
  formula?: string;
  geometry?:
    | "lineal"
    | "angular"
    | "trigonal-planar"
    | "tetraedrica"
    | "piramidal-trigonal"
    | "trigonal-bipiramidal"
    | "octaedrica";
  atoms: ChemAtom3D[];
  bonds?: ChemBondSpec[];
  notes?: string;
}

export interface ChemStructureSpec {
  kind: "chem-structure";
  title?: string;
  description?: string;
  electronDistribution?: ChemElectronDistributionSpec;
  orbitals?: ChemOrbitalsSpec;
  molecularModels?: ChemMolecularModel[];
}

export type SimulationParameterInput = "number" | "boolean" | "select";

export interface SimulationParameterSpec {
  id: string;
  label: string;
  input: SimulationParameterInput;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number | string | boolean;
  options?: Array<{
    label: string;
    value: string;
  }>;
  description?: string;
}

export interface SimulationOutputSpec {
  id: string;
  label: string;
  unit?: string;
  value: number | string;
  description?: string;
}

export interface SimulationModelSpec {
  id: string;
  label: string;
  equation?: string;
  assumptions?: string[];
}

export interface SimulationSeriesSpec {
  id: string;
  label: string;
  unit?: string;
  data: Array<{ t: number; value: number }>;
  color?: string;
}

export interface PhysicsSimulationSpec {
  kind: "physics-simulation";
  title?: string;
  description?: string;
  model: SimulationModelSpec;
  parameters: SimulationParameterSpec[];
  outputs: SimulationOutputSpec[];
  series?: SimulationSeriesSpec[];
  notes?: string[];
}
