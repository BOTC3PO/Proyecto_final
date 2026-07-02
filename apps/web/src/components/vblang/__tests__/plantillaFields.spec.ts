/**
 * Round-trip de plantillas CREADAS DESDE EL EDITOR schema-driven (WO06,
 * criterio de aceptación #2) + lectura/escritura de campos.
 */
import { describe, expect, it } from "vitest";
import {
  compile,
  generate,
  lint,
  parse,
  serialize,
  QUESTION_TYPE_SCHEMAS,
} from "@vb/vblang";
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
import {
  readExplicacion,
  readPasos,
  readPistas,
  readRestricciones,
  readRespuestaNombre,
  readToleranciaAbs,
  writeExplicacion,
  writePasos,
  writePistas,
  writeRestricciones,
  writeRespuestaNombre,
  writeToleranciaAbs,
  readEncuadre,
  writeEncuadre,
  readVisualRaw,
  writeVisualRaw,
  readVisualKind,
} from "../plantillaAst";

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

/* ---------------- WO-1: cierre del gap formulario↔DSL ---------------- */

describe("WO-1 · bloques antes solo editables en DSL", () => {
  it("unhandledBlocks ya NO reporta los bloques recién expuestos", () => {
    const p = parse(
      [
        'enunciado: "{a}"',
        "variables:",
        "  a: random(1, 9)",
        "respuesta: a",
        "tolerancia_abs: 0.001",
        "respuesta_nombre: \"Argentina\"",
        'explicacion: "Porque {a}"',
        "restricciones:",
        "  - a != 0",
        "pistas:",
        '  - "Pista 1"',
        '  - "Pista 2"',
        "metadata:",
        '  pista: "pista única"',
        "",
      ].join("\n"),
    );
    const reportados = unhandledBlocks(p);
    for (const k of [
      "respuesta_nombre",
      "tolerancia_abs",
      "explicacion",
      "restricciones",
      "pistas",
      "enunciados",
    ]) {
      expect(reportados).not.toContain(k);
    }
  });

  it("enunciados (plural) no se reporta como no manejado", () => {
    const p = parse('enunciados:\n  - "v1"\n  - "v2"\nrespuesta: 1\n');
    expect(unhandledBlocks(p)).not.toContain("enunciados");
  });

  it("respuesta_nombre round-trippea y se quita con ''", () => {
    let p = applyTipo(basePlantilla(), "marcar_mapa");
    p = writeRespuestaNombre(p, "Argentina");
    expect(readRespuestaNombre(p)).toBe("Argentina");
    expect(serialize(p)).toContain('respuesta_nombre: "Argentina"');
    p = writeRespuestaNombre(p, "");
    expect(readRespuestaNombre(p)).toBe("");
    expect(serialize(p)).not.toContain("respuesta_nombre");
  });

  it("tolerancia_abs round-trippea, valida número y se quita con ''", () => {
    let p = applyTipo(basePlantilla(), "input");
    p = writeToleranciaAbs(p, "0.001")!;
    expect(readToleranciaAbs(p)).toBe("0.001");
    expect(serialize(p)).toContain("tolerancia_abs: 0.001");
    // número inválido (a medio escribir) → null, no muta el AST
    expect(writeToleranciaAbs(p, "-")).toBeNull();
    p = writeToleranciaAbs(p, "")!;
    expect(serialize(p)).not.toContain("tolerancia_abs");
  });

  describe("WO-10: encuadre (vista bloqueada del mapa)", () => {
    it("writeEncuadre round-trippea y el DSL serializa con `encuadre [w, s, e, n]`", () => {
      let p = applyTipo(basePlantilla(), "marcar_mapa");
      // Antes: sin encuadre (vista interactiva).
      expect(readEncuadre(p)).toBe("");
      expect(serialize(p)).not.toContain("encuadre");

      p = writeEncuadre(p, "-75, -55, -53, -20")!;
      expect(readEncuadre(p)).toBe("-75, -55, -53, -20");
      expect(serialize(p)).toContain("encuadre [-75, -55, -53, -20]");
      expect(serialize(p)).toContain("mapa: world_countries");
    });

    it("writeEncuadre con '' quita el encuadre y preserva el nombre del mapa", () => {
      let p = applyTipo(basePlantilla(), "marcar_mapa");
      p = writeEncuadre(p, "-75, -55, -53, -20")!;
      p = writeEncuadre(p, "")!;
      expect(readEncuadre(p)).toBe("");
      expect(serialize(p)).not.toContain("encuadre");
      // El nombre del mapa se preserva.
      expect(serialize(p)).toContain("mapa: world_countries");
    });

    it("writeEncuadre acepta separadores coma/espacio/;", () => {
      let p = applyTipo(basePlantilla(), "marcar_mapa");
      p = writeEncuadre(p, "-75, -55 -53;-20")!;
      expect(readEncuadre(p)).toBe("-75, -55, -53, -20");
    });

    it("writeEncuadre rechaza si no son 4 números", () => {
      const p = applyTipo(basePlantilla(), "marcar_mapa");
      expect(writeEncuadre(p, "1, 2, 3")).toBeNull();
      expect(writeEncuadre(p, "1, 2, 3, 4, 5")).toBeNull();
      expect(writeEncuadre(p, "a, b, c, d")).toBeNull();
      // Y el AST queda intacto (no se commitea un valor inválido).
      expect(readEncuadre(p)).toBe("");
    });

    it("writeEncuadre rechaza si oeste >= este o sur >= norte", () => {
      const p = applyTipo(basePlantilla(), "marcar_mapa");
      expect(writeEncuadre(p, "10, 0, 5, 20")).toBeNull(); // oeste > este
      expect(writeEncuadre(p, "0, 20, 10, 10")).toBeNull(); // sur >= norte
    });

    it("writeEncuadre crea el bloque mapa: si no existía", () => {
      const p = basePlantilla();
      const p2 = writeEncuadre(p, "0, 0, 10, 10")!;
      expect(serialize(p2)).toContain("mapa: world_countries");
      expect(serialize(p2)).toContain("encuadre [0, 0, 10, 10]");
    });

    it("readEncuadre round-trippea con el parser (block `mapa: ... encuadre [...]`)", () => {
      const p = parse(
        'enunciado: "x"\ntipo: marcar_mapa\nmapa: world_countries encuadre [-75, -55, -53, -20]\nrespuesta_iso: "AR"\n',
      );
      expect(readEncuadre(p)).toBe("-75, -55, -53, -20");
    });
  });

  it("explicacion round-trippea con interpolación de variables", () => {
    let p = parse('enunciado: "{a}"\nvariables:\n  a: random(1, 9)\nrespuesta: a\n');
    p = writeExplicacion(p, "El resultado es {a}");
    expect(readExplicacion(p)).toBe("El resultado es {a}");
    expect(serialize(p)).toContain("explicacion:");
    expect(lint(parse(serialize(p))).errors).toEqual([]);
  });

  it("restricciones round-trippean fórmulas y descartan las inválidas", () => {
    let p = parse('enunciado: "x"\nvariables:\n  a: random(1, 9)\nrespuesta: a\n');
    p = writeRestricciones(p, ["a != 0", "a + ", "a > 1"]);
    // la fórmula inválida ("a + ") se descarta del AST
    expect(readRestricciones(p)).toEqual(["a != 0", "a > 1"]);
    p = writeRestricciones(p, []);
    expect(serialize(p)).not.toContain("restricciones");
  });

  it("pistas (plural) round-trippean y conviven con metadata.pista", () => {
    let p = parse('enunciado: "x"\nrespuesta: 1\nmetadata:\n  pista: "única"\n');
    p = writePistas(p, ["Primero esto", "Después aquello"]);
    expect(readPistas(p)).toEqual(["Primero esto", "Después aquello"]);
    const dsl = serialize(p);
    expect(dsl).toContain("pistas:");
    // la pista única de metadata SIGUE intacta (no se migra)
    expect(dsl).toContain('pista: "única"');
  });

  it("pasos round-trippean", () => {
    let p = parse('enunciado: "x"\nrespuesta: 1\n');
    p = writePasos(p, ["Primero", "Después"]);
    expect(readPasos(p)).toEqual(["Primero", "Después"]);
    expect(serialize(p)).toContain("pasos:");
    p = writePasos(p, []);
    expect(serialize(p)).not.toContain("pasos:");
  });

  it("round-trip idempotente con todos los bloques nuevos", () => {
    const src = [
      'enunciado: "Calculá {a}"',
      "variables:",
      "  a: random(1, 9)",
      "respuesta: a",
      "tolerancia_abs: 0.001",
      'explicacion: "Porque {a}"',
      "restricciones:",
      "  - a != 0",
      "pistas:",
      '  - "Pista 1"',
      '  - "Pista 2"',
      "",
    ].join("\n");
    const dsl1 = serialize(parse(src));
    const dsl2 = serialize(parse(dsl1));
    expect(dsl2).toBe(dsl1);
    expect(lint(parse(dsl1)).errors).toEqual([]);
  });
});

/* ---------------- WO-4: visual nativo (no-generador) ---------------- */

describe("WO-4 · bloque visual: read/write + runtime", () => {
  function base() {
    return parse('enunciado: "x"\nrespuesta: 1\n');
  }

  it("writeVisualRaw/readVisualRaw round-trippean un line-chart", () => {
    const visual = {
      kind: "line-chart",
      title: "v(t)",
      series: [
        {
          id: "s1",
          label: "Serie 1",
          points: [
            { x: 0, y: 0 },
            { x: 1, y: 2 },
          ],
        },
      ],
    };
    const p = writeVisualRaw(base(), visual);
    expect(readVisualKind(p)).toBe("line-chart");
    expect(readVisualRaw(p)).toEqual(visual);
  });

  it("round-trip DSL↔form del visual es idempotente (claves reservadas citadas)", () => {
    // El punto usa la clave `y`, palabra reservada: el serializador debe
    // citarla para que el DSL re-parsee (idempotencia).
    const p = writeVisualRaw(base(), {
      kind: "line-chart",
      series: [{ id: "s1", label: "S1", points: [{ x: 0, y: 1 }] }],
    });
    const dsl1 = serialize(p);
    const dsl2 = serialize(parse(dsl1));
    expect(dsl2).toBe(dsl1);
    // y la forma sobrevive el round-trip por el AST.
    expect(readVisualRaw(parse(dsl1))).toEqual(readVisualRaw(p));
  });

  it("una pregunta nativa con visual line-chart emite el VisualSpec al generar", () => {
    const p = writeVisualRaw(base(), {
      kind: "line-chart",
      series: [{ id: "s1", label: "S1", points: [{ x: 0, y: 0 }, { x: 1, y: 1 }] }],
    });
    const res = generate(compile(parse(serialize(p))), { seed: "t" });
    expect(res.visual?.kind).toBe("line-chart");
  });

  it("latex se autorea y round-trippea", () => {
    const p = writeVisualRaw(base(), {
      kind: "latex",
      content: "a^2 + b^2 = c^2",
      displayMode: true,
    });
    expect(readVisualKind(p)).toBe("latex");
    const res = generate(compile(parse(serialize(p))), { seed: "t" });
    expect(res.visual?.kind).toBe("latex");
  });

  it("writeVisualRaw(null) quita el bloque visual", () => {
    const p = writeVisualRaw(base(), { kind: "latex", content: "x" });
    expect(readVisualKind(p)).toBe("latex");
    const sin = writeVisualRaw(p, null);
    expect(readVisualKind(sin)).toBeNull();
    expect(serialize(sin)).not.toContain("visual");
  });
});
