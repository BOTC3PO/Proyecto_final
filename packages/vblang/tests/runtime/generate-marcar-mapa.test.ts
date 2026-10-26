import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";

describe("generate / marcar_mapa — caso feliz (modo iso)", () => {
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
    expect(r.modoRespuesta).toBe("iso");
  });

  it("enunciado interpolado", () => {
    const r = generate(compiled, { seed: "m-1" });
    expect(r.enunciado).toBe("¿Dónde está Argentina?");
  });

  it("adapter produce modoRespuestaMapa iso", () => {
    const r = generate(compiled, { seed: "m-1" });
    const q = toModuleQuizQuestion(r);
    expect(q.modoRespuestaMapa).toBe("iso");
    expect(q.respuestaIsoCorrecta).toBe("ARG");
    expect(q.answerKey).toBe("ARG");
  });
});

describe("generate / marcar_mapa — sin respuesta_nombre (modo iso)", () => {
  const src = `mapa: world_countries
enunciado: "x"
respuesta_iso: "ARG"
tipo: marcar_mapa
`;

  it("respuestaNombre es undefined, modoRespuesta iso", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "m-2" });
    expect(r.respuestaNombre).toBeUndefined();
    expect(r.respuestaIso).toBe("ARG");
    expect(r.modoRespuesta).toBe("iso");
  });
});

describe("generate / marcar_mapa — solo respuesta_nombre (modo nombre)", () => {
  const src = `variables:
  prov: { nombre: "Entre Ríos" }

mapa: world_states_provinces
enunciado: "Marcá {prov.nombre} en el mapa."
respuesta_nombre: prov.nombre
tipo: marcar_mapa
`;

  it("modoRespuesta nombre, respuestaIso undefined", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "n-1" });
    expect(r.tipo).toBe("marcar_mapa");
    expect(r.modoRespuesta).toBe("nombre");
    expect(r.respuestaNombre).toBe("Entre Ríos");
    expect(r.respuestaIso).toBeUndefined();
  });

  it("adapter produce modoRespuestaMapa nombre", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "n-1" });
    const q = toModuleQuizQuestion(r);
    expect(q.modoRespuestaMapa).toBe("nombre");
    expect(q.respuestaNombreCorrecta).toBe("Entre Ríos");
    expect(q.answerKey).toBe("Entre Ríos");
    expect(q.respuestaIsoCorrecta).toBeUndefined();
  });
});

describe("generate / marcar_mapa — respuesta_nombre se infiere como marcar_mapa", () => {
  const src = `mapa: world_states_provinces
enunciado: "Marcá la provincia."
respuesta_nombre: "Córdoba"
`;

  it("tipo inferido marcar_mapa sin tipo explícito", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "inf-1" });
    expect(r.tipo).toBe("marcar_mapa");
    expect(r.modoRespuesta).toBe("nombre");
    expect(r.respuestaNombre).toBe("Córdoba");
  });
});

describe("generate / marcar_mapa — encuadre en mapa:", () => {
  const src = `mapa: world_countries encuadre [-80, -55, -30, 15]
enunciado: "Marcá un país de Sudamérica."
respuesta_iso: "ARG"
tipo: marcar_mapa
`;

  it("encuadre se propaga al resultado", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "enc-1" });
    expect(r.encuadre).toEqual([-80, -55, -30, 15]);
  });

  it("adapter propaga encuadre a ModuleQuizQuestion", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "enc-1" });
    const q = toModuleQuizQuestion(r);
    expect(q.encuadre).toEqual([-80, -55, -30, 15]);
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

describe("generate / marcar_mapa — ni iso ni nombre lanza EvalError", () => {
  it("EvalError si falta respuesta", () => {
    expect(() =>
      parse(`mapa: world_countries\nenunciado: "x"\ntipo: marcar_mapa`),
    ).toThrow();
  });
});
