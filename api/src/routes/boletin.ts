import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { requireClassroomScope, isClassroomTeacher } from "../lib/classroom-scope";
import { computeBoletin, type BoletinAttempt } from "../lib/boletin";

export const boletin = Router();

// PLAN-V §3 — boletín de UN aula (= una materia, per el diseño: cada
// aula declara sus propios períodos en §1). La vista que junta VARIAS
// aulas por alumno (§2) es otra sesión; esto es el bloque que consume.
//
// Sólo cuentan las evaluaciones FORMALES (QuizVersion.settings.type ===
// "formal", mismo criterio que ProfesorCalificaciones/quiz-attempts.ts)
// de módulos ASIGNADOS a esta aula — no todo lo que el alumno rindió en
// cualquier lado.
const isFormalSettings = (settingsRaw: string | null | undefined): boolean => {
  if (!settingsRaw) return false;
  try {
    const parsed = JSON.parse(settingsRaw) as { type?: string };
    return parsed.type === "formal";
  } catch {
    return false;
  }
};

const resolveRequesterId = (req: { user?: { id?: string; _id?: { toString?: () => string } | string } }) =>
  req.user?.id ?? (typeof req.user?._id === "string" ? req.user._id : req.user?._id?.toString?.()) ?? null;

boletin.get(
  "/api/aulas/:id/boletin",
  requireUser,
  requireClassroomScope({
    allowMemberRoles: "any",
    allowSchoolMatch: true,
    notFoundMessage: "not found"
  }),
  async (req, res) => {
    const id = req.params.id as string;
    const classroom = res.locals.classroom as {
      createdBy?: string | null;
      teacherId?: string | null;
      teacherOfRecord?: string | null;
      members?: Array<{ userId: string; roleInClass: string }>;
    };
    const requesterId = resolveRequesterId(req);
    const requesterRole = (req as { user?: { role?: string } }).user?.role ?? null;
    const alumnoId =
      typeof req.query.alumnoId === "string" && req.query.alumnoId.trim()
        ? req.query.alumnoId.trim()
        : requesterId;
    if (!alumnoId) return res.status(400).json({ error: "alumnoId requerido" });

    // Ver el boletín de OTRO alumno requiere autoridad docente sobre
    // el aula (dueño, co-titular, o ADMIN). Un alumno/padre sólo ve el
    // suyo (acá sólo cubrimos "el suyo"; padre-ve-el-de-su-hijo es
    // PLAN-U §4, todavía no implementado).
    if (alumnoId !== requesterId && !isClassroomTeacher(classroom, requesterId, requesterRole)) {
      return res.status(403).json({ error: "forbidden" });
    }

    const periodos = await prisma.clasePeriodo.findMany({
      where: { claseId: id },
      orderBy: { orden: "asc" }
    });

    const claseModulos = await prisma.claseModulo.findMany({ where: { claseId: id } });
    const moduleIds = claseModulos.map((m) => m.moduloId);
    if (moduleIds.length === 0) {
      return res.json(computeBoletin([], periodos));
    }
    const quizzes = await prisma.quiz.findMany({ where: { moduleId: { in: moduleIds } } });
    const quizIds = quizzes.map((q) => q.id);
    if (quizIds.length === 0) {
      return res.json(computeBoletin([], periodos));
    }

    const attemptsRaw = await prisma.quizAttempt.findMany({
      where: {
        userId: alumnoId,
        quizId: { in: quizIds },
        status: { in: ["completed", "submitted"] }
      }
    });
    if (attemptsRaw.length === 0) {
      return res.json(computeBoletin([], periodos));
    }

    const versionIds = Array.from(new Set(attemptsRaw.map((a) => a.quizVersionId)));
    const versions = await prisma.quizVersion.findMany({ where: { id: { in: versionIds } } });
    const versionById = new Map(versions.map((v) => [v.id, v]));

    const boletinAttempts: BoletinAttempt[] = attemptsRaw
      .filter((a) => isFormalSettings(versionById.get(a.quizVersionId)?.settings))
      .map((a) => ({ score: a.score ?? null, fecha: a.submittedAt || a.startedAt }));

    res.json(computeBoletin(boletinAttempts, periodos));
  }
);
