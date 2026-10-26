// @vitest-environment node
import { describe, test, expect } from "vitest";

import { DeterministicPrng } from "../core/prng";
import { getDescriptoresBiologia } from "../biologia/index";

const TEMPLATES = [
  "VAR_A:{subtipo}",
  "VAR_B:{subtipo}",
  "VAR_C:{subtipo}",
];

function freshDescriptor() {
  const prng = new DeterministicPrng(42);
  const descriptors = getDescriptoresBiologia(prng);
  expect(descriptors.length).toBeGreaterThan(0);
  return descriptors[0];
}

describe("enunciadoTemplate: aceptar string | string[] en BaseGenerador", () => {
  test("mismo seed + array de 3 templates produce el mismo enunciado", () => {
    const subtipo = "genetica_mendel";

    const prng1 = new DeterministicPrng("arr-3-templates-seed");
    const ej1 = freshDescriptor().generate("basico", prng1, subtipo, TEMPLATES);

    const prng2 = new DeterministicPrng("arr-3-templates-seed");
    const ej2 = freshDescriptor().generate("basico", prng2, subtipo, TEMPLATES);

    expect(ej1.enunciado).toBe(ej2.enunciado);
    expect(ej1.enunciado.startsWith("VAR_")).toBe(true);
  });

  test("con 20 seeds distintos salen >=2 variantes unicas del array", () => {
    const subtipo = "genetica_mendel";
    const seen = new Set<string>();

    for (let i = 0; i < 20; i += 1) {
      const prng = new DeterministicPrng(`arr-3-templates-seed-${i}`);
      const ej = freshDescriptor().generate("basico", prng, subtipo, TEMPLATES);
      expect(ej.enunciado.startsWith("VAR_")).toBe(true);
      seen.add(ej.enunciado);
    }

    expect(seen.size).toBeGreaterThanOrEqual(2);
  });

  test("array vacio se comporta como no pasar template", () => {
    const subtipo = "genetica_mendel";

    // Descriptor fresco en cada llamada: asi this.prng parte de la misma
    // posicion y la unica diferencia observable es el parametro
    // enunciadoTemplate (undefined vs []).
    const prngSinTemplate = new DeterministicPrng("arr-vacio-original");
    const ejSinTemplate = freshDescriptor().generate("basico", prngSinTemplate, subtipo, undefined);

    const prngArrayVacio = new DeterministicPrng("arr-vacio-original");
    const ejArrayVacio = freshDescriptor().generate("basico", prngArrayVacio, subtipo, []);

    expect(ejArrayVacio.enunciado).toBe(ejSinTemplate.enunciado);
  });

  test("string simple sigue funcionando como antes (sin consumir PRNG extra para variantes)", () => {
    const subtipo = "genetica_mendel";

    const prngSinTemplate = new DeterministicPrng("string-template-equivalencia");
    const ejSinTemplate = freshDescriptor().generate("basico", prngSinTemplate, subtipo, undefined);

    const prngConTemplate = new DeterministicPrng("string-template-equivalencia");
    const ejConTemplate = freshDescriptor().generate("basico", prngConTemplate, subtipo, "T:{subtipo}");

    expect(ejConTemplate.enunciado).not.toBe(ejSinTemplate.enunciado);
    expect(ejConTemplate.enunciado.startsWith("T:")).toBe(true);
    expect(ejConTemplate.enunciado.includes("{subtipo}")).toBe(false);
  });
});
