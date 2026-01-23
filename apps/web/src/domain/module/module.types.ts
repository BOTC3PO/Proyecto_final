export type ModuleVisibility = "publico" | "privado" | "escuela";

export type ModuleResource =
  | { type: "book"; id: string; title?: string }
  | { type: "pdf"; title: string; url: string }
  | { type: "link"; title: string; url: string };

export type ModuleGeneratorRef = {
  id: string;
  config?: Record<string, unknown>;
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
  { value: "Enlace", label: "Enlace" },
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
    supportsTuesdayJs: false,
    theoryTypes: buildTheoryTypes(false, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Física: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: false,
    theoryTypes: buildTheoryTypes(false, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Química: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: false,
    theoryTypes: buildTheoryTypes(false, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Economía: {
    supportsGenerators: true,
    supportsAutoQuizzes: true,
    supportsSpecialResources: false,
    supportsTuesdayJs: false,
    theoryTypes: buildTheoryTypes(false, DEFAULT_DISABLED_REASONS.tuesdayJs),
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
    supportsTuesdayJs: false,
    theoryTypes: buildTheoryTypes(false, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
  Biología: {
    supportsGenerators: false,
    supportsAutoQuizzes: false,
    supportsSpecialResources: true,
    supportsTuesdayJs: false,
    theoryTypes: buildTheoryTypes(false, DEFAULT_DISABLED_REASONS.tuesdayJs),
  },
};

export const DEFAULT_SUBJECT_CAPABILITIES: ModuleSubjectCapabilities = {
  supportsGenerators: false,
  supportsAutoQuizzes: false,
  supportsSpecialResources: false,
  supportsTuesdayJs: false,
  theoryTypes: buildTheoryTypes(false, DEFAULT_DISABLED_REASONS.tuesdayJs),
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
  title: string;
  description: string;
  subject: string;
  category: string;
  level: string;
  durationMinutes: number;
  visibility: ModuleVisibility;
  dependencies: string[];
  generatorRef?: ModuleGeneratorRef | null;
  resources?: ModuleResource[];
  createdBy: string;
  updatedAt: string;
};
