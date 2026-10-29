/**
 * SC-02 (2026-10-28) — conteo de la encuesta de segunda vuelta (voto preferencial).
 *
 * Si ninguna opción supera la mitad de los votos, se elimina la menos votada y sus votos pasan a la siguiente
 * preferencia de cada votante, hasta que una supere la mitad. Antes no había prueba automática del cálculo.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const AULA = "aula-sv";
const DOCENTE = "docente-sv";

before(async () => {
  const { encuestas } = await import("../../src/routes/encuestas");
  const server = await startServer([encuestas]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: "esc-sv" });
  prisma.clase.rows.push({ id: AULA, escuelaId: "esc-sv", name: "Aula", isDeleted: false, status: "ACTIVE", createdBy: DOCENTE } as never);
});

const sembrar = (rankings: string[][]) => {
  const ahora = new Date().toISOString();
  prisma.encuesta.rows.push({
    id: "sv-1",
    title: "Destino del viaje",
    description: "",
    classroomId: AULA,
    type: "segunda_vuelta",
    options: JSON.stringify([{ id: "A", label: "Córdoba" }, { id: "B", label: "Mendoza" }, { id: "C", label: "Salta" }]),
    startAt: ahora,
    endAt: ahora,
    status: "cerrada",
    showResultsBeforeClose: false,
    showResultsRealtime: false,
    createdBy: DOCENTE,
    createdAt: ahora
  } as never);
  rankings.forEach((ranking, i) =>
    prisma.encuestaRespuesta.rows.push({
      id: `r${i}`,
      surveyId: "sv-1",
      classroomId: AULA,
      usuarioId: `alu-${i}`,
      ranking: JSON.stringify(ranking),
      createdAt: ahora
    } as never)
  );
};

type Resultado = {
  totalVotes: number;
  rounds: Array<{ round: number; counts: Array<{ id: string; count: number }>; eliminated?: { id: string }; winner?: { id: string } }>;
  winner: { id: string; count: number; percentage: number } | null;
};

const resultados = async () => {
  const r = await jsonRequest(baseUrl, "GET", `/api/encuestas/sv-1/resultados?aulaId=${AULA}`, {
    token: tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: "esc-sv" })
  });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  return r.body as Resultado;
};

test("sin mayoría en la primera ronda, la menos votada se elimina y sus votos pasan a la siguiente preferencia", async () => {
  sembrar([["A", "B", "C"], ["A", "B", "C"], ["B", "C", "A"], ["B", "C", "A"], ["C", "B", "A"]]);
  const r = await resultados();
  assert.equal(r.totalVotes, 5);
  assert.equal(r.rounds.length, 2);
  assert.deepEqual(r.rounds[0].counts.map((c) => [c.id, c.count]), [["A", 2], ["B", 2], ["C", 1]]);
  assert.equal(r.rounds[0].eliminated?.id, "C");
  assert.deepEqual(r.rounds[1].counts.map((c) => [c.id, c.count]), [["A", 2], ["B", 3]]);
  assert.equal(r.winner?.id, "B");
  assert.equal(r.winner?.percentage, 60);
});

test("con mayoría absoluta en la primera ronda gana sin más rondas", async () => {
  sembrar([["A", "B"], ["A", "C"], ["A", "B"], ["B", "A"], ["C", "B"]]);
  const r = await resultados();
  assert.equal(r.rounds.length, 1);
  assert.equal(r.winner?.id, "A");
});

test("un empate en el último puesto elimina la opción que figura primero en la lista", async () => {
  // A 2, B 1, C 1: se elimina B (primera de las empatadas); su voto pasa a C y queda A 2 – C 2, sin mayoría;
  // se elimina A (primera de las empatadas) y gana C.
  sembrar([["A"], ["A"], ["B", "C"], ["C"]]);
  const r = await resultados();
  assert.equal(r.rounds[0].eliminated?.id, "B");
  assert.equal(r.rounds[1].eliminated?.id, "A");
  assert.equal(r.winner?.id, "C");
});

test("los votos sin más preferencias se agotan y no cuentan en las rondas siguientes", async () => {
  sembrar([["A"], ["A"], ["B"], ["B"], ["C"]]);
  const r = await resultados();
  assert.equal(r.rounds[1].counts.reduce((s, c) => s + c.count, 0), 4, "el voto de C no tenía otra preferencia");
});
