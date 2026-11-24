/**
 * Módulos de la escuela: los que crearon los docentes de las escuelas de la persona y los asignados a sus aulas
 * (`GET /api/offline/escuela` del servidor, que se autentica con el permiso firmado). Solo teoría: los exámenes de
 * los docentes no se descargan.
 *
 * Cada cuenta tiene su propio paquete (`escuela-<perfil>`), porque lo que se ve depende de sus aulas.
 */
import type { Contexto } from "./contexto";
import { error, json } from "./http";
import { remoto } from "./plataforma";
import { sentenciasDeModulos, type FilaModulo } from "./temario";

export const paqueteDeEscuela = (perfilId: string) => `escuela-${perfilId}`;

export async function actualizarEscuela(ctx: Contexto, perfilId: string): Promise<Response> {
  const [p] = await ctx.almacen.consulta<{ tipo: string; permiso: string | null; firma: string | null; estado: string }>(
    "progreso",
    "SELECT tipo, permiso, firma, estado FROM perfiles WHERE id = ?",
    [perfilId],
  );
  if (!p || p.tipo !== "plataforma" || !p.permiso || !p.firma || p.estado !== "activo") {
    return error(400, "Los módulos de la escuela se descargan con una cuenta de la plataforma.");
  }
  const r = await remoto(ctx, "/api/offline/escuela", { headers: { Authorization: `Permiso ${p.permiso}.${p.firma}` } });
  if (!r) return error(503, "Para bajar los módulos de tu escuela hace falta conexión.", { code: "SIN_CONEXION" });
  const cuerpo = await r.json().catch(() => ({}));
  if (r.status === 403 && (cuerpo as { code?: string }).code === "BANNED") {
    await ctx.almacen.lote("progreso", [
      { sql: "DELETE FROM sesiones WHERE perfil_id = ?", params: [perfilId] },
      { sql: "UPDATE perfiles SET estado = 'bloqueado' WHERE id = ?", params: [perfilId] },
    ]);
  }
  if (!r.ok) return json(cuerpo, r.status);

  // Nunca pisa un módulo del temario oficial.
  const modulos = ((cuerpo as { modulos?: FilaModulo[] }).modulos ?? []).filter((m) => typeof m?.id === "string" && !m.id.startsWith("cont-"));
  const paquete = paqueteDeEscuela(perfilId);
  const ids = JSON.stringify(modulos.map((m) => m.id));
  const viejos = "SELECT id FROM modulos WHERE paquete = ? AND id NOT IN (SELECT value FROM json_each(?))";
  await ctx.almacen.lote("contenido", [
    { sql: `DELETE FROM modulos_contenido WHERE id IN (${viejos})`, params: [paquete, ids] },
    { sql: `DELETE FROM modulos WHERE id IN (${viejos})`, params: [paquete, ids] },
    ...sentenciasDeModulos(modulos, "escuela", paquete),
    {
      sql: `INSERT OR REPLACE INTO paquetes_instalados (id, tipo, version, titulo, origen, modulos, instalado)
            VALUES (?, 'escuela', ?, 'Módulos de mi escuela', 'escuela', ?, ?)`,
      params: [paquete, String((cuerpo as { actualizado?: string }).actualizado ?? ""), modulos.length, ctx.ahora().toISOString()],
    },
  ]);
  return json({ ok: true, modulos: modulos.length });
}
