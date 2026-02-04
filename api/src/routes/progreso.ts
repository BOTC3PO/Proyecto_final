import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { assertClassroomWritable } from "../lib/classroom";
import { ProgressSchema } from "../schema/progreso";

export const progreso = Router();

const ProgressUpdateSchema = ProgressSchema.partial().omit({ usuarioId: true, moduloId: true });

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

progreso.post("/api/progreso", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      updatedAt: req.body?.updatedAt ?? new Date().toISOString()
    };
    const parsed = ProgressSchema.parse(payload);
    const db = await getDb();
    if (parsed.aulaId) {
      const classroom = await db.collection("aulas").findOne({ id: parsed.aulaId });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    const filter = {
      usuarioId: parsed.usuarioId,
      moduloId: parsed.moduloId,
      ...(parsed.aulaId ? { aulaId: parsed.aulaId } : {})
    };
    const result = await db.collection("progreso_modulos").updateOne(
      filter,
      { $set: parsed },
      { upsert: true }
    );
    res.status(result.upsertedCount ? 201 : 200).json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

progreso.get("/api/progreso", async (req, res) => {
  const usuarioId = req.query.usuarioId;
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const aulaId = typeof req.query.aulaId === "string" ? req.query.aulaId : undefined;
  const db = await getDb();
  const progressFilter = { usuarioId, ...(aulaId ? { aulaId } : {}) };
  const items = await db.collection("progreso_modulos").find(progressFilter).toArray();
  const modules = await db
    .collection("modulos")
    .find(aulaId ? { aulaId } : {}, { projection: { id: 1, dependencies: 1, title: 1 } })
    .toArray();
  const completedIds = new Set(
    items.filter((item) => item.status === "completado").map((item) => item.moduloId)
  );
  const getRequiredDependencyIds = (dependencies: unknown) => {
    if (!Array.isArray(dependencies)) return [];
    return dependencies
      .map((dep) => {
        if (typeof dep === "string") return dep;
        if (!dep || typeof dep !== "object") return null;
        const record = dep as { id?: unknown; type?: unknown };
        if (record.type !== "required" || typeof record.id !== "string") return null;
        return record.id;
      })
      .filter((dep): dep is string => Boolean(dep));
  };
  const unlocks = modules.map((module) => {
    const deps = getRequiredDependencyIds(module.dependencies);
    const missingDependencies = deps.filter((dep) => !completedIds.has(dep));
    return {
      moduloId: module.id,
      isLocked: missingDependencies.length > 0,
      missingDependencies
    };
  });
  res.json({ items, unlocks });
});

progreso.patch("/api/progreso/:moduloId", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  const usuarioId = req.header("x-usuario-id");
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "x-usuario-id header is required" });
  }
  const aulaId = typeof req.query.aulaId === "string" ? req.query.aulaId : undefined;
  try {
    const parsed = ProgressUpdateSchema.parse(req.body);
    const db = await getDb();
    if (aulaId) {
      const classroom = await db.collection("aulas").findOne({ id: aulaId });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const filter = {
      usuarioId,
      moduloId: req.params.moduloId,
      ...(aulaId ? { aulaId } : {})
    };
    const result = await db.collection("progreso_modulos").updateOne(
      filter,
      { $set: update }
    );
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
