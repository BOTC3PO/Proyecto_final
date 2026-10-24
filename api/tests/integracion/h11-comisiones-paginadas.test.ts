/** H11 — comisiones: los totales se suman en la base y las listas van paginadas; el CSV sale completo. */
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret-vblang";
process.env.DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const mes = new Date().toISOString().slice(0, 7);
const tkAdmin = () => tokenFor({ id: "h11-admin", role: "ADMIN" as never, schoolId: null });
const tkDir = () => tokenFor({ id: "h11-dir", role: "DIRECTIVO" as never, schoolId: "h11-esc" });

before(async () => {
  const { comisiones } = await import("../../src/routes/comisiones");
  const { requireUser } = await import("../../src/lib/user-auth");
  const { Router } = await import("express");
  // En la app las comisiones se montan detrás de `requireUser`; acá se reproduce.
  const protegido = Router();
  protegido.use(requireUser, comisiones);
  const srv = await startServer([protegido]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  prisma.transaccionEscuela.rows = [];
  prisma.liquidacionEscuela.rows = [];
  seedUser({ id: "h11-admin", role: "ADMIN", schoolId: null });
  seedUser({ id: "h11-dir", role: "DIRECTIVO", schoolId: "h11-esc" });
  for (const id of ["h11-esc", "h11-otra"]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: new Date().toISOString() } as never);
  }
  const tx = (id: string, escuelaId: string, total: number, estado: string, createdAt: string) =>
    prisma.transaccionEscuela.rows.push({ id, escuelaId, montoTotal: total, comisionVB: total / 10, montoNeto: total * 0.9, estado, provider: "mercadopago", createdAt } as never);
  tx("t1", "h11-esc", 100, "registrada", `${mes}-02T10:00:00.000Z`);
  tx("t2", "h11-esc", 200, "liquidada", `${mes}-03T10:00:00.000Z`);
  tx("t3", "h11-esc", 300, "registrada", "2020-01-01T10:00:00.000Z");
  tx("t4", "h11-otra", 1000, "registrada", `${mes}-04T10:00:00.000Z`);
});

test("resumen de la escuela: totales del mes y saldo pendiente sumados en la base", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/comisiones/escuela/h11-esc/resumen", { token: tkDir() });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const b = r.body as { resumen: Record<string, number>; transacciones: unknown[]; hasMore: boolean };
  assert.equal(b.resumen.cobrosMes, 300);
  assert.equal(b.resumen.comisionRetenidaMes, 30);
  assert.equal(b.resumen.saldoALiquidar, 360); // (100 + 300) * 0.9
  assert.equal(b.resumen.cantTransaccPendientes, 2);
  assert.equal(b.transacciones.length, 3);
});

test("resumen: un alumno o docente de la escuela no ve las finanzas; otra escuela tampoco", async () => {
  seedUser({ id: "h11-alu", role: "STUDENT", schoolId: "h11-esc" });
  seedUser({ id: "h11-doc", role: "TEACHER", schoolId: "h11-esc" });
  seedUser({ id: "h11-dir-otra", role: "DIRECTIVO", schoolId: "h11-otra" });
  for (const [id, role, esc] of [["h11-alu", "STUDENT", "h11-esc"], ["h11-doc", "TEACHER", "h11-esc"], ["h11-dir-otra", "DIRECTIVO", "h11-otra"]] as const) {
    const r = await jsonRequest(baseUrl, "GET", "/api/comisiones/escuela/h11-esc/resumen", { token: tokenFor({ id, role: role as never, schoolId: esc }) });
    assert.equal(r.status, 403, id);
  }
});

test("resumen: la lista de transacciones pagina", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/comisiones/escuela/h11-esc/resumen?limit=2", { token: tkDir() });
  const b = r.body as { transacciones: unknown[]; hasMore: boolean };
  assert.equal(b.transacciones.length, 2);
  assert.equal(b.hasMore, true);
});

test("panel admin: totales por escuela", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/comisiones/admin", { token: tkAdmin() });
  const items = (r.body as { items: Array<Record<string, number | string>> }).items;
  const a = items.find((i) => i.escuelaId === "h11-esc")!;
  assert.equal(a.cobrosTotal, 600);
  assert.equal(a.cantTransacc, 3);
  assert.equal(a.saldoALiquidar, 360);
  const o = items.find((i) => i.escuelaId === "h11-otra")!;
  assert.equal(o.cobrosTotal, 1000);
});

test("el CSV trae todas las transacciones", async () => {
  const res = await fetch(`${baseUrl}/api/comisiones/admin/export.csv`, { headers: { Authorization: `Bearer ${tkAdmin()}` } });
  const lineas = (await res.text()).trim().split("\n");
  assert.equal(lineas.length, 1 + 4);
});
