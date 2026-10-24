/**
 * MULTIROL-03 (Fase 3) — tests del helper `computeViewerRoleInClass`.
 *
 * Cubre los casos del reporte bug-visual-aula-rol-dual:
 *   - Profesor que es STUDENT en un aula ajena → "STUDENT" (no
 *     "TEACHER" por su rol global).
 *   - Profesor dueño de su aula → no es miembro pero la membresía
 *     de staff lo cubre si figura; si no figura, devuelve null
 *     (la autoridad de docente la decide `isClassroomTeacher` por
 *     separado, que sí incluye dueño).
 *   - Alumno común → "STUDENT".
 *   - Miembro con `rolEnClase === "ADMIN"` → "TEACHER" (un admin en
 *     la membresía actúa como staff de la clase).
 *   - Visitante sin membresía → null.
 *   - Edge cases: members vacío, userId null, roleInClass desconocido.
 */
import assert from "node:assert/strict";
import test from "node:test";
import { computeViewerRoleInClass } from "./classroom-scope";

const MEMBERS = [
  { userId: "u-teacher", roleInClass: "TEACHER" },
  { userId: "u-admin", roleInClass: "ADMIN" },
  { userId: "u-student", roleInClass: "STUDENT" },
];

test("MULTIROL-03 — viewer TEACHER member → TEACHER", () => {
  assert.equal(computeViewerRoleInClass(MEMBERS, "u-teacher"), "TEACHER");
});

test("MULTIROL-03 — viewer ADMIN member → TEACHER (admin actúa como staff)", () => {
  assert.equal(computeViewerRoleInClass(MEMBERS, "u-admin"), "TEACHER");
});

test("MULTIROL-03 — viewer STUDENT member → STUDENT", () => {
  assert.equal(computeViewerRoleInClass(MEMBERS, "u-student"), "STUDENT");
});

test("MULTIROL-03 — viewer dueño que NO figura en members → null", () => {
  // Dueño por `createdBy`/`teacherId`/`teacherOfRecord`. La autoridad
  // de docente la cubre `isClassroomTeacher` por separado; el
  // `viewerRoleInClass` es estrictamente "rol en la membresía".
  assert.equal(computeViewerRoleInClass(MEMBERS, "u-owner"), null);
});

test("MULTIROL-03 — admin global que NO figura en members → null", () => {
  assert.equal(computeViewerRoleInClass(MEMBERS, "u-global-admin"), null);
});

test("MULTIROL-03 — visitante (no es miembro, no es dueño, no es admin) → null", () => {
  assert.equal(computeViewerRoleInClass(MEMBERS, "u-random"), null);
});

test("MULTIROL-03 — userId null → null (sin identidad)", () => {
  assert.equal(computeViewerRoleInClass(MEMBERS, null), null);
});

test("MULTIROL-03 — members vacío → null", () => {
  assert.equal(computeViewerRoleInClass([], "u-teacher"), null);
});

test("MULTIROL-03 — members null/undefined → null", () => {
  assert.equal(computeViewerRoleInClass(null, "u-teacher"), null);
  assert.equal(computeViewerRoleInClass(undefined, "u-teacher"), null);
});

test("MULTIROL-03 — roleInClass desconocido → null (no inventa rol)", () => {
  const weird = [{ userId: "u-x", roleInClass: "GUEST" }];
  assert.equal(computeViewerRoleInClass(weird, "u-x"), null);
});

test("MULTIROL-03 — case-insensitive: 'teacher' minúscula → TEACHER", () => {
  const lc = [{ userId: "u-t", roleInClass: "teacher" }];
  assert.equal(computeViewerRoleInClass(lc, "u-t"), "TEACHER");
});

test("MULTIROL-03 — rol global TEACHER pero miembro STUDENT en esta aula → STUDENT (bug 2/3 fix)", () => {
  // Caso estrella: el bug del reporte. Un usuario con rol global
  // TEACHER (no nos importa acá, llega el id) que es STUDENT en
  // ESTA clase debe resolver a STUDENT. El helper no mira el rol
  // global — solo la membresía de la clase.
  const classMembers = [{ userId: "u-x", roleInClass: "STUDENT" }];
  assert.equal(computeViewerRoleInClass(classMembers, "u-x"), "STUDENT");
});

test("MULTIROL-03 — múltiples members, devuelve el del user correcto", () => {
  const many = [
    { userId: "u-a", roleInClass: "TEACHER" },
    { userId: "u-b", roleInClass: "STUDENT" },
    { userId: "u-c", roleInClass: "STUDENT" },
  ];
  assert.equal(computeViewerRoleInClass(many, "u-a"), "TEACHER");
  assert.equal(computeViewerRoleInClass(many, "u-b"), "STUDENT");
  assert.equal(computeViewerRoleInClass(many, "u-c"), "STUDENT");
  assert.equal(computeViewerRoleInClass(many, "u-missing"), null);
});
