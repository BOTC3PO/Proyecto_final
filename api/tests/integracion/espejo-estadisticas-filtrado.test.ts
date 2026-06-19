/**
 * FASE 4 — el espejo-alumno NO desvía las analíticas agregadas de
 * `estadisticas.ts` (promedios/scores), ni por progreso ni por intentos
 * de quiz. Complementa `espejo-aula-filtrado.test.ts` (que cubre rosters,
 * matriz de progreso, panel docente y facturación).
 *
 * Invariante bajo prueba (sección "Contratos" de la FASE 4):
 *   "El espejo no aparece en ningún listado/analítica de alumnos ni
 *    desvía promedios/rankings."
 *
 * Construcción: damos a los alumnos reales un score "redondo" y al espejo
 * un score extremo (0). Si el espejo se colara, el promedio y el conteo
 * cambiarían; al excluirlo, reflejan solo a los alumnos reales.
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { randomUUID } from "node:crypto";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";
import { ESPEJO_TIPO_CUENTA } from "../../src/lib/provisionar-espejo";
import { estadisticas } from "../../src/routes/estadisticas";

const ESC = "esc-fase4-stats";
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const srv = await startServer([estadisticas]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
});

/**
 * Docente dueño de un módulo + 1 quiz, con N alumnos reales y 1 espejo,
 * todos con progreso "completado" y un intento de quiz. Los reales
 * puntúan `scoreReal`; el espejo, `scoreEspejo`.
 */
function seedAnaliticas(opts: {
  docenteId: string;
  moduloId: string;
  quizId: string;
  realIds: string[];
  espejoId: string;
  scoreReal: number;
  scoreEspejo: number;
}) {
  const now = new Date().toISOString();
  seedUser({ id: opts.docenteId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });
  prisma.modulo.rows.push({
    id: opts.moduloId,
    titulo: "Mod stats",
    visibility: "privado",
    schoolId: ESC,
    ownerUserId: opts.docenteId,
    createdAt: now,
    updatedAt: now,
  });
  prisma.quiz.rows.push({
    id: opts.quizId,
    moduleId: opts.moduloId,
    title: "Quiz stats",
    createdAt: now,
    updatedAt: now,
  });

  const pushAlumno = (uid: string, score: number, espejo: boolean) => {
    seedUser({
      id: uid,
      role: "USER",
      roles: ["USER"],
      schoolId: ESC,
      ...(espejo ? { tipoCuenta: ESPEJO_TIPO_CUENTA } : {}),
    });
    prisma.progresoModulo.rows.push({
      id: `prog-${uid}`,
      usuarioId: uid,
      moduloId: opts.moduloId,
      aulaId: null,
      status: "completado",
      score,
      attempts: 1,
      updatedAt: now,
    });
    prisma.quizAttempt.rows.push({
      id: `att-${uid}`,
      quizId: opts.quizId,
      quizVersionId: "qv-1",
      userId: uid,
      status: "graded",
      startedAt: now,
      submittedAt: now,
      score,
      maxScore: 10,
      answers: "{}",
      seedPolicy: 0,
    });
  };

  for (const rid of opts.realIds) pushAlumno(rid, opts.scoreReal, false);
  pushAlumno(opts.espejoId, opts.scoreEspejo, true);
}

test("FASE 4 (estadísticas): el progreso del espejo no entra en /api/estadisticas/profesor", async () => {
  resetPrisma();
  const docenteId = randomUUID();
  seedAnaliticas({
    docenteId,
    moduloId: "mod-prof",
    quizId: "quiz-prof",
    realIds: ["al-1", "al-2"],
    espejoId: "espejo-prof",
    scoreReal: 10,
    scoreEspejo: 0,
  });
  const token = tokenFor({ id: docenteId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "GET", `/api/estadisticas/profesor`, { token });
  assert.equal(res.status, 200);
  const body = res.body as {
    general: { completadas: number };
    rendimiento: { notasPorActividad: Array<{ actividad: string; promedio: number }> };
  };

  // 2 completadas reales, no 3 (el espejo se excluye).
  assert.equal(body.general.completadas, 2);
  // Promedio = 10 (solo reales); con el espejo (score 0) daría ~7.
  const fila = body.rendimiento.notasPorActividad.find((n) => n.actividad === "mod-prof");
  assert.ok(fila, "hay fila del módulo");
  assert.equal(fila.promedio, 10);
});

test("FASE 4 (estadísticas): los intentos del espejo no entran en /api/estadisticas/quizzes/docente/:id", async () => {
  resetPrisma();
  const docenteId = randomUUID();
  seedAnaliticas({
    docenteId,
    moduloId: "mod-quiz",
    quizId: "quiz-quiz",
    realIds: ["al-1", "al-2"],
    espejoId: "espejo-quiz",
    scoreReal: 8,
    scoreEspejo: 0,
  });
  const token = tokenFor({ id: docenteId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });

  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/estadisticas/quizzes/docente/${docenteId}`,
    { token }
  );
  assert.equal(res.status, 200);
  const body = res.body as { resumen: { intentos: number; scorePromedio: number } };

  // 2 intentos reales, no 3.
  assert.equal(body.resumen.intentos, 2);
  // Promedio = 8 (solo reales); con el espejo (score 0) daría ~5.
  assert.equal(body.resumen.scorePromedio, 8);
});
