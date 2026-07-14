/**
 * F7-02 — Drawer "Copiar prompt para IA".
 *
 * Reemplazo del asistente IA eliminado: arma un prompt portable (referencia
 * DSL de F7-01 + descripción del docente + contrato de salida) para pegar en
 * cualquier IA externa, y permite pegar la respuesta de vuelta (limpiando
 * fences de markdown) para insertarla en el editor. Sin servidor, sin keys —
 * el validador del editor revisa lo que se pega.
 */
import { useState } from "react";
import { buildPromptIA, limpiarRespuestaIA } from "../../vblang/llmPrompt";
import { Button, Textarea } from "../ui";

import { useI18n } from "../../i18n/I18nContext";
interface PromptIAPanelProps {
  open: boolean;
  onClose: () => void;
  /** Inserta el código limpio (sin fences) en el editor. */
  onInsert: (codigoDsl: string) => void;
}

type CopyStatus = "idle" | "copied" | "error";

export default function PromptIAPanel({ open, onClose, onInsert }: PromptIAPanelProps) {
  const { t } = useI18n();
  const [descripcion, setDescripcion] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  if (!open) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildPromptIA(descripcion));
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("error");
    }
  };

  const handleInsert = () => {
    const codigo = limpiarRespuestaIA(respuesta);
    if (!codigo) return;
    onInsert(codigo);
    setRespuesta("");
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label={t("plantillaEditor.copiarPromptParaIa")}
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-[var(--c-border,#e2e8f0)] bg-[var(--c-surface,white)] shadow-xl"
      >
        <header className="flex items-center justify-between border-b border-[var(--c-border,#e2e8f0)] px-4 py-3">
          <h2 className="text-sm font-bold text-[var(--c-text)]">{t("plantillaEditor.copiarPromptParaIa")}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("comun.cerrar")}
            className="rounded px-2 py-0.5 text-sm text-[var(--c-muted,#64748b)] hover:bg-[var(--c-bg,#f1f5f9)]"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-auto px-4 py-3 text-xs space-y-4">
          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("promptIAPanel.1DescribiElEjercicio")}</h3>
            <p className="mb-1.5 text-[var(--c-muted,#64748b)]">{t("promptIAPanel.enLenguajeNaturalTemaTipo")}</p>
            <Textarea
              aria-label={t("promptIAPanel.descripcionDelEjercicio")}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows={4}
              placeholder='Ej.: "Un ejercicio de opción múltiple sobre la tabla periódica, que pregunte la electronegatividad de un elemento al azar."'
            />
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("promptIAPanel.2CopiaElPrompt")}</h3>
            <p className="mb-1.5 text-[var(--c-muted,#64748b)]">{t("promptIAPanel.incluyeLaReferenciaDelDsl")}</p>
            <Button variant="primary" size="sm" onClick={() => void handleCopy()}>
              {copyStatus === "copied"
                ? "✓ Copiado"
                : copyStatus === "error"
                  ? "No se pudo copiar"
                  : "Copiar prompt para IA"}
            </Button>
          </section>

          <section>
            <h3 className="mb-1.5 font-bold uppercase tracking-wide text-[var(--c-muted,#64748b)]">{t("promptIAPanel.3PegaLaRespuesta")}</h3>
            <p className="mb-1.5 text-[var(--c-muted,#64748b)]">
              Pegá lo que te devolvió la IA (con o sin ```fences```) e insertalo
              en el editor. El validador revisa el código al instante.
            </p>
            <Textarea
              aria-label={t("promptIAPanel.respuestaDeLaIa")}
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              rows={6}
              placeholder={t("promptIAPanel.pegaAcaLaRespuestaDe")}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleInsert}
              disabled={!respuesta.trim()}
              className="mt-1.5"
            >{t("promptIAPanel.insertarEnElEditor")}</Button>
          </section>
        </div>
      </aside>
    </>
  );
}
