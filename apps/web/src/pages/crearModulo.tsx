import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { apiPost } from "../lib/api";
import MapEditor from "../components/MapEditor";
import ReadingWorkshop from "../components/ReadingWorkshop";
import SkeletonMarker from "../components/SkeletonMarker";
import {
  getSubjectCapabilities,
  type ModuleResource,
  type ModuleDependency,
  type ModuleDependencyType,
  type ModuleTheoryBlock,
  type ModuleQuizQuestion,
} from "../domain/module/module.types";
import { MVP_MODULES } from "../mvp/mvpData";
import { fetchCategoriasConfig, fetchMateriasConfig } from "../services/modulos";

type TheoryItem = ModuleTheoryBlock;

type QuizReference = {
  id: string;
  title?: string;
  schoolId?: string;
  schoolName?: string;
};

type LevelConfig = {
  level: string;
  quizReferences: QuizReference[];
  bookResources: ModuleResource[];
  fileResources: ModuleResource[];
  questions: ModuleQuizQuestion[];
};

const isValidUrl = (value: string) => {
  if (!value.trim()) return false;
  try {
    const parsedUrl = new URL(value);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch (error) {
    return false;
  }
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const parseQuestionSolution = (value: unknown): string | number | null => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed ? trimmed : null;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  return null;
};

const exercisesJsonTemplate = `{
  "preguntas": [
    {
      "enunciado": "¿Cuál es la fórmula de la velocidad media?",
      "respuestas": [
        "v = d / t",
        "v = t / d",
        "v = d * t"
      ],
      "solucion": "v = d / t",
      "explicacion": "Se calcula como distancia dividida por tiempo."
    }
  ]
}`;

const validateExercisesJson = (value: unknown) => {
  const errors: string[] = [];
  const preguntas = Array.isArray(value)
    ? value
    : isRecord(value) && Array.isArray(value.preguntas)
      ? value.preguntas
      : null;

  if (!preguntas) {
    return {
      isValid: false,
      errors: ["El JSON debe ser un array de preguntas o un objeto con la clave preguntas."],
    };
  }

  if (preguntas.length === 0) {
    errors.push("Debe incluir al menos una pregunta.");
  }

  preguntas.forEach((pregunta, index) => {
    if (!isRecord(pregunta)) {
      errors.push(`preguntas[${index}] debe ser un objeto con enunciado, respuestas y solucion.`);
      return;
    }
    if (!isNonEmptyString(pregunta.enunciado)) {
      errors.push(`preguntas[${index}].enunciado debe ser un texto no vacío.`);
    }
    if (!Array.isArray(pregunta.respuestas) || pregunta.respuestas.length < 2) {
      errors.push(`preguntas[${index}].respuestas debe ser un array con al menos 2 opciones.`);
    } else {
      pregunta.respuestas.forEach((respuesta, respuestaIndex) => {
        const isStringOption = isNonEmptyString(respuesta);
        const isObjectOption = isRecord(respuesta) && isNonEmptyString(respuesta.texto);
        if (!isStringOption && !isObjectOption) {
          errors.push(
            `preguntas[${index}].respuestas[${respuestaIndex}] debe ser un texto o un objeto con texto.`,
          );
        }
      });
    }
    const solucion = pregunta.solucion;
    if (
      !(typeof solucion === "string" && solucion.trim()) &&
      !(typeof solucion === "number" && Number.isFinite(solucion))
    ) {
      errors.push(`preguntas[${index}].solucion debe ser un texto o número válido.`);
    }
  });

  return { isValid: errors.length === 0, errors, preguntas };
};


const getTheoryDetailError = (type: string, detail: string): string | null => {
  if (type !== "Video") return null;
  if (!detail.trim()) {
    return "Agrega el enlace del video (incluye http:// o https://).";
  }
  if (!isValidUrl(detail.trim())) {
    return "El enlace del video debe ser una URL válida.";
  }
  return null;
};

const DEFAULT_LEVELS = ["Nivel 1"];
const DEPENDENCY_TYPE_LABELS: Record<ModuleDependencyType, string> = {
  required: "Requerido",
  unlocks: "Desbloquea",
};
const SCORING_SYSTEM_NOTES: Record<string, string> = {
  "scale-1-10": "Referencia rápida: 1 = desempeño mínimo, 10 = desempeño sobresaliente.",
  "scale-0-100": "Referencia rápida: 0–100 puntos (100 = desempeño sobresaliente).",
  "pass-fail": "Referencia rápida: aprobado si cumple el mínimo, desaprobado si no lo alcanza.",
  "scale-a-f": "Referencia rápida: A = 90–100, B = 80–89, C = 70–79, D = 60–69, E/F = < 60.",
  "scale-s-f": "Referencia rápida: S = 95–100, A = 85–94, B = 75–84, C = 65–74, D = 55–64, E/F = < 55.",
};

const DEFAULT_MATERIAS = [
  "Matemáticas",
  "Lengua y Literatura",
  "Ciencias Naturales",
  "Ciencias Sociales",
  "Historia",
  "Geografía",
  "Física",
  "Química",
  "Biología",
  "Inglés",
  "Informática / TIC",
  "Educación Física",
  "Arte / Plástica",
  "Música",
  "Formación Ética y Ciudadana",
  "Economía",
  "Otro",
];

const DEFAULT_CATEGORIAS = [
  "Aritmética básica",
  "Álgebra",
  "Geometría",
  "Lectura comprensiva",
  "Comprensión de textos",
  "Ciencias naturales generales",
  "Laboratorio",
  "Historia Argentina",
  "Historia Mundial",
  "Historia · Gráficos y datos históricos",
  "Historia · Líneas de tiempo",
  "Historia · Mapas históricos",
  "Historia · Organigramas y mapas conceptuales",
  "Historia · Recursos multimedia e interactivos",
  "Geografía de Argentina",
  "Geografía del Mundo",
  "Gramática",
  "Ortografía",
  "Lógica",
  "Programación",
  "Resolución de problemas",
  "Otro",
];

const MODULE_SIZE_THRESHOLD = 2000;

export default function CrearModulo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("Matemáticas");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState(DEFAULT_LEVELS[0]);
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [recommendedCourse, setRecommendedCourse] = useState("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [scoringSystemId, setScoringSystemId] = useState("scale-1-10");
  const [questionsPerPoint, setQuestionsPerPoint] = useState("");
  const [minPassingScore, setMinPassingScore] = useState("");
  const [maxScoreForSix, setMaxScoreForSix] = useState("");
  const [promotionRule, setPromotionRule] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [materias, setMaterias] = useState<string[]>(DEFAULT_MATERIAS);
  const [categorias, setCategorias] = useState<string[]>(DEFAULT_CATEGORIAS);
  const [configMessage, setConfigMessage] = useState("");
  const [isConfigLoading, setIsConfigLoading] = useState(true);
  const [visibilidad, setVisibilidad] = useState<"publico" | "privado">("publico");
  const [privateInstitution, setPrivateInstitution] = useState("");
  const [privateInvitedTeachers, setPrivateInvitedTeachers] = useState("");
  const [privateStudentRestriction, setPrivateStudentRestriction] = useState(
    "Solo alumnos de mi institución",
  );
  const [theoryItems, setTheoryItems] = useState<TheoryItem[]>([]);
  const [newTheoryTitle, setNewTheoryTitle] = useState("");
  const [newTheoryType, setNewTheoryType] = useState("Video");
  const [newTheoryDetail, setNewTheoryDetail] = useState("");
  const [rewardMaxLevel, setRewardMaxLevel] = useState("");
  const [rewardMaxExperience, setRewardMaxExperience] = useState("");
  const [rewardMaxQuestionsPerRound, setRewardMaxQuestionsPerRound] = useState("");
  const [rewardExperienceMultiplier, setRewardExperienceMultiplier] = useState("");
  const [levels, setLevels] = useState<string[]>(DEFAULT_LEVELS);
  const [levelDrafts, setLevelDrafts] = useState<string[]>(DEFAULT_LEVELS);
  const [newLevelName, setNewLevelName] = useState("");
  const [levelsError, setLevelsError] = useState("");
  const [levelsConfig, setLevelsConfig] = useState<LevelConfig[]>(() =>
    DEFAULT_LEVELS.map((difficulty) => ({
      level: difficulty,
      quizReferences: [],
      bookResources: [],
      fileResources: [],
      questions: [],
    })),
  );
  const [activeLevel, setActiveLevel] = useState(DEFAULT_LEVELS[0]);
  const [newQuizReferenceId, setNewQuizReferenceId] = useState("");
  const [newQuizReferenceTitle, setNewQuizReferenceTitle] = useState("");
  const [newQuizReferenceSchoolId, setNewQuizReferenceSchoolId] = useState("");
  const [newQuizReferenceSchoolName, setNewQuizReferenceSchoolName] = useState("");
  const [questionImportStatus, setQuestionImportStatus] = useState<{
    status: "idle" | "valid" | "error";
    message: string;
    errors?: string[];
  }>({ status: "idle", message: "" });
  const [questionImportFileName, setQuestionImportFileName] = useState("");
  const [moduleDependencies, setModuleDependencies] = useState<ModuleDependency[]>([]);
  const [customDependency, setCustomDependency] = useState("");
  const [customDependencyType, setCustomDependencyType] =
    useState<ModuleDependencyType>("required");
  const [customDependencies, setCustomDependencies] = useState<ModuleDependency[]>([]);
  const [openSection, setOpenSection] = useState("info");
  const [visitedSections, setVisitedSections] = useState<Record<string, boolean>>({
    info: true,
  });
  const subjectCapabilities = useMemo(() => getSubjectCapabilities(subject), [subject]);
  const theoryTypeOptions = useMemo(
    () => subjectCapabilities.theoryTypes.filter((option) => option.value !== "TuesdayJS"),
    [subjectCapabilities.theoryTypes],
  );
  const enabledTheoryTypes = useMemo(
    () => theoryTypeOptions.filter((option) => !option.disabled),
    [theoryTypeOptions],
  );
  const hasQuizReferences = useMemo(
    () => levelsConfig.some((entry) => entry.quizReferences.length > 0),
    [levelsConfig],
  );
  const isModelModule = useMemo(
    () => theoryItems.length > 0 && hasQuizReferences,
    [hasQuizReferences, theoryItems.length],
  );
  const newTheoryDetailError = getTheoryDetailError(newTheoryType, newTheoryDetail);
  const moduleSizeScore = useMemo(() => {
    const quizCount = levelsConfig.reduce(
      (total, entry) => total + entry.quizReferences.length,
      0,
    );
    const resourceCount = levelsConfig.reduce(
      (total, entry) => total + entry.bookResources.length + entry.fileResources.length,
      0,
    );
    const theoryTextLength = theoryItems.reduce(
      (total, item) => total + item.title.length + item.detail.length,
      0,
    );
    const dependencyCount = moduleDependencies.length + customDependencies.length;
    return (
      title.length +
      description.length +
      theoryTextLength +
      quizCount * 120 +
      resourceCount * 60 +
      dependencyCount * 40
    );
  }, [
    title,
    description,
    theoryItems,
    levelsConfig,
    moduleDependencies,
    customDependencies,
  ]);
  const showLargeModuleHint = moduleSizeScore >= MODULE_SIZE_THRESHOLD;
  const currentLevelConfig = useMemo<LevelConfig>(
    () =>
      levelsConfig.find((entry) => entry.level === activeLevel) ??
      levelsConfig[0] ?? {
        level: activeLevel,
        quizReferences: [],
        bookResources: [],
        fileResources: [],
        questions: [],
      },
    [activeLevel, levelsConfig],
  );
  const specialResourcesEditor = useMemo(() => {
    switch (subject) {
      case "Geografía":
        return <MapEditor subjectLabel={subject} />;
      case "Biología":
        return <SkeletonMarker subjectLabel={subject} />;
      case "Lengua y Literatura":
        return <ReadingWorkshop />;
      default:
        return (
          <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-4 text-xs text-gray-600">
            Selecciona una materia con herramientas especiales para habilitar sus editores dedicados.
          </div>
        );
    }
  }, []);

  useEffect(() => {
    if (theoryTypeOptions.some((option) => option.value === newTheoryType && !option.disabled)) {
      return;
    }
    setNewTheoryType(enabledTheoryTypes[0]?.value ?? "Video");
  }, [enabledTheoryTypes, newTheoryType, theoryTypeOptions]);

  useEffect(() => {
    let isMounted = true;
    const fetchConfigLists = async () => {
      try {
        setIsConfigLoading(true);
        const [materiasResponse, categoriasResponse] = await Promise.all([
          fetchMateriasConfig(),
          fetchCategoriasConfig(),
        ]);
        if (!isMounted) return;
        const materiasItems = materiasResponse.items?.length ? materiasResponse.items : DEFAULT_MATERIAS;
        const categoriasItems = categoriasResponse.items?.length ? categoriasResponse.items : DEFAULT_CATEGORIAS;
        setMaterias(materiasItems);
        setCategorias(categoriasItems);
        setConfigMessage("");
        if (!materiasItems.includes(subject)) {
          setSubject(materiasItems[0] ?? "Matemáticas");
        }
      } catch (error) {
        if (!isMounted) return;
        setConfigMessage("No pudimos cargar la configuración. Usamos los valores por defecto.");
      } finally {
        if (isMounted) setIsConfigLoading(false);
      }
    };
    fetchConfigLists();
    return () => {
      isMounted = false;
    };
  }, []);

  const scoringSystems = [
    {
      id: "scale-1-10",
      label: "Sistema A: escala 1-10",
      internalScale: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    {
      id: "scale-0-100",
      label: "Sistema B: escala 0-100",
      internalScale: Array.from({ length: 101 }, (_, index) => String(index)),
    },
    {
      id: "pass-fail",
      label: "Sistema C: aprobado / desaprobado",
      internalScale: ["Aprobado", "Desaprobado"],
      equivalencesToSystemA: ["Aprobado → 10", "Desaprobado → 1"],
    },
    {
      id: "scale-a-f",
      label: "Sistema D: escala A–F",
      internalScale: ["A", "B", "C", "D", "E", "F"],
    },
    {
      id: "scale-s-f",
      label: "Sistema E: escala S–F",
      internalScale: ["S", "A", "B", "C", "D", "E", "F"],
    },
    {
      id: "scale-s-a-b-c-d",
      label: "Sistema F: escala S-A-B-C-D",
      internalScale: ["S", "A", "B", "C", "D"],
      equivalencesToSystemA: ["S → 10", "A → 9", "B → 8", "C → 7", "D → 6"],
    },
    {
      id: "scale-gpa",
      label: "Sistema G: escala GPA 0.0-4.0",
      internalScale: Array.from({ length: 41 }, (_, index) => (index / 10).toFixed(1)),
      equivalencesToSystemA: [
        "4.0-3.7 → 10",
        "3.6-3.3 → 9",
        "3.2-2.7 → 8",
        "2.6-2.0 → 7",
        "1.9-0.0 → 6",
      ],
    },
    {
      id: "scale-canadian",
      label: "Sistema H: modelo canadiense",
      internalScale: ["A+", "A", "B", "C+", "C", "D", "F"],
      equivalencesToSystemA: ["A+ → 10", "A → 9", "B → 8", "C+ → 7", "C → 6", "D → 5", "F → 1"],
    },
    {
      id: "scale-es",
      label: "Sistema I: escala cualitativa",
      internalScale: [
        "Sobresaliente",
        "Excelente",
        "Muy Bueno",
        "Bueno",
        "Suficiente",
        "Insuficiente",
        "Reprobado",
      ],
      equivalencesToSystemA: [
        "Sobresaliente → 10",
        "Excelente → 9",
        "Muy Bueno → 8",
        "Bueno → 7",
        "Suficiente → 6",
        "Insuficiente → 3",
        "Reprobado → 1",
      ],
    },
    {
      id: "scale-rarity",
      label: "Sistema J: escala de rareza",
      internalScale: ["Común", "Poco común", "Raro", "Muy raro", "Épico", "Legendario", "Mítico"],
      equivalencesToSystemA: [
        "Mítico → 10",
        "Legendario → 9",
        "Épico → 8",
        "Muy raro → 7",
        "Raro → 6",
        "Poco común → 4",
        "Común → 2",
      ],
    },
  ];

  const scoringSystemNote = useMemo(() => SCORING_SYSTEM_NOTES[scoringSystemId] ?? "", [scoringSystemId]);

  const sectionVisibility = useMemo(
    () => ({
      info: true,
      dependencies: true,
      theory: true,
      quizzes: true,
      scoring: true,
      specialResources: subjectCapabilities.supportsSpecialResources,
      rewards: subjectCapabilities.supportsGenerators && isModelModule,
      visibility: true,
      actions: true,
    }),
    [isModelModule, subjectCapabilities.supportsGenerators, subjectCapabilities.supportsSpecialResources],
  );

  const generalMissing = useMemo(() => {
    const missing: string[] = [];
    if (!title.trim()) missing.push("Completa el título del módulo.");
    if (!description.trim()) missing.push("Completa la descripción del módulo.");
    if (!category.trim()) missing.push("Selecciona una categoría.");
    if (!Number.isFinite(durationMinutes) || durationMinutes <= 0) {
      missing.push("Define una duración estimada válida.");
    }
    return missing;
  }, [title, description, category, durationMinutes]);

  const theoryMissing = useMemo(() => {
    const missing: string[] = [];
    if (theoryItems.length === 0) {
      missing.push("Agrega al menos un bloque de teoría.");
    }
    const theoryErrors = theoryItems
      .map((item) => getTheoryDetailError(item.type, item.detail))
      .filter((error): error is string => Boolean(error));
    if (theoryErrors.length) {
      missing.push("Corrige los enlaces de video en teoría.");
    }
    return missing;
  }, [theoryItems]);

  const quizMissing = useMemo(() => {
    const missing: string[] = [];
    if (currentLevelConfig.quizReferences.length === 0) {
      missing.push("Agrega al menos un cuestionario para el nivel activo.");
    }
    return missing;
  }, [currentLevelConfig.quizReferences]);

  const getSectionMissing = (sectionId: string) => {
    switch (sectionId) {
      case "info":
        return generalMissing;
      case "theory":
        return theoryMissing;
      case "quizzes":
        return quizMissing;
      default:
        return [];
    }
  };

  const sectionStatus = useMemo(() => {
    const sections = [
      { id: "info", label: "Información general" },
      { id: "dependencies", label: "Dependencias y desbloqueo" },
      { id: "theory", label: "Teoría" },
      { id: "quizzes", label: "Cuestionarios" },
      { id: "scoring", label: "Sistema de puntuación" },
      { id: "specialResources", label: "Contenidos especiales" },
      { id: "rewards", label: "Sistema de nivel y recompensas" },
      { id: "visibility", label: "Visibilidad y permisos" },
      { id: "actions", label: "Acciones finales" },
    ]
      .filter((section) => sectionVisibility[section.id as keyof typeof sectionVisibility])
      .map((section, index) => {
        const missing = getSectionMissing(section.id);
        return {
          ...section,
          order: index + 1,
          missing,
          isComplete: missing.length === 0,
        };
      });
    return sections;
  }, [generalMissing, quizMissing, sectionVisibility, theoryMissing]);

  const totalSections = sectionStatus.length;
  const completedSections = sectionStatus.filter((section) => section.isComplete).length;
  const progressPercentage = totalSections === 0 ? 0 : Math.round((completedSections / totalSections) * 100);

  const handleToggleSection = (sectionId: string) => {
    setOpenSection((prev) => (prev === sectionId ? "" : sectionId));
    setVisitedSections((prev) => ({ ...prev, [sectionId]: true }));
  };

  const makeModuleId = (value: string) => {
    const base = value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    return `${base || "modulo"}-${Date.now()}`;
  };

  const parseOptionalNumber = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : null;
  };

  const updateLevelConfig = (levelKey: string, updater: (current: LevelConfig) => LevelConfig) => {
    setLevelsConfig((prev) =>
      prev.map((levelEntry) => (levelEntry.level === levelKey ? updater(levelEntry) : levelEntry)),
    );
  };

  const normalizeLevelName = (value: string) => value.trim();

  const isDuplicateLevel = (candidate: string, items: string[], ignoreIndex?: number) =>
    items.some(
      (item, index) =>
        index !== ignoreIndex && item.toLowerCase() === candidate.trim().toLowerCase(),
    );

  const handleAddLevel = () => {
    const trimmed = normalizeLevelName(newLevelName);
    if (!trimmed) {
      setLevelsError("Ingresá un nombre para el nivel.");
      return;
    }
    if (isDuplicateLevel(trimmed, levels)) {
      setLevelsError("Ya existe un nivel con ese nombre.");
      return;
    }
    setLevels((prev) => [...prev, trimmed]);
    setLevelDrafts((prev) => [...prev, trimmed]);
    setLevelsConfig((prev) => [
      ...prev,
      {
        level: trimmed,
        quizReferences: [],
        bookResources: [],
        fileResources: [],
        questions: [],
      },
    ]);
    setNewLevelName("");
    setLevelsError("");
  };

  const handleLevelDraftChange = (index: number, nextValue: string) => {
    setLevelsError("");
    setLevelDrafts((prev) => {
      const next = [...prev];
      next[index] = nextValue;
      return next;
    });
  };

  const handleCommitLevelRename = (index: number) => {
    const trimmed = normalizeLevelName(levelDrafts[index]);
    const previousName = levels[index];
    if (!trimmed) {
      setLevelsError("El nombre del nivel no puede quedar vacío.");
      setLevelDrafts((prev) => {
        const next = [...prev];
        next[index] = previousName;
        return next;
      });
      return;
    }
    if (isDuplicateLevel(trimmed, levels, index)) {
      setLevelsError("Ya existe un nivel con ese nombre.");
      setLevelDrafts((prev) => {
        const next = [...prev];
        next[index] = previousName;
        return next;
      });
      return;
    }
    if (previousName === trimmed) {
      return;
    }
    setLevels((prev) => {
      const next = [...prev];
      next[index] = trimmed;
      return next;
    });
    setLevelDrafts((prev) => {
      const next = [...prev];
      next[index] = trimmed;
      return next;
    });
    setLevelsConfig((current) =>
      current.map((entry) =>
        entry.level === previousName ? { ...entry, level: trimmed } : entry,
      ),
    );
    if (level === previousName) {
      setLevel(trimmed);
    }
    if (activeLevel === previousName) {
      setActiveLevel(trimmed);
    }
    setLevelsError("");
  };

  const handleRemoveLevel = (levelName: string) => {
    setLevels((prev) => {
      if (prev.length <= 1) {
        setLevelsError("Debes mantener al menos un nivel.");
        return prev;
      }
      const nextLevels = prev.filter((name) => name !== levelName);
      if (nextLevels.length === prev.length) {
        return prev;
      }
      const fallbackLevel = nextLevels[0];
      if (level === levelName) {
        setLevel(fallbackLevel);
      }
      if (activeLevel === levelName) {
        setActiveLevel(fallbackLevel);
      }
      setLevelsError("");
      return nextLevels;
    });
    setLevelDrafts((prev) => prev.filter((name) => name !== levelName));
    setLevelsConfig((prev) => prev.filter((entry) => entry.level !== levelName));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaveStatus("saving");
    setSaveMessage("");
    try {
      const dependencies = [...moduleDependencies, ...customDependencies].filter(
        (dependency) => dependency.id.trim().length > 0,
      );
      const levelsPayload = levelsConfig.map(
        ({ level: levelName, quizReferences, bookResources, fileResources, questions }) => ({
          level: levelName,
          quizzes: quizReferences.map((quiz) => ({
            id: quiz.id,
            title: quiz.title ?? quiz.id,
            type: "evaluacion",
            visibility: "publico",
            schoolId: quiz.schoolId,
            schoolName: quiz.schoolName,
          })),
          resources: [...bookResources, ...fileResources],
          questions,
        }),
      );
      const fallbackLevel = levelsPayload.find((entry) => entry.level === level) ?? levelsPayload[0];
      const payload = {
        id: makeModuleId(title),
        title,
        description,
        subject,
        category,
        level,
        durationMinutes,
        recommendedCourse: recommendedCourse.trim() || undefined,
        visibility: visibilidad,
        dependencies,
        theoryBlocks: theoryItems,
        generatorRef: null,
        resources: fallbackLevel?.resources ?? [],
        levels: levelsPayload,
        levelOrder: levels,
        scoringConfig: hasQuizReferences
          ? {
              systemId: scoringSystemId,
              questionsPerPoint: parseOptionalNumber(questionsPerPoint),
              minPassingScore: minPassingScore.trim() || undefined,
              maxScoreForSix: parseOptionalNumber(maxScoreForSix),
              promotionRule: promotionRule.trim() || undefined,
            }
          : undefined,
        rewardsConfig:
          subjectCapabilities.supportsGenerators && isModelModule
            ? {
                maxLevel: parseOptionalNumber(rewardMaxLevel),
                maxExperience: parseOptionalNumber(rewardMaxExperience),
                maxQuestionsPerRound: parseOptionalNumber(rewardMaxQuestionsPerRound),
                experienceMultiplier: parseOptionalNumber(rewardExperienceMultiplier),
              }
            : undefined,
        visibilityConfig:
          visibilidad === "privado"
            ? {
                institution: privateInstitution.trim() || undefined,
                invitedTeachers: privateInvitedTeachers.trim() || undefined,
                studentRestriction: privateStudentRestriction.trim() || undefined,
              }
            : undefined,
        createdBy: "demo-docente",
        updatedAt: new Date().toISOString()
      };
      await apiPost("/api/modulos", payload);
      setSaveStatus("saved");
      setSaveMessage("Módulo guardado correctamente.");
    } catch (error) {
      setSaveStatus("error");
      setSaveMessage("No se pudo guardar el módulo. Revisá los campos requeridos.");
    }
  };

  const handleAddTheory = () => {
    if (!newTheoryTitle.trim()) return;
    if (newTheoryType === "Video" && !isValidUrl(newTheoryDetail.trim())) return;
    const nextItem: TheoryItem = {
      id: `theory-${Date.now()}`,
      title: newTheoryTitle.trim(),
      type: newTheoryType,
      detail: newTheoryDetail.trim() || "Sin detalle adicional.",
    };
    setTheoryItems((prev) => [...prev, nextItem]);
    setNewTheoryTitle("");
    setNewTheoryDetail("");
    setNewTheoryType("Video");
  };

  const handleRemoveTheory = (id: string) => {
    setTheoryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateTheory = (id: string, field: keyof TheoryItem, value: string) => {
    setTheoryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleAddQuizReference = () => {
    const trimmedId = newQuizReferenceId.trim();
    if (!trimmedId) return;
    updateLevelConfig(activeLevel, (current) => {
      if (current.quizReferences.some((quiz) => quiz.id === trimmedId)) {
        return current;
      }
      const trimmedSchoolId = newQuizReferenceSchoolId.trim();
      const trimmedSchoolName = newQuizReferenceSchoolName.trim();
      const nextReference: QuizReference = {
        id: trimmedId,
        title: newQuizReferenceTitle.trim() || undefined,
        schoolId: trimmedSchoolId || undefined,
        schoolName: trimmedSchoolName || undefined,
      };
      return {
        ...current,
        quizReferences: [...current.quizReferences, nextReference],
      };
    });
    setNewQuizReferenceId("");
    setNewQuizReferenceTitle("");
    setNewQuizReferenceSchoolId("");
    setNewQuizReferenceSchoolName("");
  };

  const handleRemoveQuizReference = (id: string) => {
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      quizReferences: current.quizReferences.filter((quiz) => quiz.id !== id),
    }));
  };

  const handleQuestionFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setQuestionImportStatus({ status: "idle", message: "" });
    setQuestionImportFileName("");
    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw) as unknown;
      const validation = validateExercisesJson(parsed);
      if (!validation.isValid || !validation.preguntas) {
        setQuestionImportStatus({
          status: "error",
          message: "El archivo no coincide con el esquema de planilla.",
          errors: validation.errors,
        });
        event.target.value = "";
        return;
      }
      const importedQuestions = validation.preguntas
        .map((pregunta, index) => {
          if (!isRecord(pregunta)) return null;
          const respuestas = Array.isArray(pregunta.respuestas)
            ? pregunta.respuestas
                .map((respuesta) => {
                  if (isNonEmptyString(respuesta)) return respuesta.trim();
                  if (isRecord(respuesta) && isNonEmptyString(respuesta.texto)) {
                    return respuesta.texto.trim();
                  }
                  return null;
                })
                .filter((respuesta): respuesta is string => Boolean(respuesta))
            : [];
          const prompt = isNonEmptyString(pregunta.enunciado) ? pregunta.enunciado.trim() : "";
          const solution = parseQuestionSolution(pregunta.solucion);
          if (!prompt || solution === null) return null;
          return {
            id: makeModuleId(`pregunta-${index + 1}`),
            prompt,
            answers: respuestas,
            solution,
            explanation: isNonEmptyString(pregunta.explicacion)
              ? pregunta.explicacion.trim()
              : undefined,
          } satisfies ModuleQuizQuestion;
        })
        .filter((item): item is ModuleQuizQuestion => Boolean(item));
      updateLevelConfig(activeLevel, (current) => ({
        ...current,
        questions: [...current.questions, ...importedQuestions],
      }));
      setQuestionImportFileName(file.name);
      setQuestionImportStatus({
        status: "valid",
        message: `Importadas ${importedQuestions.length} preguntas.`,
      });
    } catch (error) {
      setQuestionImportStatus({
        status: "error",
        message: "No se pudo leer el archivo JSON.",
        errors: [error instanceof Error ? error.message : "JSON inválido."],
      });
      event.target.value = "";
    }
  };

  const handleDownloadQuestionTemplate = () => {
    const blob = new Blob([exercisesJsonTemplate], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "plantilla-preguntas.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleRemoveQuestion = (questionId: string) => {
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      questions: current.questions.filter((question) => question.id !== questionId),
    }));
  };

  const handleUpdateQuestion = (
    questionId: string,
    updater: (question: ModuleQuizQuestion) => ModuleQuizQuestion,
  ) => {
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      questions: current.questions.map((question) =>
        question.id === questionId ? updater(question) : question,
      ),
    }));
  };

  const handleToggleDependency = (moduleId: string) => {
    setModuleDependencies((prev) => {
      const existing = prev.find((dependency) => dependency.id === moduleId);
      if (existing) {
        return prev.filter((dependency) => dependency.id !== moduleId);
      }
      return [...prev, { id: moduleId, type: "required" }];
    });
  };

  const handleDependencyTypeChange = (moduleId: string, type: ModuleDependencyType) => {
    setModuleDependencies((prev) =>
      prev.map((dependency) =>
        dependency.id === moduleId ? { ...dependency, type } : dependency,
      ),
    );
  };

  const handleAddCustomDependency = () => {
    const trimmed = customDependency.trim();
    if (!trimmed || customDependencies.some((dependency) => dependency.id === trimmed)) return;
    setCustomDependencies((prev) => [...prev, { id: trimmed, type: customDependencyType }]);
    setCustomDependency("");
    setCustomDependencyType("required");
  };

  const handleRemoveCustomDependency = (dependency: string) => {
    setCustomDependencies((prev) =>
      prev.filter((item) => item.id !== dependency),
    );
  };

  return (
    <main className="flex-1 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h1 className="text-2xl font-semibold text-slate-900">Crear Módulo</h1>
                  <p className="mt-1 text-sm text-slate-600">
                    Un asistente guiado para construir módulos con teoría, cuestionarios y recursos.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 text-xs text-slate-600">
                <span className="font-semibold text-slate-700">Avance del módulo</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-blue-600 transition-all"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <span className="font-semibold text-slate-700">{progressPercentage}%</span>
                </div>
                <span>
                  {completedSections} de {totalSections} secciones listas
                </span>
              </div>
            </div>
          </div>
        </header>

        <form className="mt-6 bg-white rounded-xl shadow p-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
            <div className="space-y-8">
              {/* 1. Información general */}
              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("info")}
                    aria-expanded={openSection === "info"}
                  >
                    Información general
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "info" ? "Ocultar" : "Editar"}
                    </span>
                  </button>
                  <span
                    className={`text-xs font-semibold ${
                      generalMissing.length === 0 ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {generalMissing.length === 0 ? "Completo" : "Faltan datos"}
                  </span>
                </div>
                {visitedSections.info && generalMissing.length > 0 && (
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                    <p className="font-semibold">Qué falta en esta sección</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      {generalMissing.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {openSection === "info" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">Datos esenciales</h3>
                        <p className="text-xs text-slate-500">
                          Lo mínimo para que el módulo sea identificable y fácil de encontrar.
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Título del módulo <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Ej: Introducción a las fracciones"
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Usá un nombre corto y descriptivo; aparecerá en la biblioteca de módulos.
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Descripción <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Describe el contenido, objetivos y actividades del módulo..."
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Incluí objetivos y cómo se evaluará para orientar a otros docentes.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">Clasificación y enfoque</h3>
                        <p className="text-xs text-slate-500">
                          Ayuda a etiquetar el módulo dentro de la institución.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Materia principal <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                          >
                            {materias.map((m) => (
                              <option key={m} value={m}>
                                {m}
                              </option>
                            ))}
                          </select>
                          <p className="mt-1 text-xs text-gray-500">
                            {isConfigLoading
                              ? "Cargando materias desde configuración..."
                              : "Acepta cualquier materia que se dicte en la escuela."}
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Categoría / Tema <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                            placeholder="Ej: Álgebra, Historia Mundial, Programación"
                            list="categorias-config"
                          />
                          <datalist id="categorias-config">
                            {categorias.map((c) => (
                              <option key={c} value={c} />
                            ))}
                          </datalist>
                          <p className="mt-1 text-xs text-gray-500">
                            Podés escribir libremente o elegir una sugerencia cargada desde administración.
                          </p>
                        </div>
                      </div>
                      {configMessage && (
                        <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                          {configMessage}
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">Planificación del módulo</h3>
                        <p className="text-xs text-slate-500">
                          Definí duración y nivel de entrada para los estudiantes.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Nivel de dificultad <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
                            value={level}
                            onChange={(event) => {
                              setLevel(event.target.value);
                              setActiveLevel(event.target.value);
                            }}
                          >
                            {levels.map((n) => (
                              <option key={n} value={n}>
                                {n}
                              </option>
                            ))}
                          </select>
                          <p className="mt-1 text-xs text-gray-500">
                            Elegí el nivel que mejor represente el punto de partida.
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Duración estimada (minutos) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            min={1}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Ej: 30"
                            value={durationMinutes}
                            onChange={(event) => setDurationMinutes(Number(event.target.value))}
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            Esto ayuda a planificar la clase o la secuencia.
                          </p>
                        </div>
                      </div>
                      <details className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <summary className="cursor-pointer text-sm font-semibold text-slate-700">
                          Ajustes secundarios (niveles y curso recomendado)
                        </summary>
                        <div className="mt-4 space-y-4">
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-semibold text-gray-800">Niveles del módulo</p>
                              <p className="text-xs text-gray-500">
                                Agregá, renombrá o eliminá niveles para adaptar la progresión del contenido.
                              </p>
                            </div>
                            <div className="space-y-2">
                              {levels.map((nivel, index) => (
                                <div key={`${nivel}-${index}`} className="flex flex-wrap items-center gap-2">
                                  <input
                                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                                    value={levelDrafts[index] ?? nivel}
                                    onChange={(event) => handleLevelDraftChange(index, event.target.value)}
                                    onBlur={() => handleCommitLevelRename(index)}
                                    onKeyDown={(event) => {
                                      if (event.key === "Enter") {
                                        (event.target as HTMLInputElement).blur();
                                      }
                                    }}
                                  />
                                  <button
                                    type="button"
                                    className="rounded-md border border-red-200 px-3 py-2 text-xs text-red-600 disabled:opacity-50"
                                    onClick={() => handleRemoveLevel(nivel)}
                                    disabled={levels.length === 1}
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                              <input
                                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                                value={newLevelName}
                                onChange={(event) => setNewLevelName(event.target.value)}
                                placeholder="Nuevo nivel"
                              />
                              <button
                                type="button"
                                className="rounded-md border px-4 py-2 text-sm"
                                onClick={handleAddLevel}
                              >
                                Agregar nivel
                              </button>
                            </div>
                            {levelsError && <p className="text-xs text-red-600">{levelsError}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">Edad/Curso recomendado</label>
                            <input
                              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                              placeholder="Ej: 5° grado primaria"
                              value={recommendedCourse}
                              onChange={(event) => setRecommendedCourse(event.target.value)}
                            />
                            <p className="mt-1 text-xs text-gray-500">
                              Usá este campo si necesitás orientar a docentes o estudiantes nuevos.
                            </p>
                          </div>
                        </div>
                      </details>
                    </div>

                    {showLargeModuleHint && (
                      <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                        <p className="font-medium">Este módulo ya es extenso.</p>
                        <p className="mt-1">
                          Para gestionar cuestionarios largos o con muchas variantes, te sugerimos usar el editor
                          dedicado.{" "}
                          <Link className="font-semibold text-amber-900 underline" to="/profesor/editor-cuestionarios">
                            Abrir editor de cuestionarios
                          </Link>
                          .
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* 2. Dependencias y desbloqueo */}
              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("dependencies")}
                    aria-expanded={openSection === "dependencies"}
                  >
                    Dependencias y desbloqueo
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "dependencies" ? "Ocultar" : "Editar"}
                    </span>
                  </button>
                  <span className="text-xs font-semibold text-gray-500">Opcional</span>
                </div>
                {openSection === "dependencies" && (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Define relaciones entre módulos indicando si son requisitos previos o si este módulo desbloquea
                      otros contenidos. Esto permite que el profesor trace rutas de aprendizaje claras.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4 space-y-3">
                        <h3 className="text-sm font-semibold">Módulos relacionados</h3>
                        <p className="text-xs text-gray-500">
                          Selecciona los módulos y define si son requisitos previos o si este módulo los desbloquea.
                        </p>
                        <div className="space-y-2">
                          {MVP_MODULES.map((module) => {
                            const selectedDependency = moduleDependencies.find(
                              (dependency) => dependency.id === module.id,
                            );
                            return (
                              <label key={module.id} className="flex items-start gap-3 text-sm">
                                <input
                                  type="checkbox"
                                  className="mt-1 h-4 w-4"
                                  checked={Boolean(selectedDependency)}
                                  onChange={() => handleToggleDependency(module.id)}
                                />
                                <span className="flex-1">
                                  <span className="font-medium">{module.title}</span>
                                  <span className="block text-xs text-gray-500">
                                    {module.category} · {module.level}
                                  </span>
                                </span>
                                <select
                                  className="rounded-md border border-gray-300 px-2 py-1 text-xs"
                                  value={selectedDependency?.type ?? "required"}
                                  onChange={(event) =>
                                    handleDependencyTypeChange(
                                      module.id,
                                      event.target.value as ModuleDependencyType,
                                    )
                                  }
                                  disabled={!selectedDependency}
                                >
                                  {Object.entries(DEPENDENCY_TYPE_LABELS).map(([value, label]) => (
                                    <option key={value} value={value}>
                                      {label}
                                    </option>
                                  ))}
                                </select>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 space-y-3">
                        <h3 className="text-sm font-semibold">Requisitos personalizados</h3>
                        <p className="text-xs text-gray-500">
                          Agrega condiciones adicionales (por ejemplo, “Saber contar hasta 100”).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <input
                            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
                            value={customDependency}
                            onChange={(event) => setCustomDependency(event.target.value)}
                            placeholder="Ej: Saber contar hasta 100"
                          />
                          <select
                            className="rounded-md border border-gray-300 px-2 py-2 text-xs"
                            value={customDependencyType}
                            onChange={(event) =>
                              setCustomDependencyType(event.target.value as ModuleDependencyType)
                            }
                          >
                            {Object.entries(DEPENDENCY_TYPE_LABELS).map(([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            className="rounded-md border px-4 py-2 text-sm"
                            onClick={handleAddCustomDependency}
                          >
                            Agregar
                          </button>
                        </div>
                        {customDependencies.length > 0 ? (
                          <ul className="space-y-2">
                            {customDependencies.map((dependency) => (
                              <li
                                key={dependency.id}
                                className="flex items-center justify-between text-sm"
                              >
                                <span>
                                  {dependency.id}
                                  <span className="ml-2 text-xs text-gray-500">
                                    ({DEPENDENCY_TYPE_LABELS[dependency.type]})
                                  </span>
                                </span>
                                <button
                                  type="button"
                                  className="text-xs text-red-500 hover:underline"
                                  onClick={() => handleRemoveCustomDependency(dependency.id)}
                                >
                                  Quitar
                                </button>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-gray-500">
                            Todavía no agregaste requisitos personalizados.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* 3. Teoría */}
              <section className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("theory")}
                    aria-expanded={openSection === "theory"}
                  >
                    Teoría
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "theory" ? "Ocultar" : "Editar"}
                    </span>
                  </button>
                  <span
                    className={`text-xs font-semibold ${
                      theoryMissing.length === 0 ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {theoryMissing.length === 0 ? "Completo" : "Faltan datos"}
                  </span>
                </div>
                {visitedSections.theory && theoryMissing.length > 0 && (
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                    <p className="font-semibold">Qué falta en esta sección</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      {theoryMissing.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {openSection === "theory" && (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600">
                      Agregá cada parte de la teoría como un bloque con tipo configurable (video, texto, enlace, etc.).
                    </p>

                    <div className="grid gap-3">
                      {theoryItems.length === 0 ? (
                        <div className="border rounded-lg p-4 text-sm text-gray-600 bg-gray-50">
                          Todavía no hay partes de teoría agregadas. Usa el formulario de abajo para sumar videos,
                          texto o enlaces.
                        </div>
                      ) : (
                        theoryItems.map((item) => {
                          const detailError = getTheoryDetailError(item.type, item.detail);
                          return (
                            <div key={item.id} className="border rounded-lg p-4 flex flex-col gap-2 bg-gray-50">
                              {detailError && <p className="text-xs text-red-600">{detailError}</p>}
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-semibold">{item.title}</p>
                                  <p className="text-xs text-gray-500">Tipo: {item.type}</p>
                                </div>
                                <button
                                  type="button"
                                  className="text-xs text-red-500 hover:underline"
                                  onClick={() => handleRemoveTheory(item.id)}
                                >
                                  Quitar bloque
                                </button>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <input
                                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                                  value={item.title}
                                  onChange={(event) => handleUpdateTheory(item.id, "title", event.target.value)}
                                  placeholder="Título del bloque"
                                />
                                <div className="space-y-1">
                                  <select
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                                    value={item.type}
                                    onChange={(event) => handleUpdateTheory(item.id, "type", event.target.value)}
                                  >
                                    {theoryTypeOptions.map((option) => (
                                      <option
                                        key={`${item.id}-${option.value}`}
                                        value={option.value}
                                        disabled={option.disabled}
                                      >
                                        {option.label}
                                        {option.disabledReason ? ` (${option.disabledReason})` : ""}
                                      </option>
                                    ))}
                                  </select>
                                  {theoryTypeOptions.some(
                                    (option) => option.value === item.type && option.disabled && option.disabledReason
                                  ) && (
                                    <p className="text-[11px] text-amber-600">
                                      {
                                        theoryTypeOptions.find(
                                          (option) => option.value === item.type && option.disabled && option.disabledReason
                                        )?.disabledReason
                                      }
                                    </p>
                                  )}
                                </div>
                                <input
                                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                                  value={item.detail}
                                  onChange={(event) => handleUpdateTheory(item.id, "detail", event.target.value)}
                                  placeholder="Detalle rápido"
                                />
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="border rounded-lg p-4 space-y-3">
                      <h3 className="text-sm font-semibold">Agregar nueva parte de teoría</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input
                          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                          value={newTheoryTitle}
                          onChange={(event) => setNewTheoryTitle(event.target.value)}
                          placeholder="Título (ej: Video introductorio)"
                        />
                        <div className="space-y-1">
                          <select
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                            value={newTheoryType}
                            onChange={(event) => setNewTheoryType(event.target.value)}
                          >
                            {theoryTypeOptions.map((option) => (
                              <option key={option.value} value={option.value} disabled={option.disabled}>
                                {option.label}
                                {option.disabledReason ? ` (${option.disabledReason})` : ""}
                              </option>
                            ))}
                          </select>
                        </div>
                        <input
                          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                          value={newTheoryDetail}
                          onChange={(event) => setNewTheoryDetail(event.target.value)}
                          placeholder="Detalle / nota"
                        />
                      </div>
                      {newTheoryDetailError && (
                        <p className="text-xs text-red-600">{newTheoryDetailError}</p>
                      )}
                      <button type="button" className="rounded-md border px-4 py-2 text-sm" onClick={handleAddTheory}>
                        + Agregar parte de teoría
                      </button>
                    </div>
                  </div>
                )}
              </section>

              {/* 4. Cuestionarios */}
              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("quizzes")}
                    aria-expanded={openSection === "quizzes"}
                  >
                    Cuestionarios
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "quizzes" ? "Ocultar" : "Editar"}
                    </span>
                  </button>
                  <span
                    className={`text-xs font-semibold ${
                      quizMissing.length === 0 ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {quizMissing.length === 0 ? "Completo" : "Faltan datos"}
                  </span>
                </div>
                {visitedSections.quizzes && quizMissing.length > 0 && (
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                    <p className="font-semibold">Qué falta en esta sección</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      {quizMissing.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {openSection === "quizzes" && (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600">
                      Gestioná los cuestionarios del módulo en un solo lugar: vinculá IDs creados en el editor,
                      importá bancos JSON y ajustá las consignas básicas por nivel.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <p className="text-xs text-slate-500">Cuestionarios vinculados</p>
                        <p className="mt-1 text-2xl font-semibold text-slate-800">
                          {levelsConfig.reduce((total, entry) => total + entry.quizReferences.length, 0)}
                        </p>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <p className="text-xs text-slate-500">Niveles con contenido</p>
                        <p className="mt-1 text-2xl font-semibold text-slate-800">
                          {levelsConfig.filter((entry) => entry.quizReferences.length > 0).length} / {levels.length}
                        </p>
                      </div>
                      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                        <p className="text-xs text-blue-700">Editor dedicado</p>
                        <Link
                          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline"
                          to="/profesor/editor-cuestionarios"
                        >
                          Abrir editor de cuestionarios
                        </Link>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h3 className="text-sm font-semibold">Vincular cuestionarios por nivel</h3>
                            <p className="text-xs text-gray-500">
                              Copiá el ID desde el editor dedicado y asociá cada cuestionario al nivel correspondiente.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="font-semibold text-slate-600">Nivel activo:</span>
                            <span>{activeLevel}</span>
                          </div>
                        </div>
                        <div className="max-w-xs">
                          <label className="block text-xs font-medium text-gray-700">Nivel a configurar</label>
                          <select
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                            value={activeLevel}
                            onChange={(event) => setActiveLevel(event.target.value)}
                          >
                            {levels.map((nivel) => (
                              <option key={nivel} value={nivel}>
                                {nivel}
                              </option>
                            ))}
                          </select>
                          <p className="mt-1 text-[11px] text-gray-500">
                            Los cuestionarios se asocian por nivel para adaptar la progresión.
                          </p>
                        </div>

                        {currentLevelConfig.quizReferences.length === 0 ? (
                          <div className="rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 text-xs text-slate-500">
                            Todavía no vinculaste cuestionarios en este nivel.
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {currentLevelConfig.quizReferences.map((quiz) => (
                              <li
                                key={quiz.id}
                                className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600"
                              >
                                <div>
                                  <p className="font-semibold text-slate-800">
                                    {quiz.title || "Cuestionario sin título"}
                                  </p>
                                  <p className="text-[11px] text-slate-500">ID: {quiz.id}</p>
                                  {(quiz.schoolId || quiz.schoolName) && (
                                    <p className="text-[11px] text-slate-500">
                                      Escuela:{" "}
                                      {[quiz.schoolName, quiz.schoolId].filter(Boolean).join(" · ")}
                                    </p>
                                  )}
                                </div>
                                <button
                                  type="button"
                                  className="text-xs text-red-500 hover:underline"
                                  onClick={() => handleRemoveQuizReference(quiz.id)}
                                >
                                  Quitar
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] gap-2">
                          <input
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                            value={newQuizReferenceId}
                            onChange={(event) => setNewQuizReferenceId(event.target.value)}
                            placeholder="ID del cuestionario (copiado del editor)"
                          />
                          <input
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                            value={newQuizReferenceTitle}
                            onChange={(event) => setNewQuizReferenceTitle(event.target.value)}
                            placeholder="Título de referencia (opcional)"
                          />
                          <input
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                            value={newQuizReferenceSchoolId}
                            onChange={(event) => setNewQuizReferenceSchoolId(event.target.value)}
                            placeholder="ID de la escuela (opcional)"
                          />
                          <input
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                            value={newQuizReferenceSchoolName}
                            onChange={(event) => setNewQuizReferenceSchoolName(event.target.value)}
                            placeholder="Nombre de la escuela (opcional)"
                          />
                          <button
                            type="button"
                            className="rounded-md border px-4 py-2 text-sm"
                            onClick={handleAddQuizReference}
                          >
                            Vincular
                          </button>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-6 space-y-4">
                        <div>
                          <h3 className="text-sm font-semibold">Banco de preguntas del módulo</h3>
                          <p className="text-xs text-gray-500">
                            Importá una plantilla JSON y ajustá las consignas antes de guardar.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border rounded-lg p-4 space-y-2">
                            <h4 className="text-sm font-semibold">Importar JSON</h4>
                            <input
                              type="file"
                              accept=".json"
                              className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                              onChange={handleQuestionFileChange}
                            />
                            <p className="text-xs text-gray-500">
                              Cada pregunta debe incluir: enunciado, respuestas y solución.
                            </p>
                            {questionImportStatus.status === "valid" && (
                              <p className="text-xs text-emerald-600">
                                {questionImportStatus.message}{" "}
                                {questionImportFileName ? `(${questionImportFileName})` : ""}
                              </p>
                            )}
                            {questionImportStatus.status === "error" && (
                              <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700 space-y-2">
                                <p className="font-semibold">{questionImportStatus.message}</p>
                                <ul className="list-disc pl-4 space-y-1">
                                  {questionImportStatus.errors?.map((error) => (
                                    <li key={error}>{error}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <details className="rounded-md border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600">
                              <summary className="cursor-pointer font-medium">
                                Ver ejemplo de planilla válida
                              </summary>
                              <pre className="mt-2 whitespace-pre-wrap font-mono">{exercisesJsonTemplate}</pre>
                            </details>
                          </div>

                          <div className="border rounded-lg p-4 space-y-2">
                            <h4 className="text-sm font-semibold">Descargar JSON base</h4>
                            <p className="text-xs text-gray-600">
                              Genera un archivo base con estructura vacía para completar offline.
                            </p>
                            <button
                              type="button"
                              className="rounded-md border px-3 py-2 text-sm"
                              onClick={handleDownloadQuestionTemplate}
                            >
                              Descargar plantilla JSON
                            </button>
                          </div>
                        </div>

                        {currentLevelConfig.questions.length === 0 ? (
                          <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
                            Todavía no importaste preguntas para este nivel.
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {currentLevelConfig.questions.map((question, index) => (
                              <div key={question.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                <div className="flex items-center justify-between gap-2">
                                  <p className="text-sm font-semibold text-slate-700">
                                    Pregunta {index + 1}
                                  </p>
                                  <button
                                    type="button"
                                    className="text-xs text-red-500 hover:underline"
                                    onClick={() => handleRemoveQuestion(question.id)}
                                  >
                                    Eliminar
                                  </button>
                                </div>
                                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <div className="md:col-span-2">
                                    <label className="text-xs font-medium text-slate-600">Enunciado</label>
                                    <textarea
                                      rows={2}
                                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                      value={question.prompt}
                                      onChange={(event) =>
                                        handleUpdateQuestion(question.id, (current) => ({
                                          ...current,
                                          prompt: event.target.value,
                                        }))
                                      }
                                    />
                                  </div>
                                  <div className="md:col-span-2">
                                    <label className="text-xs font-medium text-slate-600">Respuestas</label>
                                    <textarea
                                      rows={3}
                                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                      value={question.answers?.join("\n") ?? ""}
                                      onChange={(event) =>
                                        handleUpdateQuestion(question.id, (current) => ({
                                          ...current,
                                          answers: event.target.value
                                            .split("\n")
                                            .map((answer) => answer.trim())
                                            .filter(Boolean),
                                        }))
                                      }
                                      placeholder="Una respuesta por línea"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs font-medium text-slate-600">Solución</label>
                                    <input
                                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                      value={question.solution ?? ""}
                                      onChange={(event) =>
                                        handleUpdateQuestion(question.id, (current) => ({
                                          ...current,
                                          solution: event.target.value,
                                        }))
                                      }
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs font-medium text-slate-600">Explicación</label>
                                    <input
                                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                      value={question.explanation ?? ""}
                                      onChange={(event) =>
                                        handleUpdateQuestion(question.id, (current) => ({
                                          ...current,
                                          explanation: event.target.value,
                                        }))
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {!hasQuizReferences && (
                      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                        Aún no hay cuestionarios vinculados para este módulo. Vinculá al menos uno para habilitar el
                        sistema de puntuación y aprobación.
                      </div>
                    )}
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-3">
                      <p className="text-xs text-slate-600">
                        Desde el editor dedicado podés preparar bancos avanzados, generadores automáticos y versiones
                        alternativas para cada nivel.
                      </p>
                      <Link
                        className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                        to="/profesor/editor-cuestionarios"
                      >
                        Ir al editor de cuestionarios
                      </Link>
                    </div>
                  </div>
                )}
              </section>

              {/* 6. Sistema de puntuación y aprobación */}
              {hasQuizReferences && (
                <section className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-lg font-semibold"
                      onClick={() => handleToggleSection("scoring")}
                      aria-expanded={openSection === "scoring"}
                    >
                      Sistema de puntuación y aprobación
                      <span className="text-xs font-medium text-gray-500">
                        {openSection === "scoring" ? "Ocultar" : "Editar"}
                      </span>
                    </button>
                    <span className="text-xs font-semibold text-gray-500">Opcional</span>
                  </div>
                  {openSection === "scoring" && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Configura el sistema de calificación, la escala y la cantidad de preguntas por punto.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Sistema de calificación
                          </label>
                          <select
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white"
                            value={scoringSystemId}
                            onChange={(event) => setScoringSystemId(event.target.value)}
                          >
                            {scoringSystems.map((system) => (
                              <option key={system.id} value={system.id}>
                                {system.label}
                              </option>
                            ))}
                          </select>
                          {scoringSystemNote && (
                            <p className="mt-2 text-xs text-gray-500">{scoringSystemNote}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Cantidad de preguntas por punto
                          </label>
                          <input
                            type="number"
                            min={1}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                            placeholder="Ej: 3 preguntas = 1 punto"
                            value={questionsPerPoint}
                            onChange={(event) => setQuestionsPerPoint(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Aprobación mínima</label>
                          <input
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                            placeholder="Ej: 6 / 60 / Aprobado"
                            value={minPassingScore}
                            onChange={(event) => setMinPassingScore(event.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Máximo para nota 6</label>
                          <input
                            type="number"
                            min={1}
                            max={80}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                            placeholder="Máximo 80%"
                            value={maxScoreForSix}
                            onChange={(event) => setMaxScoreForSix(event.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Regla de promoción</label>
                          <input
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                            placeholder="Ej: 70% o más"
                            value={promotionRule}
                            onChange={(event) => setPromotionRule(event.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* 7. Contenidos especiales */}
              {subjectCapabilities.supportsSpecialResources && (
                <section className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-lg font-semibold"
                      onClick={() => handleToggleSection("specialResources")}
                      aria-expanded={openSection === "specialResources"}
                    >
                      Contenidos especiales
                      <span className="text-xs font-medium text-gray-500">
                        {openSection === "specialResources" ? "Ocultar" : "Editar"}
                      </span>
                    </button>
                    <span className="text-xs font-semibold text-gray-500">Opcional</span>
                  </div>
                  {openSection === "specialResources" && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Agrega libros, PDFs o módulos especiales para materias específicas (lengua, geografía,
                        biología).
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 space-y-2">
                          <h3 className="text-sm font-semibold">Libros y documentos</h3>
                          <p className="text-xs text-gray-500">
                            Gestioná los libros desde el editor dedicado y luego vinculalos desde esta sección.
                          </p>
                          <Link
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline"
                            to="/editor"
                          >
                            Abrir editor de libros
                          </Link>
                          <p className="text-[11px] text-gray-500">
                            Tip: usá títulos consistentes para encontrarlos rápido en tus módulos.
                          </p>
                        </div>

                        <div className="border rounded-lg p-4 space-y-2">
                          <h3 className="text-sm font-semibold">Funciones específicas por materia</h3>
                          {specialResourcesEditor}
                          <p className="text-[11px] text-gray-500">
                            Estas funciones se adaptan automáticamente a la materia seleccionada.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* 8. Sistema de nivel y recompensas */}
              {subjectCapabilities.supportsGenerators && isModelModule && (
                <section className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-lg font-semibold"
                      onClick={() => handleToggleSection("rewards")}
                      aria-expanded={openSection === "rewards"}
                    >
                      Sistema de nivel y recompensas
                      <span className="text-xs font-medium text-gray-500">
                        {openSection === "rewards" ? "Ocultar" : "Editar"}
                      </span>
                    </button>
                    <span className="text-xs font-semibold text-gray-500">Opcional</span>
                  </div>
                  {openSection === "rewards" && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Solo aplica a módulos con generación aleatoria en materias con generadores. Al completar el
                        módulo se otorga experiencia, sube el nivel y aumenta la dificultad con lógica tipo RPG o
                        competencia por puntos.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Nivel máximo otorgado</label>
                          <input
                            type="number"
                            min={1}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Ej: 5"
                            value={rewardMaxLevel}
                            onChange={(event) => setRewardMaxLevel(event.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">Experiencia máxima</label>
                          <input
                            type="number"
                            min={0}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Ej: 150"
                            value={rewardMaxExperience}
                            onChange={(event) => setRewardMaxExperience(event.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Cantidad máx. de preguntas por ronda
                          </label>
                          <input
                            type="number"
                            min={1}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Ej: 10"
                            value={rewardMaxQuestionsPerRound}
                            onChange={(event) => setRewardMaxQuestionsPerRound(event.target.value)}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">Multiplicador de experiencia</label>
                          <input
                            type="number"
                            step="0.1"
                            min={0}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Ej: 1.5"
                            value={rewardExperienceMultiplier}
                            onChange={(event) => setRewardExperienceMultiplier(event.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              )}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-6">
                {/* 9. Visibilidad y permisos */}
                <section className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      Visibilidad y permisos
                      <span className="text-xs font-medium text-slate-500">Paso obligatorio</span>
                    </div>
                  </div>
                  <div className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <span className="block text-sm font-medium text-gray-700">
                  Tipo de módulo <span className="text-red-500">*</span>
                </span>

                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="radio"
                    name="visibilidad"
                    value="publico"
                    checked={visibilidad === "publico"}
                    onChange={() => setVisibilidad("publico")}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    <span className="font-medium">Público</span>
                    <span className="block text-xs text-gray-500">
                      Cualquier usuario (profesores, estudiantes e invitados) puede usarlo y se puede insertar en
                      cualquier aula virtual.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="radio"
                    name="visibilidad"
                    value="privado"
                    checked={visibilidad === "privado"}
                    onChange={() => setVisibilidad("privado")}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>
                    <span className="font-medium">Privado</span>
                    <span className="block text-xs text-gray-500">
                      Solo el profesor creador, administradores/profesores invitados y usuarios que cumplan condiciones
                      (institución, aula, invitación explícita).
                    </span>
                  </span>
                </label>
              </div>

              {/* Config extra sólo si es privado */}
              {visibilidad === "privado" && (
                <div className="space-y-3 border rounded-lg p-4 bg-gray-50">
                  <h3 className="text-sm font-semibold">Permisos para módulos privados</h3>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Institución / escuela</label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Seleccionar institución / escuela"
                      value={privateInstitution}
                      onChange={(event) => setPrivateInstitution(event.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Profesores / administradores invitados
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Buscar por nombre, correo o alias"
                      value={privateInvitedTeachers}
                      onChange={(event) => setPrivateInvitedTeachers(event.target.value)}
                    />
                    <p className="mt-1 text-[11px] text-gray-500">
                      Estos usuarios podrán usar el módulo en sus aulas virtuales.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Restricción de alumnos</label>
                    <select
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                      value={privateStudentRestriction}
                      onChange={(event) => setPrivateStudentRestriction(event.target.value)}
                    >
                      <option>Solo alumnos de mi institución</option>
                      <option>Solo alumnos de mis cursos</option>
                      <option>Alumnos invitados explícitamente</option>
                      <option>Combinación de las anteriores (definida por backend)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

                    <p className="text-xs text-gray-500">
                      El sistema también registrará el progreso de los usuarios (nivel alcanzado, experiencia acumulada,
                      estado completo/incompleto y favoritos) fuera de este formulario.
                    </p>
                  </div>
                </section>

                {/* 10. Acciones finales */}
                <section className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      Acciones finales
                      <span className="text-xs font-medium text-slate-500">Paso final</span>
                    </div>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap justify-center gap-3">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 text-sm font-medium disabled:opacity-70"
                        disabled={saveStatus === "saving"}
                      >
                        {saveStatus === "saving" ? "Guardando..." : "Crear módulo"}
                      </button>
                    </div>
                  </div>
                </section>
              </div>
              {saveStatus !== "idle" && (
                <p
                  className={`text-sm ${
                    saveStatus === "saved"
                      ? "text-emerald-600"
                      : saveStatus === "error"
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
                >
                  {saveMessage}
                </p>
              )}
            </div>

            <aside className="space-y-4 lg:sticky lg:top-6 self-start">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-700">Resumen de avance</h3>
                  <span className="text-xs font-semibold text-slate-600">{progressPercentage}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-blue-500 transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-slate-600">
                  {completedSections} de {totalSections} secciones completas.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                <h3 className="text-sm font-semibold text-slate-700">Estado por sección</h3>
                <ul className="space-y-3 text-xs text-slate-600">
                  {sectionStatus.map((section) => (
                    <li key={section.id} className="space-y-2">
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-2 text-left"
                        onClick={() => handleToggleSection(section.id)}
                      >
                        <span className="font-medium text-slate-700">
                          {section.order}. {section.label}
                        </span>
                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                            section.isComplete ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {section.isComplete ? "Listo" : "Pendiente"}
                        </span>
                      </button>
                      {section.missing.length > 0 && (
                        <ul className="list-disc space-y-1 pl-4 text-[11px] text-amber-700">
                          {section.missing.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
}
