import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import type { Role } from '../auth/roles';
import type { User } from '../auth/AuthContex';
import testmode from '../sys/testmode';

const STORAGE_KEY = 'auth.user';

const readStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null;

  try {
    const localStored = window.localStorage.getItem(STORAGE_KEY);
    if (localStored) return JSON.parse(localStored) as User;

    const sessionStored = window.sessionStorage.getItem(STORAGE_KEY);
    if (sessionStored) return JSON.parse(sessionStored) as User;

    return null;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    window.sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

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
  const storedUser = readStoredUser();
  const isTestMode = testmode() || import.meta.env.DEV;

  const role = user?.role ?? storedUser?.role ?? (isTestMode ? 'GUEST' : null);
  const guestStatus = user?.guestOnboardingStatus ?? storedUser?.guestOnboardingStatus ?? null;

  if (role === 'GUEST' && allow.includes('GUEST') && guestStatus !== 'aceptado') {
    return <Navigate to="/onboarding-guest" replace />;
  }

  if (!role || !allow.includes(role)) return <Navigate to={redirectTo} replace />;

  return <>{children}</>;
}
