/**
 * FIX-MODULO-CRASH-LEVEL — el GET de `/api/modulos/:id` no devolvía
 * `level` (nivel educativo), y el editor lo lee en
 * `useModuloEditor.ts:492` para mostrar el input y validar. Igual que
 * pasó con `subject` (FIX-MODULO-CRASH), combinado con que la fila
 * `Modulo` no tenía columna `level` propia (el ModuleSchema lo aceptaba
 * pero se perdía al persistir), el editor recibía `level: null` y
 * tenía que depender del `?? ""` defensivo para no crashear — pero el
 * usuario tenía que retipear el nivel cada vez que editaba.
 *
 * Fix (mismo patrón que `subject`):
 *  1. Migración `20260617040000_modulo_level` agrega columna
 *     `level TEXT` a `modulos` (nullable aditiva).
 *  2. POST persiste `level` en `moduloData`.
 *  3. PUT persiste `level` si viene en el payload.
 *  4. GET devuelve `level` (nullable, default null para legacy).
 *  5. In-memory prisma (`ModuloRow`) acepta `level` opcional.
 *
 * Cubre:
 *  (l1) POST con `level: "secundaria"` → la fila tiene `level: "secundaria"`
 *       y el GET lo devuelve.
 *  (l2) PUT actualizando `level` → GET refleja el cambio.
 *  (l3) Módulo legacy sin `level` (pre-migración o nunca seteado) →
 *       GET devuelve `level: null`, el editor no crashea.
 *  (l4) Round-trip: guardar y releer reproduce el `level` exacto.
 *  (l5) Candado: el fix de `level` no rompe el camino de `subject` /
 *       `theoryItems` (FIX-GUARDADO sigue funcionando).
 *
 * Ver `docs/qa/diagnostico_modulo_editor_crash.md` y
 * `docs/qa/diagnostico_guardado.md`.
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

const TEACHER = "teacher-fmcl";
const MOD_NEW = "mod-fmcl-new";
const MOD_LEGACY = "mod-fmcl-legacy";

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
  seedUser({ id: TEACHER, role: "TEACHER", schoolId: "esc-fmcl" });
});

test("FIX-MODULO-CRASH-LEVEL (l1): POST con level → GET lo devuelve", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const payload = {
    id: MOD_NEW,
    title: "Módulo con nivel",
    description: "desc",
    subject: "Matemáticas",
    category: "general",
    level: "secundaria",
    durationMinutes: 30,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    dependencies: [],
    theoryItems: [],
    quizzes: [],
  };

  const postRes = await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });
  assert.equal(postRes.status, 201, "POST debe crear el módulo");

  const getRes = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_NEW}`, { token });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { level: string | null };
  assert.equal(body.level, "secundaria", "level debe persistirse y devolverse");
});

test("FIX-MODULO-CRASH-LEVEL (l2): PUT actualiza level → GET refleja el cambio", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const initial = {
    id: "mod-fmcl-upd",
    title: "Módulo upd",
    description: "desc",
    subject: "Historia",
    category: "general",
    level: "primaria",
    durationMinutes: 20,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    dependencies: [],
    theoryItems: [],
    quizzes: [],
  };
  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: initial });

  // Actualizar level a un valor distinto.
  const update = { ...initial, level: "universidad", updatedAt: "2026-06-17T01:00:00.000Z" };
  const putRes = await jsonRequest(baseUrl, "PUT", "/api/modulos/mod-fmcl-upd", {
    token,
    body: update,
  });
  assert.equal(putRes.status, 200);

  const getRes = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-fmcl-upd", { token });
  const body = getRes.body as { level: string | null };
  assert.equal(body.level, "universidad", "level debe actualizarse vía PUT");
});

test("FIX-MODULO-CRASH-LEVEL (l3): módulo legacy sin level → GET devuelve null (compatibilidad)", async () => {
  // Insertar un módulo directamente en la BD simulando pre-migración:
  // la columna `level` existe pero el valor es null.
  const now = new Date().toISOString();
  prisma.modulo.rows.push({
    id: MOD_LEGACY,
    titulo: "Módulo legacy",
    descripcion: "desc",
    subject: null,
    theoryItems: null,
    level: null,
    visibility: "publico",
    schoolId: null,
    ownerUserId: TEACHER,
    dependencies: null,
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });

  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const getRes = await jsonRequest(baseUrl, "GET", `/api/modulos/${MOD_LEGACY}`, { token });
  assert.equal(getRes.status, 200);
  const body = getRes.body as { level: string | null };
  assert.equal(body.level, null, "level debe ser null para módulos legacy");
});

test("FIX-MODULO-CRASH-LEVEL (l4): round-trip — guardar y releer reproduce level exacto", async () => {
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const payload = {
    id: "mod-fmcl-roundtrip",
    title: "Módulo round-trip level",
    description: "desc",
    subject: "Álgebra",
    category: "matemáticas",
    level: "secundaria-ciclo-basico",
    durationMinutes: 45,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    dependencies: [],
    theoryItems: [],
    quizzes: [],
  };

  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });
  const getRes = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-fmcl-roundtrip", { token });
  const body = getRes.body as { level: string };
  assert.equal(body.level, "secundaria-ciclo-basico");
});

test("FIX-MODULO-CRASH-LEVEL (l5): candado — subject + theoryItems siguen funcionando", async () => {
  // FIX-GUARDADO: el fix de level no debe romper la persistencia de
  // subject y theoryItems (que viven en columnas separadas en la misma
  // fila Modulo).
  const token = tokenFor({ id: TEACHER, role: "TEACHER" });
  const payload = {
    id: "mod-fmcl-candado",
    title: "Módulo candado",
    description: "desc",
    subject: "Química",
    category: "ciencias",
    level: "secundaria",
    durationMinutes: 60,
    visibility: "publico",
    createdBy: TEACHER,
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    dependencies: [],
    theoryItems: [
      { id: "t1", title: "Tabla periódica", type: "Texto", detail: "Elementos" }
    ],
    quizzes: [],
  };
  await jsonRequest(baseUrl, "POST", "/api/modulos", { token, body: payload });

  const getRes = await jsonRequest(baseUrl, "GET", "/api/modulos/mod-fmcl-candado", { token });
  const body = getRes.body as {
    subject: string | null;
    level: string | null;
    theoryItems: Array<{ id: string; title: string }>;
  };
  assert.equal(body.subject, "Química", "subject intacto");
  assert.equal(body.level, "secundaria", "level nuevo");
  assert.equal(body.theoryItems.length, 1, "theoryItems intacto");
  assert.equal(body.theoryItems[0].title, "Tabla periódica");
});
