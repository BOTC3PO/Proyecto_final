import { useState, useCallback, useEffect, type CSSProperties } from "react";
import type { Expr, Plantilla, VariableDecl } from "@vb/vblang";
import { Badge, Button, Card, Input, Select } from "../../ui";
import FieldGroup from "../FieldGroup";
import {
  addVariable,
  updateVariable,
  renameVariable,
  removeVariable,
  classifyVariable,
  listaEditableComoTexto,
  withListItems,
  makeRandomIntExpr,
  makeRandomFloatExpr,
  makeListExpr,
  type VariableKind,
} from "../../components/vblang/plantillaFields";
import { DUMMY_LOC, exprToText, numLiteral } from "../../components/vblang/plantillaAst";
import { parseExprText } from "../../components/vblang/exprParse";
import {
  inferTipoVar,
  formatValor,
} from "../../components/vblang/PlantillaEditorSchema";
import { useFieldError } from "../LintContext";
import { useI18n } from "../../i18n/I18nContext";

export type VariablesFieldProps = {
  plantilla: Plantilla;
  variables: VariableDecl[];
  valores?: Record<string, unknown>;
  onChange: (next: Plantilla) => void;
};

const KIND_LABELS: Record<VariableKind, string> = {
  "random-int": "Aleatorio entero",
  "random-float": "Aleatorio decimal",
  list: "Lista",
  expr: "Expresión",
};

const KIND_OPTIONS = Object.keys(KIND_LABELS) as VariableKind[];

function uniqueName(taken: Set<string>, base = "v"): string {
  if (!taken.has(base)) return base;
  let i = 2;
  while (taken.has(`${base}_${i}`)) i++;
  return `${base}_${i}`;
}

function makeDefaultExpr(kind: VariableKind): Expr {
  switch (kind) {
    case "random-int":
      return makeRandomIntExpr(1, 10);
    case "random-float":
      return makeRandomFloatExpr(0, 1);
    case "list":
      return makeListExpr(["opcion_a", "opcion_b"]);
    case "expr":
    default:
      return { kind: "num", value: 0, loc: DUMMY_LOC };
  }
}

function makeDecl(nombre: string, kind: VariableKind): VariableDecl {
  return { nombre, expr: makeDefaultExpr(kind), loc: DUMMY_LOC };
}

/* ---- helpers to extract structured data from expressions ---- */

interface RangeArgs { lo: number; hi: number }

function extractRangeArgs(expr: Expr, kind: VariableKind): RangeArgs | null {
  if (expr.kind !== "fun_call") return null;
  const expected = kind === "random-float" ? "random_float" : "random";
  if (expr.name !== expected) return null;
  if (expr.args.length !== 2) return null;
  // `numLiteral` y no `kind === "num"`: los negativos vuelven del parser como
  // unario, así que el rango se leía vacío y se pisaba con ceros al editar.
  const lo = numLiteral(expr.args[0]);
  const hi = numLiteral(expr.args[1]);
  if (lo === null || hi === null) return null;
  return { lo, hi };
}

/** Texto de un ítem de lista; `null` si no es un literal editable como texto. */
function itemToText(e: Expr): string {
  if (e.kind === "str") return e.value;
  const n = numLiteral(e);
  return n === null ? "" : String(n);
}

function extractListItems(expr: Expr): string[] | null {
  if (expr.kind === "array") {
    return expr.items.map(itemToText);
  }
  if (expr.kind === "fun_call" && (expr.name === "uno_de" || expr.name === "choice")) {
    return expr.args.map(itemToText);
  }
  return null;
}

/* ---- tone → badge variant mapping ---- */

type VarTone = "success" | "info" | "accent" | "warning";

function toneToBadgeVariant(tone: VarTone): "success" | "info" | "accent" | "warning" {
  return tone;
}

/* ---- styles ---- */

const listStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-3)",
  margin: "var(--space-0)",
  padding: "var(--space-0)",
  listStyle: "none",
};

const cardBodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)",
};

const rowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--space-2)",
};

const rangeRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--space-2)",
};

const labelSpanStyle: CSSProperties = {
  fontSize: "var(--text-xs)",
  color: "var(--c-hint)",
};

const codeStyle: CSSProperties = {
  fontSize: "var(--text-xs)",
  fontFamily: "var(--font-mono)",
  color: "var(--c-hint)",
};

const previewStyle: CSSProperties = {
  fontSize: "var(--text-xs)",
  color: "var(--c-hint)",
};

const addBarStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--space-2)",
};

/* ---- VariableCardV2 (single variable, on primitives) ---- */

function VariableCardV2({
  plantilla,
  index,
  decl,
  valorPreview,
  onChange,
  onRemove,
}: {
  plantilla: Plantilla;
  index: number;
  decl: VariableDecl;
  valorPreview?: unknown;
  onChange: (next: Plantilla) => void;
  onRemove: (index: number) => void;
}) {
  const [kind, setKindState] = useState<VariableKind>(classifyVariable(decl.expr));
  // `t` acá abajo es `inferTipoVar` (shadowing preexistente), así que el de
  // i18n entra aliasado. El resto del archivo sigue en español hardcodeado.
  const { t: tt } = useI18n();

  /**
   * PLAN casos-limite §11 — `updateVariable(..., { ...decl, nombre })` cambiaba
   * la declaración y dejaba las referencias en el nombre viejo: la plantilla
   * quedaba con "variable indefinida". `renameVariable` reescribe el enunciado
   * y las expresiones. Se confirma al salir del campo (o con Enter) para poder
   * llegar a nombres cuyo prefijo es inválido o choca con otra variable.
   */
  const [nombreDraft, setNombreDraft] = useState(decl.nombre);
  useEffect(() => setNombreDraft(decl.nombre), [decl.nombre]);
  const commitName = () => {
    const next = renameVariable(plantilla, index, nombreDraft);
    if (next) onChange(next);
    else setNombreDraft(decl.nombre);
  };

  const setKind = (newKind: VariableKind) => {
    setKindState(newKind);
    const next = makeDefaultExpr(newKind);
    onChange(updateVariable(plantilla, index, { ...decl, expr: next }));
  };

  const setExprText = (text: string) => {
    const result = parseExprText(text);
    if (result.ok) {
      onChange(updateVariable(plantilla, index, { ...decl, expr: result.expr }));
    }
  };

  const setRandomRange = (lo: number, hi: number) => {
    const expr =
      kind === "random-float" ? makeRandomFloatExpr(lo, hi) : makeRandomIntExpr(lo, hi);
    onChange(updateVariable(plantilla, index, { ...decl, expr }));
  };

  /** §0 — `withListItems` y no `makeListExpr`: editar los ítems de un
   *  `uno_de([...])` le sacaba el wrapper y la variable pasaba de "uno al azar"
   *  a "la lista entera". */
  const setListItems = (items: string[]) => {
    onChange(updateVariable(plantilla, index, { ...decl, expr: withListItems(decl.expr, items) }));
  };

  const handleRemove = useCallback(() => onRemove(index), [index, onRemove]);

  const rangeArgs = extractRangeArgs(decl.expr, kind);
  const listItems = extractListItems(decl.expr);
  const t = inferTipoVar(decl.expr);

  /** Escribe un extremo del rango. Un `<input type="number">` reporta `""`
   *  mientras el texto es parcial (el `-` de un negativo, por ejemplo) y
   *  `Number("")` es 0: sin este guard, empezar a escribir un negativo pisaba
   *  el extremo con cero. */
  const setRangeEnd = (cual: "lo" | "hi", raw: string) => {
    if (raw.trim() === "") return;
    const n = Number(raw);
    if (!Number.isFinite(n)) return;
    const otro = cual === "lo" ? (rangeArgs?.hi ?? n + 1) : (rangeArgs?.lo ?? n - 1);
    setRandomRange(cual === "lo" ? n : otro, cual === "hi" ? n : otro);
  };

  return (
    <li>
      <Card variant="flat" padding="sm" data-testid={`v2-var-card-${index}`}>
        <div style={cardBodyStyle}>
          <div style={rowStyle}>
            <Input
              size="sm"
              value={nombreDraft}
              onChange={(e) => setNombreDraft(e.target.value)}
              onBlur={commitName}
              onKeyDown={(e) => {
                if (e.key === "Enter") commitName();
              }}
              aria-label={`Nombre de variable ${index + 1}`}
              data-testid={`v2-var-name-${index}`}
              placeholder="nombre"
              style={{ width: "8rem", fontFamily: "var(--font-mono)" }}
            />
            <Select
              size="sm"
              value={kind}
              onChange={(e) => setKind(e.target.value as VariableKind)}
              aria-label={`Tipo de variable ${index + 1}`}
              data-testid={`v2-var-kind-${index}`}
              style={{ width: "auto" }}
            >
              {KIND_OPTIONS.map((k) => (
                <option key={k} value={k}>
                  {KIND_LABELS[k]}
                </option>
              ))}
            </Select>
            <Badge size="sm" variant={toneToBadgeVariant(t.tone as VarTone)}>
              {t.label}
            </Badge>
            <Button
              variant="danger"
              size="sm"
              onClick={handleRemove}
              aria-label={`Eliminar variable ${decl.nombre}`}
              data-testid={`v2-var-remove-${index}`}
              style={{ marginLeft: "auto" }}
            >
              Eliminar
            </Button>
          </div>

          {(kind === "random-int" || kind === "random-float") && (
            <div style={rangeRowStyle}>
              <span style={labelSpanStyle}>rango</span>
              <Input
                size="sm"
                type="number"
                value={rangeArgs?.lo ?? ""}
                onChange={(e) => setRangeEnd("lo", e.target.value)}
                aria-label={`Mínimo de ${decl.nombre}`}
                data-testid={`v2-var-lo-${index}`}
                placeholder="min"
                style={{ width: "5rem", fontFamily: "var(--font-mono)" }}
              />
              <span style={labelSpanStyle}>a</span>
              <Input
                size="sm"
                type="number"
                value={rangeArgs?.hi ?? ""}
                onChange={(e) => setRangeEnd("hi", e.target.value)}
                aria-label={`Máximo de ${decl.nombre}`}
                data-testid={`v2-var-hi-${index}`}
                placeholder="max"
                style={{ width: "5rem", fontFamily: "var(--font-mono)" }}
              />
              <code style={codeStyle}>{exprToText(decl.expr)}</code>
              {/* PLAN casos-limite §6 — mín > máx compila pero falla en CADA
                  intento del alumno ("random: int: max (1) < min (10)"). Se
                  avisa sin bloquear el tipeo, igual que en Tiza. */}
              {rangeArgs && rangeArgs.lo > rangeArgs.hi ? (
                <span
                  style={{ fontSize: 11, color: "var(--c-danger)" }}
                  data-testid={`v2-var-rango-invertido-${index}`}
                >
                  {tt("comun.rangoInvertido")}
                </span>
              ) : null}
            </div>
          )}

          {kind === "list" && !listaEditableComoTexto(decl.expr) && (
            /* §0 — objetos o referencia (`uno_de(paises)`): editar como texto
               vaciaba la lista. Se muestra el valor y se manda a modo Código. */
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
              <span style={labelSpanStyle} data-testid={`v2-var-items-no-editable-${index}`}>
                {tt("tizaEditor.listaNoEditableEnFormulario")}
              </span>
              <code style={codeStyle}>{exprToText(decl.expr)}</code>
            </div>
          )}

          {kind === "list" && listaEditableComoTexto(decl.expr) && (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
              <span style={labelSpanStyle}>ítems (uno por línea)</span>
              <textarea
                value={listItems?.join("\n") ?? ""}
                onChange={(e) =>
                  setListItems(
                    e.target.value
                      .split("\n")
                      .map((s) => s.trim())
                      .filter((s) => s !== ""),
                  )
                }
                aria-label={`Ítems de ${decl.nombre}`}
                data-testid={`v2-var-items-${index}`}
                rows={Math.max(2, Math.min(6, (listItems?.length ?? 0) + 1))}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  padding: "var(--space-2)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--c-border-strong)",
                  borderRadius: "var(--r-md)",
                  background: "var(--c-surface)",
                  color: "var(--c-text)",
                  resize: "vertical",
                }}
                placeholder={"manzana\nbanana\nnaranja"}
              />
              <code style={codeStyle}>{exprToText(decl.expr)}</code>
            </div>
          )}

          {kind === "expr" && (
            <div style={rangeRowStyle}>
              <span style={labelSpanStyle}>expresión</span>
              <Input
                size="sm"
                value={exprToText(decl.expr)}
                onChange={(e) => setExprText(e.target.value)}
                aria-label={`Expresión de ${decl.nombre}`}
                data-testid={`v2-var-expr-${index}`}
                placeholder="a + 1"
                style={{ flex: 1, fontFamily: "var(--font-mono)" }}
              />
            </div>
          )}

          {valorPreview !== undefined && (
            <div style={previewStyle} data-testid={`v2-var-now-${index}`}>
              ahora: <strong>{formatValor(valorPreview)}</strong>
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}

/* ---- VariablesField (list of cards + add bar) ---- */

export default function VariablesField({
  plantilla,
  variables,
  valores,
  onChange,
}: VariablesFieldProps) {
  const handleAdd = (kind: VariableKind) => {
    const taken = new Set(variables.map((d) => d.nombre));
    const nombre = uniqueName(taken, "v");
    onChange(addVariable(plantilla, makeDecl(nombre, kind)));
  };

  const handleRemove = (index: number) => {
    onChange(removeVariable(plantilla, index));
  };

  return (
    <FieldGroup
      label="Variables"
      help="Variables declaradas que se evalúan aleatoriamente en cada instancia."
      error={useFieldError("variables")}
    >
      <ul style={listStyle} aria-label="Variables de la plantilla">
        {variables.map((d, idx) => (
          <VariableCardV2
            key={`${idx}-${d.nombre}`}
            plantilla={plantilla}
            index={idx}
            decl={d}
            valorPreview={valores ? valores[d.nombre] : undefined}
            onChange={onChange}
            onRemove={handleRemove}
          />
        ))}
      </ul>
      <div style={addBarStyle}>
        <span style={labelSpanStyle}>+ Añadir</span>
        {KIND_OPTIONS.map((k) => (
          <Button
            key={k}
            variant="ghost"
            size="sm"
            onClick={() => handleAdd(k)}
            data-testid={`v2-var-add-${k}`}
          >
            {KIND_LABELS[k]}
          </Button>
        ))}
      </div>
    </FieldGroup>
  );
}
