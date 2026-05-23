import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

describe("generate / marcar_mapa — caso feliz", () => {
  const src = `variables:
  pais: { iso: "ARG", nombre: "Argentina" }

mapa: world_countries
enunciado: "¿Dónde está {pais.nombre}?"
respuesta_iso: pais.iso
respuesta_nombre: pais.nombre
tipo: marcar_mapa
`;
  const compiled = compile(parse(src));

  it("tipo y campos especiales correctos", () => {
    const r = generate(compiled, { seed: "m-1" });
    expect(r.tipo).toBe("marcar_mapa");
    expect(r.mapaId).toBe("world_countries");
    expect(r.respuestaIso).toBe("ARG");
    expect(r.respuestaNombre).toBe("Argentina");
  });

  it("enunciado interpolado", () => {
    const r = generate(compiled, { seed: "m-1" });
    expect(r.enunciado).toBe("¿Dónde está Argentina?");
  });
});

describe("generate / marcar_mapa — sin respuesta_nombre", () => {
  const src = `mapa: world_countries
enunciado: "x"
respuesta_iso: "ARG"
tipo: marcar_mapa
`;

  it("respuestaNombre es undefined", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "m-2" });
    expect(r.respuestaNombre).toBeUndefined();
    expect(r.respuestaIso).toBe("ARG");
  });
});

describe("generate / marcar_mapa — respuesta_iso no-string lanza EvalError", () => {
  const src = `mapa: world_countries
enunciado: "x"
respuesta_iso: 123
tipo: marcar_mapa
`;

  it("EvalError porque iso debe ser string", () => {
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "x" })).toThrow(EvalError);
  });
});
