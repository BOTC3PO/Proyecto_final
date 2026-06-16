/**
 * Combobox de palabras conectado al diccionario (WO09).
 *
 * Acelera la autoría de ejercicios de lengua (analisis_sintactico /
 * identificar_palabras): autocompleta palabras con `prefixPalabra` y valida
 * contra el diccionario con `lookupPalabra`, avisando (sin bloquear) si la
 * palabra no existe (posible typo).
 *
 * Accesibilidad — patrón WAI-ARIA `combobox` + `listbox`:
 *  - input `role="combobox"` con `aria-expanded`, `aria-controls`,
 *    `aria-autocomplete="list"` y `aria-activedescendant`.
 *  - lista `role="listbox"` con `role="option"`; navegable por teclado
 *    (↑/↓ mueven el resaltado, Enter elige, Esc cierra).
 *  - nombre accesible vía `aria-label` (uso inline en listas numeradas).
 *  - el aviso de validación se anuncia en una región `aria-live`.
 *
 * `lookupPalabra` devuelve `null` ante diccionario no disponible (no hay
 * backend) y `{ found:false }` cuando la palabra realmente no existe. Sólo el
 * segundo caso dispara el aviso: si el servicio no responde, no molestamos.
 */
import { useEffect, useId, useRef, useState } from "react";
import {
  lookupPalabra,
  prefixPalabra,
  type EntradaDiccionario,
  type LookupResult,
} from "../../services/diccionario";

export interface PalabraComboboxProps {
  value: string;
  onChange: (value: string) => void;
  /** Nombre accesible del control (se aplica como aria-label). */
  label: string;
  placeholder?: string;
  className?: string;
  /** Mínimo de caracteres antes de consultar el diccionario. Default 2. */
  minChars?: number;
  /**
   * Notifica el resultado del lookup de la palabra actual (debounced). `entry`
   * es `null` si no se encontró o el diccionario no está disponible. Útil para
   * sugerir la categoría gramatical desde el AST padre.
   */
  onLookup?: (word: string, entry: EntradaDiccionario | null) => void;
  /** Inyectables para tests; por defecto pegan al servicio real. */
  fetchPrefix?: (q: string, lang: string) => Promise<string[]>;
  fetchLookup?: (word: string, lang: string) => Promise<LookupResult | null>;
  /**
   * QA-FIX-10: idioma del diccionario. Se pasa a `fetchPrefix` y
   * `fetchLookup`. Default "es" (compatibilidad con consumidores
   * existentes). En la práctica lo setea el `<LangSelector>` del
   * editor de plantillas.
   */
  lang?: string;
}

const DEBOUNCE_MS = 200;

export default function PalabraCombobox({
  value,
  onChange,
  label,
  placeholder,
  className,
  minChars = 2,
  onLookup,
  fetchPrefix = prefixPalabra,
  fetchLookup = lookupPalabra,
  lang = "es",
}: PalabraComboboxProps) {
  const baseId = useId();
  const listId = `${baseId}-listbox`;
  const warnId = `${baseId}-warn`;

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [active, setActive] = useState(-1);
  const [notFound, setNotFound] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  // El callback puede cambiar en cada render; lo guardamos en ref para no
  // re-disparar el efecto debounced y para llamar siempre a la última versión.
  const onLookupRef = useRef(onLookup);
  useEffect(() => {
    onLookupRef.current = onLookup;
  });

  // QA-FIX-10: el lang entra al efecto para que cambiar el idioma
  // re-dispare la consulta con el nuevo `lang`.
  useEffect(() => {
    const q = value.trim();
    if (q.length < minChars) {
      setOptions([]);
      setNotFound(false);
      return;
    }
    let cancelled = false;
    const handle = setTimeout(() => {
      void Promise.all([fetchPrefix(q, lang), fetchLookup(q, lang)]).then(
        ([sugs, look]) => {
          if (cancelled) return;
          setOptions(sugs);
          setActive(-1);
          // Sólo avisamos cuando el diccionario respondió "no existe".
          setNotFound(look !== null && !look.found);
          onLookupRef.current?.(q, look && look.found ? look.entry : null);
        }
      );
    }, DEBOUNCE_MS);
    return () => {
      cancelled = true;
      clearTimeout(handle);
    };
  }, [value, minChars, fetchPrefix, fetchLookup, lang]);

  // Cerrar al hacer clic fuera.
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const select = (word: string) => {
    onChange(word);
    setOpen(false);
    setActive(-1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open && options.length > 0) {
        setOpen(true);
        setActive(0);
        return;
      }
      if (options.length > 0) {
        setActive((i) => Math.min(i + 1, options.length - 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (open && options.length > 0) {
        setActive((i) => Math.max(i - 1, 0));
      }
    } else if (e.key === "Enter") {
      if (open && active >= 0 && active < options.length) {
        e.preventDefault();
        select(options[active]);
      }
    } else if (e.key === "Escape") {
      if (open) {
        e.preventDefault();
        setOpen(false);
        setActive(-1);
      }
    }
  };

  const showList = open && options.length > 0;
  const activeId = active >= 0 ? `${listId}-opt-${active}` : undefined;

  return (
    <div ref={rootRef} className="relative">
      <input
        type="text"
        role="combobox"
        aria-label={label}
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={activeId}
        aria-invalid={notFound || undefined}
        aria-describedby={notFound ? warnId : undefined}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          if (options.length > 0) setOpen(true);
        }}
        onKeyDown={onKeyDown}
        className={
          className ??
          "w-full rounded border px-2 py-1 text-sm " +
            (notFound ? "border-amber-500" : "border-[var(--c-border,#cbd5e1)]")
        }
      />

      <ul
        id={listId}
        role="listbox"
        aria-label={label}
        hidden={!showList}
        className="absolute z-10 mt-0.5 max-h-48 w-full overflow-auto rounded border border-[var(--c-border,#cbd5e1)] bg-white shadow-md"
      >
        {options.map((opt, i) => (
          <li
            key={opt}
            id={`${listId}-opt-${i}`}
            role="option"
            aria-selected={i === active}
            // mousedown (no click) para no perder el foco del input antes de elegir.
            onMouseDown={(e) => {
              e.preventDefault();
              select(opt);
            }}
            onMouseEnter={() => setActive(i)}
            className={
              "cursor-pointer px-2 py-1 text-sm " +
              (i === active
                ? "bg-[var(--c-primary,#3b82f6)] text-white"
                : "text-[var(--c-text,#0f172a)]")
            }
          >
            {opt}
          </li>
        ))}
      </ul>

      {notFound && (
        <span
          id={warnId}
          role="status"
          aria-live="polite"
          className="mt-0.5 block text-[10px] text-amber-600"
        >
          «{value.trim()}» no está en el diccionario (¿typo?).
        </span>
      )}
    </div>
  );
}
