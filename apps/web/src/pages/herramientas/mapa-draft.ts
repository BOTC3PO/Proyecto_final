/**
 * PLAN-M — borrador temporal del mapa entre el modo demo (PLAN-L, sin
 * sesión) y el registro. `localStorage` y no `sessionStorage`: el registro
 * puede abrir otra navegación y la sesión de storage no sobrevive siempre.
 * Una sola clave — sólo existe un borrador de demo a la vez.
 */
import type { MapaConfig } from "../../components/modulos/standalone/types";

const DRAFT_KEY = "vb:mapa-draft:v1";
const TTL_MS = 48 * 60 * 60 * 1000;
const MAX_BYTES = 2 * 1024 * 1024;

type StoredDraft = { config: MapaConfig; savedAt: number };

/** Serializa la config a localStorage. `false` si es muy grande o el storage falló. */
export function saveDraft(config: MapaConfig): boolean {
  const payload: StoredDraft = { config, savedAt: Date.now() };
  const raw = JSON.stringify(payload);
  if (raw.length > MAX_BYTES) return false;
  try {
    localStorage.setItem(DRAFT_KEY, raw);
    return true;
  } catch {
    return false;
  }
}

/** Lee el borrador si existe y no expiró (TTL 48h); si expiró o es inválido, lo limpia. */
export function loadDraft(): MapaConfig | null {
  let raw: string | null;
  try {
    raw = localStorage.getItem(DRAFT_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredDraft;
    if (Date.now() - parsed.savedAt > TTL_MS) {
      clearDraft();
      return null;
    }
    return parsed.config;
  } catch {
    clearDraft();
    return null;
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch {
    // ignore
  }
}
