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
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900">
          Calendario
        </h1>
        <p className="text-slate-500">
          Vista unificada de tu escuela y tus aulas.
        </p>
      </header>

      {/* Controles de navegación */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <button type="button" onClick={prevMes}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
            ←
          </button>
          <span className="w-44 text-center text-base font-semibold text-slate-800">
            {MESES[month - 1]} {year}
          </span>
          <button type="button" onClick={nextMes}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
            →
          </button>
        </div>
        <button type="button"
          onClick={() => {
            setYear(hoy.getFullYear());
            setMonth(hoy.getMonth() + 1);
          }}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500 hover:bg-slate-50">
          Hoy
        </button>

        {/* Filtros */}
        <div className="flex gap-2 ml-auto">
          <button type="button"
            onClick={() => setMostrarEscuela((v) => !v)}
            className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
              mostrarEscuela
                ? "bg-teal-50 text-teal-700 border-teal-300"
                : "bg-slate-50 text-slate-400 border-slate-200"
            }`}>
            🏫 Escuela
          </button>
          <button type="button"
            onClick={() => setMostrarAulas((v) => !v)}
            className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
              mostrarAulas
                ? "bg-blue-50 text-blue-700 border-blue-300"
                : "bg-slate-50 text-slate-400 border-slate-200"
            }`}>
            📚 Aulas
          </button>
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(TIPO_CONFIG).map(([tipo, cfg]) => (
          <span key={tipo}
            className={`rounded-full border px-2 py-0.5 text-xs font-medium ${cfg.bg} ${cfg.color} ${cfg.border}`}>
            {cfg.label}
          </span>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        {/* Grilla calendario */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Cabecera */}
          <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
            {DIAS.map((d) => (
              <div key={d}
                className="py-2 text-center text-xs font-semibold text-slate-400">
                {d}
              </div>
            ))}
          </div>
          {/* Celdas */}
          {loading ? (
            <div className="p-8 text-center text-sm text-slate-400 animate-pulse">
              Cargando calendario...
            </div>
          ) : (
            <div className="grid grid-cols-7">
              {dias.map((dia, i) => {
                if (!dia) {
                  return (
                    <div key={`pad-${i}`}
                      className="min-h-[90px] border-b border-r border-slate-100 bg-slate-50/50" />
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
                    className={`min-h-[90px] border-b border-r border-slate-100 p-1.5 text-left transition-colors hover:bg-slate-50 ${
                      esSel ? "bg-blue-50" : ""
                    } ${
                      tieneGrave && !esSel ? "bg-red-50/30" : ""
                    }`}
                  >
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                      esHoy
                        ? "bg-blue-600 text-white"
                        : "text-slate-700"
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
                        <div className="text-[10px] text-slate-400 pl-1">
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

        {/* Panel lateral */}
        <div className="flex flex-col gap-4">
          {/* Eventos del día seleccionado */}
          {diaSeleccionado && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-800 mb-3">
                {new Date(diaSeleccionado + "T12:00:00")
                  .toLocaleDateString("es-AR", {
                    weekday: "long", day: "numeric",
                    month: "long"
                  })}
              </h2>
              {eventosHoy.length === 0 ? (
                <p className="text-xs text-slate-400">
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
                              <p className="text-xs text-slate-400 mt-0.5">
                                {ev.aulaNombre}
                              </p>
                            )}
                            {ev.descripcion && (
                              <p className="text-xs text-slate-500 mt-0.5">
                                {ev.descripcion}
                              </p>
                            )}
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${cfg?.bg} ${cfg?.color} ${cfg?.border}`}>
                                {cfg?.label ?? ev.tipo}
                              </span>
                              {ev.fechaFin !== ev.fechaInicio && (
                                <span className="text-[10px] text-slate-400">
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
                              className="shrink-0 text-slate-300 hover:text-red-400 transition-colors"
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

          {/* Formulario — solo para roles con permiso */}
          {(canEditEscuela || canEditAula) && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-800 mb-3">
                Agregar evento
              </h2>

              {/* Tabs escuela/aula */}
              {canEditEscuela && canEditAula && (
                <div className="flex gap-1 mb-3 border-b border-slate-200">
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
                          ? "border-blue-600 text-blue-600"
                          : "border-transparent text-slate-400"
                      }`}>
                      {t === "escuela" ? "🏫 Escuela" : "📚 Aula"}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={handleGuardar} className="space-y-3">
                <label className="flex flex-col gap-1 text-xs font-medium text-slate-700">
                  Tipo
                  <select
                    value={form.tipo}
                    onChange={(e) => setForm((f) => ({
                      ...f, tipo: e.target.value
                    }))}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  >
                    {(tab === "escuela" ? TIPOS_ESCUELA : TIPOS_AULA).map((t) => (
                      <option key={t} value={t}>
                        {TIPO_CONFIG[t]?.label ?? t}
                      </option>
                    ))}
                  </select>
                </label>

                {tab === "aula" && aulas.length > 0 && (
                  <label className="flex flex-col gap-1 text-xs font-medium text-slate-700">
                    Aula
                    <select
                      value={form.aulaId}
                      onChange={(e) => setForm((f) => ({
                        ...f, aulaId: e.target.value
                      }))}
                      className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
                    >
                      {aulas.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.name}
                        </option>
                      ))}
                    </select>
                  </label>
                )}

                <label className="flex flex-col gap-1 text-xs font-medium text-slate-700">
                  Título *
                  <input type="text" required
                    value={form.titulo}
                    onChange={(e) => setForm((f) => ({
                      ...f, titulo: e.target.value
                    }))}
                    placeholder="Ej: Día del maestro"
                    className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <label className="flex flex-col gap-1 text-xs font-medium text-slate-700">
                    Desde *
                    <input type="date" required
                      value={form.fechaInicio}
                      onChange={(e) => setForm((f) => ({
                        ...f, fechaInicio: e.target.value,
                        fechaFin: f.fechaFin < e.target.value
                          ? e.target.value : f.fechaFin,
                      }))}
                      className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-xs font-medium text-slate-700">
                    Hasta
                    <input type="date"
                      value={form.fechaFin}
                      min={form.fechaInicio}
                      onChange={(e) => setForm((f) => ({
                        ...f, fechaFin: e.target.value
                      }))}
                      className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1 text-xs font-medium text-slate-700">
                  Descripción
                  <textarea rows={2}
                    value={form.descripcion}
                    onChange={(e) => setForm((f) => ({
                      ...f, descripcion: e.target.value
                    }))}
                    placeholder="Opcional"
                    className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </label>

                <button type="submit"
                  disabled={guardando || !form.titulo.trim() || !form.fechaInicio}
                  className="w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors">
                  {guardando ? "Guardando..." : "Guardar evento"}
                </button>

                {msg && (
                  <p className={`text-xs ${
                    msg.startsWith("✓") ? "text-emerald-600" : "text-red-500"
                  }`}>
                    {msg}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
