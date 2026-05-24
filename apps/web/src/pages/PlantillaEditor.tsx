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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CodeEditor, {
  type CodeEditorHandle,
} from "../components/vblang/CodeEditor";
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
  const [metadata, setMetadata] = useState<PlantillaMetadata>(EMPTY_META);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [dslApiError, setDslApiError] = useState<
    { message: string; line?: number; col?: number } | undefined
  >(undefined);
  const [loadStatus, setLoadStatus] = useState<"idle" | "loading" | "ready" | "error">(
    isNew ? "ready" : "loading",
  );
  const editorRef = useRef<CodeEditorHandle | null>(null);

  useEffect(() => {
    if (isNew || !id) return;
    let active = true;
    setLoadStatus("loading");
    getPlantilla(id)
      .then((p) => {
        if (!active) return;
        setCodigoDsl(p.codigoDsl);
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
        // Sprint 10A: si veníamos de un módulo (returnTo), ofrecer volver.
        if (returnTo && window.confirm("Plantilla guardada. ¿Volver al módulo?")) {
          navigate(returnTo);
        } else {
          navigate(`/plantillas/${created.id}${returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ""}`);
        }
      } else if (id) {
        await updatePlantilla(id, {
          ...payload,
          changelog: "Edición desde editor V3",
        });
        setSaveStatus("saved");
        setSaveMessage("Cambios guardados.");
        if (returnTo && window.confirm("Cambios guardados. ¿Volver al módulo?")) {
          navigate(returnTo);
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
        <p className="text-sm text-red-600">No se pudo cargar la plantilla.</p>
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
        <header className="flex items-center justify-between border-b border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] px-4 py-2">
          <h1 className="text-base font-semibold truncate">
            {isNew ? "Nueva plantilla" : metadata.nombre || "Plantilla"}
          </h1>
          <div className="flex items-center gap-2">
            {saveMessage && (
              <span
                className={`text-xs ${
                  saveStatus === "error" ? "text-red-600" : "text-emerald-600"
                }`}
              >
                {saveMessage}
              </span>
            )}
            <button
              type="button"
              onClick={() => void handleSave()}
              disabled={saveStatus === "saving"}
              className="rounded-md bg-[var(--c-primary,#3b82f6)] px-4 py-1.5 text-sm font-semibold text-white disabled:opacity-50"
            >
              {saveStatus === "saving" ? "Guardando…" : "Guardar"}
            </button>
          </div>
        </header>

        <div className="flex-1 min-h-0">
          <CodeEditor
            ref={editorRef}
            value={codigoDsl}
            onChange={setCodigoDsl}
            errorLine={compilation.parseError?.line ?? dslApiError?.line}
            errorCol={compilation.parseError?.col ?? dslApiError?.col}
          />
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
    </div>
  );
}
