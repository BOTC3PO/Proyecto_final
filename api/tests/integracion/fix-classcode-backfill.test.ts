/**
 * FIX-CLASSCODE-ENTERPRISE — las aulas creadas por rutas que no
 * generaban código (POST /api/enterprise/aulas) quedaban con
 * `code`/`classCode` en null. La UI caía a mostrar el id largo
 * (`aula-<uuid>`) como "Código de clase", que no entra en el input
 * de unirse (maxLength 8) ni matchea en el back.
 *
 * Cubre:
 *  1. GET /api/aulas/:id de un aula ACTIVE sin código le asigna uno
 *     (backfill perezoso): corto, tipeable, persistido.
 *  2. Un alumno puede unirse con ese código vía POST /api/aulas/unirse.
 *  3. Un aula ARCHIVED sin código NO recibe backfill (classCode sólo
 *     aplica a aulas ACTIVE).
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

const teacherToken = () => tokenFor({ id: TEACHER, role: "TEACHER", schoolId: "esc-cc" });

const TEACHER = "teacher-cc";
const STUDENT = "student-cc";
const AULA_SIN_CODIGO = "aula-decac7b8-a5ab-4779-8c12-5cc79dd73877";
const AULA_ARCHIVADA = "aula-archivada-sin-codigo";

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([aulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const schoolId = "esc-cc";
  seedUser({ id: TEACHER, role: "TEACHER", schoolId });
  seedUser({ id: STUDENT, role: "USER", schoolId });

  const now = new Date().toISOString();
  prisma.clase.rows.push({
    id: AULA_SIN_CODIGO,
    escuelaId: schoolId,
    name: "Aula enterprise sin código",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER,
    createdAt: now,
  });
  prisma.clase.rows.push({
    id: AULA_ARCHIVADA,
    escuelaId: schoolId,
    name: "Aula archivada sin código",
    grade: "5°",
    isDeleted: false,
    status: "ARCHIVED",
    createdBy: TEACHER,
    createdAt: now,
  });
});

test("GET /api/aulas/:id backfillea un classCode corto y lo persiste", async () => {
  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_SIN_CODIGO}`, {
    token: teacherToken(),
  });
  assert.equal(res.status, 200);
  const code = (res.body as { classCode?: string }).classCode as string;
  assert.ok(code, "el detail debe traer classCode");
  assert.notEqual(code, AULA_SIN_CODIGO, "nunca el id como código");
  assert.ok(code.length >= 6 && code.length <= 8, `código tipeable, got: ${code}`);

  // Persistido: la fila quedó actualizada.
  const row = prisma.clase.rows.find((r: { id: string }) => r.id === AULA_SIN_CODIGO) as
    | { code?: string; classCode?: string }
    | undefined;
  assert.equal(row?.classCode, code);
  assert.equal(row?.code, code);
});

test("el alumno puede unirse con el código backfilleado", async () => {
  const detail = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_SIN_CODIGO}`, {
    token: teacherToken(),
  });
  const code = (detail.body as { classCode?: string }).classCode as string;

  const join = await jsonRequest(baseUrl, "POST", "/api/aulas/unirse", {
    token: tokenFor({ id: STUDENT, role: "USER", schoolId: "esc-cc" }),
    body: { codigo: code.toLowerCase() }, // el back normaliza a mayúsculas
  });
  assert.equal(join.status, 201);
  assert.equal((join.body as { aulaId?: string }).aulaId, AULA_SIN_CODIGO);
});

test("un aula no-ACTIVE sin código no recibe backfill", async () => {
  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ARCHIVADA}`, {
    token: teacherToken(),
  });
  assert.equal(res.status, 200);
  assert.ok(!(res.body as { classCode?: string }).classCode, "ARCHIVED no debe generar código");
});
