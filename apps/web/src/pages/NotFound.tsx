import { Link } from 'react-router-dom';
import { useI18n } from "../i18n/I18nContext";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[var(--c-bg)] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold text-[var(--c-border)] select-none">404</p>
      <h1 className="text-2xl font-semibold text-[var(--c-text)] mt-4">{t("notFound.paginaNoEncontrada")}</h1>
      <p className="text-sm text-[var(--c-muted)] mt-2 max-w-sm">{t("notFound.laPaginaQueBuscasNo")}</p>
      <div className="flex gap-3 mt-8">
        <Link
          to="/"
          className="rounded-xl bg-[var(--c-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >{t("notFound.irAlInicio")}</Link>
        <button
          onClick={() => window.history.back()}
          className="rounded-xl border border-[var(--c-border)] px-5 py-2.5 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
        >{t("notFound.volver")}</button>
      </div>
    </div>
  );
}
