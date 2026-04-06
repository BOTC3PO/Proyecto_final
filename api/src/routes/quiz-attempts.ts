import express, { Router } from "express";
import { getDb } from "../lib/db";
import { openContentDb } from "../lib/db-open";
import {
  ENTERPRISE_FEATURES,
  requireActiveInstitutionBenefit,
  requireEnterpriseFeature
} from "../lib/entitlements";
import { toObjectId } from "../lib/ids";
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
  quizId?: string;
  version?: number;
  questions?: ModuleQuiz["questions"];
  generatorId?: string;
  generatorVersion?: number | string;
  params?: Record<string, unknown>;
  count?: number;
  seedPolicy?: string;
  fixedSeed?: string | number;
};

type QuizFeedback = {
  correct: boolean;
  expected?: string | string[];
  response?: string | string[];
  explanation?: string;
};

type QuizAttemptRecord = {
  _id: string;
  moduleId: string | null;
  quizId: string;
  quizVersion: number;
  userId: string;
  seed: number | string | null;
  answers: Record<string, string | string[]>;
  feedback?: Record<string, QuizFeedback>;
  score: number;
  maxScore: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
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
    seedPolicy: version?.seedPolicy,
    fixedSeed: version?.fixedSeed
  };
  return quiz;
};

const fetchQuizFromCollections = async (
  db: Awaited<ReturnType<typeof getDb>>,
  quizId: string,
  moduleId?: string
) => {
  const metadata = (await db
    .collection("quizzes")
    .findOne({ id: quizId })) as QuizMetadataRecord | null;
  const module = moduleId
    ? ((await db.collection("modulos").findOne({ id: moduleId })) as ModuleWithQuizzes | null)
    : null;
  if (!metadata) return { quiz: null, module };
  const versionToUse = metadata.currentVersion ?? 1;
  const version = (await db
    .collection("quiz_versions")
    .findOne({ quizId, version: versionToUse })) as QuizVersionRecord | null;
  const quiz = buildQuizFromCollection(metadata, version);
  return { quiz, module, metadata, version };
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
    if (typeof response === "string" && response === expected) {
      score += 1;
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
      correct = response === expected;
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
  db: Awaited<ReturnType<typeof getDb>>,
  generatorId: string,
  params: Record<string, unknown>,
  count: number,
  seed: number | string
): Promise<GeneratedQuestion[]> {
  const config = await db
    .collection("generator_configs")
    .findOne({ id: generatorId });
  if (!config) return [];

  const subtipos = (() => {
    try {
      const all = JSON.parse(String(config.subtipos ?? "[]")) as Array<{
        id: string; label: string; activo?: boolean;
      }>;
      return all.filter((s) => s.activo !== false);
    } catch { return []; }
  })();

  if (subtipos.length === 0) return [];

  // PRNG determinístico basado en el seed
  let state = typeof seed === "number"
    ? seed >>> 0
    : String(seed).split("").reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 0) >>> 0;

  const nextRand = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };

  const subtipo = typeof params?.subtipo === "string"
    ? params.subtipo
    : subtipos[Math.floor(nextRand() * subtipos.length)]?.id ?? subtipos[0].id;

  // Generar N preguntas placeholder con el subtipo y seed
  // El contenido real lo genera el cliente con generadoresV2
  // Acá solo persistimos el esqueleto para que el attempt tenga
  // maxScore correcto y el scoring pueda recibir las preguntas del cliente
  return Array.from({ length: count }, (_, i) => ({
    id: `${generatorId}/${subtipo}/${seed}/${i}`,
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
    const db = await getDb();
    const module = payload.moduleId
      ? ((await db.collection("modulos").findOne({ id: payload.moduleId })) as
          | ModuleWithQuizzes
          | null)
      : null;
    const { quiz: collectionQuiz, metadata, version } = await fetchQuizFromCollections(
      db,
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
        db,
        quiz.generatorId,
        (payload as Record<string, unknown>).params as Record<string, unknown> ?? {},
        generatedCount,
        seed ?? 0
      );
      maxScore = generatedCount;
    }
    const attempt = {
      moduleId: resolvedModuleId,
      quizId: payload.quizId,
      quizVersion,
      userId,
      seed,
      answers: {},
      feedback: {},
      score: 0,
      maxScore,
      status: "in_progress",
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("quiz_attempts").insertOne(attempt);
    res
      .status(201)
      .json({ id: result.insertedId.toString(), attemptId: result.insertedId.toString() });
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
  const attemptObjectId = toObjectId(idParam);
  if (!attemptObjectId) return res.status(400).json({ error: "invalid attempt id" });
  const userId =
    typeof req.user?._id?.toString === "function"
      ? req.user._id.toString()
      : typeof req.user?.id === "string"
        ? req.user.id
        : "";
  if (!userId) return res.status(401).json({ error: "user not found" });
  const db = await getDb();
  const attempt = (await db
    .collection("quiz_attempts")
    .findOne({ _id: attemptObjectId, userId })) as QuizAttemptRecord | null;
  if (!attempt) return res.status(404).json({ error: "attempt not found" });
  const { quiz: collectionQuiz, metadata, module } = await fetchQuizFromCollections(
    db,
    attempt.quizId,
    attempt.moduleId ?? undefined
  );
  const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);
  res.json({
    id: attempt._id.toString(),
    attemptId: attempt._id.toString(),
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
      const attemptObjectId = toObjectId(idParam);
      if (!attemptObjectId) return res.status(400).json({ error: "invalid attempt id" });
      const userId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!userId) return res.status(401).json({ error: "user not found" });
      const db = await getDb();
      const attempt = (await db
        .collection("quiz_attempts")
        .findOne({ _id: attemptObjectId, userId })) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });
      const { quiz: collectionQuiz, version, module } = await fetchQuizFromCollections(
        db,
        attempt.quizId,
        attempt.moduleId ?? undefined
      );
      const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);
      if (!quiz) return res.status(404).json({ error: "quiz not found" });
      const normalizedQuizVersion = QuizVersionSchema.parse(
        attempt.quizVersion ?? version?.version ?? quiz?.generatorVersion ?? 1
      );
      const { score, maxScore } = gradeAnswers(quiz, payload.answers);
      const feedback = buildFeedback(quiz, payload.answers);
      const updatedAt = new Date();
      await db.collection("quiz_attempts").updateOne(
        { _id: attemptObjectId },
        {
          $set: {
            answers: payload.answers,
            feedback,
            status: "submitted",
            score,
            maxScore,
            quizVersion: normalizedQuizVersion,
            updatedAt
          }
        }
      );
      // Obtener umbral del quiz (SQLite) o usar default 60
      const sqliteDb = openContentDb();
      const umbralRow = sqliteDb.prepare(
        "SELECT umbral FROM quiz_umbrales WHERE quiz_id = ?"
      ).get(attempt.quizId) as { umbral: number } | undefined;

      const umbral = umbralRow?.umbral ?? 60;
      const porcentaje = maxScore > 0
        ? Math.round((score / maxScore) * 100) : 0;
      const aprobado = porcentaje >= umbral;

      // Si es quiz formal y aprobó → actualizar progreso
      if (quiz.type === "formal" && aprobado && attempt.moduleId) {
        try {
          await db.collection("progreso_modulos").updateOne(
            { usuarioId: userId, moduloId: attempt.moduleId },
            {
              $set: {
                status: "completado",
                updatedAt: new Date().toISOString(),
              }
            },
            { upsert: true }
          );
        } catch { /* no bloquear el submit si falla */ }
      }

      // Si es formal y NO aprobó → marcar en_progreso
      if (quiz.type === "formal" && !aprobado && attempt.moduleId) {
        try {
          await db.collection("progreso_modulos").updateOne(
            {
              usuarioId: userId,
              moduloId: attempt.moduleId,
              status: { $ne: "completado" }
            },
            {
              $set: {
                status: "en_progreso",
                updatedAt: new Date().toISOString(),
              }
            },
            { upsert: true }
          );
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

    const db = openContentDb();
    const id = `qc-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO quiz_competencia
        (id, quiz_id, modulo_id, aula_id, usuario_id, attempt_id,
         score, max_score, tiempo_seg, completado_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      typeof quizId === "string" ? quizId : "",
      typeof moduloId === "string" ? moduloId : null,
      typeof aulaId === "string" ? aulaId : null,
      userId,
      req.params.id,
      score,
      typeof maxScore === "number" ? maxScore : score,
      tiempoSeg,
      now
    );

    return res.status(201).json({ id, ok: true });
  }
);

// GET /api/quiz-attempts/competencia/:quizId/ranking
// Tabla de posiciones para un quiz
quizAttempts.get(
  "/api/quiz-attempts/competencia/:quizId/ranking",
  requireUser,
  async (req, res) => {
    const db = openContentDb();
    const quizId = Array.isArray(req.params.quizId)
      ? req.params.quizId[0]
      : req.params.quizId;
    const aulaId = typeof req.query.aulaId === "string"
      ? req.query.aulaId : null;

    let query = `
      SELECT
        qc.usuario_id,
        qc.score,
        qc.max_score,
        qc.tiempo_seg,
        qc.completado_at,
        MIN(qc.tiempo_seg) as mejor_tiempo,
        MAX(qc.score) as mejor_score
      FROM quiz_competencia qc
      WHERE qc.quiz_id = ?
    `;
    const params: (string | null)[] = [quizId];

    if (aulaId) {
      query += " AND qc.aula_id = ?";
      params.push(aulaId);
    }

    query += `
      GROUP BY qc.usuario_id
      ORDER BY mejor_score DESC, mejor_tiempo ASC
      LIMIT 20
    `;

    const rows = db.prepare(query).all(...params) as Array<{
      usuario_id: string;
      score: number;
      max_score: number;
      tiempo_seg: number;
      completado_at: string;
      mejor_tiempo: number;
      mejor_score: number;
    }>;

    // Enriquecer con nombres de usuarios desde MongoDB
    try {
      const mongoDB = await getDb();
      const userIds = rows.map((r) => r.usuario_id);
      const usuarios = userIds.length
        ? await mongoDB.collection("usuarios").find({
            $or: [
              { id: { $in: userIds } },
              { _id: { $in: userIds } },
            ],
            isDeleted: { $ne: true },
          }).project({ id: 1, _id: 1, fullName: 1, username: 1 })
          .toArray()
        : [];

      const usuarioMap = new Map(
        usuarios.map((u) => [
          String(u.id ?? u._id ?? ""),
          String(u.fullName ?? u.username ?? "Alumno"),
        ])
      );

      const ranking = rows.map((r, index) => ({
        posicion: index + 1,
        usuarioId: r.usuario_id,
        nombre: usuarioMap.get(r.usuario_id) ?? "Alumno",
        score: r.mejor_score,
        maxScore: r.max_score,
        tiempoSeg: r.mejor_tiempo,
        completadoAt: r.completado_at,
      }));

      return res.json({ quizId, aulaId, ranking });
    } catch {
      // Si MongoDB falla, devolver sin nombres
      const ranking = rows.map((r, index) => ({
        posicion: index + 1,
        usuarioId: r.usuario_id,
        nombre: "Alumno",
        score: r.mejor_score,
        maxScore: r.max_score,
        tiempoSeg: r.mejor_tiempo,
        completadoAt: r.completado_at,
      }));
      return res.json({ quizId, aulaId, ranking });
    }
  }
);
