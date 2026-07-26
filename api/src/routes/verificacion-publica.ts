/**
 * PLAN-roles-v3 B2 — verificación del perfil PÚBLICO.
 *
 * Es otra máquina que la de escuela, aunque se parezca: allá se valida una
 * institución, acá a una persona que dice ser profesora o directiva **fuera
 * del registro**, sin una escuela que responda por ella.
 *
 * Lo que gatea es la PRESENTACIÓN, no los permisos: sin verificar, el rol
 * no se muestra en el perfil público. El rol de intranet (la membresía) no
 * se toca — ahí la escuela ya lo avala, y bloquearlo sería castigar a un
 * docente real por no haber hecho un trámite que no le corresponde.
 */
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { requireAdmin } from "../lib/admin-auth";
import { recordAuditLog } from "../lib/audit-log";
import { VerificacionPublicaSchema } from "../schema/usuario";

export const verificacionPublica = Router();

const now = () => new Date().toISOString();
const getId = (req: { user?: { id?: string; _id?: { toString?: () => string } } }) =>
  req.user?.id ?? req.user?._id?.toString?.() ?? null;

const parseDatos = (raw: string | null | undefined): Record<string, unknown> | null => {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return null;
  }
};

// POST /api/verificacion-publica — pedir la verificación del perfil público.
verificacionPublica.post("/api/verificacion-publica", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const parsed = VerificacionPublicaSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "datos inválidos", issues: parsed.error.issues });
  }

  const usuario = await prisma.usuario.findFirst({ where: { id: userId, isDeleted: { not: true } } });
  if (!usuario) return res.status(404).json({ error: "usuario no encontrado" });
  if (usuario.verificacionPublica === "verificada") {
    return res.status(409).json({ error: "ya está verificado" });
  }

  await prisma.usuario.update({
    where: { id: userId },
    data: {
      verificacionPublica: "pendiente",
      datosVerificacion: JSON.stringify(parsed.data),
      motivoRechazoPublico: null,
      updatedAt: now()
    }
  });
  await recordAuditLog({
    actorId: userId,
    action: "perfil.verificacion_solicitada",
    targetType: "Usuario",
    targetId: userId,
    metadata: { rolDeclarado: parsed.data.rolDeclarado }
  });
  return res.status(201).json({ ok: true, estado: "pendiente" });
});

// GET /api/verificacion-publica/mi-estado — para que el propio usuario sepa
// en qué está, incluido el motivo si lo rechazaron.
verificacionPublica.get("/api/verificacion-publica/mi-estado", requireUser, async (req, res) => {
  const userId = getId(req as never);
  if (!userId) return res.status(401).json({ error: "no autenticado" });
  const usuario = await prisma.usuario.findFirst({ where: { id: userId } });
  if (!usuario) return res.status(404).json({ error: "usuario no encontrado" });
  return res.json({
    estado: usuario.verificacionPublica,
    motivo: usuario.motivoRechazoPublico ?? null,
    datos: parseDatos(usuario.datosVerificacion)
  });
});

// GET /api/verificacion-publica/solicitudes — bandeja del admin.
verificacionPublica.get("/api/verificacion-publica/solicitudes", requireAdmin, async (req, res) => {
  const estado = typeof req.query.estado === "string" ? req.query.estado : "pendiente";
  const rows = await prisma.usuario.findMany({
    where: { verificacionPublica: estado, isDeleted: { not: true } },
    select: {
      id: true,
      fullName: true,
      username: true,
      email: true,
      datosVerificacion: true,
      updatedAt: true
    }
  });
  return res.json({
    items: rows.map((u) => ({
      id: u.id,
      nombre: u.fullName || u.username || u.id,
      email: u.email,
      datos: parseDatos(u.datosVerificacion),
      updatedAt: u.updatedAt
    }))
  });
});

// POST /api/verificacion-publica/:id/resolver — el admin aprueba o rechaza.
verificacionPublica.post("/api/verificacion-publica/:id/resolver", requireAdmin, async (req, res) => {
  const targetId = req.params.id as string;
  const estado = typeof req.body?.estado === "string" ? req.body.estado : "";
  if (estado !== "verificada" && estado !== "rechazada") {
    return res.status(400).json({ error: "estado debe ser 'verificada' o 'rechazada'" });
  }
  const motivo = typeof req.body?.motivo === "string" && req.body.motivo.trim() ? req.body.motivo.trim() : null;
  if (estado === "rechazada" && !motivo) {
    return res.status(400).json({ error: "un rechazo requiere motivo" });
  }

  const usuario = await prisma.usuario.findFirst({ where: { id: targetId, isDeleted: { not: true } } });
  if (!usuario) return res.status(404).json({ error: "usuario no encontrado" });

  await prisma.usuario.update({
    where: { id: targetId },
    data: {
      verificacionPublica: estado,
      motivoRechazoPublico: estado === "rechazada" ? motivo : null,
      updatedAt: now()
    }
  });
  await recordAuditLog({
    actorId: getId(req as never) ?? "admin",
    action: estado === "verificada" ? "perfil.verificado" : "perfil.verificacion_rechazada",
    targetType: "Usuario",
    targetId,
    metadata: { antes: usuario.verificacionPublica, motivo }
  });
  return res.json({ ok: true, estado });
});
