import { Router } from "express";
import { isMinor } from "../lib/age";
import { recordAuditLog } from "../lib/audit-log";
import { ENV } from "../lib/env";
import { clavePrivada, firmarPermiso, rolesParaLaApp, VERSION_PERMISO } from "../lib/permiso-offline";
import { createRateLimiter } from "../lib/rate-limit";
import { resolveRoles } from "../lib/roles";
import { requireUser } from "../lib/user-auth";

export const offline = Router();

const DISPOSITIVO = /^[A-Za-z0-9_-]{16,64}$/;
const DIA_MS = 24 * 60 * 60 * 1000;

/**
 * L8 — POST /api/offline/permiso: activa o renueva una cuenta en la app sin conexión.
 *
 * La app lo pide justo después de iniciar sesión con red (activación) y en cada sincronización (renovación).
 * Si la cuenta está suspendida o dada de baja, `requireUser` ya responde 403 y la app bloquea el perfil.
 */
offline.post(
  "/api/offline/permiso",
  createRateLimiter({ windowMs: 60 * 60 * 1000, limit: 30 }),
  requireUser,
  async (req, res) => {
    const usuario = (req as { user?: { _id?: string; roles?: string[]; role?: string; schoolId?: string | null } }).user;
    const fila = res.locals.userDoc as
      | { id: string; username?: string | null; email?: string | null; fullName?: string | null; birthdate?: string | null }
      | undefined;
    if (!usuario?._id || !fila) return res.status(401).json({ error: "no autenticado" });

    const dispositivo = req.body?.dispositivo;
    if (typeof dispositivo !== "string" || !DISPOSITIVO.test(dispositivo)) {
      return res.status(400).json({ error: "dispositivo inválido", code: "DISPOSITIVO_INVALIDO" });
    }

    let clave;
    try {
      clave = clavePrivada();
    } catch {
      return res.status(503).json({ error: "La app sin conexión no está disponible.", code: "PERMISO_NO_CONFIGURADO" });
    }
    if (!clave) {
      return res.status(503).json({ error: "La app sin conexión no está disponible.", code: "PERMISO_NO_CONFIGURADO" });
    }

    const roles = rolesParaLaApp(resolveRoles(usuario));
    if (roles.length === 0) {
      return res.status(403).json({
        error: "La app sin conexión es para alumnos, profesores y padres o tutores. Agregá el rol de alumno desde la web.",
        code: "SIN_ROL_PARA_APP"
      });
    }

    const ahora = Date.now();
    const datos = {
      v: VERSION_PERMISO,
      sub: String(usuario._id),
      username: fila.username ?? null,
      nombre: fila.fullName ?? null,
      email: fila.email ?? null,
      roles,
      schoolId: usuario.schoolId ?? null,
      menor: isMinor(fila.birthdate),
      dispositivo,
      emitido: new Date(ahora).toISOString(),
      vence: new Date(ahora + Math.max(1, ENV.OFFLINE_PERMISO_DIAS) * DIA_MS).toISOString()
    };
    await recordAuditLog({
      actorId: datos.sub,
      action: "offline.permiso_emitido",
      targetType: "Usuario",
      targetId: datos.sub,
      metadata: { dispositivo, roles, vence: datos.vence }
    });
    res.json({ ...firmarPermiso(datos, clave), vence: datos.vence });
  }
);
