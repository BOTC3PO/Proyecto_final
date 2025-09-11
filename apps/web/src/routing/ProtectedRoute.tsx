import type  { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import type { Role } from '../auth/roles';

export function ProtectedRoute({
  children,
  allow,
  redirectTo = '/login',
}: {
  children: ReactNode;
  allow: Role[];           // roles permitidos
  redirectTo?: string;
}) {
  const { user } = useAuth();
  const role = user?.role ?? 'GUEST';
  if (!allow.includes(role)) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
}