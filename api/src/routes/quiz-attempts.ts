import express, { Router } from "express";
import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import {
  QuizAttemptAnswerSchema,
  QuizAttemptCreateSchema,
  QuizAttemptEventsPatchSchema,
  QuizAttemptGradeSchema,
  QuizAttemptListQuerySchema,
  QuizAttemptSubmitSchema,
  QuizAttemptSummaryQuerySchema,
  QuizVersionSchema
} from "../schema/quiz-attempt";
import { isStaffRole, canManageClassroom } from "../lib/authorization";
import {
  isCanaryAnswer,
  sanitizeQuestionsForStudent
} from "../lib/sanitize-questions";
import {
  aplicarPolitica,
  calcularDeadline,
  calcularNotas,
  contarIntentosPrevios,
  parseEvaluacionConfig,
  parseIntentoPolicy,
  validarLimiteIntentos,
  validarTiempoLimite,
  type IntentoPolicy,
  type PoliticaNota
} from "../lib/quiz-intentos";
import {
  mergeAttemptEvents,
  summarizeAttemptEvents
} from "../lib/attemptEvents";
import { computeGradeRange } from "../lib/gradeRange";
import {
  gradeFromConfig,
  getScoringSystem,
  type ModuleQuizQuestion,
  type ScoringConfig
} from "@vb/vblang";
import {
  getCompiledPlantilla,
  materializeVblangPool,
  questionHashPrefix
} from "../lib/vblang-materialize";
import { parseComposition, selectPoolIndices } from "../lib/quiz-composition";
import { excluirEspejosDeIds } from "../lib/espejo-filtro";

type ModuleQuiz = {
  id?: string;
  title?: string;
  type?: string;
  mode?: string;
  visibility?: string;
  schoolId?: string;
  schoolName?: string;
  competitionRules?: string;
  competitionRulesVisibility?: string;
  questions?: Array<{
    id: string;
    answerKey?: string | string[];
    explanation?: string;
    toleranciaRelativa?: number;
    /**
     * F2-04: tolerancia absoluta. Si está presente, el criterio combinado
     * es `|r-e| ≤ max(|e|·tol_rel, tol_abs)`. Default ausente = 0.
     */
    toleranciaAbsoluta?: number;
    /** Peso de la pregunta en el puntaje (default 1). Composición a nivel quiz. */
    points?: number;
    /** WO07 — abierta: modo de corrección (`ninguna` no puntúa, `manual` la corrige el profe). */
    correccion?: "ninguna" | "manual";
    /** WO07 — abierta+manual: el ítem queda pendiente de corrección al enviar. */
    manualGrading?: boolean;
    /** Enunciado (para mostrar en la pantalla de corrección del profe). */
    prompt?: string;
  }>;
  count?: number;
  seedPolicy?: string;
  fixedSeed?: string | number;
  generatorId?: string;
  generatorVersion?: number | string;
  instructions?: string;
  displayCount?: number;
  /** Composición a nivel quiz (pool/selección/variantes/peso). No DSL. */
  composition?: {
    tomar?: "todas" | number;
    seleccion?: "fijo" | "azar" | "elige_alumno";
    variantes?: string[];
    pesoPorDefecto?: number;
  };
};

type ModuleWithQuizzes = {
  id?: string;
  title?: string;
  quizzes?: ModuleQuiz[];
  levels?: Array<{ quizzes?: ModuleQuiz[] }>;
  // WO14 — config de escala del módulo (cuando esté persistida). Hoy no es columna
  // del modelo Modulo; se lee defensivamente y, si falta, se reconcilia con el umbral.
  scoringConfig?: ScoringConfig;
};

// FIX-TEST4-ALU-04 — antes los attempts `in_progress` con más de 6
// horas seguían apareciendo en las listas del profesor y se
// contaban como "1 entrega" con score 0. La causa típica es que el
// alumno cerró la pestaña sin responder. Este helper marca esos
// attempts viejos como `aborted` para que el back los filtre de
// los promedios y el front los muestre con un label claro.
// Se ejecuta perezosamente antes del GET (no hace falta un cron
// separado: el primer GET del día limpia lo viejo).
const IN_PROGRESS_TIMEOUT_MS = 6 * 60 * 60 * 1000; // 6 horas
const staleInProgressSweep = async (): Promise<number> => {
  const cutoff = new Date(Date.now() - IN_PROGRESS_TIMEOUT_MS).toISOString();
  const result = await prisma.quizAttempt.updateMany({
    where: {
      status: "in_progress",
      startedAt: { lt: cutoff },
    },
    data: { status: "aborted" },
  });
  return result.count;
};

type QuizMetadataRecord = {
  id?: string;
  moduleId?: string | null;
  title?: string;
  type?: string;
  mode?: string;
  visibility?: string;
  schoolId?: string;
  schoolName?: string;
  competitionRules?: string;
  competitionRulesVisibility?: string;
  currentVersion?: number;
  createdBy?: string;
};

type QuizVersionRecord = {
  id?: string;
  quizId?: string;
  version?: number;
  questions?: ModuleQuiz["questions"];
  generatorId?: string;
  generatorVersion?: number | string;
  params?: Record<string, unknown>;
  count?: number;
  seedPolicy?: number;
  fixedSeed?: string | number;
  settings?: string;
};

type QuizFeedback = {
  correct: boolean;
  expected?: string | string[];
  response?: string | string[];
  explanation?: string;
  /** WO07 — ítem de corrección manual aún sin nota. */
  pending?: boolean;
};

// WO07 — estado de corrección manual de un intento. Vive en `QuizAttempt.grading`
// (JSON). Guardamos el puntaje auto-corregido por separado para poder recomputar
// la nota a medida que el profe corrige cada ítem `manual`.
type GradingItem = {
  prompt?: string;
  points: number; // peso máximo del ítem
  response?: string | string[];
  score: number | null; // null = pendiente de corrección
  feedback?: string;
  gradedAt?: string;
  gradedBy?: string;
};
type AttemptGrading = {
  autoScore: number; // puntaje de las preguntas auto-corregidas
  items: Record<string, GradingItem>; // ítems manuales, por questionId
  // V2-04 — true si el alumno envío un canario (`VB-CANARY-...`) como
  // respuesta. El docente ve el flag en la pantalla de corrección para
  // distinguir intentos legítimos de accesos indebidos al payload.
  canaryTriggered?: boolean;
  // Ids de las preguntas cuyas respuestas eran canarios.
  canaryQuestions?: string[];
  // I-2 — true si la corrección se hizo contra la materialización del SERVIDOR
  // (plantilla VBLang regenerada server-side o preguntas almacenadas). false si
  // el quiz no se puede materializar server-side (generadoresV2 o plantilla con
  // generador asistido/dataset): la nota depende del cliente. La UI del docente
  // lo usa para distinguir notas server-autoritativas de las que no lo son.
  serverAuthoritative?: boolean;
  // I-2 — true si el cliente mandó `generatedQuestions` con answerKeys que NO
  // coinciden con lo regenerado por el servidor (indicador de manipulación;
  // mismo canal que el canario de V2-04). No bloquea: es info para el docente.
  materializationMismatch?: boolean;
  // Ids (del cliente) de las preguntas con answerKey manipulada.
  mismatchQuestions?: string[];
  // WO-3b — true si el intento se envió después del deadline (timer + gracia).
  tiempoExcedido?: boolean;
  tiempoElapsedSec?: number;
  tiempoLimiteSec?: number;
};

type GradableQuestion = NonNullable<ModuleQuiz["questions"]>[number];

// Una pregunta es de corrección manual si es `abierta` con `correccion: manual`
// (el flag `manualGrading` viaja como atajo desde el adapter/reproductor).
const isManualQuestion = (q: GradableQuestion): boolean =>
  q.manualGrading === true || q.correccion === "manual";

// Una pregunta `abierta` informativa (`ninguna`) no puntúa: se excluye del maxScore.
const isInformativeQuestion = (q: GradableQuestion): boolean =>
  q.correccion === "ninguna" && q.manualGrading !== true;

type QuizAttemptRecord = {
  id: string;
  moduleId: string | null;
  quizId: string;
  quizVersionId: string | null;
  userId: string;
  schoolId: string | null;
  seed: number | string | null;
  answers: Record<string, string | string[]>;
  feedback?: Record<string, QuizFeedback>;
  grading?: string | null;
  score: number;
  maxScore: number;
  status: string;
  startedAt: Date;
  submittedAt: Date | null;
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

const findQuiz = (module: ModuleWithQuizzes | null, quizId: string) => {
  if (!module) return null;
  const direct = module.quizzes?.find((quiz) => quiz.id === quizId);
  if (direct) return direct;
  const levels = module.levels ?? [];
  for (const level of levels) {
    const match = level.quizzes?.find((quiz) => quiz.id === quizId);
    if (match) return match;
  }
  return null;
};

const buildSeed = (quiz: ModuleQuiz | null) => {
  if (!quiz) return null;
  if (quiz.fixedSeed !== undefined) return quiz.fixedSeed;
  if (quiz.generatorId) {
    return Math.floor(Math.random() * 1_000_000);
  }
  return null;
};

const buildQuizFromCollection = (
  metadata: QuizMetadataRecord,
  version: QuizVersionRecord | null
) => {
  if (!metadata?.id) return null;
  const quiz: ModuleQuiz = {
    id: metadata.id,
    title: metadata.title,
    type: metadata.type,
    mode: metadata.mode,
    visibility: metadata.visibility,
    schoolId: metadata.schoolId,
    schoolName: metadata.schoolName,
    competitionRules: metadata.competitionRules,
    competitionRulesVisibility: metadata.competitionRulesVisibility,
    questions: version?.questions,
    generatorId: version?.generatorId,
    generatorVersion: version?.generatorVersion ?? version?.version,
    count: version?.count,
    seedPolicy: version?.seedPolicy !== undefined ? String(version.seedPolicy) : undefined,
    fixedSeed: version?.fixedSeed
  };
  const settings = version?.settings
    ? safeJsonParse<Record<string, unknown>>(version.settings, {})
    : {};
  if (settings && typeof settings === "object" && (settings as any).composition) {
    quiz.composition = (settings as any).composition;
  }
  return quiz;
};

const fetchQuizFromCollections = async (
  quizId: string,
  moduleId?: string,
  versionId?: string
) => {
  const quizRecord = await prisma.quiz.findFirst({ where: { id: quizId } });
  const metadata: QuizMetadataRecord | null = quizRecord
    ? {
        id: quizRecord.id,
        moduleId: quizRecord.moduleId ?? null,
        title: quizRecord.title ?? undefined,
      }
    : null;

  const moduloRecord = moduleId
    ? await prisma.modulo.findFirst({ where: { id: moduleId } })
    : null;
  // WO14 + WO-3 — `scoringConfig` ahora SÍ es columna del modelo Modulo (escala
  // de notas configurada por el docente). Se persiste como JSON string; el
  // in-memory prisma de tests puede devolver el objeto directo. Se parsea
  // defensivamente (string u objeto). Si falta o es inválido, el wiring
  // reconcilia con el umbral (fallback histórico — retrocompat intacta).
  const rawScoringConfig = (
    moduloRecord as { scoringConfig?: ScoringConfig | string | null } | null
  )?.scoringConfig;
  let moduloScoringConfig: ScoringConfig | undefined;
  if (typeof rawScoringConfig === "string") {
    try {
      const parsed = JSON.parse(rawScoringConfig);
      moduloScoringConfig =
        parsed && typeof parsed === "object" ? (parsed as ScoringConfig) : undefined;
    } catch {
      moduloScoringConfig = undefined;
    }
  } else if (rawScoringConfig && typeof rawScoringConfig === "object") {
    moduloScoringConfig = rawScoringConfig;
  }
  const module: ModuleWithQuizzes | null = moduloRecord
    ? { id: moduloRecord.id, title: moduloRecord.titulo, scoringConfig: moduloScoringConfig }
    : null;

  if (!metadata) return { quiz: null, module };

  // V2-03 — si se pasa `versionId` explícito, cargar ESA versión; si no, la
  // versión actual del quiz. Esto garantiza que un intento se corrija contra
  // la versión con la que el alumno lo inició, no contra la publicada
  // actualmente. `versionMissing` se usa aguas arriba para responder 409
  // cuando la versión del intento ya no existe (en lugar de degradar a
  // currentVersionId).
  let versionMissing = false;
  let versionRecord: Awaited<ReturnType<typeof prisma.quizVersion.findFirst>> = null;
  if (versionId) {
    versionRecord = await prisma.quizVersion.findFirst({ where: { id: versionId } });
    if (!versionRecord) versionMissing = true;
  } else if (quizRecord?.currentVersionId) {
    versionRecord = await prisma.quizVersion.findFirst({ where: { id: quizRecord.currentVersionId } });
  }

  // FIX-QUIZATTEMPT — `QuizVersion.questions` es una columna `String?`
  // serializada con JSON en la DB. El cast previo
  // (`as unknown as ModuleQuiz["questions"]`) no parseaba: el front
  // recibía el string crudo, hacía `questions.map(...)` y reventaba con
  // `TypeError: questions.map is not a function`. La rama "el back lo
  // entrega como array" es la del in-memory prisma de los tests, que
  // no refleja el shape real de la DB. Mantenemos compatibilidad con
  // ambas formas (string serializado o array ya parseado) y caemos a
  // `[]` si el JSON está malformado, igual que `modulos.ts:270` y
  // `quiz-banco.ts:115,207`.
  const version: QuizVersionRecord | null = versionRecord
    ? {
        id: versionRecord.id,
        quizId: versionRecord.quizId,
        version: versionRecord.versionNumber,
        questions: versionRecord.questions
          ? (typeof versionRecord.questions === "string"
              ? safeJsonParse<ModuleQuiz["questions"]>(
                  versionRecord.questions,
                  [] as ModuleQuiz["questions"]
                )
              : (versionRecord.questions as ModuleQuiz["questions"]))
          : undefined,
        generatorId: versionRecord.generatorId ?? undefined,
        generatorVersion: versionRecord.generatorVersion ?? versionRecord.versionNumber,
        params: versionRecord.params as unknown as Record<string, unknown> | undefined,
        count: versionRecord.count ?? undefined,
        seedPolicy: versionRecord.seedPolicy ?? undefined,
        fixedSeed: versionRecord.fixedSeed ?? undefined,
        settings: versionRecord.settings ?? undefined,
      }
    : null;

  const quiz = buildQuizFromCollection(metadata, version);
  return { quiz, module, metadata, version, versionMissing };
};

// Shape del body del submit (espejo de QuizAttemptSubmitSchema). El cliente
// materializa las preguntas para MOSTRAR, pero `generatedQuestions`/`presentedIds`
// son afirmaciones suyas: el servidor las usa sólo cuando NO puede materializar.
type SubmitPayload = {
  answers: Record<string, string | string[]>;
  generatedQuestions?: Array<{
    id: string;
    answerKey?: string | string[];
    points?: number;
    toleranciaRelativa?: number;
    /**
     * F2-04: tolerancia absoluta (enviada por el cliente cuando el
     * template la declara). El server la usa con el criterio combinado.
     */
    toleranciaAbsoluta?: number;
    correccion?: "ninguna" | "manual";
    manualGrading?: boolean;
    prompt?: string;
  }>;
  presentedIds?: string[];
};

type GradingResolution = {
  gradingQuestions: ModuleQuiz["questions"];
  // I-2 — true si se corrigió contra la materialización del servidor.
  serverAuthoritative: boolean;
  // I-2 — ids cuya answerKey del payload no coincide con lo regenerado.
  mismatchQuestions: string[];
};

// Comportamiento PREVIO (le cree al payload): preguntas generadas del cliente, o
// subconjunto de las almacenadas según `presentedIds`. Se usa para generadoresV2
// y como fallback cuando una plantilla no se puede materializar server-side.
const gradingQuestionsFromPayload = (
  quiz: ModuleQuiz,
  payload: SubmitPayload
): ModuleQuiz["questions"] => {
  const hasStored = (quiz.questions?.length ?? 0) > 0;
  const presentedSet =
    payload.presentedIds && payload.presentedIds.length > 0
      ? new Set(payload.presentedIds)
      : null;
  if (!hasStored && payload.generatedQuestions && payload.generatedQuestions.length > 0) {
    return payload.generatedQuestions;
  }
  if (presentedSet) return (quiz.questions ?? []).filter((q) => presentedSet.has(q.id));
  return quiz.questions;
};

// F-2c — preguntas almacenadas: deriva el subconjunto presentado server-side.
// Replica EXACTO `presentedQuestions` del reproductor para preguntas del banco:
//  - composición fijo/azar → `selectPoolIndices(total, comp, seed)` (las
//    primeras K, o K barajadas determinísticamente por seed). Se IGNORA
//    `payload.presentedIds`: es afirmación del cliente.
//  - elige_alumno → el alumno elige cuál responder (no derivable por seed); se
//    honra su elección (`presentedIds`) acotada a ids de preguntas reales.
//  - sin composición → todas las almacenadas. (El path legacy de `displayCount`
//    está dormido para quizzes de colección: `buildQuizFromCollection` no lo
//    puebla, así que cliente y servidor presentan todas — consistente.)
const resolveStoredPresented = (
  quiz: ModuleQuiz,
  attempt: QuizAttemptRecord,
  payload: SubmitPayload
): ModuleQuiz["questions"] => {
  const stored = quiz.questions ?? [];
  const composition = quiz.composition ? parseComposition(quiz.composition) : null;
  if (!composition) return stored;
  if (composition.seleccion === "elige_alumno") {
    const presentedSet =
      payload.presentedIds && payload.presentedIds.length > 0
        ? new Set(payload.presentedIds)
        : null;
    return presentedSet ? stored.filter((q) => presentedSet.has(q.id)) : stored;
  }
  // fijo / azar: subconjunto determinístico por seed (mismo seed que usó el
  // reproductor: `attempt.seed ?? "0"`).
  const indices = selectPoolIndices(stored.length, composition, attempt.seed ?? "0");
  return indices.map((i) => stored[i]);
};

// Convierte una pregunta materializada por el SERVIDOR al shape que corrigen
// `gradeAnswers`/`buildFeedback`. Conserva answerKey/tolerancia/peso/modo del
// servidor pero usa el id del CLIENTE para que `answers[id]` resuelva (el id del
// cliente trae un contador de módulo no reproducible; ver questionHashPrefix).
const serverQuestionToGradable = (
  sq: ModuleQuizQuestion,
  id: string
): GradableQuestion => {
  const q: GradableQuestion = { id };
  if (sq.answerKey !== undefined) q.answerKey = sq.answerKey;
  if (sq.explanation !== undefined) q.explanation = sq.explanation;
  if (sq.toleranciaRelativa !== undefined) q.toleranciaRelativa = sq.toleranciaRelativa;
  // F2-04: el server debe propagar la tolerancia absoluta al grader cuando
  // materializa la pregunta (autoridad server-side desde V2-06).
  if (sq.toleranciaAbsoluta !== undefined) q.toleranciaAbsoluta = sq.toleranciaAbsoluta;
  if (sq.points !== undefined) q.points = sq.points;
  if (sq.correccion !== undefined) q.correccion = sq.correccion;
  if (sq.manualGrading !== undefined) q.manualGrading = sq.manualGrading;
  if (sq.prompt !== undefined) q.prompt = sq.prompt;
  return q;
};

// I-2 — camino VBLang. Recompila el DSL de la plantilla (cacheado por versión),
// regenera el pool con `attempt.seed` replicando EXACTO el reproductor, deriva
// el subconjunto presentado y arma las preguntas a corregir contra la
// materialización del SERVIDOR. `payload.generatedQuestions` se ignora para
// corregir (sólo se compara para detectar manipulación). Si la plantilla no es
// materializable server-side (generador asistido/dataset/plantilla ausente),
// cae al comportamiento previo marcando serverAuthoritative=false.
const resolveVblangGrading = async (
  quiz: ModuleQuiz,
  attempt: QuizAttemptRecord,
  payload: SubmitPayload,
  generatorId: string
): Promise<GradingResolution> => {
  const fallback = (): GradingResolution => ({
    gradingQuestions: gradingQuestionsFromPayload(quiz, payload),
    serverAuthoritative: false,
    mismatchQuestions: []
  });

  const plantillaId = generatorId.slice("plantilla:".length);
  const plantilla = await prisma.plantillaEjercicio.findFirst({
    where: { id: plantillaId }
  });
  const codigoDsl = (plantilla as { codigoDsl?: string } | null)?.codigoDsl;
  if (!codigoDsl) return fallback();

  let pool: ReturnType<typeof materializeVblangPool>;
  try {
    const compiled = getCompiledPlantilla(
      attempt.quizVersionId ?? plantillaId,
      codigoDsl
    );
    pool = materializeVblangPool(compiled, attempt.seed, quiz.count ?? 10);
  } catch {
    return fallback();
  }
  // Pool vacío = plantilla con generador asistido/dataset (necesita un provider
  // que vive en apps/web): no materializable server-side → no-autoritativo.
  if (!pool.ok) return fallback();

  // Reverse map prefijo-hash → id del cliente, para resolver `answers[clientId]`.
  const clientIdByPrefix = new Map<string, string>();
  const registerClientId = (id: string) => {
    const p = questionHashPrefix(id);
    if (!clientIdByPrefix.has(p)) clientIdByPrefix.set(p, id);
  };
  for (const id of payload.presentedIds ?? []) registerClientId(id);
  for (const id of Object.keys(payload.answers ?? {})) registerClientId(id);
  for (const q of payload.generatedQuestions ?? []) registerClientId(q.id);

  // answerKeys que AFIRMÓ el cliente, por prefijo (para detectar manipulación).
  const claimedKeyByPrefix = new Map<string, unknown>();
  for (const q of payload.generatedQuestions ?? []) {
    claimedKeyByPrefix.set(questionHashPrefix(q.id), q.answerKey);
  }

  // Subconjunto PRESENTADO derivado server-side desde el pool regenerado. Para
  // elige_alumno el alumno elige cuál responder (no derivable por seed): se
  // honra su elección pero la clave de corrección sigue siendo la del servidor.
  const composition = quiz.composition ? parseComposition(quiz.composition) : null;
  const seedForPool = attempt.seed ?? "0";
  let presented: ModuleQuizQuestion[];
  if (composition && composition.seleccion === "elige_alumno") {
    const chosen = new Set((payload.presentedIds ?? []).map(questionHashPrefix));
    presented = pool.questions.filter((q) => chosen.has(questionHashPrefix(q.id)));
  } else if (composition) {
    const indices = selectPoolIndices(pool.questions.length, composition, seedForPool);
    presented = indices.map((i) => pool.questions[i]);
  } else {
    presented = pool.questions;
  }

  const mismatchQuestions: string[] = [];
  const gradingQuestions = presented.map((sq) => {
    const prefix = questionHashPrefix(sq.id);
    const clientId = clientIdByPrefix.get(prefix) ?? sq.id;
    if (claimedKeyByPrefix.has(prefix)) {
      const claimed = JSON.stringify(claimedKeyByPrefix.get(prefix) ?? null);
      const real = JSON.stringify(sq.answerKey ?? null);
      if (claimed !== real) mismatchQuestions.push(clientId);
    }
    return serverQuestionToGradable(sq, clientId);
  });

  return { gradingQuestions, serverAuthoritative: true, mismatchQuestions };
};

/**
 * F2-04: criterio numérico combinado. Acepta respuesta dentro del MÁXIMO
 * entre la tolerancia relativa (ratio × |esperado|) y la tolerancia
 * absoluta (unidades crudas).
 *
 *   |r - e| ≤ max(|e| · tol_rel, tol_abs)
 *
 * Comportamiento previo preservado:
 *  - tol_abs ausente o 0 → colapsa a `|r - e| ≤ |e| · tol_rel`.
 *  - e = 0 + tol_abs = 0 → exige `r = 0` (exacto).
 *  - e = 0 + tol_abs > 0 → tol_abs es la única holgura.
 *  - tol_rel = 0 + tol_abs > 0 → tol_abs es la única holgura.
 */
const gradeNumeric = (
  response: string,
  expected: string,
  toleranciaRelativa: number,
  toleranciaAbsoluta: number = 0
): boolean => {
  const r = parseFloat(response.replace(/,/g, "."));
  const e = parseFloat(expected.replace(/,/g, "."));
  if (Number.isNaN(r) || Number.isNaN(e)) return false;
  const diff = Math.abs(r - e);
  if (e === 0) {
    // Antes: `return r === 0` (exacto). Ahora: tol_abs es la holgura.
    return diff <= toleranciaAbsoluta;
  }
  const tolRel = Math.abs(e) * toleranciaRelativa;
  const tol = Math.max(tolRel, toleranciaAbsoluta);
  return diff <= tol;
};

// Peso (puntaje) de una pregunta: su `points` propio, o el peso por defecto de
// la composición del quiz, o 1. Si nada lo declara, el grading es idéntico al
// histórico (maxScore = cantidad de preguntas).
const questionWeight = (
  question: { points?: number },
  defaultWeight: number
): number => {
  if (typeof question.points === "number" && question.points > 0) return question.points;
  return defaultWeight > 0 ? defaultWeight : 1;
};

const gradeAnswers = (
  quiz: ModuleQuiz | null,
  answers: Record<string, string | string[]>
) => {
  const questions = quiz?.questions ?? [];
  if (questions.length === 0) {
    return {
      score: 0,
      maxScore: 0,
      manual: [] as Array<{ question: GradableQuestion; weight: number }>
    };
  }
  const defaultWeight =
    typeof quiz?.composition?.pesoPorDefecto === "number" && quiz.composition.pesoPorDefecto > 0
      ? quiz.composition.pesoPorDefecto
      : 1;
  let score = 0;
  let maxScore = 0;
  const manual: Array<{ question: GradableQuestion; weight: number }> = [];
  for (const question of questions) {
    // WO07 — abierta informativa: no puntúa, se excluye del maxScore.
    if (isInformativeQuestion(question)) continue;
    const weight = questionWeight(question, defaultWeight);
    maxScore += weight;
    // WO07 — abierta manual: cuenta en el maxScore pero la nota la pone el
    // profe. Queda pendiente; el auto-score suma 0 hasta corregirla.
    if (isManualQuestion(question)) {
      manual.push({ question, weight });
      continue;
    }
    const expected = question.answerKey;
    if (!expected) continue;
    const response = answers[question.id];
    if (Array.isArray(expected)) {
      if (!Array.isArray(response)) continue;
      const expectedSet = new Set(expected);
      const responseSet = new Set(response);
      if (expectedSet.size !== responseSet.size) continue;
      const matches = Array.from(expectedSet).every((value) => responseSet.has(value));
      if (matches) score += weight;
      continue;
    }
    if (typeof response === "string") {
      const tol = question.toleranciaRelativa;
      // F2-04: si tol_abs está presente, el criterio combinado aplica
      // aunque tol_rel sea 0 (ej. tol_abs 0.001, tol_rel undefined).
      const tolAbs = question.toleranciaAbsoluta ?? 0;
      const correct = tol !== undefined && tol > 0
        ? gradeNumeric(response, expected, tol, tolAbs)
        : tolAbs > 0
          ? gradeNumeric(response, expected, 0, tolAbs)
          : response === expected;
      if (correct) score += weight;
    }
  }
  return { score, maxScore, manual };
};

const buildFeedback = (
  quiz: ModuleQuiz | null,
  answers: Record<string, string | string[]>
) => {
  const feedback: Record<string, QuizFeedback> = {};
  const questions = quiz?.questions ?? [];
  for (const question of questions) {
    // WO07 — abierta manual: el feedback queda pendiente hasta que el profe corrija.
    if (isManualQuestion(question)) {
      feedback[question.id] = {
        correct: false,
        pending: true,
        response: answers[question.id],
        explanation: question.explanation
      };
      continue;
    }
    // WO07 — abierta informativa: no afecta la nota; sin feedback de corrección.
    if (isInformativeQuestion(question)) continue;
    const expected = question.answerKey;
    if (!expected) continue;
    const response = answers[question.id];
    let correct = false;
    if (Array.isArray(expected)) {
      if (Array.isArray(response)) {
        const expectedSet = new Set(expected);
        const responseSet = new Set(response);
        correct =
          expectedSet.size === responseSet.size &&
          Array.from(expectedSet).every((value) => responseSet.has(value));
      }
    } else if (typeof response === "string") {
      const tol = question.toleranciaRelativa;
      // F2-04: idem gradeAnswers — criterio combinado tol_rel/tol_abs.
      const tolAbs = question.toleranciaAbsoluta ?? 0;
      correct = tol !== undefined && tol > 0
        ? gradeNumeric(response, expected, tol, tolAbs)
        : tolAbs > 0
          ? gradeNumeric(response, expected, 0, tolAbs)
          : response === expected;
    }
    feedback[question.id] = {
      correct,
      expected,
      response,
      explanation: question.explanation
    };
  }
  return feedback;
};

type GeneratedQuestion = {
  id: string;
  prompt: string;
  questionType: "mc" | "input";
  options?: string[];
  answerKey: string;
  explanation?: string;
};

async function generateQuestionsFromConfig(
  generatorId: string,
  params: Record<string, unknown>,
  count: number,
  seed: number | string
): Promise<GeneratedQuestion[]> {
  // generator_configs is not a Prisma model; this table lives outside Prisma scope.
  // Return placeholder questions as before.
  void generatorId; void params;

  // PRNG determinístico basado en el seed
  let state = typeof seed === "number"
    ? seed >>> 0
    : String(seed).split("").reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 0) >>> 0;

  const nextRand = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };

  void nextRand;

  // Generar N preguntas placeholder con el subtipo y seed
  // El contenido real lo genera el cliente con generadoresV2
  // Acá solo persistimos el esqueleto para que el attempt tenga
  // maxScore correcto y el scoring pueda recibir las preguntas del cliente
  return Array.from({ length: count }, (_, i) => ({
    id: `${generatorId}/${seed}/${i}`,
    prompt: `Pregunta ${i + 1}`,
    questionType: "mc" as const,
    answerKey: "",
  }));
}

export const quizAttempts = Router();

// QA-FIX-06 — Operar intentos de quiz (iniciar/ver/responder/entregar) es
// funcionalidad BASE de un módulo con quiz, no una feature enterprise. Crear y
// editar módulos con quiz (`modulos.ts`) y armar quizzes (`quiz-banco.ts`) solo
// exigen `requireUser`; gatear únicamente la operación de los intentos detrás de
// `requireEnterpriseFeature(QUIZZES)` + `requireActiveInstitutionBenefit` era una
// asimetría accidental (se podía crear pero no usar). Cada handler ya aplica su
// propia autorización por dueño/staff, así que estos endpoints solo requieren
// usuario autenticado. El gating premium real de quizzes vive en las MÉTRICAS
// agregadas (`estadisticas.ts` -> ENTERPRISE_FEATURES.QUIZZES), que se conserva.
quizAttempts.post(
  "/api/quiz-attempts",
  ...bodyLimitMB(2),
  requireUser,
  async (req, res) => {
  try {
    const payload = QuizAttemptCreateSchema.parse(req.body);
    const module = payload.moduleId
      ? await prisma.modulo.findFirst({ where: { id: payload.moduleId } }).then((m) =>
          m ? ({ id: m.id, title: m.titulo } as ModuleWithQuizzes) : null
        )
      : null;
    const { quiz: collectionQuiz, metadata, version } = await fetchQuizFromCollections(
      payload.quizId,
      payload.moduleId
    );
    const quiz = collectionQuiz ?? findQuiz(module, payload.quizId);
    if (!quiz) return res.status(404).json({ error: "quiz not found" });
    const quizVersionSource = version?.version ?? quiz.generatorVersion ?? 1;
    const quizVersion = QuizVersionSchema.parse(quizVersionSource);
    const userId =
      typeof req.user?._id?.toString === "function"
        ? req.user._id.toString()
        : typeof req.user?.id === "string"
          ? req.user.id
          : "";
    if (!userId) return res.status(401).json({ error: "user not found" });
    const now = new Date();
    const resolvedModuleId = payload.moduleId ?? metadata?.moduleId ?? null;
    const seed = buildSeed(quiz);
    let maxScore = quiz.questions?.length ?? quiz.count ?? 0;
    if (quiz.generatorId && (!quiz.questions || quiz.questions.length === 0)) {
      const generatedCount = quiz.count ?? 10;
      await generateQuestionsFromConfig(
        quiz.generatorId,
        (payload as Record<string, unknown>).params as Record<string, unknown> ?? {},
        generatedCount,
        seed ?? 0
      );
      maxScore = generatedCount;
    }
    if (!version?.id) {
      return res.status(400).json({
        error: "Este quiz no tiene una versión válida. Pedile al profesor que regenere el módulo.",
      });
    }
    // F3-04 — política de intentos (maxIntentos, defaults por tipo).
    // `settings.type` se persiste dentro de `QuizVersion.settings` (JSON);
    // `parseIntentoPolicy` resuelve los defaults si los campos faltan.
    const quizTipoLectura = (() => {
      if (!version.settings) return "practica";
      try {
        const parsed = JSON.parse(version.settings) as { type?: string };
        return parsed.type ?? "practica";
      } catch {
        return "practica";
      }
    })();
    const intentoPolicy: IntentoPolicy = parseIntentoPolicy(version.settings, quizTipoLectura);
    // WO-3b — leer timerSegundos para devolver deadline al front.
    const evalConfig = parseEvaluacionConfig(version.settings, quizTipoLectura);
    const intentosPrevios = await prisma.quizAttempt.findMany({
      where: { quizId: payload.quizId, userId }
    });
    const limite = validarLimiteIntentos(
      contarIntentosPrevios(intentosPrevios, userId, payload.quizId),
      intentoPolicy.maxIntentos
    );
    if (!limite.allowed) {
      return res.status(403).json({
        error: limite.reason,
        code: limite.code,
        maxIntentos: limite.maxIntentos,
        intentosPrevios: limite.intentosPrevios
      });
    }
    const result = await prisma.quizAttempt.create({
      data: {
        id: randomUUID(),
        quizId: payload.quizId,
        quizVersionId: version.id,
        userId,
        seed: seed !== null ? String(seed) : null,
        answers: JSON.stringify({}),
        feedback: JSON.stringify({}),
        score: 0,
        maxScore,
        status: "in_progress",
        startedAt: now.toISOString(),
        submittedAt: null,
        attemptNo: 1,
        seedPolicy: quiz.seedPolicy !== undefined ? Number(quiz.seedPolicy) : undefined,
      }
    });
    // WO-3b — deadline del intento (null si no hay timer).
    const deadline = calcularDeadline(now, evalConfig.timerSegundos);

    res
      .status(201)
      .json({
        id: result.id,
        attemptId: result.id,
        // F3-04 — contexto de intentos para que el front pueda mostrar
        // "Te quedan N intentos" sin pedir el summary.
        intentosPrevios: contarIntentosPrevios(intentosPrevios, userId, payload.quizId),
        maxIntentos: intentoPolicy.maxIntentos,
        intentosRestantes:
          intentoPolicy.maxIntentos === null
            ? null
            : Math.max(0, intentoPolicy.maxIntentos - contarIntentosPrevios(intentosPrevios, userId, payload.quizId) - 1),
        politicaNota: intentoPolicy.politicaNota,
        // WO-3b — timer info para que el front monte el countdown.
        timerSegundos: evalConfig.timerSegundos,
        deadline
      });
  } catch (error: any) {
    res.status(400).json({ error: error?.message ?? "invalid payload" });
  }
  }
);

// F3-04 — GET /api/quiz-attempts
// Lista intentos. Tres modos:
//   1) Alumno (rol STUDENT/PARENT) sin aulaId: devuelve SUS intentos sobre el
//      quiz o módulo pedido. userId forzado al del token.
//   2) Staff (rol TEACHER/DIRECTIVO/ADMIN) sin aulaId: igual que alumno (sólo
//      los propios). Para ver intentos de otros, DEBE pasar aulaId.
//   3) Staff con aulaId: devuelve los intentos de los alumnos miembros del
//      aula, sobre el quiz/módulo pedido. El server valida que el requester
//      sea miembro del aula o directivo de la escuela.
//
// El front consume hoy dos endpoints fantasma:
//   - ModuloDetail.tsx:386 → GET /api/quiz-attempts?moduleId=...&userId=...
//   - ProfesorCalificaciones.tsx:47 → GET /api/quiz-attempts?moduleId=...&aulaId=...&quizType=formal
// Este endpoint los cubre a ambos con un único handler.
quizAttempts.get(
  "/api/quiz-attempts",
  requireUser,
  async (req, res) => {
    try {
      // FIX-TEST4-ALU-04 — limpiar attempts in_progress viejos antes
      // de devolver la lista. Fire-and-forget (no esperamos a la
      // query porque la UI no depende de cuándo termine el sweep).
      void staleInProgressSweep().catch(() => { /* ignorar */ });

      const query = QuizAttemptListQuerySchema.parse(req.query);
      const requesterId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!requesterId) return res.status(401).json({ error: "user not found" });

      // (1) Determinar el set de userIds a buscar.
      let targetUserIds: string[];
      if (query.aulaId) {
        // Modo staff-de-aula: validar membresía y devolver los intentos de
        // los alumnos miembros del aula.
        if (!isStaffRole(req.user?.role ?? null)) {
          return res.status(403).json({ error: "forbidden" });
        }
        const clase = await prisma.clase.findFirst({
          where: { id: query.aulaId, isDeleted: { not: true } },
          include: { miembros: true }
        });
        if (!clase) {
          return res.status(404).json({ error: "classroom not found" });
        }
        const classroom = {
          id: clase.id,
          schoolId: clase.escuelaId ?? undefined,
          members: clase.miembros.map((m) => ({ userId: m.usuarioId, roleInClass: m.rolEnClase }))
        };
        const allowed = canManageClassroom({
          requesterId,
          requesterRole: req.user?.role ?? null,
          requesterSchoolId: req.user?.schoolId ?? null,
          classroomSchoolId: classroom.schoolId ?? null,
          classroomMembers: classroom.members
        });
        if (!allowed) {
          return res.status(403).json({ error: "forbidden" });
        }
        // Alumnos miembros del aula (rolEnClase ∈ {STUDENT, USER legacy}).
        // FASE 4 — el espejo-alumno no entra en el listado de
        // calificaciones del aula (analítica de alumnos). Si el staff
        // pide explícitamente un `userId`, se respeta (no se filtra ese
        // caso puntual; es una consulta dirigida, no un roster).
        const alumnosAulaConEspejo = clase.miembros
          .filter((m) => m.rolEnClase === "STUDENT" || m.rolEnClase === "USER")
          .map((m) => m.usuarioId);
        const alumnosAula = await excluirEspejosDeIds(alumnosAulaConEspejo);
        if (alumnosAula.length === 0 && !query.userId) {
          return res.json({ items: [], total: 0 });
        }
        targetUserIds = query.userId ? [query.userId] : alumnosAula;
      } else {
        // Modo "yo": siempre es el requester, sin importar `userId` del query.
        targetUserIds = [requesterId];
      }

      // (2) Resolver el conjunto de quizIds sobre los que buscar.
      // FIX-CALIFICACIONES — nuevo modo "aulaId solo": el requester es
      // staff del aula y pide "todas las calificaciones del aula" sin
      // filtrar por módulo/quiz específico. `targetUserIds` ya está
      // acotado a los miembros del aula, así que pasamos `targetQuizIds
      // = []` (sin filtro de quiz) y el `findMany` devuelve todos los
      // intentos de esos usuarios.
      let targetQuizIds: string[] | null;
      if (query.quizId) {
        targetQuizIds = [query.quizId];
      } else if (query.moduleId) {
        const quizzes = await prisma.quiz.findMany({ where: { moduleId: query.moduleId } });
        if (quizzes.length === 0) return res.json({ items: [], total: 0 });
        targetQuizIds = quizzes.map((q) => q.id);
      } else if (query.aulaId) {
        // Modo "todas las calificaciones del aula" — sin filtro de quiz.
        targetQuizIds = null;
      } else {
        return res.json({ items: [], total: 0 });
      }

      // (3) Buscar intentos y devolver resumen.
      // FIX-CALIFICACIONES — `targetQuizIds = null` significa "sin
      // filtro de quiz" (modo aulaId solo); en ese caso NO pasamos el
      // `quizId.in` para que el findMany traiga todos los intentos de
      // los usuarios del aula.
      const attempts = await prisma.quizAttempt.findMany({
        where: {
          userId: { in: targetUserIds },
          ...(targetQuizIds ? { quizId: { in: targetQuizIds } } : {})
        }
      });
      // Ordenar por startedAt desc estable (createdAt no existe en el modelo).
      const sorted = [...attempts].sort((a, b) =>
        String(b.startedAt ?? "").localeCompare(String(a.startedAt ?? ""))
      );
      const items = sorted.slice(0, query.limit).map((a) => ({
        id: a.id,
        quizId: a.quizId,
        quizVersionId: a.quizVersionId,
        userId: a.userId,
        status: a.status,
        startedAt: a.startedAt,
        submittedAt: a.submittedAt ?? null,
        score: a.score,
        maxScore: a.maxScore,
        attemptNo: a.attemptNo ?? null,
        seed: a.seed ?? null
      }));
      res.json({ items, total: attempts.length });
    } catch (error: any) {
      if (error?.name === "ZodError") {
        return res.status(400).json({ error: error.message });
      }
      res.status(400).json({ error: error?.message ?? "invalid query" });
    }
  }
);

// F3-04 — GET /api/quiz-attempts/summary
// Resumen del alumno sobre un quiz: {intentosPrevios, intentosRestantes,
// maxIntentos, politicaNota, notaActual, mejorNota, ultimaNota, primeraNota,
// promedioNota, historial[ultimosN]}. El alumno SIEMPRE ve SUYO; el staff con
// userId explícito puede pedir el de un alumno, pero requiere aulaId para
// validar membresía (modo "docente del aula").
quizAttempts.get(
  "/api/quiz-attempts/summary",
  requireUser,
  async (req, res) => {
    try {
      const query = QuizAttemptSummaryQuerySchema.parse(req.query);
      const requesterId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!requesterId) return res.status(401).json({ error: "user not found" });

      const queryAny = req.query as { userId?: string; aulaId?: string };
      let targetUserId = requesterId;
      if (queryAny.userId && queryAny.userId !== requesterId) {
        if (!isStaffRole(req.user?.role ?? null)) {
          return res.status(403).json({ error: "forbidden" });
        }
        if (!queryAny.aulaId) {
          return res.status(400).json({
            error: "Para consultar el resumen de otro usuario se requiere `aulaId`."
          });
        }
        const clase = await prisma.clase.findFirst({
          where: { id: queryAny.aulaId, isDeleted: { not: true } },
          include: { miembros: true }
        });
        if (!clase) return res.status(404).json({ error: "classroom not found" });
        const classroom = {
          id: clase.id,
          schoolId: clase.escuelaId ?? undefined,
          members: clase.miembros.map((m) => ({ userId: m.usuarioId, roleInClass: m.rolEnClase }))
        };
        const allowed = canManageClassroom({
          requesterId,
          requesterRole: req.user?.role ?? null,
          requesterSchoolId: req.user?.schoolId ?? null,
          classroomSchoolId: classroom.schoolId ?? null,
          classroomMembers: classroom.members
        });
        if (!allowed) {
          return res.status(403).json({ error: "forbidden" });
        }
        targetUserId = queryAny.userId;
      }

      // Política del quiz.
      const version = await prisma.quizVersion.findFirst({
        where: { quizId: query.quizId }
      });
      const settings = version?.settings ?? null;
      const quizTipoLectura = (() => {
        if (!settings) return "practica";
        try {
          const parsed = JSON.parse(settings) as { type?: string };
          return parsed.type ?? "practica";
        } catch {
          return "practica";
        }
      })();
      const policy = parseIntentoPolicy(settings, quizTipoLectura);

      const attempts = await prisma.quizAttempt.findMany({
        where: { quizId: query.quizId, userId: targetUserId }
      });
      const finalizados = attempts.filter((a) => a.status !== "aborted");
      const intentosPrevios = finalizados.length;
      const notas = calcularNotas(finalizados);
      const notaActual = aplicarPolitica(finalizados, policy.politicaNota);

      res.json({
        quizId: query.quizId,
        userId: targetUserId,
        maxIntentos: policy.maxIntentos,
        intentosPrevios,
        intentosRestantes:
          policy.maxIntentos === null
            ? null
            : Math.max(0, policy.maxIntentos - intentosPrevios),
        politicaNota: policy.politicaNota,
        notaActual,
        mejorNota: notas.mejor,
        ultimaNota: notas.ultima,
        primeraNota: notas.primera,
        promedioNota: notas.promedio,
        historial: finalizados
          .sort((a, b) =>
            String(b.startedAt ?? "").localeCompare(String(a.startedAt ?? ""))
          )
          .slice(0, 20)
          .map((a) => ({
            id: a.id,
            status: a.status,
            startedAt: a.startedAt,
            submittedAt: a.submittedAt ?? null,
            score: a.score,
            maxScore: a.maxScore,
            attemptNo: a.attemptNo ?? null
          }))
      });
    } catch (error: any) {
      if (error?.name === "ZodError") {
        return res.status(400).json({ error: error.message });
      }
      res.status(400).json({ error: error?.message ?? "invalid query" });
    }
  }
);


// WO07 — lista de intentos con preguntas abiertas pendientes de corrección, para
// que el profe (staff) las corrija desde ProfesorCalificaciones.
//
// IMPORTANTE: se registra ANTES de `/:id` para que Express no lo capture como
// un attempt con id="pending-grading". Tampoco lleva el gate de enterprise: es
// una vista de corrección del docente, no un intento de alumno.
quizAttempts.get(
  "/api/quiz-attempts/pending-grading",
  requireUser,
  async (req, res) => {
    if (!isStaffRole(req.user?.role)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const requesterId =
      typeof req.user?._id?.toString === "function"
        ? req.user._id.toString()
        : typeof req.user?.id === "string"
          ? req.user.id
          : "";
    const requesterSchoolId =
      typeof req.user?.schoolId === "string" ? req.user.schoolId : null;
    const limit = Math.min(
      Number.parseInt(String(req.query.limit ?? "50"), 10) || 50,
      200
    );

    const pending = (await prisma.quizAttempt.findMany({
      where: { status: "pending_review" },
      orderBy: { submittedAt: "desc" },
      take: limit
    })) as unknown as QuizAttemptRecord[];

    const items: Array<Record<string, unknown>> = [];
    const studentIds = new Set<string>();

    for (const attempt of pending) {
      const quizRecord = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
      if (!quizRecord) continue;
      const modulo = quizRecord.moduleId
        ? await prisma.modulo.findFirst({ where: { id: quizRecord.moduleId } })
        : null;
      // Alcance: módulos del profe o de su misma escuela.
      const owns = modulo?.ownerUserId && modulo.ownerUserId === requesterId;
      const sameSchool =
        requesterSchoolId && modulo?.schoolId && modulo.schoolId === requesterSchoolId;
      if (!owns && !sameSchool) continue;

      const grading = safeJsonParse<AttemptGrading>(
        attempt.grading as unknown as string,
        { autoScore: 0, items: {} }
      );
      const gradingItems = Object.entries(grading.items)
        .filter(([, it]) => it.score === null)
        .map(([questionId, it]) => ({
          questionId,
          prompt: it.prompt ?? "",
          response: it.response ?? "",
          points: it.points
        }));
      if (gradingItems.length === 0) continue;

      studentIds.add(attempt.userId);
      items.push({
        id: attempt.id,
        quizId: attempt.quizId,
        quizTitle: quizRecord.title ?? modulo?.titulo ?? "Quiz",
        moduleId: quizRecord.moduleId ?? null,
        userId: attempt.userId,
        submittedAt: attempt.submittedAt,
        score: attempt.score,
        maxScore: attempt.maxScore,
        items: gradingItems
      });
    }

    const usuarios = studentIds.size
      ? await prisma.usuario.findMany({
          where: { id: { in: [...studentIds] }, isDeleted: { not: true } },
          select: { id: true, fullName: true, username: true }
        })
      : [];
    const nameMap = new Map(
      usuarios.map((u) => [String(u.id ?? ""), String(u.fullName ?? u.username ?? "Alumno")])
    );
    for (const it of items) {
      it.studentName = nameMap.get(String(it.userId)) ?? "Alumno";
    }

    return res.json({ items });
  }
);

quizAttempts.get(
  "/api/quiz-attempts/:id",
  requireUser,
  async (req, res) => {
  const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
  const userId =
    typeof req.user?._id?.toString === "function"
      ? req.user._id.toString()
      : typeof req.user?.id === "string"
        ? req.user.id
        : "";
  if (!userId) return res.status(401).json({ error: "user not found" });
  const attempt = await prisma.quizAttempt.findFirst({ where: { id: idParam, userId } }) as QuizAttemptRecord | null;
  if (!attempt) return res.status(404).json({ error: "attempt not found" });
  const { quiz: collectionQuiz, metadata, module, version: getVersion, versionMissing } = await fetchQuizFromCollections(
    attempt.quizId,
    attempt.moduleId ?? undefined,
    attempt.quizVersionId ?? undefined
  );
  if (versionMissing) {
    return res.status(409).json({
      error: "la versión del quiz de este intento ya no está disponible"
    });
  }
  const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);

  // WO-3b — timer info para que el front pueda retomar el countdown.
  const getQuizTipo = (() => {
    if (!getVersion?.settings) return "practica";
    try {
      const p = JSON.parse(getVersion.settings) as { type?: string };
      return p.type ?? "practica";
    } catch {
      return "practica";
    }
  })();
  const getEvalConfig = parseEvaluacionConfig(getVersion?.settings, getQuizTipo);
  const getDeadline = calcularDeadline(
    attempt.startedAt as unknown as string,
    getEvalConfig.timerSegundos
  );

  // V2-04 — el alumno es el único que llega hasta acá con el handler actual
  // (el filtro es `id + userId`). Sanitizamos por defecto; si en el futuro
  // el handler se abre al staff, debería saltarse la sanitización.
  const requesterRole =
    (req.user as { role?: string | null } | undefined)?.role ?? null;
  const questionsForResponse =
    isStaffRole(requesterRole)
      ? (quiz?.questions ?? [])
      : sanitizeQuestionsForStudent(quiz?.questions, attempt.quizVersionId ?? attempt.quizId);
  res.json({
    id: attempt.id,
    attemptId: attempt.id,
    moduleId: attempt.moduleId ?? undefined,
    quizId: attempt.quizId,
    quizTitle: quiz?.title ?? metadata?.title ?? module?.title ?? "Quiz",
    status: attempt.status,
    timerSegundos: getEvalConfig.timerSegundos,
    deadline: getDeadline,
    questions: questionsForResponse,
    answers: attempt.answers
      ? safeJsonParse(attempt.answers as unknown as string, {} as Record<string, unknown>)
      : {},
    feedback: attempt.feedback
      ? safeJsonParse(attempt.feedback as unknown as string, {} as Record<string, unknown>)
      : {},
    // WO07 — estado de corrección manual (auto-score + ítems pendientes/corregidos).
    grading: attempt.grading
      ? safeJsonParse(attempt.grading as unknown as string, {
          autoScore: 0,
          items: {}
        })
      : undefined,
    quiz: quiz ? { title: quiz.title, questions: questionsForResponse } : undefined,
    generatorId: quiz?.generatorId ?? undefined,
    seed: attempt.seed ?? undefined,
    count: quiz?.count ?? undefined,
    instructions: quiz?.instructions ?? undefined,
    displayCount: quiz?.displayCount ?? undefined,
    composition: quiz?.composition ?? undefined,
    quizType: quiz?.type ?? undefined
  });
  }
);

// F5-03 — Vista docente de un intento: devuelve el attempt + el JSON
// `grading` COMPLETO (incluyendo `events` con el counter de salidas y
// cualquier flag que V2-04 / I-2 haya seteado). Sólo accesible para
// staff (TEACHER/ADMIN/etc.) de la MISMO escuela que el alumno.
//
// Razón: el handler general `GET /api/quiz-attempts/:id` está filtrado
// por `userId` (sólo el alumno dueño). Para la vista del docente, abrir
// ese handler a staff implicaría revisar muchas invariantes (sanitización
// de canarios, etc.). Crear un endpoint dedicado es más seguro y deja el
// handler del alumno intacto.
quizAttempts.get(
  "/api/quiz-attempts/:id/staff",
  requireUser,
  async (req, res) => {
    const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
    const requesterRole =
      (req.user as { role?: string | null } | undefined)?.role ?? null;
    if (!isStaffRole(requesterRole)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const requesterSchool =
      (req.user as { schoolId?: string | null } | undefined)?.schoolId ?? null;
    const attempt = (await prisma.quizAttempt.findFirst({
      where: { id: idParam }
    })) as QuizAttemptRecord | null;
    if (!attempt) return res.status(404).json({ error: "attempt not found" });

    // Mismo escuela: el docente sólo ve intentos de su escuela.
    if (requesterSchool && attempt.schoolId && requesterSchool !== attempt.schoolId) {
      return res.status(403).json({ error: "forbidden" });
    }

    const grading = attempt.grading
      ? safeJsonParse<Record<string, unknown>>(
          attempt.grading as unknown as string,
          {}
        )
      : {};

    res.json({
      id: attempt.id,
      moduleId: attempt.moduleId ?? undefined,
      quizId: attempt.quizId,
      userId: attempt.userId,
      status: attempt.status,
      score: attempt.score,
      maxScore: attempt.maxScore,
      submittedAt: attempt.submittedAt ?? undefined,
      startedAt: attempt.startedAt ?? undefined,
      grading,
      // Resumen ya procesado: el front sólo lee `events` con esto.
      events: summarizeAttemptEvents(grading)
    });
  }
);

// F5-01 — Guardado incremental e idempotente de UNA respuesta.
//
// Regla del plan (ronda 6 K4): "es problema de la conexión de la escuela, no del
// alumno". El reproductor envía cada respuesta apenas se contesta; si la red está
// caída encola en localStorage y reintenta. Este endpoint hace UPSERT de
// `answers[questionId]` en el intento: la idempotencia es por (intento,
// questionId), así que reenviar la misma clave (reintento de la cola) NO duplica,
// sólo actualiza. No corrige nada — la corrección sigue en /submit, que ahora
// fusiona estas respuestas parciales con las del payload final.
quizAttempts.post(
  "/api/quiz-attempts/:id/answer",
  ...bodyLimitMB(1),
  requireUser,
  async (req, res) => {
    try {
      const payload = QuizAttemptAnswerSchema.parse(req.body);
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const userId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!userId) return res.status(401).json({ error: "user not found" });

      const attempt = (await prisma.quizAttempt.findFirst({
        where: { id: idParam, userId }
      })) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });

      // Un intento ya entregado/corregido no acepta más respuestas parciales: la
      // cola debe descartar este ítem (error terminal, no reintentable).
      if (attempt.submittedAt || attempt.status === "submitted" || attempt.status === "pending_review") {
        return res.status(409).json({ error: "attempt already submitted" });
      }

      const stored = safeJsonParse<Record<string, string | string[]>>(
        attempt.answers as unknown as string,
        {}
      );
      // Upsert idempotente por questionId.
      stored[payload.questionId] = payload.response;
      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: { answers: JSON.stringify(stored) }
      });

      return       res.json({
        ok: true,
        questionId: payload.questionId,
        answeredCount: Object.keys(stored).length
      });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

// F5-03 — Eventos informativos del intento (PATCH de flags en `grading`).
//
// Plan K5/L2: el docente debe VER qué pasó durante el intento, pero el
// sistema NO debe penalizar automáticamente. Este endpoint acepta un patch
// monotónico del contador de salidas de pestaña y lo fusiona en el JSON
// `grading` del intento (mismo canal que el canario de V2-04). NO toca
// score, status, ni items.
//
// PRIVACIDAD: el cliente NUNCA envía QUÉ pestaña/app se abrió, sólo el
// contador numérico. El navegador no expone esa información y F5-03
// mantiene esa garantía (ver `useFlushCounter` en el front).
//
// Idempotencia: el server hace merge monotónico (nunca decrementa). Si
// llegan PATCHes fuera de orden, gana el valor más alto visto. Esto
// elimina la necesidad de locks cliente y simplifica reintentos.
quizAttempts.patch(
  "/api/quiz-attempts/:id",
  ...bodyLimitMB(1),
  requireUser,
  async (req, res) => {
    try {
      const payload = QuizAttemptEventsPatchSchema.parse(req.body);
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const userId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!userId) return res.status(401).json({ error: "user not found" });

      const attempt = (await prisma.quizAttempt.findFirst({
        where: { id: idParam, userId }
      })) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });

      // Un intento ya entregado/corregido no acepta nuevos eventos: la
      // semántica es "registrar lo que pasó en el intento EN CURSO", no
      // modificar algo ya cerrado. El submit (que se ejecuta antes) puede
      // hacer su propio guardado del contador en el payload si lo necesita
      // en el futuro.
      if (
        attempt.submittedAt ||
        attempt.status === "submitted" ||
        attempt.status === "pending_review" ||
        attempt.status === "graded"
      ) {
        return res.status(409).json({ error: "attempt already closed" });
      }

      const currentGrading = safeJsonParse<Record<string, unknown>>(
        attempt.grading as unknown as string,
        {}
      );
      const nextGrading = mergeAttemptEvents(currentGrading, payload);
      const summary = summarizeAttemptEvents(nextGrading);

      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: { grading: JSON.stringify(nextGrading) }
      });

      // Devolvemos el resumen; el front lo usa para mostrar el panel
      // actualizado en la vista del docente (si está abierta) o sólo para
      // confirmar que el server lo guardó.
      res.json({
        ok: true,
        events: summary
      });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

quizAttempts.post(
  "/api/quiz-attempts/:id/submit",
  ...bodyLimitMB(2),
  requireUser,
  async (req, res) => {
    try {
      const payload = QuizAttemptSubmitSchema.parse(req.body);
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const userId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!userId) return res.status(401).json({ error: "user not found" });
      const attempt = await prisma.quizAttempt.findFirst({ where: { id: idParam, userId } }) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });
      const { quiz: collectionQuiz, version, module, versionMissing } = await fetchQuizFromCollections(
        attempt.quizId,
        attempt.moduleId ?? undefined,
        attempt.quizVersionId ?? undefined
      );
      if (versionMissing) {
        return res.status(409).json({
          error: "la versión del quiz de este intento ya no está disponible"
        });
      }
      const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);
      if (!quiz) return res.status(404).json({ error: "quiz not found" });

      // WO-3b — enforcar tiempo límite server-side.
      const submitQuizTipo = (() => {
        if (!version?.settings) return "practica";
        try {
          const p = JSON.parse(version.settings) as { type?: string };
          return p.type ?? "practica";
        } catch {
          return "practica";
        }
      })();
      const submitEvalConfig = parseEvaluacionConfig(version?.settings, submitQuizTipo);
      const tiempoCheck = validarTiempoLimite(
        attempt.startedAt as unknown as string,
        submitEvalConfig.timerSegundos
      );

      const normalizedQuizVersion = QuizVersionSchema.parse(
        version?.version ?? quiz?.generatorVersion ?? 1
      );
      // I-2 — construir el set de preguntas a corregir según el tipo de quiz:
      //  - Plantilla VBLang (`generatorId` = "plantilla:<id>"): el servidor
      //    REGENERA las preguntas desde el seed del intento y corrige contra SU
      //    materialización. `payload.generatedQuestions` deja de ser fuente de
      //    verdad (cierra el ataque de devtools).
      //  - generadoresV2 (otros `generatorId`): no materializable server-side
      //    (los generadores viven en apps/web); se mantiene el comportamiento
      //    previo pero el intento se marca serverAuthoritative=false.
      //  - Manual / banco (`quiz.questions`): están persistidas; si hubo pool/
      //    selección, el subconjunto presentado se acota (paso 3).
      // Se conserva la composición para el peso por defecto.
      const hasStoredQuestions = (quiz.questions?.length ?? 0) > 0;
      const generatorId = typeof quiz.generatorId === "string" ? quiz.generatorId : null;
      const isVblangTemplate =
        !hasStoredQuestions && generatorId !== null && generatorId.startsWith("plantilla:");
      const isGeneradorV2 =
        !hasStoredQuestions && generatorId !== null && !generatorId.startsWith("plantilla:");

      let gradingQuestions: ModuleQuiz["questions"];
      let serverAuthoritative = true;
      let mismatchQuestions: string[] = [];
      if (isVblangTemplate) {
        const resolved = await resolveVblangGrading(quiz, attempt, payload, generatorId!);
        gradingQuestions = resolved.gradingQuestions;
        serverAuthoritative = resolved.serverAuthoritative;
        mismatchQuestions = resolved.mismatchQuestions;
      } else if (isGeneradorV2) {
        // generadoresV2: la nota depende del cliente. No se bloquea (política de
        // producto para la tanda 2), sólo se marca para la UI del docente.
        serverAuthoritative = false;
        gradingQuestions = gradingQuestionsFromPayload(quiz, payload);
      } else {
        // F-2c — preguntas almacenadas. El subconjunto presentado se DERIVA
        // server-side desde `attempt.seed` + composición con el mismo algoritmo
        // del reproductor (`selectPoolIndices`, replicado en quiz-composition),
        // en vez de creerle a `payload.presentedIds`. Así un alumno no puede
        // declarar que sólo vio las preguntas que respondió bien.
        gradingQuestions = resolveStoredPresented(quiz, attempt, payload);
      }
      if (!serverAuthoritative || mismatchQuestions.length > 0) {
        // "loguear discrepancia" (mismo espíritu que el canario V2-04): visibilidad
        // de ops. El registro durable para el docente va en el `grading` JSON.
        console.warn(
          `[quiz-attempts] submit no server-autoritativo o con discrepancia: attempt=${idParam} ` +
            `quiz=${attempt.quizId} serverAuthoritative=${serverAuthoritative} ` +
            `mismatch=${mismatchQuestions.length}`
        );
      }
      // F5-01 — fusionar las respuestas YA guardadas incrementalmente (cola
      // offline / envío por pregunta) con las del payload final. Si la red se
      // cayó a mitad del quiz, las parciales persistidas en `attempt.answers`
      // siguen contando aunque el payload de /submit llegue incompleto. El
      // payload pisa al stored ante conflicto (es la versión más reciente que el
      // alumno vio). Mutamos `payload.answers` para que todo el flujo de
      // corrección y persistencia use la unión.
      const storedAnswers = safeJsonParse<Record<string, string | string[]>>(
        attempt.answers as unknown as string,
        {}
      );
      payload.answers = { ...storedAnswers, ...payload.answers };

      const gradingQuiz: ModuleQuiz = { ...quiz, questions: gradingQuestions };
      const { score, maxScore, manual } = gradeAnswers(gradingQuiz, payload.answers);
      const feedback = buildFeedback(gradingQuiz, payload.answers);

      // F5-03 — preservar los eventos informativos (counter de salidas de
      // pestaña) que el cliente PATCHeó durante la evaluación. El submit
      // construye el `grading` desde cero (canary, mismatch, items) y
      // sobrescribiría esos events. Leemos el `grading` previo y
      // arrastramos sólo la sub-llave `events` — preservando la garantía
      // de que el submit no inventa datos y los events PATCHeados
      // siguen visibles para el docente.
      const priorGrading = safeJsonParse<Record<string, unknown>>(
        attempt.grading as unknown as string,
        {}
      );
      const priorEvents =
        typeof priorGrading.events === "object" && priorGrading.events !== null
          ? (priorGrading.events as Record<string, unknown>)
          : null;

      // V2-04 — detección de canario. Si el alumno envío un canario
      // (answerKey del payload sanitizado que se filtró al frontend) como
      // respuesta, registramos el flag en `grading` y contamos la pregunta
      // como incorrecta (el canario nunca coincide con la respuesta real).
      // NO acusamos automáticamente: es info para el docente.
      const canaryQuestions: string[] = [];
      for (const [questionId, response] of Object.entries(payload.answers ?? {})) {
        if (Array.isArray(response)) {
          if (response.some((v) => isCanaryAnswer(v))) {
            canaryQuestions.push(questionId);
          }
        } else if (isCanaryAnswer(response)) {
          canaryQuestions.push(questionId);
        }
      }
      const canaryTriggered = canaryQuestions.length > 0;

      // WO07 — máquina de estados: si hay ítems `manual`, el intento queda
      // "pendiente de corrección" (pending_review) y no es nota final hasta que
      // el profe la corrija. Sin manuales, sigue siendo "submitted".
      const grading: AttemptGrading = {
        autoScore: score,
        items: {},
        // I-2 — la nota es server-autoritativa salvo generadoresV2 / plantilla
        // no materializable server-side (ver arriba).
        serverAuthoritative,
      };
      if (canaryTriggered) {
        grading.canaryTriggered = true;
        grading.canaryQuestions = canaryQuestions;
      }
      if (mismatchQuestions.length > 0) {
        // I-2 — el cliente afirmó answerKeys que no coinciden con lo regenerado:
        // indicador de manipulación (mismo canal que el canario). No bloquea.
        grading.materializationMismatch = true;
        grading.mismatchQuestions = mismatchQuestions;
      }
      // WO-3b — registrar si el intento se envió fuera de tiempo.
      if (tiempoCheck.exceeded) {
        grading.tiempoExcedido = true;
        grading.tiempoElapsedSec = tiempoCheck.elapsedSec;
        grading.tiempoLimiteSec = tiempoCheck.limitSec;
      }
      for (const { question, weight } of manual) {
        grading.items[question.id] = {
          prompt: question.prompt,
          points: weight,
          response: payload.answers[question.id],
          score: null
        };
      }
      // F5-03 — arrastrar los events (counter de salidas) si los había
      // PATCHeados. `grading` se serializa a JSON.stringify en la línea
      // siguiente, así que el sub-objeto pasa tal cual.
      if (priorEvents) {
        (grading as Record<string, unknown>).events = priorEvents;
      }
      const hasPendingManual = manual.length > 0;
      const status = hasPendingManual ? "pending_review" : "submitted";

      const updatedAt = new Date();
      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: {
          answers: JSON.stringify(payload.answers),
          feedback: JSON.stringify(feedback),
          grading: JSON.stringify(grading),
          status,
          score,
          maxScore,
          submittedAt: updatedAt.toISOString()
        }
      });
      // Obtener umbral del quiz o usar default 60
      const umbralRow = await prisma.quizUmbral.findUnique({
        where: { quizId: attempt.quizId },
        select: { umbral: true },
      });
      const umbral = umbralRow?.umbral ?? 60;
      // WO14 — convertir desde el ratio crudo (no desde el % redondeado) a la nota
      // de la escala. `aprobado` = passing de la escala (fuente de verdad del corte).
      const rawRatio = maxScore > 0 ? score / maxScore : null;
      const scoringConfig = resolveScoringConfig(module?.scoringConfig, umbral);
      const nota = gradeFromConfig(rawRatio, scoringConfig);
      const porcentaje = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
      const aprobado = nota.passing === true;

      // F5-04 — si hay ítems manuales pendientes, la nota ÚNICA no existe
      // todavía (las preguntas abiertas todavía no se corrigieron). En lugar
      // de un número único, el server calcula un RANGO honesto:
      //  - mín = la nota que tendría si las pendientes valen 0.
      //  - máx = la nota que tendría si las pendientes valen su peso pleno.
      // El rango se devuelve como `notaMin/MaxDisplay` + `notaMin/MaxCanonical10`.
      // `notaDisplay` y `aprobado` siguen ausentes/null: el sistema NO
      // presenta un valor único mientras haya pendientes (informar, no castigar).
      const pendingPoints = manual.map((m) => (typeof m.weight === "number" ? m.weight : 0));
      const gradeRange = hasPendingManual
        ? computeGradeRange(score, maxScore, pendingPoints, scoringConfig)
        : null;

      // WO07 — con ítems pendientes la nota aún no es final: no tocamos el
      // progreso formal hasta que el profe termine de corregir.
      if (hasPendingManual) {
        return res.json({
          status,
          score,
          maxScore,
          pendingManual: manual.length,
          // F5-04 — rango honesto: "tu nota está entre X e Y".
          notaMinDisplay: gradeRange?.minDisplay ?? null,
          notaMinCanonical10: gradeRange?.minCanonical10 ?? null,
          notaMaxDisplay: gradeRange?.maxDisplay ?? null,
          notaMaxCanonical10: gradeRange?.maxCanonical10 ?? null,
          // `notaDisplay` y `aprobado` quedan ausentes: el cliente sabe que
          // está en estado "pendiente" por la presencia de `pendingManual`
          // y por la ausencia de `notaDisplay`.
          message: `Respuestas enviadas. ${manual.length} pregunta(s) abierta(s) quedan pendientes de corrección por el profesor.`
        });
      }

      // Si es quiz formal y aprobó → actualizar progreso
      if (quiz.type === "formal" && aprobado && attempt.moduleId) {
        try {
          const progresoFilter = { usuarioId: userId, moduloId: attempt.moduleId };
          const existingProgreso = await prisma.progresoModulo.findFirst({ where: progresoFilter });
          if (existingProgreso) {
            await prisma.progresoModulo.update({
              where: { id: existingProgreso.id },
              data: { status: "completado", updatedAt: new Date().toISOString() }
            });
          } else {
            await prisma.progresoModulo.create({
              data: { ...progresoFilter, status: "completado", updatedAt: new Date().toISOString() }
            });
          }
        } catch { /* no bloquear el submit si falla */ }
      }

      // Si es formal y NO aprobó → marcar en_progreso
      if (quiz.type === "formal" && !aprobado && attempt.moduleId) {
        try {
          const progresoFilter = {
            usuarioId: userId,
            moduloId: attempt.moduleId,
            status: { not: "completado" }
          };
          const existingProgreso = await prisma.progresoModulo.findFirst({ where: progresoFilter });
          if (existingProgreso) {
            await prisma.progresoModulo.update({
              where: { id: existingProgreso.id },
              data: { status: "en_progreso", updatedAt: new Date().toISOString() }
            });
          } else {
            await prisma.progresoModulo.create({
              data: {
                usuarioId: userId,
                moduloId: attempt.moduleId,
                status: "en_progreso",
                updatedAt: new Date().toISOString()
              }
            });
          }
        } catch { /* ignorar */ }
      }

      // WO14 — maxScore = 0: no hay nota (no forzar "Desaprobado").
      // F4-03 — si `ocultarPuntos` está activo en `settings`, el `message` no
      // incluye el `(NN%)` para no leakear el puntaje crudo al alumno. El
      // cliente también gate del `Puntaje: X / Y` con el mismo flag, pero
      // acá lo limpiamos como defensa en profundidad (un alumno que vea el
      // `message` JSON directamente no debe ver el porcentaje).
      const ocultarPuntos = (() => {
        if (!version?.settings) return false;
        try {
          const parsed = JSON.parse(version.settings) as { ocultarPuntos?: unknown };
          return parsed.ocultarPuntos === true;
        } catch {
          return false;
        }
      })();
      const message =
        nota.passing === null
          ? "Respuestas enviadas. Este quiz no tiene ítems puntuables, no hay nota."
          : ocultarPuntos
            ? aprobado
              ? `¡Aprobado! Nota: ${nota.display}.`
              : `Nota: ${nota.display} — no alcanza para aprobar.`
            : aprobado
              ? `¡Aprobado! Nota: ${nota.display} (${porcentaje}%).`
              : `Nota: ${nota.display} (${porcentaje}%) — no alcanza para aprobar.`;
      const responseBody: Record<string, unknown> = {
        status: "submitted",
        score,
        maxScore,
        porcentaje,
        aprobado,
        umbral,
        notaDisplay: nota.display,
        notaCanonical10: nota.canonical10,
        // F4-03 — propagar el flag al cliente. Default false.
        ocultarPuntos,
        message
      };
      res.json(responseBody);
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

// WO07 — recomputa la nota a partir del estado de corrección: auto-score más
// el puntaje que el profe asignó a cada ítem manual. `allGraded` indica si ya
// no quedan ítems pendientes (el intento pasa a "corregido").
const recomputeFromGrading = (grading: AttemptGrading) => {
  let score = grading.autoScore;
  let allGraded = true;
  for (const item of Object.values(grading.items)) {
    if (item.score === null) {
      allGraded = false;
      continue;
    }
    score += item.score;
  }
  return { score, allGraded };
};

// WO14 — Reconciliación de umbral. `config.minPassingScore` (en la escala) es la
// única fuente de verdad del corte. Cuando el módulo trae un `scoringConfig` con
// un systemId del catálogo, ese gana. Si no (caso actual: no se persiste), se cae
// a `scale-0-100` con `minPassingScore` = QuizUmbral.umbral, preservando exactamente
// el comportamiento previo (aprobado ⇔ % ≥ umbral) pero ahora desde el ratio crudo.
const resolveScoringConfig = (
  scoringConfig: ScoringConfig | undefined,
  umbral: number
): ScoringConfig => {
  if (scoringConfig?.systemId && getScoringSystem(scoringConfig.systemId)) {
    return scoringConfig;
  }
  return { systemId: "scale-0-100", minPassingScore: String(umbral) };
};

// Progreso de un módulo cuando un quiz formal queda con nota final.
const updateFormalProgress = async (
  userId: string,
  moduloId: string,
  aprobado: boolean
) => {
  try {
    if (aprobado) {
      const existing = await prisma.progresoModulo.findFirst({
        where: { usuarioId: userId, moduloId }
      });
      if (existing) {
        await prisma.progresoModulo.update({
          where: { id: existing.id },
          data: { status: "completado", updatedAt: new Date().toISOString() }
        });
      } else {
        await prisma.progresoModulo.create({
          data: {
            usuarioId: userId,
            moduloId,
            status: "completado",
            updatedAt: new Date().toISOString()
          }
        });
      }
    } else {
      const existing = await prisma.progresoModulo.findFirst({
        where: { usuarioId: userId, moduloId, status: { not: "completado" } }
      });
      if (existing) {
        await prisma.progresoModulo.update({
          where: { id: existing.id },
          data: { status: "en_progreso", updatedAt: new Date().toISOString() }
        });
      } else {
        await prisma.progresoModulo.create({
          data: {
            usuarioId: userId,
            moduloId,
            status: "en_progreso",
            updatedAt: new Date().toISOString()
          }
        });
      }
    }
  } catch {
    /* no bloquear la corrección si falla el progreso */
  }
};

// POST /api/quiz-attempts/:id/grade
// WO07 — el profe (staff) corrige UN ítem `manual` asignando puntaje parcial
// (0..points) y feedback opcional. Recalcula la nota; cuando ya no quedan ítems
// pendientes, el intento pasa a "corregido" (status "graded").
quizAttempts.post(
  "/api/quiz-attempts/:id/grade",
  ...bodyLimitMB(1),
  requireUser,
  async (req, res) => {
    try {
      if (!isStaffRole(req.user?.role)) {
        return res.status(403).json({ error: "forbidden" });
      }
      const graderId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const payload = QuizAttemptGradeSchema.parse(req.body);

      const attempt = (await prisma.quizAttempt.findFirst({
        where: { id: idParam }
      })) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });

      const grading = safeJsonParse<AttemptGrading>(
        attempt.grading as unknown as string,
        { autoScore: typeof attempt.score === "number" ? attempt.score : 0, items: {} }
      );
      const item = grading.items[payload.questionId];
      if (!item) {
        return res.status(404).json({ error: "question not pending grading" });
      }

      // Puntaje parcial acotado a [0, points].
      const clamped = Math.max(0, Math.min(payload.score, item.points));
      item.score = clamped;
      if (payload.feedback !== undefined) item.feedback = payload.feedback;
      item.gradedAt = new Date().toISOString();
      item.gradedBy = graderId;

      const { score, allGraded } = recomputeFromGrading(grading);
      const status = allGraded ? "graded" : "pending_review";

      // Reflejar la corrección en el feedback que ve el alumno.
      const feedback = safeJsonParse<Record<string, QuizFeedback>>(
        attempt.feedback as unknown as string,
        {}
      );
      feedback[payload.questionId] = {
        correct: clamped >= item.points && item.points > 0,
        pending: false,
        response: item.response,
        explanation: item.feedback
      };

      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: {
          grading: JSON.stringify(grading),
          feedback: JSON.stringify(feedback),
          score,
          status
        }
      });

      const maxScore = typeof attempt.maxScore === "number" ? attempt.maxScore : 0;
      const porcentaje = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

      // WO14 — la nota final sólo se emite cuando el intento queda "corregido"
      // (allGraded). Mientras siga `pending_review` no hay nota final (provisional).
      let notaDisplay: string | null = null;
      let notaCanonical10: number | null = null;
      let aprobado: boolean | null = null;
      // F5-04 — rango honesto cuando SIGUE habiendo pendientes (allGraded=false).
      // Si el docente acaba de corregir el ÚLTIMO item, allGraded=true y
      // computamos la nota única como antes; no se muestra rango.
      let notaMinDisplay: string | null = null;
      let notaMinCanonical10: number | null = null;
      let notaMaxDisplay: string | null = null;
      let notaMaxCanonical10: number | null = null;

      // Al quedar "corregido", si es formal recién ahí impacta el progreso.
      if (allGraded) {
        const umbralRow = await prisma.quizUmbral.findUnique({
          where: { quizId: attempt.quizId },
          select: { umbral: true }
        });
        const umbral = umbralRow?.umbral ?? 60;
        const quizRecord = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
        // WO14 — misma conversión que en submit, sobre el score recalculado.
        const moduloRecord = quizRecord?.moduleId
          ? await prisma.modulo.findFirst({ where: { id: quizRecord.moduleId } })
          : null;
        const moduloScoringConfig = (moduloRecord as { scoringConfig?: ScoringConfig } | null)
          ?.scoringConfig;
        const rawRatio = maxScore > 0 ? score / maxScore : null;
        const nota = gradeFromConfig(rawRatio, resolveScoringConfig(moduloScoringConfig, umbral));
        notaDisplay = nota.display;
        notaCanonical10 = nota.canonical10;
        aprobado = nota.passing === true;
        if (quizRecord?.moduleId) {
          // El tipo del quiz vive en la colección Quiz/QuizVersion; corregimos
          // sólo módulos formales. Si no hay manera de saber el tipo, igual
          // recalculamos la nota (lo importante para WO07).
          await updateFormalProgress(attempt.userId, quizRecord.moduleId, aprobado);
        }
      } else {
        // F5-04 — calcular el rango de los ítems manuales que SIGUEN
        // pendientes. Recorremos `grading.items` y filtramos los que
        // tienen `score === null`.
        const pendingPoints: number[] = [];
        for (const item of Object.values(grading.items)) {
          if (item && item.score === null && typeof item.points === "number") {
            pendingPoints.push(item.points);
          }
        }
        if (pendingPoints.length > 0) {
          const umbralRow = await prisma.quizUmbral.findUnique({
            where: { quizId: attempt.quizId },
            select: { umbral: true }
          });
          const umbral = umbralRow?.umbral ?? 60;
          const quizRecord = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
          const moduloRecord = quizRecord?.moduleId
            ? await prisma.modulo.findFirst({ where: { id: quizRecord.moduleId } })
            : null;
          const moduloScoringConfig = (moduloRecord as { scoringConfig?: ScoringConfig } | null)
            ?.scoringConfig;
          const range = computeGradeRange(
            score,
            maxScore,
            pendingPoints,
            resolveScoringConfig(moduloScoringConfig, umbral)
          );
          notaMinDisplay = range.minDisplay;
          notaMinCanonical10 = range.minCanonical10;
          notaMaxDisplay = range.maxDisplay;
          notaMaxCanonical10 = range.maxCanonical10;
        }
      }

      return res.json({
        status,
        score,
        maxScore,
        porcentaje,
        questionId: payload.questionId,
        itemScore: clamped,
        allGraded,
        notaDisplay,
        notaCanonical10,
        aprobado,
        // F5-04 — campos de rango. Cuando allGraded=true, los 4 quedan null
        // (la nota única ya está en `notaDisplay`). El cliente los renderiza
        // condicionalmente por la presencia de `notaMinDisplay` no-null.
        notaMinDisplay,
        notaMinCanonical10,
        notaMaxDisplay,
        notaMaxCanonical10
      });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

// POST /api/quiz-attempts/:id/competencia
// Registrar resultado de modo competencia con tiempo
quizAttempts.post(
  "/api/quiz-attempts/:id/competencia",
  requireUser,
  async (req, res) => {
    const userId =
      typeof req.user?._id?.toString === "function"
        ? req.user._id.toString()
        : typeof req.user?.id === "string"
          ? req.user.id : "";
    if (!userId) return res.status(401).json({ error: "not authenticated" });

    const { score, maxScore, tiempoSeg, quizId, moduloId, aulaId } =
      req.body as Record<string, unknown>;

    if (typeof score !== "number" || typeof tiempoSeg !== "number") {
      return res.status(400).json({ error: "score y tiempoSeg requeridos" });
    }

    const id = `qc-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const now = new Date().toISOString();

    await prisma.quizCompetencia.create({
      data: {
        id,
        quizId: typeof quizId === "string" ? quizId : "",
        moduloId: typeof moduloId === "string" ? moduloId : null,
        aulaId: typeof aulaId === "string" ? aulaId : null,
        usuarioId: userId,
        attemptId: String(req.params.id),
        score,
        maxScore: typeof maxScore === "number" ? maxScore : score,
        tiempoSeg,
        completadoAt: now,
      },
    });

    return res.status(201).json({ id, ok: true });
  }
);

// GET /api/quiz-attempts/competencia/:quizId/ranking
// Tabla de posiciones para un quiz
quizAttempts.get(
  "/api/quiz-attempts/competencia/:quizId/ranking",
  requireUser,
  async (req, res) => {
    const quizId = Array.isArray(req.params.quizId)
      ? req.params.quizId[0]
      : req.params.quizId;
    const aulaId = typeof req.query.aulaId === "string"
      ? req.query.aulaId : null;

    const grouped = await prisma.quizCompetencia.groupBy({
      by: ["usuarioId"],
      where: {
        quizId,
        ...(aulaId ? { aulaId } : {}),
      },
      _min: { tiempoSeg: true, completadoAt: true },
      _max: { score: true, maxScore: true },
      orderBy: { _max: { score: "desc" } },
      take: 20,
    });

    // Secondary sort by mejor_tiempo ASC
    grouped.sort((a: (typeof grouped)[number], b: (typeof grouped)[number]) => {
      const scoreDiff = (b._max.score ?? 0) - (a._max.score ?? 0);
      if (scoreDiff !== 0) return scoreDiff;
      return (a._min.tiempoSeg ?? 0) - (b._min.tiempoSeg ?? 0);
    });

    const userIds = grouped.map((r) => r.usuarioId);
    const usuarios = userIds.length
      ? await prisma.usuario.findMany({
          where: { id: { in: userIds }, isDeleted: { not: true } },
          select: { id: true, fullName: true, username: true },
        })
      : [];

    const usuarioMap = new Map(
      usuarios.map((u) => [String(u.id ?? ""), String(u.fullName ?? u.username ?? "Alumno")])
    );

    const ranking = grouped.map((r, index) => ({
      posicion: index + 1,
      usuarioId: r.usuarioId,
      nombre: usuarioMap.get(r.usuarioId) ?? "Alumno",
      score: r._max.score ?? 0,
      maxScore: r._max.maxScore ?? 0,
      tiempoSeg: r._min.tiempoSeg ?? 0,
      completadoAt: r._min.completadoAt ?? "",
    }));

    return res.json({ quizId, aulaId, ranking });
  }
);
