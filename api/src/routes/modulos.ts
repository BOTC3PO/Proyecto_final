import express, { Router } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { assertClassroomWritable } from "../lib/classroom";
import { requireUser } from "../lib/user-auth";
import { ModuleSchema } from "../schema/modulo";

export const modulos = Router();

const ModuleUpdateSchema = ModuleSchema.partial().omit({ id: true });

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const parseVisibilityList = (value: unknown) => {
  if (typeof value !== "string") return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
};

modulos.get("/api/modulos/buscar", async (req, res) => {
  const mine = req.query.mine === "true";
  if (mine) {
    await new Promise<void>((resolve) => {
      requireUser(req, res, () => resolve());
    });
    if (res.headersSent) return;
  }
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const query = typeof req.query.query === "string" ? req.query.query.trim() : "";
  const category = typeof req.query.category === "string" ? req.query.category.trim() : "";
  const createdBy = mine
    ? req.user?._id
      ? req.user._id.toString()
      : ""
    : typeof req.query.createdBy === "string"
      ? req.query.createdBy.trim()
      : "";
  const schoolId = typeof req.query.schoolId === "string" ? req.query.schoolId.trim() : "";
  const visibilityList = parseVisibilityList(req.query.visibility);

  const accessFilters: Record<string, unknown>[] = [];
  if (createdBy) {
    accessFilters.push({ createdBy });
  }
  if (visibilityList.includes("publico")) {
    accessFilters.push({ visibility: "publico" });
  }
  if (visibilityList.includes("escuela")) {
    accessFilters.push(
      schoolId ? { visibility: "escuela", schoolId } : { visibility: "escuela" },
    );
  }
  if (visibilityList.includes("privado") && createdBy) {
    accessFilters.push({ visibility: "privado", createdBy });
  }

  const andFilters: Record<string, unknown>[] = [];
  if (accessFilters.length > 0) {
    andFilters.push({ $or: accessFilters });
  }
  if (query) {
    const regex = new RegExp(escapeRegex(query), "i");
    andFilters.push({ $or: [{ title: regex }, { category: regex }] });
  }
  if (category) {
    andFilters.push({ category });
  }

  const filter =
    andFilters.length === 0 ? {} : andFilters.length === 1 ? andFilters[0] : { $and: andFilters };

  const cursor = db
    .collection("modulos")
    .find(filter)
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

modulos.get("/api/modulos", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const aulaId = typeof req.query.aulaId === "string" ? req.query.aulaId : undefined;
  const filter = aulaId ? { aulaId } : {};
  const cursor = db
    .collection("modulos")
    .find(filter)
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

modulos.get("/api/modulos/:id", async (req, res) => {
  const db = await getDb();
  const item = await db.collection("modulos").findOne({ id: req.params.id });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});

modulos.post("/api/modulos", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const moduleId =
      typeof req.body?.id === "string" && req.body.id.trim()
        ? req.body.id
        : req.body?._id
          ? req.body._id.toString()
          : new ObjectId().toString();
    const payload = {
      ...req.body,
      id: moduleId,
      createdAt: req.body?.createdAt ?? new Date().toISOString(),
      updatedAt: req.body?.updatedAt ?? new Date().toISOString()
    };
    const parsed = ModuleSchema.parse(payload);
    const db = await getDb();
    if (parsed.aulaId) {
      const classroom = await db
        .collection<{ status?: unknown }>("aulas")
        .findOne({ id: parsed.aulaId }, { projection: { status: 1 } });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    const result = await db.collection("modulos").insertOne(parsed);
    res.status(201).json({ id: result.insertedId, moduleId: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

modulos.put("/api/modulos/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleUpdateSchema.parse(req.body);
    const db = await getDb();
    const existing = await db.collection("modulos").findOne({ id: req.params.id });
    if (!existing) return res.status(404).json({ error: "not found" });
    if (existing.aulaId) {
      const classroom = await db
        .collection<{ status?: unknown }>("aulas")
        .findOne({ id: existing.aulaId }, { projection: { status: 1 } });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    await db.collection("modulos").updateOne({ id: req.params.id }, { $set: update });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

modulos.patch("/api/modulos/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleUpdateSchema.parse(req.body);
    const db = await getDb();
    const existing = await db.collection("modulos").findOne({ id: req.params.id });
    if (!existing) return res.status(404).json({ error: "not found" });
    if (existing.aulaId) {
      const classroom = await db
        .collection<{ status?: unknown }>("aulas")
        .findOne({ id: existing.aulaId }, { projection: { status: 1 } });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    await db.collection("modulos").updateOne({ id: req.params.id }, { $set: update });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

modulos.delete("/api/modulos/:id", async (req, res) => {
  const db = await getDb();
  const existing = await db.collection("modulos").findOne({ id: req.params.id });
  if (!existing) return res.status(404).json({ error: "not found" });
  if (existing.aulaId) {
    const classroom = await db
      .collection<{ status?: unknown }>("aulas")
      .findOne({ id: existing.aulaId }, { projection: { status: 1 } });
    if (classroom && !assertClassroomWritable(res, classroom)) {
      return;
    }
  }
  const result = await db.collection("modulos").deleteOne({ id: req.params.id });
  if (result.deletedCount === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});
