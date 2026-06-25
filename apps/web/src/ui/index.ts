/**
 * ui/index.ts — barrel del set de primitivos (átomos) del rediseño.
 *
 * División 0: tokens (tokens.css) + Button + Card (demostradores).
 * División 1: el resto del set (formulario, feedback, overlay).
 *
 * Importá siempre desde la carpeta: `import { Button, Field, Input } from "@/ui"`.
 * Convive con `components/ui/` (viejo) hasta que cada división lo migre.
 */
export { default as Button } from "./Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./Button";

export { default as Card } from "./Card";
export type { CardProps, CardVariant, CardPadding } from "./Card";

// ── Formulario ────────────────────────────────────────────────────────────
export { default as Label } from "./Label";
export type { LabelProps } from "./Label";

export { default as Input } from "./Input";
export type { InputProps, InputSize } from "./Input";

export { default as Textarea } from "./Textarea";
export type { TextareaProps, TextareaSize } from "./Textarea";

export { default as Select } from "./Select";
export type { SelectProps, SelectSize } from "./Select";

export { default as Checkbox } from "./Checkbox";
export type { CheckboxProps } from "./Checkbox";

export { default as Radio } from "./Radio";
export type { RadioProps } from "./Radio";

export { RadioGroupContext } from "./RadioGroupContext";
export type { RadioGroupContextValue } from "./RadioGroupContext";

export { default as RadioGroup } from "./RadioGroup";
export type { RadioGroupProps } from "./RadioGroup";

export { default as Switch } from "./Switch";
export type { SwitchProps } from "./Switch";

export { default as Field } from "./Field";
export type { FieldProps } from "./Field";

// ── Feedback / display ────────────────────────────────────────────────────
export { default as Badge } from "./Badge";
export type { BadgeProps, BadgeVariant, BadgeSize } from "./Badge";

export { default as Alert, Callout } from "./Alert";
export type { AlertProps, AlertVariant } from "./Alert";

export { default as Spinner } from "./Spinner";
export type { SpinnerProps, SpinnerSize } from "./Spinner";

export { default as Divider } from "./Divider";
export type { DividerProps, DividerOrientation, DividerSpacing } from "./Divider";

// ── Overlay ───────────────────────────────────────────────────────────────
export { default as Modal, Dialog } from "./Modal";
export type { ModalProps, ModalSize } from "./Modal";

export { default as Tooltip } from "./Tooltip";
export type { TooltipProps, TooltipPlacement } from "./Tooltip";

export { default as Menu } from "./Menu";
export type { MenuProps, MenuAlign, MenuTriggerProps } from "./Menu";

// ── Navegación ────────────────────────────────────────────────────────────
export { default as Avatar } from "./Avatar";
export type { AvatarProps, AvatarSize, AvatarTone } from "./Avatar";

export { default as NavItem } from "./NavItem";
export type { NavItemProps, NavItemOrientation } from "./NavItem";

// ── Indicadores ──────────────────────────────────────────────────────────
export { default as Progress } from "./Progress";
export type { ProgressProps, ProgressVariant, ProgressSize } from "./Progress";

// ── Datos ────────────────────────────────────────────────────────────────
export { default as Table, TableCaption, TableHead, TableBody, TableRow, TableTh, TableTd } from "./Table";
export type { TableProps, TableVariant, TableCaptionProps, TableHeadProps, TableBodyProps, TableRowProps, TableThProps, TableTdProps } from "./Table";
