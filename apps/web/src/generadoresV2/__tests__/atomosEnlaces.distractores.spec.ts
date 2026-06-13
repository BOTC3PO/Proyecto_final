// @vitest-environment node
import { describe, test, expect } from "vitest";
import { DeterministicPrng } from "../core/prng";
import { getDescriptoresQuimica } from "../quimica/index";

function generarConfigElectronica(seed: number | string) {
  const prng = new DeterministicPrng(seed);
  const descriptores = getDescriptoresQuimica(prng);
  const descriptor = descriptores.find(d => d.subtipos.includes("configuracion_electronica"));
  if (!descriptor) throw new Error("No se encontró descriptor para configuracion_electronica");
  return descriptor.generate("basico", prng, "configuracion_electronica", "");
}

describe("configuracion_electronica distractores", () => {
  test(" mismo seed → mismas opciones incorrectas (determinismo)", () => {
    const ej1 = generarConfigElectronica(12345);
    const ej2 = generarConfigElectronica(12345);
    expect(ej1.opciones).toEqual(ej2.opciones);
  });

  test(" seeds distintos → al menos un par difiere en distractores en 10 seeds", () => {
    const ejercicios = Array.from({ length: 10 }, (_, i) => generarConfigElectronica(i));
    let alMenosUnoDifiere = false;
    for (let i = 0; i < ejercicios.length && !alMenosUnoDifiere; i++) {
      for (let j = i + 1; j < ejercicios.length && !alMenosUnoDifiere; j++) {
        const incorrectasI = ejercicios[i].opciones.slice(1);
        const incorrectasJ = ejercicios[j].opciones.slice(1);
        if (JSON.stringify(incorrectasI) !== JSON.stringify(incorrectasJ)) {
          alMenosUnoDifiere = true;
        }
      }
    }
    expect(alMenosUnoDifiere).toBe(true);
  });
});