/**
 * Round-trip de plantillas CREADAS DESDE EL EDITOR schema-driven (WO06,
 * criterio de aceptación #2) + lectura/escritura de campos.
 */
import { describe, expect, it } from "vitest";
import { lint, parse, serialize, QUESTION_TYPE_SCHEMAS } from "@vb/vblang";
import type { ListField, TextField, TipoPregunta } from "@vb/vblang";
import {
  applyGenerador,
  applyTipo,
  isGeneradorBase,
  readEtiquetas,
  readListStrings,
  readTextField,
  unhandledBlocks,
  writeEtiquetas,
  writeListStrings,
  writeTextField,
} from "../plantillaFields";

const ALL_TIPOS: TipoPregunta[] = [
  "input",
  "mc",
  "vf",
  "completar",
  "ordenar",
  "marcar_mapa",
  "analisis_sintactico",
  "identificar_palabras",
];

/** Plantilla base mínima de la que parte el editor. */
function basePlantilla() {
  return parse('enunciado: "Punto de partida"\nrespuesta: 1\n');
}

describe("editor schema-driven · armado por tipo", () => {
  for (const tipo of ALL_TIPOS) {
    it(`applyTipo(${tipo}) produce un DSL válido que infiere ${tipo}`, () => {
      const armada = applyTipo(basePlantilla(), tipo);
      const dsl = serialize(armada);
      const reparsed = parse(dsl);
      expect(reparsed.tipoInferido).toBe(tipo);
      expect(lint(reparsed).errors).toEqual([]);
    });

    it(`applyTipo(${tipo}) round-trippea (serialize→parse→serialize estable)`, () => {
      const armada = applyTipo(basePlantilla(), tipo);
      const dsl1 = serialize(armada);
      const dsl2 = serialize(parse(dsl1));
      expect(dsl2).toBe(dsl1);
    });

    it(`cambiar a ${tipo} preserva el enunciado`, () => {
      const armada = applyTipo(basePlantilla(), tipo);
      const enunciadoField = QUESTION_TYPE_SCHEMAS[tipo].fields.find(
        (f) => f.block === "enunciado",
      ) as TextField;
      expect(readTextField(armada, enunciadoField)).toBe("Punto de partida");
    });
  }
});

describe("editor schema-driven · campos", () => {
  it("escribir opciones (lista) round-trippea como strings", () => {
    let p = applyTipo(basePlantilla(), "mc");
    const field = QUESTION_TYPE_SCHEMAS.mc.fields.find(
      (f) => f.kind === "list",
    ) as ListField;
    p = writeListStrings(p, field, ["rojo", "verde", "azul"]);
    expect(readListStrings(p, field)).toEqual(["rojo", "verde", "azul"]);
    // la respuesta debe ser una de las opciones (lo exige el linter)
    const respField = QUESTION_TYPE_SCHEMAS.mc.fields.find(
      (f) => f.block === "respuesta",
    ) as TextField;
    p = writeTextField(p, respField, "verde")!;
    // y sigue siendo válido
    const reparsed = parse(serialize(p));
    expect(reparsed.tipoInferido).toBe("mc");
    expect(lint(reparsed).errors).toEqual([]);
  });

  it("escribir la respuesta de mc como string exacto", () => {
    let p = applyTipo(basePlantilla(), "mc");
    const respField = QUESTION_TYPE_SCHEMAS.mc.fields.find(
      (f) => f.block === "respuesta",
    ) as TextField;
    p = writeTextField(p, respField, "verde")!;
    expect(readTextField(p, respField)).toBe("verde");
    // se serializa como string entre comillas
    expect(serialize(p)).toContain('respuesta: "verde"');
  });

  it("respuesta de input es una expresión; texto inválido no muta (null)", () => {
    let p = applyTipo(basePlantilla(), "input");
    const respField = QUESTION_TYPE_SCHEMAS.input.fields.find(
      (f) => f.block === "respuesta",
    ) as TextField;
    p = writeTextField(p, respField, "a + b")!;
    expect(readTextField(p, respField)).toBe("a + b");
    // expresión inválida → null (la UI mantiene el buffer)
    expect(writeTextField(p, respField, "a +")).toBeNull();
  });

  it("etiquetas_pedidas round-trippean palabra/etiqueta", () => {
    let p = applyTipo(basePlantilla(), "analisis_sintactico");
    p = writeEtiquetas(p, [
      { palabra: "gato", etiqueta: "sustantivo" },
      { palabra: "duerme", etiqueta: "verbo" },
    ]);
    expect(readEtiquetas(p)).toEqual([
      { palabra: "gato", etiqueta: "sustantivo" },
      { palabra: "duerme", etiqueta: "verbo" },
    ]);
  });

  it("base generador: barre respuestas y preserva enunciado", () => {
    let p = applyTipo(basePlantilla(), "mc");
    p = applyGenerador(p, "fisica/cinematica");
    expect(isGeneradorBase(p)).toBe(true);
    const dsl = serialize(p);
    expect(dsl).toContain("generador: fisica/cinematica");
    expect(dsl).toContain("Punto de partida");
    expect(dsl).not.toContain("opciones_explicitas");
  });

  it("preserva bloques no soportados (ej. dataset) al cambiar de tipo", () => {
    const conDataset = parse(
      'dataset: capitales\nenunciado: "x"\nrespuesta: 1\n',
    );
    const p = applyTipo(conDataset, "vf");
    expect(unhandledBlocks(p)).toContain("dataset");
    // el dataset sigue en el DSL serializado
    expect(serialize(p)).toContain("dataset: capitales");
  });
});
