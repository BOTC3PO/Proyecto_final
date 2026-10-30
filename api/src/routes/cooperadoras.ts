/**
 * Cooperadora escolar. Es una asociación aparte de la escuela, con CUIT propio: los aportes a la cooperadora
 * van a SU cuenta, no a la de la escuela. La registra la dirección (al crear la escuela o después) y la
 * verifica el administrador de la plataforma; recién verificada puede conectar su Mercado Pago y emitir
 * cobros de tipo «cooperadora».
 */
import { randomUUID } from "node:crypto";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { requireAdmin } from "../lib/admin-auth";
import { hasRole } from "../lib/roles";
import { recordAuditLog } from "../lib/audit-log";
import { esDirectivoPrincipal } from "../lib/escuela-verificacion";

export const cooperadoras = Router();

type ReqUser = { id?: string; role?: string; roles?: string[]; schoolId?: string | null };

export const CooperadoraSchema = z.object({
  nombre: z.string().trim().min(3).max(200),
  cuit: z.string().trim().regex(/^\d{2}-?\d{8}-?\d$/, "CUIT inválido (11 dígitos)"),
  contactoEmail: z.string().email().nullish()
});

const ahora = () => new Date().toISOString();

/** Crea o actualiza la cooperadora de una escuela. Cambiar el nombre o el CUIT la vuelve a dejar pendiente. */
export async function guardarCooperadora(escuelaId: string, datos: z.infer<typeof CooperadoraSchema>, actorId: string) {
  const previa = await prisma.cooperadora.findFirst({ where: { escuelaId } });
  const cuit = datos.cuit.replace(/-/g, "");
  const t = ahora();
  const cambiaIdentidad = !previa || previa.cuit !== cuit || previa.nombre !== datos.nombre;
  const fila = previa
    ? await prisma.cooperadora.update({
        where: { id: previa.id },
        data: {
          nombre: datos.nombre,
          cuit,
          contactoEmail: datos.contactoEmail ?? null,
          ...(cambiaIdentidad ? { estadoVerificacion: "pendiente", motivoRechazo: null } : {}),
          updatedAt: t
        }
      })
    : await prisma.cooperadora.create({
        data: {
          id: randomUUID(),
          escuelaId,
          nombre: datos.nombre,
          cuit,
          contactoEmail: datos.contactoEmail ?? null,
          estadoVerificacion: "pendiente",
          createdAt: t,
          updatedAt: t
        }
      });
  if (cambiaIdentidad && previa) {
    // Otra asociación u otro CUIT: la cuenta de cobro conectada antes deja de valer.
    await prisma.escuelaPasarela.updateMany({ where: { escuelaId, titular: "cooperadora" }, data: { activa: false, updatedAt: t } });
  }
  await recordAuditLog({
    actorId,
    action: previa ? "cooperadora.actualizada" : "cooperadora.registrada",
    targetType: "Cooperadora",
    targetId: fila.id,
    metadata: { escuelaId, nombre: fila.nombre, cuit: fila.cuit }
  });
  return fila;
}

cooperadoras.get("/api/escuelas/:escuelaId/cooperadora", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = req.params.escuelaId as string;
  const esDireccion = hasRole(user, "DIRECTIVO") && user?.schoolId === escuelaId;
  if (!hasRole(user, "ADMIN") && !esDireccion) return res.status(403).json({ error: "forbidden" });
  const fila = await prisma.cooperadora.findFirst({ where: { escuelaId } });
  res.json({ cooperadora: fila });
});

cooperadoras.put("/api/escuelas/:escuelaId/cooperadora", requireUser, async (req, res) => {
  const user = req.user as ReqUser | undefined;
  const escuelaId = req.params.escuelaId as string;
  // Como la pasarela: define a qué cuenta va plata, así que es del directivo principal (o del admin).
  if (!hasRole(user, "ADMIN") && !(await esDirectivoPrincipal(user, escuelaId))) {
    return res.status(403).json({ error: "solo el directivo principal", code: "SOLO_DIRECTIVO_PRINCIPAL" });
  }
  const parsed = CooperadoraSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "datos inválidos", issues: parsed.error.issues });
  const fila = await guardarCooperadora(escuelaId, parsed.data, user?.id ?? "desconocido");
  res.json({ cooperadora: fila });
});

// ── Administrador: verificación ──────────────────────────────

cooperadoras.get("/api/admin/cooperadoras", requireAdmin, async (req, res) => {
  const estado = typeof req.query.estado === "string" ? req.query.estado : "pendiente";
  const filas = await prisma.cooperadora.findMany({ where: { estadoVerificacion: estado }, orderBy: { createdAt: "asc" }, take: 200 });
  const escuelas = filas.length
    ? await prisma.escuela.findMany({ where: { id: { in: filas.map((f) => f.escuelaId) } }, select: { id: true, name: true } })
    : [];
  const nombre = new Map(escuelas.map((e) => [e.id, e.name]));
  res.json({ items: filas.map((f) => ({ ...f, escuelaNombre: nombre.get(f.escuelaId) ?? f.escuelaId })) });
});

cooperadoras.post("/api/admin/cooperadoras/:id/verificacion", requireAdmin, async (req, res) => {
  const estado = req.body?.estado;
  if (estado !== "verificada" && estado !== "rechazada") return res.status(400).json({ error: "estado: verificada o rechazada" });
  const motivo = typeof req.body?.motivo === "string" ? req.body.motivo.trim().slice(0, 500) : null;
  if (estado === "rechazada" && !motivo) return res.status(400).json({ error: "indicá el motivo del rechazo" });
  const fila = await prisma.cooperadora.findFirst({ where: { id: req.params.id as string } });
  if (!fila) return res.status(404).json({ error: "cooperadora no encontrada" });
  const actualizada = await prisma.cooperadora.update({
    where: { id: fila.id },
    data: { estadoVerificacion: estado, motivoRechazo: estado === "rechazada" ? motivo : null, updatedAt: ahora() }
  });
  await recordAuditLog({
    actorId: (req.user as ReqUser | undefined)?.id ?? "admin",
    action: `cooperadora.${estado}`,
    targetType: "Cooperadora",
    targetId: fila.id,
    metadata: { escuelaId: fila.escuelaId, motivo }
  });
  res.json({ cooperadora: actualizada });
});
