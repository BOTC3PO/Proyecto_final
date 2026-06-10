import express, { Router } from "express";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { ENV } from "../lib/env";
import { assertClassroomWritable } from "../lib/classroom";
import { requireUser } from "../lib/user-auth";
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
  const safeOffset = Number.isNaN(offset) || offset < 0 ? 0 : offset;

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
        where: { id: { in: moduloIds } },
        skip: safeOffset,
        take: limit,
        orderBy: { updatedAt: "desc" },
      })
    ).map(withDefaultStatus);
  } else {
    items = (
      await prisma.modulo.findMany({
        skip: safeOffset,
        take: limit,
        orderBy: { updatedAt: "desc" },
      })
    ).map(withDefaultStatus);
  }

  return res.json({ items, limit, offset });
});

modulos.get("/api/modulos/:id", async (req, res) => {
  try {
    const item = await prisma.modulo.findFirst({
      where: { id: req.params.id as string },
      include: {
        quizzes: {
          where: { isActive: true },
          include: {
            versions: {
              orderBy: { versionNumber: "desc" },
              take: 1,
            },
          },
        },
      },
    });

    if (!item) return res.status(404).json({ error: "not found" });

    const moduleDto: Record<string, unknown> = {
      id: item.id,
      slug: item.slug ?? undefined,
      title: item.titulo,
      description: item.descripcion ?? "",
      visibility: item.visibility,
      schoolId: item.schoolId ?? undefined,
      dependencies: item.dependencies
        ? safeJsonParse(item.dependencies, [] as unknown[])
        : [],
      createdBy: item.ownerUserId ?? "",
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      teoriaId: item.teoriaId ?? undefined,
      quizzes: item.quizzes.map((q) => {
        const v = q.versions[0];
        const settings = v?.settings ? safeJsonParse(v.settings, {} as Record<string, unknown>) : {};
        return {
          id: q.id,
          title: q.title ?? "",
          type: (settings as any).type ?? "practica",
          mode: (settings as any).mode,
          visibility: (settings as any).visibility ?? "publico",
          questions: v?.questions ? safeJsonParse(v.questions, [] as unknown[]) : [],
          generatorId: v?.generatorId ?? undefined,
          generatorVersion: v?.generatorVersion
            ? Number(v.generatorVersion)
            : undefined,
          params: v?.params ? safeJsonParse(v.params, undefined as unknown) : undefined,
          count: v?.count ?? undefined,
          seedPolicy: v?.seedPolicy ?? undefined,
          fixedSeed: v?.fixedSeed ?? undefined,
          composition: (settings as any).composition ?? undefined,
        };
      }),
    };

    res.json(withDefaultStatus(moduleDto));
  } catch (e: any) {
    console.error("[modulos GET :id]", e);
    res.status(500).json({ error: e.message ?? "internal" });
  }
});

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
            settings: JSON.stringify({ type: quiz.type, mode: quiz.mode, visibility: quiz.visibility, materia: parsed.subject, composition: quiz.composition }),
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
