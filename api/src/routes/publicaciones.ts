import { Router } from "express";
import { recordAuditLog } from "../lib/audit-log";
import { getDb } from "../lib/db";
import { isClassroomActiveStatus, normalizeClassroomStatus } from "../schema/aula";
import { canPostAsStudent, canPostInClass, canReadAsLearner, isStaffRole } from "../lib/authorization";
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

const canAccessClassroom = ({
  requesterId,
  requesterRole,
  requesterSchoolId,
  classroomSchoolId,
  classroomMembers
}: {
  requesterId: string | null;
  requesterRole?: string | null;
  requesterSchoolId?: string | null;
  classroomSchoolId?: string | null;
  classroomMembers?: Array<{ userId?: string }> | null;
}) => {
  if (requesterRole === "ADMIN") return true;
  const isMember = !!requesterId && (classroomMembers ?? []).some((member) => member.userId === requesterId);
  if (isMember) return true;
  const hasStaffSchoolAccess =
    isStaffRole(requesterRole) && !!requesterSchoolId && !!classroomSchoolId && requesterSchoolId === classroomSchoolId;
  if (hasStaffSchoolAccess) return true;
  if (canReadAsLearner(requesterRole)) return isMember;
  return false;
};

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

publicaciones.get("/api/aulas/:id/publicaciones", requireUser, async (req, res) => {
  const requester = getRequester(req as {
    user?: { _id?: { toString?: () => string }; role?: string; fullName?: string; schoolId?: string | null };
  });
  const requesterId = getRequesterId(requester);
  const requesterRole = requester?.role ?? null;
  if (!requesterId || (!isStaffRole(requesterRole) && !canReadAsLearner(requesterRole) && requesterRole !== "ADMIN")) {
    return res.status(403).json({ error: "forbidden" });
  }
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.id, isDeleted: { $ne: true } });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });
  if (
    !canAccessClassroom({
      requesterId,
      requesterRole,
      requesterSchoolId: requester?.schoolId ?? null,
      classroomSchoolId: classroom.schoolId ?? classroom.institutionId,
      classroomMembers: Array.isArray(classroom.members) ? classroom.members : []
    })
  ) {
    return res.status(403).json({ error: "forbidden" });
  }
  const items = await db
    .collection("publicaciones")
    .find({ aulaId: req.params.id, isDeleted: { $ne: true } })
    .sort({ createdAt: -1 })
    .toArray();
  res.json({ items });
});

publicaciones.post("/api/aulas/:id/publicaciones", requireUser, publicacionesLimiter, async (req, res) => {
  const payload = req.body as CreatePublicationPayload | undefined;
  if (!payload || typeof payload.contenido !== "string" || payload.contenido.trim() === "") {
    return res.status(400).json({ error: "contenido requerido" });
  }
  const requester = getRequester(req as { user?: { _id?: { toString?: () => string }; role?: string } });
  const requesterId = getRequesterId(requester);
  if (!requesterId) return res.status(403).json({ error: "forbidden" });
  if (!canPostInClass(requester?.role ?? null)) {
    return res.status(403).json({ error: "forbidden" });
  }
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.id });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });
  const currentStatus = normalizeClassroomStatus(classroom.status);
  if (!currentStatus) {
    return res.status(409).json({ error: "invalid classroom status" });
  }
  if (!isClassroomActiveStatus(currentStatus)) {
    return res.status(403).json({ error: "classroom is read-only" });
  }
  const now = new Date();
  const nowIso = now.toISOString();
  const attachmentList = sanitizeAttachments(payload.archivos);
  const publication = {
    id: `pub-${Date.now()}`,
    aulaId: req.params.id,
    authorInitials: payload.authorInitials?.trim() || "AA",
    title: payload.title?.trim() || "Nueva publicación",
    body: payload.contenido.trim(),
    links: [],
    archivos: attachmentList,
    publishedAtLabel: "Publicado recién",
    createdAt: nowIso,
    updatedAt: nowIso,
    isDeleted: false,
    deletedAt: null,
    deletedBy: null
  };
  await db.collection("publicaciones").insertOne(publication);
  await db.collection("moderacion_eventos").insertOne({
    tipo: "publicacion_creada",
    publicacionId: publication.id,
    aulaId: publication.aulaId,
    usuarioId: requesterId,
    createdAt: now
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
});

publicaciones.get("/api/aulas/:id/publicaciones/:pubId/comentarios", requireUser, async (req, res) => {
  const requester = getRequester(req as {
    user?: { _id?: { toString?: () => string }; role?: string; fullName?: string; schoolId?: string | null };
  });
  const requesterId = getRequesterId(requester);
  const requesterRole = requester?.role ?? null;
  if (!requesterId || (!isStaffRole(requesterRole) && !canReadAsLearner(requesterRole) && requesterRole !== "ADMIN")) {
    return res.status(403).json({ error: "forbidden" });
  }
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.id, isDeleted: { $ne: true } });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });
  if (
    !canAccessClassroom({
      requesterId,
      requesterRole,
      requesterSchoolId: requester?.schoolId ?? null,
      classroomSchoolId: classroom.schoolId ?? classroom.institutionId,
      classroomMembers: Array.isArray(classroom.members) ? classroom.members : []
    })
  ) {
    return res.status(403).json({ error: "forbidden" });
  }
  const publication = await db.collection("publicaciones").findOne({
    id: req.params.pubId,
    aulaId: req.params.id,
    isDeleted: { $ne: true }
  });
  if (!publication) return res.status(404).json({ error: "publicacion not found" });
  const items = await db
    .collection("comentarios")
    .find({ aulaId: req.params.id, publicacionId: req.params.pubId, isDeleted: { $ne: true } })
    .sort({ createdAt: 1 })
    .toArray();
  res.json({ items });
});

publicaciones.post(
  "/api/aulas/:id/publicaciones/:pubId/comentarios",
  requireUser,
  publicacionesLimiter,
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
    if (!canPostAsStudent(requester?.role ?? null)) {
      return res.status(403).json({ error: "student role required" });
    }
    const db = await getDb();
    const classroom = await db.collection("aulas").findOne({ id: req.params.id });
    if (!classroom) return res.status(404).json({ error: "classroom not found" });
    const currentStatus = normalizeClassroomStatus(classroom.status);
    if (!currentStatus) {
      return res.status(409).json({ error: "invalid classroom status" });
    }
    if (!isClassroomActiveStatus(currentStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const members = Array.isArray(classroom.members) ? classroom.members : [];
    const isStudentMember = members.some(
      (member: { userId?: string; roleInClass?: string }) =>
        member.userId === requesterId && member.roleInClass === "STUDENT"
    );
    if (!isStudentMember) return res.status(403).json({ error: "student membership required" });
    const publication = await db.collection("publicaciones").findOne({
      id: req.params.pubId,
      aulaId: req.params.id,
      isDeleted: { $ne: true }
    });
    if (!publication) return res.status(404).json({ error: "publicacion not found" });
    const now = new Date();
    const nowIso = now.toISOString();
    const comment = {
      id: `com-${Date.now()}`,
      aulaId: req.params.id,
      publicacionId: req.params.pubId,
      body: payload.contenido.trim(),
      authorId: requesterId,
      authorName: requester?.fullName ?? null,
      createdAt: nowIso,
      updatedAt: nowIso,
      isDeleted: false,
      deletedAt: null,
      deletedBy: null
    };
    await db.collection("comentarios").insertOne(comment);
    await db.collection("moderacion_eventos").insertOne({
      tipo: "comentario_creado",
      comentarioId: comment.id,
      publicacionId: comment.publicacionId,
      aulaId: comment.aulaId,
      usuarioId: requesterId,
      createdAt: now
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
