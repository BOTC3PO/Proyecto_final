export type ModuleVisibility = "publico" | "privado" | "escuela";

export type ModuleResource =
  | { type: "book"; id: string; title?: string }
  | { type: "doc"; title: string; url: string; fileName?: string }
  | { type: "pdf"; title: string; url: string }
  | { type: "txt"; title: string; content?: string; url?: string; fileName?: string }
  | { type: "bookJson"; title: string; content?: string; url?: string; fileName?: string }
  | { type: "link"; title: string; url: string };

export type ModuleTheoryBlock = {
  id: string;
  title: string;
  type: string;
  detail: string;
};

export type ModuleQuizVisibility = "publico" | "escuela";
export type ModuleQuizStatus = "draft" | "published" | "archived";
export type ModuleQuizMode = "manual" | "generated";
export type ModuleQuizSeedPolicy = "perAttempt" | "fixed";

export type ModuleQuiz = {
  id: string;
  title: string;
  type: "practica" | "formal" | "competencia";
  status: ModuleQuizStatus;
  version: number;
  mode?: ModuleQuizMode;
  visibility: ModuleQuizVisibility;
  schoolId?: string;
  schoolName?: string;
  competitionRules?: string;
  competitionRulesVisibility?: ModuleQuizVisibility;
  questions?: ModuleQuizQuestion[];
  generatorId?: string;
  generatorVersion?: number;
  params?: Record<string, unknown>;
  count?: number;
  seedPolicy?: ModuleQuizSeedPolicy;
  fixedSeed?: string | number;
  instructions?: string;
  displayCount?: number;
  umbralAprobacion?: number; // 0-100, default 60
  /**
   * Composición a nivel quiz (pool, selección, variantes, peso por defecto).
   * Se persiste en `QuizVersion.settings.composition`. NO es parte del DSL.
   */
  composition?: import("../quiz/composition").QuizComposition;
};

export type ModuleDependencyType = "required" | "unlocks";

export type ModuleDependency = {
  id: string;
  type: ModuleDependencyType;
};

export type ModuleLevel = {
  level: string;
  quizzes?: ModuleQuiz[];
  resources?: ModuleResource[];
  questions?: ModuleQuizQuestion[];
};

export type ModuleQuizQuestion = {
  id: string;
  prompt: string;
  questionType?:
    | "mc"
    | "vf"
    | "input"
    | "completar"
    | "match"
    | "fill-blank"
    | "ordenar"
    | "marcar_mapa"
    | "analisis_sintactico"
    | "identificar_palabras"
    | "abierta";
  options?: string[];
  answerKey?: string | string[];
  /**
   * Explicación que se muestra al alumno tras responder. Provista por:
   *  - `explicacion:` en el DSL VBLang (F2-03, gana sobre el fallback).
   *  - `ejercicio.explicacion` de los generadores nativos.
   *  - Fallback: `pasos.join("\n")` si hay `pasos:`.
   *  - Fallback final: `País correcto: <nombre>` para `marcar_mapa`.
   * El renderer decide CUÁNDO mostrarla (siempre, sólo tras mal, etc.).
   */
  explanation?: string;
  /**
   * Peso de la pregunta en el puntaje del quiz (default 1). Es composición a
   * nivel quiz; NO forma parte del DSL de una plantilla.
   */
  points?: number;
  focus?: string | null;
  visualContext?: string;
  // Numeric exercise fields
  toleranciaRelativa?: number;
  unidades?: Record<string, string>;
  datos?: Record<string, unknown>;
  pasos?: string[];
  /**
   * F2-02: pistas escalonadas (texto ya interpolado, en orden). El alumno las
   * pide de a una a cambio de puntos. El costo/visibilidad es composición de
   * quiz; NO forma parte del DSL de la plantilla.
   */
  pistas?: string[];
  // Visual attached by generator
  visualSpec?: import("../../generadoresV2/core/types").VisualSpec;

  // Sprint 9B — tipos especiales
  /** ordenar: items presentados al alumno (orden inicial, posiblemente mezclado). */
  items?: string[];
  /** marcar_mapa: identificador del mapa a cargar (ej. "politico_mundo"). */
  mapaId?: string;
  /** marcar_mapa: ISO correcto (también copiado a `answerKey` por conveniencia). */
  respuestaIsoCorrecta?: string;
  /** analisis_sintactico / identificar_palabras: texto a presentar al alumno. */
  textoAnalizar?: string;
  /** analisis_sintactico: pares (palabra, etiqueta correcta) — incluye la respuesta. */
  etiquetasPedidas?: Array<{ palabra: string; etiqueta: string }>;

  // WO07 — pregunta abierta (sin clave de respuesta).
  /** abierta: `ninguna` no puntúa; `manual` la corrige el profe. */
  correccion?: "ninguna" | "manual";
  /** abierta + `manual`: el ítem queda pendiente de corrección al enviar. */
  manualGrading?: boolean;
};

export type ModuleGeneratorRef = {
  id: string;
  version?: number;
  config?: Record<string, unknown>;
};

export type ModuleScoringConfig = {
  systemId: string;
  questionsPerPoint?: number | null;
  minPassingScore?: string;
  maxScoreForSix?: number | null;
  promotionRule?: string;
};

export type ModuleRewardsConfig = {
  maxLevel?: number | null;
  maxExperience?: number | null;
  maxQuestionsPerRound?: number | null;
  experienceMultiplier?: number | null;
};

export type ModuleVisibilityConfig = {
  institution?: string;
  invitedTeachers?: string;
  studentRestriction?: string;
};

export type TheoryTypeOption = {
  value: string;
  label: string;
  disabled?: boolean;
  disabledReason?: string;
};

export type ModuleSubjectCapabilities = {
  supportsGenerators: boolean;
  supportsAutoQuizzes: boolean;
  supportsSpecialResources: boolean;
  supportsTuesdayJs: boolean;
  theoryTypes: TheoryTypeOption[];
  autoQuizDisabledReason?: string;
  generatorDisabledReason?: string;
  specialResourcesDisabledReason?: string;
  tuesdayJsDisabledReason?: string;
};

const buildTheoryTypes = (supportsTuesdayJs: boolean, disabledReason: string): TheoryTypeOption[] => [
  { value: "Video", label: "Video" },
  { value: "Texto", label: "Texto" },
  { value: "Presentación", label: "Presentación" },
  { value: "Enlace", label: "Enlace" },
  { value: "Libro", label: "Libro" },
  { value: "Documento", label: "Documento" },
  { value: "Herramienta", label: "Herramienta interactiva" },
  { value: "HerramientaStandalone", label: "Herramienta standalone" },
  {
    value: "TuesdayJS",
    label: "TuesdayJS",
    disabled: !supportsTuesdayJs,
    disabledReason: supportsTuesdayJs ? undefined : disabledReason,
  },
];

const DEFAULT_DISABLED_REASONS = {
  autoQuiz: "Disponible solo para Matemáticas, Física, Química y Economía.",
  generator: "Disponible solo para materias con generadores automáticos.",
  specialResources: "Disponible para Lengua y Literatura, Geografía y Biología.",
  tuesdayJs: "Disponible para Historia y Lengua y Literatura.",
};

export const MODULE_SUBJECT_CAPABILITIES: Record<string, ModuleSubjectCapabilities> = {
  Matemáticas: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Física: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Química: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Economía: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  "Lengua y Literatura": {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: true,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Historia: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Geografía: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: true,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Biología: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: true,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Estadística: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  "Ciencias Sociales": {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Filosofía: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Arte: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Música: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Política: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  "Educación Cívica": {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  "Ciencias Ambientales": {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Informática: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  "Ciencias Naturales": {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Cocina: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  "Vida Práctica": {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: false,
    supportsTuesdayJs: true,
    theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
};

export const DEFAULT_SUBJECT_CAPABILITIES: ModuleSubjectCapabilities = {
  supportsGenerators: false,
  supportsAutoQuizzes: false,
  supportsSpecialResources: false,
  supportsTuesdayJs: true,
  theoryTypes: buildTheoryTypes(true, DEFAULT_DISABLED_REASONS.tuesdayJs),
  autoQuizDisabledReason: DEFAULT_DISABLED_REASONS.autoQuiz,
  generatorDisabledReason: DEFAULT_DISABLED_REASONS.generator,
  specialResourcesDisabledReason: DEFAULT_DISABLED_REASONS.specialResources,
  tuesdayJsDisabledReason: DEFAULT_DISABLED_REASONS.tuesdayJs,
};

export const getSubjectCapabilities = (subject: string): ModuleSubjectCapabilities => {
  const base = MODULE_SUBJECT_CAPABILITIES[subject];
  const supportsGenerators = base?.supportsGenerators ?? DEFAULT_SUBJECT_CAPABILITIES.supportsGenerators;
  const supportsAutoQuizzes = base?.supportsAutoQuizzes ?? DEFAULT_SUBJECT_CAPABILITIES.supportsAutoQuizzes;
  const supportsSpecialResources =
    base?.supportsSpecialResources ?? DEFAULT_SUBJECT_CAPABILITIES.supportsSpecialResources;
  const supportsTuesdayJs = base?.supportsTuesdayJs ?? DEFAULT_SUBJECT_CAPABILITIES.supportsTuesdayJs;

  return {
    supportsGenerators,
    supportsAutoQuizzes,
    supportsSpecialResources,
    supportsTuesdayJs,
    theoryTypes: base?.theoryTypes ?? buildTheoryTypes(supportsTuesdayJs, DEFAULT_DISABLED_REASONS.tuesdayJs),
    autoQuizDisabledReason: supportsAutoQuizzes ? undefined : DEFAULT_DISABLED_REASONS.autoQuiz,
    generatorDisabledReason: supportsGenerators ? undefined : DEFAULT_DISABLED_REASONS.generator,
    specialResourcesDisabledReason: supportsSpecialResources ? undefined : DEFAULT_DISABLED_REASONS.specialResources,
    tuesdayJsDisabledReason: supportsTuesdayJs ? undefined : DEFAULT_DISABLED_REASONS.tuesdayJs,
  };
};

export type Module = {
  id: string;
  aulaId?: string;
  schoolId?: string;
  title: string;
  description: string;
  subject: string;
  category: string;
  level: string;
  durationMinutes: number;
  recommendedCourse?: string;
  visibility: ModuleVisibility;
  visibilityConfig?: ModuleVisibilityConfig | null;
  dependencies: ModuleDependency[];
  scoringConfig?: ModuleScoringConfig;
  rewardsConfig?: ModuleRewardsConfig;
  generatorRef?: ModuleGeneratorRef | null;
  theoryBlocks?: ModuleTheoryBlock[];
  theoryItems?: ModuleTheoryBlock[];
  resources?: ModuleResource[];
  quizzes?: ModuleQuiz[];
  levels?: ModuleLevel[];
  levelOrder?: string[];
  createdBy: string;
  createdByRole?: "admin" | "docente";
  authorName?: string;
  updatedAt: string;
};
