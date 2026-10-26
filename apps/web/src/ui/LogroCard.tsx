/**
 * ui/LogroCard.tsx — tarjeta de logro para el tab "Logros" de Perfil.
 *
 * 2 variantes:
 *  - "tier": logro con nota (0-100%) — 3 bandas de color (Común/Dorado/
 *    Platino) + una intensidad continua dentro de cada banda (más
 *    distintivos cerca del techo de la banda) + un remate único al
 *    llegar exactamente a 100%. <60% se muestra bloqueado.
 *  - "binario": logro sin nota (oficios, profesiones, umbrales de
 *    cantidad de módulos) — sólo obtenido/no obtenido, sin animación.
 *
 * Presentacional puro: no llama useI18n, recibe los textos ya
 * traducidos (mismo patrón que el resto de apps/web/src/ui/).
 * Sólo tokens `var(--c-*)` — nunca un color hardcodeado (ui/tokens.md).
 * Animaciones de un solo disparo, neutralizadas gratis por la regla
 * global `prefers-reduced-motion` de index.css.
 */
import type { CSSProperties } from "react";
import styles from "./LogroCard.module.css";

export type LogroTier = "bloqueado" | "comun" | "dorado" | "platino";

export type TierInfo = {
  tier: LogroTier;
  /** Posición dentro de la banda del tier, 0-1. 0 = piso de la banda, 1 = techo. */
  intensidad: number;
  /** true sólo en 100% exacto — remate único encima de Platino. */
  esPerfecto: boolean;
};

/** Común 60-79 · Dorado 80-94 · Platino 95-100, con intensidad continua
 * dentro de cada banda (no un escalón plano) y un flag aparte para el
 * 100% exacto (el "premio único", no una 4ta banda de color). */
export function getTier(porcentaje: number): TierInfo {
  const pct = Math.max(0, Math.min(100, porcentaje));
  if (pct >= 95) {
    return { tier: "platino", intensidad: (pct - 95) / 5, esPerfecto: pct === 100 };
  }
  if (pct >= 80) {
    return { tier: "dorado", intensidad: (pct - 80) / 14, esPerfecto: false };
  }
  if (pct >= 60) {
    return { tier: "comun", intensidad: (pct - 60) / 19, esPerfecto: false };
  }
  return { tier: "bloqueado", intensidad: 0, esPerfecto: false };
}

export type LogroCardProps =
  | {
      kind: "tier";
      icono: string;
      label: string;
      descripcion: string;
      porcentaje: number;
      /** Ya traducido, ej. "Dorado · 88%" / "Bloqueado". */
      tierLabel: string;
    }
  | {
      kind: "binario";
      icono: string;
      label: string;
      descripcion: string;
      obtenido: boolean;
      /** Ya traducido: "Completado" / "No obtenido". */
      estadoLabel: string;
    };

const CARD_CLASS: Record<LogroTier, string> = {
  bloqueado: styles.cardBloqueado,
  comun: styles.cardComun,
  dorado: styles.cardDorado,
  platino: styles.cardPlatino,
};
const ICON_CLASS: Record<LogroTier, string> = {
  bloqueado: styles.iconBloqueado,
  comun: styles.iconComun,
  dorado: styles.iconDorado,
  platino: styles.iconPlatino,
};
const META_CLASS: Record<LogroTier, string> = {
  bloqueado: styles.metaBloqueado,
  comun: styles.metaComun,
  dorado: styles.metaDorado,
  platino: styles.metaPlatino,
};
const BADGE_SYMBOL: Partial<Record<LogroTier, string>> = {
  dorado: "★",
  platino: "◆",
};

export default function LogroCard(props: LogroCardProps) {
  if (props.kind === "binario") {
    const { icono, label, descripcion, obtenido, estadoLabel } = props;
    return (
      <div className={`${styles.card} ${obtenido ? styles.cardCompletado : styles.cardBloqueado}`}>
        <div className={`${styles.icon} ${obtenido ? styles.iconCompletado : styles.iconBloqueado}`}>
          <span style={{ position: "relative", zIndex: 1 }}>{icono}</span>
        </div>
        <div className={styles.body}>
          <div className={`${styles.label} ${obtenido ? "" : styles.labelBloqueado}`}>{label}</div>
          <div className={styles.descripcion}>{descripcion}</div>
          <div className={`${styles.meta} ${obtenido ? styles.metaCompletado : styles.metaBloqueado}`}>
            {estadoLabel}
          </div>
        </div>
      </div>
    );
  }

  const { icono, label, descripcion, porcentaje, tierLabel } = props;
  const { tier, intensidad, esPerfecto } = getTier(porcentaje);

  // CSS custom properties: la intensidad escala el radio del anillo y el
  // shine extra sólo tiene efecto real dentro de Platino (Común/Dorado no
  // usan --shine-extra en sus keyframes).
  const iconStyle: CSSProperties = {
    ["--ring-radius" as string]: tier === "platino" ? `${16 + intensidad * 8}px` : `${12 + intensidad * 6}px`,
    ["--shine-extra" as string]: esPerfecto ? "0.4s" : "0s",
  };
  const sparkCount = tier === "platino" ? Math.max(2, Math.round(2 + intensidad * 2)) : 0;

  return (
    <div className={`${styles.card} ${CARD_CLASS[tier]} ${esPerfecto ? styles.cardPerfecto : ""}`}>
      <div className={`${styles.icon} ${ICON_CLASS[tier]}`} style={iconStyle}>
        <span style={{ position: "relative", zIndex: 1 }}>{esPerfecto ? "👑" : icono}</span>
        {tier === "platino" && (
          <div className={styles.shine} />
        )}
        {tier === "platino" &&
          Array.from({ length: sparkCount }).map((_, i) => (
            <span key={i} className={`${styles.spark} ${styles[`spark${(i % 4) + 1}`]}`}>
              ✦
            </span>
          ))}
        {(tier === "dorado" || tier === "platino") && (
          <span className={styles.badge} style={{ color: `var(--c-tier-${tier})` }}>
            {esPerfecto ? "👑" : BADGE_SYMBOL[tier]}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <div className={`${styles.label} ${tier === "bloqueado" ? styles.labelBloqueado : ""}`}>{label}</div>
        <div className={styles.descripcion}>{descripcion}</div>
        <div className={`${styles.meta} ${META_CLASS[tier]}`}>{tierLabel}</div>
      </div>
    </div>
  );
}
