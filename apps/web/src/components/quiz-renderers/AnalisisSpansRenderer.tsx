/**
 * AnalisisSpansRenderer — renderer del tipo `analisis_spans` (PLAN-E §21 B).
 *
 * El alumno etiqueta RANGOS de palabras contiguas: clic en la primera palabra,
 * clic en la última (un solo clic = rango de una palabra), elige la etiqueta y
 * agrega el span. Los spans pueden solaparse (núcleo dentro del sujeto).
 *
 * La unidad es la PALABRA separada por espacios (mismo criterio que
 * `splitPalabras` del paquete vblang) para que los índices coincidan con la
 * clave del docente. El valor es `string[]` de spans canónicos
 * `"desde-hasta:etiqueta"` — exactamente lo que el server compara contra
 * `answerKey`.
 */

import { useMemo, useState } from "react";

import { useI18n } from "../../i18n/I18nContext";
interface AnalisisSpansRendererProps {
  textoAnalizar: string;
  /** Etiquetas que ve el alumno (correctas + distractores). */
  etiquetasDisponibles: string[];
  /** Spans ya marcados, en formato canónico "desde-hasta:etiqueta". */
  value?: string[];
  onChange?: (spans: string[]) => void;
  /** Bloquea cambios (post-submit) y muestra verde/rojo. */
  disabled?: boolean;
  /** Spans correctos (post-submit, formato canónico) para pintar feedback. */
  correctas?: string[];
}

// Espejo local de spanToKey/spanFromKey de @vb/vblang (codec trivial; evita
// arrastrar el paquete entero al bundle del player).
function spanToKey(desde: number, hasta: number, etiqueta: string): string {
  return `${desde}-${hasta}:${etiqueta}`;
}

function spanFromKey(key: string): { desde: number; hasta: number; etiqueta: string } | null {
  const m = /^(\d+)-(\d+):(.+)$/.exec(key);
  if (!m) return null;
  return { desde: Number(m[1]), hasta: Number(m[2]), etiqueta: m[3] };
}

export default function AnalisisSpansRenderer({
  textoAnalizar,
  etiquetasDisponibles,
  value,
  onChange,
  disabled = false,
  correctas,
}: AnalisisSpansRendererProps) {
  const { t } = useI18n();
  const palabras = useMemo(
    () => textoAnalizar.split(/\s+/).filter((w) => w.length > 0),
    [textoAnalizar],
  );
  const [anchor, setAnchor] = useState<number | null>(null);
  const [fin, setFin] = useState<number | null>(null);
  const [etiqueta, setEtiqueta] = useState<string>(etiquetasDisponibles[0] ?? "");

  const spans = value ?? [];
  const desde = anchor !== null && fin !== null ? Math.min(anchor, fin) : anchor;
  const hasta = anchor !== null && fin !== null ? Math.max(anchor, fin) : anchor;

  const handleWordClick = (i: number) => {
    if (disabled) return;
    if (anchor === null || fin !== null) {
      setAnchor(i);
      setFin(null);
    } else {
      setFin(i);
    }
  };

  const handleAgregar = () => {
    if (desde === null || hasta === null || etiqueta === "") return;
    const key = spanToKey(desde, hasta, etiqueta);
    if (!spans.includes(key)) onChange?.([...spans, key]);
    setAnchor(null);
    setFin(null);
  };

  const handleQuitar = (key: string) => {
    if (disabled) return;
    onChange?.(spans.filter((s) => s !== key));
  };

  const correctasSet = correctas ? new Set(correctas) : null;
  const faltantes = correctasSet
    ? correctas!.filter((c) => !spans.includes(c))
    : [];

  const describirSpan = (key: string): string => {
    const sp = spanFromKey(key);
    if (!sp) return key;
    const frag = palabras.slice(sp.desde, sp.hasta + 1).join(" ");
    return `«${frag}» → ${sp.etiqueta}`;
  };

  return (
    <div
      className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed"
      data-testid="analisis-spans"
    >
      <div className="flex flex-wrap gap-1">
        {palabras.map((w, i) => {
          const enRango =
            desde !== null && hasta !== null && i >= desde && i <= hasta;
          return (
            <button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => handleWordClick(i)}
              className={`rounded border px-1.5 py-0.5 ${
                enRango
                  ? "border-blue-400 bg-blue-100 text-blue-900"
                  : "border-transparent hover:border-slate-300"
              } disabled:cursor-default`}
              aria-pressed={enRango}
              data-testid={`analisis-spans-word-${i}`}
            >
              {w}
            </button>
          );
        })}
      </div>

      {!disabled && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500">
            {anchor === null
              ? "Tocá la primera y la última palabra del rango."
              : fin === null
                ? "Ahora tocá la última palabra (o la misma para una sola)."
                : "Rango elegido:"}
          </span>
          {desde !== null && hasta !== null && (
            <span className="rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-800">
              «{palabras.slice(desde, hasta + 1).join(" ")}»
            </span>
          )}
          <select
            value={etiqueta}
            onChange={(e) => setEtiqueta(e.target.value)}
            className="rounded border border-slate-300 bg-white px-1 py-0.5 text-xs"
            aria-label={t("analisisSpansRenderer.etiquetaDelRango")}
            data-testid="analisis-spans-etiqueta"
          >
            {etiquetasDisponibles.map((et) => (
              <option key={et} value={et}>
                {et}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleAgregar}
            disabled={desde === null || hasta === null || etiqueta === ""}
            className="rounded border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs font-medium hover:bg-slate-100 disabled:opacity-50"
            data-testid="analisis-spans-agregar"
          >{t("analisisSpansRenderer.agregar")}</button>
        </div>
      )}

      {spans.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" data-testid="analisis-spans-lista">
          {spans.map((key) => {
            let chip = "border-slate-300 bg-slate-50 text-slate-800";
            if (disabled && correctasSet) {
              chip = correctasSet.has(key)
                ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                : "border-red-400 bg-red-50 text-red-800";
            }
            return (
              <li
                key={key}
                className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs ${chip}`}
              >
                {describirSpan(key)}
                {!disabled && (
                  <button
                    type="button"
                    onClick={() => handleQuitar(key)}
                    aria-label={`Quitar ${describirSpan(key)}`}
                    className="font-bold hover:text-red-600"
                  >
                    ×
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {disabled && faltantes.length > 0 && (
        <div className="mt-3 text-xs text-slate-600" data-testid="analisis-spans-faltantes">
          <span className="font-medium">{t("analisisSpansRenderer.faltaron")}</span>{" "}
          {faltantes.map(describirSpan).join(" · ")}
        </div>
      )}
    </div>
  );
}
