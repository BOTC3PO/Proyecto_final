/**
 * MULTIROL-02 (Fase 2) — utilidades de multi-rol del FRONT.
 *
 * Espejo del `api/src/lib/roles.ts` del back. Mantiene las mismas reglas:
 *
 *   - Acepta un user con `role` y/o `roles`. Mira primero `roles` y cae a
 *     `role` si el array viene vacío (compat con tokens antiguos que aún
 *     no tengan el array propagado).
 *   - `isStaff` devuelve true si AL MENOS UNO de los roles del usuario es
 *     staff. Un `["TEACHER", "USER"]` es staff (TEACHER lo es) y además
 *     puede actuar como learner.
 *   - Nunca inventa permisos: si no hay nada, devuelve false / [].
 *
 * Esta capa es la ÚNICA autorizada para leer el rol de un user del front.
 * Cualquier `user.role === "X"` suelto en un componente debe migrar a un
 * helper de este archivo (ver `useHasRole` / `useIsStaff` / `useIsAdmin`).
 *
 * Fase 3 va a retirar `role` del tipo User cuando nada lo use.
 */
import type { Role } from "./roles";

/** Roles staff (espejo del back). */
export const STAFF_ROLES: ReadonlySet<string> = new Set([
  "ADMIN",
  "DIRECTIVO",
  "TEACHER",
]);

/** Jerarquía para resolver el rol "principal" (compat con código que lee
 *  `user.role` singular). Un ADMIN en el array gana sobre un TEACHER. */
const ROLE_HIERARCHY: ReadonlyArray<Role> = [
  "ADMIN",
  "DIRECTIVO",
  "TEACHER",
  "PARENT",
  "USER",
  "GUEST",
];

/** User-like mínimo que requieren los helpers. Más permisivo que `User`
 *  para poder aceptar también payloads de API (perfiles de otros users)
 *  y mocks de tests. */
export interface RoleUser {
  role?: string | null;
  roles?: readonly string[] | null;
}

/**
 * Resuelve el array de roles efectivo de un user/context. Si no hay
 * `roles`, promueve `role` a array de un elemento (compat). Si no hay
 * ninguno, devuelve `[]`.
 *
 * Acepta string suelto por compat con código que ya pasaba el rol
 * "crudo" (ej. `resolveRoles("TEACHER")`).
 */
export function resolveRoles(input?: RoleUser | string | null): string[] {
  if (input == null) return [];
  if (typeof input === "string") return input ? [input] : [];
  const arr = input.roles;
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.filter((r): r is string => typeof r === "string" && !!r);
  }
  const singular = input.role;
  if (typeof singular === "string" && singular) return [singular];
  return [];
}

/**
 * Resuelve el rol "principal" (mayor jerarquía) de un user para
 * mantener compat con código que lee `user.role` singular. Si el array
 * está vacío, devuelve `null` (nunca inventa un rol).
 */
export function resolvePrimaryRole(input?: RoleUser | string | null): string | null {
  const roles = resolveRoles(input);
  if (roles.length === 0) return null;
  for (const candidate of ROLE_HIERARCHY) {
    if (roles.includes(candidate)) return candidate;
  }
  // Si el array trae roles fuera del set conocido, devolvemos el primero
  // preservando compat (no inventamos jerarquía nueva en Fase 2).
  return roles[0] ?? null;
}

/** ¿El user tiene `target` dentro de sus roles? Acepta string suelto
 *  (compat con código viejo que llama `hasRole(user, "ADMIN")`). */
export function hasRole(
  user: RoleUser | string | null | undefined,
  target: string,
): boolean {
  if (!user || !target) return false;
  return resolveRoles(user).includes(target);
}

/** ¿El user tiene AL MENOS UNO de los roles en `targets`? Pensado para
 *  el `ProtectedRoute allow={[...]}`. Acepta string suelto por compat. */
export function hasAnyRole(
  user: RoleUser | string | null | undefined,
  targets: readonly string[],
): boolean {
  if (!user || !Array.isArray(targets) || targets.length === 0) return false;
  const roles = resolveRoles(user);
  if (roles.length === 0) return false;
  return targets.some((t) => typeof t === "string" && roles.includes(t));
}

/** ¿El user es staff (ADMIN / DIRECTIVO / TEACHER) en alguno de sus
 *  roles? Acepta string suelto por compat. */
export function isStaff(user: RoleUser | string | null | undefined): boolean {
  const roles = resolveRoles(user);
  if (roles.length === 0) return false;
  return roles.some((r) => STAFF_ROLES.has(r));
}

/** ¿El user es ADMIN en alguno de sus roles? */
export function isAdmin(user: RoleUser | string | null | undefined): boolean {
  return hasRole(user, "ADMIN");
}

/** ¿El user es TEACHER en alguno de sus roles? */
export function isTeacher(user: RoleUser | string | null | undefined): boolean {
  return hasRole(user, "TEACHER");
}

/** ¿El user es DIRECTIVO en alguno de sus roles? */
export function isDirectivo(user: RoleUser | string | null | undefined): boolean {
  return hasRole(user, "DIRECTIVO");
}

/** ¿El user puede actuar como alumno (USER) en alguno de sus roles?
 *  Necesario para badges de "estudiante" cuando el rol principal es
 *  staff pero también es USER (multi-rol). */
export function canActAsLearner(
  user: RoleUser | string | null | undefined,
): boolean {
  return hasRole(user, "USER");
}
