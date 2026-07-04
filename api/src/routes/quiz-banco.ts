import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { isStaffRole } from "../lib/authorization";
import { sanitizeQuestionsForStudent } from "../lib/sanitize-questions";

export const quizBanco = Router();

type BancoItem = {
  quizId: string;
  title: string;
  materia?: string;
  tipo: string;
  origen: "admin" | "escuela";
  questionCount: number;
  generatorId?: string;
  previewQuestions: { prompt: string; questionType: string }[];
};

type ModuleQuizQuestion = {
  id: string;
  prompt: string;
  questionType?: string;
  options?: string[];
  answerKey?: string | string[];
  explanation?: string;
  focus?: string | null;
  visualContext?: string;
  toleranciaRelativa?: number;
  unidades?: Record<string, string>;
  datos?: Record<string, unknown>;
  pasos?: string[];
};

function parseJsonSafe<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// GET /api/quizzes/banco
quizBanco.get("/api/quizzes/banco", requireUser, async (req, res) => {
  try {
    const {
      origen = "todos",
      materia,
      q,
      limit = "20",
      offset = "0",
    } = req.query as Record<string, string>;

    const user = req.user as { schoolId?: string | null } | undefined;
    const userSchoolId = typeof user?.schoolId === "string" ? user.schoolId : null;

    const limitNum = Math.min(parseInt(limit, 10) || 20, 100);
    const offsetNum = parseInt(offset, 10) || 0;

    // Fetch modules with matching visibility
    const visibilityFilter: { visibility: string; schoolId: string | null }[] = [];
    if (origen === "admin" || origen === "todos") {
      visibilityFilter.push({ visibility: "publico", schoolId: null });
    }
    if ((origen === "escuela" || origen === "todos") && userSchoolId) {
      visibilityFilter.push({ visibility: "escuela", schoolId: userSchoolId });
    }

    if (visibilityFilter.length === 0) {
      res.json({ items: [], total: 0 });
      return;
    }

    const modulos = await prisma.modulo.findMany({
      where: {
        isDeleted: false,
        OR: visibilityFilter,
      },
      select: { id: true, titulo: true, visibility: true, schoolId: true },
      take: 500,
    });

    const moduloIds = modulos.map((m) => m.id);
    if (moduloIds.length === 0) {
      res.json({ items: [], total: 0 });
      return;
    }

    const quizzes = await prisma.quiz.findMany({
      where: {
        moduleId: { in: moduloIds },
        isActive: true,
        ...(q ? { title: { contains: q, mode: "insensitive" as const } } : {}),
      },
      include: {
        versions: {
          orderBy: { versionNumber: "desc" },
          take: 1,
        },
        modulo: { select: { visibility: true, schoolId: true } },
      },
      take: 1000,
    });

    const moduloMap = new Map(modulos.map((m) => [m.id, m]));

    const items: BancoItem[] = [];

    for (const quiz of quizzes) {
      // WO-BUG-fix — el InMemoryPrisma usado en tests no soporta
      // `include` anidado, así que `quiz.versions` puede venir
      // `undefined`. Fallback a un findMany separado (mismo patrón
      // que el resto del archivo y que `cloneModuloDeep`). En el
      // prisma real con `include` el findMany devuelve [] y usamos
      // el `versions[0]` que vino en el include.
      let version =
        Array.isArray((quiz as { versions?: unknown[] }).versions) &&
        (quiz as { versions?: unknown[] }).versions!.length > 0
          ? (quiz as { versions: { versionNumber?: number; settings?: string | null; questions?: string | null; generatorId?: string | null; count?: number | null; id: string }[] }).versions[0]
          : undefined;
      if (!version) {
        const versions = await prisma.quizVersion.findMany({ where: { quizId: quiz.id } });
        versions.sort((a, b) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0));
        version = versions[0];
      }
      if (!version) continue;

      const settings = parseJsonSafe<Record<string, unknown>>(version.settings ?? null, {});
      const questions = parseJsonSafe<{ prompt?: string; questionType?: string }[]>(
        version.questions ?? null,
        []
      );

      // Filter by search term
      const titleMatch = quiz.title ?? settings.title ?? "(sin título)";
      if (q && !String(titleMatch).toLowerCase().includes(q.toLowerCase())) continue;

      // Filter by materia (stored in settings.materia)
      const versionMateria = String(settings.materia ?? "");
      if (materia && versionMateria && versionMateria !== materia) continue;

      // Filtrado arriba por `moduleId: { in: moduloIds } }` — estos
      // quizzes siempre tienen módulo; el `?? ""` es sólo para el tipo
      // (Quiz.moduleId es nullable desde PLAN-CORRECCIONES C2, por los
      // quizzes "sueltos", que no aparecen en el banco).
      const modulo = moduloMap.get(quiz.moduleId ?? "");
      const origenValue: "admin" | "escuela" =
        modulo?.schoolId ? "escuela" : "admin";

      const previewQuestions = questions.slice(0, 3).map((qItem) => ({
        prompt: String(qItem.prompt ?? ""),
        questionType: String(qItem.questionType ?? "mc"),
      }));

      items.push({
        quizId: quiz.id,
        title: String(titleMatch),
        materia: versionMateria || undefined,
        tipo: String(settings.type ?? "practica"),
        origen: origenValue,
        questionCount: questions.length || (version.count ?? 0),
        generatorId: version.generatorId ?? undefined,
        previewQuestions,
      });
    }

    const total = items.length;
    const paginated = items.slice(offsetNum, offsetNum + limitNum);

    res.json({ items: paginated, total });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});

// GET /api/quizzes/banco/:quizId/questions
quizBanco.get("/api/quizzes/banco/:quizId/questions", requireUser, async (req, res) => {
  try {
    const quizId = Array.isArray(req.params.quizId) ? req.params.quizId[0] : req.params.quizId;
    const user = req.user as { schoolId?: string | null } | undefined;
    const userSchoolId = typeof user?.schoolId === "string" ? user.schoolId : null;

    const quiz = await prisma.quiz.findUnique({ where: { id: quizId } });
    if (!quiz) {
      res.status(404).json({ error: "Quiz not found" });
      return;
    }

    // Traemos version y modulo por separado (mismo patrón que en modulos.ts):
    // el InMemoryPrisma usado por tests no soporta `include` anidado.
    const versions = await prisma.quizVersion.findMany({ where: { quizId } });
    versions.sort((a, b) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0));
    const version = versions[0];
    if (!version) {
      res.status(404).json({ error: "No version found" });
      return;
    }
    const modulo = quiz.moduleId
      ? await prisma.modulo.findFirst({ where: { id: quiz.moduleId } })
      : null;

    const visibility = modulo?.visibility ?? null;
    const moduleSchoolId = modulo?.schoolId ?? null;
    const moduleOwnerId = modulo?.ownerUserId ?? null;
    const isAdmin = visibility === "publico" && moduleSchoolId === null;
    const isEscuela =
      visibility === "escuela" &&
      moduleSchoolId !== null &&
      moduleSchoolId === userSchoolId;

    if (!isAdmin && !isEscuela) {
      res.status(403).json({ error: "Access denied" });
      return;
    }

    // V2-04 — staff y dueño del módulo ven las preguntas intactas; un alumno
    // o parent del mismo colegio recibe la versión sanitizada (canario).
    const userWithRole = user as { role?: string | null; id?: string } | undefined;
    const requesterRole = userWithRole?.role ?? null;
    const requesterId =
      (typeof userWithRole?.id === "string" && userWithRole.id) || null;
    const canSeeAnswers =
      isStaffRole(requesterRole) || (!!requesterId && requesterId === moduleOwnerId);

    const rawQuestions = parseJsonSafe<ModuleQuizQuestion[]>(
      version.questions ?? null,
      []
    );
    const questions = canSeeAnswers
      ? rawQuestions
      : sanitizeQuestionsForStudent(rawQuestions, version.id);
    const title = quiz.title ?? "";

    const response: Record<string, unknown> = { quizId: quiz.id, title, questions };

    if (version.generatorId && version.generatorVersion && version.count != null) {
      const params = parseJsonSafe<Record<string, unknown>>(version.params ?? null, {});
      response.generatorId = version.generatorId;
      response.generatorVersion = version.generatorVersion;
      response.params = params;
      response.count = version.count;
    }

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "internal server error" });
  }
});
