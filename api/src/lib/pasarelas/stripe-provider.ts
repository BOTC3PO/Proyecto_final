/**
 * PLAN-B Fase 3 — Stripe Connect (destination charges). Split nativo:
 * `application_fee_amount` + `transfer_data.destination` hacen que Stripe
 * reparta el pago solo — el neto va directo a la cuenta Express de la
 * escuela (`cuentaConectadaId`, obtenida por el onboarding link de
 * Connect) y la comisión queda en la cuenta de plataforma de VB.
 *
 * Implementado con `fetch` directo a la API REST de Stripe (sin el SDK
 * `stripe` — no está instalado y agregarlo sin poder probar contra
 * credenciales reales no suma; la API REST es estable y bien documentada).
 * La verificación de firma replica el esquema real de Stripe
 * (`stripe-signature: t=...,v1=...` sobre `${timestamp}.${rawBody}`).
 *
 * NOTA: esqueleto sin probar contra credenciales reales — ver
 * PLAN-B-negocio-comisiones-pasarelas.md §Fase 3.
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import { ENV } from "../env";
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

const STRIPE_BASE = "https://api.stripe.com/v1";
// Tolerancia estándar de Stripe para el timestamp del webhook.
const TOLERANCIA_SEGUNDOS = 5 * 60;

const toFormBody = (obj: Record<string, string | number>): string =>
  Object.entries(obj)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join("&");

type StripeWebhookEvent = {
  type: string;
  data?: { object?: { metadata?: { providerRef?: string }; amount_total?: number; amount?: number } };
};

export class StripeProvider implements PaymentProvider {
  readonly nombre = "stripe" as const;
  readonly supportsSplit = true;

  async createCheckout(params: {
    cuota: CuotaParaCheckout;
    escuela: EscuelaParaCheckout;
    backUrl: string;
  }): Promise<CheckoutResult> {
    if (!ENV.STRIPE_SECRET_KEY) {
      throw new PasarelaNoConfiguradaError("stripe", "falta STRIPE_SECRET_KEY de la plataforma");
    }
    if (!params.escuela.cuentaConectadaId) {
      throw new PasarelaNoConfiguradaError(
        "stripe",
        `la escuela ${params.escuela.nombre} todavía no conectó su cuenta de Stripe (Connect onboarding)`
      );
    }

    const providerRef = `cuota_${params.cuota.id}_${Date.now()}`;
    // Stripe trabaja en centavos (unidad mínima de la moneda).
    const amountCents = Math.round(params.cuota.montoFinal * 100);
    const applicationFeeCents = Math.round(round2(params.cuota.montoFinal * (params.escuela.comisionPct / 100)) * 100);

    const body = toFormBody({
      mode: "payment",
      "line_items[0][price_data][currency]": params.cuota.moneda.toLowerCase(),
      "line_items[0][price_data][product_data][name]": params.cuota.concepto,
      "line_items[0][price_data][unit_amount]": amountCents,
      "line_items[0][quantity]": 1,
      "payment_intent_data[application_fee_amount]": applicationFeeCents,
      "payment_intent_data[transfer_data][destination]": params.escuela.cuentaConectadaId,
      "metadata[providerRef]": providerRef,
      success_url: params.backUrl,
      cancel_url: params.backUrl
    });

    const response = await fetch(`${STRIPE_BASE}/checkout/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${ENV.STRIPE_SECRET_KEY}`
      },
      body
    });
    if (!response.ok) {
      throw new Error(`Stripe checkout error ${response.status}: ${await response.text()}`);
    }
    const data = (await response.json()) as { url?: string };
    if (!data.url) {
      throw new Error("Stripe no devolvió url de checkout");
    }
    return { url: data.url, providerRef };
  }

  verifyWebhook(rawBody: string, headers: Record<string, string | string[] | undefined>): WebhookEvent | null {
    if (!ENV.STRIPE_WEBHOOK_SECRET) return null;
    const signatureHeader = firstHeader(headers["stripe-signature"]);
    if (!signatureHeader) return null;

    const parts = Object.fromEntries(
      signatureHeader.split(",").map((p) => {
        const [k, v] = p.split("=");
        return [k, v] as const;
      })
    );
    const timestamp = parts.t;
    const v1 = parts.v1;
    if (!timestamp || !v1) return null;

    const ageSeconds = Math.abs(Date.now() / 1000 - Number(timestamp));
    if (!Number.isFinite(ageSeconds) || ageSeconds > TOLERANCIA_SEGUNDOS) return null;

    const expected = createHmac("sha256", ENV.STRIPE_WEBHOOK_SECRET)
      .update(`${timestamp}.${rawBody}`)
      .digest("hex");
    const a = Buffer.from(expected);
    const b = Buffer.from(v1);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

    let event: StripeWebhookEvent;
    try {
      event = JSON.parse(rawBody) as StripeWebhookEvent;
    } catch {
      return null;
    }
    const providerRef = event.data?.object?.metadata?.providerRef;
    if (!providerRef) return null;

    const estado =
      event.type === "checkout.session.completed" || event.type === "payment_intent.succeeded"
        ? "pagada"
        : event.type === "payment_intent.payment_failed"
          ? "fallida"
          : "pendiente";
    const montoCents = event.data?.object?.amount_total ?? event.data?.object?.amount;

    return {
      providerRef,
      estado,
      montoBruto: typeof montoCents === "number" ? montoCents / 100 : undefined,
      raw: event
    };
  }

  async checkStatus(providerRef: string): Promise<WebhookEventEstado | null> {
    if (!ENV.STRIPE_SECRET_KEY) return null;
    // Search API (payment_intents) — único objeto de Stripe donde podemos
    // filtrar por nuestro `metadata.providerRef` sin guardar el session id.
    const query = encodeURIComponent(`metadata['providerRef']:'${providerRef}'`);
    const response = await fetch(`${STRIPE_BASE}/payment_intents/search?query=${query}`, {
      headers: { Authorization: `Bearer ${ENV.STRIPE_SECRET_KEY}` }
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { data?: Array<{ status?: string }> };
    const status = data.data?.[0]?.status;
    if (!status) return null;
    return status === "succeeded" ? "pagada" : status === "canceled" ? "fallida" : "pendiente";
  }
}
