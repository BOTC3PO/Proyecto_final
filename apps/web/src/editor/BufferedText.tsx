/**
 * editor/BufferedText.tsx — input de texto con buffer, sobre primitivos `ui/`.
 *
 * Réplica del patrón `BufferedText` del editor viejo, pero montada sobre los
 * átomos del rediseño (Field + Input/Textarea). Mientras el control tiene
 * foco, no se pisa lo que el usuario tipea desde el round-trip del AST; al
 * perder foco se normaliza al valor canónico. Si `commit` devuelve `false`
 * (el valor no parsea / no escribe), se marca inválido y se muestra el
 * mensaje de error pasado, sin mutar el AST.
 *
 * Expone `insertAtCursor` vía ref para que el editor de enunciado inserte
 * tokens de variable en la posición del caret.
 */
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
  type Ref,
} from "react";
import { Field, Input, Textarea } from "../ui";

export interface BufferedTextHandle {
  /** Inserta `token` en la posición del caret (o al final). */
  insertAtCursor: (token: string) => void;
}

export type BufferedTextProps = {
  value: string;
  /** Devuelve `true` si el texto escribe/parsea; `false` → marca inválido. */
  commit: (text: string) => boolean;
  label: ReactNode;
  help?: ReactNode;
  /** Mensaje a mostrar cuando `commit` devuelve `false`. */
  errorMessage?: ReactNode;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  /** Input numérico (type=number); sólo aplica cuando no es multiline. */
  numeric?: boolean;
  step?: number;
  min?: number;
  /** Override del id autogenerado por Field. */
  id?: string;
};

const BufferedText = forwardRef<BufferedTextHandle, BufferedTextProps>(
  function BufferedText(
    {
      value,
      commit,
      label,
      help,
      errorMessage,
      placeholder,
      multiline = false,
      rows,
      numeric = false,
      step,
      min,
      id,
    },
    ref,
  ) {
    const [text, setText] = useState(value);
    const [invalid, setInvalid] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [prevValue, setPrevValue] = useState(value);
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

    // Sync del valor canónico del AST al buffer local cuando NO hay foco
    // (patrón "ajustar estado durante el render" — sin effect, sin clobber).
    if (value !== prevValue) {
      setPrevValue(value);
      if (!isFocused) setText(value);
    }

    useImperativeHandle(
      ref,
      () => ({
        insertAtCursor: (token: string) => {
          const el = inputRef.current;
          if (!el) return;
          const start = el.selectionStart ?? text.length;
          const end = el.selectionEnd ?? text.length;
          const next = text.slice(0, start) + token + text.slice(end);
          setText(next);
          setInvalid(!commit(next));
          // Restaurar el caret después del token insertado.
          requestAnimationFrame(() => {
            const pos = start + token.length;
            try {
              el.focus();
              el.setSelectionRange(pos, pos);
            } catch {
              /* algunos inputs no soportan setSelectionRange */
            }
          });
        },
      }),
      [text, commit],
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setText(e.target.value);
      setInvalid(!commit(e.target.value));
    };

    const handleFocus = () => {
      setIsFocused(true);
    };
    const handleBlur = () => {
      setIsFocused(false);
      setText(value);
      setInvalid(false);
    };

    const errorNode = invalid ? (errorMessage ?? "Valor inválido") : undefined;
    const common = {
      value: text,
      placeholder,
      invalid,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
    };

    return (
      <Field id={id} label={label} help={help} error={errorNode}>
        {multiline ? (
          <Textarea
            ref={inputRef as Ref<HTMLTextAreaElement>}
            rows={rows}
            {...common}
          />
        ) : (
          <Input
            ref={inputRef as Ref<HTMLInputElement>}
            type={numeric ? "number" : "text"}
            step={step}
            min={min}
            {...common}
          />
        )}
      </Field>
    );
  },
);

export default BufferedText;
