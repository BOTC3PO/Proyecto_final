/**
 * IdentificarPalabrasRenderer — renderer del tipo `identificar_palabras` (Sprint 9B).
 *
 * Texto con palabras clickeables. El alumno marca aquellas que cumplen la
 * condición del enunciado. Click toggle (agrega/quita).
 *
 * Estados visuales:
 *   - default                              → texto normal.
 *   - marcada                              → fondo amarillo + subrayado.
 *   - post-submit + marcada correctamente  → verde.
 *   - post-submit + marcada incorrectamente → rojo.
 *   - post-submit + NO marcada pero ERA correcta → contorno rojo punteado.
 */

import { useMemo } from "react";

interface IdentificarPalabrasRendererProps {
  textoAnalizar: string;
  /** Palabras actualmente marcadas por el alumno. */
  marcadas?: string[];
  /** Disparado cada toggle con la lista completa actualizada. */
  onChange?: (marcadas: string[]) => void;
  /** Bloquea clicks (post-submit). */
  disabled?: boolean;
  /** Palabras correctas (post-submit) para feedback. */
  correctas?: string[];
}

type Token =
  | { kind: "word"; text: string }
  | { kind: "punct"; text: string };

function tokenize(text: string): Token[] {
  const re = /([\p{L}\p{N}]+(?:['’\-_][\p{L}\p{N}]+)*)|([^\p{L}\p{N}]+)/gu;
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match[1] !== undefined) {
      tokens.push({ kind: "word", text: match[1] });
    } else if (match[2] !== undefined) {
      tokens.push({ kind: "punct", text: match[2] });
    }
  }
  return tokens;
}

export default function IdentificarPalabrasRenderer({
  textoAnalizar,
  marcadas,
  onChange,
  disabled = false,
  correctas,
}: IdentificarPalabrasRendererProps) {
  const tokens = useMemo(() => tokenize(textoAnalizar), [textoAnalizar]);
  const marcadasSet = useMemo(() => new Set(marcadas ?? []), [marcadas]);
  const correctasSet = useMemo(() => new Set(correctas ?? []), [correctas]);

  const handleToggle = (palabra: string) => {
    if (disabled) return;
    const current = marcadas ?? [];
    const next = current.includes(palabra)
      ? current.filter((p) => p !== palabra)
      : [...current, palabra];
    onChange?.(next);
  };

  return (
    <div
      className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed"
      data-testid="identificar-palabras"
    >
      <p className="flex flex-wrap items-center gap-y-1">
        {tokens.map((tok, i) => {
          if (tok.kind === "punct") {
            return (
              <span key={i} className="whitespace-pre">
                {tok.text}
              </span>
            );
          }
          const marcada = marcadasSet.has(tok.text);
          const esCorrecta = correctasSet.has(tok.text);

          let cls = "px-1 rounded transition-colors";
          let dataState: string = "default";
          if (disabled && correctas) {
            if (marcada && esCorrecta) {
              cls += " bg-emerald-100 text-emerald-800 border border-emerald-400";
              dataState = "correct";
            } else if (marcada && !esCorrecta) {
              cls += " bg-red-100 text-red-800 border border-red-400";
              dataState = "wrong";
            } else if (!marcada && esCorrecta) {
              cls += " border border-dashed border-red-400 text-red-700";
              dataState = "missed";
            } else {
              cls += " text-slate-700";
            }
          } else if (marcada) {
            cls += " bg-yellow-100 underline decoration-yellow-500 decoration-2 text-slate-800 cursor-pointer";
            dataState = "marked";
          } else {
            cls += " text-slate-700 hover:bg-slate-100 cursor-pointer";
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleToggle(tok.text)}
              disabled={disabled}
              className={cls}
              data-state={dataState}
              data-testid={`identificar-word-${tok.text}`}
            >
              {tok.text}
            </button>
          );
        })}
      </p>
    </div>
  );
}
