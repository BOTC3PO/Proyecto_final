/**
 * Editor de código con syntax highlighting básico (regex + overlay).
 *
 * Implementación: textarea transparente sobre un <pre> con spans coloreados.
 * Sincroniza scroll entre los dos. Resalta línea de error con fondo rojo
 * translúcido. Tab inserta 2 espacios.
 *
 * Limitaciones conocidas (aceptables para v1): no maneja escapes dentro de
 * strings perfectamente ni multiline strings. Cuando deje de alcanzar,
 * reemplazar por Monaco/CodeMirror.
 */

import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type KeyboardEvent,
  type ChangeEvent,
  type UIEvent,
} from "react";
import { BUILTIN_NAMES, GLOBAL_CONSTANTS } from "@vb/vblang";

export interface CodeEditorHandle {
  focusAt: (line: number, col: number) => void;
  /**
   * Inserta texto en la posición actual del caret (o reemplaza la selección
   * actual), notifica `onChange` con el valor nuevo y devuelve el foco al
   * editor. Pensado para las barras de snippets.
   */
  insertAtCursor: (text: string) => void;
}

interface CodeEditorProps {
  value: string;
  onChange: (v: string) => void;
  errorLine?: number;
  errorCol?: number;
  onCursorChange?: (line: number, col: number) => void;
  ariaLabel?: string;
  /**
   * Resumen textual de los errores actuales (parse + lint), para que el lector
   * de pantalla lo anuncie al editar y quede asociado al textarea vía
   * `aria-describedby`. Vacío/undefined = sin errores.
   */
  errorSummary?: string;
  /**
   * Variables declaradas en el bloque `variables:` de la plantilla. Se usan
   * como sugerencias prioritarias en el autocompletado. Si la compilación
   * falló, mantener la última lista válida (responsabilidad del consumidor).
   */
  declaredVariables?: readonly string[];
}

const KEYWORDS_BLOQUE = new Set([
  "variables",
  "enunciado",
  "respuesta",
  "respuesta_iso",
  "respuesta_nombre",
  "respuesta_orden",
  "respuestas_validas",
  "opciones",
  "opciones_explicitas",
  "pasos",
  "tipo",
  "metadata",
  "restricciones",
  "generador",
  "dataset",
  "mapa",
  "etiquetas_pedidas",
  "texto_a_analizar",
]);

const BUILTINS = new Set([
  "random",
  "uno_de",
  "sqrt",
  "abs",
  "floor",
  "ceil",
  "round",
  "min",
  "max",
  "pow",
  "log",
  "sin",
  "cos",
  "tan",
  "len",
  "rango",
  "sum",
  "avg",
  "filtrar",
  "mapear",
  "concat",
  "string",
  "numero",
]);

const LITERALS = new Set(["verdadero", "falso", "nulo", "true", "false", "null"]);

type Tok = { kind: string; text: string };

/** Chip de interpolación `{var}` dentro de un string ("… {a} …"). */
const VAR_CHIP = /\{[a-zA-Z_][a-zA-Z0-9_]*\}/g;

/**
 * Empuja un literal de string partiéndolo en sus chips `{var}`: cada `{a}` se
 * emite como token `var` (resaltado tipo chip) y el resto como `string`. Así el
 * highlighting marca las variables interpoladas aun dentro del enunciado.
 */
function pushString(toks: Tok[], str: string): void {
  let last = 0;
  let m: RegExpExecArray | null;
  VAR_CHIP.lastIndex = 0;
  while ((m = VAR_CHIP.exec(str))) {
    if (m.index > last) toks.push({ kind: "string", text: str.slice(last, m.index) });
    toks.push({ kind: "var", text: m[0] });
    last = m.index + m[0].length;
  }
  if (last < str.length) toks.push({ kind: "string", text: str.slice(last) });
}

/**
 * Fusiona la secuencia `{` + ident + `}` (fuera de strings) en un único token
 * `var`, para que los chips de variable también se resalten en expresiones.
 */
function mergeBraceVars(toks: Tok[]): Tok[] {
  const out: Tok[] = [];
  for (let i = 0; i < toks.length; i++) {
    const a = toks[i];
    const b = toks[i + 1];
    const c = toks[i + 2];
    if (
      a.kind === "punct" &&
      a.text === "{" &&
      b?.kind === "ident" &&
      c?.kind === "punct" &&
      c.text === "}"
    ) {
      out.push({ kind: "var", text: `{${b.text}}` });
      i += 2;
    } else {
      out.push(a);
    }
  }
  return out;
}

function tokenizeLine(line: string): Tok[] {
  const toks: Tok[] = [];
  // Pattern order matters — comentarios primero, luego strings, números, ids.
  const re =
    /(#.*$)|("(?:\\.|[^"\\])*")|(-?\d+(?:\.\d+)?)|([a-zA-Z_][a-zA-Z0-9_]*)|(\s+)|(.)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    if (m[1] !== undefined) {
      toks.push({ kind: "comment", text: m[1] });
    } else if (m[2] !== undefined) {
      pushString(toks, m[2]);
    } else if (m[3] !== undefined) {
      toks.push({ kind: "number", text: m[3] });
    } else if (m[4] !== undefined) {
      const w = m[4];
      if (KEYWORDS_BLOQUE.has(w)) toks.push({ kind: "keyword", text: w });
      else if (LITERALS.has(w)) toks.push({ kind: "literal", text: w });
      else if (BUILTINS.has(w)) toks.push({ kind: "builtin", text: w });
      else toks.push({ kind: "ident", text: w });
    } else if (m[5] !== undefined) {
      toks.push({ kind: "ws", text: m[5] });
    } else if (m[6] !== undefined) {
      toks.push({ kind: "punct", text: m[6] });
    }
  }
  return mergeBraceVars(toks);
}

function classFor(kind: string): string {
  switch (kind) {
    case "comment":
      return "vbe-tk-comment";
    case "string":
      return "vbe-tk-string";
    case "number":
      return "vbe-tk-number";
    case "keyword":
      return "vbe-tk-keyword";
    case "literal":
      return "vbe-tk-literal";
    case "builtin":
      return "vbe-tk-builtin";
    case "var":
      return "vbe-tk-var";
    default:
      return "";
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderHighlighted(
  src: string,
  errorLine?: number,
): { html: string; lineCount: number } {
  const lines = src.split("\n");
  const parts: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isErr = errorLine !== undefined && i + 1 === errorLine;
    const toks = tokenizeLine(line);
    const inner = toks
      .map((t) => {
        const c = classFor(t.kind);
        const text = escapeHtml(t.text);
        return c ? `<span class="${c}">${text}</span>` : text;
      })
      .join("");
    parts.push(
      `<div class="vbe-line${isErr ? " vbe-line-error" : ""}">${inner || "&nbsp;"}</div>`,
    );
  }
  return { html: parts.join(""), lineCount: lines.length };
}

function cursorLineCol(value: string, caretPos: number): { line: number; col: number } {
  let line = 1;
  let col = 1;
  for (let i = 0; i < caretPos; i++) {
    if (value[i] === "\n") {
      line++;
      col = 1;
    } else {
      col++;
    }
  }
  return { line, col };
}

function posFromLineCol(value: string, line: number, col: number): number {
  let l = 1;
  let i = 0;
  while (i < value.length && l < line) {
    if (value[i] === "\n") l++;
    i++;
  }
  return Math.min(i + Math.max(0, col - 1), value.length);
}

/**
 * Devuelve el [A-Za-z_][A-Za-z0-9_]* inmediatamente anterior a la posición
 * `caret` dentro de `value`, junto con el índice donde empieza ese prefijo.
 * Si no hay identificador precedente, devuelve `{ prefix: "", start: caret }`.
 */
function prefixAtCaret(
  value: string,
  caret: number,
): { prefix: string; start: number } {
  let i = caret;
  while (i > 0) {
    const ch = value[i - 1];
    if (!/[A-Za-z0-9_]/.test(ch)) break;
    i--;
  }
  return { prefix: value.slice(i, caret), start: i };
}

/** Coincidencias por prefijo. Si el prefijo está vacío devuelve `[]`. */
function filterByPrefix(items: readonly string[], prefix: string): string[] {
  if (prefix.length === 0) return [];
  const lower = prefix.toLowerCase();
  return items.filter((s) => s.toLowerCase().startsWith(lower));
}

/** Construye la lista de sugerencias (top `max`) ordenada por prioridad:
 *  1. variables declaradas, 2. builtins, 3. constantes globales. */
function buildSuggestions(
  declared: readonly string[],
  prefix: string,
  max = 8,
): { name: string; kind: "var" | "builtin" | "const" }[] {
  if (prefix.length < 2) return [];
  const vars = filterByPrefix(declared, prefix);
  const builtins = filterByPrefix(BUILTIN_NAMES, prefix);
  const constants = filterByPrefix(GLOBAL_CONSTANTS, prefix);
  // Dedupe preservando prioridad (no debería haber colisión real, pero por
  // si un builtin se llama igual que una variable declarada).
  const seen = new Set<string>();
  const out: { name: string; kind: "var" | "builtin" | "const" }[] = [];
  for (const v of vars) {
    if (seen.has(v)) continue;
    seen.add(v);
    out.push({ name: v, kind: "var" });
    if (out.length >= max) return out;
  }
  for (const b of builtins) {
    if (seen.has(b)) continue;
    seen.add(b);
    out.push({ name: b, kind: "builtin" });
    if (out.length >= max) return out;
  }
  for (const c of constants) {
    if (seen.has(c)) continue;
    seen.add(c);
    out.push({ name: c, kind: "const" });
    if (out.length >= max) return out;
  }
  return out;
}

/**
 * Lista de sugerencias flotante anclada al caret. Sólo se renderiza cuando el
 * padre (CodeEditor) tiene un prefijo válido y al menos un candidato.
 * Accesibilidad: role=listbox, role=option, aria-selected por item.
 */
function Suggestions({
  items,
  activeIndex,
  pos,
  listboxId,
  onHover,
  onPick,
}: {
  items: { name: string; kind: "var" | "builtin" | "const" }[];
  activeIndex: number;
  pos: { left: number; top: number };
  listboxId: string;
  onHover: (i: number) => void;
  onPick: (i: number) => void;
}) {
  return (
    <ul
      role="listbox"
      id={listboxId}
      data-testid="vblang-suggestions"
      aria-label="Sugerencias de autocompletado"
      // Posición dinámica: left/top son píxeles medidos; el resto va por CSS.
      style={{ left: pos.left, top: pos.top + 20 }}
      className="vbe-suggest"
    >
      {items.map((item, i) => (
        <li
          key={`${item.kind}:${item.name}`}
          id={`${listboxId}-${i}`}
          role="option"
          aria-selected={i === activeIndex}
          data-testid={`vblang-suggestion-${item.name}`}
          onMouseDown={(e) => {
            // onMouseDown (no onClick) para que el textarea no pierda el foco.
            e.preventDefault();
            onPick(i);
          }}
          onMouseEnter={() => onHover(i)}
          className="vbe-suggest__item"
        >
          <span>{item.name}</span>
          <span className="vbe-suggest__kind">
            {item.kind === "var"
              ? "var"
              : item.kind === "builtin"
                ? "fn"
                : "const"}
          </span>
        </li>
      ))}
    </ul>
  );
}

const CodeEditor = forwardRef<CodeEditorHandle, CodeEditorProps>(function CodeEditor(
  {
    value,
    onChange,
    errorLine,
    onCursorChange,
    ariaLabel = "Editor de código VBLang",
    errorSummary,
    declaredVariables,
  },
  ref,
) {
  const taRef = useRef<HTMLTextAreaElement | null>(null);
  const preRef = useRef<HTMLPreElement | null>(null);
  const gutterRef = useRef<HTMLDivElement | null>(null);
  const mirrorRef = useRef<HTMLDivElement | null>(null);
  const caretMarkerRef = useRef<HTMLSpanElement | null>(null);
  // Cuando es true, el próximo Tab mueve el foco en vez de indentar (ver
  // handleKeyDown). Se activa con Escape.
  const tabEscapesRef = useRef(false);
  // Ref estable de `onChange` para que `useImperativeHandle` (deps: []) siempre
  // vea el callback actualizado al llamar `insertAtCursor` desde afuera.
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  // Idem para `value`: `insertAtCursor` lo lee en el momento del click, no en
  // render, así que necesitamos la versión vigente en una ref.
  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  const summaryId = useId();
  const instructionsId = useId();
  const listboxId = useId();
  const hasErrors = !!errorSummary && errorSummary.trim().length > 0;
  const describedBy = [hasErrors ? summaryId : null, instructionsId]
    .filter(Boolean)
    .join(" ");

  const { html, lineCount } = renderHighlighted(value, errorLine);

  /* ---------------- autocompletado (Tarea 11) ---------------- */
  const [suggestionState, setSuggestionState] = useState<{
    prefix: string;
    prefixStart: number;
    items: { name: string; kind: "var" | "builtin" | "const" }[];
    active: number;
    pos: { left: number; top: number } | null;
  }>({ prefix: "", prefixStart: 0, items: [], active: 0, pos: null });
  const suggestionOpen = suggestionState.items.length > 0;

  // Mide la posición del caret en píxeles usando un div "espejo" con la misma
  // tipografía que el textarea. El truco es copiar `value` hasta el caret
  // dentro de un <span> invisible + un span-marcador: las dimensiones del
  // marcador coinciden con la posición de la línea del caret en X e Y.
  const measureCaret = (
    valueAtCaret: string,
    caret: number,
  ): { left: number; top: number } | null => {
    const m = mirrorRef.current;
    const marker = caretMarkerRef.current;
    if (!m || !marker) return null;
    const before = valueAtCaret.slice(0, caret);
    m.textContent = before;
    // El span-marcador se renderiza al final para que su offsetLeft/Top
    // representen la posición del caret (al final de la subcadena `before`).
    const span = document.createElement("span");
    span.textContent = "\u200b"; // zero-width space
    m.appendChild(span);
    const left = span.offsetLeft - m.scrollLeft;
    const top = span.offsetTop - m.scrollTop;
    m.removeChild(span);
    return { left, top };
  };

  const recomputeSuggestions = (caret: number) => {
    // Usamos valueRef.current (no el `value` de closure) porque el rAF puede
    // correr antes de que el próximo render propague la prop `value`.
    const cur = valueRef.current;
    recomputeSuggestionsFromValue(cur, caret);
  };

  const recomputeSuggestionsFromValue = (cur: string, caret: number) => {
    const { prefix, start } = prefixAtCaret(cur, caret);
    const items = buildSuggestions(declaredVariables ?? [], prefix);
    const pos = items.length > 0 ? measureCaret(cur, caret) : null;
    setSuggestionState((s) => ({
      prefix,
      prefixStart: start,
      items,
      // Mantener `active` dentro del rango nuevo (o resetear a 0 si cambió).
      active: items.length > 0 ? Math.min(s.active, items.length - 1) : 0,
      pos,
    }));
  };

  // Acepta una sugerencia: la inserta en la posición del prefijo, dispara
  // onChange, devuelve el foco y actualiza el caret. Reutilizable desde
  // teclado y desde clicks.
  const acceptSuggestion = (idx: number) => {
    const item = suggestionState.items[idx];
    if (!item) return;
    const ta = taRef.current;
    if (!ta) return;
    const cur = valueRef.current;
    const start = suggestionState.prefixStart;
    const caret = ta.selectionStart ?? cur.length;
    const next = cur.slice(0, start) + item.name + cur.slice(caret);
    onChangeRef.current(next);
    requestAnimationFrame(() => {
      if (!taRef.current) return;
      const newCaret = start + item.name.length;
      taRef.current.focus();
      taRef.current.setSelectionRange(newCaret, newCaret);
    });
    setSuggestionState({ prefix: "", prefixStart: 0, items: [], active: 0, pos: null });
  };

  const closeSuggestions = () =>
    setSuggestionState({ prefix: "", prefixStart: 0, items: [], active: 0, pos: null });

  useImperativeHandle(ref, () => ({
    focusAt(line, col) {
      const ta = taRef.current;
      if (!ta) return;
      const pos = posFromLineCol(valueRef.current, line, col);
      ta.focus();
      ta.setSelectionRange(pos, pos);
    },
    insertAtCursor(text) {
      const ta = taRef.current;
      if (!ta) return;
      const cur = valueRef.current;
      const start = ta.selectionStart ?? cur.length;
      const end = ta.selectionEnd ?? start;
      const next = cur.slice(0, start) + text + cur.slice(end);
      const newCaret = start + text.length;
      onChangeRef.current(next);
      // Restaurar caret DESPUÉS de que React vuelva a pintar el textarea.
      requestAnimationFrame(() => {
        if (taRef.current) {
          taRef.current.focus();
          taRef.current.setSelectionRange(newCaret, newCaret);
        }
      });
    },
  }));

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // WCAG 2.1.2 (sin trampa de teclado): por defecto Tab indenta, pero tras
    // pulsar Escape el siguiente Tab/Shift+Tab mueve el foco normalmente para
    // poder salir del editor solo con teclado.
    if (e.key === "Escape") {
      if (suggestionOpen) {
        // Cerrar el popup sin afectar el modo "Tab sale del editor".
        e.preventDefault();
        e.stopPropagation();
        closeSuggestions();
        return;
      }
      tabEscapesRef.current = true;
      return;
    }
    // Si el popup está abierto, las flechas y Enter lo gestionan, no el editor.
    if (suggestionOpen) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSuggestionState((s) => ({
          ...s,
          active: (s.active + 1) % Math.max(s.items.length, 1),
        }));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSuggestionState((s) => ({
          ...s,
          active:
            (s.active - 1 + s.items.length) % Math.max(s.items.length, 1),
        }));
        return;
      }
      if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        acceptSuggestion(suggestionState.active);
        return;
      }
    }
    if (e.key === "Tab") {
      if (tabEscapesRef.current) {
        // Dejamos el comportamiento nativo: el foco sale del textarea.
        tabEscapesRef.current = false;
        return;
      }
      e.preventDefault();
      const ta = e.currentTarget;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const next = value.slice(0, start) + "  " + value.slice(end);
      onChange(next);
      // Restablecer caret luego del render
      requestAnimationFrame(() => {
        if (taRef.current) {
          taRef.current.selectionStart = start + 2;
          taRef.current.selectionEnd = start + 2;
        }
      });
      return;
    }
    // Cualquier otra tecla (escribir) cancela el modo "Tab sale del editor".
    if (e.key !== "Shift") tabEscapesRef.current = false;
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    // El popup se actualiza después del render (requestAnimationFrame) para
    // que el textarea ya tenga el nuevo valor.
    const caret = e.target.selectionStart ?? 0;
    const latest = e.target.value;
    requestAnimationFrame(() => recomputeSuggestionsFromValue(latest, caret));
  };

  const handleSelect = () => {
    if (!taRef.current) return;
    if (onCursorChange) {
      const { line, col } = cursorLineCol(value, taRef.current.selectionStart);
      onCursorChange(line, col);
    }
    // Mover el popup junto con el caret cuando el usuario navega con flechas.
    requestAnimationFrame(() =>
      recomputeSuggestions(taRef.current?.selectionStart ?? 0),
    );
  };

  const handleScroll = (e: UIEvent<HTMLTextAreaElement>) => {
    const top = e.currentTarget.scrollTop;
    const left = e.currentTarget.scrollLeft;
    if (preRef.current) {
      preRef.current.scrollTop = top;
      preRef.current.scrollLeft = left;
    }
    if (gutterRef.current) {
      gutterRef.current.scrollTop = top;
    }
  };

  useEffect(() => {
    // CSS del highlighting 100% theme-driven: cada token usa los tokens de color
    // (--c-*) del tema activo, sin hex sueltos. Así el resaltado acompaña a
    // cualquier tema (claro/oscuro) y cumple el spec de "cero colores hardcodeados".
    if (typeof document === "undefined") return;
    const id = "vbe-syntax-style";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      .vbe-root { display: grid; grid-template-columns: 40px 1fr; height: 100%; min-height: 0; position: relative; background: var(--c-surface); color: var(--c-text); font-family: var(--font-mono, ui-monospace, 'JetBrains Mono', Menlo, Consolas, monospace); font-size: 14px; line-height: 1.45; }
      .vbe-gutter { overflow: hidden; text-align: right; padding: 8px 6px 8px 0; color: var(--c-text-3); user-select: none; border-right: 1px solid var(--c-border); }
      .vbe-gutter > div { padding-right: 4px; }
      .vbe-pane { position: relative; overflow: hidden; }
      .vbe-pre, .vbe-ta { position: absolute; inset: 0; margin: 0; padding: 8px 12px; white-space: pre; overflow: auto; font: inherit; line-height: inherit; }
      .vbe-pre { color: inherit; pointer-events: none; }
      .vbe-ta { color: transparent; background: transparent; caret-color: var(--c-text); border: 0; outline: 0; resize: none; }
      .vbe-line { min-height: 1.45em; }
      .vbe-line-error { background: color-mix(in srgb, var(--c-danger) 18%, transparent); }
      .vbe-tk-keyword { color: var(--c-info); font-weight: 600; }
      .vbe-tk-string { color: var(--c-warning); }
      .vbe-tk-number { color: var(--c-success); }
      .vbe-tk-comment { color: var(--c-text-3); font-style: italic; }
      .vbe-tk-builtin { color: var(--c-accent); font-weight: 600; }
      .vbe-tk-literal { color: var(--c-info); }
      /* Chip de variable interpolada: sin padding horizontal para no romper la
         alineación monoespaciada con el textarea transparente (el caret no se
         corre). El fondo resalta el glifo, el color lo distingue del string. */
      .vbe-tk-var { color: var(--c-danger); background: color-mix(in srgb, var(--c-danger) 12%, transparent); border-radius: 3px; }
      /* Mirror invisible para medir la posición del caret. Misma tipografía y
         padding que el textarea. Lo copiamos caracter por caracter y medimos
         el offsetLeft/Top del span-marcador al final. */
      .vbe-mirror { position: absolute; visibility: hidden; pointer-events: none; inset: 0; margin: 0; padding: 8px 12px; white-space: pre; overflow: hidden; font: inherit; line-height: inherit; }
      .vbe-caret-marker { display: inline-block; width: 0; }
      /* Popup de sugerencias anclado al caret. */
      .vbe-suggest { position: absolute; z-index: 20; min-width: 160px; max-height: 200px; overflow-y: auto; background: var(--c-surface); color: var(--c-text); border: 1px solid var(--c-border); border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.12); font-family: var(--font-mono, ui-monospace, 'JetBrains Mono', Menlo, Consolas, monospace); font-size: 13px; line-height: 1.4; }
      .vbe-suggest__item { padding: 4px 10px; cursor: pointer; display: flex; align-items: baseline; gap: 6px; }
      .vbe-suggest__item[aria-selected="true"] { background: var(--c-primary); color: white; }
      .vbe-suggest__kind { font-size: 10px; text-transform: uppercase; color: var(--c-muted, #64748b); }
      .vbe-suggest__item[aria-selected="true"] .vbe-suggest__kind { color: rgba(255,255,255,0.7); }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="vbe-root" data-testid="vblang-code-editor">
      <div className="vbe-gutter" ref={gutterRef} aria-hidden>
        {Array.from({ length: Math.max(lineCount, 1) }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="vbe-pane">
        <pre
          ref={preRef}
          className="vbe-pre"
          aria-hidden
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* Mirror invisible: misma tipografía y padding que el textarea, lo
            usamos para medir la posición X/Y del caret. El span-marcador
            colapsa a la línea-base del caret (al final de la subcadena
            copiada). */}
        <div
          ref={mirrorRef}
          className="vbe-mirror"
          aria-hidden
        >
          <span ref={caretMarkerRef} className="vbe-caret-marker"></span>
        </div>
        {suggestionOpen && suggestionState.pos && (
          <Suggestions
            listboxId={listboxId}
            items={suggestionState.items}
            activeIndex={suggestionState.active}
            pos={suggestionState.pos}
            onHover={(i) =>
              setSuggestionState((s) => ({ ...s, active: i }))
            }
            onPick={acceptSuggestion}
          />
        )}
        <textarea
          ref={taRef}
          className="vbe-ta"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onSelect={handleSelect}
          onScroll={handleScroll}
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          aria-label={ariaLabel}
          aria-invalid={hasErrors || undefined}
          aria-describedby={describedBy || undefined}
          aria-autocomplete="list"
          aria-controls={suggestionOpen ? listboxId : undefined}
          aria-activedescendant={
            suggestionOpen
              ? `${listboxId}-${suggestionState.active}`
              : undefined
          }
        />
      </div>
      {/* Resumen de errores asociado al textarea. role=status + aria-live para
          que el lector lo anuncie al cambiar mientras se edita. */}
      <div id={summaryId} role="status" aria-live="polite" className="sr-only">
        {hasErrors ? errorSummary : "Sin errores de validación."}
      </div>
      {/* Instrucción de teclado: cómo salir del editor sin trampa de foco. */}
      <div id={instructionsId} className="sr-only">
        Tab indenta dos espacios. Para mover el foco fuera del editor, pulsá
        Escape y luego Tab.
      </div>
    </div>
  );
});

export default CodeEditor;
