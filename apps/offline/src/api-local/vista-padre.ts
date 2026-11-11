/**
 * Vista de padre, tutor o acompañante: sin iniciar sesión y solo lectura. Muestra el progreso de los perfiles de
 * alumno del dispositivo y la teoría de los módulos que cada uno ya desbloqueó (nunca las preguntas).
 *
 * Se ven siempre los usuarios locales; las cuentas de la plataforma, si su dueño lo dejó activado
 * (`mostrar_a_padres`, activado por defecto en menores de 18).
 */
import type { Contexto, Perfil } from "./contexto";
import { candadosDe } from "./desbloqueo";
import { error, json } from "./http";

async function alumnoVisible(ctx: Contexto, perfilId: string): Promise<Perfil | null> {
  const [p] = await ctx.almacen.consulta<Perfil>(
    "progreso",
    "SELECT id, tipo, rol, roles, username, nombre, email, school_id, menor, mostrar_a_padres FROM perfiles WHERE id = ? AND EXISTS (SELECT 1 FROM json_each(roles) WHERE value = 'USER') AND (tipo = 'local' OR mostrar_a_padres = 1)",
    [perfilId],
  );
  return p ?? null;
}

/** GET /api/offline/vista-padre */
export async function perfilesParaPadres(ctx: Contexto) {
  const perfiles = await ctx.almacen.consulta<{ id: string; nombre: string; tipo: string }>(
    "progreso", "SELECT id, nombre, tipo FROM perfiles WHERE EXISTS (SELECT 1 FROM json_each(roles) WHERE value = 'USER') AND (tipo = 'local' OR mostrar_a_padres = 1) ORDER BY nombre",
  );
  const resumen = await ctx.almacen.consulta<{ perfil_id: string; completados: number; en_progreso: number }>(
    "progreso",
    "SELECT perfil_id, SUM(estado = 'completado') AS completados, SUM(estado = 'en_progreso') AS en_progreso FROM progreso_modulos GROUP BY perfil_id",
  );
  const r = new Map(resumen.map((x) => [x.perfil_id, x]));
  return json({
    items: perfiles.map((p) => ({ id: p.id, nombre: p.nombre, tipo: p.tipo, completados: r.get(p.id)?.completados ?? 0, enProgreso: r.get(p.id)?.en_progreso ?? 0 })),
  });
}

/** GET /api/offline/vista-padre/:perfilId/modulos — títulos, estado y candado; sin contenido. */
export async function modulosParaPadres(ctx: Contexto, _req: Request, perfilId: string) {
  if (!(await alumnoVisible(ctx, perfilId))) return error(404, "not found");
  const c = await candadosDe(ctx, perfilId);
  const modulos = await ctx.almacen.consulta<{ id: string; titulo: string; subject: string | null; category: string | null }>(
    "contenido", "SELECT id, titulo, subject, category FROM modulos ORDER BY subject, titulo",
  );
  return json({
    items: modulos.map((m) => ({
      id: m.id, title: m.titulo, subject: m.subject, category: m.category,
      isLocked: c.de(m.id).isLocked, estado: c.estados.get(m.id)?.estado ?? null, progreso: c.estados.get(m.id)?.progreso ?? 0,
    })),
  });
}

/** GET /api/offline/vista-padre/:perfilId/modulos/:id — la teoría, solo si ese perfil ya lo desbloqueó. */
export async function teoriaParaPadres(ctx: Contexto, _req: Request, perfilId: string, moduloId: string) {
  if (!(await alumnoVisible(ctx, perfilId))) return error(404, "not found");
  const [m] = await ctx.almacen.consulta<{ titulo: string }>("contenido", "SELECT titulo FROM modulos WHERE id = ?", [moduloId]);
  if (!m) return error(404, "not found");
  if ((await candadosDe(ctx, perfilId)).de(moduloId).isLocked) return error(403, "El alumno todavía no desbloqueó este módulo.", { code: "BLOQUEADO" });
  const [cont] = await ctx.almacen.consulta<{ theory_items: string }>("contenido", "SELECT theory_items FROM modulos_contenido WHERE id = ?", [moduloId]);
  return json({ id: moduloId, title: m.titulo, theoryItems: cont ? JSON.parse(cont.theory_items) : [] });
}
