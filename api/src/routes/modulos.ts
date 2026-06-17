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
      | { _id?: { toString?: () => string } | string; id?: string; role?: string | null }
      | undefined;
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
      dependencies: item.dependencies
        ? safeJsonParse(item.dependencies, [] as unknown[])
        : [],
      createdBy: item.ownerUserId ?? "",
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
          timerSegundos: (settings as any).timerSegundos ?? null,
          fullscreenOnStart: (settings as any).fullscreenOnStart === true,
        };
      }),
    };

    res.json(withDefaultStatus(moduleDto));
  } catch (e: any) {
    console.error("[modulos GET :id]", e);
    res.status(500).json({ error: e.message ?? "internal" });
  }
});

/**
 * POST /api/modulos/:id/duplicar — Tarea 19.
 *
 * Clona un módulo existente y devuelve el nuevo id. Solo el dueño
 * del módulo o staff pueden duplicarlo. La copia:
 *  - tiene un id nuevo (UUID)
 *  - mantiene titulo + " (copia)"
 *  - mantiene visibilidad, schoolId, descripcion, teoriaId, tuesdayDocId,
 *    libroId, defaultQuestionCount, isDeleted (false)
 *  - arranca con `dependencies: []` (la consigna pide "sin dependencias")
 *  - NO se asigna a ninguna aula (no se crea fila en clase_modulos)
 *  - ownerUserId = solicitante
 *  - clona tambien sus quizzes activos y la ultima quizVersion de cada
 *    uno, con ids regenerados pero conservando la config (type, mode,
 *    visibility, questions, generatorId, params, count, seedPolicy,
 *    fixedSeed, settings, composition).
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

      // Solo el dueño del modulo o staff.
      if (source.ownerUserId !== requesterId && !isStaffRole(requesterRole)) {
        return res.status(403).json({ error: "forbidden" });
      }

      const newId = generateId();
      const now = new Date().toISOString();
      const nowDate = new Date();

      await prisma.$transaction(async (tx) => {
        // Clonar el modulo sin dependencias y sin slug (el slug es
        // @unique y se conserva el original solo si no se setea nuevo).
        await tx.modulo.create({
          data: {
            id: newId,
            slug: null,
            titulo: `${source.titulo} (copia)`,
            descripcion: source.descripcion ?? null,
            visibility: source.visibility,
            schoolId: source.schoolId,
            ownerUserId: requesterId,
            teoriaId: source.teoriaId,
            tuesdayDocId: source.tuesdayDocId,
            libroId: source.libroId,
            defaultQuestionCount: source.defaultQuestionCount,
            dependencies: null, // explicitamente vacias (consigna).
            isDeleted: false,
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
              createdBy: requesterId,
            },
          });
          await tx.quiz.update({
            where: { id: newQuizId },
            data: { currentVersionId: newVersionId },
          });
        }
      });

      // Auditoria fuera de la transaccion (no bloquea si falla).
      await recordAuditLog({
        actorId: requesterId,
        action: "modulo.duplicate",
        targetType: "modulo",
        targetId: newId,
        metadata: { sourceId, sourceOwner: source.ownerUserId ?? null },
      });

      res.status(201).json({
        id: newId,
        moduleId: newId,
        sourceId,
        createdAt: nowDate.toISOString(),
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
      visibility: parsed.visibility,
      schoolId: parsed.schoolId ?? null,
      ownerUserId: parsed.createdBy,
      dependencies: parsed.dependencies.length ? JSON.stringify(parsed.dependencies) : null,
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
              timerSegundos: quiz.timerSegundos === undefined ? null : quiz.timerSegundos,
              fullscreenOnStart: quiz.fullscreenOnStart === true
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
    if (parsed.visibility !== undefined) updateData.visibility = parsed.visibility;
    if (parsed.schoolId !== undefined) updateData.schoolId = parsed.schoolId ?? null;
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
        // F4-03 — toggle "ocultar puntos al alumno". Se persiste en
        // `settings.ocultarPuntos`. Default false.
        ocultarPuntos: q.ocultarPuntos === true,
        // F4-04 — timer per-cuestionario (segundos). null = sin timer.
        timerSegundos: q.timerSegundos === undefined ? null : q.timerSegundos,
        // F4-04 — activar pantalla completa al iniciar el intento.
        fullscreenOnStart: q.fullscreenOnStart === true,
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
    await applyModuleUpdate(req.params.id as string, parsed as Record<string, any>, existing);
    res.json({ ok: true });
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
    await applyModuleUpdate(req.params.id as string, parsed as Record<string, any>, existing);
    res.json({ ok: true });
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
