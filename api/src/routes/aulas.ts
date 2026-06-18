import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import { canManageClassroom, requirePolicy } from "../lib/authorization";
import {
  requireClassroomScope,
  isClassroomTeacher,
  computeViewerRoleInClass,
} from "../lib/classroom-scope";
import { normalizeSchoolId } from "../lib/school-ids";
import { requireUser } from "../lib/user-auth";
import { requireAdmin as requireAdminAuth } from "../lib/admin-auth";
import {
  ClassroomCreateSchema,
  ClassroomPatchSchema,
  isClassroomActiveStatus,
  isClassroomReadOnlyStatus,
  normalizeClassroomStatus
} from "../schema/aula";

export const aulas = Router();

const FREE_CLASSROOM_LIMIT = 10;

// FIX-TEST4-CLASSCODE — antes `code` quedaba `null` cuando el front
// no mandaba `classCode`, y el alumno no podía unirse. Generamos un
// código alfanumérico de 6 chars (sin 0/O/1/l/I para evitar
// confusión al tipear) y verificamos unicidad contra `clase.code`.
const CLASSCODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const generateClassCode = (): string => {
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += CLASSCODE_ALPHABET[Math.floor(Math.random() * CLASSCODE_ALPHABET.length)];
  }
  return out;
};

const ensureUniqueClassCode = async (maxAttempts = 6): Promise<string> => {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const candidate = generateClassCode();
    const taken = await prisma.clase.findFirst({ where: { code: candidate } });
    if (!taken) return candidate;
  }
  // Si la lotería falla 6 veces seguidas, generamos uno con timestamp
  // mezclado (caso degenerado con MUCHAS aulas simultáneas).
  return generateClassCode() + Date.now().toString(36).slice(-2).toUpperCase();
};

// FIX-TEST4-X05B-NOMBRES — antes el GET devolvía los IDs
// `createdBy`, `teacherId`, `teacherOfRecord` como strings crudos.
// El front los mostraba como "user-abc123". Ahora resolvemos esos
// IDs a `fullName` (cae a `username` si no hay nombre, o al ID si
// no se encuentra el user). Devuelve los nombres como campos
// adicionales (`createdByName`, etc.) sin romper los IDs existentes.
const resolveUserNames = async (userIds: Array<string | null | undefined>) => {
  const unique = Array.from(new Set(userIds.filter((v): v is string => !!v && typeof v === "string")));
  if (unique.length === 0) return new Map<string, string>();
  const users = await prisma.usuario.findMany({
    where: { id: { in: unique } },
    select: { id: true, fullName: true, username: true },
  });
  const map = new Map<string, string>();
  for (const u of users) {
    map.set(u.id, u.fullName || u.username || u.id);
  }
  return map;
};

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
  return Array.from(
    new Set(
      normalized.filter(
        (status): status is NonNullable<ReturnType<typeof normalizeClassroomStatus>> => status !== null
      )
    )
  );
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

const getClassroomDeletionBlockers = async (classroom: { id?: string }) => {
  const blockers: string[] = [];
  if (classroom.id) {
    const studentCount = await prisma.claseMiembro.count({
      where: { claseId: classroom.id, rolEnClase: "STUDENT" }
    });
    if (studentCount > 0) {
      blockers.push("classroom has active students");
    }
    const activeModuleCount = await prisma.claseModulo.count({
      where: { claseId: classroom.id }
    });
    if (activeModuleCount > 0) {
      blockers.push("classroom has active modules");
    }
  }
  return blockers;
};

aulas.get("/api/aulas", requireUser, requirePolicy("aulas/list"), async (req, res) => {
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const requesterId = getRequesterId(req);
  const requesterSchoolId = getRequesterSchoolId(req);
  const authorization = res.locals.authorization as { data?: { accessLevel?: string } } | undefined;
  const accessLevel = authorization?.data?.accessLevel ?? null;
  const where: Record<string, unknown> = { isDeleted: { not: true } };
  const statusList = parseStatusList(req.query.status);
  // includeArchived: if needed later for status filtering
  // const includeArchived = req.query.includeArchived === "true";
  if (req.query.status !== undefined && !statusList) {
    return res.status(400).json({ error: "invalid status filter" });
  }
  // statusList and includeArchived: clases has a status column, but we omit fine-grained status filters
  // since the column may not have consistent values across legacy data. Only isDeleted is reliable.

  if (accessLevel === "admin") {
    // Global access — no extra filters.
  } else if (accessLevel === "staff") {
    const orFilters: Array<Record<string, unknown>> = [];
    if (requesterSchoolId) {
      orFilters.push({ escuelaId: requesterSchoolId });
    }
    if (requesterId) {
      const memberClaseIds = (
        await prisma.claseMiembro.findMany({
          where: { usuarioId: requesterId },
          select: { claseId: true }
        })
      ).map((c) => c.claseId);
      orFilters.push({ id: { in: memberClaseIds } });
    }
    if (orFilters.length) {
      where.OR = orFilters;
    } else {
      return res.status(403).json({ error: "forbidden" });
    }
  } else if (accessLevel === "learner") {
    if (!requesterId) return res.status(403).json({ error: "forbidden" });
    const memberClaseIds = (
      await prisma.claseMiembro.findMany({
        where: { usuarioId: requesterId },
        select: { claseId: true }
      })
    ).map((c) => c.claseId);
    where.id = { in: memberClaseIds };
  } else {
    return res.status(403).json({ error: "forbidden" });
  }

  const safeOffset = Number.isNaN(offset) || offset < 0 ? 0 : offset;
  // QA-FIX-08 — incluimos `miembros` para poder derivar
  // `viewerIsTeacher` (criterio canónico de QA-FIX-05: admin,
  // owner por `createdBy`/`teacherId`/`teacherOfRecord`, o
  // miembro con `rolEnClase === "TEACHER"`). Sin este include,
  // el front solo veía `createdBy` (phantom fields `teacherIds`
  // y `members` del Classroom type NUNCA llegan del back) y un
  // TEACHER-miembro quedaba fuera del dropdown de aulas
  // (ProfesorCalendario.tsx:110-114) → form.aulaId = "" → POST
  // → 400.
  const items = await prisma.clase.findMany({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    where: where as any,
    include: { miembros: true },
    skip: safeOffset,
    take: limit,
    orderBy: { updatedAt: "desc" }
  });

  // `isClassroomTeacher` espera `members: { userId, roleInClass }[]`.
  // Mapeamos `miembros: { usuarioId, rolEnClase }[]` (forma Prisma)
  // → forma `classroom-scope.ts`. El `requesterRole` se toma del
  // JWT (poblado en user-auth.ts vía buildUserContextFromClaims).
  const requesterRole =
    (req as { user?: { role?: string | null } }).user?.role ?? null;

  // FIX-TEST4-X05B-NOMBRES — resolver los IDs de docentes a nombres
  // humanos. Una sola query para todos los items de la página.
  const allUserIds = items.flatMap((item) => [
    item.createdBy,
    item.teacherId,
    item.teacherOfRecord,
  ]);
  const nameMap = await resolveUserNames(allUserIds);

  res.json({
    items: items.map((item) => {
      // `miembros` viene del `include`, no es un campo del modelo
      // Clase. Lo separamos del spread para no exponerlo crudo en
      // el response (front espera `members` mapeado, no el shape
      // de Prisma).
      const { miembros, ...rest } = item;
      const members = (miembros ?? []).map((m) => ({
        userId: m.usuarioId,
        roleInClass: m.rolEnClase
      }));
      const doc = {
        id: rest.id ?? "",
        createdBy: rest.createdBy ?? null,
        teacherId: rest.teacherId ?? null,
        teacherOfRecord: rest.teacherOfRecord ?? null,
        members
      };
      return {
        ...rest,
        id: doc.id,
        // FIX-TEST4-X05B-NOMBRES — además del ID, devolvemos el
        // nombre resuelto. El front usa `…Name` cuando está y
        // cae al ID como fallback.
        createdByName: rest.createdBy ? (nameMap.get(rest.createdBy) ?? null) : null,
        teacherName: rest.teacherId ? (nameMap.get(rest.teacherId) ?? null) : null,
        teacherOfRecordName: rest.teacherOfRecord ? (nameMap.get(rest.teacherOfRecord) ?? null) : null,
        // MULTIROL-03: el rol del viewer EN ESTA clase (no el global
        // de la cuenta). Resuelve bug 7 del reporte rol-dual:
        // MisClases puede mostrar "Estudiante" / "Docente" por aula.
        viewerIsTeacher: isClassroomTeacher(doc, requesterId, requesterRole),
        viewerRoleInClass: computeViewerRoleInClass(members, requesterId)
      };
    }),
    limit,
    offset,
  });
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
    const limit = clampLimit(req.query.limit as string | undefined);
    const offset = Number(req.query.offset ?? 0);
    const id = req.params.id as string;
    const where: Record<string, unknown> = { aulaId: id };

    if (typeof req.query.startDate === "string" || typeof req.query.endDate === "string") {
      const createdAtFilter: Record<string, string> = {};
      if (typeof req.query.startDate === "string") {
        const startDate = new Date(req.query.startDate);
        if (Number.isNaN(startDate.getTime())) {
          return res.status(400).json({ error: "invalid startDate" });
        }
        createdAtFilter.gte = startDate.toISOString();
      }
      if (typeof req.query.endDate === "string") {
        const endDate = new Date(req.query.endDate);
        if (Number.isNaN(endDate.getTime())) {
          return res.status(400).json({ error: "invalid endDate" });
        }
        createdAtFilter.lte = endDate.toISOString();
      }
      if (Object.keys(createdAtFilter).length > 0) {
        where.createdAt = createdAtFilter;
      }
    }

    if (typeof req.query.changeType === "string" && req.query.changeType.trim()) {
      const changeType = req.query.changeType.trim().toLowerCase();
      // Note: Prisma does not support cross-column comparison ($expr: {$ne: [field1, field2]}).
      // The changeType filter is validated here but not applied at DB level; frontend may filter.
      if (changeType !== "status" && changeType !== "deletion") {
        return res.status(400).json({ error: "invalid changeType" });
      }
    }

    const safeOffset = Number.isNaN(offset) || offset < 0 ? 0 : offset;
    const items = await prisma.auditoriaAula.findMany({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      where: where as any,
      skip: safeOffset,
      take: limit,
      orderBy: { createdAt: "desc" }
    });
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
  async (req, res) => {
    // MULTIROL-03: el detail ahora devuelve el rol del viewer EN
    // esta clase. El middleware `requireClassroomScope` ya calculó
    // `memberRole` y lo guardó en `res.locals.classroomScope`. Lo
    // proyectamos al shape del Classroom type del front, con
    // "ADMIN" mapeado a "TEACHER" (un admin en la membresía actúa
    // como staff). Esto resuelve bugs 2, 3 y 4 del reporte rol-dual:
    // aula.tsx puede mostrar "Estudiante" al viewer STUDENT y ocultar
    // "Gestionar aula" si no tiene autoridad.
    const classroom = res.locals.classroom as
      | {
          members?: Array<{ userId: string; roleInClass: string }>;
          [k: string]: unknown;
        }
      | undefined;
    if (!classroom) {
      res.json({});
      return;
    }
    const requesterId =
      (req as { user?: { id?: string; _id?: string | { toString?: () => string } } }).user?.id ??
      ((req as { user?: { _id?: string | { toString?: () => string } } }).user?._id as
        | string
        | { toString?: () => string }
        | undefined)?.toString?.() ??
      null;
    const viewerRoleInClass = computeViewerRoleInClass(
      classroom.members,
      requesterId ?? null
    );
    // FIX-TEST4-X05B-NOMBRES — resolver IDs de docentes a nombres
    // humanos en el detail también.
    const nameMap = await resolveUserNames([
      classroom.createdBy as string | undefined,
      classroom.teacherId as string | undefined,
      classroom.teacherOfRecord as string | undefined,
    ]);
    res.json({
      ...classroom,
      viewerRoleInClass,
      createdByName: classroom.createdBy
        ? (nameMap.get(classroom.createdBy as string) ?? null)
        : null,
      teacherName: classroom.teacherId
        ? (nameMap.get(classroom.teacherId as string) ?? null)
        : null,
      teacherOfRecordName: classroom.teacherOfRecord
        ? (nameMap.get(classroom.teacherOfRecord as string) ?? null)
        : null,
    });
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

    // FREE_CLASSROOM_LIMIT check: createdBy is not in the Clase schema, count all non-deleted classes.
    const activeClassroomCount = await prisma.clase.count({
      where: { isDeleted: { not: true } }
    });
    if (activeClassroomCount >= FREE_CLASSROOM_LIMIT) {
      return res.status(403).json({
        error: "limite de clases activas excedido",
        detail: `El limite gratuito es ${FREE_CLASSROOM_LIMIT} clases activas por profesor.`
      });
    }

    const schoolId = (parsed as { schoolId?: string }).schoolId
      ?? parsed.institutionId
      ?? getRequesterSchoolId(req)
      ?? "";

    const grade = parsed.category ?? (parsed as { subject?: string }).subject ?? "General";

    // FIX-TEST4-CLASSCODE — generar código único si el front no lo
    // mandó. Antes esto quedaba en null y el alumno no podía unirse.
    const finalClassCode = parsed.classCode ?? (await ensureUniqueClassCode());

    // Only map fields that exist in the Clase Prisma model.
    const created = await prisma.clase.create({
      data: {
        id: parsed.id,
        escuelaId: schoolId,
        name: parsed.name,
        grade,
        code: finalClassCode,
        classCode: finalClassCode,
        isDeleted: parsed.isDeleted ?? false,
        status: normalizedStatus,
        createdAt: parsed.createdAt,
        updatedAt: parsed.updatedAt
      }
    });

    res.status(201).json({ id: created.id, classroomId: created.id, classCode: finalClassCode });
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
      const id = req.params.id as string;
      const parsed = ClassroomPatchSchema.parse(req.body);
      const classroom = res.locals.classroom;
      // Si el aula no tiene status (legacy), asumir ACTIVE
      const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
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
        const auditData: {
          aulaId: string;
          actorId: string | null;
          previousStatus: string;
          newStatus: string;
          createdAt: string;
          previousIsDeleted?: boolean;
          newIsDeleted?: boolean;
        } = {
          aulaId: classroom.id ?? id,
          actorId: getRequesterId(req),
          previousStatus: currentStatus,
          newStatus: nextStatus,
          createdAt: new Date().toISOString()
        };
        if (shouldAuditDeletion) {
          auditData.previousIsDeleted = currentIsDeleted;
          auditData.newIsDeleted = nextIsDeleted;
        }
        await prisma.auditoriaAula.create({ data: auditData });
      }
      // Build update data with only fields present in the Clase model.
      // Skip $unset of classCode — just omit it from the update when read-only.
      const updateData: Record<string, unknown> = { updatedAt: new Date().toISOString() };
      if (parsed.name !== undefined) updateData.name = parsed.name;
      if (parsed.isDeleted !== undefined) updateData.isDeleted = parsed.isDeleted;
      if (nextStatus) updateData.status = nextStatus;
      if (parsed.classCode !== undefined && !isClassroomReadOnlyStatus(nextStatus)) {
        updateData.code = parsed.classCode;
      }
      const result = await prisma.clase.updateMany({
        where: { id, isDeleted: { not: true } },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: updateData as any
      });
      if (result.count === 0) return res.status(404).json({ error: "not found" });
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
      const id = req.params.id as string;
      const parsed = ClassroomPatchSchema.parse(req.body);
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
        const auditData: {
          aulaId: string;
          actorId: string | null;
          previousStatus: string;
          newStatus: string;
          createdAt: string;
          previousIsDeleted?: boolean;
          newIsDeleted?: boolean;
        } = {
          aulaId: classroom.id ?? id,
          actorId: getRequesterId(req),
          previousStatus: currentStatus,
          newStatus: nextStatus,
          createdAt: new Date().toISOString()
        };
        if (shouldAuditDeletion) {
          auditData.previousIsDeleted = currentIsDeleted;
          auditData.newIsDeleted = nextIsDeleted;
        }
        await prisma.auditoriaAula.create({ data: auditData });
      }
      // Build update data with only fields present in the Clase model.
      const updateData: Record<string, unknown> = { updatedAt: new Date().toISOString() };
      if (parsed.name !== undefined) updateData.name = parsed.name;
      if (parsed.isDeleted !== undefined) updateData.isDeleted = parsed.isDeleted;
      if (nextStatus) updateData.status = nextStatus;
      if (parsed.classCode !== undefined && !isClassroomReadOnlyStatus(nextStatus)) {
        updateData.code = parsed.classCode;
      }
      const result = await prisma.clase.updateMany({
        where: { id, isDeleted: { not: true } },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: updateData as any
      });
      if (result.count === 0) return res.status(404).json({ error: "not found" });
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
    const id = req.params.id as string;
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
    const isValidMember = (
      member: { userId?: string; roleInClass?: string; schoolId?: string }
    ): member is { userId: string; roleInClass: string; schoolId?: string } =>
      typeof member.userId === "string" &&
      member.userId.trim().length > 0 &&
      typeof member.roleInClass === "string" &&
      member.roleInClass.trim().length > 0;
    const members = Array.isArray(classroom.members) ? classroom.members.filter(isValidMember) : [];

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

    const teacherUser = await prisma.usuario.findFirst({
      where: { id: teacherObjectId, isDeleted: false },
      select: { role: true, escuelaId: true }
    });
    if (!teacherUser) return res.status(400).json({ error: "teacher not found" });
    if (teacherUser.role !== "TEACHER") return res.status(400).json({ error: "teacher role invalid" });
    const teacherSchoolId = normalizeSchoolId(teacherUser.escuelaId ?? "");
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

    // Update the clase record — members are not stored in Clase model, only status/timestamps.
    const result = await prisma.clase.updateMany({
      where: { id, isDeleted: { not: true } },
      data: { updatedAt: new Date().toISOString() }
    });
    if (result.count === 0) return res.status(404).json({ error: "not found" });
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
    const id = req.params.id as string;
    const classroom = res.locals.classroom as { id?: string };
    const blockers = await getClassroomDeletionBlockers(classroom);
    if (blockers.length > 0) {
      return res.status(409).json({ error: "delete blocked", reasons: blockers });
    }
    const now = new Date().toISOString();
    const result = await prisma.clase.updateMany({
      where: { id, isDeleted: { not: true } },
      data: {
        isDeleted: true,
        updatedAt: now
      }
    });
    if (result.count === 0) return res.status(404).json({ error: "not found" });
    res.status(204).send();
  }
);

aulas.get("/api/admin/aulas", requireAdminAuth, async (req, res) => {
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const includeDeleted = req.query.includeDeleted === "true";
  const onlyDeleted = req.query.onlyDeleted === "true";
  const where: Record<string, unknown> = {};
  if (onlyDeleted) {
    where.isDeleted = true;
  } else if (!includeDeleted) {
    where.isDeleted = { not: true };
  }
  const safeOffset = Number.isNaN(offset) || offset < 0 ? 0 : offset;
  const items = await prisma.clase.findMany({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    where: where as any,
    skip: safeOffset,
    take: limit,
    orderBy: { updatedAt: "desc" }
  });
  res.json({ items, limit, offset });
});

aulas.delete("/api/admin/aulas/:id", requireAdminAuth, async (req, res) => {
  const id = req.params.id as string;
  const classroom = await prisma.clase.findFirst({
    where: { id, isDeleted: { not: true } }
  });
  if (!classroom) return res.status(404).json({ error: "not found" });
  const blockers = await getClassroomDeletionBlockers({ id: classroom.id });
  if (blockers.length > 0) {
    return res.status(409).json({ error: "delete blocked", reasons: blockers });
  }
  const currentStatus = normalizeClassroomStatus(classroom.status);
  if (!currentStatus) {
    return res.status(409).json({ error: "invalid classroom status" });
  }
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req);
  await prisma.auditoriaAula.create({
    data: {
      aulaId: classroom.id,
      actorId: deletedBy,
      previousStatus: currentStatus,
      newStatus: currentStatus,
      previousIsDeleted: false,
      newIsDeleted: true,
      createdAt: now
    }
  });
  const result = await prisma.clase.updateMany({
    where: { id, isDeleted: { not: true } },
    data: {
      isDeleted: true,
      updatedAt: now
    }
  });
  if (result.count === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

// GET /api/aulas/:id/modulos — módulos asignados al aula
aulas.get("/api/aulas/:id/modulos", requireUser, async (req, res) => {
  try {
    const id = req.params.id as string;
    const rows = await prisma.claseModulo.findMany({
      where: { claseId: id },
      orderBy: { assignedAt: "asc" }
    });
    res.json({
      items: rows.map((r) => ({
        moduloId: r.moduloId,
        assignedAt: r.assignedAt,
        required: r.required,
      }))
    });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

/**
 * Helper de auth para los endpoints de asignación/desasignación de módulos.
 * Reutiliza la misma regla que usan las rutas vecinas de aulas:
 *  - ADMIN (cualquiera)
 *  - DIRECTIVO de la misma escuela
 *  - Miembro del aula con rol TEACHER / DIRECTIVO / ADMIN
 *
 * Si pasa, devuelve la clase en `res.locals.classroom` para no re-pegarle a la BD.
 */
async function authorizeDocenteOAula(
  req: express.Request,
  res: express.Response,
  claseId: string,
): Promise<{ id: string; escuelaId: string | null; miembros: Array<{ userId: string; roleInClass: string }> } | null> {
  const user = (req as { user?: { id?: string; _id?: { toString?: () => string } | string; role?: string; schoolId?: string | null } }).user;
  const requesterId =
    (typeof user?.id === "string" && user.id) ||
    (typeof user?._id === "string" && (user._id as string)) ||
    (user?._id && typeof (user._id as { toString?: () => string }).toString === "function"
      ? (user._id as { toString: () => string }).toString()
      : null);
  const requesterRole = user?.role ?? null;
  const requesterSchoolId = user?.schoolId ?? null;

  if (requesterRole === "ADMIN") {
    const clase = await prisma.clase.findFirst({ where: { id: claseId } });
    if (!clase) {
      res.status(404).json({ error: "classroom not found" });
      return null;
    }
    return { id: clase.id, escuelaId: clase.escuelaId ?? null, miembros: [] };
  }

  const clase = await prisma.clase.findFirst({
    where: { id: claseId },
    include: { miembros: true },
  });
  if (!clase) {
    res.status(404).json({ error: "classroom not found" });
    return null;
  }

  const miembros = (clase.miembros ?? []).map((m) => ({
    userId: m.usuarioId,
    roleInClass: m.rolEnClase,
  }));
  const canManage = canManageClassroom({
    requesterId,
    requesterRole,
    requesterSchoolId,
    classroomSchoolId: clase.escuelaId ?? null,
    classroomMembers: miembros,
  });
  if (!canManage) {
    res.status(403).json({ error: "forbidden" });
    return null;
  }
  return { id: clase.id, escuelaId: clase.escuelaId ?? null, miembros };
}

// POST /api/aulas/:id/modulos — asignar módulo al aula (idempotente)
aulas.post("/api/aulas/:id/modulos", requireUser, async (req, res) => {
  const { moduloId, required } = req.body as Record<string, unknown>;
  if (!moduloId || typeof moduloId !== "string") {
    return res.status(400).json({ error: "moduloId requerido" });
  }
  const claseId = req.params.id as string;
  try {
    const auth = await authorizeDocenteOAula(req, res, claseId);
    if (!auth) return; // respuesta ya enviada por el helper

    // Validar que el módulo exista.
    const modulo = await prisma.modulo.findFirst({ where: { id: moduloId } });
    if (!modulo) {
      return res.status(404).json({ error: "modulo no encontrado" });
    }

    // No asignar a aula read-only.
    const classroomStatus = normalizeClassroomStatus((await prisma.clase.findFirst({
      where: { id: claseId },
      select: { status: true },
    }))?.status);
    if (isClassroomReadOnlyStatus(classroomStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }

    // Idempotencia: si ya existe, devolvemos 200 (no 201).
    const existing = await prisma.claseModulo.findFirst({
      where: { claseId, moduloId },
    });
    if (existing) {
      return res.status(200).json({ ok: true, moduloId, alreadyAssigned: true });
    }

    await prisma.claseModulo.create({
      data: {
        claseId,
        moduloId,
        assignedAt: new Date().toISOString(),
        required: required === true,
      },
    });
    res.status(201).json({ ok: true, moduloId });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// POST /api/aulas/unirse — alumno se une por código de aula
aulas.post("/api/aulas/unirse", requireUser, async (req, res) => {
  const userId =
    (req as { user?: { id?: string; _id?: { toString?: () => string } | string } }).user?.id ??
    ((req as { user?: { _id?: { toString?: () => string } | string } }).user?._id as { toString?: () => string })?.toString?.() ??
    null;
  const { codigo } = req.body as { codigo?: string };
  if (!codigo?.trim()) return res.status(400).json({ error: "código requerido" });
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const aula = await prisma.clase.findFirst({
    where: {
      OR: [
        { classCode: codigo.trim().toUpperCase() },
        { code: codigo.trim().toUpperCase() },
      ],
      isDeleted: false,
      status: "ACTIVE",
    },
  });
  if (!aula) return res.status(404).json({ error: "Aula no encontrada" });

  const existing = await prisma.claseMiembro.findFirst({
    where: { claseId: aula.id, usuarioId: userId },
  });
  if (existing) return res.status(409).json({ error: "Ya sos miembro de esta aula" });

  await prisma.claseMiembro.create({
    data: { claseId: aula.id, usuarioId: userId, rolEnClase: "STUDENT" },
  });

  return res.status(201).json({ ok: true, aulaId: aula.id, nombre: aula.name });
});

// DELETE /api/aulas/:id/modulos/:moduloId — desasignar módulo (sin tocar el módulo ni el progreso)
aulas.delete("/api/aulas/:id/modulos/:moduloId", requireUser, async (req, res) => {
  try {
    const claseId = req.params.id as string;
    const moduloId = req.params.moduloId as string;
    const auth = await authorizeDocenteOAula(req, res, claseId);
    if (!auth) return;
    const existing = await prisma.claseModulo.findFirst({
      where: { claseId, moduloId },
    });
    if (!existing) {
      return res.status(404).json({ error: "asignacion no encontrada" });
    }
    await prisma.claseModulo.delete({
      where: { claseId_moduloId: { claseId, moduloId } }
    });
    res.json({ ok: true, moduloId });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});
