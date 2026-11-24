/**
 * Progreso de cada perfil en el dispositivo, con el formato de `/api/progreso`, `/api/progreso/estudiante` y
 * `/api/perfil` del servidor. La web calcula los logros con estos datos (`Perfil.tsx`), así que también salen de acá.
 *
 * El progreso solo cambia al entregar un cuestionario formal (como en el servidor). No hay `POST /api/progreso`:
 * sin conexión, marcar un módulo como completado a mano abriría los siguientes sin rendir.
 */
import { aleatorio } from "./claves";
import type { Contexto } from "./contexto";
import { perfilDeSesion } from "./cuentas";
import { aplicaCandado, candadosDe } from "./desbloqueo";
import { error, json } from "./http";

type FilaProgreso = { perfil_id: string; modulo_id: string; estado: string; progreso: number; actualizado: string };

/** Un módulo completado no vuelve atrás: un formal desaprobado después solo cuenta si todavía no estaba completo. */
export async function registrarProgreso(ctx: Contexto, perfilId: string, moduloId: string, estado: "completado" | "en_progreso") {
  const ahora = ctx.ahora().toISOString();
  const { cambios } = await ctx.almacen.ejecutar(
    "progreso",
    `INSERT INTO progreso_modulos (perfil_id, modulo_id, estado, progreso, actualizado) VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(perfil_id, modulo_id) DO UPDATE SET estado = excluded.estado, progreso = excluded.progreso, actualizado = excluded.actualizado
     WHERE progreso_modulos.estado != 'completado'`,
    [perfilId, moduloId, estado, estado === "completado" ? 100 : 0, ahora],
  );
  if (cambios) {
    await ctx.almacen.ejecutar(
      "progreso", "INSERT INTO eventos (id, perfil_id, tipo, datos, creado) VALUES (?, ?, 'progreso', ?, ?)",
      [aleatorio(16), perfilId, JSON.stringify({ moduloId, estado }), ahora],
    );
  }
}

const item = (f: FilaProgreso) => ({
  id: `${f.perfil_id}:${f.modulo_id}`, usuarioId: f.perfil_id, moduloId: f.modulo_id, aulaId: null, status: f.estado,
  score: null, attempts: 0, completedAt: f.estado === "completado" ? f.actualizado : null, updatedAt: f.actualizado,
});

const filasDe = (ctx: Contexto, perfilId: string) =>
  ctx.almacen.consulta<FilaProgreso>("progreso", "SELECT * FROM progreso_modulos WHERE perfil_id = ? ORDER BY actualizado DESC", [perfilId]);

/** GET /api/progreso?usuarioId=... — solo el propio (sin conexión no hay docentes que miren el de otro). */
export async function listarProgreso(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "user not authenticated");
  const usuarioId = new URL(req.url).searchParams.get("usuarioId");
  if (!usuarioId?.trim()) return error(400, "usuarioId is required");
  if (usuarioId !== p.id) return error(403, "forbidden");
  const filas = await filasDe(ctx, p.id);
  const c = await candadosDe(ctx, p.id);
  const unlocks = filas.map((f) => {
    const candado = c.de(f.modulo_id);
    return { moduloId: f.modulo_id, isLocked: aplicaCandado(p) && candado.isLocked, missingDependencies: candado.missingDependencyIds };
  });
  return json({ items: filas.map(item), unlocks });
}

/** GET /api/progreso/estudiante — los últimos 20 módulos con avance. */
export async function progresoEstudiante(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "user not authenticated");
  const filas = (await filasDe(ctx, p.id)).slice(0, 20);
  const titulos = new Map(
    filas.length
      ? (await ctx.almacen.consulta<{ id: string; titulo: string }>(
          "contenido", `SELECT id, titulo FROM modulos WHERE id IN (${filas.map(() => "?").join(",")})`, filas.map((f) => f.modulo_id),
        )).map((m) => [m.id, m.titulo])
      : [],
  );
  const avances = filas.map((f) => ({
    id: `${f.perfil_id}:${f.modulo_id}`,
    modulo: titulos.get(f.modulo_id) ?? f.modulo_id,
    progreso: f.estado === "completado" ? "100%" : f.estado === "en_progreso" ? "En progreso" : "0%",
  }));
  const completados = filas.filter((f) => f.estado === "completado").length;
  const total = filas.length;
  const restantes = total - completados;
  const sugerencia = total === 0
    ? { kind: "vacio" as const, titulo: "Empieza tu camino", mensaje: "Explora los módulos disponibles y comienza tu primer desafío." }
    : restantes === 0
      ? { kind: "completo" as const, titulo: "¡Módulos completados!", mensaje: "Excelente trabajo. Sigue explorando nuevos contenidos." }
      : {
          kind: "progreso" as const, restantes, titulo: "Continúa aprendiendo",
          mensaje: `Tienes ${restantes} módulo${restantes !== 1 ? "s" : ""} en progreso. ¡Sigue adelante!`,
        };
  return json({ avances, sugerencia });
}

/** GET /api/perfil */
export async function perfilPropio(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "not authenticated");
  const completos = (await filasDe(ctx, p.id)).filter((f) => f.estado === "completado").map((f) => f.modulo_id);
  const visibles = new Map(
    completos.length
      ? (await ctx.almacen.consulta<{ id: string; visibility: string }>(
          "contenido", `SELECT id, visibility FROM modulos WHERE id IN (${completos.map(() => "?").join(",")})`, completos,
        )).map((m) => [m.id, m.visibility])
      : [],
  );
  const publicos = completos.filter((id) => visibles.get(id) === "publico").length;
  const [extra] = await ctx.almacen.consulta<{ creado: string; estado: string }>("progreso", "SELECT creado, estado FROM perfiles WHERE id = ?", [p.id]);
  return json({
    id: p.id, username: p.username, email: p.email ?? "", fullName: p.nombre, role: p.rol, escuelaId: p.school_id,
    createdAt: extra?.creado ?? null, isBanned: extra?.estado === "bloqueado", warningCount: 0,
    modulosCompletados: { publicos, privados: completos.length - publicos, total: completos.length },
    // Los vínculos con los hijos los confirma el servidor; sin conexión no se muestran (ver la vista de padre).
    hijos: [],
  });
}

/** GET /api/modulos-favoritos */
export async function listarFavoritos(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "no autenticado");
  const filas = await ctx.almacen.consulta<{ modulo_id: string }>("progreso", "SELECT modulo_id FROM favoritos WHERE perfil_id = ? ORDER BY creado DESC", [p.id]);
  return json({ ids: filas.map((f) => f.modulo_id) });
}

/** PUT /api/modulos-favoritos/:moduloId */
export async function marcarFavorito(ctx: Contexto, req: Request, moduloId: string) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "no autenticado");
  const [m] = await ctx.almacen.consulta("contenido", "SELECT id FROM modulos WHERE id = ?", [moduloId]);
  if (!m) return error(404, "módulo no encontrado");
  await ctx.almacen.ejecutar("progreso", "INSERT OR IGNORE INTO favoritos (perfil_id, modulo_id, creado) VALUES (?, ?, ?)", [
    p.id, moduloId, ctx.ahora().toISOString(),
  ]);
  return json({ ok: true, favorito: true });
}

/** DELETE /api/modulos-favoritos/:moduloId */
export async function quitarFavorito(ctx: Contexto, req: Request, moduloId: string) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "no autenticado");
  await ctx.almacen.ejecutar("progreso", "DELETE FROM favoritos WHERE perfil_id = ? AND modulo_id = ?", [p.id, moduloId]);
  return json({ ok: true, favorito: false });
}

/** GET /api/modulos-valoraciones — las valoraciones son de toda la plataforma: sin conexión no hay. */
export const valoraciones = () => json({ items: {} });

/** GET /api/tareas — las tareas las asigna un docente por la plataforma; sin conexión la lista queda vacía. */
export const tareas = () => json([]);
