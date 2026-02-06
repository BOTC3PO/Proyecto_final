import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import { requirePolicy } from "../lib/authorization";
import { requireClassroomScope } from "../lib/classroom-scope";
import { normalizeSchoolId } from "../lib/school-ids";
import { requireUser } from "../lib/user-auth";
import { requireAdmin as requireAdminAuth } from "../lib/admin-auth";
import {
  CLASSROOM_ACTIVE_STATUS_VALUES,
  ClassroomCreateSchema,
  ClassroomPatchSchema,
  ClassroomUpdateSchema,
  isClassroomActiveStatus,
  isClassroomReadOnlyStatus,
  normalizeClassroomStatus
} from "../schema/aula";

export const aulas = Router();

const FREE_CLASSROOM_LIMIT = 10;

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const getRequesterId = (req: express.Request) =>
  (req as { user?: { _id?: { toString?: () => string } } }).user?._id?.toString?.() ?? null;

const getRequesterSchoolId = (req: express.Request) =>
  (req as { user?: { schoolId?: string | null } }).user?.schoolId ?? null;

const parseStatusList = (value: unknown) => {
  if (typeof value !== "string") return null;
  const entries = value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
  if (entries.length === 0) return null;
  const normalized = entries.map((entry) => normalizeClassroomStatus(entry));
  if (normalized.some((status) => !status)) return null;
  return Array.from(new Set(normalized.filter((status): status is string => Boolean(status))));
};

const isValidStatusTransition = (currentStatus: string, nextStatus: string) => {
  if (currentStatus === nextStatus) return true;
  const allowedTransitions: Record<string, string[]> = {
    ACTIVE: ["ARCHIVED"],
    ARCHIVED: ["LOCKED"],
    LOCKED: []
  };
  return (allowedTransitions[currentStatus] ?? []).includes(nextStatus);
};

const getClassroomDeletionBlockers = async (
  db: Awaited<ReturnType<typeof getDb>>,
  classroom: {
    id?: string;
    members?: { roleInClass?: string }[];
  }
) => {
  const blockers: string[] = [];
  const members = Array.isArray(classroom.members) ? classroom.members : [];
  const studentCount = members.filter((member) => member.roleInClass === "STUDENT").length;
  if (studentCount > 0) {
    blockers.push("classroom has active students");
  }
  if (classroom.id) {
    const activeModuleCount = await db.collection("modulos").countDocuments({
      aulaId: classroom.id,
      isDeleted: { $ne: true }
    });
    if (activeModuleCount > 0) {
      blockers.push("classroom has active modules");
    }
  }
  return blockers;
};

aulas.get("/api/aulas", requireUser, requirePolicy("aulas/list"), async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const requesterId = getRequesterId(req);
  const requesterSchoolId = getRequesterSchoolId(req);
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel ?? null;
  const query: Record<string, unknown> = { isDeleted: { $ne: true } };
  const statusList = parseStatusList(req.query.status);
  const includeArchived = req.query.includeArchived === "true";
  if (req.query.status !== undefined && !statusList) {
    return res.status(400).json({ error: "invalid status filter" });
  }
  if (statusList) {
    query.status = { $in: statusList };
  } else if (!includeArchived) {
    query.status = { $nin: ["ARCHIVED", "LOCKED"] };
    query.archived = { $ne: true };
  }
  if (accessLevel === "admin") {
    // Global access.
  } else if (accessLevel === "staff") {
    const orFilters: Array<Record<string, unknown>> = [];
    if (requesterSchoolId) {
      orFilters.push({ schoolId: requesterSchoolId }, { institutionId: requesterSchoolId });
    }
    if (requesterId) {
      orFilters.push({ "members.userId": requesterId });
    }
    if (orFilters.length) {
      query.$or = orFilters;
    } else {
      return res.status(403).json({ error: "forbidden" });
    }
  } else if (accessLevel === "learner") {
    if (!requesterId) return res.status(403).json({ error: "forbidden" });
    query["members.userId"] = requesterId;
  } else {
    return res.status(403).json({ error: "forbidden" });
  }
  const cursor = db
    .collection("aulas")
    .find(query)
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

aulas.get(
  "/api/aulas/:id/historial",
  requireUser,
  requirePolicy("aulas/read"),
  requireClassroomScope({
    allowMemberRoles: "any",
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  async (req, res) => {
    const db = await getDb();
    const limit = clampLimit(req.query.limit as string | undefined);
    const offset = Number(req.query.offset ?? 0);
    const filter: Record<string, unknown> = { aulaId: req.params.id };

    if (typeof req.query.startDate === "string" || typeof req.query.endDate === "string") {
      const createdAtFilter: Record<string, string> = {};
      if (typeof req.query.startDate === "string") {
        const startDate = new Date(req.query.startDate);
        if (Number.isNaN(startDate.getTime())) {
          return res.status(400).json({ error: "invalid startDate" });
        }
        createdAtFilter.$gte = startDate.toISOString();
      }
      if (typeof req.query.endDate === "string") {
        const endDate = new Date(req.query.endDate);
        if (Number.isNaN(endDate.getTime())) {
          return res.status(400).json({ error: "invalid endDate" });
        }
        createdAtFilter.$lte = endDate.toISOString();
      }
      if (Object.keys(createdAtFilter).length > 0) {
        filter.createdAt = createdAtFilter;
      }
    }

    if (typeof req.query.changeType === "string" && req.query.changeType.trim()) {
      const changeType = req.query.changeType.trim().toLowerCase();
      if (changeType === "status") {
        filter.$expr = { $ne: ["$previousStatus", "$newStatus"] };
      } else if (changeType === "deletion") {
        filter.$expr = { $ne: ["$previousIsDeleted", "$newIsDeleted"] };
      } else {
        return res.status(400).json({ error: "invalid changeType" });
      }
    }

    const items = await db
      .collection("auditoria_aulas")
      .find(filter)
      .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
      .limit(limit)
      .sort({ createdAt: -1 })
      .toArray();
    res.json({ items, limit, offset });
  }
);

aulas.get(
  "/api/aulas/:id",
  requireUser,
  requirePolicy("aulas/read"),
  requireClassroomScope({
    allowMemberRoles: "any",
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  async (_req, res) => {
    res.json(res.locals.classroom);
  }
);

aulas.post("/api/aulas", requireUser, requirePolicy("aulas/create"), ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const now = new Date().toISOString();
    const payload = {
      ...req.body,
      status: req.body?.status ?? "ACTIVE",
      createdAt: req.body?.createdAt ?? now,
      updatedAt: req.body?.updatedAt ?? now
    };
    const parsed = ClassroomCreateSchema.parse(payload);
    const normalizedStatus = normalizeClassroomStatus(parsed.status);
    if (!normalizedStatus) {
      return res.status(400).json({ error: "invalid classroom status" });
    }
    if (parsed.classCode && !isClassroomActiveStatus(normalizedStatus)) {
      return res.status(400).json({ error: "classCode only available for ACTIVE classrooms" });
    }
    const db = await getDb();
    const activeClassroomFilter = {
      createdBy: parsed.createdBy,
      isDeleted: { $ne: true },
      archived: { $ne: true },
      status: { $in: CLASSROOM_ACTIVE_STATUS_VALUES }
    };
    const activeClassroomCount = await db.collection("aulas").countDocuments(activeClassroomFilter);
    if (activeClassroomCount >= FREE_CLASSROOM_LIMIT) {
      return res.status(403).json({
        error: "limite de clases activas excedido",
        detail: `El limite gratuito es ${FREE_CLASSROOM_LIMIT} clases activas por profesor.`
      });
    }
    const result = await db.collection("aulas").insertOne(parsed);
    res.status(201).json({ id: result.insertedId, classroomId: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

aulas.put(
  "/api/aulas/:id",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const parsed = ClassroomUpdateSchema.parse(req.body);
      const db = await getDb();
      const classroom = res.locals.classroom;
      const currentStatus = normalizeClassroomStatus(classroom.status);
      if (!currentStatus) {
        return res.status(409).json({ error: "invalid classroom status" });
      }
      if (
        isClassroomReadOnlyStatus(currentStatus) &&
        (parsed.members || parsed.teacherId || parsed.teacherOfRecord)
      ) {
        return res.status(403).json({ error: "classroom is read-only" });
      }
      const nextStatus = parsed.status ? normalizeClassroomStatus(parsed.status) : currentStatus;
      if (!nextStatus) {
        return res.status(400).json({ error: "invalid classroom status" });
      }
      if (!isValidStatusTransition(currentStatus, nextStatus)) {
        return res.status(409).json({
          error: "invalid classroom status transition",
          detail: `${currentStatus} -> ${nextStatus}`
        });
      }
      if (parsed.classCode && !isClassroomActiveStatus(nextStatus)) {
        return res.status(400).json({ error: "classCode only available for ACTIVE classrooms" });
      }
      const currentIsDeleted = classroom.isDeleted === true;
      const nextIsDeleted =
        typeof parsed.isDeleted === "boolean" ? parsed.isDeleted : classroom.isDeleted === true;
      const shouldAuditStatus = currentStatus !== nextStatus;
      const shouldAuditDeletion = currentIsDeleted !== nextIsDeleted;
      if (shouldAuditStatus || shouldAuditDeletion) {
        const auditEntry: Record<string, unknown> = {
          aulaId: classroom.id ?? req.params.id,
          schoolId: classroom.schoolId ?? classroom.institutionId,
          previousStatus: currentStatus,
          newStatus: nextStatus,
          actorId: getRequesterId(req),
          createdAt: new Date().toISOString()
        };
        if (shouldAuditDeletion) {
          auditEntry.previousIsDeleted = currentIsDeleted;
          auditEntry.newIsDeleted = nextIsDeleted;
        }
        await db.collection("auditoria_aulas").insertOne(auditEntry);
      }
      const update = { ...parsed, updatedAt: new Date().toISOString() };
      const updateOperation: { $set: Record<string, unknown>; $unset?: Record<string, ""> } = {
        $set: update
      };
      if (isClassroomReadOnlyStatus(nextStatus)) {
        updateOperation.$unset = { classCode: "" };
        delete update.classCode;
      }
      const result = await db
        .collection("aulas")
        .updateOne({ id: req.params.id, isDeleted: { $ne: true } }, updateOperation);
      if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

aulas.patch(
  "/api/aulas/:id",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const parsed = ClassroomPatchSchema.parse(req.body);
      const db = await getDb();
      const classroom = res.locals.classroom;
      const currentStatus = normalizeClassroomStatus(classroom.status);
      if (!currentStatus) {
        return res.status(409).json({ error: "invalid classroom status" });
      }
      if (
        isClassroomReadOnlyStatus(currentStatus) &&
        (parsed.members || parsed.teacherId || parsed.teacherOfRecord)
      ) {
        return res.status(403).json({ error: "classroom is read-only" });
      }
      const nextStatus = parsed.status ? normalizeClassroomStatus(parsed.status) : currentStatus;
      if (!nextStatus) {
        return res.status(400).json({ error: "invalid classroom status" });
      }
      if (!isValidStatusTransition(currentStatus, nextStatus)) {
        return res.status(409).json({
          error: "invalid classroom status transition",
          detail: `${currentStatus} -> ${nextStatus}`
        });
      }
      if (parsed.classCode && !isClassroomActiveStatus(nextStatus)) {
        return res.status(400).json({ error: "classCode only available for ACTIVE classrooms" });
      }
      const currentIsDeleted = classroom.isDeleted === true;
      const nextIsDeleted =
        typeof parsed.isDeleted === "boolean" ? parsed.isDeleted : classroom.isDeleted === true;
      const shouldAuditStatus = currentStatus !== nextStatus;
      const shouldAuditDeletion = currentIsDeleted !== nextIsDeleted;
      if (shouldAuditStatus || shouldAuditDeletion) {
        const auditEntry: Record<string, unknown> = {
          aulaId: classroom.id ?? req.params.id,
          schoolId: classroom.schoolId ?? classroom.institutionId,
          previousStatus: currentStatus,
          newStatus: nextStatus,
          actorId: getRequesterId(req),
          createdAt: new Date().toISOString()
        };
        if (shouldAuditDeletion) {
          auditEntry.previousIsDeleted = currentIsDeleted;
          auditEntry.newIsDeleted = nextIsDeleted;
        }
        await db.collection("auditoria_aulas").insertOne(auditEntry);
      }
      const update = { ...parsed, updatedAt: new Date().toISOString() };
      const updateOperation: { $set: Record<string, unknown>; $unset?: Record<string, ""> } = {
        $set: update
      };
      if (isClassroomReadOnlyStatus(nextStatus)) {
        updateOperation.$unset = { classCode: "" };
        delete update.classCode;
      }
      const result = await db
        .collection("aulas")
        .updateOne({ id: req.params.id, isDeleted: { $ne: true } }, updateOperation);
      if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

aulas.post(
  "/api/aulas/:id/reasignar-profesor",
  requireUser,
  requireClassroomScope({
    allowMemberRoles: ["ADMIN"],
    allowSchoolMatch: true,
    schoolMatchRoles: ["DIRECTIVO"],
    notFoundMessage: "not found"
  }),
  express.json(),
  requirePolicy("aulas/manage-classroom", (_req, res) => ({
    classroom: res.locals.classroom as {
      members?: { userId?: string; roleInClass?: string }[] | null;
      schoolId?: string;
      institutionId?: string;
    }
  })),
  async (req, res) => {
    const classroom = res.locals.classroom as {
      members?: { userId?: string; roleInClass?: string }[];
      schoolId?: string;
      institutionId?: string;
      status?: string;
      id?: string;
    };
    const currentStatus = normalizeClassroomStatus(classroom.status);
    if (!currentStatus) {
      return res.status(409).json({ error: "invalid classroom status" });
    }
    if (isClassroomReadOnlyStatus(currentStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const schoolId = classroom.schoolId ?? classroom.institutionId;
    if (!schoolId || typeof schoolId !== "string") {
      return res.status(400).json({ error: "classroom schoolId missing" });
    }
    const members = Array.isArray(classroom.members) ? classroom.members : [];

    const teacherIdRaw =
      typeof req.body?.teacherId === "string"
        ? req.body.teacherId
        : typeof req.body?.newTeacherId === "string"
          ? req.body.newTeacherId
          : null;
    const teacherId = teacherIdRaw?.trim();
    if (!teacherId) return res.status(400).json({ error: "teacherId is required" });
    const removeTeacherId =
      typeof req.body?.removeTeacherId === "string" ? req.body.removeTeacherId.trim() : null;

    const teacherObjectId = toObjectId(teacherId);
    if (!teacherObjectId) return res.status(400).json({ error: "invalid teacherId" });
    const db = await getDb();
    const teacherUser = await db
      .collection("usuarios")
      .findOne({ _id: teacherObjectId, isDeleted: { $ne: true } }, { projection: { role: 1, escuelaId: 1 } });
    if (!teacherUser) return res.status(400).json({ error: "teacher not found" });
    if (teacherUser.role !== "TEACHER") return res.status(400).json({ error: "teacher role invalid" });
    const teacherSchoolId = normalizeSchoolId(teacherUser.escuelaId);
    if (teacherSchoolId !== schoolId) return res.status(403).json({ error: "teacher school mismatch" });

    let updatedMembers = members.map((member: { userId: string; roleInClass: string; schoolId?: string }) => {
      if (member.userId === teacherId) {
        return { ...member, roleInClass: "TEACHER", schoolId };
      }
      return member;
    });
    if (!updatedMembers.some((member: { userId?: string }) => member.userId === teacherId)) {
      updatedMembers = [...updatedMembers, { userId: teacherId, roleInClass: "TEACHER", schoolId }];
    }
    if (removeTeacherId && removeTeacherId !== teacherId) {
      updatedMembers = updatedMembers.filter(
        (member: { userId?: string; roleInClass?: string }) =>
          !(member.userId === removeTeacherId && member.roleInClass === "TEACHER")
      );
    }
    const adminCount = updatedMembers.filter(
      (member: { roleInClass?: string }) => member.roleInClass === "ADMIN"
    ).length;
    const teacherCount = updatedMembers.filter(
      (member: { roleInClass?: string }) => member.roleInClass === "TEACHER"
    ).length;
    if (adminCount < 1 || teacherCount < 1) {
      return res.status(400).json({ error: "classroom must keep at least one ADMIN and one TEACHER" });
    }

    const update = {
      members: updatedMembers,
      teacherOfRecord: teacherId,
      teacherId,
      updatedAt: new Date().toISOString()
    };
    const result = await db
      .collection("aulas")
      .updateOne({ id: req.params.id, isDeleted: { $ne: true } }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  }
);

// Soft delete: classrooms are retained with isDeleted=true for audit/retention purposes.
// Deletion is blocked while there are active modules or enrolled students.
aulas.delete(
  "/api/aulas/:id",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  async (req, res) => {
    const db = await getDb();
    const classroom = res.locals.classroom as {
      id?: string;
      members?: { roleInClass?: string }[];
    };
    const blockers = await getClassroomDeletionBlockers(db, classroom);
    if (blockers.length > 0) {
      return res.status(409).json({ error: "delete blocked", reasons: blockers });
    }
    const now = new Date().toISOString();
    const deletedBy = getRequesterId(req);
    const result = await db.collection("aulas").updateOne(
      { id: req.params.id, isDeleted: { $ne: true } },
      {
        $set: {
          isDeleted: true,
          deletedAt: now,
          deletedBy,
          updatedAt: now
        }
      }
    );
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.status(204).send();
  }
);

aulas.get("/api/admin/aulas", requireAdminAuth, async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const includeDeleted = req.query.includeDeleted === "true";
  const onlyDeleted = req.query.onlyDeleted === "true";
  const filter: Record<string, unknown> = {};
  if (onlyDeleted) {
    filter.isDeleted = true;
  } else if (!includeDeleted) {
    filter.isDeleted = { $ne: true };
  }
  const items = await db
    .collection("aulas")
    .find(filter)
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 })
    .toArray();
  res.json({ items, limit, offset });
});

aulas.delete("/api/admin/aulas/:id", requireAdminAuth, async (req, res) => {
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.id, isDeleted: { $ne: true } });
  if (!classroom) return res.status(404).json({ error: "not found" });
  const blockers = await getClassroomDeletionBlockers(db, classroom);
  if (blockers.length > 0) {
    return res.status(409).json({ error: "delete blocked", reasons: blockers });
  }
  const currentStatus = normalizeClassroomStatus(classroom.status);
  if (!currentStatus) {
    return res.status(409).json({ error: "invalid classroom status" });
  }
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req);
  await db.collection("auditoria_aulas").insertOne({
    aulaId: classroom.id ?? req.params.id,
    schoolId: classroom.schoolId ?? classroom.institutionId,
    previousStatus: currentStatus,
    newStatus: currentStatus,
    previousIsDeleted: false,
    newIsDeleted: true,
    actorId: deletedBy,
    createdAt: now
  });
  const result = await db.collection("aulas").updateOne(
    { id: req.params.id, isDeleted: { $ne: true } },
    {
      $set: {
        isDeleted: true,
        deletedAt: now,
        deletedBy,
        updatedAt: now
      }
    }
  );
  if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});
