import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";

export const sync = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── GET /api/sync/estado ────────────────────────────────────
sync.get("/api/sync/estado", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const [pendientesGrouped, snapshots] = await Promise.all([
    prisma.syncQueue.groupBy({
      by: ["tipo"],
      where: { usuarioId: userId, estado: "pendiente" },
      _count: { id: true },
    }),
    prisma.syncSnapshot.findMany({
      where: { usuarioId: userId },
      select: { tipo: true, aulaId: true, version: true, descargadoAt: true },
    }),
  ]);

  const pendientes = pendientesGrouped.map((p) => ({
    tipo: p.tipo,
    total: p._count.id,
  }));

  return res.json({
    pendientes,
    snapshots,
    totalPendiente: pendientes.reduce((acc, p) => acc + p.total, 0),
  });
});

// ── POST /api/sync/push ─────────────────────────────────────
sync.post("/api/sync/push", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { items } = req.body as {
    items?: Array<{
      id: string;
      tipo: string;
      payload: Record<string, unknown>;
      createdAt: string;
    }>;
  };

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "items requeridos" });
  }

  const MAX_ITEMS_PER_PUSH = 100;
  if (items.length > MAX_ITEMS_PER_PUSH) {
    return res.status(400).json({ error: `Máximo ${MAX_ITEMS_PER_PUSH} items por push` });
  }

  const results: Array<{ id: string; ok: boolean; error?: string }> = [];
  const now = new Date().toISOString();

  const TIPOS_PERMITIDOS = new Set([
    "progreso", "quiz_attempt", "economia", "competencia", "mensajes_leidos",
  ]);

  const itemsValidos = items.filter((item) => {
    if (!TIPOS_PERMITIDOS.has(item.tipo)) {
      results.push({ id: item.id, ok: false, error: `tipo no permitido: ${item.tipo}` });
      return false;
    }
    return true;
  });

  for (const item of itemsValidos) {
    try {
      switch (item.tipo) {

        case "progreso": {
          const { moduloId, status, aulaId } = item.payload as Record<string, string>;
          if (!moduloId || !status) throw new Error("payload inválido");

          const existing = await prisma.progresoModulo.findFirst({
            where: { usuarioId: userId, moduloId },
          });

          if ((existing as any)?.status === "completado" && status !== "completado") {
            // Conflicto — registrar y mantener server
            await prisma.syncConflicto.create({
              data: {
                id: genId("conf"),
                usuarioId: userId,
                tipo: "progreso",
                payloadLocal: JSON.stringify(item.payload),
                payloadServer: JSON.stringify(existing),
                resolucion: "server_wins",
                resueltoAt: now,
              },
            });
            results.push({ id: item.id, ok: true });
            break;
          }

          await prisma.progresoModulo.updateMany({
            where: { usuarioId: userId, moduloId },
            data: { status, aulaId, updatedAt: now } as any,
          });
          results.push({ id: item.id, ok: true });
          break;
        }

        case "economia": {
          const { delta, motivo, moneda } = item.payload as Record<string, unknown>;
          if (typeof delta !== "number") throw new Error("delta requerido");

          const MAX_DELTA = 10000;
          if (Math.abs(delta) > MAX_DELTA) {
            results.push({ id: item.id, ok: false, error: "delta fuera de rango permitido" });
            break;
          }
          if (delta < 0) {
            results.push({ id: item.id, ok: false, error: "débitos no permitidos via sync" });
            break;
          }

          await (prisma as any).economiaSaldo?.upsert({
            where: { usuarioId: userId },
            update: { saldo: { increment: delta }, updatedAt: now },
            create: { usuarioId: userId, saldo: delta, updatedAt: now },
          });

          const MAX_SALDO = 1000000;
          const saldoRow = await (prisma as any).economiaSaldo?.findFirst({ where: { usuarioId: userId } });
          if (saldoRow && saldoRow.saldo > MAX_SALDO) {
            await (prisma as any).economiaSaldo?.updateMany({
              where: { usuarioId: userId },
              data: { saldo: MAX_SALDO, updatedAt: now },
            });
          }

          await (prisma as any).economiaTransaccion?.create({
            data: {
              id: genId("tx"),
              usuarioId: userId,
              tipo: "credito",
              monto: delta,
              moneda: moneda ?? "PF",
              motivo: motivo ?? "sync:offline",
              referenciaId: item.id,
              createdAt: item.createdAt ?? now,
              sincronizado: true,
            },
          });

          results.push({ id: item.id, ok: true });
          break;
        }

        case "quiz_attempt": {
          const { quizId, moduleId, answers } = item.payload as Record<string, unknown>;
          if (!quizId) throw new Error("quizId requerido");

          const existing = await prisma.quizAttempt.findFirst({
            where: { userId, quizId: String(quizId), status: { in: ["submitted", "completed"] } },
          });

          if (!existing) {
            await prisma.quizAttempt.create({
              data: {
                userId,
                quizId: String(quizId),
                moduleId: moduleId ? String(moduleId) : undefined,
                answers: answers ?? {},
                score: null,
                maxScore: null,
                status: "pending_review",
                sincronizado: true,
                createdAt: item.createdAt ?? now,
                updatedAt: now,
              } as any,
            });
          }
          results.push({ id: item.id, ok: true });
          break;
        }

        case "competencia": {
          const { quizId, score, maxScore, tiempoSeg, aulaId } =
            item.payload as Record<string, unknown>;

          await prisma.quizCompetencia.createMany({
            data: [{
              id: item.id,
              quizId: String(quizId ?? ""),
              usuarioId: userId,
              attemptId: item.id,
              score: typeof score === "number" ? score : 0,
              maxScore: typeof maxScore === "number" ? maxScore : 0,
              tiempoSeg: typeof tiempoSeg === "number" ? tiempoSeg : 0,
              aulaId: aulaId ? String(aulaId) : null,
              completadoAt: item.createdAt ?? now,
            }],
            skipDuplicates: true,
          });
          results.push({ id: item.id, ok: true });
          break;
        }

        case "mensajes_leidos": {
          const { avisoId } = item.payload as Record<string, string>;
          if (!avisoId) throw new Error("avisoId requerido");

          await prisma.avisoLeido.createMany({
            data: [{ avisoId, usuarioId: userId, leidoAt: item.createdAt ?? now }],
            skipDuplicates: true,
          });
          results.push({ id: item.id, ok: true });
          break;
        }

        default:
          results.push({ id: item.id, ok: false, error: `tipo desconocido: ${item.tipo}` });
      }
    } catch (err) {
      results.push({ id: item.id, ok: false, error: err instanceof Error ? err.message : "error" });
    }
  }

  const ok = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok).length;
  return res.json({ ok, failed, results });
});

// ── GET /api/sync/pull/:aulaId ──────────────────────────────
sync.get("/api/sync/pull/:aulaId", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const aulaId = String(req.params.aulaId);
  const sinceVersion = parseInt(String(req.query.since ?? "0"), 10);

  try {
    // Módulos del aula via ClaseModulo
    const claseModulos = await prisma.claseModulo.findMany({
      where: { claseId: aulaId },
      select: { moduloId: true },
    });
    const moduloIds = claseModulos.map((r) => r.moduloId);

    const modulos = moduloIds.length
      ? await prisma.modulo.findMany({
          where: { id: { in: moduloIds }, isDeleted: { not: true } },
          select: { id: true, titulo: true, descripcion: true, visibility: true, updatedAt: true },
        })
      : [];

    const progreso = await prisma.progresoModulo.findMany({
      where: { usuarioId: userId },
    });

    const saldoRow = await (prisma as any).economiaSaldo?.findFirst({
      where: { usuarioId: userId },
    }) as { saldo?: number } | null;

    // Obtener escuelaId del aula para filtrar avisos
    const aula = await prisma.clase.findFirst({
      where: { id: aulaId },
      select: { escuelaId: true },
    });

    // Avisos no leídos del aula
    let avisos: unknown[] = [];
    if (aula?.escuelaId) {
      const leidosSet = await prisma.avisoLeido.findMany({
        where: { usuarioId: userId },
        select: { avisoId: true },
      });
      const leidosIds = new Set(leidosSet.map((l) => l.avisoId));

      const todosAvisos = await prisma.aviso.findMany({
        where: { escuelaId: aula.escuelaId },
        orderBy: { createdAt: "desc" },
        take: 20,
      });
      avisos = todosAvisos.filter((a) => !leidosIds.has(a.id)).slice(0, 10);
    }

    // Registrar snapshot (upsert por unique [usuarioId, tipo, aulaId])
    const snapshotNow = new Date().toISOString();
    await prisma.syncSnapshot.upsert({
      where: { usuarioId_tipo_aulaId: { usuarioId: userId, tipo: "modulos", aulaId } },
      create: {
        id: genId("snap"),
        usuarioId: userId,
        tipo: "modulos",
        aulaId,
        version: sinceVersion + 1,
        descargadoAt: snapshotNow,
      },
      update: { version: sinceVersion + 1, descargadoAt: snapshotNow },
    });

    return res.json({
      version: sinceVersion + 1,
      modulos,
      progreso: progreso.map((p) => ({
        moduloId: (p as any).moduloId,
        status: (p as any).status,
        updatedAt: (p as any).updatedAt,
      })),
      saldo: saldoRow?.saldo ?? 0,
      avisos,
      descargadoAt: snapshotNow,
    });
  } catch (err) {
    return res.status(500).json({ error: err instanceof Error ? err.message : "error" });
  }
});

// ── GET /api/sync/conflictos ────────────────────────────────
sync.get("/api/sync/conflictos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const items = await prisma.syncConflicto.findMany({
    where: { usuarioId: userId },
    orderBy: { resueltoAt: "desc" },
    take: 20,
  });

  return res.json({ items });
});
