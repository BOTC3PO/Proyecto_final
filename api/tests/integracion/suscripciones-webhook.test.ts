import { jsonRequest, prisma, resetPrisma, startServer } from "./_helpers/setup";
import { mpState } from "./_helpers/mp-stub";
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";

// La ruta se importa DESPUÉS de setup + mp-stub para que tome los stubs.
import { suscripciones } from "../../src/routes/suscripciones";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const server = await startServer([suscripciones]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  await close();
});

beforeEach(() => {
  resetPrisma();
  mpState.status = "authorized";
  mpState.nextPaymentDate = undefined;
});

function seedSub(over: Record<string, unknown> = {}): void {
  const now = new Date().toISOString();
  prisma.suscripcion.rows.push({
    id: "sub-1",
    entidadTipo: "alumno",
    entidadId: "user-1",
    plan: "pago",
    estado: "pendiente",
    mpPreapprovalId: "pre-1",
    mpPayerEmail: "payer@test.local",
    periodoInicio: now,
    periodoFin: now,
    montoMensual: 1000,
    moneda: "ARS",
    expansiones: 0,
    createdAt: now,
    updatedAt: now,
    ...over,
  });
}

const webhook = (preId = "pre-1", action = "updated") =>
  jsonRequest(baseUrl, "POST", `/api/suscripciones/webhook?data.id=${preId}`, {
    body: { type: "subscription_preapproval", action, data: { id: preId } },
  });

const sub = () => prisma.suscripcion.rows.find((s) => s.id === "sub-1");

test("authorized → suscripción activa + se registra historialPago", async () => {
  seedSub();
  mpState.status = "authorized";
  const r = await webhook();
  assert.equal(r.status, 200);
  assert.equal(sub()?.estado, "activa");
  assert.equal(prisma.historialPago.rows.length, 1);
  assert.equal(prisma.historialPago.rows[0].estado, "pagado");
});

test("authorized con next_payment_date → periodoFin usa esa fecha", async () => {
  seedSub();
  mpState.status = "authorized";
  mpState.nextPaymentDate = "2030-01-15T00:00:00.000Z";
  await webhook();
  assert.equal(
    new Date(String(sub()?.periodoFin)).toISOString(),
    "2030-01-15T00:00:00.000Z",
  );
});

test("pending → NO acredita; estado pendiente, sin historialPago", async () => {
  seedSub({ estado: "activa" });
  mpState.status = "pending";
  const r = await webhook();
  assert.equal(r.status, 200);
  assert.equal(sub()?.estado, "pendiente");
  assert.equal(prisma.historialPago.rows.length, 0);
});

test("paused → NO acredita; estado pausada, sin historialPago", async () => {
  seedSub();
  mpState.status = "paused";
  await webhook();
  assert.equal(sub()?.estado, "pausada");
  assert.equal(prisma.historialPago.rows.length, 0);
});

test("cancelled → suscripción cancelada, sin historialPago", async () => {
  seedSub();
  mpState.status = "cancelled";
  await webhook();
  assert.equal(sub()?.estado, "cancelada");
  assert.equal(prisma.historialPago.rows.length, 0);
});

test("expired → suscripción cancelada, sin historialPago", async () => {
  seedSub();
  mpState.status = "expired";
  await webhook();
  assert.equal(sub()?.estado, "cancelada");
  assert.equal(prisma.historialPago.rows.length, 0);
});

test("escuela authorized con expansiones → upsert de límites", async () => {
  seedSub({ entidadTipo: "escuela", entidadId: "esc-1", expansiones: 2 });
  mpState.status = "authorized";
  await webhook();
  assert.equal(sub()?.estado, "activa");
  const limite = prisma.limiteEscuela.rows.find((l) => l.escuelaId === "esc-1");
  assert.ok(limite, "debió crear el límite de la escuela");
});
