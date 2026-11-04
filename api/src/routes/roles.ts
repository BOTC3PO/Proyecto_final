import { resolvePrimaryRole } from "../lib/roles";
import { Router } from "express";
import { randomUUID } from "crypto";
import { isMinor } from "../lib/age";
import { requireUser } from "../lib/user-auth";
import { prisma } from "../lib/prisma";

export const roles = Router();

const VALID_TARGET_ROLES = new Set([
  "TEACHER", "PARENT", "DIRECTIVO", "ADMIN"
]);

/**
 * FIX-TEST4-ROLE-02 — antes un usuario con cuenta USER (ex-alumno
 * o un alumno adulto) no tenía forma de auto-solicitar un cambio
 * de rol (TEACHER / PARENT / DIRECTIVO). El admin tenía que
 * cambiarlo manualmente desde `/admin/usuarios`, lo cual no
 * escala. Ahora: el usuario puede pedir el cambio desde `/perfil`
 * o cualquier punto de la UI. La solicitud queda como
 * `Suggestion` con `suggestionType = "CAMBIO_ROL"` y el admin la
 * aprueba desde el panel de sugerencias.
 *
 * Validaciones:
 *  - El usuario debe ser mayor de 18 años (helper `isMinor`).
 *  - El target_role debe ser uno de los canónicos.
 *  - Un usuario no puede pedir el mismo rol que ya tiene.
 *  - Si ya tiene una solicitud pendiente del mismo tipo, la
 *    reutilizamos (idempotente — no spamea al admin).
 *
 * NOTA: la validación de edad usa el helper canónico `lib/age.ts`
 * para que FASE 6 (autoservicio alumno→padre) reuse la MISMA
 * semántica: sin birthdate ⇒ menor (rechazo).
 */

type Respuesta = { status: number; body: Record<string, unknown> };

/**
 * El pedido de cambio de rol, sin Express: lo usan `POST /api/solicitar-rol` y la sincronización de la app sin conexión
 * (L8), que manda los pedidos que quedaron en su cola.
 */
export async function solicitarCambioDeRol(userId: string, target_role: unknown, motivo: unknown): Promise<Respuesta> {
  if (typeof target_role !== "string" || !VALID_TARGET_ROLES.has(target_role)) {
    return { status: 400, body: { error: "target_role inválido. Debe ser TEACHER, PARENT, DIRECTIVO o ADMIN." } };
  }

  if (typeof motivo === "string" && motivo.length > 2000) {
    return { status: 400, body: { error: "El motivo admite hasta 2000 caracteres." } };
  }

  // Leer el user para chequear birthdate y rol actual.
  const user = await prisma.usuario.findFirst({
    where: { id: userId },
    select: { id: true, roles: true, birthdate: true, isDeleted: true },
  });
  if (!user || user.isDeleted) {
    return { status: 404, body: { error: "usuario no encontrado" } };
  }
  if (isMinor(user.birthdate)) {
    return { status: 403, body: { error: "Necesitás ser mayor de 18 años para solicitar un cambio de rol." } };
  }
  if (resolvePrimaryRole(user) === target_role) {
    return { status: 409, body: { error: `Ya tenés el rol ${target_role}.` } };
  }

  // FIX-TEST4-ROLE-02 — si ya tiene una solicitud pendiente
  // del mismo tipo, la devolvemos en vez de duplicar. Esto
  // evita que un usuario spamee el panel del admin.
  const existing = await prisma.suggestion.findFirst({
    where: {
      createdBy: userId,
      suggestionType: "CAMBIO_ROL",
      status: "PENDING",
    },
  });
  if (existing) {
    return {
      status: 200,
      body: { id: existing.id, alreadyPending: true, message: "Ya tenés una solicitud pendiente. El admin la revisará pronto." },
    };
  }

  const id = randomUUID();
  const now = new Date().toISOString();
  const title = `Cambio de rol: ${resolvePrimaryRole(user)} → ${target_role}`;
  const body = [
    `El usuario ${userId} solicita cambio de rol a ${target_role}.`,
    typeof motivo === "string" && motivo.trim()
      ? `\n\nMotivo:\n${motivo.trim()}`
      : ""
  ].join("");

  try {
    await prisma.suggestion.create({
      data: {
        id,
        suggestionType: "CAMBIO_ROL",
        targetType: "user",
        targetId: userId,
        title,
        body,
        createdBy: userId,
        createdAt: now,
        status: "PENDING",
      },
    });
    return { status: 201, body: { id, message: "Solicitud enviada. El admin la revisará." } };
  } catch (err) {
    return { status: 500, body: { error: err instanceof Error ? err.message : "internal server error" } };
  }
}

// POST /api/solicitar-rol — pedir cambio de rol
roles.post("/api/solicitar-rol", requireUser, async (req, res) => {
  const userId = (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?._id?.toString?.()
    ?? (req as { user?: { id?: string } }).user?.id
    ?? "";
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const { target_role, motivo } = req.body as Record<string, unknown>;
  const r = await solicitarCambioDeRol(userId, target_role, motivo);
  res.status(r.status).json(r.body);
});
