import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { fetchProgresoHijos, type ChildProgress } from "../services/progreso";
import {
  fetchActividadesHijo, fetchBoletinHijo,
  type ActividadHijo, type MateriaBoletin,
} from "../services/padres";

export default function HijosProgreso() {
  const [busqueda, setBusqueda] = useState("");
  const [area, setArea] = useState<"Todas" | "Matemática" | "Lengua" | "Ciencias" | "Historia" | "Geografía" | "Arte" | "Otro">("Todas");
  const [seleccionado, setSeleccionado] = useState<string | null>(null);
  const [hijosData, setHijosData] = useState<ChildProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actividades, setActividades] = useState<ActividadHijo[]>([]);
  const [boletin, setBoletin] = useState<MateriaBoletin[]>([]);
  const [actividadesLoading, setActividadesLoading] = useState(false);
  const [boletinLoading, setBoletinLoading] = useState(false);
  const [tab, setTab] = useState<"modulos" | "actividades" | "boletin">("modulos");

  useEffect(() => {
    let active = true;
    fetchProgresoHijos()
      .then((data) => {
        if (!active) return;
        setHijosData(data);
        setSeleccionado(data[0]?.id ?? null);
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
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!seleccionado) return;
    let active = true;
    setActividadesLoading(true);
    setBoletinLoading(true);
    fetchActividadesHijo(seleccionado)
      .then((data) => { if (!active) return; setActividades(data); })
      .catch(() => { if (!active) return; setActividades([]); })
      .finally(() => { if (!active) return; setActividadesLoading(false); });
    fetchBoletinHijo(seleccionado)
      .then((data) => { if (!active) return; setBoletin(data.materias ?? []); })
      .catch(() => { if (!active) return; setBoletin([]); })
      .finally(() => { if (!active) return; setBoletinLoading(false); });
    return () => { active = false; };
  }, [seleccionado]);

  const hijos = useMemo(() => {
    const byName = (c: ChildProgress) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.usuario.toLowerCase().includes(busqueda.toLowerCase());
    return hijosData.filter(byName);
  }, [busqueda, hijosData]);

  const current = useMemo(
    () => hijos.find((h) => h.id === seleccionado) ?? hijos[0] ?? null,
    [hijos, seleccionado]
  );

  const modulosFiltrados = useMemo(() => {
    if (!current) return [];
    return current.modulos.filter((m) => area === "Todas" ? true : m.area === area);
  }, [current, area]);

  const onBuscar = (e: ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value);

  const inputCls = "rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]";

  return (
    <main className="flex-1 bg-[var(--c-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        {/* Header + filtros */}
        <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 sm:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
            <div>
              <h1 className="text-xl font-semibold text-[var(--c-text)]">Hijos</h1>
              <p className="text-sm text-[var(--c-muted)]">Seguimiento del progreso por alumno/a.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Buscar por nombre o @usuario"
                value={busqueda}
                onChange={onBuscar}
                className={`w-full sm:w-64 ${inputCls}`}
              />
              <select
                value={area}
                onChange={(e) => setArea(e.target.value as any)}
                className={`w-full sm:w-48 ${inputCls}`}
              >
                {["Todas","Matemática","Lengua","Ciencias","Historia","Geografía","Arte","Otro"].map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Lista de hijos */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
            {loading && (
              <>
                <div className="h-20 rounded-xl animate-pulse bg-[var(--c-border)]" />
                <div className="h-20 rounded-xl animate-pulse bg-[var(--c-border)]" />
              </>
            )}
            {error && <p className="text-sm text-[var(--c-danger)]">Error: {error}</p>}
            {!loading && !error && hijos.map((h) => {
              const initials = h.nombre.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
              const isSelected = seleccionado === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setSeleccionado(h.id)}
                  className={`text-left rounded-xl p-4 border transition-colors ${
                    isSelected
                      ? "bg-[color-mix(in_srgb,var(--c-primary)_10%,transparent)] border-[var(--c-primary)]"
                      : "bg-[var(--c-surface)] hover:bg-[var(--c-bg)] border-[var(--c-border)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--c-primary)] text-white grid place-content-center font-bold text-sm select-none">
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold text-sm text-[var(--c-text)]">{h.nombre}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[color-mix(in_srgb,var(--c-primary)_12%,transparent)] text-[var(--c-primary)]">
                          {h.grado}
                        </span>
                        <span className="text-xs text-[var(--c-muted)]">{h.usuario}</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-[var(--c-border)]">
                        <div
                          style={{ width: `${h.progresoGeneral}%` }}
                          className="h-1.5 rounded-full bg-[var(--c-success)]"
                          aria-label={`Progreso general ${h.progresoGeneral}%`}
                        />
                      </div>
                      <p className="mt-1 text-xs text-[var(--c-muted)]">
                        Progreso general: {h.progresoGeneral}%
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
            {!loading && !error && hijos.length === 0 && (
              <p className="text-sm text-[var(--c-muted)]">No hay hijos registrados.</p>
            )}
          </div>
        </div>

        {/* Detalle del hijo seleccionado */}
        {!loading && !error && current && (
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--c-primary)] text-white grid place-content-center font-bold text-sm select-none">
                {current.nombre.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()}
              </div>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-[var(--c-text)]">{current.nombre}</h2>
                <p className="text-sm text-[var(--c-muted)]">{current.usuario} · {current.grado}</p>
              </div>
              <div className="hidden sm:block">
                <div className="h-1.5 w-48 rounded-full bg-[var(--c-border)]">
                  <div
                    style={{ width: `${current.progresoGeneral}%` }}
                    className="h-1.5 rounded-full bg-[var(--c-success)]"
                  />
                </div>
                <p className="mt-1 text-xs text-[var(--c-muted)] text-right">{current.progresoGeneral}% general</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-5 flex gap-1 border-b border-[var(--c-border)]">
              {([
                { key: "modulos", label: "Módulos" },
                { key: "actividades", label: "Próximas actividades" },
                { key: "boletin", label: "Boletín" },
              ] as const).map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                    tab === t.key
                      ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                      : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-text)]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === "modulos" && (
              <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {modulosFiltrados.map((m) => (
                    <div key={m.id} className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4 hover:bg-[var(--c-bg)] transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-sm text-[var(--c-text)]">{m.titulo}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">{m.area}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              m.estado === "Completado" ? "bg-green-100 text-green-700"
                              : m.estado === "En curso" ? "bg-yellow-100 text-yellow-700"
                              : "bg-[var(--c-bg)] text-[var(--c-muted)]"
                            }`}>{m.estado}</span>
                          </div>
                        </div>
                        <span className="text-xs text-[var(--c-muted)] shrink-0">Última actividad: {m.ultimaActividad}</span>
                      </div>
                      <div className="mt-3 h-1.5 rounded-full bg-[var(--c-border)]">
                        <div style={{ width: `${m.progreso}%` }} className="h-1.5 rounded-full bg-[var(--c-primary)]" />
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs text-[var(--c-muted)]">
                        <span>Progreso</span>
                        <span>{m.progreso}%</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button className="text-xs rounded-lg border border-[var(--c-border)] px-3 py-1 text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">Ver detalles</button>
                        <button className="text-xs rounded-lg border border-[var(--c-border)] px-3 py-1 text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">Abrir módulo</button>
                        <button className="text-xs rounded-lg border border-[var(--c-border)] px-3 py-1 text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors">Informe</button>
                      </div>
                    </div>
                  ))}
                </div>
                {modulosFiltrados.length === 0 && (
                  <p className="text-sm text-[var(--c-muted)] mt-4">No hay módulos para el filtro seleccionado.</p>
                )}
              </div>
            )}

            {tab === "actividades" && (
              <div className="mt-5 space-y-3">
                {actividadesLoading && (
                  <>
                    <div className="h-14 rounded-xl animate-pulse bg-[var(--c-border)]" />
                    <div className="h-14 rounded-xl animate-pulse bg-[var(--c-border)]" />
                  </>
                )}
                {!actividadesLoading && actividades.length === 0 && (
                  <p className="text-sm text-[var(--c-muted)]">No hay actividades próximas para este alumno.</p>
                )}
                {!actividadesLoading && actividades.map((act) => (
                  <div key={act.id}
                    className="flex items-start justify-between gap-3 rounded-xl border border-[var(--c-border)] px-4 py-3">
                    <div className="flex items-start gap-3">
                      <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                        act.tipo === "evaluacion"
                          ? "bg-amber-100 text-amber-700"
                          : act.tipo === "evento"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {act.tipo === "evaluacion" ? "📝" : act.tipo === "evento" ? "📅" : "📖"}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--c-text)]">{act.titulo}</p>
                        <p className="text-xs text-[var(--c-muted)]">{act.aulaNombre} · {act.when}</p>
                        {act.descripcion && (
                          <p className="text-xs text-[var(--c-muted)] mt-0.5">{act.descripcion}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === "boletin" && (
              <div className="mt-5 space-y-3">
                {boletinLoading && (
                  <>
                    <div className="h-24 rounded-xl animate-pulse bg-[var(--c-border)]" />
                    <div className="h-24 rounded-xl animate-pulse bg-[var(--c-border)]" />
                  </>
                )}
                {!boletinLoading && boletin.length === 0 && (
                  <p className="text-sm text-[var(--c-muted)]">No hay evaluaciones formales registradas.</p>
                )}
                {!boletinLoading && boletin.map((materia) => (
                  <div key={materia.materia}
                    className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-[var(--c-text)]">{materia.materia}</h3>
                      {materia.promedio !== null && (
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          materia.promedio >= 7
                            ? "bg-emerald-100 text-emerald-700"
                            : materia.promedio >= 4
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-600"
                        }`}>
                          Promedio: {materia.promedio}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 space-y-2">
                      {materia.evaluaciones.slice(0, 5).map((ev, i) => (
                        <div key={`${ev.quizId}-${i}`}
                          className="flex items-center justify-between rounded-lg bg-[var(--c-bg)] px-3 py-2 text-xs">
                          <span className="text-[var(--c-muted)]">{ev.quizTitle ?? "Evaluación"}</span>
                          <div className="flex items-center gap-3">
                            {ev.fecha && (
                              <span className="text-[var(--c-muted)]">
                                {new Date(ev.fecha).toLocaleDateString("es-AR")}
                              </span>
                            )}
                            <span className={`font-semibold ${
                              ev.score !== null ? "text-[var(--c-text)]" : "text-[var(--c-muted)]"
                            }`}>
                              {ev.score !== null
                                ? `${ev.score}${ev.maxScore ? `/${ev.maxScore}` : ""}`
                                : "Sin nota"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
