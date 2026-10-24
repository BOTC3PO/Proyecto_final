/**
 * K10b — soporte como chat grupal. Un hilo por persona que pide ayuda; participan todos los ADMIN, el
 * directivo principal de su escuela, la persona misma y los padres con vínculo aprobado con ella. Sirve para que
 * un menor nunca quede a solas con alguien ajeno a la escuela. Los participantes se calculan al consultar, así
 * que un padre vinculado después también ve el hilo.
 */
import { randomUUID } from "node:crypto";
import { prisma } from "./prisma";
import { hasRole } from "./roles";

export const PREFIJO_HILO_SOPORTE = "sop-";
export const DESTINO_SOPORTE = "soporte";

type Actor = { id: string; roles?: string[]; role?: string };

export const esIdHiloSoporte = (id: string) => id.startsWith(PREFIJO_HILO_SOPORTE);

/** Participantes de un hilo, en dos grupos: la persona que lo abrió y quienes la acompañan. */
export async function participantesSoporte(hilo: { solicitanteId: string; escuelaId: string | null }): Promise<string[]> {
  const ids = new Set<string>([hilo.solicitanteId]);
  const admins = await prisma.usuario.findMany({
    where: { roles: { has: "ADMIN" }, isDeleted: { not: true } },
    select: { id: true },
  });
  for (const a of admins) ids.add(a.id);
  if (hilo.escuelaId) {
    const escuela = await prisma.escuela.findFirst({ where: { id: hilo.escuelaId }, select: { directivoPrincipalId: true } });
    if (escuela?.directivoPrincipalId) ids.add(escuela.directivoPrincipalId);
  }
  const padres = await prisma.progresoModuloVinculo.findMany({
    where: { childId: hilo.solicitanteId, estado: "aprobado" },
    select: { parentId: true },
  });
  for (const p of padres) ids.add(p.parentId);
  return [...ids];
}

export async function esParticipanteSoporte(
  hilo: { solicitanteId: string; escuelaId: string | null },
  actor: Actor
): Promise<boolean> {
  if (actor.id === hilo.solicitanteId || hasRole(actor, "ADMIN")) return true;
  return (await participantesSoporte(hilo)).includes(actor.id);
}

/** Hilos que el usuario puede ver: todos si es ADMIN; si no, el propio, los de su escuela (si es su principal) y los de sus hijos. */
export async function hilosSoporteDe(actor: Actor) {
  if (hasRole(actor, "ADMIN")) {
    return prisma.hiloSoporte.findMany({ orderBy: { ultimoAt: "desc" }, take: 50 });
  }
  const [propios, hijos, escuelasPrincipal] = await Promise.all([
    prisma.hiloSoporte.findMany({ where: { solicitanteId: actor.id } }),
    prisma.progresoModuloVinculo.findMany({ where: { parentId: actor.id, estado: "aprobado" }, select: { childId: true } }),
    prisma.escuela.findMany({ where: { directivoPrincipalId: actor.id }, select: { id: true } }),
  ]);
  const deHijos = hijos.length
    ? await prisma.hiloSoporte.findMany({ where: { solicitanteId: { in: hijos.map((h) => h.childId) } } })
    : [];
  const deEscuela = escuelasPrincipal.length
    ? await prisma.hiloSoporte.findMany({ where: { escuelaId: { in: escuelasPrincipal.map((e) => e.id) } } })
    : [];
  const porId = new Map<string, (typeof propios)[number]>();
  for (const h of [...propios, ...deHijos, ...deEscuela]) porId.set(h.id, h);
  return [...porId.values()].sort((a, b) => String(b.ultimoAt ?? "").localeCompare(String(a.ultimoAt ?? ""))).slice(0, 50);
}

/** El hilo de la persona; lo crea si no existe. Los ADMIN no abren hilos propios: responden en los de otros. */
export async function hiloSoporteDe(solicitanteId: string, escuelaId: string | null) {
  const existente = await prisma.hiloSoporte.findFirst({ where: { solicitanteId } });
  if (existente) return existente;
  try {
    return await prisma.hiloSoporte.create({
      data: { id: PREFIJO_HILO_SOPORTE + randomUUID(), solicitanteId, escuelaId, createdAt: new Date().toISOString() },
    });
  } catch (err) {
    // Dos pedidos simultáneos: el índice único deja pasar uno y el otro reutiliza el hilo ya creado.
    if ((err as { code?: string })?.code === "P2002") {
      const ya = await prisma.hiloSoporte.findFirst({ where: { solicitanteId } });
      if (ya) return ya;
    }
    throw err;
  }
}

export async function agregarMensajeSoporte(hiloId: string, senderId: string, body: string) {
  const ahora = new Date().toISOString();
  const id = `msg-${randomUUID()}`;
  await prisma.mensajeSoporte.create({ data: { id, hiloId, senderId, body, createdAt: ahora } });
  await prisma.hiloSoporte.update({ where: { id: hiloId }, data: { ultimoMsg: body.slice(0, 80), ultimoAt: ahora } });
  // Quien escribe ya leyó hasta acá.
  await marcarLeidoSoporte(hiloId, senderId, ahora);
  return id;
}

export async function marcarLeidoSoporte(hiloId: string, usuarioId: string, cuando = new Date().toISOString()) {
  const tocadas = await prisma.soporteLectura.updateMany({ where: { hiloId, usuarioId }, data: { leidoAt: cuando } });
  if (tocadas.count > 0) return;
  try {
    await prisma.soporteLectura.create({ data: { hiloId, usuarioId, leidoAt: cuando } });
  } catch (err) {
    // Otra lectura simultánea creó la fila: alcanza con actualizarla.
    if ((err as { code?: string })?.code !== "P2002") throw err;
    await prisma.soporteLectura.updateMany({ where: { hiloId, usuarioId }, data: { leidoAt: cuando } });
  }
}

/** Mensajes de otros posteriores a la última lectura del usuario, por hilo. */
export async function noLeidosSoporte(hilos: Array<{ id: string }>, usuarioId: string): Promise<Map<string, number>> {
  const res = new Map<string, number>();
  if (!hilos.length) return res;
  const lecturas = await prisma.soporteLectura.findMany({ where: { usuarioId, hiloId: { in: hilos.map((h) => h.id) } } });
  const leidoAt = new Map(lecturas.map((l) => [l.hiloId, l.leidoAt]));
  for (const h of hilos) {
    const desde = leidoAt.get(h.id);
    const n = await prisma.mensajeSoporte.count({
      where: { hiloId: h.id, senderId: { not: usuarioId }, ...(desde ? { createdAt: { gt: desde } } : {}) },
    });
    res.set(h.id, n);
  }
  return res;
}
