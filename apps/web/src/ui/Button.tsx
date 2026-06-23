/**
 * ui/Button.tsx — primitivo DEMOSTRADOR del rediseño.
 *
 * Plantilla del patrón que seguirán las próximas divisiones:
 * todos los valores visuales son tokens (--space-*, --text-*, --fw-*,
 * --c-*, --r-*, --shadow-*). Cero literales hardcodeados.
 *
 * Convive con `components/ui/Button.tsx` (viejo) hasta que cada división
 * lo migre. Misma API básica (variant / size / pressed / icon).
 */
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost" | "danger" | "icon";
export type ButtonSize = "sm" | "md";

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  /** Estado de toggle: aplica `aria-pressed` y resalte. */
  pressed?: boolean;
  children?: ReactNode;
};

// La variante `icon` exige nombre accesible (aria-label) por tipos.
type IconProps = BaseProps & { variant: "icon"; "aria-label": string };
type NonIconProps = BaseProps & { variant?: Exclude<ButtonVariant, "icon"> };

export type ButtonProps = IconProps | NonIconProps;

const SIZES: Record<ButtonSize, { padX: string; padY: string; fontSize: string; lineHeight: string }> = {
  sm: {
    padX: "var(--space-3)",
    padY: "var(--space-1)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--lh-tight)",
  },
  md: {
    padX: "var(--space-4)",
    padY: "var(--space-2)",
    fontSize: "var(--text-base)",
    lineHeight: "var(--lh-tight)",
  },
};

const ICON_SIZES: Record<ButtonSize, { box: string; fontSize: string }> = {
  sm: { box: "var(--space-6)", fontSize: "var(--text-sm)" },
  md: { box: "var(--space-7)", fontSize: "var(--text-base)" },
};

function variantStyle(variant: ButtonVariant, pressed: boolean): CSSProperties {
  if (pressed) {
    return {
      background: "var(--c-accent-soft)",
      color: "var(--c-text)",
      borderColor: "var(--c-border-strong)",
    };
  }
  switch (variant) {
    case "primary":
      return {
        background: "var(--c-primary)",
        color: "var(--c-text-on-dark)",
        borderColor: "var(--c-primary)",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--c-text)",
        borderColor: "var(--c-border)",
      };
    case "danger":
      return {
        background: "var(--c-danger)",
        color: "var(--c-text-on-dark)",
        borderColor: "var(--c-danger)",
      };
    case "icon":
      return {
        background: "transparent",
        color: "var(--c-text)",
        borderColor: "transparent",
      };
  }
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    pressed,
    className,
    type,
    children,
    style,
    disabled,
    ...rest
  } = props as BaseProps & { variant?: ButtonVariant };

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    borderRadius: "var(--r-md)",
    borderWidth: "1px",
    borderStyle: "solid",
    fontWeight: "var(--fw-medium)",
    fontFamily: "var(--font-sans)",
    transition: "background-color 120ms ease, border-color 120ms ease, opacity 120ms ease",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  const sizeStyle: CSSProperties =
    variant === "icon"
      ? {
          width: ICON_SIZES[size].box,
          height: ICON_SIZES[size].box,
          padding: "var(--space-0)",
          fontSize: ICON_SIZES[size].fontSize,
          lineHeight: "var(--lh-tight)",
        }
      : {
          paddingInline: SIZES[size].padX,
          paddingBlock: SIZES[size].padY,
          fontSize: SIZES[size].fontSize,
          lineHeight: SIZES[size].lineHeight,
        };

  return (
    <button
      type={type ?? "button"}
      aria-pressed={pressed}
      disabled={disabled}
      className={className}
      style={{ ...base, ...sizeStyle, ...variantStyle(variant, !!pressed), ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
