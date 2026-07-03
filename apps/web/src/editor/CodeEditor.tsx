/**
 * editor/CodeEditor.tsx — WO-V3: editor DSL con syntax highlighting liviano.
 *
 * Implementación sin dependencias externas: textarea transparente + overlay
 * `<pre>` con tokens coloreados usando `--c-code-bg/fg` y `--c-syntax-key/
 * str/num` (definidos en WO-V1). El usuario escribe sobre el textarea y
 * debajo se ve el coloreado.
 *
 * El parser/serializer NO vive acá — este componente es solo chrome. La
 * lógica de round-trip + manejo de errores está en el host (ver
 * `PlantillaEditorShell` + `PlantillaInlineEditor` en `VarianteEditor.tsx`).
 *
 * Tokens reconocidos (highlighter ingenuo, suficiente para el DSL):
 *   - keywords de bloque (línea que empieza con `xxx:`) → --c-syntax-key
 *   - números enteros / decimales                    → --c-syntax-num
 *   - strings entre comillas (incluye multilínea)     → --c-syntax-str
 *   - comentarios `# …`                              → --c-text-3
 * El resto queda con el color base del código (--c-code-fg).
 */
import { useId, type CSSProperties } from "react";

/** Tokens del highlighter (orden de match importa). */
const BLOCK_KEYWORDS = new Set([
  "tipo",
  "enunciado",
  "enunciados",
  "respuesta",
  "respuesta_expr",
  "respuestas_validas",
  "respuesta_iso",
  "respuesta_nombre",
  "respuesta_orden",
  "unidad",
  "tolerancia",
  "tolerancia_abs",
  "correccion",
  "opciones",
  "opciones_explicitas",
  "metadata",
  "variables",
  "restricciones",
  "pistas",
  "pasos",
  "explicacion",
  "visual",
  "generador",
  "dataset",
  "mapa",
  "texto_analizar",
  "etiquetas_pedidas",
]);

/** Una "línea" del highlighter: texto plano o spans con color. */
type HL = string | { text: string; cls: string };

/** Aplica highlighting ingenuo a una línea. */
function highlightLine(line: string): HL[] {
  const out: HL[] = [];

  // Comentario
  const hashIdx = line.indexOf("#");
  if (hashIdx >= 0) {
    if (hashIdx > 0) pushTokens(out, line.slice(0, hashIdx));
    out.push({ text: line.slice(hashIdx), cls: "cmt" });
    return out;
  }

  pushTokens(out, line);
  return out;
}

function pushTokens(out: HL[], src: string) {
  // Regex que captura: keyword de bloque, número, string (sencillo + multilínea).
  // Keyword sólo si está al inicio de la línea seguido de ':' — se detecta afuera.
  const re =
    /("(?:\\.|[^"\\])*"|```[\s\S]*?```)|(-?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)|([A-Za-z_][\w-]*)|(\s+)|([^\s\w]+)/g;
  let atLineStart = true;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    const [whole, str, num, ident, ws, punct] = m;
    if (str) {
      out.push({ text: str, cls: "str" });
      atLineStart = false;
      continue;
    }
    if (num) {
      out.push({ text: num, cls: "num" });
      atLineStart = false;
      continue;
    }
    if (ident) {
      // ¿Es keyword de bloque? sólo al inicio de línea + seguido de ':'
      if (atLineStart && BLOCK_KEYWORDS.has(ident)) {
        const rest = src.slice(m.index + ident.length);
        if (rest.startsWith(":")) {
          out.push({ text: ident, cls: "key" });
          out.push({ text: ":", cls: "key" });
          // El regex sólo consumió `ident` (los ":" caen en el grupo
          // `punct`, aparte). Sin este avance manual, la próxima vuelta del
          // `while` vuelve a matchear el mismo ":" y lo empuja de nuevo
          // (overlay muestra "variables::"), desincronizando el overlay
          // coloreado del textarea real — el "doble texto" del ítem 9.
          re.lastIndex += 1;
          atLineStart = false;
          continue;
        }
      }
      out.push({ text: ident, cls: "ident" });
      atLineStart = false;
      continue;
    }
    if (ws) {
      out.push(ws);
      atLineStart = atLineStart && /\n/.test(ws);
      continue;
    }
    if (punct) {
      out.push(punct);
      atLineStart = atLineStart && /\n/.test(punct);
      continue;
    }
    out.push(whole);
  }
}

/** Resalta el texto completo, conservando saltos de línea para el `<pre>`. */
function highlight(source: string): HL[] {
  const lines = source.split("\n");
  const out: HL[] = [];
  for (let i = 0; i < lines.length; i++) {
    const tokens = highlightLine(lines[i]);
    if (tokens.length === 0) out.push("\u00A0");
    else out.push(...tokens);
    if (i < lines.length - 1) out.push("\n");
  }
  return out;
}

function renderHL(tokens: HL[]): React.ReactNode {
  return tokens.map((t, i) =>
    typeof t === "string" ? (
      <span key={i}>{t}</span>
    ) : (
      <span
        key={i}
        style={{
          color:
            t.cls === "key"
              ? "var(--c-syntax-key)"
              : t.cls === "str"
                ? "var(--c-syntax-str)"
                : t.cls === "num"
                  ? "var(--c-syntax-num)"
                  : t.cls === "cmt"
                    ? "var(--c-text-3)"
                    : "var(--c-code-fg)",
        }}
      >
        {t.text}
      </span>
    ),
  );
}

/* ── estilos ───────────────────────────────────────────────────────── */

const wrapStyle: CSSProperties = {
  position: "relative",
  background: "var(--c-code-bg)",
  borderRadius: "var(--r-md)",
  border: "1px solid var(--c-border)",
  minHeight: 220,
  fontFamily: "var(--font-mono-css, ui-monospace, monospace)",
  fontSize: 12.5,
  lineHeight: 1.7,
  overflow: "hidden",
};

const layerBase: CSSProperties = {
  position: "absolute",
  inset: 0,
  margin: 0,
  padding: "14px 18px",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  whiteSpace: "pre",
  overflow: "auto",
  tabSize: 2,
};

const overlayStyle: CSSProperties = {
  ...layerBase,
  color: "var(--c-code-fg)",
  pointerEvents: "none",
  wordBreak: "normal",
  background: "transparent",
};

const textareaStyle: CSSProperties = {
  ...layerBase,
  position: "relative",
  background: "transparent",
  color: "transparent",
  caretColor: "var(--c-code-fg)",
  outline: "none",
  border: 0,
  resize: "vertical",
  minHeight: 220,
};

/* ── componente ────────────────────────────────────────────────────── */

export interface CodeEditorProps {
  value: string;
  onChange: (text: string) => void;
  /** Cuando hay un error de parseo, marcar la línea ofensora con un gutter. */
  errorLine?: number | null;
  /** Filas mínimas (alto del editor). Default 12. */
  minRows?: number;
  /** aria-label para el textarea. */
  label?: string;
  /** Deshabilitar edición (sólo lectura). */
  readOnly?: boolean;
}

export default function CodeEditor({
  value,
  onChange,
  errorLine,
  minRows = 12,
  label = "Editor de código DSL",
  readOnly = false,
}: CodeEditorProps) {
  const id = useId();
  const highlighted = highlight(value);

  // Tamaño mínimo del editor en líneas.
  const minHeight = Math.max(220, minRows * 21 + 28);

  return (
    <div style={{ ...wrapStyle, minHeight }} data-testid="code-editor">
      {/* gutter con la línea de error */}
      {errorLine != null ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 4,
            bottom: 0,
            background: `repeating-linear-gradient(
              to bottom,
              transparent 0,
              transparent ${(errorLine - 1) * 21 + 14}px,
              var(--c-danger) ${(errorLine - 1) * 21 + 14}px,
              var(--c-danger) ${(errorLine - 1) * 21 + 14 + 21}px,
              transparent ${(errorLine - 1) * 21 + 14 + 21}px
            )`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ) : null}

      {/* Overlay con syntax highlighting (no interactivo). */}
      <pre
        aria-hidden="true"
        style={overlayStyle}
        // El `<pre>` necesita el MISMO contenido (incluyendo saltos) que el
        // textarea; lo generamos con un span por token.
      >
        {renderHL(highlighted)}
      </pre>

      {/* Textarea real, transparente — recibe el input. */}
      <textarea
        id={id}
        aria-label={label}
        spellCheck={false}
        wrap="off"
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...textareaStyle, minHeight }}
        data-testid="code-editor-textarea"
      />
    </div>
  );
}
