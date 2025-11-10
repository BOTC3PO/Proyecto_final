import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export interface DateInputProps {
  label?: string;
  placeholder?: string;
  value?: string;                 // "DD/MM/AAAA"
  onChange?: (ddmmyyyy: string) => void;
  required?: boolean;
  id?: string;
  name?: string;
  minDate?: Date;                 // opcional: límite inferior
  maxDate?: Date;                 // opcional: límite superior
  readOnlyInput?: boolean;        // por defecto true
}

const MONTHS = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

function daysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}
function firstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay(); // 0=Dom
}
function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function formatDDMMYYYY(day: number, month: number, year: number) {
  return `${pad2(day)}/${pad2(month + 1)}/${year}`;
}
function parseDDMMYYYY(s?: string | null) {
  if (!s) return null;
  const parts = s.split("/");
  if (parts.length !== 3) return null;
  const [d, m, y] = parts.map((p) => parseInt(p, 10));
  if (!d || !m || !y) return null;
  const dt = new Date(y, m - 1, d);
  // validar coherencia (evitar 31/02)
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) return null;
  return dt;
}
function clampToBounds(dt: Date, minDate?: Date, maxDate?: Date) {
  if (minDate && dt < stripTime(minDate)) return stripTime(minDate);
  if (maxDate && dt > stripTime(maxDate)) return stripTime(maxDate);
  return dt;
}
function stripTime(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export default function DateInput({
  label = "Cumpleaños",
  placeholder = "DD/MM/AAAA",
  value = "",
  onChange = () => {},
  required = false,
  id,
  name,
  minDate,
  maxDate,
  readOnlyInput = true,
}: DateInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const parsed = useMemo(() => parseDDMMYYYY(value), [value]);
  const initial = parsed ?? new Date();

  const [currentMonth, setCurrentMonth] = useState<number>(initial.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(initial.getFullYear());

  // cierra al click afuera
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // cierra con ESC
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") setIsOpen(false);
  };

  const goPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else setCurrentMonth((m) => m - 1);
  };
  const goNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else setCurrentMonth((m) => m + 1);
  };

  const today = stripTime(new Date());
  const selected = parsed ? stripTime(parsed) : null;

  const isDisabled = (d: Date) => {
    if (minDate && d < stripTime(minDate)) return true;
    if (maxDate && d > stripTime(maxDate)) return true;
    return false;
  };

  const selectDay = (day: number) => {
    const dt = clampToBounds(new Date(currentYear, currentMonth, day), minDate, maxDate);
    onChange(formatDDMMYYYY(dt.getDate(), dt.getMonth(), dt.getFullYear()));
    setIsOpen(false);
  };

  const onInputManual = (e: ChangeEvent<HTMLInputElement>) => {
    // si permitís edición manual, validá y normalizá
    const s = e.target.value;
    const parsed = parseDDMMYYYY(s);
    if (parsed) {
      onChange(formatDDMMYYYY(parsed.getDate(), parsed.getMonth(), parsed.getFullYear()));
      setCurrentMonth(parsed.getMonth());
      setCurrentYear(parsed.getFullYear());
    } else {
      onChange(s); // deja ver el texto aunque sea inválido
    }
  };

  const goToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    onChange(formatDDMMYYYY(today.getDate(), today.getMonth(), today.getFullYear()));
    setIsOpen(false);
  };

  // Render celdas del calendario
  const renderDays = () => {
    const nodes: React.ReactNode[] = [];
    const total = daysInMonth(currentMonth, currentYear);
    const first = firstDayOfMonth(currentMonth, currentYear); // 0=Dom
    const parsedSel = selected;

    for (let i = 0; i < first; i++) {
      nodes.push(<div key={`empty-${i}`} className="h-10" />);
    }

    for (let d = 1; d <= total; d++) {
      const cellDate = stripTime(new Date(currentYear, currentMonth, d));
      const isSel =
        parsedSel &&
        cellDate.getTime() === parsedSel.getTime();
      const isToday =
        cellDate.getTime() === today.getTime();
      const disabled = isDisabled(cellDate);

      nodes.push(
        <button
          key={d}
          type="button"
          disabled={disabled}
          onClick={() => selectDay(d)}
          className={[
            "h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all",
            disabled
              ? "text-gray-300 cursor-not-allowed"
              : isSel
                ? "bg-blue-600 text-white shadow"
                : isToday
                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  : "text-gray-700 hover:bg-gray-100",
          ].join(" ")}
          aria-pressed={isSel}
          aria-label={`Seleccionar ${d} ${MONTHS[currentMonth]} ${currentYear}`}
        >
          {d}
        </button>
      );
    }
    return nodes;
  };

  return (
    <div className="relative w-full" ref={containerRef} onKeyDown={onKeyDown}>
      {label && (
        <label htmlFor={id} className="block text-gray-800 text-sm mb-2 font-medium">
          {label}{required ? " *" : ""}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          name={name}
          type="text"
          value={value ?? ""}
          placeholder={placeholder}
          readOnly={readOnlyInput}
          onChange={readOnlyInput ? undefined : onInputManual}
          onClick={() => setIsOpen((o) => !o)}
          className="w-full px-3 py-2 text-base border border-gray-300 rounded-md bg-white
                     focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                     placeholder:text-gray-400 cursor-pointer"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-controls={id ? `${id}-dialog` : undefined}
          required={required}
        />
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          aria-label="Abrir calendario"
        >
          <Calendar size={18} />
        </button>
      </div>

      {isOpen && (
        <div
          id={id ? `${id}-dialog` : undefined}
          role="dialog"
          aria-modal="true"
          className="absolute z-50 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-full max-w-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={goPrev}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Mes anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex-1 text-center">
              <span className="text-sm font-semibold text-gray-800">
                {MONTHS[currentMonth]} {currentYear}
              </span>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Mes siguiente"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-1">
            {["D","L","M","M","J","V","S"].map((d) => (
              <div key={d} className="h-8 flex items-center justify-center text-[11px] font-semibold text-gray-500">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {renderDays()}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200">
            <button
              type="button"
              onClick={goToday}
              className="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
            >
              Hoy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
