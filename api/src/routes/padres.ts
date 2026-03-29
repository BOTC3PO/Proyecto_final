import express, { Router } from "express";
import { z } from "zod";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { requireUser } from "../lib/user-auth";
import { openContentDb } from "../lib/db-open";

export const padres = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const getParamId = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? null;

const VinculoHijoSchema = z.object({
  nombre: z.string().min(1),
  usuario: z.string().min(1),
  cumple: z.string().min(1),
  grado: z.string().min(1),
  escuela: z.string().optional().nullable(),
  notas: z.string().optional().nullable(),
  permisosTareas: z.boolean(),
  permisosMensajes: z.boolean()
});

const RestriccionesSchema = z.object({
  permisosTareas: z.boolean().optional(),
  permisosMensajes: z.boolean().optional(),
  notas: z.string().optional().nullable()
});

const resolveParentId = (req: any) => {
  const raw = req.user?._id ?? req.user?.id;
  if (!raw) return null;
  if (typeof raw === "string") return toObjectId(raw);
  return raw;
};

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normalizeUsername = (value: string) => value.trim().replace(/^@/, "");

const isMinor = (birthdate?: Date | null) => {
  if (!birthdate) return false;
  const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

const ensureParentAccess = async (params: {
  parentId: ReturnType<typeof toObjectId>;
  childId: ReturnType<typeof toObjectId>;
}) => {
  if (!params.parentId || !params.childId) {
    return { ok: false as const, status: 400, error: "parentId and childId are required" };
  }
  const db = await getDb();
  const child = await db
    .collection("usuarios")
    .findOne({ _id: params.childId, isDeleted: { $ne: true } }, { projection: { birthdate: 1 } });
  if (!child) return { ok: false as const, status: 404, error: "child not found" };
  const vinculo = await db.collection("vinculos_padre_hijo").findOne({
    parentId: params.parentId,
    childId: params.childId,
    estado: { $ne: "revocado" }
  });
  if (!vinculo) return { ok: false as const, status: 403, error: "no link" };
  const minor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
  if (!minor && vinculo.estado !== "aprobado") {
    return { ok: false as const, status: 403, error: "approval required" };
  }
  return { ok: true as const, vinculo };
};

padres.post("/api/hijos", requireUser, ...bodyLimitMB(2), async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  try {
    const parsed = VinculoHijoSchema.parse(req.body);
    const username = normalizeUsername(parsed.usuario);
    const db = await getDb();
    const child = await db.collection("usuarios").findOne({
      username: { $regex: new RegExp(`^${escapeRegex(username)}$`, "i") },
      isDeleted: { $ne: true }
    });
    if (!child?._id) return res.status(404).json({ error: "child not found" });
    const childId = child._id;
    const existing = await db.collection("vinculos_padre_hijo").findOne({ parentId, childId });
    if (existing && existing.estado !== "revocado") {
      return res.status(409).json({ error: "child already linked" });
    }
    const activeCount = await db.collection("vinculos_padre_hijo").countDocuments({
      childId,
      estado: { $ne: "revocado" },
      ...(existing ? { _id: { $ne: existing._id } } : {})
    });
    if (activeCount >= 2) {
      return res.status(409).json({ error: "child already has max parents" });
    }
    const now = new Date();
    if (existing) {
      await db.collection("vinculos_padre_hijo").updateOne(
        { _id: existing._id },
        {
          $set: {
            estado: existing.estado === "aprobado" ? "aprobado" : "pendiente",
            solicitadoAt: existing.solicitadoAt ?? now,
            updatedAt: now,
            nombre: parsed.nombre,
            usuario: parsed.usuario,
            grado: parsed.grado,
            escuela: parsed.escuela ?? null,
            notas: parsed.notas ?? null,
            permisos: {
              tareas: parsed.permisosTareas,
              mensajes: parsed.permisosMensajes
            }
          }
        }
      );
      return res.json({ ok: true, estado: existing.estado === "aprobado" ? "aprobado" : "pendiente" });
    }
    const minor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
    await db.collection("vinculos_padre_hijo").insertOne({
      parentId,
      childId,
      estado: minor ? "aprobado" : "pendiente",
      solicitadoAt: now,
      createdAt: now,
      updatedAt: now,
      nombre: parsed.nombre,
      usuario: parsed.usuario,
      grado: parsed.grado,
      escuela: parsed.escuela ?? null,
      notas: parsed.notas ?? null,
      permisos: {
        tareas: parsed.permisosTareas,
        mensajes: parsed.permisosMensajes
      }
    });
    return res.status(201).json({ ok: true, estado: minor ? "aprobado" : "pendiente" });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

padres.get("/api/padres/hijos/:id/limites", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childIdParam = getParamId(req.params.id);
  const childId = childIdParam ? toObjectId(childIdParam) : null;
  if (!childId) return res.status(400).json({ error: "invalid child id" });
  const access = await ensureParentAccess({ parentId, childId });
  if (!access.ok) return res.status(access.status).json({ error: access.error });
  const permisos = (access.vinculo?.permisos ?? {}) as { tareas?: boolean; mensajes?: boolean };
  res.json({
    permisosTareas: permisos.tareas ?? true,
    permisosMensajes: permisos.mensajes ?? true,
    notas: access.vinculo?.notas ?? null
  });
});

padres.patch("/api/padres/hijos/:id/limites", requireUser, ...bodyLimitMB(1), async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childIdParam = getParamId(req.params.id);
  const childId = childIdParam ? toObjectId(childIdParam) : null;
  if (!childId) return res.status(400).json({ error: "invalid child id" });
  try {
    const parsed = RestriccionesSchema.parse(req.body);
    const access = await ensureParentAccess({ parentId, childId });
    if (!access.ok) return res.status(access.status).json({ error: access.error });
    const currentPermisos = access.vinculo?.permisos ?? {};
    const nextPermisos = {
      tareas: parsed.permisosTareas ?? (currentPermisos as { tareas?: boolean }).tareas ?? true,
      mensajes: parsed.permisosMensajes ?? (currentPermisos as { mensajes?: boolean }).mensajes ?? true
    };
    const db = await getDb();
    await db.collection("vinculos_padre_hijo").updateOne(
      { parentId, childId },
      {
        $set: {
          permisos: nextPermisos,
          notas: parsed.notas ?? access.vinculo?.notas ?? null,
          updatedAt: new Date()
        }
      }
    );
    return res.json({
      ok: true,
      permisosTareas: nextPermisos.tareas,
      permisosMensajes: nextPermisos.mensajes,
      notas: parsed.notas ?? access.vinculo?.notas ?? null
    });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

// GET /api/padres/hijos/:id/actividades
// Padre ve las próximas actividades del aula de su hijo
padres.get("/api/padres/hijos/:id/actividades", requireUser,
  async (req, res) => {
    const parentId = resolveParentId(req);
    if (!parentId) return res.status(401).json({ error: "not authenticated" });

    const childId = getParamId(req.params.id);
    if (!childId) return res.status(400).json({ error: "childId required" });

    // Verificar vínculo
    const access = await ensureParentAccess({
      parentId,
      childId: toObjectId(childId) ?? childId as any,
    });
    if (!access.ok) {
      return res.status(access.status).json({ error: access.error });
    }

    try {
      // Buscar aulas donde está el hijo
      const db = await getDb();
      const aulas = await db.collection("aulas").find({
        "members.userId": childId,
        isDeleted: { $ne: true },
        status: "ACTIVE",
      }).project({ id: 1, name: 1 }).toArray();

      const aulaIds = aulas.map((a) => String(a.id ?? a._id));

      if (!aulaIds.length) return res.json({ items: [] });

      // Buscar actividades futuras de esas aulas
      const sqliteDb = openContentDb();
      const hoy = new Date().toISOString();
      const placeholders = aulaIds.map(() => "?").join(",");
      const actividades = sqliteDb.prepare(`
        SELECT id, aula_id, tipo, titulo, descripcion, fecha
        FROM actividades_aula
        WHERE aula_id IN (${placeholders})
          AND is_deleted = 0
          AND fecha >= ?
        ORDER BY fecha ASC
        LIMIT 10
      `).all(...aulaIds, hoy) as Array<{
        id: string; aula_id: string; tipo: string;
        titulo: string; descripcion: string | null; fecha: string;
      }>;

      // Enriquecer con nombre del aula
      const aulaMap = new Map(
        aulas.map((a) => [String(a.id ?? a._id), String(a.name ?? "")])
      );

      const items = actividades.map((act) => ({
        id: act.id,
        aulaId: act.aula_id,
        aulaNombre: aulaMap.get(act.aula_id) ?? "Aula",
        tipo: act.tipo,
        titulo: act.titulo,
        descripcion: act.descripcion ?? undefined,
        fecha: act.fecha,
        when: new Date(act.fecha).toLocaleDateString("es-AR", {
          weekday: "long", day: "numeric", month: "long"
        }),
      }));

      return res.json({ items });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);

// GET /api/padres/hijos/:id/boletin
// Padre ve el boletín de calificaciones de su hijo
padres.get("/api/padres/hijos/:id/boletin", requireUser,
  async (req, res) => {
    const parentId = resolveParentId(req);
    if (!parentId) return res.status(401).json({ error: "not authenticated" });

    const childId = getParamId(req.params.id);
    if (!childId) return res.status(400).json({ error: "childId required" });

    const access = await ensureParentAccess({
      parentId,
      childId: toObjectId(childId) ?? childId as any,
    });
    if (!access.ok) {
      return res.status(access.status).json({ error: access.error });
    }

    try {
      const db = await getDb();

      // Buscar quiz-attempts de tipo formal del hijo
      const attempts = await db.collection("quiz_attempts").find({
        userId: childId,
        status: { $in: ["completed", "submitted"] },
      }).sort({ createdAt: -1 }).limit(50).toArray();

      // Buscar módulos para obtener materia
      const moduleIds = [...new Set(
        attempts.map((a) => String(a.moduleId ?? "")).filter(Boolean)
      )];
      const modules = moduleIds.length
        ? await db.collection("modulos").find({
            id: { $in: moduleIds }
          }).project({ id: 1, title: 1, subject: 1, category: 1 })
          .toArray()
        : [];
      const moduleMap = new Map(
        modules.map((m) => [String(m.id ?? ""), m])
      );

      // Agrupar por materia
      const porMateria = new Map<string, Array<{
        quizId: string;
        quizTitle?: string;
        score: number | null;
        maxScore: number | null;
        fecha: string;
      }>>();

      for (const attempt of attempts) {
        const mod = moduleMap.get(String(attempt.moduleId ?? ""));
        const materia = String(
          mod?.subject ?? mod?.category ?? "General"
        );
        if (!porMateria.has(materia)) porMateria.set(materia, []);
        porMateria.get(materia)!.push({
          quizId: String(attempt.quizId ?? ""),
          quizTitle: attempt.quizTitle as string | undefined,
          score: typeof attempt.score === "number" ? attempt.score : null,
          maxScore: typeof attempt.maxScore === "number"
            ? attempt.maxScore : null,
          fecha: String(attempt.completedAt ?? attempt.createdAt ?? ""),
        });
      }

      const materias = Array.from(porMateria.entries()).map(
        ([materia, items]) => {
          const conNota = items.filter((i) => i.score !== null);
          const promedio = conNota.length
            ? Math.round(
                conNota.reduce((acc, i) => acc + (i.score ?? 0), 0) /
                conNota.length
              )
            : null;
          return { materia, promedio, evaluaciones: items };
        }
      );

      return res.json({ materias, total: attempts.length });
    } catch (err) {
      return res.status(500).json({
        error: err instanceof Error ? err.message : "error"
      });
    }
  }
);
