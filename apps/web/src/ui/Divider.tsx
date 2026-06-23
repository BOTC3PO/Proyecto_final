/**
 * ui/Divider.tsx — primitivo del rediseño (División 1).
 *
 * Separador horizontal (`<hr>`) o vertical (`role="separator"` con
 * aria-orientation). Solo tokens. `spacing` aplica margen entre bloques.
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import {
  forwardRef,
  type CSSProperties,
  type HTMLAttributes,
  type Ref,
} from "react";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerSpacing = "none" | "sm" | "md" | "lg";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: DividerOrientation;
  spacing?: DividerSpacing;
};

const SPACING: Record<DividerSpacing, string> = {
  none: "var(--space-0)",
  sm: "var(--space-2)",
  md: "var(--space-4)",
  lg: "var(--space-6)",
};

const Divider = forwardRef<HTMLHRElement | HTMLSpanElement, DividerProps>(function Divider(
  { orientation = "horizontal", spacing = "md", className, style, ...rest },
  ref,
) {
  if (orientation === "vertical") {
    const vStyle: CSSProperties = {
      display: "inline-block",
      width: "1px",
      height: "100%",
      minHeight: "var(--space-5)",
      marginInline: SPACING[spacing],
      marginBlock: "var(--space-0)",
      borderWidth: "var(--space-0)",
      borderRightWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--c-border)",
      background: "transparent",
      verticalAlign: "middle",
    };
    return (
      <span
        ref={ref as Ref<HTMLSpanElement>}
        role="separator"
        aria-orientation="vertical"
        className={className}
        style={{ ...vStyle, ...style }}
        {...(rest as HTMLAttributes<HTMLSpanElement>)}
      />
    );
  }

  const hStyle: CSSProperties = {
    width: "100%",
    marginBlock: SPACING[spacing],
    marginInline: "var(--space-0)",
    borderWidth: "var(--space-0)",
    borderTopWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--c-border)",
    background: "transparent",
  };
  return (
    <hr
      ref={ref as Ref<HTMLHRElement>}
      className={className}
      style={{ ...hStyle, ...style }}
      {...rest}
    />
  );
});

export default Divider;
