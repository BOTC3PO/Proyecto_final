/**
 * Cuentas del dispositivo: usuarios locales (alumno o profesor) y, desde la fase 2, cuentas de la plataforma
 * activadas en el dispositivo. Responde con el mismo formato que `/api/auth/*` del servidor, así la pantalla de
 * inicio de sesión de la web funciona sin cambios.
 */
import { aleatorio, huella, iguales } from "./claves";
import type { Contexto, Perfil } from "./contexto";
import { error, json, leerJson } from "./http";

const DIAS_SESION = 30;
const USUARIO_VALIDO = /^[a-zA-Z0-9._-]{3,40}$/;
const ROLES_LOCALES = new Set(["USER", "TEACHER"]);
const CAMPOS = "id, tipo, rol, roles, username, nombre, email, school_id, menor, mostrar_a_padres";

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

/** POST /api/auth/register — crea un usuario local. Rol: alumno (USER, por defecto) o profesor (TEACHER). */
export async function registrarLocal(ctx: Contexto, req: Request) {
  const b = await leerJson<{ username?: string; password?: string; fullName?: string; rol?: string }>(req);
  const username = String(b.username ?? "").trim();
  const nombre = String(b.fullName ?? "").trim() || username;
  const rol = b.rol ?? "USER";
  if (!USUARIO_VALIDO.test(username)) return error(400, "El usuario tiene que tener de 3 a 40 letras, números, puntos o guiones.");
  if (typeof b.password !== "string" || b.password.length < 8) return error(400, "La contraseña tiene que tener al menos 8 caracteres.");
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

/** POST /api/auth/login — `{ identifier, password }`, igual que el servidor. */
export async function iniciarSesion(ctx: Contexto, req: Request) {
  const b = await leerJson<{ identifier?: string; password?: string }>(req);
  if (typeof b.identifier !== "string" || typeof b.password !== "string") return error(400, "Missing identifier or password");
  const [fila] = await ctx.almacen.consulta<Perfil & { hash: string; sal: string; iteraciones: number }>(
    "progreso",
    `SELECT ${CAMPOS}, hash, sal, iteraciones FROM perfiles WHERE username = ? OR (email IS NOT NULL AND email = ? COLLATE NOCASE)`,
    [b.identifier.trim(), b.identifier.trim()],
  );
  // Misma respuesta para usuario inexistente y contraseña incorrecta.
  if (!fila || !iguales(await huella(b.password, fila.sal, fila.iteraciones), fila.hash)) {
    return error(401, "Usuario o contraseña incorrectos.");
  }
  return json(await abrirSesion(ctx, fila));
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
