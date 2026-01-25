import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  CheckCircle,
  FileQuestion,
  FileText,
  Globe,
  Link2,
  Settings,
  Sparkles,
} from "lucide-react";
import { ApiError, apiGet, apiPost } from "../lib/api";
import MapEditor from "../components/MapEditor";
import ReadingWorkshop from "../components/ReadingWorkshop";
import SkeletonMarker from "../components/SkeletonMarker";
import {
  getSubjectCapabilities,
  type ModuleQuiz,
  type ModuleQuizVisibility,
  type ModuleResource,
} from "../domain/module/module.types";
import { MVP_GENERATOR_CATEGORIES, MVP_MODULES } from "../mvp/mvpData";
import { fetchCategoriasConfig, fetchMateriasConfig } from "../services/modulos";

type TheoryItem = {
  id: string;
  title: string;
  type: string;
  detail: string;
};

type LevelConfig = {
  level: string;
  quizBlocks: ModuleQuiz[];
  bookResources: ModuleResource[];
  fileResources: ModuleResource[];
};

type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isValidUrl = (value: string) => {
  if (!value.trim()) return false;
  try {
    const parsedUrl = new URL(value);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch (error) {
    return false;
  }
};

const ALLOWED_RESOURCE_EXTENSIONS: Record<"doc" | "txt" | "bookJson", string[]> = {
  doc: [".doc", ".docx"],
  txt: [".txt"],
  bookJson: [".json"],
};

const getFileExtension = (value: string) => {
  let path = value;
  try {
    path = new URL(value).pathname;
  } catch (error) {
    path = value;
  }
  const match = path.toLowerCase().match(/\.[a-z0-9]+$/i);
  return match?.[0] ?? "";
};

const isExtensionAllowed = (resourceType: "doc" | "txt" | "bookJson", value: string) =>
  ALLOWED_RESOURCE_EXTENSIONS[resourceType].includes(getFileExtension(value));

const getAllowedExtensionsLabel = (resourceType: "doc" | "txt" | "bookJson") =>
  ALLOWED_RESOURCE_EXTENSIONS[resourceType].join(", ");

const getUrlFileName = (value: string) => {
  try {
    const url = new URL(value);
    const lastSegment = url.pathname.split("/").filter(Boolean).pop();
    return lastSegment ? decodeURIComponent(lastSegment) : "archivo";
  } catch (error) {
    return "archivo";
  }
};

const readFileAsText = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsText(file);
  });

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsDataURL(file);
  });

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

const exercisesJsonExample = `{
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

const buildDefaultQuizBlocks = (levelKey: string): ModuleQuiz[] => [
  {
    id: `quiz-${levelKey}-main`,
    title: `Cuestionario principal (${levelKey})`,
    type: "evaluacion",
    visibility: "escuela"
  },
  {
    id: `quiz-${levelKey}-practice`,
    title: `Cuestionario de práctica (${levelKey})`,
    type: "practica",
    visibility: "publico"
  }
];

const DEFAULT_LEVELS = ["Básico", "Intermedio", "Avanzado"];
const QUIZ_TYPE_LABELS: Record<ModuleQuiz["type"], string> = {
  practica: "Práctica",
  evaluacion: "Evaluación",
  competencia: "Competencia",
};
const SCORING_SYSTEM_NOTES: Record<string, string> = {
  "scale-1-10": "Referencia rápida: 1 = desempeño mínimo, 10 = desempeño sobresaliente.",
  "scale-0-100": "Referencia rápida: 0–100 puntos (100 = desempeño sobresaliente).",
  "pass-fail": "Referencia rápida: aprobado si cumple el mínimo, desaprobado si no lo alcanza.",
  "scale-a-f": "Referencia rápida: A = 90–100, B = 80–89, C = 70–79, D = 60–69, E/F = < 60.",
  "scale-s-f": "Referencia rápida: S = 95–100, A = 85–94, B = 75–84, C = 65–74, D = 55–64, E/F = < 55.",
};

const validateExercisesJson = (value: unknown): ValidationResult => {
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

  return { isValid: errors.length === 0, errors };
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
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [scoringSystemId, setScoringSystemId] = useState("scale-1-10");
  const [saveMessage, setSaveMessage] = useState("");
  const [materias, setMaterias] = useState<string[]>(DEFAULT_MATERIAS);
  const [categorias, setCategorias] = useState<string[]>(DEFAULT_CATEGORIAS);
  const [configMessage, setConfigMessage] = useState("");
  const [isConfigLoading, setIsConfigLoading] = useState(true);
  const [visibilidad, setVisibilidad] = useState<"publico" | "privado">("publico");
  const [theoryItems, setTheoryItems] = useState<TheoryItem[]>([]);
  const [newTheoryTitle, setNewTheoryTitle] = useState("");
  const [newTheoryType, setNewTheoryType] = useState("Video");
  const [newTheoryDetail, setNewTheoryDetail] = useState("");
  const [levels, setLevels] = useState<string[]>(DEFAULT_LEVELS);
  const [levelDrafts, setLevelDrafts] = useState<string[]>(DEFAULT_LEVELS);
  const [newLevelName, setNewLevelName] = useState("");
  const [levelsError, setLevelsError] = useState("");
  const [levelsConfig, setLevelsConfig] = useState<LevelConfig[]>(() =>
    DEFAULT_LEVELS.map((difficulty) => ({
      level: difficulty,
      quizBlocks: buildDefaultQuizBlocks(difficulty),
      bookResources: [],
      fileResources: []
    })),
  );
  const [activeLevel, setActiveLevel] = useState(DEFAULT_LEVELS[0]);
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [newQuizType, setNewQuizType] = useState<ModuleQuiz["type"]>("evaluacion");
  const [newQuizVisibility, setNewQuizVisibility] = useState<ModuleQuizVisibility>("publico");
  const [newQuizCompetitionRules, setNewQuizCompetitionRules] = useState("");
  const [newQuizCompetitionRulesVisibility, setNewQuizCompetitionRulesVisibility] =
    useState<ModuleQuizVisibility>("publico");
  const [requiredDependencies, setRequiredDependencies] = useState<string[]>([]);
  const [customDependency, setCustomDependency] = useState("");
  const [customDependencies, setCustomDependencies] = useState<string[]>([]);
  const [bookResourceId, setBookResourceId] = useState("");
  const [bookResourceTitle, setBookResourceTitle] = useState("");
  const [bookResourceStatus, setBookResourceStatus] = useState<{
    status: "idle" | "checking" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const [resourceType, setResourceType] = useState<"doc" | "txt" | "bookJson">("doc");
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");
  const [resourceFile, setResourceFile] = useState<File | null>(null);
  const [resourceInputMode, setResourceInputMode] = useState<"upload" | "link">("upload");
  const [resourceError, setResourceError] = useState("");
  const resourceFileInputRef = useRef<HTMLInputElement | null>(null);
  const [exerciseImportStatus, setExerciseImportStatus] = useState<{
    status: "idle" | "valid" | "error";
    message: string;
    errors?: string[];
  }>({ status: "idle", message: "" });
  const [exerciseFileName, setExerciseFileName] = useState("");
  const exerciseFileInputRef = useRef<HTMLInputElement | null>(null);
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
  const autoQuizHelperText = subjectCapabilities.supportsAutoQuizzes
    ? "Disponible para materias con generadores. Configurá semillas y reglas en “Cuestionarios y generación”."
    : subjectCapabilities.autoQuizDisabledReason ??
      "Disponible solo para materias con generadores automáticos.";
  const generatorAvailabilityMessage = subjectCapabilities.supportsGenerators
    ? "Disponible: podés definir semillas, generar bancos y usar el generador MVP."
    : subjectCapabilities.generatorDisabledReason ??
      "Disponible solo para materias con generadores automáticos.";
  const generatorInputsDisabled = !subjectCapabilities.supportsGenerators;
  const newTheoryDetailError = getTheoryDetailError(newTheoryType, newTheoryDetail);
  const moduleSizeScore = useMemo(() => {
    const quizCount = levelsConfig.reduce((total, entry) => total + entry.quizBlocks.length, 0);
    const resourceCount = levelsConfig.reduce(
      (total, entry) => total + entry.bookResources.length + entry.fileResources.length,
      0,
    );
    const theoryTextLength = theoryItems.reduce(
      (total, item) => total + item.title.length + item.detail.length,
      0,
    );
    const dependencyCount = requiredDependencies.length + customDependencies.length;
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
    requiredDependencies,
    customDependencies,
  ]);
  const showLargeModuleHint = moduleSizeScore >= MODULE_SIZE_THRESHOLD;
  const currentLevelConfig = useMemo<LevelConfig>(
    () =>
      levelsConfig.find((entry) => entry.level === activeLevel) ??
      levelsConfig[0] ?? {
        level: activeLevel,
        quizBlocks: [],
        bookResources: [],
        fileResources: []
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
      stackedQuizzes: true,
      quizGenerator: true,
      scoring: true,
      specialResources: subjectCapabilities.supportsSpecialResources,
      rewards: subjectCapabilities.supportsGenerators,
      visibility: true,
      actions: true,
    }),
    [subjectCapabilities.supportsGenerators, subjectCapabilities.supportsSpecialResources],
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
    if (currentLevelConfig.quizBlocks.length === 0) {
      missing.push("Agrega al menos un cuestionario para el nivel activo.");
    }
    const emptyTitles = currentLevelConfig.quizBlocks.filter((quiz) => !quiz.title.trim());
    if (emptyTitles.length) {
      missing.push("Asigna un título a todos los cuestionarios.");
    }
    const competitionWithoutRules = currentLevelConfig.quizBlocks.some(
      (quiz) => quiz.type === "competencia" && !quiz.competitionRules?.trim(),
    );
    if (competitionWithoutRules) {
      missing.push("Completa las reglas de los cuestionarios tipo competencia.");
    }
    return missing;
  }, [currentLevelConfig.quizBlocks]);

  const getSectionMissing = (sectionId: string) => {
    switch (sectionId) {
      case "info":
        return generalMissing;
      case "theory":
        return theoryMissing;
      case "stackedQuizzes":
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
      { id: "stackedQuizzes", label: "Cuestionarios apilados" },
      { id: "quizGenerator", label: "Cuestionarios y generación" },
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
        quizBlocks: buildDefaultQuizBlocks(trimmed),
        bookResources: [],
        fileResources: []
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
      const dependencies = [...requiredDependencies, ...customDependencies].filter(Boolean);
      const levelsPayload = levelsConfig.map(({ level: levelName, quizBlocks, bookResources, fileResources }) => ({
        level: levelName,
        quizzes: quizBlocks,
        resources: [...bookResources, ...fileResources]
      }));
      const fallbackLevel = levelsPayload.find((entry) => entry.level === level) ?? levelsPayload[0];
      const payload = {
        id: makeModuleId(title),
        title,
        description,
        subject,
        category,
        level,
        durationMinutes,
        visibility: visibilidad,
        dependencies,
        generatorRef: null,
        resources: fallbackLevel?.resources ?? [],
        levels: levelsPayload,
        levelOrder: levels,
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

  const handleAddQuiz = () => {
    if (!newQuizTitle.trim()) return;
    const nextQuiz: ModuleQuiz = {
      id: `quiz-${Date.now()}`,
      title: newQuizTitle.trim(),
      type: newQuizType,
      visibility: newQuizVisibility,
      ...(newQuizType === "competencia"
        ? {
            competitionRules: newQuizCompetitionRules.trim(),
            competitionRulesVisibility: newQuizCompetitionRulesVisibility,
          }
        : {}),
    };
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      quizBlocks: [...current.quizBlocks, nextQuiz]
    }));
    setNewQuizTitle("");
    setNewQuizType("evaluacion");
    setNewQuizVisibility("publico");
    setNewQuizCompetitionRules("");
    setNewQuizCompetitionRulesVisibility("publico");
  };

  const handleRemoveQuiz = (id: string) => {
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      quizBlocks: current.quizBlocks.filter((quiz) => quiz.id !== id)
    }));
  };

  const handleUpdateQuiz = (id: string, field: keyof ModuleQuiz, value: ModuleQuiz[keyof ModuleQuiz]) => {
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      quizBlocks: current.quizBlocks.map((quiz) => (quiz.id === id ? { ...quiz, [field]: value } : quiz))
    }));
  };

  const handleToggleDependency = (moduleId: string) => {
    setRequiredDependencies((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId],
    );
  };

  const handleAddCustomDependency = () => {
    const trimmed = customDependency.trim();
    if (!trimmed || customDependencies.includes(trimmed)) return;
    setCustomDependencies((prev) => [...prev, trimmed]);
    setCustomDependency("");
  };

  const handleRemoveCustomDependency = (dependency: string) => {
    setCustomDependencies((prev) => prev.filter((item) => item !== dependency));
  };

  const handleAddBookResource = async () => {
    const trimmed = bookResourceId.trim();
    if (!trimmed) {
      setBookResourceStatus({ status: "error", message: "Ingresa un ID de libro válido." });
      return;
    }
    setBookResourceStatus({ status: "checking", message: "Validando libro en biblioteca..." });
    try {
      await apiGet(`/api/libros/${encodeURIComponent(trimmed)}`);
    } catch (error) {
      const message =
        error instanceof ApiError && error.status === 404
          ? "No se encontró ningún libro con ese ID."
          : "No se pudo verificar el libro. Intenta nuevamente.";
      setBookResourceStatus({ status: "error", message });
      return;
    }
    const next: ModuleResource = {
      type: "book",
      id: trimmed,
      title: bookResourceTitle.trim() || undefined
    };
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      bookResources: [...current.bookResources, next]
    }));
    setBookResourceId("");
    setBookResourceTitle("");
    setBookResourceStatus({ status: "idle", message: "" });
  };

  const handleRemoveBookResource = (id: string) => {
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      bookResources: current.bookResources.filter((resource) => resource.type !== "book" || resource.id !== id)
    }));
  };

  const resetResourceForm = () => {
    setResourceTitle("");
    setResourceUrl("");
    setResourceFile(null);
    setResourceError("");
    if (resourceFileInputRef.current) {
      resourceFileInputRef.current.value = "";
    }
  };

  const handleAddFileResource = async () => {
    setResourceError("");
    const trimmedTitle = resourceTitle.trim();
    const titleFallback =
      resourceInputMode === "link"
        ? getUrlFileName(resourceUrl)
        : resourceFile?.name ?? "Archivo";
    const title = trimmedTitle || titleFallback;

    if (resourceInputMode === "link") {
      if (!resourceUrl.trim()) {
        setResourceError("Agrega una URL para continuar.");
        return;
      }
      if (!isValidUrl(resourceUrl)) {
        setResourceError("La URL debe ser válida (http:// o https://).");
        return;
      }
      if (!isExtensionAllowed(resourceType, resourceUrl)) {
        setResourceError(
          `El enlace debe finalizar en ${getAllowedExtensionsLabel(resourceType)}.`,
        );
        return;
      }
      if (resourceType === "doc") {
        updateLevelConfig(activeLevel, (current) => ({
          ...current,
          fileResources: [
            ...current.fileResources,
            { type: "doc", title, url: resourceUrl.trim(), fileName: getUrlFileName(resourceUrl) }
          ]
        }));
      }
      if (resourceType === "txt") {
        updateLevelConfig(activeLevel, (current) => ({
          ...current,
          fileResources: [
            ...current.fileResources,
            { type: "txt", title, url: resourceUrl.trim(), fileName: getUrlFileName(resourceUrl) }
          ]
        }));
      }
      if (resourceType === "bookJson") {
        updateLevelConfig(activeLevel, (current) => ({
          ...current,
          fileResources: [
            ...current.fileResources,
            { type: "bookJson", title, url: resourceUrl.trim(), fileName: getUrlFileName(resourceUrl) }
          ]
        }));
      }
      resetResourceForm();
      return;
    }

    if (!resourceFile) {
      setResourceError("Selecciona un archivo para continuar.");
      return;
    }
    if (!isExtensionAllowed(resourceType, resourceFile.name)) {
      setResourceError(
        `El archivo debe ser ${getAllowedExtensionsLabel(resourceType)}.`,
      );
      return;
    }

    try {
      if (resourceType === "doc") {
        const dataUrl = await readFileAsDataUrl(resourceFile);
        updateLevelConfig(activeLevel, (current) => ({
          ...current,
          fileResources: [
            ...current.fileResources,
            { type: "doc", title, url: dataUrl, fileName: resourceFile.name }
          ]
        }));
      }
      if (resourceType === "txt") {
        const content = await readFileAsText(resourceFile);
        updateLevelConfig(activeLevel, (current) => ({
          ...current,
          fileResources: [
            ...current.fileResources,
            { type: "txt", title, content, fileName: resourceFile.name }
          ]
        }));
      }
      if (resourceType === "bookJson") {
        const content = await readFileAsText(resourceFile);
        try {
          JSON.parse(content);
        } catch (error) {
          setResourceError("El JSON del libro no es válido.");
          return;
        }
        updateLevelConfig(activeLevel, (current) => ({
          ...current,
          fileResources: [
            ...current.fileResources,
            { type: "bookJson", title, content, fileName: resourceFile.name }
          ]
        }));
      }
      resetResourceForm();
    } catch (error) {
      setResourceError(error instanceof Error ? error.message : "No se pudo leer el archivo.");
    }
  };

  const handleRemoveFileResource = (index: number) => {
    updateLevelConfig(activeLevel, (current) => ({
      ...current,
      fileResources: current.fileResources.filter((_, currentIndex) => currentIndex !== index)
    }));
  };

  const handleExerciseFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setExerciseImportStatus({ status: "idle", message: "" });
    setExerciseFileName("");
    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw) as unknown;
      const validation = validateExercisesJson(parsed);
      if (!validation.isValid) {
        setExerciseImportStatus({
          status: "error",
          message: "El archivo no coincide con el esquema de planilla.",
          errors: validation.errors,
        });
        if (exerciseFileInputRef.current) {
          exerciseFileInputRef.current.value = "";
        }
        return;
      }
      setExerciseFileName(file.name);
      setExerciseImportStatus({
        status: "valid",
        message: "Planilla válida. Lista para importar preguntas.",
      });
    } catch (error) {
      setExerciseImportStatus({
        status: "error",
        message: "No se pudo leer el archivo JSON.",
        errors: [error instanceof Error ? error.message : "JSON inválido."],
      });
      if (exerciseFileInputRef.current) {
        exerciseFileInputRef.current.value = "";
      }
    }
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
                  <div className="space-y-4">

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
            </div>
            {showLargeModuleHint && (
              <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                <p className="font-medium">Este módulo ya es extenso.</p>
                <p className="mt-1">
                  Para gestionar cuestionarios largos o con muchas variantes, te sugerimos usar el editor dedicado.{" "}
                  <Link className="font-semibold text-amber-900 underline" to="/profesor/editor-cuestionarios">
                    Abrir editor de cuestionarios
                  </Link>
                  .
                </p>
              </div>
            )}

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

            <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
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
                <button type="button" className="rounded-md border px-4 py-2 text-sm" onClick={handleAddLevel}>
                  Agregar nivel
                </button>
              </div>
              {levelsError && <p className="text-xs text-red-600">{levelsError}</p>}
            </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Edad/Curso recomendado</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ej: 5° grado primaria"
                />
              </div>
                    </div>
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
                      Define los módulos previos que los alumnos deben completar antes de acceder a este contenido. Esto
                      permite que el profesor determine, por ejemplo, que primero deben saber contar antes de sumar.
                    </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Módulos obligatorios</h3>
                <p className="text-xs text-gray-500">
                  Selecciona los módulos que se deben aprobar para desbloquear este nuevo módulo.
                </p>
                <div className="space-y-2">
                  {MVP_MODULES.map((module) => (
                    <label key={module.id} className="flex items-start gap-2 text-sm">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4"
                        checked={requiredDependencies.includes(module.id)}
                        onChange={() => handleToggleDependency(module.id)}
                      />
                      <span>
                        <span className="font-medium">{module.title}</span>
                        <span className="block text-xs text-gray-500">
                          {module.category} · {module.level}
                        </span>
                      </span>
                    </label>
                  ))}
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
                      <li key={dependency} className="flex items-center justify-between text-sm">
                        <span>{dependency}</span>
                        <button
                          type="button"
                          className="text-xs text-red-500 hover:underline"
                          onClick={() => handleRemoveCustomDependency(dependency)}
                        >
                          Quitar
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-500">Todavía no agregaste requisitos personalizados.</p>
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
                      Sigue este flujo para construir la teoría del módulo: primero definí la estructura, luego agregá
                      libros y archivos de apoyo, y cerrá con textos o enlaces.
                    </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-600">
                  1
                </span>
                Estructura del módulo
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
                  Los recursos y libros se guardan según el nivel seleccionado.
                </p>
              </div>

              <div className="grid gap-3">
                {theoryItems.length === 0 ? (
                  <div className="border rounded-lg p-4 text-sm text-gray-600 bg-gray-50">
                    Todavía no hay partes de teoría agregadas. Usa los botones de abajo para sumar videos, texto o
                    enlaces.
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button type="button" className="rounded-md border px-4 py-2 text-sm">
                  + Agregar recurso interactivo
                </button>
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-600">
                  2
                </span>
                Libros del editor
              </div>
              <p className="text-xs text-gray-600">
                Guarda un libro en el editor y pega su ID aquí para asociarlo al módulo.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  className="rounded-md border px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"
                  to="/editor"
                >
                  Añadir libro desde editor
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={bookResourceId}
                  onChange={(event) => {
                    setBookResourceId(event.target.value);
                    if (bookResourceStatus.status !== "idle") {
                      setBookResourceStatus({ status: "idle", message: "" });
                    }
                  }}
                  placeholder="ID del libro (ej: book-matematica-01)"
                />
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={bookResourceTitle}
                  onChange={(event) => setBookResourceTitle(event.target.value)}
                  placeholder="Título opcional"
                />
                <button
                  type="button"
                  className="rounded-md border px-4 py-2 text-sm"
                  onClick={handleAddBookResource}
                  disabled={bookResourceStatus.status === "checking"}
                >
                  {bookResourceStatus.status === "checking" ? "Validando..." : "Agregar libro"}
                </button>
              </div>
              {bookResourceStatus.status === "error" && (
                <p className="text-xs text-red-600">{bookResourceStatus.message}</p>
              )}
              {currentLevelConfig.bookResources.length ? (
                <ul className="space-y-2 text-sm">
                  {currentLevelConfig.bookResources.map((resource) =>
                    resource.type === "book" ? (
                      <li key={resource.id} className="flex items-center justify-between">
                        <span>{resource.title ?? resource.id}</span>
                        <button
                          type="button"
                          className="text-xs text-red-500 hover:underline"
                          onClick={() => handleRemoveBookResource(resource.id)}
                        >
                          Quitar
                        </button>
                      </li>
                    ) : null
                  )}
                </ul>
              ) : (
                <p className="text-xs text-gray-500">Todavía no agregaste libros al módulo.</p>
              )}
            </div>

            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-600">
                  3
                </span>
                Archivos de apoyo
              </div>
              <h3 className="text-sm font-semibold">Archivos de apoyo (DOC, TXT, Book JSON)</h3>
              <p className="text-xs text-gray-600">
                Solo se permiten archivos .doc/.docx, .txt y .json para libros.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700">Tipo de recurso</label>
                  <select
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                    value={resourceType}
                    onChange={(event) => {
                      setResourceType(event.target.value as "doc" | "txt" | "bookJson");
                      setResourceError("");
                      setResourceFile(null);
                      if (resourceFileInputRef.current) {
                        resourceFileInputRef.current.value = "";
                      }
                    }}
                  >
                    <option value="doc">Documento (.doc/.docx)</option>
                    <option value="txt">Texto (.txt)</option>
                    <option value="bookJson">Libro JSON (.json)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700">Título</label>
                  <input
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={resourceTitle}
                    onChange={(event) => setResourceTitle(event.target.value)}
                    placeholder="Ej: Apunte de lectura"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  type="button"
                  className={`rounded-md border px-3 py-1 ${
                    resourceInputMode === "upload" ? "bg-slate-100 text-slate-700" : "text-slate-500"
                  }`}
                  onClick={() => {
                    setResourceInputMode("upload");
                    setResourceError("");
                    setResourceUrl("");
                  }}
                >
                  Subir archivo
                </button>
                <button
                  type="button"
                  className={`rounded-md border px-3 py-1 ${
                    resourceInputMode === "link" ? "bg-slate-100 text-slate-700" : "text-slate-500"
                  }`}
                  onClick={() => {
                    setResourceInputMode("link");
                    setResourceError("");
                    setResourceFile(null);
                    if (resourceFileInputRef.current) {
                      resourceFileInputRef.current.value = "";
                    }
                  }}
                >
                  Pegar enlace
                </button>
              </div>

              {resourceInputMode === "upload" ? (
                <div className="space-y-1">
                  <input
                    ref={resourceFileInputRef}
                    type="file"
                    accept={ALLOWED_RESOURCE_EXTENSIONS[resourceType].join(",")}
                    className="w-full text-sm"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null;
                      setResourceFile(file);
                      setResourceError("");
                    }}
                  />
                  <p className="text-[11px] text-gray-500">
                    Formatos permitidos: {getAllowedExtensionsLabel(resourceType)}.
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={resourceUrl}
                    onChange={(event) => {
                      setResourceUrl(event.target.value);
                      setResourceError("");
                    }}
                    placeholder={`URL del archivo (${getAllowedExtensionsLabel(resourceType)})`}
                  />
                  <p className="text-[11px] text-gray-500">
                    Solo se aceptan enlaces directos con extensión {getAllowedExtensionsLabel(resourceType)}.
                  </p>
                </div>
              )}

              {resourceError && <p className="text-xs text-red-600">{resourceError}</p>}

              <button type="button" className="rounded-md border px-4 py-2 text-sm" onClick={handleAddFileResource}>
                Agregar recurso
              </button>

              {currentLevelConfig.fileResources.length ? (
                <ul className="space-y-2 text-sm">
                  {currentLevelConfig.fileResources.map((resource, index) => (
                    <li key={`${resource.type}-${index}`} className="flex items-center justify-between">
                      <span>
                        {resource.title} ·{" "}
                        {resource.type === "doc"
                          ? "DOC"
                          : resource.type === "txt"
                            ? "TXT"
                            : "Book JSON"}
                      </span>
                      <button
                        type="button"
                        className="text-xs text-red-500 hover:underline"
                        onClick={() => handleRemoveFileResource(index)}
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-gray-500">Todavía no agregaste archivos de apoyo.</p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-600">
                    4
                  </span>
                  Textos
                </div>
                <h3 className="text-sm font-semibold">Textos y enlaces finales</h3>
                <div className="space-y-2">
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="URL del video / enlace"
                  />
                  <textarea
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Texto o guion de la teoría"
                  />
                </div>
              </div>
                    </div>
                  </div>
                )}
              </section>

              {/* 4. Cuestionarios apilados */}
              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("stackedQuizzes")}
                    aria-expanded={openSection === "stackedQuizzes"}
                  >
                    Cuestionarios apilados
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "stackedQuizzes" ? "Ocultar" : "Editar"}
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
                {visitedSections.stackedQuizzes && quizMissing.length > 0 && (
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                    <p className="font-semibold">Qué falta en esta sección</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      {quizMissing.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {openSection === "stackedQuizzes" && (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Los cuestionarios son páginas igual que los videos o textos, pero con opciones extra (tipo,
                      visibilidad, consignas). Las consignas, importaciones y generadores se configuran en
                      “Cuestionarios y generación”.
                    </p>
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
                Los cuestionarios se guardan por nivel.
              </p>
            </div>

            <div className="grid gap-3">
              {currentLevelConfig.quizBlocks.map((quiz) => (
                <div key={quiz.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{quiz.title}</p>
                      <p className="text-xs text-gray-500">
                        Tipo: {QUIZ_TYPE_LABELS[quiz.type]} · Visibilidad:{" "}
                        {quiz.visibility === "publico" ? "Público" : "Escuela específica"}
                        {quiz.type === "competencia" && (
                          <>
                            {" "}· Reglas: {quiz.competitionRules?.trim() ? "Definidas" : "Sin definir"} ·
                            {" "}Visibilidad reglas:{" "}
                            {quiz.competitionRulesVisibility === "escuela" ? "Escuela específica" : "Público"}
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="text-xs text-red-500 hover:underline"
                        onClick={() => handleRemoveQuiz(quiz.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Visibilidad del cuestionario</label>
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        value={quiz.visibility}
                        onChange={(event) =>
                          handleUpdateQuiz(quiz.id, "visibility", event.target.value as ModuleQuizVisibility)
                        }
                      >
                        <option value="publico">Público</option>
                        <option value="escuela">Solo una escuela</option>
                      </select>
                    </div>
                    {quiz.visibility === "escuela" && (
                      <div>
                        <label className="block text-xs font-medium text-gray-700">Escuela asignada</label>
                        <input
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                          placeholder="Buscar institución"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Modo de creación</label>
                      {subjectCapabilities.supportsAutoQuizzes ? (
                        <>
                          <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
                            <option>Generar automáticamente</option>
                            <option>Escribir consignas manualmente</option>
                          </select>
                          <p className="mt-1 text-[11px] text-gray-500">{autoQuizHelperText}</p>
                        </>
                      ) : (
                        <p className="mt-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
                          {autoQuizHelperText}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Tipo de cuestionario</label>
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        value={quiz.type}
                        onChange={(event) => {
                          const nextType = event.target.value as ModuleQuiz["type"];
                          handleUpdateQuiz(quiz.id, "type", nextType);
                          if (nextType === "competencia" && !quiz.competitionRulesVisibility) {
                            handleUpdateQuiz(quiz.id, "competitionRulesVisibility", "publico");
                          }
                        }}
                      >
                        <option value="practica">Práctica</option>
                        <option value="evaluacion">Evaluación</option>
                        <option value="competencia">Competencia</option>
                      </select>
                    </div>
                  </div>
                  {quiz.type === "competencia" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700">Reglas de competencia</label>
                        <textarea
                          rows={3}
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                          value={quiz.competitionRules ?? ""}
                          onChange={(event) =>
                            handleUpdateQuiz(quiz.id, "competitionRules", event.target.value)
                          }
                          placeholder="Describe criterios, puntajes o dinámicas para la competencia."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700">Visibilidad de reglas</label>
                        <select
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                          value={quiz.competitionRulesVisibility ?? "publico"}
                          onChange={(event) =>
                            handleUpdateQuiz(
                              quiz.id,
                              "competitionRulesVisibility",
                              event.target.value as ModuleQuizVisibility,
                            )
                          }
                        >
                          <option value="publico">Público</option>
                          <option value="escuela">Solo una escuela</option>
                        </select>
                        <p className="mt-1 text-[11px] text-gray-500">
                          Define quién puede leer las reglas del desafío.
                        </p>
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Título del cuestionario</label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      value={quiz.title}
                      onChange={(event) => handleUpdateQuiz(quiz.id, "title", event.target.value)}
                      placeholder="Título del cuestionario"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="w-full border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Agregar cuestionario</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={newQuizTitle}
                    onChange={(event) => setNewQuizTitle(event.target.value)}
                    placeholder="Título del cuestionario"
                  />
                  <select
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                    value={newQuizType}
                    onChange={(event) => {
                      const nextType = event.target.value as ModuleQuiz["type"];
                      setNewQuizType(nextType);
                      if (nextType !== "competencia") {
                        setNewQuizCompetitionRules("");
                        setNewQuizCompetitionRulesVisibility("publico");
                      }
                    }}
                  >
                    <option value="evaluacion">Evaluación</option>
                    <option value="practica">Práctica</option>
                    <option value="competencia">Competencia</option>
                  </select>
                  <select
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                    value={newQuizVisibility}
                    onChange={(event) => setNewQuizVisibility(event.target.value as ModuleQuizVisibility)}
                  >
                    <option value="publico">Público</option>
                    <option value="escuela">Solo una escuela</option>
                  </select>
                </div>
                {newQuizType === "competencia" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Reglas de competencia</label>
                      <textarea
                        rows={3}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                        value={newQuizCompetitionRules}
                        onChange={(event) => setNewQuizCompetitionRules(event.target.value)}
                        placeholder="Describe criterios, puntajes o dinámicas para la competencia."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Visibilidad de reglas</label>
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                        value={newQuizCompetitionRulesVisibility}
                        onChange={(event) =>
                          setNewQuizCompetitionRulesVisibility(event.target.value as ModuleQuizVisibility)
                        }
                      >
                        <option value="publico">Público</option>
                        <option value="escuela">Solo una escuela</option>
                      </select>
                      <p className="mt-1 text-[11px] text-gray-500">
                        Define quién puede leer las reglas del desafío.
                      </p>
                    </div>
                  </div>
                )}
                <button type="button" className="rounded-md border px-4 py-2 text-sm" onClick={handleAddQuiz}>
                  + Agregar cuestionario
                </button>
              </div>
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                Importar cuestionario existente
              </button>
                    </div>
                  </div>
                )}
              </section>

              {/* 5. Cuestionarios y generación */}
              <section className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("quizGenerator")}
                    aria-expanded={openSection === "quizGenerator"}
                  >
                    Cuestionarios y generación
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "quizGenerator" ? "Ocultar" : "Editar"}
                    </span>
                  </button>
                  <span className="text-xs font-semibold text-gray-500">Opcional</span>
                </div>
                {openSection === "quizGenerator" && (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600">
                      Define cómo construir las preguntas del módulo. Podés escribir consignas manuales, importar un
                      JSON con un banco de preguntas, y si la materia lo permite, complementar con semillas y
                      generadores automáticos.
                    </p>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-medium text-slate-700">Lógica recomendada</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs">
                <li>Usá consignas manuales o importación JSON para definir el contenido base.</li>
                <li>
                  Si la materia tiene generadores, podés crear variantes automáticas con semillas y guardarlas como
                  banco adicional.
                </li>
                <li>Si no hay generadores disponibles, todo el flujo se mantiene manual o por importación.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Importar JSON</h3>
                <input
                  type="file"
                  accept=".json"
                  className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                  ref={exerciseFileInputRef}
                  onChange={handleExerciseFileChange}
                />
                <p className="text-xs text-gray-500">Incluye en cada pregunta: enunciado, respuestas y solución.</p>
                {exerciseImportStatus.status === "valid" && (
                  <p className="text-xs text-emerald-600">
                    {exerciseImportStatus.message} {exerciseFileName ? `(${exerciseFileName})` : ""}
                  </p>
                )}
                {exerciseImportStatus.status === "error" && (
                  <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700 space-y-2">
                    <p className="font-semibold">{exerciseImportStatus.message}</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {exerciseImportStatus.errors?.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <details className="rounded-md border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600">
                  <summary className="cursor-pointer font-medium">Ver ejemplo de planilla válida</summary>
                  <pre className="mt-2 whitespace-pre-wrap font-mono">{exercisesJsonExample}</pre>
                </details>
              </div>

              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold">Descargar JSON base</h3>
                <p className="text-xs text-gray-600">
                  Genera un archivo base con estructura vacía para completar offline.
                </p>
                <button type="button" className="rounded-md border px-3 py-2 text-sm">
                  Descargar plantilla JSON
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Nueva pregunta (opción múltiple)</h3>
                <input
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Enunciado"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta A"
                  />
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta B"
                  />
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta C"
                  />
                  <input
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Respuesta D"
                  />
                </div>
                <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
                  <option>Respuesta correcta</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <textarea
                    rows={2}
                    className="rounded-md border border-gray-300 px-3 py-2 text-xs"
                    placeholder="Explicación (por qué es correcta)"
                  />
                  <textarea
                    rows={2}
                    className="rounded-md border border-gray-300 px-3 py-2 text-xs"
                    placeholder="Ayuda / pista (sin revelar la respuesta)"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold">Previsualización del alumno</h3>
                <div className="rounded-md border border-gray-200 p-3 bg-gray-50 space-y-2">
                  <p className="text-sm font-medium">¿Cuál es la fórmula de la velocidad media?</p>
                  <ul className="text-sm space-y-1">
                    <li>A) v = d / t</li>
                    <li>B) v = t / d</li>
                    <li>C) v = d * t</li>
                    <li>D) v = t - d</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] rounded-full bg-green-100 px-2 py-1 text-green-700">
                      Resultado esperado
                    </span>
                    <span className="text-[11px] rounded-full bg-yellow-100 px-2 py-1 text-yellow-700">
                      Ayuda disponible
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <p>
                      <span className="font-semibold">Explicación:</span> La velocidad media se calcula como
                      distancia sobre tiempo.
                    </p>
                    <p>
                      <span className="font-semibold">Ayuda:</span> Recordá que las magnitudes deben estar en el
                      mismo sistema de unidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar pregunta opción múltiple
              </button>
              <button type="button" className="rounded-md border px-4 py-2 text-sm">
                + Agregar pregunta respuesta abierta
              </button>
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
              <p className="font-semibold text-slate-700">Disponibilidad de generación automática</p>
              <p>{generatorAvailabilityMessage}</p>
            </div>

            {subjectCapabilities.supportsGenerators ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 space-y-3">
                    <h3 className="text-sm font-semibold">Semilla y cantidad</h3>
                    <p className="text-xs text-gray-600">
                      Usa la semilla definida en <span className="font-mono">generador/basic/seed.ts</span> o ingresa
                      una personalizada para reproducir exámenes.
                    </p>
                    <input
                      disabled={generatorInputsDisabled}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Semilla (opcional)"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        disabled={generatorInputsDisabled}
                        type="number"
                        min={1}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder="Preguntas a responder"
                      />
                      <input
                        disabled={generatorInputsDisabled}
                        type="number"
                        min={1}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                        placeholder="Preguntas generadas"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Ejemplo: el alumno responde 100 preguntas y se generan 200 para lograr aleatoriedad.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 space-y-3">
                    <h3 className="text-sm font-semibold">Generar ahora y guardar</h3>
                    <textarea
                      disabled={generatorInputsDisabled}
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Notas para gerencia / revisión del examen generado..."
                    />
                    <button
                      disabled={generatorInputsDisabled}
                      type="button"
                      className="rounded-md border px-3 py-2 text-sm disabled:opacity-60"
                    >
                      Generar preguntas y guardar resultados
                    </button>
                    <p className="text-xs text-gray-500">
                      Recomendación: generar varias veces para aumentar la aleatoriedad.
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
                  <h3 className="text-sm font-semibold">Generador MVP (opcional)</h3>
                  <p className="text-xs text-gray-600">
                    Generador rápido para crear actividades basadas en categorías MVP.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Categoría MVP</label>
                      <select
                        disabled={generatorInputsDisabled}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                      >
                        {MVP_GENERATOR_CATEGORIES.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nivel sugerido</label>
                      <select
                        disabled={generatorInputsDisabled}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                      >
                        <option>Básico</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                    </div>
                  </div>

                  <textarea
                    disabled={generatorInputsDisabled}
                    placeholder="Descripción breve del generador o configuración base..."
                    rows={3}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <input
                      disabled={generatorInputsDisabled}
                      placeholder="Número de muestra / versión"
                      className="rounded-md border border-gray-300 px-3 py-2"
                    />
                    <button
                      disabled={generatorInputsDisabled}
                      type="button"
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm text-left disabled:opacity-60"
                    >
                      Configurar generador
                    </button>
                    <button
                      disabled={generatorInputsDisabled}
                      type="button"
                      className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-2 text-sm disabled:opacity-60"
                    >
                      Crear preguntas desde generador
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                La materia seleccionada no permite generación automática. Podés continuar con consignas manuales o
                importaciones.
              </div>
            )}
                  </div>
                )}
              </section>

              {/* 6. Sistema de puntuación y aprobación */}
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
                <label className="block text-sm font-medium text-gray-700">Sistema de calificación</label>
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
                {scoringSystemNote && <p className="mt-2 text-xs text-gray-500">{scoringSystemNote}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cantidad de preguntas por punto</label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Ej: 3 preguntas = 1 punto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Aprobación mínima</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Ej: 6 / 60 / Aprobado"
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
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Regla de promoción</label>
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="Ej: 70% o más"
                />
              </div>
                  </div>
                    </div>
                )}
              </section>

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
                          <div className="flex flex-wrap gap-2">
                            <button type="button" className="rounded-md border px-3 py-2 text-sm">
                              Añadir libro desde editor
                            </button>
                            <button type="button" className="rounded-md border px-3 py-2 text-sm">
                              Subir PDF / DOC
                            </button>
                          </div>
                          <p className="text-xs text-gray-500">
                            Puedes incluir un cuestionario como módulo especial para lengua.
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
              {subjectCapabilities.supportsGenerators && (
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
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">Experiencia máxima</label>
                          <input
                            type="number"
                            min={0}
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Ej: 150"
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
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* 9. Visibilidad y permisos */}
              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("visibility")}
                    aria-expanded={openSection === "visibility"}
                  >
                    Visibilidad y permisos
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "visibility" ? "Ocultar" : "Editar"}
                    </span>
                  </button>
                  <span className="text-xs font-semibold text-gray-500">Obligatorio</span>
                </div>
                {openSection === "visibility" && (
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
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">
                      Profesores / administradores invitados
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Buscar por nombre, correo o alias"
                    />
                    <p className="mt-1 text-[11px] text-gray-500">
                      Estos usuarios podrán usar el módulo en sus aulas virtuales.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700">Restricción de alumnos</label>
                    <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white">
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
                )}
              </section>

              {/* 10. Acciones finales */}
              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => handleToggleSection("actions")}
                    aria-expanded={openSection === "actions"}
                  >
                    Acciones finales
                    <span className="text-xs font-medium text-gray-500">
                      {openSection === "actions" ? "Ocultar" : "Editar"}
                    </span>
                  </button>
                  <span className="text-xs font-semibold text-gray-500">Paso final</span>
                </div>
                {openSection === "actions" && (
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Nota: podrías mostrar este botón solo en modo edición */}
                    <button
                      type="button"
                      className="text-sm text-red-600 hover:text-red-700 border border-red-200 hover:border-red-400 rounded-md px-4 py-2"
                    >
                      Marcar módulo como eliminado
                    </button>

                    <div className="flex flex-wrap justify-center gap-3">
                      <button type="button" className="rounded-md border px-4 py-2 text-sm">
                        Guardar como borrador
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 text-sm font-medium disabled:opacity-70"
                        disabled={saveStatus === "saving"}
                      >
                        {saveStatus === "saving" ? "Guardando..." : "Crear módulo"}
                      </button>
                    </div>
                  </div>
                )}
              </section>
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
