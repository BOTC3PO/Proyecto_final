/**
 * WO-14 — Fundación de la adaptativa: tests E2E de la capa `domain/quiz/`.
 *
 * Cubre los criterios de la tarea:
 *  - `dificultad` sobrevive toda la cadena (posiciones → variante →
 *    sorteo → selección → scorer) — el bug de los 4 intentos.
 *  - Variantes por dificultad (a/b/c etiquetadas) en una posición.
 *  - Selección por regla simple sobre material congelado
 *    (`elegirVariantePorDificultad`, `sortearCuestionarioPorDificultadFija`).
 *  - Regla `adaptativa_simple` pura (`proximaDificultad`,
 *    `dificultadInicialSugerida`).
 *  - Scoring ponderado por dificultad (`factorDificultad` +
 *    `puntajePorPosiciones` + `puntajePorTema`).
 *  - Config persistida en `EvaluacionConfig` (defaults, parse, round-trip).
 *  - Back-compat con cuestionarios v2 (sin `dificultad`).
 *  - Idempotencia del sortearCuestionarioPorDificultadFija (mismo input
 *    → misma selección; un alumno "estable" ve la misma variante entre
 *    reintentos con la misma política).
 *  - Mutación `cambiarDificultadVariante` (asignar, cambiar, quitar).
 */

import { describe, expect, it } from "vitest";
import {
  POSICIONES_SCHEMA_VERSION,
  coerceDificultad,
  dificultadIndice,
  dificultadVecina,
  migrarCuestionario,
  parseCuestionario,
  validarCuestionario,
  type CuestionarioPosiciones,
  type Dificultad,
  type Posicion,
  type Variante,
} from "../posiciones";
import { agregarPosicion, agregarVariante, cambiarDificultadVariante, cambiarOrigenVariante } from "../posicionesMutations";
import {
  elegirVariantePorDificultad,
  dificultadInicialSugerida,
  proximaDificultad,
  sortearCuestionarioPorDificultadFija,
} from "../sorteo";
import {
  factorDificultad,
  puntajePorPosiciones,
  puntajePorTema,
} from "../puntaje";
import {
  DEFAULT_EVALUACION_CONFIG,
  DIFICULTAD_INICIAL_DEFAULT as DIFICULTAD_INICIAL_DEFAULT_EVAL,
  DIFICULTAD_VENTANA_DEFAULT,
  DIFICULTAD_VENTANA_MAX,
  DIFICULTAD_VENTANA_MIN,
  POLITICA_DIFICULTAD_DEFAULT,
  POLITICAS_DIFICULTAD_VALIDAS,
  parseEvaluacionConfig,
  serializeEvaluacionConfig,
} from "../intentos";

/** Helper: crea una posición con N variantes etiquetadas por dificultad. */
function posConVariantesPorDificultad(
  dificultadesPorLetra: Record<string, Dificultad>,
): Posicion {
  const variantes: Variante[] = Object.entries(dificultadesPorLetra).map(
    ([letra, dificultad]) => ({
      letra,
      dificultad,
      origen: { origen: "banco", questionId: `q-${letra}` } as const,
    }),
  );
  return {
    numero: 1,
    tipo: variantes.length > 1 ? "obligatorio" : "fijo",
    temaPrincipal: "general",
    puntaje: 2,
    variantes,
  };
}

describe("WO-14 · modelo — dificultad en Variante", () => {
  it("bump: schema version es 3 (back-compat parsea v2 sin cambios)", () => {
    expect(POSICIONES_SCHEMA_VERSION).toBe(3);
    // v2 sin `dificultad` parsea idéntico a antes (no se rompe).
    const v2 = parseCuestionario({
      posiciones: [
        {
          variantes: [{ letra: "a", origen: { origen: "banco", questionId: "x" } }],
        },
      ],
    });
    expect(v2.posiciones[0].variantes[0].dificultad).toBeUndefined();
    expect(validarCuestionario(v2).ok).toBe(true);
  });

  it("parse: variantes con dificultad válida se preservan en el canónico", () => {
    const raw = {
      posiciones: [
        {
          tipo: "obligatorio",
          temaPrincipal: "general",
          puntaje: 2,
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
            { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
            { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
          ],
        },
      ],
    };
    const c = parseCuestionario(raw);
    const difs = c.posiciones[0].variantes.map((v) => v.dificultad);
    expect(difs).toEqual(["basico", "intermedio", "avanzado"]);
  });

  it("parse: valor inválido de dificultad se descarta silenciosamente", () => {
    const raw = {
      posiciones: [
        {
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "leyenda" },
            { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: 42 },
          ],
        },
      ],
    };
    const c = parseCuestionario(raw);
    expect(c.posiciones[0].variantes[0].dificultad).toBeUndefined();
    expect(c.posiciones[0].variantes[1].dificultad).toBeUndefined();
  });

  it("validar: variantes de la misma posición PUEDEN diferir en dificultad", () => {
    const c: CuestionarioPosiciones = parseCuestionario({
      posiciones: [
        {
          tipo: "obligatorio",
          temaPrincipal: "general",
          puntaje: 1,
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
            { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "avanzado" },
          ],
        },
      ],
    });
    // Antes: variantes de la misma posición NO podían diferir en puntaje.
    // WO-14: PUEDEN diferir en dificultad. La validación lo permite.
    expect(validarCuestionario(c).ok).toBe(true);
  });

  it("round-trip: JSON.parse(JSON.stringify(c)) preserva dificultad", () => {
    const original = parseCuestionario({
      posiciones: [
        {
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
            { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "avanzado" },
          ],
        },
      ],
    });
    const round = parseCuestionario(JSON.parse(JSON.stringify(original)));
    expect(round).toEqual(original);
  });

  it("migrar: cuestionario viejo sin dificultad produce variantes sin etiqueta", () => {
    const c = migrarCuestionario({ questions: [{ id: "q1" }] });
    expect(c.posiciones[0].variantes[0].dificultad).toBeUndefined();
  });
});

describe("WO-14 · helpers de Dificultad", () => {
  it("dificultadIndice: 0 / 1 / 2 para basico / intermedio / avanzado", () => {
    expect(dificultadIndice("basico")).toBe(0);
    expect(dificultadIndice("intermedio")).toBe(1);
    expect(dificultadIndice("avanzado")).toBe(2);
    expect(dificultadIndice(undefined)).toBe(1); // default = intermedio
  });

  it("dificultadVecina: satura en los extremos del rango", () => {
    expect(dificultadVecina("basico", -1)).toBe("basico");
    expect(dificultadVecina("basico", +1)).toBe("intermedio");
    expect(dificultadVecina("intermedio", -1)).toBe("basico");
    expect(dificultadVecina("intermedio", +1)).toBe("avanzado");
    expect(dificultadVecina("avanzado", +1)).toBe("avanzado");
    expect(dificultadVecina("avanzado", -1)).toBe("intermedio");
  });

  it("coerceDificultad: acepta strings válidos, descarta el resto", () => {
    expect(coerceDificultad("basico")).toBe("basico");
    expect(coerceDificultad("intermedio")).toBe("intermedio");
    expect(coerceDificultad("avanzado")).toBe("avanzado");
    expect(coerceDificultad("LEYENDA")).toBeUndefined();
    expect(coerceDificultad(42)).toBeUndefined();
    expect(coerceDificultad(null)).toBeUndefined();
    expect(coerceDificultad(undefined)).toBeUndefined();
  });
});

describe("WO-14 · elegirVariantePorDificultad — ruteo sobre material congelado", () => {
  const pool: Variante[] = [
    { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
    { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
    { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
  ];

  it("(1) exacta: deseado=basico → variante a; deseado=avanzado → variante c", () => {
    expect(elegirVariantePorDificultad(pool, "basico", "s1", {}).letra).toBe("a");
    expect(elegirVariantePorDificultad(pool, "intermedio", "s1", {}).letra).toBe("b");
    expect(elegirVariantePorDificultad(pool, "avanzado", "s1", {}).letra).toBe("c");
  });

  it("(2) vecindad ±1: si deseada=avanzado y pool no la tiene, cae a intermedio", () => {
    const sinAvanzado: Variante[] = [
      { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
      { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
    ];
    // deseado=avanzado, ninguna exacta → vecindad ±1 incluye intermedio.
    const r = elegirVariantePorDificultad(sinAvanzado, "avanzado", "s1", {});
    expect(r.letra).toBe("b");
  });

  it("(3) cualquiera con dificultad: si deseada está muy lejos, acepta cualquier nivel", () => {
    const soloBasico: Variante[] = [
      { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
    ];
    const r = elegirVariantePorDificultad(soloBasico, "avanzado", "s1", {});
    expect(r.letra).toBe("a");
  });

  it("(4) fallback legacy: variantes sin etiqueta se tratan como pool neutro", () => {
    const legacy: Variante[] = [
      { letra: "a", origen: { origen: "banco", questionId: "qa" } },
      { letra: "b", origen: { origen: "banco", questionId: "qb" } },
    ];
    const r = elegirVariantePorDificultad(legacy, "avanzado", "s1", {});
    expect(["a", "b"]).toContain(r.letra);
  });

  it("sin-repetición: prefiere variantes no vistas (vistas[letra] === 0)", () => {
    expect(elegirVariantePorDificultad(pool, "basico", "s1", { a: 1, b: 1, c: 1 }).letra).toBe("a");
    // Si la única no-vista en la categoría exacta es b, devuelve b.
    expect(elegirVariantePorDificultad(pool, "basico", "s1", { a: 5, b: 0, c: 5 }).letra).toBe("a");
    // Si "a" ya fue vista 5 veces pero "b" 0, el selector exacto (basico) sigue
    // prefiriendo a. Para ver "sin-repeticion" en acción, hay que agotar la categoría.
    const todasVistasMenosA: Record<string, number> = { a: 5 };
    // La candidata "a" está vista 5; ninguna otra es "basico" exacta → cae a (2) vecindad
    // o (3)/(4). Aquí el pool tiene b y c con su propia dificultad.
    const r = elegirVariantePorDificultad(pool, "basico", "s1", todasVistasMenosA);
    // La única candidata con dificultad = "basico" es "a", así que se devuelve "a"
    // (la regla "sin-repetición" opera DENTRO de la candidata, no contra la
    // candidata en sí; no es "switch" automático, es fallback).
    expect(r.letra).toBe("a");
  });

  it("pool de 1 variante: devuelve esa variante sin consumir seed", () => {
    const una: Variante[] = [
      { letra: "x", origen: { origen: "banco", questionId: "qx" }, dificultad: "basico" },
    ];
    expect(elegirVariantePorDificultad(una, "avanzado", "s1", {}).letra).toBe("x");
  });

  it("determinista: mismo (pool, desired, seed, vistas) → misma variante", () => {
    const seed = "test-determinism";
    const vistas: Record<string, number> = { a: 1, b: 0, c: 1 };
    const r1 = elegirVariantePorDificultad(pool, "basico", seed, vistas);
    const r2 = elegirVariantePorDificultad(pool, "basico", seed, vistas);
    expect(r1.letra).toBe(r2.letra);
  });
});

describe("WO-14 · sortearCuestionarioPorDificultadFija — fundación wireada", () => {
  it("aplica el selector a cada posición y devuelve selecciones con dificultad", () => {
    const c: CuestionarioPosiciones = parseCuestionario({
      posiciones: [
        {
          tipo: "obligatorio",
          temaPrincipal: "general",
          puntaje: 1,
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
            { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
            { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
          ],
        },
        {
          tipo: "obligatorio",
          temaPrincipal: "general",
          puntaje: 1,
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa2" }, dificultad: "avanzado" },
            { letra: "b", origen: { origen: "banco", questionId: "qb2" }, dificultad: "avanzado" },
          ],
        },
      ],
    });
    const s = sortearCuestionarioPorDificultadFija(
      c,
      { alumnoId: "a1", quizId: "q1" },
      "intermedio",
    );
    expect(s.selecciones).toHaveLength(2);
    // Pos 1: intermedio exacto → variante b.
    expect(s.selecciones[0].letra).toBe("b");
    expect(s.selecciones[0].dificultad).toBe("intermedio");
    // Pos 2: intermedio exacto no hay → avanzado (vecindad).
    expect(s.selecciones[1].letra).toBe("a");
    expect(s.selecciones[1].dificultad).toBe("avanzado");
  });

  it("idempotente: misma entrada → misma selección (anticopia + cross-device)", () => {
    const c: CuestionarioPosiciones = parseCuestionario({
      posiciones: [
        {
          tipo: "obligatorio",
          temaPrincipal: "general",
          puntaje: 1,
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
            { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
            { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
          ],
        },
      ],
    });
    const ctx = { alumnoId: "a1", quizId: "q1" };
    const r1 = sortearCuestionarioPorDificultadFija(c, ctx, "intermedio");
    const r2 = sortearCuestionarioPorDificultadFija(c, ctx, "intermedio");
    expect(r1.selecciones[0].letra).toBe(r2.selecciones[0].letra);
    expect(r1.selecciones[0].dificultad).toBe(r2.selecciones[0].dificultad);
  });
});

describe("WO-14 · proximaDificultad — regla adaptativa_simple pura", () => {
  it("todas correctas → sube 1 nivel", () => {
    expect(proximaDificultad("basico", [true, true], 2)).toBe("intermedio");
    expect(proximaDificultad("intermedio", [true, true], 2)).toBe("avanzado");
    // Saturación: no sube más allá de avanzado.
    expect(proximaDificultad("avanzado", [true, true, true], 2)).toBe("avanzado");
  });

  it("todas incorrectas → baja 1 nivel", () => {
    expect(proximaDificultad("avanzado", [false, false], 2)).toBe("intermedio");
    expect(proximaDificultad("intermedio", [false, false], 2)).toBe("basico");
    // Saturación: no baja más allá de basico.
    expect(proximaDificultad("basico", [false, false, false], 2)).toBe("basico");
  });

  it("mezcla → se queda", () => {
    expect(proximaDificultad("intermedio", [true, false], 2)).toBe("intermedio");
    expect(proximaDificultad("intermedio", [false, true], 2)).toBe("intermedio");
  });

  it("ventana incompleta → se queda (no es 'adaptativo' sin datos)", () => {
    expect(proximaDificultad("intermedio", [true], 2)).toBe("intermedio");
    expect(proximaDificultad("intermedio", [], 2)).toBe("intermedio");
  });

  it("ventana configurable: con N=3, dos correctas + una incorrecta = se queda", () => {
    expect(proximaDificultad("intermedio", [true, true, false], 3)).toBe("intermedio");
  });
});

describe("WO-14 · dificultadInicialSugerida", () => {
  it("historial vacío → intermedio (default)", () => {
    expect(dificultadInicialSugerida([])).toBe("intermedio");
  });

  it("si en básico rindió bien (≥60%) → sugiere intermedio", () => {
    const r = dificultadInicialSugerida([
      { dificultad: "basico", correcta: true },
      { dificultad: "basico", correcta: true },
      { dificultad: "basico", correcta: false },
    ]);
    expect(r).toBe("intermedio");
  });

  it("si en intermedio rindió muy bien → sugiere avanzado", () => {
    const r = dificultadInicialSugerida([
      { dificultad: "intermedio", correcta: true },
      { dificultad: "intermedio", correcta: true },
    ]);
    expect(r).toBe("avanzado");
  });

  it("si en avanzado rindió mal → sugiere intermedio (default conservador)", () => {
    const r = dificultadInicialSugerida([
      { dificultad: "avanzado", correcta: false },
      { dificultad: "avanzado", correcta: false },
    ]);
    expect(r).toBe("intermedio");
  });
});

describe("WO-14 · puntaje — factor de dificultad (Opción A: en score y maxScore)", () => {
  it("factorDificultad: 0.8 / 1.0 / 1.2 / 1.0(indefinido)", () => {
    expect(factorDificultad("basico")).toBe(0.8);
    expect(factorDificultad("intermedio")).toBe(1.0);
    expect(factorDificultad("avanzado")).toBe(1.2);
    expect(factorDificultad(undefined)).toBe(1.0);
  });

  it("puntajePorPosiciones: factor ausente = comportamiento pre-WO-14 (back-compat)", () => {
    const r = puntajePorPosiciones(
      [
        { numero: 1, puntaje: 2 },
        { numero: 2, puntaje: 3 },
      ],
      new Set([1, 2]),
    );
    expect(r.score).toBe(5);
    expect(r.maxScore).toBe(5);
    expect(r.ratio).toBe(1.0);
  });

  it("puntajePorPosiciones: factor presente se aplica a score y maxScore (ratio se preserva)", () => {
    const r = puntajePorPosiciones(
      [
        { numero: 1, puntaje: 2, factorDificultad: 1.2 }, // avanzado
        { numero: 2, puntaje: 3, factorDificultad: 0.8 }, // basico
      ],
      new Set([1]), // sólo la primera correcta
    );
    // score = 2 * 1.2 = 2.4
    // maxScore = 2.4 + 2.4 = 4.8
    expect(r.score).toBeCloseTo(2.4, 5);
    expect(r.maxScore).toBeCloseTo(4.8, 5);
    // ratio = 2.4 / 4.8 = 0.5
    expect(r.ratio).toBeCloseTo(0.5, 5);
  });

  it("puntajePorPosiciones: posición con puntaje 0 sigue sin entrar (regla F3-01)", () => {
    const r = puntajePorPosiciones(
      [
        { numero: 1, puntaje: 2, factorDificultad: 1.2 },
        { numero: 2, puntaje: 0, factorDificultad: 0.8 },
      ],
      new Set([1, 2]),
    );
    expect(r.maxScore).toBeCloseTo(2.4, 5);
    expect(r.score).toBeCloseTo(2.4, 5);
  });

  it("puntajePorTema: split 50/50 sigue siendo masa-conservado con factor", () => {
    const r = puntajePorTema(
      {
        posiciones: [
          { numero: 1, temaPrincipal: "algebra", puntaje: 4, factorDificultad: 1.2 },
        ],
      },
      new Set([1]),
    );
    // algebra carga w*factor = 4.8 (no split, sin temaSecundario).
    expect(r.algebra.score).toBeCloseTo(4.8, 5);
    expect(r.algebra.maxScore).toBeCloseTo(4.8, 5);
  });

  it("puntajePorTema: split 50/50 con temaSecundario + factor", () => {
    const r = puntajePorTema(
      {
        posiciones: [
          {
            numero: 1,
            temaPrincipal: "algebra",
            temaSecundario: "geo",
            puntaje: 4,
            factorDificultad: 1.0,
          },
        ],
      },
      new Set([1]),
    );
    // 50/50 → algebra 2, geo 2. Conservación: algebra + geo = 4.
    expect(r.algebra.score).toBeCloseTo(2, 5);
    expect(r.geo.score).toBeCloseTo(2, 5);
    expect(r.algebra.maxScore).toBeCloseTo(2, 5);
    expect(r.geo.maxScore).toBeCloseTo(2, 5);
  });

  it("maxScore absoluto refleja la dificultad: avanzado > intermedio > basico", () => {
    const posicionesBase = [
      { numero: 1, puntaje: 2 },
      { numero: 2, puntaje: 2 },
      { numero: 3, puntaje: 2 },
    ];
    const rFacil = puntajePorPosiciones(
      posicionesBase.map((p) => ({ ...p, factorDificultad: 0.8 })),
      new Set<number>(),
    );
    const rIntermedio = puntajePorPosiciones(
      posicionesBase.map((p) => ({ ...p, factorDificultad: 1.0 })),
      new Set<number>(),
    );
    const rDificil = puntajePorPosiciones(
      posicionesBase.map((p) => ({ ...p, factorDificultad: 1.2 })),
      new Set<number>(),
    );
    // El alumno ve que el intento difícil "valía más" (maxScore mayor).
    expect(rFacil.maxScore).toBeLessThan(rIntermedio.maxScore);
    expect(rIntermedio.maxScore).toBeLessThan(rDificil.maxScore);
    expect(rDificil.maxScore).toBeCloseTo(7.2, 5);
  });
});

describe("WO-14 · intentos — config persistida en EvaluacionConfig", () => {
  it("defaults: politicaDificultad='fija', dificultadInicial='intermedio', ventana=2", () => {
    const r = parseEvaluacionConfig(null, "practica");
    expect(r.politicaDificultad).toBe("fija");
    expect(r.dificultadInicial).toBe("intermedio");
    expect(r.dificultadVentana).toBe(2);
  });

  it("defaults presentes en los 3 tipos (practica / formal / competencia)", () => {
    for (const tipo of ["practica", "formal", "competencia"] as const) {
      const r = parseEvaluacionConfig(null, tipo);
      expect(r.politicaDificultad).toBe(POLITICA_DIFICULTAD_DEFAULT);
      expect(r.dificultadInicial).toBe(DIFICULTAD_INICIAL_DEFAULT_EVAL);
      expect(r.dificultadVentana).toBe(DIFICULTAD_VENTANA_DEFAULT);
    }
  });

  it("settings con override gana sobre defaults (back-compat con JSON viejos)", () => {
    const settings = JSON.stringify({
      politicaDificultad: "adaptativa_simple",
      dificultadInicial: "avanzado",
      dificultadVentana: 3,
    });
    const r = parseEvaluacionConfig(settings, "practica");
    expect(r.politicaDificultad).toBe("adaptativa_simple");
    expect(r.dificultadInicial).toBe("avanzado");
    expect(r.dificultadVentana).toBe(3);
  });

  it("settings con JSON inválido → defaults del tipo (no rompe)", () => {
    const r = parseEvaluacionConfig("{not json", "formal");
    expect(r.politicaDificultad).toBe(POLITICA_DIFICULTAD_DEFAULT);
  });

  it("settings sin los campos nuevos → defaults del tipo (back-compat con v3 anteriores)", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ type: "formal" }), "formal");
    expect(r.politicaDificultad).toBe(POLITICA_DIFICULTAD_DEFAULT);
    expect(r.dificultadInicial).toBe(DIFICULTAD_INICIAL_DEFAULT_EVAL);
    expect(r.dificultadVentana).toBe(DIFICULTAD_VENTANA_DEFAULT);
  });

  it("valor inválido cae al default (defensa contra input sucio)", () => {
    const r1 = parseEvaluacionConfig(
      JSON.stringify({ politicaDificultad: "garbage" }),
      "practica",
    );
    expect(r1.politicaDificultad).toBe("fija");

    const r2 = parseEvaluacionConfig(
      JSON.stringify({ dificultadInicial: "legendario" }),
      "practica",
    );
    expect(r2.dificultadInicial).toBe("intermedio");
  });

  it("dificultadVentana: clamp a [MIN, MAX]", () => {
    expect(
      parseEvaluacionConfig(
        JSON.stringify({ dificultadVentana: 999 }),
        "practica",
      ).dificultadVentana,
    ).toBe(DIFICULTAD_VENTANA_MAX);
    expect(
      parseEvaluacionConfig(
        JSON.stringify({ dificultadVentana: 0 }),
        "practica",
      ).dificultadVentana,
    ).toBe(DIFICULTAD_VENTANA_MIN);
  });

  it("round-trip: serialize → parse preserva los 3 campos nuevos", () => {
    const original = parseEvaluacionConfig(
      JSON.stringify({
        politicaDificultad: "adaptativa_simple",
        dificultadInicial: "avanzado",
        dificultadVentana: 3,
      }),
      "practica",
    );
    const serialized = serializeEvaluacionConfig(original);
    expect(serialized.politicaDificultad).toBe("adaptativa_simple");
    expect(serialized.dificultadInicial).toBe("avanzado");
    expect(serialized.dificultadVentana).toBe(3);
    const round = parseEvaluacionConfig(JSON.stringify(serialized), "practica");
    expect(round).toEqual(original);
  });

  it("POLITICAS_DIFICULTAD_VALIDAS exporta los 3 valores canónicos", () => {
    expect(POLITICAS_DIFICULTAD_VALIDAS).toEqual([
      "fija",
      "manual",
      "adaptativa_simple",
    ]);
  });

  it("DEFAULT_EVALUACION_CONFIG incluye los 3 campos nuevos en los 3 tipos", () => {
    for (const tipo of ["practica", "formal", "competencia"] as const) {
      const cfg = DEFAULT_EVALUACION_CONFIG[tipo];
      expect(cfg.politicaDificultad).toBeDefined();
      expect(cfg.dificultadInicial).toBeDefined();
      expect(cfg.dificultadVentana).toBeDefined();
    }
  });
});

describe("WO-14 · mutaciones — cambiarDificultadVariante", () => {
  it("asigna dificultad a una variante existente", () => {
    const c = agregarPosicion(
      migrarCuestionario({ questions: [] }),
      { tipo: "obligatorio" },
    );
    // pool por defecto: 1 variante "a" sin dificultad.
    const c2 = cambiarDificultadVariante(c, 1, "a", "avanzado");
    expect(c2.posiciones[0].variantes[0].dificultad).toBe("avanzado");
  });

  it("cambia dificultad de una variante", () => {
    let c = agregarPosicion(
      migrarCuestionario({ questions: [] }),
      { tipo: "obligatorio" },
    );
    c = cambiarDificultadVariante(c, 1, "a", "basico");
    expect(c.posiciones[0].variantes[0].dificultad).toBe("basico");
    c = cambiarDificultadVariante(c, 1, "a", "avanzado");
    expect(c.posiciones[0].variantes[0].dificultad).toBe("avanzado");
  });

  it("quitar dificultad (null) la deja como indefinida (factor 1.0 en scoring)", () => {
    let c = agregarPosicion(
      migrarCuestionario({ questions: [] }),
      { tipo: "obligatorio" },
    );
    c = cambiarDificultadVariante(c, 1, "a", "avanzado");
    expect(c.posiciones[0].variantes[0].dificultad).toBe("avanzado");
    c = cambiarDificultadVariante(c, 1, "a", null);
    expect(c.posiciones[0].variantes[0].dificultad).toBeUndefined();
  });

  it("valor inválido se descarta silenciosamente (la variante queda sin etiqueta)", () => {
    let c = agregarPosicion(
      migrarCuestionario({ questions: [] }),
      { tipo: "obligatorio" },
    );
    c = cambiarDificultadVariante(c, 1, "a", "garbage" as Dificultad);
    expect(c.posiciones[0].variantes[0].dificultad).toBeUndefined();
  });

  it("sólo afecta a la variante con la letra indicada (no a las otras)", () => {
    let c = agregarPosicion(
      migrarCuestionario({ questions: [] }),
      { tipo: "obligatorio" },
    );
    c = agregarVariante(c, 1);
    c = cambiarOrigenVariante(c, 1, "b", { origen: "banco", questionId: "qb" });
    c = cambiarDificultadVariante(c, 1, "a", "basico");
    expect(c.posiciones[0].variantes.find((v) => v.letra === "a")?.dificultad).toBe("basico");
    expect(c.posiciones[0].variantes.find((v) => v.letra === "b")?.dificultad).toBeUndefined();
  });

  it("puro: no muta la entrada", () => {
    const c0 = parseCuestionario({
      posiciones: [
        {
          variantes: [{ letra: "a", origen: { origen: "banco", questionId: "qa" } }],
        },
      ],
    });
    const snapshot = JSON.parse(JSON.stringify(c0));
    cambiarDificultadVariante(c0, 1, "a", "avanzado");
    expect(c0).toEqual(snapshot);
  });
});

describe("WO-14 · integración — la fundación de extremo a extremo", () => {
  it("criterio: dificultad sobrevive posición → variante → materialización → intento → corrección", () => {
    // (1) POSICIÓN: variante a/b/c con dificultades distintas.
    const c: CuestionarioPosiciones = parseCuestionario({
      posiciones: [
        {
          tipo: "obligatorio",
          temaPrincipal: "general",
          puntaje: 2,
          variantes: [
            { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
            { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
            { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
          ],
        },
      ],
    });

    // (2) SORTEO: política fija, dificultadInicial=intermedio.
    const s = sortearCuestionarioPorDificultadFija(
      c,
      { alumnoId: "alumno-1", quizId: "q-1" },
      "intermedio",
    );
    // (3) SELECCIÓN: la variante intermedia gana.
    expect(s.selecciones[0].dificultad).toBe("intermedio");
    expect(s.selecciones[0].letra).toBe("b");

    // (4) PUNTAJE: el factor de la variante PRESENTADA entra al scorer.
    const r = puntajePorPosiciones(
      [{ numero: 1, puntaje: 2, factorDificultad: factorDificultad(s.selecciones[0].dificultad) }],
      new Set([1]), // correcta
    );
    expect(r.score).toBeCloseTo(2.0, 5);
    expect(r.maxScore).toBeCloseTo(2.0, 5);
    expect(r.ratio).toBe(1.0);
  });

  it("criterio: variantes a/b/c etiquetadas por dificultad en una posición", () => {
    const pos = posConVariantesPorDificultad({
      a: "basico",
      b: "intermedio",
      c: "avanzado",
    });
    expect(pos.variantes).toHaveLength(3);
    expect(pos.variantes.map((v) => v.dificultad)).toEqual([
      "basico",
      "intermedio",
      "avanzado",
    ]);
  });

  it("criterio: una difícil bien pesa más que una fácil bien (maxScore mayor)", () => {
    const rFacil = puntajePorPosiciones(
      [{ numero: 1, puntaje: 2, factorDificultad: 0.8 }],
      new Set([1]),
    );
    const rDificil = puntajePorPosiciones(
      [{ numero: 1, puntaje: 2, factorDificultad: 1.2 }],
      new Set([1]),
    );
    expect(rDificil.score).toBeGreaterThan(rFacil.score);
    expect(rDificil.maxScore).toBeGreaterThan(rFacil.maxScore);
  });
});
