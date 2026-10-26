import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Role } from './roles';
import { AuthContext, type User } from './AuthContex';
import { setAuthToken, setRefreshToken } from '../lib/api';

const STORAGE_KEY = 'auth.user';

const AUTH_SESSION_CLEARED_EVENT = 'auth:session-cleared';

const getStorage = (remember: boolean) =>
  remember ? window.localStorage : window.sessionStorage;

/**
 * MULTIROL-02 (Fase 2) — fallback de compat.
 *
 * Si el `User` persistido viene de un login anterior a Fase 1 (sin
 * `roles[]`) o si el back emite un array vacío por algún bug, promovemos
 * `role` a `[role]` para no degradar permisos. Nunca dejamos al user
 * sin roles.
 */
function ensureRoles(user: User | null): User | null {
  if (!user) return null;
  if (Array.isArray(user.roles) && user.roles.length > 0) return user;
  if (user.role) return { ...user, roles: [user.role] };
  return user;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const localStored = window.localStorage.getItem(STORAGE_KEY);
      if (localStored) return ensureRoles(JSON.parse(localStored) as User);

      const sessionStored = window.sessionStorage.getItem(STORAGE_KEY);
      if (sessionStored) return ensureRoles(JSON.parse(sessionStored) as User);

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
  const [isSwitching, setIsSwitching] = useState(false);

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
    persistUser(ensureRoles(nextUser), remember);
  };

  const loginAs = (_role: Role, _options?: { remember?: boolean; schoolId?: string | null }) => {
    console.warn('loginAs is disabled. Use real auth/session flow.');
  };

  const logout = () => {
    setAuthToken(null);
    setRefreshToken(null);
    persistUser(null, false);
    try {
      localStorage.removeItem('vb-theme');
      sessionStorage.removeItem('vb-theme');
    } catch { /* ignorar */ }
    window.dispatchEvent(new CustomEvent('vb:logout'));
  };


  // PLAN-multirol Fase 2 — cambio de escuela activa. La cuenta no cambia:
  // cambia en qué escuela está parada la sesión, y con eso los roles que
  // trae el token (el back sólo emite los de esa escuela). Se conserva el
  // modo de persistencia actual: cambiar de escuela no debería degradar un
  // "recordarme" a sesión, ni al revés.
  const cambiarEscuela = async (escuelaId: string, rol?: string) => {
    const { cambiarEscuelaActiva } = await import('../services/mis-escuelas');
    const data = await cambiarEscuelaActiva(escuelaId, rol);
    setAuthToken(data.accessToken, { remember: shouldPersist });
    setUser((prev) => {
      if (!prev) return prev;
      const next: User = {
        ...prev,
        role: (data.role ?? prev.role) as Role,
        roles: (data.roles.length > 0 ? data.roles : [data.role ?? prev.role]) as ReadonlyArray<Role>,
        schoolId: data.escuelaId ?? null,
      };
      if (typeof window !== 'undefined') {
        getStorage(shouldPersist).setItem(STORAGE_KEY, JSON.stringify(next));
      }
      return next;
    });
  };

  // FASE 5a — limpiar `isSwitching` cuando el user nuevo ya se commiteó.
  // Garantiza que ProtectedRoute no redirija a /login durante la
  // transición (mientras el user viejo se limpió y el nuevo no llegó).
  useEffect(() => {
    if (isSwitching) setIsSwitching(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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

  const value = useMemo(
    () => ({ user, login, loginAs, logout, cambiarEscuela, isSwitching }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, isSwitching, shouldPersist]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
