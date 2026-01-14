const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5050";

export type ApiError = {
  error?: string;
};

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {})
    },
    ...options
  });

  const contentType = response.headers.get("content-type") ?? "";
  const payload = contentType.includes("application/json") ? await response.json() : await response.text();

  if (!response.ok) {
    const message = typeof payload === "string" ? payload : (payload as ApiError).error;
    throw new Error(message || "Ocurrió un error al conectar con la API.");
  }

  return payload as T;
}
