/**
 * MatrizProgreso (Tarea 18).
 *
 * Tabla alumno × módulo con el estado del progreso de cada uno. Pensado
 * para que el docente del aula vea de un vistazo quién avanzó en cada
 * módulo asignado. Celda: punto/glifo de color + texto corto. Sin N+1:
 * recibe la respuesta entera del endpoint `/api/progreso/aula-matriz`.
 *
 * Estados:
 *  - loading: skeleton de filas.
 *  - error:   mensaje + botón Reintentar.
 *  - vacío (alumnos=[]): mensaje "Sin alumnos" + (modulos=[]) "Sin
 *    módulos asignados".
 *
 * Layout: overflow-x-auto, primera columna (alumno) sticky para que los
 * nombres queden visibles al scrollear horizontalmente.
 */

import { useEffect, useMemo, useState } from "react";
import {
  fetchAulaMatriz,
  type AulaMatrizAlumno,
  type AulaMatrizModulo,
  type AulaMatrizResponse,
  type AulaMatrizStatus,
} from "../../services/progreso-aula";

import { useI18n } from "../../i18n/I18nContext";
export type MatrizProgresoProps = {
  classroomId: string;
};

type LoadState =
  | { status: "loading" }
  | { status: "ready"; data: AulaMatrizResponse }
  | { status: "error"; error: string };

const STATUS_LABEL: Record<Exclude<AulaMatrizStatus, null>, string> = {
  iniciado: "Iniciado",
  en_progreso: "En progreso",
  completado: "Completado",
};

/**
 * Mapeo status → par de clases Tailwind que consumen los tokens del tema.
 * Sin colores hardcoded.
 */
function cellClasses(status: AulaMatrizStatus): string {
  switch (status) {
    case "completado":
      return "bg-[var(--c-success-soft)] text-[var(--c-success)]";
    case "en_progreso":
      return "bg-[var(--c-warning-soft)] text-[var(--c-warning)]";
    case "iniciado":
      return "bg-[var(--c-info-soft)] text-[var(--c-info)]";
    case null:
    default:
      return "bg-transparent text-[var(--c-muted)]";
  }
}

function cellGlyph(status: AulaMatrizStatus): string {
  switch (status) {
    case "completado":
      return "✓";
    case "en_progreso":
      return "◐";
    case "iniciado":
      return "●";
    case null:
    default:
      return "—";
  }
}

function completionPercent(
  modulos: AulaMatrizModulo[],
  alumnos: AulaMatrizAlumno[],
): number {
  if (alumnos.length === 0 || modulos.length === 0) return 0;
  const cells = alumnos.length * modulos.length;
  const done = alumnos.reduce((acc, a) => {
    return (
      acc +
      modulos.reduce((mAcc, m) => {
        return a.progresos[m.id] === "completado" ? mAcc + 1 : mAcc;
      }, 0)
    );
  }, 0);
  return Math.round((done / cells) * 100);
}

function truncateTitle(title: string, max = 28): string {
  if (title.length <= max) return title;
  return title.slice(0, max - 1) + "…";
}

export default function MatrizProgreso({ classroomId }: MatrizProgresoProps) {
  const { t } = useI18n();
  const [state, setState] = useState<LoadState>({ status: "loading" });

  const load = async () => {
    setState({ status: "loading" });
    try {
      const data = await fetchAulaMatriz(classroomId);
      setState({ status: "ready", data });
    } catch (err) {
      setState({
        status: "error",
        error: err instanceof Error ? err.message : "error",
      });
    }
  };

  useEffect(() => {
    void load();
    // classroomId es estable mientras el modal este montado; re-fetch si cambia.
  }, [classroomId]);

  const percent = useMemo(() => {
    if (state.status !== "ready") return 0;
    return completionPercent(state.data.modulos, state.data.alumnos);
  }, [state]);

  if (state.status === "loading") {
    return (
      <div
        className="space-y-2"
        data-testid="matriz-progreso-loading"
        aria-busy="true"
        aria-label={t("matrizProgreso.cargandoMatrizDeProgreso")}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-9 animate-pulse rounded-lg bg-[var(--c-border)]"
          />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div
        className="rounded-xl border-2 border-dashed border-[var(--c-border)] p-4 text-center"
        data-testid="matriz-progreso-error"
      >
        <p className="text-sm text-[var(--c-danger)]">
          Error: {state.error}
        </p>
        <button
          type="button"
          onClick={load}
          className="mt-2 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-sm font-medium text-[var(--c-text)] hover:bg-[var(--c-primary-soft,#dbeafe)]"
        >{t("comun.reintentar")}</button>
      </div>
    );
  }

  const { modulos, alumnos } = state.data;

  if (alumnos.length === 0 || modulos.length === 0) {
    return (
      <p
        className="rounded-xl border-2 border-dashed border-[var(--c-border)] p-4 text-center text-sm text-[var(--c-muted)]"
        data-testid="matriz-progreso-vacio"
      >
        {modulos.length === 0
          ? "Esta aula no tiene módulos asignados todavía."
          : "Esta aula todavía no tiene alumnos."}
      </p>
    );
  }

  return (
    <div className="space-y-2" data-testid="matriz-progreso">
      <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--c-bg)]">
              <th
                scope="col"
                className="sticky left-0 z-10 min-w-[10rem] border-b border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]"
              >{t("enterpriseCobros.alumno")}</th>
              {modulos.map((m) => (
                <th
                  key={m.id}
                  scope="col"
                  className="border-b border-[var(--c-border)] px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]"
                  title={m.title}
                >
                  <span className="block max-w-[12ch] truncate">
                    {truncateTitle(m.title)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr
                key={alumno.id}
                className="border-b border-[var(--c-border)] last:border-b-0"
                data-testid={`matriz-progreso-fila-${alumno.id}`}
              >
                <th
                  scope="row"
                  className="sticky left-0 z-10 min-w-[10rem] border-r border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-left text-sm font-medium text-[var(--c-text)]"
                >
                  <span className="block max-w-[14ch] truncate" title={alumno.name}>
                    {alumno.name}
                  </span>
                </th>
                {modulos.map((m) => {
                  const s = alumno.progresos[m.id] ?? null;
                  return (
                    <td
                      key={m.id}
                      className={`px-3 py-2 text-center align-middle ${cellClasses(s)}`}
                      data-testid={`matriz-progreso-celda-${alumno.id}-${m.id}`}
                      data-status={s ?? "none"}
                      title={s ? STATUS_LABEL[s] : "Sin progreso"}
                      aria-label={
                        s
                          ? `${alumno.name} · ${m.title}: ${STATUS_LABEL[s]}`
                          : `${alumno.name} · ${m.title}: sin progreso`
                      }
                    >
                      <span aria-hidden="true" className="text-base">
                        {cellGlyph(s)}
                      </span>
                      <span className="sr-only">
                        {s ? STATUS_LABEL[s] : "Sin progreso"}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-[var(--c-bg)]">
              <th
                scope="row"
                className="sticky left-0 z-10 min-w-[10rem] border-t border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-[var(--c-muted)]"
              >{t("moduloDetail.completado")}</th>
              {modulos.map((m) => {
                const done = alumnos.filter(
                  (a) => a.progresos[m.id] === "completado",
                ).length;
                const pct = Math.round((done / alumnos.length) * 100);
                return (
                  <td
                    key={m.id}
                    className="border-t border-[var(--c-border)] px-3 py-2 text-center text-xs font-medium text-[var(--c-muted)]"
                    data-testid={`matriz-progreso-pct-${m.id}`}
                    aria-label={`${pct}% de los alumnos completó ${m.title}`}
                  >
                    {pct}%
                  </td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="text-xs text-[var(--c-muted)]">
        {percent}% de la matriz está completada.
      </p>
    </div>
  );
}
