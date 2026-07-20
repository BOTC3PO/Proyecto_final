/**
 * "Niveles por aula con mapa de flujo" — GET /api/aulas/:id/mapa-modulos.
 * Reusa `computeModuleLock` (module-dependencies.ts, ya probado por
 * quiz-attempts.ts y el GET de módulo) para calcular `isLocked` por
 * módulo asignado al aula, más las aristas de dependencia ENTRE módulos
 * del mismo aula.
 *
 * Cubre:
 *  (a) 2 módulos con dependencia "required" entre sí → 1 link, el
 *      segundo isLocked=true hasta completar el primero.
 *  (b) Dependencia hacia un módulo FUERA del aula → no genera link (no
 *      se puede dibujar una arista a un nodo que no está en el mapa).
 *  (c) Aula sin módulos asignados → { modulos: [], links: [] }.
 *  (d) Dependencia "unlocks" (declarada desde el otro módulo) genera
 *      link y bloquea al destino igual que un "required" tradicional.
 *  (e) No-miembro del aula → 403 (mismo guard que las rutas vecinas).
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

const DOCENTE_ID = "docente-mapa";
const ALUMNO_ID = "alumno-mapa";
const ESCUELA_ID = "escuela-mapa";
const AULA_ID = "aula-mapa";
const MOD_1 = "mod-mapa-1";
const MOD_2 = "mod-mapa-2";
const MOD_FUERA = "mod-mapa-fuera";

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([aulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

function seedModulo(id: string, dependencies: unknown[] | null) {
  prisma.modulo.rows.push({
    id,
    slug: `${id}-${Date.now()}-${Math.random()}`,
    titulo: `Título ${id}`,
    descripcion: "",
    visibility: "publico",
    schoolId: ESCUELA_ID,
    ownerUserId: DOCENTE_ID,
    dependencies: dependencies ? JSON.stringify(dependencies) : null,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA_ID,
    name: "Aula mapa",
    grade: "1°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DOCENTE_ID,
    createdAt: new Date().toISOString(),
  });
  prisma.claseMiembro.rows.push(
    { claseId: AULA_ID, usuarioId: DOCENTE_ID, rolEnClase: "TEACHER" },
    { claseId: AULA_ID, usuarioId: ALUMNO_ID, rolEnClase: "STUDENT" }
  );
});

const alumno = () => tokenFor({ id: ALUMNO_ID, role: "USER", schoolId: ESCUELA_ID });

test("(a) dependencia 'required' entre 2 módulos del aula → 1 link, el 2do bloqueado", async () => {
  seedModulo(MOD_1, null);
  seedModulo(MOD_2, [{ id: MOD_1, type: "required" }]);
  prisma.claseModulo.rows.push(
    { claseId: AULA_ID, moduloId: MOD_1, required: false },
    { claseId: AULA_ID, moduloId: MOD_2, required: false }
  );

  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/mapa-modulos`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  const body = res.body as {
    modulos: { id: string; isLocked: boolean; missingDependencies: { id: string; title: string }[] }[];
    links: { sourceId: string; targetId: string }[];
  };
  assert.equal(body.modulos.length, 2);
  assert.deepEqual(body.links, [{ id: `${MOD_1}->${MOD_2}`, sourceId: MOD_1, targetId: MOD_2 }]);
  const mod2 = body.modulos.find((m) => m.id === MOD_2);
  assert.equal(mod2?.isLocked, true);
  assert.deepEqual(mod2?.missingDependencies, [{ id: MOD_1, title: `Título ${MOD_1}` }]);
  const mod1 = body.modulos.find((m) => m.id === MOD_1);
  assert.equal(mod1?.isLocked, false);
  assert.deepEqual(mod1?.missingDependencies, []);
});

test("(b) dependencia hacia un módulo fuera del aula no genera link", async () => {
  seedModulo(MOD_FUERA, null);
  seedModulo(MOD_2, [{ id: MOD_FUERA, type: "required" }]);
  prisma.claseModulo.rows.push({ claseId: AULA_ID, moduloId: MOD_2, required: false });
  // MOD_FUERA NO se asigna a esta aula.

  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/mapa-modulos`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  const body = res.body as { modulos: unknown[]; links: unknown[] };
  assert.equal(body.modulos.length, 1);
  assert.deepEqual(body.links, []);
});

test("(c) aula sin módulos asignados → listas vacías", async () => {
  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/mapa-modulos`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { modulos: [], links: [] });
});

test("(d) dependencia 'unlocks' del aula genera link y bloquea al destino", async () => {
  // MOD_1 declara "unlocks: MOD_2" — la misma relación que "MOD_2
  // requiere MOD_1", declarada desde el otro lado.
  seedModulo(MOD_1, [{ id: MOD_2, type: "unlocks" }]);
  seedModulo(MOD_2, null);
  prisma.claseModulo.rows.push(
    { claseId: AULA_ID, moduloId: MOD_1, required: false },
    { claseId: AULA_ID, moduloId: MOD_2, required: false }
  );

  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/mapa-modulos`, {
    token: alumno(),
  });

  assert.equal(res.status, 200);
  const body = res.body as {
    modulos: { id: string; isLocked: boolean }[];
    links: { sourceId: string; targetId: string }[];
  };
  assert.deepEqual(body.links, [{ id: `${MOD_1}->${MOD_2}`, sourceId: MOD_1, targetId: MOD_2 }]);
  assert.equal(body.modulos.find((m) => m.id === MOD_2)?.isLocked, true);
  assert.equal(body.modulos.find((m) => m.id === MOD_1)?.isLocked, false);
});

test("(e) no-miembro del aula → 403", async () => {
  seedUser({ id: "intruso", role: "USER", schoolId: "otra-escuela" });
  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/mapa-modulos`, {
    token: tokenFor({ id: "intruso", role: "USER", schoolId: "otra-escuela" }),
  });

  assert.equal(res.status, 403);
});
