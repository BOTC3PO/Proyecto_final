/**
 * F3-02 — Motor de sorteo por posición, determinista por alumno.
 *
 * Tests puros (sin DB ni red): determinismo, anticopia, estabilidad entre
 * intentos según política, y referenciabilidad (la posición/tema es la misma
 * para todos; sólo cambia la variante).
 */

import assert from "node:assert/strict";
import { test } from "node:test";
import { parseCuestionario, CuestionarioPosiciones } from "../../src/lib/quiz-posiciones";
import {
  sortearCuestionario,
  seedPosicion,
  elegirVariante,
} from "../../src/lib/quiz-sorteo";

/** Cuestionario de prueba: 1 fija + varias con pool de 3 variantes. */
function cuestionarioDePrueba(posicionesConPool = 8): CuestionarioPosiciones {
  const posiciones: unknown[] = [
    {
      tipo: "fijo",
      temaPrincipal: "algebra",
      puntaje: 1,
      variantes: [{ letra: "a", origen: { origen: "banco", questionId: "fija-1" } }],
    },
  ];
  for (let i = 0; i < posicionesConPool; i += 1) {
    posiciones.push({
      tipo: "obligatorio",
      temaPrincipal: i % 2 === 0 ? "algebra" : "geo",
      puntaje: 2,
      variantes: [
        { letra: "a", origen: { origen: "banco", questionId: `p${i}-a` } },
        { letra: "b", origen: { origen: "banco", questionId: `p${i}-b` } },
        { letra: "c", origen: { origen: "banco", questionId: `p${i}-c` } },
      ],
    });
  }
  return parseCuestionario({
    temas: [
      { id: "algebra", nombre: "Álgebra" },
      { id: "geo", nombre: "Geometría" },
    ],
    posiciones,
  });
}

const QUIZ = "quiz-1";

// ───────────────────────────────────────────────────────────────
// Determinismo
// ───────────────────────────────────────────────────────────────

test("determinismo: mismo (alumno, quiz, intento) → misma selección en N llamadas", () => {
  const c = cuestionarioDePrueba();
  const ctx = { alumnoId: "ana", quizId: QUIZ };
  const r1 = sortearCuestionario(c, ctx);
  const r2 = sortearCuestionario(c, ctx);
  const r3 = sortearCuestionario(c, ctx);
  assert.deepEqual(r2, r1);
  assert.deepEqual(r3, r1);
});

test("determinismo: una selección por posición, en el mismo orden", () => {
  const c = cuestionarioDePrueba(5);
  const r = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ });
  assert.equal(r.selecciones.length, c.posiciones.length);
  assert.deepEqual(
    r.selecciones.map((s) => s.numero),
    c.posiciones.map((p) => p.numero),
  );
  // Cada letra elegida existe en el pool de su posición.
  r.selecciones.forEach((s, i) => {
    assert.ok(c.posiciones[i].variantes.some((v) => v.letra === s.letra));
  });
});

test("posición fija: siempre la única variante, sin depender del alumno", () => {
  const c = cuestionarioDePrueba(3);
  const ana = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ }).selecciones[0];
  const beto = sortearCuestionario(c, { alumnoId: "beto", quizId: QUIZ }).selecciones[0];
  assert.equal(ana.tipo, "fijo");
  assert.equal(ana.letra, "a");
  assert.equal(beto.letra, "a");
});

// ───────────────────────────────────────────────────────────────
// Anticopia (estadístico)
// ───────────────────────────────────────────────────────────────

test("anticopia: dos alumnos distintos difieren en al menos una posición", () => {
  const c = cuestionarioDePrueba(12);
  const ana = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ });
  const beto = sortearCuestionario(c, { alumnoId: "beto", quizId: QUIZ });
  const distintas = ana.selecciones.filter((s, i) => s.letra !== beto.selecciones[i].letra);
  assert.ok(distintas.length > 0, "dos alumnos no deberían recibir exactamente el mismo sorteo");
});

test("anticopia: distribución razonable de variantes entre muchos alumnos", () => {
  const c = cuestionarioDePrueba(1); // 1 posición con pool de 3
  const conteo: Record<string, number> = { a: 0, b: 0, c: 0 };
  for (let i = 0; i < 300; i += 1) {
    const r = sortearCuestionario(c, { alumnoId: `alumno-${i}`, quizId: QUIZ });
    const letra = r.selecciones[1].letra; // posición 2 (índice 1) es la del pool
    conteo[letra] += 1;
  }
  // Las 3 variantes deben aparecer (no degenera a una sola).
  assert.ok(conteo.a > 0 && conteo.b > 0 && conteo.c > 0, JSON.stringify(conteo));
});

// ───────────────────────────────────────────────────────────────
// Estabilidad entre intentos según política
// ───────────────────────────────────────────────────────────────

test("política fijo_por_alumno (default): el intento NO cambia la selección", () => {
  const c = cuestionarioDePrueba(10);
  const r1 = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ, intento: 1 });
  const r2 = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ, intento: 2 });
  assert.deepEqual(
    r2.selecciones.map((s) => s.letra),
    r1.selecciones.map((s) => s.letra),
  );
});

test("política por_intento: intentos distintos pueden re-sortear", () => {
  const c = cuestionarioDePrueba(15);
  const r1 = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ, intento: 1, politica: "por_intento" });
  const r2 = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ, intento: 2, politica: "por_intento" });
  const distintas = r1.selecciones.filter((s, i) => s.letra !== r2.selecciones[i].letra);
  assert.ok(distintas.length > 0, "por_intento debería re-sortear al menos una posición");
  // Y sigue siendo determinista dentro del mismo intento.
  const r1b = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ, intento: 1, politica: "por_intento" });
  assert.deepEqual(r1b, r1);
});

// ───────────────────────────────────────────────────────────────
// Referenciabilidad
// ───────────────────────────────────────────────────────────────

test("referenciabilidad: número, tema y puntaje son iguales para todos los alumnos", () => {
  const c = cuestionarioDePrueba(6);
  const ana = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ });
  const beto = sortearCuestionario(c, { alumnoId: "beto", quizId: QUIZ });
  ana.selecciones.forEach((s, i) => {
    const b = beto.selecciones[i];
    assert.equal(s.numero, b.numero);
    assert.equal(s.temaPrincipal, b.temaPrincipal);
    assert.equal(s.puntaje, b.puntaje);
  });
});

// ───────────────────────────────────────────────────────────────
// Auditabilidad / helpers
// ───────────────────────────────────────────────────────────────

test("auditabilidad: el seed registrado reproduce la misma variante", () => {
  const c = cuestionarioDePrueba(4);
  const r = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ });
  r.selecciones.forEach((s, i) => {
    const reproducida = elegirVariante(c.posiciones[i].variantes, s.seed);
    assert.equal(reproducida.letra, s.letra);
  });
});

test("seedPosicion: incluye intento sólo bajo política por_intento", () => {
  const fijo = seedPosicion(QUIZ, "ana", 3, "fijo_por_alumno", 7);
  const fijo2 = seedPosicion(QUIZ, "ana", 3, "fijo_por_alumno", 99);
  assert.equal(fijo, fijo2); // intento ignorado
  const porIntento = seedPosicion(QUIZ, "ana", 3, "por_intento", 7);
  assert.notEqual(fijo, porIntento);
});
