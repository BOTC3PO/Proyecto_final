/**
 * Re-export del átomo ui/Toast para compatibilidad de imports existentes.
 * Nuevos consumidores deberían importar desde `@/ui` directamente.
 */
export { default } from "../ui/Toast";
export type { ToastAction, ToastProps, ToastVariant } from "../ui/Toast";
