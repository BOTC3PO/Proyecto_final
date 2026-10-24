/**
 * E6 / E7 / H1 — Plazo fijo y FCI.
 *
 *  - H1: el saldo se lee del modelo correcto (antes siempre era 0 → siempre "saldo insuficiente").
 *  - E6: la tasa del plazo fijo la fija el servidor; montos fuera de rango se rechazan.
 *  - E7: el débito es condicional y el rescate pasa una sola vez (sin doble gasto / doble cobro).
 *
 * Nota: la Prisma falsa no da aislamiento transaccional real (ver H17); estas pruebas cubren la
 * lógica condicional (`saldo >= monto`, `estado = activo`), no la atomicidad de Postgres.
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
const USER = "instr-alumno-1";
let token: string;

const saldoDe = async (id = USER) =>
  ((await prisma.economiaSaldo.findFirst({ where: { usuarioId: id } })) as { saldo?: number } | null)?.saldo;
const poner = (saldo: number) =>
  prisma.economiaSaldo.updateMany({ where: { usuarioId: USER }, data: { saldo } }).then(async (r) => {
    if (r.count === 0) {
      await prisma.economiaSaldo.create({
        data: { usuarioId: USER, saldo, moneda: "PF", updatedAt: new Date().toISOString() },
      });
    }
  });

before(async () => {
  seedUser({ id: USER, role: "STUDENT" });
  token = tokenFor({ id: USER, role: "STUDENT" });
  const { instrumentos } = await import("../../src/routes/instrumentos");
  const server = await startServer([instrumentos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => { await close(); });

beforeEach(async () => {
  await prisma.plazoFijo.deleteMany({ where: {} });
  await prisma.fciPosicion.deleteMany({ where: {} });
  await prisma.economiaTransaccion.deleteMany({ where: {} });
  await poner(0);
});

const abrirPF = (body: Record<string, unknown>) =>
  jsonRequest(baseUrl, "POST", "/api/instrumentos/plazo-fijo", { token, body });

test("H1: con saldo suficiente el plazo fijo se abre y descuenta el saldo", async () => {
  await poner(500);
  const r = await abrirPF({ monto: 100, dias: 30 });
  assert.equal(r.status, 201);
  assert.equal(await saldoDe(), 400);
  assert.equal(await prisma.plazoFijo.count({ where: {} }), 1);
  const tx = await prisma.economiaTransaccion.findMany({ where: {} });
  assert.equal(tx.length, 1);
  assert.equal((tx[0] as { tipo: string }).tipo, "debito");
});

test("E7: sin saldo suficiente → 400 y no queda nada creado", async () => {
  await poner(50);
  const r = await abrirPF({ monto: 100, dias: 30 });
  assert.equal(r.status, 400);
  assert.equal((r.body as { error: string }).error, "saldo_insuficiente");
  assert.equal(await saldoDe(), 50);
  assert.equal(await prisma.plazoFijo.count({ where: {} }), 0);
});

test("E7: dos aperturas simultáneas con saldo para una → solo una prospera", async () => {
  await poner(100);
  const [a, b] = await Promise.all([abrirPF({ monto: 100, dias: 30 }), abrirPF({ monto: 100, dias: 30 })]);
  assert.deepEqual([a.status, b.status].sort(), [201, 400]);
  assert.equal(await saldoDe(), 0);
  assert.equal(await prisma.plazoFijo.count({ where: {} }), 1);
});

test("E6: la tasa del plazo fijo la fija el servidor, no el cliente", async () => {
  await poner(1000);
  const r = await abrirPF({ monto: 100, dias: 365, tasaAnual: 99999 });
  assert.equal(r.status, 201);
  const body = r.body as { tasaAnual: number; interes: number };
  assert.notEqual(body.tasaAnual, 99999);
  assert.equal(body.interes, Math.round(100 * (body.tasaAnual / 100) * 100) / 100);
});

test("E6: montos y días inválidos o fuera de rango → 400", async () => {
  await poner(10_000_000);
  for (const body of [
    { monto: -5, dias: 30 },
    { monto: 0, dias: 30 },
    { monto: "100", dias: 30 },
    { monto: 5_000_000, dias: 30 },
    { monto: 100, dias: 0 },
    { monto: 100, dias: 366 },
    { monto: 100, dias: 1.5 },
  ]) {
    const r = await abrirPF(body);
    assert.equal(r.status, 400, JSON.stringify(body));
  }
  assert.equal(await saldoDe(), 10_000_000);
});

test("E7: rescatar dos veces a la vez acredita una sola vez", async () => {
  await poner(100);
  const abierto = await abrirPF({ monto: 100, dias: 30 });
  const id = (abierto.body as { id: string }).id;
  const rescatar = () => jsonRequest(baseUrl, "POST", `/api/instrumentos/plazo-fijo/${id}/rescatar`, { token });
  const [a, b] = await Promise.all([rescatar(), rescatar()]);
  // El segundo es 409 (carrera real) o 400 (ya visto como rescatado): nunca 200.
  assert.equal([a.status, b.status].filter((s) => s === 200).length, 1);
  assert.ok([a.status, b.status].every((s) => s === 200 || s === 400 || s === 409));
  assert.equal(await saldoDe(), 100); // rescate anticipado: solo el capital, una vez
});

test("Rescate de un plazo fijo ajeno → 404", async () => {
  await poner(100);
  const abierto = await abrirPF({ monto: 100, dias: 30 });
  const id = (abierto.body as { id: string }).id;
  seedUser({ id: "instr-otro", role: "STUDENT" });
  const otro = tokenFor({ id: "instr-otro", role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "POST", `/api/instrumentos/plazo-fijo/${id}/rescatar`, { token: otro });
  assert.equal(r.status, 404);
});

test("FCI: abrir y rescatar una vez", async () => {
  await poner(200);
  const a = await jsonRequest(baseUrl, "POST", "/api/instrumentos/fci", { token, body: { monto: 100, dias: 30 } });
  assert.equal(a.status, 201);
  assert.equal(await saldoDe(), 100);
  const id = (a.body as { id: string }).id;
  const rescatar = () => jsonRequest(baseUrl, "POST", `/api/instrumentos/fci/${id}/rescatar`, { token });
  const [x, y] = await Promise.all([rescatar(), rescatar()]);
  assert.equal([x.status, y.status].filter((s) => s === 200).length, 1);
  const saldo = (await saldoDe())!;
  assert.ok(saldo > 200 && saldo < 210, `saldo tras rescatar una sola vez: ${saldo}`);
});

test("FCI: sin saldo → 400", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/instrumentos/fci", { token, body: { monto: 10, dias: 30 } });
  assert.equal(r.status, 400);
});
