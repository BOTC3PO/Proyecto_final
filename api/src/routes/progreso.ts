import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import { requirePolicy, isStaffRole } from "../lib/authorization";
import { recordAuditLog } from "../lib/audit-log";
import { assertClassroomWritable } from "../lib/classroom";
import { getQueryString } from "../lib/query";
import { requireUser } from "../lib/user-auth";
import { excluirEspejosDeIds } from "../lib/espejo-filtro";
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
      // FIX-PROGRESO-ESTADO — comparaba contra "en-curso" (guion), pero
      // el valor real que escribe quiz-attempts.ts (y que ya usan
      // correctamente las otras dos funciones de este mismo archivo,
      // líneas ~458/530) es "en_progreso" (guion bajo). Nunca matcheaba:
      // todo módulo no completado cae acá al fallback "0%", aunque el
      // alumno tuviera avance real — visible como contradicción directa
      // contra aula.tsx (ContinuarCard), que sí usa el valor correcto y
      // mostraba 50% para el mismo módulo/alumno.
      const statusRaw = item.status ?? "en_progreso";
      const porcentaje =
        statusRaw === "completado" ? "100%" : statusRaw === "en_progreso" ? "En progreso" : "0%";
      return {
        id: item.id ?? `avance-${index}`,
        modulo: titulo,
        progreso: porcentaje
      };
    });
    const completados = progresoItems.filter((p) => p.status === "completado").length;
    const total = progresoItems.length;
    // FIX-I18N — `kind` (+ `restantes` para el caso "progreso") es lo que
    // consume el front para traducir; `titulo`/`mensaje` quedan como
    // fallback en español para consumidores que no localizan.
    const sugerencia =
      total === 0
        ? { kind: "vacio" as const, titulo: "Empieza tu camino", mensaje: "Explora los módulos disponibles y comienza tu primer desafío." }
        : completados === total
          ? { kind: "completo" as const, titulo: "¡Módulos completados!", mensaje: "Excelente trabajo. Sigue explorando nuevos contenidos." }
          : {
              kind: "progreso" as const,
              restantes: total - completados,
              titulo: "Continúa aprendiendo",
              mensaje: `Tienes ${total - completados} módulo${total - completados !== 1 ? "s" : ""} en progreso. ¡Sigue adelante!`
            };
    res.json({ avances, sugerencia });
  } catch {
    res.status(500).json({ error: "internal server error" });
  }
});

/**
 * GET /api/progreso/aula-matriz?aulaId=...
 *
 * Devuelve la matriz alumno × módulo para el aula. Pensado para que el
 * docente del aula vea de un vistazo quién avanzó en cada módulo asignado.
 *
 * Auth: el solicitante debe ser staff (`isStaffRole`) O miembro del aula con
 * rol TEACHER. Mismo patrón que usan las rutas vecinas de aulas.ts.
 *
 * Implementación en una sola pasada: cuatro `findMany` (alumnos del aula,
 * módulos asignados, progresos del aula, lookup de módulos) y un Map
 * indexado por `usuarioId:moduloId` para resolver el status sin N+1.
 */
progreso.get("/api/progreso/aula-matriz", requireUser, async (req, res) => {
  try {
    const authenticatedUserId = resolveAuthenticatedUserId(req);
    if (!authenticatedUserId) {
      return res.status(401).json({ error: "user not authenticated" });
    }
    const userRole = req.user?.role ?? null;

    const aulaId = getQueryString(req.query.aulaId);
    if (!aulaId || !aulaId.trim()) {
      return res.status(400).json({ error: "aulaId is required" });
    }

    // El aula tiene que existir.
    const clase = await prisma.clase.findFirst({ where: { id: aulaId } });
    if (!clase) {
      return res.status(404).json({ error: "classroom not found" });
    }

    // Authz: staff pasa siempre; si no, tiene que ser TEACHER del aula.
    if (!isStaffRole(userRole)) {
      const membership = await prisma.claseMiembro.findFirst({
        where: { claseId: aulaId, usuarioId: authenticatedUserId, rolEnClase: "TEACHER" },
        select: { claseId: true }
      });
      if (!membership) {
        return res.status(403).json({ error: "forbidden" });
      }
    }

    // Alumnos del aula (rolEnClase = STUDENT).
    // FASE 4 — el espejo-alumno no aparece en la matriz de progreso.
    const miembros = await prisma.claseMiembro.findMany({
      where: { claseId: aulaId, rolEnClase: "STUDENT" },
      select: { usuarioId: true }
    });
    const alumnoIdsConEspejo = miembros.map((m) => m.usuarioId).filter((id): id is string => Boolean(id));
    const alumnoIds = await excluirEspejosDeIds(alumnoIdsConEspejo);

    // Módulos asignados al aula.
    const claseModulos = await prisma.claseModulo.findMany({
      where: { claseId: aulaId },
      select: { moduloId: true }
    });
    const moduloIds = claseModulos
      .map((cm) => cm.moduloId)
      .filter((id): id is string => Boolean(id));

    // Una sola query: progresos de la combinación (alumnos × aula).
    // (El índice @@index([usuarioId, aulaId]) cubre este patrón.)
    const progresos = alumnoIds.length
      ? await prisma.progresoModulo.findMany({
          where: { aulaId, usuarioId: { in: alumnoIds } },
          select: { usuarioId: true, moduloId: true, status: true }
        })
      : [];

    // Map<"usuarioId:moduloId", status> para lookup O(1).
    const statusByKey = new Map<string, string>();
    for (const p of progresos) {
      if (!p.usuarioId || !p.moduloId || !p.status) continue;
      statusByKey.set(`${p.usuarioId}:${p.moduloId}`, p.status);
    }

    // Títulos de los módulos asignados (pueden ser 0).
    const modulosAsignados = moduloIds.length
      ? await prisma.modulo.findMany({
          where: { id: { in: moduloIds } },
          select: { id: true, titulo: true }
        })
      : [];

    // Nombres de los alumnos (pueden no existir todos en `usuario`).
    const alumnos = alumnoIds.length
      ? await prisma.usuario.findMany({
          where: { id: { in: alumnoIds }, isDeleted: { not: true } },
          select: { id: true, fullName: true, username: true }
        })
      : [];

    // Orden estable: por nombre del módulo y nombre del alumno.
    const modulosOrdenados = [...modulosAsignados].sort((a, b) => {
      const at = a.titulo ?? a.id ?? "";
      const bt = b.titulo ?? b.id ?? "";
      return at.localeCompare(bt, "es");
    });
    const alumnosOrdenados = [...alumnos].sort((a, b) => {
      const an = a.fullName ?? a.username ?? a.id ?? "";
      const bn = b.fullName ?? b.username ?? b.id ?? "";
      return an.localeCompare(bn, "es");
    });

    res.json({
      modulos: modulosOrdenados.map((m) => ({ id: m.id, title: m.titulo })),
      alumnos: alumnosOrdenados.map((a) => {
        const progresos: Record<string, string | null> = {};
        for (const moduloId of moduloIds) {
          progresos[moduloId] = statusByKey.get(`${a.id}:${moduloId}`) ?? null;
        }
        return {
          id: a.id,
          name: a.fullName ?? a.username ?? a.id ?? "",
          progresos
        };
      })
    });
  } catch (e) {
    res.status(500).json({ error: e instanceof Error ? e.message : "internal server error" });
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
