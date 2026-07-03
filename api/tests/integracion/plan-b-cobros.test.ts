/**
 * PLAN-B Fase 2 — núcleo de cobros escuela→familias (provider-agnostic;
 * Fase 3 conecta Mercado Pago/Stripe/Cryptomus sin tocar este contrato).
 *
 * Cubre:
 *  - Sólo DIRECTIVO de la escuela (o ADMIN) crea/publica cobros; TEACHER
 *    y un DIRECTIVO de otra escuela quedan afuera.
 *  - Publicar por aulaId genera una CuotaAlumno por STUDENT (excluye
 *    espejos), auto-resuelve pagadorId desde el vínculo padre↔hijo
 *    aprobado, y no se puede re-publicar.
 *  - GET /api/cuotas/mias: el alumno ve la suya, el padre vinculado ve la
 *    de su hijo, un tercero no ve nada.
 *  - Checkout crea un Pago pendiente e idempotente; un ajeno no puede
 *    iniciar checkout de una cuota que no es suya.
 *  - Confirmar-pago (staff-only) asienta TransaccionEscuela en escuela
 *    autogestionada, y no lo hace (pero igual marca pagada) en
 *    centralizada.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA_AUTOGESTIONADA = "esc-cobros-auto";
const ESCUELA_CENTRALIZADA = "esc-cobros-central";
const ESCUELA_OTRA = "esc-cobros-otra";
const DIRECTIVO = "directivo-cobros";
const DIRECTIVO_OTRA_ESCUELA = "directivo-otra-escuela";
const TEACHER = "teacher-cobros";
const ALUMNO_1 = "alumno-cobros-1";
const ALUMNO_2 = "alumno-cobros-2";
const PADRE_ALUMNO_1 = "padre-cobros-1";
const TERCERO = "tercero-cobros";
const AULA_ID = "aula-cobros";

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
  prisma.escuela.rows.push({
    id: ESCUELA_AUTOGESTIONADA,
    name: "Escuela Autogestionada",
    isDeleted: false,
    modoGestion: "autogestionado",
    comisionPct: 10,
    createdAt: nowIso
  });
  prisma.escuela.rows.push({
    id: ESCUELA_CENTRALIZADA,
    name: "Escuela Centralizada",
    isDeleted: false,
    modoGestion: "centralizado",
    createdAt: nowIso
  });

  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA_AUTOGESTIONADA });
  seedUser({ id: DIRECTIVO_OTRA_ESCUELA, role: "DIRECTIVO", schoolId: ESCUELA_OTRA });
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA_AUTOGESTIONADA });
  seedUser({ id: ALUMNO_1, role: "USER", schoolId: ESCUELA_AUTOGESTIONADA });
  seedUser({ id: ALUMNO_2, role: "USER", schoolId: ESCUELA_AUTOGESTIONADA });
  seedUser({ id: PADRE_ALUMNO_1, role: "PARENT", schoolId: ESCUELA_AUTOGESTIONADA });
  seedUser({ id: TERCERO, role: "USER", schoolId: ESCUELA_AUTOGESTIONADA });

  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA_AUTOGESTIONADA,
    name: "Aula de cobros",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DIRECTIVO,
    createdAt: nowIso
  });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: ALUMNO_1, rolEnClase: "STUDENT" });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: ALUMNO_2, rolEnClase: "STUDENT" });

  prisma.progresoModuloVinculo.rows.push({
    id: "vinculo-cobros-1",
    parentId: PADRE_ALUMNO_1,
    childId: ALUMNO_1,
    estado: "aprobado",
    createdAt: nowIso,
    updatedAt: nowIso
  });
});

const crearCobroDirectivo = async (escuelaId = ESCUELA_AUTOGESTIONADA) => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: escuelaId });
  const res = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token,
    body: { concepto: "Cuota julio", montoUnitario: 5000 }
  });
  return res.body as { id: string };
};

test("POST /api/cobros — DIRECTIVO de la escuela puede crear (201)", async () => {
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA_AUTOGESTIONADA });
  const res = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token,
    body: { concepto: "Cuota julio", montoUnitario: 5000 }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const body = res.body as { estado: string; escuelaId: string };
  assert.equal(body.estado, "borrador");
  assert.equal(body.escuelaId, ESCUELA_AUTOGESTIONADA);
});

test("POST /api/cobros — TEACHER no puede crear cobros (403)", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA_AUTOGESTIONADA });
  const res = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token,
    body: { concepto: "Cuota julio", montoUnitario: 5000 }
  });
  assert.equal(res.status, 403);
});

test("POST /api/cobros — DIRECTIVO de otra escuela no puede crear para una escuela ajena", async () => {
  // Un DIRECTIVO siempre crea para SU propia escuela (schoolId del JWT);
  // no puede mandar un escuelaId ajeno en el body para escalar.
  const token = tokenFor({ id: DIRECTIVO_OTRA_ESCUELA, role: "DIRECTIVO", schoolId: ESCUELA_OTRA });
  const res = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token,
    body: { concepto: "Cuota ajena", montoUnitario: 5000, escuelaId: ESCUELA_AUTOGESTIONADA }
  });
  assert.equal(res.status, 201);
  const body = res.body as { escuelaId: string };
  assert.equal(body.escuelaId, ESCUELA_OTRA, "debe ignorar el escuelaId del body y usar el propio");
});

test("POST /api/cobros/:id/publicar — genera una cuota por STUDENT del aula y auto-resuelve pagadorId", async () => {
  const cobro = await crearCobroDirectivo();
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA_AUTOGESTIONADA });
  const res = await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, {
    token,
    body: { aulaId: AULA_ID }
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  assert.equal((res.body as { cuotasCreadas: number }).cuotasCreadas, 2);

  const cuotas = prisma.cuotaAlumno.rows.filter((c) => c.cobroId === cobro.id);
  assert.equal(cuotas.length, 2);
  const cuotaAlumno1 = cuotas.find((c) => c.alumnoId === ALUMNO_1);
  assert.equal(cuotaAlumno1?.pagadorId, PADRE_ALUMNO_1);
  assert.equal(cuotaAlumno1?.montoFinal, 5000);

  const cobroActualizado = prisma.cobroEscuela.rows.find((c) => c.id === cobro.id);
  assert.equal(cobroActualizado?.estado, "publicado");
});

test("POST /api/cobros/:id/publicar — no se puede re-publicar (409)", async () => {
  const cobro = await crearCobroDirectivo();
  const token = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA_AUTOGESTIONADA });
  await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, { token, body: { aulaId: AULA_ID } });
  const segunda = await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, {
    token,
    body: { aulaId: AULA_ID }
  });
  assert.equal(segunda.status, 409);
});

test("GET /api/cuotas/mias — el alumno ve la suya, el padre vinculado también, un tercero no ve nada", async () => {
  const cobro = await crearCobroDirectivo();
  const tokenDirectivo = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA_AUTOGESTIONADA });
  await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, {
    token: tokenDirectivo,
    body: { aulaId: AULA_ID }
  });

  const tokenAlumno1 = tokenFor({ id: ALUMNO_1, role: "USER", schoolId: ESCUELA_AUTOGESTIONADA });
  const resAlumno = await jsonRequest(baseUrl, "GET", "/api/cuotas/mias", { token: tokenAlumno1 });
  assert.equal(resAlumno.status, 200);
  assert.equal((resAlumno.body as { items: unknown[] }).items.length, 1);

  const tokenPadre = tokenFor({ id: PADRE_ALUMNO_1, role: "PARENT", schoolId: ESCUELA_AUTOGESTIONADA });
  const resPadre = await jsonRequest(baseUrl, "GET", "/api/cuotas/mias", { token: tokenPadre });
  assert.equal(resPadre.status, 200);
  const itemsPadre = (resPadre.body as { items: Array<{ alumnoId: string }> }).items;
  assert.equal(itemsPadre.length, 1);
  assert.equal(itemsPadre[0].alumnoId, ALUMNO_1);

  const tokenTercero = tokenFor({ id: TERCERO, role: "USER", schoolId: ESCUELA_AUTOGESTIONADA });
  const resTercero = await jsonRequest(baseUrl, "GET", "/api/cuotas/mias", { token: tokenTercero });
  assert.equal((resTercero.body as { items: unknown[] }).items.length, 0);
});

test("POST /api/cuotas/:id/checkout — crea un Pago pendiente e idempotente; un ajeno no puede iniciarlo", async () => {
  const cobro = await crearCobroDirectivo();
  const tokenDirectivo = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA_AUTOGESTIONADA });
  await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, {
    token: tokenDirectivo,
    body: { aulaId: AULA_ID }
  });
  const cuota = prisma.cuotaAlumno.rows.find((c) => c.alumnoId === ALUMNO_1)!;

  const tokenTercero = tokenFor({ id: TERCERO, role: "USER", schoolId: ESCUELA_AUTOGESTIONADA });
  const resAjeno = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenTercero });
  assert.equal(resAjeno.status, 403);

  const tokenPadre = tokenFor({ id: PADRE_ALUMNO_1, role: "PARENT", schoolId: ESCUELA_AUTOGESTIONADA });
  const primero = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenPadre });
  assert.equal(primero.status, 201, JSON.stringify(primero.body));
  const pago1 = (primero.body as { pago: { id: string; estado: string; montoBruto: number } }).pago;
  assert.equal(pago1.estado, "pendiente");
  assert.equal(pago1.montoBruto, 5000);

  const segundo = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenPadre });
  assert.equal(segundo.status, 200, "la segunda llamada devuelve el mismo pago, no crea otro");
  const pago2 = (segundo.body as { pago: { id: string } }).pago;
  assert.equal(pago2.id, pago1.id);
  assert.equal(prisma.pago.rows.length, 1);
});

test("POST /api/cuotas/:id/confirmar-pago — escuela autogestionada asienta TransaccionEscuela con comisión", async () => {
  const cobro = await crearCobroDirectivo(ESCUELA_AUTOGESTIONADA);
  const tokenDirectivo = tokenFor({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA_AUTOGESTIONADA });
  await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, {
    token: tokenDirectivo,
    body: { aulaId: AULA_ID }
  });
  const cuota = prisma.cuotaAlumno.rows.find((c) => c.alumnoId === ALUMNO_1)!;
  const tokenPadre = tokenFor({ id: PADRE_ALUMNO_1, role: "PARENT", schoolId: ESCUELA_AUTOGESTIONADA });
  await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenPadre });

  const resAlumnoIntenta = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/confirmar-pago`, {
    token: tokenPadre
  });
  assert.equal(resAlumnoIntenta.status, 403, "un padre/alumno no puede confirmar su propio pago");

  const res = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/confirmar-pago`, { token: tokenDirectivo });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { transaccion: { comisionVB: number; montoNeto: number } | null; cuota: { estado: string } };
  assert.equal(body.cuota.estado, "pagada");
  assert.ok(body.transaccion, "escuela autogestionada debe generar asiento");
  assert.equal(body.transaccion?.comisionVB, 500);
  assert.equal(body.transaccion?.montoNeto, 4500);

  const transaccionRow = prisma.transaccionEscuela.rows.find((t) => t.escuelaId === ESCUELA_AUTOGESTIONADA);
  assert.ok(transaccionRow, "debe existir la fila en TransaccionEscuela");
});

test("POST /api/cuotas/:id/confirmar-pago — escuela centralizada marca pagada sin asentar comisión", async () => {
  seedUser({ id: `${DIRECTIVO}-central`, role: "DIRECTIVO", schoolId: ESCUELA_CENTRALIZADA });
  seedUser({ id: `${ALUMNO_1}-central`, role: "USER", schoolId: ESCUELA_CENTRALIZADA });
  const nowIso = new Date().toISOString();
  const aulaCentral = "aula-cobros-central";
  prisma.clase.rows.push({
    id: aulaCentral,
    escuelaId: ESCUELA_CENTRALIZADA,
    name: "Aula central",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdAt: nowIso
  });
  prisma.claseMiembro.rows.push({ claseId: aulaCentral, usuarioId: `${ALUMNO_1}-central`, rolEnClase: "STUDENT" });

  const tokenDirectivoCentral = tokenFor({ id: `${DIRECTIVO}-central`, role: "DIRECTIVO", schoolId: ESCUELA_CENTRALIZADA });
  const createRes = await jsonRequest(baseUrl, "POST", "/api/cobros", {
    token: tokenDirectivoCentral,
    body: { concepto: "Cuota central", montoUnitario: 3000 }
  });
  const cobro = createRes.body as { id: string };
  await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, {
    token: tokenDirectivoCentral,
    body: { aulaId: aulaCentral }
  });
  const cuota = prisma.cuotaAlumno.rows.find((c) => c.cobroId === cobro.id)!;
  const tokenAlumno = tokenFor({ id: `${ALUMNO_1}-central`, role: "USER", schoolId: ESCUELA_CENTRALIZADA });
  await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/checkout`, { token: tokenAlumno });

  const res = await jsonRequest(baseUrl, "POST", `/api/cuotas/${cuota.id}/confirmar-pago`, {
    token: tokenDirectivoCentral
  });
  assert.equal(res.status, 200);
  const body = res.body as { transaccion: unknown; cuota: { estado: string } };
  assert.equal(body.transaccion, null, "escuela centralizada no genera asiento de comisión");
  assert.equal(body.cuota.estado, "pagada");
});
