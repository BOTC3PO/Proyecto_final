/**
 * PLAN-B Fase 1 — retiro del SaaS por suscripción (decisión del usuario
 * 2026-07-02: el negocio ahora cobra comisión sobre cobros
 * escuela→familias, ver PLAN-B Fase 2).
 *
 * Cubre:
 *  - Los endpoints que crean/renuevan suscripciones responden 410 Gone
 *    ("saas_retirado"), no un ZodError ni un 403 gateado por flag.
 *  - Los endpoints de sólo lectura (`limites`, `estado`, `historial`)
 *    siguen funcionando — `Suscripcion`/`HistorialPago` quedan de sólo
 *    lectura para contabilidad, no se borran.
 *  - `POST /api/aulas` ya no aplica el límite gratuito de 10 aulas
 *    (verificado creando más de 10).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA = "esc-retiro-saas";
const DIRECTIVO = "directivo-retiro-saas";
const TEACHER = "teacher-retiro-saas";

before(async () => {
  const { suscripciones } = await import("../../src/routes/suscripciones");
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([suscripciones, aulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({ estadoVerificacion: "verificada",
    id: ESCUELA,
    name: "Escuela Retiro SaaS",
    isDeleted: false,
    createdAt: nowIso
  });
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESCUELA });
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
});

test("POST /api/suscripciones/iniciar responde 410 Gone", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "POST", "/api/suscripciones/iniciar", {
    token,
    body: { tipo: "profesor", payerEmail: "profe@test.local" }
  });
  assert.equal(res.status, 410);
  assert.equal((res.body as { error: string }).error, "saas_retirado");
  assert.equal(prisma.suscripcion.rows.length, 0, "no debe crear ninguna fila");
});

test("POST /api/admin/suscripciones/activar responde 410 Gone", async () => {
  const ADMIN_ID = "admin-retiro-saas";
  seedUser({ id: ADMIN_ID, role: "ADMIN", schoolId: null });
  const token = tokenFor({ id: ADMIN_ID, role: "ADMIN", schoolId: null });
  const res = await jsonRequest(baseUrl, "POST", "/api/admin/suscripciones/activar", {
    token,
    body: { entidadTipo: "escuela", entidadId: ESCUELA }
  });
  assert.equal(res.status, 410);
  assert.equal((res.body as { error: string }).error, "saas_retirado");
  assert.equal(prisma.suscripcion.rows.length, 0);
});

test("GET /api/suscripciones/limites sigue funcionando (sólo lectura, para contabilidad)", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "GET", "/api/suscripciones/limites", { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
});

test("GET /api/suscripciones/estado sigue funcionando", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  const res = await jsonRequest(baseUrl, "GET", "/api/suscripciones/estado", { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
});

test("POST /api/aulas ya no aplica el límite gratuito de 10 aulas", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER", schoolId: ESCUELA });
  const now = new Date().toISOString();
  for (let i = 0; i < 10; i++) {
    prisma.clase.rows.push({
      id: `aula-preexistente-${i}`,
      escuelaId: ESCUELA,
      name: `Aula ${i}`,
      grade: "5°",
      isDeleted: false,
      status: "ACTIVE",
      createdAt: now
    });
  }
  // Ya hay 10 aulas activas en el sistema — antes esto disparaba 403
  // "limite de clases activas excedido".
  const res = await jsonRequest(baseUrl, "POST", "/api/aulas", {
    token,
    body: {
      id: "aula-numero-11",
      name: "Aula 11",
      description: "Aula 11",
      accessType: "publica",
      status: "ACTIVE",
      createdBy: TEACHER,
      members: [
        { userId: TEACHER, roleInClass: "TEACHER", schoolId: "" },
        { userId: TEACHER, roleInClass: "ADMIN", schoolId: "" }
      ]
    }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
});
