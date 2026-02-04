import express, { Router } from "express";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import { canCreateClass, canManageClassroom, canManageParents } from "../lib/authorization";
import { normalizeSchoolId, requireUser } from "../lib/user-auth";
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

const getRequesterRole = (req: express.Request) =>
  (req as { user?: { role?: string | null } }).user?.role ?? null;

const getRequesterSchoolId = (req: express.Request) =>
  (req as { user?: { schoolId?: string | null } }).user?.schoolId ?? null;

aulas.get("/api/aulas", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("aulas")
    .find({ isDeleted: { $ne: true } })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ updatedAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

aulas.get("/api/aulas/:id", async (req, res) => {
  const db = await getDb();
  const item = await db.collection("aulas").findOne({ id: req.params.id, isDeleted: { $ne: true } });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json(item);
});

aulas.post("/api/aulas", requireUser, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const role = getRequesterRole(req);
    if (!canCreateClass(role)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const now = new Date().toISOString();
    const payload = {
      ...req.body,
      status: req.body?.status ?? "ACTIVE",
      createdAt: req.body?.createdAt ?? now,
      updatedAt: req.body?.updatedAt ?? now
    };
    const parsed = ClassroomCreateSchema.parse(payload);
    if (parsed.classCode && !isClassroomActiveStatus(parsed.status)) {
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

aulas.put("/api/aulas/:id", requireUser, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const role = getRequesterRole(req);
    if (!canManageParents(role)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const parsed = ClassroomUpdateSchema.parse(req.body);
    const db = await getDb();
    const classroom = await db.collection("aulas").findOne({ id: req.params.id, isDeleted: { $ne: true } });
    if (!classroom) return res.status(404).json({ error: "not found" });
    if (
      isClassroomReadOnlyStatus(classroom.status) &&
      (parsed.members || parsed.teacherId || parsed.teacherOfRecord)
    ) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const nextStatus = normalizeClassroomStatus(parsed.status ?? classroom.status);
    if (parsed.classCode && !isClassroomActiveStatus(nextStatus)) {
      return res.status(400).json({ error: "classCode only available for ACTIVE classrooms" });
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
});

aulas.patch("/api/aulas/:id", requireUser, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const role = getRequesterRole(req);
    if (!canManageParents(role)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const parsed = ClassroomPatchSchema.parse(req.body);
    const db = await getDb();
    const classroom = await db.collection("aulas").findOne({ id: req.params.id, isDeleted: { $ne: true } });
    if (!classroom) return res.status(404).json({ error: "not found" });
    if (
      isClassroomReadOnlyStatus(classroom.status) &&
      (parsed.members || parsed.teacherId || parsed.teacherOfRecord)
    ) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const nextStatus = normalizeClassroomStatus(parsed.status ?? classroom.status);
    if (parsed.classCode && !isClassroomActiveStatus(nextStatus)) {
      return res.status(400).json({ error: "classCode only available for ACTIVE classrooms" });
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
});

aulas.post("/api/aulas/:id/reasignar-profesor", requireUser, express.json(), async (req, res) => {
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.id, isDeleted: { $ne: true } });
  if (!classroom) return res.status(404).json({ error: "not found" });
  if (isClassroomReadOnlyStatus(classroom.status)) {
    return res.status(403).json({ error: "classroom is read-only" });
  }
  const schoolId = classroom.schoolId ?? classroom.institutionId;
  if (!schoolId || typeof schoolId !== "string") {
    return res.status(400).json({ error: "classroom schoolId missing" });
  }
  const requesterId = getRequesterId(req);
  const requesterRole = getRequesterRole(req);
  const requesterSchoolId = getRequesterSchoolId(req);
  const members = Array.isArray(classroom.members) ? classroom.members : [];
  if (
    !canManageClassroom({
      requesterId,
      requesterRole,
      requesterSchoolId,
      classroomSchoolId: schoolId,
      classroomMembers: members
    })
  ) {
    return res.status(403).json({ error: "forbidden" });
  }

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
});

aulas.delete("/api/aulas/:id", requireUser, async (req, res) => {
  const role = getRequesterRole(req);
  if (!canManageParents(role)) {
    return res.status(403).json({ error: "forbidden" });
  }
  const db = await getDb();
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
});

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
  const result = await db.collection("aulas").deleteOne({ id: req.params.id });
  if (result.deletedCount === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});
