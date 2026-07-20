/**
 * "Niveles por aula con mapa de flujo" — desbloqueo manual por docente.
 * `hasActiveModuleOverride` gana sobre el candado por dependencias: un
 * override activo (individual o por aula) hace que `isLocked` sea false
 * sin importar qué diga `computeModuleLock`.
 *
 * Cubre:
 *  (a) Override individual (usuarioId) → true para ese alumno.
 *  (b) Override por aula (aulaId) → true para cualquier miembro de esa aula.
 *  (c) Sin ningún override → false.
 *  (d) Override de OTRO alumno / OTRA aula no aplica (no hay filtración).
 */
import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { prisma, resetPrisma } from "./_helpers/setup";
import { hasActiveModuleOverride } from "../../src/lib/module-unlock-overrides";

const MOD_ID = "mod-override-1";
const ALUMNO_ID = "alumno-override";
const AULA_ID = "aula-override";

beforeEach(() => {
  resetPrisma();
});

test("(a) override individual (usuarioId) aplica para ese alumno", async () => {
  prisma.moduloDesbloqueo.rows.push({
    id: "ov-1",
    moduloId: MOD_ID,
    usuarioId: ALUMNO_ID,
    aulaId: null,
    otorgadoPor: "docente-1",
    createdAt: new Date().toISOString(),
  });

  assert.equal(await hasActiveModuleOverride(MOD_ID, ALUMNO_ID), true);
});

test("(b) override por aula aplica para cualquier miembro de esa aula", async () => {
  prisma.moduloDesbloqueo.rows.push({
    id: "ov-2",
    moduloId: MOD_ID,
    usuarioId: null,
    aulaId: AULA_ID,
    otorgadoPor: "docente-1",
    createdAt: new Date().toISOString(),
  });
  prisma.claseMiembro.rows.push({ claseId: AULA_ID, usuarioId: ALUMNO_ID, rolEnClase: "STUDENT" });

  assert.equal(await hasActiveModuleOverride(MOD_ID, ALUMNO_ID), true);
});

test("(c) sin ningún override → false", async () => {
  assert.equal(await hasActiveModuleOverride(MOD_ID, ALUMNO_ID), false);
});

test("(d) override de otro alumno / otra aula no aplica", async () => {
  prisma.moduloDesbloqueo.rows.push(
    { id: "ov-3", moduloId: MOD_ID, usuarioId: "otro-alumno", aulaId: null, otorgadoPor: "d1", createdAt: new Date().toISOString() },
    { id: "ov-4", moduloId: MOD_ID, usuarioId: null, aulaId: "otra-aula", otorgadoPor: "d1", createdAt: new Date().toISOString() }
  );
  prisma.claseMiembro.rows.push({ claseId: "otra-aula", usuarioId: "otro-alumno", rolEnClase: "STUDENT" });

  assert.equal(await hasActiveModuleOverride(MOD_ID, ALUMNO_ID), false);
});
