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
  if (!user || !hasAnyRole(user, allow)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
