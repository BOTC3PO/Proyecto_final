/**
 * Cooperadora escolar (2026-10-29): la registra la dirección, la verifica el administrador, y sus cobros van a
 * la cuenta de la cooperadora (nunca a la de la escuela).
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { ENV } from "../../src/lib/env";
import { cifrarCredencial } from "../../src/lib/pasarelas-crypto";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

ENV.MP_ACCESS_TOKEN = "test-mp-token";
ENV.MP_CLIENT_ID = "test-client";

let baseUrl: string;
let close: () => Promise<void>;
const ESC = "esc-coop";
const DIR = "dir-coop";
const ALU = "alu-coop";
const AULA = "aula-coop";
const ahora = () => new Date().toISOString();

before(async () => {
  const { cobros } = await import("../../src/routes/cobros");
  const { cooperadoras } = await import("../../src/routes/cooperadoras");
  const { escuelaPasarelas } = await import("../../src/routes/escuela-pasarelas");
  const server = await startServer([cobros, cooperadoras, escuelaPasarelas]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});
beforeEach(() => {
  resetPrisma();
  prisma.escuela.rows.push({ id: ESC, name: "Escuela", isDeleted: false, estadoVerificacion: "verificada", directivoPrincipalId: DIR, createdAt: ahora() } as never);
  seedUser({ id: DIR, role: "DIRECTIVO", schoolId: ESC });
  seedUser({ id: ALU, role: "USER", schoolId: ESC });
  seedUser({ id: "admin", role: "ADMIN", schoolId: null });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC, name: "Aula", isDeleted: false, status: "ACTIVE" } as never);
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: ALU, rolEnClase: "STUDENT" } as never);
});

const dir = () => tokenFor({ id: DIR, role: "DIRECTIVO", schoolId: ESC });
const admin = () => tokenFor({ id: "admin", role: "ADMIN", schoolId: null });
const registrar = () =>
  jsonRequest(baseUrl, "PUT", `/api/escuelas/${ESC}/cooperadora`, {
    token: dir(),
    body: { nombre: "Asociación Cooperadora EP Norte", cuit: "30-71234567-8", contactoEmail: "coop@epnorte.org" }
  });
const verificar = async () => {
  const id = (prisma.cooperadora.rows[0] as { id: string }).id;
  return jsonRequest(baseUrl, "POST", `/api/admin/cooperadoras/${id}/verificacion`, { token: admin(), body: { estado: "verificada" } });
};
const cobroCoop = () =>
  jsonRequest(baseUrl, "POST", "/api/cobros", { token: dir(), body: { tipo: "cooperadora", concepto: "Cuota cooperadora", montoUnitario: 2000 } });

test("sin cooperadora verificada no se pueden emitir cobros de cooperadora", async () => {
  assert.equal((await cobroCoop()).status, 422);
  assert.equal((await registrar()).status, 200);
  assert.equal((prisma.cooperadora.rows[0] as { estadoVerificacion: string }).estadoVerificacion, "pendiente");
  assert.equal((await cobroCoop()).status, 422, "pendiente todavía no cobra");
  assert.equal((await verificar()).status, 200);
  assert.equal((await cobroCoop()).status, 201);
});

test("conectar Mercado Pago de la cooperadora exige que esté verificada", async () => {
  const sin = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESC}/pasarelas/mercadopago/authorize?titular=cooperadora`, { token: dir() });
  assert.equal(sin.status, 409);
  await registrar();
  await verificar();
  const con = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESC}/pasarelas/mercadopago/authorize?titular=cooperadora`, { token: dir() });
  assert.equal(con.status, 200, JSON.stringify(con.body));
  assert.match((con.body as { url: string }).url, /cooperadora/);
});

test("el cobro de cooperadora usa la cuenta de la cooperadora, nunca la de la escuela", async () => {
  await registrar();
  await verificar();
  const escuelaTok = cifrarCredencial(JSON.stringify({ accessToken: "token-escuela" }));
  prisma.escuelaPasarela.rows.push({ id: "p-esc", escuelaId: ESC, provider: "mercadopago", titular: "escuela", cuentaConectadaId: "111", credencialesCifradas: escuelaTok, activa: true, createdAt: ahora(), updatedAt: ahora() } as never);
  const res = await cobroCoop();
  const id = (res.body as { id: string }).id;
  await jsonRequest(baseUrl, "POST", `/api/cobros/${id}/publicar`, { token: dir(), body: { aulaId: AULA } });
  const cuota = prisma.cuotaAlumno.rows.find((c) => c.cobroId === id)!;

  // Sin cuenta de la cooperadora: queda manual (no cae en la cuenta de la escuela).
  const sinCuenta = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenFor({ id: ALU, role: "USER", schoolId: ESC }) });
  assert.equal((sinCuenta.body as { pago: { provider: string } }).pago.provider, "manual");

  // Con cuenta de la cooperadora: la preferencia se crea con SU token.
  prisma.pago.rows.length = 0;
  (cuota as { pagoId: string | null }).pagoId = null;
  const coopTok = cifrarCredencial(JSON.stringify({ accessToken: "token-cooperadora" }));
  prisma.escuelaPasarela.rows.push({ id: "p-coop", escuelaId: ESC, provider: "mercadopago", titular: "cooperadora", cuentaConectadaId: "222", credencialesCifradas: coopTok, activa: true, createdAt: ahora(), updatedAt: ahora() } as never);
  const original = globalThis.fetch;
  let autorizacion = "";
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    if (String(url).startsWith(baseUrl)) return original(url as string, init);
    autorizacion = String((init?.headers as Record<string, string>)?.Authorization ?? "");
    return { ok: true, json: async () => ({ init_point: "https://mp.test/coop" }) } as Response;
  }) as typeof fetch;
  try {
    const conCuenta = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenFor({ id: ALU, role: "USER", schoolId: ESC }) });
    assert.equal((conCuenta.body as { url: string }).url, "https://mp.test/coop");
    assert.equal(autorizacion, "Bearer token-cooperadora");
  } finally {
    globalThis.fetch = original;
  }
});

test("cambiar el CUIT vuelve a dejarla pendiente", async () => {
  await registrar();
  await verificar();
  await jsonRequest(baseUrl, "PUT", `/api/escuelas/${ESC}/cooperadora`, {
    token: dir(),
    body: { nombre: "Asociación Cooperadora EP Norte", cuit: "30-79999999-1" }
  });
  assert.equal((prisma.cooperadora.rows[0] as { estadoVerificacion: string }).estadoVerificacion, "pendiente");
});
