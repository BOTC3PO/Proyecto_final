/**
 * PLAN-A §1 (fase 6) — regresión del ítem 1 ("crear aulas falla").
 *
 * Antes, `POST /api/aulas` confiaba en el `schoolId` que mandaba cada
 * miembro en el body (el front lo armaba con `user.schoolId ?? ""`,
 * desalineado del `institutionId` elegido en el form). Un profesor sin
 * `schoolId` propio que elegía una escuela real del dropdown terminaba
 * con un ZodError crudo: `members[i].schoolId` too_small + "members must
 * match the classroom schoolId".
 *
 * Fix: el backend deriva el schoolId del aula (institutionId/schoolId del
 * body, o si no vino, el del usuario autenticado) ANTES de validar, y lo
 * fuerza en todos los miembros. Si no hay ninguno disponible, responde
 * 422 con un mensaje accionable en vez del ZodError.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA_ID = "esc-plan-a-1";
const TEACHER_SIN_ESCUELA = "teacher-sin-escuela";
const TEACHER_CON_ESCUELA = "teacher-con-escuela";

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
  seedUser({ id: TEACHER_SIN_ESCUELA, role: "TEACHER", schoolId: null });
  seedUser({ id: TEACHER_CON_ESCUELA, role: "TEACHER", schoolId: ESCUELA_ID });
});

const buildPayload = (overrides: Record<string, unknown> = {}) => ({
  id: `aula-${Math.random().toString(16).slice(2)}`,
  name: "Aula de prueba",
  description: "Aula de prueba",
  accessType: "publica",
  status: "ACTIVE",
  createdBy: TEACHER_SIN_ESCUELA,
  members: [
    // Simula el bug histórico del front: manda `schoolId: ""` porque
    // `user.schoolId` es falsy, sin importar qué institución se eligió.
    { userId: TEACHER_SIN_ESCUELA, roleInClass: "TEACHER", schoolId: "" },
    { userId: TEACHER_SIN_ESCUELA, roleInClass: "ADMIN", schoolId: "" }
  ],
  ...overrides
});

test("POST /api/aulas — profesor sin schoolId propio pero con institutionId elegido → 201 (deriva del aula)", async () => {
  const token = tokenFor({ id: TEACHER_SIN_ESCUELA, role: "TEACHER", schoolId: null });
  const res = await jsonRequest(baseUrl, "POST", "/api/aulas", {
    token,
    body: buildPayload({ institutionId: ESCUELA_ID })
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("POST /api/aulas — profesor sin schoolId propio y sin institutionId elegido → 422 con mensaje accionable", async () => {
  const token = tokenFor({ id: TEACHER_SIN_ESCUELA, role: "TEACHER", schoolId: null });
  const res = await jsonRequest(baseUrl, "POST", "/api/aulas", {
    token,
    body: buildPayload()
  });
  assert.equal(res.status, 422);
  const body = res.body as { error?: string };
  assert.match(body.error ?? "", /no tiene escuela asignada/i);
});

test("POST /api/aulas — profesor con schoolId propio, sin institutionId en el body → 201 (deriva del usuario)", async () => {
  const token = tokenFor({ id: TEACHER_CON_ESCUELA, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", "/api/aulas", {
    token,
    body: buildPayload({
      createdBy: TEACHER_CON_ESCUELA,
      members: [
        { userId: TEACHER_CON_ESCUELA, roleInClass: "TEACHER", schoolId: "" },
        { userId: TEACHER_CON_ESCUELA, roleInClass: "ADMIN", schoolId: "" }
      ]
    })
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
});
