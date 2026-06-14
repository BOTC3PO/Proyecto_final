/**
 * F4-01 — Lienzo de posiciones: la "vista del docente" del cuestionario por
 * posiciones (modelo F3-01). Estilo Google Forms: lista numerada 1..N, cada
 * posición expandible mostrando sus variantes (a/b/c), agrupadas y coloreadas
 * por tema. El plan (ronda 5) definió que "la estructura numerada ES la vista".
 *
 * Es ADITIVO y presentacional: NO reemplaza `QuizComposicionEditor` (que sigue
 * gobernando los quizzes con el modelo viejo de pool único). Convivencia /
 * reemplazo gradual: este lienzo se muestra para cuestionarios que usan el
 * modelo de posiciones (`settings.posiciones`); los quizzes legacy mantienen el
 * editor actual hasta migrarse. Así no se rompe el editor de quiz vigente.
 *
 * El barajado ENTRE temas es al armar (F3) y se refleja en el ORDEN de
 * `cuestionario.posiciones`; acá ese orden es reordenable por el docente. La
 * edición de cada variante se delega al host vía `renderVarianteEditor` /
 * `onEditVariante`, reutilizando los editores de pregunta existentes sin
 * acoplarlos a este componente.
 *
 * Consume los tokens `--c-*` y los componentes de `components/ui` (Pill, Button,
 * Card) — no inventa un lenguaje visual nuevo.
 */

import { useState, type ReactNode } from "react";
import type {
  CuestionarioPosiciones,
  Posicion,
  PosicionTipo,
  Tema,
  Variante,
} from "../../domain/quiz/posiciones";
import { Card } from "../ui/Card";
import Pill, { type PillTone } from "../ui/Pill";
import Button from "../ui/Button";

/** Paleta de acentos por tema (cuando el tema no trae `color` propio). */
const TEMA_PALETTE = [
  "#2563eb", // azul
  "#16a34a", // verde
  "#d97706", // ámbar
  "#9333ea", // violeta
  "#dc2626", // rojo
  "#0891b2", // cian
  "#db2777", // rosa
  "#65a30d", // lima
];

/** Color estable de un tema: su `color` propio o uno de la paleta por índice. */
export function temaColor(tema: Tema | undefined, indice: number): string {
  if (tema?.color) return tema.color;
  return TEMA_PALETTE[indice % TEMA_PALETTE.length];
}

const TIPO_META: Record<PosicionTipo, { label: string; tone: PillTone }> = {
  fijo: { label: "Fija", tone: "neutral" },
  obligatorio: { label: "Pool", tone: "info" },
  relleno: { label: "Relleno", tone: "warn" },
};

/** Resumen legible del origen de una variante (banco / plantilla / generador). */
export function resumenOrigen(variante: Variante): string {
  const o = variante.origen;
  switch (o.origen) {
    case "banco":
      return `Banco · ${o.questionId || "sin id"}`;
    case "plantilla":
      return `Plantilla · ${o.plantillaId || "sin id"}${o.plantillaVersion ? ` v${o.plantillaVersion}` : ""}`;
    case "generador":
      return `Generador · ${o.generatorId || "sin id"}`;
  }
}

interface Props {
  cuestionario: CuestionarioPosiciones;
  /** Mover una posición en el orden (barajado de armado). */
  onReorder?: (numero: number, direccion: "arriba" | "abajo") => void;
  /** Editar una variante concreta (el host abre el editor de pregunta existente). */
  onEditVariante?: (numero: number, letra: string) => void;
  /** Editor inline opcional de una variante (render-prop: reusar editores existentes). */
  renderVarianteEditor?: (posicion: Posicion, variante: Variante) => ReactNode;
}

export default function PosicionesCanvas({
  cuestionario,
  onReorder,
  onEditVariante,
  renderVarianteEditor,
}: Props) {
  const { temas, posiciones } = cuestionario;
  const temaIndex = new Map(temas.map((t, i) => [t.id, i]));
  const temaById = new Map(temas.map((t) => [t.id, t]));

  const [expandidas, setExpandidas] = useState<Set<number>>(() => new Set());
  const toggle = (numero: number) =>
    setExpandidas((prev) => {
      const next = new Set(prev);
      if (next.has(numero)) next.delete(numero);
      else next.add(numero);
      return next;
    });

  if (posiciones.length === 0) {
    return (
      <p className="text-sm text-[var(--c-hint)]" role="status">
        El cuestionario no tiene posiciones todavía.
      </p>
    );
  }

  return (
    <ol className="space-y-2" aria-label="Posiciones del cuestionario">
      {posiciones.map((pos, i) => {
        const idxTema = temaIndex.get(pos.temaPrincipal) ?? 0;
        const color = temaColor(temaById.get(pos.temaPrincipal), idxTema);
        const tipo = TIPO_META[pos.tipo];
        const abierta = expandidas.has(pos.numero);
        const panelId = `posicion-${pos.numero}-variantes`;

        return (
          <li key={pos.numero}>
            <Card
              data-tema={pos.temaPrincipal}
              data-tipo={pos.tipo}
              className="overflow-hidden border-l-4"
              style={{ borderLeftColor: color }}
            >
              <div className="flex items-center gap-2 px-3 py-2">
                <button
                  type="button"
                  onClick={() => toggle(pos.numero)}
                  aria-expanded={abierta}
                  aria-controls={panelId}
                  className="flex flex-1 items-center gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] rounded"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 place-items-center rounded-full text-xs font-semibold text-[var(--c-text-on-dark)]"
                    style={{ backgroundColor: color }}
                  >
                    {pos.numero}
                  </span>
                  <span className="sr-only">Posición {pos.numero}.</span>
                  <Pill tone={tipo.tone}>{tipo.label}</Pill>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: `${color}22`, color }}
                  >
                    {temaById.get(pos.temaPrincipal)?.nombre ?? pos.temaPrincipal}
                  </span>
                  {pos.temaSecundario && (
                    <span className="text-xs text-[var(--c-hint)]">
                      + {temaById.get(pos.temaSecundario)?.nombre ?? pos.temaSecundario}
                    </span>
                  )}
                  <span className="ml-auto text-xs text-[var(--c-text-3)]">
                    {pos.puntaje} {pos.puntaje === 1 ? "punto" : "puntos"}
                  </span>
                  <span className="text-xs text-[var(--c-text-3)]">
                    {pos.variantes.length} {pos.variantes.length === 1 ? "variante" : "variantes"}
                  </span>
                  <span aria-hidden="true" className="text-[var(--c-text-3)]">
                    {abierta ? "▾" : "▸"}
                  </span>
                </button>

                {onReorder && (
                  <span className="flex items-center gap-0.5">
                    <Button
                      variant="icon"
                      size="sm"
                      aria-label={`Mover la posición ${pos.numero} hacia arriba`}
                      disabled={i === 0}
                      onClick={() => onReorder(pos.numero, "arriba")}
                    >
                      ↑
                    </Button>
                    <Button
                      variant="icon"
                      size="sm"
                      aria-label={`Mover la posición ${pos.numero} hacia abajo`}
                      disabled={i === posiciones.length - 1}
                      onClick={() => onReorder(pos.numero, "abajo")}
                    >
                      ↓
                    </Button>
                  </span>
                )}
              </div>

              {abierta && (
                <ul
                  id={panelId}
                  className="divide-y divide-[var(--c-border)] border-t border-[var(--c-border)] bg-[var(--c-surface-2,transparent)]"
                  aria-label={`Variantes de la posición ${pos.numero}`}
                >
                  {pos.variantes.map((v) => (
                    <li key={v.letra} className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="grid h-5 w-5 place-items-center rounded bg-[var(--c-surface-3)] text-[11px] font-semibold text-[var(--c-text)]"
                        >
                          {v.letra}
                        </span>
                        <span className="sr-only">Variante {v.letra}.</span>
                        <span className="text-xs text-[var(--c-text-2,inherit)]">
                          {resumenOrigen(v)}
                        </span>
                        {onEditVariante && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-auto"
                            onClick={() => onEditVariante(pos.numero, v.letra)}
                          >
                            Editar
                          </Button>
                        )}
                      </div>
                      {renderVarianteEditor && (
                        <div className="mt-2">{renderVarianteEditor(pos, v)}</div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </li>
        );
      })}
    </ol>
  );
}
