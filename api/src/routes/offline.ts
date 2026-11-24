import fs from "node:fs";
import path from "node:path";
import { Router } from "express";
import { z } from "zod";
import { isMinor } from "../lib/age";
import { recordAuditLog } from "../lib/audit-log";
import { estaBaneado, respuestaBaneado } from "../lib/ban";
import { ENV } from "../lib/env";
import {
  clavePrivada, firmarPermiso, huellaDeCredencial, leerPermiso, rolesParaLaApp, VERSION_PERMISO, type Permiso,
} from "../lib/permiso-offline";
import { prisma } from "../lib/prisma";
import { createRateLimiter } from "../lib/rate-limit";
import { resolveRoles } from "../lib/roles";
import { rolesVigentes } from "../lib/roles-vigentes";
import { requireUser } from "../lib/user-auth";
import { cargarContextoVisibilidad } from "./modulos";
import { corregirIntentoSinConexion } from "./quiz-attempts";
import { solicitarCambioDeRol } from "./roles";

export const offline = Router();
/** Lo que la app pide sin una sesión de la web: va montado antes de `requireUser`. */
export const offlinePublico = Router();

const DISPOSITIVO = /^[A-Za-z0-9_-]{16,64}$/;
const DIA_MS = 24 * 60 * 60 * 1000;

type FilaUsuario = {
  id: string; username?: string | null; email?: string | null; fullName?: string | null; birthdate?: string | null;
  passwordHash?: string | null;
};

function datosDelPermiso(fila: FilaUsuario, roles: string[], schoolId: string | null, dispositivo: string): Permiso {
  const ahora = Date.now();
  return {
    v: VERSION_PERMISO,
    sub: String(fila.id),
    username: fila.username ?? null,
    nombre: fila.fullName ?? null,
    email: fila.email ?? null,
    roles,
    schoolId,
    menor: isMinor(fila.birthdate),
    dispositivo,
    emitido: new Date(ahora).toISOString(),
    vence: new Date(ahora + Math.max(1, ENV.OFFLINE_PERMISO_DIAS) * DIA_MS).toISOString(),
    cred: huellaDeCredencial(fila.passwordHash),
  };
}

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
    const fila = res.locals.userDoc as FilaUsuario | undefined;
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

    const datos = datosDelPermiso({ ...fila, id: String(usuario._id) }, roles, usuario.schoolId ?? null, dispositivo);
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

type Descarga = { archivo: string; plataforma: string; arquitectura?: string | null; bytes?: number; sha256?: string };
const TIPOS_DE_DESCARGA: Record<string, string> = {
  ".apk": "application/vnd.android.package-archive",
  ".exe": "application/vnd.microsoft.portable-executable",
  ".deb": "application/vnd.debian.binary-package",
  ".gz": "application/gzip",
  ".zip": "application/zip",
};

function leerDescargas(): { formato: number; version: string | null; generado: string | null; archivos: Descarga[] } {
  const vacio = { formato: 1, version: null, generado: null, archivos: [] };
  if (!ENV.OFFLINE_DESCARGAS_DIR) return vacio;
  try {
    const d = JSON.parse(fs.readFileSync(path.join(ENV.OFFLINE_DESCARGAS_DIR, "descargas.json"), "utf8"));
    return { ...vacio, ...d, archivos: Array.isArray(d.archivos) ? d.archivos : [] };
  } catch {
    return vacio;
  }
}

const limiteDescargas = createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 60 });

/**
 * L8 — instaladores de la app sin conexión (Android, Windows, Linux y el paquete completo), para la página pública
 * `/descargas`. Los arma `apps/offline/scripts/armar-descargas.ts` en `OFFLINE_DESCARGAS_DIR`.
 */
offlinePublico.get("/api/offline/descargas", limiteDescargas, (_req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.json(leerDescargas());
});

offlinePublico.get("/api/offline/descargas/archivo/:archivo", limiteDescargas, (req, res) => {
  // Como con los paquetes: solo lo que está en el índice.
  const entrada = leerDescargas().archivos.find((a) => a.archivo === req.params.archivo);
  if (!entrada) return res.status(404).json({ error: "not found" });
  const nombre = path.basename(entrada.archivo);
  // Sin `immutable`: si se vuelve a armar la misma versión (una corrección), el archivo cambia con el mismo nombre.
  res.sendFile(nombre, {
    root: path.resolve(ENV.OFFLINE_DESCARGAS_DIR),
    maxAge: "1d",
    headers: {
      "Content-Type": TIPOS_DE_DESCARGA[path.extname(nombre).toLowerCase()] ?? "application/octet-stream",
      "Content-Disposition": `attachment; filename="${nombre.replace(/[^A-Za-z0-9._-]/g, "_")}"`,
    },
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

// ── Sincronización ──────────────────────────────────────────────────────────────────────────────────────────────

const EVENTOS_POR_LLAMADA = 100;
const INTENTOS_POR_BAJADA = 200;
const ESTADOS_BAJADA = ["submitted", "graded", "pending_review"];

const Respuestas = z.record(z.string(), z.union([z.string(), z.array(z.string())]));
const IntentoSubido = z.object({
  id: z.string(),
  quizId: z.string().min(1).max(300),
  quizVersionId: z.string().min(1).max(300),
  seed: z.string().max(64).nullable(),
  attemptNo: z.number().int().min(1).max(100_000),
  sorteo: z.string().max(64),
  startedAt: z.string().max(40),
  submittedAt: z.string().max(40),
  answers: Respuestas,
  presentedIds: z.array(z.string().max(300)).max(1000).optional(),
  generatedQuestions: z.array(z.record(z.string(), z.unknown())).max(1000).optional(),
  score: z.number(),
  maxScore: z.number(),
  events: z.record(z.string(), z.unknown()).optional(),
});

type Evento = { id: string; tipo: string; datos: unknown };

async function aplicarEvento(permiso: Permiso, e: Evento, baneado: boolean): Promise<Record<string, unknown>> {
  if (e.tipo === "intento") {
    const i = IntentoSubido.safeParse(e.datos);
    if (!i.success) return { estado: "rechazado", motivo: "intento con datos inválidos" };
    // Las preguntas se sortean con el identificador de la cuenta o, si el intento lo hizo un usuario local que después
    // se vinculó, con el de ese usuario.
    if (i.data.sorteo !== permiso.sub && !/^local-[0-9a-f]{16}$/.test(i.data.sorteo)) {
      return { estado: "rechazado", motivo: "intento con datos inválidos" };
    }
    return corregirIntentoSinConexion(permiso.sub, permiso.dispositivo, i.data as never);
  }
  if (e.tipo === "solicitar-rol") {
    if (baneado) return { estado: "rechazado", motivo: "cuenta suspendida" };
    const d = (e.datos ?? {}) as { target_role?: unknown; motivo?: unknown };
    // El administrador lo otorga solo otro administrador; no se pide desde la app.
    if (d.target_role === "ADMIN") return { estado: "rechazado", motivo: "rol no disponible desde la app" };
    const r = await solicitarCambioDeRol(permiso.sub, d.target_role, d.motivo);
    return {
      estado: r.status < 300 ? "aplicado" : "rechazado",
      mensaje: (r.body.message ?? r.body.error ?? null) as string | null,
    };
  }
  // El progreso del dispositivo no se acredita: el oficial sale de la nueva corrección de cada intento.
  if (e.tipo === "progreso") return { estado: "ignorado" };
  return { estado: "ignorado" };
}

/**
 * L8 — POST /api/offline/sync: la sincronización de la app sin conexión, en las dos direcciones.
 *
 * - Subida: `eventos`, en orden. Cada intento se vuelve a corregir en el servidor (vale esa nota) y recién ahí suma
 *   monedas y progreso. Un evento repetido no se aplica dos veces.
 * - Bajada: el progreso de la cuenta y los intentos entregados desde `desde` (lo hecho en la web), de a tandas.
 * - Renovación: un permiso nuevo por otros 3 meses, con los roles de hoy.
 *
 * Se autentica con el permiso firmado. Si la contraseña cambió en la web, responde `CONTRASENA_CAMBIADA` y no aplica
 * nada: la app pide la nueva. Si la cuenta está suspendida, aplica los intentos (son hechos) y responde 403.
 */
offlinePublico.post("/api/offline/sync", createRateLimiter({ windowMs: 15 * 60 * 1000, limit: 120 }), async (req, res) => {
  const permiso = leerPermiso(req.headers.authorization);
  if (!permiso) return res.status(401).json({ error: "Permiso inválido o vencido", code: "PERMISO_INVALIDO" });
  const usuario = (await prisma.usuario.findFirst({ where: { id: permiso.sub, isDeleted: { not: true } } })) as
    | (FilaUsuario & { role?: string | null; roles?: string[] | null; escuelaId?: string | null; isBanned?: boolean; bannedUntil?: string | null })
    | null;
  if (!usuario) return res.status(403).json({ error: "La cuenta fue dada de baja.", code: "CUENTA_BAJA" });
  if (permiso.cred && permiso.cred !== huellaDeCredencial(usuario.passwordHash)) {
    return res.status(401).json({ error: "La contraseña cambió. Entrá con la nueva.", code: "CONTRASENA_CAMBIADA" });
  }
  const baneado = estaBaneado(usuario);

  const eventos: unknown[] = Array.isArray(req.body?.eventos) ? req.body.eventos : [];
  if (eventos.length > EVENTOS_POR_LLAMADA) {
    return res.status(400).json({ error: `Hasta ${EVENTOS_POR_LLAMADA} eventos por llamada.`, code: "DEMASIADOS_EVENTOS" });
  }
  const resultados: Record<string, Record<string, unknown>> = {};
  for (const crudo of eventos) {
    const e = crudo as Partial<Evento> | null;
    if (!e || typeof e.id !== "string" || typeof e.tipo !== "string" || e.id.length > 64) continue;
    try {
      resultados[e.id] = await aplicarEvento(permiso, e as Evento, baneado);
    } catch (err) {
      // Queda para la próxima sincronización.
      console.warn("[offline/sync] evento sin aplicar", e.tipo, err instanceof Error ? err.message : err);
      resultados[e.id] = { estado: "error" };
    }
  }
  if (eventos.length) {
    await recordAuditLog({
      actorId: permiso.sub, action: "offline.sync", targetType: "Usuario", targetId: permiso.sub,
      metadata: { dispositivo: permiso.dispositivo, eventos: eventos.length },
    });
  }
  if (baneado) return res.status(403).json({ ...respuestaBaneado(usuario), resultados });

  // Todos los roles que la base le da hoy (los nuevos llegan acá), menos los de escuelas que perdió.
  const vigentes = await rolesVigentes({ schoolId: permiso.schoolId, roles: resolveRoles(usuario) }, usuario, permiso.sub);
  const roles = rolesParaLaApp(vigentes.roles);
  const clave = clavePrivada();
  const renovado = roles.length && clave
    ? firmarPermiso(datosDelPermiso(usuario, roles, vigentes.schoolId ?? null, permiso.dispositivo), clave)
    : null;

  const desde = typeof req.body?.desde === "string" ? req.body.desde.slice(0, 40) : "";
  const progreso = await prisma.progresoModulo.findMany({
    where: { usuarioId: permiso.sub },
    select: { moduloId: true, status: true, updatedAt: true },
    take: 10_000,
  });
  const filas = await prisma.quizAttempt.findMany({
    where: { userId: permiso.sub, status: { in: ESTADOS_BAJADA }, submittedAt: { gt: desde } },
    orderBy: { submittedAt: "asc" },
    take: INTENTOS_POR_BAJADA + 1,
  });
  const tanda = filas.slice(0, INTENTOS_POR_BAJADA);
  const quizIds = [...new Set(tanda.map((a) => a.quizId))];
  const modulos = new Map(
    quizIds.length
      ? (await prisma.quiz.findMany({ where: { id: { in: quizIds } }, select: { id: true, moduleId: true } })).map((q) => [q.id, q.moduleId])
      : [],
  );
  res.json({
    resultados,
    permiso: renovado ? { ...renovado, vence: JSON.parse(Buffer.from(renovado.permiso, "base64url").toString("utf8")).vence } : null,
    sinRolParaApp: roles.length === 0,
    progreso: progreso.map((p) => ({ moduloId: p.moduloId, status: p.status, updatedAt: p.updatedAt })),
    intentos: tanda.map((a) => ({
      id: a.id, quizId: a.quizId, quizVersionId: a.quizVersionId, moduleId: modulos.get(a.quizId) ?? null, status: a.status,
      score: a.score ?? 0, maxScore: a.maxScore ?? 0, startedAt: a.startedAt, submittedAt: a.submittedAt,
      attemptNo: a.attemptNo ?? null, seed: a.seed ?? null, answers: a.answers, feedback: a.feedback ?? null, grading: a.grading ?? null,
    })),
    cursor: tanda.length ? tanda[tanda.length - 1].submittedAt : desde || null,
    mas: filas.length > INTENTOS_POR_BAJADA,
  });
});
