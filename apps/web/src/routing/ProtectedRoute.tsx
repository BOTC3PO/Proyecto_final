import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import type { Role } from '../auth/roles';

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

  if (!user?.role || !allow.includes(user.role)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
