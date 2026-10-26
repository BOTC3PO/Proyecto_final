import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";
import { useI18n } from "../i18n/I18nContext";
import {
  fetchPlanillaAsistencia,
  guardarPlanillaAsistencia,
  type AlumnoAsistencia,
  type EstadoAsistencia,
} from "../services/asistencia";

const ESTADOS: Array<{ value: EstadoAsistencia; label: string }> = [
  { value: "presente", label: "Presente" },
  { value: "ausente", label: "Ausente" },
  { value: "tarde", label: "Tarde" },
  { value: "justificado", label: "Justificado" },
];

const todayIso = () => new Date().toISOString().slice(0, 10);

type FilaEditable = AlumnoAsistencia & { notasBorrador: string };

export default function ProfesorAsistencia() {
  const { t } = useI18n();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const presetAulaId = searchParams.get("aulaId") ?? "";

  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [aulaId, setAulaId] = useState("");
  const [fecha, setFecha] = useState(todayIso());

  const [filas, setFilas] = useState<FilaEditable[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  // Cargar aulas del profesor
  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        const items = data.items ?? [];
        setAulas(items);
        if (presetAulaId) {
          const match = items.find((a) => getAulaId(a) === presetAulaId);
          if (match) {
            setAulaId(presetAulaId);
            return;
          }
        }
        if (items[0]) setAulaId(getAulaId(items[0]));
      })
      .catch(() => {});
  }, [user?.id, presetAulaId]);

  // Cargar la planilla del aula/fecha seleccionada
  useEffect(() => {
    if (!aulaId || !fecha) return;
    let active = true;
    setLoading(true);
    setError(null);
    setSaveMessage(null);
    fetchPlanillaAsistencia(aulaId, fecha)
      .then((planilla) => {
        if (!active) return;
        setFilas(planilla.alumnos.map((a) => ({ ...a, notasBorrador: a.notas ?? "" })));
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message || "No se pudo cargar la planilla.");
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [aulaId, fecha]);

  const cambiarEstado = (alumnoId: string, estado: EstadoAsistencia) => {
    setFilas((prev) => prev.map((f) => (f.alumnoId === alumnoId ? { ...f, estado } : f)));
  };

  const cambiarNotas = (alumnoId: string, notas: string) => {
    setFilas((prev) => prev.map((f) => (f.alumnoId === alumnoId ? { ...f, notasBorrador: notas } : f)));
  };

  const marcarTodosPresentes = () => {
    setFilas((prev) => prev.map((f) => ({ ...f, estado: "presente" })));
  };

  const pendientes = useMemo(() => filas.filter((f) => !f.estado).length, [filas]);

  const handleGuardar = async () => {
    if (!aulaId || !fecha) return;
    const registros = filas
      .filter((f): f is FilaEditable & { estado: EstadoAsistencia } => f.estado !== null)
      .map((f) => ({ alumnoId: f.alumnoId, estado: f.estado, notas: f.notasBorrador || null }));
    if (registros.length === 0) {
      setSaveMessage({ kind: "err", text: t("profesorAsistencia.marcaElEstadoDeAl") });
      return;
    }
    setSaving(true);
    setSaveMessage(null);
    try {
      await guardarPlanillaAsistencia(aulaId, fecha, registros);
      setSaveMessage({ kind: "ok", text: "Asistencia guardada." });
    } catch (err) {
      setSaveMessage({
        kind: "err",
        text: err instanceof Error ? err.message : t("profesorAsistencia.noSePudoGuardarLa"),
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("profesorAsistencia.asistencia")}</h1>
        <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("profesorAsistencia.pasaListaDelAulaSeleccionada")}</p>
      </div>

      <div className="flex flex-wrap items-end gap-3">
        {aulas.length > 1 && (
          <div>
            <label className="block text-xs font-medium text-[var(--c-muted)] uppercase tracking-wide mb-1">{t("comun.aula")}</label>
            <select
              value={aulaId}
              onChange={(e) => setAulaId(e.target.value)}
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            >
              {aulas.map((a) => (
                <option key={getAulaId(a)} value={getAulaId(a)}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className="block text-xs font-medium text-[var(--c-muted)] uppercase tracking-wide mb-1">{t("enterpriseComisiones.fecha")}</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
          />
        </div>
        {filas.length > 0 && (
          <button
            type="button"
            onClick={marcarTodosPresentes}
            className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)]"
          >{t("profesorAsistencia.marcarTodosPresentes")}</button>
        )}
      </div>

      <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-border)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("profesorAsistencia.planillaDelDia")}</p>
          {filas.length > 0 && (
            <span className="text-xs text-[var(--c-muted)]">
              {pendientes > 0 ? `${pendientes} sin marcar` : "Todos marcados"}
            </span>
          )}
        </div>
        <div className="p-4 space-y-2">
          {loading && (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 rounded-xl animate-pulse bg-[var(--c-border)]" />
              ))}
            </div>
          )}
          {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
          {!loading && !error && filas.length === 0 && (
            <div className="rounded-xl border-2 border-dashed border-[var(--c-border)] py-8 text-center">
              <p className="text-sm text-[var(--c-muted)]">{t("profesorAsistencia.estaAulaNoTieneAlumnos")}</p>
            </div>
          )}
          {!loading &&
            !error &&
            filas.map((fila) => (
              <div
                key={fila.alumnoId}
                className="flex flex-col gap-2 rounded-xl border border-[var(--c-border)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                data-testid="asistencia-fila"
              >
                <p className="text-sm font-medium text-[var(--c-text)]">{fila.nombre}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <select
                    value={fila.estado ?? ""}
                    onChange={(e) => cambiarEstado(fila.alumnoId, e.target.value as EstadoAsistencia)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  >
                    <option value="">{t("profesorAsistencia.sinMarcar")}</option>
                    {ESTADOS.map((e) => (
                      <option key={e.value} value={e.value}>
                        {e.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder={t("hijosAgregar.notasOpcional")}
                    value={fila.notasBorrador}
                    onChange={(e) => cambiarNotas(fila.alumnoId, e.target.value)}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-2 py-1.5 text-sm w-40 focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </div>
              </div>
            ))}
        </div>
        {filas.length > 0 && (
          <div className="flex items-center gap-3 border-t border-[var(--c-border)] px-4 py-3">
            <button
              type="button"
              onClick={handleGuardar}
              disabled={saving}
              className="rounded-md bg-[var(--c-primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
            >
              {saving ? "Guardando..." : "Guardar asistencia"}
            </button>
            {saveMessage && (
              <span
                className={`text-sm ${
                  saveMessage.kind === "ok" ? "text-[var(--c-success)]" : "text-[var(--c-danger)]"
                }`}
              >
                {saveMessage.text}
              </span>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
