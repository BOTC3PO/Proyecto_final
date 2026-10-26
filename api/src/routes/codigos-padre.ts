import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { hasRole, isParentInRoles, isStaffInRoles, resolveRoles } from "../lib/roles";
import { perteneceAEscuela } from "../lib/pertenece-escuela";
import { createRateLimiter } from "../lib/rate-limit";
import { recordAuditLog } from "../lib/audit-log";
import { canjearCodigoPadre, crearCodigoPadre } from "../lib/codigos-padre";

/**
 * K8 — la escuela emite códigos de invitación para las familias; la familia los canjea. Es el único camino
 * (junto con el alta de padres por el directivo) para vincular a un menor.
 */
export const codigosPadre = Router();

type ReqUser = { id?: string; _id?: { toString?: () => string } | string; schoolId?: string | null; role?: string; roles?: string[] };
const idDe = (u: ReqUser | undefined) =>
  (typeof u?.id === "string" && u.id) || (typeof u?._id === "string" && u._id) || u?._id?.toString?.() || null;

/** Quien administra la escuela: ADMIN, DIRECTIVO, ADMIN_ESCUELA. */
const esGestorEscolar = (u: ReqUser | undefined) =>
  hasRole(u as never, "ADMIN") || hasRole(u as never, "DIRECTIVO") || hasRole(u as never, "ADMIN_ESCUELA");

const limiteCanje = createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 10 });

const CrearSchema = z.object({ hijoId: z.string().min(1) });

// POST /api/escuela/codigos-padre { hijoId } → el código en claro se devuelve UNA vez.
codigosPadre.post("/api/escuela/codigos-padre", requireUser, async (req, res) => {
  const actor = req.user as ReqUser | undefined;
  if (!esGestorEscolar(actor)) return res.status(403).json({ error: "forbidden" });
  const parsed = CrearSchema.safeParse(req.body ?? {});
  if (!parsed.success) return res.status(400).json({ error: "hijoId requerido" });

  const hijo = await prisma.usuario.findFirst({ where: { id: parsed.data.hijoId, isDeleted: { not: true } } });
  if (!hijo) return res.status(404).json({ error: "alumno no encontrado" });
  // El ADMIN usa la escuela del alumno; el resto, la suya, y el alumno tiene que ser de ella.
  const admin = hasRole(actor as never, "ADMIN");
  const escuelaId = admin ? (hijo.escuelaId ?? null) : (actor?.schoolId ?? null);
  if (!escuelaId) return res.status(409).json({ error: "el alumno no tiene escuela asignada" });
  if (!admin && !(await perteneceAEscuela(escuelaId, hijo.id))) {
    return res.status(404).json({ error: "alumno no encontrado" });
  }
  if (isStaffInRoles(resolveRoles(hijo)) || isParentInRoles(resolveRoles(hijo))) {
    return res.status(400).json({ error: "solo se invita a familias de alumnos" });
  }

  const creado = await crearCodigoPadre({ escuelaId, hijoId: hijo.id, creadoPor: idDe(actor) ?? "desconocido" });
  await recordAuditLog({
    actorId: idDe(actor) ?? "desconocido",
    action: "padres.codigo_creado",
    targetType: "CodigoInvitacionPadre",
    targetId: creado.id,
    metadata: { escuelaId, hijoId: hijo.id }
  });
  return res.status(201).json(creado);
});

// GET /api/escuela/codigos-padre?hijoId= — los códigos de un alumno (sin el código en claro).
codigosPadre.get("/api/escuela/codigos-padre", requireUser, async (req, res) => {
  const actor = req.user as ReqUser | undefined;
  if (!esGestorEscolar(actor)) return res.status(403).json({ error: "forbidden" });
  const hijoId = typeof req.query.hijoId === "string" ? req.query.hijoId : "";
  if (!hijoId) return res.status(400).json({ error: "hijoId requerido" });
  const admin = hasRole(actor as never, "ADMIN");
  const filas = await prisma.codigoInvitacionPadre.findMany({
    where: { hijoId, ...(admin ? {} : { escuelaId: actor?.schoolId ?? "" }) },
    orderBy: { createdAt: "desc" },
    take: 50
  });
  return res.json({
    items: filas.map((f) => ({ id: f.id, hijoId: f.hijoId, estado: f.estado, createdAt: f.createdAt, expiresAt: f.expiresAt, usadoPor: f.usadoPor, usadoAt: f.usadoAt }))
  });
});

// DELETE /api/escuela/codigos-padre/:id — anula un código que todavía no se usó.
codigosPadre.delete("/api/escuela/codigos-padre/:id", requireUser, async (req, res) => {
  const actor = req.user as ReqUser | undefined;
  if (!esGestorEscolar(actor)) return res.status(403).json({ error: "forbidden" });
  const admin = hasRole(actor as never, "ADMIN");
  const r = await prisma.codigoInvitacionPadre.updateMany({
    where: { id: String(req.params.id), estado: "activo", ...(admin ? {} : { escuelaId: actor?.schoolId ?? "" }) },
    data: { estado: "revocado" }
  });
  if (r.count !== 1) return res.status(404).json({ error: "código no encontrado o ya usado" });
  await recordAuditLog({ actorId: idDe(actor) ?? "desconocido", action: "padres.codigo_revocado", targetType: "CodigoInvitacionPadre", targetId: String(req.params.id), metadata: {} });
  return res.json({ ok: true });
});

// POST /api/hijos/canjear { codigo } — la familia (con rol padre/madre) vincula a su hijo.
codigosPadre.post("/api/hijos/canjear", requireUser, limiteCanje, async (req, res) => {
  const parentId = idDe(req.user as ReqUser | undefined);
  if (!parentId) return res.status(401).json({ error: "no autenticado" });
  const yo = await prisma.usuario.findFirst({ where: { id: parentId, isDeleted: { not: true } } });
  if (!yo || !isParentInRoles(resolveRoles(yo))) {
    return res.status(403).json({ error: "solo una cuenta de padre/madre canjea códigos; pedile a la escuela que te dé de alta" });
  }
  const codigo = typeof req.body?.codigo === "string" ? req.body.codigo : "";
  const r = await canjearCodigoPadre(codigo, parentId);
  if (!r.ok) return res.status(r.status).json({ error: r.error });
  return res.json({ ok: true, hijoId: r.hijoId, escuelaId: r.escuelaId });
});
