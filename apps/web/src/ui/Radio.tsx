/**
 * ui/Radio.tsx — primitivo del rediseño (División 1).
 *
 * `<input type="radio">` nativo recoloreado con `accent-color` (token
 * `--c-primary)`). Mismo contrato de a11y que Checkbox: teclado, AT y
 * multi-tema gratis; foco accesible vía regla global `:focus-visible`.
 *
 * Dentro de `RadioGroup` se conecta automáticamente (name / checked /
 * onChange) vía `RadioGroupContext`. Suelo, usa sus props propias.
 *
 * El contexto vive acá (no en RadioGroup) para evitar import circular:
 * RadioGroup → Radio (one-way).
 *
 * Patrón replicado de Button/Card: solo tokens, forwardRef.
 */
import {
  forwardRef,
  useContext,
  type ChangeEvent,
  type CSSProperties,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { RadioGroupContext } from "./RadioGroupContext";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  /** Valor que representa esta opción dentro del grupo. */
  value: string;
  label?: ReactNode;
  children?: ReactNode;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { value, label, children, className, style, disabled, name, checked, onChange, ...rest },
  ref,
) {
  const ctx = useContext(RadioGroupContext);

  const control: CSSProperties = {
    width: "var(--space-4)",
    height: "var(--space-4)",
    margin: "var(--space-0)",
    accentColor: "var(--c-primary)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    flex: "0 0 auto",
  };

  const text = label ?? children;
  const resolvedName = name ?? ctx?.name;
  const resolvedChecked = ctx ? ctx.value === value : checked;
  const resolvedOnChange = ctx
    ? (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) ctx.onChange(value);
        onChange?.(e);
      }
    : onChange;

  if (!text) {
    return (
      <input
        ref={ref}
        type="radio"
        value={value}
        name={resolvedName}
        checked={resolvedChecked}
        onChange={resolvedOnChange}
        disabled={disabled}
        className={className}
        style={{ ...control, ...style }}
        {...rest}
      />
    );
  }

  const wrapper: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--lh-normal)",
    color: "var(--c-text)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <label className={className} style={{ ...wrapper, ...style }}>
      <input
        ref={ref}
        type="radio"
        value={value}
        name={resolvedName}
        checked={resolvedChecked}
        onChange={resolvedOnChange}
        disabled={disabled}
        style={control}
        {...rest}
      />
      <span>{text}</span>
    </label>
  );
});

export default Radio;
