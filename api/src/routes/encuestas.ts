import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { assertClassroomWritable } from "../lib/classroom";
import { SurveyBaseSchema, SurveySchema } from "../schema/encuesta";

export const encuestas = Router();

const SurveyUpdateSchema = SurveyBaseSchema.partial().omit({ id: true, createdAt: true, createdBy: true });

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const requireAulaId = (req: express.Request, res: express.Response) => {
  const aulaId = req.query.aulaId;
  if (typeof aulaId !== "string" || !aulaId.trim()) {
    res.status(400).json({ error: "aulaId is required" });
    return null;
  }
  return aulaId;
};

encuestas.get("/api/encuestas", async (req, res) => {
  const aulaId = requireAulaId(req, res);
  if (!aulaId) return;
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("encuestas")
    .find({ classroomId: aulaId })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

encuestas.get("/api/encuestas/:id", async (req, res) => {
  const aulaId = requireAulaId(req, res);
  if (!aulaId) return;
  const db = await getDb();
  const item = await db.collection("encuestas").findOne({ id: req.params.id, classroomId: aulaId });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});

encuestas.post("/api/encuestas", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const now = new Date().toISOString();
    const payload = {
      ...req.body,
      status: req.body?.status ?? "activa",
      createdAt: req.body?.createdAt ?? now,
      updatedAt: req.body?.updatedAt ?? now
    };
    const parsed = SurveySchema.parse(payload);
    const db = await getDb();
    const classroom = await db
      .collection<{ status?: unknown }>("aulas")
      .findOne({ id: parsed.classroomId }, { projection: { status: 1 } });
    if (!classroom) return res.status(400).json({ error: "classroom not found" });
    if (!assertClassroomWritable(res, classroom)) {
      return;
    }
    const result = await db.collection("encuestas").insertOne(parsed);
    res.status(201).json({ id: result.insertedId, surveyId: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.put("/api/encuestas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = SurveyUpdateSchema.parse(req.body);
    const db = await getDb();
    const survey = await db.collection("encuestas").findOne({ id: req.params.id });
    if (!survey) return res.status(404).json({ error: "not found" });
    const classroom = await db
      .collection<{ status?: unknown }>("aulas")
      .findOne({ id: survey.classroomId }, { projection: { status: 1 } });
    if (!classroom) return res.status(404).json({ error: "classroom not found" });
    if (!assertClassroomWritable(res, classroom)) {
      return;
    }
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    await db.collection("encuestas").updateOne({ id: req.params.id }, { $set: update });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.patch("/api/encuestas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = SurveyUpdateSchema.parse(req.body);
    const db = await getDb();
    const survey = await db.collection("encuestas").findOne({ id: req.params.id });
    if (!survey) return res.status(404).json({ error: "not found" });
    const classroom = await db
      .collection<{ status?: unknown }>("aulas")
      .findOne({ id: survey.classroomId }, { projection: { status: 1 } });
    if (!classroom) return res.status(404).json({ error: "classroom not found" });
    if (!assertClassroomWritable(res, classroom)) {
      return;
    }
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    await db.collection("encuestas").updateOne({ id: req.params.id }, { $set: update });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.delete("/api/encuestas/:id", async (req, res) => {
  const db = await getDb();
  const survey = await db.collection("encuestas").findOne({ id: req.params.id });
  if (!survey) return res.status(404).json({ error: "not found" });
  const classroom = await db
    .collection<{ status?: unknown }>("aulas")
    .findOne({ id: survey.classroomId }, { projection: { status: 1 } });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });
  if (!assertClassroomWritable(res, classroom)) {
    return;
  }
  const result = await db.collection("encuestas").deleteOne({ id: req.params.id });
  if (result.deletedCount === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

encuestas.post("/api/encuestas/:id/votos", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  const aulaId = req.body?.aulaId;
  if (typeof aulaId !== "string" || !aulaId.trim()) {
    return res.status(400).json({ error: "aulaId is required" });
  }
  const usuarioId = req.header("x-usuario-id");
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "x-usuario-id header is required" });
  }
  try {
    const db = await getDb();
    const classroom = await db
      .collection<{ status?: unknown }>("aulas")
      .findOne({ id: aulaId }, { projection: { status: 1 } });
    if (!classroom) return res.status(404).json({ error: "classroom not found" });
    if (!assertClassroomWritable(res, classroom)) {
      return;
    }
    const survey = await db.collection("encuestas").findOne({ id: req.params.id, classroomId: aulaId });
    if (!survey) return res.status(404).json({ error: "not found" });
    const optionList = (survey.options ?? []) as Array<{ id: string; label: string }>;
    const optionIds = new Set(optionList.map((option) => option.id));
    if (survey.status === "cerrada" || survey.status === "archivada") {
      return res.status(400).json({ error: "survey closed" });
    }
    const now = new Date();
    if (now < new Date(survey.startAt) || now >= new Date(survey.endAt)) {
      return res.status(400).json({ error: "survey inactive" });
    }
    const existingVote = await db
      .collection("encuestas_respuestas")
      .findOne({ surveyId: survey.id, classroomId: aulaId, usuarioId });
    if (existingVote) return res.status(409).json({ error: "already voted" });
    if (survey.type === "normal") {
      const optionId = req.body?.optionId;
      if (typeof optionId !== "string" || !optionId.trim()) {
        return res.status(400).json({ error: "optionId is required" });
      }
      if (!optionIds.has(optionId)) return res.status(400).json({ error: "option not found" });
      await db.collection("encuestas_respuestas").insertOne({
        surveyId: survey.id,
        classroomId: aulaId,
        usuarioId,
        optionId,
        createdAt: new Date().toISOString()
      });
    } else if (survey.type === "puntuacion") {
      const scores = Array.isArray(req.body?.scores) ? req.body.scores : null;
      if (!scores || scores.length === 0) {
        return res.status(400).json({ error: "scores are required" });
      }
      const parsedScores: Array<{ optionId: string; score: number }> = [];
      const usedOptions = new Set<string>();
      for (const item of scores) {
        if (typeof item?.optionId !== "string" || !item.optionId.trim()) {
          return res.status(400).json({ error: "invalid score option" });
        }
        if (typeof item?.score !== "number" || Number.isNaN(item.score)) {
          return res.status(400).json({ error: "invalid score value" });
        }
        if (!optionIds.has(item.optionId)) return res.status(400).json({ error: "option not found" });
        if (item.score < 1 || item.score > 5) {
          return res.status(400).json({ error: "score must be between 1 and 5" });
        }
        if (usedOptions.has(item.optionId)) {
          return res.status(400).json({ error: "duplicate option scores" });
        }
        usedOptions.add(item.optionId);
        parsedScores.push({ optionId: item.optionId, score: item.score });
      }
      if (survey.maxOptions && parsedScores.length > survey.maxOptions) {
        return res.status(400).json({ error: "scores exceed maxOptions" });
      }
      await db.collection("encuestas_respuestas").insertOne({
        surveyId: survey.id,
        classroomId: aulaId,
        usuarioId,
        scores: parsedScores,
        createdAt: new Date().toISOString()
      });
    } else if (survey.type === "segunda_vuelta") {
      const ranking = Array.isArray(req.body?.ranking) ? req.body.ranking : null;
      if (!ranking || ranking.length < 2) {
        return res.status(400).json({ error: "ranking requires at least 2 options" });
      }
      const usedOptions = new Set<string>();
      for (const optionId of ranking) {
        if (typeof optionId !== "string" || !optionId.trim()) {
          return res.status(400).json({ error: "invalid ranking option" });
        }
        if (!optionIds.has(optionId)) return res.status(400).json({ error: "option not found" });
        if (usedOptions.has(optionId)) {
          return res.status(400).json({ error: "ranking options must be unique" });
        }
        usedOptions.add(optionId);
      }
      if (survey.maxOptions && ranking.length > survey.maxOptions) {
        return res.status(400).json({ error: "ranking exceeds maxOptions" });
      }
      await db.collection("encuestas_respuestas").insertOne({
        surveyId: survey.id,
        classroomId: aulaId,
        usuarioId,
        ranking,
        createdAt: new Date().toISOString()
      });
    } else {
      return res.status(400).json({ error: "survey type not supported" });
    }
    await db.collection("encuestas").updateOne({ id: survey.id }, { $inc: { responsesCount: 1 } });
    res.status(201).json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.get("/api/encuestas/:id/resultados", async (req, res) => {
  const aulaId = requireAulaId(req, res);
  if (!aulaId) return;
  const db = await getDb();
  const survey = await db.collection("encuestas").findOne({ id: req.params.id, classroomId: aulaId });
  if (!survey) return res.status(404).json({ error: "not found" });
  const now = new Date();
  const canShowResults =
    now >= new Date(survey.endAt) ||
    survey.status === "cerrada" ||
    survey.showResultsBeforeClose ||
    survey.showResultsRealtime;
  if (!canShowResults) return res.status(403).json({ error: "results not available" });
  const responses = await db
    .collection("encuestas_respuestas")
    .find({ surveyId: survey.id, classroomId: aulaId })
    .toArray();
  const optionList = (survey.options ?? []) as Array<{ id: string; label: string }>;
  const totalVotes = responses.length;
  if (survey.type === "puntuacion") {
    const totals = new Map<string, number>();
    const counts = new Map<string, number>();
    for (const response of responses) {
      const scores = Array.isArray(response.scores) ? response.scores : [];
      for (const score of scores) {
        if (typeof score?.optionId !== "string" || typeof score?.score !== "number") continue;
        totals.set(score.optionId, (totals.get(score.optionId) ?? 0) + score.score);
        counts.set(score.optionId, (counts.get(score.optionId) ?? 0) + 1);
      }
    }
    const totalScore = Array.from(totals.values()).reduce((acc, value) => acc + value, 0);
    const options = optionList.map((option) => {
      const scoreTotal = totals.get(option.id) ?? 0;
      const scoreCount = counts.get(option.id) ?? 0;
      const averageScore = scoreCount > 0 ? Number((scoreTotal / scoreCount).toFixed(2)) : 0;
      const percentage = totalScore > 0 ? Math.round((scoreTotal / totalScore) * 100) : 0;
      return {
        id: option.id,
        label: option.label,
        count: scoreTotal,
        percentage,
        scoreTotal,
        averageScore
      };
    });
    return res.json({ surveyId: survey.id, totalVotes, options });
  }

  if (survey.type === "segunda_vuelta") {
    const optionOrder = optionList.map((option) => option.id);
    const optionLabels = new Map(optionList.map((option) => [option.id, option.label]));
    let active = [...optionOrder];
    let round = 1;
    const rounds: Array<{
      round: number;
      totalVotes: number;
      counts: Array<{ id: string; label: string; count: number; percentage: number }>;
      eliminated?: { id: string; label: string };
      winner?: { id: string; label: string; count: number; percentage: number };
    }> = [];
    let winner: { id: string; label: string; count: number; percentage: number } | null = null;

    while (active.length > 0) {
      const counts = new Map(active.map((id) => [id, 0]));
      for (const response of responses) {
        const ranking = Array.isArray(response.ranking) ? response.ranking : [];
        const vote = ranking.find((optionId: string) => active.includes(optionId));
        if (vote) counts.set(vote, (counts.get(vote) ?? 0) + 1);
      }
      const totalVotesRound = Array.from(counts.values()).reduce((acc, value) => acc + value, 0);
      const countsArray = active.map((id) => {
        const count = counts.get(id) ?? 0;
        const percentage = totalVotesRound > 0 ? Math.round((count / totalVotesRound) * 100) : 0;
        return { id, label: optionLabels.get(id) ?? id, count, percentage };
      });
      const topCandidate = countsArray.find((item) => item.count > totalVotesRound / 2);
      if (topCandidate || active.length === 1) {
        winner = topCandidate ?? countsArray[0];
        rounds.push({ round, totalVotes: totalVotesRound, counts: countsArray, winner });
        break;
      }
      const minCount = Math.min(...countsArray.map((item) => item.count));
      const eliminatedId =
        optionOrder.find((id) => countsArray.some((item) => item.id === id && item.count === minCount)) ??
        countsArray[0]?.id;
      if (!eliminatedId) break;
      rounds.push({
        round,
        totalVotes: totalVotesRound,
        counts: countsArray,
        eliminated: { id: eliminatedId, label: optionLabels.get(eliminatedId) ?? eliminatedId }
      });
      active = active.filter((id) => id !== eliminatedId);
      round += 1;
    }

    const options = rounds[0]?.counts ?? optionList.map((option) => ({
      id: option.id,
      label: option.label,
      count: 0,
      percentage: 0
    }));
    return res.json({ surveyId: survey.id, totalVotes, options, rounds, winner });
  }

  const counts = new Map<string, number>();
  for (const response of responses) {
    counts.set(response.optionId, (counts.get(response.optionId) ?? 0) + 1);
  }
  const options = optionList.map((option) => {
    const count = counts.get(option.id) ?? 0;
    const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
    return { id: option.id, label: option.label, count, percentage };
  });
  res.json({ surveyId: survey.id, totalVotes, options });
});
