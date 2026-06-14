/**
 * F6-02 — Tests de los bancos estáticos de economía.
 *
 * Verifica que la migración de los subtipos BANCO de los 4 generadores
 * de economía (EconomiaGeneral, EconomiaAR, Finanzas, Contabilidad)
 * a bancos estáticos (formato `MCQuestion[]`) es correcta:
 *
 *  - 29 bancos totales (7 EG + 5 EconomiaAR + 10 Finanzas + 7 Contab).
 *  - Cada banco tiene el número esperado de preguntas (mismo que el
 *    array hardcoded original — paridad byte-a-byte de tamaño).
 *  - Sin IDs de pregunta duplicados entre bancos.
 *  - Toda pregunta es MCQuestion válida:
 *      - type === "mc"
 *      - options.length >= 2
 *      - exactamente UNA opción con `correct: true` (paridad con
 *        `mapBancoQuestion` que descarta las MC sin respuesta correcta).
 *  - Tags incluyen `subtipo:<nombre>` y `dificultad:<basico|intermedio|avanzado>`.
 *  - Las 6 deduplicaciones canónicas EconomíaGeneral → Finanzas/Contab
 *    se resolvieron (NO existe ningún banco con id `economia_general_quiz_*`).
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { clearBancoTemplates, getDescriptoresBasic } from "../../../basic/banco";
import { DeterministicPrng } from "../../../core/prng";
import { BANCOS_CONTABILIDAD } from "../contabilidad";
import { BANCOS_ECONOMIA_AR } from "../economiaAR";
import { BANCOS_ECONOMIA_GENERAL } from "../economiaGeneral";
import { BANCOS_FINANZAS } from "../finanzas";
import {
  getAllBancosEconomia,
  getQuizTemplatesEconomia,
  registerBancosEconomia,
} from "../index";
import type { MCQuestion } from "../../../basic/types";

const ALL = [
  ...BANCOS_ECONOMIA_GENERAL,
  ...BANCOS_ECONOMIA_AR,
  ...BANCOS_FINANZAS,
  ...BANCOS_CONTABILIDAD,
] as ReadonlyArray<readonly [string, MCQuestion[]]>;

// Tamaños esperados por banco (paridad con las tablas hardcodeadas
// en los .ts originales).
const TAMANIOS_ESPERADOS: Record<string, number> = {
  // EconomiaGeneral (7)
  economia_general_politica_fiscal_monetaria: 8,
  economia_general_clasificacion_bienes: 8,
  economia_general_agentes_economicos: 7,
  economia_general_estructuras_mercado: 6,
  economia_general_gastos_fijos_variables: 8,
  economia_general_quiz_ganancia_equilibrio: 2,
  economia_general_quiz_interes_simple_compuesto: 2,
  // EconomiaAR (5)
  economia_ar_recibo_basico: 5,
  economia_ar_descuentos_obligatorios: 4,
  economia_ar_jurisdiccion_impuestos: 9,
  economia_ar_formal_informal: 9,
  economia_ar_monotributo: 4,
  // Finanzas (10)
  finanzas_presupuesto_familiar: 11,
  finanzas_gastos_fijos_esenciales: 11,
  finanzas_gastos_esenciales_no_esenciales: 12,
  finanzas_ahorro_consumo: 9,
  finanzas_deuda_buena_mala: 10,
  finanzas_cft_vs_interes: 8,
  finanzas_liquidez_personal: 11,
  finanzas_ingresos_activos_pasivos: 10,
  finanzas_publicidad_enganosa: 8,
  finanzas_seguros_familia: 7,
  // Contabilidad (7)
  contabilidad_clasificacion_cuentas: 14,
  contabilidad_naturaleza_cuentas: 14,
  contabilidad_ubicacion_estados: 13,
  contabilidad_hechos_patrimonio: 8,
  contabilidad_bienes_derechos_obligaciones: 11,
  contabilidad_aportes_contribuciones: 8,
  contabilidad_variaciones_patrimoniales: 8,
};

// Bancos dropped (deduplicación canónica EconomíaGeneral → Finanzas/Contab).
// Verificamos que NO existen en el set migrado.
const BANCOS_DROPPED = [
  "economia_general_quiz_aportes_contribuciones",
  "economia_general_quiz_deuda_buena_mala",
  "economia_general_quiz_cft_interes",
  "economia_general_quiz_gastos_esenciales",
  "economia_general_quiz_liquidez",
  "economia_general_quiz_publicidad_enganosa",
] as const;

const TOTAL_BANCOS = 29;
const TOTAL_PREGUNTAS = Object.values(TAMANIOS_ESPERADOS).reduce((a, b) => a + b, 0);

beforeEach(() => clearBancoTemplates());
afterEach(() => clearBancoTemplates());

describe("F6-02 — Inventario de bancos estáticos de economía", () => {
  it("hay exactamente 29 bancos en total (7 EG + 5 AR + 10 Fin + 7 Contab)", () => {
    expect(ALL).toHaveLength(TOTAL_BANCOS);
    expect(getAllBancosEconomia()).toHaveLength(TOTAL_BANCOS);
  });

  it("los IDs siguen la convención economia_<modulo>_<subtipo>", () => {
    for (const [id] of ALL) {
      expect(id).toMatch(/^(economia_general|economia_ar|finanzas|contabilidad)_[a-z_]+$/);
    }
  });

  it("los 6 bancos dropped por dedup NO están en el set migrado", () => {
    const ids = new Set(ALL.map(([id]) => id));
    for (const dropped of BANCOS_DROPPED) {
      expect(ids.has(dropped)).toBe(false);
    }
  });

  it("los canónicos de Finanzas/Contab están en el set migrado", () => {
    const ids = new Set(ALL.map(([id]) => id));
    expect(ids.has("finanzas_deuda_buena_mala")).toBe(true);
    expect(ids.has("finanzas_cft_vs_interes")).toBe(true);
    expect(ids.has("finanzas_liquidez_personal")).toBe(true);
    expect(ids.has("finanzas_gastos_esenciales_no_esenciales")).toBe(true);
    expect(ids.has("finanzas_publicidad_enganosa")).toBe(true);
    expect(ids.has("contabilidad_aportes_contribuciones")).toBe(true);
  });
});

describe("F6-02 — Tamaños por banco (paridad con tablas originales)", () => {
  it.each(Object.entries(TAMANIOS_ESPERADOS))(
    "banco %s tiene %d preguntas",
    (id, esperado) => {
      const banco = ALL.find(([bid]) => bid === id);
      expect(banco, `banco ${id} no encontrado`).toBeDefined();
      expect(banco![1]).toHaveLength(esperado);
    },
  );

  it(`suma total de preguntas = ${TOTAL_PREGUNTAS}`, () => {
    const total = ALL.reduce((acc, [, qs]) => acc + qs.length, 0);
    expect(total).toBe(TOTAL_PREGUNTAS);
  });

  it("cada banco del inventario tiene un tamaño esperado declarado", () => {
    for (const [id] of ALL) {
      expect(TAMANIOS_ESPERADOS[id], `falta tamaño esperado para ${id}`).toBeDefined();
    }
  });
});

describe("F6-02 — Validez de cada MCQuestion", () => {
  it("toda pregunta es MCQuestion con type === 'mc'", () => {
    for (const [id, qs] of ALL) {
      for (const q of qs) {
        expect(q.type, `${id}/${q.id} type`).toBe("mc");
        expect(q.id, `${id} id`).toBeTruthy();
        expect(q.prompt, `${id}/${q.id} prompt`).toBeTruthy();
        expect(q.options.length, `${id}/${q.id} options.length`).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("toda pregunta tiene exactamente UNA opción con correct === true", () => {
    for (const [id, qs] of ALL) {
      for (const q of qs) {
        const correctas = q.options.filter((o) => o.correct);
        expect(
          correctas,
          `${id}/${q.id} debe tener exactamente 1 correct:true, tiene ${correctas.length}`,
        ).toHaveLength(1);
      }
    }
  });

  it("toda pregunta tiene tags con subtipo:<nombre> y dificultad:<nivel>", () => {
    const MODULE_PREFIXES = [
      "economia_general_",
      "economia_ar_",
      "finanzas_",
      "contabilidad_",
    ] as const;
    for (const [id, qs] of ALL) {
      const subtipo = (() => {
        for (const p of MODULE_PREFIXES) {
          if (id.startsWith(p)) return id.slice(p.length);
        }
        throw new Error(`ID sin módulo conocido: ${id}`);
      })();
      for (const q of qs) {
        expect(
          q.tags.some((t) => t === `subtipo:${subtipo}`),
          `${id}/${q.id} debe tener tag subtipo:${subtipo}`,
        ).toBe(true);
        expect(
          q.tags.some((t) => /^dificultad:(basico|intermedio|avanzado)$/.test(t)),
          `${id}/${q.id} debe tener tag dificultad:{basico|intermedio|avanzado}`,
        ).toBe(true);
        expect(q.tags, `${id}/${q.id} debe incluir materia economia`).toContain("economia");
      }
    }
  });

  it("toda explicación es string no vacío (mantenemos la voz del generador original)", () => {
    for (const [id, qs] of ALL) {
      for (const q of qs) {
        expect(typeof q.explanation, `${id}/${q.id} explanation`).toBe("string");
        expect(q.explanation.length, `${id}/${q.id} explanation vacía`).toBeGreaterThan(0);
      }
    }
  });
});

describe("F6-02 — Unicidad de IDs de pregunta", () => {
  it("no hay dos preguntas con el mismo id (ni dentro ni entre bancos)", () => {
    const seen = new Map<string, string>();
    for (const [id, qs] of ALL) {
      for (const q of qs) {
        if (seen.has(q.id)) {
          throw new Error(
            `ID duplicado "${q.id}" en bancos ${seen.get(q.id)} y ${id}`,
          );
        }
        seen.set(q.id, id);
      }
    }
    expect(seen.size).toBe(TOTAL_PREGUNTAS);
  });
});

describe("F6-02 — Integración con el framework basic/banco", () => {
  it("registerBancosEconomia inscribe 29 templates en TEMPLATE_REGISTRY", () => {
    const tpls = registerBancosEconomia();
    expect(tpls).toHaveLength(TOTAL_BANCOS);
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    expect(descriptores).toHaveLength(TOTAL_BANCOS);
  });

  it("getQuizTemplatesEconomia produce templates sin registrarlos", () => {
    const tpls = getQuizTemplatesEconomia();
    expect(tpls).toHaveLength(TOTAL_BANCOS);
    for (const t of tpls) {
      expect(t.schema).toBe("vb.quiz/banco-1");
      expect(t.metadata.materia).toBe("economia");
      expect(t.metadata.idioma).toBe("es");
      expect(t.metadata.tags).toContain("economia");
      expect(t.settings.poolSize).toBe(t.pool.length);
      expect(t.settings.displayCount).toBe(t.pool.length);
    }
    // No se registró nada (el registry sigue vacío).
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    expect(descriptores).toHaveLength(0);
  });

  it("los descriptores generados tienen id 'basic/<metadata.id>'", () => {
    registerBancosEconomia();
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    const ids = descriptores.map((d) => d.id).sort();
    expect(ids[0]).toBe("basic/contabilidad_aportes_contribuciones");
    expect(ids).toContain("basic/economia_general_politica_fiscal_monetaria");
    expect(ids).toContain("basic/finanzas_deuda_buena_mala");
  });

  it("registerBancosEconomia es idempotente: la última gana, sigue habiendo 29", () => {
    registerBancosEconomia();
    registerBancosEconomia();
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    expect(descriptores).toHaveLength(TOTAL_BANCOS);
  });
});

describe("F6-02 — Coherencia de deduplicación", () => {
  it("los 5 canónicos en Finanzas cubren los subtipos que los 5 quiz_* en EG duplicaban", () => {
    const ids = new Set(ALL.map(([id]) => id));
    const cobertura: Record<string, string> = {
      "economia_general_quiz_deuda_buena_mala": "finanzas_deuda_buena_mala",
      "economia_general_quiz_cft_interes": "finanzas_cft_vs_interes",
      "economia_general_quiz_liquidez": "finanzas_liquidez_personal",
      "economia_general_quiz_gastos_esenciales": "finanzas_gastos_esenciales_no_esenciales",
      "economia_general_quiz_publicidad_enganosa": "finanzas_publicidad_enganosa",
      "economia_general_quiz_aportes_contribuciones": "contabilidad_aportes_contribuciones",
    };
    for (const [dropped, canonico] of Object.entries(cobertura)) {
      expect(
        ids.has(canonico),
        `canónico ${canonico} debe existir (dropped: ${dropped})`,
      ).toBe(true);
      // Y el canónico debe ser MÁS GRANDE que el dropped (10 vs 2, 8 vs 2, etc.).
      const droppedSize = 2;
      const canon = ALL.find(([id]) => id === canonico)!;
      expect(
        canon[1].length,
        `canónico ${canonico} debe tener más preguntas que el dropped ${dropped}`,
      ).toBeGreaterThan(droppedSize);
    }
  });
});
