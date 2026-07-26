import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { ENV } from "../lib/env";
import { fetchActiveStudentSummary } from "../lib/enterprise-billing";
import { ENTERPRISE_FEATURES, getSchoolEntitlements, requireEnterpriseFeature } from "../lib/entitlements";
import { normalizeSchoolId } from "../lib/school-ids";
import { requireUser } from "../lib/user-auth";
import {
  CLASSROOM_ACTIVE_STATUS_VALUES,
  ClassroomSchema,
  isClassroomActiveStatus,
  normalizeClassroomStatus
} from "../schema/aula";
import { ensureUniqueClassCode } from "./aulas";

export const enterprise = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const resolveSchoolId = (req: { user?: { schoolId?: string | null } }, res: any) => {
  const schoolId = typeof req.user?.schoolId === "string" ? req.user.schoolId : null;
  if (!schoolId) {
    res.status(403).json({ error: "School not assigned" });
    return null;
  }
  return schoolId;
};

const buildSchoolFilters = (schoolId: string) => {
  return { escuelaFilter: { escuelaId: schoolId }, escuelaObjectId: schoolId };
};

enterprise.get("/api/enterprise/entitlements", requireUser, async (req, res) => {
  const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
  if (!schoolId) return;
  const entitlements = await getSchoolEntitlements(schoolId);
  res.json(entitlements);
});

enterprise.get(
  "/api/enterprise/miembros",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.MEMBERS),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const { escuelaFilter } = buildSchoolFilters(schoolId);
    const items = await prisma.usuario.findMany({
      where: {
        ...escuelaFilter,
        isDeleted: { not: true }
      },
      select: { id: true, fullName: true, role: true, escuelaId: true, username: true }
    });
    // PLAN-multirol Fase 3 — ya no hay cuentas espejo que sacar del roster.
    const staff = items
      .map((item) => ({
      id: item.id ?? "",
      name: item.fullName ?? item.username ?? "Sin nombre",
      role: item.role ?? "USER",
      schoolId: normalizeSchoolId(item.escuelaId) ?? schoolId
    }));
    res.json({ staff });
  }
);

enterprise.get(
  "/api/enterprise/dashboard",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.DASHBOARD),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const entitlements = await getSchoolEntitlements(schoolId);
    const { escuelaFilter } = buildSchoolFilters(schoolId);
    const staffCount = await prisma.usuario.count({
      where: {
        ...escuelaFilter,
        role: { in: ["ADMIN", "TEACHER"] },
        isDeleted: { not: true }
      }
    });
    const activeClassroomCount = await prisma.clase.count({
      where: { escuelaId: schoolId, status: { in: Array.from(CLASSROOM_ACTIVE_STATUS_VALUES) } }
    });
    const moduleCount = await prisma.modulo.count({
      where: { visibility: "escuela", schoolId }
    });

    const indicadores = [
      { id: "staff", label: "Equipo escolar", value: staffCount.toString() },
      { id: "aulas", label: "Aulas activas", value: activeClassroomCount.toString() },
      { id: "modulos", label: "Módulos escolares", value: moduleCount.toString() }
    ];

    const acciones: string[] = [];
    if (activeClassroomCount === 0) acciones.push("Crear la primera aula de tu institución.");
    if (moduleCount === 0) acciones.push("Publicar módulos para compartir con docentes.");
    if (staffCount === 0) acciones.push("Invitar docentes y administradores a la escuela.");
    if (acciones.length === 0) {
      acciones.push(
        "Revisar el avance semanal del equipo.",
        "Coordinar nuevas capacitaciones con los docentes."
      );
    }

    res.json({ indicadores, acciones, entitlements });
  }
);

enterprise.get(
  "/api/enterprise/modulos",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.MODULES),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const limit = clampLimit(req.query.limit as string | undefined);
    const offset = Number(req.query.offset ?? 0);
    const items = await prisma.modulo.findMany({
      where: { visibility: "escuela", schoolId },
      skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
      take: limit,
      orderBy: { updatedAt: "desc" }
    });
    res.json({ items, limit, offset });
  }
);

enterprise.get(
  "/api/enterprise/aulas",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.CLASSROOMS),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const limit = clampLimit(req.query.limit as string | undefined);
    const offset = Number(req.query.offset ?? 0);
    const items = await prisma.clase.findMany({
      where: { escuelaId: schoolId },
      skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
      take: limit,
      orderBy: { updatedAt: "desc" } as any
    });
    res.json({ items, limit, offset });
  }
);

enterprise.post(
  "/api/enterprise/aulas",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.CLASSROOMS),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
  try {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const payloadSchoolId = req.body?.schoolId;
    if (payloadSchoolId && typeof payloadSchoolId === "string" && payloadSchoolId !== schoolId) {
      res.status(403).json({ error: "schoolId mismatch" });
      return;
    }
    if (payloadSchoolId && typeof payloadSchoolId !== "string") {
      res.status(400).json({ error: "invalid schoolId" });
      return;
    }
    const rawTeacherIds: unknown[] = Array.isArray(req.body?.teacherIds)
      ? req.body.teacherIds
      : req.body?.teacherId
        ? [req.body.teacherId]
        : [];
    const teacherIds: string[] = rawTeacherIds
      .filter((value: unknown): value is string => typeof value === "string")
      .map((value) => value.trim())
      .filter((value) => value !== "");
    if (teacherIds.length < 1) {
      res.status(400).json({ error: "teacherId is required" });
      return;
    }
    const adminId = typeof req.body?.adminId === "string" && req.body.adminId.trim()
      ? req.body.adminId.trim()
      : typeof req.body?.createdBy === "string" && req.body.createdBy.trim()
        ? req.body.createdBy.trim()
        : null;
    if (!adminId) {
      res.status(400).json({ error: "adminId is required" });
      return;
    }
    const uniqueTeacherIds = Array.from(new Set(teacherIds));
    if (!adminId) {
      res.status(400).json({ error: "invalid adminId" });
      return;
    }
    const lookupIds = [adminId, ...uniqueTeacherIds];
    const users = await prisma.usuario.findMany({
      where: { id: { in: lookupIds }, isDeleted: { not: true } },
      select: { id: true, role: true, escuelaId: true }
    });
    const usersById = new Map(users.map((user) => [user.id ?? "", user]));
    const adminUser = usersById.get(adminId);
    if (!adminUser) {
      res.status(400).json({ error: "admin not found" });
      return;
    }
    const adminRole = adminUser.role;
    if (adminRole !== "DIRECTIVO" && adminRole !== "TEACHER" && adminRole !== "ADMIN") {
      res.status(400).json({ error: "admin role invalid" });
      return;
    }
    const adminSchoolId = normalizeSchoolId(adminUser.escuelaId);
    if (adminSchoolId !== schoolId) {
      res.status(403).json({ error: "admin school mismatch" });
      return;
    }
    for (const teacherId of uniqueTeacherIds) {
      const teacherUser = usersById.get(teacherId);
      if (!teacherUser) {
        res.status(400).json({ error: "teacher not found" });
        return;
      }
      if (teacherUser.role !== "TEACHER") {
        res.status(400).json({ error: "teacher role invalid" });
        return;
      }
      const teacherSchoolId = normalizeSchoolId(teacherUser.escuelaId);
      if (teacherSchoolId !== schoolId) {
        res.status(403).json({ error: "teacher school mismatch" });
        return;
      }
    }
    const now = new Date().toISOString();
    const members = [
      { userId: adminId, roleInClass: "ADMIN", schoolId },
      ...uniqueTeacherIds.map((teacherId) => ({ userId: teacherId, roleInClass: "TEACHER", schoolId }))
    ];
    const payload = {
      ...req.body,
      schoolId,
      institutionId: schoolId,
      createdBy: adminId,
      members,
      status: req.body?.status ?? "ACTIVE",
      createdAt: req.body?.createdAt ?? now,
      updatedAt: req.body?.updatedAt ?? now
    };
    const parsed = ClassroomSchema.parse(payload);
    const normalizedStatus = normalizeClassroomStatus(parsed.status);
    if (!normalizedStatus) {
      res.status(400).json({ error: "invalid classroom status" });
      return;
    }
    if (parsed.classCode && !isClassroomActiveStatus(normalizedStatus)) {
      res.status(400).json({ error: "classCode only available for ACTIVE classrooms" });
      return;
    }
    // FIX-CLASSCODE-ENTERPRISE — este create no generaba código de clase
    // (a diferencia de POST /api/aulas), dejando `code`/`classCode` en null;
    // la UI caía a mostrar el id largo (aula-<uuid>), que no sirve para
    // unirse. Mismo generador que aulas.ts; sólo para aulas ACTIVE.
    const finalClassCode =
      parsed.classCode ??
      (isClassroomActiveStatus(normalizedStatus) ? await ensureUniqueClassCode() : undefined);
    const result = await prisma.clase.create({
      data: {
        ...parsed,
        ...(finalClassCode ? { code: finalClassCode, classCode: finalClassCode } : {})
      } as any
    });
    res.status(201).json({ id: result.id, classroomId: parsed.id, classCode: finalClassCode ?? null });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
  }
);

enterprise.get(
  "/api/enterprise/mensajes",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.MESSAGES),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const limit = clampLimit(req.query.limit as string | undefined);
    const offset = Number(req.query.offset ?? 0);
    const items = await (prisma as any).mensajeReportado?.findMany({
      where: { schoolId },
      skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
      take: limit,
      orderBy: { createdAt: "desc" }
    }) ?? [];
    res.json({ items, limit, offset });
  }
);

enterprise.get(
  "/api/enterprise/contratos",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.CONTRACTS),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const rows = await prisma.enterpriseContrato.findMany({ where: { schoolId } });
    const items = rows.map((r) => ({ ...JSON.parse(r.json), id: r.id }));
    res.json(items);
  }
);

enterprise.get(
  "/api/enterprise/billing",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.CONTRACTS),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const escuela = await prisma.escuela.findFirst({
      where: { id: schoolId },
      select: { pricePerStudent: true } as any
    });
    const contratoRows = await prisma.enterpriseContrato.findMany({
      where: { schoolId },
      orderBy: { createdAt: "desc" },
      take: 1
    });
    const contract = contratoRows.length > 0 ? JSON.parse(contratoRows[0].json) : null;
    const pricePerStudent =
      typeof (escuela as any)?.pricePerStudent === "number"
        ? (escuela as any).pricePerStudent
        : typeof contract?.pricePerStudent === "number"
          ? contract.pricePerStudent
          : 0;
    const summary = await fetchActiveStudentSummary(schoolId);
    const breakdown = summary.students.map((student) => ({
      userId: student.userId,
      classroomIds: student.classroomIds,
      classroomCount: student.classroomCount,
      amount: pricePerStudent
    }));
    const total = pricePerStudent * summary.activeStudentCount;
    const billingCycle = {
      schoolId,
      pricePerStudent,
      activeStudentCount: summary.activeStudentCount,
      total,
      breakdown,
      generatedAt: new Date().toISOString()
    };
    await prisma.enterpriseBillingCycle.create({
      data: {
        id: generateId(),
        json: JSON.stringify(billingCycle),
        createdAt: new Date().toISOString()
      }
    });
    res.json(billingCycle);
  }
);

enterprise.get(
  "/api/enterprise/reportes",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  async (req, res) => {
    const schoolId = resolveSchoolId(req as { user?: { schoolId?: string | null } }, res);
    if (!schoolId) return;
    const rows = await prisma.enterpriseReporte.findMany({ where: { schoolId } as any });
    const items = rows.map((r) => ({ ...JSON.parse(r.json), id: r.id }));
    res.json(items);
  }
);
