import { hasRole } from "./roles";

/**
 * A qué destinos de aviso llega cada rol. Lo usan el listado de avisos y la sincronización: antes
 * `sync/pull` no filtraba y un alumno recibía avisos dirigidos a docentes o a padres.
 */
export function destinosVisiblesDeAvisos(user: Parameters<typeof hasRole>[0]): string[] {
  const destinos = ["todos"];
  if (hasRole(user, "USER")) destinos.push("alumnos");
  if (hasRole(user, "TEACHER")) destinos.push("profesores");
  if (hasRole(user, "PARENT")) destinos.push("padres");
  if (hasRole(user, "DIRECTIVO")) destinos.push("profesores", "padres");
  return destinos;
}
