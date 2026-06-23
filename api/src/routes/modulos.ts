import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { ENV } from "../lib/env";
import { assertClassroomWritable } from "../lib/classroom";
import { requireUser } from "../lib/user-auth";
import { isStaffRole } from "../lib/authorization";
import { recordAuditLog } from "../lib/audit-log";
import { sanitizeQuestionsForStudent } from "../lib/sanitize-questions";
import { ModuleSchema } from "../schema/modulo";

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
  const requesterId =
    mine && req.user
      ? (typeof req.user._id === "string"
          ? req.user._id
          : (req.user._id as { toString?: () => string })?.toString?.() ?? null)
      : null;

  let items;
  if (aulaId) {
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
          ...(mine && requesterId ? { ownerUserId: requesterId } : {}),
        },
        skip: safeOffset,
        take: limit,
        orderBy: { updatedAt: "desc" },
      })
    ).map(withDefaultStatus);
  } else {
    items = (
      await prisma.modulo.findMany({
        where: mine && requesterId ? { ownerUserId: requesterId } : {},
        skip: safeOffset,
        take: limit,
        orderBy: { updatedAt: "desc" },
      })
    ).map(withDefaultStatus);
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
      schoolId: item.schoolId ?? undefined,
      // WO-3 — escala de notas (módulo). Se devuelve parseada; ausente = el
      // front/grade-path aplican el default histórico.
      scoringConfig: item.scoringConfig
        ? safeJsonParse(item.scoringConfig, undefined as unknown)
        : undefined,
      dependencies: item.dependencies
        ? safeJsonParse(item.dependencies, [] as unknown[])
        : [],
      createdBy: item.ownerUserId ?? "",
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
          settings: lastVersion.settings,
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
            title: quiz.title,
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
            settings: JSON.stringify({
              type: quiz.type,
              mode: quiz.mode,
              visibility: quiz.visibility,
              materia: parsed.subject,
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
              preguntasPorPagina: quiz.preguntasPorPagina
            }),
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
  existing: { visibility: string; schoolId: string | null; dependencies: string | null },
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
      const settings = {
        type: q.type ?? "practica",
        mode: q.mode,
        visibility: q.visibility ?? "publico",
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
        // F4-03 — toggle "ocultar puntos al alumno". Se persiste en
        // `settings.ocultarPuntos`. Default false.
        ocultarPuntos: q.ocultarPuntos === true,
        // F4-04 — timer per-cuestionario (segundos). null = sin timer.
        timerSegundos: q.timerSegundos === undefined ? null : q.timerSegundos,
        // F4-04 — activar pantalla completa al iniciar el intento.
        fullscreenOnStart: q.fullscreenOnStart === true,
        // WO-9 — modo de presentación + tamaño de página.
        modoPresentacion: q.modoPresentacion,
        preguntasPorPagina: q.preguntasPorPagina,
      };
      const seedPolicyInt = q.seedPolicy ? parseInt(String(q.seedPolicy), 10) : 0;

      const matched = q.id ? existingQuizzes.find((eq) => eq.id === q.id) : undefined;

      if (matched) {
        const latestVersion = matched.versions[0];
        const newVersionNum = (latestVersion?.versionNumber ?? 0) + 1;
        const newVersionId = `qv-${matched.id}-${newVersionNum}-${Date.now()}`;

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
            title: q.title ?? "",
            isActive: true,
            currentVersionId: newVersionId,
            updatedAt: now,
          },
        });
      } else {
        const newQuizId =
          q.id ?? `qz-${moduleId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const newVersionId = `qv-${newQuizId}-1`;

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
