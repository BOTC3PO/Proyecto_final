/**
 * PLAN tiza-autoria-avanzada §6 — mapas: opción muerta retirada y modo nombre
 * autoreable.
 *
 * §6.a: `world_cities` estaba en el schema, en `MapaField` y en el enum del AST,
 * pero `MarcarMapaRenderer` no la reconoce (sólo politico_mundo / world /
 * world_countries / politico_mundo_detallado / world_states_provinces) y no hay
 * datos de ciudades: al alumno le salía "mapa no reconocido". Mismo patrón que
 * el subtipo "Rango" retirado en casos-límite §13.
 *
 * §6.b: el modo "nombre" existía en el runtime y en el adapter, y la plantilla
 * de ejemplo oficial lo usa, pero ningún campo del schema lo declaraba.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { QUESTION_TYPE_SCHEMAS } from "../../src/schema/question-schemas.js";

const dsl = (mapa: string) =>
  `enunciado: "Marcá algo"\ntipo: marcar_mapa\nmapa: ${mapa}\nrespuesta_iso: "ARG"\n`;

describe("§6.a · world_cities retirado", () => {
  it("los mapas que el renderer sí soporta siguen parseando", () => {
    expect(() => parse(dsl("world_countries"))).not.toThrow();
    expect(() => parse(dsl("world_states_provinces"))).not.toThrow();
  });

  it("`world_cities` ya no es un mapa válido", () => {
    expect(() => parse(dsl("world_cities"))).toThrow();
  });

  it("el schema tampoco lo ofrece", () => {
    const mapaField = QUESTION_TYPE_SCHEMAS.marcar_mapa.fields.find((f) => f.key === "mapa");
    expect(mapaField?.kind).toBe("enum");
    const valores =
      mapaField?.kind === "enum" ? mapaField.options.map((o) => o.value) : [];
    expect(valores).toEqual(["world_countries", "world_states_provinces"]);
  });
});

describe("§6.b · respuesta_nombre es un campo del schema", () => {
  it("está declarado y es opcional (el ISO manda si está)", () => {
    const f = QUESTION_TYPE_SCHEMAS.marcar_mapa.fields.find(
      (x) => x.key === "respuesta_nombre",
    );
    expect(f).toBeDefined();
    expect(f?.kind).toBe("text");
    expect(f?.required).toBeFalsy();
  });

  it("una plantilla con sólo `respuesta_nombre` parsea (modo nombre)", () => {
    expect(() =>
      parse(
        'enunciado: "Marcá Argentina"\ntipo: marcar_mapa\nmapa: world_countries\nrespuesta_nombre: "Argentina"\n',
      ),
    ).not.toThrow();
  });

  it("los dos juntos también, como en la plantilla de ejemplo oficial", () => {
    expect(() =>
      parse(
        'mapa: world_countries\n' +
          'variables:\n  pais: uno_de([{ nombre: "Argentina", iso: "ARG" }])\n' +
          'enunciado: "Marcá {pais.nombre}"\ntipo: marcar_mapa\n' +
          'respuesta_iso: pais.iso\nrespuesta_nombre: pais.nombre\n',
      ),
    ).not.toThrow();
  });
});
