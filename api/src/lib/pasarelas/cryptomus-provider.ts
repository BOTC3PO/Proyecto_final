/**
 * PLAN-B Fase 3 — Cryptomus (pagos cripto). SIN split nativo: acá VB
 * recibe el pago completo en SU PROPIA cuenta de Cryptomus
 * (`ENV.CRYPTOMUS_MERCHANT_ID`/`CRYPTOMUS_API_KEY` — no hay
 * `cuentaConectadaId` de la escuela porque no aplica) y opera en modo v1
 * (`registrarTransaccionEscuela`): el asiento contable deja `montoNeto`
 * como saldo a liquidar, y la liquidación hacia la escuela sigue el
 * flujo manual existente (`POST /api/comisiones/admin/liquidar`).
 *
 * Firma real de Cryptomus: `sign = md5(base64(body_json) + api_key)`,
 * tanto para crear el invoice (header `sign`) como para verificar el
 * webhook (campo `sign` dentro del body).
 *
 * NOTA: esqueleto sin probar contra credenciales reales — ver
 * PLAN-B-negocio-comisiones-pasarelas.md §Fase 3.
 */
import { createHash } from "node:crypto";
import { ENV } from "../env";
import {
  PasarelaNoConfiguradaError,
  type CheckoutResult,
  type EscuelaParaCheckout,
  type CuotaParaCheckout,
  type PaymentProvider,
  type WebhookEvent,
  type WebhookEventEstado
} from "./provider";

const CRYPTOMUS_BASE = "https://api.cryptomus.com/v1";

const firmar = (bodyJson: string, apiKey: string): string =>
  createHash("md5").update(Buffer.from(bodyJson).toString("base64") + apiKey).digest("hex");

type CryptomusWebhookPayload = {
  order_id?: string;
  status?: string;
  amount?: string;
  sign?: string;
};

export class CryptomusProvider implements PaymentProvider {
  readonly nombre = "cryptomus" as const;
  // Sin split: VB cobra todo y liquida manualmente (modo v1).
  readonly supportsSplit = false;

  async createCheckout(params: {
    cuota: CuotaParaCheckout;
    escuela: EscuelaParaCheckout;
    backUrl: string;
  }): Promise<CheckoutResult> {
    if (!ENV.CRYPTOMUS_MERCHANT_ID || !ENV.CRYPTOMUS_API_KEY) {
      throw new PasarelaNoConfiguradaError("cryptomus", "faltan CRYPTOMUS_MERCHANT_ID/CRYPTOMUS_API_KEY de la plataforma");
    }

    const orderId = `cuota_${params.cuota.id}_${Date.now()}`;
    const bodyObj = {
      amount: params.cuota.montoFinal.toFixed(2),
      currency: params.cuota.moneda,
      order_id: orderId,
      url_success: params.backUrl,
      url_return: params.backUrl
    };
    const bodyJson = JSON.stringify(bodyObj);

    const response = await fetch(`${CRYPTOMUS_BASE}/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        merchant: ENV.CRYPTOMUS_MERCHANT_ID,
        sign: firmar(bodyJson, ENV.CRYPTOMUS_API_KEY)
      },
      body: bodyJson
    });
    if (!response.ok) {
      throw new Error(`Cryptomus checkout error ${response.status}: ${await response.text()}`);
    }
    const data = (await response.json()) as { result?: { url?: string } };
    if (!data.result?.url) {
      throw new Error("Cryptomus no devolvió result.url");
    }
    return { url: data.result.url, providerRef: orderId };
  }

  verifyWebhook(rawBody: string): WebhookEvent | null {
    if (!ENV.CRYPTOMUS_API_KEY) return null;
    let parsed: CryptomusWebhookPayload;
    try {
      parsed = JSON.parse(rawBody) as CryptomusWebhookPayload;
    } catch {
      return null;
    }
    const { sign, ...rest } = parsed;
    if (!sign || !parsed.order_id) return null;

    const expected = firmar(JSON.stringify(rest), ENV.CRYPTOMUS_API_KEY);
    if (sign !== expected) return null;

    const estado = parsed.status === "paid" || parsed.status === "paid_over" ? "pagada" : parsed.status === "fail" ? "fallida" : "pendiente";
    return {
      providerRef: parsed.order_id,
      estado,
      montoBruto: parsed.amount ? Number(parsed.amount) : undefined,
      raw: parsed
    };
  }

  async checkStatus(providerRef: string): Promise<WebhookEventEstado | null> {
    if (!ENV.CRYPTOMUS_MERCHANT_ID || !ENV.CRYPTOMUS_API_KEY) return null;
    const bodyObj = { order_id: providerRef };
    const bodyJson = JSON.stringify(bodyObj);
    const response = await fetch(`${CRYPTOMUS_BASE}/payment/info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        merchant: ENV.CRYPTOMUS_MERCHANT_ID,
        sign: firmar(bodyJson, ENV.CRYPTOMUS_API_KEY)
      },
      body: bodyJson
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { result?: { status?: string } };
    const status = data.result?.status;
    if (!status) return null;
    return status === "paid" || status === "paid_over" ? "pagada" : status === "fail" ? "fallida" : "pendiente";
  }
}
