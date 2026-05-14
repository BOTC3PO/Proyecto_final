import { Router } from "express";
import type { Prisma } from "@prisma/client";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";

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

    if (schoolId) {
      const escuelaEventos = await prisma.calendarioEscuela.findMany({
        where: {
          escuelaId: schoolId,
          isDeleted: false,
          fechaInicio: { lte: hasta },
          fechaFin: { gte: desde },
        },
        orderBy: { fechaInicio: "asc" },
      });

      for (const e of escuelaEventos) {
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

    try {
      let aulaWhere: Prisma.ClaseWhereInput = { isDeleted: false, status: "ACTIVE" };

      if (role === "USER") {
        aulaWhere = {
          ...aulaWhere,
          miembros: { some: { usuarioId: userId!, rolEnClase: "USER" } },
        };
      } else if (role === "TEACHER") {
        aulaWhere = {
          ...aulaWhere,
          OR: [
            { createdBy: userId! },
            { teacherId: userId! },
          ],
        };
      } else if ((role === "DIRECTIVO" || role === "ADMIN") && schoolId) {
        aulaWhere = { ...aulaWhere, escuelaId: schoolId };
      }

      const aulas = await prisma.clase.findMany({
        where: aulaWhere,
        select: { id: true, name: true }
      });

      const aulaMap = new Map(aulas.map((a) => [a.id, a.name]));
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
  const role = getRole(req as never);

  if (!["DIRECTIVO", "ADMIN", "TEACHER"].includes(role ?? "")) {
    return res.status(403).json({ error: "forbidden" });
  }
  if (!schoolId) return res.status(400).json({ error: "escuela requerida" });

  const { tipo, titulo, descripcion, fechaInicio, fechaFin } =
    req.body as Record<string, unknown>;

  if (!tipo || !titulo || !fechaInicio) {
    return res.status(400).json({ error: "tipo, titulo y fechaInicio requeridos" });
  }

  const id = genId("cal");
  const now = new Date().toISOString();

  await prisma.calendarioEscuela.create({
    data: {
      id,
      escuelaId: schoolId,
      tipo: String(tipo),
      titulo: String(titulo),
      descripcion: typeof descripcion === "string" ? descripcion : null,
      fechaInicio: String(fechaInicio),
      fechaFin: typeof fechaFin === "string" ? fechaFin : String(fechaInicio),
      createdBy: userId ?? "unknown",
      createdAt: now,
    },
  });

  return res.status(201).json({ id, ok: true });
});

// ── DELETE /api/calendario/escuela/:id ──────────────────────
calendario.delete("/api/calendario/escuela/:id", requireUser, async (req, res) => {
  const role = getRole(req as never);
  if (!["DIRECTIVO", "ADMIN"].includes(role ?? "")) {
    return res.status(403).json({ error: "sin permiso" });
  }

  const evento = await prisma.calendarioEscuela.findFirst({
    where: { id: String(req.params.id), isDeleted: false },
    select: { escuelaId: true },
  });

  if (!evento) {
    return res.status(404).json({ error: "evento no encontrado" });
  }

  if (role !== "ADMIN") {
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
  const role = getRole(req as never);

  if (!["TEACHER", "DIRECTIVO", "ADMIN"].includes(role ?? "")) {
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
  const role = getRole(req as never);
  if (!["TEACHER", "DIRECTIVO", "ADMIN"].includes(role ?? "")) {
    return res.status(403).json({ error: "sin permiso" });
  }

  const actividad = await prisma.actividadAula.findFirst({
    where: { id: String(req.params.id), isDeleted: false },
    select: { createdBy: true },
  });

  if (!actividad) {
    return res.status(404).json({ error: "actividad no encontrada" });
  }

  if (role !== "ADMIN" && actividad.createdBy !== userId) {
    return res.status(403).json({ error: "sin permiso sobre esta actividad" });
  }

  await prisma.actividadAula.update({
    where: { id: String(req.params.id) },
    data: { isDeleted: true },
  });

  return res.json({ ok: true });
});
