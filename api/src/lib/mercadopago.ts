import { ENV } from "./env";

const MP_BASE = "https://api.mercadopago.com";

const mpHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${ENV.MP_ACCESS_TOKEN}`,
});

export type MPPreapprovalStatus =
  | "pending" | "authorized" | "paused" | "cancelled" | "expired";

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
    // X-Idempotency-Key estable: dos POST idénticos (mismo external_reference)
    // no generan dos preapprovals en MP. No se toca mpHeaders() porque lo
    // comparten get/cancel, que no deben llevar idempotency key.
    headers: { ...mpHeaders(), "X-Idempotency-Key": params.externalReference },
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

/**
 * Ventana de frescura del `ts` que MP firma dentro del manifest. Sin
 * esto una notificación válida capturada una vez sirve para siempre
 * (replay): la firma no caduca por sí sola. 5 minutos cubre de sobra la
 * latencia y los reintentos legítimos de MP.
 */
const MAX_WEBHOOK_AGE_SECONDS = 5 * 60;

// Verificar firma del webhook de MercadoPago
export function verificarWebhookMP(
  xSignature: string,
  xRequestId: string,
  dataId: string
): boolean {
  if (!ENV.MP_WEBHOOK_SECRET) {
    // Sin secreto no hay forma de distinguir a MP de cualquiera que
    // conozca la URL. Sólo se acepta en una instalación que NO tiene
    // ninguna credencial de MP cargada, es decir dev puro sin pagos.
    // Con MP configurado (aunque sea sandbox) falta el secreto ⇒ se
    // rechaza, en vez de aceptar cualquier webhook en silencio.
    // Antes esto dependía de NODE_ENV: un deploy real con la env mal
    // seteada aceptaba webhooks falsos sin avisar.
    if (ENV.MP_ACCESS_TOKEN || ENV.MP_CLIENT_ID) return false;
    if (ENV.NODE_ENV === "production") {
      throw new Error("MP_WEBHOOK_SECRET not configured");
    }
    return true; // dev sin pagos configurados
  }
  try {
    const { createHmac, timingSafeEqual } =
      require("crypto") as typeof import("crypto");
    // x-signature real de MP: "ts=1704908010,v1=abc123..."  (coma)
    const parts = xSignature.split(",");
    const ts = parts.find((p) => p.trim().startsWith("ts="))
      ?.split("=")[1] ?? "";
    const v1 = parts.find((p) => p.trim().startsWith("v1="))
      ?.slice(3) ?? "";
    // Anti-replay: el ts va DENTRO del manifest firmado, así que no se
    // puede falsear sin romper la firma — alcanza con exigir que sea
    // reciente.
    const tsSeconds = Number(ts);
    if (!Number.isFinite(tsSeconds)) return false;
    const edadSegundos = Math.abs(Date.now() / 1000 - tsSeconds);
    if (edadSegundos > MAX_WEBHOOK_AGE_SECONDS) return false;

    const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`;
    const hash = createHmac("sha256", ENV.MP_WEBHOOK_SECRET)
      .update(manifest)
      .digest("hex");
    const a = Buffer.from(hash);
    const b = Buffer.from(v1);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
