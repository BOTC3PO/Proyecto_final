/**
 * Mapa visual de dependencias para el editor de módulos — mismo layout
 * (BFS por profundidad, `computeFlowLayout`) y look de tarjeta que
 * `AulaFlowMap`, pero la capa de arriba es de EDICIÓN en vez de progreso:
 * click en un módulo agrega/quita la dependencia del módulo que se está
 * editando, no navega a nada. Las aristas entre OTROS módulos (no el
 * actual) se muestran de fondo para dar contexto de la red completa y
 * ayudar a detectar ciclos a simple vista.
 */
import {
  computeFlowLayout,
  FLOW_NODE_WIDTH as NODE_WIDTH,
  FLOW_NODE_HEIGHT as NODE_HEIGHT,
  FLOW_SIDE_PADDING as SIDE_PADDING,
  FLOW_TOP_PADDING as TOP_PADDING,
} from "../../lib/flowLayout";
import {
  getRequiredDependencyIds,
  getUnlocksDependencyIds,
} from "../../domain/module/module-dependencies";
import type { ModuleDependency } from "../../domain/module/module.types";
import { useI18n } from "../../i18n/I18nContext";

export type DependenciasFlowMapModulo = {
  id: string;
  title: string;
  dependencies: Array<ModuleDependency | string>;
};

export type DependenciasFlowMapProps = {
  /** Candidatos a dependencia — NO incluye el módulo que se está editando. */
  modulos: DependenciasFlowMapModulo[];
  /** Id estable del módulo en edición (sintético si todavía no se guardó). */
  currentModuleId: string;
  currentModuleTitle: string;
  /** `form.dependencies` en vivo — la fuente de verdad mientras se edita. */
  currentModuleDependencies: Array<ModuleDependency | string>;
  onToggle: (mod: { id: string; title: string }) => void;
};

type NodeKind = "current" | "selected" | "available";

function nodeStyle(kind: NodeKind) {
  if (kind === "current") {
    return {
      border: "var(--c-primary)",
      bg: "color-mix(in srgb, var(--c-primary) 14%, var(--c-surface))",
      accent: "var(--c-primary)",
    };
  }
  if (kind === "selected") {
    return { border: "var(--c-success)", bg: "var(--c-success-soft)", accent: "var(--c-success)" };
  }
  return { border: "var(--c-border-strong)", bg: "var(--c-surface)", accent: "var(--c-muted)" };
}

export default function DependenciasFlowMap({
  modulos,
  currentModuleId,
  currentModuleTitle,
  currentModuleDependencies,
  onToggle,
}: DependenciasFlowMapProps) {
  const { t } = useI18n();
  const selectedIds = new Set([
    ...getRequiredDependencyIds(currentModuleDependencies),
    ...getUnlocksDependencyIds(currentModuleDependencies),
  ]);

  const nodes = [
    { id: currentModuleId, title: currentModuleTitle, dependencies: currentModuleDependencies },
    ...modulos,
  ];
  const nodeById = new Map(nodes.map((n) => [n.id, n]));

  const links = nodes.flatMap((n) => {
    const out: Array<{ id: string; sourceId: string; targetId: string }> = [];
    getRequiredDependencyIds(n.dependencies).forEach((depId) => {
      if (!nodeById.has(depId)) return;
      out.push({ id: `${depId}->${n.id}:req`, sourceId: depId, targetId: n.id });
    });
    getUnlocksDependencyIds(n.dependencies).forEach((depId) => {
      if (!nodeById.has(depId)) return;
      out.push({ id: `${n.id}->${depId}:unl`, sourceId: n.id, targetId: depId });
    });
    return out;
  });

  const layout = computeFlowLayout(nodes, links);
  const width = Math.max(layout.width, NODE_WIDTH + SIDE_PADDING * 2);
  const height = Math.max(layout.height, NODE_HEIGHT + TOP_PADDING * 2);

  return (
    <div
      data-testid="dependencias-flow-map"
      aria-label={t("dependenciasFlowMap.mapaDeDependencias")}
      style={{ position: "relative", width, height, overflow: "auto" }}
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
          const touchesCurrent = link.sourceId === currentModuleId || link.targetId === currentModuleId;
          return (
            <path
              key={link.id}
              d={`M ${startX} ${startY} C ${startX + 70} ${startY}, ${endX - 70} ${endY}, ${endX} ${endY}`}
              fill="none"
              stroke={touchesCurrent ? "var(--c-primary)" : "var(--c-border)"}
              strokeWidth={touchesCurrent ? 2.5 : 2}
            />
          );
        })}
      </svg>

      {nodes.map((node) => {
        const position = layout.positions.get(node.id);
        if (!position) return null;
        const isCurrent = node.id === currentModuleId;
        const isSelected = !isCurrent && selectedIds.has(node.id);
        const kind: NodeKind = isCurrent ? "current" : isSelected ? "selected" : "available";
        const style = nodeStyle(kind);
        const clickable = !isCurrent;
        const stateLabel = isCurrent
          ? t("dependenciasFlowMap.esteModulo")
          : isSelected
            ? t("dependenciasFlowMap.dependenciaAgregada")
            : t("dependenciasFlowMap.clickParaAgregar");

        return (
          <div
            key={node.id}
            style={{ position: "absolute", left: position.x, top: position.y, width: NODE_WIDTH }}
          >
            <div
              role={clickable ? "button" : undefined}
              tabIndex={clickable ? 0 : undefined}
              aria-pressed={clickable ? isSelected : undefined}
              aria-label={`${node.title} — ${stateLabel}`}
              data-testid={`dep-mapa-nodo-${node.id}`}
              onClick={clickable ? () => onToggle({ id: node.id, title: node.title }) : undefined}
              onKeyDown={
                clickable
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onToggle({ id: node.id, title: node.title });
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
                cursor: clickable ? "pointer" : "default",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {isCurrent && <span style={{ fontSize: 12 }} aria-hidden="true">📍</span>}
                {isSelected && <span style={{ fontSize: 12, color: style.accent, fontWeight: 700 }} aria-hidden="true">✓</span>}
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".02em", textTransform: "uppercase", color: style.accent }}>
                  {stateLabel}
                </span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--c-text)", lineHeight: 1.3, margin: "10px 0 0" }}>
                {node.title}
              </div>
              <div style={{ flex: 1 }} />
              {!isCurrent && (
                <span style={{ fontSize: 11, color: "var(--c-muted)" }}>
                  {isSelected
                    ? t("dependenciasFlowMap.clickParaQuitar")
                    : t("dependenciasFlowMap.clickParaAgregar")}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
