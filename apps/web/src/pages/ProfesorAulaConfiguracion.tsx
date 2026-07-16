import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Classroom } from "../domain/classroom/classroom.types";
import { normalizeClassroomStatus } from "../domain/classroom/classroom.types";
import {
  fetchClassroomDetail,
  updateClassroom,
  fetchTitulares,
  fetchTitularesCandidatos,
  agregarTitular,
  quitarTitular,
  fetchPeriodos,
  crearPeriodo,
  eliminarPeriodo,
  type Titular,
  type Periodo,
} from "../services/aulas";
import { createActivity, deleteActivity, fetchUpcomingActivities, type UpcomingActivity } from "../services/actividades";
import { fetchClaseModulos, assignModulo, unassignModulo, type ClaseModuloItem } from "../services/clase-modulos";
import { apiGet } from "../lib/api";
import type { Module } from "../domain/module/module.types";
import { useI18n } from "../i18n/I18nContext";
import { makeValidityMessageHandlers } from "../lib/formValidationMessages";

type FormState = {
  name: string;
  description: string;
  accessType: Classroom["accessType"];
  status: Classroom["status"];
  institutionId: string;
  category: string;
  // FIX-CONFIG-CODIGO — el `classCode` es el código que el alumno
  // tipea para sumarse al aula. Antes el form no lo incluía (ni en
  // el GET, ni en el render, ni en el PUT), así que:
  //   - el docente no lo veía (bug 2.4 del informe de QA),
  //   - al guardar cambios, el `classCode` se borraba accidentalmente
  //     si el back interpretaba los campos no enviados como `null`
  //     (bug 2.1, hidratación parcial).
  // Ahora se muestra y se preserva en el round-trip.
  classCode: string;
  grade: string;
};

const buildInitialState = (classroom: Classroom): FormState => ({
  name: classroom.name,
  description: classroom.description ?? "",
  accessType: classroom.accessType,
  status: normalizeClassroomStatus(classroom.status) ?? "ACTIVE",
  institutionId: classroom.institutionId ?? "",
  category: classroom.category ?? "",
  // FIX-CLASSCODE-LEGACY — si el aula sólo tiene el `code` viejo
  // (backfill nunca corrió porque el guard exige AMBOS vacíos, ver
  // aulas.ts:360), mostrarlo igual: el back ya lo acepta para unirse.
  classCode: classroom.classCode ?? classroom.code ?? "",
  grade: (classroom as { grade?: string }).grade ?? "",
});

export default function ProfesorAulaConfiguracion() {
  const { t } = useI18n();
  const { onInvalid, onInput } = makeValidityMessageHandlers(t);
  // FIX-CONFIG: la ruta es `profesor/aulas/:aulaId` (router.tsx:282),
  // no `:id`. Antes se leía `id` (siempre undefined) y el `if (!id) return`
  // en el useEffect corría ANTES del `.finally(() => setIsLoading(false))`,
  // así que el spinner quedaba para siempre sin request a la red.
  const { aulaId } = useParams();
  const id = aulaId;
  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [form, setForm] = useState<FormState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [activities, setActivities] = useState<UpcomingActivity[]>([]);
  const [actForm, setActForm] = useState({
    tipo: "clase" as "clase" | "evaluacion" | "evento",
    titulo: "",
    descripcion: "",
    fecha: "",
  });
  const [actSaving, setActSaving] = useState(false);
  const [actError, setActError] = useState<string | null>(null);
  const [asignados, setAsignados] = useState<ClaseModuloItem[]>([]);
  const [todosModulos, setTodosModulos] = useState<Module[]>([]);
  const [moduloSearch, setModuloSearch] = useState("");
  const [moduloSaving, setModuloSaving] = useState(false);
  const [owner, setOwner] = useState<Titular | null>(null);
  const [coTitulares, setCoTitulares] = useState<Titular[]>([]);
  const [candidatos, setCandidatos] = useState<Titular[]>([]);
  const [candidatoSeleccionado, setCandidatoSeleccionado] = useState("");
  const [titularSaving, setTitularSaving] = useState(false);
  const [titularError, setTitularError] = useState<string | null>(null);
  const [periodos, setPeriodos] = useState<Periodo[]>([]);
  const [periodoForm, setPeriodoForm] = useState({ nombre: "", desde: "", hasta: "" });
  const [periodoSaving, setPeriodoSaving] = useState(false);
  const [periodoError, setPeriodoError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      // FIX-CONFIG: si el param falta, mostrar error claro y salir del
      // loading (si no, el spinner queda eterno).
      setIsLoading(false);
      setError("Falta el identificador del aula en la URL.");
      return;
    }
    let active = true;
    setIsLoading(true);
    setError(null);
    fetchClassroomDetail(id)
      .then((data) => {
        if (!active) return;
        setClassroom(data);
        setForm(buildInitialState(data));
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message || "No pudimos cargar la configuración del aula.");
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchUpcomingActivities(id).then(setActivities).catch(() => {});
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchClaseModulos(id).then(setAsignados).catch(() => {});
    apiGet<{ items: Module[] }>("/api/modulos")
      .then((data) => setTodosModulos(data.items))
      .catch(() => {});
  }, [id]);

  const reloadTitulares = (classroomId: string) => {
    fetchTitulares(classroomId)
      .then((data) => {
        setOwner(data.owner);
        setCoTitulares(data.coTitulares);
      })
      .catch(() => {});
    fetchTitularesCandidatos(classroomId)
      .then((data) => setCandidatos(data.items))
      .catch(() => {});
  };

  useEffect(() => {
    if (!id) return;
    reloadTitulares(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAgregarTitular = async () => {
    if (!id || !candidatoSeleccionado) return;
    setTitularSaving(true);
    setTitularError(null);
    try {
      await agregarTitular(id, candidatoSeleccionado);
      setCandidatoSeleccionado("");
      reloadTitulares(id);
    } catch (e) {
      setTitularError(e instanceof Error ? e.message : t("profesorAulaConfiguracion.noSePudoAgregarEl"));
    } finally {
      setTitularSaving(false);
    }
  };

  const handleQuitarTitular = async (userId: string) => {
    if (!id) return;
    setTitularSaving(true);
    setTitularError(null);
    try {
      await quitarTitular(id, userId);
      reloadTitulares(id);
    } catch (e) {
      setTitularError(e instanceof Error ? e.message : t("profesorAulaConfiguracion.noSePudoQuitarEl"));
    } finally {
      setTitularSaving(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchPeriodos(id).then((data) => setPeriodos(data.items)).catch(() => {});
  }, [id]);

  const handleCrearPeriodo = async () => {
    if (!id || !periodoForm.nombre.trim() || !periodoForm.desde || !periodoForm.hasta) return;
    setPeriodoSaving(true);
    setPeriodoError(null);
    try {
      await crearPeriodo(id, periodoForm);
      setPeriodoForm({ nombre: "", desde: "", hasta: "" });
      const data = await fetchPeriodos(id);
      setPeriodos(data.items);
    } catch (e) {
      setPeriodoError(e instanceof Error ? e.message : t("profesorAulaConfiguracion.noSePudoCrearEl"));
    } finally {
      setPeriodoSaving(false);
    }
  };

  const handleEliminarPeriodo = async (periodoId: string) => {
    if (!id) return;
    await eliminarPeriodo(id, periodoId);
    setPeriodos((prev) => prev.filter((p) => p.id !== periodoId));
  };

  const modulosDisponibles = todosModulos.filter((m) => {
    const yaAsignado = asignados.some((a) => a.moduloId === m.id);
    if (yaAsignado) return false;
    if (!moduloSearch.trim()) return true;
    return m.title.toLowerCase().includes(moduloSearch.toLowerCase()) ||
      (m.subject ?? "").toLowerCase().includes(moduloSearch.toLowerCase());
  });

  const handleAssign = async (moduloId: string) => {
    if (!id) return;
    setModuloSaving(true);
    try {
      await assignModulo(id, moduloId);
      const updated = await fetchClaseModulos(id);
      setAsignados(updated);
    } finally {
      setModuloSaving(false);
    }
  };

  const handleUnassign = async (moduloId: string) => {
    if (!id) return;
    await unassignModulo(id, moduloId);
    setAsignados((prev) => prev.filter((a) => a.moduloId !== moduloId));
  };

  const classroomTitle = useMemo(() => classroom?.name ?? "Aula", [classroom?.name]);

  const handleFieldChange = (field: keyof FormState, value: string) => {
    setForm((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleCreateActivity = async () => {
    if (!id || !actForm.titulo.trim() || !actForm.fecha) return;
    setActSaving(true);
    setActError(null);
    try {
      await createActivity({
        classroomId: id,
        tipo: actForm.tipo,
        titulo: actForm.titulo.trim(),
        descripcion: actForm.descripcion.trim() || undefined,
        fecha: actForm.fecha,
      });
      setActForm({ tipo: "clase", titulo: "", descripcion: "", fecha: "" });
      const updated = await fetchUpcomingActivities(id);
      setActivities(updated);
    } catch (e) {
      setActError(e instanceof Error ? e.message : t("profesorAulaConfiguracion.noSePudoCrearLa"));
    } finally {
      setActSaving(false);
    }
  };

  const handleDeleteActivity = async (actId: string) => {
    await deleteActivity(actId);
    setActivities((prev) => prev.filter((a) => a.id !== actId));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!id || !form) return;
    setIsSaving(true);
    setError(null);
    setSuccessMessage(null);
    try {
      await updateClassroom(id, {
        name: form.name,
        // FIX-AULA-DESCRIPCION-REQUIRED — `description` no se persiste (no
        // tiene columna en `Clase`) pero el schema del back sigue exigiendo
        // min(1) cuando la clave está presente (`.partial()` sólo afloja la
        // AUSENCIA de la clave, no la validación si viene ""). Omitirla
        // cuando está vacía evita el 400 al guardar cualquier aula existente.
        description: form.description || undefined,
        accessType: form.accessType,
        status: form.status,
        institutionId: form.institutionId || undefined,
        category: form.category || undefined,
        // FIX-CONFIG-CODIGO — preservamos el classCode en el round-trip.
        // Antes el form no lo incluía y un PUT sin `classCode` podía
        // borrarlo accidentalmente si el back interpretaba el campo
        // ausente como null. Ahora va explícito (incluso si está
        // vacío, para que el back lo persista como `""` y no como
        // null en un round-trip).
        classCode: form.classCode || undefined,
      });
      setClassroom((prev) =>
        prev
          ? {
              ...prev,
              name: form.name,
              description: form.description,
              accessType: form.accessType,
              status: form.status,
              institutionId: form.institutionId || undefined,
              category: form.category || undefined,
              classCode: form.classCode || undefined,
              updatedAt: new Date().toISOString(),
            }
          : prev
      );
      setSuccessMessage("Configuración guardada.");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(t("profesorAulaConfiguracion.noPudimosGuardarLaConfiguracion"));
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h1 className="text-xl font-semibold text-[var(--c-text)]">{classroomTitle}</h1>
            <p className="text-sm text-[var(--c-muted)] mt-0.5">{t("profesorAulaConfiguracion.ajustaElNombreDescripcionY")}</p>
          </div>
          {id && (
            <Link
              className="rounded-xl border border-[var(--c-border)] px-4 py-2 text-sm font-medium text-[var(--c-text)] hover:bg-[var(--c-bg)] transition-colors"
              to={`/aulas/${encodeURIComponent(id)}`}
            >{t("profesorAulaConfiguracion.volverAlAula")}</Link>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {[1,2,3].map(i => <div key={i} className="h-12 rounded-xl animate-pulse bg-[var(--c-border)]" />)}
          </div>
        ) : error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">{error}</div>
        ) : form ? (
          <>
          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--c-border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("profesorAulaConfiguracion.configuracionGeneral")}</p>
          </div>
          <form className="p-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">{t("profesorAulaConfiguracion.nombreDelAula")}<input
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.name}
                  onChange={(event) => handleFieldChange("name", event.target.value)}
                  required
                  onInvalid={onInvalid}
                  onInput={onInput}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">{t("comun.estado")}<select
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.status}
                  onChange={(event) => handleFieldChange("status", event.target.value)}
                >
                  <option value="ACTIVE">{t("profesorAulaConfiguracion.activa")}</option>
                  <option value="ARCHIVED">{t("profesorAulaConfiguracion.archivada")}</option>
                  <option value="LOCKED">{t("profesorAulaConfiguracion.bloqueada")}</option>
                </select>
              </label>
            </div>

            {/* FIX-AULA-DESCRIPCION-REQUIRED — `description` no tiene columna en
                `Clase` (no se persiste, ver schema.prisma) y el PUT usa
                `ClassroomPatchSchema` (todo opcional), así que exigirlo acá sólo
                bloqueaba "Guardar cambios" en cualquier aula existente (ninguna
                tiene descripción porque nunca se guarda). */}
            <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">{t("comun.descripcion")}<textarea
                className="min-h-[120px] rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                value={form.description}
                onChange={(event) => handleFieldChange("description", event.target.value)}
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">{t("enterpriseDashboard.tipoDeAcceso")}<select
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.accessType}
                  onChange={(event) => handleFieldChange("accessType", event.target.value)}
                >
                  <option value="publica">{t("comun.publica")}</option>
                  <option value="privada">{t("comun.privada")}</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">{t("profesorAulaConfiguracion.institucionOpcional")}<input
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.institutionId}
                  onChange={(event) => handleFieldChange("institutionId", event.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">{t("profesorAulaConfiguracion.categoriaOpcional")}<input
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.category}
                  onChange={(event) => handleFieldChange("category", event.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--c-text)]">{t("profesorAulaConfiguracion.cursoGrado")}<input
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={form.grade}
                  onChange={(event) => handleFieldChange("grade", event.target.value)}
                  placeholder={t("profesorAulaConfiguracion.ej5")}
                />
              </label>
            </div>

            {/* FIX-CONFIG-CODIGO — bloque destacado con el classCode
                y botón de copiar. Los alumnos tipean este código para
                sumarse al aula desde /unirse. */}
            <div className="rounded-xl border border-dashed border-[var(--c-border)] bg-[var(--c-bg)] p-4 flex flex-wrap items-center gap-3 md:col-span-2"
                 data-testid="config-classcode">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("profesorAulaConfiguracion.codigoDeClaseParaQue")}</p>
                <p className="text-2xl font-mono font-semibold text-[var(--c-text)] mt-1 select-all" data-testid="config-classcode-value">
                  {form.classCode || "Sin código asignado"}
                </p>
              </div>
              <button
                type="button"
                disabled={!form.classCode}
                data-testid="config-classcode-copy"
                onClick={async () => {
                  if (!form.classCode) return;
                  try {
                    await navigator.clipboard.writeText(form.classCode);
                  } catch {
                    /* fallback: el usuario puede seleccionar a mano */
                  }
                }}
                className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-1.5 text-xs font-medium text-[var(--c-primary)] hover:bg-[var(--c-primary-soft,#dbeafe)] disabled:opacity-50 transition-colors"
              >{t("profesorAulaConfiguracion.copiarCodigo")}</button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                className="rounded-xl bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60 transition-opacity"
                type="submit"
                disabled={isSaving}
              >
                {isSaving ? "Guardando..." : "Guardar cambios"}
              </button>
              {successMessage && <span className="text-sm text-emerald-600">{successMessage}</span>}
              {error && <span className="text-sm text-[var(--c-danger)]">{error}</span>}
            </div>
          </form>
          </div>

          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("hijosProgreso.proximasActividades")}</p>
            </div>
            <div className="p-4 space-y-3">

            {activities.length === 0 ? (
              <p className="text-sm text-[var(--c-muted)]">{t("profesorAulaConfiguracion.sinActividadesCargadas")}</p>
            ) : (
              <ul className="space-y-2">
                {activities.map((act) => (
                  <li key={act.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        act.tipo === "evaluacion"
                          ? "bg-amber-100 text-amber-700"
                          : act.tipo === "evento"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {act.tipo === "evaluacion" ? "📝 Evaluación"
                          : act.tipo === "evento" ? "📅 Evento"
                          : "📖 Clase"}
                      </span>
                      <span className="font-medium text-[var(--c-text)]">{act.label}</span>
                      <span className="text-[var(--c-muted)]">· {act.when}</span>
                    </div>
                    <button
                      type="button"
                      className="text-xs text-red-400 hover:text-red-600"
                      onClick={() => handleDeleteActivity(act.id)}
                    >{t("comun.eliminar")}</button>
                  </li>
                ))}
              </ul>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("comun.tipo")}<select
                  value={actForm.tipo}
                  onChange={(e) => setActForm((p) => ({
                    ...p, tipo: e.target.value as "clase" | "evaluacion" | "evento"
                  }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                >
                  <option value="clase">{t("profesorAulaConfiguracion.clase")}</option>
                  <option value="evaluacion">{t("profesorAulaConfiguracion.evaluacion")}</option>
                  <option value="evento">{t("profesorAulaConfiguracion.evento")}</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorAulaConfiguracion.fechaYHora")}<input
                  type="datetime-local"
                  value={actForm.fecha}
                  onChange={(e) => setActForm((p) => ({ ...p, fecha: e.target.value }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)] sm:col-span-2">{t("mensajeria.titulo")}<input
                  type="text"
                  placeholder={t("profesorAulaConfiguracion.ejClaseDeRepasoEvaluacion")}
                  value={actForm.titulo}
                  onChange={(e) => setActForm((p) => ({ ...p, titulo: e.target.value }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)] sm:col-span-2">{t("comun.descripcionOpcional")}<textarea
                  rows={2}
                  placeholder={t("profesorAulaConfiguracion.detalleAdicional")}
                  value={actForm.descripcion}
                  onChange={(e) => setActForm((p) => ({ ...p, descripcion: e.target.value }))}
                  className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                />
              </label>
            </div>

            {actError && (
              <p className="text-xs text-[var(--c-danger)]">{actError}</p>
            )}

            <button
              type="button"
              disabled={actSaving || !actForm.titulo.trim() || !actForm.fecha}
              onClick={handleCreateActivity}
              className="rounded-xl bg-[var(--c-primary)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-colors"
            >
              {actSaving ? "Guardando..." : "+ Agregar actividad"}
            </button>
            </div>
          </section>

          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("profesorAulaConfiguracion.modulosAsignados")}</p>
            </div>
            <div className="p-4 space-y-3">

            {asignados.length === 0 ? (
              <p className="text-sm text-[var(--c-muted)]">{t("profesorAulaConfiguracion.sinModulosAsignados")}</p>
            ) : (
              <ul className="space-y-2">
                {asignados.map((item) => {
                  const modulo = todosModulos.find((m) => m.id === item.moduloId);
                  return (
                    <li key={item.moduloId}
                      className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm">
                      <div>
                        <span className="font-medium text-[var(--c-text)]">
                          {modulo?.title ?? item.moduloId}
                        </span>
                        {modulo?.subject && (
                          <span className="ml-2 text-xs text-[var(--c-muted)]">
                            {modulo.subject}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        className="text-xs text-red-400 hover:text-red-600"
                        onClick={() => handleUnassign(item.moduloId)}
                      >{t("comun.quitar")}</button>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="space-y-2">
              <input
                type="search"
                placeholder={t("profesorAulaConfiguracion.buscarModuloParaAsignar")}
                value={moduloSearch}
                onChange={(e) => setModuloSearch(e.target.value)}
                className="w-full rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
              />
              {moduloSearch.trim() && (
                <ul className="max-h-48 overflow-y-auto rounded-lg border border-[var(--c-border)] divide-y divide-[var(--c-border)]">
                  {modulosDisponibles.length === 0 ? (
                    <li className="px-3 py-2 text-sm text-[var(--c-muted)]">{t("profesorAulaConfiguracion.sinResultados")}</li>
                  ) : (
                    modulosDisponibles.slice(0, 10).map((m) => (
                      <li key={m.id}
                        className="flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-[var(--c-bg)]">
                        <div>
                          <span className="font-medium text-[var(--c-text)]">{m.title}</span>
                          {m.subject && (
                            <span className="ml-2 text-xs text-[var(--c-muted)]">{m.subject}</span>
                          )}
                        </div>
                        <button
                          type="button"
                          disabled={moduloSaving}
                          className="text-xs font-semibold text-[var(--c-primary)] hover:underline disabled:opacity-50"
                          onClick={() => handleAssign(m.id)}
                        >{t("profesorAulaConfiguracion.asignar")}</button>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
            </div>
          </section>

          {/* PLAN-U §6 — co-titulares: "2 profesores, o 1 profesor + 1
              directivo" dueños de la misma aula. El dueño original nunca
              se quita acá. */}
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("profesorAulaConfiguracion.coTitulares")}</p>
            </div>
            <div className="p-4 space-y-3">
              <ul className="space-y-2">
                {owner && (
                  <li className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm">
                    <span className="font-medium text-[var(--c-text)]">{owner.name}</span>
                    <span className="text-xs text-[var(--c-muted)]">{t("profesorAulaConfiguracion.titularOriginal")}</span>
                  </li>
                )}
                {coTitulares.map((ct) => (
                  <li key={ct.id} className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm">
                    <div>
                      <span className="font-medium text-[var(--c-text)]">{ct.name}</span>
                      <span className="ml-2 text-xs text-[var(--c-muted)]">{ct.role}</span>
                    </div>
                    <button
                      type="button"
                      disabled={titularSaving}
                      className="text-xs text-red-400 hover:text-red-600 disabled:opacity-50"
                      onClick={() => handleQuitarTitular(ct.id)}
                    >{t("comun.quitar")}</button>
                  </li>
                ))}
              </ul>

              {coTitulares.length === 0 && candidatos.length > 0 && (
                <div className="flex items-center gap-2">
                  <select
                    value={candidatoSeleccionado}
                    onChange={(e) => setCandidatoSeleccionado(e.target.value)}
                    className="flex-1 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  >
                    <option value="">{t("profesorAulaConfiguracion.elegirDocenteDirectivoDeLa")}</option>
                    {candidatos.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.role})
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    disabled={titularSaving || !candidatoSeleccionado}
                    onClick={handleAgregarTitular}
                    className="rounded-lg bg-[var(--c-primary)] px-3 py-2 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
                  >{t("profesorAulaConfiguracion.agregarCoTitular")}</button>
                </div>
              )}
              {coTitulares.length === 0 && candidatos.length === 0 && (
                <p className="text-sm text-[var(--c-muted)]">{t("profesorAulaConfiguracion.noHayDocentesODirectivos")}</p>
              )}
              {titularError && <p className="text-xs text-[var(--c-danger)]">{titularError}</p>}
            </div>
          </section>

          {/* PLAN-V §1 — períodos académicos EN el aula (no un motor de
              calendario global): lista libre y ordenada de nombre+rango
              de fechas. La agregación de notas por período es otro sprint. */}
          <section className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--c-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-muted)]">{t("profesorAulaConfiguracion.periodosAcademicos")}</p>
            </div>
            <div className="p-4 space-y-3">
              {periodos.length === 0 ? (
                <p className="text-sm text-[var(--c-muted)]">{t("profesorAulaConfiguracion.sinPeriodosCargadosEj1er")}</p>
              ) : (
                <ul className="space-y-2">
                  {periodos.map((p) => (
                    <li key={p.id} className="flex items-center justify-between gap-3 rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm">
                      <div>
                        <span className="font-medium text-[var(--c-text)]">{p.nombre}</span>
                        <span className="ml-2 text-xs text-[var(--c-muted)]">{p.desde} → {p.hasta}</span>
                      </div>
                      <button
                        type="button"
                        className="text-xs text-red-400 hover:text-red-600"
                        onClick={() => handleEliminarPeriodo(p.id)}
                      >{t("comun.quitar")}</button>
                    </li>
                  ))}
                </ul>
              )}

              <div className="grid gap-2 sm:grid-cols-[2fr_1fr_1fr_auto] items-end">
                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("comun.nombre")}<input
                    type="text"
                    placeholder={t("profesorAulaConfiguracion.ej1erBimestre")}
                    value={periodoForm.nombre}
                    onChange={(e) => setPeriodoForm((f) => ({ ...f, nombre: e.target.value }))}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorAulaConfiguracion.desde")}<input
                    type="date"
                    value={periodoForm.desde}
                    onChange={(e) => setPeriodoForm((f) => ({ ...f, desde: e.target.value }))}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <label className="flex flex-col gap-1 text-xs font-medium text-[var(--c-text)]">{t("profesorAulaConfiguracion.hasta")}<input
                    type="date"
                    value={periodoForm.hasta}
                    onChange={(e) => setPeriodoForm((f) => ({ ...f, hasta: e.target.value }))}
                    className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  />
                </label>
                <button
                  type="button"
                  disabled={periodoSaving || !periodoForm.nombre.trim() || !periodoForm.desde || !periodoForm.hasta}
                  onClick={handleCrearPeriodo}
                  className="rounded-lg bg-[var(--c-primary)] px-3 py-2 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
                >{t("profesorAulaConfiguracion.agregar")}</button>
              </div>
              {periodoError && <p className="text-xs text-[var(--c-danger)]">{periodoError}</p>}
            </div>
          </section>
          </>
        ) : (
          <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 text-sm text-[var(--c-muted)]">{t("profesorAulaConfiguracion.noEncontramosElAulaSolicitada")}</div>
        )}
      </div>
  );
}
