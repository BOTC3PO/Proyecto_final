import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import type { Module } from "../domain/module/module.types";
import { resolveMateria } from "../domain/module/materia";
import { fetchEnterpriseModulos } from "../services/enterprise";
import { useI18n } from "../i18n/I18nContext";

export default function EnterpriseModulos() {
  const { t, lang } = useI18n();
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) {
      setError(t('comun.tuCuentaNoTieneUna'));
      setLoading(false);
      return;
    }
    let active = true;
    fetchEnterpriseModulos(schoolId)
      .then((data) => { if (!active) return; setModules(data.items ?? []); })
      .catch((err: Error) => { if (!active) return; setError(err.message); })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("enterpriseModulos.modulosEscolares")}</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("enterpriseModulos.modulosDisponiblesParaTuInstitucion")}</p>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

      <section className="grid gap-4 md:grid-cols-2">
          {loading && [1,2,3,4].map(i => <div key={i} className="h-28 animate-pulse rounded-xl bg-[var(--c-border)]" />)}
          {!loading && !error && modules.length === 0 && (
            <p className="text-sm text-[var(--c-muted)]">{t("enterpriseModulos.noHayModulosDisponibles")}</p>
          )}
          {!loading && !error && modules.map((module) => (
            <article key={module.id}
              className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-semibold text-[var(--c-text)]">{module.title}</h2>
                <span className="shrink-0 rounded-full bg-[var(--c-bg)] px-2 py-0.5 text-xs font-semibold text-[var(--c-muted)]">
                  {resolveMateria(module)}
                </span>
              </div>
              {module.description && (
                <p className="mt-1 text-sm text-[var(--c-muted)] line-clamp-2">{module.description}</p>
              )}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-[var(--c-muted)]">
                  {module.updatedAt
                    ? new Date(module.updatedAt).toLocaleDateString(lang)
                    : "—"}
                </span>
                <Link
                  to={`/modulos/${module.id}`}
                  className="text-xs font-semibold text-[var(--c-primary)] hover:underline"
                >{t("enterpriseModulos.verModulo")}</Link>
              </div>
            </article>
          ))}
        </section>
    </div>
  );
}
