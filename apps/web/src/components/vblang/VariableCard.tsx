/**
 * VB-B6 — card editable para una variable del bloque `variables:`.
 *
 * Cada variable se renderiza como un card con:
 *  - nombre editable (input)
 *  - selector de tipo (random int, random float, lista, rango, expr)
 *  - inputs específicos del tipo (min/max, items, expresión)
 *  - valor en vivo del preview ("ahora: 7")
 *  - botón eliminar
 *  - handle lateral decorativo
 *
 * Toda la mutación pasa por los helpers puros
 * (`addVariable`/`updateVariable`/`removeVariable`) de
 * `plantillaFields.ts` — el form NO escribe el AST directamente.
 *
 * Diseño visual heredado de `VariablesCards` (grip + nombre + pill
 * de tipo + def monoespaciada + "ahora") pero ahora con inputs
 * reales: pasar de "Las variables se editan desde el modo Código"
 * (placeholder) a edición inline.
 */

import { useState, useCallback, useEffect } from "react";
import type { Expr, Plantilla, VariableDecl } from "@vb/vblang";
import { inferTipoVar, formatValor } from "./PlantillaEditorSchema";
import {
  updateVariable,
  renameVariable,
  classifyVariable,
  listaEditableComoTexto,
  withListItems,
  makeRandomIntExpr,
  makeRandomFloatExpr,
  makeListExpr,
  type VariableKind,
} from "./plantillaFields";
import { DUMMY_LOC, exprToText, numLiteral } from "./plantillaAst";
import { parseExprText } from "./exprParse";

import { useI18n } from "../../i18n/I18nContext";
const KIND_LABELS: Record<VariableKind, string> = {
  "random-int": "Aleatorio entero",
  "random-float": "Aleatorio decimal",
  list: "Lista",
  expr: "Expresión",
};

interface VariableCardProps {
  plantilla: Plantilla;
  index: number;
  decl: VariableDecl;
  isActive: boolean;
  valorPreview?: unknown;
  onChange: (next: Plantilla) => void;
  onSelect: (index: number) => void;
  onRemove: (index: number) => void;
  onAddAfter: (index: number, kind: VariableKind) => void;
}

export default function VariableCard({
  plantilla,
  index,
  decl,
  isActive,
  valorPreview,
  onChange,
  onSelect,
  onRemove,
  onAddAfter,
}: VariableCardProps) {
  const { t } = useI18n();
  // El "kind" lo derivamos de la expresión; si el usuario cambia el
  // tipo desde el form, reescribimos la expresión (eso pasa en
  // `setKind`).
  const [kind, setKindState] = useState<VariableKind>(
    classifyVariable(decl.expr),
  );

  /**
   * PLAN casos-limite §11 — antes era `updateVariable(..., { ...decl, nombre })`,
   * que cambiaba la declaración y dejaba las referencias apuntando al nombre
   * viejo: la plantilla quedaba con "variable indefinida" en cuanto se
   * renombraba algo. `renameVariable` reescribe el enunciado y las expresiones,
   * y devuelve `null` si el nombre no sirve.
   *
   * Se confirma al SALIR del campo (o con Enter) y no en cada tecla: un rename
   * estricto por pulsación no deja llegar a nombres cuyo prefijo es inválido o
   * choca con otra variable (de `b` a `ab` habiendo una `a`).
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
    // Re-seed la expresión con valores razonables según el tipo.
    // Conserva el nombre; sólo cambia la `expr`.
    const next = makeDefaultExpr(newKind);
    if (next) onChange(updateVariable(plantilla, index, { ...decl, expr: next }));
  };

  const setExprText = (text: string) => {
    // El usuario edita la expresión como texto. Re-parseamos
    // silenciosamente; si falla (expresión incompleta mientras
    // tipea), dejamos la expresión anterior — el form se
    // reintentará en cada keystroke.
    const result = parseExprText(text);
    if (result.ok) {
      onChange(updateVariable(plantilla, index, { ...decl, expr: result.expr }));
    }
  };

  const setRandomRange = (lo: number, hi: number) => {
    if (kind === "random-float") {
      onChange(
        updateVariable(plantilla, index, {
          ...decl,
          expr: makeRandomFloatExpr(lo, hi),
        }),
      );
    } else {
      onChange(
        updateVariable(plantilla, index, {
          ...decl,
          expr: makeRandomIntExpr(lo, hi),
        }),
      );
    }
  };

  /**
   * §0 — antes escribía `makeListExpr` (array desnudo) siempre, así que editar
   * los ítems de un `uno_de([...])` le sacaba el wrapper y CAMBIABA la
   * semántica: la variable pasaba de "uno al azar de la lista" a "la lista
   * entera". `withListItems` conserva la forma original.
   */
  const setListItems = (items: string[]) => {
    onChange(
      updateVariable(plantilla, index, {
        ...decl,
        expr: withListItems(decl.expr, items),
      }),
    );
  };

  // Extrae min/max de la expresión actual si matchea random(_float)(lo, hi).
  const rangeArgs = extractRangeArgs(decl.expr, kind);
  const listItems = extractListItems(decl.expr);

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

  const tipoVar = inferTipoVar(decl.expr);
  const tipoBadge = tipoVar.label;
  const tipoTone = tipoVar.tone;

  const handleRemove = useCallback(() => {
    onRemove(index);
  }, [index, onRemove]);

  return (
    <li
      className={
        "vb-var-card" +
        (isActive ? " vb-var-card--active" : "") +
        (kind ? " vb-var-card--" + kind : "")
      }
      data-testid={`vblang-var-card-${index}`}
      data-active={isActive || undefined}
      onClick={() => onSelect(index)}
    >
      <span className="vb-var-card__grip" aria-hidden="true">
        ⠿
      </span>
      <div className="vb-var-card__body">
        <div className="flex flex-wrap items-center gap-1.5">
          <input
            type="text"
            value={nombreDraft}
            onChange={(e) => setNombreDraft(e.target.value)}
            onBlur={commitName}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitName();
            }}
            aria-label={`Nombre de variable ${index + 1}`}
            data-testid={`vblang-var-name-${index}`}
            className="w-32 rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-2 py-0.5 text-xs font-mono"
            placeholder="nombre"
          />
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value as VariableKind)}
            aria-label={`Tipo de variable ${index + 1}`}
            data-testid={`vblang-var-kind-${index}`}
            className="rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-2 py-0.5 text-xs"
          >
            {(Object.keys(KIND_LABELS) as VariableKind[]).map((k) => (
              <option key={k} value={k}>
                {KIND_LABELS[k]}
              </option>
            ))}
          </select>
          <span className="vb-var-card__pill" data-testid={`vblang-var-pill-${index}`}>
            <span
              className="vb-var-card__dot"
              style={{ background: `var(--c-${tipoTone})` }}
              aria-hidden="true"
            />
            {tipoBadge}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
            aria-label={`Eliminar variable ${decl.nombre}`}
            data-testid={`vblang-var-remove-${index}`}
            className="ml-auto rounded border border-red-200 px-2 py-0.5 text-[10px] font-medium text-red-700 hover:bg-red-50"
          >{t("comun.eliminar")}</button>
        </div>

        {/* Body específico del tipo */}
        {kind === "random-int" || kind === "random-float" ? (
          <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[var(--c-muted,#64748b)]">rango</span>
            <input
              type="number"
              value={rangeArgs?.lo ?? ""}
              onChange={(e) => setRangeEnd("lo", e.target.value)}
              aria-label={`Mínimo de ${decl.nombre}`}
              data-testid={`vblang-var-lo-${index}`}
              className="w-16 rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-1 py-0.5 font-mono text-xs"
              placeholder="min"
            />
            <span className="text-[var(--c-muted,#64748b)]">a</span>
            <input
              type="number"
              value={rangeArgs?.hi ?? ""}
              onChange={(e) => setRangeEnd("hi", e.target.value)}
              aria-label={`Máximo de ${decl.nombre}`}
              data-testid={`vblang-var-hi-${index}`}
              className="w-16 rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-1 py-0.5 font-mono text-xs"
              placeholder="max"
            />
            <code className="text-[10px] text-[var(--c-muted,#64748b)]">
              {exprToText(decl.expr)}
            </code>
            {/* §6 — mín > máx compila pero falla en CADA intento del alumno
                ("random: int: max (1) < min (10)"). Se avisa sin bloquear. */}
            {rangeArgs && rangeArgs.lo > rangeArgs.hi ? (
              <span
                className="text-[10px]"
                style={{ color: "var(--c-danger)" }}
                data-testid={`vblang-var-rango-invertido-${index}`}
              >
                {t("comun.rangoInvertido")}
              </span>
            ) : null}
          </div>
        ) : kind === "list" ? (
          <div className="mt-1 flex flex-col gap-1 text-xs">
            {/* §0 — con objetos (`[{ nombre: "…", iso: "…" }]`) o una referencia
                (`uno_de(paises)`), `itemToText` devolvía "" por ítem y el commit
                los filtraba: la lista quedaba VACÍA. No se ofrece el editor. */}
            {listaEditableComoTexto(decl.expr) ? (
              <>
                <span className="text-[var(--c-muted,#64748b)]">{t("variableCard.itemsUnoPorLinea")}</span>
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
                  data-testid={`vblang-var-items-${index}`}
                  rows={Math.max(2, Math.min(6, (listItems?.length ?? 0) + 1))}
                  className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-2 py-1 font-mono text-xs"
                  placeholder={"manzana\nbanana\nnaranja"}
                />
              </>
            ) : (
              <span
                className="text-[var(--c-muted,#64748b)]"
                data-testid={`vblang-var-items-no-editable-${index}`}
              >
                {t("tizaEditor.listaNoEditableEnFormulario")}
              </span>
            )}
            <code className="text-[10px] text-[var(--c-muted,#64748b)]">
              {exprToText(decl.expr)}
            </code>
          </div>
        ) : (
          <div className="mt-1 text-xs">
            <span className="text-[var(--c-muted,#64748b)]">{t("variableCard.expresion")}</span>
            <input
              type="text"
              value={exprToText(decl.expr)}
              onChange={(e) => setExprText(e.target.value)}
              aria-label={`Expresión de ${decl.nombre}`}
              data-testid={`vblang-var-expr-${index}`}
              className="ml-1 w-3/4 rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-2 py-0.5 font-mono text-xs"
              placeholder={t("variableCard.a1")}
            />
          </div>
        )}

        {/* Valor en vivo */}
        {valorPreview !== undefined && (
          <div
            className="mt-1 text-[10px] text-[var(--c-muted,#64748b)]"
            data-testid={`vblang-var-now-${index}`}
          >
            ahora: <strong>{formatValor(valorPreview)}</strong>
          </div>
        )}
      </div>

      {/* Botón contextual "+Añadir" al costado de la card activa */}
      {isActive && (
        <div className="vb-var-card__addafter" onClick={(e) => e.stopPropagation()}>
          <span className="text-[10px] text-[var(--c-muted,#64748b)]">{t("variableCard.anadir")}</span>
          {(Object.keys(KIND_LABELS) as VariableKind[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => onAddAfter(index, k)}
              data-testid={`vblang-var-addafter-${k}-${index}`}
              className="rounded border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-1.5 py-0.5 text-[10px] hover:border-[var(--c-primary,#3b82f6)] hover:text-[var(--c-primary,#3b82f6)]"
            >
              {KIND_LABELS[k]}
            </button>
          ))}
        </div>
      )}
    </li>
  );
}

/* ---------------- helpers de extracción de la Expr ---------------- */

interface RangeArgs {
  lo: number;
  hi: number;
}

function extractRangeArgs(expr: Expr, kind: VariableKind): RangeArgs | null {
  if (expr.kind !== "fun_call") return null;
  const expected = kind === "random-float" ? "random_float" : "random";
  if (expr.name !== expected) return null;
  if (expr.args.length !== 2) return null;
  const lo = asNumber(expr.args[0]);
  const hi = asNumber(expr.args[1]);
  if (lo === null || hi === null) return null;
  return { lo, hi };
}

/** Texto editable de un ítem de lista (los negativos incluidos). */
function itemToText(e: Expr): string {
  if (e.kind === "str") return e.value;
  const n = numLiteral(e);
  return n === null ? "" : String(n);
}

function extractListItems(expr: Expr): string[] | null {
  // Lista: array literal o fun_call `uno_de`/`choice`.
  if (expr.kind === "array") {
    return expr.items.map(itemToText);
  }
  if (expr.kind === "fun_call" && (expr.name === "uno_de" || expr.name === "choice")) {
    return expr.args.map(itemToText);
  }
  return null;
}

// Los negativos vuelven del parser como unario, no como `num`: sin `numLiteral`
// el rango se leía vacío y los ítems negativos de una lista se borraban al
// guardar (PLAN casos-limite §4).
function asNumber(e: Expr): number | null {
  return numLiteral(e);
}

function makeDefaultExpr(kind: VariableKind): Expr | null {
  switch (kind) {
    case "random-int":
      return makeRandomIntExpr(1, 10);
    case "random-float":
      return makeRandomFloatExpr(0, 1);
    case "list":
      return makeListExpr(["opcion_a", "opcion_b"]);
    case "expr":
      return { kind: "num", value: 0, loc: DUMMY_LOC };
    default:
      return null;
  }
}

/**
 * (Eliminado — usamos `parseExprText` directamente, que devuelve
 * un `ParseExprResult`. El form lo consume y aborta si `ok=false`.)
 */
