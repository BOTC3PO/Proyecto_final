/**
 * Cuentas del dispositivo: usuarios locales (alumno o profesor) y, desde la fase 2, cuentas de la plataforma
 * activadas en el dispositivo. Responde con el mismo formato que `/api/auth/*` del servidor, así la pantalla de
 * inicio de sesión de la web funciona sin cambios.
 */
import { aleatorio, huella, iguales } from "./claves";
import type { Contexto, Perfil } from "./contexto";
import { error, json, leerJson } from "./http";
import { verificarPermiso } from "./permiso";
import { actualizarEscuela } from "./escuela";
import { activar, segundoPaso, type Resultado } from "./plataforma";
import { sincronizarPerfil } from "./sincronizacion";

const DIAS_SESION = 30;
const USUARIO_VALIDO = /^[a-zA-Z0-9._-]{3,40}$/;
const ROLES_LOCALES = new Set(["USER", "TEACHER"]);
const CAMPOS = "id, tipo, rol, roles, username, nombre, email, school_id, menor, mostrar_a_padres";
// Tras 5 contraseñas incorrectas seguidas, una espera que se duplica en cada fallo (30 s, 1 min, 2 min...), hasta 1 hora.
const FALLOS_SIN_ESPERA = 5;
const ESPERA_INICIAL_S = 30;
const ESPERA_MAXIMA_S = 3600;

export async function perfilDeSesion(ctx: Contexto, req: Request): Promise<Perfil | null> {
  const token = req.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
  if (!token) return null;
  const [p] = await ctx.almacen.consulta<Perfil & { vence: string }>(
    "progreso",
    `SELECT ${CAMPOS.split(", ").map((c) => `p.${c}`).join(", ")}, s.vence FROM sesiones s JOIN perfiles p ON p.id = s.perfil_id WHERE s.token = ?`,
    [token],
  );
  if (!p || new Date(p.vence) < ctx.ahora()) return null;
  return p;
}

function datosDeUsuario(p: Perfil) {
  return {
    id: p.id,
    username: p.username,
    email: p.email,
    fullName: p.nombre,
    role: p.rol,
    roles: JSON.parse(p.roles) as string[],
    guestOnboardingStatus: null,
    schoolId: p.school_id,
  };
}

async function abrirSesion(ctx: Contexto, p: Perfil) {
  const token = aleatorio();
  const ahora = ctx.ahora();
  const vence = new Date(ahora.getTime() + DIAS_SESION * 86_400_000);
  await ctx.almacen.ejecutar("progreso", "INSERT INTO sesiones (token, perfil_id, creada, vence) VALUES (?, ?, ?, ?)", [
    token, p.id, ahora.toISOString(), vence.toISOString(),
  ]);
  const segundos = DIAS_SESION * 86_400;
  return {
    ...datosDeUsuario(p),
    escuelas: [],
    accessToken: token,
    expiresAt: vence.toISOString(),
    expiresIn: segundos,
    // Sin servidor no hay token de renovación aparte: el mismo token sirve hasta que vence.
    refreshToken: token,
    refreshExpiresAt: vence.toISOString(),
    refreshExpiresIn: segundos,
  };
}

/**
 * POST /api/auth/register — crea un usuario local: alumno (USER, por defecto) o profesor (TEACHER). Acepta `role`
 * (lo que manda el alta de la web) o `rol`. El correo, la fecha de nacimiento y los consentimientos de la web no
 * hacen falta: los datos no salen del dispositivo.
 */
export async function registrarLocal(ctx: Contexto, req: Request) {
  if (!ctx.config.usuariosLocales) return error(403, "En esta app no se pueden crear usuarios locales.");
  const b = await leerJson<{ username?: string; password?: string; fullName?: string; rol?: string; role?: string }>(req);
  const username = String(b.username ?? "").trim();
  const nombre = String(b.fullName ?? "").trim() || username;
  const rol = b.rol ?? b.role ?? "USER";
  if (!USUARIO_VALIDO.test(username)) return error(400, "El usuario tiene que tener de 3 a 40 letras, números, puntos o guiones.");
  if (typeof b.password !== "string" || b.password.length < 8) return error(400, "La contraseña tiene que tener al menos 8 caracteres.");
  if (rol === "PARENT") return error(400, "Los padres y tutores no necesitan usuario: usan «Ver como padre o tutor».");
  if (!ROLES_LOCALES.has(rol)) return error(400, "Un usuario local puede ser alumno o profesor.");
  const [existe] = await ctx.almacen.consulta("progreso", "SELECT 1 AS x FROM perfiles WHERE username = ?", [username]);
  if (existe) return error(409, "Ya hay un perfil con ese usuario en este dispositivo.");
  const sal = aleatorio(16);
  const p: Perfil = {
    id: `local-${aleatorio(8)}`, tipo: "local", rol: rol as Perfil["rol"], roles: JSON.stringify([rol]), username, nombre,
    email: null, school_id: null, menor: 0, mostrar_a_padres: 1,
  };
  await ctx.almacen.ejecutar(
    "progreso",
    `INSERT INTO perfiles (${CAMPOS}, hash, sal, iteraciones, creado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [p.id, p.tipo, p.rol, p.roles, p.username, p.nombre, p.email, p.school_id, p.menor, p.mostrar_a_padres,
      await huella(b.password, sal, ctx.iteraciones), sal, ctx.iteraciones, ctx.ahora().toISOString()],
  );
  return json(await abrirSesion(ctx, p), 201);
}

type FilaIngreso = Perfil & {
  hash: string; sal: string; iteraciones: number; permiso: string | null; firma: string | null; vence: string | null;
  estado: string; fallos: number; espera_hasta: string | null;
};

// Entró una cuenta de la plataforma con red: de paso se sincroniza y se actualizan los módulos de su escuela.
const terminar = async (ctx: Contexto, r: Resultado) => {
  if (!("perfil" in r)) return r.respuesta;
  ctx.segundoPlano(actualizarEscuela(ctx, r.perfil.id));
  ctx.segundoPlano(sincronizarPerfil(ctx, r.perfil.id));
  return json(await abrirSesion(ctx, r.perfil));
};
const incorrectos = () => error(401, "Usuario o contraseña incorrectos.");

async function anotarFallo(ctx: Contexto, fila: FilaIngreso) {
  const fallos = fila.fallos + 1;
  const extra = fallos - FALLOS_SIN_ESPERA;
  const espera = extra >= 0 ? Math.min(ESPERA_INICIAL_S * 2 ** extra, ESPERA_MAXIMA_S) : 0;
  await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET fallos = ?, espera_hasta = ? WHERE id = ?", [
    fallos, espera ? new Date(ctx.ahora().getTime() + espera * 1000).toISOString() : null, fila.id,
  ]);
}

/**
 * POST /api/auth/login — `{ identifier, password }`, igual que el servidor.
 *
 * - Usuario local: se compara con la huella guardada.
 * - Cuenta de la plataforma ya activada: huella, firma del permiso y vencimiento (salvo en modo autónomo). Si el
 *   permiso venció, se renueva con red; sin red hay que conectarse una vez. Si la contraseña no coincide, puede ser
 *   que la hayan cambiado en la web: con red se prueba contra el servidor y se actualiza la huella.
 * - Cuenta que el dispositivo no conoce: se activa con red.
 */
export async function iniciarSesion(ctx: Contexto, req: Request) {
  const b = await leerJson<{ identifier?: string; password?: string }>(req);
  if (typeof b.identifier !== "string" || typeof b.password !== "string") return error(400, "Missing identifier or password");
  const identificador = b.identifier.trim();
  const [fila] = await ctx.almacen.consulta<FilaIngreso>(
    "progreso",
    `SELECT ${CAMPOS}, hash, sal, iteraciones, permiso, firma, vence, estado, fallos, espera_hasta FROM perfiles
     WHERE username = ? OR (email IS NOT NULL AND email = ? COLLATE NOCASE)`,
    [identificador, identificador],
  );
  if (!fila) return ctx.remoto && !ctx.config.modoAutonomo ? terminar(ctx, await activar(ctx, identificador, b.password)) : incorrectos();

  const ahora = ctx.ahora();
  if (fila.espera_hasta && new Date(fila.espera_hasta) > ahora) {
    const segundos = Math.ceil((new Date(fila.espera_hasta).getTime() - ahora.getTime()) / 1000);
    return error(429, "Demasiados intentos con la contraseña incorrecta", { code: "DEMASIADOS_INTENTOS", retryAfterSeconds: segundos });
  }
  if (fila.estado === "bloqueado") {
    // Si la plataforma la volvió a habilitar, con red se activa de nuevo.
    const r = await activar(ctx, identificador, b.password);
    if ("perfil" in r) return terminar(ctx, r);
    return error(403, "Esta cuenta está suspendida o fue dada de baja en la plataforma.", { code: "CUENTA_BLOQUEADA" });
  }
  if (fila.estado === "contrasena") {
    // La sincronización vio que la contraseña cambió en la web: hace falta la nueva, con red.
    const r = await activar(ctx, identificador, b.password);
    if ("perfil" in r) return terminar(ctx, r);
    if (r.respuesta.status === 503) {
      return error(403, "Tu contraseña cambió en la plataforma. Conectate a internet y entrá con la nueva.", { code: "CONTRASENA_CAMBIADA" });
    }
    return r.respuesta.status === 401 ? incorrectos() : r.respuesta;
  }

  const coincide = iguales(await huella(b.password, fila.sal, fila.iteraciones), fila.hash);
  if (!coincide) {
    if (fila.tipo === "plataforma") {
      const r = await activar(ctx, identificador, b.password);
      // Con red y la contraseña nueva de la web, la activación actualiza la huella.
      if ("perfil" in r || (r.respuesta.status !== 401 && r.respuesta.status !== 503)) return terminar(ctx, r);
    }
    await anotarFallo(ctx, fila);
    return incorrectos();
  }
  if (fila.fallos > 0) await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET fallos = 0, espera_hasta = NULL WHERE id = ?", [fila.id]);
  if (fila.tipo === "local") return json(await abrirSesion(ctx, fila));

  const datos = await verificarPermiso(ctx.config.clavePublica, fila.permiso ?? "", fila.firma ?? "");
  if (!datos || datos.sub !== fila.id) {
    return error(403, "El permiso de esta cuenta no es válido. Conectate a internet y volvé a entrar.", { code: "PERMISO_INVALIDO" });
  }
  if (!ctx.config.modoAutonomo && new Date(datos.vence) < ahora) {
    const r = await activar(ctx, identificador, b.password);
    if ("respuesta" in r && r.respuesta.status === 503) {
      return error(403, "Pasaron más de 3 meses sin conectarte. Conectate a internet una vez para seguir usando esta cuenta.", {
        code: "PERMISO_VENCIDO",
      });
    }
    return terminar(ctx, r);
  }
  // Si hay red, sube lo pendiente y renueva el permiso; si no, no pasa nada.
  ctx.segundoPlano(sincronizarPerfil(ctx, fila.id));
  return json(await abrirSesion(ctx, fila));
}

/** POST /api/auth/2fa/login — segundo paso de una activación con verificación en dos pasos. */
export async function segundoPasoDeIngreso(ctx: Contexto, req: Request) {
  const b = await leerJson<{ desafio?: string; codigo?: string }>(req);
  return terminar(ctx, await segundoPaso(ctx, String(b.desafio ?? ""), String(b.codigo ?? "")));
}

/** GET /api/auth/me */
export async function yo(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  return p ? json(datosDeUsuario(p)) : error(401, "No autenticado");
}

/** POST /api/auth/refresh — el token sigue valiendo hasta que vence. */
export async function renovar(ctx: Contexto, req: Request) {
  const b = await leerJson<{ refreshToken?: string }>(req);
  if (!b.refreshToken) return error(401, "Sesión vencida");
  const p = await perfilDeSesion(ctx, new Request("http://x", { headers: { Authorization: `Bearer ${b.refreshToken}` } }));
  return p ? json({ accessToken: b.refreshToken, refreshToken: b.refreshToken }) : error(401, "Sesión vencida");
}

/** POST /api/auth/logout */
export async function cerrarSesion(ctx: Contexto, req: Request) {
  const token = req.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
  if (token) await ctx.almacen.ejecutar("progreso", "DELETE FROM sesiones WHERE token = ?", [token]);
  return json({ ok: true });
}

/** GET /api/offline/perfiles — los perfiles del dispositivo, para la pantalla de entrada. */
export async function listarPerfiles(ctx: Contexto) {
  const filas = await ctx.almacen.consulta<Perfil>("progreso", `SELECT ${CAMPOS} FROM perfiles ORDER BY nombre`);
  return json({ items: filas.map((p) => ({ id: p.id, nombre: p.nombre, username: p.username, rol: p.rol, tipo: p.tipo })) });
}

// Vinculaciones con verificación en dos pasos a medio hacer: desafío → usuario local. Solo en memoria y por 5 minutos.
const vinculando = new Map<string, { local: string; vence: number }>();

/**
 * POST /api/offline/vincular — un usuario local pasa a ser una cuenta de la plataforma: `{ identifier, password }` (y,
 * si la cuenta tiene verificación en dos pasos, después `{ desafio, codigo }`). Su historial, su progreso y sus
 * favoritos pasan a la cuenta; al sincronizar, el servidor vuelve a corregir cada intento con el sorteo que tuvo acá.
 * El usuario local deja de existir.
 */
export async function vincular(ctx: Contexto, req: Request) {
  const local = await perfilDeSesion(ctx, req);
  if (!local) return error(401, "No autenticado");
  if (local.tipo !== "local") return error(400, "Esta cuenta ya es de la plataforma.");
  const b = await leerJson<{ identifier?: string; password?: string; desafio?: string; codigo?: string }>(req);
  let r: Resultado;
  if (typeof b.desafio === "string") {
    const v = vinculando.get(b.desafio);
    if (!v || v.local !== local.id || v.vence < Date.now()) return error(401, "La vinculación venció. Empezá de nuevo.", { code: "DESAFIO_VENCIDO" });
    r = await segundoPaso(ctx, b.desafio, String(b.codigo ?? ""));
    if ("perfil" in r) vinculando.delete(b.desafio);
  } else {
    if (typeof b.identifier !== "string" || typeof b.password !== "string") return error(400, "Missing identifier or password");
    r = await activar(ctx, b.identifier.trim(), b.password, { reemplaza: local.id });
  }
  if (!("perfil" in r)) {
    const cuerpo = await r.respuesta.clone().json().catch(() => ({}));
    if (cuerpo?.requiere2fa && typeof cuerpo.desafio === "string") {
      vinculando.set(cuerpo.desafio, { local: local.id, vence: Date.now() + 5 * 60_000 });
    }
    return r.respuesta;
  }
  const destino = r.perfil.id;
  await ctx.almacen.lote("progreso", [
    // Las preguntas de cada intento se sortearon con el identificador local: el servidor las vuelve a sortear igual.
    { sql: "UPDATE intentos SET sorteo_id = COALESCE(sorteo_id, perfil_id), perfil_id = ? WHERE perfil_id = ?", params: [destino, local.id] },
    // El progreso se combina quedándose con el mayor avance.
    {
      sql: `INSERT INTO progreso_modulos (perfil_id, modulo_id, estado, progreso, actualizado)
            SELECT ?, modulo_id, estado, progreso, actualizado FROM progreso_modulos WHERE perfil_id = ? AND true
            ON CONFLICT(perfil_id, modulo_id) DO UPDATE SET estado = excluded.estado, progreso = excluded.progreso,
              actualizado = excluded.actualizado
            WHERE excluded.estado = 'completado' AND progreso_modulos.estado != 'completado'`,
      params: [destino, local.id],
    },
    { sql: "INSERT OR IGNORE INTO desbloqueos (perfil_id, modulo_id, origen, creado) SELECT ?, modulo_id, origen, creado FROM desbloqueos WHERE perfil_id = ?", params: [destino, local.id] },
    { sql: "INSERT OR IGNORE INTO favoritos (perfil_id, modulo_id, creado) SELECT ?, modulo_id, creado FROM favoritos WHERE perfil_id = ?", params: [destino, local.id] },
    // Suben los intentos; el progreso local no se acredita en la plataforma (sale de la nueva corrección).
    { sql: "UPDATE eventos SET perfil_id = ? WHERE perfil_id = ? AND tipo = 'intento'", params: [destino, local.id] },
    { sql: "DELETE FROM eventos WHERE perfil_id = ?", params: [local.id] },
    { sql: "DELETE FROM perfiles WHERE id = ?", params: [local.id] },
  ]);
  // Los módulos que armó un profesor local pasan a ser de la cuenta.
  await ctx.almacen.ejecutar("contenido", "UPDATE modulos SET owner_user_id = ? WHERE owner_user_id = ?", [destino, local.id]);
  return terminar(ctx, r);
}
