import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { emitExpr, serialize } from "@vb/vblang";
import type {
  Bloque,
  CampoKV,
  Expr,
  GeneradorBloque,
  MetadataBloque,
  OpcionesBloque,
  PasoItem,
  PasosBloque,
  Plantilla,
  RestriccionesBloque,
  TipoBloque,
  TipoPregunta,
  ToleranciaBloque,
  UnidadBloque,
  VariableDecl,
  VariablesBloque,
  EnunciadoBloque,
  TextoOInterpolacion,
} from "@vb/vblang";
import GeneradorPicker from "./GeneradorPicker";
import OpcionesEditor from "./OpcionesEditor";
import { parseExprText } from "./exprParse";

interface Props {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
  /** Valores que tomó cada variable en el primer preview (indicador "ahora: X"). */
  valoresActuales?: Record<string, unknown>;
  /** Estado de validación (alimenta el pill del Resumen). */
  tieneErrores?: boolean;
}

function formatValorActual(v: unknown): string {
  if (v === null || v === undefined) return "—";
  if (Array.isArray(v)) return `[${v.map(formatValorActual).join(", ")}]`;
  if (typeof v === "object") return JSON.stringify(v);
  if (typeof v === "number") return String(Math.round(v * 1000) / 1000);
  return String(v);
}

const TIPOS: { value: TipoPregunta; label: string; desc: string }[] = [
  { value: "input", label: "Input numérico/texto", desc: "El alumno escribe la respuesta (número o texto)." },
  { value: "mc", label: "Multiple choice", desc: "Una opción correcta entre varias." },
  { value: "vf", label: "Verdadero / Falso", desc: "La respuesta es verdadero o falso." },
  { value: "completar", label: "Completar", desc: "El alumno completa un valor faltante." },
  { value: "ordenar", label: "Ordenar", desc: "Reordenar una lista de ítems." },
  { value: "marcar_mapa", label: "Marcar mapa", desc: "Hacer click en un país/región del mapa." },
  { value: "analisis_sintactico", label: "Análisis sintáctico", desc: "Etiquetar gramaticalmente cada palabra." },
  { value: "identificar_palabras", label: "Identificar palabras", desc: "Marcar las palabras que cumplen un criterio." },
];

const DUMMY_LOC = { line: 0, col: 0, endLine: 0, endCol: 0 } as const;

const VALID_IDENTIFIER_RE = /^[a-záéíóúñ_][a-záéíóúñ_0-9]*$/i;
const FINITE_NUMBER_RE = /^-?\d+(\.\d+)?$/;

/* ---------- AST helpers ---------- */

function findBlock<K extends Bloque["kind"]>(
  p: Plantilla,
  kind: K,
): Extract<Bloque, { kind: K }> | undefined {
  return p.bloques.find((b) => b.kind === kind) as
    | Extract<Bloque, { kind: K }>
    | undefined;
}

function withBlock(p: Plantilla, next: Bloque): Plantilla {
  const idx = p.bloques.findIndex((b) => b.kind === next.kind);
  const bloques =
    idx >= 0
      ? p.bloques.map((b, i) => (i === idx ? next : b))
      : [...p.bloques, next];
  return { ...p, bloques };
}

function withoutBlock(p: Plantilla, kind: Bloque["kind"]): Plantilla {
  return { ...p, bloques: p.bloques.filter((b) => b.kind !== kind) };
}

function strLit(value: string): Expr {
  return { kind: "str", value, loc: DUMMY_LOC };
}
function numLit(value: number): Expr {
  return { kind: "num", value, loc: DUMMY_LOC };
}
function boolLit(value: boolean): Expr {
  return { kind: "bool", value, loc: DUMMY_LOC };
}
function varRef(name: string): Expr {
  return { kind: "var", name, loc: DUMMY_LOC };
}
function funCall(name: string, args: Expr[]): Expr {
  return { kind: "fun_call", name, args, loc: DUMMY_LOC };
}

/* ---------- useBufferedInput ---------- */

function useBufferedInput<T>(args: {
  external: T;
  serialize: (v: T) => string;
  parse: (s: string) => { ok: true; value: T } | { ok: false; reason: string };
  onCommit: (v: T) => void;
}) {
  const { external, serialize: ser, parse: par, onCommit } = args;
  const [buf, setBuf] = useState(() => ser(external));
  const [error, setError] = useState<string | null>(null);
  const lastExtRef = useRef(external);

  useEffect(() => {
    if (lastExtRef.current !== external) {
      lastExtRef.current = external;
      setBuf(ser(external));
      setError(null);
    }
  }, [external, ser]);

  const handleChange = useCallback(
    (raw: string) => {
      setBuf(raw);
      const result = par(raw);
      if (result.ok) {
        setError(null);
        onCommit(result.value);
      } else {
        setError(result.reason);
      }
    },
    [par, onCommit],
  );

  const handleBlur = useCallback(() => {
    const result = par(buf);
    if (!result.ok) {
      setBuf(ser(external));
      setError(null);
    }
  }, [buf, par, ser, external]);

  return { buf, error, handleChange, handleBlur };
}

/* ---------- Variable widget classification ---------- */

type ObjectLitExpr = Extract<Expr, { kind: "object" }>;

type VarShape =
  | { kind: "literal-num"; value: number }
  | { kind: "literal-str"; value: string }
  | { kind: "literal-bool"; value: boolean }
  | { kind: "random"; min: number; max: number }
  | { kind: "random_float"; min: number; max: number; decimals: number }
  | { kind: "uno_de-strings"; items: string[] }
  | { kind: "uno_de-objects"; objects: ObjectLitExpr[]; keys: string[] }
  | { kind: "num-array"; items: number[] }
  | { kind: "advanced" };

type ShapeKind = VarShape["kind"];

const SHAPE_LABELS: { value: ShapeKind; label: string }[] = [
  { value: "literal-num", label: "Literal número" },
  { value: "literal-str", label: "Literal texto" },
  { value: "literal-bool", label: "Literal booleano" },
  { value: "random", label: "Aleatorio entero" },
  { value: "random_float", label: "Aleatorio decimal" },
  { value: "uno_de-strings", label: "Uno de... (texto)" },
  { value: "uno_de-objects", label: "Uno de... (objetos)" },
  { value: "num-array", label: "Array de números" },
  { value: "advanced", label: "Expresión derivada" },
];

function classifyVarExpr(expr: Expr): VarShape {
  if (expr.kind === "num") return { kind: "literal-num", value: expr.value };
  if (expr.kind === "str") return { kind: "literal-str", value: expr.value };
  if (expr.kind === "bool") return { kind: "literal-bool", value: expr.value };
  if (
    expr.kind === "fun_call" &&
    expr.name === "random" &&
    expr.args.length === 2 &&
    expr.args[0].kind === "num" &&
    expr.args[1].kind === "num"
  ) {
    return { kind: "random", min: expr.args[0].value, max: expr.args[1].value };
  }
  if (
    expr.kind === "fun_call" &&
    expr.name === "random_float" &&
    expr.args.length === 3 &&
    expr.args[0].kind === "num" &&
    expr.args[1].kind === "num" &&
    expr.args[2].kind === "num"
  ) {
    return {
      kind: "random_float",
      min: expr.args[0].value,
      max: expr.args[1].value,
      decimals: expr.args[2].value,
    };
  }
  if (
    expr.kind === "fun_call" &&
    expr.name === "uno_de" &&
    expr.args.length === 1 &&
    expr.args[0].kind === "array" &&
    expr.args[0].items.length > 0 &&
    expr.args[0].items.every((i) => i.kind === "str")
  ) {
    return {
      kind: "uno_de-strings",
      items: expr.args[0].items.map(
        (i) => (i as Extract<Expr, { kind: "str" }>).value,
      ),
    };
  }
  if (
    expr.kind === "fun_call" &&
    expr.name === "uno_de" &&
    expr.args.length === 1 &&
    expr.args[0].kind === "array" &&
    expr.args[0].items.length > 0 &&
    expr.args[0].items.every((i) => i.kind === "object")
  ) {
    const objects = expr.args[0].items as ObjectLitExpr[];
    const keys: string[] = [];
    for (const o of objects) {
      for (const e of o.entries) if (!keys.includes(e.key)) keys.push(e.key);
    }
    return { kind: "uno_de-objects", objects, keys };
  }
  if (
    expr.kind === "array" &&
    expr.items.length > 0 &&
    expr.items.every((i) => i.kind === "num")
  ) {
    return {
      kind: "num-array",
      items: expr.items.map((i) => (i as Extract<Expr, { kind: "num" }>).value),
    };
  }
  return { kind: "advanced" };
}

function defaultExprForShape(kind: ShapeKind): Expr {
  switch (kind) {
    case "literal-num":
      return numLit(0);
    case "literal-str":
      return strLit("");
    case "literal-bool":
      return boolLit(true);
    case "random":
      return funCall("random", [numLit(1), numLit(10)]);
    case "random_float":
      return funCall("random_float", [numLit(0), numLit(1), numLit(2)]);
    case "uno_de-strings":
      return funCall("uno_de", [
        { kind: "array", items: [strLit("a"), strLit("b")], loc: DUMMY_LOC },
      ]);
    case "uno_de-objects":
      return funCall("uno_de", [
        {
          kind: "array",
          items: [
            {
              kind: "object",
              entries: [
                { key: "nombre", value: strLit("a"), loc: DUMMY_LOC },
                { key: "valor", value: numLit(1), loc: DUMMY_LOC },
              ],
              loc: DUMMY_LOC,
            },
          ],
          loc: DUMMY_LOC,
        },
      ]);
    case "num-array":
      return { kind: "array", items: [numLit(1), numLit(2), numLit(3)], loc: DUMMY_LOC };
    case "advanced":
      return numLit(0);
  }
}

/* ---------- Tipo migration (Bug 2) ---------- */

function migrateOnTipoChange(
  plantilla: Plantilla,
  from: TipoPregunta,
  to: TipoPregunta,
): Plantilla {
  let p: Plantilla = { ...plantilla, bloques: [...plantilla.bloques] };

  const tipoBloque: TipoBloque = { kind: "tipo", valor: to, loc: DUMMY_LOC };
  p = withBlock(p, tipoBloque);

  if (from === "input" && to === "mc") {
    if (!findBlock(p, "opciones")) {
      const opBlock: OpcionesBloque = { kind: "opciones", cantidad: 4, loc: DUMMY_LOC };
      p = withBlock(p, opBlock);
    }
  } else if (from === "input" && to === "vf") {
    const resp = findBlock(p, "respuesta");
    if (resp) {
      const isZeroOrNull =
        (resp.expr.kind === "num" && resp.expr.value === 0) ||
        resp.expr.kind === "null";
      p = withBlock(p, {
        kind: "respuesta",
        expr: boolLit(!isZeroOrNull),
        loc: DUMMY_LOC,
      });
    }
    p = withoutBlock(p, "opciones");
    p = withoutBlock(p, "opciones_explicitas");
    p = withoutBlock(p, "tolerancia");
    p = withoutBlock(p, "unidad");
  } else if (from === "mc" && to === "input") {
    p = withoutBlock(p, "opciones");
    p = withoutBlock(p, "opciones_explicitas");
  } else if (from === "mc" && to === "vf") {
    p = withoutBlock(p, "opciones");
    p = withoutBlock(p, "opciones_explicitas");
    const resp = findBlock(p, "respuesta");
    if (resp) {
      if (resp.expr.kind === "bool") {
        // keep it
      } else {
        const isZeroOrNull =
          (resp.expr.kind === "num" && resp.expr.value === 0) ||
          resp.expr.kind === "null";
        p = withBlock(p, {
          kind: "respuesta",
          expr: boolLit(!isZeroOrNull),
          loc: DUMMY_LOC,
        });
      }
    }
  } else if (from === "vf") {
    const resp = findBlock(p, "respuesta");
    if (resp && resp.expr.kind === "bool") {
      if (to === "input" || to === "mc" || to === "completar") {
        p = withBlock(p, {
          kind: "respuesta",
          expr: numLit(0),
          loc: DUMMY_LOC,
        });
      }
    }
    if (to === "mc" && !findBlock(p, "opciones")) {
      p = withBlock(p, { kind: "opciones", cantidad: 4, loc: DUMMY_LOC });
    }
  } else if (to === "ordenar") {
    if (!findBlock(p, "respuesta_orden")) {
      p = withBlock(p, {
        kind: "respuesta_orden",
        expr: { kind: "array", items: [], loc: DUMMY_LOC },
        loc: DUMMY_LOC,
      });
    }
    p = withoutBlock(p, "respuesta");
    p = withoutBlock(p, "opciones");
    p = withoutBlock(p, "opciones_explicitas");
  } else if (to === "mc") {
    if (!findBlock(p, "opciones")) {
      p = withBlock(p, { kind: "opciones", cantidad: 4, loc: DUMMY_LOC });
    }
  }

  if (
    to === "marcar_mapa" ||
    to === "analisis_sintactico" ||
    to === "identificar_palabras"
  ) {
    p = withoutBlock(p, "respuesta");
    p = withoutBlock(p, "opciones");
    p = withoutBlock(p, "opciones_explicitas");
  }

  return p;
}

function isDestructiveTipoChange(
  plantilla: Plantilla,
  _from: TipoPregunta,
  to: TipoPregunta,
): string | null {
  const hasOpciones = !!findBlock(plantilla, "opciones");
  const hasOpcionesExplicitas = !!findBlock(plantilla, "opciones_explicitas");
  const opExpl = findBlock(plantilla, "opciones_explicitas");
  const hasNonEmptyOpExpl =
    opExpl && opExpl.items.length > 0;

  if (
    (hasOpciones || hasOpcionesExplicitas) &&
    (to === "vf" || to === "input" || to === "ordenar" ||
     to === "marcar_mapa" || to === "analisis_sintactico" || to === "identificar_palabras")
  ) {
    if (hasNonEmptyOpExpl) {
      return `Cambiar a ${TIPOS.find((t) => t.value === to)?.label ?? to} eliminará el bloque de opciones. ¿Continuar?`;
    }
    if (hasOpciones && (to === "vf" || to === "input")) {
      return `Cambiar a ${TIPOS.find((t) => t.value === to)?.label ?? to} eliminará el bloque de opciones. ¿Continuar?`;
    }
  }

  return null;
}

/* ---------- Componente principal ---------- */

export default function PlantillaFormularioVisual({ plantilla, onChange, valoresActuales, tieneErrores }: Props) {
  const enunciado = findBlock(plantilla, "enunciado");
  const variablesBlock = findBlock(plantilla, "variables");
  const variables = variablesBlock?.declaraciones ?? [];
  const generadorBlock = findBlock(plantilla, "generador");

  const enunciadoText = useMemo(() => enunciadoToText(enunciado), [enunciado]);

  const [confirmDialog, setConfirmDialog] = useState<{
    message: string;
    onConfirm: () => void;
  } | null>(null);

  /* ---------- handlers ---------- */

  const tipoActual: TipoPregunta = plantilla.tipoInferido;

  const setTipo = (next: TipoPregunta) => {
    if (next === tipoActual) return;

    const destructiveMsg = isDestructiveTipoChange(plantilla, tipoActual, next);
    if (destructiveMsg) {
      setConfirmDialog({
        message: destructiveMsg,
        onConfirm: () => {
          onChange(migrateOnTipoChange(plantilla, tipoActual, next));
          setConfirmDialog(null);
        },
      });
      return;
    }

    onChange(migrateOnTipoChange(plantilla, tipoActual, next));
  };

  const updateVariableExpr = (idx: number, expr: Expr) => {
    const decls = variables.map((d, i) => (i === idx ? { ...d, expr } : d));
    const block: VariablesBloque = {
      kind: "variables",
      declaraciones: decls,
      loc: variablesBlock?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, block));
  };

  const renameVariable = (idx: number, nombre: string) => {
    const decls = variables.map((d, i) => (i === idx ? { ...d, nombre } : d));
    const block: VariablesBloque = {
      kind: "variables",
      declaraciones: decls,
      loc: variablesBlock?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, block));
  };

  const changeVariableShape = (idx: number, newKind: ShapeKind) => {
    updateVariableExpr(idx, defaultExprForShape(newKind));
  };

  const addVariable = () => {
    const usedNames = new Set(variables.map((v) => v.nombre));
    let i = 1;
    let name = "var1";
    while (usedNames.has(name)) name = `var${++i}`;
    const decl: VariableDecl = {
      nombre: name,
      expr: numLit(0),
      loc: DUMMY_LOC,
    };
    const block: VariablesBloque = {
      kind: "variables",
      declaraciones: [...variables, decl],
      loc: variablesBlock?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, block));
  };

  const removeVariable = (idx: number) => {
    const decls = variables.filter((_, i) => i !== idx);
    if (decls.length === 0) {
      onChange(withoutBlock(plantilla, "variables"));
      return;
    }
    const block: VariablesBloque = {
      kind: "variables",
      declaraciones: decls,
      loc: variablesBlock?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, block));
  };

  const setEnunciadoText = (text: string) => {
    const next: EnunciadoBloque = {
      kind: "enunciado",
      partes: textToEnunciadoPartes(text),
      loc: enunciado?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, next));
  };

  const toggleGenerador = (enabled: boolean) => {
    if (enabled) {
      const gen: GeneradorBloque = {
        kind: "generador",
        id: "",
        loc: DUMMY_LOC,
      };
      onChange(withBlock(plantilla, gen));
    } else {
      onChange(withoutBlock(plantilla, "generador"));
    }
  };

  const setGeneradorId = (id: string) => {
    const gen: GeneradorBloque = {
      kind: "generador",
      id,
      loc: DUMMY_LOC,
    };
    onChange(withBlock(plantilla, gen));
  };

  const allVarNames = useMemo(() => variables.map((v) => v.nombre), [variables]);

  const combinaciones = useMemo(() => {
    let total = 1;
    let continuo = false;
    for (const v of variables) {
      const s = classifyVarExpr(v.expr);
      if (s.kind === "random") {
        total *= Math.max(1, Math.floor(s.max - s.min + 1));
      } else if (s.kind === "uno_de-strings") {
        total *= Math.max(1, s.items.length);
      } else if (s.kind === "random_float") {
        continuo = true;
      }
    }
    return { total, continuo };
  }, [variables]);

  const enunciadoRef = useRef<HTMLTextAreaElement | null>(null);

  const insertarVariableEnEnunciado = (nombre: string) => {
    const token = `{${nombre}}`;
    const ta = enunciadoRef.current;
    if (!ta) {
      setEnunciadoText(enunciadoText + token);
      return;
    }
    const start = ta.selectionStart ?? enunciadoText.length;
    const end = ta.selectionEnd ?? enunciadoText.length;
    const next = enunciadoText.slice(0, start) + token + enunciadoText.slice(end);
    setEnunciadoText(next);
    requestAnimationFrame(() => {
      const el = enunciadoRef.current;
      if (el) {
        const pos = start + token.length;
        el.focus();
        el.setSelectionRange(pos, pos);
      }
    });
  };

  return (
    <div
      role="region"
      aria-label="Formulario visual"
      className="h-full overflow-auto p-6 space-y-6 text-sm bg-[var(--c-bg,#f8fafc)]"
    >
      {/* 1. Tipo de pregunta */}
      <Section title="Tipo de pregunta">
        <select
          value={tipoActual}
          onChange={(e) => setTipo(e.target.value as TipoPregunta)}
          className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1"
          data-testid="vblang-form-tipo"
        >
          {TIPOS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-[var(--c-muted,#64748b)]">
          {TIPOS.find((t) => t.value === tipoActual)?.desc}
        </p>
      </Section>

      {/* 2. Generador asistido */}
      <Section title="Generador asistido">
        <label className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            checked={!!generadorBlock}
            onChange={(e) => toggleGenerador(e.target.checked)}
            data-testid="vblang-form-generador-toggle"
          />
          Usar generador hardcoded de generadoresV2
        </label>
        {generadorBlock && (
          <>
            <div className="mt-2">
              <GeneradorPicker
                value={generadorBlock.id}
                onChange={setGeneradorId}
              />
            </div>
            <p className="mt-1 text-xs text-[var(--c-muted,#64748b)]">
              Si usás un generador, los bloques variables, enunciado y respuesta se
              ignoran y vienen del generador hardcoded.
            </p>
          </>
        )}
      </Section>

      {/* 3. Variables */}
      <Section title="Variables">
        <div className="space-y-2">
          {variables.length === 0 && (
            <p className="text-xs text-[var(--c-muted,#64748b)]">
              No hay variables declaradas.
            </p>
          )}
          {variables.map((decl, i) => (
            <VariableRow
              key={i}
              idx={i}
              decl={decl}
              allNames={allVarNames}
              valorActual={valoresActuales?.[decl.nombre]}
              tieneValor={!!valoresActuales && decl.nombre in valoresActuales}
              onRename={(name) => renameVariable(i, name)}
              onChangeExpr={(expr) => updateVariableExpr(i, expr)}
              onChangeShape={(kind) => changeVariableShape(i, kind)}
              onRemove={() => removeVariable(i)}
            />
          ))}
          <button
            type="button"
            onClick={addVariable}
            data-testid="vblang-form-add-variable"
            className="rounded border border-dashed border-[var(--c-border,#cbd5e1)] px-3 py-1 text-xs text-[var(--c-muted,#64748b)] hover:bg-white"
          >
            + Agregar variable
          </button>
        </div>
      </Section>

      {/* 4. Enunciado */}
      <Section title="Enunciado">
        <textarea
          ref={enunciadoRef}
          value={enunciadoText}
          onChange={(e) => setEnunciadoText(e.target.value)}
          rows={3}
          className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 font-mono text-xs"
          placeholder="Ej.: ¿Cuánto es {a} + {b}?"
          data-testid="vblang-form-enunciado"
        />
        {allVarNames.length > 0 && (
          <div className="mt-1.5 flex flex-wrap items-center gap-1">
            <span className="text-[10px] text-[var(--c-muted,#64748b)]">Insertar:</span>
            {allVarNames.map((nombre) => (
              <button
                key={nombre}
                type="button"
                onClick={() => insertarVariableEnEnunciado(nombre)}
                className="rounded-full border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-0.5 font-mono text-[10px] text-[var(--c-primary,#3b82f6)] hover:bg-[var(--c-bg,#f1f5f9)]"
                aria-label={`Insertar variable ${nombre} en el enunciado`}
              >
                {`{${nombre}}`}
              </button>
            ))}
          </div>
        )}
        <p className="mt-1 text-xs text-[var(--c-muted,#64748b)]">
          Usá <code>{`{nombreVariable}`}</code> para insertar el valor.
        </p>
      </Section>

      {/* 5. Opciones (sólo MC) */}
      {tipoActual === "mc" && (
        <Section title="Opciones">
          <OpcionesEditor plantilla={plantilla} onChange={onChange} />
        </Section>
      )}

      {/* 6. Respuesta */}
      <Section title="Respuesta">
        <RespuestaEditor plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* 7. Tolerancia y unidad (numéricas) */}
      {(tipoActual === "input" || tipoActual === "completar") && (
        <Section title="Tolerancia y unidad">
          <ToleranciaUnidadEditor plantilla={plantilla} onChange={onChange} />
        </Section>
      )}

      {/* 8. Puntaje y pista */}
      <Section title="Puntaje y pista">
        <PuntajePistaEditor plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* 9. Restricciones */}
      <Section title="Restricciones">
        <RestriccionesEditor plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* 10. Pasos de resolución */}
      <Section title="Pasos de resolución">
        <PasosEditor plantilla={plantilla} onChange={onChange} />
      </Section>

      {/* 11. Código DSL (sólo lectura) */}
      <Section title="Código DSL (sólo lectura)">
        <p className="text-xs text-[var(--c-muted,#64748b)]">
          Bloques no cubiertos por el formulario (visual, dataset, mapa…) se
          editan desde el modo Código.
        </p>
        <pre className="mt-2 max-h-64 overflow-auto rounded border border-[var(--c-border,#e2e8f0)] bg-[#0f172a] p-2 text-xs text-emerald-200">
          {serialize(plantilla)}
        </pre>
      </Section>

      {/* 12. Resumen */}
      <Section title="Resumen">
        <div className="rounded border border-[var(--c-border,#e2e8f0)] bg-white p-3 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[var(--c-muted,#64748b)]">Variables</span>
            <span className="font-semibold text-[var(--c-text)]">{variables.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--c-muted,#64748b)]">Tipo</span>
            <span className="font-semibold text-[var(--c-text)]">
              {TIPOS.find((t) => t.value === tipoActual)?.label ?? tipoActual}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--c-muted,#64748b)]">Combinaciones posibles</span>
            <span className="font-semibold text-[var(--c-text)]">
              {combinaciones.continuo
                ? "muchas (incluye decimales)"
                : combinaciones.total.toLocaleString("es-AR")}
            </span>
          </div>
          <div className="pt-1">
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                tieneErrores
                  ? "bg-[color-mix(in_srgb,var(--c-danger)_12%,transparent)] text-[var(--c-danger)]"
                  : "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]"
              }`}
            >
              {tieneErrores ? "Con errores" : "Sin errores"}
            </span>
          </div>
        </div>
      </Section>

      {/* Confirm dialog */}
      {confirmDialog && (
        <ConfirmDialog
          message={confirmDialog.message}
          onConfirm={confirmDialog.onConfirm}
          onCancel={() => setConfirmDialog(null)}
        />
      )}
    </div>
  );
}

/* ---------- ConfirmDialog ---------- */

function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      data-testid="vblang-form-confirm-tipo-change"
    >
      <div className="rounded-lg border border-[var(--c-border,#e2e8f0)] bg-white p-4 shadow-lg max-w-sm">
        <p className="text-sm mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-[var(--c-border,#e2e8f0)] px-3 py-1 text-xs"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded bg-[var(--c-primary,#3b82f6)] px-3 py-1 text-xs text-white font-semibold"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- subcomponentes ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ---------- VariableRow (Bug 5: buffered rename) ---------- */

function VariableRow({
  idx,
  decl,
  allNames,
  valorActual,
  tieneValor,
  onRename,
  onChangeExpr,
  onChangeShape,
  onRemove,
}: {
  idx: number;
  decl: VariableDecl;
  allNames: string[];
  valorActual?: unknown;
  tieneValor?: boolean;
  onRename: (name: string) => void;
  onChangeExpr: (expr: Expr) => void;
  onChangeShape: (kind: ShapeKind) => void;
  onRemove: () => void;
}) {
  const shape = classifyVarExpr(decl.expr);

  const validateName = useCallback(
    (s: string): { ok: true; value: string } | { ok: false; reason: string } => {
      if (!s) return { ok: false, reason: "Nombre vacío" };
      if (!VALID_IDENTIFIER_RE.test(s)) return { ok: false, reason: "Nombre inválido" };
      const isDuplicate = allNames.some(
        (n, i) => i !== idx && n === s,
      );
      if (isDuplicate) return { ok: false, reason: "Nombre duplicado" };
      return { ok: true, value: s };
    },
    [allNames, idx],
  );

  const nameBuf = useBufferedInput({
    external: decl.nombre,
    serialize: (v) => v,
    parse: validateName,
    onCommit: onRename,
  });

  return (
    <div className="rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-2 space-y-1">
      <div className="flex items-center gap-2">
        <div>
          <input
            value={nameBuf.buf}
            onChange={(e) => nameBuf.handleChange(e.target.value)}
            onBlur={nameBuf.handleBlur}
            className={`w-32 rounded border px-2 py-0.5 text-xs font-semibold ${
              nameBuf.error
                ? "border-red-500"
                : "border-[var(--c-border,#e2e8f0)]"
            }`}
          />
          {nameBuf.error && (
            <p className="text-[10px] text-red-600 mt-0.5">{nameBuf.error}</p>
          )}
        </div>
        <select
          value={shape.kind}
          onChange={(e) => onChangeShape(e.target.value as ShapeKind)}
          className="text-xs rounded border border-[var(--c-border,#e2e8f0)] px-1 py-0.5"
          data-testid={`vblang-form-variable-shape-${idx}`}
        >
          {SHAPE_LABELS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onRemove}
          aria-label="Eliminar variable"
          className="ml-auto text-xs text-red-600 hover:underline"
        >
          eliminar
        </button>
      </div>
      <VariableExprWidget shape={shape} onChange={onChangeExpr} decl={decl} />
      {tieneValor && (
        <p className="text-[10px] text-[var(--c-muted,#64748b)]">
          ahora:{" "}
          <span className="font-mono font-semibold text-[var(--c-text)]">
            {formatValorActual(valorActual)}
          </span>
        </p>
      )}
    </div>
  );
}

/* ---------- VariableExprWidget (Bug 1 + Bug 4) ---------- */

function BufferedNumberInput({
  value,
  onCommit,
  label,
  className,
}: {
  value: number;
  onCommit: (v: number) => void;
  label?: string;
  className?: string;
}) {
  const input = useBufferedInput({
    external: value,
    serialize: (v) => String(v),
    parse: (s) => {
      if (FINITE_NUMBER_RE.test(s)) {
        const n = Number(s);
        if (Number.isFinite(n)) return { ok: true, value: n };
      }
      return { ok: false, reason: "Número inválido" };
    },
    onCommit,
  });

  const el = (
    <input
      type="number"
      value={input.buf}
      onChange={(e) => input.handleChange(e.target.value)}
      onBlur={input.handleBlur}
      className={className ?? "w-20 rounded border border-[var(--c-border,#e2e8f0)] px-1 text-xs"}
    />
  );

  if (label) {
    return (
      <label className="flex items-center gap-1 text-xs">
        {label}
        {el}
      </label>
    );
  }
  return el;
}

function VariableExprWidget({
  shape,
  onChange,
  decl,
}: {
  shape: VarShape;
  onChange: (expr: Expr) => void;
  decl: VariableDecl;
}) {
  if (shape.kind === "literal-num") {
    return (
      <BufferedNumberInput
        value={shape.value}
        onCommit={(v) => onChange(numLit(v))}
        className="w-full rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
      />
    );
  }
  if (shape.kind === "literal-str") {
    return (
      <input
        value={shape.value}
        onChange={(e) => onChange(strLit(e.target.value))}
        className="w-full rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
      />
    );
  }
  if (shape.kind === "literal-bool") {
    return (
      <select
        value={String(shape.value)}
        onChange={(e) => onChange(boolLit(e.target.value === "true"))}
        className="w-full rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
      >
        <option value="true">verdadero</option>
        <option value="false">falso</option>
      </select>
    );
  }
  if (shape.kind === "random") {
    return <RandomIntWidget min={shape.min} max={shape.max} onChange={onChange} />;
  }
  if (shape.kind === "random_float") {
    return (
      <RandomFloatWidget
        min={shape.min}
        max={shape.max}
        decimals={shape.decimals}
        onChange={onChange}
      />
    );
  }
  if (shape.kind === "uno_de-strings") {
    return (
      <textarea
        value={shape.items.join("\n")}
        onChange={(e) => {
          const items = e.target.value
            .split("\n")
            .map((s) => s.trim())
            .filter((s) => s.length > 0)
            .map(strLit);
          onChange(
            funCall("uno_de", [
              { kind: "array", items, loc: DUMMY_LOC },
            ]),
          );
        }}
        rows={Math.min(6, Math.max(2, shape.items.length))}
        className="w-full rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
        placeholder="Una opción por línea"
      />
    );
  }
  if (shape.kind === "num-array") {
    return <NumArrayWidget items={shape.items} onChange={onChange} />;
  }
  if (shape.kind === "uno_de-objects") {
    return (
      <UnoDeObjectsWidget objects={shape.objects} keys={shape.keys} onChange={onChange} />
    );
  }
  // advanced / derivada: fórmula editable parseada con el parser real.
  return <DerivedExprWidget expr={decl.expr} onChange={onChange} />;
}

/* ---------- 2D: Array de números ---------- */

function NumArrayWidget({
  items,
  onChange,
}: {
  items: number[];
  onChange: (expr: Expr) => void;
}) {
  const buf = useBufferedInput<number[]>({
    external: items,
    serialize: (arr) => arr.join(", "),
    parse: (s) => {
      const parts = s
        .split(/[,\s]+/)
        .map((x) => x.trim())
        .filter((x) => x.length > 0);
      const nums: number[] = [];
      for (const p of parts) {
        if (!FINITE_NUMBER_RE.test(p)) {
          return { ok: false, reason: `"${p}" no es un número` };
        }
        nums.push(Number(p));
      }
      if (nums.length === 0) return { ok: false, reason: "Lista vacía" };
      return { ok: true, value: nums };
    },
    onCommit: (nums) =>
      onChange({ kind: "array", items: nums.map(numLit), loc: DUMMY_LOC }),
  });
  return (
    <div>
      <input
        value={buf.buf}
        onChange={(e) => buf.handleChange(e.target.value)}
        onBlur={buf.handleBlur}
        placeholder="Números separados por coma (ej. 1, 2, 3)"
        className={`w-full rounded border px-2 py-0.5 text-xs font-mono ${
          buf.error ? "border-red-500" : "border-[var(--c-border,#e2e8f0)]"
        }`}
      />
      {buf.error && <p className="text-[10px] text-red-600 mt-0.5">{buf.error}</p>}
    </div>
  );
}

/* ---------- 2D: uno_de con objetos (tabla) ---------- */

function cellToText(value: Expr): string {
  if (value.kind === "str") return value.value;
  if (value.kind === "num") return String(value.value);
  if (value.kind === "bool") return value.value ? "verdadero" : "falso";
  return emitExpr(value);
}

function textToCell(text: string): Expr {
  const t = text.trim();
  if (FINITE_NUMBER_RE.test(t)) return numLit(Number(t));
  if (t === "verdadero") return boolLit(true);
  if (t === "falso") return boolLit(false);
  return strLit(text);
}

function UnoDeObjectsWidget({
  objects,
  keys,
  onChange,
}: {
  objects: ObjectLitExpr[];
  keys: string[];
  onChange: (expr: Expr) => void;
}) {
  const [nuevoCampo, setNuevoCampo] = useState("");

  const emit = (objs: ObjectLitExpr[]) => {
    onChange(
      funCall("uno_de", [{ kind: "array", items: objs, loc: DUMMY_LOC }]),
    );
  };

  const setCell = (rowIdx: number, key: string, text: string) => {
    const next = objects.map((o, i) => {
      if (i !== rowIdx) return o;
      const entries = [...o.entries];
      const ei = entries.findIndex((e) => e.key === key);
      const value = textToCell(text);
      if (ei >= 0) entries[ei] = { key, value, loc: DUMMY_LOC };
      else entries.push({ key, value, loc: DUMMY_LOC });
      return { kind: "object", entries, loc: DUMMY_LOC } as ObjectLitExpr;
    });
    emit(next);
  };

  const addRow = () => {
    const entries = keys.map((k) => ({ key: k, value: strLit(""), loc: DUMMY_LOC }));
    emit([...objects, { kind: "object", entries, loc: DUMMY_LOC } as ObjectLitExpr]);
  };
  const removeRow = (rowIdx: number) => {
    const next = objects.filter((_, i) => i !== rowIdx);
    if (next.length === 0) return;
    emit(next);
  };
  const addColumn = () => {
    const k = nuevoCampo.trim();
    if (k === "" || keys.includes(k)) {
      setNuevoCampo("");
      return;
    }
    const next = objects.map(
      (o) =>
        ({
          kind: "object",
          entries: [...o.entries, { key: k, value: strLit(""), loc: DUMMY_LOC }],
          loc: DUMMY_LOC,
        }) as ObjectLitExpr,
    );
    setNuevoCampo("");
    emit(next);
  };

  const cellValue = (o: ObjectLitExpr, key: string): string => {
    const e = o.entries.find((x) => x.key === key);
    return e ? cellToText(e.value) : "";
  };

  return (
    <div className="space-y-1 overflow-x-auto">
      <table className="w-full border-collapse text-[11px]">
        <thead>
          <tr>
            {keys.map((k) => (
              <th
                key={k}
                className="border border-[var(--c-border,#e2e8f0)] bg-[#f1f5f9] px-1 py-0.5 text-left font-semibold"
              >
                {k}
              </th>
            ))}
            <th className="w-6" />
          </tr>
        </thead>
        <tbody>
          {objects.map((o, ri) => (
            <tr key={ri}>
              {keys.map((k) => (
                <td key={k} className="border border-[var(--c-border,#e2e8f0)] p-0">
                  <input
                    value={cellValue(o, k)}
                    onChange={(e) => setCell(ri, k, e.target.value)}
                    className="w-full bg-transparent px-1 py-0.5 text-[11px] focus:outline-none"
                  />
                </td>
              ))}
              <td className="text-center">
                <button
                  type="button"
                  onClick={() => removeRow(ri)}
                  disabled={objects.length <= 1}
                  aria-label="Quitar fila"
                  className="text-red-600 disabled:opacity-30"
                >
                  −
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={addRow}
          className="text-[10px] text-[var(--c-primary,#3b82f6)] hover:underline"
        >
          + Fila
        </button>
        <span className="flex items-center gap-1">
          <input
            value={nuevoCampo}
            onChange={(e) => setNuevoCampo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addColumn();
              }
            }}
            placeholder="nuevo campo"
            className="w-24 rounded border border-[var(--c-border,#e2e8f0)] px-1 py-0.5 text-[10px]"
          />
          <button
            type="button"
            onClick={addColumn}
            className="text-[10px] text-[var(--c-primary,#3b82f6)] hover:underline"
          >
            + Campo
          </button>
        </span>
      </div>
    </div>
  );
}

/* ---------- 2D: expresión derivada (editable) ---------- */

function DerivedExprWidget({
  expr,
  onChange,
}: {
  expr: Expr;
  onChange: (expr: Expr) => void;
}) {
  const buf = useBufferedInput<Expr>({
    external: expr,
    serialize: (e) => emitExpr(e),
    parse: (s) => {
      const r = parseExprText(s);
      return r.ok ? { ok: true, value: r.expr } : { ok: false, reason: r.reason };
    },
    onCommit: onChange,
  });
  return (
    <div>
      <input
        value={buf.buf}
        onChange={(e) => buf.handleChange(e.target.value)}
        onBlur={buf.handleBlur}
        placeholder="Fórmula (ej. a + b * 2)"
        className={`w-full rounded border px-2 py-0.5 text-xs font-mono ${
          buf.error ? "border-red-500" : "border-[var(--c-border,#e2e8f0)]"
        }`}
      />
      {buf.error && <p className="text-[10px] text-red-600 mt-0.5">{buf.error}</p>}
    </div>
  );
}

function RandomIntWidget({
  min,
  max,
  onChange,
}: {
  min: number;
  max: number;
  onChange: (expr: Expr) => void;
}) {
  const [lastMin, setLastMin] = useState(min);
  const [lastMax, setLastMax] = useState(max);

  useEffect(() => { setLastMin(min); }, [min]);
  useEffect(() => { setLastMax(max); }, [max]);

  const handleMinCommit = useCallback(
    (v: number) => {
      setLastMin(v);
      onChange(funCall("random", [numLit(v), numLit(lastMax)]));
    },
    [onChange, lastMax],
  );

  const handleMaxCommit = useCallback(
    (v: number) => {
      setLastMax(v);
      onChange(funCall("random", [numLit(lastMin), numLit(v)]));
    },
    [onChange, lastMin],
  );

  return (
    <div className="space-y-1">
      <div className="flex gap-2">
        <BufferedNumberInput value={min} onCommit={handleMinCommit} label="min" />
        <BufferedNumberInput value={max} onCommit={handleMaxCommit} label="max" />
      </div>
      {lastMin > lastMax && (
        <p className="text-[10px] text-amber-600">⚠ min &gt; max</p>
      )}
    </div>
  );
}

function RandomFloatWidget({
  min,
  max,
  decimals,
  onChange,
}: {
  min: number;
  max: number;
  decimals: number;
  onChange: (expr: Expr) => void;
}) {
  const [lastMin, setLastMin] = useState(min);
  const [lastMax, setLastMax] = useState(max);
  const [lastDec, setLastDec] = useState(decimals);

  useEffect(() => { setLastMin(min); }, [min]);
  useEffect(() => { setLastMax(max); }, [max]);
  useEffect(() => { setLastDec(decimals); }, [decimals]);

  const emit = useCallback(
    (m: number, x: number, d: number) => {
      onChange(funCall("random_float", [numLit(m), numLit(x), numLit(d)]));
    },
    [onChange],
  );

  return (
    <div className="space-y-1">
      <div className="flex gap-2">
        <BufferedNumberInput
          value={min}
          onCommit={(v) => { setLastMin(v); emit(v, lastMax, lastDec); }}
          label="min"
        />
        <BufferedNumberInput
          value={max}
          onCommit={(v) => { setLastMax(v); emit(lastMin, v, lastDec); }}
          label="max"
        />
        <BufferedNumberInput
          value={decimals}
          onCommit={(v) => { setLastDec(v); emit(lastMin, lastMax, v); }}
          label="decimales"
        />
      </div>
      {lastMin > lastMax && (
        <p className="text-[10px] text-amber-600">⚠ min &gt; max</p>
      )}
    </div>
  );
}

/* ---------- RespuestaEditor ---------- */

function RespuestaEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const tipo = plantilla.tipoInferido;

  if (tipo === "mc" || tipo === "input" || tipo === "completar") {
    return <RespuestaExprInput plantilla={plantilla} onChange={onChange} />;
  }
  if (tipo === "vf") {
    return <RespuestaBoolean plantilla={plantilla} onChange={onChange} />;
  }
  return (
    <p className="text-xs italic text-[var(--c-muted,#64748b)]">
      La respuesta de tipo <code>{tipo}</code> se edita desde el código DSL.
    </p>
  );
}

function RespuestaExprInput({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const resp = findBlock(plantilla, "respuesta");
  const text = resp ? exprToText(resp.expr) : "";
  return (
    <input
      value={text}
      onChange={(e) => {
        const value = e.target.value.trim();
        if (value === "") {
          onChange(withoutBlock(plantilla, "respuesta"));
          return;
        }
        const asNum = Number(value);
        let expr: Expr;
        if (!Number.isNaN(asNum) && FINITE_NUMBER_RE.test(value)) {
          expr = numLit(asNum);
        } else if (VALID_IDENTIFIER_RE.test(value)) {
          expr = varRef(value);
        } else {
          expr = strLit(value);
        }
        onChange(
          withBlock(plantilla, {
            kind: "respuesta",
            expr,
            loc: DUMMY_LOC,
          }),
        );
      }}
      placeholder="Ej.: a + b   ·   42   ·   variable"
      className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 text-xs font-mono"
      data-testid="vblang-form-respuesta"
    />
  );
}

function RespuestaBoolean({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const resp = findBlock(plantilla, "respuesta");
  const current =
    resp && resp.expr.kind === "bool" ? resp.expr.value : true;
  return (
    <select
      value={String(current)}
      onChange={(e) =>
        onChange(
          withBlock(plantilla, {
            kind: "respuesta",
            expr: boolLit(e.target.value === "true"),
            loc: DUMMY_LOC,
          }),
        )
      }
      className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 text-xs"
    >
      <option value="true">Verdadero</option>
      <option value="false">Falso</option>
    </select>
  );
}

/* ---------- 2B: Tolerancia + unidad ---------- */

function ToleranciaUnidadEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const tol = findBlock(plantilla, "tolerancia");
  const uni = findBlock(plantilla, "unidad");

  const setTol = (valor: number, esPorcentaje: boolean) => {
    const block: ToleranciaBloque = {
      kind: "tolerancia",
      valor,
      esPorcentaje,
      loc: tol?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, block));
  };
  const setUni = (valor: string) => {
    if (valor.trim() === "") {
      onChange(withoutBlock(plantilla, "unidad"));
      return;
    }
    const block: UnidadBloque = { kind: "unidad", valor, loc: uni?.loc ?? DUMMY_LOC };
    onChange(withBlock(plantilla, block));
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-1 text-xs">
          <input
            type="checkbox"
            checked={!!tol}
            onChange={(e) =>
              e.target.checked
                ? setTol(0, false)
                : onChange(withoutBlock(plantilla, "tolerancia"))
            }
          />
          Tolerancia
        </label>
        {tol && (
          <>
            <BufferedNumberInput
              value={tol.valor}
              onCommit={(v) => setTol(v, tol.esPorcentaje)}
            />
            <select
              value={tol.esPorcentaje ? "pct" : "abs"}
              onChange={(e) => setTol(tol.valor, e.target.value === "pct")}
              className="rounded border border-[var(--c-border,#e2e8f0)] px-1 py-0.5 text-xs"
            >
              <option value="abs">absoluto</option>
              <option value="pct">%</option>
            </select>
          </>
        )}
      </div>
      <label className="flex items-center gap-2 text-xs">
        <span className="w-14">Unidad</span>
        <input
          value={uni?.valor ?? ""}
          onChange={(e) => setUni(e.target.value)}
          placeholder="ej. m/s"
          className="flex-1 rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
        />
      </label>
    </div>
  );
}

/* ---------- 2B: Puntaje + pista (via metadata) ---------- */

function getMetaCampo(plantilla: Plantilla, key: string): Expr | undefined {
  return findBlock(plantilla, "metadata")?.campos.find((c) => c.key === key)?.value;
}

function setMetaCampo(
  plantilla: Plantilla,
  key: string,
  value: Expr | undefined,
): Plantilla {
  const m = findBlock(plantilla, "metadata");
  const campos: CampoKV[] = m ? [...m.campos] : [];
  const idx = campos.findIndex((c) => c.key === key);
  if (value === undefined) {
    if (idx >= 0) campos.splice(idx, 1);
  } else {
    const campo: CampoKV = { key, value, loc: DUMMY_LOC };
    if (idx >= 0) campos[idx] = campo;
    else campos.push(campo);
  }
  if (campos.length === 0) return withoutBlock(plantilla, "metadata");
  const block: MetadataBloque = {
    kind: "metadata",
    campos,
    loc: m?.loc ?? DUMMY_LOC,
  };
  return withBlock(plantilla, block);
}

function PuntajePistaEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const puntajeExpr = getMetaCampo(plantilla, "puntaje");
  const puntaje =
    puntajeExpr && puntajeExpr.kind === "num" ? puntajeExpr.value : undefined;
  const pistaExpr = getMetaCampo(plantilla, "pista");
  const pista =
    pistaExpr && pistaExpr.kind === "str" ? pistaExpr.value : "";

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-xs">
        <span className="w-14">Puntaje</span>
        <input
          type="number"
          step={0.5}
          value={puntaje ?? ""}
          onChange={(e) => {
            const raw = e.target.value;
            if (raw.trim() === "") {
              onChange(setMetaCampo(plantilla, "puntaje", undefined));
              return;
            }
            const n = Number(raw);
            if (Number.isFinite(n)) {
              onChange(setMetaCampo(plantilla, "puntaje", numLit(n)));
            }
          }}
          className="w-24 rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
        />
      </label>
      <label className="flex items-center gap-2 text-xs">
        <span className="w-14">Pista</span>
        <input
          value={pista}
          onChange={(e) => {
            const v = e.target.value;
            onChange(
              setMetaCampo(plantilla, "pista", v === "" ? undefined : strLit(v)),
            );
          }}
          placeholder="Pista opcional para el estudiante"
          className="flex-1 rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs"
        />
      </label>
    </div>
  );
}

/* ---------- 2B: Restricciones ---------- */

function RestriccionRow({
  expr,
  onCommit,
  onRemove,
}: {
  expr: Expr;
  onCommit: (expr: Expr) => void;
  onRemove: () => void;
}) {
  const buf = useBufferedInput<Expr>({
    external: expr,
    serialize: (e) => emitExpr(e),
    parse: (s) => {
      const r = parseExprText(s);
      return r.ok ? { ok: true, value: r.expr } : { ok: false, reason: r.reason };
    },
    onCommit,
  });
  return (
    <div>
      <div className="flex items-center gap-1">
        <input
          value={buf.buf}
          onChange={(e) => buf.handleChange(e.target.value)}
          onBlur={buf.handleBlur}
          placeholder="ej. a != 0"
          className={`flex-1 rounded border px-2 py-0.5 text-xs font-mono ${
            buf.error ? "border-red-500" : "border-[var(--c-border,#e2e8f0)]"
          }`}
        />
        <button
          type="button"
          onClick={onRemove}
          aria-label="Quitar restricción"
          className="text-xs text-red-600 hover:underline"
        >
          −
        </button>
      </div>
      {buf.error && <p className="text-[10px] text-red-600 mt-0.5">{buf.error}</p>}
    </div>
  );
}

function RestriccionesEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const block = findBlock(plantilla, "restricciones");
  const condiciones = block?.condiciones ?? [];
  const [nueva, setNueva] = useState("");
  const [nuevaError, setNuevaError] = useState<string | null>(null);

  const setCondiciones = (next: Expr[]) => {
    if (next.length === 0) {
      onChange(withoutBlock(plantilla, "restricciones"));
      return;
    }
    const newBlock: RestriccionesBloque = {
      kind: "restricciones",
      condiciones: next,
      loc: block?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, newBlock));
  };

  const agregar = () => {
    const r = parseExprText(nueva);
    if (!r.ok) {
      setNuevaError(r.reason);
      return;
    }
    setCondiciones([...condiciones, r.expr]);
    setNueva("");
    setNuevaError(null);
  };

  return (
    <div className="space-y-1">
      {condiciones.length === 0 && (
        <p className="text-xs text-[var(--c-muted,#64748b)]">Sin restricciones.</p>
      )}
      {condiciones.map((c, i) => (
        <RestriccionRow
          key={i}
          expr={c}
          onCommit={(e) => setCondiciones(condiciones.map((x, j) => (j === i ? e : x)))}
          onRemove={() => setCondiciones(condiciones.filter((_, j) => j !== i))}
        />
      ))}
      <div className="flex items-center gap-1 pt-1">
        <input
          value={nueva}
          onChange={(e) => {
            setNueva(e.target.value);
            setNuevaError(null);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              agregar();
            }
          }}
          placeholder="Nueva restricción (ej. b > 0)"
          className={`flex-1 rounded border px-2 py-0.5 text-xs font-mono ${
            nuevaError ? "border-red-500" : "border-[var(--c-border,#e2e8f0)]"
          }`}
        />
        <button
          type="button"
          onClick={agregar}
          className="rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs text-[var(--c-primary,#3b82f6)]"
        >
          + Agregar
        </button>
      </div>
      {nuevaError && <p className="text-[10px] text-red-600">{nuevaError}</p>}
    </div>
  );
}

/* ---------- 2B: Pasos ---------- */

function PasosEditor({
  plantilla,
  onChange,
}: {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}) {
  const block = findBlock(plantilla, "pasos");
  const pasos = block?.pasos ?? [];

  const setPasos = (next: PasoItem[]) => {
    if (next.length === 0) {
      onChange(withoutBlock(plantilla, "pasos"));
      return;
    }
    const newBlock: PasosBloque = {
      kind: "pasos",
      pasos: next,
      loc: block?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, newBlock));
  };

  const updatePaso = (idx: number, text: string) => {
    setPasos(
      pasos.map((p, j) =>
        j === idx ? { partes: textToEnunciadoPartes(text), loc: p.loc ?? DUMMY_LOC } : p,
      ),
    );
  };
  const addPaso = () =>
    setPasos([...pasos, { partes: [{ kind: "texto", value: "" }], loc: DUMMY_LOC }]);
  const removePaso = (idx: number) => setPasos(pasos.filter((_, j) => j !== idx));
  const move = (idx: number, dir: -1 | 1) => {
    const j = idx + dir;
    if (j < 0 || j >= pasos.length) return;
    const next = [...pasos];
    [next[idx], next[j]] = [next[j], next[idx]];
    setPasos(next);
  };

  return (
    <div className="space-y-2">
      {pasos.length === 0 && (
        <p className="text-xs text-[var(--c-muted,#64748b)]">Sin pasos.</p>
      )}
      {pasos.map((p, i) => (
        <div key={i} className="flex items-start gap-1">
          <span className="mt-1 w-5 text-right text-[10px] text-[var(--c-muted,#64748b)]">
            {i + 1}.
          </span>
          <textarea
            value={partesToText(p.partes)}
            onChange={(e) => updatePaso(i, e.target.value)}
            rows={2}
            className="flex-1 rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs font-mono"
            placeholder="Paso de la resolución; podés usar {variable}"
          />
          <div className="flex flex-col gap-0.5">
            <button
              type="button"
              onClick={() => move(i, -1)}
              disabled={i === 0}
              aria-label="Subir paso"
              className="text-xs text-[var(--c-muted,#64748b)] disabled:opacity-30"
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => move(i, 1)}
              disabled={i === pasos.length - 1}
              aria-label="Bajar paso"
              className="text-xs text-[var(--c-muted,#64748b)] disabled:opacity-30"
            >
              ↓
            </button>
            <button
              type="button"
              onClick={() => removePaso(i)}
              aria-label="Eliminar paso"
              className="text-xs text-red-600"
            >
              ×
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addPaso}
        className="rounded border border-dashed border-[var(--c-border,#cbd5e1)] px-3 py-1 text-xs text-[var(--c-muted,#64748b)] hover:bg-white"
      >
        + Agregar paso
      </button>
    </div>
  );
}

/* ---------- enunciado <-> text ---------- */

function partesToText(partes: TextoOInterpolacion[]): string {
  let out = "";
  for (const p of partes) {
    if (p.kind === "texto") {
      out += p.value.replace(/{/g, "{{").replace(/}/g, "}}");
    } else {
      const exprStr = exprToText(p.expr);
      out += p.modificador
        ? `{${exprStr} | ${p.modificador}}`
        : `{${exprStr}}`;
    }
  }
  return out;
}

function enunciadoToText(b: EnunciadoBloque | undefined): string {
  if (!b) return "";
  return partesToText(b.partes);
}

function textToEnunciadoPartes(text: string): TextoOInterpolacion[] {
  const partes: TextoOInterpolacion[] = [];
  let buf = "";
  let i = 0;
  const flush = () => {
    if (buf.length > 0) {
      partes.push({ kind: "texto", value: buf });
      buf = "";
    }
  };
  while (i < text.length) {
    const ch = text[i];
    if (ch === "{" && text[i + 1] === "{") {
      buf += "{";
      i += 2;
      continue;
    }
    if (ch === "}" && text[i + 1] === "}") {
      buf += "}";
      i += 2;
      continue;
    }
    if (ch === "{") {
      const close = text.indexOf("}", i + 1);
      if (close === -1) {
        buf += text.slice(i);
        break;
      }
      const inner = text.slice(i + 1, close);
      const pipeIdx = inner.indexOf("|");
      const exprStr =
        pipeIdx === -1 ? inner.trim() : inner.slice(0, pipeIdx).trim();
      const modificador =
        pipeIdx === -1 ? undefined : inner.slice(pipeIdx + 1).trim();
      if (exprStr.length === 0) {
        buf += text.slice(i, close + 1);
        i = close + 1;
        continue;
      }
      flush();
      partes.push({
        kind: "interp",
        expr: parseSimpleExpr(exprStr),
        modificador,
      });
      i = close + 1;
      continue;
    }
    buf += ch;
    i++;
  }
  flush();
  return partes;
}

function parseSimpleExpr(text: string): Expr {
  const parts = text.split(".").map((s) => s.trim());
  if (
    parts.length >= 1 &&
    parts.every((p) => VALID_IDENTIFIER_RE.test(p))
  ) {
    let expr: Expr = varRef(parts[0]);
    for (let i = 1; i < parts.length; i++) {
      expr = { kind: "field", target: expr, field: parts[i], loc: DUMMY_LOC };
    }
    return expr;
  }
  return strLit(text);
}

function exprToText(expr: Expr): string {
  if (expr.kind === "var") return expr.name;
  if (expr.kind === "field") {
    if (
      expr.target.kind === "var" ||
      expr.target.kind === "field"
    ) {
      return `${exprToText(expr.target)}.${expr.field}`;
    }
  }
  if (expr.kind === "str") return expr.value;
  return emitExpr(expr);
}
