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
  QuizAttemptSubmitSchema,
  QuizVersionSchema
} from "../schema/quiz-attempt";

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
  }>;
  count?: number;
  seedPolicy?: string;
  fixedSeed?: string | number;
  generatorId?: string;
  generatorVersion?: number | string;
  instructions?: string;
  displayCount?: number;
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
};

type QuizFeedback = {
  correct: boolean;
  expected?: string | string[];
  response?: string | string[];
  explanation?: string;
};

type QuizAttemptRecord = {
  id: string;
  moduleId: string | null;
  quizId: string;
  quizVersionId: string | null;
  userId: string;
  seed: number | string | null;
  answers: Record<string, string | string[]>;
  feedback?: Record<string, QuizFeedback>;
  score: number;
  maxScore: number;
  status: string;
  startedAt: Date;
  submittedAt: Date | null;
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

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

const gradeAnswers = (
  quiz: ModuleQuiz | null,
  answers: Record<string, string | string[]>
) => {
  const questions = quiz?.questions ?? [];
  const maxScore = questions.length;
  if (maxScore === 0) return { score: 0, maxScore };
  let score = 0;
  for (const question of questions) {
    const expected = question.answerKey;
    if (!expected) continue;
    const response = answers[question.id];
    if (Array.isArray(expected)) {
      if (!Array.isArray(response)) continue;
      const expectedSet = new Set(expected);
      const responseSet = new Set(response);
      if (expectedSet.size !== responseSet.size) continue;
      const matches = Array.from(expectedSet).every((value) => responseSet.has(value));
      if (matches) score += 1;
      continue;
    }
    if (typeof response === "string") {
      const tol = question.toleranciaRelativa;
      const correct = tol !== undefined && tol > 0
        ? gradeNumeric(response, expected, tol)
        : response === expected;
      if (correct) score += 1;
    }
  }
  return { score, maxScore };
};

const buildFeedback = (
  quiz: ModuleQuiz | null,
  answers: Record<string, string | string[]>
) => {
  const feedback: Record<string, QuizFeedback> = {};
  const questions = quiz?.questions ?? [];
  for (const question of questions) {
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
    const result = await prisma.quizAttempt.create({
      data: {
        id: randomUUID(),
        quizId: payload.quizId,
        quizVersionId: version?.id ?? "",
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
    answers: attempt.answers,
    feedback: attempt.feedback ?? {},
    quiz: quiz ? { title: quiz.title, questions: quiz.questions ?? [] } : undefined,
    generatorId: quiz?.generatorId ?? undefined,
    seed: attempt.seed ?? undefined,
    count: quiz?.count ?? undefined,
    instructions: quiz?.instructions ?? undefined,
    displayCount: quiz?.displayCount ?? undefined,
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
      const { score, maxScore } = gradeAnswers(quiz, payload.answers);
      const feedback = buildFeedback(quiz, payload.answers);
      const updatedAt = new Date();
      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: {
          answers: JSON.stringify(payload.answers),
          feedback: JSON.stringify(feedback),
          status: "submitted",
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
