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
import PromptIAPanel from "../components/vblang/PromptIAPanel";
import ReferenciaRapida from "../components/vblang/ReferenciaRapida";
import SnippetBar from "../components/vblang/SnippetBar";
import NuevaPlantillaWizard from "../components/vblang/NuevaPlantillaWizard";
import PlantillaEditorSchema from "../components/vblang/PlantillaEditorSchema";
import { extractDeclaredVariables } from "../components/vblang/plantillaAst";
import EditorShell from "../components/layout/EditorShell";
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
  // FIX-PLANTILLA-DUP — ref sincrónico para bloquear clicks múltiples
  // en "Guardar". El `disabled={saveStatus === "saving"}` del botón
  // (línea 554) no es suficiente: React re-renderiza DESPUÉS del click
  // y entre el primer click y el re-render pueden disparse 1-2 clicks
  // más. Si el front entra al camino `isNew` (línea 300) con clicks
  // repetidos, cada click llama `createPlantilla` → N copias de la
  // plantilla. La ref es síncrona y se chequea antes de cualquier
  // estado de React.
  const isSavingRef = useRef(false);
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
  const [promptIAOpen, setPromptIAOpen] = useState(false);
  // Wizard de nueva plantilla: se muestra una vez al crear (isNew=true) y se
  // cierra cuando el usuario elige algo (o lo descarta). No persistimos el
  // estado en storage: si recarga la página, vuelve a aparecer (es creación).
  const [wizardDismissed, setWizardDismissed] = useState(!isNew);
  const editorRef = useRef<CodeEditorHandle | null>(null);
  // Última lista de variables declaradas que pudimos parsear — si el código
  // rompe, conservamos la última válida para no vaciar el autocompletado.
  const lastDeclaredRef = useRef<string[]>([]);
  // Última plantilla (AST) válida parseada. La conservamos al romper el código
  // para que el modo formulario siga siendo editable y rescate el código.
  const lastValidPlantillaRef = useRef<NonNullable<typeof compilation.plantilla> | null>(null);

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

  // Mantenemos la última lista válida de variables declaradas para que el
  // autocompletado del editor no se vacíe entre cambios de tipeo que rompen
  // el parseo momentáneamente.
  const declaredVariables = useMemo(() => {
    if (compilation.plantilla) {
      const list = extractDeclaredVariables(compilation.plantilla);
      lastDeclaredRef.current = list;
      return list;
    }
    return lastDeclaredRef.current;
  }, [compilation.plantilla]);

  // Misma idea para el AST: retenemos la última versión parseable para que
  // el modo formulario no desaparezca cuando el código se rompe. La
  // actualización del ref es un side-effect del render, no un cálculo, así
  // que va en un effect aparte.
  useEffect(() => {
    if (compilation.plantilla) {
      lastValidPlantillaRef.current = compilation.plantilla;
    }
  }, [compilation.plantilla]);

  // Estado del footer: cantidad de errores + líneas del código.
  const numLineas = codigoDsl.split("\n").length;
  const numErrores =
    (compilation.parseError ? 1 : 0) +
    (compilation.lintReport?.errors.length ?? 0);

  const handleGoToLocation = (line: number, col: number) => {
    editorRef.current?.focusAt(line, col);
  };

  // Quick-fix del ErrorPanel: reemplaza el codigo actual y deja que el
  // debounce de usePlantillaCompilation revalide solo.
  const handleApplyFix = useCallback(
    (newCode: string) => {
      dispatchCodigo({ type: "set", value: newCode });
    },
    [],
  );

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
    // FIX-PLANTILLA-DUP — guard sincrónico. Si ya hay un save en
    // vuelo, descartar el click extra (sea por doble-click del usuario
    // o por el botón que todavía no se re-renderizó como `disabled`).
    if (isSavingRef.current) return;
    isSavingRef.current = true;
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
    } finally {
      // FIX-PLANTILLA-DUP — siempre liberar el guard, incluso si la
      // promesa rejected. Sin esto, un save fallido dejaría el botón
      // bloqueado para siempre (estado en `error` pero `isSavingRef`
      // en true).
      isSavingRef.current = false;
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
    <>
    {isNew && !wizardDismissed && (
      <NuevaPlantillaWizard
        onPick={(dsl) => {
          dispatchCodigo({ type: "reset", value: dsl });
          setWizardDismissed(true);
        }}
        onBlank={() => {
          setWizardDismissed(true);
        }}
        onClose={() => {
          setWizardDismissed(true);
        }}
      />
    )}
    <EditorShell
      dataTestid="plantilla-editor"
      meta={
        <MetadataPanel value={metadata} onChange={setMetadata} disabled={saveStatus === "saving"} />
      }
      aux={
        <>
          <div className="flex-1 min-h-0">
            <PreviewPanel preview={preview.items} onRegenerate={preview.regenerate} />
          </div>
          <ValidationReport state={validation} disabled={!compilation.compiled} />
        </>
      }
    >
        <header className="vb-page-bar" role="banner">
          {/* QA-FIX-04: botón "Volver" en el header. Replica el patrón
              de MapaEditorFull (línea 831) y ModuloDetail (línea 513):
              ghost button con flecha izquierda, mismo shape y tokens
              --c-*. Destino: `returnTo` si el editor se abrió desde
              un módulo (flujo módulo→plantilla), si no, /plantillas. */}
          <button
            type="button"
            data-testid="plantilla-volver"
            onClick={() => navigate(returnTo || "/plantillas")}
            aria-label="Volver"
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--c-border)] px-2.5 py-1 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12l6-6M5 12l6 6"/>
            </svg>
            Volver
          </button>
          <nav className="crumb" aria-label="Migas de pan">
            <Link to="/plantillas" className="hover:text-[var(--c-text)]">Plantillas</Link>
            <svg className="w-3 h-3" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6"/>
            </svg>
            <span className="text-[var(--c-text)]">
              {isNew ? "Nueva plantilla" : metadata.nombre || "Plantilla"}
            </span>
          </nav>
          <div className="vb-name">
            <span className="vb-name-eyebrow">VBLang · Plantilla</span>
            <input
              aria-label="Nombre de la plantilla"
              value={metadata.nombre}
              onChange={(e) => setMetadata((m) => ({ ...m, nombre: e.target.value }))}
              placeholder="Nombre de la plantilla…"
              className="vb-name-title"
            />
          </div>
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
          <Button variant="ghost" size="sm" onClick={() => setPromptIAOpen(true)}>
            Copiar prompt para IA
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
          className="editor-shell__scroll outline-none"
        >
          {modo === "codigo" ? (
            <>
              <SnippetBar
                onInsert={(text) => editorRef.current?.insertAtCursor(text)}
              />
              <div className="flex-1 min-h-0">
                <CodeEditor
                  ref={editorRef}
                  value={codigoDsl}
                  onChange={setCodigo}
                  declaredVariables={declaredVariables}
                  errorLine={compilation.parseError?.line ?? dslApiError?.line}
                  errorCol={compilation.parseError?.col ?? dslApiError?.col}
                  errorSummary={errorSummary}
                />
              </div>
            </>
          ) : (() => {
            // Si el código compila, usamos el AST fresco. Si está roto pero
            // hubo una versión válida antes, retenemos esa para que el form
            // siga siendo editable. Sólo si nunca compiló nada válido caemos
            // al fallback de "no disponible".
            const astParaRenderizar =
              compilation.plantilla ?? lastValidPlantillaRef.current;
            if (!astParaRenderizar) {
              return (
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
              );
            }
            const mostrandoRetenida = !compilation.plantilla;
            return (
              <div className="flex flex-col h-full min-h-0">
                {mostrandoRetenida && (
                  <div
                    role="status"
                    data-testid="vblang-form-retenido-banner"
                    className="flex items-start gap-3 border-b border-[var(--c-border)] bg-[var(--c-warning-soft,#fef3c7)] text-[var(--c-text)] px-3 py-2 text-xs"
                  >
                    <span className="flex-1">
                      El código tiene errores — estás viendo la última versión
                      válida. Si editás desde el formulario, el código con
                      errores se reemplaza.
                    </span>
                    <button
                      type="button"
                      data-testid="vblang-form-ver-errores"
                      onClick={() => {
                        setModo("codigo");
                        // Damos un tick para que el panel de errores monte y
                        // reciba el foco.
                        requestAnimationFrame(() => {
                          const el = document.querySelector(
                            "[data-testid='vblang-error-panel']",
                          );
                          if (el instanceof HTMLElement) el.focus();
                        });
                      }}
                      className="shrink-0 rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] px-2 py-1 text-xs font-medium"
                    >
                      Ver errores
                    </button>
                  </div>
                )}
                <div className="flex-1 min-h-0">
                  <PlantillaEditorSchema
                    plantilla={astParaRenderizar}
                    onChange={(next) => setCodigo(serialize(next))}
                    valoresActuales={preview.variables0}
                    tieneErrores={
                      !!compilation.parseError ||
                      (compilation.lintReport?.errors.length ?? 0) > 0
                    }
                  />
                </div>
              </div>
            );
          })()}
        </div>
        <div
          role="status"
          aria-live="polite"
          data-testid="vblang-status-footer"
          className="vb-console"
        >
          {numErrores === 0 ? (
            <Pill tone="ok">Sin errores ✓</Pill>
          ) : (
            <Pill tone="danger">
              {numErrores} {numErrores === 1 ? "error" : "errores"}
            </Pill>
          )}
          <span aria-hidden="true">·</span>
          <span>
            {numLineas} {numLineas === 1 ? "línea" : "líneas"}
          </span>
          {numErrores === 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span>listo para validar</span>
            </>
          )}
          <span className="vb-console__spacer" aria-hidden="true" />
          <button
            type="button"
            className="vb-console__link"
            onClick={() => setReferenciaOpen(true)}
          >
            Ver referencia VBLang →
          </button>
        </div>
        <footer className="h-48 border-t border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)]">
          <ErrorPanel
            parseError={compilation.parseError ?? dslApiError}
            lintReport={compilation.lintReport}
            onGoToLocation={handleGoToLocation}
            currentCode={codigoDsl}
            onApplyFix={handleApplyFix}
          />
        </footer>
    </EditorShell>

      <ReferenciaRapida
        open={referenciaOpen}
        onClose={() => setReferenciaOpen(false)}
      />

      <PromptIAPanel
        open={promptIAOpen}
        onClose={() => setPromptIAOpen(false)}
        onInsert={(codigo) => {
          dispatchCodigo({ type: "set", value: codigo });
          setPromptIAOpen(false);
        }}
      />

      {toastState && (
        <Toast
          message={toastState.message}
          actions={toastState.actions}
          onClose={() => setToastState(null)}
        />
      )}
    </>
  );
}
