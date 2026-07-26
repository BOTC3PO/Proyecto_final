/**
 * Alta de escuela con aprobación.
 *
 * La regla que se protege: una escuela recién dada de alta NO puede cobrar.
 * Sin esto, cualquiera inventa "Escuela San Martín", conecta su MercadoPago
 * y le emite cuotas a familias con la plataforma de por medio.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const SOLICITANTE = "dir-solicitante";
const ADMIN = "admin-verificador";

const DATOS = {
  name: "Escuela Nueva",
  razonSocial: "Escuela Nueva SRL",
  cuit: "30-12345678-9",
  domicilio: "Calle Falsa 123",
  contactoEmail: "contacto@escuelanueva.test",
  contactoTelefono: "1122334455"
};

before(async () => {
  const { escuelas } = await import("../../src/routes/escuelas");
  const { escuelaPasarelas } = await import("../../src/routes/escuela-pasarelas");
  const srv = await startServer([escuelas, escuelaPasarelas]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: SOLICITANTE, role: "USER", schoolId: null });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
});

const tokenSolicitante = () => tokenFor({ id: SOLICITANTE, role: "USER", schoolId: null });
const tokenAdmin = () => tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });

const solicitar = () =>
  jsonRequest(baseUrl, "POST", "/api/escuelas/solicitar", { token: tokenSolicitante(), body: DATOS });

test("el alta nace pendiente y deja al solicitante como directivo principal", async () => {
  const res = await solicitar();
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const body = res.body as { id: string; estadoVerificacion: string; puedeCobrar: boolean };
  assert.equal(body.estadoVerificacion, "pendiente");
  assert.equal(body.puedeCobrar, false);

  const escuela = prisma.escuela.rows.find((e) => e.id === body.id);
  assert.equal(escuela?.directivoPrincipalId, SOLICITANTE);
  assert.ok(escuela?.datosVerificacion, "guarda los datos declarados para que el admin los revise");

  const membresia = prisma.membresia.rows.find((m) => m.usuarioId === SOLICITANTE);
  assert.equal(membresia?.rol, "DIRECTIVO", "queda directivo de SU escuela");
  assert.equal(membresia?.estado, "activa");
});

test("pendiente NO puede conectar pasarela; verificada sí", async () => {
  const { id } = (await solicitar()).body as { id: string };
  const tokenDir = () => tokenFor({ id: SOLICITANTE, role: "DIRECTIVO", schoolId: id });

  const bloqueado = await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/pasarelas`, {
    token: tokenDir(),
    body: { provider: "mercadopago", cuentaConectadaId: "999", activa: true }
  });
  assert.equal(bloqueado.status, 403);
  assert.equal((bloqueado.body as { code?: string }).code, "ESCUELA_NO_VERIFICADA");

  const aprob = await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/verificar`, {
    token: tokenAdmin(),
    body: { estado: "verificada" }
  });
  assert.equal(aprob.status, 200);

  const ok = await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/pasarelas`, {
    token: tokenDir(),
    body: { provider: "mercadopago", cuentaConectadaId: "999", activa: true }
  });
  assert.equal(ok.status, 201, JSON.stringify(ok.body));
});

test("rechazar exige motivo y lo deja registrado", async () => {
  const { id } = (await solicitar()).body as { id: string };

  const sinMotivo = await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/verificar`, {
    token: tokenAdmin(),
    body: { estado: "rechazada" }
  });
  assert.equal(sinMotivo.status, 400);

  const conMotivo = await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/verificar`, {
    token: tokenAdmin(),
    body: { estado: "rechazada", motivo: "CUIT inexistente" }
  });
  assert.equal(conMotivo.status, 200);
  assert.equal(prisma.escuela.rows.find((e) => e.id === id)?.motivoRechazo, "CUIT inexistente");
  assert.ok(prisma.auditLog.rows.some((l) => l.action === "escuela.rechazada"));
});

test("la bandeja del admin lista las pendientes con su directivo", async () => {
  await solicitar();
  const res = await jsonRequest(baseUrl, "GET", "/api/escuelas/solicitudes", { token: tokenAdmin() });
  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ name: string; directivoPrincipal: { id: string } | null }> }).items;
  assert.equal(items.length, 1);
  assert.equal(items[0]?.name, "Escuela Nueva");
  assert.equal(items[0]?.directivoPrincipal?.id, SOLICITANTE);
});

test("datos inválidos (sin CUIT) no crean nada", async () => {
  const { name, ...resto } = DATOS;
  const res = await jsonRequest(baseUrl, "POST", "/api/escuelas/solicitar", {
    token: tokenSolicitante(),
    body: { name, ...resto, cuit: "" }
  });
  assert.equal(res.status, 400);
  assert.equal(prisma.escuela.rows.length, 0);
});

// ── Directivo principal y delegación de cobros ───────────────────

test("un directivo NO principal no puede tocar la pasarela ni emitir cobros", async () => {
  const { id } = (await solicitar()).body as { id: string };
  await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/verificar`, {
    token: tokenAdmin(),
    body: { estado: "verificada" }
  });

  // Segundo directivo de la MISMA escuela, sin delegación.
  seedUser({ id: "dir-secundario", role: "DIRECTIVO", schoolId: id });
  prisma.membresia.rows.push({
    usuarioId: "dir-secundario",
    escuelaId: id,
    rol: "DIRECTIVO",
    estado: "activa",
    puedeCobrar: false,
    fechaAlta: new Date().toISOString()
  } as never);

  const res = await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/pasarelas`, {
    token: tokenFor({ id: "dir-secundario", role: "DIRECTIVO", schoolId: id }),
    body: { provider: "mercadopago", cuentaConectadaId: "666", activa: true }
  });

  assert.equal(res.status, 403);
  assert.equal((res.body as { code?: string }).code, "SOLO_DIRECTIVO_PRINCIPAL");
});

test("el directivo principal sí puede", async () => {
  const { id } = (await solicitar()).body as { id: string };
  await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/verificar`, {
    token: tokenAdmin(),
    body: { estado: "verificada" }
  });

  const res = await jsonRequest(baseUrl, "POST", `/api/escuelas/${id}/pasarelas`, {
    token: tokenFor({ id: SOLICITANTE, role: "DIRECTIVO", schoolId: id }),
    body: { provider: "mercadopago", cuentaConectadaId: "777", activa: true }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
});
