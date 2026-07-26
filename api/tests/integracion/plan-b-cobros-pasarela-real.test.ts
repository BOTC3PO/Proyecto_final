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
import { cifrarCredencial } from "../../src/lib/pasarelas-crypto";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

ENV.MP_ACCESS_TOKEN = "test-mp-token";
ENV.CRYPTOMUS_MERCHANT_ID = "test-merchant-id";
ENV.CRYPTOMUS_API_KEY = "test-cryptomus-api-key";

// access_token propio del vendedor (OAuth) — MercadoPagoProvider ya no usa
// collector_id + el token de plataforma, autentica como el vendedor.
const CREDENCIALES_MP_TEST = cifrarCredencial(JSON.stringify({ accessToken: "vendor-access-token" }));

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
  prisma.escuela.rows.push({ estadoVerificacion: "verificada",
    id: ESCUELA,
    name: "Escuela Pasarela Real",
    isDeleted: false,
    comisionPct: 6,
    comisionPctIntl: 1.5,
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
    cuentaConectadaId: "555111222",
    credencialesCifradas: CREDENCIALES_MP_TEST,
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

test("checkout repetido (Pago pendiente ya existe) regenera la url en vez de devolver null", async () => {
  const nowIso = new Date().toISOString();
  prisma.escuelaPasarela.rows.push({
    id: "pasarela-retry",
    escuelaId: ESCUELA,
    provider: "mercadopago",
    cuentaConectadaId: "555111222",
    credencialesCifradas: CREDENCIALES_MP_TEST,
    activa: true,
    createdAt: nowIso,
    updatedAt: nowIso
  });

  const { cuota } = await crearYPublicarCobro();
  const tokenAlumno = tokenFor({ id: ALUMNO, role: "USER", schoolId: ESCUELA });

  const originalFetch = globalThis.fetch;
  let llamada = 0;
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    if (String(url).startsWith(baseUrl)) return originalFetch(url as string, init);
    llamada++;
    return { ok: true, json: async () => ({ init_point: `https://mp.test/checkout/intento-${llamada}` }) } as Response;
  }) as typeof fetch;
  try {
    const primero = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenAlumno });
    assert.equal(primero.status, 201);
    const pago1 = (primero.body as { pago: { id: string; providerRef: string } }).pago;

    const segundo = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenAlumno });
    assert.equal(segundo.status, 200, JSON.stringify(segundo.body));
    const body2 = segundo.body as { pago: { id: string; providerRef: string }; url: string | null };
    assert.equal(body2.pago.id, pago1.id, "reusa el mismo Pago, no crea otro");
    assert.notEqual(body2.pago.providerRef, pago1.providerRef, "actualiza el providerRef para que el webhook lo encuentre");
    assert.ok(body2.url, "la segunda llamada también debe traer una url para redirigir");
    assert.equal(prisma.pago.rows.filter((p) => (p.id as string) === pago1.id).length, 1);
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
    cuentaConectadaId: "555111222",
    credencialesCifradas: CREDENCIALES_MP_TEST,
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
  assert.ok(transaccion, "debe asentar TransaccionEscuela");
  assert.equal(transaccion?.comisionVB, 15, "cryptomus paga la tarifa internacional (comisionPctIntl)");
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

// ── Cryptomus habilitado por escuela ─────────────────────────────
// Es el único camino donde VB custodia fondos de terceros (liquida con
// comisión pero dentro de su propia cuenta, y paga a la escuela a mano). No
// se puede quitar —no hay otra opción para el exterior— así que se elige con
// qué escuelas se asume ese riesgo.

test("una escuela sin Cryptomus habilitado cae a manual en vez de usarlo", async () => {
  const nowIso = new Date().toISOString();
  prisma.escuelaPasarela.rows.push({
    id: "pas-crypto-off",
    escuelaId: ESCUELA,
    provider: "cryptomus",
    cuentaConectadaId: null,
    credencialesCifradas: null,
    activa: true,
    createdAt: nowIso,
    updatedAt: nowIso
  });
  const { cuota } = await crearYPublicarCobro();
  const res = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, {
    token: tokenFor({ id: ALUMNO, role: "USER", schoolId: ESCUELA })
  });

  assert.equal(res.status, 201, JSON.stringify(res.body));
  const pago = (res.body as { pago: { provider: string } }).pago;
  assert.equal(pago.provider, "manual", "no se usa Cryptomus sin habilitación explícita");
});

test("con Cryptomus habilitado por el admin, sí se usa", async () => {
  const nowIso = new Date().toISOString();
  const escuela = prisma.escuela.rows.find((e) => e.id === ESCUELA);
  if (escuela) escuela.cryptomusHabilitado = true;
  prisma.escuelaPasarela.rows.push({
    id: "pas-crypto-on",
    escuelaId: ESCUELA,
    provider: "cryptomus",
    cuentaConectadaId: null,
    credencialesCifradas: null,
    activa: true,
    createdAt: nowIso,
    updatedAt: nowIso
  });
  const { cuota } = await crearYPublicarCobro();

  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    if (String(url).startsWith(baseUrl)) return originalFetch(url as string, init);
    return { ok: true, json: async () => ({ result: { url: "https://cryptomus.test/pay/ok" } }) } as Response;
  }) as typeof fetch;
  try {
    const res = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, {
      token: tokenFor({ id: ALUMNO, role: "USER", schoolId: ESCUELA })
    });
    assert.equal((res.body as { pago: { provider: string } }).pago.provider, "cryptomus");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
