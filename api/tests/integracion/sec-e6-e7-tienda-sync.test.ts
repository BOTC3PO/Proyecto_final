/**
 * E6 / E7 — Compra en la tienda y sincronización.
 *
 *  - E7: la compra debita con condición y crea el ítem en una transacción.
 *  - E6: `/api/sync/push` ya no acredita saldo por pedido del cliente.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const USER = "tienda-alumno-1";
let token: string;

const saldoDe = async () =>
  ((await prisma.economiaSaldo.findFirst({ where: { usuarioId: USER } })) as { saldo?: number } | null)?.saldo;

before(async () => {
  seedUser({ id: USER, role: "STUDENT" });
  token = tokenFor({ id: USER, role: "STUDENT" });
  const { tienda } = await import("../../src/routes/tienda");
  const { sync } = await import("../../src/routes/sync");
  const server = await startServer([tienda, sync]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => { await close(); });

beforeEach(async () => {
  await prisma.usuarioItem.deleteMany({ where: {} });
  await prisma.tiendaItem.deleteMany({ where: {} });
  await prisma.economiaTransaccion.deleteMany({ where: {} });
  await prisma.economiaSaldo.deleteMany({ where: {} });
  await prisma.tiendaItem.create({
    data: { id: "item-1", tipo: "tema", nombre: "Oscuro", precio: 100, moneda: "PF", activo: 1 },
  });
});

const fondear = (saldo: number) =>
  prisma.economiaSaldo.create({
    data: { usuarioId: USER, saldo, moneda: "PF", updatedAt: new Date().toISOString() },
  });
const comprar = () => jsonRequest(baseUrl, "POST", "/api/tienda/comprar", { token, body: { itemId: "item-1" } });

test("E7: compra con saldo suficiente descuenta y entrega el ítem", async () => {
  await fondear(150);
  const r = await comprar();
  assert.equal(r.status, 201);
  assert.equal(await saldoDe(), 50);
  assert.equal(await prisma.usuarioItem.count({ where: { usuarioId: USER } }), 1);
});

test("E7: compra sin saldo → 400, no entrega el ítem ni toca el saldo", async () => {
  await fondear(40);
  const r = await comprar();
  assert.equal(r.status, 400);
  assert.equal((r.body as { error: string }).error, "saldo_insuficiente");
  assert.equal(await saldoDe(), 40);
  assert.equal(await prisma.usuarioItem.count({ where: { usuarioId: USER } }), 0);
});

test("E7: sin fila de saldo (usuario nuevo) → 400, no error 500", async () => {
  const r = await comprar();
  assert.equal(r.status, 400);
});

test("E6: sync/push con tipo economia no acredita nada", async () => {
  await fondear(0);
  const r = await jsonRequest(baseUrl, "POST", "/api/sync/push", {
    token,
    body: { items: [{ id: "x1", tipo: "economia", payload: { delta: 10000, motivo: "gratis" }, createdAt: new Date().toISOString() }] },
  });
  const resultados = (r.body as { results?: Array<{ ok: boolean }> }).results ?? [];
  assert.ok(resultados.every((x) => x.ok === false), JSON.stringify(r.body));
  assert.equal(await saldoDe(), 0);
  assert.equal(await prisma.economiaTransaccion.count({ where: {} }), 0);
});

test("I2: si el índice único rechaza el ítem repetido (P2002) → 409 y no se cobra", async () => {
  await fondear(500);
  const original = prisma.usuarioItem.create.bind(prisma.usuarioItem);
  prisma.usuarioItem.create = (async () => {
    throw Object.assign(new Error("Unique constraint failed"), { code: "P2002" });
  }) as never;
  try {
    const r = await comprar();
    assert.equal(r.status, 409);
  } finally {
    prisma.usuarioItem.create = original as never;
  }
  assert.equal(await saldoDe(), 500); // el débito se deshizo con la transacción
  assert.equal(await prisma.economiaTransaccion.count({ where: {} }), 0);
});
