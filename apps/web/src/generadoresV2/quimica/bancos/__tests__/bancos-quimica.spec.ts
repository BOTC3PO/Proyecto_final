/**
 * F6-03 — Tests de los bancos estáticos de química.
 *
 * Verifica que la migración de los 23 subtipos BANCO de los 4
 * generadores de química (AtomosEnlaces, Seguridad, AcidoBase,
 * Equilibrio) a bancos estáticos (formato `MCQuestion[]`) es correcta.
 *
 *  - 24 bancos totales (19 AtomosEnlaces + 3 Seguridad + 1 AcidoBase + 1 Equilibrio).
 *  - Cada banco tiene el número esperado de preguntas (paridad con
 *    las tablas hardcodedas originales o con la enumeración derivada).
 *  - Sin IDs de pregunta duplicados.
 *  - Toda pregunta es MCQuestion válida: type === "mc", options.length >= 2,
 *    exactamente UNA opción con `correct: true`, tags con
 *    `subtipo:<nombre>` y `dificultad:<basico|intermedio|avanzado>`.
 *  - Integración con el framework `basic/banco` (registry, descriptores).
 *
 * Particularidades:
 *  - Seguridad y biología-clasificacion_seres_vivos: cada fila del
 *    array fuente se expande a 3 preguntas (basico|intermedio|avanzado).
 *  - `anodo_catodo` (Equilibrio): 25 preguntas pre-computadas (5
 *    anodes × 7/6/5/4/3 cathodes), todas con la misma dificultad
 *    `intermedio`.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { clearBancoTemplates, getDescriptoresBasic } from "../../../basic/banco";
import { DeterministicPrng } from "../../../core/prng";
import {
  BANCOS_ACIDO_BASE,
  BANCOS_ATOMOS_ENLACES,
  BANCOS_EQUILIBRIO,
  BANCOS_SEGURIDAD,
} from "..";
import type { MCQuestion } from "../../../basic/types";

const ALL = [
  ...BANCOS_ATOMOS_ENLACES,
  ...BANCOS_SEGURIDAD,
  ...BANCOS_ACIDO_BASE,
  ...BANCOS_EQUILIBRIO,
] as ReadonlyArray<readonly [string, MCQuestion[]]>;

// Tamaños esperados por banco (paridad con la fuente o con la
// enumeración derivada).
const TAMANIOS_ESPERADOS: Record<string, number> = {
  // AtomosEnlaces (18)
  quimica_atomos_enlaces_tabla_periodica_clasificacion: 16,
  quimica_atomos_enlaces_tendencias_periodicas: 3,
  quimica_atomos_enlaces_iones_cationes_aniones: 5,
  quimica_atomos_enlaces_niveles_subniveles: 5,
  quimica_atomos_enlaces_orbitales_spdf: 4,
  quimica_atomos_enlaces_enlace_ionico: 8, // 4 ejemplos × 2 preguntas
  quimica_atomos_enlaces_enlace_covalente: 4,
  quimica_atomos_enlaces_enlace_metalico: 2,
  quimica_atomos_enlaces_polaridad_enlaces: 5,
  quimica_atomos_enlaces_geometria_molecular: 7,
  quimica_atomos_enlaces_sustancia_pura_mezcla: 3,
  quimica_atomos_enlaces_mezcla_homogenea_heterogenea: 3,
  quimica_atomos_enlaces_metodos_separacion: 5,
  quimica_atomos_enlaces_propiedades_fisicas_quimicas: 3,
  quimica_atomos_enlaces_sintesis: 1,
  quimica_atomos_enlaces_descomposicion: 1,
  quimica_atomos_enlaces_desplazamiento: 1,
  quimica_atomos_enlaces_combustion: 1,
  quimica_atomos_enlaces_neutralizacion_tipo: 1,
  // Seguridad (3 — cada fila × 3 difficulties)
  quimica_seguridad_pictogramas_ghs: 27, // 9 × 3
  quimica_seguridad_materiales_inflamables: 12, // 4 × 3
  quimica_seguridad_riesgos_toxicos: 12, // 4 × 3
  // AcidoBase (1)
  quimica_acido_base_fuerza_acidos_bases: 5,
  // Equilibrio (1 — 25 pares enumerados)
  quimica_equilibrio_anodo_catodo: 25,
};

const TOTAL_BANCOS = 24;
const TOTAL_PREGUNTAS = Object.values(TAMANIOS_ESPERADOS).reduce((a, b) => a + b, 0);

beforeEach(() => clearBancoTemplates());
afterEach(() => clearBancoTemplates());

describe("F6-03 — Inventario de bancos estáticos de química", () => {
  it("hay exactamente 24 bancos en total (19 AtomosEnlaces + 3 Seguridad + 1 AcidoBase + 1 Equilibrio)", () => {
    expect(ALL).toHaveLength(TOTAL_BANCOS);
  });

  it("los IDs siguen la convención quimica_<módulo>_<subtipo>", () => {
    for (const [id] of ALL) {
      expect(id).toMatch(/^quimica_(atomos_enlaces|seguridad|acido_base|equilibrio)_[a-z_]+$/);
    }
  });
});

describe("F6-03 — Tamaños por banco (paridad con tablas originales)", () => {
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

describe("F6-03 — Validez de cada MCQuestion", () => {
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
    const QUIMICA_PREFIXES = [
      "quimica_atomos_enlaces_",
      "quimica_seguridad_",
      "quimica_acido_base_",
      "quimica_equilibrio_",
    ] as const;
    for (const [id, qs] of ALL) {
      const subtipo = (() => {
        for (const p of QUIMICA_PREFIXES) {
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
        expect(q.tags, `${id}/${q.id} debe incluir materia quimica`).toContain("quimica");
      }
    }
  });

  it("toda explicación es string no vacío", () => {
    for (const [id, qs] of ALL) {
      for (const q of qs) {
        expect(typeof q.explanation, `${id}/${q.id} explanation`).toBe("string");
        expect(q.explanation.length, `${id}/${q.id} explanation vacía`).toBeGreaterThan(0);
      }
    }
  });
});

describe("F6-03 — Unicidad de IDs de pregunta", () => {
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

describe("F6-03 — Particularidades de Seguridad y anodo_catodo", () => {
  it("Seguridad: cada banco tiene exactamente 1/3 de preguntas en cada dificultad", () => {
    const SEG = ["pictogramas_ghs", "materiales_inflamables", "riesgos_toxicos"] as const;
    for (const subtipo of SEG) {
      const banco = ALL.find(([id]) => id.endsWith(subtipo))!;
      const counts = { basico: 0, intermedio: 0, avanzado: 0 };
      for (const q of banco[1]) {
        const tag = q.tags.find((t) => t.startsWith("dificultad:"));
        if (tag === "dificultad:basico") counts.basico += 1;
        else if (tag === "dificultad:intermedio") counts.intermedio += 1;
        else if (tag === "dificultad:avanzado") counts.avanzado += 1;
      }
      // pictogramas: 9/3 → 9 cada uno; inflamables y toxicos: 4/3 → 4 cada uno.
      const total = banco[1].length;
      expect(counts.basico).toBe(total / 3);
      expect(counts.intermedio).toBe(total / 3);
      expect(counts.avanzado).toBe(total / 3);
    }
  });

  it("anodo_catodo: 25 preguntas (5 anodes × 7/6/5/4/3 cathodes)", () => {
    const banco = ALL.find(([id]) => id === "quimica_equilibrio_anodo_catodo")!;
    expect(banco[1]).toHaveLength(25);
    // Cada pregunta menciona dos semi-elementos en el prompt.
    for (const q of banco[1]) {
      const matches = (q.prompt.match(/[A-Z][a-z]?[²³]?\/?[A-Z]?[a-z]?₂?/g) ?? []).length;
      expect(matches, q.id).toBeGreaterThanOrEqual(2);
    }
  });
});

describe("F6-03 — Integración con el framework basic/banco", () => {
  it("registerBancosQuimica inscribe 23 templates en TEMPLATE_REGISTRY", async () => {
    const { registerBancosQuimica } = await import("..");
    const tpls = registerBancosQuimica();
    expect(tpls).toHaveLength(TOTAL_BANCOS);
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    expect(descriptores).toHaveLength(TOTAL_BANCOS);
  });

  it("los descriptores generados tienen id 'basic/<metadata.id>'", async () => {
    const { registerBancosQuimica } = await import("..");
    registerBancosQuimica();
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    const ids = descriptores.map((d) => d.id).sort();
    expect(ids[0]).toBe("basic/quimica_acido_base_fuerza_acidos_bases");
    expect(ids).toContain("basic/quimica_atomos_enlaces_tabla_periodica_clasificacion");
    expect(ids).toContain("basic/quimica_equilibrio_anodo_catodo");
  });
});
