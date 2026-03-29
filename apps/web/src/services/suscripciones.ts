import { apiGet, apiPost } from "../lib/api";

export type LimitesEscuela = {
  max_profesores: number;
  max_directivos: number;
  max_aulas: number;
  max_alumnos_por_aula: number;
};

export type Suscripcion = {
  id: string;
  entidad_tipo: "escuela" | "profesor" | "alumno";
  entidad_id: string;
  plan: "gratuito" | "pago";
  estado: "activa" | "cancelada" | "vencida" | "pendiente";
  periodo_inicio: string;
  periodo_fin: string;
  monto_mensual: number;
  moneda: string;
  expansiones: number;
  mp_preapproval_id: string | null;
  cancelada_at: string | null;
  reembolso_solicitado: number;
  created_at: string;
};

export type EstadoSuscripcion = {
  personal: Suscripcion | null;
  escuela: Suscripcion | null;
  multiplicador: boolean;
  paymentsEnabled: boolean;
};

export type PagoHistorial = {
  id: string;
  suscripcion_id: string;
  monto: number;
  moneda: string;
  estado: string;
  periodo_inicio: string;
  periodo_fin: string;
  created_at: string;
};

export async function fetchEstadoSuscripcion(): Promise<EstadoSuscripcion> {
  return apiGet<EstadoSuscripcion>("/api/suscripciones/estado");
}

export async function fetchLimites(): Promise<{
  limites: LimitesEscuela;
  esAdmin: boolean;
}> {
  return apiGet("/api/suscripciones/limites");
}

export async function fetchHistorialPagos(): Promise<PagoHistorial[]> {
  const data = await apiGet<{ items: PagoHistorial[] }>(
    "/api/suscripciones/historial"
  );
  return data.items ?? [];
}

export async function iniciarSuscripcion(params: {
  tipo: "escuela" | "profesor" | "alumno";
  payerEmail: string;
  expansiones?: number;
  backUrl?: string;
}): Promise<{ suscripcionId: string; initPoint: string }> {
  return apiPost("/api/suscripciones/iniciar", params);
}

export async function cancelarSuscripcion(
  suscripcionId: string
): Promise<{ ok: boolean; mensaje: string; periodoFin: string }> {
  return apiPost("/api/suscripciones/cancelar", { suscripcionId });
}

export async function solicitarReembolso(
  suscripcionId: string
): Promise<{ ok: boolean; mensaje: string }> {
  return apiPost("/api/suscripciones/reembolso", { suscripcionId });
}
