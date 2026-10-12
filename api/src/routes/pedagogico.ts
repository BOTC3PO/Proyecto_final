import { randomUUID } from "node:crypto";
import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";
import { hasRole } from "../lib/roles";
import { whereSoloAlumnosReales } from "../lib/inscripcion-prueba";
import { isClassroomTeacher } from "../lib/classroom-scope";

export const pedagogico = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getUserFromReq = (req: { user?: { role?: string; roles?: string[] } }) => req.user ?? null;

const genId = (prefix: string) =>
  `${prefix}-${randomUUID()}`;

type AulaGestionada = { id: string; escuelaId: string | null };

/**
 * C3 — ¿quién gestiona el aula? El ADMIN; el DIRECTIVO de la escuela del aula; o el docente titular o
 * co-titular del aula. Responde 404 (aula inexistente) o 403 y devuelve `null` si no corresponde. Es el
 * criterio que ya usaba `desbloquear`; el panel de riesgo y el modo aula solo pedían ser docente de
 * cualquier escuela.
 */
async function aulaGestionable(
  req: { user?: { id?: string; _id?: { toString?: () => string }; schoolId?: string | null; role?: string; roles?: string[] } },
  res: import("express").Response,
  aulaId: string
): Promise<AulaGestionada | null> {
  const user = getUserFromReq(req as never);
  const aula = await prisma.clase.findFirst({
    where: { id: aulaId, isDeleted: { not: true } },
    include: { miembros: true },
  });
  if (!aula) {
    res.status(404).json({ error: "aula no encontrada" });
    return null;
  }
  const publico: AulaGestionada = { id: aula.id, escuelaId: aula.escuelaId ?? null };
  if (hasRole(user, "ADMIN")) return publico;
  if (hasRole(user, "DIRECTIVO")) {
    const escuelaUsuario = req.user?.schoolId ?? null;
    if (aula.escuelaId && aula.escuelaId === escuelaUsuario) return publico;
    res.status(403).json({ error: "sin permiso sobre esta aula" });
    return null;
  }
  // PLAN-U §6 — criterio canónico: reconoce co-titulares TEACHER/DIRECTIVO en clase_miembros.
  const members = (aula.miembros ?? []).map((m) => ({ userId: m.usuarioId, roleInClass: m.rolEnClase }));
  if (isClassroomTeacher({ ...aula, members }, getId(req as never))) return publico;
  res.status(403).json({ error: "sin permiso sobre esta aula" });
  return null;
}

// ── GET /api/pedagogico/umbral/:quizId ──────────────────────
pedagogico.get("/api/pedagogico/umbral/:quizId", requireUser, async (req, res) => {
  const row = await prisma.quizUmbral.findUnique({
    where: { quizId: String(req.params.quizId) },
    select: { umbral: true },
  });
  return res.json({ umbral: row?.umbral ?? 60 });
});

// ── POST /api/pedagogico/umbral ─────────────────────────────
pedagogico.post("/api/pedagogico/umbral", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const user = getUserFromReq(req as never);
  if (!hasRole(user, "TEACHER") && !hasRole(user, "DIRECTIVO") && !hasRole(user, "ADMIN")) {
    return res.status(403).json({ error: "solo profesores" });
  }

  const { quizId, moduloId, umbral } = req.body as Record<string, unknown>;
  if (!quizId || !moduloId || typeof umbral !== "number") {
    return res.status(400).json({ error: "quizId, moduloId y umbral requeridos" });
  }
  if (umbral < 0 || umbral > 100) {
    return res.status(400).json({ error: "umbral debe ser entre 0 y 100" });
  }

  // El umbral de un cuestionario lo fija quien gestiona su módulo: el ADMIN, su dueño o el personal de la
  // escuela dueña (visibilidad "escuela"). Antes valía cualquier docente sobre cualquier cuestionario.
  if (!hasRole(user, "ADMIN")) {
    const modulo = await prisma.modulo.findFirst({ where: { id: String(moduloId), isDeleted: { not: true } } });
    const escuelaUsuario = (req as never as { user?: { schoolId?: string | null } }).user?.schoolId ?? null;
    const puede =
      !!modulo &&
      ((!!userId && modulo.ownerUserId === userId) ||
        (modulo.visibility === "escuela" && !!modulo.schoolId && modulo.schoolId === escuelaUsuario));
    if (!puede) return res.status(403).json({ error: "sin permiso sobre este módulo" });
  }

  const now = new Date().toISOString();
  await prisma.quizUmbral.upsert({
    where: { quizId: String(quizId) },
    create: {
      quizId: String(quizId),
      moduloId: String(moduloId),
      umbral,
      creadoBy: userId ?? "unknown",
      createdAt: now,
    },
    update: { umbral, moduloId: String(moduloId) },
  });

  return res.json({ ok: true, umbral });
});

// ── GET /api/pedagogico/riesgo/:aulaId ──────────────────────
pedagogico.get("/api/pedagogico/riesgo/:aulaId", requireUser, async (req, res) => {
  const user = getUserFromReq(req as never);
  if (!hasRole(user, "TEACHER") && !hasRole(user, "DIRECTIVO") && !hasRole(user, "ADMIN")) {
    return res.status(403).json({ error: "solo profesores" });
  }

  try {
    const { aulaId: _aulaIdRaw } = req.params; const aulaId = _aulaIdRaw as string;

    const aula = await aulaGestionable(req as never, res, aulaId);
    if (!aula) return;

    // PLAN-A §4 — `rolEnClase` real es "STUDENT" (el rol de cuenta "USER"
    // nunca se escribe en ClaseMiembro); con "USER" esto siempre daba
    // panel de riesgo vacío.
    const miembros = await prisma.claseMiembro.findMany({
      where: { claseId: aulaId, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() },
      select: { usuarioId: true },
    });
    // FASE 4 — el espejo-alumno no aparece en el panel de riesgo.
    const alumnoIds = miembros.map((m) => m.usuarioId).filter(Boolean) as string[];

    if (!alumnoIds.length) return res.json({ items: [] });

    const progreso = await prisma.progresoModulo.findMany({
      where: { usuarioId: { in: alumnoIds }, aulaId },
    });

    const intentosFallidos = await prisma.quizAttempt.findMany({
      where: { userId: { in: alumnoIds }, status: "submitted" },
      select: { userId: true, score: true, maxScore: true, quizId: true },
    }) as Array<{ userId: string; score: number | null; maxScore: number | null; quizId: string }>;

    const usuarios = await prisma.usuario.findMany({
      where: { id: { in: alumnoIds }, isDeleted: { not: true } },
      select: { id: true, fullName: true, username: true },
    });

    const usuarioMap = new Map(
      usuarios.map((u) => [u.id, String(u.fullName ?? u.username ?? "Alumno")])
    );

    const items = alumnoIds.map((alumnoId) => {
      const misProgreso = progreso.filter((p) => String(p.usuarioId ?? "") === alumnoId);
      const completados = misProgreso.filter((p) => p.status === "completado").length;
      const total = misProgreso.length;
      const porcentajeProgreso = total > 0 ? Math.round((completados / total) * 100) : 0;

      const misIntentos = intentosFallidos.filter((a) => String(a.userId ?? "") === alumnoId);
      const intentosFallidosCount = misIntentos.filter((a) => {
        const pct = (a.maxScore ?? 0) > 0
          ? Math.round(((a.score ?? 0) / (a.maxScore ?? 1)) * 100) : 0;
        return pct < 60;
      }).length;

      const enRiesgo = porcentajeProgreso < 30 || intentosFallidosCount >= 3;

      return {
        alumnoId,
        nombre: usuarioMap.get(alumnoId) ?? alumnoId,
        porcentajeProgreso,
        intentosFallidos: intentosFallidosCount,
        enRiesgo,
        modulosCompletados: completados,
        modulosTotal: total,
      };
    }).filter((a) => a.enRiesgo)
      .sort((a, b) => a.porcentajeProgreso - b.porcentajeProgreso);

    return res.json({ items, aulaId });
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// ── POST /api/pedagogico/desbloquear ────────────────────────
pedagogico.post("/api/pedagogico/desbloquear", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const user = getUserFromReq(req as never);
  if (!hasRole(user, "TEACHER") && !hasRole(user, "DIRECTIVO") && !hasRole(user, "ADMIN")) {
    return res.status(403).json({ error: "solo profesores" });
  }

  const { moduloId, alumnoId, aulaId, motivo } = req.body as Record<string, unknown>;

  if (!moduloId || !alumnoId || !aulaId) {
    return res.status(400).json({ error: "moduloId, alumnoId y aulaId requeridos" });
  }

  try {
    const aula = await aulaGestionable(req as never, res, String(aulaId));
    if (!aula) return;

    // PLAN-A §4 — mismo mismatch: `rolEnClase` real es "STUDENT", nunca
    // "USER". Con "USER" esta verificación rechazaba (403) a CUALQUIER
    // alumno real de la aula.
    const isMember = await prisma.claseMiembro.findFirst({
      where: { claseId: String(aulaId), usuarioId: String(alumnoId), rolEnClase: "STUDENT" },
    });
    if (!isMember) {
      return res.status(403).json({ error: "el alumno no pertenece a esta aula" });
    }
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error verificando aula"
    });
  }

  const id = genId("desb");
  const now = new Date().toISOString();

  await prisma.desbloqueoManual.upsert({
    where: {
      moduloId_usuarioId_aulaId: {
        moduloId: String(moduloId),
        usuarioId: String(alumnoId),
        aulaId: String(aulaId),
      },
    },
    create: {
      id,
      moduloId: String(moduloId),
      usuarioId: String(alumnoId),
      aulaId: String(aulaId),
      desbloqueadoBy: userId ?? "unknown",
      motivo: typeof motivo === "string" ? motivo : null,
      createdAt: now,
    },
    update: {
      desbloqueadoBy: userId ?? "unknown",
      motivo: typeof motivo === "string" ? motivo : null,
      createdAt: now,
    },
  });

  try {
    await prisma.progresoModulo.updateMany({
      where: { usuarioId: String(alumnoId), moduloId: String(moduloId) },
      data: { status: "iniciado", updatedAt: now },
    });
  } catch { /* ignorar */ }

  return res.status(201).json({ id, ok: true });
});

// ── GET /api/pedagogico/modo-aula/:aulaId ───────────────────
pedagogico.get("/api/pedagogico/modo-aula/:aulaId", requireUser, async (req, res) => {
  const row = await prisma.modoAula.findUnique({
    where: { aulaId: String(req.params.aulaId) },
  });

  if (!row) {
    return res.json({ activo: false, restricciones: [], aulaId: req.params.aulaId });
  }

  return res.json({
    activo: row.activo,
    restricciones: row.restricciones.split(","),
    aulaId: row.aulaId,
    activadoAt: row.activadoAt,
  });
});

// ── POST /api/pedagogico/modo-aula ──────────────────────────
pedagogico.post("/api/pedagogico/modo-aula", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const user = getUserFromReq(req as never);
  if (!hasRole(user, "TEACHER") && !hasRole(user, "DIRECTIVO") && !hasRole(user, "ADMIN")) {
    return res.status(403).json({ error: "solo profesores" });
  }

  const { aulaId, activo, restricciones } = req.body as Record<string, unknown>;

  if (!aulaId) {
    return res.status(400).json({ error: "aulaId requerido" });
  }
  if (!(await aulaGestionable(req as never, res, String(aulaId)))) return;

  const restriccionesStr = Array.isArray(restricciones)
    ? restricciones.join(",")
    : "tienda,economia";

  const now = new Date().toISOString();

  await prisma.modoAula.upsert({
    where: { aulaId: String(aulaId) },
    create: {
      aulaId: String(aulaId),
      activo: Boolean(activo),
      restricciones: restriccionesStr,
      activadoBy: userId ?? "unknown",
      activadoAt: now,
      desactivadoAt: activo ? null : now,
    },
    update: {
      activo: Boolean(activo),
      restricciones: restriccionesStr,
      activadoBy: userId ?? "unknown",
      activadoAt: now,
      desactivadoAt: activo ? null : now,
    },
  });

  return res.json({ ok: true, activo, restricciones: restriccionesStr.split(",") });
});
