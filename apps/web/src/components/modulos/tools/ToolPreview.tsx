import { Component } from "react";
import type { ReactNode } from "react";
import type { VisualSpec } from "../../../../../../archive/visualizadores/types";
import { normalizeSpec } from "../../../../../../archive/visualizadores/normalizeSpec";
import { validateSpec } from "../../../../../../archive/visualizadores/specValidation";
import VisualizerRenderer from "../../../../../../archive/visualizadores/graficos/VisualizerRenderer";

// ─── Error boundary ───────────────────────────────────────────────────────────

type BoundaryState = { error: string | null };

class PreviewErrorBoundary extends Component<
  { children: ReactNode },
  BoundaryState
> {
  state: BoundaryState = { error: null };

  static getDerivedStateFromError(error: unknown): BoundaryState {
    const message =
      error instanceof Error ? error.message : "Error desconocido en la vista previa";
    return { error: message };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex flex-col items-center justify-center p-6 text-center text-gray-400 h-full min-h-[120px]">
          <p className="text-sm font-medium text-gray-500 mb-1">Vista previa no disponible</p>
          <p className="text-xs font-mono text-gray-300 max-w-xs truncate">{this.state.error}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── ToolPreview ──────────────────────────────────────────────────────────────

type Props = {
  spec: VisualSpec;
  /** Show validation warnings below the preview. Default: false */
  showWarnings?: boolean;
};

/**
 * Renders a live preview of a VisualSpec.
 *
 * This is the SINGLE point where normalizeSpec is called — it enriches the spec
 * (e.g. computes distribution curves) before passing it to VisualizerRenderer.
 *
 * The key is derived from kind + serialized size so the error boundary resets
 * whenever the spec changes meaningfully (not only when the kind changes).
 */
export default function ToolPreview({ spec, showWarnings = false }: Props) {
  const normalized = normalizeSpec(spec);
  const boundaryKey = `${spec.kind}-${JSON.stringify(spec).length}`;
  const { warnings } = showWarnings ? validateSpec(spec) : { warnings: [] };

  return (
    <div>
      <PreviewErrorBoundary key={boundaryKey}>
        <div className="rounded-lg overflow-hidden border border-gray-100 bg-white">
          <VisualizerRenderer spec={normalized} />
        </div>
      </PreviewErrorBoundary>
      {showWarnings && warnings.length > 0 && (
        <ul className="mt-1 space-y-0.5">
          {warnings.map((w, i) => (
            <li key={i} className="text-[10px] text-amber-500 font-mono">
              ⚠ {w}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
