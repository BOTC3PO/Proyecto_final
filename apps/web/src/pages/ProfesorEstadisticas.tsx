import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";

type ProgressItem = {
  moduloId: string;
  status: "iniciado" | "en_progreso" | "completado";
  usuarioId?: string;
};

type ModuloItem = {
  id: string;
  title: string;
  subject?: string;
  category?: string;
};

type EstadisticaModulo = {
  id: string;
  titulo: string;
  materia: string;
  completados: number;
  enProgreso: number;
  sinIniciar: number;
  total: number;
};

export default function ProfesorEstadisticas() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const presetAulaId = searchParams.get("aulaId") ?? "";
  const [aulas, setAulas] = useState<Classroom[]>([]);
  const [aulaId, setAulaId] = useState("");
  const [estadisticas, setEstadisticas] = useState<EstadisticaModulo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        const misAulas = data.items ?? [];
        setAulas(misAulas);
        if (presetAulaId) {
          const match = misAulas.find((a) => getAulaId(a) === presetAulaId);
          if (match) {
            setAulaId(presetAulaId);
            return;
          }
        }
        if (misAulas[0]) setAulaId(getAulaId(misAulas[0]));
      })
      .catch(() => {});
  }, [user?.id, presetAulaId]);

  useEffect(() => {
    if (!aulaId) return;
    let active = true;
    setLoading(true);
    setError(null);
    Promise.all([
      apiGet<{ items: ModuloItem[] }>(
        `/api/modulos?aulaId=${encodeURIComponent(aulaId)}`
      ),
      apiGet<{ items: ProgressItem[] }>(
        `/api/progreso?aulaId=${encodeURIComponent(aulaId)}`
      ),
    ])
      .then(([modulosData, progresoData]) => {
        if (!active) return;
        const progreso = progresoData.items ?? [];
        const stats = (modulosData.items ?? []).map((m) => {
          const moduloProgreso = progreso.filter(
            (p) => p.moduloId === m.id
          );
          return {
            id: m.id,
            titulo: m.title,
            materia: m.subject ?? m.category ?? "General",
            completados: moduloProgreso.filter(
              (p) => p.status === "completado"
            ).length,
            enProgreso: moduloProgreso.filter(
              (p) => p.status === "en_progreso" || p.status === "iniciado"
            ).length,
            sinIniciar: 0,
            total: moduloProgreso.length,
          };
        });
        setEstadisticas(stats);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => { if (!active) return; setLoading(false); });
    return () => { active = false; };
  }, [aulaId]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Estadísticas</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">Progreso de alumnos por módulo en tu aula.</p>
        </div>

        {aulas.length > 1 && (
          <div className="flex items-center gap-3">
            <label className="text-xs font-medium text-[var(--c-muted)] uppercase tracking-wide">Aula</label>
            <select
              value={aulaId}
              onChange={(e) => setAulaId(e.target.value)}
              className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            >
              {aulas.map((a) => (
                <option key={getAulaId(a)} value={getAulaId(a)}>{a.name}</option>
              ))}
            </select>
          </div>
        )}

        <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">Progreso por módulo</p>
          </div>
          <div className="p-4 space-y-3">
          {loading && (
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-20 animate-pulse rounded-xl bg-[var(--c-border)]" />
              ))}
            </div>
          )}
          {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
          {!loading && !error && estadisticas.length === 0 && (
            <p className="text-sm text-[var(--c-muted)]">No hay módulos asignados a este aula.</p>
          )}
          {!loading && !error && estadisticas.map((e) => (
            <article key={e.id}
              className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-semibold text-[var(--c-text)]">
                    {e.titulo}
                  </h2>
                  <p className="text-xs text-[var(--c-muted)]">{e.materia}</p>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-700">
                    {e.completados} completados
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">
                    {e.enProgreso} en progreso
                  </span>
                </div>
              </div>
              {e.total > 0 && (
                <div className="mt-3">
                  <div className="h-2 w-full rounded-full bg-[var(--c-border)]">
                    <div
                      className="h-2 rounded-full bg-emerald-500 transition-all"
                      style={{
                        width: `${Math.round((e.completados / e.total) * 100)}%`
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-[var(--c-muted)] text-right">
                    {Math.round((e.completados / e.total) * 100)}% completado
                  </p>
                </div>
              )}
            </article>
          ))}
          </div>
        </section>
      </div>
  );
}
