/**
 * PLAN-roles-v3 A3 — solicitudes e invitaciones de rol.
 *
 * La regla: cualquier rol se puede PEDIR salvo ADMIN de plataforma, pero
 * pedir no es obtener. Lo que se protege acá es que alumno y profesor NO
 * sean auto-servicio: si lo fueran, un alumno se haría profesor de su
 * propia escuela y vería los datos de sus compañeros.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { aprobadorPara, puedeInvitar } from "../../src/lib/invitaciones";

const ESC = "esc-inv";
const DIRECTIVO = "dir-inv";
const ALUMNO = "alumno-inv";
const OTRO = "otro-inv";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { invitaciones } = await import("../../src/routes/invitaciones");
  const srv = await startServer([invitaciones]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  prisma.escuela.rows.push({
    id: ESC, name: "Esc", isDeleted: false, estadoVerificacion: "verificada",
    directivoPrincipalId: DIRECTIVO, createdAt: nowIso()
  } as never);
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESC });
  seedUser({ id: ALUMNO, role: "USER", schoolId: ESC });
  seedUser({ id: OTRO, role: "USER", schoolId: ESC });
});

const tk = (id: string, role: string) => tokenFor({ id, role: role as never, schoolId: ESC });
const membresiasDe = (u: string) => prisma.membresia.rows.filter((m) => m.usuarioId === u);

// ── La matriz, como módulo puro ──────────────────────────────────

test("padre pedido por uno mismo es automático; profesor y alumno los aprueba el directivo", () => {
  assert.equal(aprobadorPara({ rol: "PARENT", esPedidoPropio: true }), "automatico");
  assert.equal(aprobadorPara({ rol: "TEACHER", esPedidoPropio: true }), "directivo");
  assert.equal(aprobadorPara({ rol: "STUDENT", esPedidoPropio: true }), "directivo");
  assert.equal(aprobadorPara({ rol: "ADMIN_ESCUELA", esPedidoPropio: true }), "directivo");
  // Sumar un directivo habilita cobrar: lo resuelve el principal.
  assert.equal(aprobadorPara({ rol: "DIRECTIVO", esPedidoPropio: true }), "directivo_principal");
  // Invitación: falta que el invitado acepte.
  assert.equal(aprobadorPara({ rol: "TEACHER", esPedidoPropio: false }), "destinatario");
});

test("un alumno no puede invitar a nadie", () => {
  assert.equal(puedeInvitar(["USER"], "TEACHER"), false);
  assert.equal(puedeInvitar(["DIRECTIVO"], "TEACHER"), true);
});

// ── Flujo real ───────────────────────────────────────────────────

test("un alumno que pide ser profesor NO se lo auto-concede", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/invitaciones", {
    token: tk(ALUMNO, "USER"),
    body: { rol: "TEACHER", escuelaId: ESC }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  assert.equal((res.body as { estado: string }).estado, "pendiente");
  assert.equal(membresiasDe(ALUMNO).length, 0, "no hay membresía hasta que lo aprueben");
});

test("el directivo aprueba y recién ahí aparece la membresía", async () => {
  const creada = await jsonRequest(baseUrl, "POST", "/api/invitaciones", {
    token: tk(ALUMNO, "USER"),
    body: { rol: "TEACHER", escuelaId: ESC }
  });
  const id = (creada.body as { id: string }).id;

  const res = await jsonRequest(baseUrl, "POST", `/api/invitaciones/${id}/responder`, {
    token: tk(DIRECTIVO, "DIRECTIVO"),
    body: { aceptar: true }
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.equal(membresiasDe(ALUMNO).find((m) => m.rol === "TEACHER")?.estado, "activa");
});

test("otro alumno NO puede aprobar la solicitud", async () => {
  const creada = await jsonRequest(baseUrl, "POST", "/api/invitaciones", {
    token: tk(ALUMNO, "USER"),
    body: { rol: "TEACHER", escuelaId: ESC }
  });
  const id = (creada.body as { id: string }).id;

  const res = await jsonRequest(baseUrl, "POST", `/api/invitaciones/${id}/responder`, {
    token: tk(OTRO, "USER"),
    body: { aceptar: true }
  });
  assert.equal(res.status, 403);
  assert.equal((res.body as { code?: string }).code, "NO_APROBADOR");
  assert.equal(membresiasDe(ALUMNO).length, 0);
});

test("pedir el rol de padre se concede solo (el control es el vínculo con el hijo)", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/invitaciones", {
    token: tk(ALUMNO, "USER"),
    body: { rol: "PARENT", escuelaId: ESC }
  });
  assert.equal((res.body as { estado: string }).estado, "aceptada");
  assert.equal(membresiasDe(ALUMNO).find((m) => m.rol === "PARENT")?.estado, "activa");
});

test("el directivo invita como admin de escuela y el invitado acepta", async () => {
  const creada = await jsonRequest(baseUrl, "POST", "/api/invitaciones", {
    token: tk(DIRECTIVO, "DIRECTIVO"),
    body: { rol: "ADMIN_ESCUELA", escuelaId: ESC, destinatario: OTRO }
  });
  assert.equal(creada.status, 201, JSON.stringify(creada.body));
  const id = (creada.body as { id: string }).id;
  assert.equal(membresiasDe(OTRO).length, 0, "todavía no acepta");

  // El propio directivo no puede aceptar por el invitado.
  const usurpa = await jsonRequest(baseUrl, "POST", `/api/invitaciones/${id}/responder`, {
    token: tk(DIRECTIVO, "DIRECTIVO"),
    body: { aceptar: true }
  });
  assert.equal(usurpa.status, 403);

  const ok = await jsonRequest(baseUrl, "POST", `/api/invitaciones/${id}/responder`, {
    token: tk(OTRO, "USER"),
    body: { aceptar: true }
  });
  assert.equal(ok.status, 200);
  assert.equal(membresiasDe(OTRO).find((m) => m.rol === "ADMIN_ESCUELA")?.estado, "activa");
});

test("ADMIN de plataforma no se puede pedir por esta vía", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/invitaciones", {
    token: tk(ALUMNO, "USER"),
    body: { rol: "ADMIN", escuelaId: ESC }
  });
  assert.equal(res.status, 400);
  assert.equal((res.body as { code?: string }).code, "ROL_INVALIDO");
});

test("no se duplican solicitudes pendientes del mismo rol", async () => {
  const body = { rol: "TEACHER", escuelaId: ESC };
  await jsonRequest(baseUrl, "POST", "/api/invitaciones", { token: tk(ALUMNO, "USER"), body });
  const segunda = await jsonRequest(baseUrl, "POST", "/api/invitaciones", { token: tk(ALUMNO, "USER"), body });
  assert.equal(segunda.status, 409);
});
