import { useState, useCallback, type CSSProperties } from "react";
import type { Expr, Plantilla, VariableDecl } from "@vb/vblang";
import { Badge, Button, Card, Input, Select } from "../../ui";
import FieldGroup from "../FieldGroup";
import {
  addVariable,
  updateVariable,
  removeVariable,
  classifyVariable,
  makeRandomIntExpr,
  makeRandomFloatExpr,
  makeListExpr,
  makeRangeExpr,
  type VariableKind,
} from "../../components/vblang/plantillaFields";
import { DUMMY_LOC, exprToText } from "../../components/vblang/plantillaAst";
import { parseExprText } from "../../components/vblang/exprParse";
import {
  inferTipoVar,
  formatValor,
} from "../../components/vblang/PlantillaEditorSchema";
import { useFieldError } from "../LintContext";

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
  range: "Rango",
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
    case "range":
      return makeRangeExpr(0, 10);
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
  const expected = kind === "random-float" ? "random_float" : kind === "range" ? "rango" : "random";
  if (expr.name !== expected && !(kind === "range" && expr.name === "range")) return null;
  if (expr.args.length !== 2) return null;
  const lo = expr.args[0].kind === "num" ? expr.args[0].value : null;
  const hi = expr.args[1].kind === "num" ? expr.args[1].value : null;
  if (lo === null || hi === null) return null;
  return { lo, hi };
}

function extractListItems(expr: Expr): string[] | null {
  if (expr.kind === "array") {
    return expr.items.map((it) =>
      it.kind === "str" ? it.value : it.kind === "num" ? String(it.value) : "",
    );
  }
  if (expr.kind === "fun_call" && (expr.name === "uno_de" || expr.name === "choice")) {
    return expr.args.map((a) =>
      a.kind === "str" ? a.value : a.kind === "num" ? String(a.value) : "",
    );
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

  const setName = (nombre: string) => {
    onChange(updateVariable(plantilla, index, { ...decl, nombre }));
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
      kind === "random-float"
        ? makeRandomFloatExpr(lo, hi)
        : kind === "range"
          ? makeRangeExpr(lo, hi)
          : makeRandomIntExpr(lo, hi);
    onChange(updateVariable(plantilla, index, { ...decl, expr }));
  };

  const setListItems = (items: string[]) => {
    onChange(updateVariable(plantilla, index, { ...decl, expr: makeListExpr(items) }));
  };

  const handleRemove = useCallback(() => onRemove(index), [index, onRemove]);

  const rangeArgs = extractRangeArgs(decl.expr, kind);
  const listItems = extractListItems(decl.expr);
  const t = inferTipoVar(decl.expr);

  return (
    <li>
      <Card variant="flat" padding="sm" data-testid={`v2-var-card-${index}`}>
        <div style={cardBodyStyle}>
          <div style={rowStyle}>
            <Input
              size="sm"
              value={decl.nombre}
              onChange={(e) => setName(e.target.value)}
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

          {(kind === "random-int" || kind === "random-float" || kind === "range") && (
            <div style={rangeRowStyle}>
              <span style={labelSpanStyle}>rango</span>
              <Input
                size="sm"
                type="number"
                value={rangeArgs?.lo ?? ""}
                onChange={(e) =>
                  setRandomRange(Number(e.target.value), rangeArgs?.hi ?? 0)
                }
                aria-label={kind === "range" ? `Inicio de ${decl.nombre}` : `Mínimo de ${decl.nombre}`}
                data-testid={`v2-var-lo-${index}`}
                placeholder="min"
                style={{ width: "5rem", fontFamily: "var(--font-mono)" }}
              />
              <span style={labelSpanStyle}>a</span>
              <Input
                size="sm"
                type="number"
                value={rangeArgs?.hi ?? ""}
                onChange={(e) =>
                  setRandomRange(rangeArgs?.lo ?? 0, Number(e.target.value))
                }
                aria-label={kind === "range" ? `Fin de ${decl.nombre}` : `Máximo de ${decl.nombre}`}
                data-testid={`v2-var-hi-${index}`}
                placeholder="max"
                style={{ width: "5rem", fontFamily: "var(--font-mono)" }}
              />
              <code style={codeStyle}>{exprToText(decl.expr)}</code>
            </div>
          )}

          {kind === "list" && (
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
