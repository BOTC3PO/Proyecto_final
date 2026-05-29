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

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { serialize } from "@vb/vblang";
import CodeEditor, {
  type CodeEditorHandle,
} from "../components/vblang/CodeEditor";
import DatasetExplorer from "../components/vblang/DatasetExplorer";
import EjemplosMenu from "../components/vblang/EjemplosMenu";
import ReferenciaRapida from "../components/vblang/ReferenciaRapida";
import PlantillaFormularioVisual from "../components/vblang/PlantillaFormularioVisual";
import Toast, { type ToastAction } from "../components/Toast";
import ErrorPanel from "../components/vblang/ErrorPanel";
import PreviewPanel from "../components/vblang/PreviewPanel";
import ValidationReport from "../components/vblang/ValidationReport";
import MetadataPanel, {
  type PlantillaMetadata,
} from "../components/vblang/MetadataPanel";
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

export default function PlantillaEditor() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const isNew = !id;

  const [codigoDsl, setCodigoDsl] = useState<string>(INITIAL_TEMPLATE);
  // Última versión persistida (o cargada): sirve para detectar cambios sin guardar.
  const [savedCodigo, setSavedCodigo] = useState<string>(INITIAL_TEMPLATE);
  const [metadata, setMetadata] = useState<PlantillaMetadata>(EMPTY_META);
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
        setCodigoDsl(p.codigoDsl);
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

  const handleGoToLocation = (line: number, col: number) => {
    editorRef.current?.focusAt(line, col);
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
                    : "Borrador local"}
            </span>
          </div>
          <EjemplosMenu
            onLoad={setCodigoDsl}
            hasUnsavedChanges={codigoDsl !== savedCodigo}
          />
          <button
            type="button"
            onClick={() => setReferenciaOpen(true)}
            className="rounded-md border border-[var(--c-border,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg,#f1f5f9)]"
          >
            Referencia
          </button>
          <DatasetExplorer />
          <button
            type="button"
            onClick={() => void handleSave()}
            disabled={saveStatus === "saving"}
            className="rounded-md bg-[var(--c-primary)] px-4 py-1.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {saveStatus === "saving" ? "Guardando…" : "Guardar"}
          </button>
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
              onChange={setCodigoDsl}
              errorLine={compilation.parseError?.line ?? dslApiError?.line}
              errorCol={compilation.parseError?.col ?? dslApiError?.col}
            />
          ) : compilation.plantilla ? (
            <PlantillaFormularioVisual
              plantilla={compilation.plantilla}
              onChange={(next) => setCodigoDsl(serialize(next))}
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
