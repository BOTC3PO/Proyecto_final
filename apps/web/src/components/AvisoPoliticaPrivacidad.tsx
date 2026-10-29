/**
 * L15 — aviso dentro de la plataforma cuando cambia la política de privacidad. Se muestra una vez por
 * versión (se recuerda en este navegador) a quien tiene sesión iniciada.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { useI18n } from "../i18n/I18nContext";
import { POLITICA_PRIVACIDAD_VERSION } from "../legal/politicaPrivacidad";

const CLAVE = "vb-politica-privacidad-vista";

const leerVista = () => {
  try {
    return localStorage.getItem(CLAVE);
  } catch {
    return POLITICA_PRIVACIDAD_VERSION;
  }
};

export default function AvisoPoliticaPrivacidad() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [vista, setVista] = useState(leerVista);
  if (!user || vista === POLITICA_PRIVACIDAD_VERSION) return null;

  const cerrar = () => {
    try {
      localStorage.setItem(CLAVE, POLITICA_PRIVACIDAD_VERSION);
    } catch {
      /* sin almacenamiento: el aviso vuelve a aparecer, no es grave */
    }
    setVista(POLITICA_PRIVACIDAD_VERSION);
  };

  return (
    <div role="status" className="relative z-20 border-b border-[var(--c-border)] bg-[var(--c-info-soft)] px-4 py-2 text-sm text-[var(--c-text)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
        <span>
          {t("avisoPrivacidad.texto")}{" "}
          <Link to="/privacidad" className="font-semibold text-[var(--c-primary)] underline">{t("avisoPrivacidad.ver")}</Link>
        </span>
        <button type="button" onClick={cerrar} className="rounded-md border border-[var(--c-border-strong)] px-2 py-0.5 text-xs font-semibold hover:bg-[var(--c-hover)]">
          {t("avisoPrivacidad.entendido")}
        </button>
      </div>
    </div>
  );
}
