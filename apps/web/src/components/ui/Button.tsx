/**
 * Botón base del sistema de diseño (prototipo `.btn` / `.btn-*`).
 *
 * Variantes: primary · ghost · danger · icon. Tamaños: sm · md.
 * - `pressed`: para toggles → expone `aria-pressed` y estado visual activo.
 * - Variante `icon`: pensada para botones de solo ícono; **requiere** un
 *   nombre accesible (`aria-label`), exigido por tipos.
 *
 * Estiliza con utilidades Tailwind mapeadas a los tokens `--c-*` (no copia el
 * CSS crudo del prototipo) y respeta `prefers-reduced-motion`.
 */
import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "ghost" | "danger" | "icon";
export type ButtonSize = "sm" | "md";

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  /** Estado de toggle: aplica `aria-pressed` y resalte. */
  pressed?: boolean;
};

// La variante `icon` exige nombre accesible (aria-label) por tipos.
type IconProps = BaseProps & { variant: "icon"; "aria-label": string };
type NonIconProps = BaseProps & { variant?: Exclude<ButtonVariant, "icon"> };

export type ButtonProps = IconProps | NonIconProps;

const BASE =
  "inline-flex items-center justify-center gap-1.5 rounded-[var(--r-md)] font-medium " +
  "border transition-colors motion-reduce:transition-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] focus-visible:ring-offset-1 " +
  "focus-visible:ring-offset-[var(--c-surface)] " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const SIZES: Record<ButtonSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-2 text-sm",
};

const ICON_SIZES: Record<ButtonSize, string> = {
  sm: "h-7 w-7 p-0 text-sm",
  md: "h-9 w-9 p-0 text-base",
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--c-primary)] text-[var(--c-text-on-dark)] border-[var(--c-primary)] " +
    "hover:opacity-90",
  ghost:
    "bg-transparent text-[var(--c-text)] border-[var(--c-border)] " +
    "hover:bg-[var(--c-hover)]",
  danger:
    "bg-[var(--c-danger)] text-[var(--c-text-on-dark)] border-[var(--c-danger)] " +
    "hover:opacity-90",
  icon:
    "bg-transparent text-[var(--c-text)] border-transparent hover:bg-[var(--c-hover)]",
};

const PRESSED =
  "bg-[var(--c-accent-soft)] border-[var(--c-border-strong)] text-[var(--c-text)]";

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    pressed,
    className = "",
    type,
    children,
    ...rest
  } = props as BaseProps & { variant?: ButtonVariant };

  const sizeCls = variant === "icon" ? ICON_SIZES[size] : SIZES[size];
  const variantCls = pressed ? PRESSED : VARIANTS[variant];

  return (
    <button
      type={type ?? "button"}
      aria-pressed={pressed}
      className={`${BASE} ${sizeCls} ${variantCls} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
