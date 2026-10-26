/**
 * PLAN-B Fase 3 — los 2 adaptadores de pasarela (esqueleto, sin
 * credenciales reales — ver PLAN-B-negocio-comisiones-pasarelas.md
 * §Fase 3). Estos tests verifican la LÓGICA (armado de request, cálculo
 * de comisión, verificación de firma) mockeando `fetch`; ninguno pega
 * contra una API real.
 *
 * Los imports de ES modules se hoistean por encima de cualquier
 * statement (aunque se escriban antes en el código fuente), así que
 * `process.env.X = ...` puesto antes del `import` NO llega a tiempo
 * para el `ENV` que se evalúa al cargar `lib/env.ts` (mismo patrón que
 * usa el resto de la suite, pero ahí no importa porque nada lee esos
 * valores al importar). Acá mutamos `ENV` directamente — es un objeto
 * plano, no congelado — después del import, que es lo único que
 * garantiza el orden real de ejecución.
 */
import assert from "node:assert/strict";
import { createHash, createHmac } from "node:crypto";
import { test } from "node:test";
import { ENV } from "../../src/lib/env";
import { MercadoPagoProvider } from "../../src/lib/pasarelas/mercadopago-provider";
import { CryptomusProvider } from "../../src/lib/pasarelas/cryptomus-provider";
import { PasarelaNoConfiguradaError } from "../../src/lib/pasarelas/provider";

ENV.MP_ACCESS_TOKEN = "test-mp-token";
ENV.MP_WEBHOOK_SECRET = "test-mp-webhook-secret";
ENV.CRYPTOMUS_MERCHANT_ID = "test-merchant-id";
ENV.CRYPTOMUS_API_KEY = "test-cryptomus-api-key";

const ESCUELA = {
  id: "esc-pasarela-1",
  nombre: "Escuela Pasarela",
  comisionPct: 10,
  cuentaConectadaId: "123456789",
  // access_token propio del vendedor (OAuth) — sin esto MercadoPagoProvider
  // rechaza el checkout (confirmado contra la API real: "collector_id
  // invalid" al usar collector_id + token de la plataforma en vez de esto).
  accessToken: "vendor-access-token"
};
const CUOTA = { id: "cuota-1", montoFinal: 1000, moneda: "ARS", concepto: "Cuota julio" };

// ─── Mercado Pago ──────────────────────────────────────────────

test("MercadoPagoProvider.createCheckout rechaza si la escuela no autorizó por OAuth", async () => {
  const provider = new MercadoPagoProvider();
  await assert.rejects(
    () => provider.createCheckout({ cuota: CUOTA, escuela: { ...ESCUELA, accessToken: null }, backUrl: "https://x" }),
    PasarelaNoConfiguradaError
  );
});

test("MercadoPagoProvider.createCheckout arma marketplace_fee y devuelve url/providerRef", async () => {
  const provider = new MercadoPagoProvider();
  let capturedBody: Record<string, unknown> | null = null;
  let capturedAuth: string | undefined;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (_url: unknown, init: RequestInit) => {
    capturedBody = JSON.parse(init.body as string);
    capturedAuth = (init.headers as Record<string, string>).Authorization;
    return { ok: true, json: async () => ({ init_point: "https://mp.test/checkout/abc" }) } as Response;
  }) as typeof fetch;
  try {
    const result = await provider.createCheckout({ cuota: CUOTA, escuela: ESCUELA, backUrl: "https://x" });
    assert.equal(result.url, "https://mp.test/checkout/abc");
    assert.ok(result.providerRef.startsWith("cuota:cuota-1:"));
    assert.equal(capturedBody?.marketplace_fee, 100, "10% de 1000");
    assert.equal(capturedBody?.collector_id, undefined, "ya no se manda collector_id, el access_token del vendedor lo determina");
    assert.equal(capturedAuth, `Bearer ${ESCUELA.accessToken}`, "autenticado como el vendedor, no como la plataforma");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("MercadoPagoProvider.verifyWebhook acepta una firma válida y rechaza una inválida", () => {
  const provider = new MercadoPagoProvider();
  const dataId = "12345";
  const xRequestId = "req-1";
  const ts = Math.floor(Date.now() / 1000).toString();
  const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`;
  const v1 = createHmac("sha256", ENV.MP_WEBHOOK_SECRET).update(manifest).digest("hex");
  const xSignature = `ts=${ts},v1=${v1}`;
  const body = JSON.stringify({
    external_reference: "cuota:cuota-1:123",
    status: "approved",
    transaction_amount: 1000,
    data: { id: dataId }
  });

  const evento = provider.verifyWebhook(body, { "x-signature": xSignature, "x-request-id": xRequestId });
  assert.ok(evento);
  assert.equal(evento?.estado, "pagada");
  assert.equal(evento?.providerRef, "cuota:cuota-1:123");

  const eventoInvalido = provider.verifyWebhook(body, { "x-signature": "ts=1,v1=deadbeef", "x-request-id": xRequestId });
  assert.equal(eventoInvalido, null);
});

// ─── Cryptomus ─────────────────────────────────────────────────

test("CryptomusProvider.supportsSplit es false (VB cobra todo y liquida manual)", () => {
  const provider = new CryptomusProvider();
  assert.equal(provider.supportsSplit, false);
});

test("CryptomusProvider.createCheckout firma el body y devuelve url/providerRef", async () => {
  const provider = new CryptomusProvider();
  const originalFetch = globalThis.fetch;
  let capturedHeaders: Record<string, string> = {};
  globalThis.fetch = (async (_url: unknown, init: RequestInit) => {
    capturedHeaders = init.headers as Record<string, string>;
    return { ok: true, json: async () => ({ result: { url: "https://cryptomus.test/pay/xyz" } }) } as Response;
  }) as typeof fetch;
  try {
    const result = await provider.createCheckout({ cuota: CUOTA, escuela: ESCUELA, backUrl: "https://x" });
    assert.equal(result.url, "https://cryptomus.test/pay/xyz");
    assert.equal(capturedHeaders.merchant, "test-merchant-id");
    assert.ok(capturedHeaders.sign, "debe mandar el header sign");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("CryptomusProvider.verifyWebhook valida el sign md5(base64(body)+apiKey)", () => {
  const provider = new CryptomusProvider();
  const payloadSinSign = { order_id: "cuota_1_123", status: "paid", amount: "1000.00" };
  const sign = createHash("md5")
    .update(Buffer.from(JSON.stringify(payloadSinSign)).toString("base64") + ENV.CRYPTOMUS_API_KEY)
    .digest("hex");
  const body = JSON.stringify({ ...payloadSinSign, sign });

  const evento = provider.verifyWebhook(body, {});
  assert.ok(evento);
  assert.equal(evento?.estado, "pagada");
  assert.equal(evento?.providerRef, "cuota_1_123");

  const bodyManipulado = JSON.stringify({ ...payloadSinSign, amount: "999999.00", sign });
  const invalido = provider.verifyWebhook(bodyManipulado, {});
  assert.equal(invalido, null);
});

// ─── checkStatus (PLAN-B Fase 4 — reconciliación) ──────────────

test("MercadoPagoProvider.checkStatus mapea approved/rejected/otro a pagada/fallida/pendiente", async () => {
  const provider = new MercadoPagoProvider();
  const originalFetch = globalThis.fetch;
  const responder = (status: string) =>
    (async () => ({ ok: true, json: async () => ({ results: [{ status }] }) }) as Response) as typeof fetch;
  try {
    globalThis.fetch = responder("approved");
    assert.equal(await provider.checkStatus("ref-1"), "pagada");
    globalThis.fetch = responder("rejected");
    assert.equal(await provider.checkStatus("ref-1"), "fallida");
    globalThis.fetch = responder("in_process");
    assert.equal(await provider.checkStatus("ref-1"), "pendiente");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("CryptomusProvider.checkStatus mapea paid/fail/otro a pagada/fallida/pendiente", async () => {
  const provider = new CryptomusProvider();
  const originalFetch = globalThis.fetch;
  const responder = (status: string) =>
    (async () => ({ ok: true, json: async () => ({ result: { status } }) }) as Response) as typeof fetch;
  try {
    globalThis.fetch = responder("paid");
    assert.equal(await provider.checkStatus("ref-1"), "pagada");
    globalThis.fetch = responder("fail");
    assert.equal(await provider.checkStatus("ref-1"), "fallida");
    globalThis.fetch = responder("check");
    assert.equal(await provider.checkStatus("ref-1"), "pendiente");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("checkStatus devuelve null si el provider no está configurado", async () => {
  const mp = new MercadoPagoProvider();
  const prevToken = ENV.MP_ACCESS_TOKEN;
  ENV.MP_ACCESS_TOKEN = "";
  try {
    assert.equal(await mp.checkStatus("ref-1"), null);
  } finally {
    ENV.MP_ACCESS_TOKEN = prevToken;
  }
});
