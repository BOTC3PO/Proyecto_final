import { Router } from "express";
import { recordAuditLog } from "../lib/audit-log";
import { prisma } from "../lib/prisma";
import { isClassroomActiveStatus, normalizeClassroomStatus } from "../schema/aula";
import { requirePolicy } from "../lib/authorization";
import { requireClassroomScope } from "../lib/classroom-scope";
import { createRateLimiter } from "../lib/rate-limit";
import { requireUser } from "../lib/user-auth";

export const publicaciones = Router();

const publicacionesLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  limit: 30
});

type PublicationAttachment = {
  name: string;
  size: number;
  type?: string;
};

type CreatePublicationPayload = {
  contenido: string;
  authorInitials?: string;
  title?: string;
  archivos?: PublicationAttachment[];
};

type CreateCommentPayload = {
  contenido: string;
};

const getRequester = (req: {
  user?: { _id?: { toString?: () => string }; role?: string; fullName?: string; schoolId?: string | null };
}) => req.user;

const getRequesterId = (requester: { _id?: { toString?: () => string } } | undefined) =>
  requester?._id?.toString?.() ?? null;

const sanitizeAttachments = (archivos: unknown): PublicationAttachment[] => {
  if (!Array.isArray(archivos)) return [];
  return archivos
    .filter((item) => item && typeof item === "object")
    .map((item) => {
      const record = item as Record<string, unknown>;
      return {
        name: String(record.name ?? "Archivo"),
        size: Number(record.size ?? 0),
        type: record.type ? String(record.type) : undefined
      };
    });
};

publicaciones.get(
  "/api/aulas/:id/publicaciones",
  requireUser,
  requirePolicy("publicaciones/read"),
  requireClassroomScope({ allowMemberRoles: "any", allowSchoolMatch: true }),
  async (req, res) => {
    const requester = getRequester(req as {
      user?: { _id?: { toString?: () => string }; role?: string; fullName?: string; schoolId?: string | null };
    });
    const requesterId = getRequesterId(requester);
    if (!requesterId) return res.status(403).json({ error: "forbidden" });
    const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
    const accessLevel = authorization?.data?.accessLevel;
    if (accessLevel !== "admin" && accessLevel !== "staff" && accessLevel !== "learner") {
      return res.status(403).json({ error: "forbidden" });
    }
    const items = await prisma.publicacion.findMany({
      where: { aulaId: req.params.id as string as string, isDeleted: { not: true } },
      orderBy: { publishedAt: "desc" }
    });
    res.json({ items });
  }
);

publicaciones.post(
  "/api/aulas/:id/publicaciones",
  requireUser,
  publicacionesLimiter,
  requirePolicy("publicaciones/create"),
  requireClassroomScope({ allowMemberRoles: ["ADMIN", "TEACHER"], allowSchoolMatch: true }),
  async (req, res) => {
    const payload = req.body as CreatePublicationPayload | undefined;
    if (!payload || typeof payload.contenido !== "string" || payload.contenido.trim() === "") {
      return res.status(400).json({ error: "contenido requerido" });
    }
    const requester = getRequester(req as { user?: { _id?: { toString?: () => string }; role?: string } });
    const requesterId = getRequesterId(requester);
    if (!requesterId) return res.status(403).json({ error: "forbidden" });
    const classroom = res.locals.classroom;
    // PLAN-A §2 — aulas legacy sin `status` (o con un valor no
    // reconocido) devolvían 409 "invalid classroom status" sin ninguna
    // pista de qué pasaba ni cómo arreglarlo, y le impedían publicar a un
    // profesor con un aula perfectamente en uso. Mismo fallback que ya
    // usa `PUT /api/aulas/:id` (status ausente ⇒ ACTIVE, documentado):
    // un aula sin status es, en la práctica, un aula activa legacy.
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (!isClassroomActiveStatus(currentStatus)) {
      return res.status(403).json({
        error: "classroom is read-only",
        detail: `El aula tiene estado ${currentStatus}; sólo se puede publicar en aulas ACTIVE.`
      });
    }
    const now = new Date();
    const nowIso = now.toISOString();
    const attachmentList = sanitizeAttachments(payload.archivos);
    const publication = await prisma.publicacion.create({
      data: {
        id: `pub-${Date.now()}`,
        aulaId: req.params.id as string as string,
        authorId: requesterId,
        title: payload.title?.trim() || "Nueva publicación",
        body: payload.contenido.trim(),
        archivos: attachmentList.length > 0 ? JSON.stringify(attachmentList) : null,
        isPinned: false,
        isDeleted: false,
        deletedBy: null,
        publishedAt: nowIso,
        updatedAt: nowIso
      }
    });
    await prisma.moderacionEvento.create({
      data: {
        tipo: "publicacion_creada",
        publicacionId: publication.id,
        aulaId: publication.aulaId,
        usuarioId: requesterId,
        createdAt: now.toISOString()
      }
    });
    await recordAuditLog({
      actorId: requesterId,
      action: "publicaciones.create",
      targetType: "publicacion",
      targetId: publication.id,
      metadata: {
        aulaId: publication.aulaId,
        archivos: attachmentList.length
      }
    });
    res.status(201).json(publication);
  }
);

publicaciones.get(
  "/api/aulas/:id/publicaciones/:pubId/comentarios",
  requireUser,
  requirePolicy("publicaciones/read"),
  requireClassroomScope({ allowMemberRoles: "any", allowSchoolMatch: true }),
  async (req, res) => {
    const requester = getRequester(req as {
      user?: { _id?: { toString?: () => string }; role?: string; fullName?: string; schoolId?: string | null };
    });
    const requesterId = getRequesterId(requester);
    if (!requesterId) return res.status(403).json({ error: "forbidden" });
    const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
    const accessLevel = authorization?.data?.accessLevel;
    if (accessLevel !== "admin" && accessLevel !== "staff" && accessLevel !== "learner") {
      return res.status(403).json({ error: "forbidden" });
    }
    const publication = await prisma.publicacion.findFirst({
      where: { id: req.params.pubId as string as string, aulaId: req.params.id as string as string, isDeleted: { not: true } }
    });
    if (!publication) return res.status(404).json({ error: "publicacion not found" });
    const rows = await prisma.comentario.findMany({
      where: { publicacionId: req.params.pubId as string },
      orderBy: { createdAt: "asc" }
    });
    const items = rows
      .map((row) => {
        try {
          return JSON.parse(row.json);
        } catch {
          return null;
        }
      })
      .filter(Boolean);
    res.json({ items });
  }
);

publicaciones.post(
  "/api/aulas/:id/publicaciones/:pubId/comentarios",
  requireUser,
  publicacionesLimiter,
  requirePolicy("publicaciones/comment"),
  requireClassroomScope({ allowMemberRoles: ["STUDENT"], allowSchoolMatch: true }),
  async (req, res) => {
    const payload = req.body as CreateCommentPayload | undefined;
    if (!payload || typeof payload.contenido !== "string" || payload.contenido.trim() === "") {
      return res.status(400).json({ error: "contenido requerido" });
    }
    const requester = getRequester(req as {
      user?: { _id?: { toString?: () => string }; role?: string; fullName?: string };
    });
    const requesterId = getRequesterId(requester);
    if (!requesterId) return res.status(403).json({ error: "forbidden" });
    const classroom = res.locals.classroom;
    // PLAN-A §2 — aulas legacy sin `status` (o con un valor no
    // reconocido) devolvían 409 "invalid classroom status" sin ninguna
    // pista de qué pasaba ni cómo arreglarlo, y le impedían publicar a un
    // profesor con un aula perfectamente en uso. Mismo fallback que ya
    // usa `PUT /api/aulas/:id` (status ausente ⇒ ACTIVE, documentado):
    // un aula sin status es, en la práctica, un aula activa legacy.
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (!isClassroomActiveStatus(currentStatus)) {
      return res.status(403).json({
        error: "classroom is read-only",
        detail: `El aula tiene estado ${currentStatus}; sólo se puede publicar en aulas ACTIVE.`
      });
    }
    const publication = await prisma.publicacion.findFirst({
      where: { id: req.params.pubId as string as string, aulaId: req.params.id as string as string, isDeleted: { not: true } }
    });
    if (!publication) return res.status(404).json({ error: "publicacion not found" });
    const now = new Date();
    const nowIso = now.toISOString();
    const comment = {
      id: `com-${Date.now()}`,
      aulaId: req.params.id as string as string,
      publicacionId: req.params.pubId as string as string,
      body: payload.contenido.trim(),
      authorId: requesterId,
      authorName: requester?.fullName ?? null,
      createdAt: nowIso,
      updatedAt: nowIso,
      isDeleted: false,
      deletedAt: null,
      deletedBy: null
    };
    await prisma.comentario.create({
      data: {
        id: comment.id,
        publicacionId: comment.publicacionId,
        json: JSON.stringify(comment),
        createdAt: nowIso
      }
    });
    await prisma.moderacionEvento.create({
      data: {
        tipo: "comentario_creado",
        publicacionId: comment.publicacionId,
        aulaId: comment.aulaId,
        usuarioId: requesterId,
        createdAt: now.toISOString()
      }
    });
    await recordAuditLog({
      actorId: requesterId,
      action: "comentarios.create",
      targetType: "comentario",
      targetId: comment.id,
      metadata: {
        aulaId: comment.aulaId,
        publicacionId: comment.publicacionId
      }
    });
    res.status(201).json(comment);
  }
);
