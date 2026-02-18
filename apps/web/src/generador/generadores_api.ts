import { ApiError, apiGet } from "../lib/api";
import type { Dificultad } from "./matematicas/generic";
import { normalizarDificultadCore } from "./matematicas/generic";
import { getTemaByIdSync, listarTemasMatematicas } from "./matematicas/catalogoApi";

export type GeneradoresTemaPayload = {
  limites?: unknown;
  consignas?: unknown;
};

type CacheStatus = "idle" | "ready" | "unavailable";

type CacheEntry = {
  status: CacheStatus;
  data: GeneradoresTemaPayload | null;
};

const cache = new Map<number, CacheEntry>();
const inFlightByTema = new Map<number, Promise<void>>();

const temaSlugById = new Map<number, string>();

const asRecord = (value: unknown): Record<string, unknown> | null => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
};

const asNumericTuple = (value: unknown): [number, number] | null => {
  if (!Array.isArray(value) || value.length !== 2) return null;
  const min = Number(value[0]);
  const max = Number(value[1]);
  if (!Number.isFinite(min) || !Number.isFinite(max) || min >= max) return null;
  return [min, max];
};

const setUnavailable = (idTema: number): void => {
  cache.set(idTema, { status: "unavailable", data: null });
};

const setReady = (idTema: number, payload: GeneradoresTemaPayload): void => {
  cache.set(idTema, { status: "ready", data: payload });
};

async function resolveTemaSlug(idTema: number): Promise<string | null> {
  const known = temaSlugById.get(idTema) ?? getTemaByIdSync(idTema);
  if (known) {
    temaSlugById.set(idTema, known);
    return known;
  }

  const prefijo = `${String(idTema).padStart(2, "0")}_`;
  try {
    const temas = await listarTemasMatematicas();
    const match = temas.find((tema) => tema.startsWith(prefijo)) ?? null;
    if (match) temaSlugById.set(idTema, match);
    return match;
  } catch {
    return null;
  }
}

const normalizePayload = (raw: unknown): GeneradoresTemaPayload | null => {
  const root = asRecord(raw);
  if (!root) return null;
  return {
    limites: root.limits,
    consignas: root.enunciado,
  };
};

export async function preloadGeneradoresTema(idTema: number): Promise<void> {
  const entry = cache.get(idTema);
  if (entry?.status === "ready" || entry?.status === "unavailable") return;

  const pending = inFlightByTema.get(idTema);
  if (pending) {
    await pending;
    return;
  }

  const promise = (async () => {
    const tema = await resolveTemaSlug(idTema);
    if (!tema) {
      setUnavailable(idTema);
      return;
    }

    try {
      const raw = await apiGet<unknown>(`/api/consignas/matematicas/${tema}/v2`);
      const payload = normalizePayload(raw);
      if (!payload) {
        setUnavailable(idTema);
        return;
      }
      setReady(idTema, payload);
    } catch (error) {
      if (
        error instanceof ApiError &&
        [401, 403, 404].includes(error.status)
      ) {
        setUnavailable(idTema);
        return;
      }
      setUnavailable(idTema);
      console.debug("[generadores_api] preload falló", { idTema, error });
    }
  })();

  inFlightByTema.set(idTema, promise);
  try {
    await promise;
  } finally {
    inFlightByTema.delete(idTema);
  }
}

export function getLimite(
  idTema: number,
  dificultad: Dificultad,
  key: string
): [number, number] | null {
  const payload = cache.get(idTema);
  if (payload?.status !== "ready" || !payload.data) return null;

  const limites = asRecord(payload.data.limites);
  const porDificultad = asRecord(limites?.porDificultad);
  const nivel = asRecord(porDificultad?.[normalizarDificultadCore(dificultad)]);

  const rangos = asRecord(nivel?.rangos);
  const fromRangos = asNumericTuple(rangos?.[key]);
  if (fromRangos) return fromRangos;

  if (key === "numeros") {
    const fromRango = asNumericTuple(nivel?.rango);
    if (fromRango) return fromRango;
  }

  return null;
}

const buscarTemplateEnEstructura = (input: unknown, dificultad: string, clave: string): string | null => {
  if (typeof input === "string") {
    const text = input.trim();
    return text.length > 0 ? text : null;
  }

  if (Array.isArray(input)) {
    for (const item of input) {
      const found = buscarTemplateEnEstructura(item, dificultad, clave);
      if (found) return found;
    }
    return null;
  }

  const obj = asRecord(input);
  if (!obj) return null;

  const direct = obj[clave];
  const directFound = buscarTemplateEnEstructura(direct, dificultad, clave);
  if (directFound) return directFound;

  const byDiff = asRecord(obj[dificultad]);
  if (byDiff) {
    const inDiff = buscarTemplateEnEstructura(byDiff[clave] ?? byDiff.template ?? byDiff.texto, dificultad, clave);
    if (inDiff) return inDiff;
  }

  const enunciados = obj.enunciados;
  if (Array.isArray(enunciados)) {
    for (const item of enunciados) {
      const it = asRecord(item);
      if (!it) continue;
      const candidateKey =
        String(it.claveSubtipo ?? it.clave ?? it.key ?? "").trim() ||
        String(it.mode ?? "").trim();
      if (candidateKey !== clave) continue;
      const found = buscarTemplateEnEstructura(it.template ?? it.texto, dificultad, clave);
      if (found) return found;
    }
  }

  return null;
};

export function getConsigna(
  idTema: number,
  dificultad: Dificultad,
  clave: string
): string | null {
  const payload = cache.get(idTema);
  if (payload?.status !== "ready" || !payload.data) return null;

  const template = buscarTemplateEnEstructura(
    payload.data.consignas,
    normalizarDificultadCore(dificultad),
    clave
  );

  return typeof template === "string" && template.trim().length > 0
    ? template
    : null;
}

export const __debug = {
  setCache(idTema: number, payload: GeneradoresTemaPayload | null): void {
    if (!payload) {
      cache.delete(idTema);
      return;
    }
    cache.set(idTema, { status: "ready", data: payload });
  },
  clear(): void {
    cache.clear();
    inFlightByTema.clear();
  },
};
