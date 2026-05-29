/**
 * Entrada de chips (tags) accesible.
 * - Enter agrega el borrador; evita duplicados y vacíos.
 * - Backspace con borrador vacío quita el último chip.
 * - Cada chip trae una X con `aria-label`.
 *
 * Controlado: el padre maneja `value` + `onChange`.
 */
import { useState } from "react";
import Field, { type FieldOwnProps } from "./Field";
import Chip from "./Chip";

type OwnProps = FieldOwnProps & {
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
};

export type ChipInputProps = OwnProps;

export default function ChipInput(props: ChipInputProps) {
  const {
    label,
    hint,
    error,
    required,
    className,
    value,
    onChange,
    placeholder,
    disabled,
    ["aria-label"]: ariaLabel,
  } = props as ChipInputProps & { "aria-label"?: string };

  const [draft, setDraft] = useState("");

  const add = (raw: string) => {
    const t = raw.trim();
    setDraft("");
    if (t === "" || value.includes(t)) return;
    onChange([...value, t]);
  };
  const removeAt = (t: string) => onChange(value.filter((x) => x !== t));

  const name = (label !== undefined
    ? { label }
    : { "aria-label": ariaLabel as string }) as FieldOwnProps;

  return (
    <Field {...name} hint={hint} error={error} required={required} className={className}>
      {(control) => (
        <div className="flex flex-col gap-1.5">
          {value.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {value.map((t) => (
                <Chip
                  key={t}
                  onRemove={() => removeAt(t)}
                  removeLabel={`Quitar ${t}`}
                  disabled={disabled}
                >
                  {t}
                </Chip>
              ))}
            </div>
          )}
          <input
            {...control}
            type="text"
            value={draft}
            disabled={disabled}
            placeholder={placeholder}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                add(draft);
              } else if (e.key === "Backspace" && draft === "" && value.length > 0) {
                removeAt(value[value.length - 1]);
              }
            }}
            onBlur={() => add(draft)}
            className={
              "w-full rounded-[var(--r-md)] border border-[var(--c-border-strong)] " +
              "bg-[var(--c-surface)] px-3 py-1.5 text-sm text-[var(--c-text)] " +
              "placeholder:text-[var(--c-text-3)] " +
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--c-focus-ring)] " +
              "disabled:opacity-50 disabled:cursor-not-allowed"
            }
          />
        </div>
      )}
    </Field>
  );
}
