export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  import.meta.env.VITE_API_URL ??
  "http://localhost:5050";

const AUTH_TOKEN_STORAGE_KEY = "auth.token";
const REFRESH_TOKEN_STORAGE_KEY = "auth.refreshToken";
const AUTH_USER_STORAGE_KEY = "auth.user";
const AUTH_SESSION_CLEARED_EVENT = "auth:session-cleared";

let authToken: string | null = null;
let refreshToken: string | null = null;

const getStorage = (type: "local" | "session") => {
  if (typeof window === "undefined") return null;
  return type === "local" ? window.localStorage : window.sessionStorage;
};

const readStoredToken = (storageKey: string) => {
  try {
    const localToken = getStorage("local")?.getItem(storageKey);
    if (localToken) return localToken;
    return getStorage("session")?.getItem(storageKey) ?? null;
  } catch {
    return null;
  }
};

const clearStoredAuthSession = () => {
  authToken = null;
  refreshToken = null;
  try {
    const localStorageRef = getStorage("local");
    const sessionStorageRef = getStorage("session");
    localStorageRef?.removeItem(AUTH_TOKEN_STORAGE_KEY);
    localStorageRef?.removeItem(REFRESH_TOKEN_STORAGE_KEY);
    localStorageRef?.removeItem(AUTH_USER_STORAGE_KEY);
    sessionStorageRef?.removeItem(AUTH_TOKEN_STORAGE_KEY);
    sessionStorageRef?.removeItem(REFRESH_TOKEN_STORAGE_KEY);
    sessionStorageRef?.removeItem(AUTH_USER_STORAGE_KEY);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(AUTH_SESSION_CLEARED_EVENT));
    }
  } catch {
    // ignore storage errors
  }
};

const hasPersistedUser = () => {
  try {
    const localStoredUser = getStorage("local")?.getItem(AUTH_USER_STORAGE_KEY);
    if (localStoredUser) {
      JSON.parse(localStoredUser);
      return true;
    }

    const sessionStoredUser = getStorage("session")?.getItem(AUTH_USER_STORAGE_KEY);
    if (sessionStoredUser) {
      JSON.parse(sessionStoredUser);
      return true;
    }

    return false;
  } catch {
    return false;
  }
};

export const getAuthToken = () => {
  if (authToken) return authToken;
  if (!hasPersistedUser()) {
    setAuthToken(null);
    setRefreshToken(null);
    return null;
  }
  authToken = readStoredToken(AUTH_TOKEN_STORAGE_KEY);
  return authToken;
};


export const getRefreshToken = () => {
  if (refreshToken) return refreshToken;
  refreshToken = readStoredToken(REFRESH_TOKEN_STORAGE_KEY);
  return refreshToken;
};

export const setAuthToken = (token: string | null, options?: { remember?: boolean }) => {
  authToken = token;
  try {
    const localStorageRef = getStorage("local");
    const sessionStorageRef = getStorage("session");
    if (!localStorageRef || !sessionStorageRef) return;

    if (!token) {
      localStorageRef.removeItem(AUTH_TOKEN_STORAGE_KEY);
      sessionStorageRef.removeItem(AUTH_TOKEN_STORAGE_KEY);
      return;
    }

    localStorageRef.removeItem(AUTH_TOKEN_STORAGE_KEY);
    sessionStorageRef.removeItem(AUTH_TOKEN_STORAGE_KEY);

    if (options?.remember) {
      localStorageRef.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    } else {
      sessionStorageRef.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    }
  } catch {
    // ignore storage errors
  }
};



export const setRefreshToken = (token: string | null, options?: { remember?: boolean }) => {
  refreshToken = token;
  try {
    const localStorageRef = getStorage("local");
    const sessionStorageRef = getStorage("session");
    if (!localStorageRef || !sessionStorageRef) return;

    if (!token) {
      localStorageRef.removeItem(REFRESH_TOKEN_STORAGE_KEY);
      sessionStorageRef.removeItem(REFRESH_TOKEN_STORAGE_KEY);
      return;
    }

    localStorageRef.removeItem(REFRESH_TOKEN_STORAGE_KEY);
    sessionStorageRef.removeItem(REFRESH_TOKEN_STORAGE_KEY);

    if (options?.remember) {
      localStorageRef.setItem(REFRESH_TOKEN_STORAGE_KEY, token);
    } else {
      sessionStorageRef.setItem(REFRESH_TOKEN_STORAGE_KEY, token);
    }
  } catch {
    // ignore storage errors
  }
};

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

type RequestOptions = Omit<RequestInit, "headers"> & {
  headers?: Record<string, string>;
};

const buildUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  return `${API_BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};


let refreshRequest: Promise<string | null> | null = null;

const attemptTokenRefresh = async () => {
  const currentRefreshToken = getRefreshToken();
  if (!currentRefreshToken) return null;
  const response = await fetch(buildUrl("/api/auth/refresh"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ refreshToken: currentRefreshToken })
  });
  if (!response.ok) {
    clearStoredAuthSession();
    return null;
  }
  const payload = (await response.json()) as { accessToken?: string; refreshToken?: string };
  if (!payload.accessToken) {
    clearStoredAuthSession();
    return null;
  }
  const remember = Boolean(getStorage("local")?.getItem(AUTH_TOKEN_STORAGE_KEY));
  setAuthToken(payload.accessToken, { remember });
  if (payload.refreshToken) {
    setRefreshToken(payload.refreshToken, { remember });
  }
  return payload.accessToken;
};

const refreshAccessToken = async () => {
  if (!refreshRequest) {
    refreshRequest = attemptTokenRefresh().finally(() => {
      refreshRequest = null;
    });
  }
  return refreshRequest;
};

export async function apiRequest<T>(path: string, options: RequestOptions = {}, retryOnUnauthorized = true): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
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
    const retryAfterHeader = response.headers.get("Retry-After");
    let message = response.statusText;

    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const payload = (await response.json().catch(() => null)) as
        | { error?: string; retryAfterSeconds?: number }
        | null;
      if (payload?.error) {
        message = payload.error;
      }
      if (response.status === 429) {
        const headerRetryAfter = Number(retryAfterHeader ?? 0);
        const retryAfterSeconds = payload?.retryAfterSeconds ?? (Number.isFinite(headerRetryAfter) && headerRetryAfter > 0 ? headerRetryAfter : null);
        message = retryAfterSeconds
          ? `${message}. Intentá nuevamente en ${retryAfterSeconds} segundos.`
          : message;
      }
    } else {
      const text = await response.text();
      message = text || message;
    }

    throw new ApiError(message || "Request failed", response.status);
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
