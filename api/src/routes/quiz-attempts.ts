import express, { Router } from "express";
import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma";
import {
  ENTERPRISE_FEATURES,
  requireActiveInstitutionBenefit,
  requireEnterpriseFeature
} from "../lib/entitlements";
import { requireUser } from "../lib/user-auth";
import {
  QuizAttemptCreateSchema,
  QuizAttemptGradeSchema,
  QuizAttemptSubmitSchema,
  QuizVersionSchema
} from "../schema/quiz-attempt";
import { isStaffRole } from "../lib/authorization";

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
  moduleId?: string
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
  const module: ModuleWithQuizzes | null = moduloRecord
    ? { id: moduloRecord.id, title: moduloRecord.titulo }
    : null;

  if (!metadata) return { quiz: null, module };

  const versionRecord = quizRecord?.currentVersionId
    ? await prisma.quizVersion.findFirst({ where: { id: quizRecord.currentVersionId } })
    : null;

  const version: QuizVersionRecord | null = versionRecord
    ? {
        id: versionRecord.id,
        quizId: versionRecord.quizId,
        version: versionRecord.versionNumber,
        questions: versionRecord.questions as unknown as ModuleQuiz["questions"],
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
  return { quiz, module, metadata, version };
};

const gradeNumeric = (
  response: string,
  expected: string,
  toleranciaRelativa: number
): boolean => {
  const r = parseFloat(response.replace(/,/g, "."));
  const e = parseFloat(expected.replace(/,/g, "."));
  if (Number.isNaN(r) || Number.isNaN(e)) return false;
  if (e === 0) return r === 0;
  return Math.abs(r - e) <= Math.abs(e) * toleranciaRelativa;
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
      const correct = tol !== undefined && tol > 0
        ? gradeNumeric(response, expected, tol)
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
      correct = tol !== undefined && tol > 0
        ? gradeNumeric(response, expected, tol)
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

quizAttempts.post(
  "/api/quiz-attempts",
  ...bodyLimitMB(2),
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requireActiveInstitutionBenefit,
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
    res
      .status(201)
      .json({ id: result.id, attemptId: result.id });
  } catch (error: any) {
    res.status(400).json({ error: error?.message ?? "invalid payload" });
  }
  }
);

// GET /api/quiz-attempts/pending-grading
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
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requireActiveInstitutionBenefit,
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
  const { quiz: collectionQuiz, metadata, module } = await fetchQuizFromCollections(
    attempt.quizId,
    attempt.moduleId ?? undefined
  );
  const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);
  res.json({
    id: attempt.id,
    attemptId: attempt.id,
    moduleId: attempt.moduleId ?? undefined,
    quizId: attempt.quizId,
    quizTitle: quiz?.title ?? metadata?.title ?? module?.title ?? "Quiz",
    status: attempt.status,
    questions: quiz?.questions ?? [],
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
    quiz: quiz ? { title: quiz.title, questions: quiz.questions ?? [] } : undefined,
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

quizAttempts.post(
  "/api/quiz-attempts/:id/submit",
  ...bodyLimitMB(2),
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.QUIZZES),
  requireActiveInstitutionBenefit,
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
      const { quiz: collectionQuiz, version, module } = await fetchQuizFromCollections(
        attempt.quizId,
        attempt.moduleId ?? undefined
      );
      const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);
      if (!quiz) return res.status(404).json({ error: "quiz not found" });
      const normalizedQuizVersion = QuizVersionSchema.parse(
        version?.version ?? quiz?.generatorVersion ?? 1
      );
      // Construir el set de preguntas a corregir:
      //  - Generado / plantilla VBLang: no hay preguntas persistidas; las
      //    materializa el cliente y las manda en `generatedQuestions`.
      //  - Manual / banco: están en quiz.questions; si el reproductor presentó
      //    un subconjunto (pool/azar/elige_alumno), `presentedIds` lo acota.
      // Se conserva la composición para el peso por defecto.
      const hasStoredQuestions = (quiz.questions?.length ?? 0) > 0;
      const presentedSet =
        payload.presentedIds && payload.presentedIds.length > 0
          ? new Set(payload.presentedIds)
          : null;
      let gradingQuestions: ModuleQuiz["questions"];
      if (!hasStoredQuestions && payload.generatedQuestions && payload.generatedQuestions.length > 0) {
        gradingQuestions = payload.generatedQuestions;
      } else if (presentedSet) {
        gradingQuestions = (quiz.questions ?? []).filter((q) => presentedSet.has(q.id));
      } else {
        gradingQuestions = quiz.questions;
      }
      const gradingQuiz: ModuleQuiz = { ...quiz, questions: gradingQuestions };
      const { score, maxScore, manual } = gradeAnswers(gradingQuiz, payload.answers);
      const feedback = buildFeedback(gradingQuiz, payload.answers);

      // WO07 — máquina de estados: si hay ítems `manual`, el intento queda
      // "pendiente de corrección" (pending_review) y no es nota final hasta que
      // el profe corrija. Sin manuales, sigue siendo "submitted".
      const grading: AttemptGrading = { autoScore: score, items: {} };
      for (const { question, weight } of manual) {
        grading.items[question.id] = {
          prompt: question.prompt,
          points: weight,
          response: payload.answers[question.id],
          score: null
        };
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
      const porcentaje = maxScore > 0
        ? Math.round((score / maxScore) * 100) : 0;
      const aprobado = porcentaje >= umbral;

      // WO07 — con ítems pendientes la nota aún no es final: no tocamos el
      // progreso formal hasta que el profe termine de corregir.
      if (hasPendingManual) {
        return res.json({
          status,
          score,
          maxScore,
          pendingManual: manual.length,
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

      res.json({
        status: "submitted",
        score,
        maxScore,
        porcentaje,
        aprobado,
        umbral,
        message: aprobado
          ? `¡Aprobado! ${porcentaje}% — superaste el umbral de ${umbral}%.`
          : `${porcentaje}% — necesitás al menos ${umbral}% para aprobar.`,
      });
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

      // Al quedar "corregido", si es formal recién ahí impacta el progreso.
      if (allGraded) {
        const quizRecord = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
        if (quizRecord?.moduleId) {
          const umbralRow = await prisma.quizUmbral.findUnique({
            where: { quizId: attempt.quizId },
            select: { umbral: true }
          });
          const umbral = umbralRow?.umbral ?? 60;
          const aprobado = porcentaje >= umbral;
          // El tipo del quiz vive en la colección Quiz/QuizVersion; corregimos
          // sólo módulos formales. Si no hay manera de saber el tipo, igual
          // recalculamos la nota (lo importante para WO07).
          await updateFormalProgress(attempt.userId, quizRecord.moduleId, aprobado);
        }
      }

      return res.json({
        status,
        score,
        maxScore,
        porcentaje,
        questionId: payload.questionId,
        itemScore: clamped,
        allGraded
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
