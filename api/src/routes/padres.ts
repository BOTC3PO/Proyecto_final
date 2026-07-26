import express, { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { sincronizarMembresia } from "../lib/memberships";
import { requireUser } from "../lib/user-auth";
import { isParentInRoles, resolveRoles, resolvePrimaryRole } from "../lib/roles";
import { vincularHijoCore } from "../lib/vinculo-padre-hijo";

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

const resolveParentId = (req: any): string | null => {
  const raw = req.user?._id ?? req.user?.id;
  if (!raw) return null;
  return typeof raw === "string" ? raw : raw.toString?.() ?? null;
};

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normalizeUsername = (value: string) => value.trim().replace(/^@/, "");

// `isMinor` local: en este archivo valida el HIJO (no el requester).
// La convención acá es la OPUESTA al helper canónico de
// `lib/age.ts`: sin `birthdate` del hijo asumimos mayor (porque un
// hijo sin fecha registrada no puede bloquear el alta — solo se le
// pide aprobación). El autoservicio de la Fase 6 (alumno→padre)
// usa el helper canónico porque ahí SÍ queremos bloquear sin
// birthdate. No unificar: las dos convenciones son intencionales.
const isMinor = (birthdate?: Date | string | null) => {
  if (!birthdate) return false;
  const bd = birthdate instanceof Date ? birthdate : new Date(birthdate);
  if (isNaN(bd.getTime())) return false;
  const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  return daysBetween(bd, new Date()) < 365.25 * 18;
};

const ensureParentAccess = async (params: {
  parentId: string;
  childId: string;
}) => {
  if (!params.parentId || !params.childId) {
    return { ok: false as const, status: 400, error: "parentId and childId are required" };
  }
  const child = await prisma.usuario.findFirst({
    where: { id: params.childId, isDeleted: { not: true } },
    select: { birthdate: true },
  });
  if (!child) return { ok: false as const, status: 404, error: "child not found" };
  const vinculo = await prisma.progresoModuloVinculo.findFirst({
    where: {
      parentId: params.parentId,
      childId: params.childId,
      estado: { not: "revocado" },
    },
  });
  if (!vinculo) return { ok: false as const, status: 403, error: "no link" };
  const minor = isMinor(child.birthdate ?? null);
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
    const child = await prisma.usuario.findFirst({
      where: {
        username: { equals: username },
        isDeleted: { not: true },
      },
    });
    if (!child?.id) return res.status(404).json({ error: "child not found" });
    const childId = child.id;

    // FIX-BUG-ROLE-03 — antes no había validación de roles
    // en este endpoint. Un USER/TEACHER/DIRECTIVO sin rol
    // PARENT podía agregarse como padre de alguien. También
    // podía agregarse a sí mismo como su propio hijo
    // (circular). Ahora:
    //   - El solicitante debe tener rol PARENT (o ser ADMIN
    //     para casos de testing/soporte).
    //   - El child no puede ser el mismo user.
    //   - El child debe tener un rol compatible con "ser
    //     hijo" (USER/TEACHER). No tiene sentido tener
    //     un PARENT/DIRECTIVO/ADMIN como hijo de otro padre.
    const requester = await prisma.usuario.findFirst({
      where: { id: parentId, isDeleted: { not: true } },
      select: { roles: true },
    });
    if (!requester) {
      return res.status(401).json({ error: "parent no encontrado" });
    }
    if (resolvePrimaryRole(requester) !== "PARENT" && resolvePrimaryRole(requester) !== "ADMIN") {
      return res.status(403).json({
        error: "Solo usuarios con rol padre/madre (o admin) pueden vincular hijos."
      });
    }
    // Validaciones de vínculo + idempotencia: núcleo compartido con el
    // alta por directivo (`POST /api/usuarios/:parentId/hijos`). El
    // estado de un vínculo NUEVO depende de si el hijo es menor.
    const minor = isMinor(child.birthdate ?? null);
    const result = await vincularHijoCore({
      parentId,
      childId,
      estadoSiNuevo: minor ? "aprobado" : "pendiente",
      datos: {
        nombre: parsed.nombre,
        usuario: parsed.usuario,
        grado: parsed.grado,
        escuela: parsed.escuela ?? null,
        notas: parsed.notas ?? null,
        permisosTareas: parsed.permisosTareas,
        permisosMensajes: parsed.permisosMensajes,
      },
    });
    if (!result.ok) return res.status(result.status).json({ error: result.error });
    return res.status(result.status).json({ ok: true, estado: result.estado });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

// ─── FASE 5 — espejo opt-in del padre ───────────────────────────────────
// POST /api/padres/crear-cuenta-alumno
// El padre crea (on-demand) su propia cuenta de alumno para estudiar.
// NO se auto-crea en el registro: es opt-in. Idempotente — si ya existe
// devuelve el mismo espejo. Tras crearlo, el padre puede usar el switch
// (`/api/auth/cambiar-cuenta`) para entrar como alumno.
// PLAN-multirol Fase 3 — antes esto creaba una CUENTA ESPEJO de alumno para
// el padre (segunda cuenta de la misma persona). Ahora le agrega el ROL de
// alumno a su propia cuenta: una membresía STUDENT en su escuela. Para
// estudiar cambia de rol (POST /api/auth/escuela-activa con `rol: "USER"`),
// no de cuenta.
padres.post("/api/padres/crear-cuenta-alumno", requireUser, ...bodyLimitMB(1), async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });

  const requester = await prisma.usuario.findFirst({
    where: { id: parentId, isDeleted: { not: true } },
    select: { roles: true, escuelaId: true }
  });
  if (!requester) return res.status(401).json({ error: "parent no encontrado" });
  if (!isParentInRoles(resolveRoles(requester))) {
    return res.status(403).json({
      error: "Solo una cuenta de padre/madre puede crear su cuenta de alumno."
    });
  }
  if (!requester.escuelaId) {
    return res.status(409).json({ error: "la cuenta no tiene escuela asignada" });
  }

  const yaEra = await prisma.membresia.findFirst({
    where: { usuarioId: parentId, escuelaId: requester.escuelaId, rol: "STUDENT", estado: "activa" }
  });
  await sincronizarMembresia({
    usuarioId: parentId,
    escuelaId: requester.escuelaId,
    rolUsuario: "USER"
  });

  return res.status(yaEra ? 200 : 201).json({
    ok: true,
    created: !yaEra,
    escuelaId: requester.escuelaId,
    rol: "USER"
  });
});

padres.get("/api/padres/hijos/:id/limites", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childId = getParamId(req.params.id);
  if (!childId) return res.status(400).json({ error: "invalid child id" });
  const access = await ensureParentAccess({ parentId, childId });
  if (!access.ok) return res.status(access.status).json({ error: access.error });
  const permisos = (() => {
    try {
      return typeof access.vinculo?.permisos === "string"
        ? JSON.parse(access.vinculo.permisos)
        : (access.vinculo?.permisos ?? {});
    } catch { return {}; }
  })() as { tareas?: boolean; mensajes?: boolean };
  res.json({
    permisosTareas: permisos.tareas ?? true,
    permisosMensajes: permisos.mensajes ?? true,
    notas: access.vinculo?.notas ?? null
  });
});

padres.patch("/api/padres/hijos/:id/limites", requireUser, ...bodyLimitMB(1), async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childId = getParamId(req.params.id);
  if (!childId) return res.status(400).json({ error: "invalid child id" });
  try {
    const parsed = RestriccionesSchema.parse(req.body);
    const access = await ensureParentAccess({ parentId, childId });
    if (!access.ok) return res.status(access.status).json({ error: access.error });
    const currentPermisos = (() => {
      try {
        return typeof access.vinculo?.permisos === "string"
          ? JSON.parse(access.vinculo.permisos)
          : (access.vinculo?.permisos ?? {});
      } catch { return {}; }
    })() as { tareas?: boolean; mensajes?: boolean };
    const nextPermisos = {
      tareas: parsed.permisosTareas ?? currentPermisos.tareas ?? true,
      mensajes: parsed.permisosMensajes ?? currentPermisos.mensajes ?? true,
    };
    await prisma.progresoModuloVinculo.updateMany({
      where: { parentId, childId },
      data: {
        permisos: JSON.stringify(nextPermisos),
        notas: parsed.notas ?? access.vinculo?.notas ?? null,
        updatedAt: new Date().toISOString(),
      },
    });
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

// POST /api/padres/hijos/:id/revocar
// PLAN-C §5 diferido (b): el estado "revocado" ya existía en el modelo
// (`ensureParentAccess`/`vincularHijoCore` lo leen) pero no había ruta
// que lo escribiera. No reutiliza `ensureParentAccess` porque esa
// función exige aprobación para vínculos "pendiente" — acá el padre
// debe poder cancelar tanto un vínculo aprobado como uno pendiente.
padres.post("/api/padres/hijos/:id/revocar", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childId = getParamId(req.params.id);
  if (!childId) return res.status(400).json({ error: "invalid child id" });

  const vinculo = await prisma.progresoModuloVinculo.findFirst({
    where: { parentId, childId, estado: { not: "revocado" } },
  });
  if (!vinculo) return res.status(404).json({ error: "vinculo not found" });

  await prisma.progresoModuloVinculo.updateMany({
    where: { parentId, childId },
    data: { estado: "revocado", updatedAt: new Date().toISOString() },
  });
  return res.json({ ok: true });
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
    const access = await ensureParentAccess({ parentId, childId });
    if (!access.ok) {
      return res.status(access.status).json({ error: access.error });
    }

    try {
      // Buscar aulas donde está el hijo via clase_miembros
      const memberships = await prisma.claseMiembro.findMany({
        where: { usuarioId: childId },
        select: { claseId: true },
      });
      const aulaIds = memberships.map((m) => m.claseId);

      if (!aulaIds.length) return res.json({ items: [] });

      // Buscar nombres de aulas
      const aulas = await prisma.clase.findMany({
        where: {
          id: { in: aulaIds },
          isDeleted: { not: true },
          status: "ACTIVE",
        },
        select: { id: true, name: true },
      });

      const aulaIdsActivos = aulas.map((a) => a.id);
      if (!aulaIdsActivos.length) return res.json({ items: [] });

      // Buscar actividades futuras de esas aulas
      const hoy = new Date().toISOString();
      const actividades = await prisma.actividadAula.findMany({
        where: {
          aulaId: { in: aulaIdsActivos },
          isDeleted: false,
          fecha: { gte: hoy },
        },
        orderBy: { fecha: "asc" },
        take: 10,
        select: { id: true, aulaId: true, tipo: true, titulo: true, descripcion: true, fecha: true },
      });

      // Enriquecer con nombre del aula
      const aulaMap = new Map(aulas.map((a) => [a.id, a.name ?? ""]));

      const items = actividades.map((act) => ({
        id: act.id,
        aulaId: act.aulaId,
        aulaNombre: aulaMap.get(act.aulaId) ?? "Aula",
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

    const access = await ensureParentAccess({ parentId, childId });
    if (!access.ok) {
      return res.status(access.status).json({ error: access.error });
    }

    try {
      // Buscar quiz-attempts de tipo formal del hijo
      const attempts = await prisma.quizAttempt.findMany({
        where: {
          userId: childId,
          status: { in: ["completed", "submitted"] },
        },
        orderBy: { submittedAt: "desc" },
        take: 50,
      });

      // attempt.quizId apunta al Quiz, no al Modulo — hay que resolver el
      // quiz primero para sacar título y moduleId, y recién ahí buscar el
      // módulo (mismo patrón que quiz-attempts.ts al armar ProfesorCalificaciones).
      const quizIds = [...new Set(
        attempts.map((a) => String((a as any).quizId ?? "")).filter(Boolean)
      )];
      const quizzes = quizIds.length
        ? await prisma.quiz.findMany({
            where: { id: { in: quizIds } },
            select: { id: true, title: true, moduleId: true },
          })
        : [];
      const quizMap = new Map(quizzes.map((q) => [q.id, q]));
      const moduleIds = [...new Set(
        quizzes.map((q) => q.moduleId).filter((id): id is string => Boolean(id))
      )];
      const modules = moduleIds.length
        ? await prisma.modulo.findMany({
            where: { id: { in: moduleIds } },
            select: { id: true, titulo: true, descripcion: true },
          })
        : [];
      const moduleMap = new Map(modules.map((m) => [m.id, m]));

      // Agrupar por materia
      const porMateria = new Map<string, Array<{
        quizId: string;
        quizTitle?: string;
        score: number | null;
        maxScore: number | null;
        fecha: string;
      }>>();

      for (const attempt of attempts) {
        const quiz = quizMap.get(String((attempt as any).quizId ?? ""));
        const mod = quiz?.moduleId ? moduleMap.get(quiz.moduleId) : undefined;
        const materia = String((mod as any)?.subject ?? (mod as any)?.category ?? "General");
        if (!porMateria.has(materia)) porMateria.set(materia, []);
        porMateria.get(materia)!.push({
          quizId: String(attempt.quizId ?? ""),
          quizTitle: quiz?.title ?? undefined,
          score: typeof attempt.score === "number" ? attempt.score : null,
          maxScore: typeof attempt.maxScore === "number" ? attempt.maxScore : null,
          fecha: String(attempt.submittedAt ?? attempt.startedAt ?? ""),
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

// ─── FASE 5 — área informativa: las aulas del hijo ──────────────────────
// GET /api/padres/hijos/:id/aulas
// Solo lectura. Una vez creado el vínculo padre–hijo, la(s) clase(s)
// del hijo aparecen para el padre. El padre NO opera el aula (no es
// docente ni alumno de ella): solo la ve. El acceso lo gobierna
// `ensureParentAccess` (vínculo no revocado + aprobación si corresponde).
padres.get("/api/padres/hijos/:id/aulas", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "not authenticated" });

  const childId = getParamId(req.params.id);
  if (!childId) return res.status(400).json({ error: "childId required" });

  const access = await ensureParentAccess({ parentId, childId });
  if (!access.ok) return res.status(access.status).json({ error: access.error });

  try {
    const memberships = await prisma.claseMiembro.findMany({
      where: { usuarioId: childId, rolEnClase: "STUDENT" },
      select: { claseId: true }
    });
    const claseIds = [...new Set(memberships.map((m) => m.claseId).filter(Boolean))] as string[];
    if (claseIds.length === 0) return res.json({ aulas: [] });

    const clases = await prisma.clase.findMany({
      where: { id: { in: claseIds }, isDeleted: { not: true }, status: "ACTIVE" },
      select: { id: true, name: true, grade: true }
    });

    const aulas = clases.map((c) => ({
      id: c.id,
      nombre: c.name ?? "Aula",
      grado: c.grade ?? null
    }));
    return res.json({ aulas });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error"
    });
  }
});
