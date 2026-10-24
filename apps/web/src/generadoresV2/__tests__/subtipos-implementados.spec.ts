// @vitest-environment node
import { describe, expect, test } from "vitest";

import { DeterministicPrng } from "../core/prng";
import type { Dificultad, GeneratorDescriptor } from "../core/types";
import { getDescriptoresBiologia } from "../biologia/index";
import { getDescriptoresEconomia } from "../economia/index";
import { getDescriptoresFisica } from "../fisica/index";
import { getDescriptoresInformatica } from "../informatica/index";
import { getDescriptoresMatematicas } from "../matematicas/index";
import { getDescriptoresQuimica } from "../quimica/index";
import { getStaticCatalog } from "../catalog";

/**
 * H6 — todo subtipo que el catálogo ofrece genera un ejercicio de verdad. Antes había subtipos
 * listados cuyo generador devolvía un ejercicio de relleno ("[Próximamente]", respuesta "—") o fallaba,
 * y el alumno los veía en un cuestionario.
 */
const DIFICULTADES: Dificultad[] = ["basico", "intermedio", "avanzado"];

const descriptores = (): GeneratorDescriptor[] => {
  const prng = new DeterministicPrng(7);
  return [
    ...getDescriptoresBiologia(prng),
    ...getDescriptoresEconomia(prng),
    ...getDescriptoresFisica(prng),
    ...getDescriptoresInformatica(prng),
    ...getDescriptoresMatematicas(prng),
    ...getDescriptoresQuimica(prng),
  ];
};

describe("H6: subtipos del catálogo implementados", () => {
  test("ningún subtipo ofrecido devuelve un ejercicio de relleno ni falla", () => {
    const ofrecidos = new Map(getStaticCatalog().map((c) => [c.id, new Set(c.subtipos.map((s) => s.id))]));
    const problemas: string[] = [];
    let recorridos = 0;
    for (const d of descriptores()) {
      const permitidos = ofrecidos.get(d.id);
      if (!permitidos) continue;
      for (const subtipo of d.subtipos.filter((s) => permitidos.has(s))) {
        for (const dif of DIFICULTADES) {
          recorridos++;
          try {
            const ej = d.generate(dif, new DeterministicPrng(11), subtipo) as unknown as Record<string, unknown>;
            const texto = JSON.stringify(ej);
            if (/\[Próximamente\]|placeholder-/i.test(texto)) problemas.push(`${d.id}/${subtipo}/${dif}: ejercicio de relleno`);
          } catch (e) {
            problemas.push(`${d.id}/${subtipo}/${dif}: ${(e as Error).message}`);
          }
        }
      }
    }
    // Que la prueba de verdad recorra el catálogo (si cambia la estructura y no recorre nada, no sirve).
    expect(recorridos).toBeGreaterThan(300);
    expect(problemas).toEqual([]);
  });

  test("la prueba detecta un relleno (control)", async () => {
    const { placeholder } = await import("../core/shared");
    expect(/\[Próximamente\]|placeholder-/i.test(JSON.stringify(placeholder("x", "matematicas", "basico")))).toBe(true);
  });
});
