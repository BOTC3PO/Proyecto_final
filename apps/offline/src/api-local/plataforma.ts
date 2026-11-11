/**
 * Activación y renovación de cuentas de la plataforma en el dispositivo (fase 2).
 *
 * Con red: la app inicia sesión en el servidor con el usuario y la contraseña que escribió la persona, pide el
 * permiso firmado (`POST /api/offline/permiso`), lo verifica y guarda el perfil con una huella propia de la
 * contraseña. La contraseña no se guarda; los tokens del servidor tampoco (los pide la sincronización).
 */
import { aleatorio, huella } from "./claves";
import type { Contexto, Perfil } from "./contexto";
import { error, json } from "./http";
import { rolPrincipal, verificarPermiso } from "./permiso";
import { subirAntesDeBloquear } from "./sincronizacion";

const ESPERA_RED_MS = 10_000;
const DESAFIO_MS = 5 * 60_000;

export type Resultado = { perfil: Perfil } | { respuesta: Response };
/** `reemplaza`: el usuario local que se está vinculando a la cuenta (puede tener el mismo nombre de usuario). */
type Opciones = { reemplaza?: string };

const sinRed = () =>
  error(503, "Para usar tu cuenta de la plataforma en este dispositivo, conectate a internet una vez.", { code: "SIN_CONEXION" });

/** Identificador de este dispositivo; se crea la primera vez y va en cada permiso. */
export async function idDelDispositivo(ctx: Contexto): Promise<string> {
  const [fila] = await ctx.almacen.consulta<{ valor: string }>("progreso", "SELECT valor FROM meta WHERE clave = 'dispositivo'");
  if (fila) return fila.valor;
  const id = aleatorio(16);
  await ctx.almacen.ejecutar("progreso", "INSERT OR IGNORE INTO meta (clave, valor) VALUES ('dispositivo', ?)", [id]);
  const [guardado] = await ctx.almacen.consulta<{ valor: string }>("progreso", "SELECT valor FROM meta WHERE clave = 'dispositivo'");
  return guardado.valor;
}

/**
 * Pedido al servidor de la plataforma. `null` si no hay red (o no hay servidor, como en el modo autónomo). La espera
 * corta solo hasta que llega la respuesta: una descarga larga sigue.
 */
export async function remoto(ctx: Contexto, ruta: string, init: RequestInit = {}): Promise<Response | null> {
  if (!ctx.remoto || ctx.config.modoAutonomo) return null;
  const corte = new AbortController();
  const reloj = setTimeout(() => corte.abort(), ESPERA_RED_MS);
  try {
    return await ctx.remoto.fetch(`${ctx.remoto.base}${ruta}`, { ...init, signal: corte.signal });
  } catch {
    return null;
  } finally {
    clearTimeout(reloj);
  }
}

/** POST con JSON al servidor. `null` si no hay red. */
async function pedir(ctx: Contexto, ruta: string, cuerpo: unknown, token?: string): Promise<{ status: number; body: any } | null> {
  const r = await remoto(ctx, ruta, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify(cuerpo),
  });
  return r ? { status: r.status, body: await r.json().catch(() => ({})) } : null;
}

// Ingresos con verificación en dos pasos a medio hacer: el servidor da un desafío y la contraseña hace falta otra
// vez después del código, para la huella. Solo en memoria y por 5 minutos.
const pendientes = new Map<string, { contrasena: string; vence: number; opciones: Opciones }>();

/** Inicia sesión en el servidor y activa (o renueva) la cuenta en el dispositivo. */
export async function activar(ctx: Contexto, identificador: string, contrasena: string, opciones: Opciones = {}): Promise<Resultado> {
  if (!ctx.config.clavePublica) return { respuesta: error(401, "Usuario o contraseña incorrectos.") };
  const r = await pedir(ctx, "/api/auth/login", { identifier: identificador, password: contrasena });
  if (!r) return { respuesta: sinRed() };
  if (r.status === 403 && r.body?.code === "BANNED") {
    // Los intentos pendientes se suben antes de bloquear el perfil.
    await subirAntesDeBloquear(ctx, identificador);
    await bloquear(ctx, identificador);
  }
  if (r.status !== 200) return { respuesta: json(r.body, r.status) };
  if (r.body?.requiere2fa && typeof r.body.desafio === "string") {
    pendientes.set(r.body.desafio, { contrasena, vence: Date.now() + DESAFIO_MS, opciones });
    return { respuesta: json({ requiere2fa: true, desafio: r.body.desafio }) };
  }
  return completar(ctx, r.body?.accessToken, contrasena, opciones);
}

/** POST /api/auth/2fa/login durante una activación. */
export async function segundoPaso(ctx: Contexto, desafio: string, codigo: string): Promise<Resultado> {
  const p = pendientes.get(desafio);
  if (!p || p.vence < Date.now()) {
    pendientes.delete(desafio);
    return { respuesta: error(401, "El ingreso venció. Volvé a escribir tu contraseña.", { code: "DESAFIO_VENCIDO" }) };
  }
  const r = await pedir(ctx, "/api/auth/2fa/login", { desafio, codigo });
  if (!r) return { respuesta: sinRed() };
  if (r.status !== 200) return { respuesta: json(r.body, r.status) };
  pendientes.delete(desafio);
  return completar(ctx, r.body?.accessToken, p.contrasena, p.opciones);
}

async function completar(ctx: Contexto, token: unknown, contrasena: string, opciones: Opciones): Promise<Resultado> {
  if (typeof token !== "string") return { respuesta: error(502, "El servidor respondió algo inesperado.") };
  const dispositivo = await idDelDispositivo(ctx);
  const r = await pedir(ctx, "/api/offline/permiso", { dispositivo }, token);
  if (!r) return { respuesta: sinRed() };
  if (r.status !== 200) return { respuesta: json(r.body, r.status) };
  const datos = await verificarPermiso(ctx.config.clavePublica, r.body?.permiso, r.body?.firma);
  if (!datos || datos.dispositivo !== dispositivo) {
    return { respuesta: error(502, "El permiso del servidor no es válido para este dispositivo.", { code: "PERMISO_INVALIDO" }) };
  }

  const username = datos.username || datos.email || datos.sub;
  const [otro] = await ctx.almacen.consulta("progreso", "SELECT 1 AS x FROM perfiles WHERE username = ? AND id <> ? AND id <> ?", [
    username, datos.sub, opciones.reemplaza ?? "",
  ]);
  if (otro) return { respuesta: error(409, "Ya hay un usuario local con ese nombre en este dispositivo.") };
  // El usuario local que se vincula deja libre su nombre (después se borra).
  if (opciones.reemplaza) {
    await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET username = ? WHERE id = ? AND tipo = 'local'", [
      `${opciones.reemplaza}#vinculado`, opciones.reemplaza,
    ]);
  }

  const sal = aleatorio(16);
  const perfil: Perfil = {
    id: datos.sub, tipo: "plataforma", rol: rolPrincipal(datos.roles), roles: JSON.stringify(datos.roles), username,
    nombre: datos.nombre || username, email: datos.email, school_id: datos.schoolId, menor: datos.menor ? 1 : 0,
    // «Mostrar mi progreso en la vista de padre»: activado por defecto en menores de 18. Al renovar se respeta lo
    // que haya elegido la persona.
    mostrar_a_padres: datos.menor ? 1 : 0,
  };
  await ctx.almacen.ejecutar(
    "progreso",
    `INSERT INTO perfiles (id, tipo, rol, roles, username, nombre, email, school_id, menor, mostrar_a_padres,
       hash, sal, iteraciones, creado, permiso, firma, vence, estado, fallos, espera_hasta)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'activo', 0, NULL)
     ON CONFLICT(id) DO UPDATE SET rol = excluded.rol, roles = excluded.roles, username = excluded.username,
       nombre = excluded.nombre, email = excluded.email, school_id = excluded.school_id, menor = excluded.menor,
       hash = excluded.hash, sal = excluded.sal, iteraciones = excluded.iteraciones, permiso = excluded.permiso,
       firma = excluded.firma, vence = excluded.vence, estado = 'activo', fallos = 0, espera_hasta = NULL`,
    [perfil.id, perfil.tipo, perfil.rol, perfil.roles, perfil.username, perfil.nombre, perfil.email, perfil.school_id,
      perfil.menor, perfil.mostrar_a_padres, await huella(contrasena, sal, ctx.iteraciones), sal, ctx.iteraciones,
      ctx.ahora().toISOString(), r.body.permiso, r.body.firma, datos.vence],
  );
  const [guardado] = await ctx.almacen.consulta<Perfil>(
    "progreso",
    "SELECT id, tipo, rol, roles, username, nombre, email, school_id, menor, mostrar_a_padres FROM perfiles WHERE id = ?",
    [perfil.id],
  );
  return { perfil: guardado };
}

/** El servidor dijo que la cuenta está suspendida: el perfil del dispositivo queda bloqueado. */
async function bloquear(ctx: Contexto, identificador: string) {
  const donde = "tipo = 'plataforma' AND (username = ? OR email = ? COLLATE NOCASE)";
  await ctx.almacen.lote("progreso", [
    { sql: `DELETE FROM sesiones WHERE perfil_id IN (SELECT id FROM perfiles WHERE ${donde})`, params: [identificador, identificador] },
    { sql: `UPDATE perfiles SET estado = 'bloqueado' WHERE ${donde}`, params: [identificador, identificador] },
  ]);
}
