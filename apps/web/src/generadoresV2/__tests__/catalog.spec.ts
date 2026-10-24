// @vitest-environment node
import { describe, test, expect } from "vitest";

import { DeterministicPrng } from "../core/prng";
import { getStaticCatalog } from "../catalog";
import { getDescriptoresBiologia } from "../biologia/index";
import { getDescriptoresInformatica } from "../informatica/index";
import { getDescriptoresQuimica } from "../quimica/index";
import { getDescriptoresMatematicas } from "../matematicas/index";

/**
 * F6-06 — los 6 subtipos PARAMETRIZABLE upgradeados a plantilla VBLang
 * OFICIAL (F6-05) salen del catálogo de CREACIÓN (`getStaticCatalog()`),
 * pero el `.ts` original sigue generando: un quiz legacy que ya los
 * referencia debe seguir funcionando (`generate(dificultad, prng, subtipo)`
 * con `subtipo` explícito no pasa por `descriptor.subtipos`).
 */
const RETIRADOS: Array<{ generatorId: string; subtipo: string }> = [
  { generatorId: "biologia/biologia", subtipo: "genetica_mendel" },
  { generatorId: "biologia/biologia", subtipo: "piramide_biomasas" },
  { generatorId: "informatica/informatica", subtipo: "algebra_booleana" },
  { generatorId: "quimica/atomos_enlaces", subtipo: "particulas_subatomicas" },
  { generatorId: "quimica/atomos_enlaces", subtipo: "configuracion_electronica" },
  { generatorId: "matematicas/aritmetica", subtipo: "probabilidad_simple" },
];

describe("F6-06: getStaticCatalog() retira los 6 subtipos migrados a F6-05", () => {
  test("ningún item del catálogo ofrece los subtipos retirados", () => {
    const catalog = getStaticCatalog();

    for (const { generatorId, subtipo } of RETIRADOS) {
      const item = catalog.find((c) => c.id === generatorId);
      expect(item, `catálogo debería seguir listando ${generatorId}`).toBeDefined();
      expect(
        item!.subtipos.map((s) => s.id),
        `${generatorId} no debería ofrecer "${subtipo}" para creación`,
      ).not.toContain(subtipo);
    }
  });

  test("los generadores afectados conservan otros subtipos (no quedan vacíos)", () => {
    const catalog = getStaticCatalog();

    const biologia = catalog.find((c) => c.id === "biologia/biologia");
    expect(biologia!.subtipos.map((s) => s.id)).toEqual(["clasificacion_seres_vivos"]);

    const informatica = catalog.find((c) => c.id === "informatica/informatica");
    expect(informatica!.subtipos.map((s) => s.id)).toEqual([
      "conversion_bases",
      "operaciones_logicas",
    ]);

    const quimica = catalog.find((c) => c.id === "quimica/atomos_enlaces");
    expect(quimica!.subtipos.map((s) => s.id)).not.toContain("particulas_subatomicas");
    expect(quimica!.subtipos.map((s) => s.id)).not.toContain("configuracion_electronica");
    expect(quimica!.subtipos.length).toBeGreaterThan(0);

    const matematicas = catalog.find((c) => c.id === "matematicas/aritmetica");
    expect(matematicas!.subtipos.map((s) => s.id)).not.toContain("probabilidad_simple");
    expect(matematicas!.subtipos.length).toBeGreaterThan(0);
  });
});

describe("F6-06: compatibilidad — quizzes legacy con subtipo retirado siguen generando", () => {
  function descriptorFor(generatorId: string) {
    const prng = new DeterministicPrng(1);
    const all = [
      ...getDescriptoresBiologia(prng),
      ...getDescriptoresInformatica(prng),
      ...getDescriptoresQuimica(prng),
      ...getDescriptoresMatematicas(prng),
    ];
    const d = all.find((x) => x.id === generatorId);
    if (!d) throw new Error(`descriptor no encontrado: ${generatorId}`);
    return d;
  }

  for (const { generatorId, subtipo } of RETIRADOS) {
    test(`${generatorId}/${subtipo} sigue generando vía generate(subtipo) explícito`, () => {
      const descriptor = descriptorFor(generatorId);
      const prng = new DeterministicPrng(`${generatorId}:${subtipo}:legacy`);
      const ejercicio = descriptor.generate("basico", prng, subtipo);

      expect(ejercicio.subtipo).toBe(subtipo);
      expect(ejercicio.enunciado.length).toBeGreaterThan(0);
    });
  }
});
