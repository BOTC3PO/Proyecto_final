/**
 * Sistema de diseño VB — componentes base (Fase D.2).
 *
 * Todos consumen los tokens `--c-*` (definidos en `index.css` para cada tema,
 * con fallbacks globales en `:root`), así que **cambian de color con el tema**
 * sin tocar el componente. No copian el CSS crudo del prototipo: se estilan con
 * utilidades Tailwind mapeadas a los tokens.
 *
 * Reglas de accesibilidad horneadas (no son opcionales):
 *  - **Nombre accesible obligatorio:** `Field` / `Input` / `Select` / `Textarea`
 *    / `ChipInput` exigen `label` (visible) **o** `aria-label` por tipos.
 *    `Button` variante `icon` exige `aria-label`.
 *  - **Toggles:** `Button` con prop `pressed` expone `aria-pressed`.
 *  - **Tabs:** patrón ARIA completo (tablist/tab/tabpanel, roving tabindex,
 *    navegación con flechas/Home/End).
 *  - **Estado de guardado:** `TopBar` lo anuncia con `aria-live="polite"`.
 *  - **Movimiento:** las transiciones usan `motion-reduce:transition-none`
 *    (se refuerza globalmente en D.4).
 *  - **Foco visible:** todos los interactivos llevan `focus-visible:ring`.
 */
export { default as Button } from "./Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./Button";

export { Card, CardHead, CardBody, CardFoot } from "./Card";

export { default as Field, CONTROL_CLS } from "./Field";
export type { FieldOwnProps, FieldControlProps, AccessibleName } from "./Field";

export { default as Input } from "./Input";
export type { InputProps } from "./Input";
export { default as Select } from "./Select";
export type { SelectProps } from "./Select";
export { default as Textarea } from "./Textarea";
export type { TextareaProps } from "./Textarea";

export { default as Tabs } from "./Tabs";
export type { TabsProps, TabItem } from "./Tabs";

export { default as Chip } from "./Chip";
export type { ChipProps } from "./Chip";
export { default as ChipInput } from "./ChipInput";
export type { ChipInputProps } from "./ChipInput";

export { default as Pill } from "./Pill";
export type { PillProps, PillTone } from "./Pill";

export { default as EmptyState } from "./EmptyState";
export type { EmptyStateProps } from "./EmptyState";

export { default as TopBar } from "./TopBar";
export type { TopBarProps, SaveStatus } from "./TopBar";

export { PropertiesPanel, PanelSection } from "./PropertiesPanel";
export type { PropertiesPanelProps, PanelSectionProps } from "./PropertiesPanel";

export { default as VisuallyHidden } from "./VisuallyHidden";
export type { VisuallyHiddenProps } from "./VisuallyHidden";
