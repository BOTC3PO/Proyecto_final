/**
 * MULTIROL-01 (Fase 1) — utilidades de multi-rol.
 *
 * Contexto: el modelo `Usuario` ahora tiene `roles: string[]` además
 * de `role: string` (columna espejo deprecada). El JWT lleva ambos.
 * Estos helpers unifican la lectura: aceptan un `user` y/o un array
 * de roles, y miran primero `roles` y luego `role` (compat).
 *
 * Reglas de oro de Fase 1:
 *   - El código viejo que lee `user.role` debe seguir funcionando
 *     durante toda la fase. `role` se mantiene poblado.
 *   - No degradar permisos: `isStaffRole({ role: "TEACHER" })` debe
 *     seguir dando `true` exactamente igual que antes.
 *   - No elevar permisos por error: `roles` no debe incluir nada que
 *     el usuario no tenía antes.
 *
 * Fase 2: el front centraliza sus 47 checks usando `hasRole` /
 * `isStaffRole` (re-exportados desde authorization). Fase 3 retira
 * `role` cuando nada lo use.
 */

/**
 * Resuelve el array de roles efectivo de un user/context. Si no hay
 * `roles`, promueve `role` a array de un elemento (compat). Si no hay
 * ninguno, devuelve `[]`.
 */
export const resolveRoles = (input?: {
  role?: string | null;
  roles?: readonly string[] | null;
} | string | null): string[] => {
  if (input == null) return [];
  if (typeof input === "string") return input ? [input] : [];
  const arr = input.roles;
  if (Array.isArray(arr) && arr.length > 0) return arr.filter((r): r is string => typeof r === "string" && !!r);
  const singular = input.role;
  if (typeof singular === "string" && singular) return [singular];
  return [];
};

/**
 * Resuelve el rol "principal" (mayor jerarquía) de un user para
 * mantener la compat con código que lee `user.role` singular. Si el
 * array está vacío, devuelve `null` (nunca inventa un rol).
 */
const ROLE_HIERARCHY: string[] = ["ADMIN", "DIRECTIVO", "TEACHER", "PARENT", "USER", "GUEST"];

export const resolvePrimaryRole = (input?: {
  role?: string | null;
  roles?: readonly string[] | null;
} | string | null): string | null => {
  const roles = resolveRoles(input);
  if (roles.length === 0) return null;
  for (const candidate of ROLE_HIERARCHY) {
    if (roles.includes(candidate)) return candidate;
  }
  // Si el array trae roles fuera del set conocido, devolvemos el primero
  // preservando compat (no inventamos jerarquía nueva en Fase 1).
  return roles[0] ?? null;
};

/**
 * ¿El user tiene `target` dentro de sus roles? Acepta string suelto
 * (compat con código viejo que llama `hasRole(user, "ADMIN")`).
 */
export const hasRole = (
  user: { role?: string | null; roles?: readonly string[] | null } | string | null | undefined,
  target: string
): boolean => {
  if (!user || !target) return false;
  return resolveRoles(user).includes(target);
};

/**
 * ¿El user es staff (ADMIN / DIRECTIVO / TEACHER) en alguno de sus
 * roles? Esta función reemplaza inline checks `STAFF_ROLES.has(role)`
 * cuando se necesita el array.
 */
export const STAFF_ROLES: ReadonlySet<string> = new Set(["ADMIN", "DIRECTIVO", "TEACHER"]);

export const isStaffInRoles = (roles: readonly string[]): boolean =>
  roles.some((r) => STAFF_ROLES.has(r));

/**
 * ¿El user tiene rol PARENT en alguno de sus roles? Usado por la
 * provisión opt-in de la cuenta espejo del padre (Fase 5): el padre
 * NO es staff, así que `isStaffInRoles` da `false`, pero igual puede
 * pedir su propia cuenta de alumno on-demand.
 */
export const isParentInRoles = (roles: readonly string[]): boolean =>
  roles.includes("PARENT");

/**
 * Tipo util: cualquier "user-like" con `role` y/o `roles`. Útil para
 * anotar `req.user` en rutas que ya aceptan el shape legacy.
 */
export type RoleUser = {
  role?: string | null;
  roles?: readonly string[] | null;
};
