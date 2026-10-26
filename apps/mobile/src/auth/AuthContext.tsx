/**
 * PLAN-R Parte 1 — espejo de `apps/web/src/auth/auth-provider.tsx`,
 * adaptado: SecureStore es async (localStorage no), así que hay un
 * estado `status: "loading"` mientras se hidrata la sesión persistida
 * al boot — la web no lo necesita porque localStorage es síncrono.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import * as SecureStore from "../lib/secureStorage";
import { apiGet, apiPost, loginRequest, setAuthTokens, hydrateTokensFromStore, getAuthToken, getRefreshToken } from "../api/client";
import type { EscuelaDisponible, User } from "../types/auth";

const USER_STORE_KEY = "auth.user";

function ensureRoles(user: User | null): User | null {
  if (!user) return null;
  if (Array.isArray(user.roles) && user.roles.length > 0) return user;
  if (user.role) return { ...user, roles: [user.role] };
  return user;
}

type AuthStatus = "loading" | "signedOut" | "signedIn";

type AuthContextValue = {
  user: User | null;
  status: AuthStatus;
  login: (identifier: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  /** Escuelas a las que puede entrar esta cuenta (una sola mientras no haya membresías en otras). */
  fetchMisEscuelas: () => Promise<EscuelaDisponible[]>;
  /** Cambia la escuela activa: el backend emite un token nuevo con los roles de ESA escuela. `rol` solo hace falta para actuar con un rol que no es el principal. */
  cambiarEscuela: (escuelaId: string, rol?: string) => Promise<User>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

async function persistUser(user: User | null): Promise<void> {
  if (user) {
    await SecureStore.setItemAsync(USER_STORE_KEY, JSON.stringify(user));
  } else {
    await SecureStore.deleteItemAsync(USER_STORE_KEY);
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    let active = true;
    (async () => {
      await hydrateTokensFromStore();
      const storedUser = await SecureStore.getItemAsync(USER_STORE_KEY);
      if (!active) return;
      if (storedUser && getAuthToken()) {
        try {
          setUser(ensureRoles(JSON.parse(storedUser) as User));
          setStatus("signedIn");
          return;
        } catch {
          // JSON corrupto — cae a signedOut abajo.
        }
      }
      setStatus("signedOut");
    })();
    return () => {
      active = false;
    };
  }, []);

  const login = async (identifier: string, password: string): Promise<User> => {
    const data = await loginRequest(identifier, password);
    const nextUser: User = {
      id: data.id,
      name: data.fullName?.trim() || data.username || "Usuario",
      role: data.role as User["role"],
      roles: (data.roles as User["role"][]) ?? undefined,
      schoolId: data.schoolId ?? null,
    };
    await setAuthTokens(data.accessToken, data.refreshToken ?? null);
    await persistUser(ensureRoles(nextUser));
    setUser(ensureRoles(nextUser));
    setStatus("signedIn");
    return nextUser;
  };

  const logout = async (): Promise<void> => {
    await setAuthTokens(null, null);
    await persistUser(null);
    setUser(null);
    setStatus("signedOut");
  };

  const fetchMisEscuelas = async (): Promise<EscuelaDisponible[]> => {
    const res = await apiGet<{ items: EscuelaDisponible[] }>("/api/membresias/mis-escuelas");
    return res.items ?? [];
  };

  // Espejo de `cambiarEscuela` en apps/web/src/auth/auth-provider.tsx: la cuenta no cambia, cambia la escuela
  // activa y con ella los roles del token. El refresh token se conserva (el back solo reemite el access token).
  const cambiarEscuela = async (escuelaId: string, rol?: string): Promise<User> => {
    const data = await apiPost<{ escuelaId: string | null; role: string | null; roles: string[]; accessToken: string }>(
      "/api/auth/escuela-activa",
      { escuelaId, ...(rol ? { rol } : {}) },
    );
    await setAuthTokens(data.accessToken, getRefreshToken());
    const base = user as User;
    const nextRole = (data.role ?? base.role) as User["role"];
    const nextUser: User = {
      ...base,
      role: nextRole,
      roles: (data.roles.length > 0 ? data.roles : [nextRole]) as User["roles"],
      schoolId: data.escuelaId ?? null,
    };
    await persistUser(nextUser);
    setUser(nextUser);
    return nextUser;
  };

  const value = useMemo(() => ({ user, status, login, logout, fetchMisEscuelas, cambiarEscuela }), [user, status]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
