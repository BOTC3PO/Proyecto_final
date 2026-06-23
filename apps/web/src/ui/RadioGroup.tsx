/**
 * ui/RadioGroup.tsx — primitivo del rediseño (División 1).
 *
 * Contenedor a11y para un conjunto de `Radio`: `role="radiogroup"` + label
 * accesible (`aria-label` u `aria-labelledby`). Inyecta `name` (autogenerado
 * vía `useId` salvo override), el valor actual y el handler a cada `Radio`
 * hijo a través de `RadioGroupContext`.
 *
 * Uso:
 *   <RadioGroup aria-label="Dificultad" value={v} onValueChange={setV}>
 *     <Radio value="baja" label="Baja" />
 *     <Radio value="alta" label="Alta" />
 *   </RadioGroup>
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import { forwardRef, useId, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import { RadioGroupContext, type RadioGroupContextValue } from "./RadioGroupContext";

export type RadioGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Valor seleccionado (`null` = ninguno). */
  value?: string | null;
  onValueChange?: (value: string) => void;
  /** Override del `name` interno (autogenerado por defecto). */
  name?: string;
  children?: ReactNode;
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  { value = null, onValueChange, name, className, style, children, ...rest },
  ref,
) {
  const autoName = useId();
  const ctx: RadioGroupContextValue = {
    name: name ?? autoName,
    value,
    onChange: onValueChange ?? (() => {}),
  };

  const base: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "var(--c-text)",
  };

  return (
    <div ref={ref} role="radiogroup" className={className} style={{ ...base, ...style }} {...rest}>
      <RadioGroupContext.Provider value={ctx}>{children}</RadioGroupContext.Provider>
    </div>
  );
});

export default RadioGroup;
