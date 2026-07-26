/**
 * QA-FIX-10 — Selector de idioma del diccionario.
 *
 * Poblado con los idiomas REALES del archivo (endpoint
 * /api/dictionary/languages) — NUNCA con una lista fija, así el
 * dropdown nunca ofrece un idioma que no se puede buscar.
 *
 * Estados:
 *  - "loading" mientras fetchLanguages() está en curso.
 *  - "unavailable" si fetchLanguages() devolvió null o lista vacía
 *    (diccionario deshabilitado, schema inválido, sin idiomas). El
 *    usuario ve un mensaje claro en vez de un dropdown vacío.
 *  - "ready" con el `<select>` poblado y nombres legibles
 *    (LANG_NAMES[code] ?? code).
 *
 * Default: prefiere "es" si está presente, si no el primero
 * (ver `pickDefaultLang`).
 *
 * Accesibilidad: el `<select>` lleva `aria-label` (uso en formularios
 * donde el label visual no siempre está presente). El estado
 * "unavailable" se anuncia con `role="status"` para usuarios de
 * screen reader.
 */
import { useEffect, useId, useRef, useState } from "react";
import {
  displayLangName,
  fetchLanguages,
  pickDefaultLang,
} from "../../services/diccionario";

import { useI18n } from "../../i18n/I18nContext";
export interface LangSelectorProps {
  /** Valor actual controlado. */
  value: string;
  /** Notifica el nuevo valor al cambiar. */
  onChange: (lang: string) => void;
  /** Nombre accesible (se aplica como aria-label del <select>). */
  label?: string;
  className?: string;
  /**
   * Inyectable para tests; por defecto pega a `fetchLanguages`.
   * Devuelve `null` si el servicio no está disponible.
   */
  fetchLanguagesFn?: () => Promise<string[] | null>;
}

type Status = "loading" | "unavailable" | "ready";

export default function LangSelector({
  value,
  onChange,
  label,
  className,
  fetchLanguagesFn = fetchLanguages,
}: LangSelectorProps) {
  const { t } = useI18n();
  const resolvedLabel = label ?? t("langSelector.idiomaDelDiccionario");
  const selectId = useId();
  const statusId = useId();

  const [status, setStatus] = useState<Status>("loading");
  const [languages, setLanguages] = useState<string[]>([]);
  // Trackea si el usuario ya tocó el selector: persistimos entre renders
  // sin causar uno extra (no necesitamos que el cambio dispare re-render).
  const userChangedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    void fetchLanguagesFn().then((langs) => {
      if (cancelled) return;
      if (!langs || langs.length === 0) {
        setStatus("unavailable");
        setLanguages([]);
        return;
      }
      setLanguages(langs);
      setStatus("ready");
      // Si el consumidor todavía no fijó un valor (o el value
      // controlado no está en la lista), aplicamos el default.
      // Pero sólo en la primera carga — si el usuario ya tocó el
      // selector, no le pisamos su elección.
      if (userChangedRef.current) return;
      if (!value || !langs.includes(value)) {
        onChange(pickDefaultLang(langs));
      }
    });
    return () => {
      cancelled = true;
    };
  }, [fetchLanguagesFn]); // value/onChange intencionalmente fuera: la inicialización corre una sola vez.

  if (status === "loading") {
    return (
      <span
        className="inline-block text-xs text-[var(--c-text-muted,#64748b)]"
        aria-live="polite"
      >{t("langSelector.cargandoIdiomas")}</span>
    );
  }

  if (status === "unavailable") {
    return (
      <span
        id={statusId}
        role="status"
        className="inline-block text-xs text-amber-700"
        aria-live="polite"
      >{t("langSelector.diccionarioNoDisponibleElAutocompletado")}</span>
    );
  }

  return (
    <div className="flex items-center gap-1 text-xs">
      <label htmlFor={selectId} className="text-[var(--c-text-muted,#64748b)]">
        {resolvedLabel}:
      </label>
      <select
        id={selectId}
        aria-label={resolvedLabel}
        value={value}
        onChange={(e) => {
          userChangedRef.current = true;
          onChange(e.target.value);
        }}
        data-testid="lang-selector"
        className={
          className ??
          "rounded border border-[var(--c-border,#cbd5e1)] bg-white px-1.5 py-0.5 text-xs"
        }
      >
        {languages.map((code) => (
          <option key={code} value={code}>
            {displayLangName(code)} ({code})
          </option>
        ))}
      </select>
    </div>
  );
}
