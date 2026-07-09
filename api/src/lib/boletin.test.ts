/**
 * PLAN-V §3 — tests de `computeBoletin`.
 *
 * Cubre: promedio simple por período, promedio final = promedio de
 * períodos CON nota (no cuenta un período vacío como 0), evaluaciones
 * fuera de todo período van a "sin período" (nunca se pierden en
 * silencio), y evaluaciones sin score se ignoran.
 */
import assert from "node:assert/strict";
import test from "node:test";
import { computeBoletin, type BoletinAttempt, type BoletinPeriodoDef } from "./boletin";

const PERIODOS: BoletinPeriodoDef[] = [
  { id: "p1", nombre: "1er bimestre", desde: "2026-03-01", hasta: "2026-04-30", orden: 0 },
  { id: "p2", nombre: "2do bimestre", desde: "2026-05-01", hasta: "2026-06-30", orden: 1 }
];

test("bucketea cada evaluación al período cuya fecha la contiene", () => {
  const attempts: BoletinAttempt[] = [
    { score: 80, fecha: "2026-03-15" },
    { score: 60, fecha: "2026-04-10" },
    { score: 90, fecha: "2026-05-20" }
  ];
  const result = computeBoletin(attempts, PERIODOS);
  assert.equal(result.periodos[0].cantidad, 2);
  assert.equal(result.periodos[0].promedio, 70);
  assert.equal(result.periodos[1].cantidad, 1);
  assert.equal(result.periodos[1].promedio, 90);
});

test("promedio final es el promedio de los períodos CON nota, no incluye los vacíos como 0", () => {
  const attempts: BoletinAttempt[] = [{ score: 80, fecha: "2026-03-15" }];
  const result = computeBoletin(attempts, PERIODOS);
  assert.equal(result.periodos[0].promedio, 80);
  assert.equal(result.periodos[1].promedio, null);
  // Si el vacío contara como 0 el promedio sería 40, no 80.
  assert.equal(result.promedioFinal, 80);
});

test("una evaluación fuera de todo período cae en sinPeriodo, nunca se pierde", () => {
  const attempts: BoletinAttempt[] = [{ score: 50, fecha: "2026-01-10" }];
  const result = computeBoletin(attempts, PERIODOS);
  assert.equal(result.sinPeriodo.cantidad, 1);
  assert.equal(result.sinPeriodo.promedio, 50);
  assert.equal(result.promedioFinal, null);
});

test("evaluaciones sin score (null) se ignoran", () => {
  const attempts: BoletinAttempt[] = [
    { score: null, fecha: "2026-03-15" },
    { score: 100, fecha: "2026-03-16" }
  ];
  const result = computeBoletin(attempts, PERIODOS);
  assert.equal(result.periodos[0].cantidad, 1);
  assert.equal(result.periodos[0].promedio, 100);
});

test("sin ningún período definido, todo cae en sinPeriodo", () => {
  const attempts: BoletinAttempt[] = [{ score: 70, fecha: "2026-03-15" }];
  const result = computeBoletin(attempts, []);
  assert.equal(result.periodos.length, 0);
  assert.equal(result.sinPeriodo.cantidad, 1);
  assert.equal(result.promedioFinal, null);
});

test("fecha como timestamp ISO completo (submittedAt real) en el borde del último día del período cuenta bien", () => {
  const attempts: BoletinAttempt[] = [{ score: 90, fecha: "2026-04-30T23:59:59.000Z" }];
  const result = computeBoletin(attempts, PERIODOS);
  assert.equal(result.periodos[0].cantidad, 1);
  assert.equal(result.periodos[0].promedio, 90);
  assert.equal(result.sinPeriodo.cantidad, 0);
});

test("sin ninguna evaluación, todos los períodos quedan en null (no 0)", () => {
  const result = computeBoletin([], PERIODOS);
  assert.equal(result.periodos[0].promedio, null);
  assert.equal(result.periodos[1].promedio, null);
  assert.equal(result.promedioFinal, null);
});
