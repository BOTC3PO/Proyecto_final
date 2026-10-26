/**
 * Quick-fixes para errores comunes del linter.
 *
 * El panel de errores invoca `quickFixFor(message, code, currentCode)` por
 * cada issue. Si la función devuelve un objeto { label, newCode }, el panel
 * muestra un botón "Aplicar fix" que reemplaza el código del editor por
 * `newCode`. La compilación debounced del editor revalida sola.
 *
 * Sólo cubrimos tres fixes (Tarea 13):
 *  1. Falta bloque `tipo:`     → agrega `tipo: input` al final.
 *  2. Falta `enunciado:`       → agrega `enunciado: "..."` al final.
 *  3. Variable X no declarada  → agrega `  X: 0` al bloque `variables:`.
 *
 * Los matches son por `code` cuando el linter lo emite, sino por substring
 * exacto del mensaje. Si el DSL no parsea, no ofrecemos fix (no sabemos
 * dónde insertar).
 */

export interface QuickFix {
  /** Texto del botón a mostrar (p. ej. "Agregar `tipo: input`"). */
  label: string;
  /** El código DSL modificado. */
  newCode: string;
}

const ENUNCIADO_PARSE_REGEX =
  /Falta el bloque obligatorio `enunciado:`/;
const ENUNCIADOS_VAR_REGEX = /variable "([^"]+)" no declarada/;

/**
 * Devuelve un fix aplicable al error, o `null` si no hay ninguno conocido.
 *
 * @param code        Code del issue (p. ej. "tipo-missing",
 *                    "enunciados-var-undef", "PARSE" para parse errors).
 *                    Indefinido si el error no lo trae.
 * @param message     Mensaje del issue; se usa para extraer el nombre de la
 *                    variable cuando el code es `enunciados-var-undef`.
 * @param currentCode Código DSL actual.
 */
export function quickFixFor(
  code: string | undefined,
  message: string,
  currentCode: string,
): QuickFix | null {
  if (code === "tipo-missing") {
    return {
      label: "Agregar `tipo: input`",
      newCode: appendBlock(currentCode, "tipo: input"),
    };
  }

  if (code === "PARSE" && ENUNCIADO_PARSE_REGEX.test(message)) {
    return {
      label: "Agregar enunciado",
      newCode: appendBlock(currentCode, 'enunciado: "..."'),
    };
  }

  // Fallback por mensaje (por si el linter emite el error sin `code`).
  if (ENUNCIADO_PARSE_REGEX.test(message)) {
    return {
      label: "Agregar enunciado",
      newCode: appendBlock(currentCode, 'enunciado: "..."'),
    };
  }

  if (
    code === "enunciados-var-undef" ||
    ENUNCIADOS_VAR_REGEX.test(message)
  ) {
    const m = ENUNCIADOS_VAR_REGEX.exec(message);
    const name = m?.[1];
    if (!name) return null;
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) return null;
    return {
      label: `Declarar \`${name}\``,
      newCode: declareVariable(currentCode, name),
    };
  }

  return null;
}

/* ---------------- helpers ---------------- */

/** Devuelve true si el código ya contiene `head:` en una línea al inicio o
 *  precedida de `\n` (es decir, como bloque independiente). */
function hasBlock(code: string, head: string): boolean {
  const re = new RegExp(`(^|\\n)\\s*${escapeRegExp(head)}\\s*:`, "m");
  return re.test(code);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function appendBlock(code: string, block: string): string {
  const head = block.split(":")[0]?.trim();
  if (head && hasBlock(code, head)) return code;
  const sep = code.endsWith("\n") ? "" : "\n";
  return `${code}${sep}${block}\n`;
}

/** Inserta `  X: 0` en el bloque `variables:` (creándolo si no existe). */
function declareVariable(code: string, name: string): string {
  const insertion = `  ${name}: 0`;

  // Localizar el bloque `variables:` y su última línea de declaración.
  const lines = code.split("\n");
  const varLineIdx = lines.findIndex((l) => /^\s*variables\s*:/.test(l));
  if (varLineIdx < 0) {
    // No hay bloque `variables:`: lo creamos al principio del archivo (o
    // después de `mapa:` si ése es el primer bloque).
    return prependVariablesBlock(lines, insertion);
  }
  // ¿La variable ya está declarada en este bloque?
  for (let i = varLineIdx + 1; i < lines.length; i++) {
    const l = lines[i];
    if (l.trim().length === 0) break;
    if (/^[A-Za-z_]/.test(l)) break; // nuevo bloque
    if (new RegExp(`^\\s{2,}${escapeRegExp(name)}\\s*:`).test(l)) {
      return code; // ya esta, no hacemos nada
    }
  }
  // Encontrar la última línea indentada (última declaración).
  let lastDeclIdx = varLineIdx;
  for (let i = varLineIdx + 1; i < lines.length; i++) {
    const l = lines[i];
    if (l.trim().length === 0) break;
    if (/^[A-Za-z_]/.test(l)) break;
    if (/^\s{2,}\S/.test(l)) lastDeclIdx = i;
  }
  lines.splice(lastDeclIdx + 1, 0, insertion);
  return lines.join("\n");
}

function prependVariablesBlock(
  lines: string[],
  insertion: string,
): string {
  // Si el primer bloque es `mapa:`, lo insertamos después con una línea en
  // blanco separadora.
  const firstNonEmpty = lines.findIndex((l) => l.trim().length > 0);
  if (firstNonEmpty < 0) {
    return `variables:\n${insertion}`;
  }
  const firstLine = lines[firstNonEmpty].trim();
  if (firstLine.startsWith("mapa:")) {
    let insertAt = firstNonEmpty + 1;
    while (
      insertAt < lines.length &&
      lines[insertAt].trim().length > 0 &&
      !/^[A-Za-z_]/.test(lines[insertAt])
    ) {
      insertAt++;
    }
    const block = `variables:\n${insertion}`;
    return [
      ...lines.slice(0, insertAt),
      "",
      block,
      ...lines.slice(insertAt),
    ].join("\n");
  }
  const block = `variables:\n${insertion}`;
  return [block, "", ...lines].join("\n");
}
