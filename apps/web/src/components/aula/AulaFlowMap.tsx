/**
 * "Niveles por aula con mapa de flujo" — diagrama de los módulos
 * asignados a un aula, conectados por sus dependencias.
 *
 * El layout (BFS por profundidad desde los nodos sin prerrequisitos,
 * distribución en columnas) está adaptado de
 * `archive/visualizadores/graficos/FlowDiagramVisualizer.tsx`. Las
 * tarjetas (icono de estado + barra de progreso + tooltip al pasar el
 * mouse sobre un módulo bloqueado) siguen el mockup de
 * `tareas_pendientes/Mapa de Modulos Interactivo.html`.
 */
import { useState } from "react";
import type { MapaModuloLink, MapaModuloNodo } from "../../services/clase-modulos";
import { useI18n } from "../../i18n/I18nContext";
import {
  computeFlowLayout,
  FLOW_NODE_WIDTH as NODE_WIDTH,
  FLOW_NODE_HEIGHT as NODE_HEIGHT,
  FLOW_SIDE_PADDING as SIDE_PADDING,
  FLOW_TOP_PADDING as TOP_PADDING,
} from "../../lib/flowLayout";

// Convención ya usada en aula.tsx: `progreso_modulos` no guarda un
// porcentaje real, sólo `status` — completado/en_progreso/el resto se
// aproximan a 100/50/0 para la barra.
const PROGRESS_BY_STATUS: Record<MapaModuloNodo["status"], number> = {
  completado: 100,
  en_progreso: 50,
  no_iniciado: 0,
};

type NodeStyle = { border: string; bg: string; accent: string; title: string; track: string };

function nodeStyle(nodo: MapaModuloNodo): NodeStyle {
  if (nodo.isLocked) {
    return { border: "var(--c-border)", bg: "var(--c-bg)", accent: "var(--c-muted)", title: "var(--c-muted)", track: "var(--c-border)" };
  }
  if (nodo.status === "completado") {
    return { border: "var(--c-success)", bg: "var(--c-success-soft)", accent: "var(--c-success)", title: "var(--c-text)", track: "var(--c-border)" };
  }
  if (nodo.status === "en_progreso") {
    return {
      border: "var(--c-primary)",
      bg: "color-mix(in srgb, var(--c-primary) 12%, var(--c-surface))",
      accent: "var(--c-primary)",
      title: "var(--c-text)",
      track: "var(--c-border)",
    };
  }
  return { border: "var(--c-border-strong)", bg: "var(--c-surface)", accent: "var(--c-muted)", title: "var(--c-text)", track: "var(--c-border)" };
}

export type AulaFlowMapProps = {
  modulos: MapaModuloNodo[];
  links: MapaModuloLink[];
  onSelectModulo: (moduloId: string) => void;
};

export default function AulaFlowMap({ modulos, links, onSelectModulo }: AulaFlowMapProps) {
  const { t } = useI18n();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const layout = computeFlowLayout(modulos, links);
  const width = Math.max(layout.width, NODE_WIDTH + SIDE_PADDING * 2);
  const height = Math.max(layout.height, NODE_HEIGHT + TOP_PADDING * 2);
  const lockedById = new Map(modulos.map((n) => [n.id, n.isLocked]));

  return (
    <div
      data-testid="aula-flow-map"
      aria-label="Mapa de módulos del aula"
      style={{ position: "relative", width, height }}
    >
      <svg width={width} height={height} style={{ position: "absolute", left: 0, top: 0 }}>
        {links.map((link) => {
          const source = layout.positions.get(link.sourceId);
          const target = layout.positions.get(link.targetId);
          if (!source || !target) return null;
          const startX = source.x + NODE_WIDTH;
          const startY = source.y + NODE_HEIGHT / 2;
          const endX = target.x;
          const endY = target.y + NODE_HEIGHT / 2;
          const targetLocked = lockedById.get(link.targetId);
          return (
            <path
              key={link.id}
              d={`M ${startX} ${startY} C ${startX + 70} ${startY}, ${endX - 70} ${endY}, ${endX} ${endY}`}
              fill="none"
              stroke={targetLocked ? "var(--c-border)" : "var(--c-muted)"}
              strokeWidth={2}
              strokeDasharray={targetLocked ? "5,5" : undefined}
            />
          );
        })}
      </svg>

      {modulos.map((nodo) => {
        const position = layout.positions.get(nodo.id);
        if (!position) return null;
        const style = nodeStyle(nodo);
        const clickable = !nodo.isLocked;
        const progress = PROGRESS_BY_STATUS[nodo.status];
        const stateLabel = nodo.isLocked
          ? t("moduloDetail.moduloBloqueado")
          : nodo.status === "completado"
            ? t("moduloDetail.completado")
            : nodo.status === "en_progreso"
              ? t("moduloDetail.enProgreso")
              : t("aulaMapaModulos.disponible");
        const requirement =
          nodo.isLocked && nodo.missingDependencies.length > 0
            ? `${t("moduloDetail.completaPrimero")} ${nodo.missingDependencies.map((d) => d.title).join(", ")}`
            : null;

        return (
          <div
            key={nodo.id}
            style={{ position: "absolute", left: position.x, top: position.y, width: NODE_WIDTH }}
            onMouseEnter={() => nodo.isLocked && setHoveredId(nodo.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              role={clickable ? "button" : undefined}
              tabIndex={clickable ? 0 : undefined}
              aria-label={requirement ? `${nodo.title} — ${stateLabel}. ${requirement}` : `${nodo.title} — ${stateLabel}`}
              data-testid={`mapa-nodo-${nodo.id}`}
              title={requirement ?? undefined}
              onClick={clickable ? () => onSelectModulo(nodo.id) : undefined}
              onKeyDown={
                clickable
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelectModulo(nodo.id);
                      }
                    }
                  : undefined
              }
              style={{
                boxSizing: "border-box",
                width: NODE_WIDTH,
                height: NODE_HEIGHT,
                padding: "14px 16px",
                borderRadius: 14,
                border: `2px solid ${style.border}`,
                background: style.bg,
                display: "flex",
                flexDirection: "column",
                cursor: clickable ? "pointer" : "help",
                opacity: nodo.isLocked ? 0.85 : 1,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {nodo.isLocked && <span style={{ fontSize: 12 }}>🔒</span>}
                {!nodo.isLocked && nodo.status === "completado" && (
                  <span style={{ fontSize: 12, color: style.accent, fontWeight: 700 }}>✓</span>
                )}
                {!nodo.isLocked && nodo.status === "en_progreso" && (
                  <span
                    className="animate-pulse"
                    style={{ width: 7, height: 7, borderRadius: "50%", background: style.accent, display: "inline-block" }}
                  />
                )}
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".02em", textTransform: "uppercase", color: style.accent }}>
                  {stateLabel}
                </span>
              </div>

              <div style={{ fontSize: 15, fontWeight: 700, color: style.title, lineHeight: 1.3, margin: "10px 0 0" }}>
                {nodo.title}
              </div>

              <div style={{ flex: 1 }} />

              {!nodo.isLocked && (
                <div
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: 6, borderRadius: 3, background: style.track, overflow: "hidden" }}
                >
                  <div style={{ height: "100%", borderRadius: 3, width: `${progress}%`, background: style.accent }} />
                </div>
              )}
            </div>

            {requirement && hoveredId === nodo.id && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: -8,
                  transform: "translateY(-100%)",
                  width: 220,
                  background: "var(--c-text)",
                  color: "var(--c-surface)",
                  fontSize: 12,
                  lineHeight: 1.5,
                  padding: "10px 12px",
                  borderRadius: 10,
                  boxShadow: "0 12px 24px rgba(0,0,0,.25)",
                  zIndex: 20,
                }}
              >
                {requirement}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
