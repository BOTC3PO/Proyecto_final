import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import {
  fetchCalendarioUnificado, crearEventoEscuela,
  crearEventoAula, eliminarEventoEscuela,
  eliminarEventoAula,
  type EventoCalendario, type TipoEventoAula,
  type TipoEventoEscuela,
} from "../services/calendarioUnificado";

// ── Config visual por tipo ──────────────────────────────────

const TIPO_CONFIG: Record<string, {
  label: string;
  color: string;
  bg: string;
  border: string;
  peso: number;
}> = {
  clase:                { label: "Clase",          color: "text-blue-700",    bg: "bg-blue-50",    border: "border-blue-200",    peso: 1 },
  evaluacion:           { label: "Evaluación",     color: "text-amber-700",   bg: "bg-amber-50",   border: "border-amber-400",   peso: 2 },
  evento:               { label: "Evento",         color: "text-violet-700",  bg: "bg-violet-50",  border: "border-violet-200",  peso: 1 },
  feriado:              { label: "Feriado",        color: "text-red-700",     bg: "bg-red-50",     border: "border-red-400",     peso: 3 },
  vacaciones:           { label: "Vacaciones",     color: "text-orange-700",  bg: "bg-orange-50",  border: "border-orange-400",  peso: 3 },
  sin_clases:           { label: "Sin clases",     color: "text-slate-700",   bg: "bg-slate-100",  border: "border-slate-400",   peso: 3 },
  acto_escolar:         { label: "Acto escolar",   color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-300", peso: 2 },
  evento_institucional: { label: "Institucional",  color: "text-teal-700",    bg: "bg-teal-50",    border: "border-teal-300",    peso: 2 },
};

const TIPOS_ESCUELA: TipoEventoEscuela[] = [
  "feriado", "vacaciones", "acto_escolar",
  "evento_institucional", "sin_clases",
];

const TIPOS_AULA: TipoEventoAula[] = [
  "clase", "evaluacion", "evento", "sin_clases",
];

const DIAS = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
const MESES = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

function getDias(year: number, month: number): (Date | null)[] {
  const primer = new Date(year, month - 1, 1);
  const ultimo = new Date(year, month, 0);
  const dias: (Date | null)[] = [];
  for (let i = 0; i < primer.getDay(); i++) dias.push(null);
  for (let d = 1; d <= ultimo.getDate(); d++) {
    dias.push(new Date(year, month - 1, d));
  }
  return dias;
}

function toISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function rangoMes(year: number, month: number) {
  const desde = `${year}-${String(month).padStart(2,"0")}-01`;
  const hasta = `${year}-${String(month).padStart(2,"0")}-${
    new Date(year, month, 0).getDate()
  }`;
  return { desde, hasta };
}

function eventoEnDia(ev: EventoCalendario, dia: string): boolean {
  return ev.fechaInicio <= dia && ev.fechaFin >= dia;
}

export default function ProfesorCalendario() {
  const { user } = useAuth();
  const role = user?.role ?? "";
  const canEditEscuela = ["DIRECTIVO","ADMIN"].includes(role);
  const canEditAula = ["TEACHER","DIRECTIVO","ADMIN"].includes(role);

  const hoy = new Date();
  const [year, setYear] = useState(hoy.getFullYear());
  const [month, setMonth] = useState(hoy.getMonth() + 1);
  const [eventos, setEventos] = useState<EventoCalendario[]>([]);
  const [loading, setLoading] = useState(false);
  const [diaSeleccionado, setDiaSeleccionado] =
    useState<string | null>(null);
  const [aulas, setAulas] = useState<Classroom[]>([]);

  const [mostrarEscuela, setMostrarEscuela] = useState(true);
  const [mostrarAulas, setMostrarAulas] = useState(true);

  const [tab, setTab] =
    useState<"escuela" | "aula">(canEditEscuela ? "escuela" : "aula");
  const [form, setForm] = useState({
    tipo: canEditEscuela ? "feriado" : "clase",
    titulo: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    aulaId: "",
  });
  const [guardando, setGuardando] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        const items = data.items ?? [];
        const misAulas = role === "TEACHER"
          ? items.filter((a) =>
              a.createdBy === user.id ||
              a.teacherIds?.includes(user.id)
            )
          : items;
        setAulas(misAulas);
        if (misAulas[0]) {
          setForm((f) => ({ ...f, aulaId: misAulas[0].id }));
        }
      })
      .catch(() => {});
  }, [user?.id, role]);

  const cargarEventos = () => {
    const { desde, hasta } = rangoMes(year, month);
    setLoading(true);
    fetchCalendarioUnificado(desde, hasta)
      .then(setEventos)
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { cargarEventos(); }, [year, month]);

  const dias = getDias(year, month);

  const eventosPorDia = (dia: string) => {
    return eventos.filter((ev) => {
      if (!mostrarEscuela && ev.origen === "escuela") return false;
      if (!mostrarAulas && ev.origen === "aula") return false;
      return eventoEnDia(ev, dia);
    }).sort((a, b) =>
      (TIPO_CONFIG[b.tipo]?.peso ?? 1) -
      (TIPO_CONFIG[a.tipo]?.peso ?? 1)
    );
  };

  const prevMes = () => {
    if (month === 1) { setYear((y) => y - 1); setMonth(12); }
    else setMonth((m) => m - 1);
  };

  const nextMes = () => {
    if (month === 12) { setYear((y) => y + 1); setMonth(1); }
    else setMonth((m) => m + 1);
  };

  const handleDiaClick = (fecha: string) => {
    setDiaSeleccionado(fecha);
    setForm((f) => ({
      ...f,
      fechaInicio: fecha,
      fechaFin: fecha,
    }));
    setMsg(null);
  };

  const handleGuardar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titulo.trim() || !form.fechaInicio) return;
    setGuardando(true);
    setMsg(null);
    try {
      if (tab === "escuela") {
        await crearEventoEscuela({
          tipo: form.tipo as TipoEventoEscuela,
          titulo: form.titulo.trim(),
          descripcion: form.descripcion.trim() || undefined,
          fechaInicio: form.fechaInicio,
          fechaFin: form.fechaFin || form.fechaInicio,
        });
      } else {
        await crearEventoAula({
          aulaId: form.aulaId,
          tipo: form.tipo as TipoEventoAula,
          titulo: form.titulo.trim(),
          descripcion: form.descripcion.trim() || undefined,
          fechaInicio: form.fechaInicio,
          fechaFin: form.fechaFin || undefined,
        });
      }
      setMsg("✓ Evento guardado");
      setForm((f) => ({ ...f, titulo: "", descripcion: "" }));
      cargarEventos();
    } catch {
      setMsg("No se pudo guardar el evento.");
    } finally {
      setGuardando(false);
    }
  };

  const handleEliminar = async (ev: EventoCalendario) => {
    try {
      if (ev.origen === "escuela") {
        await eliminarEventoEscuela(ev.id);
      } else {
        await eliminarEventoAula(ev.id);
      }
      setEventos((prev) => prev.filter((e) => e.id !== ev.id));
    } catch { /* ignorar */ }
  };

  const eventosHoy = diaSeleccionado
    ? eventosPorDia(diaSeleccionado) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">Calendario</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">Vista unificada de tu escuela y tus aulas.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <button type="button" onClick={prevMes}
              className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm hover:bg-[var(--c-bg)]">
              ←
            </button>
            <span className="w-44 text-center text-base font-semibold text-[var(--c-text)]">
              {MESES[month - 1]} {year}
            </span>
            <button type="button" onClick={nextMes}
              className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm hover:bg-[var(--c-bg)]">
              →
            </button>
          </div>
          <button type="button"
            onClick={() => {
              setYear(hoy.getFullYear());
              setMonth(hoy.getMonth() + 1);
            }}
            className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-muted)] hover:bg-[var(--c-bg)]">
            Hoy
          </button>

          <div className="flex gap-2 ml-auto">
            <button type="button"
              onClick={() => setMostrarEscuela((v) => !v)}
              className={`rounded-lg px-3 py-1 text-xs font-medium border transition-colors ${
                mostrarEscuela
                  ? "bg-teal-50 text-teal-700 border-teal-300"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] border-[var(--c-border)]"
              }`}>
              🏫 Escuela
            </button>
            <button type="button"
              onClick={() => setMostrarAulas((v) => !v)}
              className={`rounded-lg px-3 py-1 text-xs font-medium border transition-colors ${
                mostrarAulas
                  ? "bg-blue-50 text-blue-700 border-blue-300"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] border-[var(--c-border)]"
              }`}>
              📚 Aulas
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(TIPO_CONFIG).map(([tipo, cfg]) => (
            <span key={tipo}
              className={`rounded-full border px-2 py-0.5 text-xs font-medium ${cfg.bg} ${cfg.color} ${cfg.border}`}>
              {cfg.label}
            </span>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="grid grid-cols-7 border-b border-[var(--c-border)] bg-[var(--c-bg)]">
              {DIAS.map((d) => (
                <div key={d}
                  className="py-2 text-center text-xs font-semibold text-[var(--c-muted)]">
                  {d}
                </div>
              ))}
            </div>
            {loading ? (
              <div className="p-4 space-y-2">
                {[1,2,3,4].map(i => <div key={i} className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
              </div>
            ) : (
              <div className="grid grid-cols-7">
                {dias.map((dia, i) => {
                  if (!dia) {
                    return (
                      <div key={`pad-${i}`}
                        className="min-h-[90px] border-b border-r border-[var(--c-border)] bg-[var(--c-bg)]" />
                    );
                  }
                  const fechaStr = toISO(dia);
                  const esHoy = fechaStr === toISO(hoy);
                  const esSel = fechaStr === diaSeleccionado;
                  const evs = eventosPorDia(fechaStr);
                  const tieneGrave = evs.some(
                    (e) => (TIPO_CONFIG[e.tipo]?.peso ?? 1) >= 3
                  );

                  return (
                    <button
                      key={fechaStr}
                      type="button"
                      onClick={() => handleDiaClick(fechaStr)}
                      className={`min-h-[90px] border-b border-r border-[var(--c-border)] p-1.5 text-left transition-colors hover:bg-[var(--c-bg)] ${
                        esSel ? "bg-blue-50" : ""
                      } ${
                        tieneGrave && !esSel ? "bg-red-50/30" : ""
                      }`}
                    >
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                        esHoy
                          ? "bg-blue-600 text-white"
                          : "text-[var(--c-text)]"
                      }`}>
                        {dia.getDate()}
                      </span>
                      <div className="mt-1 space-y-0.5">
                        {evs.slice(0, 3).map((ev) => {
                          const cfg = TIPO_CONFIG[ev.tipo];
                          return (
                            <div key={ev.id}
                              className={`truncate rounded px-1 py-0.5 text-[10px] font-medium border ${cfg?.bg ?? "bg-slate-50"} ${cfg?.color ?? "text-slate-600"} ${cfg?.border ?? "border-slate-200"}`}>
                              {ev.origen === "escuela" ? "🏫 " : ""}
                              {ev.titulo}
                            </div>
                          );
                        })}
                        {evs.length > 3 && (
                          <div className="text-[10px] text-[var(--c-muted)] pl-1">
                            +{evs.length - 3} más
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {diaSeleccionado && (
              <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
                <h2 className="text-sm font-semibold text-[var(--c-text)] mb-3">
                  {new Date(diaSeleccionado + "T12:00:00")
                    .toLocaleDateString("es-AR", {
                      weekday: "long", day: "numeric",
                      month: "long"
                    })}
                </h2>
                {eventosHoy.length === 0 ? (
                  <p className="text-xs text-[var(--c-muted)]">
                    Sin eventos en este día.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {eventosHoy.map((ev) => {
                      const cfg = TIPO_CONFIG[ev.tipo];
                      const canDelete =
                        (ev.origen === "escuela" && canEditEscuela) ||
                        (ev.origen === "aula" && canEditAula);
                      return (
                        <div key={ev.id}
                          className={`rounded-xl border p-3 ${cfg?.bg ?? "bg-slate-50"} ${cfg?.border ?? "border-slate-200"}`}>
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs">
                                  {ev.origen === "escuela" ? "🏫" : "📚"}
                                </span>
                                <p className={`text-sm font-semibold truncate ${cfg?.color ?? "text-slate-700"}`}>
                                  {ev.titulo}
                                </p>
                              </div>
                              {ev.aulaNombre && (
                                <p className="text-xs text-[var(--c-muted)] mt-0.5">
                                  {ev.aulaNombre}
                                </p>
                              )}
                              {ev.descripcion && (
                                <p className="text-xs text-[var(--c-muted)] mt-0.5">
                                  {ev.descripcion}
                                </p>
                              )}
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${cfg?.bg} ${cfg?.color} ${cfg?.border}`}>
                                  {cfg?.label ?? ev.tipo}
                                </span>
                                {ev.fechaFin !== ev.fechaInicio && (
                                  <span className="text-[10px] text-[var(--c-muted)]">
                                    hasta {new Date(
                                      ev.fechaFin + "T12:00:00"
                                    ).toLocaleDateString("es-AR", {
                                      day: "numeric", month: "short"
                                    })}
                                  </span>
                                )}
                              </div>
                            </div>
                            {canDelete && (
                              <button
                                type="button"
                                onClick={() => handleEliminar(ev)}
                                className="shrink-0 text-[var(--c-muted)] hover:text-red-400 transition-colors"
                                title="Eliminar"
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {(canEditEscuela || canEditAula) && (
              <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-4">
                <h2 className="text-sm font-semibold text-[var(--c-text)] mb-3">
                  Agregar evento
                </h2>

                {canEditEscuela && canEditAula && (
                  <div className="flex gap-1 mb-3 border-b border-[var(--c-border)]">
                    {(["escuela","aula"] as const).map((t) => (
                      <button key={t} type="button"
                        onClick={() => {
                          setTab(t);
                          setForm((f) => ({
                            ...f,
                            tipo: t === "escuela" ? "feriado" : "clase",
                          }));
                        }}
                        className={`px-3 py-1.5 text-xs font-medium border-b-2 -mb-px transition-colors ${
                          tab === t
                            ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                            : "border-transparent text-[var(--c-muted)]"
                        }`}>
                        {t === "escuela" ? "🏫 Escuela" : "📚 Aula"}
                      </button>
                    ))}
                  </div>
                )}

                <form onSubmit={handleGuardar} className="space-y-3">
                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                    Tipo
                    <select
                      value={form.tipo}
                      onChange={(e) => setForm((f) => ({
                        ...f, tipo: e.target.value
                      }))}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    >
                      {(tab === "escuela" ? TIPOS_ESCUELA : TIPOS_AULA).map((t) => (
                        <option key={t} value={t}>
                          {TIPO_CONFIG[t]?.label ?? t}
                        </option>
                      ))}
                    </select>
                  </label>

                  {tab === "aula" && aulas.length > 0 && (
                    <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                      Aula
                      <select
                        value={form.aulaId}
                        onChange={(e) => setForm((f) => ({
                          ...f, aulaId: e.target.value
                        }))}
                        className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                      >
                        {aulas.map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}

                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                    Título *
                    <input type="text" required
                      value={form.titulo}
                      onChange={(e) => setForm((f) => ({
                        ...f, titulo: e.target.value
                      }))}
                      placeholder="Ej: Día del maestro"
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                      Desde *
                      <input type="date" required
                        value={form.fechaInicio}
                        onChange={(e) => setForm((f) => ({
                          ...f, fechaInicio: e.target.value,
                          fechaFin: f.fechaFin < e.target.value
                            ? e.target.value : f.fechaFin,
                        }))}
                        className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                      Hasta
                      <input type="date"
                        value={form.fechaFin}
                        min={form.fechaInicio}
                        onChange={(e) => setForm((f) => ({
                          ...f, fechaFin: e.target.value
                        }))}
                        className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">
                    Descripción
                    <textarea rows={2}
                      value={form.descripcion}
                      onChange={(e) => setForm((f) => ({
                        ...f, descripcion: e.target.value
                      }))}
                      placeholder="Opcional"
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>

                  <button type="submit"
                    disabled={guardando || !form.titulo.trim() || !form.fechaInicio}
                    className="w-full rounded-xl bg-[var(--c-primary)] py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors">
                    {guardando ? "Guardando..." : "Guardar evento"}
                  </button>

                  {msg && (
                    <p className={`text-xs ${
                      msg.startsWith("✓") ? "text-emerald-600" : "text-[var(--c-danger)]"
                    }`}>
                      {msg}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}
