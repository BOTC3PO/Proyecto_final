/**
 * PLAN-B Fase 3 — abstracción común a los 3 providers de pago (Mercado
 * Pago / Stripe / Cryptomus) para el dominio cobros escuela→familias.
 *
 * `createCheckout`/`verifyWebhook` son el ÚNICO punto de contacto entre
 * `routes/cobros.ts` y cada provider — cambiar de provider, o agregar uno
 * nuevo, no debería tocar nada fuera de `lib/pasarelas/`.
 */

export type CuotaParaCheckout = {
  id: string;
  montoFinal: number;
  moneda: string;
  concepto: string;
};

export type EscuelaParaCheckout = {
  id: string;
  nombre: string;
  /** % que retiene VB — 0 si la escuela es "centralizada" (no hay split). */
  comisionPct: number;
  /** Cuenta de la escuela en el provider (OAuth). Null si no conectó todavía. */
  cuentaConectadaId: string | null;
};

export type CheckoutResult = {
  url: string;
  providerRef: string;
};

export type WebhookEventEstado = "pagada" | "fallida" | "pendiente";

export type WebhookEvent = {
  providerRef: string;
  estado: WebhookEventEstado;
  montoBruto?: number;
  raw: unknown;
};

/** La escuela (o VB) no cargó las credenciales de este provider todavía. */
export class PasarelaNoConfiguradaError extends Error {
  constructor(provider: string, detalle?: string) {
    super(`El provider de pago "${provider}" no está configurado${detalle ? `: ${detalle}` : ""}.`);
    this.name = "PasarelaNoConfiguradaError";
  }
}

export interface PaymentProvider {
  readonly nombre: "mercadopago" | "stripe" | "cryptomus";
  /**
   * true si el provider soporta split nativo (el dinero de la escuela no
   * pasa por la cuenta de VB — Stripe Connect / MP marketplace_fee).
   * false en Cryptomus: ahí VB recibe todo y liquida manualmente
   * (mismo modelo v1 que `registrarTransaccionEscuela`).
   */
  readonly supportsSplit: boolean;
  createCheckout(params: {
    cuota: CuotaParaCheckout;
    escuela: EscuelaParaCheckout;
    backUrl: string;
  }): Promise<CheckoutResult>;
  /**
   * `headers` son los headers CRUDOS del request (cada provider firma
   * distinto — MP usa x-signature/x-request-id, Stripe stripe-signature,
   * Cryptomus un campo `sign` en el propio body — de ahí que no haya un
   * único parámetro "signature" genérico). Devuelve null si la firma no
   * valida; el caller responde 401 y no confía en el payload.
   */
  verifyWebhook(rawBody: string, headers: Record<string, string | string[] | undefined>): WebhookEvent | null;
  refund?(providerRef: string): Promise<void>;
  /**
   * PLAN-B Fase 4 — consulta activa del estado de un pago (poll), para el
   * job de reconciliación que reintenta pagos `pendiente`/`en_proceso`
   * cuyo webhook nunca llegó (o llegó y se perdió). Devuelve `null` si no
   * se pudo determinar el estado (provider no configurado, pago no
   * encontrado todavía, error de red) — el caller lo trata como "seguir
   * esperando", nunca como fallo.
   */
  checkStatus?(providerRef: string): Promise<WebhookEventEstado | null>;
}

export const round2 = (n: number): number => Math.round(n * 100) / 100;

/** Express puede entregar un header repetido como array — nos quedamos con el primero. */
export const firstHeader = (value: string | string[] | undefined): string | null => {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
};
