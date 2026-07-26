/**
 * PLAN-roles-v3 C — cola de revisión POSTERIOR de la escuela.
 *
 * No es un gate: el material se publica al toque y esto es la lista de lo
 * subido últimamente, donde el admin de escuela (o el directivo) puede
 * bajar algo. La escuela ya conoce a sus docentes — no es contenido de
 * desconocidos como la cola pública de `/admin/plantillas-moderacion`, que
 * sí es aprobación previa y sigue siendo decisión de plataforma.
 *
 * Alcance: cuestionarios y plantillas. `Quiz` no tiene escuela propia, así
 * que se resuelve por el dueño; `PlantillaEjercicio` sí tiene `schoolId`.
 */
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { recordAuditLog } from "../lib/audit-log";

export const revisionEscuela = Router();

type ReqUser = { id?: string; role?: string; roles?: string[]; schoolId?: string | null };

/** Admin de escuela o directivo, siempre acotado a SU escuela. */
const escuelaDelRevisor = (user: ReqUser | undefined): string | null => {
  if (!hasRole(user, "ADMIN_ESCUELA") && !hasRole(user, "DIRECTIVO") && !hasRole(user, "ADMIN")) return null;
  return user?.schoolId ?? null;
};

const usuariosDeLaEscuela = async (escuelaId: string): Promise<string[]> => {
  const membresias = await prisma.membresia.findMany({ where: { escuelaId, estado: "activa" } });
  return [...new Set(membresias.map((m) => m.usuarioId))];
};

// GET /api/escuela/revision — lo subido últimamente en mi escuela.
revisionEscuela.get("/api/escuela/revision", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = escuelaDelRevisor(user);
  if (!escuelaId) return res.status(403).json({ error: "sin permiso de revisión" });

  const miembros = await usuariosDeLaEscuela(escuelaId);
  const quizzes = miembros.length
    ? await prisma.quiz.findMany({
        where: { ownerUserId: { in: miembros }, isActive: true },
        orderBy: { updatedAt: "desc" },
        take: 50
      })
    : [];
  const plantillas = await prisma.plantillaEjercicio.findMany({
    where: { schoolId: escuelaId, visibility: { not: "privada" } },
    orderBy: { updatedAt: "desc" },
    take: 50
  });

  return res.json({
    quizzes: quizzes.map((q) => ({
      id: q.id,
      titulo: q.title ?? "",
      autorId: q.ownerUserId,
      updatedAt: q.updatedAt
    })),
    plantillas: plantillas.map((p) => ({
      id: p.id,
      titulo: p.nombre,
      autorId: p.ownerUserId,
      visibility: p.visibility,
      updatedAt: p.updatedAt
    }))
  });
});

/** Bajar contenido: no se borra, se saca de circulación y queda auditado. */
const ocultar = async (
  req: { user?: unknown; params: { id?: string }; body?: { motivo?: unknown } },
  res: { status: (n: number) => { json: (b: unknown) => unknown }; json: (b: unknown) => unknown },
  tipo: "quiz" | "plantilla"
) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = escuelaDelRevisor(user);
  if (!escuelaId) return res.status(403).json({ error: "sin permiso de revisión" });
  const id = req.params.id as string;
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo : null;

  if (tipo === "plantilla") {
    const fila = await prisma.plantillaEjercicio.findFirst({ where: { id } });
    if (!fila) return res.status(404).json({ error: "no encontrada" });
    if (fila.schoolId !== escuelaId) {
      return res.status(403).json({ error: "no es de tu escuela", code: "FUERA_DE_ALCANCE" });
    }
    await prisma.plantillaEjercicio.update({
      where: { id },
      data: { visibility: "privada", updatedAt: new Date().toISOString() }
    });
  } else {
    const fila = await prisma.quiz.findFirst({ where: { id } });
    if (!fila) return res.status(404).json({ error: "no encontrado" });
    const miembros = await usuariosDeLaEscuela(escuelaId);
    if (!fila.ownerUserId || !miembros.includes(fila.ownerUserId)) {
      return res.status(403).json({ error: "no es de tu escuela", code: "FUERA_DE_ALCANCE" });
    }
    await prisma.quiz.update({
      where: { id },
      data: { isActive: false, updatedAt: new Date().toISOString() }
    });
  }

  await recordAuditLog({
    actorId: user?.id ?? "desconocido",
    action: `revision.${tipo}_ocultado`,
    targetType: tipo === "quiz" ? "Quiz" : "PlantillaEjercicio",
    targetId: id,
    metadata: { escuelaId, motivo }
  });
  return res.json({ ok: true });
};

revisionEscuela.post("/api/escuela/revision/quiz/:id/ocultar", requireUser, (req, res) =>
  ocultar(req as never, res as never, "quiz")
);
revisionEscuela.post("/api/escuela/revision/plantilla/:id/ocultar", requireUser, (req, res) =>
  ocultar(req as never, res as never, "plantilla")
);
