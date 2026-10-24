/**
 * PLAN-multirol — "quiero ver la plataforma como alumno".
 *
 * Antes esto creaba una CUENTA espejo (`/api/auth/crear-alumno`) y había un
 * segundo camino para vincular una cuenta de alumno ya existente. Los dos
 * desaparecieron con el retiro de espejos: la persona es UNA cuenta con
 * varios roles, así que lo único que hace falta es agregarse el rol.
 *
 * Para actuar como alumno después se cambia de ROL con
 * `cambiarEscuela(escuelaId, "USER")` — no se cambia de cuenta.
 */
import { apiPost } from "../lib/api";

export type RolAlumnoResponse = {
  ok: boolean;
  /** false si ya lo tenía: la operación es idempotente. */
  created: boolean;
  escuelaId: string;
  rol: "USER";
};

export function crearCuentaAlumnoStaff(): Promise<RolAlumnoResponse> {
  return apiPost<RolAlumnoResponse>("/api/auth/rol-alumno", {});
}
