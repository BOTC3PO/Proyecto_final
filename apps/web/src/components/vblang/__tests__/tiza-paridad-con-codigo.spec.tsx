/**
 * Paridad Form/Ambos ↔ Código: **todo bloque del DSL tiene que ser alcanzable
 * desde la interfaz**, sin pasar por modo Código.
 *
 * Este es el test que responde "¿la UI da lo mismo que el código?". Recorre los
 * bloques que la Referencia VBLang le muestra al docente (`ReferenciaRapida`) y
 * verifica, para cada uno, dónde se llega: DETALLES (metadata), el selector de
 * tipo, el property grid (campos del schema), o el menú "Añadir bloque".
 *
 * Si mañana el DSL gana un bloque y nadie lo cablea, esto falla.
 */
import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import {
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
  parse,
  serialize,
  type Plantilla,
  type TipoPregunta,
} from "@vb/vblang";
import { TizaQuestionCard, TizaPropertyGrid, type LiveValues } from "../TizaEditor";
import { applyTipo } from "../plantillaFields";

const EMPTY_LIVE: LiveValues = {};
const BASE = 'enunciado: "x"\nrespuesta: 1\ntipo: input\n';

function Harness({ initial }: { initial: string }) {
  const [plantilla, setPlantilla] = useState<Plantilla>(() => parse(initial));
  const onChange = (next: Plantilla) => setPlantilla(parse(serialize(next)));
  return (
    <>
      <TizaQuestionCard
        plantilla={plantilla}
        onChange={onChange}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        onSelectVariable={() => {}}
        live={EMPTY_LIVE}
      />
      <TizaPropertyGrid
        plantilla={plantilla}
        onChange={onChange}
        selection={{ kind: "pregunta" }}
        onSelectQuestion={() => {}}
        live={EMPTY_LIVE}
      />
    </>
  );
}

const dslDe = (tipo: TipoPregunta) => serialize(applyTipo(parse(BASE), tipo));

async function itemsDelMenu(
  user: ReturnType<typeof userEvent.setup>,
): Promise<string[]> {
  await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
  const menu = screen.getByRole("menu");
  return within(menu)
    .getAllByRole("menuitem")
    .map((b) => b.getAttribute("data-testid") ?? "");
}

/**
 * Cada bloque del DSL y cómo se llega desde la interfaz.
 *
 * `menu` — ítem de "Añadir bloque" (`tiza-add-<id>`).
 * `schema` — lo declara algún `QUESTION_TYPE_SCHEMAS`, así que `CamposDelSchema`
 *   o la UI propia de Tiza lo renderiza cuando el tipo lo usa.
 * `otro` — se llega por otra vía, que se nombra.
 */
const RUTA_POR_BLOQUE: Record<string, { via: "menu" | "schema" | "otro"; detalle: string }> = {
  metadata: { via: "otro", detalle: "panel DETALLES (nombre, descripción, materia, tags)" },
  tipo: { via: "otro", detalle: "selector Tipo de pregunta" },
  generador: { via: "otro", detalle: 'selector Tipo → "Generador (legacy)"' },
  enunciado: { via: "schema", detalle: "campo propio del property grid" },
  respuesta: { via: "schema", detalle: "campo propio del property grid" },
  unidad: { via: "schema", detalle: "campo propio del property grid" },
  tolerancia: { via: "schema", detalle: "campo propio del property grid" },
  explicacion: { via: "otro", detalle: "textarea Explicación del property grid" },
  pistas: { via: "menu", detalle: "tiza-add-pista" },
  pasos: { via: "menu", detalle: "tiza-add-pasos" },
  restricciones: { via: "menu", detalle: "tiza-add-restric" },
  enunciados: { via: "menu", detalle: "tiza-add-variante" },
  variables: { via: "menu", detalle: "tiza-add-variable" },
  dataset: { via: "menu", detalle: "tiza-add-dataset" },
  visual: { via: "menu", detalle: "tiza-add-visual" },
  opciones: { via: "menu", detalle: "tiza-add-opciones_cantidad (sólo mc)" },
  tolerancia_abs: { via: "menu", detalle: "tiza-add-tolerancia_abs (tipos con tolerancia)" },
  opciones_explicitas: { via: "schema", detalle: "mc, ordenar" },
  respuestas_validas: { via: "schema", detalle: "mc, completar, identificar_palabras" },
  respuesta_expr: { via: "schema", detalle: "expresion" },
  respuesta_iso: { via: "schema", detalle: "marcar_mapa" },
  respuesta_nombre: { via: "schema", detalle: "marcar_mapa" },
  respuesta_orden: { via: "schema", detalle: "ordenar" },
  mapa: { via: "schema", detalle: "marcar_mapa" },
  texto_analizar: { via: "schema", detalle: "análisis e identificar palabras" },
  etiquetas_pedidas: { via: "schema", detalle: "analisis_sintactico" },
  etiquetas_disponibles: { via: "schema", detalle: "analisis_spans" },
  spans_pedidos: { via: "schema", detalle: "analisis_spans" },
  correccion: { via: "schema", detalle: "abierta" },
  multiple: { via: "schema", detalle: "mc" },
  puntaje_parcial: { via: "schema", detalle: "mc, analisis_spans" },
};

describe("paridad UI ↔ Código", () => {
  it("no queda ningún bloque del DSL sin ruta en la interfaz", () => {
    // Los bloques que algún schema declara.
    const porSchema = new Set<string>();
    for (const t of ALL_QUESTION_TYPES) {
      for (const f of QUESTION_TYPE_SCHEMAS[t].fields) porSchema.add(f.block);
    }
    // Todo bloque marcado como `schema` tiene que estarlo de verdad.
    const mentirosos = Object.entries(RUTA_POR_BLOQUE)
      .filter(([b, r]) => r.via === "schema" && !porSchema.has(b))
      .map(([b]) => b);
    expect(mentirosos).toEqual([]);

    // Y todo bloque declarado por un schema tiene que tener ruta.
    const sinRuta = [...porSchema].filter((b) => !RUTA_POR_BLOQUE[b]);
    expect(sinRuta).toEqual([]);
  });

  it("los bloques con ruta `menu` están de verdad en el menú", async () => {
    const user = userEvent.setup();
    const esperados = Object.entries(RUTA_POR_BLOQUE)
      .filter(([, r]) => r.via === "menu")
      .map(([b]) => b);

    // Se juntan los ítems ofrecidos por TODOS los tipos: algunos son
    // condicionales (opciones → mc; tolerancia_abs → tipos con tolerancia).
    const vistos = new Set<string>();
    for (const tipo of ALL_QUESTION_TYPES) {
      const { unmount } = render(<Harness initial={dslDe(tipo)} />);
      for (const id of await itemsDelMenu(user)) vistos.add(id);
      unmount();
    }

    const idPorBloque: Record<string, string> = {
      pistas: "tiza-add-pista",
      pasos: "tiza-add-pasos",
      restricciones: "tiza-add-restric",
      enunciados: "tiza-add-variante",
      variables: "tiza-add-variable",
      dataset: "tiza-add-dataset",
      visual: "tiza-add-visual",
      opciones: "tiza-add-opciones_cantidad",
      tolerancia_abs: "tiza-add-tolerancia_abs",
    };
    const faltan = esperados.filter((b) => !vistos.has(idPorBloque[b]));
    expect(faltan).toEqual([]);
  });

  it("`visual:` se edita en Tiza (era el último que sólo estaba en el clásico)", async () => {
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);
    expect(screen.queryByTestId("tiza-visual")).toBeNull();

    await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));
    await user.click(screen.getByTestId("tiza-add-visual"));

    expect(screen.getByTestId("tiza-visual")).toBeTruthy();
    // Y se puede quitar, con lo que vuelve al menú.
    await user.click(screen.getByTestId("tiza-visual-quitar"));
    expect(screen.queryByTestId("tiza-visual")).toBeNull();
  });
});

describe("el menú no miente sobre lo que está habilitado", () => {
  it("ningún ítem se muestra apagado: si aparece, se puede usar", async () => {
    const user = userEvent.setup();
    render(<Harness initial={BASE} />);
    await user.click(screen.getByRole("button", { name: /Añadir bloque|Add block/i }));

    for (const item of within(screen.getByRole("menu")).getAllByRole("menuitem")) {
      expect(item).toBeEnabled();
      const s = getComputedStyle(item);
      // "Dataset externo" quedó gris y a 55 % de opacidad tras habilitarlo:
      // el `disabled` se sacó pero el estilo de deshabilitado no.
      expect(s.opacity === "" || Number(s.opacity) === 1).toBe(true);
      expect(s.cursor).not.toBe("default");
    }
  });
});
