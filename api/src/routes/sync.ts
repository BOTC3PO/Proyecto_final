import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { getDb } from "../lib/db";

export const sync = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── GET /api/sync/estado ────────────────────────────────────
// El cliente consulta qué tiene pendiente de sincronizar
sync.get("/api/sync/estado", requireUser, (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const db = openContentDb();

  const pendientes = db.prepare(`
    SELECT tipo, COUNT(*) as total
    FROM sync_queue
    WHERE usuario_id = ? AND estado = 'pendiente'
    GROUP BY tipo
  `).all(userId) as Array<{ tipo: string; total: number }>;

  const snapshots = db.prepare(`
    SELECT tipo, aula_id, version, descargado_at
    FROM sync_snapshots
    WHERE usuario_id = ?
  `).all(userId) as Array<{
    tipo: string; aula_id: string | null;
    version: number; descargado_at: string;
  }>;

  return res.json({
    pendientes,
    snapshots,
    totalPendiente: pendientes.reduce((acc, p) => acc + p.total, 0),
  });
});

// ── POST /api/sync/push ─────────────────────────────────────
// El cliente envía operaciones pendientes al servidor
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

  const results: Array<{
    id: string;
    ok: boolean;
    error?: string;
  }> = [];

  const mongoDB = await getDb();
  const sqliteDb = openContentDb();
  const now = new Date().toISOString();

  for (const item of items) {
    try {
      switch (item.tipo) {

        case "progreso": {
          const { moduloId, status, aulaId } =
            item.payload as Record<string, string>;
          if (!moduloId || !status) throw new Error("payload inválido");

          // Server wins si ya está completado
          const existing = await mongoDB
            .collection("progreso_modulos")
            .findOne({ usuarioId: userId, moduloId });

          if (existing?.status === "completado" && status !== "completado") {
            // Conflicto — registrar y mantener server
            sqliteDb.prepare(`
              INSERT OR IGNORE INTO sync_conflictos
                (id, usuario_id, tipo, payload_local,
                 payload_server, resolucion, resuelto_at)
              VALUES (?, ?, 'progreso', ?, ?, 'server_wins', ?)
            `).run(
              genId("conf"),
              userId,
              JSON.stringify(item.payload),
              JSON.stringify(existing),
              now
            );
            results.push({ id: item.id, ok: true });
            break;
          }

          await mongoDB.collection("progreso_modulos").updateOne(
            { usuarioId: userId, moduloId },
            { $set: { status, aulaId, updatedAt: now } },
            { upsert: true }
          );
          results.push({ id: item.id, ok: true });
          break;
        }

        case "economia": {
          const { delta, motivo, moneda } =
            item.payload as Record<string, unknown>;
          if (typeof delta !== "number") throw new Error("delta requerido");

          // Obtener saldo actual
          const saldoDoc = await mongoDB
            .collection("economia_saldos")
            .findOne({ usuarioId: userId }) as { saldo?: number } | null;

          const saldoActual = saldoDoc?.saldo ?? 0;
          const nuevoSaldo = Math.max(0, saldoActual + (delta as number));

          await mongoDB.collection("economia_saldos").updateOne(
            { usuarioId: userId },
            { $set: { saldo: nuevoSaldo, updatedAt: now } },
            { upsert: true }
          );

          await mongoDB.collection("economia_transacciones").insertOne({
            id: genId("tx"),
            usuarioId: userId,
            tipo: delta > 0 ? "credito" : "debito",
            monto: Math.abs(delta as number),
            moneda: moneda ?? "PF",
            motivo: motivo ?? "sync:offline",
            referenciaId: item.id,
            createdAt: item.createdAt ?? now,
            sincronizado: true,
          });

          results.push({ id: item.id, ok: true });
          break;
        }

        case "quiz_attempt": {
          const { quizId, moduleId, answers, score, maxScore } =
            item.payload as Record<string, unknown>;
          if (!quizId) throw new Error("quizId requerido");

          // No sobrescribir si ya existe un intento completado
          const existing = await mongoDB
            .collection("quiz_attempts")
            .findOne({
              userId,
              quizId: String(quizId),
              status: { $in: ["submitted", "completed"] }
            });

          if (!existing) {
            await mongoDB.collection("quiz_attempts").insertOne({
              userId,
              quizId: String(quizId),
              moduleId: moduleId ? String(moduleId) : undefined,
              answers: answers ?? {},
              score: typeof score === "number" ? score : 0,
              maxScore: typeof maxScore === "number" ? maxScore : 0,
              status: "submitted",
              sincronizado: true,
              createdAt: item.createdAt ?? now,
              updatedAt: now,
            });
          }

          results.push({ id: item.id, ok: true });
          break;
        }

        case "competencia": {
          const { quizId, score, maxScore, tiempoSeg, aulaId } =
            item.payload as Record<string, unknown>;

          sqliteDb.prepare(`
            INSERT OR IGNORE INTO quiz_competencia
              (id, quiz_id, usuario_id, attempt_id,
               score, max_score, tiempo_seg,
               aula_id, completado_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          `).run(
            item.id,
            String(quizId ?? ""),
            userId,
            item.id,
            typeof score === "number" ? score : 0,
            typeof maxScore === "number" ? maxScore : 0,
            typeof tiempoSeg === "number" ? tiempoSeg : 0,
            aulaId ? String(aulaId) : null,
            item.createdAt ?? now
          );

          results.push({ id: item.id, ok: true });
          break;
        }

        case "mensajes_leidos": {
          const { avisoId } = item.payload as Record<string, string>;
          if (!avisoId) throw new Error("avisoId requerido");

          sqliteDb.prepare(`
            INSERT OR IGNORE INTO avisos_leidos
              (aviso_id, usuario_id, leido_at)
            VALUES (?, ?, ?)
          `).run(avisoId, userId, item.createdAt ?? now);

          results.push({ id: item.id, ok: true });
          break;
        }

        default:
          results.push({
            id: item.id,
            ok: false,
            error: `tipo desconocido: ${item.tipo}`
          });
      }
    } catch (err) {
      results.push({
        id: item.id,
        ok: false,
        error: err instanceof Error ? err.message : "error"
      });
    }
  }

  const ok = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok).length;

  return res.json({ ok, failed, results });
});

// ── GET /api/sync/pull/:aulaId ──────────────────────────────
// El cliente descarga lo que necesita para trabajar offline
sync.get("/api/sync/pull/:aulaId", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { aulaId } = req.params;

  // Version que ya tiene el cliente (para delta sync)
  const sinceVersion = parseInt(
    String(req.query.since ?? "0"), 10
  );

  try {
    const mongoDB = await getDb();
    const sqliteDb = openContentDb();

    // Módulos del aula
    const moduloIds = (sqliteDb.prepare(`
      SELECT modulo_id FROM clase_modulos WHERE clase_id = ?
    `).all(aulaId) as Array<{ modulo_id: string }>)
      .map((r) => r.modulo_id);

    const modulos = moduloIds.length
      ? await mongoDB.collection("modulos").find({
          id: { $in: moduloIds },
          isDeleted: { $ne: true },
        }).project({
          id: 1, title: 1, description: 1,
          subject: 1, category: 1,
          theoryBlocks: 1, theoryItems: 1,
          quizzes: 1, dependencies: 1,
          visibility: 1, updatedAt: 1,
        }).toArray()
      : [];

    // Progreso actual del alumno
    const progreso = await mongoDB
      .collection("progreso_modulos")
      .find({ usuarioId: userId })
      .toArray();

    // Saldo de economía
    const saldo = await mongoDB
      .collection("economia_saldos")
      .findOne({ usuarioId: userId }) as { saldo?: number } | null;

    // Avisos no leídos del aula
    const avisos = sqliteDb.prepare(`
      SELECT a.* FROM avisos a
      WHERE a.escuela_id = (
        SELECT escuela_id FROM clases WHERE id = ? LIMIT 1
      )
      AND a.id NOT IN (
        SELECT aviso_id FROM avisos_leidos WHERE usuario_id = ?
      )
      ORDER BY a.created_at DESC
      LIMIT 10
    `).all(aulaId, userId);

    // Registrar snapshot
    const snapshotNow = new Date().toISOString();
    sqliteDb.prepare(`
      INSERT OR REPLACE INTO sync_snapshots
        (id, usuario_id, tipo, aula_id, version, descargado_at)
      VALUES (?, ?, 'modulos', ?, ?, ?)
    `).run(
      genId("snap"),
      userId,
      aulaId,
      sinceVersion + 1,
      snapshotNow
    );

    return res.json({
      version: sinceVersion + 1,
      modulos,
      progreso: progreso.map((p) => ({
        moduloId: p.moduloId,
        status: p.status,
        updatedAt: p.updatedAt,
      })),
      saldo: saldo?.saldo ?? 0,
      avisos,
      descargadoAt: snapshotNow,
    });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error"
    });
  }
});

// ── GET /api/sync/conflictos ────────────────────────────────
// Ver conflictos pendientes (para admin o profesor)
sync.get("/api/sync/conflictos", requireUser, (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const db = openContentDb();
  const items = db.prepare(`
    SELECT * FROM sync_conflictos
    WHERE usuario_id = ?
    ORDER BY resuelto_at DESC
    LIMIT 20
  `).all(userId);

  return res.json({ items });
});
