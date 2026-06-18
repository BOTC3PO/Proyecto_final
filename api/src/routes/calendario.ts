import { Router } from "express";
import type { Prisma } from "@prisma/client";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";
import { hasRole, resolveRoles } from "../lib/roles";
// `hasRole` se usa en los guards específicos (chequeo de un rol
// puntual: ADMIN). `resolveRoles` y `hasAnyRole` cubren el resto.

export const calendario = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

// MULTIROL-01: helper local para chequear pertenencia a un set de
// roles (mira primero el array `roles`, después el singular `role`).
const hasAnyRole = (user: unknown, allowed: string[]) => {
  if (!user || typeof user !== "object") return false;
  const u = user as { role?: string; roles?: string[] };
  const roles = resolveRoles({ role: u.role, roles: u.roles });
  return roles.some((r) => allowed.includes(r));
};

const getUserFromReq = (req: { user?: { role?: string; roles?: string[] } }) => req.user ?? null;

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── GET /api/calendario/unificado ───────────────────────────
calendario.get("/api/calendario/unificado", requireUser,
  async (req, res) => {
    const userId = getId(req as never);
    const schoolId = getSchoolId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const desde = typeof req.query.desde === "string"
      ? req.query.desde
      : new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          .toISOString().slice(0, 10);
    const hasta = typeof req.query.hasta === "string"
      ? req.query.hasta
      : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
          .toISOString().slice(0, 10);

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

    // FIX-CALENDARIO-B: aulas a las que el usuario tiene acceso. Se
    // llena dentro del bloque try (silencioso) más abajo y se usa
    // para filtrar la visibilidad de los eventos escuela acotados a
    // un aula. Si el try falla, queda como Set vacío y los acotados
    // solo los ven los staff (más restrictivo, pero los globales
    // siguen funcionando).
    //
    // FIX-CALENDARIO-B: el procesamiento de los eventos escuela
    // (incluyendo el filtro de visibilidad de los acotados) se hace
    // DESPUÉS del try block, no antes, para que `userAulaIds` ya
    // esté populado.
    const userAulaIds = new Set<string>();
    const aulaMap = new Map<string, string>();
    let escuelaEventos: Array<{
      id: string;
      escuelaId: string;
      aulaId?: string | null;
      tipo: string;
      titulo: string;
      descripcion: string | null;
      fechaInicio: string;
      fechaFin: string;
    }> = [];
    let aulasAcotadasMap = new Map<string, { id: string; name: string; escuelaId: string }>();

    if (schoolId) {
      escuelaEventos = (await prisma.calendarioEscuela.findMany({
        where: {
          escuelaId: schoolId,
          isDeleted: false,
          fechaInicio: { lte: hasta },
          fechaFin: { gte: desde },
        },
        orderBy: { fechaInicio: "asc" },
      })) as typeof escuelaEventos;

      // FIX-CALENDARIO-B: para los eventos escuela con `aulaId`
      // (acotados a un aula), necesitamos resolver el `aulaNombre` y
      // validar que el aula referenciada pertenece a la escuela del
      // evento (defensa contra datos corruptos). Pre-fetchamos solo
      // las aulas referenciadas para no pagar un findMany del total
      // de aulas de la escuela.
      const aulasAcotadasIds = [
        ...new Set(
          escuelaEventos
            .map((e) => e.aulaId)
            .filter((id): id is string => typeof id === "string" && id.length > 0)
        ),
      ];
      const aulasAcotadas = aulasAcotadasIds.length > 0
        ? await prisma.clase.findMany({
            where: { id: { in: aulasAcotadasIds } },
            select: { id: true, name: true, escuelaId: true },
          })
        : [];
      aulasAcotadasMap = new Map(
        aulasAcotadas.map((a) => [a.id, a])
      );
    }

    try {
      let aulaWhere: Prisma.ClaseWhereInput = { isDeleted: false, status: "ACTIVE" };

      if (hasRole(getUserFromReq(req as never), "USER")
        && !hasAnyRole(getUserFromReq(req as never), ["TEACHER", "DIRECTIVO", "ADMIN"])) {
        aulaWhere = {
          ...aulaWhere,
          miembros: { some: { usuarioId: userId!, rolEnClase: "USER" } },
        };
      } else if (hasRole(getUserFromReq(req as never), "TEACHER")) {
        // FIX-CALENDARIO — usar el criterio canónico de "docente del aula"
        // (QA-FIX-05, `isClassroomTeacher` en `classroom-scope.ts:57-67`):
        // admin, owner por `createdBy`/`teacherId`/`teacherOfRecord`, o
        // miembro con `rolEnClase === "TEACHER"`. Antes el OR solo tenía
        // `createdBy`/`teacherId`, así que un TEACHER-miembro veía sus
        // aulas en el dropdown de `ProfesorCalendario` (post-QA-FIX-08)
        // pero el feed unificado las descartaba y sus eventos no
        // aparecían. (Ver `docs/qa/diagnostico_calendario.md`.)
        //
        // NOTA: este OR es la traducción del helper `isClassroomTeacher`
        // a Prisma `where`. Si en el futuro el helper cambia, hay que
        // actualizar este OR en consecuencia — o mejor aún, refactorizar
        // el helper para devolver también un `where` de Prisma y reusarlo
        // desde acá y desde `aulas.ts:135-160`.
        aulaWhere = {
          ...aulaWhere,
          OR: [
            { createdBy: userId! },
            { teacherId: userId! },
            { teacherOfRecord: userId! },
            { miembros: { some: { usuarioId: userId!, rolEnClase: "TEACHER" } } },
          ],
        };
      } else if (hasAnyRole(getUserFromReq(req as never), ["DIRECTIVO", "ADMIN"]) && schoolId) {
        aulaWhere = { ...aulaWhere, escuelaId: schoolId };
      }

      const aulas = await prisma.clase.findMany({
        where: aulaWhere,
        select: { id: true, name: true }
      });

      // FIX-CALENDARIO-B: poplar `userAulaIds` y `aulaMap` para que
      // el filtro de visibilidad de los eventos escuela acotados
      // (más arriba) pueda usar la misma info.
      for (const a of aulas) {
        if (a.id) {
          userAulaIds.add(a.id);
          if (a.name) aulaMap.set(a.id, a.name);
        }
      }
      const aulaIds = aulas.map((a) => a.id).filter(Boolean);

      if (aulaIds.length > 0) {
        const actividadesAula = await prisma.actividadAula.findMany({
          where: {
            aulaId: { in: aulaIds },
            isDeleted: false,
            fecha: { gte: desde, lte: hasta },
          },
          orderBy: { fecha: "asc" },
        });

        for (const a of actividadesAula) {
          eventos.push({
            id: a.id,
            tipo: a.tipo,
            titulo: a.titulo,
            descripcion: a.descripcion,
            fechaInicio: a.fecha,
            fechaFin: a.fechaFin ?? a.fecha,
            origen: "aula",
            aulaId: a.aulaId,
            aulaNombre: aulaMap.get(a.aulaId) ?? "Aula",
          });
        }
      }
    } catch { /* si Prisma falla devolver solo escuela */ }

    // FIX-CALENDARIO-B: procesar los eventos escuela AHORA que
    // `userAulaIds` y `aulaMap` ya están populados (o quedaron
    // vacíos si el try falló). Si el try falló, los acotados solo
    // los ven los staff, los globales se muestran a todos los de
    // la escuela.
    if (schoolId) {
      const isStaff = hasAnyRole(getUserFromReq(req as never), ["DIRECTIVO", "ADMIN"]);
      for (const e of escuelaEventos) {
        if (e.aulaId) {
          const aulaRef = aulasAcotadasMap.get(e.aulaId);
          if (!aulaRef || aulaRef.escuelaId !== e.escuelaId) continue;
          // Visibilidad acotada: solo staff o usuarios con acceso a
          // esa aula ven el evento.
          if (!isStaff && !userAulaIds.has(e.aulaId)) continue;
          eventos.push({
            id: e.id,
            tipo: e.tipo,
            titulo: e.titulo,
            descripcion: e.descripcion,
            fechaInicio: e.fechaInicio,
            fechaFin: e.fechaFin,
            origen: "escuela",
            escuelaId: e.escuelaId,
            aulaId: e.aulaId,
            aulaNombre: aulaMap.get(e.aulaId) ?? aulaRef.name,
          });
          continue;
        }
        // Evento global (aulaId null): visible para todos los de la
        // escuela (comportamiento histórico).
        eventos.push({
          id: e.id,
          tipo: e.tipo,
          titulo: e.titulo,
          descripcion: e.descripcion,
          fechaInicio: e.fechaInicio,
          fechaFin: e.fechaFin,
          origen: "escuela",
          escuelaId: e.escuelaId,
        });
      }
    }

    return res.json({ eventos, desde, hasta });
  }
);

// ── GET /api/calendario/escuela ─────────────────────────────
calendario.get("/api/calendario/escuela", requireUser, async (req, res) => {
  const schoolId = getSchoolId(req as never);
  if (!schoolId) return res.json({ items: [] });

  const desde = typeof req.query.desde === "string" ? req.query.desde : null;
  const hasta = typeof req.query.hasta === "string" ? req.query.hasta : null;

  const items = await prisma.calendarioEscuela.findMany({
    where: {
      escuelaId: schoolId,
      isDeleted: false,
      ...(desde ? { fechaFin: { gte: desde } } : {}),
      ...(hasta ? { fechaInicio: { lte: hasta } } : {}),
    },
    orderBy: { fechaInicio: "asc" },
    take: 100,
  });

  return res.json({ items });
});

// ── POST /api/calendario/escuela ────────────────────────────
calendario.post("/api/calendario/escuela", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);

  if (!hasAnyRole(getUserFromReq(req as never), ["DIRECTIVO", "ADMIN", "TEACHER"])) {
    return res.status(403).json({ error: "forbidden" });
  }
  if (!schoolId) return res.status(400).json({ error: "escuela requerida" });

  const { tipo, titulo, descripcion, fechaInicio, fechaFin, aulaId } =
    req.body as Record<string, unknown>;

  if (!tipo || !titulo || !fechaInicio) {
    return res.status(400).json({ error: "tipo, titulo y fechaInicio requeridos" });
  }

  // FIX-CALENDARIO-B: `aulaId` opcional. Si viene, validar que el
  // aula exista y pertenezca a la escuela del usuario. Si no
  // viene o viene vacío, el evento es global (comportamiento
  // histórico intacto).
  let aulaIdPersist: string | null = null;
  if (typeof aulaId === "string" && aulaId.length > 0) {
    const aula = await prisma.clase.findFirst({
      where: { id: aulaId, isDeleted: { not: true } },
      select: { id: true, escuelaId: true },
    });
    if (!aula) {
      return res.status(400).json({ error: "aulaId no existe" });
    }
    if (aula.escuelaId !== schoolId) {
      return res.status(400).json({ error: "aulaId no pertenece a la escuela" });
    }
    aulaIdPersist = aula.id;
  }

  const id = genId("cal");
  const now = new Date().toISOString();

  await prisma.calendarioEscuela.create({
    data: {
      id,
      escuelaId: schoolId,
      // FIX-CALENDARIO-B: persistir aulaId (nullable). null =
      // global. Decisión B del diagnóstico (no M:N).
      aulaId: aulaIdPersist,
      tipo: String(tipo),
      titulo: String(titulo),
      descripcion: typeof descripcion === "string" ? descripcion : null,
      fechaInicio: String(fechaInicio),
      fechaFin: typeof fechaFin === "string" ? fechaFin : String(fechaInicio),
      createdBy: userId ?? "unknown",
      createdAt: now,
    },
  });

  return res.status(201).json({ id, ok: true, aulaId: aulaIdPersist });
});

// ── DELETE /api/calendario/escuela/:id ──────────────────────
calendario.delete("/api/calendario/escuela/:id", requireUser, async (req, res) => {
  if (!hasAnyRole(getUserFromReq(req as never), ["DIRECTIVO", "ADMIN"])) {
    return res.status(403).json({ error: "sin permiso" });
  }

  const evento = await prisma.calendarioEscuela.findFirst({
    where: { id: String(req.params.id), isDeleted: false },
    select: { escuelaId: true },
  });

  if (!evento) {
    return res.status(404).json({ error: "evento no encontrado" });
  }

  if (!hasRole(getUserFromReq(req as never), "ADMIN")) {
    const schoolId = getSchoolId(req as never);
    if (!schoolId || evento.escuelaId !== schoolId) {
      return res.status(403).json({ error: "sin permiso sobre este evento" });
    }
  }

  await prisma.calendarioEscuela.update({
    where: { id: String(req.params.id) },
    data: { isDeleted: true },
  });

  return res.json({ ok: true });
});

// ── POST /api/calendario/aula ───────────────────────────────
calendario.post("/api/calendario/aula", requireUser, async (req, res) => {
  const userId = getId(req as never);

  if (!hasAnyRole(getUserFromReq(req as never), ["TEACHER", "DIRECTIVO", "ADMIN"])) {
    return res.status(403).json({ error: "sin permiso" });
  }

  const { aulaId, tipo, titulo, descripcion, fechaInicio, fechaFin } =
    req.body as Record<string, unknown>;

  if (!aulaId || !tipo || !titulo || !fechaInicio) {
    return res.status(400).json({ error: "aulaId, tipo, titulo y fechaInicio requeridos" });
  }

  const id = genId("act");
  const now = new Date().toISOString();

  await prisma.actividadAula.create({
    data: {
      id,
      aulaId: String(aulaId),
      tipo: String(tipo),
      titulo: String(titulo),
      descripcion: typeof descripcion === "string" ? descripcion : null,
      fecha: String(fechaInicio),
      fechaFin: typeof fechaFin === "string" ? fechaFin : null,
      createdBy: userId ?? "unknown",
      createdAt: now,
    },
  });

  return res.status(201).json({ id, ok: true });
});

// ── DELETE /api/calendario/aula/:id ─────────────────────────
calendario.delete("/api/calendario/aula/:id", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!hasAnyRole(getUserFromReq(req as never), ["TEACHER", "DIRECTIVO", "ADMIN"])) {
    return res.status(403).json({ error: "sin permiso" });
  }

  const actividad = await prisma.actividadAula.findFirst({
    where: { id: String(req.params.id), isDeleted: false },
    select: { createdBy: true },
  });

  if (!actividad) {
    return res.status(404).json({ error: "actividad no encontrada" });
  }

  if (!hasRole(getUserFromReq(req as never), "ADMIN") && actividad.createdBy !== userId) {
    return res.status(403).json({ error: "sin permiso sobre esta actividad" });
  }

  await prisma.actividadAula.update({
    where: { id: String(req.params.id) },
    data: { isDeleted: true },
  });

  return res.json({ ok: true });
});
