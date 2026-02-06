import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { requirePolicy, isStaffRole } from "../lib/authorization";
import { recordAuditLog } from "../lib/audit-log";
import { assertClassroomWritable } from "../lib/classroom";
import { toObjectId } from "../lib/ids";
import { requireUser } from "../lib/user-auth";
import { ProgressSchema } from "../schema/progreso";

export const progreso = Router();

const ProgressUpdateSchema = ProgressSchema.partial().omit({ usuarioId: true, moduloId: true });

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

const isMinor = (birthdate?: Date | null) => {
  if (!birthdate) return false;
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

const normalizeUsername = (value?: string | null) => {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("@") ? trimmed : `@${trimmed}`;
};

const normalizeArea = (value?: string | null) => {
  const raw = value?.toLowerCase() ?? "";
  if (raw.includes("mate")) return "Matemática";
  if (raw.includes("lengua") || raw.includes("liter")) return "Lengua";
  if (raw.includes("ciencia")) return "Ciencias";
  if (raw.includes("historia")) return "Historia";
  if (raw.includes("geogra")) return "Geografía";
  if (raw.includes("arte")) return "Arte";
  return "Otro";
};

const formatActivityDate = (value?: string | null) => {
  if (!value) return "Sin registro";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 10);
};

const resolveParentId = (req: any) => {
  const raw = req.user?._id ?? req.user?.id;
  if (!raw) return null;
  if (typeof raw === "string") return toObjectId(raw);
  return raw;
};

const resolveAuthenticatedUserId = (req: any) => {
  const raw = req.user?._id ?? req.user?.id;
  if (!raw) return null;
  if (typeof raw === "string") return raw;
  if (typeof raw?.toString === "function") return raw.toString();
  return null;
};

progreso.post(
  "/api/progreso",
  requireUser,
  requirePolicy("progreso/write"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const authenticatedUserId = resolveAuthenticatedUserId(req);
      if (!authenticatedUserId) {
        return res.status(401).json({ error: "user not authenticated" });
      }
      const payload = {
        ...req.body,
        updatedAt: req.body?.updatedAt ?? new Date().toISOString()
      };
      const parsed = ProgressSchema.parse(payload);
      if (parsed.usuarioId !== authenticatedUserId && !isStaffRole(req.user?.role ?? null)) {
        return res.status(403).json({ error: "forbidden" });
      }
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
      await recordAuditLog({
        actorId: authenticatedUserId,
        action: result.upsertedCount ? "progreso.create" : "progreso.update",
        targetType: "progreso_modulo",
        targetId: `${parsed.usuarioId}:${parsed.moduloId}`,
        metadata: { aulaId: parsed.aulaId ?? null, status: parsed.status ?? null }
      });
      res.status(result.upsertedCount ? 201 : 200).json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

progreso.get("/api/progreso", requireUser, requirePolicy("progreso/read"), async (req, res) => {
  const usuarioId = req.query.usuarioId;
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const authenticatedUserId = resolveAuthenticatedUserId(req);
  if (!authenticatedUserId) {
    return res.status(401).json({ error: "user not authenticated" });
  }
  if (usuarioId !== authenticatedUserId && !isStaffRole(req.user?.role ?? null)) {
    return res.status(403).json({ error: "forbidden" });
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

progreso.get("/api/progreso/hijos", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const db = await getDb();
  const vinculos = await db
    .collection("vinculos_padre_hijo")
    .find({ parentId, estado: { $ne: "revocado" } })
    .toArray();
  if (!vinculos.length) return res.json([]);
  const childIds = vinculos.map((v) => v.childId).filter(Boolean);
  const children = await db
    .collection("usuarios")
    .find({ _id: { $in: childIds }, isDeleted: { $ne: true } })
    .project({ fullName: 1, username: 1, birthdate: 1 })
    .toArray();
  const childMap = new Map(children.map((child) => [child._id?.toString?.() ?? "", child]));
  const allowed = vinculos.filter((v) => {
    const child = childMap.get(v.childId?.toString?.() ?? "");
    if (!child) return false;
    const minor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
    if (minor) return true;
    return v.estado === "aprobado";
  });
  if (!allowed.length) return res.json([]);
  const childIdStrings = allowed.map((v) => v.childId.toString());
  const progressItems = await db
    .collection("progreso_modulos")
    .find({ usuarioId: { $in: childIdStrings } })
    .toArray();
  const moduleIds = Array.from(new Set(progressItems.map((item) => item.moduloId)));
  const modules = moduleIds.length
    ? await db
        .collection("modulos")
        .find({ id: { $in: moduleIds } })
        .project({ id: 1, title: 1, subject: 1, category: 1, dependencies: 1 })
        .toArray()
    : [];
  const moduleMap = new Map(modules.map((module) => [module.id, module]));
  const progressByChild = new Map<string, typeof progressItems>();
  for (const item of progressItems) {
    const list = progressByChild.get(item.usuarioId) ?? [];
    list.push(item);
    progressByChild.set(item.usuarioId, list);
  }
  const completedByChild = new Map<string, Set<string>>();
  for (const item of progressItems) {
    if (item.status !== "completado") continue;
    const set = completedByChild.get(item.usuarioId) ?? new Set<string>();
    set.add(item.moduloId);
    completedByChild.set(item.usuarioId, set);
  }

  const responses = allowed.map((v) => {
    const childId = v.childId.toString();
    const child = childMap.get(childId);
    const progress = progressByChild.get(childId) ?? [];
    const completedSet = completedByChild.get(childId) ?? new Set<string>();
    const total = progress.length;
    const completados = progress.filter((item) => item.status === "completado").length;
    const progresoGeneral = total ? Math.round((completados / total) * 100) : 0;
    const modulos = progress.map((item) => {
      const module = moduleMap.get(item.moduloId);
      const dependencies = Array.isArray(module?.dependencies) ? module?.dependencies : [];
      const requiredDeps = dependencies
        .map((dep) => (dep?.type === "required" ? dep.id : null))
        .filter((dep): dep is string => Boolean(dep));
      const missingDeps = requiredDeps.filter((dep) => !completedSet.has(dep));
      const isLocked = missingDeps.length > 0;
      const estado =
        item.status === "completado"
          ? "Completado"
          : isLocked
            ? "Bloqueado"
            : "En curso";
      const progreso = item.status === "completado" ? 100 : item.status === "en_progreso" ? 60 : 25;
      return {
        id: item.moduloId,
        titulo: module?.title ?? "Módulo",
        area: normalizeArea(module?.subject ?? module?.category),
        progreso,
        estado,
        ultimaActividad: formatActivityDate(item.updatedAt)
      };
    });
    return {
      id: childId,
      nombre: child?.fullName ?? v.nombre ?? "Sin nombre",
      usuario: normalizeUsername(child?.username ?? v.usuario),
      grado: v.grado ?? "Sin grado",
      progresoGeneral,
      modulos
    };
  });
  res.json(responses);
});

progreso.get("/api/progreso/hijos/:id", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childId = toObjectId(req.params.id);
  if (!childId) return res.status(400).json({ error: "invalid child id" });
  const db = await getDb();
  const child = await db
    .collection("usuarios")
    .findOne({ _id: childId, isDeleted: { $ne: true } }, { projection: { fullName: 1, username: 1, birthdate: 1 } });
  if (!child) return res.status(404).json({ error: "child not found" });
  const vinculo = await db.collection("vinculos_padre_hijo").findOne({
    parentId,
    childId,
    estado: { $ne: "revocado" }
  });
  if (!vinculo) return res.status(403).json({ error: "no link" });
  const minor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
  if (!minor && vinculo.estado !== "aprobado") {
    return res.status(403).json({ error: "approval required" });
  }
  const progress = await db
    .collection("progreso_modulos")
    .find({ usuarioId: childId.toString() })
    .toArray();
  const moduleIds = Array.from(new Set(progress.map((item) => item.moduloId)));
  const modules = moduleIds.length
    ? await db
        .collection("modulos")
        .find({ id: { $in: moduleIds } })
        .project({ id: 1, title: 1, subject: 1, category: 1, dependencies: 1 })
        .toArray()
    : [];
  const moduleMap = new Map(modules.map((module) => [module.id, module]));
  const completedSet = new Set(
    progress.filter((item) => item.status === "completado").map((item) => item.moduloId)
  );
  const total = progress.length;
  const completados = progress.filter((item) => item.status === "completado").length;
  const progresoGeneral = total ? Math.round((completados / total) * 100) : 0;
  const modulos = progress.map((item) => {
    const module = moduleMap.get(item.moduloId);
    const dependencies = Array.isArray(module?.dependencies) ? module?.dependencies : [];
    const requiredDeps = dependencies
      .map((dep) => (dep?.type === "required" ? dep.id : null))
      .filter((dep): dep is string => Boolean(dep));
    const missingDeps = requiredDeps.filter((dep) => !completedSet.has(dep));
    const isLocked = missingDeps.length > 0;
    const estado =
      item.status === "completado"
        ? "Completado"
        : isLocked
          ? "Bloqueado"
          : "En curso";
    const progreso = item.status === "completado" ? 100 : item.status === "en_progreso" ? 60 : 25;
    return {
      id: item.moduloId,
      titulo: module?.title ?? "Módulo",
      area: normalizeArea(module?.subject ?? module?.category),
      progreso,
      estado,
      ultimaActividad: formatActivityDate(item.updatedAt)
    };
  });
  res.json({
    id: childId.toString(),
    nombre: child.fullName ?? vinculo.nombre ?? "Sin nombre",
    usuario: normalizeUsername(child.username ?? vinculo.usuario),
    grado: vinculo.grado ?? "Sin grado",
    progresoGeneral,
    modulos
  });
});

progreso.patch(
  "/api/progreso/:moduloId",
  requireUser,
  requirePolicy("progreso/write"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    const usuarioId = resolveAuthenticatedUserId(req);
    if (!usuarioId) {
      return res.status(401).json({ error: "user not authenticated" });
    }
    const aulaId = typeof req.query.aulaId === "string" ? req.query.aulaId : undefined;
    try {
      if (typeof req.body?.usuarioId === "string" && req.body.usuarioId !== usuarioId) {
        return res.status(403).json({ error: "forbidden" });
      }
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
      await recordAuditLog({
        actorId: usuarioId,
        action: "progreso.update",
        targetType: "progreso_modulo",
        targetId: `${usuarioId}:${req.params.moduloId}`,
        metadata: {
          aulaId: aulaId ?? null,
          updatedFields: Object.keys(parsed)
        }
      });
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);
