/**
 * Editor V3 de plantillas VBLang.
 *
 * Layout: tres columnas en desktop (metadata · editor + errores · preview + validación).
 * En mobile cae a stack vertical via Tailwind responsive utilities.
 *
 * - `id` por params → undefined indica modo creación.
 * - Carga la plantilla (si existe), corre compile+lint debounced y preview en vivo.
 * - Validación bajo demanda (`Validar`).
 * - Guardar dispara create/update y maneja DslApiError mostrándolo en el panel.
 */

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { serialize } from "@vb/vblang";
import CodeEditor, {
  type CodeEditorHandle,
} from "../components/vblang/CodeEditor";
import DatasetExplorer from "../components/vblang/DatasetExplorer";
import EjemplosMenu from "../components/vblang/EjemplosMenu";
import ReferenciaRapida from "../components/vblang/ReferenciaRapida";
import PlantillaEditorSchema from "../components/vblang/PlantillaEditorSchema";
import Toast, { type ToastAction } from "../components/Toast";
import ErrorPanel from "../components/vblang/ErrorPanel";
import PreviewPanel from "../components/vblang/PreviewPanel";
import ValidationReport from "../components/vblang/ValidationReport";
import MetadataPanel, {
  type PlantillaMetadata,
} from "../components/vblang/MetadataPanel";
import { Button, Pill } from "../components/ui";
import { usePlantillaCompilation } from "../hooks/usePlantillaCompilation";
import { usePlantillaPreview } from "../hooks/usePlantillaPreview";
import { usePlantillaValidation } from "../hooks/usePlantillaValidation";
import {
  createPlantilla,
  getPlantilla,
  updatePlantilla,
  DslApiError,
} from "../domain/vblang/plantillaApi";

const INITIAL_TEMPLATE = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "Cuanto es {a} + {b}?"
respuesta: a + b
tipo: input
`;

const EMPTY_META: PlantillaMetadata = {
  nombre: "",
  descripcion: "",
  materia: "",
  tags: [],
  visibility: "privada",
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

/* ---------- Historial de código (undo/redo) ---------- */
interface CodigoHist {
  past: string[];
  present: string;
  future: string[];
}
type CodigoAction =
  | { type: "set"; value: string }
  | { type: "reset"; value: string }
  | { type: "undo" }
  | { type: "redo" };

const MAX_HIST = 200;

function codigoHistReducer(s: CodigoHist, a: CodigoAction): CodigoHist {
  switch (a.type) {
    case "set":
      if (a.value === s.present) return s;
      return {
        past: [...s.past.slice(-(MAX_HIST - 1)), s.present],
        present: a.value,
        future: [],
      };
    case "reset":
      return { past: [], present: a.value, future: [] };
    case "undo":
      if (s.past.length === 0) return s;
      return {
        past: s.past.slice(0, -1),
        present: s.past[s.past.length - 1],
        future: [s.present, ...s.future],
      };
    case "redo":
      if (s.future.length === 0) return s;
      return {
        past: [...s.past, s.present],
        present: s.future[0],
        future: s.future.slice(1),
      };
  }
}

export default function PlantillaEditor() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const isNew = !id;

  const [hist, dispatchCodigo] = useReducer(codigoHistReducer, {
    past: [],
    present: INITIAL_TEMPLATE,
    future: [],
  });
  const codigoDsl = hist.present;
  const setCodigo = useCallback(
    (v: string) => dispatchCodigo({ type: "set", value: v }),
    [],
  );
  const resetCodigo = useCallback(
    (v: string) => dispatchCodigo({ type: "reset", value: v }),
    [],
  );
  const undo = useCallback(() => dispatchCodigo({ type: "undo" }), []);
  const redo = useCallback(() => dispatchCodigo({ type: "redo" }), []);
  const canUndo = hist.past.length > 0;
  const canRedo = hist.future.length > 0;
  // Última versión persistida (o cargada): sirve para detectar cambios sin guardar.
  const [savedCodigo, setSavedCodigo] = useState<string>(INITIAL_TEMPLATE);
  const [metadata, setMetadata] = useState<PlantillaMetadata>(EMPTY_META);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [dslApiError, setDslApiError] = useState<
    { message: string; line?: number; col?: number } | undefined
  >(undefined);
  const [loadStatus, setLoadStatus] = useState<"idle" | "loading" | "ready" | "error">(
    isNew ? "ready" : "loading",
  );
  const [toastState, setToastState] = useState<{
    message: string;
    actions?: ToastAction[];
  } | null>(null);
  const [modo, setModo] = useState<"codigo" | "visual">("codigo");
  const [referenciaOpen, setReferenciaOpen] = useState(false);
  const editorRef = useRef<CodeEditorHandle | null>(null);

  useEffect(() => {
    if (isNew || !id) return;
    let active = true;
    setLoadStatus("loading");
    getPlantilla(id)
      .then((p) => {
        if (!active) return;
        resetCodigo(p.codigoDsl);
        setSavedCodigo(p.codigoDsl);
        setMetadata({
          nombre: p.nombre,
          descripcion: p.descripcion ?? "",
          materia: p.materia ?? "",
          tags: p.tags ?? [],
          visibility: p.visibility,
        });
        setLoadStatus("ready");
      })
      .catch(() => {
        if (!active) return;
        setLoadStatus("error");
      });
    return () => {
      active = false;
    };
  }, [id, isNew]);

  const compilation = usePlantillaCompilation(codigoDsl);
  const preview = usePlantillaPreview(compilation.compiled);
  const validation = usePlantillaValidation(compilation.compiled);

  // Estado del footer: cantidad de errores + líneas del código.
  const numLineas = codigoDsl.split("\n").length;
  const numErrores =
    (compilation.parseError ? 1 : 0) +
    (compilation.lintReport?.errors.length ?? 0);

  const handleGoToLocation = (line: number, col: number) => {
    editorRef.current?.focusAt(line, col);
  };

  // Resumen textual de errores para asociar al textarea (aria-describedby) y
  // que el lector de pantalla lo anuncie al editar.
  const errorSummary = useMemo(() => {
    const parts: string[] = [];
    const pe = compilation.parseError ?? dslApiError;
    if (pe) parts.push(pe.line ? `Línea ${pe.line}: ${pe.message}` : pe.message);
    for (const e of compilation.lintReport?.errors ?? []) {
      parts.push(e.line ? `Línea ${e.line}: ${e.message}` : e.message);
    }
    if (parts.length === 0) return undefined;
    const head =
      parts.length === 1
        ? "1 error de validación."
        : `${parts.length} errores de validación.`;
    return `${head} ${parts.join(". ")}`;
  }, [compilation.parseError, compilation.lintReport, dslApiError]);

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const data = JSON.parse(await file.text()) as Record<string, unknown>;
      if (typeof data.codigoDsl !== "string") {
        setSaveStatus("error");
        setSaveMessage("El JSON debe tener un campo \"codigoDsl\".");
        return;
      }
      resetCodigo(data.codigoDsl);
      setMetadata((m) => ({
        nombre: typeof data.nombre === "string" ? data.nombre : m.nombre,
        descripcion:
          typeof data.descripcion === "string" ? data.descripcion : m.descripcion,
        materia: typeof data.materia === "string" ? data.materia : m.materia,
        tags: Array.isArray(data.tags)
          ? data.tags.filter((t): t is string => typeof t === "string")
          : m.tags,
        visibility: m.visibility,
      }));
      setSaveStatus("idle");
      setSaveMessage("Plantilla importada (revisá y guardá).");
    } catch {
      setSaveStatus("error");
      setSaveMessage("No se pudo leer el archivo JSON.");
    }
  };

  const handleSave = async () => {
    setSaveStatus("saving");
    setSaveMessage(null);
    setDslApiError(undefined);
    try {
      const payload = {
        nombre: metadata.nombre.trim(),
        descripcion: metadata.descripcion.trim() || undefined,
        materia: metadata.materia.trim() || undefined,
        tags: metadata.tags.length > 0 ? metadata.tags : undefined,
        codigoDsl,
        visibility: metadata.visibility,
      };
      if (!payload.nombre) {
        setSaveStatus("error");
        setSaveMessage("El nombre es obligatorio.");
        return;
      }
      if (isNew) {
        const created = await createPlantilla(payload);
        setSaveStatus("saved");
        setSaveMessage("Plantilla creada.");
        setSavedCodigo(codigoDsl);
        const editUrl = `/plantillas/${created.id}${returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ""}`;
        if (returnTo) {
          // Mostramos toast con acciones — no bloquea como window.confirm.
          setToastState({
            message: "Plantilla guardada.",
            actions: [
              {
                label: "Volver al módulo",
                primary: true,
                onClick: () => navigate(returnTo),
              },
              {
                label: "Seguir editando",
                onClick: () => navigate(editUrl),
              },
            ],
          });
        } else {
          navigate(editUrl);
        }
      } else if (id) {
        await updatePlantilla(id, {
          ...payload,
          changelog: "Edición desde editor V3",
        });
        setSaveStatus("saved");
        setSaveMessage("Cambios guardados.");
        setSavedCodigo(codigoDsl);
        if (returnTo) {
          setToastState({
            message: "Cambios guardados.",
            actions: [
              {
                label: "Volver al módulo",
                primary: true,
                onClick: () => navigate(returnTo),
              },
              { label: "Seguir editando", onClick: () => setToastState(null) },
            ],
          });
        }
      }
    } catch (err) {
      if (err instanceof DslApiError) {
        setDslApiError({ message: err.message, line: err.line, col: err.col });
        setSaveStatus("error");
        setSaveMessage("La API rechazó el código DSL.");
      } else {
        setSaveStatus("error");
        setSaveMessage(
          err instanceof Error ? err.message : "No se pudo guardar.",
        );
      }
    }
  };

  if (loadStatus === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-[var(--c-muted,#64748b)] animate-pulse">
          Cargando plantilla…
        </p>
      </main>
    );
  }
  if (loadStatus === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p role="alert" className="text-sm text-[var(--c-danger)]">No se pudo cargar la plantilla.</p>
      </main>
    );
  }

  return (
    <div
      data-testid="plantilla-editor"
      className="flex h-[calc(100vh-3.5rem)] flex-col lg:flex-row bg-[var(--c-bg,#f8fafc)]"
    >
      <aside className="lg:w-80 border-b lg:border-b-0 lg:border-r border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)]">
        <MetadataPanel value={metadata} onChange={setMetadata} disabled={saveStatus === "saving"} />
      </aside>

      <main className="flex-1 flex flex-col min-h-0">
        <header className="vb-page-bar" role="banner">
          <nav className="crumb" aria-label="Migas de pan">
            <Link to="/plantillas" className="hover:text-[var(--c-text)]">Plantillas</Link>
            <svg className="w-3 h-3" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6"/>
            </svg>
            <span className="text-[var(--c-text)]">
              {isNew ? "Nueva plantilla" : metadata.nombre || "Plantilla"}
            </span>
          </nav>
          <input
            aria-label="Nombre de la plantilla"
            value={metadata.nombre}
            onChange={(e) => setMetadata((m) => ({ ...m, nombre: e.target.value }))}
            placeholder="Nombre de la plantilla…"
            className="w-48 rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-medium text-[var(--c-text)] hover:border-[var(--c-border)] focus:border-[var(--c-primary)] focus:outline-none"
          />
          <div
            role="tablist"
            aria-label="Modo del editor"
            className="flex rounded-md border border-[var(--c-border)] text-xs"
          >
            <button
              type="button"
              role="tab"
              id="vblang-tab-codigo"
              aria-selected={modo === "codigo"}
              aria-controls="vblang-panel"
              tabIndex={modo === "codigo" ? 0 : -1}
              onClick={() => setModo("codigo")}
              data-testid="vblang-modo-codigo"
              className={`px-3 py-1 ${
                modo === "codigo"
                  ? "bg-[var(--c-primary)] text-white"
                  : "text-[var(--c-text)]"
              }`}
            >
              Código
            </button>
            <button
              type="button"
              role="tab"
              id="vblang-tab-visual"
              aria-selected={modo === "visual"}
              aria-controls="vblang-panel"
              tabIndex={modo === "visual" ? 0 : -1}
              onClick={() => setModo("visual")}
              data-testid="vblang-modo-visual"
              className={`px-3 py-1 ${
                modo === "visual"
                  ? "bg-[var(--c-primary)] text-white"
                  : "text-[var(--c-text)]"
              }`}
            >
              Formulario
            </button>
          </div>
          <div
            className={`save-state${saveStatus === "saving" ? " is-saving" : ""}${saveStatus === "error" ? " is-error" : ""}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="dot" aria-hidden="true"></span>
            <span>
              {saveStatus === "saving"
                ? "Guardando…"
                : saveStatus === "saved"
                  ? saveMessage ?? "Guardado"
                  : saveStatus === "error"
                    ? saveMessage ?? "Error"
                    : codigoDsl !== savedCodigo
                      ? "Cambios sin guardar"
                      : "Sin cambios"}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <Button
              variant="icon"
              size="sm"
              onClick={undo}
              disabled={!canUndo}
              aria-label="Deshacer"
              title="Deshacer"
            >
              ↶
            </Button>
            <Button
              variant="icon"
              size="sm"
              onClick={redo}
              disabled={!canRedo}
              aria-label="Rehacer"
              title="Rehacer"
            >
              ↷
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            Importar JSON
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            onChange={handleImportFile}
            className="hidden"
          />
          <EjemplosMenu
            onLoad={setCodigo}
            hasUnsavedChanges={codigoDsl !== savedCodigo}
          />
          <Button variant="ghost" size="sm" onClick={() => setReferenciaOpen(true)}>
            Referencia
          </Button>
          <DatasetExplorer />
          <Button
            variant="primary"
            size="sm"
            onClick={() => void handleSave()}
            disabled={saveStatus === "saving"}
          >
            {saveStatus === "saving" ? "Guardando…" : "Guardar"}
          </Button>
        </header>

        <a href="#vblang-panel" className="skip-link">Saltar al editor</a>
        <div
          id="vblang-panel"
          tabIndex={-1}
          role="tabpanel"
          aria-labelledby={modo === "codigo" ? "vblang-tab-codigo" : "vblang-tab-visual"}
          className="flex-1 min-h-0 outline-none"
        >
          {modo === "codigo" ? (
            <CodeEditor
              ref={editorRef}
              value={codigoDsl}
              onChange={setCodigo}
              errorLine={compilation.parseError?.line ?? dslApiError?.line}
              errorCol={compilation.parseError?.col ?? dslApiError?.col}
              errorSummary={errorSummary}
            />
          ) : compilation.plantilla ? (
            <PlantillaEditorSchema
              plantilla={compilation.plantilla}
              onChange={(next) => setCodigo(serialize(next))}
              valoresActuales={preview.variables0}
              tieneErrores={
                !!compilation.parseError ||
                (compilation.lintReport?.errors.length ?? 0) > 0
              }
            />
          ) : (
            <div
              className="h-full flex flex-col items-center justify-center gap-3 p-6 text-center text-sm text-[var(--c-muted,#64748b)]"
              data-testid="vblang-form-no-disponible"
            >
              <p>
                El código tiene errores. Arreglalos en modo Código para usar el
                formulario.
              </p>
              <button
                type="button"
                onClick={() => setModo("codigo")}
                className="rounded-md border border-[var(--c-border,#e2e8f0)] px-3 py-1 text-xs"
              >
                Volver a Código
              </button>
            </div>
          )}
        </div>
        <div
          role="status"
          aria-live="polite"
          data-testid="vblang-status-footer"
          className="flex items-center gap-2 border-t border-[var(--c-border)] bg-[var(--c-surface-2)] px-3 py-1 text-xs text-[var(--c-text-3)]"
        >
          {numErrores === 0 ? (
            <Pill tone="ok">Sin errores</Pill>
          ) : (
            <Pill tone="danger">
              {numErrores} {numErrores === 1 ? "error" : "errores"}
            </Pill>
          )}
          <span aria-hidden="true">·</span>
          <span>
            {numLineas} {numLineas === 1 ? "línea" : "líneas"}
          </span>
        </div>
        <footer className="h-48 border-t border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)]">
          <ErrorPanel
            parseError={compilation.parseError ?? dslApiError}
            lintReport={compilation.lintReport}
            onGoToLocation={handleGoToLocation}
          />
        </footer>
      </main>

      <aside className="lg:w-96 border-t lg:border-t-0 lg:border-l border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] flex flex-col min-h-0">
        <div className="flex-1 min-h-0">
          <PreviewPanel preview={preview.items} onRegenerate={preview.regenerate} />
        </div>
        <ValidationReport state={validation} disabled={!compilation.compiled} />
      </aside>

      <ReferenciaRapida
        open={referenciaOpen}
        onClose={() => setReferenciaOpen(false)}
      />

      {toastState && (
        <Toast
          message={toastState.message}
          actions={toastState.actions}
          onClose={() => setToastState(null)}
        />
      )}
    </div>
  );
}
