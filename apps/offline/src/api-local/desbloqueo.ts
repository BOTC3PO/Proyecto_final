/**
 * Qué módulos tiene desbloqueados cada perfil. Usa la misma lógica de candados que el servidor
 * (`api/src/lib/module-dependencies.ts`): un módulo se abre al completar sus prerrequisitos o si un docente lo habilitó.
 *
 * Regla anti trampa: sin conexión, de un módulo bloqueado no se entrega la teoría, las herramientas ni las preguntas.
 */
import { computeModuleLock, parseModuleDependencies } from "../../../../api/src/lib/module-dependencies";
import type { Contexto, Perfil } from "./contexto";

export type Candados = {
  /** Candado de un módulo para ese perfil, con los prerrequisitos que faltan. */
  de(moduloId: string): { isLocked: boolean; missingDependencyIds: string[] };
  completados: Set<string>;
  estados: Map<string, { estado: string; progreso: number }>;
};

export async function candadosDe(ctx: Contexto, perfilId: string): Promise<Candados> {
  const indice = await ctx.almacen.consulta<{ id: string; dependencies: string }>("contenido", "SELECT id, dependencies FROM modulos");
  const deps = new Map(indice.map((m) => [m.id, parseModuleDependencies(m.dependencies)]));
  const progreso = await ctx.almacen.consulta<{ modulo_id: string; estado: string; progreso: number }>(
    "progreso", "SELECT modulo_id, estado, progreso FROM progreso_modulos WHERE perfil_id = ?", [perfilId],
  );
  const manuales = new Set(
    (await ctx.almacen.consulta<{ modulo_id: string }>("progreso", "SELECT modulo_id FROM desbloqueos WHERE perfil_id = ?", [perfilId]))
      .map((f) => f.modulo_id),
  );
  const completados = new Set(progreso.filter((p) => p.estado === "completado").map((p) => p.modulo_id));
  return {
    completados,
    estados: new Map(progreso.map((p) => [p.modulo_id, { estado: p.estado, progreso: p.progreso }])),
    de(moduloId) {
      if (manuales.has(moduloId)) return { isLocked: false, missingDependencyIds: [] };
      return computeModuleLock(moduloId, deps.get(moduloId) ?? [], deps, completados);
    },
  };
}

/** Los profesores ven todos los módulos (sin las resoluciones de lo que no es suyo); los alumnos, solo lo desbloqueado. */
export const aplicaCandado = (p: Pick<Perfil, "rol">) => p.rol !== "TEACHER";
