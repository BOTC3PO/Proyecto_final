import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Role } from './roles';
import { AuthContext, type User } from './AuthContex';
import { setAuthToken, setRefreshToken } from '../lib/api';

const STORAGE_KEY = 'auth.user';

const AUTH_SESSION_CLEARED_EVENT = 'auth:session-cleared';

const getStorage = (remember: boolean) =>
  remember ? window.localStorage : window.sessionStorage;

export function AuthProvider({ children }: { children: ReactNode }) {
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

  const loginAs = (_role: Role, _options?: { remember?: boolean; schoolId?: string | null }) => {
    console.warn('loginAs is disabled. Use real auth/session flow.');
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
