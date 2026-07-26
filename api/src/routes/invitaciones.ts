/**
 * PLAN-roles-v3 A3 — solicitudes e invitaciones de rol.
 *
 * Un solo endpoint para los dos sentidos: si el destinatario es uno mismo
 * es un PEDIDO, si es otro es una INVITACIÓN. `lib/invitaciones.ts` decide
 * quién aprueba; acá se verifica contra la DB y se escribe la membresía
 * cuando la invitación se acepta.
 */
import { Router } from "express";
import { randomUUID } from "node:crypto";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole } from "../lib/roles";
import { recordAuditLog } from "../lib/audit-log";
import { sincronizarMembresia } from "../lib/memberships";
import { aprobadorPara, puedeInvitar, ROLES_INVITABLES, type Aprobador } from "../lib/invitaciones";
import type { MembershipRole } from "../lib/membership-roles";

export const invitaciones = Router();

type ReqUser = { id?: string; role?: string; roles?: string[]; schoolId?: string | null };
const getId = (u: ReqUser | undefined) => u?.id ?? null;
const now = () => new Date().toISOString();
const rolesDe = (u: ReqUser | undefined) => u?.roles ?? (u?.role ? [u.role] : []);

/** ¿El actor puede RESOLVER una invitación que espera a `aprobador`? */
const puedeResolver = async (
  aprobador: Aprobador,
  actor: ReqUser | undefined,
  fila: { escuelaId: string; destinatario: string }
): Promise<boolean> => {
  const actorId = getId(actor);
  if (!actorId) return false;
  switch (aprobador) {
    case "destinatario":
      return fila.destinatario === actorId;
    case "directivo":
      if (hasRole(actor, "ADMIN")) return true;
      return hasRole(actor, "DIRECTIVO") && actor?.schoolId === fila.escuelaId;
    case "directivo_principal": {
      if (hasRole(actor, "ADMIN")) return true;
      const escuela = await prisma.escuela.findFirst({ where: { id: fila.escuelaId } });
      // Escuelas anteriores al flujo de alta no tienen principal: cualquier
      // directivo de esa escuela conserva lo que ya podía hacer.
      if (!escuela?.directivoPrincipalId) {
        return hasRole(actor, "DIRECTIVO") && actor?.schoolId === fila.escuelaId;
      }
      return escuela.directivoPrincipalId === actorId;
    }
    case "admin_principal": {
      const doc = await prisma.usuario.findFirst({ where: { id: actorId } });
      return doc?.esAdminPrincipal === true;
    }
    default:
      return false;
  }
};

// POST /api/invitaciones — pedir un rol para uno mismo, o invitar a otro.
invitaciones.post("/api/invitaciones", requireUser, async (req, res) => {
  const actor = req.user as ReqUser | undefined;
  const actorId = getId(actor);
  if (!actorId) return res.status(401).json({ error: "no autenticado" });

  const rol = String(req.body?.rol ?? "") as MembershipRole;
  const escuelaId = typeof req.body?.escuelaId === "string" ? req.body.escuelaId : actor?.schoolId ?? null;
  const destinatario = typeof req.body?.destinatario === "string" ? req.body.destinatario : actorId;

  if (!ROLES_INVITABLES.includes(rol)) {
    // ADMIN de plataforma no sale de acá: no es un rol de escuela.
    return res.status(400).json({ error: "rol no invitable", code: "ROL_INVALIDO" });
  }
  if (!escuelaId) return res.status(400).json({ error: "escuelaId requerido" });

  const esPedidoPropio = destinatario === actorId;
  if (!esPedidoPropio && !puedeInvitar(rolesDe(actor), rol)) {
    return res.status(403).json({ error: "no podés invitar a ese rol", code: "SIN_PERMISO_INVITAR" });
  }

  const yaLaTiene = await prisma.membresia.findFirst({
    where: { usuarioId: destinatario, escuelaId, rol, estado: "activa" }
  });
  if (yaLaTiene) return res.status(409).json({ error: "ya tiene ese rol en esa escuela" });

  const duplicada = await prisma.invitacionRol.findFirst({
    where: { destinatario, escuelaId, rol, estado: "pendiente" }
  });
  if (duplicada) return res.status(409).json({ error: "ya hay una solicitud pendiente", id: duplicada.id });

  const aprobador = aprobadorPara({ rol, esPedidoPropio });
  if (!aprobador) return res.status(400).json({ error: "combinación no permitida" });

  const nowIso = now();
  const fila = await prisma.invitacionRol.create({
    data: {
      id: randomUUID(),
      escuelaId,
      destinatario,
      rol,
      iniciadoPor: actorId,
      estado: aprobador === "automatico" ? "aceptada" : "pendiente",
      resueltoPor: aprobador === "automatico" ? actorId : null,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });

  if (aprobador === "automatico") {
    await sincronizarMembresia({ usuarioId: destinatario, escuelaId, rolUsuario: rol === "STUDENT" ? "USER" : rol });
  }
  await recordAuditLog({
    actorId,
    action: esPedidoPropio ? "rol.solicitado" : "rol.invitado",
    targetType: "InvitacionRol",
    targetId: fila.id,
    metadata: { escuelaId, destinatario, rol, aprobador }
  });

  return res.status(201).json({ id: fila.id, estado: fila.estado, aprobador });
});

// GET /api/invitaciones — las mías (recibidas) y las que me toca resolver.
invitaciones.get("/api/invitaciones", requireUser, async (req, res) => {
  const actor = req.user as ReqUser | undefined;
  const actorId = getId(actor);
  if (!actorId) return res.status(401).json({ error: "no autenticado" });

  const recibidas = await prisma.invitacionRol.findMany({
    where: { destinatario: actorId, estado: "pendiente" }
  });
  const deMiEscuela = actor?.schoolId
    ? await prisma.invitacionRol.findMany({ where: { escuelaId: actor.schoolId, estado: "pendiente" } })
    : [];

  const porResolver = [];
  for (const fila of deMiEscuela) {
    const aprobador = aprobadorPara({ rol: fila.rol as MembershipRole, esPedidoPropio: fila.iniciadoPor === fila.destinatario });
    if (aprobador && aprobador !== "destinatario" && (await puedeResolver(aprobador, actor, fila))) {
      porResolver.push(fila);
    }
  }
  return res.json({ recibidas: recibidas.filter((r) => r.iniciadoPor !== actorId), porResolver });
});

// POST /api/invitaciones/:id/responder — aceptar o rechazar.
invitaciones.post("/api/invitaciones/:id/responder", requireUser, async (req, res) => {
  const actor = req.user as ReqUser | undefined;
  const actorId = getId(actor);
  if (!actorId) return res.status(401).json({ error: "no autenticado" });

  const aceptar = req.body?.aceptar === true;
  const fila = await prisma.invitacionRol.findFirst({ where: { id: req.params.id as string } });
  if (!fila) return res.status(404).json({ error: "no encontrada" });
  if (fila.estado !== "pendiente") return res.status(409).json({ error: `ya está ${fila.estado}` });

  const aprobador = aprobadorPara({
    rol: fila.rol as MembershipRole,
    esPedidoPropio: fila.iniciadoPor === fila.destinatario
  });
  if (!aprobador || !(await puedeResolver(aprobador, actor, fila))) {
    return res.status(403).json({ error: "no te toca resolver esto", code: "NO_APROBADOR" });
  }

  const nowIso = now();
  await prisma.invitacionRol.update({
    where: { id: fila.id },
    data: {
      estado: aceptar ? "aceptada" : "rechazada",
      resueltoPor: actorId,
      motivo: typeof req.body?.motivo === "string" ? req.body.motivo : null,
      updatedAt: nowIso
    }
  });
  if (aceptar) {
    await sincronizarMembresia({
      usuarioId: fila.destinatario,
      escuelaId: fila.escuelaId,
      rolUsuario: fila.rol === "STUDENT" ? "USER" : fila.rol
    });
  }
  await recordAuditLog({
    actorId,
    action: aceptar ? "rol.concedido" : "rol.denegado",
    targetType: "InvitacionRol",
    targetId: fila.id,
    metadata: { escuelaId: fila.escuelaId, destinatario: fila.destinatario, rol: fila.rol }
  });

  return res.json({ ok: true, estado: aceptar ? "aceptada" : "rechazada" });
});
