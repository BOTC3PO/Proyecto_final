/**
 * MULTIROL-01 (Fase 1) — equivalencia de permisos rol singular vs
 * `roles[]` y casos multi-rol nuevos.
 *
 * Aceptación (Fase 1):
 *   1. `isStaffRole` y los demás helpers de `authorization.ts`:
 *      mismos resultados con `roles[]` que con `role` singular
 *      (tabla de equivalencia por cada rol).
 *   2. JWT lleva `roles[]` y `role` (compat); el código viejo que
 *      lee `role` sigue andando.
 *   3. Un ADMIN sigue siendo admin; un USER sigue sin permisos de
 *      staff (no se elevó ni degradó nada).
 *   4. Caso nuevo: un usuario con `roles: ["TEACHER", "USER"]` pasa
 *      `isStaffRole` Y puede actuar como learner donde corresponda
 *      (ej. `canReadAsLearner`).
 */

import assert from "node:assert/strict";
import test from "node:test";
import { isStaffRole, canPostAsStudent, canReadAsLearner, canViewAllUsers } from "./authorization";
import { hasRole, resolveRoles, resolvePrimaryRole, isStaffInRoles } from "./roles";

type LegacyRole = "ADMIN" | "DIRECTIVO" | "TEACHER" | "USER" | "PARENT" | "GUEST";

const TABLE: { role: LegacyRole; isStaff: boolean; isLearner: boolean; isAdmin: boolean; canPostAsStudent: boolean }[] = [
  { role: "ADMIN", isStaff: true, isLearner: false, isAdmin: true, canPostAsStudent: false },
  { role: "DIRECTIVO", isStaff: true, isLearner: false, isAdmin: false, canPostAsStudent: false },
  { role: "TEACHER", isStaff: true, isLearner: false, isAdmin: false, canPostAsStudent: false },
  { role: "USER", isStaff: false, isLearner: true, isAdmin: false, canPostAsStudent: true },
  { role: "PARENT", isStaff: false, isLearner: true, isAdmin: false, canPostAsStudent: false },
  { role: "GUEST", isStaff: false, isLearner: false, isAdmin: false, canPostAsStudent: false }
];

for (const { role, isStaff, isLearner, isAdmin, canPostAsStudent: postAsStudent } of TABLE) {
  // ── 1. Equivalencia: el helper con string (legacy) ──
  test(`MULTIROL-01: equivalencia con rol singular — ${role} → isStaff=${isStaff}`, () => {
    assert.equal(isStaffRole(role), isStaff, `isStaffRole("${role}")`);
    assert.equal(canReadAsLearner(role), isLearner, `canReadAsLearner("${role}")`);
    assert.equal(canViewAllUsers(role), isAdmin, `canViewAllUsers("${role}")`);
    assert.equal(canPostAsStudent(role), postAsStudent, `canPostAsStudent("${role}")`);
  });

  // ── 2. Equivalencia: el helper con roles[] de un solo elemento ──
  test(`MULTIROL-01: equivalencia con roles[]=["${role}"] → isStaff=${isStaff}`, () => {
    const user = { role, roles: [role] };
    assert.equal(isStaffRole(user), isStaff, `isStaffRole(user con roles=[${role}])`);
    assert.equal(canReadAsLearner(user), isLearner, `canReadAsLearner(user con roles=[${role}])`);
    assert.equal(canViewAllUsers(user), isAdmin, `canViewAllUsers(user con roles=[${role}])`);
    assert.equal(canPostAsStudent(user), postAsStudent, `canPostAsStudent(user con roles=[${role}])`);
  });
}

// ── 3. Multi-rol: TEACHER+USER es staff Y learner ──
test("MULTIROL-01: multi-rol TEACHER+USER pasa isStaffRole", () => {
  const user = { role: "TEACHER", roles: ["TEACHER", "USER"] };
  assert.equal(isStaffRole(user), true);
  assert.equal(canViewAllUsers(user), false, "TEACHER+USER no es admin");
});

test("MULTIROL-01: multi-rol TEACHER+USER puede actuar como learner", () => {
  const user = { role: "TEACHER", roles: ["TEACHER", "USER"] };
  assert.equal(canReadAsLearner(user), true, "TEACHER+USER puede leer como learner");
  assert.equal(canPostAsStudent(user), true, "TEACHER+USER puede postear como alumno");
});

test("MULTIROL-01: multi-rol ADMIN+TEACHER sigue siendo admin", () => {
  const user = { role: "ADMIN", roles: ["ADMIN", "TEACHER"] };
  assert.equal(isStaffRole(user), true);
  assert.equal(canViewAllUsers(user), true);
});

// ── 4. hasRole respeta el array cuando está presente ──
test("MULTIROL-01: hasRole mira roles[] primero", () => {
  // role dice USER pero roles[] dice ADMIN — ganamos roles.
  assert.equal(hasRole({ role: "USER", roles: ["ADMIN"] }, "ADMIN"), true);
  assert.equal(hasRole({ role: "USER", roles: ["ADMIN"] }, "USER"), false);
});

test("MULTIROL-01: hasRole cae al role singular si roles[] está vacío", () => {
  assert.equal(hasRole({ role: "TEACHER", roles: [] }, "TEACHER"), true);
  assert.equal(hasRole({ role: "TEACHER" }, "TEACHER"), true);
});

test("MULTIROL-01: hasRole(null) devuelve false", () => {
  assert.equal(hasRole(null, "ADMIN"), false);
  assert.equal(hasRole(undefined, "ADMIN"), false);
});

// ── 5. resolveRoles/resolvePrimaryRole ──
test("MULTIROL-01: resolveRoles prefiere roles[] sobre role", () => {
  assert.deepEqual(resolveRoles({ role: "USER", roles: ["TEACHER"] }), ["TEACHER"]);
});

test("MULTIROL-01: resolveRoles promueve role singular a array", () => {
  assert.deepEqual(resolveRoles({ role: "ADMIN" }), ["ADMIN"]);
  assert.deepEqual(resolveRoles("ADMIN"), ["ADMIN"]);
  assert.deepEqual(resolveRoles(null), []);
  assert.deepEqual(resolveRoles(undefined), []);
});

test("MULTIROL-01: resolvePrimaryRole devuelve la mayor jerarquía del array", () => {
  assert.equal(resolvePrimaryRole({ roles: ["TEACHER", "USER"] }), "TEACHER");
  assert.equal(resolvePrimaryRole({ roles: ["USER", "ADMIN"] }), "ADMIN");
  assert.equal(resolvePrimaryRole({ roles: ["PARENT", "USER"] }), "PARENT");
  assert.equal(resolvePrimaryRole({ role: "USER" }), "USER");
  assert.equal(resolvePrimaryRole({}), null);
});

test("MULTIROL-01: isStaffInRoles detecta staff por cualquier rol del array", () => {
  assert.equal(isStaffInRoles(["USER"]), false);
  assert.equal(isStaffInRoles(["TEACHER"]), true);
  assert.equal(isStaffInRoles(["TEACHER", "USER"]), true);
  assert.equal(isStaffInRoles(["DIRECTIVO"]), true);
  assert.equal(isStaffInRoles(["ADMIN"]), true);
  assert.equal(isStaffInRoles([]), false);
});

// ── 6. Compat: un usuario singular con role=TEACHER produce los mismos resultados ──
test("MULTIROL-01: equivalencia con role singular vs roles=[role] para isStaffRole", () => {
  for (const r of ["ADMIN", "DIRECTIVO", "TEACHER", "USER", "PARENT", "GUEST"] as const) {
    const stringResult = isStaffRole(r);
    const arrayResult = isStaffRole({ role: r, roles: [r] });
    const noArrayResult = isStaffRole({ role: r });
    assert.equal(stringResult, arrayResult, `string vs roles[] para ${r}`);
    assert.equal(stringResult, noArrayResult, `string vs role-only para ${r}`);
  }
});

// ── 7. Multi-rol: ADMIN+USER puede actuar como learner porque USER está en el array ──
test("MULTIROL-01: ADMIN+USER puede actuar como learner (USER está en el array)", () => {
  // Esto es la diferencia con el comportamiento legacy
  // (`canReadAsLearner("ADMIN")` retornaba false). Con multi-rol, si
  // alguno de los roles mapea a STUDENT, el usuario puede actuar como
  // learner. Esto es consistente con el caso del TEACHER+USER
  // (MULTIROL-01 caso nuevo).
  const user = { role: "ADMIN", roles: ["ADMIN", "USER"] };
  assert.equal(canReadAsLearner(user), true);
});
