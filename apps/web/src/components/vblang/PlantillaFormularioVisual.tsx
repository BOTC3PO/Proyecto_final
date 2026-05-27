/**
 * Editor visual de plantillas VBLang (Sprint 10B · A2).
 *
 * Recibe el AST `Plantilla` y emite mutaciones via `onChange`. Para campos que
 * el formulario no sabe cómo editar (expresiones complejas), muestra el código
 * serializado y lo marca como "avanzado / editable sólo en modo Código".
 *
 * El AST es la única fuente de verdad: el form NO mantiene un estado paralelo
 * sino que deriva todo del `plantilla` recibido. El parent (`PlantillaEditor`)
 * se encarga de serializar a DSL en cada `onChange`.
 */

import { useMemo } from "react";
import { emitExpr, serialize } from "@vb/vblang";
import type {
  Bloque,
  Expr,
  Plantilla,
  TipoBloque,
  TipoPregunta,
  VariableDecl,
  VariablesBloque,
  EnunciadoBloque,
  TextoOInterpolacion,
} from "@vb/vblang";

interface Props {
  plantilla: Plantilla;
  onChange: (next: Plantilla) => void;
}

const TIPOS: { value: TipoPregunta; label: string }[] = [
  { value: "input", label: "Input numérico/texto" },
  { value: "mc", label: "Multiple choice" },
  { value: "vf", label: "Verdadero / Falso" },
  { value: "completar", label: "Completar" },
  { value: "ordenar", label: "Ordenar" },
  { value: "marcar_mapa", label: "Marcar mapa" },
  { value: "analisis_sintactico", label: "Análisis sintáctico" },
  { value: "identificar_palabras", label: "Identificar palabras" },
];

const DUMMY_LOC = { line: 0, col: 0, endLine: 0, endCol: 0 } as const;

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

/* ---------- Variable widget classification ---------- */

type VarShape =
  | { kind: "literal-num"; value: number }
  | { kind: "literal-str"; value: string }
  | { kind: "literal-bool"; value: boolean }
  | { kind: "random"; min: number; max: number }
  | { kind: "uno_de-strings"; items: string[] }
  | { kind: "advanced" };

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
    expr.name === "uno_de" &&
    expr.args.length === 1 &&
    expr.args[0].kind === "array" &&
    expr.args[0].items.every((i) => i.kind === "str")
  ) {
    return {
      kind: "uno_de-strings",
      items: expr.args[0].items.map(
        (i) => (i as Extract<Expr, { kind: "str" }>).value,
      ),
    };
  }
  return { kind: "advanced" };
}

/* ---------- Componente principal ---------- */

export default function PlantillaFormularioVisual({ plantilla, onChange }: Props) {
  const enunciado = findBlock(plantilla, "enunciado");
  const variablesBlock = findBlock(plantilla, "variables");
  const variables = variablesBlock?.declaraciones ?? [];

  const enunciadoText = useMemo(() => enunciadoToText(enunciado), [enunciado]);

  /* ---------- handlers ---------- */

  const setTipo = (next: TipoPregunta) => {
    const tipoBloque: TipoBloque = {
      kind: "tipo",
      valor: next,
      loc: DUMMY_LOC,
    };
    onChange(withBlock(plantilla, tipoBloque));
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
    if (!nombre || /\s/.test(nombre)) return;
    const decls = variables.map((d, i) => (i === idx ? { ...d, nombre } : d));
    const block: VariablesBloque = {
      kind: "variables",
      declaraciones: decls,
      loc: variablesBlock?.loc ?? DUMMY_LOC,
    };
    onChange(withBlock(plantilla, block));
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

  /* ---------- respuesta UI por tipo ---------- */

  const tipoActual: TipoPregunta = plantilla.tipoInferido;

  return (
    <div className="h-full overflow-auto p-6 space-y-6 text-sm bg-[var(--c-bg,#f8fafc)]">
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
      </Section>

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
              decl={decl}
              onRename={(name) => renameVariable(i, name)}
              onChangeExpr={(expr) => updateVariableExpr(i, expr)}
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

      <Section title="Enunciado">
        <textarea
          value={enunciadoText}
          onChange={(e) => setEnunciadoText(e.target.value)}
          rows={3}
          className="w-full rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-1 font-mono text-xs"
          placeholder="Ej.: ¿Cuánto es {a} + {b}?"
          data-testid="vblang-form-enunciado"
        />
        <p className="mt-1 text-xs text-[var(--c-muted,#64748b)]">
          Usá <code>{`{nombreVariable}`}</code> para insertar el valor.
        </p>
      </Section>

      <Section title="Respuesta">
        <RespuestaEditor plantilla={plantilla} onChange={onChange} />
      </Section>

      <Section title="Avanzado (sólo lectura)">
        <p className="text-xs text-[var(--c-muted,#64748b)]">
          Estos bloques requieren editar el código DSL directamente.
        </p>
        <pre className="mt-2 max-h-64 overflow-auto rounded border border-[var(--c-border,#e2e8f0)] bg-[#0f172a] p-2 text-xs text-emerald-200">
          {serialize(plantilla)}
        </pre>
      </Section>
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

function VariableRow({
  decl,
  onRename,
  onChangeExpr,
  onRemove,
}: {
  decl: VariableDecl;
  onRename: (name: string) => void;
  onChangeExpr: (expr: Expr) => void;
  onRemove: () => void;
}) {
  const shape = classifyVarExpr(decl.expr);
  return (
    <div className="rounded border border-[var(--c-border,#e2e8f0)] bg-white px-2 py-2 space-y-1">
      <div className="flex items-center gap-2">
        <input
          value={decl.nombre}
          onChange={(e) => onRename(e.target.value)}
          className="w-32 rounded border border-[var(--c-border,#e2e8f0)] px-2 py-0.5 text-xs font-semibold"
        />
        <span className="text-xs text-[var(--c-muted,#64748b)]">{shape.kind}</span>
        <button
          type="button"
          onClick={onRemove}
          aria-label="Eliminar variable"
          className="ml-auto text-xs text-red-600 hover:underline"
        >
          eliminar
        </button>
      </div>
      <VariableExprWidget shape={shape} onChange={onChangeExpr} />
    </div>
  );
}

function VariableExprWidget({
  shape,
  onChange,
}: {
  shape: VarShape;
  onChange: (expr: Expr) => void;
}) {
  if (shape.kind === "literal-num") {
    return (
      <input
        type="number"
        value={shape.value}
        onChange={(e) => onChange(numLit(Number(e.target.value)))}
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
    return (
      <div className="flex gap-2">
        <label className="flex items-center gap-1 text-xs">
          min
          <input
            type="number"
            value={shape.min}
            onChange={(e) =>
              onChange(funCall("random", [numLit(Number(e.target.value)), numLit(shape.max)]))
            }
            className="w-20 rounded border border-[var(--c-border,#e2e8f0)] px-1 text-xs"
          />
        </label>
        <label className="flex items-center gap-1 text-xs">
          max
          <input
            type="number"
            value={shape.max}
            onChange={(e) =>
              onChange(funCall("random", [numLit(shape.min), numLit(Number(e.target.value))]))
            }
            className="w-20 rounded border border-[var(--c-border,#e2e8f0)] px-1 text-xs"
          />
        </label>
      </div>
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
  return (
    <span className="text-xs italic text-[var(--c-muted,#64748b)]">
      Expresión avanzada — editá desde el código DSL.
    </span>
  );
}

function funCall(name: string, args: Expr[]): Expr {
  return { kind: "fun_call", name, args, loc: DUMMY_LOC };
}

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
        // Si es un número, guardar como num literal; si es identificador simple,
        // como var ref; sino como string literal. Para expresiones complejas el
        // docente tiene que ir al editor DSL.
        const asNum = Number(value);
        let expr: Expr;
        if (!Number.isNaN(asNum) && /^-?\d+(\.\d+)?$/.test(value)) {
          expr = numLit(asNum);
        } else if (/^[a-záéíóúñ_][a-záéíóúñ_0-9]*$/i.test(value)) {
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

/* ---------- enunciado <-> text ---------- */

function enunciadoToText(b: EnunciadoBloque | undefined): string {
  if (!b) return "";
  let out = "";
  for (const p of b.partes) {
    if (p.kind === "texto") {
      // Re-escapar { y } literales para mantener consistencia con el DSL.
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

function textToEnunciadoPartes(text: string): TextoOInterpolacion[] {
  // Mismo algoritmo que el parser de interpolación pero sin lanzar errores
  // por interpolaciones inválidas: si encontramos `{` sin cierre, lo dejamos
  // como texto literal.
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
        // sin cierre — tratamos el resto como texto literal
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
        // {} vacío — interpretar como texto literal
        buf += text.slice(i, close + 1);
        i = close + 1;
        continue;
      }
      // Identificador simple → var; acceso a campo → field chain; resto → var.
      // Para expresiones complejas, el usuario debe ir al modo Código.
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
  // Soporta identificador simple o cadena `a.b.c`.
  const parts = text.split(".").map((s) => s.trim());
  if (
    parts.length >= 1 &&
    parts.every((p) => /^[a-záéíóúñ_][a-záéíóúñ_0-9]*$/i.test(p))
  ) {
    let expr: Expr = varRef(parts[0]);
    for (let i = 1; i < parts.length; i++) {
      expr = { kind: "field", target: expr, field: parts[i], loc: DUMMY_LOC };
    }
    return expr;
  }
  // Fallback — si no parece un acceso simple, lo guardamos como string para no
  // perder el contenido; el modo código lo va a mostrar al docente.
  return strLit(text);
}

function exprToText(expr: Expr): string {
  // Para acceso simple, emitimos sin comillas para que el usuario pueda editar
  // como texto plano. Para todo lo demás delegamos al serializer del paquete,
  // que produce DSL válido.
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
