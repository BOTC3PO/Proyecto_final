import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Role } from './roles';
import { AuthContext, type User, type CuentaVinculada } from './AuthContex';
import { setAuthToken, setRefreshToken, getAuthToken } from '../lib/api';

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

  const switchCuenta = async (): Promise<{ landing: string }> => {
    const token = getAuthToken();
    if (!token) throw new Error('No hay sesión activa');

    // FASE 5a — marcamos la transición ANTES del fetch. Se limpia cuando el
    // user nuevo se commitea (ver useEffect [user] abajo) o en el catch.
    setIsSwitching(true);
    try {
      const res = await fetch('/api/auth/cambiar-cuenta', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(err.error ?? 'Error al cambiar de cuenta');
      }

      const data = await res.json() as {
        accessToken: string;
        refreshToken: string | null;
        id: string;
        name: string;
        role: Role;
        roles: Role[];
        landing: string;
        cuentaVinculada: CuentaVinculada | null;
      };

      const newUser: User = {
        id: data.id,
        name: data.name,
        role: data.role,
        roles: data.roles,
        cuentaVinculada: data.cuentaVinculada,
      };

      // FASE 3 — el token del destino va siempre a sessionStorage (remember=false)
      // para que el JWT de la cuenta espejo NO quede en localStorage.
      setAuthToken(data.accessToken, { remember: false });
      setRefreshToken(data.refreshToken, { remember: false });
      persistUser(ensureRoles(newUser), false);

      return { landing: data.landing };
    } catch (err) {
      // Falla del switch: limpiamos la transición para no dejar la UI
      // bloqueada. El user no cambió, así que el useEffect no se dispara.
      setIsSwitching(false);
      throw err;
    }
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

  const value = useMemo(() => ({ user, login, loginAs, logout, switchCuenta, isSwitching }), [user, isSwitching]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
