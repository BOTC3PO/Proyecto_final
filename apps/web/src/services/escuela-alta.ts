/**
 * Alta de escuela con aprobación.
 *
 * Una escuela nace "pendiente": puede usar aulas, módulos y evaluaciones,
 * pero no cobrarle a las familias hasta que el admin la verifique. Ese gate
 * vive en el back (lib/escuela-verificacion.ts); acá sólo se lo refleja.
 */
import { apiGet, apiPost } from "../lib/api";

export type SolicitudEscuela = {
  name: string;
  razonSocial: string;
  cuit: string;
  domicilio: string;
  contactoEmail: string;
  contactoTelefono: string;
  cue?: string;
  notas?: string;
};

export type EscuelaPendiente = {
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
