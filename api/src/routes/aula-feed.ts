import { Router } from "express";
import { canReadAsLearner, isStaffRole } from "../lib/authorization";
import { getDb } from "../lib/db";
import { requireUser } from "../lib/user-auth";
import { isClassroomReadOnlyStatus } from "../schema/aula";

export const aulaFeed = Router();

const getRequesterId = (req: { user?: { _id?: { toString?: () => string } } }) =>
  req.user?._id?.toString?.() ?? null;

const getRequesterRole = (req: { user?: { role?: string | null } }) => req.user?.role ?? null;

const getRequesterSchoolId = (req: { user?: { schoolId?: string | null } }) => req.user?.schoolId ?? null;

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

const resolveClassroomContext = async (req: { query: { classroomId?: unknown }; user?: Record<string, unknown> }) => {
  const classroomId = typeof req.query.classroomId === "string" ? req.query.classroomId : null;
  if (!classroomId) return { error: { status: 404, message: "classroom not found" } };
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: classroomId, isDeleted: { $ne: true } });
  if (!classroom) return { error: { status: 404, message: "classroom not found" } };
  if (isClassroomReadOnlyStatus(classroom.status)) {
    return { error: { status: 410, message: "classroom feed not available" } };
  }
  const requesterId = getRequesterId(req as { user?: { _id?: { toString?: () => string } } });
  const requesterRole = getRequesterRole(req as { user?: { role?: string | null } });
  const requesterSchoolId = getRequesterSchoolId(req as { user?: { schoolId?: string | null } });
  if (
    !canAccessClassroom({
      requesterId,
      requesterRole,
      requesterSchoolId,
      classroomSchoolId: classroom.schoolId ?? classroom.institutionId,
      classroomMembers: Array.isArray(classroom.members) ? classroom.members : []
    })
  ) {
    return { error: { status: 403, message: "forbidden" } };
  }
  return { classroomId, classroom };
};

aulaFeed.get("/api/aula/publicaciones", requireUser, async (req, res) => {
  const context = await resolveClassroomContext(req);
  if ("error" in context) {
    return res.status(context.error.status).json({ error: context.error.message });
  }
  const db = await getDb();
  const items = await db
    .collection("publicaciones")
    .find({ aulaId: context.classroomId, isDeleted: { $ne: true } })
    .sort({ createdAt: -1 })
    .toArray();
  res.json({ items });
});

aulaFeed.get("/api/aula/leaderboard", requireUser, async (req, res) => {
  const context = await resolveClassroomContext(req);
  if ("error" in context) {
    return res.status(context.error.status).json({ error: context.error.message });
  }
  const db = await getDb();
  const items = await db
    .collection("ranking")
    .find({ aulaId: context.classroomId, isDeleted: { $ne: true } })
    .sort({ points: -1 })
    .toArray();
  res.json({ items });
});

aulaFeed.get("/api/aula/actividades", requireUser, async (req, res) => {
  const context = await resolveClassroomContext(req);
  if ("error" in context) {
    return res.status(context.error.status).json({ error: context.error.message });
  }
  const db = await getDb();
  const items = await db
    .collection("actividades")
    .find({ aulaId: context.classroomId, isDeleted: { $ne: true } })
    .sort({ createdAt: 1 })
    .toArray();
  res.json({ items });
});
