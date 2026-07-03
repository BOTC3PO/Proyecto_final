/**
 * PLAN-B Fase 3 — Mercado Pago con split nativo (roadmap v2 de
 * docs/pagos/comision-roadmap-v2.md, ahora implementado como esqueleto).
 *
 * Distinto del `crearPreapproval` de `lib/mercadopago.ts` (eso es el SaaS
 * retirado — suscripción recurrente). Acá es un pago ÚNICO (Checkout Pro
 * "preference") con `marketplace_fee`: MP deposita el neto en la cuenta
 * de la escuela (`cuentaConectadaId`, obtenida por OAuth de vendedor) y
 * la comisión en la cuenta de VB (dueña de `ENV.MP_ACCESS_TOKEN`).
 *
 * NOTA: la forma exacta de `marketplace_fee`/`collector_id` en la API de
 * MP puede haber cambiado — verificar contra la documentación vigente de
 * Mercado Pago antes de un go-live real; esto es un esqueleto fiel a la
 * forma de la API pero sin probar contra credenciales reales (ver
 * PLAN-B-negocio-comisiones-pasarelas.md §Fase 3).
 */
import { ENV } from "../env";
import { verificarWebhookMP } from "../mercadopago";
import {
  PasarelaNoConfiguradaError,
  firstHeader,
  round2,
  type CheckoutResult,
  type EscuelaParaCheckout,
  type CuotaParaCheckout,
  type PaymentProvider,
  type WebhookEvent,
  type WebhookEventEstado
} from "./provider";

const MP_BASE = "https://api.mercadopago.com";

type MPWebhookPayload = {
  external_reference?: string;
  status?: string;
  transaction_amount?: number;
};

export class MercadoPagoProvider implements PaymentProvider {
  readonly nombre = "mercadopago" as const;
  readonly supportsSplit = true;

  async createCheckout(params: {
    cuota: CuotaParaCheckout;
    escuela: EscuelaParaCheckout;
    backUrl: string;
  }): Promise<CheckoutResult> {
    if (!ENV.MP_ACCESS_TOKEN) {
      throw new PasarelaNoConfiguradaError("mercadopago", "falta MP_ACCESS_TOKEN de la plataforma");
    }
    if (!params.escuela.cuentaConectadaId) {
      throw new PasarelaNoConfiguradaError(
        "mercadopago",
        `la escuela ${params.escuela.nombre} todavía no conectó su cuenta de Mercado Pago`
      );
    }

    const marketplaceFee = round2(params.cuota.montoFinal * (params.escuela.comisionPct / 100));
    const externalReference = `cuota:${params.cuota.id}:${Date.now()}`;

    const response = await fetch(`${MP_BASE}/checkout/preferences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.MP_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        items: [
          {
            title: params.cuota.concepto,
            quantity: 1,
            currency_id: params.cuota.moneda,
            unit_price: params.cuota.montoFinal
          }
        ],
        marketplace_fee: marketplaceFee,
        collector_id: params.escuela.cuentaConectadaId,
        external_reference: externalReference,
        back_urls: {
          success: params.backUrl,
          failure: params.backUrl,
          pending: params.backUrl
        }
      })
    });

    if (!response.ok) {
      throw new Error(`MercadoPago checkout error ${response.status}: ${await response.text()}`);
    }
    const data = (await response.json()) as { init_point?: string };
    if (!data.init_point) {
      throw new Error("MercadoPago no devolvió init_point");
    }
    return { url: data.init_point, providerRef: externalReference };
  }

  verifyWebhook(rawBody: string, headers: Record<string, string | string[] | undefined>): WebhookEvent | null {
    let parsed: MPWebhookPayload & { data?: { id?: string } };
    try {
      parsed = JSON.parse(rawBody) as MPWebhookPayload & { data?: { id?: string } };
    } catch {
      return null;
    }
    const xSignature = firstHeader(headers["x-signature"]);
    const xRequestId = firstHeader(headers["x-request-id"]);
    const dataId = parsed.data?.id ?? "";
    if (!xSignature || !xRequestId || !dataId) return null;
    // Reusa el verificador real del webhook de MP (mismo esquema
    // ts/v1 que usa el SaaS retirado — no es un HMAC genérico).
    if (!verificarWebhookMP(xSignature, xRequestId, dataId)) return null;
    if (!parsed.external_reference) return null;

    const estado = parsed.status === "approved" ? "pagada" : parsed.status === "rejected" ? "fallida" : "pendiente";
    return {
      providerRef: parsed.external_reference,
      estado,
      montoBruto: parsed.transaction_amount,
      raw: parsed
    };
  }

  async checkStatus(providerRef: string): Promise<WebhookEventEstado | null> {
    if (!ENV.MP_ACCESS_TOKEN) return null;
    const response = await fetch(
      `${MP_BASE}/v1/payments/search?external_reference=${encodeURIComponent(providerRef)}&sort=date_created&criteria=desc`,
      { headers: { Authorization: `Bearer ${ENV.MP_ACCESS_TOKEN}` } }
    );
    if (!response.ok) return null;
    const data = (await response.json()) as { results?: Array<{ status?: string }> };
    const status = data.results?.[0]?.status;
    if (!status) return null;
    return status === "approved" ? "pagada" : status === "rejected" ? "fallida" : "pendiente";
  }
}
