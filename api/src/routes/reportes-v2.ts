import { Router } from "express";
import { getDb } from "../lib/db";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";

export const reportesV2 = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

// ── GET /api/v2/reportes/boletin/:aulaId ────────────────────
// Boletín de calificaciones por aula — para profesor y directivo
reportesV2.get(
  "/api/v2/reportes/boletin/:aulaId",
  requireUser,
  async (req, res) => {
    const aulaId = req.params.aulaId;
    const role = getRole(req as never);
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });

    try {
      const db = await getDb();

      // Obtener alumnos del aula
      const aula = await db.collection("aulas").findOne({
        id: aulaId,
        isDeleted: { $ne: true },
      });
      if (!aula) return res.status(404).json({ error: "aula no encontrada" });

      const members = (aula.members ?? []) as Array<{
        userId?: string;
        role?: string;
      }>;
      const alumnoIds = members
        .filter((m) => m.role === "USER")
        .map((m) => m.userId)
        .filter(Boolean) as string[];

      if (!alumnoIds.length) {
        return res.json({ aulaId, aulaNombre: aula.name, alumnos: [] });
      }

      // Obtener nombres de alumnos
      const usuarios = await db.collection("usuarios").find({
        $or: [
          { id: { $in: alumnoIds } },
          { _id: { $in: alumnoIds } },
        ],
        isDeleted: { $ne: true },
      }).project({ id: 1, _id: 1, fullName: 1, username: 1 }).toArray();

      const usuarioMap = new Map(
        usuarios.map((u) => [
          String(u.id ?? u._id ?? ""),
          { nombre: String(u.fullName ?? u.username ?? "Alumno"), username: String(u.username ?? "") }
        ])
      );

      // Obtener quiz-attempts formales del aula
      const attempts = await db.collection("quiz_attempts").find({
        userId: { $in: alumnoIds },
        status: { $in: ["completed", "submitted"] },
      }).toArray();

      // Obtener módulos para materia
      const moduleIds = [...new Set(
        attempts.map((a) => String(a.moduleId ?? "")).filter(Boolean)
      )];
      const modules = moduleIds.length
        ? await db.collection("modulos").find({
            id: { $in: moduleIds }
          }).project({ id: 1, title: 1, subject: 1, category: 1 }).toArray()
        : [];
      const moduleMap = new Map(
        modules.map((m) => [String(m.id ?? ""), m])
      );

      // Agrupar por alumno
      const byAlumno = new Map<string, typeof attempts>();
      for (const attempt of attempts) {
        const uid = String(attempt.userId ?? "");
        if (!byAlumno.has(uid)) byAlumno.set(uid, []);
        byAlumno.get(uid)!.push(attempt);
      }

      const alumnos = alumnoIds.map((alumnoId) => {
        const info = usuarioMap.get(alumnoId) ?? { nombre: alumnoId, username: "" };
        const misAttempts = byAlumno.get(alumnoId) ?? [];

        // Agrupar por materia
        const porMateria = new Map<string, number[]>();
        for (const attempt of misAttempts) {
          const mod = moduleMap.get(String(attempt.moduleId ?? ""));
          const materia = String(mod?.subject ?? mod?.category ?? "General");
          if (typeof attempt.score === "number") {
            if (!porMateria.has(materia)) porMateria.set(materia, []);
            porMateria.get(materia)!.push(attempt.score);
          }
        }

        const materias = Array.from(porMateria.entries()).map(([materia, scores]) => ({
          materia,
          promedio: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
          evaluaciones: scores.length,
        }));

        const promedioGeneral = materias.length
          ? Math.round(materias.reduce((acc, m) => acc + m.promedio, 0) / materias.length)
          : null;

        return {
          alumnoId,
          nombre: info.nombre,
          username: info.username,
          promedioGeneral,
          materias,
          totalEvaluaciones: misAttempts.length,
        };
      });

      return res.json({
        aulaId,
        aulaNombre: String(aula.name ?? ""),
        generadoEn: new Date().toISOString(),
        alumnos,
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// ── GET /api/v2/reportes/asistencia/:aulaId ─────────────────
// Reporte de actividades del aula — para profesor y directivo
reportesV2.get(
  "/api/v2/reportes/asistencia/:aulaId",
  requireUser,
  (req, res) => {
    const aulaId = req.params.aulaId;
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });

    const sqliteDb = openContentDb();
    const actividades = sqliteDb.prepare(`
      SELECT id, tipo, titulo, descripcion, fecha, created_at
      FROM actividades_aula
      WHERE aula_id = ? AND is_deleted = 0
      ORDER BY fecha DESC
      LIMIT 50
    `).all(aulaId) as Array<{
      id: string; tipo: string; titulo: string;
      descripcion: string | null; fecha: string; created_at: string;
    }>;

    const clases = actividades.filter((a) => a.tipo === "clase");
    const evaluaciones = actividades.filter((a) => a.tipo === "evaluacion");
    const eventos = actividades.filter((a) => a.tipo === "evento");

    return res.json({
      aulaId,
      generadoEn: new Date().toISOString(),
      resumen: {
        totalClases: clases.length,
        totalEvaluaciones: evaluaciones.length,
        totalEventos: eventos.length,
      },
      actividades: actividades.map((a) => ({
        id: a.id,
        tipo: a.tipo,
        titulo: a.titulo,
        descripcion: a.descripcion ?? undefined,
        fecha: a.fecha,
        fechaFormateada: new Date(a.fecha).toLocaleDateString("es-AR", {
          weekday: "long", day: "numeric", month: "long", year: "numeric"
        }),
      })),
    });
  }
);

// ── GET /api/v2/reportes/progreso/:aulaId ───────────────────
// Métricas de progreso por módulo — para directivo y padres
reportesV2.get(
  "/api/v2/reportes/progreso/:aulaId",
  requireUser,
  async (req, res) => {
    const aulaId = req.params.aulaId;
    if (!aulaId) return res.status(400).json({ error: "aulaId requerido" });

    try {
      const db = await getDb();

      // Módulos asignados al aula via clase_modulos
      const sqliteDb = openContentDb();
      const modulosAsignados = sqliteDb.prepare(`
        SELECT modulo_id FROM clase_modulos WHERE clase_id = ?
      `).all(aulaId) as Array<{ modulo_id: string }>;

      const moduloIds = modulosAsignados.map((m) => m.modulo_id);
      if (!moduloIds.length) {
        return res.json({ aulaId, modulos: [], generadoEn: new Date().toISOString() });
      }

      // Datos de módulos
      const modulos = await db.collection("modulos").find({
        id: { $in: moduloIds }
      }).project({ id: 1, title: 1, subject: 1, category: 1 }).toArray();

      // Progreso de todos los alumnos
      const progreso = await db.collection("progreso_modulos").find({
        moduloId: { $in: moduloIds },
      }).toArray();

      const moduloMap = new Map(modulos.map((m) => [String(m.id ?? ""), m]));

      const porModulo = moduloIds.map((moduloId) => {
        const mod = moduloMap.get(moduloId);
        const items = progreso.filter(
          (p) => String(p.moduloId ?? "") === moduloId
        );
        const completados = items.filter((p) => p.status === "completado").length;
        const enProgreso = items.filter(
          (p) => p.status === "en_progreso" || p.status === "iniciado"
        ).length;
        const total = items.length;
        return {
          moduloId,
          titulo: String(mod?.title ?? moduloId),
          materia: String(mod?.subject ?? mod?.category ?? "General"),
          completados,
          enProgreso,
          sinIniciar: Math.max(0, total - completados - enProgreso),
          total,
          porcentaje: total > 0
            ? Math.round((completados / total) * 100) : 0,
        };
      });

      return res.json({
        aulaId,
        generadoEn: new Date().toISOString(),
        modulos: porModulo,
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// ── GET /api/v2/reportes/escuela ────────────────────────────
// Métricas globales de la escuela — para directivo
reportesV2.get(
  "/api/v2/reportes/escuela",
  requireUser,
  async (req, res) => {
    const schoolId = getSchoolId(req as never);
    const role = getRole(req as never);
    if (!schoolId && role !== "ADMIN") {
      return res.status(400).json({ error: "schoolId requerido" });
    }

    try {
      const db = await getDb();
      const filter = schoolId
        ? { $or: [{ institutionId: schoolId }, { schoolId }], isDeleted: { $ne: true } }
        : { isDeleted: { $ne: true } };

      const [totalAulas, totalUsuarios, aulas] = await Promise.all([
        db.collection("aulas").countDocuments({ ...filter, status: "ACTIVE" }),
        db.collection("usuarios").countDocuments({
          ...(schoolId ? { schoolId } : {}),
          isDeleted: { $ne: true },
        }),
        db.collection("aulas").find({ ...filter, status: "ACTIVE" })
          .project({ id: 1, name: 1 }).limit(20).toArray(),
      ]);

      const aulaIds = aulas.map((a) => String(a.id ?? ""));
      const sqliteDb = openContentDb();

      // Actividades de todas las aulas
      const actividadesCount = aulaIds.length
        ? (sqliteDb.prepare(`
            SELECT COUNT(*) as c FROM actividades_aula
            WHERE aula_id IN (${aulaIds.map(() => "?").join(",")})
              AND is_deleted = 0
          `).get(...aulaIds) as { c: number }).c
        : 0;

      // Progreso total
      const progresoTotal = await db.collection("progreso_modulos").countDocuments(
        aulaIds.length ? { aulaId: { $in: aulaIds } } : {}
      );
      const progresoCompletado = await db.collection("progreso_modulos").countDocuments({
        ...(aulaIds.length ? { aulaId: { $in: aulaIds } } : {}),
        status: "completado",
      });

      return res.json({
        generadoEn: new Date().toISOString(),
        escuela: schoolId ?? "global",
        indicadores: {
          totalAulas,
          totalUsuarios,
          totalActividades: actividadesCount,
          progresoTotal,
          progresoCompletado,
          porcentajeCompletado: progresoTotal > 0
            ? Math.round((progresoCompletado / progresoTotal) * 100) : 0,
        },
      });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);
