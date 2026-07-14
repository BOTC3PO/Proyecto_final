import { useEffect, useState } from "react";
import { fetchProgresoEstudiante, type ProgresoEstudianteResponse } from "../services/progreso";
import { useI18n } from "../i18n/I18nContext";

type AvanceModulo = {
  id: string;
  modulo: string;
  progreso: string;
};

function AvanceCard({ avance }: { avance: AvanceModulo }) {
  const completado = avance.progreso === "100%";
  const enProgreso = avance.progreso === "En progreso" || (
    avance.progreso.endsWith("%") && parseInt(avance.progreso) > 0 && parseInt(avance.progreso) < 100
  );
  const pct = avance.progreso.endsWith("%") ? parseInt(avance.progreso) : enProgreso ? 50 : 0;

  const badgeCls = completado
    ? "bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]"
    : enProgreso
    ? "bg-[color-mix(in_srgb,var(--c-warning)_12%,transparent)] text-[var(--c-warning)]"
    : "bg-[color-mix(in_srgb,var(--c-muted)_15%,transparent)] text-[var(--c-muted)]";

  const barColor = completado ? "var(--c-success)" : enProgreso ? "var(--c-warning)" : "var(--c-border)";

  return (
    <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-sm font-semibold text-[var(--c-text)] truncate">{avance.modulo}</p>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeCls}`}>
          {avance.progreso}
        </span>
      </div>
      <div className="h-1.5 w-full bg-[var(--c-border)] rounded-full">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, background: barColor }}
        />
      </div>
    </div>
  );
}

export default function Progreso() {
  const { t } = useI18n();
  const [data, setData] = useState<ProgresoEstudianteResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchProgresoEstudiante()
      .then((response) => {
        if (!active) return;
        setData(response);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="page-root min-h-screen bg-[var(--c-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

        {/* Encabezado */}
        <div>
          <h1 className="text-2xl font-semibold text-[var(--c-text)]">{t("progreso.miProgreso")}</h1>
          <p className="text-sm text-[var(--c-muted)] mt-1">{t("progreso.tuAvancePorModuloY")}</p>
        </div>

        {/* Estado de carga */}
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] animate-pulse" />
            ))}
          </div>
        )}

        {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}

        {/* Sin avances */}
        {!loading && !error && (!data || data.avances.length === 0) && (
          <div className="rounded-xl border border-dashed border-[var(--c-border)] p-12 text-center">
            <p className="text-sm font-medium text-[var(--c-muted)]">{t("progreso.noHayAvancesRegistradosTodavia")}</p>
          </div>
        )}

        {/* Resumen rápido */}
        {!loading && !error && data && data.avances.length > 0 && (() => {
          const total = data.avances.length;
          const completados = data.avances.filter((a) => a.progreso === "100%").length;
          const enProgreso = data.avances.filter((a) =>
            a.progreso === "En progreso" || (a.progreso.endsWith("%") && parseInt(a.progreso) > 0 && parseInt(a.progreso) < 100)
          ).length;
          return (
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 text-center">
                <p className="text-2xl font-semibold text-[var(--c-success)]">{completados}</p>
                <p className="text-xs text-[var(--c-muted)] mt-1">{t("adminReportesGlobal.completados")}</p>
              </div>
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 text-center">
                <p className="text-2xl font-semibold text-[var(--c-warning)]">{enProgreso}</p>
                <p className="text-xs text-[var(--c-muted)] mt-1">{t("progreso.enProgreso")}</p>
              </div>
              <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl p-4 text-center">
                <p className="text-2xl font-semibold text-[var(--c-text)]">{total}</p>
                <p className="text-xs text-[var(--c-muted)] mt-1">{t("enterpriseComisiones.total")}</p>
              </div>
            </div>
          );
        })()}

        {/* Lista de avances */}
        {!loading && !error && data && data.avances.length > 0 && (
          <div className="space-y-3">
            {data.avances.map((avance) => (
              <AvanceCard key={avance.id} avance={avance} />
            ))}
          </div>
        )}

        {/* Sugerencia */}
        {!loading && !error && data?.sugerencia && (
          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
            <p className="text-sm font-semibold text-[var(--c-primary)]">
              {data.sugerencia.titulo}
            </p>
            <p className="text-sm text-[var(--c-muted)] mt-1">
              {data.sugerencia.mensaje}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
