import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import { useHasAnyRole, useIsStaff } from "../auth/use-roles";
import { apiGet } from "../lib/api";
import type { Classroom } from "../domain/classroom/classroom.types";
import { useI18n } from "../i18n/I18nContext";
import { makeValidityMessageHandlers } from "../lib/formValidationMessages";
import {
  fetchCalendarioUnificado, crearEventoEscuela,
  crearEventoAula, eliminarEventoEscuela,
  eliminarEventoAula, editarEventoEscuela, editarEventoAula,
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

const TIPO_LABEL_KEY: Record<string, string> = {
  clase:                "profesorCalendario.clase",
  evaluacion:           "profesorCalendario.evaluacion",
  evento:               "profesorCalendario.evento",
  feriado:              "profesorCalendario.feriado",
  vacaciones:           "profesorCalendario.vacaciones",
  sin_clases:           "profesorCalendario.sinClases",
  acto_escolar:         "profesorCalendario.actoEscolar",
  evento_institucional: "profesorCalendario.institucional",
};

const DIAS_KEYS = ["profesorCalendario.dom","profesorCalendario.lun","profesorCalendario.mar","profesorCalendario.mie","profesorCalendario.jue","profesorCalendario.vie","profesorCalendario.sab"];
const MESES_KEYS = ["profesorCalendario.enero","profesorCalendario.febrero","profesorCalendario.marzo","profesorCalendario.abril","profesorCalendario.mayo","profesorCalendario.junio","profesorCalendario.julio","profesorCalendario.agosto","profesorCalendario.septiembre","profesorCalendario.octubre","profesorCalendario.noviembre","profesorCalendario.diciembre"];

const TIPOS_ESCUELA: TipoEventoEscuela[] = [
  "feriado", "vacaciones", "acto_escolar",
  "evento_institucional", "sin_clases",
];

const TIPOS_AULA: TipoEventoAula[] = [
  "clase", "evaluacion", "evento", "sin_clases",
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
  const { t, lang } = useI18n();
  const { onInvalid, onInput } = makeValidityMessageHandlers(t);
  const { user } = useAuth();
  // MULTIROL-02: canEditEscuela = directivo o admin. canEditAula = staff.
  // Migrado a helpers centralizados (multi-rol friendly): un TEACHER+USER
  // puede editar aulas (TEACHER en su array), un DIRECTIVO+USER puede
  // editar escuela (DIRECTIVO).
  const isStaff = useIsStaff();
  const canEditEscuela = useHasAnyRole(["DIRECTIVO", "ADMIN"]);
  const canEditAula = isStaff;

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
  // FIX-TEST4-CALENDARIO-EDIT — modal de edición. Cuando es null,
  // no se muestra. Cuando tiene un evento, se renderiza el form
  // prellenado con los datos del evento.
  const [editando, setEditando] = useState<EventoCalendario | null>(null);
  const [editForm, setEditForm] = useState({
    tipo: "" as TipoEventoEscuela | TipoEventoAula,
    titulo: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    aulaId: "",
  });
  const [editGuardando, setEditGuardando] = useState(false);

  useEffect(() => {
    if (!user?.id) return;
    apiGet<{ items: Classroom[] }>("/api/aulas")
      .then((data) => {
        const items = data.items ?? [];
        // QA-FIX-08 — el filtro "docente del aula" lo calcula el
        // back (criterio canónico de QA-FIX-05: admin, owner por
        // createdBy/teacherId/teacherOfRecord, o miembro con
        // rolEnClase === "TEACHER"). Antes se intentaba filtrar
        // acá con `a.teacherIds?.includes(user.id)`, pero ese
        // campo es phantom (el back usa teacherId/teacherOfRecord
        // singulares y nunca poblaba teacherIds), así que un
        // TEACHER-miembro quedaba fuera del dropdown.
        const misAulas = items.filter((a) => a.viewerIsTeacher === true);
        setAulas(misAulas);
        // FIX-CALENDARIO-B: solo autoseccionar la primera aula si
        // el usuario está en el tab "aula" (TEACHER por default).
        // DIRECTIVO/ADMIN arrancan en el tab "escuela" y ahí el
        // default debe ser "Global" (aulaId vacío) — sino el
        // directivo crea eventos escuela acotados sin querer.
        if (misAulas[0] && !canEditEscuela) {
          setForm((f) => ({ ...f, aulaId: misAulas[0].id }));
        }
      })
      .catch(() => {});
  }, [user?.id, canEditEscuela]);

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
    const tabEfectivo = canEditEscuela ? tab : "aula";
    try {
      if (tabEfectivo === "escuela") {
        // FIX-CALENDARIO-B: si el usuario eligió un aula en el
        // tab escuela, mandar `aulaId` para acotar el evento.
        // Si está vacío, se omite (evento global).
        await crearEventoEscuela({
          tipo: form.tipo as TipoEventoEscuela,
          titulo: form.titulo.trim(),
          descripcion: form.descripcion.trim() || undefined,
          fechaInicio: form.fechaInicio,
          fechaFin: form.fechaFin || form.fechaInicio,
          aulaId: form.aulaId || undefined,
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
      setMsg(t("profesorCalendario.eventoGuardado"));
      setForm((f) => ({ ...f, titulo: "", descripcion: "" }));
      cargarEventos();
    } catch {
      setMsg(t("profesorCalendario.noSePudoGuardarEl"));
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

  // FIX-TEST4-CALENDARIO-EDIT — abrir el modal con los datos del
  // evento prellenados. Para escuela, el aulaId es opcional.
  const handleAbrirEditar = (ev: EventoCalendario) => {
    setEditando(ev);
    setEditForm({
      tipo: ev.tipo,
      titulo: ev.titulo,
      descripcion: ev.descripcion ?? "",
      fechaInicio: ev.fechaInicio,
      fechaFin: ev.fechaFin,
      aulaId: ev.aulaId ?? "",
    });
  };

  const handleCerrarEditar = () => {
    setEditando(null);
    setEditGuardando(false);
  };

  const handleGuardarEdicion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editando) return;
    if (!editForm.titulo.trim() || !editForm.fechaInicio) return;
    setEditGuardando(true);
    try {
      if (editando.origen === "escuela") {
        await editarEventoEscuela(editando.id, {
          tipo: editForm.tipo as TipoEventoEscuela,
          titulo: editForm.titulo.trim(),
          descripcion: editForm.descripcion.trim(),
          fechaInicio: editForm.fechaInicio,
          fechaFin: editForm.fechaFin || editForm.fechaInicio,
          aulaId: editForm.aulaId || undefined,
        });
      } else {
        await editarEventoAula(editando.id, {
          tipo: editForm.tipo as TipoEventoAula,
          titulo: editForm.titulo.trim(),
          descripcion: editForm.descripcion.trim(),
          fechaInicio: editForm.fechaInicio,
          fechaFin: editForm.fechaFin || undefined,
        });
      }
      cargarEventos();
      handleCerrarEditar();
    } catch { /* ignorar */ }
    finally { setEditGuardando(false); }
  };

  const eventosHoy = diaSeleccionado
    ? eventosPorDia(diaSeleccionado) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-[var(--c-text)]">{t("nav.calendario")}</h1>
          <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("profesorCalendario.vistaUnificadaDeTuEscuela")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <button type="button" onClick={prevMes}
              className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm hover:bg-[var(--c-bg)]">
              ←
            </button>
            <span className="w-44 text-center text-base font-semibold text-[var(--c-text)]">
              {t(MESES_KEYS[month - 1])} {year}
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
            className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-muted)] hover:bg-[var(--c-bg)]">{t("common.hoy")}</button>

          <div className="flex gap-2 ml-auto">
            <button type="button"
              onClick={() => setMostrarEscuela((v) => !v)}
              className={`rounded-lg px-3 py-1 text-xs font-medium border transition-colors ${
                mostrarEscuela
                  ? "bg-teal-50 text-teal-700 border-teal-300"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] border-[var(--c-border)]"
              }`}>{t("profesorCalendario.escuela")}</button>
            <button type="button"
              onClick={() => setMostrarAulas((v) => !v)}
              className={`rounded-lg px-3 py-1 text-xs font-medium border transition-colors ${
                mostrarAulas
                  ? "bg-blue-50 text-blue-700 border-blue-300"
                  : "bg-[var(--c-bg)] text-[var(--c-muted)] border-[var(--c-border)]"
              }`}>{t("profesorCalendario.aulas")}</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(TIPO_CONFIG).map(([tipo, cfg]) => (
            <span key={tipo}
              className={`rounded-full border px-2 py-0.5 text-xs font-medium ${cfg.bg} ${cfg.color} ${cfg.border}`}>
              {TIPO_LABEL_KEY[tipo] ? t(TIPO_LABEL_KEY[tipo]) : cfg.label}
            </span>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="grid grid-cols-7 border-b border-[var(--c-border)] bg-[var(--c-bg)]">
              {DIAS_KEYS.map((dk) => (
                <div key={dk}
                  className="py-2 text-center text-xs font-semibold text-[var(--c-muted)]">
                  {t(dk)}
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
                            +{evs.length - 3} {t("comun.mas")}
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
                    .toLocaleDateString(lang, {
                      weekday: "long", day: "numeric",
                      month: "long"
                    })}
                </h2>
                {eventosHoy.length === 0 ? (
                  <p className="text-xs text-[var(--c-muted)]">{t("profesorCalendario.sinEventosEnEsteDia")}</p>
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
                                  {TIPO_LABEL_KEY[ev.tipo] ? t(TIPO_LABEL_KEY[ev.tipo]) : (cfg?.label ?? ev.tipo)}
                                </span>
                                {ev.fechaFin !== ev.fechaInicio && (
                                  <span className="text-[10px] text-[var(--c-muted)]">
                                    hasta {new Date(
                                      ev.fechaFin + "T12:00:00"
                                    ).toLocaleDateString(lang, {
                                      day: "numeric", month: "short"
                                    })}
                                  </span>
                                )}
                              </div>
                            </div>
                            {canDelete && (
                              <div className="shrink-0 flex items-center gap-1">
                                {/* FIX-TEST4-CALENDARIO-EDIT — botón Editar
                                    junto a Eliminar. Mismas reglas de
                                    ownership que el delete. */}
                                <button
                                  type="button"
                                  onClick={() => handleAbrirEditar(ev)}
                                  className="rounded-md px-2 py-1 text-[11px] font-medium text-[var(--c-primary)] hover:bg-[var(--c-bg)] transition-colors"
                                  title={t("comun.editar")}
                                >{t("comun.editar")}</button>
                                <button
                                  type="button"
                                  onClick={() => handleEliminar(ev)}
                                  className="text-[var(--c-muted)] hover:text-red-400 transition-colors px-1"
                                  title={t("comun.eliminar")}
                                >
                                  ✕
                                </button>
                              </div>
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
                <h2 className="text-sm font-semibold text-[var(--c-text)] mb-3">{t("profesorCalendario.agregarEvento")}</h2>

                {canEditEscuela && canEditAula && (
                  <div className="flex gap-1 mb-3 border-b border-[var(--c-border)]">
                    {(["escuela","aula"] as const).map((tabKey) => (
                      <button key={tabKey} type="button"
                        onClick={() => {
                          setTab(tabKey);
                          setForm((f) => ({
                            ...f,
                            tipo: tabKey === "escuela" ? "feriado" : "clase",
                            // FIX-CALENDARIO-B: resetear el aulaId al
                            // cambiar de tab para que el dropdown
                            // escuela arranque en "Global".
                            aulaId: tabKey === "aula" && aulas[0] ? aulas[0].id : "",
                          }));
                        }}
                        className={`px-3 py-1.5 text-xs font-medium border-b-2 -mb-px transition-colors ${
                          tab === tabKey
                            ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                            : "border-transparent text-[var(--c-muted)]"
                        }`}>
                        {tabKey === "escuela" ? t("profesorCalendario.escuela") : t("profesorCalendario.aula")}
                      </button>
                    ))}
                  </div>
                )}

                <form onSubmit={handleGuardar} className="space-y-3">
                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("comun.tipo")}<select
                      value={form.tipo}
                      onChange={(e) => setForm((f) => ({
                        ...f, tipo: e.target.value
                      }))}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    >
                      {(tab === "escuela" ? TIPOS_ESCUELA : TIPOS_AULA).map((tv) => (
                        <option key={tv} value={tv}>
                          {TIPO_LABEL_KEY[tv] ? t(TIPO_LABEL_KEY[tv]) : (TIPO_CONFIG[tv]?.label ?? tv)}
                        </option>
                      ))}
                    </select>
                  </label>

                  {tab === "aula" && aulas.length > 0 && (
                    <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("comun.aula")}<select
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

                  {/* FIX-CALENDARIO-B: dropdown opcional de aula en
                      el tab escuela. Vacío = global; con valor =
                      acotado a esa aula. El directivo/admin ve
                      todas las aulas de la escuela. */}
                  {tab === "escuela" && aulas.length > 0 && (
                    <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorCalendario.aplicarA")}<select
                        value={form.aulaId}
                        onChange={(e) => setForm((f) => ({
                          ...f, aulaId: e.target.value
                        }))}
                        className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                      >
                        <option value="">{t("profesorCalendario.todaLaEscuelaGlobal")}</option>
                        {aulas.map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}

                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("mensajeria.titulo")}<input type="text" required
                      value={form.titulo}
                      onChange={(e) => setForm((f) => ({
                        ...f, titulo: e.target.value
                      }))}
                      placeholder={t("profesorCalendario.ejDiaDelMaestro")}
                      onInvalid={onInvalid}
                      onInput={onInput}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorCalendario.desde")}<input type="date" required
                        value={form.fechaInicio}
                        onChange={(e) => setForm((f) => ({
                          ...f, fechaInicio: e.target.value,
                          fechaFin: f.fechaFin < e.target.value
                            ? e.target.value : f.fechaFin,
                        }))}
                        onInvalid={onInvalid}
                        onInput={onInput}
                        className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorAulaConfiguracion.hasta")}<input type="date"
                        value={form.fechaFin}
                        min={form.fechaInicio}
                        onChange={(e) => setForm((f) => ({
                          ...f, fechaFin: e.target.value
                        }))}
                        className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("comun.descripcion")}<textarea rows={2}
                      value={form.descripcion}
                      onChange={(e) => setForm((f) => ({
                        ...f, descripcion: e.target.value
                      }))}
                      placeholder={t("profesorCalendario.opcional")}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>

                  <button type="submit"
                    disabled={
                      guardando ||
                      !form.titulo.trim() ||
                      !form.fechaInicio ||
                      (tab === "aula" && !form.aulaId)
                    }
                    className="w-full rounded-xl bg-[var(--c-primary)] py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    {guardando ? t("comun.guardando2") : t("profesorCalendario.guardarEvento")}
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

        {/* FIX-TEST4-CALENDARIO-EDIT — modal de edición. Reutiliza el
            mismo shape que el form de creación. Se monta solo cuando
            `editando` no es null. */}
        {editando && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="calendario-editar-titulo"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
            onClick={handleCerrarEditar}
          >
            <div
              className="w-full max-w-md rounded-xl bg-[var(--c-surface)] border border-[var(--c-border)] p-5 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                id="calendario-editar-titulo"
                className="text-base font-semibold text-[var(--c-text)]"
              >
                {t("profesorCalendario.editarEvento")} {editando.origen === "escuela" ? t("profesorCalendario.deEscuela") : t("profesorCalendario.delAula")}
              </h3>
              <form onSubmit={handleGuardarEdicion} className="mt-3 space-y-3">
                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("comun.tipo")}<select
                    value={editForm.tipo}
                    onChange={(e) => setEditForm((f) => ({
                      ...f, tipo: e.target.value as TipoEventoEscuela | TipoEventoAula,
                    }))}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  >
                    {(editando.origen === "escuela" ? TIPOS_ESCUELA : TIPOS_AULA).map((tv) => (
                      <option key={tv} value={tv}>
                        {TIPO_LABEL_KEY[tv] ? t(TIPO_LABEL_KEY[tv]) : (TIPO_CONFIG[tv]?.label ?? tv)}
                      </option>
                    ))}
                  </select>
                </label>

                {editando.origen === "escuela" && aulas.length > 0 && (
                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorCalendario.aplicarA")}<select
                      value={editForm.aulaId}
                      onChange={(e) => setEditForm((f) => ({
                        ...f, aulaId: e.target.value
                      }))}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    >
                      <option value="">{t("profesorCalendario.todaLaEscuelaGlobal")}</option>
                      {aulas.map((a) => (
                        <option key={a.id} value={a.id}>
                          {a.name}
                        </option>
                      ))}
                    </select>
                  </label>
                )}

                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("mensajeria.titulo")}<input type="text" required
                    value={editForm.titulo}
                    onChange={(e) => setEditForm((f) => ({
                      ...f, titulo: e.target.value
                    }))}
                    onInvalid={onInvalid}
                    onInput={onInput}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorCalendario.desde")}<input type="date" required
                      value={editForm.fechaInicio}
                      onChange={(e) => setEditForm((f) => ({
                        ...f, fechaInicio: e.target.value
                      }))}
                      onInvalid={onInvalid}
                      onInput={onInput}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>
                  <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorAulaConfiguracion.hasta")}<input type="date"
                      value={editForm.fechaFin}
                      onChange={(e) => setEditForm((f) => ({
                        ...f, fechaFin: e.target.value
                      }))}
                      className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("comun.descripcion")}<textarea rows={2}
                    value={editForm.descripcion}
                    onChange={(e) => setEditForm((f) => ({
                      ...f, descripcion: e.target.value
                    }))}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>

                <div className="flex justify-end gap-2 pt-2">
                  <button type="button"
                    onClick={handleCerrarEditar}
                    disabled={editGuardando}
                    className="rounded-lg border border-[var(--c-border)] px-3 py-1.5 text-xs font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors">{t("comun.cancelar")}</button>
                  <button type="submit"
                    disabled={editGuardando || !editForm.titulo.trim() || !editForm.fechaInicio}
                    className="rounded-lg bg-[var(--c-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity">
                    {editGuardando ? t("comun.guardando2") : t("comun.guardarCambios")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
  );
}
