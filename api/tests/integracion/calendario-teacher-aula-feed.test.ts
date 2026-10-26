/**
 * FIX-CALENDARIO — el feed unificado de calendario incluye las aulas
 * del TEACHER-miembro (no solo del TEACHER owner).
 *
 * Causa raíz: `api/src/routes/calendario.ts:83-90` filtraba las aulas
 * del TEACHER con un `OR` incompleto: solo `createdBy` y `teacherId`.
 * Faltaba `teacherOfRecord` y la membresía `clase_miembros.rolEnClase
 * === "TEACHER"`. Esto significaba que un TEACHER-miembro veía sus
 * aulas en el dropdown de `ProfesorCalendario` (post-QA-FIX-08) pero
 * el feed unificado las descartaba, así que los `ActividadAula` de
 * esas aulas no aparecían en el calendario. El `POST /api/calendario/
 * aula` devolvía 200 OK (la actividad SÍ se guardaba) pero el docente
 * no la veía, lo que daba la sensación de "no se guardó".
 *
 * El criterio canónico de "docente del aula" es el de
 * `isClassroomTeacher` (classroom-scope.ts:57-67, introducido en
 * QA-FIX-05): admin, owner por `createdBy`/`teacherId`/
 * `teacherOfRecord`, o miembro con `rolEnClase === "TEACHER"`. Este
 * test verifica que el feed unificado de calendario lo respeta en
 * los 4 caminos.
 *
 * Cubre:
 *  1. TEACHER owner por `createdBy` → sus aulas y eventos entran al feed.
 *  2. TEACHER owner por `teacherId` → sus aulas y eventos entran al feed.
 *  3. TEACHER owner por `teacherOfRecord` → sus aulas y eventos entran
 *     al feed. (Camino que el OR viejo NO cubría.)
 *  4. TEACHER member con `rolEnClase === "TEACHER"` → sus aulas y
 *     eventos entran al feed. (Este es el caso del bug: el OR viejo
 *     no incluía la membresía.)
 *  5. TEACHER ajeno al aula → esa aula NO entra al feed.
 *  6. El criterio es equivalente al de `GET /api/aulas` (QA-FIX-08):
 *     un TEACHER-miembro ve la misma aula en el dropdown y en el feed.
 *
 * Ver `docs/qa/diagnostico_calendario.md`.
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

// Docentes — uno por cada camino del criterio.
const TEACHER_OWNER = "teacher-owner";
const TEACHER_TID = "teacher-tid";
const TEACHER_TOR = "teacher-tor";
const TEACHER_MEMBER = "teacher-member";
const TEACHER_OUTSIDER = "teacher-outsider";

// Aulas — cada una con un solo "camino" de owner para que los asserts
// sean específicos.
const AULA_CREATED = "aula-created";
const AULA_TID = "aula-tid";
const AULA_TOR = "aula-tor";
const AULA_MEMBER = "aula-member";
const AULA_OTHER = "aula-other";

const SCHOOL = "esc-cal";

before(async () => {
  const { calendario } = await import("../../src/routes/calendario");
  const server = await startServer([calendario]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: TEACHER_OWNER, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: TEACHER_TID, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: TEACHER_TOR, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: TEACHER_MEMBER, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: TEACHER_OUTSIDER, role: "TEACHER", schoolId: SCHOOL });

  const now = new Date().toISOString();
  const seedAula = (id: string, fields: Record<string, unknown> = {}) => {
    prisma.clase.rows.push({
      id,
      escuelaId: SCHOOL,
      name: `Aula ${id}`,
      grade: "5°",
      isDeleted: false,
      status: "ACTIVE",
      createdAt: now,
      ...fields,
    });
  };
  seedAula(AULA_CREATED, { createdBy: TEACHER_OWNER });
  seedAula(AULA_TID, { teacherId: TEACHER_TID });
  seedAula(AULA_TOR, { teacherOfRecord: TEACHER_TOR });
  seedAula(AULA_MEMBER, {});
  seedAula(AULA_OTHER, {});

  // TEACHER_MEMBER es miembro de AULA_MEMBER con rol TEACHER.
  prisma.claseMiembro.rows.push({
    claseId: AULA_MEMBER,
    usuarioId: TEACHER_MEMBER,
    rolEnClase: "TEACHER",
  });

  // Una actividad por aula, todas en el mes actual para que entren
  // en el filtro `fecha: { gte: desde, lte: hasta }` por defecto del
  // endpoint unificado.
  const today = new Date().toISOString().slice(0, 10);
  for (const aulaId of [AULA_CREATED, AULA_TID, AULA_TOR, AULA_MEMBER, AULA_OTHER]) {
    prisma.actividadAula.rows.push({
      id: `act-${aulaId}`,
      aulaId,
      tipo: "clase",
      titulo: `Clase ${aulaId}`,
      descripcion: null,
      fecha: today,
      fechaFin: null,
      createdBy: "test",
      createdAt: now,
      isDeleted: false,
    });
  }
});

// Helper: cuenta los eventos de aula en la respuesta unificada para
// un usuario dado.
async function fetchEventos(userId: string, role = "TEACHER") {
  const token = tokenFor({ id: userId, role, schoolId: SCHOOL });
  const res = await jsonRequest(baseUrl, "GET", "/api/calendario/unificado", { token });
  return res;
}

test("FIX-CALENDARIO: TEACHER owner por createdBy → su aula y su ActividadAula entran al feed", async () => {
  const res = await fetchEventos(TEACHER_OWNER);
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string }> }).eventos;
  const aulaEventos = eventos.filter((e) => e.origen === "aula");
  const aulasVistas = new Set(aulaEventos.map((e) => e.aulaId));
  assert.ok(aulasVistas.has(AULA_CREATED), "debe ver el aula que creó");
  // Candado: el bug del OR incompleto NO excluía este camino.
  assert.ok(!aulasVistas.has(AULA_TID), "no debe ver aulas donde no es docente");
  assert.ok(!aulasVistas.has(AULA_TOR), "no debe ver aulas donde no es docente");
  assert.ok(!aulasVistas.has(AULA_MEMBER), "no debe ver aulas donde no es docente");
  assert.ok(!aulasVistas.has(AULA_OTHER), "no debe ver aulas donde no es docente");
});

test("FIX-CALENDARIO: TEACHER owner por teacherId → su aula y su ActividadAula entran al feed", async () => {
  const res = await fetchEventos(TEACHER_TID);
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string }> }).eventos;
  const aulasVistas = new Set(eventos.filter((e) => e.origen === "aula").map((e) => e.aulaId));
  assert.ok(aulasVistas.has(AULA_TID), "debe ver el aula donde es teacherId");
  assert.ok(!aulasVistas.has(AULA_OTHER));
});

test("FIX-CALENDARIO: TEACHER owner por teacherOfRecord → su aula entra al feed (camino que el OR viejo NO cubría)", async () => {
  // Este es uno de los caminos que el `OR` incompleto descartaba.
  // Antes del fix, un TEACHER con `teacherOfRecord` (pero no
  // `createdBy` ni `teacherId`) no veía sus eventos en el feed.
  const res = await fetchEventos(TEACHER_TOR);
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string }> }).eventos;
  const aulasVistas = new Set(eventos.filter((e) => e.origen === "aula").map((e) => e.aulaId));
  assert.ok(
    aulasVistas.has(AULA_TOR),
    "debe ver el aula donde es teacherOfRecord (criterio canónico QA-FIX-05)",
  );
  assert.ok(!aulasVistas.has(AULA_OTHER));
});

test("FIX-CALENDARIO: TEACHER member (no owner) → su aula y su ActividadAula entran al feed (CASO DEL BUG)", async () => {
  // Este es EL caso del bug: TEACHER_MEMBER no es `createdBy` ni
  // `teacherId` ni `teacherOfRecord` de AULA_MEMBER; sólo es miembro
  // con `rolEnClase: "TEACHER"`. Antes del fix, el OR incompleto la
  // descartaba y la actividad guardada (200 OK del POST) no aparecía
  // en el feed.
  const res = await fetchEventos(TEACHER_MEMBER);
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string; titulo: string }> }).eventos;
  const aulaEventos = eventos.filter((e) => e.origen === "aula");
  const aulasVistas = new Set(aulaEventos.map((e) => e.aulaId));
  assert.ok(
    aulasVistas.has(AULA_MEMBER),
    "TEACHER-miembro debe ver su aula en el feed (post-fix, criterio canónico)",
  );
  const eventoAulaMember = aulaEventos.find((e) => e.aulaId === AULA_MEMBER);
  assert.ok(eventoAulaMember, "el ActividadAula de AULA_MEMBER debe estar en el feed");
  assert.equal(eventoAulaMember.titulo, "Clase aula-member");
});

test("FIX-CALENDARIO: TEACHER ajeno al aula → su aula NO entra al feed", async () => {
  // TEACHER_OUTSIDER no es owner ni miembro de ninguna de las 5
  // aulas, así que ninguna debe entrar al feed.
  const res = await fetchEventos(TEACHER_OUTSIDER);
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string }> }).eventos;
  const aulasVistas = new Set(eventos.filter((e) => e.origen === "aula").map((e) => e.aulaId));
  assert.equal(aulasVistas.size, 0, "ningún aula debe entrar para un TEACHER ajeno");
});

test("FIX-CALENDARIO: el feed de TEACHER-miembro es consistente con GET /api/aulas (QA-FIX-08)", async () => {
  // Equivalencia con el criterio canónico: TEACHER_MEMBER ve
  // AULA_MEMBER tanto en el dropdown (aulas.ts:135-160 con
  // `viewerIsTeacher`) como en el feed unificado de calendario. Si
  // en el futuro alguien refactoriza y los criterios divergen, este
  // test lo detecta.
  const tokenAulas = tokenFor({ id: TEACHER_MEMBER, role: "TEACHER", schoolId: SCHOOL });
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([aulas]);
  try {
    const resAulas = await jsonRequest(server.baseUrl, "GET", "/api/aulas", { token: tokenAulas });
    assert.equal(resAulas.status, 200);
    const itemsAulas = (resAulas.body as { items: Array<{ id: string; viewerIsTeacher: boolean }> }).items;
    const aulaMemberEnDropdown = itemsAulas.find((a) => a.id === AULA_MEMBER);
    assert.ok(aulaMemberEnDropdown, "AULA_MEMBER debe estar en GET /api/aulas");
    assert.equal(aulaMemberEnDropdown.viewerIsTeacher, true, "viewerIsTeacher debe ser true");

    const resCal = await fetchEventos(TEACHER_MEMBER);
    const aulasEnFeed = (resCal.body as { eventos: Array<{ aulaId: string; origen: string }> }).eventos
      .filter((e) => e.origen === "aula")
      .map((e) => e.aulaId);
    assert.ok(
      aulasEnFeed.includes(AULA_MEMBER),
      "AULA_MEMBER debe estar en el feed unificado (consistente con el dropdown)",
    );
  } finally {
    await server.close();
  }
});

test("FIX-CALENDARIO: DIRECTIVO sigue viendo todas las aulas de la escuela (sin cambios)", async () => {
  // Candado: el fix del TEACHER no rompe el camino de DIRECTIVO/ADMIN.
  const DIRECTIVO = "dir-cal";
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: SCHOOL });
  const res = await fetchEventos(DIRECTIVO, "DIRECTIVO");
  assert.equal(res.status, 200);
  const eventos = (res.body as { eventos: Array<{ aulaId: string; origen: string }> }).eventos;
  const aulasVistas = new Set(eventos.filter((e) => e.origen === "aula").map((e) => e.aulaId));
  // DIRECTIVO ve las 5 aulas de la escuela.
  for (const aulaId of [AULA_CREATED, AULA_TID, AULA_TOR, AULA_MEMBER, AULA_OTHER]) {
    assert.ok(aulasVistas.has(aulaId), `DIRECTIVO debe ver ${aulaId}`);
  }
});
