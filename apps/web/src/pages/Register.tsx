// RegistrationForm.tsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";
import { fetchRegistroOpciones } from "../services/registro";

/* ===========================
   DateInput (sin lucide-react)
   =========================== */

type DateInputProps = {
  label?: string;
  placeholder?: string;
  value?: string; // "dd/mm/aaaa"
  onChange?: (display: string, iso?: string) => void;
  required?: boolean;
  fromYear?: number;
  toYear?: number;
  minDate?: Date;
  maxDate?: Date;
  startOnMonday?: boolean;
  months?: string[];
};

function pad(n: number) { return String(n).padStart(2,"0"); }
function toISO(d: Date) { return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function toDisplay(d: Date) { return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`; }
function parseDisplay(s?: string | null): Date | null {
  if (!s) return null;
  const [dd, mm, yyyy] = s.split("/").map(Number);
  const d = new Date(yyyy, (mm ?? 1)-1, dd ?? 1);
  return isNaN(d.getTime()) ? null : d;
}

function DateInput({
  label = "Cumpleaños",
  placeholder = "DD/MM/AAAA",
  value = "",
  onChange,
  required,
  fromYear = 1900,
  toYear = new Date().getFullYear(),
  minDate,
  maxDate = new Date(), // no fechas futuras por defecto
  startOnMonday = true,
  months = []
}: DateInputProps) {
  const controlledDate = parseDisplay(value) || null;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(controlledDate);
  const initial = selected ?? new Date();
  const [currentMonth, setCurrentMonth] = useState(initial.getMonth());
  const [currentYear, setCurrentYear] = useState(initial.getFullYear());
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync cuando cambia el value externo
  useEffect(() => {
    setSelected(controlledDate);
    if (controlledDate) {
      setCurrentMonth(controlledDate.getMonth());
      setCurrentYear(controlledDate.getFullYear());
    }
  }, [value]);

  // Cerrar al click afuera o Esc
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const daysInMonth = (m: number, y: number) => new Date(y, m + 1, 0).getDate();

  // firstDayIndex con lunes=0 si startOnMonday
  const firstDayIndex = (() => {
    const raw = new Date(currentYear, currentMonth, 1).getDay(); // 0 domingo..6 sábado
    return startOnMonday ? (raw + 6) % 7 : raw;
  })();

  const isDisabled = (d: Date) => {
    const floor = (dt: Date) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    if (minDate && floor(d) < floor(minDate)) return true;
    if (maxDate && floor(d) > floor(maxDate)) return true;
    return false;
  };

  const commit = (d: Date | null) => {
    setSelected(d);
    const display = d ? toDisplay(d) : "";
    const iso = d ? toISO(d) : "";
    onChange?.(display, iso);
  };

  const handleDayClick = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    if (isDisabled(d)) return;
    commit(d);
    setIsOpen(false);
  };

  const goPrev = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const goNext = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const display = selected ? toDisplay(selected) : "";
  const weekHdr = startOnMonday ? ["L","M","M","J","V","S","D"] : ["D","L","M","M","J","V","S"];

  return (
    <div className="relative w-full" ref={containerRef}>
      {label && (
        <label className="block text-gray-800 text-lg mb-2 font-normal">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(o => !o)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg bg-white 
                     focus:outline-none focus:border-blue-500 transition-colors text-left pr-12"
        >
          {display || <span className="text-gray-400">{placeholder}</span>}
        </button>

        {/* Icono calendario inline */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
          viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 1 1 2 0v1Zm13 6H4v11h16V8Z"/>
        </svg>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Selector de fecha"
          className="absolute z-50 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-full max-w-sm"
        >
          <div className="flex items-center justify-between mb-4 gap-2">
            <button type="button" onClick={goPrev} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="Mes anterior">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 flex items-center justify-center gap-2">
              <select
                value={currentMonth}
                onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                className="px-3 py-1.5 text-sm font-semibold text-gray-800 bg-white border-2 border-gray-200 
                           rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-500"
              >
                {months.map((m, i) => (
                  <option key={m} value={i}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                value={currentYear}
                onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                className="px-3 py-1.5 text-sm font-semibold text-gray-800 bg-white border-2 border-gray-200 
                           rounded-lg hover:border-blue-400 focus:outline-none focus:border-blue-500"
              >
                {Array.from({ length: (toYear - fromYear + 1) }, (_, k) => toYear - k).map(y =>
                  <option key={y} value={y}>{y}</option>
                )}
              </select>
            </div>

            <button type="button" onClick={goNext} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="Mes siguiente">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekHdr.map((d) => (
              <div key={d} className="h-10 flex items-center justify-center text-xs font-semibold text-gray-500">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* celdas vacías al inicio */}
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`e-${i}`} className="h-10" />
            ))}

            {/* días */}
            {Array.from({ length: daysInMonth(currentMonth, currentYear) }, (_, i) => {
              const day = i + 1;
              const d = new Date(currentYear, currentMonth, day);
              const today = new Date();
              const isToday =
                d.getDate() === today.getDate() &&
                d.getMonth() === today.getMonth() &&
                d.getFullYear() === today.getFullYear();
              const isSelected = !! (
                selected &&
                d.getDate() === selected.getDate() &&
                d.getMonth() === selected.getMonth() &&
                d.getFullYear() === selected.getFullYear());
              const disabled = isDisabled(d);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDayClick(day)}
                  disabled={disabled}
                  className={`h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all
                    ${disabled ? "text-gray-300 cursor-not-allowed"
                      : isSelected ? "bg-blue-600 text-white shadow-md"
                      : isToday ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                      : "text-gray-700 hover:bg-gray-100"}`}
                  aria-pressed={isSelected}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 flex gap-2">
            <button
              type="button"
              onClick={() => { commit(null); setIsOpen(false); }}
              className="w-1/2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Limpiar
            </button>
            <button
              type="button"
              onClick={() => {
                const t = new Date();
                commit(t);
                setCurrentMonth(t.getMonth());
                setCurrentYear(t.getFullYear());
                setIsOpen(false);
              }}
              className="w-1/2 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
            >
              Hoy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===========================
   Formulario de Registro
   =========================== */

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [teacherTypes, setTeacherTypes] = useState<Array<{ value: string; label: string }>>([]);
  const [monthOptions, setMonthOptions] = useState<string[]>([]);
  const [optionsError, setOptionsError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    birthdate: "",      // dd/mm/aaaa (para UI)
    birthdateISO: "",   // yyyy-mm-dd (para backend)
    role: "",
    teacherType: "",
    schoolCode: "",
    password: "",
    confirmPassword: "",
    privacyConsent: false,
    termsAccepted: false
  });
  const [status, setStatus] = useState<{ loading: boolean; error: string | null }>({
    loading: false,
    error: null
  });

  useEffect(() => {
    let active = true;
    fetchRegistroOpciones()
      .then((data) => {
        if (!active) return;
        setTeacherTypes(
          data.tiposProfesor.map((tipo) => ({
            value: tipo,
            label: tipo
          }))
        );
        setMonthOptions(data.meses);
        setOptionsError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setOptionsError(err.message);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleDateChange = (display: string, iso?: string) => {
    setFormData((s) => ({ ...s, birthdate: display, birthdateISO: iso ?? "" }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((s) => ({
      ...s,
      role: value,
      teacherType: value === "teacher" ? s.teacherType : ""
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ejemplo de validación mínima
    if (!formData.termsAccepted) {
      setStatus({ loading: false, error: "Debes aceptar los Términos y Condiciones." });
      return;
    }
    if (!formData.role) {
      setStatus({ loading: false, error: "Selecciona un rol para continuar." });
      return;
    }
    if (formData.role === "teacher" && !formData.teacherType) {
      setStatus({ loading: false, error: "Selecciona el tipo de profesor." });
      return;
    }
    if (formData.password && formData.password !== formData.confirmPassword) {
      setStatus({ loading: false, error: "Las contraseñas no coinciden." });
      return;
    }
    if (!formData.fullName || !formData.username || !formData.email || !formData.password) {
      setStatus({ loading: false, error: "Completa los campos obligatorios antes de continuar." });
      return;
    }
    setStatus({ loading: true, error: null });
    try {
      const birthdate = formData.birthdateISO
        ? new Date(`${formData.birthdateISO}T00:00:00.000Z`).toISOString()
        : undefined;
      await apiFetch<{ id: string }>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password,
          birthdate,
          role: formData.role,
          teacherType: formData.role === "teacher" ? formData.teacherType : undefined,
          schoolCode: formData.schoolCode || undefined,
          consents: {
            privacyConsent: formData.privacyConsent,
            termsAccepted: formData.termsAccepted,
            consentedAt: new Date().toISOString()
          }
        })
      });
      navigate("/login");
    } catch (error) {
      const message = error instanceof Error ? error.message : "No pudimos completar el registro.";
      setStatus({ loading: false, error: message });
      return;
    }
    setStatus({ loading: false, error: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Registro</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-800 text-lg mb-2 font-normal">Nombre Completo</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 text-lg mb-2 font-normal">Nombre de Usuario Público</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 text-lg mb-2 font-normal">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* DateInput integrado */}
            <DateInput
              label="Cumpleaños"
              value={formData.birthdate}
              onChange={handleDateChange}
              fromYear={1900}
              toYear={new Date().getFullYear()}
              minDate={new Date(1900, 0, 1)}
              maxDate={new Date()} // no permitir futuras
              startOnMonday
              required
              months={monthOptions}
            />
            {optionsError && (
              <p className="text-sm text-red-600">No se pudieron cargar las opciones: {optionsError}</p>
            )}
            {/* Campo oculto ISO para enviar al backend si querés */}
            <input type="hidden" name="birthday_iso" value={formData.birthdateISO} />

            <div>
              <label className="block text-gray-800 text-lg mb-2 font-normal">Rol</label>
              <select
                value={formData.role}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg bg-white
                           focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Selecciona un rol</option>
                <option value="student">Usuario</option>
                <option value="teacher">Profesor</option>
              </select>
            </div>

            {formData.role === "teacher" && (
              <div>
                <label className="block text-gray-800 text-lg mb-2 font-normal">Tipo de Profesor</label>
                <select
                  value={formData.teacherType}
                  onChange={(e) => setFormData({ ...formData, teacherType: e.target.value })}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg bg-white
                             focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Selecciona el tipo</option>
                  {teacherTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-gray-800 text-lg mb-2 font-normal">Código de Escuela (Opcional)</label>
              <input
                type="text"
                value={formData.schoolCode}
                onChange={(e) => setFormData({ ...formData, schoolCode: e.target.value })}
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 text-lg mb-2 font-normal">Contraseña</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-800 text-lg mb-2 font-normal">Repetir Contraseña</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg 
                           focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded 
                             focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-gray-700 text-base leading-relaxed">
                  El Nombre Completo Real Solo Será Visible Para Profesores o Compañeros De Un Aula Virtual
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                  className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded 
                             focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-gray-700 text-base leading-relaxed">
                  Acepto los Términos y Condiciones del Servicio
                </span>
              </label>
            </div>

            {status.error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {status.error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold
                         hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status.loading}
            >
              {status.loading ? "Registrando..." : "Registrarse"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
