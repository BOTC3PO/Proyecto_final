/**
 * PLAN-B Fase 3 — wiring de `routes/cobros.ts` con un provider real
 * conectado (`EscuelaPasarela` activa), y el webhook end-to-end. Ver
 * plan-b-pasarelas-providers.test.ts para los adaptadores en aislamiento;
 * acá se prueba la integración completa a través de las rutas HTTP.
 */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { after, before, beforeEach, test } from "node:test";
import { ENV } from "../../src/lib/env";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

ENV.MP_ACCESS_TOKEN = "test-mp-token";
ENV.CRYPTOMUS_MERCHANT_ID = "test-merchant-id";
ENV.CRYPTOMUS_API_KEY = "test-cryptomus-api-key";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA = "esc-pasarela-real";
const DIRECTIVO = "directivo-pasarela-real";
const ALUMNO = "alumno-pasarela-real";
const AULA_ID = "aula-pasarela-real";

before(async () => {
  const { cobros } = await import("../../src/routes/cobros");
  const server = await startServer([cobros]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({
    id: ESCUELA,
    name: "Escuela Pasarela Real",
    isDeleted: false,
    modoGestion: "autogestionado",
    comisionPct: 10,
    createdAt: nowIso
  });
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  seedUser({ id: ALUMNO, role: "USER", schoolId: ESCUELA });
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA,
    name: "Aula",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdAt: nowIso
  });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: ALUMNO, rolEnClase: "STUDENT" });
});

const crearYPublicarCobro = async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token,
    body: { concepto: "Cuota con pasarela", montoUnitario: 1000 }
  });
  const cobro = createRes.body as { id: string };
  await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, { token, body: { aulaId: AULA_ID } });
  const cuota = prisma.cuotaAlumno.rows.find((c) => c.cobroId === cobro.id)!;
  return { cobro, cuota };
};

test("checkout usa el provider real cuando la escuela tiene una EscuelaPasarela activa", async () => {
  const nowIso = new Date().toISOString();
  prisma.escuelaPasarela.rows.push({
    id: "pasarela-1",
    escuelaId: ESCUELA,
    provider: "mercadopago",
    cuentaConectadaId: "cuenta-mp-escuela",
    activa: true,
    createdAt: nowIso,
    updatedAt: nowIso
  });

  const { cuota } = await crearYPublicarCobro();
  const tokenAlumno = tokenFor({ id: ALUMNO, role: "USER", schoolId: ESCUELA });

  const originalFetch = globalThis.fetch;
  // Sólo interceptamos la llamada saliente del provider a la API de MP —
  // el propio cliente de este test (jsonRequest) también usa
  // globalThis.fetch para pegarle al server local, así que hay que
  // dejarlo pasar sin tocar.
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    if (String(url).startsWith(baseUrl)) return originalFetch(url as string, init);
    return { ok: true, json: async () => ({ init_point: "https://mp.test/checkout/real" }) } as Response;
  }) as typeof fetch;
  try {
    const res = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenAlumno });
    assert.equal(res.status, 201, JSON.stringify(res.body));
    const body = res.body as { pago: { provider: string }; url: string | null };
    assert.equal(body.pago.provider, "mercadopago");
    assert.equal(body.url, "https://mp.test/checkout/real");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("checkout cae a manual si el provider conectado falla (no bloquea el cobro)", async () => {
  const nowIso = new Date().toISOString();
  prisma.escuelaPasarela.rows.push({
    id: "pasarela-2",
    escuelaId: ESCUELA,
    provider: "mercadopago",
    cuentaConectadaId: "cuenta-mp-escuela",
    activa: true,
    createdAt: nowIso,
    updatedAt: nowIso
  });

  const { cuota } = await crearYPublicarCobro();
  const tokenAlumno = tokenFor({ id: ALUMNO, role: "USER", schoolId: ESCUELA });

  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    if (String(url).startsWith(baseUrl)) return originalFetch(url as string, init);
    return { ok: false, status: 500, text: async () => "boom" } as Response;
  }) as typeof fetch;
  try {
    const res = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenAlumno });
    assert.equal(res.status, 201);
    const body = res.body as { pago: { provider: string }; url: string | null };
    assert.equal(body.pago.provider, "manual");
    assert.equal(body.url, null);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("webhook de cryptomus confirma el pago end-to-end y asienta la comisión", async () => {
  const { cuota } = await crearYPublicarCobro();
  const nowIso = new Date().toISOString();
  const pago = await prisma.pago.create({
    data: {
      id: "pago-webhook-1",
      provider: "cryptomus",
      providerRef: "order-webhook-1",
      estado: "pendiente",
      montoBruto: 1000,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });
  await prisma.cuotaAlumno.update({ where: { id: cuota.id }, data: { pagoId: pago.id, estado: "en_proceso" } });

  const payloadSinSign = { order_id: "order-webhook-1", status: "paid", amount: "1000.00" };
  const sign = createHash("md5")
    .update(Buffer.from(JSON.stringify(payloadSinSign)).toString("base64") + ENV.CRYPTOMUS_API_KEY)
    .digest("hex");
  const body = JSON.stringify({ ...payloadSinSign, sign });

  const res = await fetch(`${baseUrl}/api/pasarelas/webhook/cryptomus`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body
  });
  assert.equal(res.status, 200, JSON.stringify(await res.text()));

  const pagoActualizado = prisma.pago.rows.find((p) => p.id === pago.id);
  assert.equal(pagoActualizado?.estado, "pagada");
  const cuotaActualizada = prisma.cuotaAlumno.rows.find((c) => c.id === cuota.id);
  assert.equal(cuotaActualizada?.estado, "pagada");
  const transaccion = prisma.transaccionEscuela.rows.find((t) => t.escuelaId === ESCUELA);
  assert.ok(transaccion, "debe asentar TransaccionEscuela (escuela autogestionada)");
  assert.equal(transaccion?.comisionVB, 100);
});

test("webhook con firma inválida responde 401 y no toca nada", async () => {
  const { cuota } = await crearYPublicarCobro();
  const nowIso = new Date().toISOString();
  const pago = await prisma.pago.create({
    data: {
      id: "pago-webhook-2",
      provider: "cryptomus",
      providerRef: "order-webhook-2",
      estado: "pendiente",
      montoBruto: 1000,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  });
  await prisma.cuotaAlumno.update({ where: { id: cuota.id }, data: { pagoId: pago.id, estado: "en_proceso" } });

  const body = JSON.stringify({ order_id: "order-webhook-2", status: "paid", amount: "1000.00", sign: "firma-trucha" });
  const res = await fetch(`${baseUrl}/api/pasarelas/webhook/cryptomus`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body
  });
  assert.equal(res.status, 401);
  const pagoSinCambios = prisma.pago.rows.find((p) => p.id === pago.id);
  assert.equal(pagoSinCambios?.estado, "pendiente");
});
