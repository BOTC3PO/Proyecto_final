import express, { Router } from "express";
import type { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
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
  questions?: Array<{
    id: string;
    answerKey?: string | string[];
  }>;
  count?: number;
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

type QuizAttemptRecord = {
  _id: ObjectId;
  moduleId: string;
  quizId: string;
  quizVersion: number;
  userId: string;
  seed: number | string | null;
  answers: Record<string, string | string[]>;
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

export const quizAttempts = Router();

quizAttempts.post("/api/quiz-attempts", ...bodyLimitMB(2), requireUser, async (req, res) => {
  try {
    const payload = QuizAttemptCreateSchema.parse(req.body);
    const db = await getDb();
    const module = (await db.collection("modulos").findOne({ id: payload.moduleId })) as
      | ModuleWithQuizzes
      | null;
    if (!module) return res.status(404).json({ error: "module not found" });
    const quiz = findQuiz(module, payload.quizId);
    if (!quiz) return res.status(404).json({ error: "quiz not found" });
    const quizVersionSource = quiz.generatorVersion ?? 1;
    const quizVersion = QuizVersionSchema.parse(quizVersionSource);
    const userId =
      typeof req.user?._id?.toString === "function"
        ? req.user._id.toString()
        : typeof req.user?.id === "string"
          ? req.user.id
          : "";
    if (!userId) return res.status(401).json({ error: "user not found" });
    const now = new Date();
    const attempt = {
      moduleId: payload.moduleId,
      quizId: payload.quizId,
      quizVersion,
      userId,
      seed: buildSeed(quiz),
      answers: {},
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
});

quizAttempts.get("/api/quiz-attempts/:id", requireUser, async (req, res) => {
  const attemptObjectId = toObjectId(req.params.id);
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
  const module = (await db.collection("modulos").findOne({ id: attempt.moduleId })) as
    | ModuleWithQuizzes
    | null;
  const quiz = findQuiz(module, attempt.quizId);
  res.json({
    id: attempt._id.toString(),
    attemptId: attempt._id.toString(),
    moduleId: attempt.moduleId,
    quizId: attempt.quizId,
    quizTitle: quiz?.title ?? module?.title ?? "Quiz",
    status: attempt.status,
    questions: quiz?.questions ?? [],
    answers: attempt.answers,
    quiz: quiz ? { title: quiz.title, questions: quiz.questions ?? [] } : undefined
  });
});

quizAttempts.post(
  "/api/quiz-attempts/:id/submit",
  ...bodyLimitMB(2),
  requireUser,
  async (req, res) => {
    try {
      const payload = QuizAttemptSubmitSchema.parse(req.body);
      const attemptObjectId = toObjectId(req.params.id);
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
      const module = (await db.collection("modulos").findOne({ id: attempt.moduleId })) as
        | ModuleWithQuizzes
        | null;
      const quiz = findQuiz(module, attempt.quizId);
      const normalizedQuizVersion = QuizVersionSchema.parse(
        attempt.quizVersion ?? quiz?.generatorVersion ?? 1
      );
      const { score, maxScore } = gradeAnswers(quiz, payload.answers);
      const updatedAt = new Date();
      await db.collection("quiz_attempts").updateOne(
        { _id: attemptObjectId },
        {
          $set: {
            answers: payload.answers,
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
