/**
 * pages/PlantillaEditorTiza.tsx — Editor de plantillas VBLang sobre el shell
 * "Tiza" (WO-V2c).
 *
 * Fusiona TODA la lógica del editor standalone V1 (`PlantillaEditor.tsx`:
 * undo/redo, guardado con guard anti-duplicado, importar JSON, metadatos,
 * compilación/preview/validación, carga por id, toast, wizard) con el chrome
 * del prototipo Tiza (`PlantillaEditorShell`):
 *
 *   • Top bar mínimo: Volver · breadcrumb · acento · tema · toggle
 *     Formulario/Código · Vista del alumno · Guardar. Los secundarios
 *     (Importar JSON, Ejemplos, Referencia, Copiar prompt, Datasets) viven en
 *     un menú de overflow "⋯ Más" (átomo `Menu`).
 *   • Columna izquierda única: metadatos compactos (no hay rail de preguntas
 *     en el editor de una sola plantilla).
 *   • Derecha: property grid contextual (del shell) + reporte de validación.
 *   • Preview del alumno colapsable al costado (no modal).
 *   • Centro: el editor de código rico (modo Código) o el formulario
 *     (modo Formulario), más la consola de estado y el panel de errores.
 *
 * NO reescribe la lógica de campos ni el round-trip código↔formulario: reusa
 * los mismos componentes y hooks que V1. Es disposición/chrome.
 *
 * El editor clásico viejo (`PlantillaEditor.tsx`) sigue accesible vía la flag
 * `?editorClasico=1`.
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { parse, serialize, type Plantilla } from "@vb/vblang";
import CodeEditor, {
  type CodeEditorHandle,
} from "../components/vblang/CodeEditor";
import {
  TizaQuestionCard,
  TizaPropertyGrid,
  TizaCodeDrawer,
  type TizaSelection,
} from "../components/vblang/TizaEditor";
import DatasetExplorer from "../components/vblang/DatasetExplorer";
import EjemplosMenu from "../components/vblang/EjemplosMenu";
import PromptIAPanel from "../components/vblang/PromptIAPanel";
import ReferenciaRapida from "../components/vblang/ReferenciaRapida";
import SnippetBar from "../components/vblang/SnippetBar";
import NuevaPlantillaWizard from "../components/vblang/NuevaPlantillaWizard";
import { useEditorClasico } from "../editor/useEditorClasico";
import { extractDeclaredVariables } from "../components/vblang/plantillaAst";
import Toast, { type ToastAction } from "../components/Toast";
import ErrorPanel from "../components/vblang/ErrorPanel";
import PreviewPanel from "../components/vblang/PreviewPanel";
import MetadataPanel, {
  type PlantillaMetadata,
} from "../components/vblang/MetadataPanel";
import { Pill } from "../components/ui";
import PlantillaEditorShell, {
  type AccentKey,
} from "../editor/PlantillaEditorShell";
import { useTheme } from "../theme/ThemeContext";
import { usePlantillaCompilation } from "../hooks/usePlantillaCompilation";
import { usePlantillaPreview } from "../hooks/usePlantillaPreview";
import { usePlantillaValidation } from "../hooks/usePlantillaValidation";
import {
  createPlantilla,
  getPlantilla,
  updatePlantilla,
  DslApiError,
} from "../domain/vblang/plantillaApi";
import PlantillaEditorClasico from "./PlantillaEditor";

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

/* ---------- Botón de ítem del menú overflow ---------- */
function OverflowItem({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        width: "100%",
        textAlign: "left",
        padding: "8px 10px",
        borderRadius: "var(--r-md)",
        border: 0,
        background: "transparent",
        color: disabled ? "var(--c-text-3)" : "var(--c-text)",
        fontSize: 13,
        fontWeight: 500,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = "var(--c-surface-2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

export default function PlantillaEditorTiza() {
  // El editor clásico viejo queda accesible por flag inverso (sin hooks de por
  // medio: la flag se lee de la URL, estable durante la vida del componente).
  const clasico = useEditorClasico();
  if (clasico) {
    return <PlantillaEditorClasico />;
  }
  return <PlantillaEditorTizaInner />;
}

function PlantillaEditorTizaInner() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("returnTo");
  const isNew = !id;

  const { theme, setTheme } = useTheme();
  // El shell habla en "light" | "dark"; lo mapeamos al tema real de la app
  // (tiza ↔ tiza-dark). Si el rol no permite tiza-dark, setTheme es no-op.
  const shellTheme = theme.endsWith("-dark") ? "dark" : "light";
  const [accent, setAccent] = useState<AccentKey>("azul");

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

  const [savedCodigo, setSavedCodigo] = useState<string>(INITIAL_TEMPLATE);
  const [metadata, setMetadata] = useState<PlantillaMetadata>(EMPTY_META);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  // FIX-PLANTILLA-DUP — guard sincrónico para bloquear clicks múltiples en
  // "Guardar" (ver nota original en PlantillaEditor.tsx).
  const isSavingRef = useRef(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [dslApiError, setDslApiError] = useState<
    { message: string; line?: number; col?: number } | undefined
  >(undefined);
  const [loadStatus, setLoadStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >(isNew ? "ready" : "loading");
  const [toastState, setToastState] = useState<{
    message: string;
    actions?: ToastAction[];
  } | null>(null);
  const [modo, setModo] = useState<"codigo" | "visual">("codigo");
  const [selection, setSelection] = useState<TizaSelection>({ kind: "pregunta" });
  const [showTizaCode, setShowTizaCode] = useState(false);
  const [referenciaOpen, setReferenciaOpen] = useState(false);
  const [promptIAOpen, setPromptIAOpen] = useState(false);
  const [wizardDismissed, setWizardDismissed] = useState(!isNew);

  const editorRef = useRef<CodeEditorHandle | null>(null);
  const lastDeclaredRef = useRef<string[]>([]);
  const lastValidPlantillaRef = useRef<Plantilla | null>(null);

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
  }, [id, isNew, resetCodigo]);

  const compilation = usePlantillaCompilation(codigoDsl);
  const preview = usePlantillaPreview(compilation.compiled);
  const validation = usePlantillaValidation(compilation.compiled);

  /* WO-V2d — valores en vivo para read-outs de la tarjeta y el property grid. */
  const liveValues = useMemo(() => {
    const firstOk = preview.items.find((it) => !it.error && it.variables);
    const variables = firstOk?.variables ?? preview.variables0;
    const question = firstOk?.question;
    const respuesta =
      typeof question?.answerKey === "string"
        ? question.answerKey
        : Array.isArray(question?.answerKey) && question.answerKey.length > 0
          ? question.answerKey[0]
          : undefined;
    return {
      variables,
      respuesta,
      toleranciaAbs: question?.toleranciaAbsoluta,
    };
  }, [preview]);

  const declaredVariables = useMemo(() => {
    if (compilation.plantilla) {
      const list = extractDeclaredVariables(compilation.plantilla);
      lastDeclaredRef.current = list;
      return list;
    }
    return lastDeclaredRef.current;
  }, [compilation.plantilla]);

  useEffect(() => {
    if (compilation.plantilla) {
      lastValidPlantillaRef.current = compilation.plantilla;
    }
  }, [compilation.plantilla]);

  // AST de respaldo para que el property grid del shell siempre tenga datos,
  // incluso si el código nunca compiló (caso borde).
  const fallbackAst = useMemo<Plantilla | null>(() => {
    try {
      return parse(INITIAL_TEMPLATE);
    } catch {
      return null;
    }
  }, []);

  const astParaRenderizar =
    compilation.plantilla ?? lastValidPlantillaRef.current ?? fallbackAst;

  const numLineas = codigoDsl.split("\n").length;
  const numErrores =
    (compilation.parseError ? 1 : 0) +
    (compilation.lintReport?.errors.length ?? 0);

  const handleGoToLocation = (line: number, col: number) => {
    editorRef.current?.focusAt(line, col);
  };

  const handleApplyFix = useCallback((newCode: string) => {
    dispatchCodigo({ type: "set", value: newCode });
  }, []);

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
        setSaveMessage('El JSON debe tener un campo "codigoDsl".');
        return;
      }
      resetCodigo(data.codigoDsl);
      setMetadata((m) => ({
        nombre: typeof data.nombre === "string" ? data.nombre : m.nombre,
        descripcion:
          typeof data.descripcion === "string"
            ? data.descripcion
            : m.descripcion,
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
        const editUrl = `/plantillas/${created.id}${
          returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ""
        }`;
        if (returnTo) {
          setToastState({
            message: "Plantilla guardada.",
            actions: [
              {
                label: "Volver al módulo",
                primary: true,
                onClick: () => navigate(returnTo),
              },
              { label: "Seguir editando", onClick: () => navigate(editUrl) },
            ],
          });
        } else {
          navigate(editUrl);
        }
      } else if (id) {
        await updatePlantilla(id, {
          ...payload,
          changelog: "Edición desde editor Tiza",
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
        <p role="alert" className="text-sm text-[var(--c-danger)]">
          No se pudo cargar la plantilla.
        </p>
      </main>
    );
  }

  const hayCambios = codigoDsl !== savedCodigo;

  /* ── estado de guardado para la barra superior (compacto, cerca de Guardar) ── */
  const topBarStatus = (
    <span
      role="status"
      aria-live="polite"
      aria-atomic="true"
      title={
        saveStatus === "saving"
          ? "Guardando…"
          : saveStatus === "error"
            ? saveMessage ?? "Error"
            : hayCambios
              ? "Cambios sin guardar"
              : "Sin cambios"
      }
      className="plantilla-shell__topbar-item plantilla-shell__save-state"
      data-state={saveStatus}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        fontWeight: 500,
        color:
          saveStatus === "error"
            ? "var(--c-danger)"
            : saveStatus === "saving"
              ? "var(--c-warning, #b45309)"
              : "var(--c-text-3)",
        whiteSpace: "nowrap",
        maxWidth: 180,
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <span
        aria-hidden="true"
        className="plantilla-shell__save-state-dot"
        data-state={saveStatus}
      />
      <span>
        {saveStatus === "saving"
          ? "Guardando…"
          : saveStatus === "saved"
            ? saveMessage ?? "Guardado"
            : saveStatus === "error"
              ? saveMessage ?? "Error"
              : hayCambios
                ? "Cambios sin guardar"
                : "Sin cambios"}
      </span>
    </span>
  );

  /* ── columna izquierda: metadatos compactos (sin rail de preguntas) ── */
  const railMetadata = (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "var(--c-text-3)",
          padding: "4px 4px 0",
        }}
      >
        METADATOS
      </div>
      <MetadataPanel
        value={metadata}
        onChange={setMetadata}
        disabled={saveStatus === "saving"}
      />
    </div>
  );

  /* ── menú overflow: acciones secundarias (incluye undo/redo) ── */
  const overflowMenu = ({ close }: { close: () => void }) => (
    <>
      <OverflowItem
        onClick={() => {
          undo();
          close();
        }}
        disabled={!canUndo}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↶</span>
        Deshacer
      </OverflowItem>
      <OverflowItem
        onClick={() => {
          redo();
          close();
        }}
        disabled={!canRedo}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↷</span>
        Rehacer
      </OverflowItem>
      <div
        aria-hidden="true"
        style={{ height: 1, background: "var(--c-border)", margin: "4px 6px" }}
      />
      <OverflowItem
        onClick={() => {
          fileInputRef.current?.click();
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>↥</span>
        Importar JSON
      </OverflowItem>
      <OverflowItem
        onClick={() => {
          setReferenciaOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>≡</span>
        Referencia VBLang
      </OverflowItem>
      <OverflowItem
        onClick={() => {
          setPromptIAOpen(true);
          close();
        }}
      >
        <span aria-hidden="true" style={{ width: 14, display: "inline-flex", justifyContent: "center" }}>✦</span>
        Copiar prompt para IA
      </OverflowItem>
      <div
        aria-hidden="true"
        style={{ height: 1, background: "var(--c-border)", margin: "4px 6px" }}
      />
      <div style={{ padding: "2px 6px" }}>
        <EjemplosMenu onLoad={setCodigo} hasUnsavedChanges={hayCambios} />
      </div>
      <div style={{ padding: "2px 6px" }}>
        <DatasetExplorer />
      </div>
    </>
  );

  /* ── centro: editor de código rico (Código) o tarjeta Tiza (visual) ── */
  const centerContent =
    modo === "codigo" ? (
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
    ) : !astParaRenderizar ? (
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
    ) : (
      <div
        className="editor-shell__scroll outline-none"
        style={{
          flex: "1 1 auto",
          minHeight: 0,
          overflowY: "auto",
          padding: "26px 30px",
        }}
      >
        {!compilation.plantilla && (
          <div
            role="status"
            data-testid="vblang-form-retenido-banner"
            className="flex items-start gap-3 border-b border-[var(--c-border)] bg-[var(--c-warning-soft,#fef3c7)] text-[var(--c-text)] px-3 py-2 text-xs"
          >
            <span className="flex-1">
              El código tiene errores — estás viendo la última versión válida.
              Si editás desde el formulario, el código con errores se reemplaza.
            </span>
            <button
              type="button"
              data-testid="vblang-form-ver-errores"
              onClick={() => setModo("codigo")}
              className="shrink-0 rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] px-2 py-1 text-xs font-medium"
            >
              Ver errores
            </button>
          </div>
        )}
        <TizaQuestionCard
          plantilla={astParaRenderizar}
          onChange={(next) => setCodigo(serialize(next))}
          selection={selection}
          onSelectQuestion={() => setSelection({ kind: "pregunta" })}
          onSelectVariable={(idx) => setSelection({ kind: "variable", index: idx })}
          live={liveValues}
        />
        <TizaCodeDrawer
          code={codigoDsl}
          visible={showTizaCode}
          onToggle={() => setShowTizaCode((v) => !v)}
        />
      </div>
    );

  /* Centro completo: contenido por modo + consola + panel de errores. */
  const renderCenterFull = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        minHeight: 0,
      }}
    >
      <a href="#vblang-panel" className="skip-link">
        Saltar al editor
      </a>
      <div
        id="vblang-panel"
        tabIndex={-1}
        role="tabpanel"
        className="editor-shell__scroll outline-none"
        style={{ flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column" }}
      >
        {centerContent}
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
      <div
        style={{
          height: 192,
          flex: "0 0 auto",
          borderTop: "1px solid var(--c-border)",
          background: "var(--c-surface)",
        }}
      >
        <ErrorPanel
          parseError={compilation.parseError ?? dslApiError}
          lintReport={compilation.lintReport}
          onGoToLocation={handleGoToLocation}
          currentCode={codigoDsl}
          onApplyFix={handleApplyFix}
        />
      </div>
    </div>
  );

  return (
    <>
      {isNew && !wizardDismissed && (
        <NuevaPlantillaWizard
          onPick={(dsl) => {
            dispatchCodigo({ type: "reset", value: dsl });
            setWizardDismissed(true);
          }}
          onBlank={() => setWizardDismissed(true)}
          onClose={() => setWizardDismissed(true)}
        />
      )}

      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--c-bg)",
          color: "var(--c-text)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <div style={{ flex: 1, minHeight: 0, padding: 12, display: "flex" }}>
          <div style={{ flex: 1, minHeight: 0 }}>
            <PlantillaEditorShell
              plantilla={astParaRenderizar ?? (fallbackAst as Plantilla)}
              onChange={(next) => setCodigo(serialize(next))}
              breadcrumb={[
                "Plantillas",
                isNew ? "Nueva plantilla" : metadata.nombre || "Plantilla",
              ]}
              accent={accent}
              onAccentChange={setAccent}
              theme={shellTheme}
              onThemeChange={(t) => setTheme(t === "dark" ? "tiza-dark" : "tiza")}
              onBack={() => navigate(returnTo || "/plantillas")}
              backLabel="Volver"
              codeModeControlled={modo === "codigo" ? "code" : "form"}
              onCodeModeChange={(m) => setModo(m === "code" ? "codigo" : "visual")}
              codeModes={["form", "code"]}
              topBarStatus={topBarStatus}
              overflowMenu={overflowMenu}
              renderRail={railMetadata}
              renderCenterFull={renderCenterFull}
              renderAux={
                <TizaPropertyGrid
                  plantilla={astParaRenderizar ?? (fallbackAst as Plantilla)}
                  onChange={(next) => setCodigo(serialize(next))}
                  selection={selection}
                  onSelectQuestion={() => setSelection({ kind: "pregunta" })}
                  live={liveValues}
                  validation={validation}
                />
              }
              renderPreviewPanel={
                <div style={{ padding: 14 }}>
                  <PreviewPanel
                    preview={preview.items}
                    onRegenerate={preview.regenerate}
                  />
                </div>
              }
              onSave={() => void handleSave()}
              saving={saveStatus === "saving"}
            />
          </div>
        </div>
      </div>

      {/* Input oculto para "Importar JSON" (a nivel página: el menú se cierra). */}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json,.json"
        onChange={handleImportFile}
        className="hidden"
      />

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
