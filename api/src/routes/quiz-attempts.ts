import express, { Router } from "express";
import type { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
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
  _id: ObjectId;
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
    const attempt = {
      moduleId: resolvedModuleId,
      quizId: payload.quizId,
      quizVersion,
      userId,
      seed: buildSeed(quiz),
      answers: {},
      feedback: {},
      score: 0,
      maxScore: quiz.questions?.length ?? quiz.count ?? 0,
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
    quiz: quiz ? { title: quiz.title, questions: quiz.questions ?? [] } : undefined
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
      res.json({
        status: "submitted",
        score,
        maxScore,
        message: "Respuestas enviadas para corrección."
      });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);
