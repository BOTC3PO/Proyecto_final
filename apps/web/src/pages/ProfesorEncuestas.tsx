import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import type { Survey, SurveyStatus, SurveyType } from "../services/encuestas";
import {
  createSurvey,
  deleteSurvey,
  fetchSurveys,
  updateSurvey
} from "../services/encuestas";
import { fetchClassrooms } from "../services/aulas";
import type { Classroom } from "../domain/classroom/classroom.types";
import { getAulaId } from "../lib/aula-id";
import { useI18n } from "../i18n/I18nContext";
import { makeValidityMessageHandlers } from "../lib/formValidationMessages";

// Issue #661 — /api/encuestas/defaults nunca existió en el backend;
// dos opciones en blanco de arranque, mismo nombre que handleAddOption.
const DEFAULT_SURVEY_OPTIONS = ["Opción 1", "Opción 2"];

const toLocalInputValue = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

export default function ProfesorEncuestas() {
  const { t } = useI18n();
  const { onInvalid, onInput } = makeValidityMessageHandlers(t);
  // PLAN-H §3: llegar con ?aulaId=... (desde AulaActionsBar) fija el aula
  // y esconde el selector — crear/listar queda scopeado a esa aula sin
  // que el docente pueda elegir otra por error.
  const location = useLocation();
  const lockedAulaId = useMemo(
    () => new URLSearchParams(location.search).get("aulaId"),
    [location.search]
  );
  const [items, setItems] = useState<Survey[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [classroomId, setClassroomId] = useState(lockedAulaId ?? "");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<SurveyType>("normal");
  const [startAt, setStartAt] = useState(toLocalInputValue(new Date()));
  const [endAt, setEndAt] = useState(toLocalInputValue(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)));
  const [showResultsBeforeClose, setShowResultsBeforeClose] = useState(false);
  const [showResultsRealtime, setShowResultsRealtime] = useState(false);
  const [status, setStatus] = useState<SurveyStatus>("activa");
  const [maxOptions, setMaxOptions] = useState<number | "">("");
  const [options, setOptions] = useState<string[]>(DEFAULT_SURVEY_OPTIONS);

  const canSubmit = useMemo(() => {
    return (
      classroomId.trim().length > 0 &&
      title.trim().length > 0 &&
      description.trim().length > 0 &&
      options.filter((option) => option.trim().length > 0).length >= 2 &&
      startAt.length > 0 &&
      endAt.length > 0
    );
  }, [title, description, options, startAt, endAt]);

  const refresh = async (targetClassroomId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchSurveys(targetClassroomId);
      setItems(response.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("profesorEncuestas.noSePudieronCargarLas"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const response = await fetchClassrooms();
        setClassrooms(response.items);
        if (response.items.length > 0) {
          setClassroomId((prev) => prev || getAulaId(response.items[0]));
        } else {
          setItems([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : t("profesorEncuestas.noSePudieronCargarLas2"));
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (classroomId) {
      refresh(classroomId);
    }
  }, [classroomId]);

  const handleOptionChange = (index: number, value: string) => {
    setOptions((prev) => prev.map((option, idx) => (idx === index ? value : option)));
  };

  const handleAddOption = () => {
    setOptions((prev) => [...prev, `Opción ${prev.length + 1}`]);
  };

  const handleRemoveOption = (index: number) => {
    setOptions((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setError("Completa los campos obligatorios y agrega al menos 2 opciones.");
      return;
    }

    try {
      setError(null);
      const now = new Date().toISOString();
      const selectedClassroom = classrooms.find((item) => getAulaId(item) === classroomId);
      const payload: Survey = {
        id: crypto.randomUUID(),
        title: title.trim(),
        description: description.trim(),
        classroomId,
        classroomName: selectedClassroom?.name,
        type,
        options: options
          .map((option, index) => ({ id: `opt-${index + 1}`, label: option.trim() }))
          .filter((option) => option.label.length > 0),
        maxOptions: maxOptions === "" ? undefined : maxOptions,
        startAt: new Date(startAt).toISOString(),
        endAt: new Date(endAt).toISOString(),
        showResultsBeforeClose,
        showResultsRealtime,
        status,
        responsesCount: 0,
        createdBy: "profesor-demo",
        createdAt: now,
        updatedAt: now
      };

      await createSurvey(payload);
      setTitle("");
      setDescription("");
      setType("normal");
      setStartAt(toLocalInputValue(new Date()));
      setEndAt(toLocalInputValue(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)));
      setShowResultsBeforeClose(false);
      setShowResultsRealtime(false);
      setStatus("activa");
      setMaxOptions("");
      setOptions(DEFAULT_SURVEY_OPTIONS);
      await refresh(classroomId);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("profesorEncuestas.noSePudoCrearLa"));
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm(t("profesorEncuestas.seguroQueDeseasEliminarEsta"))) return;
    try {
      setError(null);
      await deleteSurvey(id);
      await refresh(classroomId);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("profesorEncuestas.noSePudoEliminarLa"));
    }
  };

  const handleClose = async (id: string) => {
    try {
      setError(null);
      await updateSurvey(id, { status: "cerrada" });
      await refresh(classroomId);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("profesorEncuestas.noSePudoCerrarLa"));
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-5">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">{t("dropdown.encuestas")}</h1>
          <p className="text-[var(--c-muted)]">{t("profesorEncuestas.creaYGestionaEncuestasPara")}</p>
        </header>

        <section className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[var(--c-text)]">{t("profesorEncuestas.crearEncuesta")}</h2>
          <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-classroom">{t("comun.aula")}</label>
              {lockedAulaId ? (
                <p
                  id="survey-classroom"
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-sm text-[var(--c-text)]"
                >
                  {classrooms.find((classroom) => getAulaId(classroom) === lockedAulaId)?.name ?? lockedAulaId}
                </p>
              ) : (
              <select
                id="survey-classroom"
                className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                value={classroomId}
                onChange={(event) => setClassroomId(event.target.value)}
                required
                onInvalid={onInvalid}
                onInput={onInput}
              >
                <option value="" disabled>{t("profesorEncuestas.seleccionaUnAula")}</option>
                {classrooms.map((classroom) => (
                  <option key={getAulaId(classroom)} value={getAulaId(classroom)}>
                    {classroom.name}
                  </option>
                ))}
              </select>
              )}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-title">{t("comun.titulo")}</label>
              <input
                id="survey-title"
                className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder={t("profesorEncuestas.ejEleccionDeProyectoFinal")}
                required
                onInvalid={onInvalid}
                onInput={onInput}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-description">{t("comun.descripcion")}</label>
              <textarea
                id="survey-description"
                className="min-h-[96px] rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder={t("profesorEncuestas.explicaATusAlumnosComo")}
                required
                onInvalid={onInvalid}
                onInput={onInput}
              />
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-type">{t("profesorEncuestas.tipoDeEncuesta")}</label>
                <select
                  id="survey-type"
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={type}
                  onChange={(event) => setType(event.target.value as SurveyType)}
                >
                  <option value="normal">{t("profesorEncuestas.encuestaNormal")}</option>
                  <option value="puntuacion">{t("profesorEncuestas.encuestaPorPuntuacion")}</option>
                  <option value="segunda_vuelta">{t("profesorEncuestas.segundaVueltaInstantanea")}</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-status">{t("profesorEncuestas.estadoInicial")}</label>
                <select
                  id="survey-status"
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={status}
                  onChange={(event) => setStatus(event.target.value as SurveyStatus)}
                >
                  <option value="activa">{t("profesorAulaConfiguracion.activa")}</option>
                  <option value="borrador">{t("profesorEncuestas.borrador")}</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-max-options">{t("profesorEncuestas.maximoDeOpcionesOpcional")}</label>
                <input
                  id="survey-max-options"
                  type="number"
                  min={2}
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={maxOptions}
                  onChange={(event) =>
                    setMaxOptions(event.target.value === "" ? "" : Number(event.target.value))
                  }
                  placeholder={t("profesorEncuestas.ej6")}
                />
              </div>
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-start">{t("profesorEncuestas.fechaInicio")}</label>
                <input
                  id="survey-start"
                  type="datetime-local"
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={startAt}
                  onChange={(event) => setStartAt(event.target.value)}
                  required
                  onInvalid={onInvalid}
                  onInput={onInput}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[var(--c-text)]" htmlFor="survey-end">{t("profesorEncuestas.fechaFin")}</label>
                <input
                  id="survey-end"
                  type="datetime-local"
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  value={endAt}
                  onChange={(event) => setEndAt(event.target.value)}
                  required
                  onInvalid={onInvalid}
                  onInput={onInput}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <span className="text-sm font-medium text-[var(--c-text)]">{t("profesorEncuestas.opcionesDeRespuesta")}</span>
              <div className="space-y-2">
                {options.map((option, index) => (
                  <div key={`option-${index}`} className="flex gap-2">
                    <input
                      className="flex-1 rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                      value={option}
                      onChange={(event) => handleOptionChange(index, event.target.value)}
                      placeholder={`${t("profesorEncuestas.opcion")} ${index + 1}`}
                      required
                      onInvalid={onInvalid}
                      onInput={onInput}
                    />
                    {options.length > 2 && (
                      <button
                        type="button"
                        className="rounded-md border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)]"
                        onClick={() => handleRemoveOption(index)}
                      >{t("comun.quitar")}</button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="w-fit rounded-md border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-primary)] hover:bg-[var(--c-bg)]"
                onClick={handleAddOption}
              >{t("profesorEncuestas.agregarOpcion")}</button>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <label className="flex items-center gap-2 text-sm text-[var(--c-text)]">
                <input
                  type="checkbox"
                  checked={showResultsRealtime}
                  onChange={(event) => setShowResultsRealtime(event.target.checked)}
                />{t("profesorEncuestas.resultadosEnTiempoReal")}</label>
              <label className="flex items-center gap-2 text-sm text-[var(--c-text)]">
                <input
                  type="checkbox"
                  checked={showResultsBeforeClose}
                  onChange={(event) => setShowResultsBeforeClose(event.target.checked)}
                />{t("profesorEncuestas.mostrarResultadosAntesDelCierre")}</label>
            </div>

            {error && <p className="text-sm text-[var(--c-danger)]">{error}</p>}

            <button
              type="submit"
              className="rounded-md bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!canSubmit}
            >{t("profesorEncuestas.guardarEncuesta")}</button>
          </form>
        </section>

        <section className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[var(--c-text)]">{t("profesorEncuestas.encuestasCreadas")}</h2>
            <button
              type="button"
              className="rounded-md border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-text)] hover:bg-[var(--c-bg)]"
              onClick={() => refresh(classroomId)}
            >{t("alumnoEncuestas.actualizar")}</button>
          </div>
          {isLoading ? (
            <p className="mt-4 text-sm text-[var(--c-muted)]">{t("profesorEncuestas.cargandoEncuestas")}</p>
          ) : items.length === 0 ? (
            <p className="mt-4 text-sm text-[var(--c-muted)]">{t("profesorEncuestas.aunNoHayEncuestasCreadas")}</p>
          ) : (
            <div className="mt-4 space-y-3">
              {items.map((survey) => (
                <article
                  key={survey.id}
                  className="flex flex-col gap-2 rounded-md border border-[var(--c-border)] p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--c-text)]">{survey.title}</h3>
                    <p className="text-sm text-[var(--c-muted)]">{survey.description}</p>
                    <p className="text-xs text-[var(--c-muted)]">
                      Aula: {survey.classroomName ?? survey.classroomId} · Tipo: {survey.type.replace("_", " ")} ·
                      Opciones: {survey.options.length} · Estado: {survey.status}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    {survey.status !== "cerrada" && (
                      <button
                        type="button"
                        className="rounded-md border border-[var(--c-border)] px-3 py-2 text-sm text-[var(--c-primary)] hover:bg-[var(--c-bg)]"
                        onClick={() => handleClose(survey.id)}
                      >{t("comun.cerrar")}</button>
                    )}
                    <button
                      type="button"
                      className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                      onClick={() => handleDelete(survey.id)}
                    >{t("comun.eliminar")}</button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
  );
}
