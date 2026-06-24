import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

export type ProgressVariant = "primary" | "success" | "warning" | "danger";
export type ProgressSize = "sm" | "md";

export type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  label?: ReactNode;
};

const SIZES: Record<ProgressSize, string> = {
  sm: "var(--space-1)",
  md: "var(--space-2)",
};

function barColor(variant: ProgressVariant): string {
  switch (variant) {
    case "success": return "var(--c-success)";
    case "warning": return "var(--c-warning)";
    case "danger":  return "var(--c-danger)";
    case "primary":
    default:        return "var(--c-primary)";
  }
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { value, max = 100, variant = "primary", size = "md", label, className, style, ...rest },
  ref,
) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  const track: CSSProperties = {
    width: "100%",
    height: SIZES[size],
    background: "var(--c-surface-3)",
    borderRadius: "var(--r-xl)",
    overflow: "hidden",
  };

  const fill: CSSProperties = {
    width: `${pct}%`,
    height: "100%",
    background: barColor(variant),
    borderRadius: "var(--r-xl)",
    transition: "width 300ms ease",
  };

  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {label != null && (
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "var(--space-1)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xs)",
          color: "var(--c-muted)",
        }}>
          <span>{label}</span>
          <span>{Math.round(pct)}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={typeof label === "string" ? label : undefined}
        style={track}
      >
        <div style={fill} />
      </div>
    </div>
  );
});

export default Progress;
