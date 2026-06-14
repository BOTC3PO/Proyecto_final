/**
 * F4-02 — Botón "+ Añadir" contextual sobre el lienzo de posiciones.
 *
 * Extiende F4-01 con los callbacks de alta y un menú contextual que ofrece
 * las inserciones disponibles relativas al elemento activo. Sigue el patrón
 * de la `SnippetBar` VBLang: el componente sigue siendo presentacional y
 * TONTO — sólo dispara callbacks. El host (futuro ModuloEditor) decide
 * cómo mutar el cuestionario.
 *
 * Tres tipos de inserciones:
 *  1. Nueva posición fija/obligatoria/relleno tras el activo (o al final).
 *  2. Nueva variante en la posición activa.
 *  3. Botón global de "+ Posición" en el empty state.
 *
 * El "activo" se modela como estado local (1-based: `numero` de la posición
 * seleccionada). Se setea al click en la cabecera de la posición y se limpia
 * con Escape. La inserción es RELATIVA al activo, no siempre al final: si el
 * usuario tiene la posición 2 activa y agrega una posición, el host la
 * inserta después de la 2 (la nueva pasa a ser la 3, las siguientes se
 * renumeran). Sin activo, el callback se invoca sin `despuesDe` y el host
 * decide (típicamente: al final).
 *
 * El menú lista las opciones disponibles en el contexto del activo:
 *  - Las 3 variantes de tipo de posición (`fijo`, `obligatorio`, `relleno`).
 *  - "Variante en esta posición" — sólo si la posición está activa y
 *    tiene callback de variante.
 *  - "Quitar" — borrado (F4-02 lo deja como callback opcional; el borrado
 *    del activo es responsabilidad del host).
 *
 * Consume `--c-*` y `components/ui` (Pill, Button, Card). No wireado a
 * ModuloEditor todavía — la integración con el editor del módulo es F4-03.
 */

import { useEffect, useState, type ReactNode } from "react";
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

/**
 * F4-02 — argumentos del callback `onAddPosicion`.
 * `despuesDe` es el `numero` de la posición activa (1-based) tras la cual
 * insertar. Si es `undefined`, el host inserta al final.
 * `tipo` es el tipo de slot elegido en el menú.
 */
export type AddPosicionArgs = {
  despuesDe?: number;
  tipo: PosicionTipo;
};

interface Props {
  cuestionario: CuestionarioPosiciones;
  /** Mover una posición en el orden (barajado de armado). */
  onReorder?: (numero: number, direccion: "arriba" | "abajo") => void;
  /** Editar una variante concreta (el host abre el editor de pregunta existente). */
  onEditVariante?: (numero: number, letra: string) => void;
  /** Editor inline opcional de una variante (render-prop: reusar editores existentes). */
  renderVarianteEditor?: (posicion: Posicion, variante: Variante) => ReactNode;
  /** F4-02 — agregar una posición. Si el usuario tiene una posición activa, el
   *  callback se invoca con `despuesDe: numeroActivo`. Sin activo, sin args. */
  onAddPosicion?: (args: AddPosicionArgs) => void;
  /** F4-02 — agregar una variante a la posición `numero`. Se invoca desde el
   *  menú contextual de la posición activa o desde el botón "+ Variante"
   *  dentro de cada variante expandida. */
  onAddVariante?: (numero: number) => void;
  /** F4-02 — quitar una posición. Si está presente, el menú contextual
   *  muestra la opción "Quitar posición". Default: undefined (no se muestra). */
  onRemovePosicion?: (numero: number) => void;
  /** F4-02 — quitar una variante concreta. Si está presente, cada fila
   *  expandida muestra un botón "Quitar variante". */
  onRemoveVariante?: (numero: number, letra: string) => void;
  /** F4-03 — cambiar el puntaje de una posición. Si está presente, se
   *  renderiza un input numérico en la cabecera. El host decide cómo
   *  persistirlo (en `Posicion.puntaje` del cuestionario). Default 1 si
   *  no se setea. */
  onChangePuntaje?: (numero: number, puntaje: number) => void;
  /** F4-03 — cambiar el tipo de slot de una posición. Si está presente,
   *  se renderiza un selector con los 3 tipos (fijo / pool / relleno). */
  onChangeTipo?: (numero: number, tipo: PosicionTipo) => void;
}

/** Etiqueta humana del tipo para los botones del menú. */
const TIPO_INSERT_LABEL: Record<PosicionTipo, string> = {
  fijo: "Posición fija",
  obligatorio: "Posición de pool",
  relleno: "Posición de relleno",
};

export default function PosicionesCanvas({
  cuestionario,
  onReorder,
  onEditVariante,
  renderVarianteEditor,
  onAddPosicion,
  onAddVariante,
  onRemovePosicion,
  onRemoveVariante,
  onChangePuntaje,
  onChangeTipo,
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

  // F4-02 — `activa` es el `numero` de la posición sobre la que el menú
  // contextual operará. Se setea al click en la cabecera y se limpia con
  // Escape. Si el cuestionario se queda sin la posición activa (porque el
  // host la eliminó), se limpia.
  const [activa, setActiva] = useState<number | null>(null);
  useEffect(() => {
    if (activa !== null && !posiciones.some((p) => p.numero === activa)) {
      setActiva(null);
    }
  }, [posiciones, activa]);
  useEffect(() => {
    if (activa === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setActiva(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activa]);

  // F4-02 — al menos uno de los callbacks de alta debe estar presente para
  // que el menú contextual tenga sentido. Si ninguno está, no se renderiza
  // el botón "+ Añadir…" en absoluto.
  const hayCallbacksAlta = Boolean(onAddPosicion || onAddVariante || onRemovePosicion);

  if (posiciones.length === 0) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-[var(--c-hint)]" role="status">
          El cuestionario no tiene posiciones todavía.
        </p>
        {onAddPosicion && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onAddPosicion({ tipo: "fijo" })}
            aria-label="Añadir la primera posición del cuestionario"
          >
            + Añadir posición
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <ol className="space-y-2" aria-label="Posiciones del cuestionario">
        {posiciones.map((pos, i) => {
          const idxTema = temaIndex.get(pos.temaPrincipal) ?? 0;
          const color = temaColor(temaById.get(pos.temaPrincipal), idxTema);
          const tipo = TIPO_META[pos.tipo];
          const abierta = expandidas.has(pos.numero);
          const panelId = `posicion-${pos.numero}-variantes`;
          const esActiva = activa === pos.numero;

          return (
            <li key={pos.numero}>
              <Card
                data-tema={pos.temaPrincipal}
                data-tipo={pos.tipo}
                data-activa={esActiva ? "true" : undefined}
                className={`overflow-hidden border-l-4 ${esActiva ? "ring-2 ring-[var(--c-focus-ring)]" : ""}`}
                style={{ borderLeftColor: color }}
              >
                <div className="flex items-center gap-2 px-3 py-2">
                  <button
                    type="button"
                    onClick={() => {
                      toggle(pos.numero);
                      setActiva(pos.numero);
                    }}
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
                    {onChangeTipo ? (
                      <select
                        aria-label={`Tipo de la posición ${pos.numero}`}
                        className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-xs"
                        value={pos.tipo}
                        onChange={(e) =>
                          onChangeTipo(pos.numero, e.target.value as PosicionTipo)
                        }
                        onClick={(e) => e.stopPropagation()}
                      >
                        <option value="fijo">Fija</option>
                        <option value="obligatorio">Pool</option>
                        <option value="relleno">Relleno</option>
                      </select>
                    ) : (
                      <Pill tone={tipo.tone}>{tipo.label}</Pill>
                    )}
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
                    {onChangePuntaje ? (
                      <label className="ml-auto flex items-center gap-1 text-xs text-[var(--c-text-3)]">
                        <span className="sr-only">Puntaje de la posición {pos.numero}.</span>
                        <input
                          type="number"
                          inputMode="numeric"
                          min={0}
                          step={1}
                          aria-label={`Puntaje de la posición ${pos.numero}`}
                          className="w-14 rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-right text-xs tabular-nums"
                          defaultValue={pos.puntaje}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => {
                            const raw = e.target.value;
                            // Permite string vacío mientras se tipea; commit al
                            // perder foco o al Enter (manejado por `onBlur`).
                            if (raw === "") return;
                            const n = Number(raw);
                            if (Number.isFinite(n) && n >= 0) {
                              onChangePuntaje(pos.numero, n);
                            }
                          }}
                        />
                        <span>{pos.puntaje === 1 ? "punto" : "puntos"}</span>
                      </label>
                    ) : (
                      <span className="ml-auto text-xs text-[var(--c-text-3)]">
                        {pos.puntaje} {pos.puntaje === 1 ? "punto" : "puntos"}
                      </span>
                    )}
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
                          {onRemoveVariante && (
                            <Button
                              variant="ghost"
                              size="sm"
                              aria-label={`Quitar la variante ${v.letra} de la posición ${pos.numero}`}
                              onClick={() => onRemoveVariante(pos.numero, v.letra)}
                            >
                              Quitar
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
              {/* F4-02 — el menú contextual "+ Añadir…" se renderiza ENTRE
                  posiciones, anclado a la posición anterior (la activa). Esto
                  permite al docente insertar la nueva posición entre la N y
                  la N+1 sin un drag-and-drop. */}
              {hayCallbacksAlta && esActiva && (
                <AddMenu
                  posicionNumero={pos.numero}
                  esUltima={i === posiciones.length - 1}
                  onAddPosicion={onAddPosicion}
                  onAddVariante={onAddVariante}
                  onRemovePosicion={onRemovePosicion}
                  onCerrar={() => setActiva(null)}
                />
              )}
            </li>
          );
        })}
      </ol>
      {/* F4-02 — botón global al final: agregar posición sin activo (va al
          final). Es la acción por defecto cuando el usuario no está trabajando
          sobre una posición en particular. */}
      {onAddPosicion && (
        <div className="pt-1">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onAddPosicion({ tipo: "fijo" })}
            aria-label="Añadir una posición al final del cuestionario"
          >
            + Añadir posición
          </Button>
        </div>
      )}
    </div>
  );
}

/**
 * F4-02 — menú contextual "+ Añadir…" que aparece entre la posición activa
 * y la siguiente. Ofrece:
 *   - "Posición fija / de pool / de relleno" tras la activa.
 *   - "Variante en esta posición".
 *   - "Quitar posición" (si el host pasó `onRemovePosicion`).
 *
 * El menú se cierra con Escape o haciendo click en el botón "Cancelar".
 */
function AddMenu({
  posicionNumero,
  esUltima,
  onAddPosicion,
  onAddVariante,
  onRemovePosicion,
  onCerrar,
}: {
  posicionNumero: number;
  esUltima: boolean;
  onAddPosicion?: (args: AddPosicionArgs) => void;
  onAddVariante?: (numero: number) => void;
  onRemovePosicion?: (numero: number) => void;
  onCerrar: () => void;
}) {
  const anclaLabel = esUltima
    ? `al final (después de la posición ${posicionNumero})`
    : `entre la posición ${posicionNumero} y la ${posicionNumero + 1}`;
  return (
    <div
      role="region"
      aria-label={`Insertar contenido relativo a la posición ${posicionNumero}`}
      className="my-1 ml-8 rounded-md border border-dashed border-[var(--c-border)] bg-[var(--c-surface-2,transparent)] p-2"
      data-testid={`add-menu-${posicionNumero}`}
    >
      <div className="mb-1 flex items-center justify-between">
        <p className="text-xs font-medium text-[var(--c-text-2,inherit)]">
          Insertar {anclaLabel}
        </p>
        <Button
          variant="icon"
          size="sm"
          aria-label="Cerrar menú"
          onClick={onCerrar}
        >
          ×
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {onAddPosicion &&
          (["fijo", "obligatorio", "relleno"] as PosicionTipo[]).map((t) => (
            <Button
              key={t}
              variant="ghost"
              size="sm"
              onClick={() => onAddPosicion({ despuesDe: posicionNumero, tipo: t })}
              aria-label={`Añadir ${TIPO_INSERT_LABEL[t]} ${anclaLabel}`}
            >
              + {TIPO_INSERT_LABEL[t]}
            </Button>
          ))}
        {onAddVariante && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAddVariante(posicionNumero)}
            aria-label={`Añadir variante a la posición ${posicionNumero}`}
          >
            + Variante aquí
          </Button>
        )}
        {onRemovePosicion && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemovePosicion(posicionNumero)}
            aria-label={`Quitar la posición ${posicionNumero}`}
            className="ml-auto text-[var(--c-danger,#b91c1c)]"
          >
            Quitar posición
          </Button>
        )}
      </div>
    </div>
  );
}
