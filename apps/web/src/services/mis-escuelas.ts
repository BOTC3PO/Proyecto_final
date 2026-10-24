/**
 * PLAN-multirol Fase 2 — selector de escuela.
 *
 * Una misma cuenta puede pertenecer a varias escuelas con roles distintos
 * (directivo en una, alumno en otra). La sesión está parada en UNA a la
 * vez, y los roles que trae el JWT son los de esa escuela — cambiar de
 * escuela es cambiar de rol efectivo, por eso el back emite un token nuevo
 * en vez de que el front toque nada localmente.
 */
import { apiGet, apiPost } from "../lib/api";

export type EscuelaDisponible = {
  escuelaId: string;
  nombre: string;
  /** Roles GLOBALES que la persona tiene en esa escuela (USER, TEACHER, …). */
  roles: string[];
};

export type CambioEscuelaResponse = {
  escuelaId: string | null;
  role: string | null;
  roles: string[];
  accessToken: string;
  expiresAt: string;
  expiresIn: number;
};

export const fetchMisEscuelas = () =>
  apiGet<{ items: EscuelaDisponible[] }>("/api/membresias/mis-escuelas");

/** `rol` es opcional: sólo hace falta para actuar con un rol que no es el
 *  principal de esa escuela (p. ej. un docente entrando como alumno). */
export const cambiarEscuelaActiva = (escuelaId: string, rol?: string) =>
  apiPost<CambioEscuelaResponse>("/api/auth/escuela-activa", { escuelaId, ...(rol ? { rol } : {}) });
