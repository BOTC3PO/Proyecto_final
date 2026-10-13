import type { Prisma } from "@prisma/client";
import { Router } from "express";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";
import { hasRole, resolvePrimaryRole } from "../lib/roles";
import { randomUUID } from "node:crypto";
import { validarCuerpo } from "../lib/validar";
import { NuevoMensajeSchema, NuevoAvisoSchema, EditarAvisoSchema, ReporteMensajeSchema } from "../schema/mensajeria";
import {
  DESTINO_SOPORTE, esIdHiloSoporte, esParticipanteSoporte, hilosSoporteDe, hiloSoporteDe,
  agregarMensajeSoporte, marcarLeidoSoporte, noLeidosSoporte, participantesSoporte,
} from "../lib/soporte-grupal";

// H8 — topes de largo (antes solo valía el límite global del cuerpo JSON).
export const MAX_LARGO_MENSAJE = 2000;
export const MAX_LARGO_AVISO_TITULO = 200;
export const MAX_LARGO_AVISO_CUERPO = 5000;
const MAX_LARGO_MOTIVO_REPORTE = 500;

export const mensajeria = Router();

const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const getSchoolId = (req: { user?: { schoolId?: string | null } }) =>
  req.user?.schoolId ?? null;

// `usuarios.escuela_id` (y el claim `schoolId` del JWT que sale de esa
// columna) sólo lo puebla el alta de TEACHER/DIRECTIVO/ADMIN — un
// USER (alumno) o PARENT lo tienen SIEMPRE null, aunque el alumno esté
// inscripto en un aula real. La fuente canónica es `membresias`
// (mismo criterio que `provisionar-espejo.ts`); un PARENT ni eso
// tiene, así que cae al de su hijo vinculado (`vinculos_padre_hijo`,
// sólo si `estado === "aprobado"`). Sin este fallback, alumnos y
// padres nunca encontraban a nadie para escribirle (mensajeria/usuarios
// vacío) ni veían sus propios hilos/avisos.
async function resolveEffectiveSchoolId(userId: string): Promise<string | null> {
  const membresia = await prisma.membresia.findFirst({
    where: { usuarioId: userId, estado: "activa" },
    select: { escuelaId: true },
  });
  if (membresia?.escuelaId) return membresia.escuelaId;

  const vinculo = await prisma.progresoModuloVinculo.findFirst({
    where: { parentId: userId, estado: "aprobado" },
    select: { childId: true },
  });
  if (!vinculo) return null;

  const membresiaHijo = await prisma.membresia.findFirst({
    where: { usuarioId: vinculo.childId, estado: "activa" },
    select: { escuelaId: true },
  });
  return membresiaHijo?.escuelaId ?? null;
}

async function getEffectiveSchoolId(req: { user?: { id?: string; schoolId?: string | null } }) {
  const claimed = req.user?.schoolId ?? null;
  if (claimed) return claimed;
  const userId = req.user?.id;
  if (!userId) return null;
  return resolveEffectiveSchoolId(userId);
}

const getRole = (req: { user?: { role?: string } }) =>
  req.user?.role ?? null;

const getUserFromReq = (req: { user?: { role?: string; roles?: string[] } }) => req.user ?? null;

const genId = (prefix: string) =>
  `${prefix}-${randomUUID()}`;

async function mismaEscuela(
  userAId: string,
  userBId: string
): Promise<{ ok: boolean; escuelaId?: string }> {
  const [userA, userB] = await Promise.all([
    prisma.usuario.findFirst({
      where: { OR: [{ id: userAId }], isDeleted: { not: true } },
      select: { escuelaId: true, roles: true },
    }),
    prisma.usuario.findFirst({
      where: { OR: [{ id: userBId }], isDeleted: { not: true } },
      select: { escuelaId: true, roles: true },
    }),
  ]);
  if (!userA || !userB) return { ok: false };
  const [escA, escB] = await Promise.all([
    userA.escuelaId || resolveEffectiveSchoolId(userAId),
    userB.escuelaId || resolveEffectiveSchoolId(userBId),
  ]);
  if (!escA || !escB || escA !== escB) return { ok: false };
  return { ok: true, escuelaId: escA };
}

// ── GET /api/mensajeria/hilos ────────────────────────────────
mensajeria.get("/api/mensajeria/hilos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const schoolId = await getEffectiveSchoolId(req as never);

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
          select: { id: true, fullName: true, username: true, roles: true },
        })
      : [];

    const usuarioMap = new Map(
      usuarios.map((u) => [
        String(u.id ?? ""),
        {
          nombre: String(u.fullName ?? u.username ?? "Usuario"),
          username: String(u.username ?? ""),
          role: String(resolvePrimaryRole(u) ?? ""),
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

    const soporte = await itemsSoporte(req as never, userId);
    return res.json({ items: [...soporte, ...items] });
  } catch {
    return res.json({ items: [] });
  }
});

// Los hilos de soporte (grupales) viajan en la misma lista que los directos, con `tipo: "soporte"`.
async function itemsSoporte(req: { user?: { id?: string; role?: string; roles?: string[] } }, userId: string) {
  const actor = { id: userId, roles: req.user?.roles, role: req.user?.role };
  const hilos = await hilosSoporteDe(actor);
  if (!hilos.length) return [];
  const sinLeer = await noLeidosSoporte(hilos, userId);
  const solicitantes = await prisma.usuario.findMany({
    where: { id: { in: hilos.map((h) => h.solicitanteId) } },
    select: { id: true, fullName: true, username: true },
  });
  const nombre = new Map(solicitantes.map((u) => [u.id, String(u.fullName ?? u.username ?? "Usuario")]));
  return hilos.map((h) => {
    const propio = h.solicitanteId === userId;
    return {
      id: h.id,
      tipo: "soporte",
      // Quien abrió el hilo responde con "soporte"; el resto, indicando de quién es el hilo.
      otroId: propio ? DESTINO_SOPORTE : `${DESTINO_SOPORTE}:${h.id}`,
      otroNombre: propio ? "Soporte (administración y dirección)" : `Soporte · ${nombre.get(h.solicitanteId) ?? "Usuario"}`,
      otroUsername: "",
      otroRol: "SOPORTE",
      ultimoMsg: h.ultimoMsg,
      ultimoAt: h.ultimoAt,
      noLeidos: sinLeer.get(h.id) ?? 0,
    };
  });
}

async function leerHiloSoporte(
  req: { params: Record<string, string>; user?: { id?: string; role?: string; roles?: string[] } },
  res: import("express").Response,
  userId: string
) {
  const hilo = await prisma.hiloSoporte.findUnique({ where: { id: String(req.params.hiloId) } });
  const actor = { id: userId, roles: req.user?.roles, role: req.user?.role };
  // Mismo 404 si no existe o no participa: no se revela que el hilo existe.
  if (!hilo || !(await esParticipanteSoporte(hilo, actor))) return res.status(404).json({ error: "hilo no encontrado" });
  const mensajes = await prisma.mensajeSoporte.findMany({ where: { hiloId: hilo.id }, orderBy: { createdAt: "asc" }, take: 100 });
  const autores = await prisma.usuario.findMany({
    where: { id: { in: [...new Set(mensajes.map((m) => m.senderId))] } },
    select: { id: true, fullName: true, username: true },
  });
  const nombre = new Map(autores.map((u) => [u.id, String(u.fullName ?? u.username ?? "Usuario")]));
  await marcarLeidoSoporte(hilo.id, userId);
  const participantes = await participantesSoporte(hilo);
  return res.json({
    hilo: { ...hilo, tipo: "soporte", participantes: participantes.length },
    mensajes: mensajes.map((m) => ({
      id: m.id,
      hilo_id: m.hiloId,
      sender_id: m.senderId,
      sender_nombre: nombre.get(m.senderId) ?? null,
      body: m.body,
      leido: 1,
      created_at: m.createdAt,
    })),
  });
}

// ── GET /api/mensajeria/hilos/:hiloId ────────────────────────
mensajeria.get("/api/mensajeria/hilos/:hiloId", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  if (esIdHiloSoporte(String(req.params.hiloId))) return leerHiloSoporte(req as never, res, userId);

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

// Un alumno no le escribe a padres ajenos: solo a los suyos (vínculo aprobado).
async function alumnoPuedeEscribirle(
  req: { user?: { roles?: string[]; role?: string } },
  senderId: string,
  destId: string
): Promise<boolean> {
  const u = req.user;
  const soloAlumno = !["ADMIN", "TEACHER", "DIRECTIVO", "ADMIN_ESCUELA", "PARENT"].some((r) => hasRole(u as never, r));
  if (!soloAlumno) return true;
  const dest = await prisma.usuario.findFirst({ where: { id: destId, isDeleted: { not: true } }, select: { roles: true } });
  const esPadre = !!dest && hasRole(dest, "PARENT") &&
    !["ADMIN", "TEACHER", "DIRECTIVO", "ADMIN_ESCUELA"].some((r) => hasRole(dest, r));
  if (!esPadre) return true;
  const v = await prisma.progresoModuloVinculo.findFirst({ where: { parentId: destId, childId: senderId, estado: "aprobado" } });
  return !!v;
}

// Escribir al soporte grupal: "soporte" abre (o reutiliza) el hilo propio; "soporte:<id>" responde en uno ajeno.
async function escribirSoporte(
  req: { user?: { id?: string; role?: string; roles?: string[] } },
  res: import("express").Response,
  userId: string,
  destino: string,
  texto: string
) {
  const actor = { id: userId, roles: req.user?.roles, role: req.user?.role };
  let hilo;
  if (destino === DESTINO_SOPORTE) {
    // Los ADMIN no abren hilos propios: responden en los de otros.
    if (hasRole(actor, "ADMIN")) return res.status(400).json({ error: "indicá el hilo de soporte al que respondés" });
    hilo = await hiloSoporteDe(userId, await getEffectiveSchoolId(req as never));
  } else {
    hilo = await prisma.hiloSoporte.findUnique({ where: { id: destino.slice(DESTINO_SOPORTE.length + 1) } });
    if (!hilo || !(await esParticipanteSoporte(hilo, actor))) return res.status(404).json({ error: "hilo no encontrado" });
  }
  const msgId = await agregarMensajeSoporte(hilo.id, userId, texto);
  return res.status(201).json({ hiloId: hilo.id, msgId, ok: true });
}

// ── POST /api/mensajeria/hilos ───────────────────────────────
mensajeria.post("/api/mensajeria/hilos", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const cuerpoValido = validarCuerpo(NuevoMensajeSchema, req, res);
  if (!cuerpoValido) return;
  const { destinatarioId, body } = cuerpoValido;
  if (body.length > MAX_LARGO_MENSAJE) {
    return res.status(413).json({ error: `El mensaje no puede superar los ${MAX_LARGO_MENSAJE} caracteres.` });
  }

  if (String(destinatarioId) === DESTINO_SOPORTE || String(destinatarioId).startsWith(`${DESTINO_SOPORTE}:`)) {
    return escribirSoporte(req as never, res, userId, String(destinatarioId), body.trim());
  }

  const check = await mismaEscuela(userId, String(destinatarioId));
  if (check.ok && !(await alumnoPuedeEscribirle(req as never, userId, String(destinatarioId)))) {
    return res.status(403).json({ error: "Los alumnos no pueden escribirle a familias de otros alumnos." });
  }
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
  if (!userId) return res.json({ total: 0 });
  const schoolId = await getEffectiveSchoolId(req as never);

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

  const hilosSop = await hilosSoporteDe({
    id: userId,
    roles: (req as never as { user?: { roles?: string[] } }).user?.roles,
    role: getRole(req as never) ?? undefined,
  });
  const sinLeerSop = [...(await noLeidosSoporte(hilosSop, userId)).values()].reduce((a, b) => a + b, 0);
  const mensajes = (aggA._sum.noLeidosA ?? 0) + (aggB._sum.noLeidosB ?? 0) + sinLeerSop;

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
  const user = getUserFromReq(req as never);
  if (!userId) return res.json({ items: [] });
  const schoolId = await getEffectiveSchoolId(req as never);
  if (!schoolId) return res.json({ items: [] });

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

  const avisoValido = validarCuerpo(NuevoAvisoSchema, req, res);
  if (!avisoValido) return;
  const { titulo, cuerpo, destino, aulaId } = avisoValido;
  if (titulo.length > MAX_LARGO_AVISO_TITULO || cuerpo.length > MAX_LARGO_AVISO_CUERPO) {
    return res.status(413).json({
      error: `El título admite hasta ${MAX_LARGO_AVISO_TITULO} caracteres y el cuerpo hasta ${MAX_LARGO_AVISO_CUERPO}.`
    });
  }

  const destinoFinal = destino;
  if (aulaId) {
    const aula = await prisma.clase.findFirst({ where: { id: aulaId, isDeleted: { not: true } }, select: { escuelaId: true } });
    if (!aula || aula.escuelaId !== schoolId) return res.status(400).json({ error: "aulaId no pertenece a tu escuela" });
  }

  const id = genId("aviso");
  const now = new Date().toISOString();

  await prisma.aviso.create({
    data: {
      id,
      escuelaId: schoolId,
      autorId: userId,
      autorRol: role ?? "",
      titulo,
      cuerpo,
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

  // Solo avisos que existen y son de la escuela de quien los lee: antes se aceptaba cualquier id y la tabla
  // podía llenarse de filas sueltas.
  const aviso = await prisma.aviso.findFirst({ where: { id: String(req.params.id) }, select: { escuelaId: true } });
  const escuela = await getEffectiveSchoolId(req as never);
  if (!aviso || (!hasRole(getUserFromReq(req as never), "ADMIN") && aviso.escuelaId !== escuela)) {
    return res.status(404).json({ error: "aviso no encontrado" });
  }

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

  const edicion = validarCuerpo(EditarAvisoSchema, req, res);
  if (!edicion) return;
  const { titulo, cuerpo, destino, aulaId } = edicion;
  const data: Record<string, unknown> = {};
  if (titulo) data.titulo = titulo;
  if (cuerpo) data.cuerpo = cuerpo;
  if (destino) data.destino = destino;
  if (typeof aulaId === "string") {
    data.aulaId = aulaId.length > 0 ? aulaId : null;
  }

  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: "nada que actualizar" });
  }
  if (typeof data.aulaId === "string") {
    const aula = await prisma.clase.findFirst({ where: { id: data.aulaId, isDeleted: { not: true } }, select: { escuelaId: true } });
    if (!aula || aula.escuelaId !== aviso.escuelaId) return res.status(400).json({ error: "aulaId no pertenece a la escuela del aviso" });
  }
  if (String(data.titulo ?? "").length > MAX_LARGO_AVISO_TITULO || String(data.cuerpo ?? "").length > MAX_LARGO_AVISO_CUERPO) {
    return res.status(413).json({
      error: `El título admite hasta ${MAX_LARGO_AVISO_TITULO} caracteres y el cuerpo hasta ${MAX_LARGO_AVISO_CUERPO}.`
    });
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
  if (!userId) return res.json({ items: [] });
  const schoolId = await getEffectiveSchoolId(req as never);

  const q = typeof req.query.q === "string" ? req.query.q.trim() : "";

  try {
    const delaEscuela = schoolId
      ? await (async () => {
          const whereFilter: Record<string, unknown> = {
            escuelaId: schoolId,
            isDeleted: { not: true },
            id: { not: userId },
          };
          if (q) {
            (whereFilter as Record<string, unknown>).OR = [
              { fullName: { contains: q, mode: "insensitive" } },
              { username: { contains: q, mode: "insensitive" } },
            ];
            delete whereFilter.id;
            (whereFilter as Record<string, unknown>).AND = [{ id: { not: userId } }];
          }
          return prisma.usuario.findMany({
            where: whereFilter as Prisma.UsuarioWhereInput,
            select: { id: true, fullName: true, username: true, roles: true },
            take: 10,
          });
        })()
      : [];

    // Soporte: un único destino grupal (administración, dirección y familia), no un admin en particular.
    const soporte = hasRole(getUserFromReq(req as never), "ADMIN") ? [] : [{ id: DESTINO_SOPORTE }];

    const items = [
      ...soporte.map((u) => ({
        id: u.id,
        nombre: "Soporte (administración y dirección)",
        username: "",
        role: "SOPORTE",
      })),
      ...delaEscuela
        .filter((u) => u.id !== userId)
        .map((u) => ({
          id: u.id,
          nombre: String(u.fullName ?? u.username ?? ""),
          username: String(u.username ?? ""),
          role: String(resolvePrimaryRole(u) ?? ""),
        })),
    ];

    return res.json({ items });
  } catch {
    return res.json({ items: [] });
  }
});

// ── POST /api/mensajeria/mensajes/:mensajeId/reportar ────────
// H3 — quien recibió un mensaje puede reportarlo. Queda una copia del texto como evidencia y el
// reporte aparece en el panel de moderación de la escuela del hilo. Solo se reportan mensajes de
// la otra persona del hilo, y una persona reporta un mismo mensaje una sola vez.
mensajeria.post("/api/mensajeria/mensajes/:mensajeId/reportar", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const mensaje = await prisma.mensajeDirecto.findFirst({ where: { id: String(req.params.mensajeId) } });
  if (!mensaje) return res.status(404).json({ error: "mensaje no encontrado" });
  const hilo = await prisma.hilo.findFirst({ where: { id: mensaje.hiloId } });
  if (!hilo || (hilo.usuarioA !== userId && hilo.usuarioB !== userId)) {
    // Mismo mensaje que si no existiera: no se revela que el mensaje existe.
    return res.status(404).json({ error: "mensaje no encontrado" });
  }
  if (mensaje.senderId === userId) {
    return res.status(400).json({ error: "no podés reportar tus propios mensajes" });
  }

  const reporte = validarCuerpo(ReporteMensajeSchema, req, res);
  if (!reporte) return;
  const motivo = typeof reporte.motivo === "string" && reporte.motivo.trim() ? reporte.motivo.trim() : null;
  if (motivo && motivo.length > MAX_LARGO_MOTIVO_REPORTE) {
    return res.status(413).json({ error: `El motivo admite hasta ${MAX_LARGO_MOTIVO_REPORTE} caracteres.` });
  }

  const yaReportado = await prisma.mensajeReportado.findFirst({
    where: { mensajeId: mensaje.id, reportadoPor: userId }
  });
  if (yaReportado) return res.status(409).json({ error: "ya reportaste este mensaje" });

  const id = `rep-${randomUUID()}`;
  try {
    await prisma.mensajeReportado.create({
      data: {
        id,
        mensajeId: mensaje.id,
        hiloId: hilo.id,
        escuelaId: hilo.escuelaId,
        reportadoPor: userId,
        autorId: mensaje.senderId,
        motivo,
        cuerpo: mensaje.body,
        estado: "pendiente",
        createdAt: new Date().toISOString()
      }
    });
  } catch (err) {
    // Dos reportes simultáneos del mismo mensaje: el índice único deja pasar uno solo.
    if ((err as { code?: string })?.code === "P2002") return res.status(409).json({ error: "ya reportaste este mensaje" });
    throw err;
  }
  return res.status(201).json({ id, ok: true });
});
