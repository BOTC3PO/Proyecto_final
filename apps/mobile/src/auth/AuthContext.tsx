/**
 * PLAN-R Parte 1 — espejo de `apps/web/src/auth/auth-provider.tsx`,
 * adaptado: SecureStore es async (localStorage no), así que hay un
 * estado `status: "loading"` mientras se hidrata la sesión persistida
 * al boot — la web no lo necesita porque localStorage es síncrono.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import * as SecureStore from "../lib/secureStorage";
import { loginRequest, setAuthTokens, hydrateTokensFromStore, getAuthToken } from "../api/client";
import type { User } from "../types/auth";

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

  const value = useMemo(() => ({ user, status, login, logout }), [user, status]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
