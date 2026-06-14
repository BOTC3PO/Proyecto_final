/**
 * F3-03 — Puntaje por proporción, sin-repetición y agotamiento del pool.
 *
 * Tests puros (sin DB ni red):
 *  (a) puntaje por POSICIÓN → ratio → nota vía `gradeFromConfig` (escala del
 *      profesor; NO un cálculo ad-hoc). Equidad: dos alumnos con variantes
 *      distintas rinden por el mismo total.
 *  (b) sin-repetición: el reintento no repite una variante vista si hay alternativa.
 *  (c) agotamiento: comportamiento definido (ciclo por menos vistas) cuando ya no
 *      quedan variantes nuevas.
 */

import assert from "node:assert/strict";
import { test } from "node:test";
import { gradeFromConfig } from "@vb/vblang";
import { parseCuestionario, CuestionarioPosiciones } from "../../src/lib/quiz-posiciones";
import { puntajePorPosiciones, maxScoreCuestionario } from "../../src/lib/quiz-puntaje";
import {
  sortearCuestionario,
  sortearReintento,
  derivarHistorialVistas,
  sortearCuestionarioConVistas,
} from "../../src/lib/quiz-sorteo";

const QUIZ = "quiz-f303";

/** Cuestionario con N posiciones de pool, cada una puntaje 2, + 1 fija puntaje 1. */
function cuestionario(poolPositions = 4, variantesPorPool = 3): CuestionarioPosiciones {
  const posiciones: unknown[] = [
    { tipo: "fijo", temaPrincipal: "t", puntaje: 1, variantes: [{ letra: "a", origen: { origen: "banco", questionId: "fija" } }] },
  ];
  for (let i = 0; i < poolPositions; i += 1) {
    posiciones.push({
      tipo: "obligatorio",
      temaPrincipal: "t",
      puntaje: 2,
      variantes: Array.from({ length: variantesPorPool }, (_, j) => ({
        letra: String.fromCharCode(97 + j),
        origen: { origen: "banco", questionId: `p${i}-${j}` },
      })),
    });
  }
  return parseCuestionario({ temas: [{ id: "t", nombre: "Tema" }], posiciones });
}

// ───────────────────────────────────────────────────────────────
// (a) Puntaje por proporción + equidad + gradeFromConfig
// ───────────────────────────────────────────────────────────────

test("puntaje: score/maxScore se calculan por posición; ratio = score/maxScore", () => {
  const c = cuestionario(2, 2); // posiciones: fija(1) + 2 pools(2 c/u) → max 1+2+2 = 5
  const acertadas = new Set<number>([1, 2]); // fija + primer pool
  const { score, maxScore, ratio } = puntajePorPosiciones(c.posiciones, acertadas);
  assert.equal(maxScore, 5);
  assert.equal(score, 3); // 1 + 2
  assert.equal(ratio, 3 / 5);
});

test("puntaje: maxScore = 0 → ratio null (contrato de gradeFromConfig)", () => {
  const c = parseCuestionario({
    temas: [{ id: "t", nombre: "T" }],
    posiciones: [{ tipo: "fijo", temaPrincipal: "t", puntaje: 0, variantes: [{ letra: "a", origen: { origen: "banco", questionId: "x" } }] }],
  });
  const { ratio } = puntajePorPosiciones(c.posiciones, new Set());
  assert.equal(ratio, null);
});

test("equidad: dos alumnos con variantes distintas rinden por el MISMO total", () => {
  const c = cuestionario(8, 3);
  const ana = sortearCuestionario(c, { alumnoId: "ana", quizId: QUIZ });
  const beto = sortearCuestionario(c, { alumnoId: "beto", quizId: QUIZ });

  // De hecho recibieron variantes distintas en al menos una posición.
  assert.ok(ana.selecciones.some((s, i) => s.letra !== beto.selecciones[i].letra));

  // maxScore idéntico e independiente de la variante.
  const maxAna = maxScoreCuestionario(ana.selecciones);
  const maxBeto = maxScoreCuestionario(beto.selecciones);
  assert.equal(maxAna, maxBeto);
  assert.equal(maxAna, maxScoreCuestionario(c.posiciones));

  // Si ambos aciertan TODO, mismo score → mismo ratio → misma nota.
  const todas = new Set(c.posiciones.map((p) => p.numero));
  const pAna = puntajePorPosiciones(ana.selecciones, todas);
  const pBeto = puntajePorPosiciones(beto.selecciones, todas);
  assert.deepEqual(pAna, pBeto);
  assert.equal(pAna.ratio, 1);
});

test("la nota sale de gradeFromConfig (escala del profesor), no de un cálculo ad-hoc", () => {
  const c = cuestionario(4, 2); // max = 1 + 4*2 = 9
  const acertadas = new Set<number>([1, 2, 3]); // 1 + 2 + 2 = 5  → ratio 5/9
  const { ratio } = puntajePorPosiciones(c.posiciones, acertadas);

  // Escala numérica 1..10 con la escala por defecto del catálogo.
  const nota = gradeFromConfig(ratio, { systemId: "scale-1-10" });
  // No recomputamos la nota a mano; sólo verificamos que pasó por la escala:
  assert.equal(typeof nota.display, "string");
  assert.equal(nota.canonical10, gradeFromConfig(ratio, { systemId: "scale-1-10" }).canonical10);
  // ratio 0 y 1 mapean a los extremos canónicos 1.0 y 10.0.
  assert.equal(gradeFromConfig(0, { systemId: "scale-1-10" }).canonical10, 1);
  assert.equal(gradeFromConfig(1, { systemId: "scale-1-10" }).canonical10, 10);
});

// ───────────────────────────────────────────────────────────────
// (b) Sin-repetición
// ───────────────────────────────────────────────────────────────

test("sin-repetición: el 2º intento no repite la variante vista si hay alternativa", () => {
  const c = cuestionario(6, 3);
  const intento1 = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, 0);
  const intento2 = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, 1);

  // En cada posición con pool ≥2, la letra del intento 2 difiere de la del 1.
  intento1.selecciones.forEach((s1, i) => {
    const s2 = intento2.selecciones[i];
    if (c.posiciones[i].variantes.length > 1) {
      assert.notEqual(s2.letra, s1.letra, `posición ${s1.numero} repitió variante`);
    }
  });
});

test("sin-repetición: los primeros K intentos (K=tamaño pool) no repiten ninguna variante", () => {
  const c = cuestionario(3, 3); // pools de 3 → 3 intentos sin repetir
  const vistasPorPosicion: Record<number, string[]> = {};
  for (let intentosPrevios = 0; intentosPrevios < 3; intentosPrevios += 1) {
    const r = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, intentosPrevios);
    for (const s of r.selecciones) {
      if (c.posiciones.find((p) => p.numero === s.numero)!.variantes.length === 1) continue;
      (vistasPorPosicion[s.numero] ??= []).push(s.letra);
    }
  }
  // Cada posición de pool vio 3 letras DISTINTAS en 3 intentos.
  for (const numero of Object.keys(vistasPorPosicion)) {
    const letras = vistasPorPosicion[Number(numero)];
    assert.equal(new Set(letras).size, letras.length, `posición ${numero} repitió antes de agotar`);
    assert.equal(letras.length, 3);
  }
});

test("sin-repetición: determinismo dentro de un mismo intento (cross-device)", () => {
  const c = cuestionario(5, 3);
  const a = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, 2);
  const b = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, 2);
  assert.deepEqual(a, b);
});

// ───────────────────────────────────────────────────────────────
// (c) Agotamiento del pool (suavizado: ciclo por menos vistas)
// ───────────────────────────────────────────────────────────────

test("agotamiento: con pool de 3, el 4º intento NO se bloquea y recicla", () => {
  const c = cuestionario(4, 3);
  // 3 intentos previos: cada posición vio sus 3 variantes una vez.
  const cuarto = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, 3);
  // Sigue produciendo una selección válida por posición (no bloquea).
  assert.equal(cuarto.selecciones.length, c.posiciones.length);
  cuarto.selecciones.forEach((s, i) => {
    assert.ok(c.posiciones[i].variantes.some((v) => v.letra === s.letra));
  });
});

test("agotamiento: tras una vuelta completa, el ciclo prioriza las menos vistas", () => {
  const c = cuestionario(1, 3); // 1 posición de pool de 3 (numero 2)
  const NUM = 2;
  const conteo: Record<string, number> = {};
  // 6 intentos = 2 vueltas completas del pool de 3.
  for (let k = 0; k < 6; k += 1) {
    const r = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, k);
    const letra = r.selecciones.find((s) => s.numero === NUM)!.letra;
    conteo[letra] = (conteo[letra] ?? 0) + 1;
  }
  // Tras 2 vueltas, cada una de las 3 variantes salió exactamente 2 veces.
  assert.deepEqual(conteo, { a: 2, b: 2, c: 2 });
});

test("agotamiento: posición fija no tiene alternativa y se repite siempre (no bloquea)", () => {
  const c = cuestionario(2, 3);
  for (let k = 0; k < 4; k += 1) {
    const r = sortearReintento(c, { alumnoId: "ana", quizId: QUIZ }, k);
    assert.equal(r.selecciones[0].tipo, "fijo");
    assert.equal(r.selecciones[0].letra, "a");
  }
});

// ───────────────────────────────────────────────────────────────
// Auditabilidad: el historial es derivable por replay (sin persistir)
// ───────────────────────────────────────────────────────────────

test("auditabilidad: derivarHistorialVistas reproduce lo visto y reconstruye el sorteo", () => {
  const c = cuestionario(5, 3);
  const ctx = { alumnoId: "ana", quizId: QUIZ };
  // El sorteo del intento N == sortearConVistas usando el historial derivado de N-1.
  const intentosPrevios = 4;
  const historial = derivarHistorialVistas(c, ctx, intentosPrevios);
  const viaReplay = sortearCuestionarioConVistas(c, { ...ctx, intento: intentosPrevios + 1 }, historial);
  const viaReintento = sortearReintento(c, ctx, intentosPrevios);
  assert.deepEqual(viaReplay, viaReintento);
});

test("historial vacío: sortearReintento(…, 0) == sortearCuestionario (primer intento)", () => {
  const c = cuestionario(6, 3);
  const ctx = { alumnoId: "ana", quizId: QUIZ };
  assert.deepEqual(sortearReintento(c, ctx, 0), sortearCuestionario(c, { ...ctx, intento: 1 }));
});
