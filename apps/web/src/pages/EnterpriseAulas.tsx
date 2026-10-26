import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getClassroomStatusLabelKey } from "../domain/classroom/classroom.types";
import { fetchEnterpriseAulas } from "../services/enterprise";
import { getAulaId } from "../lib/aula-id";
import { useI18n } from "../i18n/I18nContext";

const ACCESS_LABELS: Record<Classroom["accessType"], string> = {
  publica: "Pública", privada: "Privada",
};

export default function EnterpriseAulas() {
  const { t } = useI18n();
  const { user } = useAuth();
  const schoolId = user?.schoolId ?? "";
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolId) {
      setError(t('comun.tuCuentaNoTieneUna'));
      setLoading(false);
      return;
    }
    let active = true;
    fetchEnterpriseAulas(schoolId)
      .then((data) => {
        if (!active) return;
        setAulas(data.items ?? []);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [schoolId]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("nav.aulas")}</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("enterpriseAulas.aulasActivasDeTuInstitucion")}</p>
      </div>

      {error && (
        <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-danger)_25%,transparent)] bg-[color-mix(in_srgb,var(--c-danger)_8%,transparent)] px-4 py-3 text-sm text-[var(--c-danger)]">
          {error}
        </div>
      )}

      <div className="bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
          <p className="text-sm font-semibold text-[var(--c-text)]">
            {loading ? t("comun.cargando") : `${aulas.length} ${t("nav.aulas")}`}
          </p>
        </div>

        {loading && (
          <div className="p-4 space-y-2">
            {[1,2,3].map(i => <div key={i} className="h-14 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
          </div>
        )}

        {!loading && !error && aulas.length === 0 && (
          <div className="px-4 py-10 text-center">
            <p className="text-sm text-[var(--c-muted)]">{t("enterpriseAulas.noHayAulasRegistradas")}</p>
          </div>
        )}

        {!loading && !error && aulas.map((aula) => (
          <div
            key={getAulaId(aula)}
            className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--c-border)] last:border-0 hover:bg-[var(--c-bg)] transition-colors"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-[var(--c-text)] truncate">{aula.name}</p>
              {aula.description && (
                <p className="text-xs text-[var(--c-muted)] truncate mt-0.5">{aula.description}</p>
              )}
              <p className="text-[10px] text-[var(--c-muted)] mt-0.5">
                {/* `teacherIds` nunca lo puebla el back (ver Classroom.teacherIds
                    en classroom.types.ts) — mostraba "0 docentes" siempre.
                    El back resuelve el nombre del docente asignado por
                    columna (teacherOfRecord/teacher/createdBy) o, si el
                    aula sólo tiene un co-titular vía `clase_miembros`
                    (ver aulas.ts), por `members`. */}
                {ACCESS_LABELS[aula.accessType]} · {
                  aula.teacherOfRecordName
                    ?? aula.teacherName
                    ?? aula.createdByName
                    ?? aula.members?.find((m) => m.roleInClass === "TEACHER" && m.name)?.name
                    ?? t("enterpriseAulas.sinDocenteAsignado")
                }
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                aula.status === 'ACTIVE' || aula.status === 'activa'
                  ? 'bg-[color-mix(in_srgb,var(--c-success)_12%,transparent)] text-[var(--c-success)]'
                  : 'bg-[color-mix(in_srgb,var(--c-muted)_12%,transparent)] text-[var(--c-muted)]'
              }`}>
                {t(getClassroomStatusLabelKey(aula.status))}
              </span>
              {/* FIX-VISTA-PREVIA-STAFF — antes iba a `/clases?id=...`, que
                  matchea la ruta LISTA (`clases`, MisClases) no
                  `clases/:aulaId`: el query param nunca se leía y el botón
                  mostraba el listado genérico del propio staff en vez del
                  aula clickeada. `/aulas/:aulaId` (StaffLayout) usa el
                  path param, igual que ya hacía "Entrar" en
                  ProfesorAulas.tsx. */}
              <Link
                to={`/aulas/${encodeURIComponent(getAulaId(aula))}`}
                className="rounded-lg border border-[var(--c-border)] px-3 py-1 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
              >{t("enterpriseAulas.ver")}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
