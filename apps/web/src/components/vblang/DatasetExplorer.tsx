/**
 * Explorador de datasets disponibles (Fase 3.6).
 *
 * Lista los datasets que el usuario puede usar en un bloque `dataset: "<nombre>"`
 * sin salir del editor. Resuelve la duda de "¿qué nombres existen?" (ej. evita
 * suponer que "paises_del_mundo" existe cuando no fue creado). Sólo lectura;
 * la administración completa sigue en la página /datasets.
 */

import { useEffect, useRef, useState } from "react";
import { listDatasets } from "../../domain/vblang/datasetApi";
import type { DatasetListItem } from "../../domain/vblang/dataset.types";

import { useI18n } from "../../i18n/I18nContext";
type Estado =
  | { fase: "idle" }
  | { fase: "loading" }
  | { fase: "ready"; items: DatasetListItem[] }
  | { fase: "error"; mensaje: string };

export default function DatasetExplorer({
  inline = false,
}: { inline?: boolean } = {}) {
  const { t } = useI18n();
  const [abierto, setAbierto] = useState(false);
  // En modo inline el panel está siempre abierto (lo monta el consumidor, ej.
  // dentro de un modal); no hay disparador propio.
  const open = inline || abierto;
  const [estado, setEstado] = useState<Estado>({ fase: "idle" });
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Cargar al abrir por primera vez.
  useEffect(() => {
    if (!open || estado.fase !== "idle") return;
    let cancelado = false;
    setEstado({ fase: "loading" });
    listDatasets({ limit: 100 })
      .then((res) => {
        if (!cancelado) setEstado({ fase: "ready", items: res.items });
      })
      .catch((err: unknown) => {
        if (!cancelado) {
          setEstado({
            fase: "error",
            mensaje: err instanceof Error ? err.message : "No se pudo cargar.",
          });
        }
      });
    return () => {
      cancelado = true;
    };
  }, [open, estado.fase]);

  // Cerrar al hacer click afuera (no aplica en modo inline).
  useEffect(() => {
    if (inline || !abierto) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setAbierto(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [abierto, inline]);

  const panelInner = (
    <>
      <p className="mb-2 text-xs text-[var(--c-muted,#64748b)]">{t("datasetExplorer.usalosCon")}<code className="font-mono">dataset: "&lt;nombre&gt;"</code>.
      </p>

      {estado.fase === "loading" && (
        <p className="text-xs text-[var(--c-muted,#64748b)]">{t("comun.cargando")}</p>
      )}
      {estado.fase === "error" && (
        <p className="text-xs text-[var(--c-danger,#dc2626)]">{estado.mensaje}</p>
      )}
      {estado.fase === "ready" && estado.items.length === 0 && (
        <p className="text-xs text-[var(--c-muted,#64748b)]">{t("datasetExplorer.noHayDatasetsDisponiblesCrea")}</p>
      )}
      {estado.fase === "ready" && estado.items.length > 0 && (
        <ul className="space-y-2">
          {estado.items.map((ds) => (
            <li
              key={ds.id}
              className="rounded-md border border-[var(--c-border,#e2e8f0)] p-2"
            >
              <code className="font-mono text-xs font-semibold text-[var(--c-text)]">
                {ds.nombre}
              </code>
              <span className="ml-2 text-[11px] text-[var(--c-muted,#64748b)]">
                {ds.filasCount} fila(s)
              </span>
              {ds.descripcion && (
                <p className="mt-0.5 text-[11px] text-[var(--c-muted,#64748b)]">
                  {ds.descripcion}
                </p>
              )}
              <p className="mt-1 text-[11px] text-[var(--c-muted,#64748b)]">
                Columnas: {Object.keys(ds.columnas).join(", ") || "—"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (inline) {
    return (
      <div ref={panelRef} role="region" aria-label={t("plantillaEditorTiza.datasetsDisponibles")}>
        {panelInner}
      </div>
    );
  }

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-haspopup="true"
        className="rounded-md border border-[var(--c-border,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg,#f8fafc)]"
      >{t("nav.datasets")}</button>

      {abierto && (
        <div
          role="region"
          aria-label={t("plantillaEditorTiza.datasetsDisponibles")}
          className="absolute right-0 z-20 mt-1 max-h-96 w-80 overflow-y-auto rounded-lg border border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] p-3 shadow-lg"
        >
          {panelInner}
        </div>
      )}
    </div>
  );
}
