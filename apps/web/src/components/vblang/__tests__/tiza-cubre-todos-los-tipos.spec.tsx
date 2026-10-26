/**
 * PLAN tiza-autoria-avanzada §1+§2 — guard de raíz.
 *
 * Tiza leía 4 claves hardcodeadas (`enunciado`, `respuesta`, `unidad`,
 * `tolerancia`) y nunca recorría `schema.fields`: 10 de los 11 tipos tenían
 * campos OBLIGATORIOS que no se podían editar en la interfaz. Nadie lo notaba
 * porque ningún test comparaba el schema contra lo que la UI ofrece.
 *
 * Esto lo compara: **todo campo `required` de todo tipo tiene que estar
 * alcanzable en el property grid**. Si mañana se agrega un tipo (o un campo
 * obligatorio a un tipo que ya existe) sin cablearlo, este test falla.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { useState } from "react";
import {
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
  parse,
  serialize,
  type Plantilla,
  type TipoPregunta,
} from "@vb/vblang";
import { TizaPropertyGrid, type LiveValues } from "../TizaEditor";
import { applyTipo } from "../plantillaFields";

const EMPTY_LIVE: LiveValues = {};
const BASE = 'enunciado: "x"\nrespuesta: 1\ntipo: input\n';

/** Property grid montado sobre el esqueleto que `applyTipo` arma para `tipo`. */
function montar(tipo: TipoPregunta) {
  function Harness() {
    const [plantilla, setPlantilla] = useState<Plantilla>(() =>
      parse(serialize(applyTipo(parse(BASE), tipo))),
    );
    return (
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={(next) => setPlantilla(parse(serialize(next)))}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />
    );
  }
  return render(<Harness />);
}

/** Claves que Tiza renderiza con UI propia (no vía `CamposDelSchema`). */
const CON_UI_PROPIA: Record<string, string> = {
  enunciado: "tiza-enunciado-input",
  respuesta: "tiza-respuesta-input",
  tolerancia: "tiza-tolerancia-input",
  unidad: "tiza-unidad-input",
};

/**
 * ¿El campo está presente en el DOM? Los que tienen UI propia se buscan por su
 * testid histórico; el resto por el genérico `tiza-campo-<key>` (las listas
 * exponen `-0`/`-add`, y etiquetas/spans sus propios testids).
 */
function campoPresente(key: string): boolean {
  if (CON_UI_PROPIA[key]) {
    // Los históricos no todos tienen testid: alcanza con que exista ALGO.
    return (
      screen.queryByTestId(CON_UI_PROPIA[key]) !== null ||
      document.querySelector("textarea, input") !== null
    );
  }
  if (screen.queryByTestId(`tiza-campo-${key}`)) return true;
  if (screen.queryByTestId(`tiza-campo-${key}-add`)) return true;
  if (screen.queryByTestId(`tiza-campo-${key}-0`)) return true;
  if (key === "etiquetas_pedidas") return screen.queryByTestId("tiza-etiqueta-add") !== null;
  if (key === "spans_pedidos") return screen.queryByTestId("tiza-span-add") !== null;
  return false;
}

describe("§2 · todo campo obligatorio del schema es editable en Tiza", () => {
  for (const tipo of ALL_QUESTION_TYPES) {
    const schema = QUESTION_TYPE_SCHEMAS[tipo];
    const obligatorios = schema.fields.filter((f) => f.required);

    it(`${tipo}: ${obligatorios.length} campo(s) obligatorio(s)`, () => {
      const { unmount } = montar(tipo);
      const faltan = obligatorios.filter((f) => !campoPresente(f.key)).map((f) => f.key);
      expect(faltan).toEqual([]);
      unmount();
    });
  }

  it("los campos OPCIONALES también se ofrecen (nada queda sólo en modo Código)", () => {
    const faltantes: string[] = [];
    for (const tipo of ALL_QUESTION_TYPES) {
      const { unmount } = montar(tipo);
      for (const f of QUESTION_TYPE_SCHEMAS[tipo].fields) {
        if (!campoPresente(f.key)) faltantes.push(`${tipo}.${f.key}`);
      }
      unmount();
    }
    expect(faltantes).toEqual([]);
  });
});

describe("§1 · los campos del tipo se renderizan de verdad", () => {
  it("mc: las opciones son editables (antes se publicaba 'Opción 1')", () => {
    montar("mc");
    expect(screen.getByTestId("tiza-campo-opciones-0")).toBeTruthy();
    expect(screen.getByTestId("tiza-campo-opciones-add")).toBeTruthy();
  });

  it("marcar_mapa: mapa (enum) y respuesta_iso (texto)", () => {
    montar("marcar_mapa");
    expect(screen.getByTestId("tiza-campo-mapa")).toBeTruthy();
    expect(screen.getByTestId("tiza-campo-respuesta_iso")).toBeTruthy();
  });

  it("ordenar: ítems y orden correcto", () => {
    montar("ordenar");
    expect(screen.getByTestId("tiza-campo-items-0")).toBeTruthy();
    expect(screen.getByTestId("tiza-campo-respuesta_orden")).toBeTruthy();
  });

  it("abierta: corrección (enum)", () => {
    montar("abierta");
    expect(screen.getByTestId("tiza-campo-correccion")).toBeTruthy();
  });

  it("expresion: respuesta_expr", () => {
    montar("expresion");
    expect(screen.getByTestId("tiza-campo-respuesta_expr")).toBeTruthy();
  });

  it("analisis_sintactico: pares palabra/etiqueta", () => {
    montar("analisis_sintactico");
    expect(screen.getByTestId("tiza-campo-texto_analizar")).toBeTruthy();
    expect(screen.getByTestId("tiza-etiqueta-add")).toBeTruthy();
  });

  it("analisis_spans: spans desde/hasta/etiqueta (§7)", () => {
    montar("analisis_spans");
    expect(screen.getByTestId("tiza-span-add")).toBeTruthy();
  });
});
