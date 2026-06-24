import { describe, expect, it } from "vitest";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import {
  applyGenerador,
  writeDificultad,
} from "../../components/vblang/plantillaFields";
import {
  getBlock,
  withBlock,
  withoutBlock,
  writeEncuadre,
  writeRespuestaNombre,
  DUMMY_LOC,
} from "../../components/vblang/plantillaAst";

function roundtrip(p: Plantilla): Plantilla {
  return parse(serialize(p));
}

describe("D4 subsistemas — round-trip idempotente", () => {
  it("generador: dificultad estable", () => {
    const base = parse(`enunciado: "Calculá {x}"\ngenerador: "fisica/mru"\n`);
    let p = writeDificultad(base, "intermedio");
    const once = serialize(p);
    p = roundtrip(p);
    expect(serialize(p)).toBe(once);
    expect(getBlock(p, "generador")?.id).toBe("fisica/mru");
  });

  it("mapa: nombre + encuadre se preservan al cambiar de mapa", () => {
    const base = parse(
      `enunciado: "Marcá"\ntipo: marcar_mapa\nmapa: world_countries\nrespuesta_iso: "ARG"\n`,
    );
    // encuadre sobre el bloque mapa
    let p = writeEncuadre(base, "-75, -55, -53, -20")!;
    expect(getBlock(p, "mapa")?.encuadre).toEqual([-75, -55, -53, -20]);
    // cambiar el nombre del mapa preservando el encuadre (como MapaField)
    const b = getBlock(p, "mapa")!;
    p = withBlock(p, { ...b, nombre: "world_states_provinces", loc: DUMMY_LOC });
    expect(getBlock(p, "mapa")?.encuadre).toEqual([-75, -55, -53, -20]);
    // pasar a modo nombre (quita iso, agrega respuesta_nombre)
    p = writeRespuestaNombre(withoutBlock(p, "respuesta_iso"), "Argentina");
    const once = serialize(p);
    expect(serialize(roundtrip(p))).toBe(once);
    expect(getBlock(p, "respuesta_iso")).toBeUndefined();
  });

  it("dataset: bloque estable y removible", () => {
    const base = parse(`enunciado: "x"\ntipo: abierta\ncorreccion: ninguna\n`);
    const conDataset = withBlock(base, {
      kind: "dataset",
      nombre: "paises_del_mundo",
      loc: DUMMY_LOC,
    });
    expect(getBlock(roundtrip(conDataset), "dataset")?.nombre).toBe(
      "paises_del_mundo",
    );
    const sinDataset = withoutBlock(conDataset, "dataset");
    expect(getBlock(roundtrip(sinDataset), "dataset")).toBeUndefined();
  });

  it("generador: barre variables/respuesta heredadas", () => {
    const base = parse(
      `enunciado: "x"\ntipo: input\nvariables:\n  a: random(1, 5)\nrespuesta: "5"\n`,
    );
    const p = applyGenerador(base, "fisica/mru");
    expect(getBlock(p, "variables")).toBeUndefined();
    expect(getBlock(p, "respuesta")).toBeUndefined();
    expect(getBlock(p, "generador")?.id).toBe("fisica/mru");
  });
});
