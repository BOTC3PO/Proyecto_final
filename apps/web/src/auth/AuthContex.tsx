import { createContext } from 'react';
import type { Role } from './roles';


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
};

export type AuthContextValue = {
  user: User | null;
  loginAs: (role: Role, options?: { remember?: boolean; schoolId?: string | null }) => void;
  login: (user: User, token: string, refreshToken: string | null, options?: { remember?: boolean }) => void;
  logout: () => void;

  /** PLAN-multirol Fase 2 — cambia la ESCUELA activa de la sesión. No es lo
   *  mismo que `switchCuenta`: ahí se cambia de cuenta (espejo ↔ principal),
   *  acá la cuenta es la misma y lo que cambia es en qué escuela está
   *  parada — y con ella el rol efectivo, porque los roles del JWT son los
   *  de la escuela activa. El back valida la membresía y emite el token
   *  nuevo; el front sólo lo guarda. */
  cambiarEscuela: (escuelaId: string, rol?: string) => Promise<void>;
  /** true mientras un cambio de sesión está en vuelo. `ProtectedRoute`
   *  lo usa para NO redirigir a /login durante la transición de sesión
   *  (cuando el user viejo ya se limpió y el nuevo todavía no se flusheó).
   *  Opcional para compat con mocks de tests; el provider real lo setea. */
  isSwitching?: boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
