import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";

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
    });

    const moduloIds = modulos.map((m) => m.id);
    if (moduloIds.length === 0) {
      res.json({ items: [], total: 0 });
      return;
    }

    const quizzes = await prisma.quiz.findMany({
      where: { moduleId: { in: moduloIds }, isActive: true },
      include: {
        versions: {
          orderBy: { versionNumber: "desc" },
          take: 1,
        },
        modulo: { select: { visibility: true, schoolId: true } },
      },
    });

    const moduloMap = new Map(modulos.map((m) => [m.id, m]));

    const items: BancoItem[] = [];

    for (const quiz of quizzes) {
      const version = quiz.versions[0];
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

      const modulo = moduloMap.get(quiz.moduleId);
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
