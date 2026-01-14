import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ProgressSchema } from "../schema/progreso";

export const progreso = Router();

const ProgressUpdateSchema = ProgressSchema.partial().omit({ usuarioId: true, moduloId: true });

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

progreso.post("/api/progreso", ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      updatedAt: req.body?.updatedAt ?? new Date().toISOString()
    };
    const parsed = ProgressSchema.parse(payload);
    const db = await getDb();
    const result = await db.collection("progreso_modulos").updateOne(
      { usuarioId: parsed.usuarioId, moduloId: parsed.moduloId },
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
  const db = await getDb();
  const items = await db.collection("progreso_modulos").find({ usuarioId }).toArray();
  const modules = await db
    .collection("modulos")
    .find({}, { projection: { id: 1, dependencies: 1, title: 1 } })
    .toArray();
  const completedIds = new Set(
    items.filter((item) => item.status === "completado").map((item) => item.moduloId)
  );
  const unlocks = modules.map((module) => {
    const deps = Array.isArray(module.dependencies) ? module.dependencies : [];
    const missingDependencies = deps.filter((dep: string) => !completedIds.has(dep));
    return {
      moduloId: module.id,
      isLocked: missingDependencies.length > 0,
      missingDependencies
    };
  });
  res.json({ items, unlocks });
});

progreso.patch("/api/progreso/:moduloId", ...bodyLimitMB(Number(process.env.MAX_PAGE_MB ?? 30)), async (req, res) => {
  const usuarioId = req.header("x-usuario-id");
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "x-usuario-id header is required" });
  }
  try {
    const parsed = ProgressUpdateSchema.parse(req.body);
    const db = await getDb();
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db.collection("progreso_modulos").updateOne(
      { usuarioId, moduloId: req.params.moduloId },
      { $set: update }
    );
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
