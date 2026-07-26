import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import { toObjectId, generateId } from "../lib/ids";
import { canManageClassroom, requirePolicy } from "../lib/authorization";
import {
  requireClassroomScope,
  isClassroomTeacher,
  computeViewerRoleInClass,
} from "../lib/classroom-scope";
import { whereSoloAlumnosReales } from "../lib/inscripcion-prueba";
import { resolveUserNames } from "../lib/resolve-user-names";
import { sincronizarMembresia } from "../lib/memberships";
import { normalizeSchoolId } from "../lib/school-ids";
import { requireUser } from "../lib/user-auth";
import { hasRole, resolvePrimaryRole } from "../lib/roles";
import { requireAdmin as requireAdminAuth } from "../lib/admin-auth";
import {
  parseModuleDependencies,
  getRequiredDependencyIds,
  getUnlocksDependencyIds,
  computeModuleLock,
} from "../lib/module-dependencies";
import { hasActiveModuleOverride } from "../lib/module-unlock-overrides";
import {
  ClassroomCreateSchema,
  ClassroomPatchSchema,
  ClasePeriodoSchema,
  isClassroomActiveStatus,
  isClassroomReadOnlyStatus,
  normalizeClassroomStatus
} from "../schema/aula";

export const aulas = Router();

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

export const ensureUniqueClassCode = async (maxAttempts = 6): Promise<string> => {
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
// con `resolveUserNames` (lib/resolve-user-names.ts, compartida con
// publicaciones.ts para `authorName`).
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
    // Las inscripciones de prueba no cuentan como "alumnos activos"
    // que bloqueen el borrado del aula.
    const studentCount = await prisma.claseMiembro.count({
      where: { claseId: classroom.id, rolEnClase: "STUDENT", ...whereSoloAlumnosReales() }
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
  // FIX-ENTERPRISE-AULAS-DOCENTES — sumamos también los TEACHER de
  // `miembros` (co-titulares agregados vía `clase_miembros`, sin
  // pasar por `teacherId`/`teacherOfRecord`/`createdBy`).
  const memberTeacherIds = items.flatMap((item) =>
    (item.miembros ?? [])
      .filter((m) => m.rolEnClase === "TEACHER")
      .map((m) => m.usuarioId)
  );
  const allUserIds = items.flatMap((item) => [
    item.createdBy,
    item.teacherId,
    item.teacherOfRecord,
  ]).concat(memberTeacherIds);
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
        roleInClass: m.rolEnClase,
        // Sólo resolvemos nombre para TEACHER (es lo único que la UI
        // de aulas necesita mostrar hoy); el resto queda undefined.
        ...(m.rolEnClase === "TEACHER" ? { name: nameMap.get(m.usuarioId) ?? null } : {})
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
        // FIX-ENTERPRISE-AULAS-DOCENTES — un co-titular agregado vía
        // `clase_miembros` (rolEnClase=TEACHER) y no via
        // `teacherId`/`teacherOfRecord`/`createdBy` quedaba invisible
        // en el listado del directivo ("N docentes" quedaba en 0 pese
        // a tener docente). `members` ya se computaba acá arriba para
        // `viewerIsTeacher`/`viewerRoleInClass`; sólo faltaba
        // devolverlo.
        members,
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
    // FIX-CLASSCODE-ENTERPRISE — backfill perezoso: aulas creadas por rutas
    // que no generaban código (enterprise) quedaron con code/classCode null
    // y la UI mostraba el id largo como "código". La primera lectura del
    // detail les asigna uno real.
    if (
      !classroom.classCode &&
      !classroom.code &&
      !classroom.isDeleted &&
      isClassroomActiveStatus(normalizeClassroomStatus(classroom.status as string | undefined))
    ) {
      const nuevoCodigo = await ensureUniqueClassCode();
      await prisma.clase.update({
        where: { id: classroom.id as string },
        data: { code: nuevoCodigo, classCode: nuevoCodigo }
      });
      classroom.code = nuevoCodigo;
      classroom.classCode = nuevoCodigo;
    }
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

    // PLAN-A §1 — el front no puede ser la fuente de verdad del schoolId de
    // los miembros (mandaba `user.schoolId ?? ""`, desalineado del
    // `institutionId` elegido en el form, produciendo ZodErrors crudos:
    // `members[i].schoolId` too_small + "members must match the classroom
    // schoolId"). Derivamos acá el schoolId del aula (lo que mandó el body
    // como schoolId/institutionId, o si no vino, el del usuario autenticado)
    // y lo forzamos en todos los miembros antes de validar.
    const bodySchoolId =
      (typeof req.body?.schoolId === "string" && req.body.schoolId.trim()) ||
      (typeof req.body?.institutionId === "string" && req.body.institutionId.trim()) ||
      "";
    const derivedSchoolId = bodySchoolId || getRequesterSchoolId(req) || "";
    if (!derivedSchoolId) {
      return res.status(422).json({
        error: "Tu cuenta no tiene escuela asignada. Pedile a un administrador que te asigne una escuela antes de crear aulas."
      });
    }

    const rawMembers = Array.isArray(req.body?.members) ? req.body.members : [];
    const payload = {
      ...req.body,
      schoolId: derivedSchoolId,
      institutionId: derivedSchoolId,
      members: rawMembers.map((member: Record<string, unknown>) => ({ ...member, schoolId: derivedSchoolId })),
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

    const schoolId = derivedSchoolId;

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
        // FIX-CLASSCODE-PUT-COLUMN — escribía en `code` (columna legacy)
        // en vez de `classCode`/`class_code`, que es lo que la UI lee
        // (aula.tsx, ProfesorAulaConfiguracion.tsx). Un aula con sólo
        // `code` legado nunca se sanaba aunque el form la reenviara en
        // cada guardado — el round-trip pisaba `code` con el mismo valor
        // y dejaba `classCode` vacío para siempre.
        updateData.classCode = parsed.classCode;
      }
      if (parsed.allowComments !== undefined) updateData.allowComments = parsed.allowComments;
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
      // PLAN-A §2 — mismo fallback que PUT /api/aulas/:id (más arriba en
      // este archivo): un aula legacy sin status termina siendo tratada
      // como ACTIVE en vez de bloquear con un 409 sin contexto.
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
      const updateData: Record<string, unknown> = { updatedAt: new Date().toISOString() };
      if (parsed.name !== undefined) updateData.name = parsed.name;
      if (parsed.isDeleted !== undefined) updateData.isDeleted = parsed.isDeleted;
      if (nextStatus) updateData.status = nextStatus;
      if (parsed.classCode !== undefined && !isClassroomReadOnlyStatus(nextStatus)) {
        // FIX-CLASSCODE-PUT-COLUMN — escribía en `code` (columna legacy)
        // en vez de `classCode`/`class_code`, que es lo que la UI lee
        // (aula.tsx, ProfesorAulaConfiguracion.tsx). Un aula con sólo
        // `code` legado nunca se sanaba aunque el form la reenviara en
        // cada guardado — el round-trip pisaba `code` con el mismo valor
        // y dejaba `classCode` vacío para siempre.
        updateData.classCode = parsed.classCode;
      }
      if (parsed.allowComments !== undefined) updateData.allowComments = parsed.allowComments;
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
    // PLAN-A §2 — mismo fallback que PUT/PATCH /api/aulas/:id: status
    // ausente (aula legacy) ⇒ ACTIVE, en vez de un 409 sin contexto.
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
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
      select: { roles: true, escuelaId: true }
    });
    if (!teacherUser) return res.status(400).json({ error: "teacher not found" });
    if (resolvePrimaryRole(teacherUser) !== "TEACHER") return res.status(400).json({ error: "teacher role invalid" });
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

    // PLAN-X §4 — persistir la altas/baja en ClaseMiembro. Antes `updatedMembers`
    // se calculaba y se descartaba: sólo se tocaba `updatedAt`, el cambio de
    // docente nunca quedaba guardado. Mismo patrón (create/deleteMany, sin
    // upsert) que `POST/DELETE /api/aulas/:id/titulares`: la PK compuesta
    // (claseId, usuarioId, rolEnClase) no soporta upsert en el stub de tests.
    const alreadyTeacher = members.some(
      (member) => member.userId === teacherId && member.roleInClass === "TEACHER"
    );
    if (!alreadyTeacher) {
      await prisma.claseMiembro.create({
        data: { claseId: id, usuarioId: teacherId, rolEnClase: "TEACHER" }
      });
    }
    if (removeTeacherId && removeTeacherId !== teacherId) {
      await prisma.claseMiembro.deleteMany({
        where: { claseId: id, usuarioId: removeTeacherId, rolEnClase: "TEACHER" }
      });
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

// ─── PLAN-U §6 — co-titulares de aula ───────────────────────────────────────
// "2 profesores, o 1 profesor + 1 directivo, dueños de la misma aula."
// El dueño original (createdBy/teacherId/teacherOfRecord en `Clase`) NUNCA
// se toca acá: el co-titular se modela como una fila extra en `ClaseMiembro`
// con `rolEnClase` TEACHER o DIRECTIVO, que `isClassroomTeacher` (classroom-
// scope.ts) ya reconoce como autoridad docente completa. Máximo 2 titulares
// en total (dueño + 1 co-titular); nunca 0 (el dueño no es removible acá).
const TITULAR_ROLES = ["TEACHER", "DIRECTIVO"] as const;

const isOriginalOwner = (
  classroom: { createdBy?: string | null; teacherId?: string | null; teacherOfRecord?: string | null },
  userId: string
) =>
  classroom.createdBy === userId ||
  classroom.teacherId === userId ||
  classroom.teacherOfRecord === userId;

aulas.get(
  "/api/aulas/:id/titulares",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  async (req, res) => {
    const classroom = res.locals.classroom as {
      createdBy?: string | null;
      teacherId?: string | null;
      teacherOfRecord?: string | null;
      members?: Array<{ userId: string; roleInClass: string }>;
    };
    const ownerId = classroom.teacherId ?? classroom.createdBy ?? classroom.teacherOfRecord ?? null;
    const coTitulares = (classroom.members ?? []).filter(
      (m) => (TITULAR_ROLES as readonly string[]).includes(m.roleInClass) && m.userId !== ownerId
    );
    const nameMap = await resolveUserNames([ownerId, ...coTitulares.map((m) => m.userId)]);
    res.json({
      owner: ownerId ? { id: ownerId, name: nameMap.get(ownerId) ?? ownerId } : null,
      coTitulares: coTitulares.map((m) => ({
        id: m.userId,
        name: nameMap.get(m.userId) ?? m.userId,
        role: m.roleInClass
      }))
    });
  }
);

aulas.get(
  "/api/aulas/:id/titulares-candidatos",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  async (req, res) => {
    const classroom = res.locals.classroom as {
      schoolId?: string;
      createdBy?: string | null;
      teacherId?: string | null;
      teacherOfRecord?: string | null;
      members?: Array<{ userId: string; roleInClass: string }>;
    };
    if (!classroom.schoolId) return res.json({ items: [] });
    const excluded = new Set(
      [classroom.createdBy, classroom.teacherId, classroom.teacherOfRecord].filter(
        (v): v is string => !!v
      )
    );
    for (const m of classroom.members ?? []) {
      if ((TITULAR_ROLES as readonly string[]).includes(m.roleInClass)) excluded.add(m.userId);
    }
    const candidates = await prisma.usuario.findMany({
      where: { escuelaId: classroom.schoolId, isDeleted: { not: true } },
      select: { id: true, fullName: true, username: true, roles: true }
    });
    const items = candidates
      .filter((u) => !excluded.has(u.id) && (hasRole(u, "TEACHER") || hasRole(u, "DIRECTIVO")))
      .map((u) => ({
        id: u.id,
        name: u.fullName || u.username || u.id,
        role: hasRole(u, "TEACHER") ? "TEACHER" : "DIRECTIVO"
      }));
    res.json({ items });
  }
);

aulas.post(
  "/api/aulas/:id/titulares",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  express.json(),
  async (req, res) => {
    const id = req.params.id as string;
    const classroom = res.locals.classroom as {
      schoolId?: string;
      createdBy?: string | null;
      teacherId?: string | null;
      teacherOfRecord?: string | null;
      members?: Array<{ userId: string; roleInClass: string }>;
      status?: string;
    };
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (isClassroomReadOnlyStatus(currentStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const userId = typeof req.body?.userId === "string" ? req.body.userId.trim() : "";
    if (!userId) return res.status(400).json({ error: "userId is required" });
    if (isOriginalOwner(classroom, userId)) {
      return res.status(400).json({ error: "user is already the classroom owner" });
    }
    const existingCoTitulares = (classroom.members ?? []).filter((m) =>
      (TITULAR_ROLES as readonly string[]).includes(m.roleInClass)
    );
    if (existingCoTitulares.some((m) => m.userId === userId)) {
      return res.status(409).json({ error: "user is already a co-titular" });
    }
    // Máximo 2 titulares totales: el dueño + 1 co-titular.
    if (existingCoTitulares.length >= 1) {
      return res.status(400).json({ error: "classroom already has 2 titulares" });
    }
    const target = await prisma.usuario.findFirst({
      where: { id: userId, isDeleted: { not: true } },
      select: { roles: true, escuelaId: true }
    });
    if (!target) return res.status(400).json({ error: "user not found" });
    const isTeacher = hasRole(target, "TEACHER");
    const isDirectivo = hasRole(target, "DIRECTIVO");
    if (!isTeacher && !isDirectivo) {
      return res.status(400).json({ error: "user must be TEACHER or DIRECTIVO" });
    }
    if (normalizeSchoolId(target.escuelaId ?? "") !== classroom.schoolId) {
      return res.status(403).json({ error: "user school mismatch" });
    }
    await prisma.claseMiembro.create({
      data: { claseId: id, usuarioId: userId, rolEnClase: isTeacher ? "TEACHER" : "DIRECTIVO" }
    });
    res.status(201).json({ ok: true });
  }
);

aulas.delete(
  "/api/aulas/:id/titulares/:userId",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope({
    allowMemberRoles: ["ADMIN", "TEACHER"],
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  async (req, res) => {
    const id = req.params.id as string;
    const targetUserId = req.params.userId as string;
    const classroom = res.locals.classroom as {
      createdBy?: string | null;
      teacherId?: string | null;
      teacherOfRecord?: string | null;
      status?: string;
    };
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (isClassroomReadOnlyStatus(currentStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    if (isOriginalOwner(classroom, targetUserId)) {
      return res.status(400).json({ error: "cannot remove the original owner" });
    }
    const result = await prisma.claseMiembro.deleteMany({
      where: { claseId: id, usuarioId: targetUserId, rolEnClase: { in: [...TITULAR_ROLES] } }
    });
    if (result.count === 0) return res.status(404).json({ error: "co-titular not found" });
    res.status(204).send();
  }
);

// ─── PLAN-V §1 — períodos académicos del aula ───────────────────────────────
// "El boletín es por materia y año... la variante se acepta DENTRO DEL
// AULA, no en un subsistema": lista libre y ordenada de { nombre, desde,
// hasta } por aula. Sin agregación de notas todavía (eso es §3, en otro
// sprint) — esto sólo persiste y ordena los períodos.
const STAFF_MANAGE_GATE = {
  allowMemberRoles: ["ADMIN", "TEACHER"],
  allowSchoolMatch: true,
  notFoundMessage: "not found"
};

aulas.get(
  "/api/aulas/:id/periodos",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope(STAFF_MANAGE_GATE),
  async (req, res) => {
    const id = req.params.id as string;
    const items = await prisma.clasePeriodo.findMany({
      where: { claseId: id },
      orderBy: { orden: "asc" }
    });
    res.json({ items });
  }
);

aulas.post(
  "/api/aulas/:id/periodos",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope(STAFF_MANAGE_GATE),
  express.json(),
  async (req, res) => {
    const id = req.params.id as string;
    const classroom = res.locals.classroom as { status?: string };
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (isClassroomReadOnlyStatus(currentStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const parsed = ClasePeriodoSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.issues[0]?.message ?? "invalid payload" });
    }
    const existing = await prisma.clasePeriodo.findMany({ where: { claseId: id } });
    const nextOrden = existing.reduce((max, p) => Math.max(max, p.orden), -1) + 1;
    const now = new Date().toISOString();
    const created = await prisma.clasePeriodo.create({
      data: {
        id: generateId(),
        claseId: id,
        nombre: parsed.data.nombre,
        desde: parsed.data.desde,
        hasta: parsed.data.hasta,
        orden: nextOrden,
        createdAt: now,
        updatedAt: now
      }
    });
    res.status(201).json(created);
  }
);

aulas.patch(
  "/api/aulas/:id/periodos/:periodoId",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope(STAFF_MANAGE_GATE),
  express.json(),
  async (req, res) => {
    const id = req.params.id as string;
    const periodoId = req.params.periodoId as string;
    const classroom = res.locals.classroom as { status?: string };
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (isClassroomReadOnlyStatus(currentStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const existing = await prisma.clasePeriodo.findFirst({ where: { id: periodoId, claseId: id } });
    if (!existing) return res.status(404).json({ error: "periodo not found" });
    const parsed = ClasePeriodoSchema.safeParse({
      nombre: req.body?.nombre ?? existing.nombre,
      desde: req.body?.desde ?? existing.desde,
      hasta: req.body?.hasta ?? existing.hasta
    });
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.issues[0]?.message ?? "invalid payload" });
    }
    const result = await prisma.clasePeriodo.updateMany({
      where: { id: periodoId, claseId: id },
      data: {
        nombre: parsed.data.nombre,
        desde: parsed.data.desde,
        hasta: parsed.data.hasta,
        updatedAt: new Date().toISOString()
      }
    });
    if (result.count === 0) return res.status(404).json({ error: "periodo not found" });
    res.json({ ok: true });
  }
);

aulas.delete(
  "/api/aulas/:id/periodos/:periodoId",
  requireUser,
  requirePolicy("aulas/manage"),
  requireClassroomScope(STAFF_MANAGE_GATE),
  async (req, res) => {
    const id = req.params.id as string;
    const periodoId = req.params.periodoId as string;
    const classroom = res.locals.classroom as { status?: string };
    const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
    if (isClassroomReadOnlyStatus(currentStatus)) {
      return res.status(403).json({ error: "classroom is read-only" });
    }
    const result = await prisma.clasePeriodo.deleteMany({ where: { id: periodoId, claseId: id } });
    if (result.count === 0) return res.status(404).json({ error: "periodo not found" });
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
  // PLAN-A §2 — mismo fallback que el resto de las rutas de aulas: status
  // ausente (legacy) ⇒ ACTIVE, en vez de un 409 sin contexto.
  const currentStatus = normalizeClassroomStatus(classroom.status) ?? "ACTIVE";
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
 * GET /api/aulas/:id/mapa-modulos — mapa de flujo de los módulos
 * asignados al aula, para que el alumno vea de un vistazo qué desbloquea
 * qué. Nodos = módulos asignados al aula, con `status` (progreso del
 * requester) e `isLocked` (dependencias "required" sin completar,
 * mismo cálculo que ya usa POST /api/quiz-attempts). `links` sólo
 * incluye dependencias ENTRE módulos del mismo aula — una dependencia
 * hacia un módulo fuera del aula no se puede dibujar como arista acá.
 */
aulas.get(
  "/api/aulas/:id/mapa-modulos",
  requireUser,
  requireClassroomScope({ allowMemberRoles: "any", allowSchoolMatch: true }),
  async (req, res) => {
    try {
      const aulaId = req.params.id as string;
      const user = (req as {
        user?: { id?: string; _id?: { toString?: () => string } | string };
      }).user;
      const requesterId =
        (typeof user?.id === "string" && user.id) ||
        (typeof user?._id === "string" && (user._id as string)) ||
        (user?._id && typeof (user._id as { toString?: () => string }).toString === "function"
          ? (user._id as { toString: () => string }).toString()
          : null);
      if (!requesterId) return res.status(401).json({ error: "user not authenticated" });

      const claseModulos = await prisma.claseModulo.findMany({
        where: { claseId: aulaId },
        select: { moduloId: true },
      });
      const moduloIds = claseModulos.map((cm) => cm.moduloId);
      if (moduloIds.length === 0) return res.json({ modulos: [], links: [] });

      const modulos = await prisma.modulo.findMany({
        where: { id: { in: moduloIds } },
        select: { id: true, titulo: true, subject: true, category: true, dependencies: true },
      });
      const progresoItems = await prisma.progresoModulo.findMany({
        where: { usuarioId: requesterId, moduloId: { in: moduloIds } },
        select: { moduloId: true, status: true },
      });
      const statusByModulo = new Map(progresoItems.map((p) => [p.moduloId, p.status]));
      const completedIds = new Set(
        progresoItems.filter((p) => p.status === "completado").map((p) => p.moduloId)
      );
      // FIX-DEPENDENCIAS-UNLOCKS — el candado usa el universo COMPLETO de
      // dependencias (un "unlocks" fuera del aula puede bloquear un
      // módulo de acá); las aristas dibujadas, en cambio, sólo conectan
      // nodos que están en este mapa (no se puede dibujar una arista a
      // un módulo que no se ve).
      const allDependenciesById = new Map(
        (
          await prisma.modulo.findMany({
            where: { dependencies: { not: null } },
            select: { id: true, dependencies: true },
          })
        ).map((m) => [m.id, parseModuleDependencies(m.dependencies)])
      );

      const moduloIdSet = new Set(moduloIds);
      const links: { id: string; sourceId: string; targetId: string }[] = [];
      const lockByModulo = new Map<string, { locked: boolean; missingDependencyIds: string[] }>();
      modulos.forEach((m) => {
        const deps = parseModuleDependencies(m.dependencies);
        const { isLocked: locked, missingDependencyIds } = computeModuleLock(
          m.id,
          deps,
          allDependenciesById,
          completedIds
        );
        lockByModulo.set(m.id, { locked, missingDependencyIds });
        getRequiredDependencyIds(deps).forEach((depId) => {
          if (!moduloIdSet.has(depId)) return;
          links.push({ id: `${depId}->${m.id}`, sourceId: depId, targetId: m.id });
        });
        getUnlocksDependencyIds(deps).forEach((targetId) => {
          if (!moduloIdSet.has(targetId)) return;
          links.push({ id: `${m.id}->${targetId}`, sourceId: m.id, targetId });
        });
      });

      // Título resuelto para el tooltip del mapa (mismo criterio que
      // `missingDependencies` en GET /api/modulos/:id): una sola consulta
      // batcheada para todos los ids faltantes de todos los nodos.
      const allMissingIds = Array.from(
        new Set(Array.from(lockByModulo.values()).flatMap((l) => l.missingDependencyIds))
      );
      const missingTitleById = new Map(
        allMissingIds.length === 0
          ? []
          : (
              await prisma.modulo.findMany({
                where: { id: { in: allMissingIds } },
                select: { id: true, titulo: true },
              })
            ).map((m) => [m.id, m.titulo])
      );

      const nodos = await Promise.all(
        modulos.map(async (m) => {
          const lock = lockByModulo.get(m.id)!;
          // "Niveles por aula con mapa de flujo" — desbloqueo manual: gana
          // sobre el candado por dependencias.
          const isLocked = lock.locked && !(await hasActiveModuleOverride(m.id, requesterId));
          return {
            id: m.id,
            title: m.titulo,
            subject: m.subject ?? null,
            status: statusByModulo.get(m.id) ?? "no_iniciado",
            isLocked,
            missingDependencies: lock.missingDependencyIds.map((depId) => ({
              id: depId,
              title: missingTitleById.get(depId) ?? depId,
            })),
          };
        })
      );

      res.json({ modulos: nodos, links });
    } catch (err) {
      res.status(500).json({ error: err instanceof Error ? err.message : "error" });
    }
  }
);

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

// POST /api/aulas/:id/usar-como-alumno — FASE 4.
// El staff (docente/dueño del aula) se inscribe A SÍ MISMO como alumno
// en esta aula como `ClaseMiembro` STUDENT, para vivir el contenido del
// aula desde el lado del alumno. Idempotente.
//
// Reglas (sección "NO HACER" de la FASE 4):
//   - Solo el staff dueño/docente del aula puede hacerlo (no en aulas ajenas).
//   - La inscripción queda marcada `esPrueba`, así no ensucia rosters,
//     asistencia, estadísticas ni el conteo de alumnos facturables.
//     (degradación elegante).
aulas.post("/api/aulas/:id/usar-como-alumno", requireUser, async (req, res) => {
  const user = (req as {
    user?: { id?: string; _id?: { toString?: () => string } | string; role?: string | null; schoolId?: string | null };
  }).user;
  const requesterId =
    (typeof user?.id === "string" && user.id) ||
    (typeof user?._id === "string" && (user._id as string)) ||
    (user?._id && typeof (user._id as { toString?: () => string }).toString === "function"
      ? (user._id as { toString: () => string }).toString()
      : null);
  if (!requesterId) return res.status(401).json({ error: "no autenticado" });

  const claseId = req.params.id as string;

  // 1. El aula existe y no está borrada.
  const clase = await prisma.clase.findFirst({
    where: { id: claseId, isDeleted: { not: true } },
    include: { miembros: true },
  });
  if (!clase) return res.status(404).json({ error: "aula no encontrada" });

  // 2. El caller tiene que ser docente/dueño del aula. Unión de los dos
  //    criterios canónicos:
  //      - `isClassroomTeacher`: ADMIN global, dueño por
  //        createdBy/teacherId/teacherOfRecord, o miembro TEACHER.
  //      - `canManageClassroom`: además, DIRECTIVO de la misma escuela.
  //    Así un TEACHER que creó el aula, un TEACHER-miembro, un ADMIN o
  //    un DIRECTIVO de la escuela pueden hacerlo; nadie más.
  const miembros = (clase.miembros ?? []).map((m) => ({
    userId: m.usuarioId,
    roleInClass: m.rolEnClase,
  }));
  const classroomDoc = {
    createdBy: clase.createdBy ?? null,
    teacherId: clase.teacherId ?? null,
    teacherOfRecord: clase.teacherOfRecord ?? null,
    members: miembros,
  };
  const esDocenteOAula =
    isClassroomTeacher(classroomDoc, requesterId, user?.role ?? null) ||
    canManageClassroom({
      requesterId,
      requesterRole: user?.role ?? null,
      requesterSchoolId: user?.schoolId ?? null,
      classroomSchoolId: clase.escuelaId ?? null,
      classroomMembers: miembros,
    });
  if (!esDocenteOAula) {
    return res.status(403).json({ error: "no sos docente de esta aula" });
  }

  // PLAN-multirol Fase 3 — antes acá se provisionaba una CUENTA ESPEJO y se
  // la inscribía. Ahora se inscribe a la MISMA persona como STUDENT con
  // `esPrueba: true`: la PK de ClaseMiembro incluye el rol, así que un
  // docente puede ser TEACHER y STUDENT del mismo aula sin duplicar cuenta.
  // La membresía STUDENT es lo que después le permite elegir el rol
  // "alumno" en el selector (POST /api/auth/escuela-activa con `rol`).
  if (clase.escuelaId) {
    await sincronizarMembresia({
      usuarioId: requesterId,
      escuelaId: clase.escuelaId,
      rolUsuario: "USER"
    });
  }
  const existing = await prisma.claseMiembro.findFirst({
    where: { claseId, usuarioId: requesterId, rolEnClase: "STUDENT" },
  });
  if (existing) {
    return res.status(200).json({ ok: true, aulaId: claseId, alreadyEnrolled: true });
  }
  await prisma.claseMiembro.create({
    data: { claseId, usuarioId: requesterId, rolEnClase: "STUDENT", esPrueba: true },
  });
  return res.status(201).json({ ok: true, aulaId: claseId });
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
