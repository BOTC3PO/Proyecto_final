/**
 * PLAN-roles-v3 B2 — verificación del perfil público.
 *
 * Otra máquina que la de escuela: acá se valida a una PERSONA que dice ser
 * docente o directiva sin una escuela que responda por ella. Lo que gatea es
 * la presentación (qué muestra el perfil abierto), no los permisos de
 * intranet.
 */
import { apiGet, apiPost } from "../lib/api";

export type EstadoVerificacion = "no_solicitada" | "pendiente" | "verificada" | "rechazada";

export type SolicitudPublica = {
  rolDeclarado: "TEACHER" | "DIRECTIVO";
  nombreCompleto: string;
  documento: string;
  institucion?: string;
  enlace?: string;
  notas?: string;
};

export const fetchMiVerificacion = () =>
  apiGet<{ estado: EstadoVerificacion; motivo: string | null }>("/api/verificacion-publica/mi-estado");

export const solicitarVerificacion = (datos: SolicitudPublica) =>
  apiPost<{ ok: boolean; estado: string }>("/api/verificacion-publica", datos);

export const fetchSolicitudesPublicas = (estado = "pendiente") =>
  apiGet<{ items: Array<{ id: string; nombre: string; email: string | null; datos: Record<string, string> | null }> }>(
    `/api/verificacion-publica/solicitudes?estado=${encodeURIComponent(estado)}`
  );

export const resolverVerificacion = (id: string, estado: "verificada" | "rechazada", motivo?: string) =>
  apiPost<{ ok: boolean }>(`/api/verificacion-publica/${id}/resolver`, {
    estado,
    ...(motivo ? { motivo } : {})
  });
