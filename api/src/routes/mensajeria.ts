import { Router } from "express";
import { openContentDb } from "../lib/db-open";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";

export const mensajeria = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// ── Verificar que dos usuarios son de la misma escuela ──────
async function mismaEscuela(
  userAId: string,
  userBId: string
): Promise<{ ok: boolean; escuelaId?: string }> {
  const [userA, userB] = await Promise.all([
    prisma.usuario.findFirst({
      where: { OR: [{ id: userAId }], isDeleted: { not: true } },
      select: { escuelaId: true },
    }),
    prisma.usuario.findFirst({
      where: { OR: [{ id: userBId }], isDeleted: { not: true } },
      select: { escuelaId: true },
    }),
  ]);
  if (!userA || !userB) return { ok: false };
  const escA = String(userA.escuelaId ?? "");
  const escB = String(userB.escuelaId ?? "");
  if (!escA || !escB || escA !== escB) return { ok: false };
  return { ok: true, escuelaId: escA };
}

// ════════════════════════════════════════════════════════════
// MENSAJES DIRECTOS
// ════════════════════════════════════════════════════════════

// GET /api/mensajeria/hilos
// Lista de hilos del usuario autenticado
mensajeria.get("/api/mensajeria/hilos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const db = openContentDb();
  const hilos = db.prepare(`
    SELECT * FROM hilos
    WHERE (usuario_a = ? OR usuario_b = ?)
      AND escuela_id = ?
    ORDER BY ultimo_at DESC
    LIMIT 30
  `).all(userId, userId, schoolId ?? "") as Array<{
    id: string; escuela_id: string;
    usuario_a: string; usuario_b: string;
    ultimo_msg: string | null; ultimo_at: string | null;
    no_leidos_a: number; no_leidos_b: number;
    created_at: string;
  }>;

  // Enriquecer con nombres del otro participante
  const otroIds = hilos.map((h) =>
    h.usuario_a === userId ? h.usuario_b : h.usuario_a
  );

  try {
    const usuarios = otroIds.length
      ? await prisma.usuario.findMany({
          where: {
            id: { in: otroIds },
            isDeleted: { not: true },
          },
          select: { id: true, fullName: true, username: true, role: true },
        })
      : [];

    const usuarioMap = new Map(
      usuarios.map((u) => [
        String(u.id ?? ""),
        {
          nombre: String(u.fullName ?? u.username ?? "Usuario"),
          username: String(u.username ?? ""),
          role: String(u.role ?? ""),
        },
      ])
    );

    const items = hilos.map((h) => {
      const otroId = h.usuario_a === userId ? h.usuario_b : h.usuario_a;
      const otro = usuarioMap.get(otroId);
      const noLeidos = h.usuario_a === userId
        ? h.no_leidos_a : h.no_leidos_b;
      return {
        id: h.id,
        otroId,
        otroNombre: otro?.nombre ?? otroId,
        otroUsername: otro?.username ?? "",
        otroRol: otro?.role ?? "",
        ultimoMsg: h.ultimo_msg,
        ultimoAt: h.ultimo_at,
        noLeidos,
      };
    });

    return res.json({ items });
  } catch {
    return res.json({ items: [] });
  }
});

// GET /api/mensajeria/hilos/:hiloId
// Mensajes de un hilo con paginación
mensajeria.get("/api/mensajeria/hilos/:hiloId",
  requireUser, (req, res) => {
    const userId = getId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const db = openContentDb();
    const hilo = db.prepare(
      "SELECT * FROM hilos WHERE id = ?"
    ).get(req.params.hiloId) as {
      id: string; usuario_a: string; usuario_b: string;
      escuela_id: string;
    } | undefined;

    if (!hilo) return res.status(404).json({ error: "hilo no encontrado" });
    if (hilo.usuario_a !== userId && hilo.usuario_b !== userId) {
      return res.status(403).json({ error: "sin acceso" });
    }

    const mensajes = db.prepare(`
      SELECT * FROM mensajes_directos
      WHERE hilo_id = ?
      ORDER BY created_at ASC
      LIMIT 50
    `).all(req.params.hiloId);

    // Marcar como leídos
    const campo = hilo.usuario_a === userId
      ? "no_leidos_a" : "no_leidos_b";
    db.prepare(`
      UPDATE hilos SET ${campo} = 0 WHERE id = ?
    `).run(req.params.hiloId);

    db.prepare(`
      UPDATE mensajes_directos
      SET leido = 1
      WHERE hilo_id = ? AND sender_id != ?
    `).run(req.params.hiloId, userId);

    return res.json({ hilo, mensajes });
  }
);

// POST /api/mensajeria/hilos
// Iniciar o continuar un hilo con otro usuario
mensajeria.post("/api/mensajeria/hilos", requireUser,
  async (req, res) => {
    const userId = getId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const { destinatarioId, body } = req.body as Record<string, unknown>;
    if (!destinatarioId || !body || typeof body !== "string" || !body.trim()) {
      return res.status(400).json({ error: "destinatarioId y body requeridos" });
    }

    // Verificar misma escuela
    const check = await mismaEscuela(userId, String(destinatarioId));
    if (!check.ok) {
      return res.status(403).json({
        error: "Solo podés enviar mensajes a miembros de tu escuela."
      });
    }

    const db = openContentDb();
    const now = new Date().toISOString();
    const escuelaId = check.escuelaId!;

    // Buscar hilo existente (en cualquier orden)
    let hilo = db.prepare(`
      SELECT * FROM hilos
      WHERE escuela_id = ?
        AND ((usuario_a = ? AND usuario_b = ?)
          OR (usuario_a = ? AND usuario_b = ?))
    `).get(
      escuelaId, userId, String(destinatarioId),
      String(destinatarioId), userId
    ) as { id: string; usuario_a: string } | undefined;

    if (!hilo) {
      // Crear hilo nuevo
      const hiloId = genId("hilo");
      db.prepare(`
        INSERT INTO hilos
          (id, escuela_id, usuario_a, usuario_b,
           ultimo_msg, ultimo_at, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).run(
        hiloId, escuelaId, userId, String(destinatarioId),
        body.trim().slice(0, 80), now, now
      );
      hilo = { id: hiloId, usuario_a: userId };
    }

    // Insertar mensaje
    const msgId = genId("msg");
    db.prepare(`
      INSERT INTO mensajes_directos
        (id, hilo_id, sender_id, body, leido, created_at)
      VALUES (?, ?, ?, ?, 0, ?)
    `).run(msgId, hilo.id, userId, body.trim(), now);

    // Actualizar preview y no_leidos del receptor
    const campoNoLeidos = hilo.usuario_a === userId
      ? "no_leidos_b" : "no_leidos_a";
    db.prepare(`
      UPDATE hilos
      SET ultimo_msg = ?, ultimo_at = ?,
          ${campoNoLeidos} = ${campoNoLeidos} + 1
      WHERE id = ?
    `).run(body.trim().slice(0, 80), now, hilo.id);

    return res.status(201).json({ hiloId: hilo.id, msgId, ok: true });
  }
);

// GET /api/mensajeria/no-leidos
// Total de mensajes no leídos del usuario
mensajeria.get("/api/mensajeria/no-leidos", requireUser, (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  if (!userId) return res.status(401).json({ total: 0 });

  const db = openContentDb();
  const rowA = db.prepare(`
    SELECT COALESCE(SUM(no_leidos_a), 0) as total
    FROM hilos
    WHERE usuario_a = ? AND escuela_id = ?
  `).get(userId, schoolId ?? "") as { total: number };

  const rowB = db.prepare(`
    SELECT COALESCE(SUM(no_leidos_b), 0) as total
    FROM hilos
    WHERE usuario_b = ? AND escuela_id = ?
  `).get(userId, schoolId ?? "") as { total: number };

  const totalAvisos = db.prepare(`
    SELECT COUNT(*) as total
    FROM avisos a
    WHERE a.escuela_id = ?
      AND a.id NOT IN (
        SELECT aviso_id FROM avisos_leidos WHERE usuario_id = ?
      )
  `).get(schoolId ?? "", userId) as { total: number };

  return res.json({
    mensajes: (rowA.total ?? 0) + (rowB.total ?? 0),
    avisos: totalAvisos.total ?? 0,
    total: (rowA.total ?? 0) + (rowB.total ?? 0) + (totalAvisos.total ?? 0),
  });
});

// ════════════════════════════════════════════════════════════
// AVISOS INSTITUCIONALES
// ════════════════════════════════════════════════════════════

// GET /api/mensajeria/avisos
// Avisos para el usuario según su rol y escuela
mensajeria.get("/api/mensajeria/avisos", requireUser, (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  const role = getRole(req as never);
  if (!userId || !schoolId) return res.json({ items: [] });

  const db = openContentDb();

  // Determinar qué destinos aplican para este usuario
  const destinosValidos: string[] = ["todos"];
  if (role === "USER") destinosValidos.push("alumnos");
  if (role === "TEACHER") destinosValidos.push("profesores");
  if (role === "PARENT") destinosValidos.push("padres");
  if (role === "DIRECTIVO") destinosValidos.push("profesores", "padres");

  const placeholders = destinosValidos.map(() => "?").join(",");
  const avisos = db.prepare(`
    SELECT a.*,
      CASE WHEN al.aviso_id IS NOT NULL THEN 1 ELSE 0 END as leido
    FROM avisos a
    LEFT JOIN avisos_leidos al
      ON al.aviso_id = a.id AND al.usuario_id = ?
    WHERE a.escuela_id = ?
      AND a.destino IN (${placeholders})
    ORDER BY a.created_at DESC
    LIMIT 20
  `).all(userId, schoolId, ...destinosValidos);

  return res.json({ items: avisos });
});

// POST /api/mensajeria/avisos
// Crear aviso — solo DIRECTIVO o TEACHER
mensajeria.post("/api/mensajeria/avisos", requireUser,
  (req, res) => {
    const userId = getId(req as never);
    const schoolId = getSchoolId(req as never);
    const role = getRole(req as never);

    if (!userId || !schoolId) {
      return res.status(401).json({ error: "no autenticado" });
    }
    if (role !== "DIRECTIVO" && role !== "TEACHER" && role !== "ADMIN") {
      return res.status(403).json({
        error: "Solo directivos y profesores pueden crear avisos."
      });
    }

    const { titulo, cuerpo, destino, aulaId } =
      req.body as Record<string, unknown>;

    if (!titulo || !cuerpo || typeof titulo !== "string" ||
        typeof cuerpo !== "string") {
      return res.status(400).json({ error: "titulo y cuerpo requeridos" });
    }

    const destinosValidos = [
      "todos", "padres", "alumnos", "profesores"
    ];
    const destinoFinal = typeof destino === "string" &&
      destinosValidos.includes(destino)
        ? destino : "todos";

    const db = openContentDb();
    const id = genId("aviso");
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO avisos
        (id, escuela_id, autor_id, autor_rol, titulo, cuerpo,
         destino, aula_id, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id, schoolId, userId, role ?? "",
      titulo.trim(), cuerpo.trim(), destinoFinal,
      typeof aulaId === "string" ? aulaId : null,
      now
    );

    return res.status(201).json({ id, ok: true });
  }
);

// POST /api/mensajeria/avisos/:id/leer
// Marcar aviso como leído
mensajeria.post("/api/mensajeria/avisos/:id/leer",
  requireUser, (req, res) => {
    const userId = getId(req as never);
    if (!userId) return res.status(401).json({ error: "no autenticado" });

    const db = openContentDb();
    db.prepare(`
      INSERT OR IGNORE INTO avisos_leidos (aviso_id, usuario_id, leido_at)
      VALUES (?, ?, ?)
    `).run(req.params.id, userId, new Date().toISOString());

    return res.json({ ok: true });
  }
);

// GET /api/mensajeria/usuarios
// Buscar usuarios de la misma escuela para iniciar conversación
mensajeria.get("/api/mensajeria/usuarios", requireUser,
  async (req, res) => {
    const userId = getId(req as never);
    const schoolId = getSchoolId(req as never);
    if (!userId || !schoolId) return res.json({ items: [] });

    const q = typeof req.query.q === "string"
      ? req.query.q.trim() : "";

    try {
      const whereFilter: Record<string, unknown> = {
        escuelaId: schoolId,
        isDeleted: { not: true },
        id: { not: userId },
      };

      if (q) {
        (whereFilter as Record<string, unknown>).OR = [
          { fullName: { contains: q } },
          { username: { contains: q } },
        ];
        delete whereFilter.id;
        (whereFilter as Record<string, unknown>).AND = [
          { id: { not: userId } },
        ];
      }

      const usuarios = await prisma.usuario.findMany({
        where: whereFilter as Parameters<typeof prisma.usuario.findMany>[0]["where"],
        select: { id: true, fullName: true, username: true, role: true },
        take: 10,
      });

      const items = usuarios
        .filter((u) => u.id !== userId)
        .map((u) => ({
          id: u.id,
          nombre: String(u.fullName ?? u.username ?? ""),
          username: String(u.username ?? ""),
          role: String(u.role ?? ""),
        }));

      return res.json({ items });
    } catch {
      return res.json({ items: [] });
    }
  }
);
