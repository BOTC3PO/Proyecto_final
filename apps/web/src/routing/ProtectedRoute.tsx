import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import type { Role } from '../auth/roles';
import { hasAnyRole } from '../auth/roleHelpers';
import { useAuth } from '../auth/use-auth';

export function ProtectedRoute({
  children,
  allow,
  redirectTo = '/login',
}: {
  children: ReactNode;
  allow: Role[];
  redirectTo?: string;
}) {
  const { user } = useAuth();

  // MULTIROL-02: multi-rol friendly. Un user pasa si AL MENOS UNO de
  // sus `roles[]` está en `allow`. Mantiene compat: si `roles` está
  // vacío, `hasAnyRole` cae a `[role]` (ver `resolveRoles`).
  // Sin sesión → login.
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }
  // Con sesión pero sin el rol requerido → home pública. `Home.tsx` ya
  // reencamina al dashboard según rol principal. NUNCA a /login: si no,
  // el switch de cuenta (que cambia el rol del user mientras la ruta
  // vieja sigue montada un instante) provoca un flash a /login y la
  // cuenta espejo queda inaccesible.
  if (!hasAnyRole(user, allow)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
