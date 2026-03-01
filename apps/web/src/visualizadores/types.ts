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
  | ChemReactionSpec
  | ChemStructureSpec
  | ChemPeriodicTableSpec
  | ChemVSEPRSpec
  | ChemTitrationSpec
  // Estadística
  | StatDistributionSpec
  | StatRegressionSpec
  // Ciencias Sociales
  | SocialPopulationPyramidSpec
  | SocialChoroplethSpec
  // Filosofía
  | PhilArgumentMapSpec
  | PhilDilemmaSpec
  // Arte
  | ArtColorWheelSpec
  | ArtCompositionSpec
  // Biología
  | BioCellDiagramSpec
  | BioGeneticsSpec
  | BioPopulationDynamicsSpec
  // Música
  | MusicWaveformSpec
  | MusicRhythmGridSpec
  // Política
  | PolVotingSystemsSpec
  | PolPowerDistributionSpec
  // Educación Cívica
  | CivicRightsTreeSpec
  | CivicBudgetSpec
  // Ciencias Ambientales
  | EnvCarbonCycleSpec
  | EnvEcosystemSpec
  // Informática
  | CsSortingSpec
  | CsGraphSpec
  | CsBinaryTreeSpec
  // Ciencias Naturales
  | NatWeatherSpec
  | NatWaterCycleSpec
  // Cocina
  | CookRecipeScalerSpec
  | CookMaillardSpec
  // Vida Práctica
  | LifeBudgetSpec
  | LifeTimeMatrixSpec;

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
  markers?: ChartMarker[];
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

export interface ChartMarker {
  x: string | number;
  label: string;
  note?: string;
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

export interface ChemReactionParticipant {
  id: string;
  formula: string;
  label?: string;
  coefficient?: number;
  moles?: number;
  state?: "s" | "l" | "g" | "aq";
  notes?: string;
}

export interface ChemReactionStep {
  id: string;
  title?: string;
  description?: string;
  reactants: ChemReactionParticipant[];
  products: ChemReactionParticipant[];
}

export interface ChemReactionSpec {
  kind: "chem-reaction";
  title?: string;
  description?: string;
  reactants: ChemReactionParticipant[];
  products: ChemReactionParticipant[];
  steps?: ChemReactionStep[];
}

export type ChemPeriodicTablePropertyKey =
  | "classification"
  | "electronegativity"
  | "atomicRadius"
  | "ionizationEnergy";

export interface ChemPeriodicTableElement {
  atomicNumber: number;
  symbol: string;
  name: string;
  period: number;
  group: number;
  category?: string;
  properties?: {
    electronegativity?: number;
    atomicRadius?: number;
    ionizationEnergy?: number;
  };
}

export interface ChemPeriodicTableSpec {
  kind: "chem-periodic-table";
  title?: string;
  description?: string;
  highlightProperty?: {
    key: ChemPeriodicTablePropertyKey;
    label: string;
    unit?: string;
  };
  scale?: {
    type?: "sequential" | "categorical";
    colors?: string[];
    min?: number;
    max?: number;
  };
  elements: ChemPeriodicTableElement[];
  focusElements?: string[];
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

export type ChemVSEPRGeometry = "lineal" | "angular" | "trigonal" | "tetraedrica";

export interface ChemVSEPRGeometrySpec {
  id: ChemVSEPRGeometry;
  label: string;
  expectedAngles: number[];
  description?: string;
}

export interface ChemVSEPRAtom2D {
  id: string;
  element: string;
  position: {
    x: number;
    y: number;
  };
  role?: "central" | "ligand";
  color?: string;
}

export interface ChemVSEPRAngleSpec {
  id: string;
  label: string;
  atomIds: [string, string, string];
  expectedAngle: number;
  description?: string;
}

export interface ChemVSEPRMoleculeSpec {
  id: string;
  name: string;
  formula?: string;
  geometry: ChemVSEPRGeometry;
  atoms: ChemVSEPRAtom2D[];
  bonds: ChemBondSpec[];
  angles: ChemVSEPRAngleSpec[];
  notes?: string;
}

export interface ChemVSEPRSpec {
  kind: "chem-vsepr";
  title?: string;
  description?: string;
  geometries: ChemVSEPRGeometrySpec[];
  molecules: ChemVSEPRMoleculeSpec[];
  defaultMoleculeId?: string;
}

export interface ChemTitrationCurvePoint {
  volume: number;
  pH: number;
}

export interface ChemTitrationMilestone {
  id: string;
  label: string;
  volume: number;
  pH: number;
  type?: "start" | "equivalence" | "end" | "buffer";
}

export interface ChemTitrationIndicatorRange {
  min: number;
  max: number;
  color: string;
  label: string;
}

export interface ChemTitrationSpec {
  kind: "chem-titration";
  title?: string;
  description?: string;
  axes?: {
    x?: AxisSpec & { min?: number; max?: number };
    y?: AxisSpec & { min?: number; max?: number };
  };
  curve: {
    points: ChemTitrationCurvePoint[];
    color?: string;
  };
  milestones?: ChemTitrationMilestone[];
  indicator?: {
    title?: string;
    ranges: ChemTitrationIndicatorRange[];
    currentPH?: number;
  };
  notes?: string[];
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

// ── Estadística ─────────────────────────────────────────────────────────────

export interface StatDistributionSpec {
  kind: "stat-distribution";
  title?: string;
  description?: string;
  distributionType: "normal" | "binomial" | "uniform";
  parameters: {
    mean?: number;
    stdDev?: number;
    n?: number;
    p?: number;
    min?: number;
    max?: number;
  };
  samples: number;
  curve: Array<{ x: number; y: number }>;
  histogram?: Array<{ x: number; count: number }>;
  annotations?: Array<{ x: number; label: string; color?: string }>;
}

export interface StatRegressionSpec {
  kind: "stat-regression";
  title?: string;
  description?: string;
  points: Array<{ x: number; y: number; label?: string }>;
  regression: {
    type: "linear" | "quadratic";
    coefficients: number[];
    r2: number;
    line: Array<{ x: number; y: number }>;
  };
  axes: {
    x: { label?: string; min: number; max: number };
    y: { label?: string; min: number; max: number };
  };
  residuals?: Array<{ x: number; observed: number; predicted: number }>;
}

// ── Ciencias Sociales ────────────────────────────────────────────────────────

export interface SocialPopulationPyramidSpec {
  kind: "social-population-pyramid";
  title?: string;
  description?: string;
  year: number;
  ageGroups: Array<{ label: string; male: number; female: number }>;
  unit?: "percent" | "count";
  annotations?: Array<{ ageGroup: string; note: string }>;
}

export interface SocialChoroplethSpec {
  kind: "social-choropleth";
  title?: string;
  description?: string;
  variable: string;
  unit?: string;
  regions: Array<{ id: string; label: string; value: number; color?: string }>;
  scale: { min: number; max: number; colors: [string, string] };
}

// ── Filosofía ────────────────────────────────────────────────────────────────

export interface PhilArgumentMapSpec {
  kind: "phil-argument-map";
  title?: string;
  description?: string;
  claim: { id: string; text: string };
  nodes: Array<{
    id: string;
    text: string;
    type: "premise" | "objection" | "rebuttal" | "conclusion";
    parentId?: string;
  }>;
  relations: Array<{
    id: string;
    fromId: string;
    toId: string;
    kind: "supports" | "attacks";
  }>;
}

export interface PhilDilemmaSpec {
  kind: "phil-dilemma";
  title?: string;
  description?: string;
  scenario: string;
  options: Array<{
    id: string;
    label: string;
    framework: "utilitarianism" | "deontology" | "virtue" | "contractualism";
    analysis: string;
    consequences: string[];
  }>;
  activeOptionId?: string;
}

// ── Arte ─────────────────────────────────────────────────────────────────────

export interface ArtColorWheelSpec {
  kind: "art-color-wheel";
  title?: string;
  description?: string;
  selectedHue: number;
  harmony: "complementary" | "triadic" | "analogous" | "split-complementary";
  palette: Array<{ hue: number; saturation: number; lightness: number; label: string }>;
  swatches: Array<{ color: string; label: string; role: string }>;
}

export interface ArtCompositionSpec {
  kind: "art-composition";
  title?: string;
  description?: string;
  canvasWidth: number;
  canvasHeight: number;
  rule: "rule-of-thirds" | "golden-ratio" | "symmetry" | "diagonal";
  overlayLines: Array<{ x1: number; y1: number; x2: number; y2: number; label?: string; color?: string }>;
  zones: Array<{ x: number; y: number; width: number; height: number; label?: string; color?: string; opacity?: number }>;
  elements: Array<{ id: string; x: number; y: number; width: number; height: number; label?: string; color?: string }>;
}

// ── Biología ─────────────────────────────────────────────────────────────────

export interface BioCellDiagramSpec {
  kind: "bio-cell-diagram";
  title?: string;
  description?: string;
  cellType: "animal" | "plant" | "bacteria";
  organelles: Array<{
    id: string;
    label: string;
    description?: string;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    color?: string;
    highlighted?: boolean;
  }>;
  highlightedOrganelleId?: string;
}

export interface BioGeneticsSpec {
  kind: "bio-genetics";
  title?: string;
  description?: string;
  cross: "monohybrid" | "dihybrid";
  parent1Alleles: string[];
  parent2Alleles: string[];
  punnettSquare: Array<Array<{ alleles: string; phenotype?: string; dominant?: boolean }>>;
  phenotypeRatio?: string;
  genotypeRatio?: string;
  notes?: string[];
}

export interface BioPopulationDynamicsSpec {
  kind: "bio-population-dynamics";
  title?: string;
  description?: string;
  model: "logistic" | "lotka-volterra" | "exponential";
  parameters: {
    carryingCapacity?: number;
    growthRate?: number;
    initialPrey?: number;
    initialPredator?: number;
    preyGrowthRate?: number;
    predationRate?: number;
    predatorDeathRate?: number;
    predatorEfficiency?: number;
  };
  timeSeries: Array<{
    id: string;
    label: string;
    color?: string;
    data: Array<{ t: number; value: number }>;
  }>;
  axes: { x: { label?: string }; y: { label?: string } };
}

// ── Música ───────────────────────────────────────────────────────────────────

export interface MusicWaveformSpec {
  kind: "music-waveform";
  title?: string;
  description?: string;
  note: string;
  baseFrequency: number;
  harmonics: Array<{
    id: string;
    order: number;
    frequency: number;
    amplitude: number;
    color?: string;
    label?: string;
  }>;
  compositeWave: Array<{ x: number; y: number }>;
  axes: {
    x: { label?: string; min: number; max: number };
    y: { label?: string; min: number; max: number };
  };
}

export interface MusicRhythmGridSpec {
  kind: "music-rhythm-grid";
  title?: string;
  description?: string;
  timeSignature: { beats: number; division: number };
  tempo: number;
  measures: number;
  tracks: Array<{
    id: string;
    instrument: string;
    color?: string;
    beats: Array<{ measure: number; beat: number; accent?: boolean }>;
  }>;
}

// ── Política ─────────────────────────────────────────────────────────────────

export interface PolVotingSystemsSpec {
  kind: "pol-voting-systems";
  title?: string;
  description?: string;
  candidates: Array<{ id: string; name: string; color?: string }>;
  ballots: Array<{ id: string; preferences: string[] }>;
  results: {
    plurality: Array<{ candidateId: string; votes: number }>;
    runoff?: Array<{ candidateId: string; votes: number; round: number }>;
    borda?: Array<{ candidateId: string; points: number }>;
  };
  winnerBySystem: { plurality: string; runoff?: string; borda?: string };
}

export interface PolPowerDistributionSpec {
  kind: "pol-power-distribution";
  title?: string;
  description?: string;
  system: "presidential" | "parliamentary" | "federal";
  branches: Array<{
    id: string;
    label: string;
    role: string;
    powers: string[];
    checksOn: string[];
    color?: string;
    cx: number;
    cy: number;
  }>;
  relations: Array<{
    id: string;
    fromId: string;
    toId: string;
    label?: string;
    kind: "check" | "appoints" | "reports-to";
  }>;
}

// ── Educación Cívica ─────────────────────────────────────────────────────────

export interface CivicRightsTreeSpec {
  kind: "civic-rights-tree";
  title?: string;
  description?: string;
  root: { id: string; label: string; description?: string };
  categories: Array<{
    id: string;
    label: string;
    color?: string;
    rights: Array<{ id: string; label: string; description?: string; article?: string }>;
  }>;
  highlightedRightId?: string;
}

export interface CivicBudgetSpec {
  kind: "civic-budget";
  title?: string;
  description?: string;
  totalBudget: number;
  unit?: string;
  currency?: string;
  categories: Array<{
    id: string;
    label: string;
    allocated: number;
    color?: string;
    subcategories?: Array<{ id: string; label: string; allocated: number }>;
  }>;
  comparison?: {
    label: string;
    categories: Array<{ id: string; allocated: number }>;
  };
}

// ── Ciencias Ambientales ─────────────────────────────────────────────────────

export interface EnvCarbonCycleSpec {
  kind: "env-carbon-cycle";
  title?: string;
  description?: string;
  reservoirs: Array<{
    id: string;
    label: string;
    amount: number;
    unit?: string;
    cx: number;
    cy: number;
    color?: string;
    radius?: number;
  }>;
  fluxes: Array<{
    id: string;
    fromId: string;
    toId: string;
    amount: number;
    label?: string;
    color?: string;
    highlighted?: boolean;
  }>;
  humanFlux?: { fromId: string; amount: number; label?: string };
}

export interface EnvEcosystemSpec {
  kind: "env-ecosystem";
  title?: string;
  description?: string;
  biome: "bosque-tropical" | "desierto" | "oceano" | "pradera" | "tundra";
  trophicLevels: Array<{
    level: number;
    label: string;
    organisms: Array<{
      id: string;
      name: string;
      population: number;
      energyPercent: number;
      color?: string;
    }>;
  }>;
  energyLoss: number;
}

// ── Informática ──────────────────────────────────────────────────────────────

export interface CsSortingSpec {
  kind: "cs-sorting";
  title?: string;
  description?: string;
  algorithm: "bubble" | "selection" | "insertion" | "merge" | "quick";
  initialArray: number[];
  steps: Array<{
    stepIndex: number;
    array: number[];
    comparing?: [number, number];
    swapped?: [number, number];
    sorted?: number[];
    description?: string;
  }>;
  currentStep: number;
  complexity: { time: string; space: string };
}

export interface CsGraphSpec {
  kind: "cs-graph";
  title?: string;
  description?: string;
  directed: boolean;
  weighted: boolean;
  nodes: Array<{ id: string; label: string; x: number; y: number; color?: string; visited?: boolean }>;
  edges: Array<{ id: string; fromId: string; toId: string; weight?: number; highlighted?: boolean }>;
  algorithm?: "bfs" | "dfs" | "dijkstra" | "none";
  traversalOrder?: string[];
  startNodeId?: string;
}

export interface CsBinaryTreeSpec {
  kind: "cs-binary-tree";
  title?: string;
  description?: string;
  nodes: Array<{
    id: string;
    value: number | string;
    parentId?: string;
    side?: "left" | "right";
    x?: number;
    y?: number;
    highlighted?: boolean;
    visited?: boolean;
  }>;
  traversalOrder?: "inorder" | "preorder" | "postorder" | "levelorder";
  visitedSequence?: string[];
  isBST?: boolean;
}

// ── Ciencias Naturales ───────────────────────────────────────────────────────

export interface NatWeatherSpec {
  kind: "nat-weather";
  title?: string;
  description?: string;
  location?: string;
  season: "verano" | "otono" | "invierno" | "primavera";
  variables: {
    temperature: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    precipitation: number;
  };
  timeSeries?: Array<{
    id: string;
    label: string;
    color?: string;
    data: Array<{ x: number; y: number }>;
  }>;
  phenomena?: Array<{ id: string; name: string; description: string; active: boolean }>;
}

export interface NatWaterCycleSpec {
  kind: "nat-water-cycle";
  title?: string;
  description?: string;
  stages: Array<{
    id: string;
    label: string;
    description?: string;
    cx: number;
    cy: number;
    radius?: number;
    color?: string;
    active?: boolean;
  }>;
  fluxes: Array<{
    id: string;
    fromId: string;
    toId: string;
    label?: string;
    rate?: number;
    color?: string;
  }>;
  humanImpactFactor: number;
}

// ── Cocina ───────────────────────────────────────────────────────────────────

export interface CookRecipeScalerSpec {
  kind: "cook-recipe-scaler";
  title?: string;
  description?: string;
  servingsBase: number;
  servingsCurrent: number;
  ingredients: Array<{
    id: string;
    name: string;
    amountBase: number;
    unit: string;
    amountCurrent: number;
    category?: "dry" | "liquid" | "fresh" | "spice";
  }>;
  nutritionPerServing?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  steps?: string[];
}

export interface CookMaillardSpec {
  kind: "cook-maillard";
  title?: string;
  description?: string;
  temperature: number;
  time: number;
  moisture: number;
  reactionZones: Array<{
    id: string;
    label: string;
    minTemp: number;
    maxTemp: number;
    color: string;
    description: string;
  }>;
  currentZoneId?: string;
  colorProgression: Array<{ temp: number; color: string; label: string }>;
  flavorCompounds?: Array<{ name: string; formsBelow?: number; formsAbove?: number; description?: string }>;
}

// ── Vida Práctica ─────────────────────────────────────────────────────────────

export interface LifeBudgetSpec {
  kind: "life-budget";
  title?: string;
  description?: string;
  monthlyIncome: number;
  currency?: string;
  expenses: Array<{
    id: string;
    category: string;
    planned: number;
    actual?: number;
    color?: string;
    essential?: boolean;
  }>;
  savings: { planned: number; actual?: number };
  rules?: Array<{ name: string; description: string; allocation: Record<string, number> }>;
  activeRule?: string;
}

export interface LifeTimeMatrixSpec {
  kind: "life-time-matrix";
  title?: string;
  description?: string;
  totalHoursPerWeek: number;
  tasks: Array<{
    id: string;
    label: string;
    urgent: boolean;
    important: boolean;
    hours: number;
    color?: string;
    quadrant?: "I" | "II" | "III" | "IV";
    action?: string;
  }>;
  quadrantLabels?: {
    I?: string;
    II?: string;
    III?: string;
    IV?: string;
  };
}
