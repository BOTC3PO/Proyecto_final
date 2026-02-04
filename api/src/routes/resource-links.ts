import express, { Router } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
import { getCanonicalMembershipRole } from "../lib/membership-roles";
import { requireUser } from "../lib/user-auth";
import { isClassroomReadOnlyStatus } from "../schema/aula";
import { ResourceLinkSchema } from "../schema/resource-link";

export const resourceLinks = Router();

const ResourceLinkUpdateSchema = ResourceLinkSchema.partial().omit({
  id: true,
  createdBy: true,
  schoolId: true,
  aulaId: true,
  createdAt: true
});

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const getUserId = (user?: { _id?: ObjectId | string }) => {
  if (!user?._id) return null;
  if (typeof user._id === "string") return user._id;
  return user._id.toString();
};

const getSchoolId = (user?: { schoolId?: string | null }) =>
  typeof user?.schoolId === "string" ? user.schoolId : null;

const isStaffRole = (role?: string | null) => {
  const membership = getCanonicalMembershipRole(role ?? undefined);
  return membership === "ADMIN" || membership === "TEACHER";
};

const canReadAsLearner = (role?: string | null) => {
  const membership = getCanonicalMembershipRole(role ?? undefined);
  return membership === "STUDENT" || membership === "PARENT";
};

const buildClassroomSchoolId = (classroom?: { schoolId?: string; institutionId?: string }) =>
  classroom?.schoolId ?? classroom?.institutionId ?? null;

resourceLinks.get("/api/aulas/:aulaId/resource-links", requireUser, async (req, res) => {
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.aulaId });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });

  const user = (req as { user?: { role?: string; schoolId?: string | null; _id?: ObjectId | string } }).user;
  const userId = getUserId(user);
  if (!userId) return res.status(403).json({ error: "forbidden" });

  const classroomSchoolId = buildClassroomSchoolId(classroom);
  const userSchoolId = getSchoolId(user);
  if (!classroomSchoolId || classroomSchoolId !== userSchoolId) {
    return res.status(403).json({ error: "forbidden" });
  }

  const filter: Record<string, unknown> = { aulaId: req.params.aulaId };
  if (!isStaffRole(user?.role)) {
    if (!canReadAsLearner(user?.role)) return res.status(403).json({ error: "forbidden" });
    const members = Array.isArray(classroom.members) ? classroom.members : [];
    const isMember = members.some(
      (member: { userId?: string; roleInClass?: string }) =>
        member.userId === userId && member.roleInClass === "STUDENT"
    );
    if (!isMember) return res.status(403).json({ error: "forbidden" });
    filter.visibility = "publico";
  }

  const items = await db.collection("resource_links").find(filter).sort({ updatedAt: -1 }).toArray();
  res.json({ items });
});

resourceLinks.post("/api/aulas/:aulaId/resource-links", requireUser, ...bodyLimitMB(5), async (req, res) => {
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.aulaId });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });
  if (isClassroomReadOnlyStatus(classroom.status)) {
    return res.status(403).json({ error: "classroom is read-only" });
  }

  const user = (req as { user?: { role?: string; schoolId?: string | null; _id?: ObjectId | string } }).user;
  if (!isStaffRole(user?.role)) return res.status(403).json({ error: "forbidden" });
  const userId = getUserId(user);
  const schoolId = getSchoolId(user);
  const classroomSchoolId = buildClassroomSchoolId(classroom);
  if (!userId || !schoolId || classroomSchoolId !== schoolId) return res.status(403).json({ error: "forbidden" });

  try {
    const now = new Date().toISOString();
    const linkId =
      typeof req.body?.id === "string" && req.body.id.trim()
        ? req.body.id.trim()
        : req.body?._id
          ? req.body._id.toString()
          : new ObjectId().toString();
    const payload = {
      ...req.body,
      id: linkId,
      createdBy: userId,
      schoolId,
      aulaId: req.params.aulaId,
      createdAt: now,
      updatedAt: now
    };
    const parsed = ResourceLinkSchema.parse(payload);
    const result = await db.collection("resource_links").insertOne(parsed);
    res.status(201).json({ id: result.insertedId, resourceLinkId: parsed.id });
  } catch (error: any) {
    res.status(400).json({ error: error?.message ?? "invalid payload" });
  }
});

resourceLinks.put("/api/aulas/:aulaId/resource-links/:id", requireUser, ...bodyLimitMB(5), async (req, res) => {
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.aulaId });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });
  if (isClassroomReadOnlyStatus(classroom.status)) {
    return res.status(403).json({ error: "classroom is read-only" });
  }

  const user = (req as { user?: { role?: string; schoolId?: string | null; _id?: ObjectId | string } }).user;
  if (!isStaffRole(user?.role)) return res.status(403).json({ error: "forbidden" });
  const schoolId = getSchoolId(user);
  const classroomSchoolId = buildClassroomSchoolId(classroom);
  if (!schoolId || classroomSchoolId !== schoolId) return res.status(403).json({ error: "forbidden" });

  try {
    const parsed = ResourceLinkUpdateSchema.parse(req.body);
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db
      .collection("resource_links")
      .updateOne({ id: req.params.id, aulaId: req.params.aulaId }, { $set: update });
    if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (error: any) {
    res.status(400).json({ error: error?.message ?? "invalid payload" });
  }
});

resourceLinks.patch(
  "/api/aulas/:aulaId/resource-links/:id",
  requireUser,
  ...bodyLimitMB(5),
  async (req, res) => {
    const db = await getDb();
    const classroom = await db.collection("aulas").findOne({ id: req.params.aulaId });
    if (!classroom) return res.status(404).json({ error: "classroom not found" });
    if (isClassroomReadOnlyStatus(classroom.status)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }

    const user = (req as { user?: { role?: string; schoolId?: string | null; _id?: ObjectId | string } }).user;
    if (!isStaffRole(user?.role)) return res.status(403).json({ error: "forbidden" });
    const schoolId = getSchoolId(user);
    const classroomSchoolId = buildClassroomSchoolId(classroom);
    if (!schoolId || classroomSchoolId !== schoolId) return res.status(403).json({ error: "forbidden" });

    try {
      const parsed = ResourceLinkUpdateSchema.partial().parse(req.body);
      const update = { ...parsed, updatedAt: new Date().toISOString() };
      const result = await db
        .collection("resource_links")
        .updateOne({ id: req.params.id, aulaId: req.params.aulaId }, { $set: update });
      if (result.matchedCount === 0) return res.status(404).json({ error: "not found" });
      res.json({ ok: true });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

resourceLinks.delete("/api/aulas/:aulaId/resource-links/:id", requireUser, async (req, res) => {
  const db = await getDb();
  const classroom = await db.collection("aulas").findOne({ id: req.params.aulaId });
  if (!classroom) return res.status(404).json({ error: "classroom not found" });
  if (isClassroomReadOnlyStatus(classroom.status)) {
    return res.status(403).json({ error: "classroom is read-only" });
  }

  const user = (req as { user?: { role?: string; schoolId?: string | null } }).user;
  if (!isStaffRole(user?.role)) return res.status(403).json({ error: "forbidden" });
  const schoolId = getSchoolId(user);
  const classroomSchoolId = buildClassroomSchoolId(classroom);
  if (!schoolId || classroomSchoolId !== schoolId) return res.status(403).json({ error: "forbidden" });

  const result = await db
    .collection("resource_links")
    .deleteOne({ id: req.params.id, aulaId: req.params.aulaId });
  if (result.deletedCount === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});
