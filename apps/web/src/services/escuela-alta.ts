/**
 * Alta de escuela con aprobación.
 *
 * Una escuela nace "pendiente": puede usar aulas, módulos y evaluaciones,
 * pero no cobrarle a las familias hasta que el admin la verifique. Ese gate
 * vive en el back (lib/escuela-verificacion.ts); acá sólo se lo refleja.
 */
import { apiGet, apiPatch, apiPost, apiPut } from "../lib/api";

export type SolicitudEscuela = {
  name: string;
  razonSocial: string;
  cuit: string;
  domicilio: string;
  contactoEmail: string;
  contactoTelefono: string;
  cue?: string;
  notas?: string;
  /** Opcional: la cooperadora de la escuela, para cobrar sus aportes con su propia cuenta. */
  cooperadora?: { nombre: string; cuit: string; contactoEmail?: string | null };
};

export type Cooperadora = {
  id: string;
  escuelaId: string;
  escuelaNombre?: string;
  nombre: string;
  cuit: string;
  contactoEmail: string | null;
  estadoVerificacion: "pendiente" | "verificada" | "rechazada";
  motivoRechazo: string | null;
};

export const fetchCooperadora = (escuelaId: string) =>
  apiGet<{ cooperadora: Cooperadora | null }>(`/api/escuelas/${escuelaId}/cooperadora`);

export const guardarCooperadora = (escuelaId: string, datos: { nombre: string; cuit: string; contactoEmail?: string | null }) =>
  apiPut<{ cooperadora: Cooperadora }>(`/api/escuelas/${escuelaId}/cooperadora`, datos);

export const fetchCooperadorasPendientes = (estado = "pendiente") =>
  apiGet<{ items: Cooperadora[] }>(`/api/admin/cooperadoras?estado=${encodeURIComponent(estado)}`);

export const verificarCooperadora = (id: string, estado: "verificada" | "rechazada", motivo?: string) =>
  apiPost<{ cooperadora: Cooperadora }>(`/api/admin/cooperadoras/${id}/verificacion`, { estado, ...(motivo ? { motivo } : {}) });

export type EscuelaPendiente = {
  cryptomusHabilitado?: boolean;
  directivoPrincipalId?: string | null;
  id: string;
  name: string;
  estadoVerificacion: string;
  createdAt: string;
  datos: Record<string, string> | null;
  directivoPrincipal: { id: string; fullName?: string; username?: string; email?: string } | null;
};

export const solicitarEscuela = (datos: SolicitudEscuela) =>
  apiPost<{ id: string; estadoVerificacion: string; puedeCobrar: boolean }>(
    "/api/escuelas/solicitar",
    datos
  );

export const fetchSolicitudes = (estado = "pendiente") =>
  apiGet<{ items: EscuelaPendiente[] }>(`/api/escuelas/solicitudes?estado=${encodeURIComponent(estado)}`);

export const verificarEscuela = (escuelaId: string, estado: "verificada" | "rechazada", motivo?: string) =>
  apiPost<{ ok: boolean; estadoVerificacion: string }>(`/api/escuelas/${escuelaId}/verificar`, {
    estado,
    ...(motivo ? { motivo } : {})
  });

/** Sólo el admin de plataforma: elige con qué escuelas asume la custodia de
 *  fondos que implica Cryptomus (liquida con comisión pero dentro de la
 *  cuenta de VB, y el pago a la escuela es manual). */
export const habilitarCryptomus = (escuelaId: string, habilitado: boolean) =>
  apiPatch<{ ok: boolean; cryptomusHabilitado: boolean }>(
    `/api/escuelas/${escuelaId}/cryptomus`,
    { habilitado }
  );

/** Sólo el admin: si el titular se va, la escuela queda sin nadie que pueda
 *  tocar su pasarela. El nuevo tiene que ser directivo activo de esa escuela. */
export const reasignarDirectivoPrincipal = (escuelaId: string, usuarioId: string) =>
  apiPatch<{ ok: boolean; directivoPrincipalId: string }>(
    `/api/escuelas/${escuelaId}/directivo-principal`,
    { usuarioId }
  );
