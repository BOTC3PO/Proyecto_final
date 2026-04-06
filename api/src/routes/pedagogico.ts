import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { getDb } from "../lib/db";

export const pedagogico = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

const isStaff = (role: string | null) =>
  ["TEACHER", "DIRECTIVO", "ADMIN"].includes(role ?? "");

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── GET /api/pedagogico/umbral/:quizId ──────────────────────
// Obtener umbral de un quiz
pedagogico.get("/api/pedagogico/umbral/:quizId",
  requireUser, (req, res) => {
    const db = openContentDb();
    const row = db.prepare(
      "SELECT umbral FROM quiz_umbrales WHERE quiz_id = ?"
    ).get(req.params.quizId) as { umbral: number } | undefined;
    return res.json({ umbral: row?.umbral ?? 60 });
  }
);

// ── POST /api/pedagogico/umbral ─────────────────────────────
// Profesor configura umbral de aprobación para un quiz
pedagogico.post("/api/pedagogico/umbral",
  requireUser, (req, res) => {
    const userId = getId(req as never);
    const role = getRole(req as never);
    if (!isStaff(role)) {
      return res.status(403).json({ error: "solo profesores" });
    }

    const { quizId, moduloId, umbral } = req.body as Record<string, unknown>;
    if (!quizId || !moduloId || typeof umbral !== "number") {
      return res.status(400).json({ error: "quizId, moduloId y umbral requeridos" });
    }
    if (umbral < 0 || umbral > 100) {
      return res.status(400).json({ error: "umbral debe ser entre 0 y 100" });
    }

    const db = openContentDb();
    const now = new Date().toISOString();
    db.prepare(`
      INSERT OR REPLACE INTO quiz_umbrales
        (quiz_id, modulo_id, umbral, creado_by, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).run(String(quizId), String(moduloId), umbral, userId, now);

    return res.json({ ok: true, umbral });
  }
);

// ── GET /api/pedagogico/riesgo/:aulaId ──────────────────────
// Alumnos en riesgo — bajo progreso o muchos intentos fallidos
pedagogico.get("/api/pedagogico/riesgo/:aulaId",
  requireUser, async (req, res) => {
    const role = getRole(req as never);
    if (!isStaff(role)) {
      return res.status(403).json({ error: "solo profesores" });
    }

    try {
      const db = await getDb();
      const { aulaId } = req.params;

      // Obtener alumnos del aula
      const aula = await db.collection("aulas").findOne({
        id: aulaId, isDeleted: { $ne: true }
      });
      if (!aula) return res.status(404).json({ error: "aula no encontrada" });

      const members = (aula.members ?? []) as Array<{
        userId?: string; role?: string;
      }>;
      const alumnoIds = members
        .filter((m) => m.role === "USER")
        .map((m) => m.userId)
        .filter(Boolean) as string[];

      if (!alumnoIds.length) return res.json({ items: [] });

      // Obtener progreso de todos los alumnos
      const progreso = await db.collection("progreso_modulos").find({
        usuarioId: { $in: alumnoIds },
        aulaId,
      }).toArray();

      // Obtener intentos fallidos (formal, no completado)
      const intentosFallidos = await db.collection("quiz_attempts").find({
        userId: { $in: alumnoIds },
        status: "submitted",
        score: { $exists: true },
      }).toArray() as Array<{
        userId: string;
        score: number;
        maxScore: number;
        quizId: string;
        moduleId?: string;
      }>;

      // Obtener nombres
      const usuarios = await db.collection("usuarios").find({
        $or: [{ id: { $in: alumnoIds } }, { _id: { $in: alumnoIds } }],
        isDeleted: { $ne: true },
      }).project({ id: 1, _id: 1, fullName: 1, username: 1 }).toArray();

      const usuarioMap = new Map(
        usuarios.map((u) => [
          String(u.id ?? u._id ?? ""),
          String(u.fullName ?? u.username ?? "Alumno"),
        ])
      );

      // Agrupar por alumno
      const items = alumnoIds.map((alumnoId) => {
        const misProgreso = progreso.filter(
          (p) => String(p.usuarioId ?? "") === alumnoId
        );
        const completados = misProgreso.filter(
          (p) => p.status === "completado"
        ).length;
        const total = misProgreso.length;
        const porcentajeProgreso = total > 0
          ? Math.round((completados / total) * 100) : 0;

        const misIntentos = intentosFallidos.filter(
          (a) => String(a.userId ?? "") === alumnoId
        );
        const intentosFallidosCount = misIntentos.filter((a) => {
          const pct = a.maxScore > 0
            ? Math.round((a.score / a.maxScore) * 100) : 0;
          return pct < 60;
        }).length;

        const enRiesgo = porcentajeProgreso < 30 ||
          intentosFallidosCount >= 3;

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
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// ── POST /api/pedagogico/desbloquear ────────────────────────
// Profesor desbloquea manualmente un módulo para un alumno
pedagogico.post("/api/pedagogico/desbloquear",
  requireUser, async (req, res) => {
    const userId = getId(req as never);
    const role = getRole(req as never);
    if (!isStaff(role)) {
      return res.status(403).json({ error: "solo profesores" });
    }

    const { moduloId, alumnoId, aulaId, motivo } =
      req.body as Record<string, unknown>;

    if (!moduloId || !alumnoId || !aulaId) {
      return res.status(400).json({
        error: "moduloId, alumnoId y aulaId requeridos"
      });
    }

    const sqliteDb = openContentDb();
    const id = genId("desb");
    const now = new Date().toISOString();

    sqliteDb.prepare(`
      INSERT OR REPLACE INTO desbloqueos_manuales
        (id, modulo_id, usuario_id, aula_id,
         desbloqueado_by, motivo, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      String(moduloId),
      String(alumnoId),
      String(aulaId),
      userId,
      typeof motivo === "string" ? motivo : null,
      now
    );

    // También actualizar progreso en MongoDB
    try {
      const db = await getDb();
      await db.collection("progreso_modulos").updateOne(
        { usuarioId: String(alumnoId), moduloId: String(moduloId) },
        {
          $set: {
            status: "iniciado",
            desbloqueadoManualmente: true,
            updatedAt: now,
          }
        },
        { upsert: true }
      );
    } catch { /* ignorar */ }

    return res.status(201).json({ id, ok: true });
  }
);

// ── GET /api/pedagogico/modo-aula/:aulaId ───────────────────
pedagogico.get("/api/pedagogico/modo-aula/:aulaId",
  requireUser, (req, res) => {
    const db = openContentDb();
    const row = db.prepare(
      "SELECT * FROM modo_aula WHERE aula_id = ?"
    ).get(req.params.aulaId) as {
      aula_id: string; activo: number;
      restricciones: string; activado_by: string;
      activado_at: string;
    } | undefined;

    if (!row) {
      return res.json({
        activo: false,
        restricciones: [],
        aulaId: req.params.aulaId,
      });
    }

    return res.json({
      activo: row.activo === 1,
      restricciones: row.restricciones.split(","),
      aulaId: row.aula_id,
      activadoAt: row.activado_at,
    });
  }
);

// ── POST /api/pedagogico/modo-aula ──────────────────────────
// Profesor activa o desactiva el modo aula
pedagogico.post("/api/pedagogico/modo-aula",
  requireUser, (req, res) => {
    const userId = getId(req as never);
    const role = getRole(req as never);
    if (!isStaff(role)) {
      return res.status(403).json({ error: "solo profesores" });
    }

    const { aulaId, activo, restricciones } =
      req.body as Record<string, unknown>;

    if (!aulaId) {
      return res.status(400).json({ error: "aulaId requerido" });
    }

    const restriccionesStr = Array.isArray(restricciones)
      ? restricciones.join(",")
      : "tienda,economia";

    const db = openContentDb();
    const now = new Date().toISOString();

    db.prepare(`
      INSERT OR REPLACE INTO modo_aula
        (aula_id, activo, restricciones, activado_by,
         activado_at, desactivado_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      String(aulaId),
      activo ? 1 : 0,
      restriccionesStr,
      userId,
      now,
      activo ? null : now
    );

    return res.json({
      ok: true,
      activo,
      restricciones: restriccionesStr.split(","),
    });
  }
);
