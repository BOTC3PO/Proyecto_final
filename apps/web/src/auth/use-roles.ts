/**
 * MULTIROL-02 (Fase 2) — hooks de roles del front.
 *
 * Capa delgada sobre los helpers puros de `roleHelpers.ts`. La idea es que
 * un componente pueda hacer `const isStaff = useIsStaff()` en lugar de
 * `STAFF_ROLES.includes(user?.role ?? "")` disperso por todos lados.
 *
 * Los hooks leen del AuthContext (que ya expone `user.roles[]` desde
 * Fase 1). Si el context no provee user, devuelven `false` (o `[]`),
 * igual que los helpers.
 */
import { useMemo } from "react";
import { useAuth } from "./use-auth";
import {
  canActAsLearner,
  hasAnyRole,
  hasRole,
  isAdmin,
  isDirectivo,
  isPureParent,
  isStaff,
  isTeacher,
  resolvePrimaryRole,
  resolveRoles,
  type RoleUser,
} from "./roleHelpers";

/** Devuelve el array de roles efectivo del user logueado. Si no hay
 *  user, devuelve `[]`. El resultado es estable entre renders
 *  (mismo array si `user.roles` no cambió). */
export function useRoles(): string[] {
  const { user } = useAuth();
  return useMemo(() => resolveRoles(user as RoleUser | null), [user]);
}

/** Devuelve el rol principal del user (mayor jerarquía). Null si no
 *  hay user. */
export function usePrimaryRole(): string | null {
  const { user } = useAuth();
  return useMemo(() => resolvePrimaryRole(user as RoleUser | null), [user]);
}

/** ¿El user logueado tiene el rol `target` en su array `roles[]`?
 *  Cae a `user.role` si `roles` viene vacío (compat). */
export function useHasRole(target: string): boolean {
  const { user } = useAuth();
  return useMemo(
    () => hasRole(user as RoleUser | null, target),
    [user, target],
  );
}

/** ¿El user logueado tiene AL MENOS UNO de los roles en `targets`?
 *  Pensado para `ProtectedRoute allow={[...]}`. */
export function useHasAnyRole(targets: readonly string[]): boolean {
  const { user } = useAuth();
  return useMemo(
    () => hasAnyRole(user as RoleUser | null, targets),
    [user, targets],
  );
}

/** ¿El user es staff (ADMIN / DIRECTIVO / TEACHER) en alguno de sus
 *  roles? */
export function useIsStaff(): boolean {
  const { user } = useAuth();
  return useMemo(() => isStaff(user as RoleUser | null), [user]);
}

/** ¿El user es ADMIN en alguno de sus roles? */
export function useIsAdmin(): boolean {
  const { user } = useAuth();
  return useMemo(() => isAdmin(user as RoleUser | null), [user]);
}

/** ¿El user es TEACHER en alguno de sus roles? */
export function useIsTeacher(): boolean {
  const { user } = useAuth();
  return useMemo(() => isTeacher(user as RoleUser | null), [user]);
}

/** ¿El user es DIRECTIVO en alguno de sus roles? */
export function useIsDirectivo(): boolean {
  const { user } = useAuth();
  return useMemo(() => isDirectivo(user as RoleUser | null), [user]);
}

/** ¿El user puede actuar como alumno (USER) en alguno de sus roles?
 *  Útil para casos como el CoinBadge: un TEACHER+USER también ve
 *  monedas aunque su rol principal sea staff. */
export function useCanActAsLearner(): boolean {
  const { user } = useAuth();
  return useMemo(() => canActAsLearner(user as RoleUser | null), [user]);
}

/** ¿El user es PARENT puro (sin ningún otro rol)? Un PARENT+USER o
 *  PARENT+TEACHER devuelve `false` (retiene su otra capacidad). */
export function useIsPureParent(): boolean {
  const { user } = useAuth();
  return useMemo(() => isPureParent(user as RoleUser | null), [user]);
}
