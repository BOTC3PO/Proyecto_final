import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import { requirePolicy, isStaffRole } from "../lib/authorization";
import { recordAuditLog } from "../lib/audit-log";
import { assertClassroomWritable } from "../lib/classroom";
import { getQueryString } from "../lib/query";
import { requireUser } from "../lib/user-auth";
import { ProgressSchema } from "../schema/progreso";

export const progreso = Router();

type ProgresoDoc = {
  id?: string;
  usuarioId?: string;
  moduloId?: string;
  status?: string;
  aulaId?: string;
  updatedAt?: string;
};

type ModuloDoc = {
  id?: string;
  title?: string;
  subject?: string;
  category?: string;
  dependencies?: Array<{ type?: string; id?: string }>;
};

type VinculoDoc = {
  id?: string;
  parentId?: string;
  childId?: string;
  estado?: string;
  nombre?: string | null;
  usuario?: string | null;
  grado?: string | null;
};

type ChildDoc = {
  id?: string;
  fullName?: string | null;
  username?: string | null;
  birthdate?: unknown;
  isDeleted?: boolean;
};

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
  if (typeof raw === "string") return raw;
  if (typeof raw?.toString === "function") return raw.toString();
  return null;
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
      if (parsed.aulaId) {
        const classroom = await prisma.clase.findFirst({ where: { id: parsed.aulaId }, select: { status: true } });
        if (classroom && !assertClassroomWritable(res, classroom)) {
          return;
        }
      }
      const filter = {
        usuarioId: parsed.usuarioId,
        moduloId: parsed.moduloId,
        ...(parsed.aulaId ? { aulaId: parsed.aulaId } : {})
      };
      const existing = await prisma.progresoModulo.findFirst({ where: filter });
      let wasCreated = false;
      if (existing) {
        await prisma.progresoModulo.update({ where: { id: existing.id }, data: parsed });
      } else {
        await prisma.progresoModulo.create({ data: { ...parsed } });
        wasCreated = true;
      }
      await recordAuditLog({
        actorId: authenticatedUserId,
        action: wasCreated ? "progreso.create" : "progreso.update",
        targetType: "progreso_modulo",
        targetId: `${parsed.usuarioId}:${parsed.moduloId}`,
        metadata: { aulaId: parsed.aulaId ?? null, status: parsed.status ?? null }
      });
      res.status(wasCreated ? 201 : 200).json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

progreso.get("/api/progreso", requireUser, requirePolicy("progreso/read"), async (req, res) => {
  const usuarioId = getQueryString(req.query.usuarioId);
  if (!usuarioId || !usuarioId.trim()) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const authenticatedUserId = resolveAuthenticatedUserId(req);
  if (!authenticatedUserId) {
    return res.status(401).json({ error: "user not authenticated" });
  }
  if (usuarioId !== authenticatedUserId && !isStaffRole(req.user?.role ?? null)) {
    return res.status(403).json({ error: "forbidden" });
  }
  const aulaId = getQueryString(req.query.aulaId);
  const progressFilter = { usuarioId, ...(aulaId ? { aulaId } : {}) };
  const items = await prisma.progresoModulo.findMany({ where: progressFilter });
  let moduloIdFilter: string[] | undefined;
  if (aulaId) {
    const claseModulos = await prisma.claseModulo.findMany({
      where: { claseId: aulaId },
      select: { moduloId: true }
    });
    moduloIdFilter = claseModulos.map(cm => cm.moduloId);
  }
  const modules = await prisma.modulo.findMany({
    where: moduloIdFilter ? { id: { in: moduloIdFilter } } : {},
    select: { id: true, dependencies: true, titulo: true }
  });
  const completedIds = new Set(
    items.filter((item) => item.status === "completado").map((item) => item.moduloId)
  );
  const parseDependencies = (raw: string | null | undefined): unknown[] => {
    if (!raw) return [];
    try { const parsed = JSON.parse(raw); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
  };
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
    const deps = getRequiredDependencyIds(parseDependencies(module.dependencies));
    const missingDependencies = deps.filter((dep) => !completedIds.has(dep));
    return {
      moduloId: module.id,
      isLocked: missingDependencies.length > 0,
      missingDependencies
    };
  });
  res.json({ items, unlocks });
});

progreso.get("/api/progreso/estudiante", requireUser, async (req, res) => {
  try {
    const userId = resolveAuthenticatedUserId(req);
    if (!userId) return res.status(401).json({ error: "user not authenticated" });
    const progresoItems = await prisma.progresoModulo.findMany({
      where: { usuarioId: userId },
      orderBy: { updatedAt: "desc" },
      take: 20
    });
    const moduloIds = progresoItems.map((p) => p.moduloId).filter(Boolean) as string[];
    const modulosMap = new Map<string, ModuloDoc>();
    if (moduloIds.length > 0) {
      const modulosDocs = await prisma.modulo.findMany({
        where: { id: { in: moduloIds } },
        select: { id: true, titulo: true, slug: true }
      });
      for (const m of modulosDocs) {
        if (m.id) modulosMap.set(m.id, { id: m.id, title: m.titulo });
      }
    }
    const avances = progresoItems.map((item, index) => {
      const modulo = modulosMap.get(item.moduloId ?? "");
      const titulo = modulo?.title ?? item.moduloId ?? `Módulo ${index + 1}`;
      const statusRaw = item.status ?? "en-curso";
      const porcentaje =
        statusRaw === "completado" ? "100%" : statusRaw === "en-curso" ? "En progreso" : "0%";
      return {
        id: item.id ?? `avance-${index}`,
        modulo: titulo,
        progreso: porcentaje
      };
    });
    const completados = progresoItems.filter((p) => p.status === "completado").length;
    const total = progresoItems.length;
    const sugerencia =
      total === 0
        ? { titulo: "Empieza tu camino", mensaje: "Explora los módulos disponibles y comienza tu primer desafío." }
        : completados === total
          ? { titulo: "¡Módulos completados!", mensaje: "Excelente trabajo. Sigue explorando nuevos contenidos." }
          : {
              titulo: "Continúa aprendiendo",
              mensaje: `Tienes ${total - completados} módulo${total - completados !== 1 ? "s" : ""} en progreso. ¡Sigue adelante!`
            };
    res.json({ avances, sugerencia });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

progreso.get("/api/progreso/hijos", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const vinculos = await prisma.progresoModuloVinculo.findMany({
    where: { parentId, estado: { not: "revocado" } }
  });
  if (!vinculos.length) return res.json([]);
  const childIds = vinculos.map((v) => v.childId).filter(Boolean) as string[];
  const children = await prisma.usuario.findMany({
    where: { id: { in: childIds }, isDeleted: { not: true } },
    select: { id: true, fullName: true, username: true, birthdate: true }
  });
  const childMap = new Map(children.map((child) => [child.id ?? "", child]));
  const allowed = vinculos.filter((v) => {
    const child = childMap.get(String(v.childId ?? ""));
    if (!child) return false;
    const minor = isMinor(child.birthdate ? new Date(child.birthdate) : null);
    if (minor) return true;
    return v.estado === "aprobado";
  });
  if (!allowed.length) return res.json([]);
  const childIdStrings = allowed.map((v) => String(v.childId));
  const progressItems = await prisma.progresoModulo.findMany({
    where: { usuarioId: { in: childIdStrings } }
  });
  const moduleIds = Array.from(new Set(progressItems.map((item) => item.moduloId).filter(Boolean))) as string[];
  const modules = moduleIds.length
    ? await prisma.modulo.findMany({
        where: { id: { in: moduleIds } },
        select: { id: true, titulo: true, slug: true, dependencies: true }
      })
    : [];
  const moduleMap = new Map(modules.map((module) => [module.id ?? "", module]));
  const progressByChild = new Map<string, typeof progressItems>();
  for (const item of progressItems) {
    const list = progressByChild.get(item.usuarioId as string) ?? [];
    list.push(item);
    progressByChild.set(item.usuarioId as string, list);
  }
  const completedByChild = new Map<string, Set<string>>();
  for (const item of progressItems) {
    if (item.status !== "completado") continue;
    const set = completedByChild.get(item.usuarioId as string) ?? new Set<string>();
    set.add(item.moduloId as string);
    completedByChild.set(item.usuarioId as string, set);
  }

  const responses = allowed.map((v) => {
    const childId = String(v.childId ?? "");
    const child = childMap.get(childId);
    const progress = progressByChild.get(childId) ?? [];
    const completedSet = completedByChild.get(childId) ?? new Set<string>();
    const total = progress.length;
    const completados = progress.filter((item) => item.status === "completado").length;
    const progresoGeneral = total ? Math.round((completados / total) * 100) : 0;
    const modulos = progress.map((item) => {
      const module = moduleMap.get(item.moduloId ?? "");
      const rawDeps = module?.dependencies; const depsArray = rawDeps ? (() => { try { const p = JSON.parse(rawDeps); return Array.isArray(p) ? p : []; } catch { return []; } })() : []; const dependencies = depsArray as Array<{ type?: string; id?: string }>;
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
        titulo: (module?.titulo ?? "Módulo") as string,
        area: normalizeArea((module as any)?.subject ?? (module as any)?.category ?? null),
        progreso,
        estado,
        ultimaActividad: formatActivityDate(item.updatedAt ?? undefined)
      };
    });
    return {
      id: childId,
      nombre: String(child?.fullName ?? v.nombre ?? "Sin nombre"),
      usuario: normalizeUsername((child?.username ?? v.usuario) as string | undefined),
      grado: String(v.grado ?? "Sin grado"),
      progresoGeneral,
      modulos
    };
  });
  res.json(responses);
});

progreso.get("/api/progreso/hijos/:id", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childIdParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!childIdParam) return res.status(400).json({ error: "invalid child id" });
  const childId = childIdParam;
  const child = await prisma.usuario.findFirst({
    where: { id: childId, isDeleted: { not: true } },
    select: { id: true, fullName: true, username: true, birthdate: true }
  });
  if (!child) return res.status(404).json({ error: "child not found" });
  const vinculo = await prisma.progresoModuloVinculo.findFirst({
    where: { parentId, childId, estado: { not: "revocado" } }
  });
  if (!vinculo) return res.status(403).json({ error: "no link" });
  const minor = isMinor(child.birthdate ? new Date(child.birthdate) : null);
  if (!minor && vinculo.estado !== "aprobado") {
    return res.status(403).json({ error: "approval required" });
  }
  const progress = await prisma.progresoModulo.findMany({
    where: { usuarioId: childId }
  });
  const moduleIds = Array.from(new Set(progress.map((item) => item.moduloId).filter(Boolean))) as string[];
  const modules = moduleIds.length
    ? await prisma.modulo.findMany({
        where: { id: { in: moduleIds } },
        select: { id: true, titulo: true, slug: true, dependencies: true }
      })
    : [];
  const moduleMap = new Map(modules.map((module) => [module.id ?? "", module]));
  const completedSet = new Set(
    progress.filter((item) => item.status === "completado").map((item) => item.moduloId)
  );
  const total = progress.length;
  const completados = progress.filter((item) => item.status === "completado").length;
  const progresoGeneral = total ? Math.round((completados / total) * 100) : 0;
  const modulos = progress.map((item) => {
    const module = moduleMap.get(item.moduloId ?? "");
    const dependencies = Array.isArray(module?.dependencies) ? module?.dependencies : [];
    const requiredDeps = (dependencies as Array<{ type?: string; id?: string }>)
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
      titulo: (module?.titulo ?? "Módulo") as string,
      area: normalizeArea((module as any)?.subject ?? (module as any)?.category ?? null),
      progreso,
      estado,
      ultimaActividad: formatActivityDate(item.updatedAt ?? undefined)
    };
  });
  res.json({
    id: childId,
    nombre: (child.fullName ?? vinculo.nombre ?? "Sin nombre") as string,
    usuario: normalizeUsername((child.username ?? vinculo.usuario) as string | undefined),
    grado: (vinculo.grado ?? "Sin grado") as string,
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
    const aulaId = getQueryString(req.query.aulaId);
    try {
      if (typeof req.body?.usuarioId === "string" && req.body.usuarioId !== usuarioId) {
        return res.status(403).json({ error: "forbidden" });
      }
      const parsed = ProgressUpdateSchema.parse(req.body);
      if (aulaId) {
        const classroom = await prisma.clase.findFirst({ where: { id: aulaId }, select: { status: true } });
        if (classroom && !assertClassroomWritable(res, classroom)) {
          return;
        }
      }
      const update = { ...parsed, updatedAt: new Date().toISOString() };
      const filter = {
        usuarioId,
        moduloId: req.params.moduloId as string,
        ...(aulaId ? { aulaId } : {})
      };
      const result = await prisma.progresoModulo.updateMany({ where: filter, data: update });
      if (result.count === 0) return res.status(404).json({ error: "not found" });
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
