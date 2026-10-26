/**
 * PLAN-roles-v3 A3 — solicitudes e invitaciones de rol.
 *
 * Pedir e invitar son la misma fila vista de los dos lados. `recibidas` son
 * las que esperan MI respuesta; `porResolver`, las que me toca aprobar como
 * directivo de la escuela.
 */
import { apiGet, apiPost } from "../lib/api";

export type Invitacion = {
  id: string;
  escuelaId: string;
  destinatario: string;
  rol: string;
  iniciadoPor: string;
  estado: string;
  createdAt: string;
};

export const fetchInvitaciones = () =>
  apiGet<{ recibidas: Invitacion[]; porResolver: Invitacion[] }>("/api/invitaciones");

export const pedirRol = (rol: string, escuelaId?: string) =>
  apiPost<{ id: string; estado: string }>("/api/invitaciones", { rol, ...(escuelaId ? { escuelaId } : {}) });

export const invitarA = (destinatario: string, rol: string, escuelaId?: string) =>
  apiPost<{ id: string; estado: string }>("/api/invitaciones", {
    destinatario,
    rol,
    ...(escuelaId ? { escuelaId } : {})
  });

export const responderInvitacion = (id: string, aceptar: boolean, motivo?: string) =>
  apiPost<{ ok: boolean; estado: string }>(`/api/invitaciones/${id}/responder`, {
    aceptar,
    ...(motivo ? { motivo } : {})
  });
