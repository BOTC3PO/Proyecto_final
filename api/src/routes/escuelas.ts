import express, { Router } from "express";
import { randomUUID } from "crypto";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";
import { createRateLimiter } from "../lib/rate-limit";
import { toObjectId } from "../lib/ids";
import { getQueryString } from "../lib/query";
import { hasRole } from "../lib/roles";
import { requireUser } from "../lib/user-auth";
import { EscuelaBrandingSchema, EscuelaPatchSchema, EscuelaSchema, EscuelaSolicitudSchema } from "../schema/escuela";
import { sincronizarMembresia } from "../lib/memberships";
import { recordAuditLog } from "../lib/audit-log";

export const escuelas = Router();

const escuelasMutationLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  limit: 30
});

type ReqUser = { _id?: { toString?: () => string } | string; role?: string; roles?: string[]; schoolId?: string | null };

// PLAN-C §4 (ítem 29) — quién puede editar el branding de una escuela:
// ADMIN (cualquiera) o DIRECTIVO de esa MISMA escuela. Mismo patrón que
// cobros.ts/escuela-pasarelas.ts.
const puedeGestionarEscuela = (user: ReqUser | undefined, escuelaId: string): boolean =>
  hasRole(user, "ADMIN") || (hasRole(user, "DIRECTIVO") && user?.schoolId === escuelaId);

// `branding` se guarda como JSON serializado en texto (mismo patrón que
// el resto del schema). Acá lo parseamos para que el front no tenga que
// hacer JSON.parse manual; si está corrupto o ausente, null.
const parseBranding = (raw: string | null | undefined): Record<string, unknown> | null => {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const getRequesterId = (req: express.Request) =>
  (req as { user?: { _id?: { toString?: () => string } } }).user?._id?.toString?.() ?? null;

escuelas.post("/api/escuelas", requireAdmin, escuelasMutationLimiter, async (req, res) => {
  try {
    const parsed = EscuelaSchema.parse(req.body);
    const now = new Date().toISOString();
    const created = await prisma.escuela.create({
      data: {
        id: randomUUID(),
        name: parsed.name,
        code: parsed.code,
        address: parsed.address,
        subscriptionStatus: parsed.subscriptionStatus,
        plan: parsed.plan,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    });
    // PLAN-C §2 (ítem 27): el creador queda asociado a la escuela que crea,
    // manteniendo su rol ADMIN — evita admins huérfanos de escuela por
    // default (síntoma raíz de PLAN-A §1). Un admin de plataforma sin
    // escuela sigue siendo posible, pero ahora es una reasignación
    // explícita después vía PATCH /api/admin/usuarios/:id/escuela, no un
    // olvido silencioso acá.
    const requesterId = getRequesterId(req);
    if (requesterId) {
      await prisma.usuario.updateMany({
        where: { id: requesterId },
        data: { escuelaId: created.id, updatedAt: now }
      });
    }
    res.status(201).json({ id: created.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

// ─── Alta autogestionada con aprobación ──────────────────────────────
// POST /api/escuelas/solicitar — cualquier usuario autenticado pide dar de
// alta su escuela. Nace "pendiente": puede usar aulas, módulos y
// evaluaciones, pero NO cobrar (lib/escuela-verificacion.ts) hasta que el
// admin la verifique. Quien la registra queda como DIRECTIVO PRINCIPAL.
//
// El gate no es opcional: un DIRECTIVO puede conectar una pasarela y
// emitirle cuotas a familias. Sin aprobación previa, cualquiera inventa una
// escuela y cobra con la plataforma de por medio.
escuelas.post("/api/escuelas/solicitar", requireUser, escuelasMutationLimiter, async (req, res) => {
  const requesterId = getRequesterId(req);
  if (!requesterId) return res.status(401).json({ error: "no autenticado" });

  const parsed = EscuelaSolicitudSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "datos inválidos", issues: parsed.error.issues });
  }

  const nowIso = new Date().toISOString();
  const { name, ...datos } = parsed.data;
  const created = await prisma.escuela.create({
    data: {
      id: randomUUID(),
      name,
      isDeleted: false,
      estadoVerificacion: "pendiente",
      directivoPrincipalId: requesterId,
      datosVerificacion: JSON.stringify(datos),
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });

  // El solicitante pasa a ser DIRECTIVO de SU escuela. La membresía es la
  // fuente de verdad (PLAN-multirol): el rol de la sesión sale de ahí.
  await sincronizarMembresia({
    usuarioId: requesterId,
    escuelaId: created.id,
    rolUsuario: "DIRECTIVO",
    fechaAlta: nowIso
  });
  await prisma.usuario.updateMany({
    where: { id: requesterId },
    data: { escuelaId: created.id, updatedAt: nowIso }
  });

  await recordAuditLog({
    actorId: requesterId,
    action: "escuela.solicitada",
    targetType: "Escuela",
    targetId: created.id,
    metadata: { name, datos }
  });

  return res.status(201).json({
    id: created.id,
    estadoVerificacion: created.estadoVerificacion,
    puedeCobrar: false
  });
});

// GET /api/escuelas/solicitudes — bandeja del admin.
escuelas.get("/api/escuelas/solicitudes", requireAdmin, async (req, res) => {
  const estado = typeof req.query.estado === "string" ? req.query.estado : "pendiente";
  const rows = await prisma.escuela.findMany({
    where: { estadoVerificacion: estado, isDeleted: { not: true } },
    orderBy: { createdAt: "desc" }
  });
  const ids = rows.map((r) => r.directivoPrincipalId).filter(Boolean) as string[];
  const principales = ids.length
    ? await prisma.usuario.findMany({
        where: { id: { in: ids } },
        select: { id: true, fullName: true, username: true, email: true }
      })
    : [];
  const porId = new Map(principales.map((u) => [u.id, u]));
  return res.json({
    items: rows.map((r) => ({
      id: r.id,
      name: r.name,
      estadoVerificacion: r.estadoVerificacion,
      createdAt: r.createdAt,
      datos: parseBranding(r.datosVerificacion),
      directivoPrincipal: r.directivoPrincipalId ? (porId.get(r.directivoPrincipalId) ?? null) : null
    }))
  });
});

// POST /api/escuelas/:id/verificar — el admin aprueba o rechaza. Es la
// única vía para habilitar cobros, y queda auditada.
escuelas.post("/api/escuelas/:id/verificar", requireAdmin, async (req, res) => {
  const escuelaId = req.params.id as string;
  const estado = typeof req.body?.estado === "string" ? req.body.estado : "";
  if (estado !== "verificada" && estado !== "rechazada") {
    return res.status(400).json({ error: "estado debe ser 'verificada' o 'rechazada'" });
  }
  const motivo = typeof req.body?.motivo === "string" && req.body.motivo.trim() ? req.body.motivo : null;
  if (estado === "rechazada" && !motivo) {
    return res.status(400).json({ error: "un rechazo requiere motivo" });
  }

  const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
  if (!escuela) return res.status(404).json({ error: "escuela no encontrada" });

  await prisma.escuela.update({
    where: { id: escuelaId },
    data: {
      estadoVerificacion: estado,
      motivoRechazo: estado === "rechazada" ? motivo : null,
      updatedAt: new Date().toISOString()
    }
  });
  await recordAuditLog({
    actorId: getRequesterId(req) ?? "admin",
    action: estado === "verificada" ? "escuela.verificada" : "escuela.rechazada",
    targetType: "Escuela",
    targetId: escuelaId,
    metadata: { antes: escuela.estadoVerificacion, motivo }
  });

  return res.json({ ok: true, estadoVerificacion: estado });
});


escuelas.get("/api/escuelas", requireUser, async (req, res) => {
  const limit = clampLimit(getQueryString(req.query.limit));
  const offset = Number(getQueryString(req.query.offset) ?? 0);
  const skip = Number.isNaN(offset) || offset < 0 ? 0 : offset;
  const items = await prisma.escuela.findMany({
    where: { isDeleted: { not: true } },
    skip,
    take: limit,
    orderBy: { createdAt: "desc" }
  });
  res.json({ items: items.map((i) => ({ ...i, branding: parseBranding(i.branding) })), limit, offset: skip });
});

escuelas.get("/api/escuelas/code/:code", async (req, res) => {
  const escuela = await prisma.escuela.findFirst({
    where: { code: req.params.code, isDeleted: { not: true } },
    select: { id: true, name: true }
  });
  if (!escuela) return res.status(404).json({ error: "not found" });
  res.json({ id: escuela.id, name: escuela.name });
});

escuelas.get("/api/escuelas/:id", async (req, res) => {
  const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!toObjectId(rawId)) return res.status(400).json({ error: "invalid id" });
  const item = await prisma.escuela.findFirst({
    where: { id: rawId, isDeleted: { not: true } }
  });
  if (!item) return res.status(404).json({ error: "not found" });
  res.json({ ...item, branding: parseBranding(item.branding) });
});

// PLAN-C §4 (ítem 29) — personalización por escuela: logo/ícono/colores.
escuelas.patch("/api/escuelas/:id/branding", requireUser, escuelasMutationLimiter, async (req, res) => {
  try {
    const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!toObjectId(rawId)) return res.status(400).json({ error: "invalid id" });
    const escuela = await prisma.escuela.findFirst({ where: { id: rawId, isDeleted: { not: true } } });
    if (!escuela) return res.status(404).json({ error: "not found" });

    const requester = (req as { user?: ReqUser }).user;
    if (!puedeGestionarEscuela(requester, rawId as string)) {
      return res.status(403).json({ error: "forbidden" });
    }

    const parsed = EscuelaBrandingSchema.parse(req.body);
    const actual = parseBranding(escuela.branding) ?? {};
    const merged = { ...actual, ...parsed };
    await prisma.escuela.update({
      where: { id: rawId },
      data: { branding: JSON.stringify(merged), updatedAt: new Date().toISOString() }
    });
    res.json({ ok: true, branding: merged });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

escuelas.patch("/api/escuelas/:id", requireUser, escuelasMutationLimiter, async (req, res) => {
  try {
    const parsed = EscuelaPatchSchema.parse(req.body);
    const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!toObjectId(rawId)) return res.status(400).json({ error: "invalid id" });
    const escuela = await prisma.escuela.findFirst({
      where: { id: rawId, isDeleted: { not: true } }
    });
    if (!escuela) return res.status(404).json({ error: "not found" });
    const requester = (req as { user?: { _id?: { toString?: () => string }; role?: string; roles?: string[] } }).user;
    const isPlatformAdmin = hasRole(requester, "ADMIN");
    if (!isPlatformAdmin) {
      return res.status(403).json({ error: "forbidden" });
    }
    const shouldAuditPlan = parsed.plan !== undefined && parsed.plan !== escuela.plan;
    const shouldAuditStatus =
      parsed.subscriptionStatus !== undefined && parsed.subscriptionStatus !== escuela.subscriptionStatus;
    if (shouldAuditPlan || shouldAuditStatus) {
      await prisma.eventoSuscripcion.create({
        data: {
          json: JSON.stringify({
            schoolId: escuela.id,
            previousPlan: escuela.plan ?? null,
            newPlan: parsed.plan ?? escuela.plan ?? null,
            previousStatus: escuela.subscriptionStatus ?? null,
            newStatus: parsed.subscriptionStatus ?? escuela.subscriptionStatus ?? null,
            actorId: getRequesterId(req)
          }),
          createdAt: new Date().toISOString()
        }
      });
    }
    const update: Record<string, unknown> = { updatedAt: new Date() };
    if (parsed.plan !== undefined) update.plan = parsed.plan;
    if (parsed.subscriptionStatus !== undefined) update.subscriptionStatus = parsed.subscriptionStatus;
    await prisma.escuela.update({
      where: { id: rawId },
      data: update as Parameters<typeof prisma.escuela.update>[0]["data"]
    });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
