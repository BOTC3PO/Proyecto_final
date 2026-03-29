import { ENV } from "./env";

const MP_BASE = "https://api.mercadopago.com";

const mpHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${ENV.MP_ACCESS_TOKEN}`,
});

export type MPPreapprovalStatus =
  | "pending" | "authorized" | "paused" | "cancelled";

export type MPPreapprovalPlan = {
  id: string;
  status: MPPreapprovalStatus;
  payer_email: string;
  external_reference: string;
  init_point: string;
  next_payment_date?: string;
  last_modified?: string;
};

export type MPPaymentNotification = {
  id: number;
  type: string;
  action: string;
  data: { id: string };
  date_created: string;
};

// Crear una suscripción recurrente en MercadoPago
export async function crearPreapproval(params: {
  payerEmail: string;
  externalReference: string;
  titulo: string;
  montoMensual: number;
  backUrl: string;
}): Promise<MPPreapprovalPlan> {
  const body = {
    reason: params.titulo,
    external_reference: params.externalReference,
    payer_email: params.payerEmail,
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      transaction_amount: params.montoMensual,
      currency_id: "ARS",
    },
    back_url: params.backUrl,
    status: "pending",
  };

  const response = await fetch(`${MP_BASE}/preapproval`, {
    method: "POST",
    headers: mpHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`MercadoPago error ${response.status}: ${error}`);
  }

  return response.json() as Promise<MPPreapprovalPlan>;
}

// Cancelar una suscripción en MercadoPago
export async function cancelarPreapproval(
  preapprovalId: string
): Promise<void> {
  const response = await fetch(
    `${MP_BASE}/preapproval/${preapprovalId}`,
    {
      method: "PUT",
      headers: mpHeaders(),
      body: JSON.stringify({ status: "cancelled" }),
    }
  );
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`MercadoPago cancel error ${response.status}: ${error}`);
  }
}

// Obtener info de una suscripción en MercadoPago
export async function getPreapproval(
  preapprovalId: string
): Promise<MPPreapprovalPlan> {
  const response = await fetch(
    `${MP_BASE}/preapproval/${preapprovalId}`,
    { headers: mpHeaders() }
  );
  if (!response.ok) {
    throw new Error(`MercadoPago get error ${response.status}`);
  }
  return response.json() as Promise<MPPreapprovalPlan>;
}

// Verificar firma del webhook de MercadoPago
export function verificarWebhookMP(
  xSignature: string,
  xRequestId: string,
  dataId: string
): boolean {
  if (!ENV.MP_WEBHOOK_SECRET) return true; // sin secret = dev mode
  try {
    const { createHmac } = require("crypto") as typeof import("crypto");
    const manifest = `id:${dataId};request-id:${xRequestId};ts:${xSignature.split(";")[0]?.split("=")[1] ?? ""};`;
    const hash = createHmac("sha256", ENV.MP_WEBHOOK_SECRET)
      .update(manifest)
      .digest("hex");
    const v1 = xSignature.split(",").find((p) => p.startsWith("v1="))?.slice(3) ?? "";
    return hash === v1;
  } catch {
    return false;
  }
}
