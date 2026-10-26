/**
 * I3 / E7 — Movimientos de saldo atómicos en economia.ts y economia-alta.ts.
 *
 *  - El aula se carga con la forma correcta (antes toda comprobación de pertenencia fallaba).
 *  - transacciones / compras: débito condicional, sin doble gasto.
 *  - intercambios/aceptar y examenes/cerrar: se ejecutan una sola vez aunque lleguen dos pedidos.
 *  - Invariante: saldo == suma de las transacciones (lo que verifica el endpoint de conciliación).
 *
 * La Prisma falsa no da aislamiento transaccional real (ver H17); estas pruebas cubren la lógica
 * condicional y de "reclamo", no la atomicidad de Postgres.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC = "esc-i3";
const AULA = "aula-i3";
const TEACHER = "i3-teacher";
const A = "i3-alumno-a";
const B = "i3-alumno-b";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tTeacher = () => tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESC });
const tA = () => tokenFor({ id: A, role: "STUDENT", schoolId: ESC });

const saldoDe = (id: string) =>
  (prisma.economiaSaldo.rows.find((r) => (r as { usuarioId: string }).usuarioId === id) as { saldo?: number } | undefined)?.saldo ?? 0;
const fondear = (id: string, saldo: number) =>
  prisma.economiaSaldo.rows.push({ usuarioId: id, saldo, moneda: "PF", updatedAt: nowIso() } as never);
const movimientosDe = (id: string) => {
  const filas = prisma.economiaTransaccion.rows.filter((r) => (r as { usuarioId: string }).usuarioId === id);
  return {
    debitos: filas.filter((r) => (r as { tipo: string }).tipo === "debito").length,
    creditos: filas.filter((r) => (r as { tipo: string }).tipo === "credito").length,
  };
};
/** saldo == suma(créditos) - suma(débitos) para ese usuario, parte de un saldo inicial `base`. */
const sumaTx = (id: string) =>
  prisma.economiaTransaccion.rows
    .filter((r) => (r as { usuarioId: string }).usuarioId === id)
    .reduce((acc, r) => acc + ((r as { tipo: string }).tipo === "debito" ? -1 : 1) * (r as { monto: number }).monto, 0);

before(async () => {
  const { economia } = await import("../../src/routes/economia");
  const srv = await startServer([economia]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  prisma.economiaSaldo.rows = [];
  prisma.economiaTransaccion.rows = [];
  prisma.economiaCompra.rows = [];
  prisma.economiaIntercambio.rows = [];
  prisma.economiaExamen.rows = [];
  prisma.economiaExamenPuja.rows = [];
  prisma.economiaExamenPunto.rows = [];
  prisma.escuela.rows.push({ id: ESC, name: ESC, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC, name: "5A", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: ESC });
  seedUser({ id: A, role: "STUDENT", schoolId: ESC });
  seedUser({ id: B, role: "TEACHER", schoolId: ESC });
  for (const [u, rol] of [[TEACHER, "TEACHER"], [A, "STUDENT"], [B, "TEACHER"]] as const) {
    prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: u, rolEnClase: rol });
  }
});

// ── transacciones ─────────────────────────────────────────────────────────

const debito = (usuarioId: string, monto: number) =>
  jsonRequest(baseUrl, "POST", "/api/economia/transacciones", {
    token: tTeacher(),
    body: { usuarioId, aulaId: AULA, schoolId: ESC, tipo: "debito", monto, motivo: "ajuste" },
  });

test("I3: el aula se carga bien: un debito válido a un miembro del aula funciona", async () => {
  fondear(A, 100);
  const r = await debito(A, 30);
  assert.equal(r.status, 201, JSON.stringify(r.body));
  assert.equal(saldoDe(A), 70);
});

test("I3: transacción a alguien que no es del aula → 403", async () => {
  fondear("ajeno", 100);
  const r = await debito("ajeno", 10);
  assert.equal(r.status, 403);
});

test("E7: débito mayor al saldo → 400 y el saldo no cambia", async () => {
  fondear(A, 20);
  const r = await debito(A, 50);
  assert.equal(r.status, 400);
  assert.equal((r.body as { error: string }).error, "saldo insuficiente");
  assert.equal(saldoDe(A), 20);
  assert.equal(prisma.economiaTransaccion.rows.length, 0);
});

test("E7: dos débitos simultáneos por todo el saldo → solo uno prospera", async () => {
  fondear(A, 100);
  const [x, y] = await Promise.all([debito(A, 100), debito(A, 100)]);
  assert.deepEqual([x.status, y.status].sort(), [201, 400]);
  assert.equal(saldoDe(A), 0);
  assert.equal(prisma.economiaTransaccion.rows.length, 1);
});

// ── compras ───────────────────────────────────────────────────────────────

const comprar = (monto: number) =>
  jsonRequest(baseUrl, "POST", "/api/economia/compras", {
    token: tA(),
    body: { usuarioId: A, aulaId: AULA, schoolId: ESC, concepto: "borrador", monto },
  });

test("E7: compra con saldo descuenta y deja la compra registrada", async () => {
  fondear(A, 100);
  const r = await comprar(40);
  assert.equal(r.status, 201, JSON.stringify(r.body));
  assert.equal((r.body as { saldo: number }).saldo, 60);
  assert.equal(prisma.economiaCompra.rows.length, 1);
});

test("E7: dos compras simultáneas con saldo para una → una sola, sin saldo negativo", async () => {
  fondear(A, 100);
  const [x, y] = await Promise.all([comprar(100), comprar(100)]);
  assert.deepEqual([x.status, y.status].sort(), [201, 400]);
  assert.equal(saldoDe(A), 0);
  assert.equal(prisma.economiaCompra.rows.length, 1);
  assert.equal(saldoDe(A), 100 + sumaTx(A) /* saldo inicial 100 + (-100) */);
});

// ── intercambios ──────────────────────────────────────────────────────────

const sembrarIntercambio = () => {
  const intercambio = {
    id: "int-1", aulaId: AULA, schoolId: ESC, creadorId: A, receptorId: B, monto: 50, moneda: "PF",
    estado: "pendiente", moderacion: { estado: "aprobado" }, riesgoScore: 0, createdAt: nowIso(), updatedAt: nowIso(),
  };
  prisma.economiaIntercambio.rows.push({ id: "int-1", json: JSON.stringify(intercambio), createdAt: nowIso() } as never);
};
const aceptar = () =>
  jsonRequest(baseUrl, "POST", "/api/economia/intercambios/int-1/aceptar", {
    token: tokenFor({ id: B, role: "TEACHER", schoolId: ESC }),
  });

test("E7: aceptar un intercambio mueve el saldo una sola vez aunque lleguen dos pedidos", async () => {
  fondear(A, 80);
  sembrarIntercambio();
  const [x, y] = await Promise.all([aceptar(), aceptar()]);
  assert.equal([x.status, y.status].filter((s) => s === 200).length, 1, JSON.stringify([x.body, y.body]));
  assert.ok([x.status, y.status].every((s) => s === 200 || s === 400 || s === 409));
  assert.equal(saldoDe(A), 30);
  assert.equal(saldoDe(B), 50);
  assert.equal(prisma.economiaTransaccion.rows.length, 2);
});

test("E7: aceptar sin saldo en el creador → 400 y el intercambio sigue pendiente", async () => {
  fondear(A, 10);
  sembrarIntercambio();
  const r = await aceptar();
  assert.equal(r.status, 400);
  const row = prisma.economiaIntercambio.rows[0] as { json: string };
  assert.equal(JSON.parse(row.json).estado, "pendiente");
  assert.equal(saldoDe(A), 10);
});

// ── cierre de examen ──────────────────────────────────────────────────────

const sembrarExamen = () => {
  const examen = { id: "ex-1", aulaId: AULA, estado: "anunciado", subastaActiva: true, impuestoTasa: 0 };
  prisma.economiaExamen.rows.push({ id: "ex-1", json: JSON.stringify(examen), createdAt: nowIso() } as never);
  const puja = (id: string, usuarioId: string) => ({
    id, examenId: "ex-1", usuarioId, puntos: 2, montoPorPunto: 10, estado: "pendiente", createdAt: nowIso(),
  });
  for (const p of [puja("p-a", A), puja("p-b", B)]) {
    prisma.economiaExamenPuja.rows.push({ id: p.id, examenId: "ex-1", json: JSON.stringify(p), createdAt: nowIso() } as never);
  }
};
const cerrar = () => jsonRequest(baseUrl, "POST", "/api/economia/examenes/ex-1/cerrar", { token: tTeacher() });

test("E7: cerrar un examen cobra una vez a cada postor; sin saldo, la puja se rechaza", async () => {
  fondear(A, 100); // B no tiene saldo
  sembrarExamen();
  const r = await cerrar();
  assert.equal(r.status, 200, JSON.stringify(r.body));
  // Débito de 20 por la puja y premio de ranking de 20 al primer puesto.
  assert.deepEqual(movimientosDe(A), { debitos: 1, creditos: 1 });
  assert.equal(saldoDe(A), 100);
  assert.equal(saldoDe(B), 0);
  assert.deepEqual(movimientosDe(B), { debitos: 0, creditos: 0 });
  const estados = Object.fromEntries(
    prisma.economiaExamenPuja.rows.map((x) => {
      const j = JSON.parse((x as { json: string }).json);
      return [j.id, j.estado];
    })
  );
  assert.deepEqual(estados, { "p-a": "aceptada", "p-b": "rechazada" });
  assert.equal(JSON.parse((prisma.economiaExamen.rows[0] as { json: string }).json).estado, "cerrado");
});

test("E7: dos cierres simultáneos del mismo examen no cobran dos veces", async () => {
  fondear(A, 100);
  sembrarExamen();
  const [x, y] = await Promise.all([cerrar(), cerrar()]);
  assert.ok([x.status, y.status].includes(200), JSON.stringify([x.body, y.body]));
  assert.ok([x.status, y.status].every((s) => s === 200 || s === 409));
  assert.deepEqual(movimientosDe(A), { debitos: 1, creditos: 1 }); // una sola vez, no dos
  assert.equal(saldoDe(A), 100);
});

// ── alta ──────────────────────────────────────────────────────────────────

test("E7: acreditar el saldo inicial dos veces a la vez acredita una sola", async () => {
  const { acreditarSaldoInicial } = await import("../../src/lib/economia-alta");
  const [x, y] = await Promise.all([
    acreditarSaldoInicial({ usuarioId: A, schoolId: ESC }),
    acreditarSaldoInicial({ usuarioId: A, schoolId: ESC }),
  ]);
  assert.equal([x, y].filter(Boolean).length, 1);
  assert.equal(prisma.economiaTransaccion.rows.length, 1);
  assert.equal(saldoDe(A), sumaTx(A));
});
