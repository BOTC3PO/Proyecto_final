import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { getDb } from "../lib/db";

export const calendario = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── GET /api/calendario/unificado ───────────────────────────
// Vista unificada — eventos de la escuela + aulas del usuario
calendario.get("/api/calendario/unificado", requireUser,
  async (req, res) => {
    const userId = getId(req as never);
    const schoolId = getSchoolId(req as never);
    const role = getRole(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const desde = typeof req.query.desde === "string"
      ? req.query.desde
      : new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          .toISOString().slice(0, 10);
    const hasta = typeof req.query.hasta === "string"
      ? req.query.hasta
      : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
          .toISOString().slice(0, 10);

    const sqliteDb = openContentDb();
    const eventos: Array<{
      id: string;
      tipo: string;
      titulo: string;
      descripcion: string | null;
      fechaInicio: string;
      fechaFin: string;
      origen: "escuela" | "aula";
      aulaId?: string;
      aulaNombre?: string;
      escuelaId?: string;
    }> = [];

    // Eventos institucionales de la escuela
    if (schoolId) {
      const escuelaEventos = sqliteDb.prepare(`
        SELECT * FROM calendario_escuela
        WHERE escuela_id = ?
          AND is_deleted = 0
          AND fecha_inicio <= ?
          AND fecha_fin >= ?
        ORDER BY fecha_inicio ASC
      `).all(schoolId, hasta, desde) as Array<{
        id: string; tipo: string; titulo: string;
        descripcion: string | null;
        fecha_inicio: string; fecha_fin: string;
        escuela_id: string;
      }>;

      for (const e of escuelaEventos) {
        eventos.push({
          id: e.id,
          tipo: e.tipo,
          titulo: e.titulo,
          descripcion: e.descripcion,
          fechaInicio: e.fecha_inicio,
          fechaFin: e.fecha_fin,
          origen: "escuela",
          escuelaId: e.escuela_id,
        });
      }
    }

    // Aulas del usuario
    try {
      const mongoDB = await getDb();
      let aulaFilter: Record<string, unknown> = {
        isDeleted: { $ne: true },
        status: "ACTIVE",
      };

      if (role === "USER") {
        aulaFilter = {
          ...aulaFilter,
          "members.userId": userId,
          "members.role": "USER",
        };
      } else if (role === "TEACHER") {
        aulaFilter = {
          ...aulaFilter,
          $or: [
            { createdBy: userId },
            { teacherIds: userId },
          ],
        };
      } else if (role === "DIRECTIVO" || role === "ADMIN") {
        if (schoolId) {
          aulaFilter = {
            ...aulaFilter,
            $or: [
              { institutionId: schoolId },
              { schoolId },
            ],
          };
        }
      }

      const aulas = await mongoDB.collection("aulas")
        .find(aulaFilter)
        .project({ id: 1, name: 1 })
        .toArray();

      const aulaMap = new Map(
        aulas.map((a) => [String(a.id ?? ""), String(a.name ?? "")])
      );
      const aulaIds = aulas.map((a) => String(a.id ?? "")).filter(Boolean);

      if (aulaIds.length > 0) {
        const placeholders = aulaIds.map(() => "?").join(",");
        const actividadesAula = sqliteDb.prepare(`
          SELECT * FROM actividades_aula
          WHERE aula_id IN (${placeholders})
            AND is_deleted = 0
            AND fecha >= ?
            AND fecha <= ?
          ORDER BY fecha ASC
        `).all(...aulaIds, desde, hasta) as Array<{
          id: string; aula_id: string; tipo: string;
          titulo: string; descripcion: string | null;
          fecha: string; fecha_fin: string | null;
        }>;

        for (const a of actividadesAula) {
          eventos.push({
            id: a.id,
            tipo: a.tipo,
            titulo: a.titulo,
            descripcion: a.descripcion,
            fechaInicio: a.fecha,
            fechaFin: a.fecha_fin ?? a.fecha,
            origen: "aula",
            aulaId: a.aula_id,
            aulaNombre: aulaMap.get(a.aula_id) ?? "Aula",
          });
        }
      }
    } catch { /* si MongoDB falla devolver solo escuela */ }

    return res.json({ eventos, desde, hasta });
  }
);

// ── GET /api/calendario/escuela ─────────────────────────────
// Eventos institucionales de la escuela
calendario.get("/api/calendario/escuela", requireUser, (req, res) => {
  const schoolId = getSchoolId(req as never);
  if (!schoolId) return res.json({ items: [] });

  const desde = typeof req.query.desde === "string"
    ? req.query.desde : null;
  const hasta = typeof req.query.hasta === "string"
    ? req.query.hasta : null;

  const db = openContentDb();
  let query = `
    SELECT * FROM calendario_escuela
    WHERE escuela_id = ? AND is_deleted = 0
  `;
  const params: string[] = [schoolId];

  if (desde) { query += " AND fecha_fin >= ?"; params.push(desde); }
  if (hasta) { query += " AND fecha_inicio <= ?"; params.push(hasta); }
  query += " ORDER BY fecha_inicio ASC LIMIT 100";

  const items = db.prepare(query).all(...params);
  return res.json({ items });
});

// ── POST /api/calendario/escuela ────────────────────────────
// Directivo crea evento institucional
calendario.post("/api/calendario/escuela", requireUser, (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  const role = getRole(req as never);

  if (!["DIRECTIVO", "ADMIN"].includes(role ?? "")) {
    return res.status(403).json({
      error: "Solo directivos pueden crear eventos institucionales."
    });
  }
  if (!schoolId) return res.status(400).json({ error: "escuela requerida" });

  const { tipo, titulo, descripcion, fechaInicio, fechaFin } =
    req.body as Record<string, unknown>;

  if (!tipo || !titulo || !fechaInicio) {
    return res.status(400).json({
      error: "tipo, titulo y fechaInicio requeridos"
    });
  }

  const db = openContentDb();
  const id = genId("cal");
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO calendario_escuela
      (id, escuela_id, tipo, titulo, descripcion,
       fecha_inicio, fecha_fin, created_by, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id, schoolId,
    String(tipo), String(titulo),
    typeof descripcion === "string" ? descripcion : null,
    String(fechaInicio),
    typeof fechaFin === "string" ? fechaFin : String(fechaInicio),
    userId, now
  );

  return res.status(201).json({ id, ok: true });
});

// ── DELETE /api/calendario/escuela/:id ──────────────────────
calendario.delete("/api/calendario/escuela/:id",
  requireUser, (req, res) => {
    const role = getRole(req as never);
    if (!["DIRECTIVO", "ADMIN"].includes(role ?? "")) {
      return res.status(403).json({ error: "sin permiso" });
    }

    const db = openContentDb();
    db.prepare(`
      UPDATE calendario_escuela
      SET is_deleted = 1
      WHERE id = ?
    `).run(req.params.id);

    return res.json({ ok: true });
  }
);

// ── POST /api/calendario/aula ───────────────────────────────
// Profesor crea evento en un aula
// (reutiliza la lógica de actividades_aula existente
//  pero con soporte para fecha_fin y nuevos tipos)
calendario.post("/api/calendario/aula", requireUser, (req, res) => {
  const userId = getId(req as never);
  const role = getRole(req as never);

  if (!["TEACHER", "DIRECTIVO", "ADMIN"].includes(role ?? "")) {
    return res.status(403).json({ error: "sin permiso" });
  }

  const { aulaId, tipo, titulo, descripcion, fechaInicio, fechaFin } =
    req.body as Record<string, unknown>;

  if (!aulaId || !tipo || !titulo || !fechaInicio) {
    return res.status(400).json({
      error: "aulaId, tipo, titulo y fechaInicio requeridos"
    });
  }

  const db = openContentDb();
  const id = genId("act");
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO actividades_aula
      (id, aula_id, tipo, titulo, descripcion,
       fecha, fecha_fin, created_by, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id, String(aulaId),
    String(tipo), String(titulo),
    typeof descripcion === "string" ? descripcion : null,
    String(fechaInicio),
    typeof fechaFin === "string" ? fechaFin : null,
    userId, now
  );

  return res.status(201).json({ id, ok: true });
});

// ── DELETE /api/calendario/aula/:id ─────────────────────────
calendario.delete("/api/calendario/aula/:id",
  requireUser, (req, res) => {
    const role = getRole(req as never);
    if (!["TEACHER", "DIRECTIVO", "ADMIN"].includes(role ?? "")) {
      return res.status(403).json({ error: "sin permiso" });
    }

    const db = openContentDb();
    db.prepare(`
      UPDATE actividades_aula SET is_deleted = 1 WHERE id = ?
    `).run(req.params.id);

    return res.json({ ok: true });
  }
);
