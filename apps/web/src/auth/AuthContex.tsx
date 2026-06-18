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
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
