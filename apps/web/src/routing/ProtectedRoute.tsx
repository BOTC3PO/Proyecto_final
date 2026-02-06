import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth';
import type { Role } from '../auth/roles';
import testmode from '../sys/testmode';

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
  const isTestMode = testmode() || import.meta.env.DEV;
  const [sessionRole, setSessionRole] = useState<Role | null>(null);
  const [sessionGuestStatus, setSessionGuestStatus] = useState<
    'pendiente' | 'aceptado' | 'rechazado' | null
  >(null);
  const [sessionChecked, setSessionChecked] = useState(false);

  useEffect(() => {
    if (isTestMode || user || sessionChecked) return;
    const controller = new AbortController();

    const checkSession = async () => {
      try {
        const response = await fetch('/api/me', {
          method: 'GET',
          credentials: 'include',
          signal: controller.signal,
        });
        if (!response.ok) {
          setSessionRole(null);
          return;
        }
        const data = (await response.json()) as {
          role?: Role;
          guestOnboardingStatus?: 'pendiente' | 'aceptado' | 'rechazado' | null;
        };
        setSessionRole(data.role ?? null);
        setSessionGuestStatus(data.guestOnboardingStatus ?? null);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          setSessionRole(null);
          setSessionGuestStatus(null);
        }
      } finally {
        setSessionChecked(true);
      }
    };

    void checkSession();

    return () => controller.abort();
  }, [isTestMode, sessionChecked, user]);

  const role = user?.role ?? sessionRole ?? (isTestMode ? 'GUEST' : null);
  const guestStatus = user?.guestOnboardingStatus ?? sessionGuestStatus ?? null;
  if (!role && !isTestMode && !sessionChecked) return null;
  if (role === 'GUEST' && !guestStatus && !sessionChecked) return null;
  if (role === 'GUEST' && allow.includes('GUEST') && guestStatus !== 'aceptado') {
    return <Navigate to="/onboarding-guest" replace />;
  }
  if (!role || !allow.includes(role)) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
}
