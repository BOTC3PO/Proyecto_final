import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Role } from './roles';
import { AuthContext, type User } from './AuthContex';
import testmode from '../sys/testmode';

const STORAGE_KEY = 'auth.user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const isTestAuthEnabled = testmode() || import.meta.env.DEV;
  const [user, setUser] = useState<User | null>(() => {
    if (!isTestAuthEnabled || typeof window === 'undefined') return null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;
      return JSON.parse(stored) as User;
    } catch {
      if (isTestAuthEnabled) {
        localStorage.removeItem(STORAGE_KEY);
      }
      return null;
    }
  });
  const [shouldPersist, setShouldPersist] = useState(() => {
    if (!isTestAuthEnabled || typeof window === 'undefined') return false;
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const persistUser = (nextUser: User | null, remember: boolean) => {
    setUser(nextUser);
    setShouldPersist(remember);
    if (!isTestAuthEnabled || typeof window === 'undefined') return;
    if (nextUser && remember) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const login = (nextUser: User, options?: { remember?: boolean }) => {
    const remember = options?.remember ?? shouldPersist;
    persistUser(nextUser, remember);
  };

  const loginAs = (role: Role, options?: { remember?: boolean }) => {
    if (!isTestAuthEnabled) {
      console.warn('loginAs is disabled in production. Use real auth/session flow.');
      return;
    }
    const remember = options?.remember ?? shouldPersist;
    persistUser({ id: '1', name: 'Demo', role }, remember);
  };

  const logout = () => persistUser(null, false);

  const value = useMemo(() => ({ user, login, loginAs, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
