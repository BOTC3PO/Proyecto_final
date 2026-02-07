import type { RequestHandler } from "express";
import { canManageParents } from "./authorization";
import { getDb } from "./db";

type ClassroomMember = { userId?: string; roleInClass?: string };

type AulaDoc = {
  id?: string;
  schoolId?: string;
  institutionId?: string;
  members?: ClassroomMember[];
  isDeleted?: boolean;
};

type ClassroomScopeOptions = {
  paramName?: string;
  allowMemberRoles?: "any" | string[];
  allowSchoolMatch?: boolean;
  schoolMatchRoles?: string[];
  allowAdmin?: boolean;
  includeDeleted?: boolean;
  notFoundMessage?: string;
};

const resolveUserId = (user?: { _id?: { toString?: () => string } | string; id?: string }) => {
  if (!user) return null;
  if (typeof user._id === "string") return user._id;
  if (user._id && typeof user._id === "object" && typeof user._id.toString === "function") {
    return user._id.toString();
  }
  if (typeof user.id === "string") return user.id;
  return null;
};

const resolveUserSchoolId = (user?: { schoolId?: string | null }) =>
  typeof user?.schoolId === "string" ? user.schoolId : null;

const resolveClassroomSchoolId = (classroom?: { schoolId?: string; institutionId?: string }) =>
  classroom?.schoolId ?? classroom?.institutionId ?? null;

export const requireClassroomScope =
  (options: ClassroomScopeOptions = {}): RequestHandler =>
  async (req, res, next) => {
    const paramName = options.paramName ?? "id";
    const classroomId = req.params[paramName];
    if (!classroomId) {
      res.status(400).json({ error: "classroom id required" });
      return;
    }
    const db = await getDb();
    const filter: Record<string, unknown> = { id: classroomId };
    if (!options.includeDeleted) {
      filter.isDeleted = { $ne: true };
    }
    const classroom = await db.collection<AulaDoc>("aulas").findOne(filter);
    if (!classroom) {
      res.status(404).json({ error: options.notFoundMessage ?? "classroom not found" });
      return;
    }

    const user = (req as { user?: { role?: string; schoolId?: string | null } }).user;
    const userId = resolveUserId(user);
    const userRole = user?.role ?? null;
    const userSchoolId = resolveUserSchoolId(user);
    const classroomSchoolId = resolveClassroomSchoolId(classroom);
    const members: ClassroomMember[] = Array.isArray(classroom.members) ? classroom.members : [];
    const member = userId ? members.find((entry) => entry.userId === userId) : undefined;
    const memberRole = member?.roleInClass ?? null;

    const allowAdmin = options.allowAdmin ?? true;
    const isAdmin = allowAdmin && userRole === "ADMIN";

    const allowMemberRoles = options.allowMemberRoles ?? "any";
    const isAllowedMember =
      allowMemberRoles === "any"
        ? !!member
        : !!member && allowMemberRoles.includes(memberRole ?? "");

    const allowSchoolMatch = options.allowSchoolMatch ?? true;
    const canMatchByRole = options.schoolMatchRoles
      ? options.schoolMatchRoles.includes(userRole ?? "")
      : canManageParents(userRole ?? null);
    const isSchoolMatch =
      allowSchoolMatch &&
      canMatchByRole &&
      !!userSchoolId &&
      !!classroomSchoolId &&
      userSchoolId === classroomSchoolId;

    if (!isAdmin && !isAllowedMember && !isSchoolMatch) {
      res.status(403).json({ error: "forbidden" });
      return;
    }

    res.locals.classroom = classroom;
    res.locals.classroomScope = {
      userId,
      userSchoolId,
      classroomSchoolId,
      memberRole
    };
    next();
  };
