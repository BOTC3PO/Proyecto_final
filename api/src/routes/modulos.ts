import express, { Router } from "express";
import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { ENV } from "../lib/env";
import { assertClassroomWritable } from "../lib/classroom";
import { requireUser } from "../lib/user-auth";
import { isStaffRole } from "../lib/authorization";
import { recordAuditLog } from "../lib/audit-log";
import { resolveUserNames } from "../lib/resolve-user-names";
import { sanitizeQuestionsForStudent } from "../lib/sanitize-questions";
import { mergeMateriaIntoSettings } from "../lib/quiz-materia";
import { computeModuleLock, parseModuleDependencies } from "../lib/module-dependencies";
import { hasActiveModuleOverride } from "../lib/module-unlock-overrides";
import { ModuleSchema, CuestionarioPreguntasInputSchema, QuizMetaPatchSchema } from "../schema/modulo";
// Etapa 2 (Tiza — preguntas nativas) — GET/PUT del CuestionarioPreguntas de
// un quiz por su id (ver rutas al final del archivo).
import { parseCuestionarioPreguntas, validarCuestionarioPreguntas } from "../lib/quiz-preguntas";

export const modulos = Router();

const ModuleUpdateSchema = ModuleSchema.partial().omit({ id: true });

type AnyDoc = Record<string, any>;

function withDefaultStatus<T extends AnyDoc>(module: T): T & { status: {} } {
  const status = module?.status ?? {};
  return {
    ...module,
    status
  };
}

// PLAN-CORRECCIONES C1 — "publica pero no visible" (PLAN-A ítem 43).
// `GET /api/modulos/:id` mapea las columnas de Prisma (`titulo`,
// `descripcion`, `ownerUserId`) a los nombres que el front espera
// (`title`, `description`, `createdBy` — ver `Module` en
// `apps/web/src/domain/module/module.types.ts`). El listado
// (`GET /api/modulos`) devolvía las filas crudas sin ese mapeo: el
// título quedaba en blanco en cada card de `ModulosList.tsx`, la
// pestaña "Mis módulos" filtraba por `module.createdBy` (siempre
// `undefined` en la fila cruda) y no mostraba NADA, y la búsqueda por
// texto tampoco matcheaba nunca. No era un problema de caché/re-fetch
// (la hipótesis original) sino de contrato entre este endpoint y el
// front. `withDefaultStatus` se sigue aplicando después para no tocar
// esa convención.
function toModuleListItem(item: AnyDoc): AnyDoc {
  return {
    id: item.id,
    slug: item.slug ?? undefined,
    title: item.titulo,
    description: item.descripcion ?? "",
    subject: item.subject ?? null,
    level: item.level ?? null,
    category: item.category ?? undefined,
    durationMinutes: item.durationMinutes ?? undefined,
    theoryItems: item.theoryItems ? safeJsonParse(item.theoryItems, [] as unknown[]) : [],
    visibility: item.visibility,
    descatalogado: item.descatalogado === true,
    schoolId: item.schoolId ?? undefined,
    createdBy: item.ownerUserId ?? "",
    clonedFrom: item.clonedFromId
      ? {
          id: item.clonedFromId,
          title: item.clonedFromTitle ?? null,
          ownerUserId: item.clonedFromOwnerUserId ?? null
        }
      : undefined,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    teoriaId: item.teoriaId ?? undefined
  };
}

// PLAN-X §7 — where-clause de visibilidad para los listados generales
// (`GET /api/modulos` sin `aulaId`, `GET /api/modulos/buscar`): un módulo
// descatalogado se excluye salvo que el solicitante sea su dueño o tenga
// una invitación (`ModuloInvitacion`). Sin `requesterId` (sin sesión en
// este router aislado, o anónimo) degrada a "sólo lo no descatalogado".
async function buildDescatalogadoVisibilityFilter(
  requesterId: string | null,
): Promise<Record<string, unknown>> {
  // `NOT: { descatalogado: true }` en vez de `{ descatalogado: false }`:
  // filas seedeadas por tests preexistentes (decenas de archivos, de
  // antes de que este campo existiera) nunca setean `descatalogado`
  // explícitamente → queda `undefined` en el stub in-memory (que no
  // aplica `@default(false)` de Prisma). `NOT: true` matchea tanto
  // `false` como `undefined`/`null`; `descatalogado: false` NO matchea
  // `undefined` y esas filas desaparecían de todos los listados.
  if (!requesterId) return { NOT: { descatalogado: true } };
  const invitaciones = await prisma.moduloInvitacion.findMany({
    where: { usuarioId: requesterId },
    select: { moduloId: true },
  });
  const invitedIds = invitaciones.map((i) => i.moduloId);
  return {
    OR: [
      { NOT: { descatalogado: true } },
      { ownerUserId: requesterId },
      ...(invitedIds.length > 0 ? [{ id: { in: invitedIds } }] : []),
    ],
  };
}

/**
 * WO-3 — ¿Este cuestionario es visible para el solicitante?
 *
 * El dueño/staff (`privileged`) ve TODOS los cuestionarios (los necesita para
 * editar). Un alumno (no dueño ni staff) sólo ve:
 *  - `publico`: siempre.
 *  - `escuela`: sólo si su escuela coincide con la del módulo.
 *  - cualquier otra/ausente: se trata como `publico` (retrocompat: los
 *    cuestionarios viejos sin `visibility` seguían siendo visibles).
 *
 * Arregla el bug "el listado muestra todos los cuestionarios que el profe
 * puede hacer, no sólo el que corresponde".
 */
export function quizVisiblePara(
  visibility: string | undefined | null,
  privileged: boolean,
  requesterSchoolId: string | null,
  moduleSchoolId: string | null,
): boolean {
  if (privileged) return true;
  if (visibility === "escuela") {
    return !!requesterSchoolId && requesterSchoolId === moduleSchoolId;
  }
  // `publico` y cualquier valor desconocido/ausente: visible.
  return true;
}

/**
 * WO-13 — tipos de visibilidad que cuentan como "compartido y legible
 * para cualquiera fuera del owner". Coherente con `quizVisiblePara`:
 * `privado` NO es compartido (sólo lo ve el owner).
 */
export type ModuloSharedVisibility = "escuela" | "publico";

/**
 * WO-13 — ¿El usuario puede EDITAR (modificar contenido) este módulo
 * EN EL ORIGINAL (es decir, sin disparar copy-on-write)?
 *
 * Réplica del patrón `canEditLibro` de `api/src/routes/libros.ts:83-97`,
 * aplicado a módulos. Reglas:
 *  - ADMIN: siempre.
 *  - Owner: siempre.
 *  - `visibility === 'escuela'` y mismo `schoolId` y `isStaffRole(user)`: sí
 *    (el staff de la escuela colabora sobre los módulos de la escuela).
 *  - Resto: NO. En particular un alumno (USER) NUNCA edita módulos, ni
 *    siquiera los públicos o de su escuela.
 *
 * Importante: esta función NO decide si el usuario puede EDITAR — esa
 * decisión final la toma el caller. Si retorna `false`, el caller debe
 * considerar el copy-on-write (si el material es compartido y el
 * usuario no es ADMIN). Ver `requiresCopyOnWrite` y
 * `applyModuleUpdateWithCopyOnWrite` más abajo.
 */
export function canEditModuloDirect(
  modulo: { ownerUserId: string | null; visibility: string; schoolId: string | null },
  user: { _id?: string; role?: string | null; schoolId?: string | null },
): boolean {
  if (user?.role === "ADMIN") return true;
  const userId = user?._id ?? null;
  if (modulo.ownerUserId && userId && modulo.ownerUserId === userId) return true;
  if (
    modulo.visibility === "escuela" &&
    modulo.schoolId &&
    user?.schoolId &&
    modulo.schoolId === user.schoolId &&
    isStaffRole(user.role)
  ) {
    return true;
  }
  return false;
}

/**
 * WO-13 — ¿Esta edición dispara copy-on-write?
 *
 * Retorna `true` si la edición NO está permitida en el original
 * (mismas reglas que `canEditModuloDirect`) y el material es un
 * módulo visible para el usuario. En ese caso el caller debe clonar
 * el módulo y aplicar el update sobre la copia. El original queda
 * intacto.
 *
 * Coherencia con SEC-LIBRO y `canEditLibro`: cuando el material es
 * `visibility='escuela'` y el usuario es staff de la MISMA escuela,
 * `canEditModuloDirect` ya retorna `true` (colaboración entre
 * staff). Acá retornamos `false` en ese caso — el staff de la
 * escuela edita el original directamente, no necesita copia.
 *
 * Resumen de los casos:
 *  - ADMIN: nunca (override).
 *  - Owner: nunca (edición normal).
 *  - Staff de la misma escuela en módulo `escuela`: nunca
 *    (colaboración, mismo modelo que libros).
 *  - Resto (cross-school, alumno, módulo `publico` ajeno, etc.):
 *    SÍ — copy-on-write.
 */
export function requiresCopyOnWrite(
  modulo: {
    ownerUserId: string | null;
    visibility: string;
    schoolId: string | null;
  },
  user: { _id?: string; role?: string | null; schoolId?: string | null },
): boolean {
  if (canEditModuloDirect(modulo, user)) return false;
  // Si no es editable en el original, ¿es visible al menos? Si
  // no es visible, el caller ya devolvió 403/404 antes — pero
  // defendemos acá para no clonar algo que el usuario no debería
  // poder ver nunca.
  if (modulo.visibility === "privado") return false;
  return true;
}

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const parseVisibilityList = (value: unknown) => {
  if (typeof value !== "string") return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
};

modulos.get("/api/modulos/buscar", async (req, res) => {
  const mine = req.query.mine === "true";
  if (mine) {
    await new Promise<void>((resolve) => {
      requireUser(req, res, () => resolve());
    });
    if (res.headersSent) return;
  }
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const query = typeof req.query.query === "string" ? req.query.query.trim() : "";
  const createdBy = mine
    ? req.user?._id
      ? req.user._id.toString()
      : ""
    : typeof req.query.createdBy === "string"
      ? req.query.createdBy.trim()
      : "";
  const schoolId = typeof req.query.schoolId === "string" ? req.query.schoolId.trim() : "";
  const visibilityList = parseVisibilityList(req.query.visibility);

  const accessFilters: Record<string, unknown>[] = [];
  if (createdBy) {
    accessFilters.push({ ownerUserId: createdBy });
  }
  if (visibilityList.includes("publico")) {
    accessFilters.push({ visibility: "publico" });
  }
  if (visibilityList.includes("escuela")) {
    accessFilters.push(
      schoolId ? { visibility: "escuela", schoolId } : { visibility: "escuela" },
    );
  }
  if (visibilityList.includes("privado") && createdBy) {
    accessFilters.push({ visibility: "privado", ownerUserId: createdBy });
  }

  const andFilters: Record<string, unknown>[] = [];
  if (accessFilters.length > 0) {
    andFilters.push({ OR: accessFilters });
  }
  if (query) {
    andFilters.push({ OR: [{ titulo: { contains: query, mode: "insensitive" } }] });
  }
  // PLAN-X §7 — `requesterId` (quién busca) es independiente de `createdBy`
  // (de quién se buscan módulos): un profesor puede buscar los públicos de
  // OTRO colega. El filtro de descatalogado siempre mira a quién pide.
  const requesterId: string | null =
    mine && createdBy ? createdBy : resolveRequesterId(req.user as QuizRequesterRaw);
  andFilters.push(await buildDescatalogadoVisibilityFilter(requesterId));

  const safeOffset = Number.isNaN(offset) || offset < 0 ? 0 : offset;
  const where =
    andFilters.length === 0 ? {} : andFilters.length === 1 ? andFilters[0] : { AND: andFilters };

  const items = (
    await prisma.modulo.findMany({
      where: where as any,
      skip: safeOffset,
      take: limit,
      orderBy: { updatedAt: "desc" },
    })
  ).map(withDefaultStatus);

  res.json({ items, limit, offset });
});

modulos.get("/api/modulos", async (req, res) => {
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const aulaId = typeof req.query.aulaId === "string" ? req.query.aulaId : undefined;
  // QA-FIX-07 — `?mine=true` exige autenticación y filtra por
  // `ownerUserId`. Sin esto, `MenuProfesor` (que llama
  // `?mine=true` en apps/web/src/pages/MenuProfesor.tsx:150)
  // mostraba en el panel "Módulos activos" módulos de
  // CUALQUIER profesor (handler ignoraba el param). Patrón
  // espejo del filtro equivalente en `/api/modulos/buscar`
  // (línea 54-70 de este mismo archivo).
  const mine = req.query.mine === "true";
  const safeOffset = Number.isNaN(offset) || offset < 0 ? 0 : offset;

  if (mine) {
    await new Promise<void>((resolve) => {
      requireUser(req, res, () => resolve());
    });
    if (res.headersSent) return;
  }

  // `req.user._id` viene de `toObjectId(...)` en
  // src/lib/user-auth.ts:67 → siempre string. `.toString()`
  // funciona sobre string también (idempotente).
  const requesterIdForMine =
    mine && req.user
      ? (typeof req.user._id === "string"
          ? req.user._id
          : (req.user._id as { toString?: () => string })?.toString?.() ?? null)
      : null;
  // PLAN-X §7 — a diferencia de `requesterIdForMine` (sólo se resuelve si
  // `mine=true`), el filtro de descatalogado necesita saber quién pide
  // SIEMPRE (para que el dueño/invitado vea lo suyo incluso sin `mine`).
  // No fuerza auth acá: en prod `requireUser` ya corrió globalmente
  // (index.ts) y `req.user` está poblado; sin sesión, degrada a "sólo lo
  // no descatalogado", igual que un visitante anónimo.
  const requesterId = requesterIdForMine ?? resolveRequesterId(req.user as QuizRequesterRaw);
  const descatalogadoFilter = await buildDescatalogadoVisibilityFilter(requesterId);

  let items;
  if (aulaId) {
    // Nota: la asignación a una aula (`ClaseModulo`) YA es un camino de
    // visibilidad explícito por sí mismo (el profesor "lo agrega a un
    // aula para que sea visible") — este branch no filtra por
    // descatalogado, un módulo asignado se ve igual esté o no.
    const claseModulos = await prisma.claseModulo.findMany({
      where: { claseId: aulaId },
      select: { moduloId: true },
    });
    const moduloIds = claseModulos.map((r) => r.moduloId);

    if (moduloIds.length === 0) {
      return res.json({ items: [], limit, offset });
    }

    items = (
      await prisma.modulo.findMany({
        where: {
          id: { in: moduloIds },
          ...(mine && requesterIdForMine ? { ownerUserId: requesterIdForMine } : {}),
        },
        skip: safeOffset,
        take: limit,
        orderBy: { updatedAt: "desc" },
      })
    ).map(toModuleListItem).map(withDefaultStatus);
  } else {
    items = (
      await prisma.modulo.findMany({
        where: mine && requesterIdForMine
          ? { ownerUserId: requesterIdForMine }
          : descatalogadoFilter,
        skip: safeOffset,
        take: limit,
        orderBy: { updatedAt: "desc" },
      })
    ).map(toModuleListItem).map(withDefaultStatus);
  }

  return res.json({ items, limit, offset });
});

modulos.get("/api/modulos/:id", requireUser, async (req, res) => {
  try {
    const id = req.params.id as string;
    const item = await prisma.modulo.findFirst({ where: { id } });

    if (!item) return res.status(404).json({ error: "not found" });

    // V2-04 — si el solicitante NO es staff ni dueño del módulo, las
    // preguntas de cada quiz se sanitizan: el `answerKey` se reemplaza por
    // un canario estable y se elimina la `explanation`. El docente/owner
    // sigue viendo el JSON intacto para poder editarlo.
    const requesterRaw = req.user as
      | {
          _id?: { toString?: () => string } | string;
          id?: string;
          role?: string | null;
          schoolId?: string | null;
          escuelaId?: string | null;
        }
      | undefined;
    const requesterSchoolId =
      (typeof requesterRaw?.schoolId === "string" && requesterRaw.schoolId) ||
      (typeof requesterRaw?.escuelaId === "string" && requesterRaw.escuelaId) ||
      null;
    const requesterId =
      (typeof requesterRaw?.id === "string" && requesterRaw.id) ||
      (typeof requesterRaw?._id === "string" && (requesterRaw._id as string)) ||
      (requesterRaw?._id && typeof (requesterRaw._id as { toString?: () => string }).toString === "function"
        ? (requesterRaw._id as { toString: () => string }).toString()
        : null);
    const requesterRole = requesterRaw?.role ?? null;
    const canSeeAnswers =
      !!requesterId &&
      (item.ownerUserId === requesterId || isStaffRole(requesterRole));

    // Traemos quizzes y quizVersion por separado (mismo patrón que
    // /duplicar): el InMemoryPrisma usado en tests no soporta `include`
    // anidado.
    const quizzes = await prisma.quiz.findMany({
      where: { moduleId: id, isActive: true },
    });
    const versionByQuiz: Record<string, unknown> = {};
    for (const q of quizzes) {
      const versions = await prisma.quizVersion.findMany({ where: { quizId: q.id } });
      versions.sort((a: any, b: any) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0));
      versionByQuiz[q.id] = versions[0];
    }

    // FIX-MODULO-AUTOR — el GET nunca resolvía `ownerUserId` a un
    // nombre: ModuloDetail.tsx (`module.authorName ?? module.createdBy`)
    // siempre caía al ID crudo ("usr-teach-001") en la card "Autor".
    // Mismo patrón que ya se usa en aulas.ts/publicaciones.ts.
    const authorNameMap = await resolveUserNames([item.ownerUserId]);

    // FIX-DEPENDENCIAS — el candado por dependencias "required" (ver
    // module-dependencies.ts) sólo se calculaba en progreso.ts, sin que
    // ModuloDetail.tsx (la página que abre el alumno) tuviera forma de
    // mostrarlo. Se calcula acá, en el mismo GET que ya trae el módulo,
    // para no pedir un round-trip aparte. `missingDependencies` viene
    // con título resuelto para poder mostrar "Completá primero: X".
    let isLocked = false;
    let missingDependencies: { id: string; title: string }[] = [];
    if (requesterId) {
      const completedRows = await prisma.progresoModulo.findMany({
        where: { usuarioId: requesterId, status: "completado" },
        select: { moduloId: true },
      });
      const completedModuleIds = new Set(completedRows.map((r) => r.moduloId));
      // FIX-DEPENDENCIAS-UNLOCKS — un "unlocks" declarado desde CUALQUIER
      // otro módulo puede bloquear a éste.
      const allDependenciesById = new Map(
        (
          await prisma.modulo.findMany({
            where: { dependencies: { not: null } },
            select: { id: true, dependencies: true },
          })
        ).map((m) => [m.id, parseModuleDependencies(m.dependencies)])
      );
      const lock = computeModuleLock(
        item.id,
        parseModuleDependencies(item.dependencies),
        allDependenciesById,
        completedModuleIds
      );
      isLocked = lock.isLocked && !(await hasActiveModuleOverride(item.id, requesterId));
      if (lock.missingDependencyIds.length > 0) {
        const missingModules = await prisma.modulo.findMany({
          where: { id: { in: lock.missingDependencyIds } },
          select: { id: true, titulo: true },
        });
        missingDependencies = missingModules.map((m) => ({ id: m.id, title: m.titulo }));
      }
    }

    const moduleDto: Record<string, unknown> = {
      id: item.id,
      slug: item.slug ?? undefined,
      title: item.titulo,
      description: item.descripcion ?? "",
      // FIX-MODULO-CRASH — devolver `subject` (materia) en el GET.
      // La columna se agregó con la migración
      // 20260617010000_modulo_subject. La persistencia (POST/PUT
      // que escriben este campo) la agrega FIX-GUARDADO; por ahora
      // los módulos viejos (y los nuevos hasta que se persista)
      // vienen con `subject: null`. El editor trata `null` como
      // string vacío (ver `useModuloPersistence.ts:101`).
      subject: item.subject ?? null,
      // FIX-MODULO-CRASH-LEVEL — devolver `level` (nivel educativo) en
      // el GET. Mismo patrón que `subject`: la columna se agregó con
      // la migración `20260617040000_modulo_level`. El editor lo lee
      // en `useModuloEditor.ts:492` (con `?? ""` defensivo) y lo
      // muestra en el input `modulo-field-level` (ModuloEditor.tsx:672).
      // Módulos viejos o sin nivel vienen con `level: null`.
      level: item.level ?? null,
      // FIX-GUARDADO — devolver `theoryItems` (teoría como contenido
      // embebido) en el GET. La columna se agregó con la migración
      // 20260617020000_modulo_theory_items. Se persiste como JSON
      // serializado; acá se deserializa con `safeJsonParse`. Módulos
      // viejos (pre-migración o sin teoría) vienen con `theoryItems: []`.
      theoryItems: item.theoryItems
        ? safeJsonParse(item.theoryItems, [] as unknown[])
        : [],
      visibility: item.visibility,
      // PLAN-X §7 — flag para que el editor muestre el toggle actual.
      descatalogado: item.descatalogado === true,
      schoolId: item.schoolId ?? undefined,
      // WO-3 — escala de notas (módulo). Se devuelve parseada; ausente = el
      // front/grade-path aplican el default histórico.
      scoringConfig: item.scoringConfig
        ? safeJsonParse(item.scoringConfig, undefined as unknown)
        : undefined,
      dependencies: item.dependencies
        ? safeJsonParse(item.dependencies, [] as unknown[])
        : [],
      isLocked,
      missingDependencies,
      createdBy: item.ownerUserId ?? "",
      authorName: item.ownerUserId ? (authorNameMap.get(item.ownerUserId) ?? undefined) : undefined,
      // WO-13 — provenance. La UI muestra "Copiado de: <título>
      // (de <owner>)" cuando estas columnas están pobladas. Si el
      // módulo no es una copia, los 3 campos quedan ausentes.
      clonedFrom: item.clonedFromId
        ? {
            id: item.clonedFromId,
            title: item.clonedFromTitle ?? null,
            ownerUserId: item.clonedFromOwnerUserId ?? null,
          }
        : undefined,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      teoriaId: item.teoriaId ?? undefined,
      quizzes: quizzes.map((q) => {
        const v = versionByQuiz[q.id] as
          | {
              id: string;
              questions?: string | unknown[];
              settings?: string | Record<string, unknown>;
              generatorId?: string | null;
              generatorVersion?: string | null;
              params?: string | null;
              count?: number | null;
              seedPolicy?: number | null;
              fixedSeed?: string | null;
            }
          | undefined;
        const settings = v?.settings
          ? (typeof v.settings === "string" ? safeJsonParse(v.settings, {} as Record<string, unknown>) : v.settings)
          : {};
        const rawQuestions: Array<Record<string, unknown> & { id: string }> = v?.questions
          ? (
              typeof v.questions === "string"
                ? safeJsonParse(v.questions, [] as Array<Record<string, unknown> & { id: string }>)
                : (v.questions as Array<Record<string, unknown> & { id: string }>)
            )
          : [];
        const questions = canSeeAnswers
          ? (rawQuestions as unknown[])
          : (sanitizeQuestionsForStudent(rawQuestions, v?.id ?? q.id) as unknown[]);
        return {
          id: q.id,
          title: q.title ?? "",
          type: (settings as any).type ?? "practica",
          mode: (settings as any).mode,
          visibility: (settings as any).visibility ?? "publico",
          questions,
          generatorId: v?.generatorId ?? undefined,
          generatorVersion: v?.generatorVersion
            ? Number(v.generatorVersion)
            : undefined,
          params: v?.params ? safeJsonParse(v.params, undefined as unknown) : undefined,
          count: v?.count ?? undefined,
          seedPolicy: v?.seedPolicy ?? undefined,
          fixedSeed: v?.fixedSeed ?? undefined,
          composition: (settings as any).composition ?? undefined,
          // F4-03 — exponer el toggle "ocultar puntos al alumno". Default false.
          ocultarPuntos: (settings as any).ocultarPuntos === true,
          // F3-04 + F4-04 — config del modo evaluación. Se exponen
          // "crudos" (tal cual están en `settings`); la UI los compone
          // con `parseEvaluacionConfig` para resolver los defaults.
          // Pasamos `undefined` si están ausentes, para que el front
          // sepa aplicar el default del tipo.
          maxIntentos: (settings as any).maxIntentos ?? undefined,
          politicaNota: (settings as any).politicaNota,
          // WO-3 — política de sorteo de variantes + cantidad tomada (K de N).
          politicaSorteo: (settings as any).politicaSorteo,
          displayCount: (settings as any).displayCount ?? undefined,
          // WO-2 / F4-03 — cuestionario por posiciones (crudo, tal cual se guardó).
          posiciones: (settings as any).posiciones ?? undefined,
          timerSegundos: (settings as any).timerSegundos ?? null,
          fullscreenOnStart: (settings as any).fullscreenOnStart === true,
          // WO-9 — modo de presentación + tamaño de página. `undefined` si
          // están ausentes para que el front aplique el default del tipo
          // vía `parseEvaluacionConfig`.
          modoPresentacion: (settings as any).modoPresentacion ?? undefined,
          preguntasPorPagina: (settings as any).preguntasPorPagina ?? undefined,
          // WO-14 — ruteo por dificultad. `undefined` si están ausentes para
          // que el front aplique el default del tipo vía `parseEvaluacionConfig`.
          politicaDificultad: (settings as any).politicaDificultad ?? undefined,
          dificultadInicial: (settings as any).dificultadInicial ?? undefined,
          dificultadVentana: (settings as any).dificultadVentana ?? undefined,
          // PLAN-D §1 — política de cierre por expiración.
          politicaExpiracion: (settings as any).politicaExpiracion ?? undefined,
          // WO-tiza-config (Fase 5) — flag de sólo-lectura: el quiz usa el
          // modelo "preguntas nativas" de Tiza (`settings.preguntas`, el que
          // lee quiz-attempts). La UI lo usa para mostrar la entrada correcta
          // ("Preguntas nativas en Tiza →") en vez del badge legacy armado
          // desde `generatorId`. No viaja de vuelta: el schema de PUT/PATCH
          // lo ignora (zod strippea claves desconocidas).
          tienePreguntasNativas: (settings as any).preguntas !== undefined,
        };
      })
      // WO-3 (bug de visibilidad) — un alumno (no dueño ni staff) NO debe ver
      // todos los cuestionarios del módulo, sólo los que le corresponden:
      //  - `publico`: visible para todos.
      //  - `escuela`: visible sólo si su escuela coincide con la del módulo.
      // El dueño/staff ve todo (necesita editarlos). Ver `quizVisiblePara`.
      .filter((dto: { visibility?: string }) =>
        quizVisiblePara(
          dto.visibility,
          canSeeAnswers,
          requesterSchoolId,
          item.schoolId ?? null,
        ),
      ),
    };

    res.json(withDefaultStatus(moduleDto));
  } catch (e: any) {
    console.error("[modulos GET :id]", e);
    res.status(500).json({ error: e.message ?? "internal" });
  }
});

/**
 * WO-13 — clona un módulo y todos sus quizzes/quizVersions en una
 * transacción. Usado por:
 *  - `POST /api/modulos/:id/duplicar` (botón "Duplicar", Tarea 19).
 *  - El copy-on-write transparente del `PUT` / `PATCH` cuando un
 *    usuario no-owner edita un módulo compartido.
 *
 * La copia:
 *  - id nuevo (UUID)
 *  - `titulo` opcionalmente con sufijo `" (copia)"` (default ON;
 *    el copy-on-write lo desactiva para no ensuciar el título cuando
 *    el usuario ya está editando).
 *  - visibilidad, schoolId, descripcion, teoriaId, tuesdayDocId,
 *    libroId, defaultQuestionCount: copiados del original.
 *  - `dependencies: null` (la consigna pide "sin dependencias" — esto
 *    aplica también al copy-on-write; si la copia las necesita, el
 *    usuario las agrega en su próxima edición).
 *  - `isDeleted: false`.
 *  - `ownerUserId = newOwnerId` (el solicitante).
 *  - Provenance: `clonedFromId = sourceId`, `clonedFromTitle = sourceTitulo`,
 *    `clonedFromOwnerUserId = sourceOwner`.
 *  - Clona quizzes activos y la última QuizVersion de cada uno, con
 *    ids regenerados pero conservando la config (type, mode, visibility,
 *    questions, generatorId, params, count, seedPolicy, fixedSeed,
 *    settings, composition).
 *  - NO se asigna a ninguna aula (no se crea fila en clase_modulos).
 *
 * Retorna `{ newId, createdAt }` con el id del módulo clonado.
 */
async function cloneModuloDeep(
  sourceId: string,
  newOwnerId: string,
  opts: { appendCopiaSuffix?: boolean } = { appendCopiaSuffix: true },
): Promise<{ newId: string; createdAt: string }> {
  const source = await prisma.modulo.findFirst({
    where: { id: sourceId, isDeleted: { not: true } },
  });
  if (!source) {
    throw Object.assign(new Error("modulo no encontrado"), { status: 404 });
  }
  // Traemos quizzes y quizVersion por separado. En el InMemoryPrisma
  // usado por tests no tenemos `include` anidado, asi que este patron
  // funciona tanto en runtime real como en el stub.
  const sourceQuizzes = await prisma.quiz.findMany({
    where: { moduleId: sourceId, isActive: true },
  });
  const sourceVersionsByQuiz: Record<string, Array<{
    id: string;
    versionNumber: number;
    questions: string;
    generatorId: string | null;
    generatorVersion: string | null;
    params: string | null;
    count: number | null;
    seedPolicy: number;
    fixedSeed: string | null;
    settings: string;
    createdAt: string;
    createdBy: string;
  }>> = {};
  for (const q of sourceQuizzes) {
    // findMany ordenado descendente, take 1
    const versions = await prisma.quizVersion.findMany({
      where: { quizId: q.id },
    });
    versions.sort((a: any, b: any) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0));
    sourceVersionsByQuiz[q.id] = versions.slice(0, 1) as any;
  }

  const newId = generateId();
  const now = new Date().toISOString();
  const appendSuffix = opts.appendCopiaSuffix !== false;

  await prisma.$transaction(async (tx) => {
    // Clonar el modulo sin dependencias y sin slug (el slug es
    // @unique y se conserva el original solo si no se setea nuevo).
    await tx.modulo.create({
      data: {
        id: newId,
        slug: null,
        titulo: appendSuffix
          ? `${source.titulo} (copia)`
          : source.titulo,
        descripcion: source.descripcion ?? null,
        visibility: source.visibility,
        schoolId: source.schoolId,
        ownerUserId: newOwnerId,
        teoriaId: source.teoriaId,
        tuesdayDocId: source.tuesdayDocId,
        libroId: source.libroId,
        defaultQuestionCount: source.defaultQuestionCount,
        dependencies: null, // explicitamente vacias (consigna).
        isDeleted: false,
        // WO-13 — provenance: registrar origen de la copia. Se persiste
        // el título y el owner del momento de clonar (pueden cambiar
        // después — son snapshot, no FK).
        clonedFromId: source.id,
        clonedFromTitle: source.titulo,
        clonedFromOwnerUserId: source.ownerUserId ?? null,
        createdAt: now,
        updatedAt: now,
      },
    });

    // Clonar quizzes activos y su ultima version.
    for (const quiz of sourceQuizzes) {
      const newQuizId = generateId();
      await tx.quiz.create({
        data: {
          id: newQuizId,
          moduleId: newId,
          title: quiz.title,
          createdAt: now,
          updatedAt: now,
        },
      });
      const lastVersion = sourceVersionsByQuiz[quiz.id]?.[0];
      if (!lastVersion) continue;
      const newVersionId = generateId();
      // WO-BUG — la copia hereda la `materia` del source modulo
      // (`subject || category`). Antes copiábamos `settings` tal cual,
      // así que las copias de cuestionarios viejos sin materia
      // quedaban con la materia vacía y desaparecían del banco.
      const clonedSettings = mergeMateriaIntoSettings(
        lastVersion.settings,
        { subject: source.subject ?? null, category: source.category ?? null },
      );
      await tx.quizVersion.create({
        data: {
          id: newVersionId,
          quizId: newQuizId,
          versionNumber: 1,
          questions: lastVersion.questions,
          generatorId: lastVersion.generatorId,
          generatorVersion: lastVersion.generatorVersion,
          params: lastVersion.params,
          count: lastVersion.count,
          seedPolicy: lastVersion.seedPolicy,
          fixedSeed: lastVersion.fixedSeed,
          settings: JSON.stringify(clonedSettings),
          createdAt: now,
          createdBy: newOwnerId,
        },
      });
      await tx.quiz.update({
        where: { id: newQuizId },
        data: { currentVersionId: newVersionId },
      });
    }
  });

  return { newId, createdAt: now };
}

/**
 * POST /api/modulos/:id/duplicar — Tarea 19 + WO-13.
 *
 * Clona un módulo existente y devuelve el nuevo id. Solo el dueño
 * del módulo o staff pueden duplicarlo (mismas reglas que
 * `canEditModuloDirect`). Ver `cloneModuloDeep` para los detalles
 * de qué se copia. El response ahora incluye `clonedFrom` para
 * que el front pueda mostrar "Copiado de: …" sin un GET extra.
 */
modulos.post(
  "/api/modulos/:id/duplicar",
  requireUser,
  async (req, res) => {
    try {
      const requesterRaw = (req as { user?: { _id?: { toString?: () => string } | string; id?: string; role?: string | null } }).user;
      const requesterId =
        (typeof requesterRaw?.id === "string" && requesterRaw.id) ||
        (typeof requesterRaw?._id === "string" && (requesterRaw._id as string)) ||
        (requesterRaw?._id && typeof (requesterRaw._id as { toString?: () => string }).toString === "function"
          ? (requesterRaw._id as { toString: () => string }).toString()
          : null);
      if (!requesterId) {
        return res.status(401).json({ error: "user not authenticated" });
      }
      const requesterRole = requesterRaw?.role ?? null;

      const sourceId = req.params.id as string;
      const source = await prisma.modulo.findFirst({
        where: { id: sourceId, isDeleted: { not: true } },
      });
      if (!source) {
        return res.status(404).json({ error: "modulo no encontrado" });
      }

      // Solo el dueño del modulo o staff (Tarea 19).
      if (source.ownerUserId !== requesterId && !isStaffRole(requesterRole)) {
        return res.status(403).json({ error: "forbidden" });
      }

      const { newId, createdAt } = await cloneModuloDeep(sourceId, requesterId, {
        appendCopiaSuffix: true,
      });

      // Auditoria fuera de la transaccion (no bloquea si falla).
      await recordAuditLog({
        actorId: requesterId,
        action: "modulo.duplicate",
        targetType: "modulo",
        targetId: newId,
        metadata: { sourceId, sourceOwner: source.ownerUserId ?? null, trigger: "explicit" },
      });

      res.status(201).json({
        id: newId,
        moduleId: newId,
        sourceId,
        // WO-13 — provenance en el response para que el front
        // muestre "Copiado de: <título>" sin un GET extra.
        clonedFrom: {
          id: source.id,
          title: source.titulo,
          ownerUserId: source.ownerUserId ?? null,
        },
        createdAt,
      });
    } catch (e: any) {
      console.error("[POST /api/modulos/:id/duplicar]", e);
      res.status(500).json({ error: e?.message ?? "internal server error" });
    }
  }
);

modulos.post("/api/modulos", requireUser, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  let parsed: ReturnType<typeof ModuleSchema.parse>;
  try {
    const moduleId =
      typeof req.body?.id === "string" && req.body.id.trim()
        ? req.body.id
        : req.body?._id
          ? req.body._id.toString()
          : generateId();
    const payload = {
      ...req.body,
      id: moduleId,
      createdAt: req.body?.createdAt ?? new Date().toISOString(),
      updatedAt: req.body?.updatedAt ?? new Date().toISOString()
    };
    parsed = ModuleSchema.parse(payload);
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }

  try {
    if (parsed.aulaId) {
      const classroom = await prisma.clase.findFirst({
        where: { id: parsed.aulaId },
        select: { status: true },
      });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    const moduloData = {
      id: parsed.id,
      titulo: parsed.title,
      descripcion: parsed.description,
      // WO-BUG-test — el InMemoryPrisma usado por los tests no
      // aplica los defaults del schema Prisma. Sin setear
      // `isDeleted: false` explícitamente, los módulos nuevos
      // quedan con `isDeleted: undefined`, y el banco los filtra
      // como eliminados. La columna real tiene `@default(false)`,
      // así que en producción el comportamiento es correcto.
      isDeleted: false,
      // FIX-GUARDADO — persistir `subject` (materia) y `theoryItems`
      // (teoría como contenido embebido). El front los envía (ver
      // useModuloPersistence.ts:209-225) y el ModuleSchema los acepta
      // (modulo.ts:208,227). Antes del fix, el handler no los incluía
      // en moduloData, así que se perdían.
      subject: parsed.subject ?? null,
      theoryItems: parsed.theoryItems?.length
        ? JSON.stringify(parsed.theoryItems)
        : null,
      // FIX-MODULO-CRASH-LEVEL — persistir `level` (nivel educativo).
      // Mismo patrón que `subject`: el front lo envía
      // (useModuloPersistence.ts:218) y el ModuleSchema lo acepta
      // (modulo.ts:210), pero la columna `level` no existía en el
      // modelo `Modulo`. Migración `20260617040000_modulo_level` la
      // agregó; el editor trata `null` como string vacío.
      level: parsed.level ?? null,
      visibility: parsed.visibility,
      schoolId: parsed.schoolId ?? null,
      ownerUserId: parsed.createdBy,
      dependencies: parsed.dependencies.length ? JSON.stringify(parsed.dependencies) : null,
      // PLAN-X §7 — mismo motivo que `isDeleted: false` arriba: el
      // InMemoryPrisma de los tests no aplica `@default(false)`.
      descatalogado: parsed.descatalogado ?? false,
      // WO-3 — escala de notas a nivel módulo (systemId + minPassingScore). Se
      // guarda como JSON; el grade path la lee con `resolveScoringConfig`. Si
      // falta, el cálculo cae al fallback histórico (scale-0-100 + umbral).
      scoringConfig: parsed.scoringConfig ? JSON.stringify(parsed.scoringConfig) : null,
      createdAt: parsed.createdAt,
      updatedAt: parsed.updatedAt,
    };
    let result: { id: string };
    await prisma.$transaction(async (tx) => {
      result = await tx.modulo.create({ data: moduloData });
      for (const quiz of parsed.quizzes ?? []) {
        const versionId = generateId();
        await tx.quiz.create({
          data: {
            id: quiz.id,
            moduleId: parsed.id,
            // PLAN-Y — `title` ahora es opcional en el schema (Tiza es el
            // editor canónico); en creación cae a "".
            title: quiz.title ?? "",
            // FIX-GUARDADO — el schema Prisma tiene `@default(true)` para
            // `isActive`, pero el in-memory prisma usado en tests no aplica
            // defaults. Seteamos explícitamente para que el GET lo encuentre.
            isActive: true,
            createdAt: parsed.createdAt,
            updatedAt: parsed.updatedAt,
          },
        });
        await tx.quizVersion.create({
          data: {
            id: versionId,
            quizId: quiz.id,
            versionNumber: 1,
            questions: JSON.stringify(quiz.questions ?? []),
            generatorId: quiz.generatorId ?? null,
            generatorVersion: quiz.generatorVersion?.toString() ?? null,
            params: quiz.params ? JSON.stringify(quiz.params) : null,
            count: quiz.count ?? null,
            seedPolicy: quiz.seedPolicy ? parseInt(quiz.seedPolicy, 10) : 0,
            fixedSeed: quiz.fixedSeed !== undefined ? String(quiz.fixedSeed) : null,
            // WO-BUG — `settings.materia` SIEMPRE se persiste. Se delega al
            // helper `mergeMateriaIntoSettings` para que las reglas sean
            // únicas (modulo.subject || modulo.category). Antes sólo
            // `materia: parsed.subject` (string vacío si el docente no
            // había puesto materia) → los cuestionarios desaparecían al
            // filtrar el banco por materia.
            settings: JSON.stringify(
              mergeMateriaIntoSettings(
                {
                  // PLAN-Y — POST = creación: defaults acá (el schema ya no
                  // los inyecta; ausente sólo importa en el update).
                  type: quiz.type ?? "practica",
                  mode: quiz.mode,
                  visibility: quiz.visibility ?? "publico",
                  composition: quiz.composition,
                  ocultarPuntos: quiz.ocultarPuntos === true,
                  // F4-04 — campos de modo evaluación. Se persisten en
                  // `settings.maxIntentos`/`politicaNota`/`timerSegundos`/
                  // `fullscreenOnStart`. Cierra el gap de F3-04 (que sólo los
                  // leía pero no los escribía). Default del tipo si no vienen.
                  maxIntentos: quiz.maxIntentos === undefined ? undefined : quiz.maxIntentos,
                  politicaNota: quiz.politicaNota,
                  // WO-3 — política de sorteo de variantes + cantidad tomada (K de N).
                  politicaSorteo: quiz.politicaSorteo,
                  displayCount: quiz.displayCount,
                  // WO-2 / F4-03 — cuestionario por posiciones (crudo).
                  posiciones: quiz.posiciones,
                  timerSegundos: quiz.timerSegundos === undefined ? null : quiz.timerSegundos,
                  fullscreenOnStart: quiz.fullscreenOnStart === true,
                  // WO-9 — modo de presentación + tamaño de página.
                  modoPresentacion: quiz.modoPresentacion,
                  preguntasPorPagina: quiz.preguntasPorPagina,
                  // WO-14 — ruteo por dificultad.
                  politicaDificultad: quiz.politicaDificultad,
                  dificultadInicial: quiz.dificultadInicial,
                  dificultadVentana: quiz.dificultadVentana,
                  // PLAN-D §1 — política de cierre por expiración.
                  politicaExpiracion: quiz.politicaExpiracion,
                },
                { subject: parsed.subject, category: parsed.category },
              ),
            ),
            createdAt: parsed.createdAt,
            createdBy: parsed.createdBy,
          },
        });
        await tx.quiz.update({
          where: { id: quiz.id },
          data: { currentVersionId: versionId },
        });
      }
      // Tarea 16b: si vino aulaId y la validación pasó, cerrar el lazo creando
      // la fila clase_modulos para que el módulo quede asignado al aula.
      if (parsed.aulaId) {
        await tx.claseModulo.create({
          data: {
            claseId: parsed.aulaId,
            moduloId: parsed.id,
            assignedAt: new Date().toISOString(),
            required: false,
          },
        });
      }
    });
    res.status(201).json({ id: result!.id, moduleId: parsed.id });
  } catch (e: any) {
    console.error("[POST /api/modulos]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

async function applyModuleUpdate(
  moduleId: string,
  parsed: Record<string, any>,
  existing: {
    visibility: string;
    schoolId: string | null;
    dependencies: string | null;
    // WO-BUG — para que `mergeMateriaIntoSettings` pueda derivar
    // `settings.materia` en quizzes creados/editados por PUT/PATCH
    // cuando el payload NO incluye `subject`/`category` (ej. PATCH
    // parcial). Si el payload los trae, tienen prioridad.
    subject?: string | null;
    category?: string | null;
  },
) {
  const now = new Date().toISOString();

  await prisma.$transaction(async (tx) => {
    const updateData: Record<string, unknown> = { updatedAt: now };
    if (parsed.title !== undefined) updateData.titulo = parsed.title;
    if (parsed.description !== undefined) updateData.descripcion = parsed.description;
    if (parsed.slug !== undefined) updateData.slug = parsed.slug;
    // FIX-GUARDADO — persistir `subject` (materia) y `theoryItems`
    // (teoría como contenido embebido). Mismo patrón que los demás
    // campos: si vienen en el payload, se actualizan; si no, se dejan
    // intactos.
    if (parsed.subject !== undefined) updateData.subject = parsed.subject ?? null;
    if (parsed.theoryItems !== undefined) {
      updateData.theoryItems = parsed.theoryItems && parsed.theoryItems.length
        ? JSON.stringify(parsed.theoryItems)
        : null;
    }
    // FIX-MODULO-CRASH-LEVEL — persistir `level` (nivel educativo).
    // Misma semántica que los demás: si viene en el payload, se
    // actualiza; si no, queda intacto.
    if (parsed.level !== undefined) updateData.level = parsed.level ?? null;
    if (parsed.visibility !== undefined) updateData.visibility = parsed.visibility;
    // PLAN-X §7 — toggle de "descatalogado" (owner-only, gateado en el handler).
    if (parsed.descatalogado !== undefined) updateData.descatalogado = parsed.descatalogado;
    if (parsed.schoolId !== undefined) updateData.schoolId = parsed.schoolId ?? null;
    // WO-3 — escala de notas (módulo). Misma semántica: si viene, se actualiza.
    if (parsed.scoringConfig !== undefined) {
      updateData.scoringConfig = parsed.scoringConfig
        ? JSON.stringify(parsed.scoringConfig)
        : null;
    }
    if (parsed.createdBy !== undefined) updateData.ownerUserId = parsed.createdBy;
    if (parsed.dependencies !== undefined) {
      updateData.dependencies = parsed.dependencies && parsed.dependencies.length
        ? JSON.stringify(parsed.dependencies)
        : null;
    }
    await tx.modulo.update({ where: { id: moduleId }, data: updateData });

    if (parsed.quizzes === undefined) return;

    const existingQuizzes = await tx.quiz.findMany({
      where: { moduleId, isActive: true },
      include: { versions: { orderBy: { versionNumber: "desc" }, take: 1 } },
    });

    const payloadQuizIds = new Set<string>(
      (parsed.quizzes as any[]).filter((q) => q?.id).map((q) => q.id as string),
    );

    for (const oldQuiz of existingQuizzes) {
      if (!payloadQuizIds.has(oldQuiz.id)) {
        await tx.quiz.update({
          where: { id: oldQuiz.id },
          data: { isActive: false, updatedAt: now },
        });
      }
    }

    for (const q of parsed.quizzes as any[]) {
      // WO-BUG — armar el `settings` base y dejarlo pasar por
      // `mergeMateriaIntoSettings` con la materia del módulo (del
      // payload). Antes este path NO tocaba `settings.materia`, así
      // que los cuestionarios editados/agregados por PUT/PATCH
      // quedaban huérfanos y desaparecían del banco filtrado.
      // PLAN-Y — builder "sparse": campo ausente en el payload → NO se
      // escribe (ni default ni null). Antes `type`/`visibility`/
      // `ocultarPuntos`/`timerSegundos`/`fullscreenOnStart` recibían un
      // default forzado que hacía imposible el carry-forward de abajo (la
      // clave nunca quedaba `undefined`) y el guardado del módulo pisaba lo
      // configurado en Tiza. Los defaults se aplican sólo en el branch de
      // CREACIÓN (quiz nuevo, sin versión previa).
      const settings = mergeMateriaIntoSettings(
        {
          type: q.type,
          mode: q.mode,
          visibility: q.visibility,
          // Composición a nivel quiz (pool/selección/variantes/peso). No DSL.
          composition: q.composition,
          // F3-04 + F4-04 — config del modo evaluación, persistida en
          // `settings.maxIntentos`/`politicaNota`/`timerSegundos`/
          // `fullscreenOnStart`. Cierra el gap de F3-04 (que sólo los leía
          // pero no los escribía). F4-04 agrega timer y fullscreen.
          // Si los campos están ausentes en el payload, el parser server-side
          // (parseEvaluacionConfig) usa el default del tipo. Acá respetamos
          // lo que el docente setea, incluido `0` (ilimitado explícito).
          maxIntentos: q.maxIntentos === undefined ? undefined : q.maxIntentos,
          politicaNota: q.politicaNota,
          // WO-3 — política de sorteo de variantes + cantidad tomada (K de N).
          politicaSorteo: q.politicaSorteo,
          displayCount: q.displayCount,
          // WO-2 / F4-03 — cuestionario por posiciones (crudo).
          posiciones: q.posiciones,
          // F4-03 — toggle "ocultar puntos al alumno".
          ocultarPuntos: q.ocultarPuntos === undefined ? undefined : q.ocultarPuntos === true,
          // F4-04 — timer per-cuestionario (segundos). null = sin timer.
          timerSegundos: q.timerSegundos,
          // F4-04 — activar pantalla completa al iniciar el intento.
          fullscreenOnStart:
            q.fullscreenOnStart === undefined ? undefined : q.fullscreenOnStart === true,
          // WO-9 — modo de presentación + tamaño de página.
          modoPresentacion: q.modoPresentacion,
          preguntasPorPagina: q.preguntasPorPagina,
          // WO-14 — ruteo por dificultad.
          politicaDificultad: q.politicaDificultad,
          dificultadInicial: q.dificultadInicial,
          dificultadVentana: q.dificultadVentana,
          // PLAN-D §1 — política de cierre por expiración.
          politicaExpiracion: q.politicaExpiracion,
        },
        // El front envía `subject` y `category` a nivel módulo en el
        // payload. Si vienen, los usamos. Si NO vienen (ej. PATCH que
        // sólo manda `quizzes`), caemos al `subject`/`category` del
        // módulo existente.
        {
          subject: parsed.subject ?? existing?.subject ?? null,
          category: parsed.category ?? existing?.category ?? null,
        },
      );
      const seedPolicyInt = q.seedPolicy ? parseInt(String(q.seedPolicy), 10) : 0;

      const matched = q.id ? existingQuizzes.find((eq) => eq.id === q.id) : undefined;

      if (matched) {
        // WO-BUG-fix — el InMemoryPrisma usado en tests no soporta
        // `include: { versions }` anidado, así que `matched.versions`
        // viene `undefined`. Hacemos un `findMany` fallback (mismo
        // patrón que `cloneModuloDeep`) y ordenamos en memoria para
        // tomar la última versión. En el prisma real con include,
        // esto es redundante pero inofensivo (el findMany devuelve
        // [] cuando las versiones ya vienen en `matched.versions`).
        let latestVersion =
          Array.isArray((matched as { versions?: unknown[] }).versions) && (matched as { versions?: { versionNumber?: number }[] }).versions!.length > 0
            ? (matched as { versions: { versionNumber?: number }[] }).versions[0]
            : undefined;
        if (!latestVersion) {
          const versions = await tx.quizVersion.findMany({ where: { quizId: matched.id } });
          versions.sort((a: { versionNumber?: number }, b: { versionNumber?: number }) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0));
          latestVersion = versions[0];
        }
        const newVersionNum = (latestVersion?.versionNumber ?? 0) + 1;
        const newVersionId = `qv-${matched.id}-${newVersionNum}-${Date.now()}`;

        // WO-tiza-config — `settings.preguntas` (Tiza, preguntas nativas) NO
        // forma parte de `ModuleQuizSchema`, así que el payload de PUT/PATCH
        // de módulo nunca lo trae. Sin este arrastre, guardar el módulo desde
        // ModuloEditor creaba una versión nueva SIN `preguntas` y borraba la
        // configuración hecha en Tiza (que `quiz-attempts.ts` sí lee).
        const prevSettings = (latestVersion as { settings?: string | null } | undefined)?.settings
          ? safeJsonParse<Record<string, unknown>>(
              (latestVersion as { settings: string }).settings,
              {},
            )
          : {};
        if (prevSettings.preguntas !== undefined && (settings as Record<string, unknown>).preguntas === undefined) {
          (settings as Record<string, unknown>).preguntas = prevSettings.preguntas;
        }
        // PLAN-Z fase 3/4 — mismo problema que `preguntas` arriba:
        // `materiaDeclarada`/`nivel`/`tags`/`descripcion` (editados desde
        // la plantilla-config de Tiza) tampoco forman parte de
        // `ModuleQuizSchema`, así que un guardado de módulo los borraría
        // en cada versión nueva sin este arrastre.
        // PLAN-Y — se suman `instructions` (nuevo, Tiza-only), `type`/
        // `visibility` y toda la config de evaluación
        // (QUIZ_META_SETTINGS_KEYS): Tiza es la única fuente de verdad de
        // la config del cuestionario; el módulo sólo la escribe si la
        // manda explícitamente (payload viejo = comportamiento viejo).
        for (const carryKey of [
          "materiaDeclarada",
          "nivel",
          "tags",
          "descripcion",
          "instructions",
          "type",
          "visibility",
          ...QUIZ_META_SETTINGS_KEYS,
        ]) {
          if (prevSettings[carryKey] !== undefined && (settings as Record<string, unknown>)[carryKey] === undefined) {
            (settings as Record<string, unknown>)[carryKey] = prevSettings[carryKey];
          }
        }

        await tx.quizVersion.create({
          data: {
            id: newVersionId,
            quizId: matched.id,
            versionNumber: newVersionNum,
            questions: q.questions ? JSON.stringify(q.questions) : null,
            generatorId: q.generatorId ?? null,
            generatorVersion: q.generatorVersion ? String(q.generatorVersion) : null,
            params: q.params ? JSON.stringify(q.params) : null,
            count: q.count ?? null,
            seedPolicy: seedPolicyInt,
            fixedSeed: q.fixedSeed !== undefined ? String(q.fixedSeed) : null,
            settings: JSON.stringify(settings),
            createdAt: now,
          },
        });

        await tx.quiz.update({
          where: { id: matched.id },
          data: {
            // PLAN-Y — título ausente en el payload → se conserva el actual
            // (Tiza lo edita por PATCH /meta; antes `?? ""` lo borraba).
            title: q.title ?? matched.title ?? "",
            isActive: true,
            currentVersionId: newVersionId,
            updatedAt: now,
          },
        });
      } else {
        const newQuizId =
          q.id ?? `qz-${moduleId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const newVersionId = `qv-${newQuizId}-1`;

        // PLAN-Y — quiz NUEVO: acá sí se aplican los defaults que el builder
        // sparse de arriba ya no fuerza (contrato de creación intacto).
        const s = settings as Record<string, unknown>;
        if (s.type === undefined) s.type = "practica";
        if (s.visibility === undefined) s.visibility = "publico";
        if (s.ocultarPuntos === undefined) s.ocultarPuntos = false;
        if (s.timerSegundos === undefined) s.timerSegundos = null;
        if (s.fullscreenOnStart === undefined) s.fullscreenOnStart = false;

        await tx.quiz.create({
          data: {
            id: newQuizId,
            moduleId,
            title: q.title ?? "",
            isActive: true,
            createdAt: now,
            updatedAt: now,
          },
        });

        await tx.quizVersion.create({
          data: {
            id: newVersionId,
            quizId: newQuizId,
            versionNumber: 1,
            questions: q.questions ? JSON.stringify(q.questions) : null,
            generatorId: q.generatorId ?? null,
            generatorVersion: q.generatorVersion ? String(q.generatorVersion) : null,
            params: q.params ? JSON.stringify(q.params) : null,
            count: q.count ?? null,
            seedPolicy: seedPolicyInt,
            fixedSeed: q.fixedSeed !== undefined ? String(q.fixedSeed) : null,
            settings: JSON.stringify(settings),
            createdAt: now,
          },
        });

        await tx.quiz.update({
          where: { id: newQuizId },
          data: { currentVersionId: newVersionId },
        });
      }
    }
  });
}

modulos.put("/api/modulos/:id", requireUser, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleUpdateSchema.parse(req.body);
    const existing = await prisma.modulo.findFirst({ where: { id: req.params.id as string } });
    if (!existing) return res.status(404).json({ error: "not found" });
    if ((existing as any).aulaId) {
      const classroom = await prisma.clase.findFirst({
        where: { id: (existing as any).aulaId },
        select: { status: true },
      });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    // WO-13 — copy-on-write transparente al editar un módulo compartido
    // ajeno. Si el usuario NO es owner/admin y el módulo está
    // compartido (`escuela` o `publico`), clonamos el módulo, le
    // aplicamos el update a la copia, y devolvemos el id de la copia
    // en la respuesta. El original queda intacto.
    const user = (req as { user?: { _id?: string; id?: string; role?: string | null; schoolId?: string | null; escuelaId?: string | null } }).user;
    const userIdForCow =
      (typeof user?.id === "string" && user.id) ||
      (typeof user?._id === "string" && (user._id as string)) ||
      null;
    const userSchoolIdForCow =
      (typeof user?.schoolId === "string" && user.schoolId) ||
      (typeof user?.escuelaId === "string" && user.escuelaId) ||
      null;
    let targetId = req.params.id as string;
    let targetExisting = existing;
    let copiedFrom: { id: string; title: string | null; ownerUserId: string | null } | null = null;
    if (
      userIdForCow &&
      requiresCopyOnWrite(existing as any, {
        _id: userIdForCow,
        role: user?.role,
        schoolId: userSchoolIdForCow,
      })
    ) {
      const { newId } = await cloneModuloDeep(targetId, userIdForCow, {
        appendCopiaSuffix: false,
      });
      // WO-13 — auditoría. Diferenciamos del duplicar explícito
      // (`trigger: "cow"`) para que la traza refleje que fue un
      // copy-on-write transparente, no una decisión del usuario.
      await recordAuditLog({
        actorId: userIdForCow,
        action: "modulo.duplicate",
        targetType: "modulo",
        targetId: newId,
        metadata: {
          sourceId: targetId,
          sourceOwner: (existing as any).ownerUserId ?? null,
          trigger: "cow",
          httpMethod: req.method,
        },
      });
      copiedFrom = {
        id: (existing as any).id as string,
        title: ((existing as any).titulo as string) ?? null,
        ownerUserId: ((existing as any).ownerUserId as string | null) ?? null,
      };
      targetId = newId;
      const fresh = await prisma.modulo.findFirst({ where: { id: newId } });
      if (!fresh) return res.status(500).json({ error: "copia no encontrada" });
      targetExisting = fresh;
    }
    await applyModuleUpdate(targetId, parsed as Record<string, any>, targetExisting);
    if (copiedFrom) {
      res.json({
        ok: true,
        id: targetId,
        // WO-13 — el front usa estos campos para navegar a la copia
        // y mostrar "Copiaste este material desde…".
        copied: true,
        clonedFrom: copiedFrom,
      });
    } else {
      res.json({ ok: true, id: targetId });
    }
  } catch (e: any) {
    console.error("[PUT /api/modulos/:id]", e);
    if (e?.issues) return res.status(400).json({ error: "validation", issues: e.issues });
    res.status(500).json({ error: "internal server error" });
  }
});

modulos.patch("/api/modulos/:id", requireUser, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuleUpdateSchema.parse(req.body);
    const existing = await prisma.modulo.findFirst({ where: { id: req.params.id as string } });
    if (!existing) return res.status(404).json({ error: "not found" });
    if ((existing as any).aulaId) {
      const classroom = await prisma.clase.findFirst({
        where: { id: (existing as any).aulaId },
        select: { status: true },
      });
      if (classroom && !assertClassroomWritable(res, classroom)) {
        return;
      }
    }
    // WO-13 — copy-on-write (mismo criterio que PUT).
    const user = (req as { user?: { _id?: string; id?: string; role?: string | null; schoolId?: string | null; escuelaId?: string | null } }).user;
    const userIdForCow =
      (typeof user?.id === "string" && user.id) ||
      (typeof user?._id === "string" && (user._id as string)) ||
      null;
    const userSchoolIdForCow =
      (typeof user?.schoolId === "string" && user.schoolId) ||
      (typeof user?.escuelaId === "string" && user.escuelaId) ||
      null;
    let targetId = req.params.id as string;
    let targetExisting = existing;
    let copiedFrom: { id: string; title: string | null; ownerUserId: string | null } | null = null;
    if (
      userIdForCow &&
      requiresCopyOnWrite(existing as any, {
        _id: userIdForCow,
        role: user?.role,
        schoolId: userSchoolIdForCow,
      })
    ) {
      const { newId } = await cloneModuloDeep(targetId, userIdForCow, {
        appendCopiaSuffix: false,
      });
      await recordAuditLog({
        actorId: userIdForCow,
        action: "modulo.duplicate",
        targetType: "modulo",
        targetId: newId,
        metadata: {
          sourceId: targetId,
          sourceOwner: (existing as any).ownerUserId ?? null,
          trigger: "cow",
          httpMethod: req.method,
        },
      });
      copiedFrom = {
        id: (existing as any).id as string,
        title: ((existing as any).titulo as string) ?? null,
        ownerUserId: ((existing as any).ownerUserId as string | null) ?? null,
      };
      targetId = newId;
      const fresh = await prisma.modulo.findFirst({ where: { id: newId } });
      if (!fresh) return res.status(500).json({ error: "copia no encontrada" });
      targetExisting = fresh;
    }
    await applyModuleUpdate(targetId, parsed as Record<string, any>, targetExisting);
    if (copiedFrom) {
      res.json({
        ok: true,
        id: targetId,
        copied: true,
        clonedFrom: copiedFrom,
      });
    } else {
      res.json({ ok: true, id: targetId });
    }
  } catch (e: any) {
    console.error("[PATCH /api/modulos/:id]", e);
    if (e?.issues) return res.status(400).json({ error: "validation", issues: e.issues });
    res.status(500).json({ error: "internal server error" });
  }
});

modulos.delete("/api/modulos/:id", requireUser, async (req, res) => {
  const existing = await prisma.modulo.findFirst({ where: { id: req.params.id as string } });
  if (!existing) return res.status(404).json({ error: "not found" });
  if ((existing as any).aulaId) {
    const classroom = await prisma.clase.findFirst({
      where: { id: (existing as any).aulaId },
      select: { status: true },
    });
    if (classroom && !assertClassroomWritable(res, classroom)) {
      return;
    }
  }
  const result = await prisma.modulo.deleteMany({ where: { id: req.params.id as string } });
  if (result.count === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

// ─── PLAN-X §7 — invitados de un módulo descatalogado ───────────────────────
// "el modo descatalogado es como un modo oculto pero que el mismo profesor
// pone para que el contenido no aparezca; los alumnos tienen que ser
// invitados... o el profesor tiene que agregarlo en un aula" (Javier,
// 2026-07-12). Sólo el DUEÑO gestiona invitados — mismo criterio que "el
// mismo profesor pone" el modo. La asignación a una aula (`ClaseModulo`,
// `AsignarModulosModal`) ya es un camino de visibilidad separado y no
// pasa por acá.
const resolveModuleUserNames = async (userIds: string[]) => {
  const unique = Array.from(new Set(userIds.filter((v) => !!v)));
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

const requireModuleOwner = async (
  req: express.Request,
  res: express.Response,
): Promise<{ id: string; ownerUserId: string | null } | null> => {
  const moduloId = req.params.id as string;
  const modulo = await prisma.modulo.findFirst({ where: { id: moduloId } });
  if (!modulo) {
    res.status(404).json({ error: "not found" });
    return null;
  }
  const requesterId = resolveRequesterId(req.user as QuizRequesterRaw);
  if (!requesterId || modulo.ownerUserId !== requesterId) {
    res.status(403).json({ error: "sólo el dueño del módulo gestiona invitados" });
    return null;
  }
  return modulo as { id: string; ownerUserId: string | null };
};

modulos.get("/api/modulos/:id/invitados", requireUser, async (req, res) => {
  const modulo = await requireModuleOwner(req, res);
  if (!modulo) return;
  const invitaciones = await prisma.moduloInvitacion.findMany({ where: { moduloId: modulo.id } });
  const nameMap = await resolveModuleUserNames(invitaciones.map((i) => i.usuarioId));
  res.json({
    items: invitaciones.map((i) => ({
      usuarioId: i.usuarioId,
      name: nameMap.get(i.usuarioId) ?? i.usuarioId,
      invitedBy: i.invitedBy ?? null,
      createdAt: i.createdAt,
    })),
  });
});

modulos.post("/api/modulos/:id/invitados", requireUser, express.json(), async (req, res) => {
  const modulo = await requireModuleOwner(req, res);
  if (!modulo) return;
  const usuarioId = typeof req.body?.usuarioId === "string" ? req.body.usuarioId.trim() : "";
  if (!usuarioId) return res.status(400).json({ error: "usuarioId is required" });
  const target = await prisma.usuario.findFirst({ where: { id: usuarioId, isDeleted: { not: true } } });
  if (!target) return res.status(400).json({ error: "user not found" });
  const existing = await prisma.moduloInvitacion.findFirst({
    where: { moduloId: modulo.id, usuarioId },
  });
  if (existing) return res.status(409).json({ error: "already invited" });
  const requesterId = resolveRequesterId(req.user as QuizRequesterRaw);
  await prisma.moduloInvitacion.create({
    data: {
      moduloId: modulo.id,
      usuarioId,
      invitedBy: requesterId,
      createdAt: new Date().toISOString(),
    },
  });
  res.status(201).json({ ok: true });
});

modulos.delete("/api/modulos/:id/invitados/:usuarioId", requireUser, async (req, res) => {
  const modulo = await requireModuleOwner(req, res);
  if (!modulo) return;
  const usuarioId = req.params.usuarioId as string;
  const result = await prisma.moduloInvitacion.deleteMany({
    where: { moduloId: modulo.id, usuarioId },
  });
  if (result.count === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

// ─── "Niveles por aula con mapa de flujo" — desbloqueo manual ───────────────
// El docente dueño del módulo puede saltear el candado por dependencias
// para UN alumno puntual (`usuarioId`) o para TODA un aula (`aulaId`) —
// exactamente uno de los dos. Mismo criterio de autorización que
// "invitados" (sólo el dueño), reusando sus helpers.
modulos.get("/api/modulos/:id/desbloqueos", requireUser, async (req, res) => {
  const modulo = await requireModuleOwner(req, res);
  if (!modulo) return;
  const desbloqueos = await prisma.moduloDesbloqueo.findMany({ where: { moduloId: modulo.id } });
  const nameMap = await resolveModuleUserNames(
    desbloqueos.map((d) => d.usuarioId).filter((v): v is string => Boolean(v))
  );
  const aulaIds = Array.from(
    new Set(desbloqueos.map((d) => d.aulaId).filter((v): v is string => Boolean(v)))
  );
  const aulas = aulaIds.length
    ? await prisma.clase.findMany({ where: { id: { in: aulaIds } }, select: { id: true, name: true } })
    : [];
  const aulaNameMap = new Map(aulas.map((a) => [a.id, a.name]));
  res.json({
    items: desbloqueos.map((d) => ({
      id: d.id,
      usuarioId: d.usuarioId ?? null,
      usuarioNombre: d.usuarioId ? (nameMap.get(d.usuarioId) ?? d.usuarioId) : null,
      aulaId: d.aulaId ?? null,
      aulaNombre: d.aulaId ? (aulaNameMap.get(d.aulaId) ?? d.aulaId) : null,
      otorgadoPor: d.otorgadoPor,
      createdAt: d.createdAt,
    })),
  });
});

modulos.post("/api/modulos/:id/desbloqueos", requireUser, express.json(), async (req, res) => {
  const modulo = await requireModuleOwner(req, res);
  if (!modulo) return;
  const usuarioId = typeof req.body?.usuarioId === "string" ? req.body.usuarioId.trim() : "";
  const aulaId = typeof req.body?.aulaId === "string" ? req.body.aulaId.trim() : "";
  if ((usuarioId && aulaId) || (!usuarioId && !aulaId)) {
    return res.status(400).json({ error: "hay que indicar exactamente uno de usuarioId o aulaId" });
  }
  if (usuarioId) {
    const target = await prisma.usuario.findFirst({ where: { id: usuarioId, isDeleted: { not: true } } });
    if (!target) return res.status(400).json({ error: "user not found" });
  } else {
    const aula = await prisma.clase.findFirst({ where: { id: aulaId } });
    if (!aula) return res.status(400).json({ error: "classroom not found" });
  }
  const requesterId = resolveRequesterId(req.user as QuizRequesterRaw);
  const created = await prisma.moduloDesbloqueo.create({
    data: {
      id: randomUUID(),
      moduloId: modulo.id,
      usuarioId: usuarioId || null,
      aulaId: aulaId || null,
      otorgadoPor: requesterId ?? "",
      createdAt: new Date().toISOString(),
    },
  });
  res.status(201).json({ id: created.id });
});

modulos.delete("/api/modulos/:id/desbloqueos/:desbloqueoId", requireUser, async (req, res) => {
  const modulo = await requireModuleOwner(req, res);
  if (!modulo) return;
  const result = await prisma.moduloDesbloqueo.deleteMany({
    where: { id: req.params.desbloqueoId as string, moduloId: modulo.id },
  });
  if (result.count === 0) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

// Etapa 2 (Tiza — preguntas nativas) — GET/PUT del `CuestionarioPreguntas`
// de UN quiz por su `quizId`. El editor Tiza (`PlantillaEditorTiza.tsx`)
// sólo conoce el `quizId` (llega por query param), no el `moduleId` — por
// eso este endpoint resuelve el módulo dueño a partir del quiz, en vez de
// vivir bajo `/api/modulos/:id/...` como el resto de las rutas de este
// archivo.
async function loadQuizConModulo(quizId: string) {
  const quiz = await prisma.quiz.findFirst({ where: { id: quizId } });
  if (!quiz) return null;
  const modulo = quiz.moduleId
    ? await prisma.modulo.findFirst({ where: { id: quiz.moduleId } })
    : null;
  const version = quiz.currentVersionId
    ? await prisma.quizVersion.findFirst({ where: { id: quiz.currentVersionId } })
    : null;
  return { quiz, modulo, version };
}

type QuizRequesterRaw =
  | { _id?: { toString?: () => string } | string; id?: string; role?: string | null; schoolId?: string | null }
  | undefined;

/** Resuelve el id del usuario autenticado desde `req.user` (mismo shape en las 3 rutas de este bloque). */
function resolveRequesterId(requesterRaw: QuizRequesterRaw): string | null {
  return (
    (typeof requesterRaw?.id === "string" && requesterRaw.id) ||
    (typeof requesterRaw?._id === "string" && (requesterRaw._id as string)) ||
    (requesterRaw?._id && typeof (requesterRaw._id as { toString?: () => string }).toString === "function"
      ? (requesterRaw._id as { toString: () => string }).toString()
      : null)
  );
}

function canAccessQuiz(
  loaded: NonNullable<Awaited<ReturnType<typeof loadQuizConModulo>>>,
  requesterId: string,
  requesterRaw: QuizRequesterRaw,
): boolean {
  if (loaded.modulo) {
    return canEditModuloDirect(loaded.modulo, { _id: requesterId, role: requesterRaw?.role, schoolId: requesterRaw?.schoolId });
  }
  // PLAN-CORRECCIONES C2 — quiz standalone (sin módulo todavía): antes
  // de este fix cualquier staff (isStaffRole) podía editar el draft de
  // OTRO docente, porque el fallback no chequeaba dueño. Ahora sólo el
  // dueño o un ADMIN.
  return loaded.quiz.ownerUserId === requesterId || requesterRaw?.role === "ADMIN";
}

// WO-tiza-config — claves de `QuizVersion.settings` que forman la
// "configuración de evaluación" editable desde Tiza (mismos campos que
// `EvaluacionConfig` en ModuloEditor). `type`/`visibility` van aparte en la
// respuesta porque no son config de evaluación sino identidad del quiz.
const QUIZ_META_SETTINGS_KEYS = [
  "maxIntentos",
  "politicaNota",
  "politicaSorteo",
  "ocultarPuntos",
  "timerSegundos",
  "fullscreenOnStart",
  "modoPresentacion",
  "preguntasPorPagina",
  "politicaDificultad",
  "dificultadInicial",
  "dificultadVentana",
  "politicaExpiracion",
] as const;

function buildQuizMetaResponse(loaded: NonNullable<Awaited<ReturnType<typeof loadQuizConModulo>>>) {
  const settings = loaded.version?.settings
    ? safeJsonParse<Record<string, unknown>>(loaded.version.settings, {})
    : {};
  const config: Record<string, unknown> = {};
  for (const key of QUIZ_META_SETTINGS_KEYS) {
    if (settings[key] !== undefined) config[key] = settings[key];
  }
  return {
    id: loaded.quiz.id,
    title: loaded.quiz.title ?? "",
    type: typeof settings.type === "string" ? settings.type : "practica",
    visibility: typeof settings.visibility === "string" ? settings.visibility : "publico",
    // PLAN-Z fase 3/4 — `materia` se lee de `materiaDeclarada` (NO de
    // `settings.materia`, esa la administra `mergeMateriaIntoSettings`).
    materia: typeof settings.materiaDeclarada === "string" ? settings.materiaDeclarada : "",
    nivel: typeof settings.nivel === "string" ? settings.nivel : "",
    tags: Array.isArray(settings.tags) ? settings.tags.filter((t): t is string => typeof t === "string") : [],
    descripcion: typeof settings.descripcion === "string" ? settings.descripcion : "",
    // PLAN-Y fase 3 — instrucciones para el alumno (Tiza-only; el textarea
    // de ModuloEditor era un campo fantasma que nunca persistió).
    instructions: typeof settings.instructions === "string" ? settings.instructions : "",
    config,
  };
}

// WO — el editor Tiza muestra "Cuestionario: <título>" en la cabecera de
// DETALLES cuando hay `quizId` (el título del cuestionario vive en
// `Quiz.title`, no en la plantilla), y (WO-tiza-config) el panel DETALLES
// edita tipo/visibilidad/config de evaluación: GET liviano con todo eso.
// El path es `/meta` (no la raíz `/api/quizzes/:quizId`): este router se
// monta antes que `quizBanco` (index.ts) y una ruta paramétrica en la raíz
// capturaría cualquier path literal hermano, como `/api/quizzes/banco`.
modulos.get("/api/quizzes/:quizId/meta", requireUser, async (req, res) => {
  try {
    const quizId = req.params.quizId as string;
    const loaded = await loadQuizConModulo(quizId);
    if (!loaded) return res.status(404).json({ error: "quiz not found" });

    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
    if (!canAccessQuiz(loaded, requesterId, requesterRaw)) {
      return res.status(403).json({ error: "forbidden" });
    }

    res.json(buildQuizMetaResponse(loaded));
  } catch (e: any) {
    console.error("[GET /api/quizzes/:quizId/meta]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

// WO-tiza-config — PATCH parcial de título/tipo/visibilidad/config de
// evaluación de UN quiz. Mismo patrón de persistencia que
// `PUT /api/quizzes/:quizId/preguntas`: read-modify-write del `settings` de
// la versión ACTUAL (sin crear versión nueva), así un patch chico desde Tiza
// no puede pisar claves que no conoce (`preguntas`, `posiciones`, `materia`).
modulos.patch("/api/quizzes/:quizId/meta", requireUser, async (req, res) => {
  try {
    const quizId = req.params.quizId as string;
    const loaded = await loadQuizConModulo(quizId);
    if (!loaded) return res.status(404).json({ error: "quiz not found" });

    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
    if (!canAccessQuiz(loaded, requesterId, requesterRaw)) {
      return res.status(403).json({ error: "forbidden" });
    }

    const parsed = QuizMetaPatchSchema.parse(req.body);
    const now = new Date().toISOString();

    if (parsed.title !== undefined) {
      await prisma.quiz.update({
        where: { id: loaded.quiz.id },
        data: { title: parsed.title, updatedAt: now },
      });
      loaded.quiz.title = parsed.title;
    }

    const settingsPatch: Record<string, unknown> = {};
    if (parsed.type !== undefined) settingsPatch.type = parsed.type;
    if (parsed.visibility !== undefined) settingsPatch.visibility = parsed.visibility;
    // PLAN-Z fase 3/4 — `materia` mapea a `materiaDeclarada` (no a
    // `settings.materia`, ver comment en `QuizMetaPatchSchema`).
    if (parsed.materia !== undefined) settingsPatch.materiaDeclarada = parsed.materia;
    if (parsed.nivel !== undefined) settingsPatch.nivel = parsed.nivel;
    if (parsed.tags !== undefined) settingsPatch.tags = parsed.tags;
    if (parsed.descripcion !== undefined) settingsPatch.descripcion = parsed.descripcion;
    // PLAN-Y fase 3 — instrucciones para el alumno.
    if (parsed.instructions !== undefined) settingsPatch.instructions = parsed.instructions;
    for (const key of QUIZ_META_SETTINGS_KEYS) {
      if ((parsed as Record<string, unknown>)[key] !== undefined) {
        settingsPatch[key] = (parsed as Record<string, unknown>)[key];
      }
    }
    if (Object.keys(settingsPatch).length > 0) {
      if (!loaded.version) {
        return res.status(400).json({ error: "el quiz no tiene una versión válida" });
      }
      const settings = loaded.version.settings
        ? safeJsonParse<Record<string, unknown>>(loaded.version.settings, {})
        : {};
      const nextSettings = { ...settings, ...settingsPatch };
      await prisma.quizVersion.update({
        where: { id: loaded.version.id },
        data: { settings: JSON.stringify(nextSettings) },
      });
      loaded.version.settings = JSON.stringify(nextSettings);
    }

    res.json(buildQuizMetaResponse(loaded));
  } catch (e: any) {
    if (e?.issues) return res.status(400).json({ error: "validation", issues: e.issues });
    console.error("[PATCH /api/quizzes/:quizId/meta]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

// WO-tiza-config — "Eliminar cuestionario" desde Tiza. Soft-delete
// (`isActive: false`), el mismo mecanismo que usa `applyModuleUpdate` cuando
// un quiz desaparece de `quizzes[]` al guardar el módulo. Método DELETE sobre
// la raíz paramétrica: hoy no hay ninguna ruta literal DELETE bajo
// `/api/quizzes/` que pueda quedar tapada (la lección del shadowing de
// `/api/quizzes/banco` aplica por método+path; banco es GET-only).
// PLAN-CORRECCIONES C2 — lista los cuestionarios "sueltos" (sin módulo)
// del propio docente, para el picker de "Usar cuestionario existente" en
// `ModuloEditor`. No es paramétrica (raíz literal) — no hay riesgo de
// shadowing con las rutas `/api/quizzes/:quizId/*` de abajo.
modulos.get("/api/quizzes", requireUser, async (req, res) => {
  try {
    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });

    // PLAN-CUESTIONARIOS — `scope=todos` agrega los quizzes de módulos
    // PROPIOS (para la página /cuestionarios). El default ("sueltos")
    // conserva el contrato del picker "Usar cuestionario existente".
    const scope = req.query.scope === "todos" ? "todos" : "sueltos";
    // Archivar cuestionarios — `archivados=true` invierte el filtro de
    // `isActive` para listar sólo los archivados (pantalla "Ver archivados"
    // de /cuestionarios). Default: sólo los activos, como siempre.
    const wantArchived = req.query.archivados === "true";

    const sueltos = await prisma.quiz.findMany({
      where: { ownerUserId: requesterId, moduleId: null, isActive: !wantArchived },
    });
    let deModulos: typeof sueltos = [];
    const moduloTitulos = new Map<string, string>();
    if (scope === "todos") {
      // Dos queries (módulos propios → sus quizzes) en vez de un filtro
      // por relación: el stub in-memory de los tests no soporta relaciones.
      const modulosPropios = await prisma.modulo.findMany({
        where: { ownerUserId: requesterId, isDeleted: false },
      });
      for (const m of modulosPropios) moduloTitulos.set(m.id, m.titulo);
      if (modulosPropios.length > 0) {
        deModulos = await prisma.quiz.findMany({
          where: { moduleId: { in: modulosPropios.map((m) => m.id) }, isActive: !wantArchived },
        });
      }
    }
    const quizzes = [...sueltos, ...deModulos];

    // Enriquecido con la versión vigente: tipo/materia/#preguntas. El
    // picker viejo ignora los campos extra, así que es aditivo.
    const versionIds = quizzes
      .map((q) => q.currentVersionId)
      .filter((v): v is string => typeof v === "string" && v.length > 0);
    const versions = versionIds.length
      ? await prisma.quizVersion.findMany({ where: { id: { in: versionIds } } })
      : [];
    const settingsByVersion = new Map(versions.map((v) => [v.id, v.settings]));

    const items = quizzes
      .sort((a, b) => String(b.updatedAt ?? "").localeCompare(String(a.updatedAt ?? "")))
      .map((q) => {
        const raw = q.currentVersionId ? settingsByVersion.get(q.currentVersionId) : null;
        const settings = safeJsonParse<Record<string, unknown>>(raw ?? null, {});
        const cuestionario = settings.preguntas as { preguntas?: unknown[] } | undefined;
        return {
          id: q.id,
          title: q.title ?? "Cuestionario sin título",
          updatedAt: q.updatedAt,
          type: typeof settings.type === "string" ? settings.type : "practica",
          // materiaDeclarada (PLAN-Z, quiz suelto) con fallback a la
          // materia derivada del módulo (mergeMateriaIntoSettings).
          materia:
            typeof settings.materiaDeclarada === "string" && settings.materiaDeclarada
              ? settings.materiaDeclarada
              : typeof settings.materia === "string"
                ? settings.materia
                : "",
          cantidadPreguntas: Array.isArray(cuestionario?.preguntas)
            ? cuestionario!.preguntas!.length
            : 0,
          moduleId: q.moduleId ?? null,
          moduleTitle: q.moduleId ? (moduloTitulos.get(q.moduleId) ?? null) : null,
        };
      });
    res.json({ items });
  } catch (e: any) {
    console.error("[GET /api/quizzes]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

// PLAN-CORRECCIONES C2 — cuestionario "suelto": se crea sin módulo desde
// `/plantillas/nueva` cuando el docente arma 2+ preguntas sin haber
// pasado por un módulo. Se edita/reabre con las mismas rutas
// `/api/quizzes/:quizId/*` de arriba (ya toleran módulo ausente). El
// `settings` arranca vacío (type=practica, visibility=publico); las
// preguntas se guardan aparte con el `PUT .../preguntas` de siempre
// (mismo camino que un quiz con módulo, sin duplicar esa lógica acá).
// PLAN-CUESTIONARIOS — `moduleId` opcional: crea el cuestionario YA
// adosado a un módulo propio ("Crear cuestionario" en ModuloEditor).
// Mismo shape que el clon de usar-en-modulo: ownerUserId null (la
// autorización pasa a depender del módulo) y materia heredada del módulo.
modulos.post("/api/quizzes", requireUser, async (req, res) => {
  try {
    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
    if (!isStaffRole(requesterRaw?.role ?? null)) {
      return res.status(403).json({ error: "forbidden" });
    }

    const body = (req.body ?? {}) as { title?: unknown; moduleId?: unknown };
    const title = typeof body.title === "string" && body.title.trim() ? body.title.trim() : null;
    const moduleId =
      typeof body.moduleId === "string" && body.moduleId ? body.moduleId : null;

    let targetModulo: Awaited<ReturnType<typeof prisma.modulo.findFirst>> = null;
    if (moduleId) {
      targetModulo = await prisma.modulo.findFirst({ where: { id: moduleId } });
      if (!targetModulo || targetModulo.isDeleted) {
        return res.status(404).json({ error: "target module not found" });
      }
      if (
        !canEditModuloDirect(targetModulo, {
          _id: requesterId,
          role: requesterRaw?.role,
          schoolId: requesterRaw?.schoolId,
        })
      ) {
        return res.status(403).json({ error: "forbidden on target module" });
      }
    }

    const now = new Date().toISOString();
    const quizId = generateId();
    const versionId = generateId();

    // El `Quiz` se crea PRIMERO: `QuizVersion.quizId` tiene FK a
    // `quizzes.id` (no lo tolera el stub in-memory de los tests, que no
    // valida FKs — sólo se ve contra Postgres real). `currentVersionId`
    // se persiste después, cuando la versión ya existe.
    await prisma.quiz.create({
      data: {
        id: quizId,
        moduleId,
        ownerUserId: moduleId ? null : requesterId,
        title,
        isActive: true,
        currentVersionId: null,
        createdAt: now,
        updatedAt: now,
      },
    });
    const baseSettings: Record<string, unknown> = { type: "practica", visibility: "publico" };
    const settings = targetModulo
      ? mergeMateriaIntoSettings(baseSettings, {
          subject: targetModulo.subject ?? null,
          category: targetModulo.category ?? null,
        })
      : baseSettings;
    await prisma.quizVersion.create({
      data: {
        id: versionId,
        quizId,
        versionNumber: 1,
        settings: JSON.stringify(settings),
        createdAt: now,
        createdBy: requesterId,
      },
    });
    await prisma.quiz.update({
      where: { id: quizId },
      data: { currentVersionId: versionId },
    });

    res.status(201).json({ id: quizId });
  } catch (e: any) {
    console.error("[POST /api/quizzes]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

// PLAN-CORRECCIONES C2 — "usar" un cuestionario (suelto o de otro módulo)
// dentro de un módulo: CLONA el quiz (nuevo id, moduleId del destino,
// copia el `settings` tal cual — las plantillas referenciadas por
// `plantillaId`/`poolId` dentro de `settings.preguntas` NO se duplican,
// siguen siendo las mismas filas de `PlantillaEjercicio` reusadas, mismo
// espíritu que los pools). El quiz origen queda intacto: reusable de
// nuevo en otro módulo más adelante.
modulos.post("/api/quizzes/:quizId/usar-en-modulo", requireUser, async (req, res) => {
  try {
    const quizId = req.params.quizId as string;
    const targetModuleId =
      typeof (req.body as { moduleId?: unknown })?.moduleId === "string"
        ? (req.body as { moduleId: string }).moduleId
        : "";
    if (!targetModuleId) return res.status(400).json({ error: "moduleId is required" });

    const loaded = await loadQuizConModulo(quizId);
    if (!loaded) return res.status(404).json({ error: "quiz not found" });

    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
    if (!canAccessQuiz(loaded, requesterId, requesterRaw)) {
      return res.status(403).json({ error: "forbidden" });
    }

    const targetModulo = await prisma.modulo.findFirst({ where: { id: targetModuleId } });
    if (!targetModulo || targetModulo.isDeleted) {
      return res.status(404).json({ error: "target module not found" });
    }
    if (!canEditModuloDirect(targetModulo, { _id: requesterId, role: requesterRaw?.role, schoolId: requesterRaw?.schoolId })) {
      return res.status(403).json({ error: "forbidden on target module" });
    }

    const now = new Date().toISOString();
    const newQuizId = generateId();
    const newVersionId = generateId();

    // Mismo orden que POST /api/quizzes: el Quiz primero (FK de
    // QuizVersion.quizId), currentVersionId se completa después.
    await prisma.quiz.create({
      data: {
        id: newQuizId,
        moduleId: targetModuleId,
        ownerUserId: null,
        title: loaded.quiz.title ?? null,
        isActive: true,
        currentVersionId: null,
        createdAt: now,
        updatedAt: now,
      },
    });
    // ITEM-22 — mismo bug que WO-BUG (bff8b6f4) pero en este path: copiar
    // `settings` tal cual dejaba la materia del quiz original (a menudo
    // vacía — un "quiz suelto" no tiene módulo del que derivarla) aunque
    // el módulo DESTINO sí tuviera materia. El clon quedaba invisible al
    // filtrar el banco por la materia del módulo al que se lo acababa de
    // agregar. Igual que en duplicar-módulo: derivar del módulo destino.
    const clonedSettings = mergeMateriaIntoSettings(
      loaded.version?.settings,
      { subject: targetModulo.subject ?? null, category: targetModulo.category ?? null },
    );
    await prisma.quizVersion.create({
      data: {
        id: newVersionId,
        quizId: newQuizId,
        versionNumber: 1,
        settings: JSON.stringify(clonedSettings),
        createdAt: now,
        createdBy: requesterId,
      },
    });
    await prisma.quiz.update({
      where: { id: newQuizId },
      data: { currentVersionId: newVersionId },
    });

    res.status(201).json({ id: newQuizId });
  } catch (e: any) {
    console.error("[POST /api/quizzes/:quizId/usar-en-modulo]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

modulos.delete("/api/quizzes/:quizId", requireUser, async (req, res) => {
  try {
    const quizId = req.params.quizId as string;
    const loaded = await loadQuizConModulo(quizId);
    if (!loaded) return res.status(404).json({ error: "quiz not found" });

    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
    if (!canAccessQuiz(loaded, requesterId, requesterRaw)) {
      return res.status(403).json({ error: "forbidden" });
    }

    await prisma.quiz.update({
      where: { id: loaded.quiz.id },
      data: { isActive: false, updatedAt: new Date().toISOString() },
    });
    res.json({ ok: true });
  } catch (e: any) {
    console.error("[DELETE /api/quizzes/:quizId]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

// Archivar cuestionarios — restaurar. Mismo mecanismo que el DELETE de
// arriba (isActive), en la dirección inversa. Mismo chequeo de permiso
// (`canAccessQuiz`) que archivar, para que sólo el dueño/docente con
// acceso pueda revertirlo.
modulos.post("/api/quizzes/:quizId/restaurar", requireUser, async (req, res) => {
  try {
    const quizId = req.params.quizId as string;
    const loaded = await loadQuizConModulo(quizId);
    if (!loaded) return res.status(404).json({ error: "quiz not found" });

    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
    if (!canAccessQuiz(loaded, requesterId, requesterRaw)) {
      return res.status(403).json({ error: "forbidden" });
    }

    await prisma.quiz.update({
      where: { id: loaded.quiz.id },
      data: { isActive: true, updatedAt: new Date().toISOString() },
    });
    res.json({ ok: true });
  } catch (e: any) {
    console.error("[POST /api/quizzes/:quizId/restaurar]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

modulos.get("/api/quizzes/:quizId/preguntas", requireUser, async (req, res) => {
  try {
    const quizId = req.params.quizId as string;
    const loaded = await loadQuizConModulo(quizId);
    if (!loaded) return res.status(404).json({ error: "quiz not found" });

    const requesterRaw = req.user as QuizRequesterRaw;
    const requesterId = resolveRequesterId(requesterRaw);
    if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
    if (!canAccessQuiz(loaded, requesterId, requesterRaw)) {
      return res.status(403).json({ error: "forbidden" });
    }

    const settings = loaded.version?.settings
      ? safeJsonParse<Record<string, unknown>>(loaded.version.settings, {})
      : {};
    const cuestionario = parseCuestionarioPreguntas((settings as any).preguntas);
    res.json(cuestionario);
  } catch (e: any) {
    console.error("[GET /api/quizzes/:quizId/preguntas]", e);
    res.status(500).json({ error: "internal server error" });
  }
});

modulos.put(
  "/api/quizzes/:quizId/preguntas",
  requireUser,
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const quizId = req.params.quizId as string;
      const loaded = await loadQuizConModulo(quizId);
      if (!loaded) return res.status(404).json({ error: "quiz not found" });

      const requesterRaw = req.user as QuizRequesterRaw;
      const requesterId = resolveRequesterId(requesterRaw);
      if (!requesterId) return res.status(401).json({ error: "user not authenticated" });
      if (!canAccessQuiz(loaded, requesterId, requesterRaw)) {
        return res.status(403).json({ error: "forbidden" });
      }
      if (!loaded.version) {
        return res.status(400).json({ error: "el quiz no tiene una versión válida" });
      }

      const parsed = CuestionarioPreguntasInputSchema.parse(req.body);
      const cuestionario = parseCuestionarioPreguntas(parsed);
      // WO — no bloquea el guardado: el docente puede estar armando el
      // cuestionario incrementalmente (agregando relleno todavía). Se
      // informa la validación en la respuesta para el aviso inline del
      // front (criterio de Etapa 2 Tarea 4), mismo espíritu que otros
      // campos "crudos" de `settings` (ver `posiciones`).
      const validacion = validarCuestionarioPreguntas(cuestionario);

      const settings = loaded.version.settings
        ? safeJsonParse<Record<string, unknown>>(loaded.version.settings, {})
        : {};
      const nextSettings = { ...settings, preguntas: cuestionario };
      await prisma.quizVersion.update({
        where: { id: loaded.version.id },
        data: { settings: JSON.stringify(nextSettings) },
      });

      res.json({ cuestionario, validacion });
    } catch (e: any) {
      if (e?.issues) return res.status(400).json({ error: "validation", issues: e.issues });
      console.error("[PUT /api/quizzes/:quizId/preguntas]", e);
      res.status(500).json({ error: "internal server error" });
    }
  }
);
