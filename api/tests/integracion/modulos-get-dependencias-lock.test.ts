/**
 * Fix "las dependencias entre módulos no bloquean nada" — parte 2:
 * `GET /api/modulos/:id` ahora devuelve `isLocked`/`missingDependencies`
 * (con título resuelto) para el requester actual, calculado con el mismo
 * helper (`computeModuleLock`) que ya usaba progreso.ts. Así
 * ModuloDetail.tsx puede mostrar el candado sin un round-trip aparte.
 *
 * Cubre:
 *  (a) Alumno sin completar el prerrequisito → isLocked=true,
 *      missingDependencies con el título del módulo previo.
 *  (b) Alumno que ya completó el prerrequisito → isLocked=false.
 *  (c) Módulo sin dependencies → isLocked=false, missingDependencies=[].
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-lock";
const ALUMNO_ID = "alumno-lock";
const ESCUELA_ID = "escuela-lock";
const MOD_PREVIO = "mod-previo-lock";
const MOD_ACTUAL = "mod-actual-lock";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  prisma.modulo.rows.push({
    id: MOD_PREVIO,
    slug: `${MOD_PREVIO}-${Date.now()}`,
    titulo: "Módulo previo requerido",
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  prisma.modulo.rows.push({
    id: MOD_ACTUAL,
    slug: `${MOD_ACTUAL}-${Date.now()}`,
    titulo: "Módulo actual",
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: JSON.stringify([{ id: MOD_PREVIO, type: "required" }]),
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
});

const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });

test("(a) sin completar el prerrequisito → isLocked=true con el título del módulo previo", async () => {
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ACTUAL}`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  const body = res.body as { isLocked?: boolean; missingDependencies?: { id: string; title: string }[] };
  assert.equal(body.isLocked, true);
  assert.deepEqual(body.missingDependencies, [{ id: MOD_PREVIO, title: "Módulo previo requerido" }]);
});

test("(b) con el prerrequisito completado → isLocked=false", async () => {
  prisma.progresoModulo.rows.push({
    usuarioId: ALUMNO_ID,
    moduloId: MOD_PREVIO,
    status: "completado",
    updatedAt: new Date().toISOString(),
  });

  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_ACTUAL}`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  const body = res.body as { isLocked?: boolean; missingDependencies?: unknown[] };
  assert.equal(body.isLocked, false);
  assert.deepEqual(body.missingDependencies, []);
});

test("(c) módulo sin dependencies → isLocked=false", async () => {
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_PREVIO}`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  const body = res.body as { isLocked?: boolean; missingDependencies?: unknown[] };
  assert.equal(body.isLocked, false);
  assert.deepEqual(body.missingDependencies, []);
});

test("(d) un 'unlocks' declarado desde OTRO módulo bloquea a éste igual que un 'required'", async () => {
  prisma.modulo.rows.push({
    id: "mod-origen-unlocks",
    slug: `mod-origen-unlocks-${Date.now()}`,
    titulo: "Módulo origen",
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: JSON.stringify([{ id: MOD_PREVIO, type: "unlocks" }]),
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_PREVIO}`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  const body = res.body as { isLocked?: boolean; missingDependencies?: { id: string; title: string }[] };
  assert.equal(body.isLocked, true);
  assert.deepEqual(body.missingDependencies, [{ id: "mod-origen-unlocks", title: "Módulo origen" }]);
});
