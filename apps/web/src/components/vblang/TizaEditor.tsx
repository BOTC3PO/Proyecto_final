/**
 * components/vblang/TizaEditor.tsx — WO-V2d
 *
 * Capa de presentación + edición contextual del editor Tiza:
 *   • TizaQuestionCard: tarjeta de presentación del centro (read-outs en vivo,
 *     chips de variables clicables, pistas con badges, "Añadir bloque").
 *   • TizaPropertyGrid: property grid contextual a la derecha (pregunta vs variable).
 *
 * Reusa plantillaFields/plantillaAst para el round-trip y no duplica lógica de datos.
 * Tokens-only.
 */
import { useMemo, type CSSProperties, type ReactNode } from "react";
import {
  type Expr,
  type Field,
  type Plantilla,
  type TextField,
  type VariableDecl,
  QUESTION_TYPE_SCHEMAS,
} from "@vb/vblang";
import Menu from "../../ui/Menu";
import CodeEditor from "../../editor/CodeEditor";
import ValidationReport from "./ValidationReport";
import type { ValidationState } from "../../hooks/usePlantillaValidation";
import {
  readTextField,
  readNumberField,
  writeTextField,
  writeNumberField,
  updateVariable,
  makeRandomIntExpr,
  makeListExpr,
} from "./plantillaFields";
import {
  getBlock,
  exprToText,
  exprToStringValue,
  textToExpr,
  numLit,
  DUMMY_LOC,
  readPistas,
  writePistas,
  readExplicacion,
  writeExplicacion,
} from "./plantillaAst";

/* ─── tipos ─────────────────────────────────────────────────────────── */

export type TizaSelection =
  | { kind: "pregunta" }
  | { kind: "variable"; index: number };

export interface LiveValues {
  /** Valores de las variables en el primer preview exitoso. */
  variables?: Record<string, unknown>;
  /** Valor resuelto de la respuesta (si aplica). */
  respuesta?: string;
  /** Tolerancia absoluta resuelta (si aplica). */
  toleranciaAbs?: number;
}

export interface TizaQuestionCardProps {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  selection: TizaSelection;
  onSelectQuestion: () => void;
  onSelectVariable: (index: number) => void;
  live: LiveValues;
}

export interface TizaPropertyGridProps {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  selection: TizaSelection;
  onSelectQuestion: () => void;
  live: LiveValues;
  validation?: ValidationState;
}

/* ─── helpers visuales ──────────────────────────────────────────────── */

const mono: CSSProperties = {
  fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--c-text-3)",
        marginBottom: 7,
      }}
    >
      {children}
    </div>
  );
}

function inputStyle(monoSpace = false): CSSProperties {
  return {
    width: "100%",
    border: "1px solid var(--c-border)",
    borderRadius: "var(--r-md)",
    padding: "10px 12px",
    color: "var(--c-text)",
    background: "var(--c-surface-2)",
    outline: "none",
    fontSize: 13.5,
    lineHeight: 1.45,
    fontFamily: monoSpace
      ? "var(--font-mono-css, ui-monospace, monospace)"
      : "var(--font-sans)",
  };
}

/* ─── helpers de lectura/escritura ──────────────────────────────────── */

function fieldByKey(p: Plantilla, key: string): TextField | null {
  const schema = QUESTION_TYPE_SCHEMAS[p.tipoInferido];
  if (!schema) return null;
  const f = schema.fields.find((x) => x.key === key);
  return f && f.kind === "text" ? (f as TextField) : null;
}

function numberFieldByKey(p: Plantilla, key: string): Field | null {
  const schema = QUESTION_TYPE_SCHEMAS[p.tipoInferido];
  if (!schema) return null;
  const f = schema.fields.find((x) => x.key === key);
  return f && f.kind === "number" ? f : null;
}

function getVariables(p: Plantilla): VariableDecl[] {
  return getBlock(p, "variables")?.declaraciones ?? [];
}

function getVariable(p: Plantilla, index: number): VariableDecl | null {
  return getVariables(p)[index] ?? null;
}

function formatValue(v: unknown): string {
  if (v === undefined || v === null) return "?";
  if (typeof v === "number") {
    return Number.isInteger(v) ? String(v) : v.toFixed(3).replace(/\.?0+$/, "");
  }
  if (typeof v === "string") return v;
  if (typeof v === "boolean") return v ? "Sí" : "No";
  return String(v);
}

function classifyVariable(expr: Expr): "random" | "list" | "expr" {
  if (expr.kind === "fun_call") {
    if (expr.name === "random" || expr.name === "random_float") return "random";
    if (expr.name === "uno_de" || expr.name === "choice") return "list";
  }
  if (expr.kind === "array") return "list";
  return "expr";
}

function randomBounds(expr: Expr): { min: string; max: string } {
  if (
    expr.kind === "fun_call" &&
    (expr.name === "random" || expr.name === "random_float") &&
    expr.args.length === 2 &&
    expr.args[0]!.kind === "num" &&
    expr.args[1]!.kind === "num"
  ) {
    return { min: String(expr.args[0].value), max: String(expr.args[1].value) };
  }
  return { min: "", max: "" };
}

function listOptions(expr: Expr): string {
  if (expr.kind === "fun_call" && expr.args[0]?.kind === "array") {
    return expr.args[0].items.map(exprToStringValue).join(", ");
  }
  if (expr.kind === "array") {
    return expr.items.map(exprToStringValue).join(", ");
  }
  return "";
}

function makeChoiceExpr(items: string[]): Expr {
  return {
    kind: "fun_call",
    name: "uno_de",
    args: [makeListExpr(items)],
    loc: DUMMY_LOC,
  };
}

function updateVariableExpr(
  p: Plantilla,
  index: number,
  expr: Expr,
): Plantilla {
  const v = getVariable(p, index);
  if (!v) return p;
  return updateVariable(p, index, { ...v, expr });
}

/* ─── Tarjeta de presentación (centro) ──────────────────────────────── */

export function TizaQuestionCard({
  plantilla,
  onChange,
  selection,
  onSelectQuestion,
  onSelectVariable,
  live,
}: TizaQuestionCardProps) {
  const tipo = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const enunField = fieldByKey(plantilla, "enunciado");
  const respField = fieldByKey(plantilla, "respuesta");
  const tolField = numberFieldByKey(plantilla, "tolerancia");

  const enunciado = enunField ? readTextField(plantilla, enunField) : "";
  const respuestaExpr = respField ? readTextField(plantilla, respField) : "";
  const toleranciaAbs = tolField ? readNumberField(plantilla, tolField) : "";

  const variables = getVariables(plantilla);
  const pistas = readPistas(plantilla);
  const explicacion = readExplicacion(plantilla);

  const enunciadoRendered = useMemo(() => {
    let text = enunciado;
    for (const [name, value] of Object.entries(live.variables ?? {})) {
      text = text.replaceAll(`{${name}}`, formatValue(value));
    }
    return text;
  }, [enunciado, live.variables]);

  const isQuestionSelected = selection.kind === "pregunta";

  return (
    <div
      style={{
        maxWidth: 560,
        margin: "0 auto",
        background: "var(--c-surface)",
        border: "1px solid var(--c-border)",
        borderTop: "3px solid var(--c-accent)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
      data-testid="tiza-question-card"
    >
      {/* pill de tipo */}
      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "var(--c-accent-soft)",
            color: "var(--c-accent)",
            fontSize: 12,
            fontWeight: 700,
            padding: "5px 11px",
            borderRadius: 999,
          }}
        >
          <span aria-hidden="true">№</span> {schema?.label ?? tipo}
        </span>
        <span style={{ fontSize: 12, color: "var(--c-text-3)" }}>
          {schema?.descripcion ?? "Editá las propiedades a la derecha."}
        </span>
      </div>

      {/* ENUNCIADO */}
      <div
        onClick={onSelectQuestion}
        style={{
          cursor: "pointer",
          borderRadius: "var(--r-md)",
          outline: isQuestionSelected ? "2px solid var(--c-accent)" : undefined,
          outlineOffset: 4,
        }}
        role="button"
        tabIndex={0}
        aria-pressed={isQuestionSelected}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onSelectQuestion();
        }}
      >
        <Eyebrow>Enunciado</Eyebrow>
        <textarea
          value={enunciado}
          rows={2}
          placeholder="Escribí la consigna…"
          onChange={(e) => {
            if (!enunField) return;
            const next = writeTextField(plantilla, enunField, e.target.value);
            if (next) onChange(next);
          }}
          onClick={(e) => e.stopPropagation()}
          style={{
            ...inputStyle(),
            fontSize: 17,
            fontWeight: 560,
            lineHeight: 1.4,
          }}
        />
        <div
          style={{
            marginTop: 9,
            fontSize: 13.5,
            color: "var(--c-text-2)",
          }}
        >
          Vista: <span style={{ color: "var(--c-text)", fontWeight: 560 }}>{enunciadoRendered}</span>
        </div>
      </div>

      {/* VARIABLES */}
      {variables.length > 0 ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div>
            <Eyebrow>Variables</Eyebrow>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
              {variables.map((v, i) => {
                const selected =
                  selection.kind === "variable" && selection.index === i;
                const liveValue = formatValue(live.variables?.[v.nombre]);
                const def =
                  classifyVariable(v.expr) === "random"
                    ? `${v.nombre}(${randomBounds(v.expr).min}, ${
                        randomBounds(v.expr).max
                      })`
                    : classifyVariable(v.expr) === "list"
                      ? "opciones(…)"
                      : `= ${exprToText(v.expr)}`;
                return (
                  <button
                    key={`${v.nombre}-${i}`}
                    type="button"
                    onClick={() => onSelectVariable(i)}
                    aria-pressed={selected}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 9,
                      padding: "7px 11px",
                      borderRadius: 10,
                      cursor: "pointer",
                      background: selected
                        ? "var(--c-accent-soft)"
                        : "var(--c-surface)",
                      border: `1.5px solid ${
                        selected ? "var(--c-accent)" : "var(--c-border)"
                      }`,
                    }}
                  >
                    <span
                      style={{
                        ...mono,
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--c-accent)",
                      }}
                    >
                      {v.nombre}
                    </span>
                    <span style={{ ...mono, fontSize: 12, color: "var(--c-text-3)" }}>
                      {def}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--c-text-2)",
                        background: "var(--c-surface)",
                        border: "1px solid var(--c-border)",
                        padding: "2px 7px",
                        borderRadius: 999,
                      }}
                    >
                      ahora: {liveValue}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      ) : null}

      {/* RESPUESTA + TOLERANCIA */}
      {(respField || tolField) && (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            {respField ? (
              <div>
                <Eyebrow>Respuesta</Eyebrow>
                <div
                  style={{
                    ...mono,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--c-text)",
                  }}
                >
                  {respuestaExpr || "—"}{" "}
                  <span style={{ color: "var(--c-text-3)" }}>
                    = {live.respuesta ?? "?"}
                  </span>
                </div>
              </div>
            ) : null}
            {tolField ? (
              <div>
                <Eyebrow>Tolerancia</Eyebrow>
                <div
                  style={{
                    ...mono,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--c-text)",
                  }}
                >
                  ± {toleranciaAbs || "0"}
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}

      {/* PISTAS */}
      {pistas.length > 0 ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div>
            <Eyebrow>Pistas</Eyebrow>
          {pistas.map((text: string, i: number) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    flex: "0 0 auto",
                    borderRadius: 6,
                    background: "var(--c-accent-soft)",
                    color: "var(--c-accent)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ fontSize: 13.5, color: "var(--c-text-2)", lineHeight: 1.45 }}>
                  {text}{" "}
                  <span style={{ color: "var(--c-text-3)" }}>· −25%</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {/* EXPLICACIÓN */}
      {explicacion ? (
        <>
          <div style={{ height: 1, background: "var(--c-border)" }} />
          <div>
            <Eyebrow>Explicación</Eyebrow>
            <div style={{ fontSize: 13.5, color: "var(--c-text-2)", lineHeight: 1.5 }}>
              {explicacion}
            </div>
          </div>
        </>
      ) : null}

      {/* AÑADIR BLOQUE */}
      <AddBlockButton
        onSelect={(kind) => {
          if (kind === "pista") {
            const next = writePistas(plantilla, [...pistas, "Nueva pista…"]);
            onChange(next);
          }
          // pasos / restric / variante / dataset quedan para futuras iteraciones
        }}
      />
    </div>
  );
}

/* ─── "＋ Añadir bloque" ────────────────────────────────────────────── */

const ADD_ITEMS = [
  { id: "pista", label: "Pista", icon: "💡", tag: "escalonada" },
  { id: "pasos", label: "Pasos de resolución", icon: "≡", tag: "" },
  { id: "restric", label: "Restricción", icon: "≠", tag: "sobre variables" },
  { id: "variante", label: "Variante de enunciado", icon: "¶", tag: "" },
  { id: "dataset", label: "Dataset externo", icon: "⊟", tag: "pronto" },
];

function AddBlockButton({ onSelect }: { onSelect: (kind: string) => void }) {
  return (
    <Menu
      align="start"
      panelWidth="248px"
      trigger={(props) => (
        <button
          type="button"
          {...props}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "9px 14px",
            borderRadius: "var(--r-md)",
            border: "1px dashed var(--c-border)",
            background: "transparent",
            color: "var(--c-accent)",
            fontSize: 13,
            fontWeight: 660,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <span aria-hidden="true">＋</span> Añadir bloque
        </button>
      )}
    >
      {({ close }) => (
        <div style={{ display: "flex", flexDirection: "column", padding: 6 }}>
          {ADD_ITEMS.map((it) => (
            <button
              key={it.id}
              type="button"
              role="menuitem"
              disabled={it.id === "dataset"}
              onClick={() => {
                onSelect(it.id);
                close();
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 11,
                padding: "9px 10px",
                borderRadius: 8,
                border: 0,
                background: "transparent",
                color: it.id === "dataset" ? "var(--c-text-3)" : "var(--c-text)",
                fontSize: 13,
                fontWeight: 560,
                cursor: it.id === "dataset" ? "default" : "pointer",
                textAlign: "left",
                opacity: it.id === "dataset" ? 0.55 : 1,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  flex: "0 0 auto",
                  borderRadius: 7,
                  background: "var(--c-accent-soft)",
                  color: "var(--c-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                }}
              >
                {it.icon}
              </span>
              <span style={{ flex: 1 }}>{it.label}</span>
              <span style={{ fontSize: 11, color: "var(--c-text-3)" }}>{it.tag}</span>
            </button>
          ))}
        </div>
      )}
    </Menu>
  );
}

/* ─── Property grid contextual ──────────────────────────────────────── */

export function TizaPropertyGrid({
  plantilla,
  onChange,
  selection,
  onSelectQuestion,
  live,
  validation,
}: TizaPropertyGridProps) {
  if (selection.kind === "variable") {
    return (
      <VariablePropertyGrid
        plantilla={plantilla}
        onChange={onChange}
        index={selection.index}
        onSelectQuestion={onSelectQuestion}
        live={live}
      />
    );
  }
  return (
    <QuestionPropertyGrid
      plantilla={plantilla}
      onChange={onChange}
      live={live}
      validation={validation}
    />
  );
}

/* ─── Property grid: pregunta ───────────────────────────────────────── */

function QuestionPropertyGrid({
  plantilla,
  onChange,
  live,
  validation,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  live: LiveValues;
  validation?: ValidationState;
}) {
  const tipo = plantilla.tipoInferido;
  const schema = QUESTION_TYPE_SCHEMAS[tipo];
  const enunField = fieldByKey(plantilla, "enunciado");
  const respField = fieldByKey(plantilla, "respuesta");
  const unidadField = fieldByKey(plantilla, "unidad");
  const tolField = numberFieldByKey(plantilla, "tolerancia");

  const enunciado = enunField ? readTextField(plantilla, enunField) : "";
  const respuesta = respField ? readTextField(plantilla, respField) : "";
  const unidad = unidadField ? readTextField(plantilla, unidadField) : "";
  const tolerancia = tolField ? readNumberField(plantilla, tolField) : "";
  const pistas = readPistas(plantilla);
  const explicacion = readExplicacion(plantilla);

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PropertyGridHeader icon="№" title={schema?.label ?? "Pregunta"} />
      <div
        style={{
          padding: 18,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* TIPO */}
        <div>
          <Eyebrow>Tipo de pregunta</Eyebrow>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "10px 12px",
                border: "1px solid var(--c-border)",
                borderRadius: "var(--r-md)",
                background: "var(--c-surface-2)",
                fontSize: 13.5,
                fontWeight: 600,
                color: "var(--c-text)",
              }}
            >
              <span style={{ color: "var(--c-accent)" }}>№</span>{" "}
              {schema?.label ?? tipo}
            </div>
            <button
              type="button"
              disabled
              title="Cambiar tipo desde el editor central"
              style={{
                padding: "10px 12px",
                borderRadius: "var(--r-md)",
                border: "1px solid var(--c-border)",
                background: "transparent",
                color: "var(--c-text-3)",
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "not-allowed",
              }}
            >
              cambiar
            </button>
          </div>
        </div>

        {/* ENUNCIADO */}
        {enunField ? (
          <div>
            <Eyebrow>Enunciado</Eyebrow>
            <textarea
              value={enunciado}
              rows={3}
              onChange={(e) => {
                const next = writeTextField(plantilla, enunField, e.target.value);
                if (next) onChange(next);
              }}
              style={inputStyle()}
            />
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              Usá{" "}
              <code style={{ ...mono, color: "var(--c-accent)" }}>{"{var}"}</code> para
              insertar variables.
            </div>
          </div>
        ) : null}

        {/* RESPUESTA */}
        {respField ? (
          <div>
            <Eyebrow>Respuesta</Eyebrow>
            <input
              type="text"
              value={respuesta}
              onChange={(e) => {
                const next = writeTextField(plantilla, respField, e.target.value);
                if (next) onChange(next);
              }}
              style={inputStyle(true)}
            />
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              Expresión sobre variables · ahora{" "}
              <span style={{ color: "var(--c-text-2)", fontWeight: 600 }}>
                = {live.respuesta ?? "?"}
              </span>
            </div>
          </div>
        ) : null}

        {/* TOLERANCIA + UNIDAD */}
        {tolField || unidadField ? (
          <div style={{ display: "flex", gap: 12 }}>
            {tolField ? (
              <div style={{ flex: 1 }}>
                <Eyebrow>Tolerancia abs.</Eyebrow>
                <input
                  type="number"
                  value={tolerancia}
                  onChange={(e) => {
                    const next = writeNumberField(plantilla, tolField, e.target.value);
                    if (next) onChange(next);
                  }}
                  style={inputStyle(true)}
                />
              </div>
            ) : null}
            {unidadField ? (
              <div style={{ flex: 1 }}>
                <Eyebrow>Unidad</Eyebrow>
                <input
                  type="text"
                  value={unidad}
                  placeholder="—"
                  onChange={(e) => {
                    const next = writeTextField(plantilla, unidadField, e.target.value);
                    if (next) onChange(next);
                  }}
                  style={inputStyle()}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        {/* BLOQUES: PISTAS */}
        <div style={{ height: 1, background: "var(--c-border)", margin: "6px 0" }} />
        <Eyebrow>Bloques</Eyebrow>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 9,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 660 }}>Pistas</span>
            <span
              style={{
                fontSize: 11,
                color: "var(--c-text-3)",
                background: "var(--c-surface-2)",
                padding: "2px 7px",
                borderRadius: 999,
              }}
            >
              {pistas.length}
            </span>
          </div>
          {pistas.map((text: string, i: number) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  flex: "0 0 auto",
                  borderRadius: 6,
                  background: "var(--c-accent-soft)",
                  color: "var(--c-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <input
                type="text"
                value={text}
                onChange={(e) => {
                  const next = [...pistas];
                  next[i] = e.target.value;
                  onChange(writePistas(plantilla, next));
                }}
                style={{ ...inputStyle(), flex: 1, minWidth: 0 }}
              />
              <select
                value={25}
                disabled
                style={{
                  border: "1px solid var(--c-border)",
                  borderRadius: 8,
                  padding: "8px 6px",
                  fontSize: 12,
                  color: "var(--c-text-2)",
                  background: "var(--c-surface-2)",
                  outline: "none",
                }}
              >
                <option value={25}>−25%</option>
              </select>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange(writePistas(plantilla, [...pistas, "Nueva pista…"]))}
            style={{
              marginTop: 2,
              fontSize: 12.5,
              fontWeight: 600,
              color: "var(--c-accent)",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              padding: "4px 0",
            }}
          >
            ＋ Otra pista
          </button>
        </div>

        {/* EXPLICACIÓN */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 660, marginBottom: 9 }}>
            Explicación
          </div>
          <textarea
            value={explicacion}
            rows={3}
            onChange={(e) => onChange(writeExplicacion(plantilla, e.target.value))}
            style={inputStyle()}
          />
        </div>

        {/* VALIDACIÓN (conservada de V1/V2) */}
        {validation ? (
          <div style={{ marginTop: 8 }}>
            <div style={{ height: 1, background: "var(--c-border)", margin: "6px 0 16px" }} />
            <ValidationReport
              state={validation}
              disabled={!plantilla}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ─── Property grid: variable ───────────────────────────────────────── */

function VariablePropertyGrid({
  plantilla,
  onChange,
  index,
  onSelectQuestion,
  live,
}: {
  plantilla: Plantilla;
  onChange: (p: Plantilla) => void;
  index: number;
  onSelectQuestion: () => void;
  live: LiveValues;
}) {
  const v = getVariable(plantilla, index);
  if (!v) return null;

  const kind = classifyVariable(v.expr);
  const bounds = kind === "random" ? randomBounds(v.expr) : { min: "", max: "" };
  const options = kind === "list" ? listOptions(v.expr) : "";
  const exprText = kind === "expr" ? exprToText(v.expr) : "";
  const liveValue = formatValue(live.variables?.[v.nombre]);

  const setKind = (nextKind: "random" | "list" | "expr") => {
    let expr: Expr;
    if (nextKind === "random") expr = makeRandomIntExpr(1, 10);
    else if (nextKind === "list") expr = makeChoiceExpr(["a", "b", "c"]);
    else expr = textToExpr("a + b") ?? numLit(0);
    onChange(updateVariableExpr(plantilla, index, expr));
  };

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PropertyGridHeader icon="𝑥" title={`Variable · ${v.nombre}`} />
      <div style={{ padding: 18, flex: 1 }}>
        <button
          type="button"
          onClick={onSelectQuestion}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            color: "var(--c-text-3)",
            background: "transparent",
            border: 0,
            cursor: "pointer",
            padding: "0 0 14px",
          }}
        >
          ‹ Volver a la pregunta
        </button>

        {/* NOMBRE */}
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>Nombre</Eyebrow>
          <input
            type="text"
            value={v.nombre}
            readOnly
            style={{
              ...inputStyle(true),
              fontSize: 14,
              fontWeight: 700,
              color: "var(--c-accent)",
            }}
          />
        </div>

        {/* SUBTIPO */}
        <div style={{ marginBottom: 18 }}>
          <Eyebrow>Subtipo</Eyebrow>
          <select
            value={kind}
            onChange={(e) =>
              setKind(e.target.value as "random" | "list" | "expr")
            }
            style={inputStyle()}
          >
            <option value="random">Aleatorio entero</option>
            <option value="list">Lista de opciones</option>
            <option value="expr">Valor por expresión</option>
          </select>
        </div>

        {/* VALOR ACTUAL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 16px",
            border: "1px solid var(--c-accent)",
            background: "var(--c-accent-soft)",
            borderRadius: 11,
            marginBottom: 18,
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--c-accent)",
                marginBottom: 2,
              }}
            >
              VALOR ACTUAL
            </div>
            <div
              style={{
                ...mono,
                fontSize: 30,
                fontWeight: 700,
                color: "var(--c-text)",
                lineHeight: 1,
              }}
            >
              {liveValue}
            </div>
            <div style={{ fontSize: 11, color: "var(--c-text-2)", marginTop: 5 }}>
              se regenera en cada intento del alumno
            </div>
          </div>
        </div>

        {/* RANDOM */}
        {kind === "random" ? (
          <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
            <div style={{ flex: 1 }}>
              <Eyebrow>Mínimo</Eyebrow>
              <input
                type="number"
                value={bounds.min}
                onChange={(e) => {
                  const min = Number(e.target.value);
                  const max = Number(bounds.max);
                  if (!Number.isFinite(min)) return;
                  onChange(
                    updateVariableExpr(
                      plantilla,
                      index,
                      makeRandomIntExpr(min, Number.isFinite(max) ? max : min + 1),
                    ),
                  );
                }}
                style={inputStyle(true)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Eyebrow>Máximo</Eyebrow>
              <input
                type="number"
                value={bounds.max}
                onChange={(e) => {
                  const max = Number(e.target.value);
                  const min = Number(bounds.min);
                  if (!Number.isFinite(max)) return;
                  onChange(
                    updateVariableExpr(
                      plantilla,
                      index,
                      makeRandomIntExpr(Number.isFinite(min) ? min : max - 1, max),
                    ),
                  );
                }}
                style={inputStyle(true)}
              />
            </div>
          </div>
        ) : null}

        {/* LISTA */}
        {kind === "list" ? (
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>Opciones</Eyebrow>
            <input
              type="text"
              value={options}
              onChange={(e) => {
                const items = e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean);
                onChange(updateVariableExpr(plantilla, index, makeChoiceExpr(items)));
              }}
              style={inputStyle(true)}
            />
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              separadas por coma · se elige una al azar
            </div>
          </div>
        ) : null}

        {/* EXPR */}
        {kind === "expr" ? (
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>Expresión</Eyebrow>
            <input
              type="text"
              value={exprText}
              placeholder="ej. a + b"
              onChange={(e) => {
                const expr = textToExpr(e.target.value);
                if (expr) onChange(updateVariableExpr(plantilla, index, expr));
              }}
              style={inputStyle(true)}
            />
            <div style={{ fontSize: 11.5, color: "var(--c-text-3)", marginTop: 6 }}>
              depende de otras variables
            </div>
          </div>
        ) : null}

        {/* USAR EN ENUNCIADO */}
        <div style={{ height: 1, background: "var(--c-border)", margin: "6px 0 16px" }} />
        <Eyebrow>Usar en enunciado</Eyebrow>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            ...mono,
            fontSize: 13,
            fontWeight: 700,
            color: "var(--c-accent)",
            background: "var(--c-accent-soft)",
            padding: "7px 12px",
            borderRadius: 9,
            marginBottom: 18,
          }}
        >
          {"{" + v.nombre + "}"}{" "}
          <span style={{ fontSize: 11, color: "var(--c-text-3)", fontFamily: "var(--font-sans)" }}>
            copiar
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Drawer de código pulido ───────────────────────────────────────── */

export interface TizaCodeDrawerProps {
  code: string;
  visible: boolean;
  onToggle: () => void;
}

export function TizaCodeDrawer({ code, visible, onToggle }: TizaCodeDrawerProps) {
  return (
    <div
      style={{
        background: "var(--c-surface)",
        border: "1px solid var(--c-border)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow)",
        overflow: "hidden",
        marginTop: 18,
      }}
      data-testid="tiza-code-drawer"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={visible}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "13px 16px",
          border: 0,
          borderBottom: visible ? "1px solid var(--c-border)" : "none",
          background: "var(--c-surface)",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span aria-hidden="true" style={{ ...mono, fontSize: 13, fontWeight: 700, color: "var(--c-accent)" }}>
          {"</>"}
        </span>
        <span style={{ fontSize: 13.5, fontWeight: 660 }}>Código generado · VBLang</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            fontSize: 11,
            fontWeight: 700,
            color: "var(--c-success)",
            background: "color-mix(in srgb, var(--c-success) 12%, transparent)",
            padding: "3px 8px",
            borderRadius: 999,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "var(--c-success)",
              animation: "code-blip 1.6s infinite",
            }}
          />
          en vivo
        </span>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 12, color: "var(--c-text-3)" }}>solo lectura</span>
        <span
          aria-hidden="true"
          style={{
            fontSize: 13,
            color: "var(--c-text-3)",
            transform: visible ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 150ms ease",
          }}
        >
          ⌄
        </span>
      </button>
      {visible ? (
        <div
          style={{
            background: "var(--c-code-bg)",
            fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
            fontSize: 12.5,
            lineHeight: 1.75,
          }}
        >
          <CodeEditor value={code} onChange={() => {}} readOnly minRows={8} label="Código DSL generado" />
        </div>
      ) : null}
    </div>
  );
}

/* ─── Header del property grid ──────────────────────────────────────── */

function PropertyGridHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        background: "var(--c-surface)",
        borderBottom: "1px solid var(--c-border)",
        padding: "16px 18px",
        display: "flex",
        alignItems: "center",
        gap: 11,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 32,
          height: 32,
          flex: "0 0 auto",
          borderRadius: "var(--r-md)",
          background: "var(--c-accent-soft)",
          color: "var(--c-accent)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
        }}
      >
        {icon}
      </span>
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "var(--c-text-3)",
          }}
        >
          PROPIEDADES
        </div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>{title}</div>
      </div>
    </div>
  );
}
