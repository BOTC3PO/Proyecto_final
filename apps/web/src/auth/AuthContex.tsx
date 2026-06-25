import { createContext } from 'react';
import type { Role } from './roles';

/** FASE 3 + FASE 6 — vínculo entre cuenta principal y cuenta espejo.
 *
 *  - `ALUMNO`     → el destino es la cuenta espejo alumno (este user
 *                   es el principal staff/padre). FASE 1/2/5.
 *  - `PRINCIPAL`  → el destino es la cuenta principal staff/padre
 *                   (este user es el espejo alumno). FASE 1/2/5.
 *  - `PADRE`      → FASE 6: el destino es la cuenta de padre
 *                   vinculada (este user es el alumno adulto).
 *  - `ALUMNO_HIJO`→ FASE 6: el destino es la cuenta de alumno del
 *                   par (este user es el padre). Simétrico a "PADRE".
 */
export type CuentaVinculada = {
  destinoUsuarioId: string;
  tipoDestino: 'ALUMNO' | 'PRINCIPAL' | 'PADRE' | 'ALUMNO_HIJO';
};

export type User = {
  id: string;
  _id?: string;
  name: string;
  /** Rol "principal" (mayor jerarquía). Se mantiene por compat hasta Fase 3
   *  para no romper los 49+ chequeos `user.role === "X"` que aún existen
   *  y se migran en este PR al helper `useHasRole` / `useIsStaff`. */
  role: Role;
  /** MULTIROL-02: array de roles. El back ya lo emite desde Fase 1. El
   *  provider lo popula desde el payload del login y, si llega vacío,
   *  cae a `[role]` (ver `ensureRoles` en `auth-provider.tsx`) para no
   *  dejar al usuario sin permisos. Marcado opcional en el tipo para
   *  mantener compat con mocks de tests que aún no lo propagan; los
   *  helpers de `roleHelpers.ts` aplican el fallback automáticamente. */
  roles?: ReadonlyArray<Role>;
  guestOnboardingStatus?: 'pendiente' | 'aceptado' | 'rechazado' | null;
  schoolId?: string | null;
  /** FASE 3 — expuesto por el back en /me y login. null = sin cuenta
   *  vinculada. Ver CuentaVinculada para el significado de tipoDestino. */
  cuentaVinculada?: CuentaVinculada | null;
};

export type AuthContextValue = {
  user: User | null;
  loginAs: (role: Role, options?: { remember?: boolean; schoolId?: string | null }) => void;
  login: (user: User, token: string, refreshToken: string | null, options?: { remember?: boolean }) => void;
  logout: () => void;
  /** FASE 3 — cambia la sesión activa a la cuenta vinculada (espejo ↔
   *  principal). El JWT del destino va SIEMPRE a sessionStorage (never
   *  localStorage). Devuelve la ruta `landing` del destino para navegar.
   *  Lanza Error si no hay vínculo o el back responde con error. */
  switchCuenta: () => Promise<{ landing: string }>;
  /** FASE 5a — true mientras `switchCuenta` está en vuelo. `ProtectedRoute`
   *  lo usa para NO redirigir a /login durante la transición de sesión
   *  (cuando el user viejo ya se limpió y el nuevo todavía no se flusheó).
   *  Opcional para compat con mocks de tests; el provider real lo setea. */
  isSwitching?: boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
