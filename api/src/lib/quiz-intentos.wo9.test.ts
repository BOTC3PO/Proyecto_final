/**
 * WO-9 — Tests del modo de presentación + tamaño de página en
 * `parseEvaluacionConfig` y `serializeEvaluacionConfig`.
 *
 * Verifica:
 *  - defaults por tipo (lista + 5) preservan el comportamiento previo.
 *  - valores explícitos se respetan.
 *  - valores inválidos caen al default del tipo.
 *  - el round-trip parse → serialize es estable.
 *  - mergeEvaluacionConfigIntoSettings no pisa los nuevos campos.
 */
import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFAULT_EVALUACION_CONFIG,
  PREGUNTAS_POR_PAGINA_DEFAULT,
  MODOS_PRESENTACION_VALIDOS,
  parseEvaluacionConfig,
  serializeEvaluacionConfig,
  mergeEvaluacionConfigIntoSettings,
  type ModoPresentacion,
} from "./quiz-intentos";

test("WO-9: defaults de modoPresentacion son `lista` en los 3 tipos", () => {
  assert.equal(DEFAULT_EVALUACION_CONFIG.practica.modoPresentacion, "lista");
  assert.equal(DEFAULT_EVALUACION_CONFIG.formal.modoPresentacion, "lista");
  assert.equal(DEFAULT_EVALUACION_CONFIG.competencia.modoPresentacion, "lista");
});

test("WO-9: default de preguntasPorPagina es 5 en los 3 tipos", () => {
  assert.equal(DEFAULT_EVALUACION_CONFIG.practica.preguntasPorPagina, PREGUNTAS_POR_PAGINA_DEFAULT);
  assert.equal(DEFAULT_EVALUACION_CONFIG.formal.preguntasPorPagina, PREGUNTAS_POR_PAGINA_DEFAULT);
  assert.equal(DEFAULT_EVALUACION_CONFIG.competencia.preguntasPorPagina, PREGUNTAS_POR_PAGINA_DEFAULT);
});

test("WO-9: parseEvaluacionConfig con settings vacío aplica defaults del tipo", () => {
  const cfg = parseEvaluacionConfig(null, "formal");
  assert.equal(cfg.modoPresentacion, "lista");
  assert.equal(cfg.preguntasPorPagina, PREGUNTAS_POR_PAGINA_DEFAULT);
});

test("WO-9: parseEvaluacionConfig respeta modoPresentacion explícito del settings", () => {
  const cfg = parseEvaluacionConfig(
    JSON.stringify({ modoPresentacion: "una_por_pantalla" }),
    "practica",
  );
  assert.equal(cfg.modoPresentacion, "una_por_pantalla");
});

test("WO-9: parseEvaluacionConfig respeta preguntasPorPagina explícito del settings", () => {
  const cfg = parseEvaluacionConfig(
    JSON.stringify({ preguntasPorPagina: 7 }),
    "practica",
  );
  assert.equal(cfg.preguntasPorPagina, 7);
});

test("WO-9: parseEvaluacionConfig con modoPresentacion inválido cae al default del tipo", () => {
  const cfg = parseEvaluacionConfig(
    JSON.stringify({ modoPresentacion: "no_es_un_modo" }),
    "formal",
  );
  assert.equal(cfg.modoPresentacion, "lista");
});

test("WO-9: parseEvaluacionConfig con preguntasPorPagina inválido cae al default del tipo", () => {
  const cfgInv1 = parseEvaluacionConfig(
    JSON.stringify({ preguntasPorPagina: "no_numero" }),
    "practica",
  );
  assert.equal(cfgInv1.preguntasPorPagina, PREGUNTAS_POR_PAGINA_DEFAULT);

  const cfgInv2 = parseEvaluacionConfig(
    JSON.stringify({ preguntasPorPagina: 0 }),
    "practica",
  );
  assert.equal(cfgInv2.preguntasPorPagina, PREGUNTAS_POR_PAGINA_DEFAULT);

  const cfgInv3 = parseEvaluacionConfig(
    JSON.stringify({ preguntasPorPagina: -3 }),
    "practica",
  );
  assert.equal(cfgInv3.preguntasPorPagina, PREGUNTAS_POR_PAGINA_DEFAULT);
});

test("WO-9: parseEvaluacionConfig con preguntasPorPagina string numérica es válido", () => {
  const cfg = parseEvaluacionConfig(
    JSON.stringify({ preguntasPorPagina: "8" }),
    "practica",
  );
  assert.equal(cfg.preguntasPorPagina, 8);
});

test("WO-9: round-trip parse → serialize preserva los nuevos campos", () => {
  for (const modo of MODOS_PRESENTACION_VALIDOS) {
    const original = JSON.stringify({
      type: "practica",
      modoPresentacion: modo,
      preguntasPorPagina: 3,
    });
    const cfg = parseEvaluacionConfig(original, "practica");
    assert.equal(cfg.modoPresentacion, modo);
    assert.equal(cfg.preguntasPorPagina, 3);
    const serialized = serializeEvaluacionConfig(cfg);
    assert.equal(serialized.modoPresentacion, modo);
    assert.equal(serialized.preguntasPorPagina, 3);
  }
});

test("WO-9: mergeEvaluacionConfigIntoSettings preserva campos previos", () => {
  const baseSettings = JSON.stringify({
    type: "practica",
    composition: { foo: "bar" },
  });
  const merged = mergeEvaluacionConfigIntoSettings(
    baseSettings,
    {
      ...DEFAULT_EVALUACION_CONFIG.practica,
      modoPresentacion: "paginado",
      preguntasPorPagina: 10,
    },
  );
  const parsed = JSON.parse(merged) as Record<string, unknown>;
  // El campo nuevo se persiste.
  assert.equal(parsed.modoPresentacion, "paginado");
  assert.equal(parsed.preguntasPorPagina, 10);
  // Los campos previos se preservan.
  assert.equal(parsed.type, "practica");
  assert.deepEqual(parsed.composition, { foo: "bar" });
});

test("WO-9: ModoPresentacion es uno de los 3 valores válidos", () => {
  // Guard contra cambios accidentales al union.
  const expected: ModoPresentacion[] = ["lista", "una_por_pantalla", "paginado"];
  assert.deepEqual(MODOS_PRESENTACION_VALIDOS, expected);
});
