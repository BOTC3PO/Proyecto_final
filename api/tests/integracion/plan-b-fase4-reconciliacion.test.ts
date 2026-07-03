/**
 * PLAN-B Fase 4 — job de reconciliación. Verifica que `checkStatus` de
 * cada adapter (mockeando `fetch`) confirme o marque fallido un `Pago`
 * viejo en `pendiente`/`en_proceso`, y que respete la ventana de edad
 * (`maxAgeMinutes`) y el modo "centralizado" (sin comisión) vs
 * "autogestionado" (con `TransaccionEscuela`).
 */
import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { ENV } from "../../src/lib/env";
import { prisma, resetPrisma } from "./_helpers/setup";
import { reconciliarPagosPendientes } from "../../src/lib/pasarelas/reconciliacion";

ENV.MP_ACCESS_TOKEN = "test-mp-token";

const ESCUELA_AUTOGESTIONADA = "esc-reconciliacion-auto";
const ESCUELA_CENTRALIZADA = "esc-reconciliacion-central";
const VIEJO = new Date(Date.now() - 60 * 60 * 1000).toISOString(); // hace 1h
const RECIENTE = new Date().toISOString();

beforeEach(() => {
  resetPrisma();
  prisma.escuela.rows.push({
    id: ESCUELA_AUTOGESTIONADA,
    name: "Escuela Autogestionada",
    isDeleted: false,
    modoGestion: "autogestionado",
    comisionPct: 10,
    createdAt: VIEJO
  });
  prisma.escuela.rows.push({
    id: ESCUELA_CENTRALIZADA,
    name: "Escuela Centralizada",
    isDeleted: false,
    modoGestion: "centralizado",
    createdAt: VIEJO
  });
});

const seedCobroCuotaPago = (opts: {
  escuelaId: string;
  provider: string;
  providerRef: string;
  estadoPago: string;
  createdAt: string;
}) => {
  const cobroId = `cobro-${opts.providerRef}`;
  const cuotaId = `cuota-${opts.providerRef}`;
  const pagoId = `pago-${opts.providerRef}`;
  prisma.cobroEscuela.rows.push({
    id: cobroId,
    escuelaId: opts.escuelaId,
    concepto: "Cuota",
    montoUnitario: 1000,
    moneda: "ARS",
    estado: "publicado",
    createdBy: "staff",
    createdAt: opts.createdAt,
    updatedAt: opts.createdAt
  });
  prisma.pago.rows.push({
    id: pagoId,
    provider: opts.provider,
    providerRef: opts.providerRef,
    estado: opts.estadoPago,
    montoBruto: 1000,
    createdAt: opts.createdAt,
    updatedAt: opts.createdAt
  });
  prisma.cuotaAlumno.rows.push({
    id: cuotaId,
    cobroId,
    alumnoId: "alumno-1",
    estado: "en_proceso",
    montoFinal: 1000,
    pagoId,
    createdAt: opts.createdAt,
    updatedAt: opts.createdAt
  });
  return { cobroId, cuotaId, pagoId };
};

test("confirma un Pago viejo cuando el provider dice 'approved' y asienta comisión (autogestionada)", async () => {
  const { pagoId, cuotaId } = seedCobroCuotaPago({
    escuelaId: ESCUELA_AUTOGESTIONADA,
    provider: "mercadopago",
    providerRef: "cuota:vieja:1",
    estadoPago: "en_proceso",
    createdAt: VIEJO
  });

  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () =>
    ({ ok: true, json: async () => ({ results: [{ status: "approved" }] }) }) as Response) as typeof fetch;
  try {
    const resultado = await reconciliarPagosPendientes(30);
    assert.equal(resultado.confirmados, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }

  const pago = prisma.pago.rows.find((p) => p.id === pagoId)!;
  const cuota = prisma.cuotaAlumno.rows.find((c) => c.id === cuotaId)!;
  assert.equal(pago.estado, "pagada");
  assert.equal(cuota.estado, "pagada");
  assert.ok((pago.comisionVB as number) > 0);
  const tx = prisma.transaccionEscuela.rows.find((t) => t.escuelaId === ESCUELA_AUTOGESTIONADA);
  assert.ok(tx, "debe asentar TransaccionEscuela");
});

test("centralizada: confirma el Pago pero no asienta TransaccionEscuela", async () => {
  const { pagoId } = seedCobroCuotaPago({
    escuelaId: ESCUELA_CENTRALIZADA,
    provider: "mercadopago",
    providerRef: "cuota:central:1",
    estadoPago: "pendiente",
    createdAt: VIEJO
  });

  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () =>
    ({ ok: true, json: async () => ({ results: [{ status: "approved" }] }) }) as Response) as typeof fetch;
  try {
    const resultado = await reconciliarPagosPendientes(30);
    assert.equal(resultado.confirmados, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }

  const pago = prisma.pago.rows.find((p) => p.id === pagoId)!;
  assert.equal(pago.estado, "pagada");
  const tx = prisma.transaccionEscuela.rows.find((t) => t.escuelaId === ESCUELA_CENTRALIZADA);
  assert.equal(tx, undefined);
});

test("marca fallida cuando el provider dice 'rejected'", async () => {
  const { pagoId } = seedCobroCuotaPago({
    escuelaId: ESCUELA_AUTOGESTIONADA,
    provider: "mercadopago",
    providerRef: "cuota:rechazada:1",
    estadoPago: "en_proceso",
    createdAt: VIEJO
  });

  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () =>
    ({ ok: true, json: async () => ({ results: [{ status: "rejected" }] }) }) as Response) as typeof fetch;
  try {
    const resultado = await reconciliarPagosPendientes(30);
    assert.equal(resultado.fallidos, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }

  const pago = prisma.pago.rows.find((p) => p.id === pagoId)!;
  assert.equal(pago.estado, "fallida");
});

test("no toca un Pago demasiado reciente (dentro de la ventana)", async () => {
  const { pagoId } = seedCobroCuotaPago({
    escuelaId: ESCUELA_AUTOGESTIONADA,
    provider: "mercadopago",
    providerRef: "cuota:reciente:1",
    estadoPago: "en_proceso",
    createdAt: RECIENTE
  });

  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async () =>
    ({ ok: true, json: async () => ({ results: [{ status: "approved" }] }) }) as Response) as typeof fetch;
  try {
    const resultado = await reconciliarPagosPendientes(30);
    assert.equal(resultado.evaluados, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }

  const pago = prisma.pago.rows.find((p) => p.id === pagoId)!;
  assert.equal(pago.estado, "en_proceso");
});

test("ignora Pagos con provider 'manual' (sin adapter que consultar)", async () => {
  const { pagoId } = seedCobroCuotaPago({
    escuelaId: ESCUELA_AUTOGESTIONADA,
    provider: "manual",
    providerRef: "manual-abc",
    estadoPago: "pendiente",
    createdAt: VIEJO
  });

  const resultado = await reconciliarPagosPendientes(30);
  assert.equal(resultado.evaluados, 0);

  const pago = prisma.pago.rows.find((p) => p.id === pagoId)!;
  assert.equal(pago.estado, "pendiente");
});

test("ya pagada no se re-procesa (idempotencia vía confirmarPago)", async () => {
  const { pagoId } = seedCobroCuotaPago({
    escuelaId: ESCUELA_AUTOGESTIONADA,
    provider: "mercadopago",
    providerRef: "cuota:ya-pagada:1",
    estadoPago: "pagada",
    createdAt: VIEJO
  });

  const resultado = await reconciliarPagosPendientes(30);
  assert.equal(resultado.evaluados, 0);

  const pago = prisma.pago.rows.find((p) => p.id === pagoId)!;
  assert.equal(pago.estado, "pagada");
});
