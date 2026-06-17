/**
 * FIX-MODULO-CRASH — el GET de módulo devuelve `subject` (materia)
 * en el response, y el editor lo tolera cuando viene ausente.
 *
 * Causa raíz: el modelo `Modulo` no tenía columna `subject`, y el
 * GET (`api/src/routes/modulos.ts:220-260`) no incluía el campo
 * en el `moduleDto`. `useModuloPersistence.ts:101` lo asignaba
 * tal cual al form, y `useModuloEditor.ts:482` hacía
 * `form.subject.length` → TypeError si el form no tenía `subject`.
 *
 * Fix:
 *  1. Migración `20260617010000_modulo_subject` agrega `subject
 *     String?` (nullable, aditiva) a `modulos`.
 *  2. GET incluye `subject: item.subject ?? null`.
 *  3. `useModuloPersistence` default a "" si el back devuelve
 *     `null`/`undefined` (defensivo, hasta que FIX-GUARDADO
 *     persista el campo).
 *  4. `useModuloEditor` usa `(form.subject ?? "").length`
 *     (defensivo).
 *
 * Dependencia: FIX-GUARDADO agrega la persistencia de `subject`
 * en POST/PUT. Este fix prepara la columna + GET; la escritura
 * queda como tarea aparte. Mientras FIX-GUARDADO no esté, los
 * módulos nuevos siguen con `subject: null` en el GET.
 *
 * Cubre:
 *  1. GET de un módulo con `subject` poblado en la fila → el DTO
 *     lo incluye.
 *  2. GET de un módulo sin `subject` (legacy / pre-migración) →
 *     `subject: null` en el DTO.
 *  3. El campo es nullable aditivo: no rompe eventos viejos.
 *
 * Ver `docs/qa/diagnostico_modulo_editor_crash.md`.
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

const TEACHER = "teacher-fmc";
const MOD_WITH_SUBJECT = "mod-with-subject";
const MOD_WITHOUT_SUBJECT = "mod-without-subject";

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
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: "esc-fmc" });

  const now = new Date().toISOString();
  // FIX-MODULO-CRASH: módulo con `subject` poblado. Es el caso
  // esperado una vez que FIX-GUARDADO persista el campo.
  prisma.modulo.rows.push({
    id: MOD_WITH_SUBJECT,
    titulo: "Módulo con materia",
    descripcion: "desc",
    subject: "Matemáticas",
    visibility: "publico",
    schoolId: null,
    ownerUserId: TEACHER,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
  // FIX-MODULO-CRASH: módulo legacy sin `subject` (pre-migración o
  // pre-FIX-GUARDADO). El campo es nullable, así que la fila no
  // tiene la propiedad.
  prisma.modulo.rows.push({
    id: MOD_WITHOUT_SUBJECT,
    titulo: "Módulo legacy",
    descripcion: "desc",
    visibility: "publico",
    schoolId: null,
    ownerUserId: TEACHER,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
});

test("FIX-MODULO-CRASH: GET incluye `subject` cuando la fila lo tiene poblado", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_WITH_SUBJECT}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { subject?: string | null };
  assert.equal(body.subject, "Matemáticas", "el GET debe devolver el subject del row");
});

test("FIX-MODULO-CRASH: GET devuelve `subject: null` para un módulo sin materia (legacy / pre-FIX-GUARDADO)", async () => {
  // El módulo legacy no tiene la columna `subject` en la fila.
  // El GET debe responder 200 con `subject: null` para que el
  // editor pueda manejarlo (default a "" en el front).
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_WITHOUT_SUBJECT}`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { subject?: string | null };
  assert.equal(body.subject, null, "el GET debe devolver null para un módulo sin subject");
});

test("FIX-MODULO-CRASH: el campo `subject` siempre está presente en el DTO (nunca undefined)", async () => {
  // Defensa: el editor del front asume que `subject` es una
  // propiedad del response. Si el back lo omitiera, `subject`
  // sería `undefined` y `useModuloPersistence.ts:101` lo
  // asignaría al form → crash en `useModuloEditor.ts:482`.
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_WITH_SUBJECT}`, { token });
  const body = res.body as Record<string, unknown>;
  assert.ok("subject" in body, "el DTO debe tener la clave `subject`");
  assert.notEqual(body.subject, undefined, "el valor de `subject` no debe ser undefined");
});
