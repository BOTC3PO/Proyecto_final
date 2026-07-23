/**
 * PLAN-B Fase 3 — Mercado Pago con split nativo (roadmap v2 de
 * docs/pagos/comision-roadmap-v2.md, implementado 2026-07-22).
 *
 * Distinto del `crearPreapproval` de `lib/mercadopago.ts` (eso es el SaaS
 * retirado — suscripción recurrente). Acá es un pago ÚNICO (Checkout Pro
 * "preference") con `marketplace_fee`. La preferencia se crea AUTENTICADA
 * COMO EL VENDEDOR (`escuela.accessToken`, propio de la escuela, obtenido
 * por OAuth — ver `lib/mercadopago-oauth.ts`), no con el token de la
 * plataforma + `collector_id`: confirmado contra la API real de MP que ese
 * enfoque (documentado como "roadmap" originalmente) da
 * `"collector_id invalid"` — la integración real de marketplace exige el
 * access_token propio del vendedor (doc oficial: "Cómo integrar el
 * checkout en marketplace"). MP deposita el neto en la cuenta de la
 * escuela y la comisión (`marketplace_fee`) en la cuenta de VB dueña de
 * la aplicación — automático, sin acción del vendedor en cada cobro.
 *
 * El intercambio de OAuth (`intercambiarCode`) todavía no se probó
 * contra un `code` real: la escuela necesita autorizar por OAuth, lo que
 * a su vez requiere `MP_CLIENT_SECRET` — sólo disponible con credenciales
 * de PRODUCCIÓN activadas del lado de VB (confirmado en la doc oficial de
 * credenciales). Sin eso, este código compila y está listo, pero el path
 * real de punta a punta queda pendiente de un entorno con producción.
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
    // La integración real de marketplace de MP exige crear la preferencia
    // AUTENTICADO COMO EL VENDEDOR (su propio access_token de OAuth) — no
    // alcanza con mandar collector_id + el token de la plataforma.
    // Confirmado contra la API real: sin esto, MP devuelve
    // "collector_id invalid" (o acepta la preferencia pero el pago falla
    // igual, si collector_id coincide con la cuenta dueña del token).
    if (!params.escuela.accessToken) {
      throw new PasarelaNoConfiguradaError(
        "mercadopago",
        `la escuela ${params.escuela.nombre} todavía no autorizó a VB por OAuth`
      );
    }

    const marketplaceFee = round2(params.cuota.montoFinal * (params.escuela.comisionPct / 100));
    const externalReference = `cuota:${params.cuota.id}:${Date.now()}`;

    const response = await fetch(`${MP_BASE}/checkout/preferences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.escuela.accessToken}`
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

  async checkStatus(providerRef: string, opts?: { accessToken?: string | null }): Promise<WebhookEventEstado | null> {
    // Pagos de marketplace (split) viven en la cuenta del vendedor — hay
    // que buscarlos con SU access_token, no el de la plataforma. Cae al
    // token de plataforma para el flujo legacy sin split (suscripciones).
    const token = opts?.accessToken ?? ENV.MP_ACCESS_TOKEN;
    if (!token) return null;
    const response = await fetch(
      `${MP_BASE}/v1/payments/search?external_reference=${encodeURIComponent(providerRef)}&sort=date_created&criteria=desc`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!response.ok) return null;
    const data = (await response.json()) as { results?: Array<{ status?: string }> };
    const status = data.results?.[0]?.status;
    if (!status) return null;
    return status === "approved" ? "pagada" : status === "rejected" ? "fallida" : "pendiente";
  }
}
