import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { SurveySchema } from "../schema/encuesta";

export const encuestas = Router();

const SurveyUpdateSchema = SurveySchema.partial().omit({ id: true, createdAt: true, createdBy: true });

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
    const classroom = await db.collection("aulas").findOne({ id: parsed.classroomId });
    if (!classroom) return res.status(400).json({ error: "classroom not found" });
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
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db.collection("encuestas").updateOne({ id: req.params.id }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.patch("/api/encuestas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = SurveyUpdateSchema.parse(req.body);
    const db = await getDb();
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db.collection("encuestas").updateOne({ id: req.params.id }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

encuestas.delete("/api/encuestas/:id", async (req, res) => {
  const db = await getDb();
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
    const survey = await db.collection("encuestas").findOne({ id: req.params.id, classroomId: aulaId });
    if (!survey) return res.status(404).json({ error: "not found" });
    if (survey.type !== "normal") return res.status(400).json({ error: "survey type not supported" });
    if (survey.status === "cerrada" || survey.status === "archivada") {
      return res.status(400).json({ error: "survey closed" });
    }
    const now = new Date();
    if (now < new Date(survey.startAt) || now >= new Date(survey.endAt)) {
      return res.status(400).json({ error: "survey inactive" });
    }
    const optionId = req.body?.optionId;
    if (typeof optionId !== "string" || !optionId.trim()) {
      return res.status(400).json({ error: "optionId is required" });
    }
    const optionExists = (survey.options ?? []).some((option: { id: string }) => option.id === optionId);
    if (!optionExists) return res.status(400).json({ error: "option not found" });
    const existingVote = await db
      .collection("encuestas_respuestas")
      .findOne({ surveyId: survey.id, classroomId: aulaId, usuarioId });
    if (existingVote) return res.status(409).json({ error: "already voted" });
    await db.collection("encuestas_respuestas").insertOne({
      surveyId: survey.id,
      classroomId: aulaId,
      usuarioId,
      optionId,
      createdAt: new Date().toISOString()
    });
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
  const counts = new Map<string, number>();
  for (const response of responses) {
    counts.set(response.optionId, (counts.get(response.optionId) ?? 0) + 1);
  }
  const totalVotes = responses.length;
  const options = (survey.options ?? []).map((option: { id: string; label: string }) => {
    const count = counts.get(option.id) ?? 0;
    const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
    return { id: option.id, label: option.label, count, percentage };
  });
  res.json({ surveyId: survey.id, totalVotes, options });
});
