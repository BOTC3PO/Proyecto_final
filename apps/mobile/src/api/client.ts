/**
 * PLAN-R Parte 1 — cliente API. Espejo de `apps/web/src/lib/api.ts`
 * (mismo contrato de refresh-on-401), adaptado a `expo-secure-store`
 * (API async, a diferencia de localStorage). El token vive en memoria
 * después del primer read para no pagar el costo async en cada request.
 */
import Constants from "expo-constants";
import * as SecureStore from "../lib/secureStorage";

const ACCESS_TOKEN_KEY = "auth.token";
const REFRESH_TOKEN_KEY = "auth.refreshToken";

/**
 * Resuelve la base URL de la API:
 * 1. `EXPO_PUBLIC_API_BASE_URL` si está seteada (override explícito).
 * 2. En dev, la misma IP que usó Metro para servir el bundle (funciona
 *    sin config en un celular físico en la misma red que el server de
 *    dev — ver README de este paquete).
 * 3. Fallback: localhost:5050 (simulador iOS/web).
 */
function resolveApiBaseUrl(): string {
  const fromEnv = process.env.EXPO_PUBLIC_API_BASE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const hostUri = Constants.expoConfig?.hostUri;
  if (__DEV__ && hostUri) {
    const host = hostUri.split(":")[0];
    if (host) return `http://${host}:5050`;
  }

  return "http://localhost:5050";
}

export const API_BASE_URL = resolveApiBaseUrl();

let authToken: string | null = null;
let refreshToken: string | null = null;
let hydrated = false;

/** Debe esperarse una vez al boot (ver AuthContext) antes de asumir getAuthToken() actualizado. */
export async function hydrateTokensFromStore(): Promise<void> {
  const [access, refresh] = await Promise.all([
    SecureStore.getItemAsync(ACCESS_TOKEN_KEY),
    SecureStore.getItemAsync(REFRESH_TOKEN_KEY),
  ]);
  authToken = access;
  refreshToken = refresh;
  hydrated = true;
}

export const getAuthToken = () => authToken;
export const getRefreshToken = () => refreshToken;
export const isHydrated = () => hydrated;

export async function setAuthTokens(access: string | null, refresh: string | null): Promise<void> {
  authToken = access;
  refreshToken = refresh;
  if (access) {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, access);
  } else {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  }
  if (refresh) {
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refresh);
  } else {
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
  }
}

export class ApiError extends Error {
  status: number;
  payload?: unknown;
  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    if (payload !== undefined) this.payload = payload;
  }
}

type RequestOptions = Omit<RequestInit, "headers"> & {
  headers?: Record<string, string>;
};

const buildUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  return `${API_BASE_URL}/${path.replace(/^\//, "")}`;
};

let refreshRequest: Promise<string | null> | null = null;

async function attemptTokenRefresh(): Promise<string | null> {
  const currentRefreshToken = getRefreshToken();
  if (!currentRefreshToken) return null;
  const response = await fetch(buildUrl("/api/auth/refresh"), {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: currentRefreshToken }),
  });
  if (!response.ok) {
    await setAuthTokens(null, null);
    return null;
  }
  const payload = (await response.json()) as { accessToken?: string; refreshToken?: string };
  if (!payload.accessToken) {
    await setAuthTokens(null, null);
    return null;
  }
  await setAuthTokens(payload.accessToken, payload.refreshToken ?? currentRefreshToken);
  return payload.accessToken;
}

function refreshAccessToken(): Promise<string | null> {
  if (!refreshRequest) {
    refreshRequest = attemptTokenRefresh().finally(() => {
      refreshRequest = null;
    });
  }
  return refreshRequest;
}

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
  retryOnUnauthorized = true,
): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const body = options.body;
  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] ?? "application/json";
  }
  const response = await fetch(buildUrl(path), { ...options, headers });

  if (response.status === 401 && retryOnUnauthorized && path !== "/api/auth/refresh") {
    const nextAccessToken = await refreshAccessToken();
    if (nextAccessToken) {
      return apiRequest<T>(path, options, false);
    }
  }

  if (!response.ok) {
    let message = response.statusText;
    let errorPayload: unknown;
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      if (payload?.error) message = payload.error;
      if (payload) errorPayload = payload;
    } else {
      const text = await response.text();
      message = text || message;
    }
    throw new ApiError(message || "Request failed", response.status, errorPayload);
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const apiGet = <T>(path: string, options?: RequestOptions) => apiRequest<T>(path, options);
export const apiPost = <T>(path: string, body: unknown, options?: RequestOptions) =>
  apiRequest<T>(path, { ...options, method: "POST", body: JSON.stringify(body) });
export const apiPatch = <T>(path: string, body: unknown, options?: RequestOptions) =>
  apiRequest<T>(path, { ...options, method: "PATCH", body: JSON.stringify(body) });
export const apiPut = <T>(path: string, body: unknown, options?: RequestOptions) =>
  apiRequest<T>(path, { ...options, method: "PUT", body: JSON.stringify(body) });
export const apiDelete = <T>(path: string, options?: RequestOptions) =>
  apiRequest<T>(path, { ...options, method: "DELETE" });

/** Login directo (no pasa por apiPost porque todavía no hay token que adjuntar). */
export async function loginRequest(identifier: string, password: string) {
  const response = await fetch(buildUrl("/api/auth/login"), {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiError((payload as { error?: string })?.error ?? "No se pudo iniciar sesión", response.status, payload);
  }
  return payload as {
    id: string;
    username?: string;
    email?: string;
    fullName?: string | null;
    role: string;
    roles?: string[];
    schoolId?: string | null;
    accessToken: string;
    expiresAt?: string;
    expiresIn?: number;
    refreshToken?: string;
    refreshExpiresAt?: string;
    refreshExpiresIn?: number;
  };
}
