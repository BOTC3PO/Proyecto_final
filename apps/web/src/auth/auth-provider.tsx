import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Role } from './roles';
import { AuthContext, type User } from './AuthContex';
import testmode from '../sys/testmode';
import { setAuthToken, setRefreshToken } from '../lib/api';

const STORAGE_KEY = 'auth.user';

const AUTH_SESSION_CLEARED_EVENT = 'auth:session-cleared';

const getStorage = (remember: boolean) =>
  remember ? window.localStorage : window.sessionStorage;

export function AuthProvider({ children }: { children: ReactNode }) {
  const isTestAuthEnabled = testmode();
  const [user, setUser] = useState<User | null>(() => {
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
  });
  const [shouldPersist, setShouldPersist] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return Boolean(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const persistUser = (nextUser: User | null, remember: boolean) => {
    setUser(nextUser);
    setShouldPersist(remember);
    if (typeof window === 'undefined') return;

    window.localStorage.removeItem(STORAGE_KEY);
    window.sessionStorage.removeItem(STORAGE_KEY);

    if (nextUser) {
      getStorage(remember).setItem(STORAGE_KEY, JSON.stringify(nextUser));
    }
  };

  const login = (nextUser: User, token: string, nextRefreshToken: string | null, options?: { remember?: boolean }) => {
    const remember = options?.remember ?? shouldPersist;
    setAuthToken(token, { remember });
    setRefreshToken(nextRefreshToken, { remember });
    persistUser(nextUser, remember);
  };

  const loginAs = (role: Role, options?: { remember?: boolean; schoolId?: string | null }) => {
    if (!isTestAuthEnabled) {
      console.warn('loginAs is disabled in production. Use real auth/session flow.');
      return;
    }
    const remember = options?.remember ?? shouldPersist;
    setAuthToken(null);
    setRefreshToken(null);
    persistUser(
      {
        id: '1',
        name: 'Demo',
        role,
        guestOnboardingStatus: role === 'GUEST' ? 'aceptado' : null,
        schoolId: options?.schoolId ?? null,
      },
      remember
    );
  };

  const logout = () => {
    setAuthToken(null);
    setRefreshToken(null);
    persistUser(null, false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleSessionCleared = () => {
      persistUser(null, false);
    };

    window.addEventListener(AUTH_SESSION_CLEARED_EVENT, handleSessionCleared);
    return () => {
      window.removeEventListener(AUTH_SESSION_CLEARED_EVENT, handleSessionCleared);
    };
  }, []);

  const value = useMemo(() => ({ user, login, loginAs, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
