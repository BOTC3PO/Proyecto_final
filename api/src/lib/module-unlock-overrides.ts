/**
 * "Niveles por aula con mapa de flujo" — desbloqueo manual: un docente
 * puede saltear el candado por dependencias (`module-dependencies.ts`)
 * para un alumno puntual o para toda un aula. Gana sobre el candado —
 * no lo reemplaza (las dependencias siguen ahí, sólo dejan de aplicar
 * para quien tiene el override activo).
 *
 * A diferencia de `module-dependencies.ts` (puro, sin DB), esto SÍ toca
 * Prisma — separado en su propio archivo para no mezclar responsabilidades.
 */
import { prisma } from "./prisma";

export async function hasActiveModuleOverride(
  moduloId: string,
  usuarioId: string
): Promise<boolean> {
  const overrides = await prisma.moduloDesbloqueo.findMany({ where: { moduloId } });
  if (overrides.length === 0) return false;
  if (overrides.some((o) => o.usuarioId === usuarioId)) return true;

  const aulaIds = overrides
    .map((o) => o.aulaId)
    .filter((id): id is string => Boolean(id));
  if (aulaIds.length === 0) return false;

  const membership = await prisma.claseMiembro.findFirst({
    where: { usuarioId, claseId: { in: aulaIds } },
  });
  return !!membership;
}

/**
 * Versión por lotes de `hasActiveModuleOverride`: de esos módulos, en cuáles tiene el usuario un desbloqueo
 * manual vigente (propio o de un aula a la que pertenece). Dos consultas en total, no una por módulo.
 */
export async function modulosConOverrideActivo(moduloIds: string[], usuarioId: string): Promise<Set<string>> {
  if (moduloIds.length === 0) return new Set();
  const aulas = await prisma.claseMiembro.findMany({ where: { usuarioId }, select: { claseId: true } });
  const aulaIds = aulas.map((a) => a.claseId);
  const overrides = await prisma.moduloDesbloqueo.findMany({
    where: {
      moduloId: { in: moduloIds },
      OR: [{ usuarioId }, ...(aulaIds.length ? [{ aulaId: { in: aulaIds } }] : [])],
    },
    select: { moduloId: true },
  });
  return new Set(overrides.map((o) => o.moduloId));
}
