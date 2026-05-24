/**
 * AnalisisSintacticoRenderer — renderer del tipo `analisis_sintactico` (Sprint 9B).
 *
 * Tokeniza el texto en palabras y signos de puntuación. Para cada palabra que
 * aparece en `etiquetasPedidas` muestra un <select> debajo (o al lado) con las
 * etiquetas posibles. Las otras palabras se renderizan como texto plano.
 *
 * Las "etiquetas posibles" se derivan de `etiquetasPedidas` (union de todas
 * las etiquetas únicas). Esto evita pedirle al caller un set explícito.
 *
 * Limitación documentada: si la misma palabra aparece dos veces en el texto
 * (ej. "el" en "el gato y el perro"), AMBAS ocurrencias se asignan a la
 * misma etiqueta — no se diferencian. Si el docente quiere diferenciar, debe
 * usar `identificar_palabras` o variantes con sufijo.
 */

import { useMemo } from "react";

interface AnalisisSintacticoRendererProps {
  textoAnalizar: string;
  etiquetasPedidas: Array<{ palabra: string; etiqueta: string }>;
  /** Asignaciones actuales: { "<palabra>": "<etiqueta>" }. */
  asignaciones?: Record<string, string>;
  /** Disparado cuando el alumno cambia cualquier asignación. */
  onChange?: (asignaciones: Record<string, string>) => void;
  /** Bloquea cambios (post-submit) y muestra verde/rojo. */
  disabled?: boolean;
  /** Asignaciones correctas (post-submit) para pintar feedback. */
  correctas?: Record<string, string>;
}

type Token =
  | { kind: "word"; text: string; askable: boolean }
  | { kind: "punct"; text: string };

/**
 * Tokeniza el texto en palabras y puntuación. Preserva todos los chars: la
 * concatenación de `tokens.map(t => t.text)` recupera el texto original.
 */
function tokenize(text: string): Token[] {
  // Match: secuencias unicode de letras/dígitos como palabra; cualquier otra
  // cosa (espacio, signo de puntuación) como punct.
  const re = /([\p{L}\p{N}]+(?:['’\-_][\p{L}\p{N}]+)*)|([^\p{L}\p{N}]+)/gu;
  const tokens: Token[] = [];
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match[1] !== undefined) {
      tokens.push({ kind: "word", text: match[1], askable: false });
    } else if (match[2] !== undefined) {
      tokens.push({ kind: "punct", text: match[2] });
    }
  }
  return tokens;
}

export default function AnalisisSintacticoRenderer({
  textoAnalizar,
  etiquetasPedidas,
  asignaciones,
  onChange,
  disabled = false,
  correctas,
}: AnalisisSintacticoRendererProps) {
  const askableSet = useMemo(
    () => new Set(etiquetasPedidas.map((e) => e.palabra)),
    [etiquetasPedidas],
  );

  const opciones = useMemo(() => {
    const set = new Set<string>();
    for (const e of etiquetasPedidas) set.add(e.etiqueta);
    return Array.from(set).sort();
  }, [etiquetasPedidas]);

  const tokens = useMemo(() => {
    const t = tokenize(textoAnalizar);
    for (const tok of t) {
      if (tok.kind === "word" && askableSet.has(tok.text)) {
        tok.askable = true;
      }
    }
    return t;
  }, [textoAnalizar, askableSet]);

  const valores = asignaciones ?? {};

  const handleChange = (palabra: string, etiqueta: string) => {
    const next = { ...valores, [palabra]: etiqueta };
    onChange?.(next);
  };

  return (
    <div
      className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed"
      data-testid="analisis-sintactico"
    >
      <div className="flex flex-wrap items-end gap-y-3 gap-x-1">
        {tokens.map((tok, i) => {
          if (tok.kind === "punct") {
            return (
              <span key={i} className="whitespace-pre">
                {tok.text}
              </span>
            );
          }
          if (!tok.askable) {
            return (
              <span key={i} className="text-slate-700">
                {tok.text}
              </span>
            );
          }
          const valor = valores[tok.text] ?? "";
          const correcta = correctas?.[tok.text];
          let chipClasses = "border-slate-300 bg-slate-50";
          if (disabled && correcta !== undefined) {
            chipClasses =
              valor === correcta
                ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                : "border-red-400 bg-red-50 text-red-800";
          }
          return (
            <span
              key={i}
              className={`inline-flex flex-col items-start rounded-md border px-2 py-1 ${chipClasses}`}
              data-testid={`analisis-sintactico-word-${tok.text}`}
            >
              <span className="font-medium">{tok.text}</span>
              <select
                disabled={disabled}
                value={valor}
                onChange={(e) => handleChange(tok.text, e.target.value)}
                className="mt-0.5 rounded border border-slate-300 bg-white px-1 py-0.5 text-xs disabled:opacity-70"
                aria-label={`Etiqueta para ${tok.text}`}
                data-testid={`analisis-sintactico-select-${tok.text}`}
              >
                <option value="">—</option>
                {opciones.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </span>
          );
        })}
      </div>
    </div>
  );
}
