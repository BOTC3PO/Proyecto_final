import fs from "node:fs";
import path from "node:path";
import { Router } from "express";
import { isMinor } from "../lib/age";
import { recordAuditLog } from "../lib/audit-log";
import { estaBaneado, respuestaBaneado } from "../lib/ban";
import { ENV } from "../lib/env";
import { clavePrivada, firmarPermiso, leerPermiso, rolesParaLaApp, VERSION_PERMISO } from "../lib/permiso-offline";
import { prisma } from "../lib/prisma";
import { createRateLimiter } from "../lib/rate-limit";
import { resolveRoles } from "../lib/roles";
import { requireUser } from "../lib/user-auth";
import { cargarContextoVisibilidad } from "./modulos";

export const offline = Router();
/** Lo que la app pide sin una sesión de la web: va montado antes de `requireUser`. */
export const offlinePublico = Router();

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

type EntradaIndice = { id: string; archivo: string };

function leerIndice(): { formato: number; paquetes: EntradaIndice[] } {
  if (!ENV.OFFLINE_PAQUETES_DIR) return { formato: 1, paquetes: [] };
  try {
    return JSON.parse(fs.readFileSync(path.join(ENV.OFFLINE_PAQUETES_DIR, "indice.json"), "utf8"));
  } catch {
    return { formato: 1, paquetes: [] };
  }
}

const limitePaquetes = createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 300 });

/**
 * L8 — paquetes de la app sin conexión: el temario oficial por materia y el diccionario por idioma. Son públicos
 * (el plan prevé publicarlos también para el modo autónomo); los módulos de las escuelas van aparte.
 */
offlinePublico.get("/api/offline/paquetes", limitePaquetes, (_req, res) => {
  res.json(leerIndice());
});

offlinePublico.get("/api/offline/paquetes/archivo/:archivo", limitePaquetes, (req, res) => {
  // Solo los archivos del índice: el nombre nunca arma una ruta por su cuenta.
  const entrada = leerIndice().paquetes.find((p) => p.archivo === req.params.archivo);
  if (!entrada) return res.status(404).json({ error: "not found" });
  // El nombre lleva la versión: el contenido de un archivo no cambia nunca.
  res.sendFile(path.basename(entrada.archivo), {
    root: path.resolve(ENV.OFFLINE_PAQUETES_DIR),
    maxAge: "365d",
    immutable: true,
    headers: { "Content-Type": "application/gzip" },
  });
});

/**
 * L8 — GET /api/offline/escuela: los módulos de las escuelas de la persona (visibilidad «escuela») y los asignados a
 * sus aulas o a las de sus hijos, con su teoría. No van los del temario oficial (vienen en los paquetes) ni los
 * cuestionarios: los exámenes de los docentes no se descargan.
 *
 * Se autentica con el permiso firmado (`Authorization: Permiso <permiso>.<firma>`), así la app no guarda tokens de
 * la web.
 */
offlinePublico.get("/api/offline/escuela", createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 60 }), async (req, res) => {
  const datos = leerPermiso(req.headers.authorization);
  if (!datos) return res.status(401).json({ error: "Permiso inválido o vencido", code: "PERMISO_INVALIDO" });
  const usuario = await prisma.usuario.findFirst({ where: { id: datos.sub, isDeleted: { not: true } } });
  if (!usuario) return res.status(403).json({ error: "User not found" });
  if (estaBaneado(usuario as { isBanned?: boolean; bannedUntil?: string | null })) {
    return res.status(403).json(respuestaBaneado(usuario as { bannedUntil?: string | null }));
  }

  const membresias = await prisma.membresia.findMany({ where: { usuarioId: datos.sub, estado: "activa" }, select: { escuelaId: true } });
  const escuelas = [...new Set([...membresias.map((m) => m.escuelaId), ...(usuario.escuelaId ? [usuario.escuelaId] : [])])];
  const { idsConVinculo } = await cargarContextoVisibilidad({ id: datos.sub, schoolId: null } as never);
  const modulos = await prisma.modulo.findMany({
    where: {
      isDeleted: { not: true },
      NOT: { id: { startsWith: "cont-" } },
      OR: [
        ...(escuelas.length ? [{ visibility: "escuela", schoolId: { in: escuelas }, NOT: { descatalogado: true } }] : []),
        ...(idsConVinculo.size ? [{ id: { in: [...idsConVinculo] } }] : []),
      ],
    },
    select: {
      id: true, titulo: true, descripcion: true, subject: true, level: true, category: true, slug: true, libroId: true,
      dependencies: true, ownerUserId: true, schoolId: true, visibility: true, theoryItems: true, scoringConfig: true,
      createdAt: true, updatedAt: true,
    },
    take: 5000,
  });
  const actualizado = modulos.reduce((max, m) => (m.updatedAt > max ? m.updatedAt : max), "");
  res.json({ escuelas, actualizado, modulos: escuelas.length || idsConVinculo.size ? modulos : [] });
});
