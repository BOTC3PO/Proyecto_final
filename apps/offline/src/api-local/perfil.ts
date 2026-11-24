/**
 * Opciones del propio perfil y pedidos que esperan la sincronización.
 */
import { aleatorio } from "./claves";
import type { Fila } from "./almacen";
import type { Contexto } from "./contexto";
import { perfilDeSesion } from "./cuentas";
import { error, json, leerJson } from "./http";

// El administrador lo otorga solo otro administrador desde la plataforma; no pasa por la app.
const ROLES_PEDIBLES = new Set(["TEACHER", "PARENT", "DIRECTIVO"]);

/** PATCH /api/offline/perfil — `{ mostrarAPadres }`: si el progreso de la cuenta aparece en la vista de padre. */
export async function cambiarPerfil(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const b = await leerJson<{ mostrarAPadres?: unknown }>(req);
  if (typeof b.mostrarAPadres !== "boolean") return error(400, "Falta mostrarAPadres (sí o no).");
  // Los usuarios locales se ven siempre: sus datos no salen del dispositivo.
  if (p.tipo === "local") return error(400, "Los usuarios locales se ven siempre en la vista de padre.");
  await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET mostrar_a_padres = ? WHERE id = ?", [b.mostrarAPadres ? 1 : 0, p.id]);
  return json({ ok: true, mostrarAPadres: b.mostrarAPadres });
}

/**
 * POST /api/solicitar-rol — el mismo pedido que la web. Sin red no se puede mandar: queda en la cola de eventos y
 * sale en la próxima sincronización, donde el servidor aplica sus reglas. Acá se adelantan las que se pueden
 * comprobar con el permiso (edad y roles actuales).
 */
export async function solicitarRol(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "no autenticado");
  if (p.tipo === "local") {
    return error(400, "Los usuarios locales eligen su tipo al crearse. Para pedir otro rol hace falta una cuenta de la plataforma.");
  }
  const b = await leerJson<{ target_role?: unknown; motivo?: unknown }>(req);
  if (typeof b.target_role !== "string" || !ROLES_PEDIBLES.has(b.target_role)) {
    return error(400, "target_role inválido. Debe ser TEACHER, PARENT o DIRECTIVO.");
  }
  if (typeof b.motivo === "string" && b.motivo.length > 2000) return error(400, "El motivo admite hasta 2000 caracteres.");
  if (p.menor) return error(403, "Necesitás ser mayor de 18 años para solicitar un cambio de rol.");
  if ((JSON.parse(p.roles) as string[]).includes(b.target_role)) return error(409, `Ya tenés el rol ${b.target_role}.`);

  const [pendiente] = await ctx.almacen.consulta<{ id: string }>(
    "progreso",
    "SELECT id FROM eventos WHERE perfil_id = ? AND tipo = 'solicitar-rol' AND enviado = 0",
    [p.id],
  );
  if (pendiente) {
    return json({ id: pendiente.id, alreadyPending: true, message: "Ya tenés una solicitud esperando la próxima sincronización." });
  }
  const id = aleatorio(16);
  const datos = { target_role: b.target_role, ...(typeof b.motivo === "string" && b.motivo.trim() ? { motivo: b.motivo.trim() } : {}) };
  await ctx.almacen.ejecutar("progreso", "INSERT INTO eventos (id, perfil_id, tipo, datos, creado) VALUES (?, ?, 'solicitar-rol', ?, ?)", [
    id, p.id, JSON.stringify(datos), ctx.ahora().toISOString(),
  ]);
  return json({ id, pendienteDeEnvio: true, message: "Solicitud guardada. Se manda a la plataforma la próxima vez que te conectes." }, 201);
}

/**
 * GET /api/offline/mis-datos — todo lo que este dispositivo guarda del perfil, en JSON (derecho de acceso, Ley 25.326,
 * art. 14). Sin la huella de la contraseña ni la firma del permiso. Lo que guarda la plataforma se descarga desde la web.
 */
export async function misDatos(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const de = <T extends Fila = Fila>(sql: string) => ctx.almacen.consulta<T>("progreso", sql, [p.id]);
  const [perfil] = await de(
    `SELECT id, tipo, rol, roles, username, nombre, email, school_id, menor, mostrar_a_padres, creado, vence, estado,
            sync_ultima FROM perfiles WHERE id = ?`,
  );
  const intentos = await de<Record<string, string | null>>(
    `SELECT id, modulo_id, quiz_id, version_id, numero, estado, respuestas, score, max_score, inicio, fin, sincronizado,
            origen, servidor FROM intentos WHERE perfil_id = ? ORDER BY inicio`,
  );
  const leer = (v: string | null) => (v ? JSON.parse(v) : null);
  return json({
    generado: ctx.ahora().toISOString(),
    guardadoEn: "este dispositivo",
    perfil: { ...perfil, roles: JSON.parse(String(perfil.roles)), menor: perfil.menor === 1, mostrar_a_padres: perfil.mostrar_a_padres === 1 },
    progreso: await de("SELECT modulo_id, estado, progreso, actualizado FROM progreso_modulos WHERE perfil_id = ? ORDER BY modulo_id"),
    desbloqueos: await de("SELECT modulo_id, origen, creado FROM desbloqueos WHERE perfil_id = ? ORDER BY modulo_id"),
    favoritos: await de("SELECT modulo_id, creado FROM favoritos WHERE perfil_id = ? ORDER BY creado"),
    intentos: intentos.map((i) => ({ ...i, respuestas: leer(i.respuestas), servidor: leer(i.servidor) })),
    sinSubir: (await de<{ tipo: string; creado: string }>("SELECT tipo, creado FROM eventos WHERE perfil_id = ? AND enviado = 0 ORDER BY creado")),
  });
}
