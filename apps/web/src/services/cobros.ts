/**
 * PLAN-B Fase 5 — cliente para el dominio "cobros escuela→familias"
 * (api/src/routes/cobros.ts, api/src/routes/escuela-pasarelas.ts).
 */
import { apiGet, apiPatch, apiPost } from "../lib/api";

export type EstadoCobro = "borrador" | "publicado" | "cerrado";
export type EstadoCuota = "pendiente" | "en_proceso" | "pagada" | "vencida" | "anulada";
export type ProviderPasarela = "mercadopago" | "cryptomus";

export interface CobroEscuela {
  id: string;
  escuelaId: string;
  concepto: string;
  descripcion?: string | null;
  montoUnitario: number;
  moneda: string;
  vencimiento?: string | null;
  estado: EstadoCobro;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CuotaAlumno {
  id: string;
  cobroId: string;
  alumnoId: string;
  alumnoNombre?: string;
  pagadorId?: string | null;
  estado: EstadoCuota;
  montoFinal: number;
  pagoId?: string | null;
  createdAt: string;
  updatedAt: string;
  cobro?: CobroEscuela | null;
}

export interface EscuelaPasarelaResumen {
  provider: ProviderPasarela;
  cuentaConectadaId: string | null;
  activa: boolean;
  configurada: boolean;
  updatedAt: string;
}

export const fetchCobros = () => apiGet<{ items: CobroEscuela[] }>("/api/cobros");

export const crearCobro = (data: {
  concepto: string;
  descripcion?: string | null;
  montoUnitario: number;
  moneda?: string;
  vencimiento?: string | null;
}) => apiPost<CobroEscuela>("/api/cobros", data);

export const fetchCuotasCobro = (cobroId: string) =>
  apiGet<{ cobro: CobroEscuela; cuotas: CuotaAlumno[] }>(`/api/cobros/${cobroId}/cuotas`);

export const publicarCobro = (
  cobroId: string,
  body: { aulaId?: string; alumnoIds?: string[]; montosPersonalizados?: Record<string, number> }
) => apiPost<{ ok: boolean; cobroId: string; cuotasCreadas: number }>(`/api/cobros/${cobroId}/publicar`, body);

export const fetchCuotasMias = () => apiGet<{ items: CuotaAlumno[] }>("/api/cuotas/mias");

export const iniciarCheckout = (cuotaId: string, provider?: string) =>
  apiPost<{ pago: { id: string; provider: string; estado: string }; url: string | null }>(
    `/api/cuotas/${cuotaId}/checkout`,
    provider ? { provider } : {}
  );

export const confirmarPagoManual = (cuotaId: string) =>
  apiPost<{ ok: boolean }>(`/api/cuotas/${cuotaId}/confirmar-pago`, {});

export const fetchPasarelas = (escuelaId: string) =>
  apiGet<{ items: EscuelaPasarelaResumen[] }>(`/api/escuelas/${escuelaId}/pasarelas`);

export const conectarPasarela = (
  escuelaId: string,
  data: {
    provider: ProviderPasarela;
    cuentaConectadaId?: string | null;
    credenciales?: Record<string, string> | null;
    activa?: boolean;
  }
) => apiPost<EscuelaPasarelaResumen>(`/api/escuelas/${escuelaId}/pasarelas`, data);

export const togglePasarela = (escuelaId: string, provider: ProviderPasarela, activa: boolean) =>
  apiPatch<EscuelaPasarelaResumen>(`/api/escuelas/${escuelaId}/pasarelas/${provider}`, { activa });

export const iniciarAutorizacionMercadoPago = (escuelaId: string) =>
  apiGet<{ url: string }>(`/api/escuelas/${escuelaId}/pasarelas/mercadopago/authorize`);

/**
 * PLAN-roles-v3 D2 — delegación de cobros.
 *
 * Sólo el directivo PRINCIPAL (el que registró la escuela) otorga o revoca.
 * La delegación habilita emitir cuotas y confirmar pagos; conectar la
 * pasarela sigue siendo exclusivo del principal, así que un delegado nunca
 * puede redirigir a dónde va la plata.
 */
export type DirectivoDelegacion = {
  usuarioId: string;
  nombre: string;
  email: string | null;
  puedeCobrar: boolean;
  esPrincipal: boolean;
};

export const fetchDirectivos = (escuelaId: string) =>
  apiGet<{ items: DirectivoDelegacion[] }>(`/api/escuelas/${escuelaId}/directivos`);

export const setDelegacionCobros = (escuelaId: string, usuarioId: string, puedeCobrar: boolean) =>
  apiPatch<{ ok: boolean; puedeCobrar: boolean }>(
    `/api/escuelas/${escuelaId}/delegacion-cobros`,
    { usuarioId, puedeCobrar }
  );
