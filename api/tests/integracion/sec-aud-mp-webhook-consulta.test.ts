/**
 * Auditoría 11/2026 — webhook de cobros de Mercado Pago. La firma cubre solo el data.id del aviso; el estado y
 * el monto se tomaban del cuerpo, así que un aviso firmado para otro pago podía saldar cualquier cuota. Ahora el
 * estado y el monto se consultan a Mercado Pago.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, startServer } from "./_helpers/setup";
import { ENV } from "../../src/lib/env";

let baseUrl = "";
let close: () => Promise<void>;
let respuestaMp: { status: string; transaction_amount: number } | null = null;
const fetchOriginal = globalThis.fetch;

before(async () => {
  ENV.MP_WEBHOOK_SECRET = "secreto-de-prueba-webhook";
  ENV.MP_ACCESS_TOKEN = "token-de-prueba";
  const { cobros } = await import("../../src/routes/cobros");
  const s = await startServer([cobros]);
  baseUrl = s.baseUrl;
  close = s.close;
  // Solo se intercepta la API de Mercado Pago; el resto (el server local) pasa.
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    const u = String(url instanceof Request ? url.url : url);
    if (u.startsWith("https://api.mercadopago.com/v1/payments/search")) {
      return new Response(JSON.stringify({ results: respuestaMp ? [{ ...respuestaMp, external_reference: "cuota:cu1:1" }] : [] }), { status: 200 });
    }
    return fetchOriginal(url as never, init);
  }) as typeof fetch;
});
after(async () => {
  globalThis.fetch = fetchOriginal;
  await close();
});

beforeEach(() => {
  resetPrisma();
  respuestaMp = null;
  const n = new Date().toISOString();
  prisma.escuela.rows.push({ id: "e1", name: "E", isDeleted: false, comisionPct: 6, estadoVerificacion: "verificada", createdAt: n } as never);
  prisma.cobroEscuela.rows.push({ id: "co1", escuelaId: "e1", concepto: "C", moneda: "ARS", tipo: "cuota", createdAt: n } as never);
  prisma.pago.rows.push({ id: "p1", provider: "mercadopago", providerRef: "cuota:cu1:1", estado: "pendiente", montoBruto: 50000, createdAt: n, updatedAt: n } as never);
  prisma.cuotaAlumno.rows.push({ id: "cu1", cobroId: "co1", alumnoId: "a1", montoFinal: 50000, estado: "en_proceso", pagoId: "p1", createdAt: n, updatedAt: n } as never);
});

const firmar = (id: string, rid: string) => {
  const ts = Math.floor(Date.now() / 1000);
  return `ts=${ts},v1=${createHmac("sha256", ENV.MP_WEBHOOK_SECRET).update(`id:${id};request-id:${rid};ts:${ts};`).digest("hex")}`;
};
const avisar = () =>
  fetch(`${baseUrl}/api/pasarelas/webhook/mercadopago`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-signature": firmar("777", "r1"), "x-request-id": "r1" },
    body: JSON.stringify({ data: { id: "777" }, external_reference: "cuota:cu1:1", status: "approved", transaction_amount: 50000 }),
  });
const cuota = () => (prisma.cuotaAlumno.rows[0] as { estado: string }).estado;

test("un cuerpo que dice «approved» no salda la cuota si Mercado Pago no tiene el pago aprobado", async () => {
  respuestaMp = null;
  assert.equal((await avisar()).status, 200);
  assert.notEqual(cuota(), "pagada");
  respuestaMp = { status: "pending", transaction_amount: 50000 };
  await avisar();
  assert.notEqual(cuota(), "pagada");
});

test("el monto que vale es el que informa Mercado Pago", async () => {
  respuestaMp = { status: "approved", transaction_amount: 10 };
  await avisar();
  assert.notEqual(cuota(), "pagada");
});

test("con el pago aprobado en Mercado Pago, la cuota se salda", async () => {
  respuestaMp = { status: "approved", transaction_amount: 50000 };
  assert.equal((await avisar()).status, 200);
  assert.equal(cuota(), "pagada");
});
