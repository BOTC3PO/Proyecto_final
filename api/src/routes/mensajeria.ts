import type { Prisma } from "@prisma/client";
import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";
import { hasRole } from "../lib/roles";

export const mensajeria = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

const getUserFromReq = (req: { user?: { role?: string; roles?: string[] } }) => req.user ?? null;

const genId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

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

// ── GET /api/mensajeria/hilos ────────────────────────────────
mensajeria.get("/api/mensajeria/hilos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const hilos = await prisma.hilo.findMany({
    where: {
      escuelaId: schoolId ?? "",
      OR: [{ usuarioA: userId }, { usuarioB: userId }],
    },
    orderBy: { ultimoAt: "desc" },
    take: 30,
  });

  const otroIds = hilos.map((h) => (h.usuarioA === userId ? h.usuarioB : h.usuarioA));

  try {
    const usuarios = otroIds.length
      ? await prisma.usuario.findMany({
          where: { id: { in: otroIds }, isDeleted: { not: true } },
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
      const otroId = h.usuarioA === userId ? h.usuarioB : h.usuarioA;
      const otro = usuarioMap.get(otroId);
      const noLeidos = h.usuarioA === userId ? h.noLeidosA : h.noLeidosB;
      return {
        id: h.id,
        otroId,
        otroNombre: otro?.nombre ?? otroId,
        otroUsername: otro?.username ?? "",
        otroRol: otro?.role ?? "",
        ultimoMsg: h.ultimoMsg,
        ultimoAt: h.ultimoAt,
        noLeidos,
      };
    });

    return res.json({ items });
  } catch {
    return res.json({ items: [] });
  }
});

// ── GET /api/mensajeria/hilos/:hiloId ────────────────────────
mensajeria.get("/api/mensajeria/hilos/:hiloId", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const hilo = await prisma.hilo.findUnique({ where: { id: String(req.params.hiloId) } });
  if (!hilo) return res.status(404).json({ error: "hilo no encontrado" });
  if (hilo.usuarioA !== userId && hilo.usuarioB !== userId) {
    return res.status(403).json({ error: "sin acceso" });
  }

  const mensajes = await prisma.mensajeDirecto.findMany({
    where: { hiloId: String(req.params.hiloId) },
    orderBy: { createdAt: "asc" },
    take: 50,
  });

  // Marcar como leídos — campo dinámico según quién es el usuario
  const noLeidosUpdate = hilo.usuarioA === userId
    ? { noLeidosA: 0 }
    : { noLeidosB: 0 };

  await prisma.hilo.update({ where: { id: String(req.params.hiloId) }, data: noLeidosUpdate });
  await prisma.mensajeDirecto.updateMany({
    where: { hiloId: String(req.params.hiloId), senderId: { not: userId } },
    data: { leido: 1 },
  });

  const mensajesNormalizados = mensajes.map((m) => ({
    id:         m.id,
    hilo_id:    m.hiloId,
    sender_id:  m.senderId,
    body:       m.body,
    leido:      m.leido,
    created_at: m.createdAt,
  }));

  return res.json({ hilo, mensajes: mensajesNormalizados });
});

// ── POST /api/mensajeria/hilos ───────────────────────────────
mensajeria.post("/api/mensajeria/hilos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { destinatarioId, body } = req.body as Record<string, unknown>;
  if (!destinatarioId || !body || typeof body !== "string" || !body.trim()) {
    return res.status(400).json({ error: "destinatarioId y body requeridos" });
  }

  const check = await mismaEscuela(userId, String(destinatarioId));
  if (!check.ok) {
    return res.status(403).json({ error: "Solo podés enviar mensajes a miembros de tu escuela." });
  }

  const now = new Date().toISOString();
  const escuelaId = check.escuelaId!;
  const destId = String(destinatarioId);

  // Buscar hilo existente (en cualquier orden)
  let hilo = await prisma.hilo.findFirst({
    where: {
      escuelaId,
      OR: [
        { usuarioA: userId, usuarioB: destId },
        { usuarioA: destId, usuarioB: userId },
      ],
    },
  });

  if (!hilo) {
    hilo = await prisma.hilo.create({
      data: {
        id: genId("hilo"),
        escuelaId,
        usuarioA: userId,
        usuarioB: destId,
        ultimoMsg: body.trim().slice(0, 80),
        ultimoAt: now,
        createdAt: now,
      },
    });
  }

  const msgId = genId("msg");
  await prisma.mensajeDirecto.create({
    data: {
      id: msgId,
      hiloId: hilo.id,
      senderId: userId,
      body: body.trim(),
      leido: 0,
      createdAt: now,
    },
  });

  // Actualizar preview y no_leidos del receptor
  const noLeidosIncrement = hilo.usuarioA === userId
    ? { noLeidosB: { increment: 1 } }
    : { noLeidosA: { increment: 1 } };

  await prisma.hilo.update({
    where: { id: hilo.id },
    data: { ultimoMsg: body.trim().slice(0, 80), ultimoAt: now, ...noLeidosIncrement },
  });

  return res.status(201).json({ hiloId: hilo.id, msgId, ok: true });
});

// ── GET /api/mensajeria/no-leidos ────────────────────────────
mensajeria.get("/api/mensajeria/no-leidos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  if (!userId) return res.json({ total: 0 });

  const [aggA, aggB] = await Promise.all([
    prisma.hilo.aggregate({
      where: { usuarioA: userId, escuelaId: schoolId ?? "" },
      _sum: { noLeidosA: true },
    }),
    prisma.hilo.aggregate({
      where: { usuarioB: userId, escuelaId: schoolId ?? "" },
      _sum: { noLeidosB: true },
    }),
  ]);

  const mensajes = (aggA._sum.noLeidosA ?? 0) + (aggB._sum.noLeidosB ?? 0);

  // Contar avisos no leídos
  let avisos = 0;
  if (schoolId) {
    const leidosSet = await prisma.avisoLeido.findMany({
      where: { usuarioId: userId },
      select: { avisoId: true },
    });
    const leidosIds = new Set(leidosSet.map((l) => l.avisoId));
    const totalAvisos = await prisma.aviso.count({
      where: { escuelaId: schoolId, id: { notIn: leidosIds.size ? [...leidosIds] : ["__none__"] } },
    });
    avisos = totalAvisos;
  }

  return res.json({ mensajes, avisos, total: mensajes + avisos });
});

// ── GET /api/mensajeria/avisos ───────────────────────────────
mensajeria.get("/api/mensajeria/avisos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  const user = getUserFromReq(req as never);
  if (!userId || !schoolId) return res.json({ items: [] });

  const destinosValidos: string[] = ["todos"];
  if (hasRole(user, "USER")) destinosValidos.push("alumnos");
  if (hasRole(user, "TEACHER")) destinosValidos.push("profesores");
  if (hasRole(user, "PARENT")) destinosValidos.push("padres");
  if (hasRole(user, "DIRECTIVO")) destinosValidos.push("profesores", "padres");

  // FIX-TEST4-AVISOS-AUTOR — antes el filtro era solo
  // `destino: { in: destinosValidos }`. Si un DIRECTIVO creaba un
  // aviso con destino="alumnos", su propio filtro (que NO incluye
  // "alumnos" para staff) lo dejaba afuera. El autor debe ver
  // siempre sus propios avisos. Para no romper la semántica de
  // "destinos visibles" cuando el aviso es ajeno, el OR combina
  // destino-ok con autorId=userId.
  const [todosAvisos, leidosSet] = await Promise.all([
    prisma.aviso.findMany({
      where: {
        escuelaId: schoolId,
        OR: [
          { destino: { in: destinosValidos } },
          { autorId: userId },
        ],
      },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    prisma.avisoLeido.findMany({
      where: { usuarioId: userId },
      select: { avisoId: true },
    }),
  ]);

  const leidosIds = new Set(leidosSet.map((l) => l.avisoId));
  const items = todosAvisos.map((a) => ({
    id:         a.id,
    escuela_id: a.escuelaId,
    autor_id:   a.autorId,
    autor_rol:  a.autorRol,
    titulo:     a.titulo,
    cuerpo:     a.cuerpo,
    destino:    a.destino,
    aula_id:    a.aulaId,
    created_at: a.createdAt,
    leido:      leidosIds.has(a.id) ? 1 : 0,
  }));

  return res.json({ items });
});

// ── POST /api/mensajeria/avisos ──────────────────────────────
mensajeria.post("/api/mensajeria/avisos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  const user = getUserFromReq(req as never);
  const role = getRole(req as never);

  if (!userId || !schoolId) return res.status(401).json({ error: "no autenticado" });
  if (!hasRole(user, "DIRECTIVO") && !hasRole(user, "TEACHER") && !hasRole(user, "ADMIN")) {
    return res.status(403).json({ error: "Solo directivos y profesores pueden crear avisos." });
  }

  const { titulo, cuerpo, destino, aulaId } = req.body as Record<string, unknown>;
  if (!titulo || !cuerpo || typeof titulo !== "string" || typeof cuerpo !== "string") {
    return res.status(400).json({ error: "titulo y cuerpo requeridos" });
  }

  const destinosValidos = ["todos", "padres", "alumnos", "profesores"];
  const destinoFinal = typeof destino === "string" && destinosValidos.includes(destino)
    ? destino : "todos";

  const id = genId("aviso");
  const now = new Date().toISOString();

  await prisma.aviso.create({
    data: {
      id,
      escuelaId: schoolId,
      autorId: userId,
      autorRol: role ?? "",
      titulo: titulo.trim(),
      cuerpo: cuerpo.trim(),
      destino: destinoFinal,
      aulaId: typeof aulaId === "string" ? aulaId : null,
      createdAt: now,
    },
  });

  return res.status(201).json({ id, ok: true });
});

// ── POST /api/mensajeria/avisos/:id/leer ────────────────────
mensajeria.post("/api/mensajeria/avisos/:id/leer", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  await prisma.avisoLeido.createMany({
    data: [{ avisoId: String(req.params.id), usuarioId: userId, leidoAt: new Date().toISOString() }],
    skipDuplicates: true,
  });

  return res.json({ ok: true });
});

// ── PUT /api/mensajeria/avisos/:id ────────────────────────────
// FIX-TEST4-AVISOS-EDIT — antes no había forma de editar ni borrar
// un aviso después de crearlo. Ahora PUT parcial (mismo shape que
// POST) y DELETE con validación de ownership: solo el autor o
// ADMIN pueden modificar.
mensajeria.put("/api/mensajeria/avisos/:id", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const aviso = await prisma.aviso.findFirst({ where: { id: String(req.params.id) } });
  if (!aviso) return res.status(404).json({ error: "aviso no encontrado" });

  const user = getUserFromReq(req as never);
  if (!hasRole(user, "ADMIN") && aviso.autorId !== userId) {
    return res.status(403).json({ error: "sin permiso sobre este aviso" });
  }

  const { titulo, cuerpo, destino, aulaId } = req.body as Record<string, unknown>;
  const data: Record<string, unknown> = {};
  if (typeof titulo === "string" && titulo.trim()) data.titulo = titulo.trim();
  if (typeof cuerpo === "string" && cuerpo.trim()) data.cuerpo = cuerpo.trim();
  if (typeof destino === "string" && ["todos", "padres", "alumnos", "profesores"].includes(destino)) {
    data.destino = destino;
  }
  if (typeof aulaId === "string") {
    data.aulaId = aulaId.length > 0 ? aulaId : null;
  }

  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: "nada que actualizar" });
  }

  await prisma.aviso.update({
    where: { id: String(req.params.id) },
    data,
  });

  return res.json({ ok: true });
});

// ── DELETE /api/mensajeria/avisos/:id ─────────────────────────
mensajeria.delete("/api/mensajeria/avisos/:id", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const aviso = await prisma.aviso.findFirst({ where: { id: String(req.params.id) } });
  if (!aviso) return res.status(404).json({ error: "aviso no encontrado" });

  const user = getUserFromReq(req as never);
  if (!hasRole(user, "ADMIN") && aviso.autorId !== userId) {
    return res.status(403).json({ error: "sin permiso sobre este aviso" });
  }

  await prisma.aviso.delete({ where: { id: String(req.params.id) } });
  return res.json({ ok: true });
});

// ── GET /api/mensajeria/usuarios ─────────────────────────────
mensajeria.get("/api/mensajeria/usuarios", requireUser, async (req, res) => {
  const userId = getId(req as never);
  const schoolId = getSchoolId(req as never);
  if (!userId || !schoolId) return res.json({ items: [] });

  const q = typeof req.query.q === "string" ? req.query.q.trim() : "";

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
      (whereFilter as Record<string, unknown>).AND = [{ id: { not: userId } }];
    }

    const usuarios = await prisma.usuario.findMany({
      where: whereFilter as Prisma.UsuarioWhereInput,
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
});
